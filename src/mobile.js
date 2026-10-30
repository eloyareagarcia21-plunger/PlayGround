/* Mobile input: floating dual-stick touch, ballistic fire controls and an
 * optional calibrated gyroscope. iOS motion permission is requested from a
 * real user gesture, as required by Safari. */
export class MobileControls {
  constructor() {
    this.enabled = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0 || window.innerWidth <= 900
    this.input = {
      moveX: 0, moveY: 0, firing: false, ads: false, sprint: false,
      jumpQueued: false, reloadQueued: false,
    }
    this.lookDX = 0
    this.lookDY = 0
    this.stickPointer = null
    this.lookPointer = null
    this.tiltOn = false
    this.tiltCalibrated = false
    this.tiltAvailable = typeof window.DeviceOrientationEvent !== 'undefined'
    this.tiltNeutral = { beta: 0, gamma: 0 }
    this.tiltRaw = { beta: 0, gamma: 0 }
    this.tiltSmooth = { x: 0, y: 0 }
    this.onTiltChange = null
    this.onToast = null
    this.visible = false

    this.root = document.getElementById('touch-ui')
    this.zone = document.getElementById('stick-zone')
    this.base = document.getElementById('stick-base')
    this.knob = document.getElementById('stick-knob')
    this.look = document.getElementById('look-zone')
    this.fireBtn = document.getElementById('btn-fire-touch')
    this.adsBtn = document.getElementById('btn-ads-touch')
    this.jumpBtn = document.getElementById('btn-jump-touch')
    this.reloadBtn = document.getElementById('btn-reload-touch')
    this.tiltBtn = document.getElementById('btn-tilt-quick')
    this.tiltHint = document.getElementById('tilt-hint')

    this.bindStick()
    this.bindLook()
    this.bindButton(this.fireBtn, () => { this.input.firing = true; this.fireBtn.classList.add('on') }, () => { this.input.firing = false; this.fireBtn.classList.remove('on') })
    this.bindButton(this.adsBtn, () => {
      this.input.ads = !this.input.ads
      this.adsBtn.classList.toggle('on', this.input.ads)
    }, null)
    this.bindButton(this.jumpBtn, () => { this.input.jumpQueued = true }, null)
    this.bindButton(this.reloadBtn, () => { this.input.reloadQueued = true }, null)
    this.tiltBtn?.addEventListener('click', (e) => { e.preventDefault(); this.toggleTilt() })

    if (!this.enabled) this.root.classList.add('hidden')
  }

  bindButton(el, down, up) {
    if (!el) return
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      el.setPointerCapture?.(e.pointerId)
      down()
    })
    const release = (e) => {
      if (e) e.preventDefault()
      up?.()
    }
    el.addEventListener('pointerup', release)
    el.addEventListener('pointercancel', release)
    el.addEventListener('lostpointercapture', () => up?.())
    // iOS Safari sometimes fires click but no pointerup when the finger slides
    el.addEventListener('contextmenu', (e) => e.preventDefault())
  }

  bindStick() {
    if (!this.zone) return
    const RADIUS = 44
    const setKnob = (x, y) => { this.knob.style.transform = `translate(${x}px, ${y}px)` }
    this.zone.addEventListener('pointerdown', (e) => {
      if (!this.enabled || this.stickPointer !== null) return
      e.preventDefault()
      this.stickPointer = e.pointerId
      this.zone.setPointerCapture?.(e.pointerId)
      const zr = this.zone.getBoundingClientRect()
      const px = e.clientX - zr.left
      const py = e.clientY - zr.top
      const left = Math.max(10, Math.min(zr.width - 126, px - 58))
      const bottom = Math.max(10, Math.min(zr.height - 126, zr.height - py - 58))
      this.base.style.left = `${left}px`
      this.base.style.bottom = `${bottom}px`
      this.base.classList.add('active')
      const br = this.base.getBoundingClientRect()
      this.stickCenter = { x: br.left + br.width / 2, y: br.top + br.height / 2 }
      setKnob(0, 0)
    })
    this.zone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.stickPointer) return
      e.preventDefault()
      const dx = e.clientX - this.stickCenter.x
      const dy = e.clientY - this.stickCenter.y
      const len = Math.hypot(dx, dy)
      const clamp = len > RADIUS ? RADIUS / len : 1
      const kx = dx * clamp
      const ky = dy * clamp
      setKnob(kx, ky)
      let nx = kx / RADIUS
      let ny = -ky / RADIUS
      const mag = Math.hypot(nx, ny)
      if (mag < 0.14) { nx = 0; ny = 0 } else {
        const scaled = (mag - 0.14) / (1 - 0.14)
        nx = (nx / mag) * Math.min(1, scaled)
        ny = (ny / mag) * Math.min(1, scaled)
      }
      this.input.moveX = nx
      this.input.moveY = ny
      this.input.sprint = Math.hypot(kx, ky) > RADIUS * 0.9
    })
    const release = (e) => {
      if (e.pointerId !== this.stickPointer) return
      this.stickPointer = null
      this.input.moveX = 0
      this.input.moveY = 0
      this.input.sprint = false
      this.base.classList.remove('active')
      this.base.style.left = ''
      this.base.style.bottom = ''
      setKnob(0, 0)
    }
    this.zone.addEventListener('pointerup', release)
    this.zone.addEventListener('pointercancel', release)
    this.zone.addEventListener('lostpointercapture', release)
  }

  bindLook() {
    if (!this.look) return
    this.look.addEventListener('pointerdown', (e) => {
      if (!this.enabled || this.lookPointer !== null) return
      e.preventDefault()
      this.lookPointer = e.pointerId
      this.look.setPointerCapture?.(e.pointerId)
      this.lastLook = { x: e.clientX, y: e.clientY }
    })
    this.look.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.lookPointer || !this.lastLook) return
      e.preventDefault()
      this.lookDX += (e.clientX - this.lastLook.x) * 1.35
      this.lookDY += (e.clientY - this.lastLook.y) * 1.35
      this.lastLook = { x: e.clientX, y: e.clientY }
    })
    const release = (e) => {
      if (e.pointerId !== this.lookPointer) return
      this.lookPointer = null
      this.lastLook = null
    }
    this.look.addEventListener('pointerup', release)
    this.look.addEventListener('pointercancel', release)
    this.look.addEventListener('lostpointercapture', release)
  }

  async toggleTilt() {
    if (this.tiltOn) {
      this.disableTilt()
      return
    }
    await this.enableTilt()
  }

  async enableTilt() {
    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        const result = await DeviceOrientationEvent.requestPermission()
        if (result !== 'granted') {
          this.onToast?.('MOTION ACCESS DENIED — ENABLE IN SAFARI SETTINGS')
          this.onTiltChange?.(false, false)
          return
        }
      }
      if (typeof DeviceOrientationEvent === 'undefined') {
        this.onToast?.('MOTION SENSORS NOT AVAILABLE ON THIS DEVICE')
        this.onTiltChange?.(false, false)
        return
      }
      this.tiltOn = true
      this.tiltCalibrated = false
      this.gotMotion = false
      this.orientationHandler = (e) => {
        if (e.gamma === null || e.beta === null) return
        if (!this.tiltCalibrated) {
          this.tiltNeutral.gamma = e.gamma
          this.tiltNeutral.beta = e.beta
          this.tiltCalibrated = true
          this.gotMotion = true
          this.onTiltChange?.(true, true)
          this.onToast?.('TILT AIM ENGAGED — HOLD STEADY TO CALIBRATE')
        }
        this.tiltRaw.gamma = e.gamma
        this.tiltRaw.beta = e.beta
        this.gotMotion = true
      }
      window.addEventListener('deviceorientation', this.orientationHandler, true)
      this.tiltHint?.classList.add('show')
      this.tiltHint && (this.tiltHint.textContent = 'TILT AIM · CALIBRATING')
      this.tiltBtn?.classList.add('on')
      // If no sensor data arrives, surface a clear message instead of pretending.
      setTimeout(() => {
        if (this.tiltOn && !this.gotMotion) {
          this.disableTilt()
          this.onToast?.('NO GYROSCOPE DATA — USE TOUCH AIM')
        } else if (this.tiltOn) {
          this.tiltHint && (this.tiltHint.textContent = 'TILT AIM · ON')
        }
      }, 1600)
    } catch (err) {
      console.warn('Tilt permission failed', err)
      this.disableTilt()
      this.onToast?.('MOTION PERMISSION UNAVAILABLE')
    }
  }

  disableTilt() {
    this.tiltOn = false
    this.tiltCalibrated = false
    if (this.orientationHandler) window.removeEventListener('deviceorientation', this.orientationHandler, true)
    this.orientationHandler = null
    this.tiltHint?.classList.remove('show')
    this.tiltBtn?.classList.remove('on')
    this.tiltSmooth.x = this.tiltSmooth.y = 0
    this.onTiltChange?.(false, true)
    this.onToast?.('TILT AIM OFF')
  }

  consumeLook(dt) {
    let dx = this.lookDX
    let dy = this.lookDY
    this.lookDX = 0
    this.lookDY = 0
    if (this.tiltOn && this.tiltCalibrated && this.visible) {
      const dead = 3.0
      let g = this.tiltRaw.gamma - this.tiltNeutral.gamma
      let b = this.tiltRaw.beta - this.tiltNeutral.beta
      if (Math.abs(g) < dead) g = 0
      if (Math.abs(b) < dead) b = 0
      const tx = Math.max(-1, Math.min(1, g / 30))
      const ty = Math.max(-1, Math.min(1, -b / 26))
      this.tiltSmooth.x += (tx - this.tiltSmooth.x) * Math.min(1, dt * 10)
      this.tiltSmooth.y += (ty - this.tiltSmooth.y) * Math.min(1, dt * 10)
      const curve = (v) => Math.sign(v) * Math.pow(Math.abs(v), 1.35)
      dx += curve(this.tiltSmooth.x) * 540 * dt
      dy += curve(this.tiltSmooth.y) * 420 * dt
    }
    return { dx, dy }
  }

  setVisible(v) {
    this.visible = v && this.enabled
    this.root.classList.toggle('hidden', !this.visible)
    if (!this.visible) {
      this.input.firing = false
      this.input.moveX = 0
      this.input.moveY = 0
      this.input.sprint = false
      this.fireBtn?.classList.remove('on')
    }
  }

  reset() {
    this.input.moveX = 0
    this.input.moveY = 0
    this.input.firing = false
    this.input.ads = false
    this.input.jumpQueued = false
    this.input.reloadQueued = false
    this.input.sprint = false
    this.lookDX = this.lookDY = 0
    this.stickPointer = null
    this.lookPointer = null
    this.fireBtn?.classList.remove('on')
    this.adsBtn?.classList.remove('on')
  }

  takeJump() {
    const v = this.input.jumpQueued
    this.input.jumpQueued = false
    return v
  }

  takeReload() {
    const v = this.input.reloadQueued
    this.input.reloadQueued = false
    return v
  }
}
