/* =========================================================================
   Procedural WebAudio sound design — no sample files, everything synthesized.
   ========================================================================= */

export class Audio {
  constructor() {
    this.ctx = null
    this.master = null
    this.reverb = null
    this.noiseBuffer = null
    this.muted = false
    this.started = false
    this._ambientNodes = []
  }

  init() {
    if (this.ctx) return
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    this.ctx = ctx

    const master = ctx.createGain()
    master.gain.value = this.muted ? 0 : 0.55
    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -16
    comp.knee.value = 18
    comp.ratio.value = 5
    comp.attack.value = 0.002
    comp.release.value = 0.22
    master.connect(comp)
    comp.connect(ctx.destination)
    this.master = master

    // Synthetic impulse response for a big concrete courtyard.
    const len = Math.floor(ctx.sampleRate * 1.8)
    const impulse = ctx.createBuffer(2, len, ctx.sampleRate)
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch)
      for (let i = 0; i < len; i++) {
        const t = i / len
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.6) * (0.55 + Math.sin(i * 0.001) * 0.1)
      }
    }
    const conv = ctx.createConvolver()
    conv.buffer = impulse
    const wet = ctx.createGain()
    wet.gain.value = 0.35
    conv.connect(wet)
    wet.connect(master)
    this.reverb = conv

    // Pre-rendered white noise.
    const nlen = Math.floor(ctx.sampleRate * 2)
    const nb = ctx.createBuffer(1, nlen, ctx.sampleRate)
    const nd = nb.getChannelData(0)
    for (let i = 0; i < nlen; i++) nd[i] = Math.random() * 2 - 1
    this.noiseBuffer = nb

    this._startAmbience()
    this.started = true
  }

  resume() {
    if (!this.ctx) this.init()
    if (this.ctx?.state === 'suspended') this.ctx.resume()
  }

  setMuted(muted) {
    this.muted = muted
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime)
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.55, this.ctx.currentTime + 0.08)
    }
  }

  get t() {
    return this.ctx?.currentTime ?? 0
  }

  _noise(duration = 0.2, offset = 0) {
    const ctx = this.ctx
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    src.loop = true
    const start = ctx.currentTime + offset + Math.random() * 0.4
    src.start(start, Math.random() * 1.2)
    src.stop(start + duration + 0.05)
    return src
  }

  _send(node, amount = 0.5) {
    if (!this.reverb) return
    const g = this.ctx.createGain()
    g.gain.value = amount
    node.connect(g)
    g.connect(this.reverb)
  }

  _env(gain, t0, attack, decay, peak = 1) {
    gain.gain.setValueAtTime(0.0001, t0)
    gain.gain.exponentialRampToValueAtTime(peak, t0 + attack)
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay)
  }

  _startAmbience() {
    const ctx = this.ctx
    // Wind bed.
    const wind = ctx.createBufferSource()
    wind.buffer = this.noiseBuffer
    wind.loop = true
    wind.playbackRate.value = 0.35
    const windFilter = ctx.createBiquadFilter()
    windFilter.type = 'lowpass'
    windFilter.frequency.value = 260
    const windGain = ctx.createGain()
    windGain.gain.value = 0.045
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.07
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 0.02
    lfo.connect(lfoGain)
    lfoGain.connect(windGain.gain)
    wind.connect(windFilter)
    windFilter.connect(windGain)
    windGain.connect(this.master)
    wind.start()
    lfo.start()

    // Low industrial hum.
    const hum = ctx.createOscillator()
    hum.type = 'sine'
    hum.frequency.value = 54
    const humGain = ctx.createGain()
    humGain.gain.value = 0.02
    const hum2 = ctx.createOscillator()
    hum2.type = 'triangle'
    hum2.frequency.value = 108.5
    const hum2Gain = ctx.createGain()
    hum2Gain.gain.value = 0.006
    hum.connect(humGain)
    hum2.connect(hum2Gain)
    humGain.connect(this.master)
    hum2Gain.connect(this.master)
    hum.start()
    hum2.start()

    // Rain hiss.
    const rain = ctx.createBufferSource()
    rain.buffer = this.noiseBuffer
    rain.loop = true
    rain.playbackRate.value = 0.7
    const rainFilter = ctx.createBiquadFilter()
    rainFilter.type = 'highpass'
    rainFilter.frequency.value = 1400
    const rainGain = ctx.createGain()
    rainGain.gain.value = 0.028
    rain.connect(rainFilter)
    rainFilter.connect(rainGain)
    rainGain.connect(this.master)
    rain.start()

    this._ambientNodes.push(wind, lfo, hum, hum2, rain)
  }

  shot() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    // Crack
    const crack = this._noise(0.18)
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = 2400 + Math.random() * 600
    bp.Q.value = 0.7
    const crackGain = ctx.createGain()
    this._env(crackGain, t, 0.002, 0.16, 0.95)
    crack.connect(bp)
    bp.connect(crackGain)
    crackGain.connect(this.master)
    this._send(crackGain, 0.7)

    // Body
    const body = this._noise(0.24)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.setValueAtTime(1600, t)
    lp.frequency.exponentialRampToValueAtTime(240, t + 0.18)
    const bodyGain = ctx.createGain()
    this._env(bodyGain, t, 0.001, 0.2, 0.85)
    body.connect(lp)
    lp.connect(bodyGain)
    bodyGain.connect(this.master)
    this._send(bodyGain, 0.9)

    // Thump
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(150, t)
    osc.frequency.exponentialRampToValueAtTime(46, t + 0.11)
    const og = ctx.createGain()
    this._env(og, t, 0.002, 0.14, 0.7)
    osc.connect(og)
    og.connect(this.master)
    this._send(og, 0.5)
    osc.start(t)
    osc.stop(t + 0.2)

    // Mechanical click.
    const click = this._noise(0.03, 0.02)
    const hp = ctx.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 3200
    const cg = ctx.createGain()
    cg.gain.value = 0.18
    click.connect(hp)
    hp.connect(cg)
    cg.connect(this.master)
  }

  enemyShot(distance = 10) {
    if (!this.ctx) return
    const ctx = this.ctx
    const delay = Math.min(0.22, distance / 340)
    const t = ctx.currentTime + delay
    const src = this._noise(0.16, delay)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.setValueAtTime(1500, t)
    lp.frequency.exponentialRampToValueAtTime(300, t + 0.12)
    const g = ctx.createGain()
    const vol = Math.max(0.08, 0.5 / (1 + distance * 0.09))
    this._env(g, t, 0.002, 0.16, vol)
    src.connect(lp)
    lp.connect(g)
    g.connect(this.master)
    this._send(g, 0.6)

    const osc = ctx.createOscillator()
    osc.frequency.setValueAtTime(110, t)
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.1)
    const og = ctx.createGain()
    this._env(og, t, 0.003, 0.12, vol * 0.6)
    osc.connect(og)
    og.connect(this.master)
    osc.start(t)
    osc.stop(t + 0.18)
  }

  hit(headshot = false) {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(headshot ? 2400 : 1500, t)
    osc.frequency.exponentialRampToValueAtTime(headshot ? 3000 : 1800, t + 0.035)
    const g = ctx.createGain()
    this._env(g, t, 0.001, 0.055, headshot ? 0.3 : 0.2)
    osc.connect(g)
    g.connect(this.master)
    osc.start(t)
    osc.stop(t + 0.1)
  }

  kill() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    ;[660, 990].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq
      const g = ctx.createGain()
      this._env(g, t + i * 0.045, 0.002, 0.12, 0.16)
      osc.connect(g)
      g.connect(this.master)
      osc.start(t + i * 0.045)
      osc.stop(t + i * 0.045 + 0.18)
    })
  }

  hurt() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const src = this._noise(0.2)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 600
    const g = ctx.createGain()
    this._env(g, t, 0.002, 0.2, 0.5)
    src.connect(lp)
    lp.connect(g)
    g.connect(this.master)
    const osc = ctx.createOscillator()
    osc.frequency.setValueAtTime(90, t)
    osc.frequency.exponentialRampToValueAtTime(48, t + 0.2)
    const og = ctx.createGain()
    this._env(og, t, 0.002, 0.22, 0.4)
    osc.connect(og)
    og.connect(this.master)
    osc.start(t)
    osc.stop(t + 0.25)
  }

  death() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(220, t)
    osc.frequency.exponentialRampToValueAtTime(38, t + 1.4)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 700
    const g = ctx.createGain()
    this._env(g, t, 0.01, 1.5, 0.28)
    osc.connect(lp)
    lp.connect(g)
    g.connect(this.master)
    this._send(g, 0.9)
    osc.start(t)
    osc.stop(t + 1.6)
  }

  reload() {
    if (!this.ctx) return
    const ctx = this.ctx
    const clicks = [
      [0.0, 2400, 0.14],
      [0.28, 900, 0.2],
      [1.05, 1500, 0.22],
      [1.55, 2600, 0.16],
    ]
    for (const [offset, freq, vol] of clicks) {
      const t = ctx.currentTime + offset
      const src = this._noise(0.05, offset)
      const bp = ctx.createBiquadFilter()
      bp.type = 'bandpass'
      bp.frequency.value = freq
      bp.Q.value = 1.6
      const g = ctx.createGain()
      this._env(g, t, 0.001, 0.05, vol)
      src.connect(bp)
      bp.connect(g)
      g.connect(this.master)
      this._send(g, 0.25)
    }
  }

  empty() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const src = this._noise(0.04)
    const hp = this.ctx.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 2800
    const g = this.ctx.createGain()
    this._env(g, t, 0.001, 0.04, 0.16)
    src.connect(hp)
    hp.connect(g)
    g.connect(this.master)
  }

  footstep() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const src = this._noise(0.08)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 420
    const g = ctx.createGain()
    this._env(g, t, 0.003, 0.07, 0.13)
    src.connect(lp)
    lp.connect(g)
    g.connect(this.master)
  }

  waveStart() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    ;[55, 82.5, 110, 164.8].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq
      const g = ctx.createGain()
      this._env(g, t, 0.2 + i * 0.04, 1.1, 0.12)
      osc.connect(g)
      g.connect(this.master)
      this._send(g, 0.6)
      osc.start(t)
      osc.stop(t + 1.5)
    })
    const src = this._noise(0.9)
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.setValueAtTime(300, t)
    bp.frequency.exponentialRampToValueAtTime(1600, t + 0.7)
    const g = ctx.createGain()
    this._env(g, t, 0.4, 0.55, 0.14)
    src.connect(bp)
    bp.connect(g)
    g.connect(this.master)
  }

  waveClear() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    ;[261.6, 329.6, 392, 523.2].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'triangle'
      osc.frequency.value = freq
      const g = ctx.createGain()
      this._env(g, t + i * 0.09, 0.03, 0.6, 0.1)
      osc.connect(g)
      g.connect(this.master)
      this._send(g, 0.7)
      osc.start(t + i * 0.09)
      osc.stop(t + i * 0.09 + 0.8)
    })
  }

  ui() {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    osc.type = 'square'
    osc.frequency.value = 880
    const g = ctx.createGain()
    this._env(g, t, 0.001, 0.045, 0.05)
    osc.connect(g)
    g.connect(this.master)
    osc.start(t)
    osc.stop(t + 0.08)
  }
}
