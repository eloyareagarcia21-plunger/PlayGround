export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.7;
    this.ambientNodes = [];
    this.started = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 20;
    comp.ratio.value = 7;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);

    const len = this.ctx.sampleRate * 2;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    this.startAmbient();
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }

  noiseSource(duration) {
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    s.start(0, Math.random() * 1.5);
    s.stop(this.ctx.currentTime + duration + 0.05);
    return s;
  }

  env(node, t0, a, d, peak = 1) {
    node.gain.setValueAtTime(0.0001, t0);
    node.gain.exponentialRampToValueAtTime(peak, t0 + a);
    node.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d);
  }

  startAmbient() {
    const ctx = this.ctx;
    // wind / distant industrial hum
    const wind = ctx.createBufferSource();
    wind.buffer = this.noise;
    wind.loop = true;
    const wf = ctx.createBiquadFilter();
    wf.type = 'lowpass';
    wf.frequency.value = 420;
    const wg = ctx.createGain();
    wg.gain.value = 0.045;
    wind.connect(wf).connect(wg).connect(this.master);
    wind.start();
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 160;
    lfo.connect(lfoGain).connect(wf.frequency);
    lfo.start();

    const hum = ctx.createOscillator();
    hum.type = 'sawtooth';
    hum.frequency.value = 48;
    const hf = ctx.createBiquadFilter();
    hf.type = 'lowpass';
    hf.frequency.value = 120;
    const hg = ctx.createGain();
    hg.gain.value = 0.012;
    hum.connect(hf).connect(hg).connect(this.master);
    hum.start();

    const hum2 = ctx.createOscillator();
    hum2.type = 'sine';
    hum2.frequency.value = 96.5;
    const h2g = ctx.createGain();
    h2g.gain.value = 0.006;
    hum2.connect(h2g).connect(this.master);
    hum2.start();

    this.ambientNodes.push(wind, lfo, hum, hum2);
  }

  shot(ads = false) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const out = ctx.createGain();
    out.gain.value = ads ? 0.5 : 0.75;
    out.connect(this.master);

    // crack
    const n = this.noiseSource(0.35);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(2400, t);
    bp.frequency.exponentialRampToValueAtTime(500, t + 0.18);
    bp.Q.value = 0.8;
    const ng = ctx.createGain();
    this.env(ng, t, 0.002, 0.22, 0.9);
    n.connect(bp).connect(ng).connect(out);

    // body thump
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(160, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.13);
    const og = ctx.createGain();
    this.env(og, t, 0.002, 0.15, 0.9);
    o.connect(og).connect(out);
    o.start(t);
    o.stop(t + 0.3);

    // tail
    const tail = this.noiseSource(0.7);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1400, t);
    lp.frequency.exponentialRampToValueAtTime(220, t + 0.6);
    const tg = ctx.createGain();
    this.env(tg, t + 0.01, 0.01, 0.55, 0.16);
    tail.connect(lp).connect(tg).connect(out);
  }

  enemyShot(distance = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const vol = Math.max(0.05, 0.42 / (1 + distance * 0.12));
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const out = ctx.createGain();
    out.gain.value = vol;
    if (pan) {
      pan.pan.value = (Math.random() - 0.5) * 1.4;
      out.connect(pan).connect(this.master);
    } else out.connect(this.master);

    const n = this.noiseSource(0.3);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(1500, t);
    bp.frequency.exponentialRampToValueAtTime(300, t + 0.16);
    bp.Q.value = 1.2;
    const g = ctx.createGain();
    this.env(g, t, 0.002, 0.2, 0.7);
    n.connect(bp).connect(g).connect(out);

    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.1);
    const og = ctx.createGain();
    this.env(og, t, 0.002, 0.12, 0.5);
    o.connect(og).connect(out);
    o.start(t);
    o.stop(t + 0.2);
  }

  click(freq = 1400, vol = 0.18) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'square';
    o.frequency.value = freq;
    const g = ctx.createGain();
    this.env(g, t, 0.001, 0.045, vol);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.08);
  }

  reload() {
    if (!this.ctx) return;
    this.click(900, 0.2);
    setTimeout(() => this.click(600, 0.16), 260);
    setTimeout(() => this.click(1200, 0.2), 980);
    setTimeout(() => this.click(750, 0.24), 1420);
  }

  hit(head = false) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(head ? 1900 : 1300, t);
    o.frequency.exponentialRampToValueAtTime(head ? 1400 : 900, t + 0.05);
    const g = ctx.createGain();
    this.env(g, t, 0.001, 0.09, head ? 0.32 : 0.22);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.12);
  }

  kill() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    [660, 990, 1320].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      this.env(g, t + i * 0.055, 0.002, 0.13, 0.16);
      o.connect(g).connect(this.master);
      o.start(t + i * 0.055);
      o.stop(t + i * 0.055 + 0.2);
    });
  }

  hurt() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(180, t);
    o.frequency.exponentialRampToValueAtTime(55, t + 0.28);
    const g = ctx.createGain();
    this.env(g, t, 0.004, 0.3, 0.32);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.4);
    const n = this.noiseSource(0.25);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    const ng = ctx.createGain();
    this.env(ng, t, 0.002, 0.2, 0.2);
    n.connect(lp).connect(ng).connect(this.master);
  }

  explosion() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const n = this.noiseSource(1.4);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1800, t);
    lp.frequency.exponentialRampToValueAtTime(120, t + 1.1);
    const g = ctx.createGain();
    this.env(g, t, 0.004, 1.2, 0.8);
    n.connect(lp).connect(g).connect(this.master);
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(28, t + 0.8);
    const og = ctx.createGain();
    this.env(og, t, 0.003, 0.7, 0.7);
    o.connect(og).connect(this.master);
    o.start(t);
    o.stop(t + 1);
  }

  footstep(run = false) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const n = this.noiseSource(0.12);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 240 + Math.random() * 260;
    bp.Q.value = 1.1;
    const g = ctx.createGain();
    this.env(g, t, 0.001, 0.1, run ? 0.1 : 0.055);
    n.connect(bp).connect(g).connect(this.master);
  }

  empty() {
    this.click(220, 0.12);
  }

  wave(enemy = false) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const base = enemy ? 120 : 300;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(base, t);
    o.frequency.linearRampToValueAtTime(base * 0.66, t + 0.7);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 700;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.12, t + 0.08);
    g.gain.linearRampToValueAtTime(0.0001, t + 0.9);
    o.connect(f).connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 1);
  }

  pickup() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    [880, 1320].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const g = ctx.createGain();
      this.env(g, t + i * 0.06, 0.002, 0.14, 0.14);
      o.connect(g).connect(this.master);
      o.start(t + i * 0.06);
      o.stop(t + i * 0.06 + 0.2);
    });
  }

  ui() {
    this.click(1600, 0.08);
  }

  thunder() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const n = this.noiseSource(2.4);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(340, t);
    lp.frequency.exponentialRampToValueAtTime(70, t + 2);
    const g = ctx.createGain();
    this.env(g, t, 0.2, 2, 0.22);
    n.connect(lp).connect(g).connect(this.master);
  }
}
