import '@fontsource/bebas-neue/400.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './style.css';

import * as THREE from 'three';
import { World, CAMERA_DEFS } from './world.js';
import { Game, NIGHT_DEFS, DIFFICULTIES, SECONDS_PER_HOUR } from './game.js';
import { CHARACTERS } from './characters.js';
import { AudioEngine } from './audio.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const pad = (n, len = 2) => String(n).padStart(len, '0');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const KEY = 'kimetus_nightmare_shift_save_v1';

const DEFAULT_SETTINGS = {
  master: 80, music: 55, sfx: 85,
  tilt: false, reducedMotion: false,
  quality: isTouch ? 'low' : 'high',
  difficulty: 'standard'
};
const DEFAULT_CUSTOM = {
  tanjiro: 5, nezuko: 5, zenitsu: 4, inosuke: 3, giyu: 2, muzan: 0,
  difficulty: 'standard'
};

function loadSave() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { raw = null; }
  const base = {
    started: false, unlocked: 1, lastNight: 1, cleared: [], deaths: 0,
    settings: { ...DEFAULT_SETTINGS }, custom: { ...DEFAULT_CUSTOM },
    createdAt: Date.now()
  };
  if (!raw || typeof raw !== 'object') return base;
  return {
    ...base, ...raw,
    unlocked: clamp(Number(raw.unlocked) || 1, 1, 5),
    cleared: Array.isArray(raw.cleared) ? raw.cleared.filter(n => n >= 1 && n <= 5) : [],
    deaths: Number(raw.deaths) || 0,
    settings: { ...DEFAULT_SETTINGS, ...(raw.settings || {}) },
    custom: { ...DEFAULT_CUSTOM, ...(raw.custom || {}), ai: { ...DEFAULT_CUSTOM, ...((raw.custom || {}).ai || {}) } }
  };
}

const save = loadSave();
function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* storage disabled */ }
  updateSaveStatus();
}
function updateSaveStatus() {
  const el = $('#save-status');
  if (el && !el.dataset.notice) el.textContent = 'Progress saved locally';
}
let noticeTimeout = null;
function optionNotice(text) {
  const el = $('#save-status');
  if (!el) { setHint(text); return; }
  el.dataset.notice = '1';
  el.textContent = text;
  clearTimeout(noticeTimeout);
  noticeTimeout = setTimeout(() => {
    delete el.dataset.notice;
    el.textContent = 'Progress saved locally';
  }, 4200);
}

/* ------------------------------------------------------------------ */
/* Renderer                                                            */
/* ------------------------------------------------------------------ */
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas: $('#webgl'),
    antialias: !isTouch,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false
  });
} catch (err) {
  $('#loading-screen').innerHTML = '<div style="text-align:center;padding:30px"><h2 style="font-family:serif">WEBGL UNAVAILABLE</h2><p style="font-family:monospace;font-size:12px;color:#aaa">This security terminal requires hardware-accelerated WebGL.</p></div>';
  throw err;
}
renderer.setPixelRatio(save.settings.quality === 'low' ? 1 : Math.min(window.devicePixelRatio || 1, 1.65));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = save.settings.quality !== 'low';
renderer.shadowMap.type = THREE.PCFShadowMap;

const world = new World(renderer);
const audio = new AudioEngine();
audio.setVolumes(save.settings.master / 100, save.settings.music / 100, save.settings.sfx / 100);

document.body.classList.toggle('reduce-motion', !!save.settings.reducedMotion);

let game;
let selectedNight = clamp(save.lastNight || 1, 1, save.unlocked);
let selectedDifficulty = save.settings.difficulty || 'standard';
let customAI = { ...DEFAULT_CUSTOM, ...(save.custom.ai || {}) };
let lastRun = null;
let victoryCtx = null;
let hintTimeout = null;
let shakeTimeout = null;
let glitchTimeout = null;
let tiltEnabled = false;
let tiltBaseline = null;
let tiltListening = false;

const screenEls = $$('.screen');

function activateScreen(el) {
  screenEls.forEach(s => s.classList.toggle('is-active', s === el));
}
function hideScreens() {
  screenEls.forEach(s => s.classList.remove('is-active'));
}
function showTitle() {
  activateScreen($('#screen-title'));
  document.body.classList.remove('game-active');
  $('#game-hud').classList.add('is-hidden');
  $('#game-hud').classList.remove('is-visible', 'camera-open');
  $('#camera-ui').classList.add('is-hidden');
  $('#camera-ui').classList.remove('is-visible', 'monitor-open');
  $('#intro-card').classList.add('is-hidden');
  $('#intro-card').classList.remove('show');
  updateTitleStats();
}
function updateTitleStats() {
  $('#stat-unlocked').textContent = pad(save.unlocked);
  $('#stat-clears').textContent = pad(save.cleared.length);
  $('#stat-deaths').textContent = pad(save.deaths, 2);
  const cont = $('#btn-continue');
  if (save.started) {
    cont.classList.remove('is-hidden');
    const n = clamp(save.lastNight || save.unlocked, 1, save.unlocked);
    $('#continue-copy').textContent = `NIGHT ${pad(n)} · ${DIFFICULTIES[save.settings.difficulty || 'standard'].label}`;
  } else {
    cont.classList.add('is-hidden');
  }
}

/* ------------------------------------------------------------------ */
/* Game callbacks                                                      */
/* ------------------------------------------------------------------ */
const callbacks = {
  onNightStart({ night, custom }) {
    hideScreens();
    document.body.classList.add('game-active');
    const hud = $('#game-hud');
    hud.classList.remove('is-hidden');
    requestAnimationFrame(() => hud.classList.add('is-visible'));
    $('#camera-ui').classList.add('is-hidden');
    $('#camera-ui').classList.remove('is-visible', 'monitor-open');
    const def = custom ? null : NIGHT_DEFS.find(n => n.n === night);
    $('#intro-night').textContent = custom ? 'CUSTOM PROTOCOL' : `NIGHT ${pad(night)}`;
    $('#intro-title').textContent = custom ? 'YOUR NIGHTMARE' : (def?.title || 'NIGHT SHIFT');
    $('#intro-sub').textContent = `12:00 AM — Wisteria Entertainment · ${DIFFICULTIES[game.difficulty]?.label || 'STANDARD'}`;
    const card = $('#intro-card');
    card.classList.remove('is-hidden');
    void card.offsetWidth;
    card.classList.add('show');
    $('#event-log').innerHTML = '';
    addEvent({ text: 'Shift started. Survive until 6:00 AM.', danger: false });
    setTimeout(() => {
      if (game.phase === 'playing') addEvent({ text: 'Motion detected on the show stage.', danger: false });
    }, 1500);
    setHint('Drag to look. TAB or SPACE raises the cameras.', 6200);
  },
  onIntroEnd() {
    const card = $('#intro-card');
    card.classList.remove('show');
    setTimeout(() => card.classList.add('is-hidden'), 500);
  },
  onState(s) {
    updateHUD(s);
    if (s.monitor) updateCameraHud(s);
  },
  onEvent(e) {
    addEvent(e);
  },
  onHint(text, ms = 4200) {
    setHint(text, ms);
  },
  onCameraOpen() {
    const ui = $('#camera-ui');
    ui.classList.remove('is-hidden');
    ui.classList.add('is-visible', 'monitor-open');
    $('#game-hud').classList.add('camera-open');
    updateCameraHud(game.snapshot);
    triggerGlitch(280);
  },
  onCameraClose() {
    const ui = $('#camera-ui');
    ui.classList.remove('is-visible', 'monitor-open');
    setTimeout(() => {
      if (!game.monitor) ui.classList.add('is-hidden');
    }, 430);
    $('#game-hud').classList.remove('camera-open');
  },
  onCameraSwitch({ cam, def }) {
    $('#cam-label').textContent = def.label;
    $('#cam-room').textContent = def.name;
    $$('.cam-map-btn').forEach(b => b.classList.toggle('is-active', b.dataset.cam === cam));
    triggerGlitch(340);
  },
  onDoorAlert() { /* state-driven HUD covers this */ },
  onVentAlert() { /* state-driven */ },
  onMuzan({ on }) {
    if (on) setHint('He is in the room. Hold the torch beam on him.', 6000);
  },
  onGlitch(intensity) {
    triggerGlitch(320 + intensity * 300);
    if (Math.random() < .4) audio.staticBurst(intensity);
  },
  onShake(amount) {
    if (save.settings.reducedMotion || game.phase === 'jumpscare') return;
    if (amount < .12) return;
    document.body.classList.add('shake');
    clearTimeout(shakeTimeout);
    shakeTimeout = setTimeout(() => document.body.classList.remove('shake'), 220);
  },
  onPowerOut() {
    $('#camera-ui').classList.add('is-hidden');
    $('#camera-ui').classList.remove('is-visible', 'monitor-open');
    $('#game-hud').classList.remove('camera-open');
    setHint('POWER FAILED. There is nothing between you and them.', 8000);
    addEvent({ text: 'AUXILIARY POWER OFFLINE', danger: true, time: game.getClockLabel() });
  },
  onJumpscare({ name }) {
    $('#game-hud').classList.add('is-hidden');
    $('#camera-ui').classList.add('is-hidden');
    $('#camera-ui').classList.remove('is-visible', 'monitor-open', 'glitching');
    $('#intro-card').classList.add('is-hidden');
    const flash = $('#flash');
    flash.classList.remove('pop', 'red');
    void flash.offsetWidth;
    flash.classList.add('pop', 'red');
    setTimeout(() => flash.classList.remove('pop', 'red'), 1300);
    void name;
  },
  onGameOver(d) {
    document.body.classList.remove('shake', 'jumpscare');
    $('#game-hud').classList.add('is-hidden');
    $('#camera-ui').classList.add('is-hidden');
    save.deaths += 1;
    save.started = true;
    save.lastNight = d.night;
    persist();
    $('#go-night').textContent = d.custom ? 'CUSTOM' : pad(d.night);
    $('#go-time').textContent = d.time;
    $('#go-power').textContent = `${Math.round(d.power)}%`;
    $('#go-cams').textContent = pad(d.cams);
    $('#go-cause').textContent = d.enemyName ? `Subject: ${d.enemyName}` : 'Cause: power failure';
    $('#go-case').textContent = `CASE #${String(600 + save.deaths).padStart(4, '0')}`;
    $('#go-deaths').textContent = `INCIDENT ${pad(save.deaths)}`;
    const notes = [
      'Guard did not complete the shift. Security footage has been quarantined by Wisteria Entertainment.',
      'No forced entry detected. The east door was found open. The tape ends at this timestamp.',
      'Audio recovered from the office: three knocks, then breathing, then nothing.',
      'The office light remained on. The chair was empty. The monitor was still recording.'
    ];
    $('.report-note').textContent = notes[save.deaths % notes.length];
    setTimeout(() => {
      activateScreen($('#screen-gameover'));
      $('#game-hud').classList.add('is-hidden');
    }, 180);
  },
  onVictory(d) {
    document.body.classList.remove('power-out', 'jumpscare', 'shake');
    $('#game-hud').classList.add('is-hidden');
    $('#camera-ui').classList.add('is-hidden');
    $('#camera-ui').classList.remove('is-visible', 'monitor-open');
    victoryCtx = d;
    if (!d.custom) {
      if (!save.cleared.includes(d.night)) save.cleared.push(d.night);
      if (d.night < 5) save.unlocked = Math.max(save.unlocked, d.night + 1);
      else save.unlocked = 5;
    }
    save.started = true;
    save.lastNight = d.custom ? save.lastNight : clamp(d.night + 1, 1, 5);
    persist();
    $('#vic-night').textContent = d.custom ? 'CUSTOM' : pad(d.night);
    $('#vic-power').textContent = `${Math.round(d.power)}%`;
    $('#vic-battery').textContent = `${Math.round(d.battery)}%`;
    $('#vic-cams').textContent = pad(d.cams);
    $('#vic-subtitle').textContent = d.custom ? 'You survived your custom nightmare.' : `You survived Night ${d.night}.`;
    $$('#vic-stars i').forEach((star, i) => star.classList.toggle('on', i < d.stars));
    if (d.custom) {
      $('#vic-unlock').textContent = 'CUSTOM CLEARED';
      $('#vic-note').textContent = 'The stage is still. The doors are still locked. You made it to sunrise.';
      $('#btn-next-night').innerHTML = 'RUN IT AGAIN <span>↻</span>';
    } else if (d.night >= 5) {
      $('#vic-unlock').textContent = 'ALL NIGHTS CLEARED';
      $('#vic-note').textContent = 'For one morning, the stage is empty. The wisteria has begun to bloom.';
      $('#btn-next-night').innerHTML = 'CUSTOM NIGHT <span>→</span>';
    } else {
      $('#vic-unlock').textContent = `NIGHT ${pad(d.night + 1)} UNLOCKED`;
      $('#vic-note').textContent = d.night === 4 ? 'Muzan was not in the file. He is now. One night remains.' : 'The characters have returned to the stage. For now.';
      $('#btn-next-night').innerHTML = 'NEXT NIGHT <span>→</span>';
    }
    $('#vic-date').textContent = d.custom ? 'CUSTOM PROTOCOL CLEARED' : `NIGHT ${pad(d.night)} CLEARED`;
    setTimeout(() => activateScreen($('#screen-victory')), 550);
  },
  onPause() {
    activateScreen($('#screen-pause'));
    $('#pause-copy').textContent = game.custom ? 'The custom night is still running.' : `Night ${pad(game.night)} is still running.`;
  },
  onResume() {
    hideScreens();
    document.body.classList.add('game-active');
    $('#game-hud').classList.remove('is-hidden');
  },
  onHour() {}
};

game = new Game(world, audio, callbacks);

/* ------------------------------------------------------------------ */
/* HUD                                                                 */
/* ------------------------------------------------------------------ */
const hudEl = $('#game-hud');
const cameraUI = $('#camera-ui');

function updateHUD(s) {
  if (!s) return;
  $('#hud-night').textContent = s.custom ? 'CST' : pad(s.night);
  $('#hud-difficulty').textContent = DIFFICULTIES[s.difficulty]?.label || 'STANDARD';
  $('#hud-time').textContent = `${s.clock.hour}:${pad(s.clock.minutes)}`;
  $('#hud-ampm').textContent = s.clock.ampm;

  const dots = $$('#hour-dots i');
  dots.forEach((d, i) => {
    d.classList.toggle('done', i < s.hour);
    d.classList.toggle('active', i === s.hour && game.phase === 'playing');
  });

  const power = Math.max(0, Math.round(s.power));
  $('#hud-power').textContent = `${power}%`;
  const powerFill = $('#power-fill');
  powerFill.style.width = `${power}%`;
  powerFill.classList.toggle('low', power <= 40 && power > 18);
  powerFill.classList.toggle('critical', power <= 18);

  const battery = Math.max(0, Math.round(s.battery));
  $('#hud-battery').textContent = `${battery}%`;
  const batteryFill = $('#battery-fill');
  batteryFill.style.width = `${battery}%`;
  batteryFill.classList.toggle('low', battery <= 20);
  $('#battery-sub').textContent = s.flashlight ? 'DRAINING' : battery < 100 ? 'RECOVERING' : 'READY';

  const usage = 1 + (s.monitor ? 1 : 0) + (s.doors.left ? 1 : 0) + (s.doors.right ? 1 : 0) + (s.redAlert ? 1 : 0);
  $$('#usage-bars i').forEach((bar, i) => {
    bar.classList.toggle('on', i < usage);
    bar.classList.toggle('warn', i < usage && power <= 30);
  });
  $('#power-sub').textContent = `USAGE ${pad(usage)}`;

  const left = $('#btn-door-left');
  const right = $('#btn-door-right');
  left.classList.toggle('closed', s.doors.left);
  right.classList.toggle('closed', s.doors.right);
  left.classList.toggle('alert', !!s.danger.left);
  right.classList.toggle('alert', !!s.danger.right);
  left.querySelector('.door-state b').textContent = s.doors.left ? 'SEALED' : 'OPEN';
  right.querySelector('.door-state b').textContent = s.doors.right ? 'SEALED' : 'OPEN';
  $('#btn-flashlight').classList.toggle('on', s.flashlight);
  $('#danger-vignette').classList.toggle('on', !!(s.danger.left || s.danger.right || s.danger.vent || s.redAlert));
  $('#red-alert').classList.toggle('on', !!s.redAlert);

  if (s.monitor && game.phase === 'playing') {
    hudEl.classList.add('camera-open');
    cameraUI.classList.remove('is-hidden');
    cameraUI.classList.add('is-visible', 'monitor-open');
    updateCameraHud(s);
  } else if (!s.monitor) {
    hudEl.classList.remove('camera-open');
    cameraUI.classList.remove('is-visible', 'monitor-open');
  }
}

function updateCameraHud(s) {
  if (!s) return;
  const def = CAMERA_DEFS[s.activeCam] || CAMERA_DEFS.stage;
  $('#cam-label').textContent = def.label;
  $('#cam-room').textContent = def.name;
  const time = `${s.clock.hour}:${pad(s.clock.minutes)}:${pad(Math.floor((s.hourFloat % (1 / 60)) * 3600))}`;
  $('#cam-clock').textContent = time;
  $('#cam-ampm').textContent = s.clock.ampm;
  $('#cam-signal').textContent = `${Math.round(s.camSignal)}%`;
  const frames = Math.floor((game.elapsed || 0) * 24);
  const f = frames % 24, secs = Math.floor(frames / 24) % 60, mins = Math.floor(frames / 1440) % 60;
  $('#cam-timecode').textContent = `00:${pad(mins)}:${pad(secs)}:${pad(f)}`;
  $('#cam-power').textContent = (s.usage || 1).toFixed(1);

  const activeRoom = s.activeCam;
  const intruders = Object.values(game.ai).filter(a =>
    a && a.active && a.room === activeRoom &&
    !(a.state === 'door' || a.state === 'retreat') &&
    a.state !== 'dormant'
  );
  const warning = $('#cam-warning');
  const isGlitch = intruders.some(a => a.id === 'muzan');
  warning.classList.toggle('on', intruders.length > 0 || isGlitch);
  warning.textContent = isGlitch ? 'SIGNAL INTERFERENCE' : 'MOTION DETECTED';

  let msg = 'ALL SYSTEMS NOMINAL';
  if (s.camSignal < 70) msg = 'SIGNAL DEGRADED';
  if (intruders.length) msg = `${intruders[0].id.toUpperCase()} VISIBLE`;
  if (s.redAlert) msg = 'MANUAL OVERRIDE';
  $('#cam-msg').textContent = msg;
  $$('.cam-map-btn').forEach(b => b.classList.toggle('is-active', b.dataset.cam === s.activeCam));
}

/* ------------------------------------------------------------------ */
/* Events, log, hint                                                   */
/* ------------------------------------------------------------------ */
function addEvent(e) {
  const log = $('#event-log');
  const line = document.createElement('div');
  line.className = `event-line${e.danger ? ' danger' : ''}`;
  line.textContent = e.text;
  log.prepend(line);
  while (log.children.length > 5) log.lastElementChild.remove();
}

function setHint(text, duration = 4200) {
  const el = $('#hud-hint');
  $('#hud-hint-copy').textContent = text;
  el.classList.add('show');
  clearTimeout(hintTimeout);
  hintTimeout = setTimeout(() => el.classList.remove('show'), duration);
}

function triggerGlitch(duration = 320) {
  const ui = $('#camera-ui');
  ui.classList.add('glitching');
  clearTimeout(glitchTimeout);
  glitchTimeout = setTimeout(() => ui.classList.remove('glitching'), duration);
}

/* ------------------------------------------------------------------ */
/* Night launch                                                        */
/* ------------------------------------------------------------------ */
function launchNight(opts) {
  audio.init();
  audio.uiClick();
  lastRun = { ...opts };
  save.started = true;
  save.lastNight = clamp(opts.night || 1, 1, 5);
  save.settings.difficulty = opts.difficulty || 'standard';
  persist();
  hideScreens();
  $('#screen-fade').classList.add('is-on');
  document.body.classList.add('game-active');
  $('#game-hud').classList.remove('is-hidden');
  setTimeout(() => {
    game.beginNight(opts);
    $('#screen-fade').classList.remove('is-on');
  }, 540);
}

function returnToMenu() {
  audio.init();
  hideScreens();
  game.abandon();
  document.body.classList.remove('game-active', 'power-out', 'jumpscare', 'shake');
  showTitle();
  audio.setScene('menu');
  audio.uiClick();
  updateTitleStats();
}

function openPanel(id) {
  audio.init();
  audio.uiClick();
  activateScreen($(id));
  document.body.classList.remove('game-active');
  if (id === '#screen-nights') renderNightCards();
  if (id === '#screen-custom') renderCustom();
  if (id === '#screen-options') syncOptionsUI();
}

/* ------------------------------------------------------------------ */
/* Title actions                                                       */
/* ------------------------------------------------------------------ */
$('#btn-continue').addEventListener('click', () => {
  const n = clamp(save.lastNight || save.unlocked, 1, save.unlocked);
  launchNight({ night: n, difficulty: save.settings.difficulty || 'standard', customAI: null, custom: false });
});
$$('[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.init();
    audio.uiClick();
    const action = btn.dataset.action;
    switch (action) {
      case 'new':
        selectedNight = 1;
        launchNight({ night: 1, difficulty: save.settings.difficulty || 'standard', customAI: null, custom: false });
        break;
      case 'continue':
        break;
      case 'nights':
        selectedNight = clamp(save.lastNight || 1, 1, save.unlocked);
        openPanel('#screen-nights');
        break;
      case 'custom':
        openPanel('#screen-custom');
        break;
      case 'options':
        openPanel('#screen-options');
        break;
      case 'howto':
        openPanel('#screen-howto');
        break;
      case 'back':
        showTitle();
        break;
      case 'start-night':
        if (selectedNight <= save.unlocked) launchNight({ night: selectedNight, difficulty: selectedDifficulty, customAI: null, custom: false });
        break;
      case 'start-custom':
        launchNight({
          night: 6,
          difficulty: $('#custom-difficulty').value,
          customAI: { ...getCustomAI() },
          custom: true
        });
        break;
      case 'resume':
        hideScreens();
        document.body.classList.add('game-active');
        game.resume();
        break;
      case 'restart':
        hideScreens();
        if (lastRun) launchNight(lastRun);
        break;
      case 'retry':
        hideScreens();
        if (lastRun) launchNight(lastRun);
        break;
      case 'next-night':
        hideScreens();
        if (!victoryCtx) { returnToMenu(); break; }
        if (victoryCtx.custom) {
          launchNight({ ...lastRun, night: 6, custom: true });
        } else if (victoryCtx.night < 5) {
          launchNight({ night: victoryCtx.night + 1, difficulty: victoryCtx.difficulty, customAI: null, custom: false });
        } else {
          openPanel('#screen-custom');
        }
        break;
      case 'quit':
        returnToMenu();
        break;
    }
  });
});

/* ------------------------------------------------------------------ */
/* Night select                                                        */
/* ------------------------------------------------------------------ */
function renderNightCards() {
  const wrap = $('#night-cards');
  wrap.innerHTML = '';
  NIGHT_DEFS.forEach(def => {
    const locked = def.n > save.unlocked;
    const cleared = save.cleared.includes(def.n);
    const btn = document.createElement('button');
    btn.className = `night-card${locked ? ' is-locked' : ''}${selectedNight === def.n ? ' is-selected' : ''}`;
    btn.dataset.night = def.n;
    btn.disabled = locked;
    btn.innerHTML = `
      <div class="night-card-top">
        <span class="night-card-index">NIGHT ${pad(def.n)}</span>
        <span class="night-card-status ${cleared ? 'cleared' : locked ? 'locked' : ''}">${locked ? 'LOCKED' : cleared ? 'CLEARED' : def.tag}</span>
      </div>
      <div class="night-card-mid">
        <h3>${def.title}</h3>
        <p>${def.desc}</p>
        <div class="night-card-subjects">${def.subjects.map(s => `<span>${s}</span>`).join('')}</div>
      </div>
      <div class="night-card-foot"><span>${locked ? `CLEAR NIGHT ${pad(def.n - 1)}` : '12:00 — 6:00 AM'}</span><i></i></div>`;
    if (!locked) {
      btn.addEventListener('click', () => {
        audio.uiClick();
        selectedNight = def.n;
        $$('.night-card').forEach(c => c.classList.toggle('is-selected', Number(c.dataset.night) === selectedNight));
        updateNightSummary();
      });
    }
    wrap.appendChild(btn);
  });
  updateNightSummary();
}
function updateNightSummary() {
  const def = NIGHT_DEFS.find(n => n.n === selectedNight) || NIGHT_DEFS[0];
  $('#night-summary').textContent = `${def.title}. ${def.desc} Power is finite. So is your luck.`;
  $('#btn-start-night').innerHTML = `CLOCK IN — NIGHT ${pad(selectedNight)} <span>→</span>`;
}
$$('#night-difficulty button').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.uiClick();
    selectedDifficulty = btn.dataset.difficulty;
    save.settings.difficulty = selectedDifficulty;
    persist();
    $$('#night-difficulty button').forEach(b => b.classList.toggle('is-active', b === btn));
  });
});
function syncDifficultyButtons() {
  $$('#night-difficulty button').forEach(b => b.classList.toggle('is-active', b.dataset.difficulty === selectedDifficulty));
}

/* ------------------------------------------------------------------ */
/* Custom night                                                        */
/* ------------------------------------------------------------------ */
function getCustomAI() {
  const out = {};
  Object.keys(CHARACTERS).forEach(id => {
    const input = $(`#custom-${id}`);
    out[id] = input ? Number(input.value) : 0;
  });
  return out;
}
function renderCustom() {
  const wrap = $('#custom-sliders');
  if (!wrap.children.length) {
    Object.values(CHARACTERS).forEach(char => {
      const row = document.createElement('div');
      row.className = 'slider-row';
      const value = customAI[char.id] ?? 0;
      row.innerHTML = `
        <span class="slider-id">
          <span class="slider-avatar" style="border-color:${char.color}55">${char.short.slice(0, 1)}</span>
          <span class="slider-name"><b>${char.short}</b><small>${char.role}</small></span>
        </span>
        <input id="custom-${char.id}" type="range" min="0" max="20" value="${value}" aria-label="${char.name} AI level">
        <span class="slider-value"><b>${pad(value)}</b><small>/20</small></span>`;
      wrap.appendChild(row);
      const input = $('#custom-' + char.id);
      input.style.setProperty('--val', `${value / 20 * 100}%`);
      input.addEventListener('input', () => {
        const v = Number(input.value);
        customAI[char.id] = v;
        input.style.setProperty('--val', `${v / 20 * 100}%`);
        row.querySelector('.slider-value b').textContent = pad(v);
        updateCustomTotal();
        saveCustom();
      });
    });
  } else {
    Object.keys(CHARACTERS).forEach(id => {
      const input = $('#custom-' + id);
      if (input) {
        input.value = customAI[id] ?? 0;
        input.style.setProperty('--val', `${(customAI[id] ?? 0) / 20 * 100}%`);
        input.closest('.slider-row').querySelector('.slider-value b').textContent = pad(customAI[id] ?? 0);
      }
    });
  }
  $('#custom-difficulty').value = save.custom.difficulty || 'standard';
  updateCustomTotal();
}
function updateCustomTotal() {
  const total = Object.values(getCustomAI()).reduce((a, b) => a + b, 0);
  $('#custom-total').textContent = pad(total);
}
function saveCustom() {
  save.custom.ai = { ...getCustomAI() };
  save.custom.difficulty = $('#custom-difficulty')?.value || 'standard';
  persist();
}
$$('.preset-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.uiClick();
    const presets = {
      quiet: { tanjiro: 2, nezuko: 2, zenitsu: 0, inosuke: 0, giyu: 0, muzan: 0 },
      haunted: { tanjiro: 8, nezuko: 8, zenitsu: 7, inosuke: 6, giyu: 5, muzan: 3 },
      hell: { tanjiro: 18, nezuko: 18, zenitsu: 18, inosuke: 18, giyu: 16, muzan: 15 }
    };
    customAI = { ...customAI, ...(presets[btn.dataset.preset] || presets.haunted) };
    renderCustom();
    saveCustom();
  });
});
$('#custom-difficulty').addEventListener('change', () => {
  save.custom.difficulty = $('#custom-difficulty').value;
  persist();
});

/* ------------------------------------------------------------------ */
/* Options                                                             */
/* ------------------------------------------------------------------ */
const rangeMap = {
  master: '#opt-master',
  music: '#opt-music',
  sfx: '#opt-sfx'
};
function syncOptionsUI() {
  Object.entries(rangeMap).forEach(([key, sel]) => {
    const input = $(sel);
    input.value = save.settings[key];
    input.style.setProperty('--val', `${save.settings[key]}%`);
    input.parentElement.querySelector('output').textContent = save.settings[key];
  });
  setSwitch($('#opt-tilt'), !!save.settings.tilt);
  setSwitch($('#opt-motion'), !!save.settings.reducedMotion);
  $$('#opt-quality button').forEach(b => b.classList.toggle('is-active', b.dataset.quality === save.settings.quality));
}
function setSwitch(el, on) {
  el.setAttribute('aria-checked', on ? 'true' : 'false');
  el.querySelector('span').textContent = on ? 'ON' : 'OFF';
}
Object.entries(rangeMap).forEach(([key, sel]) => {
  const input = $(sel);
  input.addEventListener('input', () => {
    const v = Number(input.value);
    save.settings[key] = v;
    input.style.setProperty('--val', `${v}%`);
    input.parentElement.querySelector('output').textContent = v;
    audio.init();
    audio.setVolumes(save.settings.master / 100, save.settings.music / 100, save.settings.sfx / 100);
    persist();
  });
});
$('#opt-tilt').addEventListener('click', async () => {
  audio.init();
  if (tiltEnabled) {
    disableTilt();
    return;
  }
  await enableTilt();
});
async function enableTilt() {
  if (!('DeviceOrientationEvent' in window)) {
    optionNotice('Tilt controls are not supported on this device.');
    return;
  }
  try {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      const result = await DeviceOrientationEvent.requestPermission();
      if (result !== 'granted') {
        optionNotice('Motion permission denied — drag look remains active.');
        setSwitch($('#opt-tilt'), false);
        return;
      }
    }
    tiltEnabled = true;
    tiltBaseline = null;
    save.settings.tilt = true;
    persist();
    setSwitch($('#opt-tilt'), true);
    if (!tiltListening) {
      window.addEventListener('deviceorientation', onDeviceOrientation, true);
      tiltListening = true;
    }
    optionNotice('Tilt look enabled — hold your device naturally.');
  } catch (err) {
    optionNotice('Motion access unavailable — drag look remains active.');
    setSwitch($('#opt-tilt'), false);
  }
}
function disableTilt() {
  tiltEnabled = false;
  save.settings.tilt = false;
  persist();
  setSwitch($('#opt-tilt'), false);
}
function onDeviceOrientation(e) {
  if (!tiltEnabled || game.phase !== 'playing' || game.monitor) return;
  if (e.gamma == null || e.beta == null) return;
  if (!tiltBaseline) tiltBaseline = { beta: e.beta, gamma: e.gamma };
  let x = e.gamma - tiltBaseline.gamma;
  let y = e.beta - tiltBaseline.beta;
  const angle = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  if (Math.abs(angle) === 90) {
    const tmp = x; x = y; y = -tmp;
  }
  game.setLookFromTilt(x * 0.028, -y * 0.02);
}
$('#opt-motion').addEventListener('click', () => {
  audio.uiClick();
  save.settings.reducedMotion = !save.settings.reducedMotion;
  document.body.classList.toggle('reduce-motion', save.settings.reducedMotion);
  setSwitch($('#opt-motion'), save.settings.reducedMotion);
  persist();
});
$$('#opt-quality button').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.uiClick();
    save.settings.quality = btn.dataset.quality;
    applyQuality(save.settings.quality);
    $$('#opt-quality button').forEach(b => b.classList.toggle('is-active', b === btn));
    persist();
  });
});
function applyQuality(q) {
  renderer.setPixelRatio(q === 'low' ? 1 : Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = q !== 'low';
  if (world.officeSpot) world.officeSpot.castShadow = q !== 'low';
  if (q === 'low') {
    renderer.shadowMap.needsUpdate = true;
  }
}
$('#btn-reset-save').addEventListener('click', () => {
  if (!window.confirm('Erase all shift progress, records and settings? This cannot be undone.')) return;
  try { localStorage.removeItem(KEY); } catch (e) { /* noop */ }
  window.location.reload();
});

/* ------------------------------------------------------------------ */
/* Field manual dossier                                                */
/* ------------------------------------------------------------------ */
function buildDossier() {
  const wrap = $('#intel-list');
  if (!wrap) return;
  Object.values(CHARACTERS).forEach(c => {
    const card = document.createElement('div');
    card.className = 'intel-card';
    card.innerHTML = `
      <h4>${c.name}</h4>
      <span class="intel-role">${c.role}</span>
      <p>${c.desc}</p>
      <div class="intel-threat">${[1,2,3,4,5].map(i => `<i class="${i <= c.threat ? 'on' : ''}"></i>`).join('')}</div>`;
    wrap.appendChild(card);
  });
}

/* ------------------------------------------------------------------ */
/* Input                                                               */
/* ------------------------------------------------------------------ */
const canvas = $('#webgl');
let dragging = false;
let lastPointer = { x: 0, y: 0 };
canvas.addEventListener('pointerdown', e => {
  if (game.phase !== 'playing') return;
  dragging = true;
  lastPointer = { x: e.clientX, y: e.clientY };
  canvas.classList.add('is-dragging');
  try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
});
canvas.addEventListener('pointermove', e => {
  if (!dragging || game.phase !== 'playing') return;
  const dx = e.clientX - lastPointer.x;
  const dy = e.clientY - lastPointer.y;
  lastPointer = { x: e.clientX, y: e.clientY };
  if (Math.abs(dx) + Math.abs(dy) > 1) game.look(dx, dy);
});
function endDrag(e) {
  dragging = false;
  canvas.classList.remove('is-dragging');
  try { canvas.releasePointerCapture(e.pointerId); } catch (err) { /* noop */ }
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', endDrag);
canvas.addEventListener('contextmenu', e => e.preventDefault());

$('#btn-door-left').addEventListener('click', () => { audio.init(); game.toggleDoor('left'); });
$('#btn-door-right').addEventListener('click', () => { audio.init(); game.toggleDoor('right'); });
$('#btn-flashlight').addEventListener('click', () => { audio.init(); game.toggleFlashlight(); });
$('#btn-camera').addEventListener('click', () => { audio.init(); game.toggleMonitor(); });
$('#btn-close-camera').addEventListener('click', () => { audio.init(); game.setMonitor(false); });
$('#btn-pause').addEventListener('click', () => { audio.init(); game.pause(); });
$$('.cam-map-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.init();
    game.setCamera(btn.dataset.cam);
  });
});

let flashPrev = false;
window.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key.toLowerCase();
  if (game.phase === 'playing' || game.phase === 'paused') {
    if (key === 'escape') {
      e.preventDefault();
      game.handleEscape();
      return;
    }
  }
  if (game.phase !== 'playing') return;
  if (key === 'tab' || key === ' ') {
    e.preventDefault();
    game.toggleMonitor();
  } else if (key === 'a') {
    game.toggleDoor('left');
  } else if (key === 'd') {
    game.toggleDoor('right');
  } else if (key === 'f') {
    e.preventDefault();
    if (!game.flashlight) { flashPrev = false; game.toggleFlashlight(true); flashPrev = true; }
  } else if (key >= '1' && key <= '7') {
    const keyName = ['stage', 'dining', 'west', 'east', 'kitchen', 'storage', 'vent'][Number(key) - 1];
    game.setCamera(keyName);
  }
});
window.addEventListener('keyup', e => {
  if (e.key.toLowerCase() === 'f' && game.phase === 'playing' && flashPrev) {
    flashPrev = false;
    game.toggleFlashlight(false);
  }
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  world.resize(window.innerWidth, window.innerHeight);
});
world.resize(window.innerWidth, window.innerHeight);

/* ------------------------------------------------------------------ */
/* Clock + render loop                                                 */
/* ------------------------------------------------------------------ */
function updateTitleClock() {
  const d = new Date();
  $('#title-clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
updateTitleClock();
setInterval(updateTitleClock, 15000);

let last = performance.now();
let frameCount = 0;
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.08);
  last = now;
  frameCount++;
  try {
    game.update(dt);
    const view = game.getViewMode();
    const cam = game.getCamera();
    canvas.classList.toggle('menu-mode', view === 'menu');
    canvas.classList.toggle('feed-mode', view === 'camera');
    world.render(cam);
  } catch (err) {
    console.error(err);
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */
buildDossier();
renderNightCards();
renderCustom();
syncDifficultyButtons();
syncOptionsUI();
applyQuality(save.settings.quality);
setSwitch($('#opt-tilt'), false);
if (save.settings.tilt) {
  // Browsers require a user gesture before motion can begin. Surface the option instead.
  save.settings.tilt = false;
  persist();
}
updateTitleStats();
game.showMenu();
audio.setScene('menu');
audio.setVolumes(save.settings.master / 100, save.settings.music / 100, save.settings.sfx / 100);

setTimeout(() => {
  const loading = $('#loading-screen');
  loading.classList.remove('is-active');
  showTitle();
}, 1350);

// Resume audio if the tab returns.
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && game.phase === 'paused') { /* user resumes manually */ }
  if (document.hidden && game.phase === 'playing') game.pause();
});

// Expose a tiny debug handle for QA builds. Harmless in production.
window.__KIMETSU__ = { game, world, audio, save, renderer };
