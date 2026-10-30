import * as THREE from 'three'
import './style.css'
import { buildTextures } from './textures.js'
import { buildWorld } from './world.js'
import { Effects } from './effects.js'
import { Weapon } from './weapon.js'
import { Player } from './player.js'
import { Enemies } from './enemies.js'
import { AudioEngine } from './audio.js'
import { UI } from './ui.js'
import { MobileControls } from './mobile.js'
import { createComposer } from './postfx.js'

const clamp = THREE.MathUtils.clamp
const damp = (a, b, l, dt) => THREE.MathUtils.lerp(a, b, 1 - Math.exp(-l * dt))
const _v = new THREE.Vector3()
const _v2 = new THREE.Vector3()

/* ------------------------------------------------------------------ *
 * Boot
 * ------------------------------------------------------------------ */
const canvas = document.getElementById('scene')
const renderer = new THREE.WebGLRenderer({
  canvas, antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false,
})
const quality = detectQuality(renderer)
renderer.setPixelRatio(quality.pixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = quality.shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.18
renderer.outputColorSpace = THREE.SRGBColorSpace

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 240)
scene.add(camera)

const T = buildTextures(renderer)
const world = buildWorld(scene, renderer, T, quality)
const player = new Player(camera, world)
const weapon = new Weapon(camera, scene)
const effects = new Effects(scene, camera, T)
const audio = new AudioEngine()
const enemies = new Enemies(scene, world, effects, audio)
const mobile = new MobileControls()
const ui = new UI({
  onStart: () => startGame(),
  onResume: () => resumeGame(),
  onRestart: () => startGame(),
  onMenu: () => toMenu(),
  onTiltToggle: () => toggleTilt(),
  onMute: (muted) => audio.setMuted(muted),
  uiSound: () => audio.ui(),
})

const composer = createComposer(renderer, scene, camera, quality)

const game = {
  state: 'menu',
  wave: 1,
  waveTotal: 0,
  waveKilled: 0,
  waveSpawned: 0,
  spawnTimer: 0,
  intermission: 0,
  score: 0,
  kills: 0,
  started: false,
  fireTimer: 0,
  ammo: 30,
  reserve: 180,
  reloading: false,
  reloadT: 0,
  reloadDuration: 2.15,
  shotsFired: 0,
  shotsHit: 0,
  time: 0,
  hadLock: false,
}

/* ------------------------------------------------------------------ *
 * UI + mobile wiring
 * ------------------------------------------------------------------ */
ui.tiltAvailable = mobile.tiltAvailable
mobile.onTiltChange = (on, available) => ui.setTilt(on, available)
mobile.onToast = (msg) => ui.toast(msg)
mobile.onTiltToggle = () => toggleTilt()
if (mobile.enabled) ui.toggleTouch(false, mobile.tiltAvailable)
audio.setMuted(ui.settings.muted)

async function toggleTilt() {
  mobile.onToast = (msg) => ui.toast(msg)
  await mobile.toggleTilt()
  ui.setTilt(mobile.tiltOn, mobile.tiltAvailable)
  if (mobile.tiltOn) mobile.onToast = (msg) => ui.toast(msg)
}

/* ------------------------------------------------------------------ *
 * Input
 * ------------------------------------------------------------------ */
const keys = new Set()
const mouse = { firing: false, ads: false, lastX: 0, lastY: 0, hasLast: false }
let lookDX = 0
let lookDY = 0
let jumpQueued = false
let reloadQueued = false
let ignoreFireUntil = 0
let usedPointerLock = false

window.addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault()
  if (e.repeat) {
    keys.add(e.code)
    return
  }
  keys.add(e.code)
  if (e.code === 'Space') jumpQueued = true
  if (e.code === 'KeyR') reloadQueued = true
  if (e.code === 'KeyM') ui.toggleSound()
  if (e.code === 'KeyP') togglePause()
  if (e.code === 'Escape') {
    if (game.state === 'playing') {
      if (document.pointerLockElement) document.exitPointerLock()
      else togglePause()
    } else if (game.state === 'paused') {
      resumeGame()
    }
  }
})
window.addEventListener('keyup', (e) => keys.delete(e.code))
window.addEventListener('blur', () => {
  keys.clear()
  mouse.firing = false
  mouse.ads = false
})

canvas.addEventListener('contextmenu', (e) => e.preventDefault())

window.addEventListener('mousedown', (e) => {
  if (game.state !== 'playing') return
  if (e.target.closest('button, input, .overlay, #touch-ui')) return
  if (performance.now() < ignoreFireUntil) return
  if (e.button === 0) mouse.firing = true
  if (e.button === 2) { mouse.ads = true; e.preventDefault() }
})
window.addEventListener('mouseup', (e) => {
  if (e.button === 0) mouse.firing = false
  if (e.button === 2) mouse.ads = false
})
window.addEventListener('mousemove', (e) => {
  if (game.state !== 'playing') return
  if (document.pointerLockElement === canvas) {
    lookDX += e.movementX || 0
    lookDY += e.movementY || 0
  } else if (mouse.firing || mouse.ads || (e.buttons & 3)) {
    if (mouse.hasLast) {
      lookDX += e.clientX - mouse.lastX
      lookDY += e.clientY - mouse.lastY
    }
  }
  mouse.lastX = e.clientX
  mouse.lastY = e.clientY
  mouse.hasLast = true
})

document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) {
    game.hadLock = true
    usedPointerLock = true
  } else if (game.state === 'playing' && game.hadLock) {
    pauseGame()
  }
})

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
})

document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.state === 'playing') pauseGame()
})

/* ------------------------------------------------------------------ *
 * Game lifecycle
 * ------------------------------------------------------------------ */
function resetGame() {
  player.pos.set(0, 0, 17.5)
  player.vel.set(0, 0, 0)
  player.yaw = 0
  player.pitch = -0.02
  player.recoilPitch = 0
  player.recoilYaw = 0
  player.health = player.maxHealth
  player.armor = player.maxArmor
  player.alive = true
  player.deathT = 0
  player.eye = 1.68
  player.crouching = false
  player.sprinting = false
  player.bob = 0
  player.damageFlash = 0
  player.timeSinceDamage = 99
  camera.position.set(0, 1.68, 17.5)
  camera.rotation.set(0, 0, 0)
  camera.rotation.order = 'YXZ'
  camera.fov = 74
  camera.updateProjectionMatrix()

  enemies.clear()
  weapon.group.visible = true
  weapon.reset?.()
  game.wave = 1
  game.waveTotal = 0
  game.waveKilled = 0
  game.waveSpawned = 0
  game.spawnTimer = 0.35
  game.intermission = 0
  game.score = 0
  game.kills = 0
  game.started = true
  game.fireTimer = 0
  game.ammo = 30
  game.reserve = 180
  game.reloading = false
  game.reloadT = 0
  game.shotsFired = 0
  game.shotsHit = 0
  ui.cache = {}
  ui.clearKillfeed()
  mobile.reset()
  effects.shake = 0
}

function startGame() {
  audio.init()
  ensureLoop()
  audio.setMuted(ui.settings.muted)
  resetGame()
  game.state = 'playing'
  ui.showGame()
  ui.toggleTouch(mobile.enabled, mobile.tiltAvailable)
  mobile.setVisible(true)
  startWave(1)
  if (ui.settings.tilt && mobile.enabled && !mobile.tiltOn) {
    mobile.enableTilt().then(() => ui.setTilt(mobile.tiltOn, mobile.tiltAvailable))
  }
  ignoreFireUntil = performance.now() + 350
  if (!mobile.enabled) {
    try {
      const p = canvas.requestPointerLock?.({ unadjustedMovement: true })
      if (p?.catch) p.catch(() => {})
    } catch {}
  }
}

function toMenu() {
  game.state = 'menu'
  stopLoop()
  enemies.clear()
  weapon.group.visible = false
  mobile.setVisible(false)
  ui.showMenu()
  if (document.pointerLockElement) document.exitPointerLock()
  ui.showBest()
  updateMenu(0.016)
  composer.setTime(game.time)
  composer.render(0.016)
}

function pauseGame() {
  if (game.state !== 'playing') return
  game.state = 'paused'
  stopLoop()
  mouse.firing = false
  mouse.ads = false
  ui.updatePauseStats({
    wave: game.wave,
    score: game.score,
    hostiles: Math.max(0, game.waveTotal - game.waveKilled),
  })
  ui.showPause()
  mobile.setVisible(false)
  if (document.pointerLockElement) document.exitPointerLock()
}

function resumeGame() {
  if (game.state !== 'paused') return
  game.state = 'playing'
  ensureLoop()
  ui.hidePause()
  mobile.setVisible(true)
  audio.init()
  if (!mobile.enabled) {
    try {
      const p = canvas.requestPointerLock?.({ unadjustedMovement: true })
      if (p?.catch) p.catch(() => {})
    } catch {}
  }
}

function togglePause() {
  if (game.state === 'playing') pauseGame()
  else if (game.state === 'paused') resumeGame()
}

function playerDied() {
  game.state = 'dead'
  mouse.firing = false
  mobile.setVisible(false)
  weapon.group.visible = false
  ui.showDeath({ wave: game.wave, score: game.score, kills: game.kills })
  if (document.pointerLockElement) document.exitPointerLock()
  audio.hurt()
}

/* ------------------------------------------------------------------ *
 * Waves
 * ------------------------------------------------------------------ */
function startWave(n) {
  game.wave = n
  game.waveTotal = Math.min(16, 4 + n * 2)
  game.waveKilled = 0
  game.waveSpawned = 0
  game.spawnTimer = 0.35
  game.intermission = 0
  const pad = String(n).padStart(2, '0')
  ui.banner(`OPERATION NIGHTFALL · WAVE ${pad}`, `WAVE ${pad}`, `${game.waveTotal} HOSTILES INBOUND`)
  audio.waveHorn()
  // Two scouts are already inside the wire when the wave begins, so the
  // first engagement starts immediately instead of after a long walk-in.
  if (n === 1) {
    enemies.spawn(new THREE.Vector3(-8, 0, 5), 1)
    enemies.spawn(new THREE.Vector3(8.5, 0, 3.2), 1)
    game.waveSpawned += 2
    game.spawnTimer = 1.4
    effects.smoke(new THREE.Vector3(-8, 0.7, 5), null, 0.9, 1.0)
    effects.smoke(new THREE.Vector3(8.5, 0.7, 3.2), null, 0.9, 1.0)
  }
}

function spawnEnemy() {
  const points = world.spawnPoints
  let best = null
  let bestScore = -1
  for (let i = 0; i < 6; i++) {
    const p = points[Math.floor(Math.random() * points.length)]
    const d = p.distanceTo(player.pos)
    const score = d + Math.random() * 8
    if (d > 13 && score > bestScore) { best = p; bestScore = score }
  }
  if (!best) best = points[Math.floor(Math.random() * points.length)]
  enemies.spawn(_v.copy(best).add(new THREE.Vector3((Math.random() - 0.5) * 2, 0, (Math.random() - 0.5) * 2)), game.wave)
  game.waveSpawned++
  effects.smoke(new THREE.Vector3(best.x, 0.6, best.z), null, 0.8, 0.9)
}

function completeWave() {
  game.intermission = 5.2
  game.score += 250
  player.health = Math.min(player.maxHealth, player.health + 25)
  player.armor = Math.min(player.maxArmor, player.armor + 20)
  game.reserve = Math.min(240, game.reserve + 90)
  audio.waveClear()
  const pad = String(game.wave).padStart(2, '0')
  ui.banner('SECTOR SECURED', `WAVE ${pad} CLEARED`, 'RESUPPLYING · +250 PTS')
}

function updateWaves(dt) {
  if (game.intermission > 0) {
    game.intermission -= dt
    if (game.intermission <= 0) startWave(game.wave + 1)
    return
  }
  const alive = enemies.aliveCount()
  const maxAlive = Math.min(8, 3 + Math.ceil(game.wave * 0.7))
  if (game.waveSpawned < game.waveTotal) {
    game.spawnTimer -= dt
    if (game.spawnTimer <= 0 && alive < maxAlive) {
      spawnEnemy()
      game.spawnTimer = Math.max(0.65, 1.7 - game.wave * 0.06)
    }
  } else if (alive === 0) {
    completeWave()
  }
}

/* ------------------------------------------------------------------ *
 * Combat
 * ------------------------------------------------------------------ */
const raycaster = new THREE.Raycaster()
raycaster.far = 160

function currentSpread(ads) {
  const move = clamp(player.speed / 8, 0, 1)
  let s = ads ? 0.0012 : 0.0085
  s += move * (ads ? 0.004 : 0.022)
  if (!player.onGround) s += 0.02
  s += Math.abs(player.recoilPitch) * 0.08
  return s
}

function shoot() {
  if (game.reloading || game.ammo <= 0 || game.fireTimer > 0 || !player.alive) return
  game.ammo--
  game.fireTimer = 0.095
  game.shotsFired++
  const ads = camera.fov < 62
  audio.shot()
  weapon.fire(ads ? 0.8 : 1)
  player.shake = Math.min(1, player.shake + (ads ? 0.12 : 0.2))
  player.addRecoil(ads ? 0.0065 : 0.0105, (Math.random() - 0.5) * 0.006)

  const dir = camera.getWorldDirection(new THREE.Vector3())
  const spread = currentSpread(ads)
  const right = _v.set(1, 0, 0).applyQuaternion(camera.quaternion)
  const up = _v2.set(0, 1, 0).applyQuaternion(camera.quaternion)
  dir.addScaledVector(right, (Math.random() - 0.5) * spread * 2)
    .addScaledVector(up, (Math.random() - 0.5) * spread * 2)
    .normalize()

  const muzzle = weapon.muzzleWorld(new THREE.Vector3())
  effects.muzzle(muzzle, dir, ads ? 0.72 : 1)
  effects.casing(weapon.ejectWorld(new THREE.Vector3()), dir)

  raycaster.set(camera.position, dir)
  const solidHits = raycaster.intersectObjects(world.solids, false)
  const solidDist = solidHits[0]?.distance ?? 160
  const enemyHit = enemies.raycast({ origin: camera.position, direction: dir })
  const enemyDist = enemyHit?.distance ?? Infinity

  if (enemyHit && enemyDist < solidDist) {
    const point = enemyHit.point
    const enemy = enemyHit.object.userData.enemy
    const part = enemyHit.object.userData.part
    const head = part === 'head'
    const damage = 24 * (head ? 3.2 : 1)
    const killed = enemy?.hit(damage, part, point, dir)
    game.shotsHit++
    effects.tracer(muzzle, point, 0xffe0b0, 0.018)
    ui.hitmarker(head)
    audio.hitmarker(head)
    if (killed) {
      game.kills++
      game.waveKilled++
      game.score += head ? 175 : 100
      ui.kill('YOU', 'MK-17', head)
    }
  } else if (solidHits[0]) {
    const hit = solidHits[0]
    const n = hit.face
      ? hit.face.normal.clone().applyMatrix3(new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld)).normalize()
      : new THREE.Vector3(0, 1, 0)
    effects.impact(hit.point, n, hit.object.material?.metalness > 0.5 ? 'metal' : 'concrete')
    effects.tracer(muzzle, hit.point, 0xffe0b0, 0.014)
    audio.impact()
  } else {
    effects.tracer(muzzle, _v.copy(camera.position).addScaledVector(dir, 80), 0xffe0b0, 0.012)
  }
}

function startReload() {
  if (game.reloading || game.ammo >= 30 || game.reserve <= 0) return
  game.reloading = true
  game.reloadT = 0
  weapon.setReloading(true)
  audio.reload()
}

function finishReload() {
  const need = 30 - game.ammo
  const take = Math.min(need, game.reserve)
  game.ammo += take
  game.reserve -= take
  game.reloading = false
  weapon.setReloading(false)
}

/* ------------------------------------------------------------------ *
 * Main loop
 * ------------------------------------------------------------------ */
let lastFrameTime = 0
let loopActive = false
let rafId = 0
let fpsTime = 0
let fpsFrames = 0
let fpsValue = 0
let optimizeTimer = 0

function updateMenu(dt) {
  const t = game.time
  const a = 0.52 + Math.sin(t * 0.035) * 0.16
  camera.fov = 55
  camera.updateProjectionMatrix()
  camera.position.set(Math.sin(a) * 27, 6.2 + Math.sin(t * 0.21) * 0.25, Math.cos(a) * 27)
  camera.lookAt(0.5, 2.6, -5.5)
  world.update(dt, camera, t)
  effects.update(dt)
  weapon.group.visible = false
}

function updatePlaying(dt) {
  const ads = mouse.ads || mobile.input.ads
  const sens = ui.settings.sens * (ads ? 0.68 : 1) * (mobile.enabled ? 1.12 : 1)
  const mobileLook = mobile.consumeLook(dt)
  const dx = lookDX + mobileLook.dx
  const dy = lookDY + mobileLook.dy
  if (dx || dy) player.look(dx * 0.0022 * sens, dy * 0.0022 * sens)

  const forward = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0)
  const strafe = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0)
  let mx = strafe + mobile.input.moveX
  let my = forward + mobile.input.moveY
  const mag = Math.hypot(mx, my)
  if (mag > 1) { mx /= mag; my /= mag }

  const jump = jumpQueued || mobile.takeJump()
  const wantReload = reloadQueued || mobile.takeReload()
  jumpQueued = false
  reloadQueued = false

  const input = {
    moveX: mx, moveY: my,
    jump,
    sprint: keys.has('ShiftLeft') || keys.has('ShiftRight') || mobile.input.sprint,
    crouch: keys.has('ControlLeft') || keys.has('ControlRight'),
  }

  player.update(dt, input, { ads })

  const fovTarget = ads ? 52 : player.sprinting ? 80 : 74
  camera.fov = damp(camera.fov, fovTarget, 11, dt)
  camera.updateProjectionMatrix()

  weapon.update(dt, {
    moving: clamp(player.speed / 6, 0, 1.3),
    sprinting: player.sprinting,
    ads,
    lookDX: dx,
    lookDY: dy,
    grounded: player.onGround,
    time: game.time,
  })

  // timers + reload
  game.fireTimer = Math.max(0, game.fireTimer - dt)
  if (game.reloading) {
    game.reloadT += dt
    if (game.reloadT >= game.reloadDuration) finishReload()
  }
  if (wantReload) startReload()
  if (mouse.firing || mobile.input.firing) {
    if (game.ammo <= 0 && game.reserve > 0 && !game.reloading) startReload()
    else shoot()
  }
  if (game.ammo <= 0 && game.reserve <= 0 && !game.reloading && (mouse.firing || mobile.input.firing)) {
    if (game.fireTimer <= 0) { audio.empty(); game.fireTimer = 0.25 }
  }

  enemies.update(dt, player, {
    onPlayerHit: (dmg, angle, from) => {
      if (!player.alive) return
      if (player.damage(dmg, angle)) {
        playerDied()
        return
      }
      ui.damage(player.yaw - angle)
      audio.hurt()
      effects.shake = Math.min(1, effects.shake + 0.16)
      if (Math.random() < 0.35) audio.whiz()
      if (from && Math.random() < 0.4) {
        effects.impact(new THREE.Vector3(player.pos.x, 0.4, player.pos.z).add(new THREE.Vector3(Math.random() * 2 - 1, 0, Math.random() * 2 - 1)), new THREE.Vector3(0, 1, 0), 'concrete')
      }
    },
  })

  updateWaves(dt)
  world.update(dt, camera, game.time)
  effects.update(dt)

  const alive = enemies.aliveCount()
  const progress = game.waveTotal ? game.waveKilled / game.waveTotal : 0
  let status = 'LINK ACTIVE'
  if (game.intermission > 0) status = 'SECTOR SECURED'
  else if (alive > 0) status = 'CONTACTS ACTIVE'
  else if (game.waveSpawned < game.waveTotal) status = 'CONTACTS INBOUND'

  ui.update({
    health: player.health,
    armor: player.armor,
    ammo: game.ammo,
    reserve: game.reserve,
    reloading: game.reloading,
    reloadPct: game.reloading ? clamp(game.reloadT / game.reloadDuration, 0, 1) : 0,
    wave: game.wave,
    hostiles: Math.max(0, game.waveTotal - game.waveKilled),
    score: game.score,
    progress,
    status,
    yaw: player.yaw + player.recoilYaw,
    spread: currentSpread(ads) * (ads ? 260 : 120),
    ads,
    damageFlash: player.damageFlash,
    fps: fpsValue,
  })
}

function updateDead(dt) {
  player.update(dt, { moveX: 0, moveY: 0 }, { ads: false })
  enemies.update(dt, player, { onPlayerHit: () => {} })
  world.update(dt, camera, game.time)
  effects.update(dt)
}

function ensureLoop() {
  if (loopActive) return
  loopActive = true
  lastFrameTime = performance.now()
  rafId = requestAnimationFrame(animate)
}

function stopLoop() {
  loopActive = false
  cancelAnimationFrame(rafId)
}

function animate(now = performance.now()) {
  if (!loopActive) return
  rafId = requestAnimationFrame(animate)
  const raw = Math.min(0.25, Math.max(0.0001, (now - lastFrameTime) / 1000))
  lastFrameTime = now
  const dt = Math.min(0.05, raw)
  game.time += dt

  if (game.state === 'playing') updatePlaying(dt)
  else if (game.state === 'dead') updateDead(dt)
  else if (game.state === 'paused') {
    // hold the frame; the pause panel owns the screen
  }

  // post grading
  composer.setDamage(player.damageFlash)
  composer.setLow(player.alive && player.health < 35 ? 1 : 0)
  composer.setTime(game.time)

  // shake camera integration for the cinematic grade
  if (effects.shake > 0.001 && game.state === 'playing') {
    camera.position.x += (Math.random() - 0.5) * effects.shake * 0.04
    camera.position.y += (Math.random() - 0.5) * effects.shake * 0.04
  }

  composer.render(dt)

  // fps
  fpsFrames++
  fpsTime += raw
  if (fpsTime >= 0.5) {
    fpsValue = Math.round(fpsFrames / fpsTime)
    fpsFrames = 0
    fpsTime = 0
    if (game.state === 'playing') {
      optimizeTimer += 0.5
      if (optimizeTimer > 5 && fpsValue < 30 && quality.pixelRatio > 0.55) {
        optimizeTimer = 0
        const pr = Math.max(0.55, quality.pixelRatio * 0.82)
        composer.setPixelRatio(pr)
        renderer.setSize(window.innerWidth, window.innerHeight)
        composer.setSize(window.innerWidth, window.innerHeight)
        if (fpsValue < 22 && composer.bloom) composer.bloom.enabled = false
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * Quality detection
 * ------------------------------------------------------------------ */
function detectQuality(renderer) {
  let name = ''
  try {
    const gl = renderer.getContext()
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    if (ext) name = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || ''
  } catch {}
  const software = /swiftshader|llvmpipe|software|basic render/i.test(name)
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const cores = navigator.hardwareConcurrency || 4
  if (software) {
    return {
      name, software, pixelRatio: Math.min(0.64, dpr * 0.64), shadows: false, shadowSize: 512,
      bloom: true, samples: 0, rainCount: 760, moteCount: 100,
    }
  }
  if (dpr > 1.6 || cores <= 4) {
    return {
      name, software, pixelRatio: Math.min(1.35, dpr), shadows: true, shadowSize: 1024,
      bloom: true, samples: 2, rainCount: 1100, moteCount: 150,
    }
  }
  return {
    name, software, pixelRatio: Math.min(1.7, dpr), shadows: true, shadowSize: 2048,
    bloom: true, samples: 4, rainCount: 1900, moteCount: 260,
  }
}

/* ------------------------------------------------------------------ *
 * Boot completion
 * ------------------------------------------------------------------ */
weapon.group.visible = false
camera.fov = 55
camera.updateProjectionMatrix()
camera.position.set(Math.sin(0.52) * 27, 6.2, Math.cos(0.52) * 27)
camera.lookAt(0.5, 2.6, -5.5)
scene.updateMatrixWorld(true)
try { renderer.compile(scene, camera) } catch (err) { console.warn('Shader warmup skipped', err) }
world.update(0.016, camera, 0)
composer.render(0.016)
ui.setTilt(false, mobile.tiltAvailable)

ui.setLoadingDone()
ui.showMenu()

window.__blacksite = {
  game, player, enemies, world, camera, renderer, quality, ui, mobile, weapon, composer, effects, THREE,
  start: startGame, pause: pauseGame, resume: resumeGame,
}

// The menu is a held cinematic frame: no animation loop runs until the
// operator deploys, which keeps mobile devices cool and start-up snappy.
