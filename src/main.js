import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { World } from './world.js';
import { Effects } from './effects.js';
import { SoundEngine } from './audio.js';
import { Player } from './player.js';
import { Weapon } from './weapon.js';
import { EnemyManager } from './enemy.js';
import { HUD } from './hud.js';
import { Input } from './input.js';
import { UI, loadSettings, saveSettings } from './ui.js';

const settings = loadSettings();
const isCoarse = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const isSmall = window.innerWidth < 820;
const mobileMode = isCoarse || isSmall;

const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.id = 'game-canvas';
app.appendChild(canvas);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance',
    stencil: false,
    alpha: false,
    depth: true,
  });
} catch (err) {
  document.getElementById('fatal').classList.remove('hidden');
  document.getElementById('fatal-msg').textContent =
    'This experience requires WebGL 2. Enable hardware acceleration or try a modern browser.';
  throw err;
}

const pixelRatio = Math.min(window.devicePixelRatio || 1, mobileMode ? 1.5 : 2);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;
renderer.shadowMap.enabled = settings.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a141b, mobileMode ? 0.013 : 0.0145);

const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.05, 320);
camera.position.set(0, 4, 20);
scene.add(camera);

// Separate view-model scene: keeps the weapon crisp and correctly lit without
// the world flashlight blowing out the near-field geometry.
const viewScene = new THREE.Scene();
const viewCamera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.01, 6);
viewScene.add(viewCamera);
viewScene.environment = scene.environment;
viewScene.environmentIntensity = 0.55;

const world = new World(scene, renderer);
const effects = new Effects(scene);
const audio = new SoundEngine();
const player = new Player(camera, world, settings);
const weapon = new Weapon(viewCamera, world, effects, audio, {}, camera);

const viewKey = new THREE.DirectionalLight(0xffe0bc, 3.6);
viewKey.position.set(-1.1, 2.4, 2.2);
viewScene.add(viewKey);
const viewRim = new THREE.DirectionalLight(0x6fc4ff, 3.2);
viewRim.position.set(2.6, 0.2, -2.4);
viewScene.add(viewRim);
const viewFill = new THREE.HemisphereLight(0xb7d2e2, 0x2c2418, 1.15);
viewScene.add(viewFill);
const viewBounce = new THREE.PointLight(0xffb070, 1.6, 3, 2);
viewBounce.position.set(-0.7, 0.25, 0.9);
viewScene.add(viewBounce);
const viewFront = new THREE.PointLight(0xbfe4ff, 0.8, 2.4, 2);
viewFront.position.set(0.5, -0.2, 0.3);
viewScene.add(viewFront);
const hud = new HUD();

let input;
let ui;
let enemies;

const state = {
  mode: 'menu',
  wave: 0,
  score: 0,
  kills: 0,
  combo: 0,
  comboTimer: 0,
  breakTimer: 0,
  deathTimer: -1,
  time: 0,
  lastHostiles: -1,
};

weapon.group.visible = false;
weapon.flashlight.visible = false;

const EnemyCallbacks = {
  getPlayerPos: () => player.position,
  onPlayerDamage: () => {},
  onPickup: (type, pos) => {
    if (type === 'health') {
      player.heal(38);
      hud.addPickup('+38 VITALS', '#6dffb0');
      hud.setHealth(player.health, player.armor);
    } else {
      weapon.addAmmo(65);
      hud.addPickup('+65 ROUNDS', '#ffc46a');
    }
    audio.pickup();
    effects.glow.spawn(pos.x, pos.y, pos.z, 0, 1, 0, 1.2, 0.35, new THREE.Color(type === 'health' ? 0x6dffb0 : 0xffc46a), 0.9);
  },
  onSpawn: () => {},
};

enemies = new EnemyManager(scene, world, effects, audio, EnemyCallbacks);

player.onHealthChange = (hp, armor) => hud.setHealth(hp, armor);
player.onDamage = (amount, fromPos) => hud.damage(amount, fromPos, player);
player.onFootstep = (run, scale) => audio.footstep(run, scale);
player.onDeath = () => {
  state.deathTimer = 1.35;
  input.enabled = false;
  input.releaseLock();
  document.body.classList.remove('playing');
};

weapon.callbacks = {
  onAmmo: (ammo, reserve, reloading, progress) => hud.setAmmo(ammo, reserve, reloading, progress),
  onReloadProgress: (p) => hud.setReloadProgress(p),
  onSpread: (spread, ads) => hud.setSpread(spread, ads),
  onHit: ({ head, kill, enemy, point, damage }) => {
    hud.hit(head, kill);
    hud.addDamageNumber(point, damage, head, camera);
    if (state.comboTimer > 0) state.comboTimer = Math.min(5, state.comboTimer + 0.35);
  },
  onKill: (enemy, head) => {
    state.kills++;
    state.combo = state.comboTimer > 0 ? state.combo + 1 : 1;
    state.comboTimer = 4.2;
    const mult = 1 + Math.min(10, Math.max(0, state.combo - 1)) * 0.1;
    const pts = Math.round(enemy.score * mult * (head ? 1.35 : 1));
    state.score += pts;
    hud.setScore(state.score, state.combo, state.comboTimer);
    hud.addKill(enemy.cfg.name, head, pts);
    enemies.dropPickup(enemy.position);
  },
  onMiss: () => {},
};

input = new Input({
  canvas,
  stickZone: document.getElementById('stick-zone'),
  stickKnob: document.getElementById('stick-knob'),
  lookZone: document.getElementById('look-zone'),
  buttons: {
    fire: document.getElementById('m-fire'),
    ads: document.getElementById('m-ads'),
    reload: document.getElementById('m-reload'),
    jump: document.getElementById('m-jump'),
    sprint: document.getElementById('m-sprint'),
    sprintEl: document.getElementById('m-sprint'),
    tilt: document.getElementById('m-tilt'),
    tiltEl: document.getElementById('m-tilt'),
    reloadFn: () => weapon.startReload(),
    onTiltChange: (on) => {
      ui.setToggle('tilt', on);
      if (settings.tilt !== on) {
        settings.tilt = on;
        saveSettings(settings);
      }
    },
    onTiltMessage: (msg) => hud.addPickup(msg, '#ffb02e'),
  },
});
input.buttons.reload = () => weapon.startReload();
input.buttons.jump = () => {};
input.buttons.fire = document.getElementById('m-fire');
input.buttons.ads = document.getElementById('m-ads');
input.buttons.sprintEl = document.getElementById('m-sprint');
input.buttons.tiltEl = document.getElementById('m-tilt');
input.buttons.fireDown = () => {};
input.buttons.fireUp = () => {};
input.buttons.adsDown = () => {};
input.buttons.adsUp = () => {};
input.onFirstInteract = () => audio.init();
input.onLockChange = (locked) => {
  if (!locked && state.mode === 'playing' && !input.touch && !input.allowUnlocked) {
    pauseGame();
  }
};

ui = new UI(settings, {
  onDeploy: () => startMission(),
  onResume: () => resumeGame(),
  onAbort: () => toMenu(),
  onRetry: () => startMission(),
  onMenu: () => toMenu(),
  onTiltRequest: () => input.setTilt(true),
  onTiltChange: (on) => {
    if (on) input.setTilt(true);
    else {
      input.tilt.wanted = false;
      input.buttons.tiltEl?.classList.remove('on');
    }
  },
  onSettingsChange: (s) => {
    player.baseFov = s.fov;
    player.settings = s;
    audio.setVolume(s.volume);
    renderer.shadowMap.enabled = s.shadows;
    world.setQuality(s.shadows ? 'high' : 'low');
    usePost = s.postfx;
    gradePass.enabled = s.postfx;
    bloomPass.enabled = s.postfx;
    if (s.postfx) {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
    }
    if (state.mode === 'playing' && Math.abs(camera.fov - (player.ads ? s.fov * 0.74 : s.fov)) > 20) {
      player.currentFov = camera.fov;
    }
  },
  isTouch: () => mobileMode,
  onSettingsClose: () => {
    if (state.mode === 'paused') ui.showPause();
  },
});
input.buttons.onTiltChange = (on) => {
  ui.setToggle('tilt', on);
  settings.tilt = on;
  saveSettings(settings);
};
input.buttons.onTiltMessage = (msg) => hud.addPickup(msg, '#ffb02e');
ui.setGpuLabel(renderer.capabilities.isWebGL2 ? 'WEBGL 2' : 'WEBGL');
if (settings.tilt && mobileMode) setTimeout(() => input.setTilt(true), 300);

// ---------------- post-processing ----------------
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uAberration: { value: 0.85 },
    uVignette: { value: 1 },
    uGrain: { value: 0.018 },
    uEnabled: { value: 1 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAberration;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uEnabled;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      vec2 d = uv - 0.5;
      float r2 = dot(d, d);
      float ab = 0.0022 * uAberration * (0.25 + r2 * 2.2);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + d * ab).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - d * ab).b;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.07);
      col *= vec3(1.02, 1.0, 0.975);
      col += vec3(0.008, 0.014, 0.024) * (1.0 - smoothstep(0.0, 0.55, l));
      col = mix(col, col * vec3(1.08, 1.0, 0.9), smoothstep(0.5, 1.0, l) * 0.7);
      col = (col - 0.5) * 1.05 + 0.5;
      float vig = smoothstep(0.92, 0.28, length(d) * 1.22);
      col *= mix(1.0, vig, uVignette);
      float n = hash(uv * vec2(1024.0, 768.0) + fract(uTime) * 91.7);
      col += (n - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `,
};

const composer = new EffectComposer(renderer);
composer.setPixelRatio(pixelRatio);
composer.setSize(window.innerWidth, window.innerHeight);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), mobileMode ? 0.42 : 0.58, 0.55, 0.82);
composer.addPass(bloomPass);

const gradePass = new ShaderPass(GradeShader);
composer.addPass(gradePass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight);
composer.addPass(smaaPass);

let usePost = settings.postfx;
gradePass.enabled = usePost;
bloomPass.enabled = usePost;

// ---------------- state transitions ----------------
function startMission() {
  if (state.mode === 'menu' || state.mode === 'over' || state.mode === 'paused') {
    ui.hideGameOver();
    ui.hidePause();
    ui.showGame();
    hud.show();
    hud.setMobile(mobileMode);
    document.body.classList.add('playing');
    state.mode = 'playing';
    state.wave = 0;
    state.score = 0;
    state.kills = 0;
    state.combo = 0;
    state.comboTimer = 0;
    state.breakTimer = 0;
    state.deathTimer = -1;
    state.lastHostiles = -1;
    enemies.reset();
    weapon.reset();
    player.reset(new THREE.Vector3(0, 0, 24), 0);
    player.baseFov = settings.fov;
    player.currentFov = settings.fov;
    camera.fov = settings.fov;
    camera.updateProjectionMatrix();
    hud.setScore(0, 0, 0);
    hud.setAmmo(30, 180, false, 0);
    hud.setObjective('ELIMINATE HOSTILES', 'WAVE 1 / 10');
    hud.showWave('WAVE 1', 'INCOMING');
    weapon.group.visible = true;
    weapon.flashlight.visible = true;
    input.enabled = true;
    input.reset();
    audio.init();
    audio.setVolume(settings.volume);
    audio.wave();
    if (!mobileMode) input.requestLock();
    state.breakTimer = 0.8;
    state.mode = 'playing';
    beginWave(1, true);
  }
}

function beginWave(n, quiet = false) {
  state.wave = n;
  enemies.beginWave(n);
  hud.setObjective('ELIMINATE HOSTILES', `WAVE ${n} / 10`);
  if (!quiet) {
    hud.showWave(`WAVE ${n}`, n === 10 ? 'FINAL WAVE' : 'INCOMING');
    audio.wave();
  }
  state.breakTimer = 0;
}

function onWaveCleared() {
  enemies.active = false;
  if (state.wave >= 10) {
    state.score += 2500;
    hud.setScore(state.score, state.combo, state.comboTimer);
    hud.showWave('MISSION COMPLETE', 'EXFIL');
    setTimeout(() => endMission(true), 1400);
    return;
  }
  player.heal(24);
  weapon.addAmmo(45);
  hud.showWave('WAVE CLEARED', 'REGROUP');
  hud.setObjective('REGROUP', `NEXT WAVE IN 7`);
  state.breakTimer = 7;
  audio.wave();
}

function endMission(win) {
  if (state.mode === 'over') return;
  state.mode = 'over';
  input.enabled = false;
  input.releaseLock();
  document.body.classList.remove('playing');
  const acc = weapon.shots > 0 ? Math.round((weapon.hits / weapon.shots) * 100) : 0;
  hud.hide();
  ui.showGameOver({
    win,
    wave: state.wave,
    kills: state.kills,
    score: state.score,
    accuracy: acc,
  });
  weapon.group.visible = false;
  weapon.flashlight.visible = false;
}

function pauseGame() {
  if (state.mode !== 'playing') return;
  state.mode = 'paused';
  input.enabled = false;
  input.reset();
  input.releaseLock();
  document.body.classList.remove('playing');
  ui.showPause();
  document.getElementById('mobile').classList.add('hidden');
}

function resumeGame() {
  if (state.mode !== 'paused') return;
  state.mode = 'playing';
  ui.hidePause();
  input.enabled = true;
  input.reset();
  document.body.classList.add('playing');
  if (mobileMode) document.getElementById('mobile').classList.remove('hidden');
  else input.requestLock();
}

function toMenu() {
  state.mode = 'menu';
  input.enabled = false;
  input.reset();
  input.releaseLock();
  enemies.reset();
  document.body.classList.remove('playing');
  ui.showMenu();
  ui.hideGameOver();
  hud.hide();
  hud.setMobile(false);
  weapon.group.visible = false;
  weapon.flashlight.visible = false;
  camera.fov = settings.fov;
  camera.updateProjectionMatrix();
  state.deathTimer = -1;
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    if (state.mode === 'playing') pauseGame();
    else if (state.mode === 'paused') resumeGame();
  }
  if (e.code === 'Enter' && state.mode === 'menu') {
    const panels = ['briefing', 'settings'].some((id) => !document.getElementById(id).classList.contains('hidden'));
    if (!panels) startMission();
  }
  if (e.code === 'KeyF' && state.mode === 'playing') {
    weapon.flashlightOn = !weapon.flashlightOn;
    weapon.flashlight.visible = weapon.flashlightOn;
  }
});

// ---------------- resize ----------------
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  viewCamera.aspect = w / h;
  viewCamera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloomPass.setSize(w / 2, h / 2);
  smaaPass.setSize(w, h);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', () => setTimeout(onResize, 300));

// ---------------- loading / boot ----------------
const clock = new THREE.Clock();
let elapsed = 0;
let loadingFrames = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, clock.getDelta());
  elapsed += dt;
  state.time += dt;
  gradePass.uniforms.uTime.value = elapsed;

  if (state.mode === 'menu') {
    const t = elapsed * 0.06;
    camera.position.set(Math.cos(t) * 17.5, 4.3 + Math.sin(t * 1.7) * 0.5, Math.sin(t) * 17.5 - 1);
    camera.lookAt(0, 3.0, -2.5);
    world.update(dt, camera, effects);
    effects.update(dt);
    if (world.takeThunder()) setTimeout(() => audio.thunder(), 400);
  } else if (state.mode === 'playing') {
    player.update(dt, input);
    weapon.update(dt, player, input, enemies.enemies);
    enemies.update(dt, player);
    effects.update(dt);
    world.update(dt, camera, effects);
    if (world.takeThunder()) setTimeout(() => audio.thunder(), 300);

    if (state.comboTimer > 0) {
      state.comboTimer -= dt;
      if (state.comboTimer <= 0) {
        state.combo = 0;
        hud.setScore(state.score, 0, 0);
      }
    }
    hud.update(dt, player, weapon, enemies.enemies);

    if (state.breakTimer > 0) {
      state.breakTimer -= dt;
      if (state.breakTimer <= 0) beginWave(state.wave + 1);
      else if (state.breakTimer < 6.9) {
        hud.setObjective('REGROUP', `NEXT WAVE IN ${Math.ceil(state.breakTimer)}`);
      }
    } else if (enemies.isCleared()) {
      onWaveCleared();
    }

    const alive = enemies.aliveCount();
    if (alive !== state.lastHostiles) {
      state.lastHostiles = alive;
      if (enemies.active) hud.setObjective('ELIMINATE HOSTILES', `WAVE ${state.wave} / 10 · ${alive + enemies.queue.length} HOSTILES`);
    }

    if (state.deathTimer > 0) {
      state.deathTimer -= dt;
      if (state.deathTimer <= 0) {
        state.deathTimer = -1;
        endMission(false);
      }
      const k = Math.max(0, 1 - state.deathTimer / 1.35);
      camera.rotation.z = (camera.rotation.z || 0) + dt * 0.9 * k;
      camera.position.y += (0.6 - camera.position.y) * Math.min(1, dt * 1.6);
    }
  } else if (state.mode === 'paused') {
    world.update(dt * 0.25, camera, effects);
    effects.update(dt * 0.25);
  } else if (state.mode === 'over') {
    world.update(dt, camera, effects);
    effects.update(dt);
    const t = elapsed * 0.12;
    if (!document.getElementById('gameover').classList.contains('win')) {
      camera.rotation.z += dt * 0.02;
    }
  }

  viewCamera.fov = state.mode === 'playing' ? settings.fov - (player.ads ? 7 : 0) : camera.fov;
  viewCamera.aspect = camera.aspect;
  viewCamera.updateProjectionMatrix();

  if (usePost) composer.render();
  else renderer.render(scene, camera);
  if (state.mode !== 'menu' && state.mode !== 'over') {
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(viewScene, viewCamera);
    renderer.autoClear = true;
  }

  loadingFrames++;
  if (loadingFrames === 3) {
    ui.setLoading(1);
    setTimeout(() => ui.showMenu(), 150);
    setInterval(() => {
      if (state.mode === 'playing' && hud.fps < 42 && renderer.getPixelRatio() > 1) {
        const pr = Math.max(1, renderer.getPixelRatio() - 0.2);
        renderer.setPixelRatio(pr);
        composer.setPixelRatio(pr);
        onResize();
      }
    }, 6000);
  }
}

window.__game = { THREE, scene, camera, renderer, world, effects, player, weapon, enemies, hud, input, ui, state, settings };

animate();
