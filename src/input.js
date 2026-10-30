const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const hasTouch = () => window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

export class Input {
  constructor({ canvas, stickZone, stickKnob, lookZone, buttons }) {
    this.canvas = canvas;
    this.stickZone = stickZone;
    this.stickKnob = stickKnob;
    this.lookZone = lookZone;
    this.buttons = buttons;
    this.keys = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, right: false };
    this.look = { dx: 0, dy: 0 };
    this.stick = { x: 0, y: 0, active: false, id: null };
    this.touchLook = { active: false, id: null, x: 0, y: 0 };
    this.sprintToggle = false;
    this.touch = hasTouch();
    this.ios = isIOS();
    this.locked = false;
    this.enabled = false;
    this.onLockChange = null;
    this.onFirstInteract = null;
    this.tilt = {
      wanted: false,
      granted: false,
      supported: typeof window.DeviceOrientationEvent !== 'undefined',
      rateX: 0,
      rateY: 0,
      lastX: null,
      lastY: null,
      sens: 1,
    };
    this.tiltUnavailable = false;

    this.bind();
  }

  bind() {
    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      if (e.code === 'KeyR') this.buttons.reload?.();
      if (e.code === 'Escape') this.keys.delete(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.mouse.left = false;
      this.mouse.right = false;
      this.buttons.fireUp?.();
      this.buttons.adsUp?.();
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.look.dx += e.movementX || 0;
      this.look.dy += e.movementY || 0;
    });

    document.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (this.touch) return;
      if (e.button === 0) {
        this.mouse.left = true;
        this.buttons.fireDown?.();
      }
      if (e.button === 2) {
        this.mouse.right = true;
        this.buttons.adsDown?.();
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.mouse.left = false;
        this.buttons.fireUp?.();
      }
      if (e.button === 2) {
        this.mouse.right = false;
        this.buttons.adsUp?.();
      }
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.onLockChange?.(this.locked);
    });

    this.canvas.addEventListener('click', () => {
      if (this.enabled && !this.touch && !this.locked) this.requestLock();
    });

    // ---------------- touch joystick ----------------
    const resetStick = (e) => {
      if (this.stick.id !== null && (e.pointerId === undefined || e.pointerId === this.stick.id)) {
        this.stick.active = false;
        this.stick.id = null;
        this.stick.x = 0;
        this.stick.y = 0;
        this.stickKnob.style.transform = 'translate(0px, 0px)';
      }
    };
    this.stickZone?.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      this.stick.active = true;
      this.stick.id = e.pointerId;
      this.stickZone.setPointerCapture(e.pointerId);
      this.updateStick(e);
      this.onFirstInteract?.();
    });
    this.stickZone?.addEventListener('pointermove', (e) => {
      if (this.stick.active && e.pointerId === this.stick.id) {
        e.preventDefault();
        this.updateStick(e);
      }
    });
    this.stickZone?.addEventListener('pointerup', resetStick);
    this.stickZone?.addEventListener('pointercancel', resetStick);

    // ---------------- touch look ----------------
    this.lookZone?.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      this.touchLook.active = true;
      this.touchLook.id = e.pointerId;
      this.touchLook.x = e.clientX;
      this.touchLook.y = e.clientY;
      this.lookZone.setPointerCapture(e.pointerId);
      this.onFirstInteract?.();
    });
    this.lookZone?.addEventListener('pointermove', (e) => {
      if (!this.touchLook.active || e.pointerId !== this.touchLook.id) return;
      e.preventDefault();
      const dx = e.clientX - this.touchLook.x;
      const dy = e.clientY - this.touchLook.y;
      this.touchLook.x = e.clientX;
      this.touchLook.y = e.clientY;
      this.look.dx += dx * 1.7;
      this.look.dy += dy * 1.7;
    });
    const endLook = (e) => {
      if (this.touchLook.id !== null && (e.pointerId === undefined || e.pointerId === this.touchLook.id)) {
        this.touchLook.active = false;
        this.touchLook.id = null;
      }
    };
    this.lookZone?.addEventListener('pointerup', endLook);
    this.lookZone?.addEventListener('pointercancel', endLook);

    // ---------------- buttons ----------------
    const hold = (el, down, up) => {
      if (!el) return;
      el.addEventListener('pointerdown', (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        e.stopPropagation();
        el.classList.add('active');
        el.setPointerCapture?.(e.pointerId);
        down?.();
        this.onFirstInteract?.();
      });
      const release = (e) => {
        el.classList.remove('active');
        up?.();
      };
      el.addEventListener('pointerup', release);
      el.addEventListener('pointercancel', release);
      el.addEventListener('pointerleave', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
          up?.();
        }
      });
    };
    hold(this.buttons.fire, () => { this.mouse.left = true; this.buttons.fireDown?.(); }, () => { this.mouse.left = false; this.buttons.fireUp?.(); });
    hold(this.buttons.ads, () => { this.mouse.right = true; this.buttons.adsDown?.(); }, () => { this.mouse.right = false; this.buttons.adsUp?.(); });
    hold(this.buttons.sprint, () => { this.sprintToggle = !this.sprintToggle; this.buttons.sprintEl?.classList.toggle('on', this.sprintToggle); }, null);

    this.buttons.reload?.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.buttons.reload?.(); });
    this.buttons.jump?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.enabled) return;
      this.buttons.jump?.();
      this.keys.add('Space');
      setTimeout(() => this.keys.delete('Space'), 90);
    });

    this.buttons.tilt?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.setTilt(!this.tilt.wanted);
    });

    window.addEventListener('deviceorientation', (e) => this.onOrientation(e));
    window.addEventListener('orientationchange', () => {
      this.tilt.lastX = null;
      this.tilt.lastY = null;
    });
  }

  updateStick(e) {
    const rect = this.stickZone.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const max = rect.width * 0.36;
    const len = Math.hypot(dx, dy);
    if (len > max) {
      dx = (dx / len) * max;
      dy = (dy / len) * max;
    }
    this.stick.x = dx / max;
    this.stick.y = dy / max;
    this.stickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  requestLock() {
    if (this.touch) return;
    const p = this.canvas.requestPointerLock?.({ unadjustedMovement: true });
    if (p?.catch) p.catch(() => this.canvas.requestPointerLock?.());
  }

  releaseLock() {
    if (document.pointerLockElement) document.exitPointerLock?.();
  }

  reset() {
    this.look.dx = this.look.dy = 0;
    this.stick.x = this.stick.y = 0;
    this.stick.active = false;
    this.stick.id = null;
    if (this.stickKnob) this.stickKnob.style.transform = 'translate(0px, 0px)';
    this.mouse.left = false;
    this.mouse.right = false;
    this.touchLook.active = false;
    this.touchLook.id = null;
    this.keys.clear();
    this.sprintToggle = false;
    this.buttons.sprintEl?.classList.remove('on');
  }

  // ---------------- tilt ----------------
  async setTilt(on) {
    this.tilt.wanted = on;
    this.buttons.tiltEl?.classList.toggle('on', on);
    if (!on) {
      this.buttons.onTiltChange?.(false);
      return false;
    }
    if (!this.tilt.supported) {
      this.buttons.onTiltMessage?.('Motion sensors are not available on this device.');
      this.tilt.wanted = false;
      this.buttons.tiltEl?.classList.remove('on');
      return false;
    }
    if (this.ios && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission();
        if (res !== 'granted') {
          this.tilt.wanted = false;
          this.buttons.tiltEl?.classList.remove('on');
          this.buttons.onTiltMessage?.('Motion permission was denied. Enable it in Settings → Safari → Motion & Orientation.');
          this.buttons.onTiltChange?.(false);
          return false;
        }
        this.tilt.granted = true;
      } catch (err) {
        this.tilt.wanted = false;
        this.buttons.tiltEl?.classList.remove('on');
        this.buttons.onTiltMessage?.('Motion permission must be granted from a direct tap.');
        this.buttons.onTiltChange?.(false);
        return false;
      }
    } else {
      this.tilt.granted = true;
    }
    this.tilt.lastX = null;
    this.tilt.lastY = null;
    this.buttons.onTiltChange?.(true);
    return true;
  }

  onOrientation(e) {
    if (!this.tilt.wanted || !this.tilt.granted) return;
    const angle = (screen.orientation?.angle ?? window.orientation ?? 0) * (Math.PI / 180);
    if (e.gamma == null || e.beta == null) return;
    const g = (e.gamma * Math.PI) / 180;
    const b = (e.beta * Math.PI) / 180;
    let x, y;
    const deg = ((angle * 180) / Math.PI + 360) % 360;
    if (deg === 90) { x = b; y = -g; }
    else if (deg === 180) { x = -g; y = -b; }
    else if (deg === 270) { x = -b; y = g; }
    else { x = g; y = b; }
    const xd = (x * 180) / Math.PI;
    const yd = (y * 180) / Math.PI;
    if (this.tilt.lastX === null) {
      this.tilt.lastX = xd;
      this.tilt.lastY = yd;
      return;
    }
    let dx = xd - this.tilt.lastX;
    let dy = yd - this.tilt.lastY;
    if (Math.abs(dx) > 30) dx = 0;
    if (Math.abs(dy) > 30) dy = 0;
    this.tilt.lastX = xd;
    this.tilt.lastY = yd;
    const dead = 0.35;
    if (Math.abs(dx) > dead) this.tilt.rateX += dx * this.tilt.sens * 1.4;
    if (Math.abs(dy) > dead) this.tilt.rateY += dy * this.tilt.sens * 1.1;
    const cap = 55;
    this.tilt.rateX = Math.max(-cap, Math.min(cap, this.tilt.rateX));
    this.tilt.rateY = Math.max(-cap, Math.min(cap, this.tilt.rateY));
  }

  consumeTilt() {
    if (!this.tilt.wanted || !this.tilt.granted) return { x: 0, y: 0 };
    const x = this.tilt.rateX;
    const y = this.tilt.rateY;
    this.tilt.rateX *= 0.45;
    this.tilt.rateY *= 0.45;
    if (Math.abs(this.tilt.rateX) < 0.01) this.tilt.rateX = 0;
    if (Math.abs(this.tilt.rateY) < 0.01) this.tilt.rateY = 0;
    return { x, y };
  }

  getMove() {
    let x = 0;
    let z = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }
    if (this.stick.active) {
      x += this.stick.x;
      z += this.stick.y;
      const l = Math.hypot(x, z);
      if (l > 1) {
        x /= l;
        z /= l;
      }
    }
    return { x, z };
  }

  isSprint() {
    return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.sprintToggle;
  }

  isJump() {
    return this.keys.has('Space');
  }

  consumeLook() {
    const dx = this.look.dx;
    const dy = this.look.dy;
    this.look.dx = 0;
    this.look.dy = 0;
    return { dx, dy };
  }
}
