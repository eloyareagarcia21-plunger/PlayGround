const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

export class Input {
  constructor({ canvas, touch }) {
    this.canvas = canvas
    this.isTouch = touch
    this.enabled = false
    this.keys = new Set()
    this.lookDX = 0
    this.lookDY = 0
    this.firing = false
    this.mouseAim = false
    this.aimToggle = false
    this.stick = { x: 0, y: 0, active: false }
    this.jumpQueued = false
    this.dragging = false
    this.lastPointer = { x: 0, y: 0 }
    this.onReload = null
    this.onJump = null
    this.onPause = null
    this.tilt = {
      enabled: false,
      supported: typeof window !== 'undefined' && 'DeviceOrientationEvent' in window,
      permission: 'prompt',
      hasData: false,
      gamma: 0,
      beta: 0,
      alpha: 0,
      baseGamma: 0,
      baseBeta: 0,
      error: '',
    }
    this._pointerLocked = false
    this._touchLookId = null
    this._bindKeyboard()
    this._bindMouse()
    this._bindTouch()
  }

  /* ------------------------------------------------------------- keyboard */
  _bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') e.preventDefault()
      if (!this.enabled) return
      this.keys.add(e.code)
      if (e.code === 'KeyR' && !e.repeat) this.onReload?.()
      if (e.code === 'Space' && !e.repeat) {
        this.jumpQueued = true
        this.onJump?.()
      }
      if (e.code === 'Escape' && document.pointerLockElement !== this.canvas) this.onPause?.()
    })
    window.addEventListener('keyup', (e) => this.keys.delete(e.code))
    window.addEventListener('blur', () => {
      this.keys.clear()
      this.firing = false
    })
  }

  /* ---------------------------------------------------------------- mouse */
  _bindMouse() {
    const canvas = this.canvas

    document.addEventListener('pointerlockchange', () => {
      this._pointerLocked = document.pointerLockElement === canvas
      if (!this._pointerLocked && this.enabled) this.onPause?.()
    })

    window.addEventListener('mousemove', (e) => {
      if (!this.enabled || this.isTouch) return
      if (this._pointerLocked) {
        this.lookDX += e.movementX || 0
        this.lookDY += e.movementY || 0
      } else if (this.dragging) {
        this.lookDX += e.clientX - this.lastPointer.x
        this.lookDY += e.clientY - this.lastPointer.y
        this.lastPointer.x = e.clientX
        this.lastPointer.y = e.clientY
      }
    })

    canvas.addEventListener('mousedown', (e) => {
      if (!this.enabled) return
      if (e.button === 0) {
        if (!this._pointerLocked && !this.isTouch) this.lockPointer()
        this.dragging = true
        this.lastPointer.x = e.clientX
        this.lastPointer.y = e.clientY
        this.firing = true
      }
      if (e.button === 2) this.mouseAim = true
    })
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.firing = false
        this.dragging = false
      }
      if (e.button === 2) this.mouseAim = false
    })
    canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    window.addEventListener('blur', () => { this.mouseAim = false })
  }

  /* ---------------------------------------------------------------- touch */
  _bindTouch() {
    const stick = document.getElementById('stick')
    const knob = document.getElementById('stickKnob')
    const fire = document.getElementById('btnFire')
    const aim = document.getElementById('btnAim')
    const reload = document.getElementById('btnReload')
    const jump = document.getElementById('btnJump')

    if (stick && knob) {
      let id = null
      const radius = 44
      const setKnob = (dx, dy) => {
        knob.style.transform = `translate(${dx}px, ${dy}px)`
      }
      const updateStick = (e) => {
        const rect = stick.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        let dx = e.clientX - cx
        let dy = e.clientY - cy
        const len = Math.hypot(dx, dy)
        if (len > radius) {
          dx = (dx / len) * radius
          dy = (dy / len) * radius
        }
        setKnob(dx, dy)
        this.stick.x = dx / radius
        this.stick.y = -dy / radius
        this.stick.active = true
      }
      stick.addEventListener('pointerdown', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!this.enabled) return
        id = e.pointerId
        stick.setPointerCapture?.(e.pointerId)
        updateStick(e)
      })
      stick.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return
        e.preventDefault()
        updateStick(e)
      })
      const resetStick = (e) => {
        if (e.pointerId !== id) return
        id = null
        this.stick.x = 0
        this.stick.y = 0
        this.stick.active = false
        setKnob(0, 0)
      }
      stick.addEventListener('pointerup', resetStick)
      stick.addEventListener('pointercancel', resetStick)
      stick.addEventListener('lostpointercapture', resetStick)
    }

    if (fire) {
      const down = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!this.enabled) return
        fire.setPointerCapture?.(e.pointerId)
        this.firing = true
      }
      const up = (e) => {
        e.preventDefault()
        this.firing = false
      }
      fire.addEventListener('pointerdown', down)
      fire.addEventListener('pointerup', up)
      fire.addEventListener('pointercancel', up)
      fire.addEventListener('pointerleave', up)
    }

    aim?.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (!this.enabled) return
      this.aimToggle = !this.aimToggle
      aim.classList.toggle('active', this.aimToggle)
    })

    reload?.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (!this.enabled) return
      this.onReload?.()
    })

    jump?.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (!this.enabled) return
      this.jumpQueued = true
      this.onJump?.()
    })

    // Free look on the right side of the screen.
    const startLook = (e) => {
      if (!this.enabled || e.pointerType === 'mouse') return
      if (e.clientX < window.innerWidth * 0.34) return
      if (e.target.closest?.('button, .stick, .overlay, .touch-btn')) return
      if (this._touchLookId !== null) return
      this._touchLookId = e.pointerId
      this.lastPointer.x = e.clientX
      this.lastPointer.y = e.clientY
    }
    const moveLook = (e) => {
      if (e.pointerId !== this._touchLookId) return
      this.lookDX += (e.clientX - this.lastPointer.x) * 1.15
      this.lookDY += (e.clientY - this.lastPointer.y) * 1.15
      this.lastPointer.x = e.clientX
      this.lastPointer.y = e.clientY
    }
    const endLook = (e) => {
      if (e.pointerId === this._touchLookId) this._touchLookId = null
    }
    this.canvas.addEventListener('pointerdown', startLook)
    window.addEventListener('pointermove', moveLook)
    window.addEventListener('pointerup', endLook)
    window.addEventListener('pointercancel', endLook)
  }

  /* -------------------------------------------------------------- pointer */
  lockPointer() {
    if (this.isTouch) return
    try {
      const result = this.canvas.requestPointerLock?.({ unadjustedMovement: true })
      if (result?.catch) result.catch(() => {})
    } catch {
      /* pointer lock is a nice-to-have; drag look still works */
    }
  }

  consumeLook() {
    const dx = this.lookDX
    const dy = this.lookDY
    this.lookDX = 0
    this.lookDY = 0
    return { dx, dy }
  }

  consumeJump() {
    const j = this.jumpQueued
    this.jumpQueued = false
    return j
  }

  get moveVector() {
    let x = 0
    let y = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
    x += this.stick.x
    y += this.stick.y
    const len = Math.hypot(x, y)
    if (len > 1) {
      x /= len
      y /= len
    }
    return { x, y, magnitude: Math.min(1, len) }
  }

  get sprinting() {
    if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) return true
    return this.isTouch && Math.hypot(this.stick.x, this.stick.y) > 0.92
  }

  get aiming() {
    return this.mouseAim || this.aimToggle
  }

  resetFlags() {
    this.firing = false
    this.mouseAim = false
    this.aimToggle = false
    this.stick.x = 0
    this.stick.y = 0
    this.stick.active = false
    this.jumpQueued = false
    this.keys.clear()
    document.getElementById('btnAim')?.classList.remove('active')
    const knob = document.getElementById('stickKnob')
    if (knob) knob.style.transform = 'translate(0px, 0px)'
  }

  releasePointer() {
    if (document.pointerLockElement === this.canvas) document.exitPointerLock?.()
  }

  /* ----------------------------------------------------------------- tilt */
  async enableTilt() {
    const t = this.tilt
    if (!t.supported) {
      t.error = 'unsupported'
      return false
    }
    try {
      const DOE = window.DeviceOrientationEvent
      if (typeof DOE.requestPermission === 'function') {
        const result = await DOE.requestPermission()
        if (result !== 'granted') {
          t.permission = 'denied'
          t.error = 'denied'
          return false
        }
      }
      t.permission = 'granted'
    } catch (error) {
      t.error = 'denied'
      return false
    }
    t.enabled = true
    t.hasData = false
    t.error = ''
    this._orientationHandler ??= (e) => {
      const t2 = this.tilt
      if (e.gamma == null && e.beta == null) return
      t2.gamma = e.gamma ?? 0
      t2.beta = e.beta ?? 0
      t2.alpha = e.alpha ?? 0
      if (!t2.hasData) {
        t2.baseGamma = t2.gamma
        t2.baseBeta = t2.beta
        t2.hasData = true
      }
    }
    window.addEventListener('deviceorientation', this._orientationHandler, true)
    return true
  }

  disableTilt() {
    this.tilt.enabled = false
    if (this._orientationHandler) {
      window.removeEventListener('deviceorientation', this._orientationHandler, true)
    }
  }

  recenterTilt() {
    const t = this.tilt
    if (!t.hasData) return
    t.baseGamma = t.gamma
    t.baseBeta = t.beta
  }

  /** Signed tilt offsets in radians, with a little smoothing handled by caller. */
  getTiltOffsets() {
    const t = this.tilt
    if (!t.enabled || !t.hasData) return null
    let dGamma = t.gamma - t.baseGamma
    let dBeta = t.beta - t.baseBeta
    if (dGamma > 180) dGamma -= 360
    if (dGamma < -180) dGamma += 360
    const rad = Math.PI / 180
    return {
      yaw: clamp(dGamma * rad * 1.15, -0.85, 0.85),
      pitch: clamp(dBeta * rad * 0.9, -0.55, 0.55),
    }
  }
}
