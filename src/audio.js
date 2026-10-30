/* Fully synthesized audio: weapon report, impacts, ambience, UI.
 * No sample files, so the whole game remains a single static build. */
export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.muted = false
    this.started = false
    this.noise = null
    this.reverb = null
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    const ctx = this.ctx
    this.master = ctx.createGain()
    this.master.gain.value = 0.62
    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -18
    comp.knee.value = 22
    comp.ratio.value = 5
    comp.attack.value = 0.004
    comp.release.value = 0.22
    this.master.connect(comp)
    comp.connect(ctx.destination)

    this.noise = this.makeNoise(2.0)
    this.reverb = this.makeReverb(1.7, 0.55)
    this.reverb.connect(this.master)
    this.reverbGain = ctx.createGain()
    this.reverbGain.gain.value = 0.16
    this.reverbGain.connect(this.reverb)
    this.started = true
    this.startAmbience()
  }

  makeNoise(seconds = 2) {
    const ctx = this.ctx
    const len = Math.floor(ctx.sampleRate * seconds)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = white * 0.8 + last * 2.0
    }
    return buf
  }

  makeReverb(seconds, decay) {
    const ctx = this.ctx
    const len = Math.floor(ctx.sampleRate * seconds)
    const buf = ctx.createBuffer(2, len, ctx.sampleRate)
    for (let c = 0; c < 2; c++) {
      const data = buf.getChannelData(c)
      for (let i = 0; i < len; i++) {
        const t = i / len
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay * 4.5)
      }
    }
    const conv = ctx.createConvolver()
    conv.buffer = buf
    return conv
  }

  startAmbience() {
    const ctx = this.ctx
    // rain bed
    const rain = ctx.createBufferSource()
    rain.buffer = this.noise
    rain.loop = true
    const rainFilter = ctx.createBiquadFilter()
    rainFilter.type = 'highpass'
    rainFilter.frequency.value = 900
    const rainGain = ctx.createGain()
    rainGain.gain.value = 0.055
    rain.connect(rainFilter).connect(rainGain).connect(this.master)
    rain.start()

    // wind
    const wind = ctx.createBufferSource()
    wind.buffer = this.noise
    wind.loop = true
    wind.playbackRate.value = 0.4
    const windFilter = ctx.createBiquadFilter()
    windFilter.type = 'lowpass'
    windFilter.frequency.value = 320
    windFilter.Q.value = 2.5
    const windGain = ctx.createGain()
    windGain.gain.value = 0.09
    wind.connect(windFilter).connect(windGain).connect(this.master)
    wind.start()
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 140
    lfo.connect(lfoGain).connect(windFilter.frequency)
    lfo.start()

    // low industrial drone
    for (const [freq, gain] of [[48, 0.03], [72.4, 0.018], [96.8, 0.009]]) {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq
      const g = ctx.createGain()
      g.gain.value = gain
      const trem = ctx.createOscillator()
      trem.frequency.value = 0.07 + Math.random() * 0.06
      const tg = ctx.createGain()
      tg.gain.value = gain * 0.6
      trem.connect(tg).connect(g.gain)
      trem.start()
      osc.connect(g).connect(this.master)
      osc.start()
    }

    // rain patter (random droplets)
    const patter = () => {
      if (!this.ctx) return
      const t = this.ctx.currentTime
      this.patter(t)
      this.patterTimer = setTimeout(patter, 90 + Math.random() * 220)
    }
    this.patterTimer = setTimeout(patter, 500)
  }

  patter(when) {
    const ctx = this.ctx
    const src = ctx.createBufferSource()
    src.buffer = this.noise
    src.playbackRate.value = 0.5 + Math.random()
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = 1800 + Math.random() * 3400
    bp.Q.value = 6
    const g = ctx.createGain()
    const t = when + Math.random() * 0.06
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.012 + Math.random() * 0.03, t + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13)
    src.connect(bp).connect(g).connect(this.master)
    src.start(t, Math.random() * 1.5, 0.16)
  }

  now() { return this.ctx ? this.ctx.currentTime : 0 }

  tone(freq, type, dur, gain, when = 0, slideTo = null) {
    if (!this.ctx || this.muted) return
    const ctx = this.ctx
    const t = this.now() + when
    const osc = ctx.createOscillator()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.006)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(g).connect(this.master)
    osc.start(t)
    osc.stop(t + dur + 0.02)
  }

  burst({ dur = 0.2, freq = 1200, q = 1, gain = 0.3, type = 'bandpass', when = 0, rate = 1, reverb = 0.1 } = {}) {
    if (!this.ctx || this.muted) return
    const ctx = this.ctx
    const t = this.now() + when
    const src = ctx.createBufferSource()
    src.buffer = this.noise
    src.playbackRate.value = rate
    const f = ctx.createBiquadFilter()
    f.type = type
    f.frequency.value = freq
    f.Q.value = q
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(gain, t + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(f).connect(g)
    g.connect(this.master)
    if (this.reverbGain) {
      const rg = ctx.createGain()
      rg.gain.value = reverb
      g.connect(rg).connect(this.reverbGain)
    }
    src.start(t, Math.random() * 1.4, dur + 0.05)
  }

  shot() {
    if (!this.started || this.muted) return
    this.burst({ dur: 0.14, freq: 2800, q: 0.9, gain: 0.55, rate: 1.25, reverb: 0.5 })
    this.burst({ dur: 0.32, freq: 700, q: 1.4, gain: 0.32, type: 'lowpass', reverb: 0.7 })
    this.tone(96, 'sine', 0.19, 0.42, 0, 42)
    this.tone(1900, 'square', 0.03, 0.06)
    // mechanical cycle
    setTimeout(() => this.tick(0.14), 55)
  }

  tick(gain = 0.2) {
    this.burst({ dur: 0.035, freq: 3600, q: 3, gain, type: 'bandpass' })
    this.tone(720, 'triangle', 0.03, gain * 0.12)
  }

  enemyShot(pos, distance) {
    if (!this.started || this.muted) return
    const g = THREE_clamp(0.30 - distance * 0.006, 0.02, 0.3)
    this.burst({ dur: 0.10, freq: 1800, q: 1.2, gain: g, rate: 1.1, reverb: 0.75 })
    this.burst({ dur: 0.25, freq: 520, q: 1.2, gain: g * 0.6, type: 'lowpass', reverb: 0.9 })
    this.tone(72, 'sine', 0.16, g * 0.7, 0, 40)
  }

  whiz() {
    if (!this.started || this.muted) return
    this.burst({ dur: 0.12, freq: 4200, q: 8, gain: 0.09, rate: 1.8 })
  }

  hitmarker(head = false) {
    if (!this.started || this.muted) return
    if (head) {
      this.tone(1750, 'square', 0.035, 0.10)
      this.tone(2350, 'square', 0.05, 0.07, 0.04)
    } else {
      this.tone(1150, 'square', 0.035, 0.085)
    }
  }

  impact() { this.burst({ dur: 0.06, freq: 2200, q: 2, gain: 0.09, rate: 1.4 }) }

  reload() {
    if (!this.started || this.muted) return
    this.tick(0.22)
    setTimeout(() => { this.tick(0.16); this.burst({ dur: 0.08, freq: 380, q: 2, gain: 0.12, type: 'lowpass' }) }, 420)
    setTimeout(() => { this.tick(0.24); this.tone(190, 'triangle', 0.07, 0.08) }, 1450)
    setTimeout(() => this.tick(0.26), 1680)
    setTimeout(() => this.burst({ dur: 0.05, freq: 900, q: 4, gain: 0.2 }), 1900)
  }

  empty() {
    if (!this.started || this.muted) return
    this.tick(0.22)
    this.tone(420, 'square', 0.02, 0.03)
  }

  footstep(kind = 'step') {
    if (!this.started || this.muted) return
    const g = kind === 'land' ? 0.22 : 0.10
    this.burst({ dur: kind === 'land' ? 0.14 : 0.08, freq: 260 + Math.random() * 180, q: 1.4, gain: g, type: 'lowpass', rate: 0.8 })
    if (Math.random() > 0.6) this.burst({ dur: 0.05, freq: 3200, q: 2, gain: 0.03 })
  }

  hurt() {
    if (!this.started || this.muted) return
    this.burst({ dur: 0.18, freq: 420, q: 0.8, gain: 0.25, type: 'lowpass' })
    this.tone(58, 'sine', 0.3, 0.22, 0, 38)
  }

  enemyDeath(pos) {
    if (!this.started || this.muted) return
    this.burst({ dur: 0.4, freq: 300, q: 0.8, gain: 0.22, type: 'lowpass', reverb: 1.0 })
    this.tone(90, 'sine', 0.35, 0.14, 0, 45)
  }

  waveHorn() {
    if (!this.started || this.muted) return
    this.tone(110, 'sawtooth', 1.2, 0.075, 0, 104)
    this.tone(164.8, 'sawtooth', 1.1, 0.04, 0.05, 158)
    this.burst({ dur: 1.4, freq: 200, q: 0.7, gain: 0.09, type: 'lowpass', reverb: 1.0 })
  }

  waveClear() {
    if (!this.started || this.muted) return
    this.tone(392, 'triangle', 0.25, 0.07)
    this.tone(523, 'triangle', 0.35, 0.06, 0.16)
    this.tone(659, 'triangle', 0.5, 0.05, 0.32)
  }

  ui() {
    if (!this.started || this.muted) return
    this.tone(880, 'triangle', 0.04, 0.05)
  }

  setMuted(m) {
    this.muted = m
    if (this.master) this.master.gain.value = m ? 0 : 0.62
  }

  destroy() {
    clearTimeout(this.patterTimer)
    if (this.ctx) this.ctx.close()
    this.ctx = null
  }
}

function THREE_clamp(v, a, b) { return Math.max(a, Math.min(b, v)) }
