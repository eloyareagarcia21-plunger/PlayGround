import * as THREE from 'three';
import { CAMERA_DEFS, ROOM_ANCHORS } from './world.js';
import { CHARACTERS } from './characters.js';

/* ============================================================
   Night logic, character AI, resources and consequence.
   ============================================================ */

export const SECONDS_PER_HOUR = 35;

export const DIFFICULTIES = {
  relaxed: { label: 'RELAXED', ai: 0.74, power: 0.78, battery: 0.82, grace: 1.18, tension: 0.9 },
  standard: { label: 'STANDARD', ai: 1, power: 1, battery: 1, grace: 1, tension: 1 },
  nightmare: { label: 'NIGHTMARE', ai: 1.34, power: 1.24, battery: 1.14, grace: 0.84, tension: 1.12 }
};

export const NIGHT_DEFS = [
  {
    n: 1, title: 'FIRST WATCH', tag: 'ORIENTATION',
    desc: 'The building breathes. Two of them are already awake.',
    subjects: ['TANJIRO', 'NEZUKO'],
    ai: { tanjiro: 3, nezuko: 2, zenitsu: 0, inosuke: 0, giyu: 0, muzan: 0 }
  },
  {
    n: 2, title: 'THE BOLT', tag: 'STATIC',
    desc: 'A yellow shape keeps crossing the monitors. It never stands still.',
    subjects: ['TANJIRO', 'NEZUKO', 'ZENITSU'],
    ai: { tanjiro: 5, nezuko: 4, zenitsu: 3, inosuke: 0, giyu: 0, muzan: 0 }
  },
  {
    n: 3, title: 'BAD SIGNAL', tag: 'PRESSURE',
    desc: 'Something is hitting the east door. The cameras disagree.',
    subjects: ['TANJIRO', 'NEZUKO', 'ZENITSU', 'INOSUKE'],
    ai: { tanjiro: 7, nezuko: 5, zenitsu: 5, inosuke: 4, giyu: 0, muzan: 0 }
  },
  {
    n: 4, title: 'DEAD AIR', tag: 'SILENCE',
    desc: 'The west hall light has gone out. No one is walking. That is the problem.',
    subjects: ['TANJIRO', 'NEZUKO', 'ZENITSU', 'INOSUKE', 'GIYU'],
    ai: { tanjiro: 9, nezuko: 7, zenitsu: 7, inosuke: 6, giyu: 5, muzan: 0 }
  },
  {
    n: 5, title: 'PROGENITOR', tag: 'FINAL WATCH',
    desc: 'The air is red. The cameras are lying. He knows where you are.',
    subjects: ['TANJIRO', 'NEZUKO', 'ZENITSU', 'INOSUKE', 'GIYU', 'MUZAN'],
    ai: { tanjiro: 12, nezuko: 10, zenitsu: 10, inosuke: 9, giyu: 8, muzan: 7 }
  }
];

const BASE_MOVE = { tanjiro: 6.1, nezuko: 5.5, zenitsu: 4.1, inosuke: 5.6, giyu: 6.4, muzan: 8 };
const DOOR_GRACE = { tanjiro: 3.5, nezuko: 4.2, zenitsu: 2.4, inosuke: 3.7, giyu: 3.9, muzan: 4 };

// Night pacing. `first` is the opening delay before anyone starts moving;
// `grace` scales the reaction window once a character reaches a door/vent;
// `move` scales the time between room transitions (higher = slower).
const NIGHT_PACE = {
  1: { first: [17, 25], grace: 2.20, move: 1.18 },
  2: { first: [15, 22], grace: 1.80, move: 1.06 },
  3: { first: [13, 19], grace: 1.55, move: 0.96 },
  4: { first: [11, 16], grace: 1.32, move: 0.88 },
  5: { first: [9, 14], grace: 1.12, move: 0.80 }
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);

export class Game {
  constructor(world, audio, callbacks = {}) {
    this.world = world;
    this.audio = audio;
    this.cb = callbacks;
    this.phase = 'menu';
    this.night = 1;
    this.difficulty = 'standard';
    this.diff = DIFFICULTIES.standard;
    this.custom = false;
    this.ai = {};
    this.time = 0;
    this.elapsed = 0;
    this.introTimer = 0;
    this.hour = 0;
    this.hourFloat = 0;
    this.power = 100;
    this.battery = 100;
    this.doors = { left: false, right: false };
    this.monitor = false;
    this.activeCam = 'stage';
    this.flashlight = false;
    this.flashlightAim = 0;
    this.powerOut = false;
    this.powerOutTimer = 0;
    this.redAlert = false;
    this.lookYaw = 0;
    this.lookPitch = -0.035;
    this.camsVisited = new Set();
    this.camChecks = 0;
    this.doorAlerts = { left: false, right: false, vent: false };
    this.lastStatePush = 0;
    this.jumpscareTimer = 0;
    this.jumpscareId = null;
    this.jumpscareLight = null;
    this._hz = 0;
    this._tensionPush = 0;
    this._hintTimer = null;
    this._lastHour = -1;
    this._pausePhase = null;
    this.snapshot = this._makeSnapshot();
    this.world.setFlashlight(false);
    // Pre-created so the shader light count never changes at jumpscare time.
    this.jumpscareLight = new THREE.PointLight(0xff3c3c, 0, 8, 2);
    this.jumpscareLight.position.set(0, 1.7, 2.7);
    this.world.scene.add(this.jumpscareLight);
  }

  /* ------------------------- lifecycle ------------------------- */
  showMenu() {
    this.phase = 'menu';
    this.monitor = false;
    this.flashlight = false;
    this.powerOut = false;
    document.body.classList.remove('power-out', 'jumpscare', 'shake');
    this.world.setMenuMode(true);
    this.world.setFlashlight(false);
    if (this.jumpscareLight) this.jumpscareLight.intensity = 0;
    this.world.officeCamera.rotation.z = 0;
    this.audio.setScene('menu');
    this.audio.setTension(0);
  }

  beginNight({ night = 1, difficulty = 'standard', customAI = null, custom = false } = {}) {
    this.phase = 'intro';
    this.night = night;
    this.custom = !!custom;
    this.difficulty = difficulty;
    this.diff = DIFFICULTIES[difficulty] || DIFFICULTIES.standard;
    this.time = 0;
    this.elapsed = 0;
    this.introTimer = 3.35;
    this.hour = 0;
    this.hourFloat = 0;
    this.power = 100;
    this.battery = 100;
    this.doors = { left: false, right: false };
    this.monitor = false;
    this.activeCam = 'stage';
    this.flashlight = false;
    this.powerOut = false;
    this.powerOutTimer = 0;
    this.redAlert = false;
    this.lookYaw = 0;
    this.lookPitch = -0.035;
    this.camsVisited.clear();
    this.camChecks = 0;
    this.doorAlerts = { left: false, right: false, vent: false };
    this.jumpscareId = null;
    this.jumpscareTimer = 0;
    this._lastHour = -1;
    this._pausePhase = null;
    this._po3 = false; this._po7 = false; this._po11 = false;
    document.body.classList.remove('power-out', 'jumpscare', 'shake');
    if (this.jumpscareLight) { this.jumpscareLight.intensity = 0; }

    const cfg = customAI || (NIGHT_DEFS.find(n => n.n === night)?.ai) || NIGHT_DEFS[0].ai;
    this.pace = custom ? this._customPace(cfg) : (NIGHT_PACE[night] || NIGHT_PACE[1]);
    this.ai = {};
    for (const id of Object.keys(CHARACTERS)) {
      const level = clamp(Math.round((cfg[id] || 0) * this.diff.ai), 0, 20);
      const startRooms = {
        tanjiro: 'stage', nezuko: 'dining', zenitsu: 'stage',
        inosuke: 'east', giyu: 'west', muzan: 'dormant'
      };
      this.ai[id] = {
        id,
        level,
        active: level > 0,
        room: startRooms[id],
        state: id === 'muzan' ? 'dormant' : 'roam',
        moveTimer: rand(3.5, 6.8),
        walkTimer: 0,
        doorTimer: 0,
        closedTime: 0,
        retreatTimer: 0,
        lightTimer: 0,
        ventSeen: 0,
        banish: 0,
        manifestTimer: 0,
        nextManifest: 0,
        slot: 0,
        announced: false
      };
    }
    // Stagger the opening approach so early nights leave time to learn the office.
    const first = () => rand(this.pace.first[0], this.pace.first[1]);
    this.ai.tanjiro.moveTimer = first() * rand(.9, 1.05);
    this.ai.nezuko.moveTimer = first() * rand(1.15, 1.35);
    this.ai.zenitsu.moveTimer = first() * rand(1.2, 1.45);
    this.ai.inosuke.moveTimer = first() * rand(1.25, 1.5);
    this.ai.giyu.moveTimer = first() * rand(1.4, 1.7);
    this.ai.muzan.nextManifest = rand(40, 55) - this.ai.muzan.level * 1.4;

    this.world.setMenuMode(false);
    this.world.setDoor('left', false);
    this.world.setDoor('right', false);
    this.world.setFlashlight(false);
    this.world.charsHidden = false;
    this.world.officeCamera.rotation.set(this.lookPitch, this.lookYaw, 0);
    this.audio.init();
    this.audio.setScene('game');
    this.audio.setTension(0.08);
    this.audio.hourChime(0);
    this.world.setOfficeLighting({ powerOut: false, flicker: 1, hour: 0, redAlert: false });
    this._placeCharacters();
    this._pushState(true);
    this.cb.onNightStart?.({ night, difficulty, custom, introTimer: this.introTimer });
  }

  pause() {
    if (this.phase !== 'playing') return;
    this._pausePhase = this.phase;
    this.phase = 'paused';
    this.audio.setTension(0);
    this.cb.onPause?.(this._makeSnapshot());
  }

  resume() {
    if (this.phase !== 'paused') return;
    this.phase = 'playing';
    this.audio.setScene('game');
    this.cb.onResume?.();
    this._pushState(true);
  }

  abandon() {
    this.phase = 'menu';
    this.monitor = false;
    this.flashlight = false;
    document.body.classList.remove('power-out', 'jumpscare', 'shake');
    this.world.setMenuMode(true);
    this.world.setFlashlight(false);
    if (this.jumpscareLight) this.jumpscareLight.intensity = 0;
    this.world.officeCamera.rotation.z = 0;
    this.audio.setScene('menu');
    this.audio.setTension(0);
  }

  handleEscape() {
    if (this.phase !== 'playing' && this.phase !== 'paused') return false;
    if (this.phase === 'paused') { this.resume(); return true; }
    if (this.monitor) { this.setMonitor(false); return true; }
    this.pause();
    return true;
  }

  /* ------------------------- player input ------------------------- */
  look(dx, dy) {
    if (this.phase !== 'playing' || this.monitor) return;
    this.lookYaw = clamp(this.lookYaw - dx * 0.0031, -1.14, 1.14);
    this.lookPitch = clamp(this.lookPitch - dy * 0.0023, -0.25, 0.18);
  }

  setLookFromTilt(yaw, pitch) {
    if (this.phase !== 'playing' || this.monitor) return;
    this.lookYaw = clamp(yaw, -1.14, 1.14);
    this.lookPitch = clamp(pitch, -0.25, 0.18);
  }

  toggleDoor(side) {
    if (this.phase !== 'playing') return;
    if (this.monitor) { this.hint('Lower the monitor before sealing a door.'); return; }
    if (this.powerOut) return;
    this.doors[side] = !this.doors[side];
    this.world.setDoor(side, this.doors[side]);
    this.audio.door(side, this.doors[side]);
    this._pushState(true);
  }

  setMonitor(open) {
    if (this.phase !== 'playing') return;
    if (this.powerOut) { this.hint('No power. The monitor is dead.'); return; }
    if (this.redAlert) { this.hint('The camera feed will not hold.'); return; }
    if (open === this.monitor) return;
    this.monitor = open;
    if (open) {
      this.flashlight = false;
      this.world.setFlashlight(false);
      this.camsVisited.add(this.activeCam);
      this.camChecks++;
      this.audio.cameraUp();
      this.cb.onCameraOpen?.({ cam: this.activeCam, monitor: this.snapshot });
    } else {
      this.audio.cameraDown();
      this.cb.onCameraClose?.();
    }
    this._pushState(true);
  }

  toggleMonitor() {
    this.setMonitor(!this.monitor);
  }

  setCamera(camKey) {
    if (!CAMERA_DEFS[camKey] || this.phase !== 'playing') return;
    if (!this.monitor) { this.setMonitor(true); }
    if (this.activeCam === camKey) return;
    this.activeCam = camKey;
    this.camsVisited.add(camKey);
    this.camChecks++;
    this.audio.cameraSwitch();
    this.cb.onCameraSwitch?.({ cam: camKey, def: CAMERA_DEFS[camKey] });
    this._pushState(true);
  }

  toggleFlashlight(force) {
    if (this.phase !== 'playing') return;
    const want = typeof force === 'boolean' ? force : !this.flashlight;
    if (want && (this.battery <= 0 || this.monitor)) {
      if (this.battery <= 0) this.hint('Torch cell depleted. Let it recover.');
      return;
    }
    if (want === this.flashlight) return;
    this.flashlight = want;
    this.world.setFlashlight(want, this.battery > 20 ? 1 : .65);
    this.audio.flashlight(want);
    this._pushState(true);
  }

  hint(text) {
    this.cb.onHint?.(text);
  }

  event(text, danger = false) {
    this.cb.onEvent?.({ text, danger, time: this.getClockLabel() });
  }

  /* ------------------------- update ------------------------- */
  update(dt) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    this._hz += dt;

    if (this.phase === 'menu') {
      this.world.update(dt, this.time, { menu: true });
      return;
    }

    if (this.phase === 'intro') {
      this.introTimer -= dt;
      this.world.update(dt, this.time, { hour: 0, powerOut: false, flicker: 1 });
      this._placeCharacters();
      if (this.introTimer <= 0) {
        this.phase = 'playing';
        this.cb.onIntroEnd?.();
        this._pushState(true);
      }
      return;
    }

    if (this.phase === 'paused') {
      return;
    }

    if (this.phase === 'jumpscare') {
      this._updateJumpscare(dt);
      this.world.update(dt, this.time, {
        hour: this.hour, powerOut: this.powerOut, flicker: 0.2, redAlert: true
      });
      return;
    }

    if (this.phase === 'gameover' || this.phase === 'victory') {
      this.world.update(dt * .35, this.time, {
        hour: this.phase === 'victory' ? 5.8 : this.hour, powerOut: false,
        flicker: this.phase === 'victory' ? 1 : .35, redAlert: false
      });
      return;
    }

    if (this.phase !== 'playing') return;

    this.elapsed += dt;
    this.hourFloat = this.elapsed / SECONDS_PER_HOUR;
    this.hour = Math.floor(this.hourFloat);

    if (this.hourFloat >= 6) { this._victory(); return; }

    if (this.hour !== this._lastHour) {
      this._lastHour = this.hour;
      this._onHour(this.hour);
    }

    this._updateResources(dt);
    this._updateAI(dt);
    if (this.phase !== 'playing') return;
    this._updateMuzan(dt);
    if (this.phase !== 'playing') return;
    this._updateCameraEffects(dt);

    if (this.powerOut) this._updatePowerOut(dt);

    this._placeCharacters();

    // exhaust flashlight
    if (this.flashlight) {
      this.battery = Math.max(0, this.battery - 1.25 * this.diff.battery * dt);
      if (this.battery <= 0) {
        this.flashlight = false;
        this.world.setFlashlight(false);
        this.hint('The torch dies in your hand.');
        this.event('Torch cell depleted.', true);
        this._pushState(true);
      }
      this.world.setFlashlight(true, this.battery > 20 ? 1 : .55);
    } else {
      this.battery = Math.min(100, this.battery + .22 * dt);
    }

    // camera sway/feed
    const security = this.monitor && !this.powerOut ? this.activeCam : null;
    this.world.update(dt, this.time, {
      security,
      hour: this.hour,
      hourFloat: this.hourFloat,
      powerOut: this.powerOut,
      redAlert: this.redAlert,
      monitorCam: security,
      timeLabel: this.getClockLabel(),
      power: this.power,
      danger: this.doorAlerts,
      flicker: 1
    });
    this.world.updateCamera(this.world.officeCamera, this.lookYaw, this.lookPitch);

    const tension = this._tensionLevel();
    this.audio.setTension(tension);
    if (this._hz > .07) {
      this._hz = 0;
      this._pushState();
    }
  }

  _updateResources(dt) {
    if (this.powerOut) return;
    let usage = 0.1;
    if (this.monitor) usage += 0.19;
    if (this.doors.left) usage += 0.29;
    if (this.doors.right) usage += 0.29;
    if (this.ai.inosuke?.state === 'door' && this.ai.inosuke.active) usage += 0.46;
    if (this.redAlert) usage += 0.7;
    this.usage = Math.round(usage * 10) / 10;
    this.power = Math.max(0, this.power - usage * this.diff.power * dt);
    if (this.power <= 0) this._powerOut();
  }

  _powerOut() {
    if (this.powerOut) return;
    this.powerOut = true;
    this.powerOutTimer = 0;
    this.monitor = false;
    this.doors.left = false;
    this.doors.right = false;
    this.world.setDoor('left', false);
    this.world.setDoor('right', false);
    this.audio.powerDown();
    document.body.classList.add('power-out');
    this.cb.onPowerOut?.();
    this.event('POWER FAILURE. The doors slide open. Something moves in the dark.', true);
    this.cb.onDanger?.({ left: false, right: false, vent: false });
    this.audio.setTension(1);
    this._pushState(true);
  }

  _updatePowerOut(dt) {
    this.powerOutTimer += dt;
    const marks = [3, 7, 11];
    for (const m of marks) {
      if (this.powerOutTimer >= m && !this[`_po${m}`]) {
        this[`_po${m}`] = true;
        if (m === 3) this.event('A chair scrapes somewhere behind you.', true);
        if (m === 7) { this.event('Two red eyes open at the back of the office.', true); this.audio.whisperDanger(); }
        if (m === 11) this.event('It is standing right behind you.', true);
      }
    }
    if (this.powerOutTimer > 14) {
      const ids = Object.keys(this.ai).filter(id => this.ai[id].active);
      const attacker = ids.includes('muzan') ? 'muzan' : (ids.includes('tanjiro') ? 'tanjiro' : ids[0] || 'tanjiro');
      this._beginJumpscare(attacker, 'power');
    }
  }

  _onHour(hour) {
    if (hour === 0) return;
    this.audio.hourChime(hour);
    const lines = {
      1: '1:00 AM. The building settles around you.',
      2: '2:00 AM. You can hear something breathing through the wall.',
      3: '3:00 AM. Halfway there. The cameras are starting to drift.',
      4: '4:00 AM. The halls have gone quiet. Too quiet.',
      5: '5:00 AM. One hour left. They know the sun is coming.'
    };
    this.event(lines[hour] || `${hour}:00 AM.`, hour >= 4);
    if (hour === 4) this.hint('The last hour is the worst. Watch every feed.');
    if (hour === 5) this.hint('One hour. Hold on.');
    this.cb.onHour?.({ hour });
  }

  /* ------------------------- AI ------------------------- */
  _customPace(cfg) {
    const levels = Object.values(cfg || {}).filter(v => typeof v === 'number');
    const max = levels.length ? Math.max(...levels) : 0;
    const t = clamp(max / 20, 0, 1);
    return {
      first: [22 - t * 16, 30 - t * 20],
      grace: 2.15 - t * 1.05,
      move: 1.14 - t * 0.32
    };
  }

  _moveDelay(ai) {
    const base = BASE_MOVE[ai.id] - ai.level * .16;
    return clamp(base * rand(.74, 1.28), 1.25, 9.5) * (this.pace?.move ?? 1) / this.diff.ai;
  }

  _updateAI(dt) {
    for (const id of Object.keys(this.ai)) {
      const ai = this.ai[id];
      if (!ai.active || id === 'muzan') continue;
      if (ai.state === 'retreat') {
        ai.retreatTimer -= dt;
        if (ai.retreatTimer <= 0) {
          ai.state = 'roam';
          ai.moveTimer = this._moveDelay(ai) * .8;
          ai.announced = false;
        }
        continue;
      }

      if (ai.state === 'door') {
        const side = ai.room === 'westDoor' ? 'left' : 'right';
        if (this.doors[side]) {
          ai.closedTime += dt;
          if (ai.closedTime > .48) {
            this._retreat(ai, side);
            continue;
          }
        } else {
          ai.closedTime = 0;
        }
        if (id === 'inosuke' && Math.random() < dt * .38) {
          this.audio.bang();
          this.cb.onShake?.(.18);
        }
        ai.doorTimer -= dt;
        if (ai.doorTimer <= 0) {
          this._beginJumpscare(id, 'door');
          return;
        }
        continue;
      }

      if (ai.state === 'ventDoor') {
        if (this.flashlight && this._isAimingAtVent()) {
          ai.lightTimer += dt;
          if (ai.lightTimer > .52) {
            this._retreat(ai, 'vent');
            continue;
          }
        } else {
          ai.lightTimer = Math.max(0, ai.lightTimer - dt * .4);
        }
        if (this.monitor && this.activeCam === 'vent') {
          ai.ventSeen += dt;
          if (ai.ventSeen > .72) {
            this.event('On CAM 07, Nezuko recoils from the lens.', false);
            this._retreat(ai, 'vent');
            continue;
          }
        } else {
          ai.ventSeen = Math.max(0, ai.ventSeen - dt);
        }
        ai.doorTimer -= dt;
        if (ai.doorTimer <= 0) {
          this._beginJumpscare(id === 'nezuko' ? 'nezuko' : id, 'vent');
          return;
        }
        continue;
      }

      // roam
      if (ai.walkTimer > 0) ai.walkTimer -= dt;
      if (id === 'giyu' && !this.monitor) continue;
      if (id === 'tanjiro' && this.monitor && this.activeCam === ai.room) {
        ai.moveTimer = Math.max(ai.moveTimer, .9);
        continue;
      }
      let speed = 1;
      if (id === 'inosuke' && this.monitor && this.activeCam === ai.room) speed = 1.7;
      if (id === 'zenitsu') speed = 1.15;
      ai.moveTimer -= dt * speed;
      if (ai.moveTimer > 0) continue;

      const next = this._nextRoom(ai);
      if (!next) { ai.moveTimer = this._moveDelay(ai); continue; }
      if (next === 'westDoor' || next === 'eastDoor') {
        ai.room = next;
        ai.state = 'door';
        ai.doorTimer = DOOR_GRACE[id] * this.diff.grace * (this.pace?.grace ?? 1);
        ai.closedTime = 0;
        ai.announced = true;
        this._arriveAtDoor(ai, next === 'westDoor' ? 'left' : 'right');
      } else if (next === 'vent') {
        if (ai.room === 'vent') {
          ai.state = 'ventDoor';
          ai.doorTimer = DOOR_GRACE.nezuko * this.diff.grace * (this.pace?.grace ?? 1);
          ai.lightTimer = 0;
          ai.ventSeen = 0;
          this._arriveAtVent(ai);
        } else {
          // First she has to crawl into the duct; CAM 07 can catch her there.
          ai.room = 'vent';
          ai.state = 'roam';
          ai.walkTimer = 1.6;
          ai.moveTimer = this._moveDelay(ai);
          this.audio.hiss();
          this.event('Something scrapes inside the vent.', true);
        }
      } else {
        ai.room = next;
        ai.state = 'roam';
        ai.walkTimer = 1.4;
        ai.moveTimer = this._moveDelay(ai);
      }
    }
  }

  _nextRoom(ai) {
    const r = ai.room;
    switch (ai.id) {
      case 'tanjiro':
        if (r === 'stage') return 'dining';
        if (r === 'dining') return 'west';
        if (r === 'west') return 'westDoor';
        return 'west';
      case 'nezuko':
        if (r === 'dining') return 'vent';
        if (r === 'vent') return 'vent';
        return 'dining';
      case 'zenitsu':
        if (r === 'stage' || r === 'dining') return Math.random() < .5 ? 'west' : 'east';
        if (r === 'west') return 'westDoor';
        if (r === 'east') return 'eastDoor';
        return Math.random() < .5 ? 'west' : 'east';
      case 'inosuke':
        if (r === 'dining' || r === 'east') return 'eastDoor';
        return 'dining';
      case 'giyu':
        if (r === 'west') return 'westDoor';
        return 'west';
      default:
        return null;
    }
  }

  _arriveAtDoor(ai, side) {
    const whisper = CHARACTERS[ai.id].hint;
    this.event(whisper, true);
    this.audio.dangerCharacter(ai.id);
    this.cb.onDoorAlert?.({ side, on: true, character: ai.id });
    this.doorAlerts[side] = true;
    this._pushState(true);
  }

  _arriveAtVent(ai) {
    this.event('Nezuko is in the vent. Torch the vent or check CAM 07.', true);
    this.audio.dangerCharacter('nezuko');
    this.cb.onVentAlert?.(true);
    this.doorAlerts.vent = true;
    this._pushState(true);
  }

  _retreat(ai, side) {
    ai.state = 'retreat';
    ai.retreatTimer = rand(1.7, 2.8);
    ai.closedTime = 0;
    if (side === 'vent') {
      ai.room = 'dining';
      this.doorAlerts.vent = false;
      this.cb.onVentAlert?.(false);
      this.event('The scraping in the vent fades away.', false);
    } else {
      ai.room = side === 'left' ? 'west' : 'east';
      this.doorAlerts[side] = false;
      this.cb.onDoorAlert?.({ side, on: false, character: ai.id });
      this.audio.knock(side);
      this.event(`Something strikes the ${side} door. Then silence.`, false);
    }
    ai.announced = false;
    this._pushState(true);
  }

  _updateMuzan(dt) {
    const m = this.ai.muzan;
    if (!m || !m.active || this.powerOut) return;

    if (m.state === 'manifest') {
      this.redAlert = true;
      m.manifestTimer -= dt;
      const aiming = this.flashlight && this._isAimingAtMuzan();
      if (aiming) {
        m.banish += dt;
        this.world.setFlashlight(true, 1.2);
      } else {
        m.banish = Math.max(0, m.banish - dt * .22);
      }
      if (m.banish >= 1.18) {
        m.state = 'hunt';
        m.banish = 0;
        m.nextManifest = rand(24, 34) - m.level * .55;
        this.redAlert = false;
        this.event('Muzan dissolves into the dark. He will come back.', true);
        this.audio.sting(.45);
        this.audio.powerRestored();
        this.cb.onMuzan?.({ on: false });
        this._pushState(true);
        return;
      }
      if (m.manifestTimer <= 0) {
        this._beginJumpscare('muzan', 'manifest');
        return;
      }
      if (m.manifestTimer < 1.1 && !m.warned) {
        m.warned = true;
        this.audio.sting(.9);
        this.event('He is almost on you. HOLD THE LIGHT.', true);
      }
      return;
    }

    // hunting: occasionally flickers across a wrong camera
    if (m.state === 'dormant' || m.state === 'hunt') {
      m.nextManifest -= dt;
      m.huntMove = (m.huntMove || 0) - dt;
      if (m.huntMove <= 0) {
        m.huntMove = rand(7, 12);
        const rooms = ['stage', 'dining', 'west', 'east', 'kitchen', 'storage'];
        m.room = rooms[(Math.random() * rooms.length) | 0];
      }
      if (this.monitor && this.activeCam === m.room) {
        m.glitch = Math.min(1, (m.glitch || 0) + dt * .6);
      } else {
        m.glitch = Math.max(0, (m.glitch || 0) - dt * .3);
      }
      if (m.nextManifest <= 0) {
        m.state = 'manifest';
        m.room = 'office';
        m.manifestTimer = clamp(4.9 - m.level * .13, 2.25, 4.9) * this.diff.grace;
        m.banish = 0;
        m.warned = false;
        this.monitor = false;
        this.flashlight = false;
        this.world.setFlashlight(false);
        this.audio.cameraDown();
        this.cb.onCameraClose?.();
        this.audio.sting(1.4);
        this.audio.whisperDanger();
        this.redAlert = true;
        this.event('MUZAN IS IN THE OFFICE. HOLD THE TORCH ON HIM.', true);
        this.cb.onMuzan?.({ on: true });
        this.cb.onGlitch?.(1);
        this._pushState(true);
      }
    }
  }

  _updateCameraEffects(dt) {
    const m = this.ai.muzan;
    let glitch = 0;
    if (m?.active) {
      if (m.state === 'manifest') glitch = 1;
      else if (this.monitor && m.room === this.activeCam) glitch = .45 + (m.glitch || 0) * .3;
    }
    this.camSignal = Math.round(98 - glitch * 55 - (this.powerOut ? 30 : 0));
    if (glitch > .4 && Math.random() < dt * 2.5) this.cb.onGlitch?.(glitch);
    if (this.doorAlerts.left || this.doorAlerts.right || this.doorAlerts.vent) {
      if (Math.random() < dt * .35) this.cb.onShake?.(.08);
    }
  }

  _placeCharacters() {
    if (this.phase === 'jumpscare' || this.phase === 'gameover' || this.phase === 'victory') return;
    const used = {};
    // hide all first
    for (const id of Object.keys(this.world.characters)) this.world.characters[id].visible = false;
    for (const id of Object.keys(this.ai)) {
      const ai = this.ai[id];
      if (!ai.active) continue;
      let room = ai.room;
      let mode = ai.state === 'door' || ai.state === 'ventDoor' ? 'menace' : (ai.walkTimer > 0 ? 'walk' : 'idle');
      if (id === 'muzan') {
        if (ai.state === 'manifest') { room = 'office'; mode = 'menace'; }
        else if (ai.state === 'hunt' || ai.state === 'dormant') {
          if (!this.monitor || this.activeCam !== ai.room) { continue; }
          mode = 'idle';
        } else continue;
      }
      if (room === 'dormant') continue;
      if (room === 'westDoor' && this.doors.left) continue;
      if (room === 'eastDoor' && this.doors.right) continue;
      if (room === 'vent' && ai.state === 'ventDoor') mode = 'crawl';
      const slot = used[room] || 0;
      used[room] = slot + 1;
      this.world.setCharacterPlacement(id, room, slot, true, mode);
    }
    this.doorAlerts.left = Object.values(this.ai).some(a => a.active && a.state === 'door' && a.room === 'westDoor');
    this.doorAlerts.right = Object.values(this.ai).some(a => a.active && a.state === 'door' && a.room === 'eastDoor');
    this.doorAlerts.vent = !!(this.ai.nezuko?.active && this.ai.nezuko.state === 'ventDoor');
  }

  _isAimingAtVent() {
    // The office vent is on the front wall, up and to the left of the desk.
    return this._lookDot(-3.9, 2.92 - 1.62, -4.87 - 3.35) > 0.86;
  }

  _isAimingAtMuzan() {
    return this._lookDot(0, 1.58 - 1.62, 1.6 - 3.35) > 0.72;
  }

  _lookDot(dx, dy, dz) {
    const len = Math.hypot(dx, dy, dz) || 1;
    const cp = Math.cos(this.lookPitch);
    const fx = -Math.sin(this.lookYaw) * cp;
    const fy = Math.sin(this.lookPitch);
    const fz = -Math.cos(this.lookYaw) * cp;
    return (dx * fx + dy * fy + dz * fz) / len;
  }

  _tensionLevel() {
    let t = .08;
    if (this.monitor) t += .08;
    if (this.doorAlerts.left || this.doorAlerts.right) t = .76;
    if (this.doorAlerts.vent) t = Math.max(t, .68);
    if (this.ai.giyu?.active && this.monitor) t += .08;
    if (this.ai.inosuke?.state === 'door') t = Math.max(t, .9);
    if (this.ai.muzan?.state === 'manifest') t = 1;
    if (this.powerOut) t = 1;
    return clamp(t * this.diff.tension, 0, 1);
  }

  _updateJumpscare(dt) {
    this.jumpscareTimer += dt;
    const c = this.world.characters[this.jumpscareId];
    if (c) {
      const t = this.jumpscareTimer;
      const rush = 1 - Math.pow(1 - Math.min(1, t / .62), 3);
      c.position.z = -0.8 + rush * 2.95;
      c.position.x = Math.sin(t * 37) * .035;
      c.position.y = (this.jumpscareId === 'nezuko' ? -.05 : 0) + Math.sin(t * 19) * .012;
      c.rotation.z = Math.sin(t * 21) * .055;
      c.rotation.x = -0.03;
      c.userData.mode = 'jumpscare';
      if (this.jumpscareLight) {
        this.jumpscareLight.position.set(0, 1.72, c.position.z + .62);
        this.jumpscareLight.intensity = 13 + Math.sin(t * 24) * 4;
      }
    }
    if (this.jumpscareTimer > .1 && this.jumpscareTimer < .95) {
      this.world.officeCamera.rotation.z = Math.sin(this.jumpscareTimer * 43) * .035;
      this.world.officeCamera.rotation.x = 0.012 + Math.sin(this.jumpscareTimer * 31) * .012;
    }
    if (this.jumpscareTimer > 2.3) {
      this.phase = 'gameover';
      document.body.classList.remove('shake', 'jumpscare');
      const data = this._resultData(this.jumpscareId);
      this.audio.gameOver();
      this.cb.onGameOver?.(data);
      this._pushState(true);
    }
  }

  _beginJumpscare(id, cause = 'door') {
    if (this.phase !== 'playing') return;
    if (!this.world.characters[id]) id = 'tanjiro';
    this.phase = 'jumpscare';
    this.jumpscareId = id;
    this.jumpscareTimer = 0;
    this.monitor = false;
    this.flashlight = false;
    this.redAlert = false;
    this.world.setFlashlight(false);
    this.world.setDoor('left', false);
    this.world.setDoor('right', false);
    this.audio.jumpscare(id);
    this.cb.onJumpscare?.({ id, name: CHARACTERS[id].name, cause });
    document.body.classList.add('jumpscare', 'shake');
    this.world.setMenuMode(false);
    // position the attacker
    const c = this.world.characters[id];
    Object.values(this.world.characters).forEach(ch => ch.visible = false);
    c.visible = true;
    c.scale.setScalar(1.02);
    c.position.set(0, 0, -0.85);
    c.rotation.set(0, 0, 0);
    c.userData.mode = 'jumpscare';
    this.lookYaw = 0;
    this.lookPitch = -0.015;
    this.world.officeCamera.rotation.set(0, 0, 0);
    this.world.officeCamera.position.set(0, 1.62, 3.35);
    if (!this.jumpscareLight) {
      this.jumpscareLight = new THREE.PointLight(0xff3c3c, 9, 7, 2);
      this.world.scene.add(this.jumpscareLight);
    }
    this.jumpscareLight.position.set(0, 1.72, 2.55);
    this.jumpscareLight.intensity = 13;
    this.cb.onDanger?.({ left: false, right: false, vent: false });
    this._pushState(true);
    this.audio.setTension(0);
  }

  _victory() {
    if (this.phase === 'victory') return;
    this.phase = 'victory';
    this.monitor = false;
    this.flashlight = false;
    this.redAlert = false;
    this.powerOut = false;
    this.world.setFlashlight(false);
    this.world.setMenuMode(false);
    this.world.setCharacterPlacement('tanjiro', 'stage', 0, false);
    Object.values(this.world.characters).forEach(c => c.visible = false);
    this.world.setOfficeLighting({ powerOut: false, flicker: 1, hour: 5.8, redAlert: false });
    document.body.classList.remove('power-out', 'jumpscare', 'shake');
    this.audio.victory();
    this.audio.setTension(0);
    const stars = 1 + (this.power > 30 ? 1 : 0) + (this.camsVisited.size >= 5 ? 1 : 0);
    const data = { ...this._resultData(null), won: true, stars, power: this.power, battery: this.battery, cams: this.camsVisited.size, night: this.night, custom: this.custom };
    this.cb.onVictory?.(data);
    this._pushState(true);
  }

  _resultData(enemyId) {
    return {
      won: false,
      enemy: enemyId,
      enemyName: enemyId ? CHARACTERS[enemyId].name : '',
      night: this.night,
      custom: this.custom,
      time: this.getClockLabel(),
      power: Math.round(this.power),
      battery: Math.round(this.battery),
      cams: this.camsVisited.size,
      camChecks: this.camChecks,
      difficulty: this.difficulty
    };
  }

  getClockLabel() {
    const hf = clamp(this.hourFloat, 0, 5.999);
    const hourNum = Math.floor(hf);
    const minutes = Math.floor((hf - hourNum) * 60);
    const displayHour = hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:${String(minutes).padStart(2, '0')} AM`;
  }

  getClockParts() {
    const hf = clamp(this.hourFloat, 0, 5.999);
    const hourNum = Math.floor(hf);
    const minutes = Math.floor((hf - hourNum) * 60);
    return { hour: hourNum === 0 ? 12 : hourNum, minutes, ampm: 'AM' };
  }

  _makeSnapshot() {
    return {
      phase: this.phase,
      night: this.night,
      custom: this.custom,
      difficulty: this.difficulty,
      hour: this.hour,
      hourFloat: this.hourFloat,
      timeLabel: this.getClockLabel(),
      clock: this.getClockParts(),
      power: this.power,
      battery: this.battery,
      usage: this.usage || 1,
      monitor: this.monitor,
      activeCam: this.activeCam,
      doors: { ...this.doors },
      flashlight: this.flashlight,
      powerOut: this.powerOut,
      redAlert: this.redAlert,
      danger: { ...this.doorAlerts },
      camSignal: this.camSignal ?? 98,
      cams: this.camsVisited.size,
      tension: this._tensionLevel()
    };
  }

  _pushState(force = false) {
    if (!force && this.time - this.lastStatePush < .05) return;
    this.lastStatePush = this.time;
    this.snapshot = this._makeSnapshot();
    this.cb.onState?.(this.snapshot);
  }

  getViewMode() {
    if (this.phase === 'menu') return 'menu';
    if (this.phase === 'jumpscare' || this.phase === 'gameover' || this.phase === 'victory') return 'office';
    if (this.monitor && (this.phase === 'playing' || this.phase === 'paused')) return 'camera';
    return 'office';
  }

  getCamera() {
    if (this.getViewMode() === 'menu') return this.world.menuCamera;
    if (this.getViewMode() === 'camera') return this.world.securityCamera;
    return this.world.officeCamera;
  }
}
