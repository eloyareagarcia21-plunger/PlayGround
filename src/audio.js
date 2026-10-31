/* KIMETSU: NIGHTMARE SHIFT — procedural sound design.
   Everything is synthesized in the browser: ambience, score, stingers and scares. */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.sfxBus = null;
    this.reverb = null;
    this.masterVol = 0.8;
    this.musicVol = 0.55;
    this.sfxVol = 0.85;
    this.scene = 'none';
    this.tension = 0;
    this.enabled = true;
    this.started = false;
    this.musicTimer = null;
    this.ambientTimer = null;
    this.step = 0;
    this.lastPulse = 0;
    this.noiseBuffer = null;
    this.menuGain = null;
    this.gameGain = null;
    this.droneNodes = [];
    this.heartbeatGain = null;
    this.heartbeatTimer = null;
    this._heartbeatNext = 0;
    this._ambientNext = 0;
  }

  init() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.started = true;
      this._buildGraph();
      this._makeNoise();
      this._startAmbience();
      this._startMusicEngine();
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (err) {
      console.warn('Audio unavailable', err);
    }
  }

  _buildGraph() {
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = this.masterVol;
    this.master.connect(c.destination);

    this.musicBus = c.createGain();
    this.musicBus.gain.value = this.musicVol;
    this.sfxBus = c.createGain();
    this.sfxBus.gain.value = this.sfxVol;

    // A small algorithmic hall. Gives the cheap oscillators a haunted room.
    this.reverb = c.createConvolver();
    const len = Math.floor(c.sampleRate * 2.6);
    const impulse = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = impulse.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2) * (0.4 + 0.6 * Math.random());
      }
    }
    this.reverb.buffer = impulse;
    const revGain = c.createGain();
    revGain.gain.value = 0.32;
    this.reverb.connect(revGain);
    revGain.connect(this.master);

    this.musicBus.connect(this.master);
    this.musicBus.connect(this.reverb);
    this.sfxBus.connect(this.master);
    const sfxSend = c.createGain();
    sfxSend.gain.value = 0.12;
    this.sfxBus.connect(sfxSend);
    sfxSend.connect(this.reverb);

    this.menuGain = c.createGain();
    this.menuGain.gain.value = 1;
    this.menuGain.connect(this.musicBus);
    this.gameGain = c.createGain();
    this.gameGain.gain.value = 0;
    this.gameGain.connect(this.musicBus);

    this.heartbeatGain = c.createGain();
    this.heartbeatGain.gain.value = 0;
    this.heartbeatGain.connect(this.master);
  }

  _makeNoise() {
    const c = this.ctx;
    const len = c.sampleRate * 4;
    const buffer = c.createBuffer(1, len, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.018 * white) / 1.018;
      data[i] = last * 3.2;
    }
    this.noiseBuffer = buffer;
  }

  setVolumes(master, music, sfx) {
    this.masterVol = clamp(master, 0, 1);
    this.musicVol = clamp(music, 0, 1);
    this.sfxVol = clamp(sfx, 0, 1);
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.masterVol, now, 0.05);
    this.musicBus.gain.setTargetAtTime(this.musicVol, now, 0.05);
    this.sfxBus.gain.setTargetAtTime(this.sfxVol, now, 0.05);
  }

  _startAmbience() {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 240;
    filter.Q.value = 0.4;
    const gain = c.createGain();
    gain.gain.value = 0.035;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start();
    this.windGain = gain;

    // Two very low, slightly detuned drones.
    [41.2, 55, 82.4].forEach((freq, i) => {
      const osc = c.createOscillator();
      osc.type = i === 2 ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      osc.detune.value = i === 1 ? 4 : -3;
      const g = c.createGain();
      g.gain.value = i === 2 ? 0.012 : 0.023;
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 180;
      osc.connect(f);
      f.connect(g);
      g.connect(this.master);
      osc.start();
      this.droneNodes.push({ osc, gain: g });
    });
  }

  _startMusicEngine() {
    if (this.musicTimer) return;
    this.musicTimer = setInterval(() => this._tickMusic(), 420);
    this.ambientTimer = setInterval(() => this._ambientTick(), 1000);
  }

  setScene(scene) {
    this.scene = scene;
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.menuGain.gain.setTargetAtTime(scene === 'menu' ? 0.9 : 0, now, 1.2);
    this.gameGain.gain.setTargetAtTime(scene === 'game' ? 1 : 0, now, 1.1);
    if (this.windGain) this.windGain.gain.setTargetAtTime(scene === 'game' ? 0.045 : 0.022, now, 1);
    if (scene !== 'game') this._setHeartbeat(0);
  }

  setTension(v) {
    this.tension = clamp(v, 0, 1);
  }

  _tickMusic() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    this.step++;
    if (this.scene === 'menu') {
      // Sparse, ceremonial motif in D minor. Original composition.
      const seq = [146.83, 220, 174.61, 261.63, 196, 293.66, 174.61, 130.81];
      if (this.step % 6 === 0) {
        const f = seq[(this.step / 6) % seq.length | 0];
        this._pluck(f, 3.8, 0.065, 'triangle', this.menuGain);
        this._pluck(f * 2, 2.2, 0.012, 'sine', this.menuGain, 0.4);
      }
      if (this.step % 24 === 12) {
        this._pad(73.42, 7.5, 0.028, this.menuGain);
        this._pad(110, 7.5, 0.015, this.menuGain);
      }
    } else if (this.scene === 'game') {
      // Pulse and pulse only. Tension adds dissonant upper voices.
      if (now - this.lastPulse > (1.65 - this.tension * 0.75)) {
        this.lastPulse = now;
        this._pulse(46 + (this.step % 2) * 4, 0.6, 0.07 + this.tension * 0.045);
        this._pulse(92, 0.3, 0.025);
      }
      if (this.step % (this.tension > 0.6 ? 14 : 26) === 0) {
        const notes = [311.13, 293.66, 349.23, 233.08];
        this._pluck(notes[(Math.random() * notes.length) | 0], 4.2, 0.018 + this.tension * 0.017, 'sine', this.gameGain);
      }
      if (this.tension > 0.55 && this.step % 8 === 0) {
        this._creak(0.2 + Math.random() * 0.4);
      }
    }
    if (this.scene === 'game') this._scheduleHeartbeat(now);
  }

  _scheduleHeartbeat(now) {
    if (now < this._heartbeatNext || this.tension < 0.12) return;
    this._heartbeatNext = now + (1.25 - this.tension * 0.7);
    this._thump(now, 0.055 + this.tension * 0.12);
    this._thump(now + 0.18, 0.04 + this.tension * 0.08);
  }

  _setHeartbeat(v) {
    if (!this.ctx) return;
    this.tension = v;
    this._heartbeatNext = this.ctx.currentTime;
    if (this.heartbeatGain) this.heartbeatGain.gain.setTargetAtTime(v > 0.12 ? 1 : 0, this.ctx.currentTime, 0.2);
  }

  _ambientTick() {
    if (!this.ctx || this.scene !== 'game') return;
    const now = this.ctx.currentTime;
    if (now < this._ambientNext) return;
    this._ambientNext = now + 8 + Math.random() * 16;
    const r = Math.random();
    if (r < 0.35) this._creak(0.3 + Math.random() * 0.5);
    else if (r < 0.6) this._distantThud();
    else if (r < 0.8) this._whisper();
    else this._pipe();
  }

  _tone({ freq = 220, endFreq = null, dur = 0.3, type = 'sine', gain = 0.1, when = 0, bus = null, attack = 0.01, release = null }) {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = when || c.currentTime;
    const osc = c.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), t);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + Math.min(attack, dur * 0.4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(bus || this.sfxBus);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  _noise({ dur = 0.3, gain = 0.1, filter = 1000, type = 'bandpass', q = 0.8, when = 0, bus = null, rate = 1 }) {
    if (!this.ctx || !this.noiseBuffer) return;
    const c = this.ctx;
    const t = when || c.currentTime;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = rate;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(filter, t);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(bus || this.sfxBus);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  _pluck(freq, dur, gain, type = 'triangle', bus = null, delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    this._tone({ freq, dur, type, gain, when: t, bus: bus || this.musicBus, attack: 0.02 });
    this._tone({ freq: freq * 2.01, dur: dur * 0.8, type: 'sine', gain: gain * 0.24, when: t, bus: bus || this.musicBus });
  }

  _pad(freq, dur, gain, bus) {
    this._tone({ freq, dur, type: 'sine', gain, when: 0, bus, attack: 1.5 });
    this._tone({ freq: freq * 1.5, dur, type: 'triangle', gain: gain * 0.35, when: 0.2, bus, attack: 1.8 });
  }

  _pulse(freq, dur, gain) {
    this._tone({ freq, endFreq: freq * 0.5, dur, type: 'sine', gain, when: 0, bus: this.gameGain, attack: 0.005 });
  }

  _thump(when, gain = 0.1) {
    this._tone({ freq: 58, endFreq: 37, dur: 0.22, type: 'sine', gain, when, bus: this.master, attack: 0.004 });
  }

  _creak(volume = 0.4) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const c = this.ctx;
    const osc = c.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80 + Math.random() * 90, t);
    osc.frequency.linearRampToValueAtTime(45 + Math.random() * 50, t + 0.7);
    const f = c.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 740; f.Q.value = 8;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.015 * volume, t + 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    osc.connect(f); f.connect(g); g.connect(this.master);
    osc.start(t); osc.stop(t + 1);
  }

  _distantThud() {
    const t = this.ctx.currentTime + Math.random() * 0.2;
    this._noise({ dur: 0.5, gain: 0.045, filter: 112, type: 'lowpass', when: t });
    this._tone({ freq: 42, endFreq: 28, dur: 0.7, type: 'sine', gain: 0.035, when: t, bus: this.master });
  }

  _whisper() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._noise({ dur: 1.5, gain: 0.014, filter: 1450, type: 'bandpass', q: 4, when: t });
    this._noise({ dur: 1.2, gain: 0.01, filter: 2300, type: 'bandpass', q: 6, when: t + 0.5 });
  }

  _pipe() {
    this._tone({ freq: 180, endFreq: 150, dur: 1.8, type: 'sine', gain: 0.018, bus: this.master, attack: 0.2 });
    this._tone({ freq: 181.3, endFreq: 149, dur: 1.8, type: 'sine', gain: 0.013, bus: this.master, attack: 0.2 });
  }

  /* ------------------------- SFX ------------------------- */
  uiClick() {
    this.init();
    this._tone({ freq: 880, endFreq: 460, dur: 0.06, type: 'square', gain: 0.015 });
    this._noise({ dur: 0.04, gain: 0.02, filter: 3000, type: 'highpass' });
  }

  door(side, closing) {
    if (!this.ctx) return;
    const pan = side === 'left' ? -0.7 : 0.7;
    const t = this.ctx.currentTime;
    if (closing) {
      this._noise({ dur: 0.38, gain: 0.09, filter: 620, type: 'lowpass', when: t });
      this._tone({ freq: 210, endFreq: 74, dur: 0.34, type: 'square', gain: 0.045, when: t });
      this._tone({ freq: 58, endFreq: 38, dur: 0.5, type: 'sine', gain: 0.1, when: t + 0.29, bus: this.master });
      this._noise({ dur: 0.14, gain: 0.08, filter: 190, type: 'lowpass', when: t + 0.33 });
    } else {
      this._tone({ freq: 80, endFreq: 165, dur: 0.5, type: 'sawtooth', gain: 0.023, when: t });
      this._noise({ dur: 0.6, gain: 0.035, filter: 800, type: 'lowpass', when: t });
      this._tone({ freq: 65, endFreq: 44, dur: 0.4, type: 'sine', gain: 0.06, when: t + 0.35, bus: this.master });
    }
    // Mechanical clank
    this._noise({ dur: 0.08, gain: 0.06, filter: 2300, type: 'highpass', when: t + (closing ? 0.34 : 0.42) });
    void pan;
  }

  cameraUp() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 120, endFreq: 880, dur: 0.38, type: 'sawtooth', gain: 0.012, when: t });
    this._noise({ dur: 0.4, gain: 0.05, filter: 1400, type: 'bandpass', q: 1.5, when: t });
    this._tone({ freq: 1400, endFreq: 1600, dur: 0.05, type: 'square', gain: 0.012, when: t + 0.35 });
  }

  cameraDown() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 880, endFreq: 90, dur: 0.35, type: 'sawtooth', gain: 0.012, when: t });
    this._noise({ dur: 0.28, gain: 0.035, filter: 760, type: 'lowpass', when: t });
    this._tone({ freq: 65, endFreq: 42, dur: 0.25, type: 'sine', gain: 0.05, when: t + 0.25, bus: this.master });
  }

  cameraSwitch() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._noise({ dur: 0.2, gain: 0.07, filter: 2600, type: 'bandpass', q: 0.5, when: t });
    this._tone({ freq: 1200, dur: 0.035, type: 'square', gain: 0.01, when: t + 0.05 });
  }

  flashlight(on) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: on ? 1700 : 1100, endFreq: on ? 600 : 1800, dur: 0.04, type: 'square', gain: 0.018, when: t });
  }

  knock(side) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const x = t + i * 0.18;
      this._noise({ dur: 0.11, gain: 0.09, filter: 260, type: 'lowpass', when: x });
      this._tone({ freq: 72, endFreq: 47, dur: 0.18, type: 'sine', gain: 0.08, when: x, bus: this.master });
    }
    void side;
  }

  footstep(pan = 0, near = false) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const g = near ? 0.06 : 0.022;
    this._noise({ dur: 0.13, gain: g, filter: near ? 340 : 220, type: 'lowpass', when: t });
    this._tone({ freq: near ? 64 : 48, endFreq: 36, dur: 0.16, type: 'sine', gain: g * 0.8, when: t, bus: this.master });
    void pan;
  }

  sprint() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 5; i++) {
      this._noise({ dur: 0.09, gain: 0.04 + i * 0.008, filter: 380, type: 'lowpass', when: t + i * 0.1 });
      this._tone({ freq: 80 - i * 4, dur: 0.1, type: 'sine', gain: 0.04, when: t + i * 0.1, bus: this.master });
    }
  }

  breathing(near = false) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._noise({ dur: 1.2, gain: near ? 0.04 : 0.018, filter: near ? 700 : 460, type: 'bandpass', q: 1.4, when: t });
  }

  bang() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 5; i++) {
      this._noise({ dur: 0.18, gain: 0.11, filter: 200, type: 'lowpass', when: t + i * 0.19 });
      this._tone({ freq: 64, endFreq: 34, dur: 0.24, type: 'sine', gain: 0.12, when: t + i * 0.19, bus: this.master });
    }
  }

  hiss() {
    this._noise({ dur: 0.9, gain: 0.03, filter: 2800, type: 'highpass' });
  }

  staticBurst(amount = 0.5) {
    this.init();
    this._noise({ dur: 0.12 + amount * 0.4, gain: 0.035 + amount * 0.06, filter: 2100, type: 'bandpass', q: 0.4 });
  }

  sting(intensity = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 1660, endFreq: 155, dur: 0.8, type: 'sawtooth', gain: 0.035 * intensity, when: t, bus: this.master });
    this._tone({ freq: 1740, endFreq: 120, dur: 0.9, type: 'square', gain: 0.018 * intensity, when: t + 0.03 });
    this._noise({ dur: 0.55, gain: 0.08 * intensity, filter: 1800, type: 'bandpass', q: 0.7, when: t });
    this._thump(t, 0.2 * intensity);
  }

  whisperDanger() {
    this._whisper();
    this._tone({ freq: 196, dur: 2.6, type: 'sine', gain: 0.014, bus: this.master, attack: 0.8 });
  }

  powerDown() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 420, endFreq: 35, dur: 2.4, type: 'sawtooth', gain: 0.06, when: t, bus: this.master, attack: 0.02 });
    this._tone({ freq: 82, endFreq: 28, dur: 2.8, type: 'sine', gain: 0.11, when: t, bus: this.master });
    this._noise({ dur: 1.6, gain: 0.05, filter: 600, type: 'lowpass', when: t });
  }

  powerRestored() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 50, endFreq: 240, dur: 1.1, type: 'sawtooth', gain: 0.03, when: t });
    this._tone({ freq: 1200, dur: 0.08, type: 'square', gain: 0.012, when: t + 0.9 });
  }

  hourChime(hour) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const base = 196 + hour * 8;
    this._tone({ freq: base * 2, dur: 2.4, type: 'sine', gain: 0.05, when: t, bus: this.master, attack: 0.01 });
    this._tone({ freq: base * 2.5, dur: 2.8, type: 'sine', gain: 0.027, when: t + 0.08, bus: this.master });
    this._tone({ freq: base, dur: 3.4, type: 'sine', gain: 0.04, when: t + 0.1, bus: this.master, attack: 0.4 });
  }

  victory() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [146.83, 196, 246.94, 293.66, 369.99, 493.88];
    notes.forEach((n, i) => {
      this._tone({ freq: n, dur: 5, type: 'sine', gain: 0.035, when: t + i * 0.34, bus: this.master, attack: 0.04 });
      this._tone({ freq: n * 2, dur: 4, type: 'triangle', gain: 0.013, when: t + i * 0.34, bus: this.master });
    });
    for (let i = 0; i < 6; i++) {
      this._tone({ freq: 880 + i * 60, dur: 2.5, type: 'sine', gain: 0.018, when: t + 1.2 + i * 0.21, bus: this.master });
    }
  }

  gameOver() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this._tone({ freq: 220, endFreq: 42, dur: 3.8, type: 'sawtooth', gain: 0.04, when: t, bus: this.master });
    this._tone({ freq: 110, endFreq: 36, dur: 4, type: 'sine', gain: 0.08, when: t, bus: this.master });
    this._noise({ dur: 2.4, gain: 0.04, filter: 300, type: 'lowpass', when: t });
  }

  jumpscare(id) {
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const map = {
      tanjiro: { base: 92, type: 'sawtooth', noise: 900 },
      nezuko: { base: 135, type: 'triangle', noise: 500 },
      zenitsu: { base: 380, type: 'square', noise: 3400 },
      inosuke: { base: 72, type: 'sawtooth', noise: 280 },
      giyu: { base: 118, type: 'sine', noise: 2400 },
      muzan: { base: 39, type: 'sawtooth', noise: 620 },
      power: { base: 61, type: 'sawtooth', noise: 400 }
    };
    const s = map[id] || map.muzan;
    // Impact
    this._thump(t, 0.42);
    this._noise({ dur: 0.25, gain: 0.22, filter: 900, type: 'lowpass', when: t });
    // Roar / scream stack
    this._tone({ freq: s.base * 2.2, endFreq: s.base * 0.6, dur: 1.6, type: 'sawtooth', gain: 0.14, when: t + 0.02, bus: this.master, attack: 0.005 });
    this._tone({ freq: s.base * 3.05, endFreq: s.base * 0.8, dur: 1.9, type: 'square', gain: 0.06, when: t + 0.04, bus: this.master });
    this._tone({ freq: s.base * 1.49, endFreq: s.base * 0.5, dur: 1.6, type: 'triangle', gain: 0.1, when: t + 0.1, bus: this.master });
    this._noise({ dur: 1.4, gain: 0.18, filter: s.noise, type: 'bandpass', q: 0.6, when: t + 0.02 });
    // Character flavour
    if (id === 'zenitsu') {
      for (let i = 0; i < 4; i++) this._noise({ dur: 0.16, gain: 0.12, filter: 5200, type: 'highpass', when: t + 0.08 + i * 0.12 });
    } else if (id === 'inosuke') {
      this._noise({ dur: 0.8, gain: 0.13, filter: 320, type: 'lowpass', when: t + 0.15 });
      this._tone({ freq: 48, endFreq: 31, dur: 1.6, type: 'sine', gain: 0.18, when: t, bus: this.master });
    } else if (id === 'muzan') {
      [55, 58.3, 82.4, 116.5].forEach(f => this._tone({ freq: f, dur: 2.6, type: 'sawtooth', gain: 0.04, when: t, bus: this.master, attack: 0.03 }));
    } else if (id === 'giyu') {
      this._noise({ dur: 1.2, gain: 0.08, filter: 4200, type: 'highpass', when: t + 0.1 });
      this._tone({ freq: 900, endFreq: 120, dur: 1.1, type: 'sine', gain: 0.06, when: t + 0.1 });
    } else if (id === 'nezuko') {
      this._tone({ freq: 310, endFreq: 120, dur: 1.2, type: 'triangle', gain: 0.06, when: t + 0.2 });
    } else if (id === 'tanjiro') {
      this._tone({ freq: 1320, endFreq: 180, dur: 1.2, type: 'sine', gain: 0.045, when: t + 0.2 });
    }
  }

  dangerCharacter(id) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    switch (id) {
      case 'tanjiro':
        this.footstep(-0.5, true);
        this._noise({ dur: 0.8, gain: 0.025, filter: 900, type: 'bandpass', q: 2, when: t });
        break;
      case 'nezuko':
        this._noise({ dur: 1.4, gain: 0.027, filter: 1800, type: 'bandpass', q: 5, when: t });
        break;
      case 'zenitsu':
        this.sprint();
        break;
      case 'inosuke':
        this.breathing(true);
        this._tone({ freq: 70, dur: 0.4, type: 'sawtooth', gain: 0.025, when: t });
        break;
      case 'giyu':
        this._tone({ freq: 420, endFreq: 380, dur: 2.4, type: 'sine', gain: 0.016, when: t, bus: this.master, attack: 0.6 });
        break;
      case 'muzan':
        this._tone({ freq: 44, dur: 3, type: 'sawtooth', gain: 0.03, when: t, bus: this.master, attack: 0.3 });
        this.whisper();
        break;
    }
  }

  dispose() {
    if (this.musicTimer) clearInterval(this.musicTimer);
    if (this.ambientTimer) clearInterval(this.ambientTimer);
    if (this.ctx) this.ctx.close();
  }
}
