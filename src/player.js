import * as THREE from 'three'

const UP = new THREE.Vector3(0, 1, 0)
const _dir = new THREE.Vector3()
const _right = new THREE.Vector3()
const _up = new THREE.Vector3()
const _muzzle = new THREE.Vector3()
const _origin = new THREE.Vector3()

export class Player {
  constructor({ camera, weaponCamera, level, input, weapon, effects, audio, hud, engine }) {
    this.camera = camera
    this.weaponCamera = weaponCamera
    this.level = level
    this.input = input
    this.weapon = weapon
    this.effects = effects
    this.audio = audio
    this.hud = hud
    this.engine = engine

    this.camera.rotation.order = 'YXZ'
    this.raycaster = new THREE.Raycaster()
    this.raycaster.far = 140

    this.position = new THREE.Vector3()
    this.velocity = new THREE.Vector3()
    this.magSize = 30
    this.enabled = false
    this.alive = true
    this.onDeath = null

    this.tmpTilt = { yaw: 0, pitch: 0 }
    this.tiltApplied = { yaw: 0, pitch: 0 }

    this.reset()
  }

  reset() {
    this.position.copy(this.level.playerStart)
    this.velocity.set(0, 0, 0)
    this.yaw = this.level.playerStartYaw
    this.pitch = -0.015
    this.jumpY = 0
    this.vy = 0
    this.onGround = true
    this.health = 100
    this.maxHealth = 100
    this.alive = true
    this.ammo = 30
    this.reserve = 150
    this.reloading = false
    this.reloadT = 0
    this.reloadDuration = 1.9
    this.fireTimer = 0
    this.shotInterval = 0.093
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.shake = 0
    this.shakeX = 0
    this.shakeY = 0
    this.bobT = 0
    this.moveAmount = 0
    this.ads = 0
    this.time = 0
    this.lastDamage = -99
    this.stepT = 0
    this.emptyClicked = false
    this.deathT = 0
    this.enemies = null
    this.timeAlive = 0
    this.stats = { shots: 0, hits: 0, kills: 0, headshots: 0 }
    this.tiltApplied.yaw = 0
    this.tiltApplied.pitch = 0
    this.hud.setHealth(this.health, this.maxHealth)
    this.hud.setAmmo(this.ammo, this.reserve, false, 0)
    this.weapon.root.visible = true
    this.weapon.state.recoil = 0
    this.weapon.state.ads = 0
    this.weapon.state.reloadT = 0
  }

  get eyePosition() {
    return this.camera.position
  }

  update(dt) {
    this.time += dt
    if (!this.alive) {
      this.updateDeath(dt)
      return
    }
    if (!this.enabled) return
    this.timeAlive += dt

    // --------------------------------------------------------------- look
    const look = this.input.consumeLook()
    const sens = this.input.isTouch ? 0.0034 : 0.0022
    this.yaw -= look.dx * sens
    this.pitch -= look.dy * sens
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.28, 1.28)

    // Optional device tilt (iOS permission is requested in the UI gesture).
    const tilt = this.input.getTiltOffsets()
    if (tilt) {
      const k = Math.min(1, dt * 9)
      const prevYaw = this.tiltApplied.yaw
      const prevPitch = this.tiltApplied.pitch
      this.tiltApplied.yaw += (tilt.yaw - prevYaw) * k
      this.tiltApplied.pitch += (tilt.pitch - prevPitch) * k
      this.yaw -= this.tiltApplied.yaw - prevYaw
      this.pitch += this.tiltApplied.pitch - prevPitch
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.3, 1.3)
    } else if (this.tiltApplied.yaw !== 0 || this.tiltApplied.pitch !== 0) {
      this.tiltApplied.yaw = 0
      this.tiltApplied.pitch = 0
    }

    // ------------------------------------------------------------ movement
    const move = this.input.moveVector
    const adsSlow = 1 - this.ads * 0.5
    const sprinting = this.input.sprinting && move.y > 0.25 && this.ads < 0.3 && !this.reloading
    const speed = (sprinting ? 6.8 : 4.55) * adsSlow
    const forward = _dir.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
    const right = _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
    const desired = new THREE.Vector3()
      .addScaledVector(forward, move.y)
      .addScaledVector(right, move.x)
    if (desired.lengthSq() > 1) desired.normalize()
    desired.multiplyScalar(speed)

    const accel = this.onGround ? 12 : 3
    this.velocity.x += (desired.x - this.velocity.x) * Math.min(1, dt * accel)
    this.velocity.z += (desired.z - this.velocity.z) * Math.min(1, dt * accel)

    if (this.input.consumeJump() && this.onGround) {
      this.vy = 5.3
      this.onGround = false
    }
    if (!this.onGround) {
      this.vy -= 16.5 * dt
      this.jumpY += this.vy * dt
      if (this.jumpY <= 0) {
        this.jumpY = 0
        this.vy = 0
        this.onGround = true
        this.shake = Math.max(this.shake, 0.35)
      }
    }

    this.moveHorizontal(dt)
    this.moveAmount = Math.min(1, Math.hypot(this.velocity.x, this.velocity.z) / 5)

    // Head bob + footsteps.
    if (this.onGround && this.moveAmount > 0.1) {
      this.bobT += dt * (7.5 + this.moveAmount * 6.5) * (this.ads > 0.5 ? 0.6 : 1)
      this.stepT += dt
      if (this.stepT > (sprinting ? 0.33 : 0.46)) {
        this.stepT = 0
        this.audio.footstep()
      }
    } else {
      this.stepT = 0
    }

    // --------------------------------------------------------------- weapons
    const canAim = !this.reloading && !sprinting
    const adsTarget = canAim && this.input.aiming ? 1 : 0
    this.ads += (adsTarget - this.ads) * Math.min(1, dt * 10)

    if (this.reloading) {
      this.reloadT += dt
      if (this.reloadT >= this.reloadDuration) this.finishReload()
    }

    this.fireTimer -= dt
    if (this.input.firing && !this.reloading) {
      if (this.ammo > 0) {
        if (this.fireTimer <= 0) this.fire()
      } else if (!this.emptyClicked) {
        this.emptyClicked = true
        this.audio.empty()
      }
    }
    if (!this.input.firing) this.emptyClicked = false

    // Recoil recovery.
    this.recoilPitch *= Math.pow(0.0008, dt)
    this.recoilYaw *= Math.pow(0.0015, dt)
    this.shake *= Math.pow(0.0012, dt)
    this.shakeX = (Math.random() - 0.5) * this.shake * 0.08
    this.shakeY = (Math.random() - 0.5) * this.shake * 0.06

    // Hit `R` is handled by the input callback.

    // ------------------------------------------------------------ health
    if (this.time - this.lastDamage > 4.5 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + 15 * dt)
    }

    this.updateCamera(dt, move, sprinting)
    this.updateWeapon(dt, look, sprinting)
    this.updateHud(sprinting)
  }

  moveHorizontal(dt) {
    const r = 0.4
    const nextX = this.position.x + this.velocity.x * dt
    if (!this.collides(nextX, this.position.z, r)) this.position.x = nextX
    else this.velocity.x *= 0.2

    const nextZ = this.position.z + this.velocity.z * dt
    if (!this.collides(this.position.x, nextZ, r)) this.position.z = nextZ
    else this.velocity.z *= 0.2

    this.position.x = THREE.MathUtils.clamp(this.position.x, -this.level.bounds, this.level.bounds)
    this.position.z = THREE.MathUtils.clamp(this.position.z, -this.level.bounds, this.level.bounds)
  }

  collides(x, z, radius) {
    for (const b of this.level.blockers) {
      if (x > b.minX - radius && x < b.maxX + radius && z > b.minZ - radius && z < b.maxZ + radius) {
        return true
      }
    }
    return false
  }

  updateCamera(dt, move, sprinting) {
    const adsFov = 54
    const targetFov = THREE.MathUtils.lerp(76, adsFov, this.ads)
    if (Math.abs(this.camera.fov - targetFov) > 0.01) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 14)
      this.camera.updateProjectionMatrix()
      this.weaponCamera.fov = this.camera.fov
      this.weaponCamera.updateProjectionMatrix()
    }

    const bob = Math.sin(this.bobT * 2) * 0.017 * this.moveAmount * (1 - this.ads * 0.75)
    const roll = -move.x * 0.018 * (1 - this.ads * 0.6) + Math.sin(this.bobT) * 0.004 * this.moveAmount
    this.camera.position.set(
      this.position.x + this.shakeX,
      this.position.y + 1.68 + this.jumpY + bob + this.shakeY,
      this.position.z
    )
    this.camera.rotation.set(
      THREE.MathUtils.clamp(this.pitch + this.recoilPitch + this.shakeY * 0.4, -1.5, 1.5),
      this.yaw + this.recoilYaw + this.shakeX * 0.5,
      roll,
      'YXZ'
    )
    this.camera.updateMatrixWorld(true)
    document.body.classList.toggle('ads', this.enabled && this.ads > 0.7)
  }

  updateWeapon(dt, look, sprinting) {
    this.weapon.update(dt, {
      adsTarget: this.ads,
      moving: this.moveAmount * (this.ads > 0.5 ? 0.4 : 1),
      sprinting,
      reloadProgress: this.reloading ? this.reloadT / this.reloadDuration : 0,
      lookDX: look.dx,
      lookDY: look.dy,
      bobT: this.bobT,
      time: this.time,
    })
  }

  updateHud() {
    const spread = 4 + this.moveAmount * 7 + Math.abs(this.recoilPitch) * 520 + (1 - this.ads) * 3
    this.hud.update({
      health: this.health,
      maxHealth: this.maxHealth,
      mag: this.ammo,
      reserve: this.reserve,
      reloading: this.reloading,
      reloadProgress: this.reloadT / this.reloadDuration,
      score: this.score ?? 0,
      wave: this.wave ?? 1,
      hostiles: this.hostiles ?? 0,
      yaw: this.yaw,
      ads: this.ads > 0.62,
      spread: Math.min(16, spread),
    })
  }

  /* ---------------------------------------------------------------- combat */
  fire() {
    this.fireTimer = this.shotInterval
    this.ammo--
    this.stats.shots++

    this.weapon.triggerFlash()
    this.weapon.state.recoil = Math.min(1, this.weapon.state.recoil + 0.45)
    this.audio.shot()
    this.recoilPitch += 0.011 + Math.random() * 0.0045
    this.recoilYaw += (Math.random() - 0.5) * 0.009
    this.shake = Math.min(1.1, this.shake + 0.28)

    const spread = (this.ads > 0.6 ? 0.0028 : 0.0125)
      + this.moveAmount * 0.013
      + Math.abs(this.recoilPitch) * 0.35

    this.camera.getWorldDirection(_dir)
    _right.crossVectors(_dir, UP).normalize()
    _up.crossVectors(_right, _dir).normalize()
    const ang = Math.random() * Math.PI * 2
    const rad = Math.sqrt(Math.random()) * spread
    _dir.addScaledVector(_right, Math.cos(ang) * rad).addScaledVector(_up, Math.sin(ang) * rad).normalize()

    _origin.copy(this.camera.position)
    this.raycaster.set(_origin, _dir)
    const targets = this.enemies ? this.enemies.hitboxes.concat(this.level.shootables) : this.level.shootables
    const hits = this.raycaster.intersectObjects(targets, false)

    let end = _v3().copy(_origin).addScaledVector(_dir, 90)
    if (hits.length) {
      const hit = hits[0]
      end = hit.point
      const enemy = hit.object.userData.enemy
      const normal = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld) : _dir.clone().negate()
      if (enemy) {
        const head = hit.object.userData.part === 'head'
        const killed = enemy.takeDamage(head ? 140 : 38, head, hit.point, normal)
        this.stats.hits++
        if (killed) this.stats.kills++
        if (killed && head) this.stats.headshots++
        this.effects.impact(hit.point, normal, 'flesh', true)
        this.hud.hitmarker(head, killed)
        this.audio.hit(head)
        if (killed) this.audio.kill()
      } else {
        const mat = hit.object.material
        const surface = hit.object.userData.surface ||
          (mat && mat.metalness > 0.6 ? 'metal' : mat && mat.color && mat.color.getHex() > 0x6b4a2c ? 'concrete' : 'concrete')
        this.effects.impact(hit.point, normal, surface)
      }
    }

    // Tracer + environment flash originate at the barrel.
    this.weapon.getMuzzleCameraPosition(_muzzle)
    this.camera.localToWorld(_muzzle)
    this.effects.tracer(_muzzle, end.clone(), { color: 0xffd7a4, life: 0.065, width: 0.7, opacity: 0.95 })
    this.effects.muzzleLight(_muzzle, 20)

    if (this.ammo === 0 && this.reserve > 0) {
      this.startReload()
    }
  }

  startReload() {
    if (this.reloading || this.ammo >= this.magSize || this.reserve <= 0 || !this.alive) return
    this.reloading = true
    this.reloadT = 0
    this.audio.reload()
  }

  finishReload() {
    const need = this.magSize - this.ammo
    const take = Math.min(need, this.reserve)
    this.ammo += take
    this.reserve -= take
    this.reloading = false
    this.reloadT = 0
    this.input.aimToggle = false
    document.getElementById('btnAim')?.classList.remove('active')
  }

  addReserve(n) {
    this.reserve = Math.min(300, this.reserve + n)
  }

  takeDamage(amount, sourcePosition) {
    if (!this.alive || !this.enabled) return
    this.health -= amount
    this.lastDamage = this.time
    this.shake = Math.min(1.4, this.shake + 0.7)
    this.audio.hurt()

    let angle = 0
    if (sourcePosition) {
      const dx = sourcePosition.x - this.position.x
      const dz = sourcePosition.z - this.position.z
      const fx = -Math.sin(this.yaw)
      const fz = -Math.cos(this.yaw)
      const rx = Math.cos(this.yaw)
      const rz = -Math.sin(this.yaw)
      angle = Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz)
    }
    this.hud.damage(angle)

    if (this.health <= 0) {
      this.health = 0
      this.die()
    }
  }

  die() {
    if (!this.alive) return
    this.alive = false
    this.deathT = 0
    this.input.firing = false
    this.input.resetFlags()
    this.audio.death()
    this.weapon.root.visible = false
    this.onDeath?.(this.stats)
  }

  updateDeath(dt) {
    this.deathT += dt
    this.camera.position.y += (0.55 - this.camera.position.y) * Math.min(1, dt * 4)
    this.camera.rotation.z += (1.1 - this.camera.rotation.z) * Math.min(1, dt * 4)
    this.camera.rotation.x += (-0.35 - this.camera.rotation.x) * Math.min(1, dt * 3)
    this.camera.updateMatrixWorld(true)
    this.weapon.root.visible = false
  }
}

function _v3() {
  return new THREE.Vector3()
}
