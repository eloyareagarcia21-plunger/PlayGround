import * as THREE from 'three'

const EYE = 1.68
const EYE_CROUCH = 1.12
const RADIUS = 0.38

export class Player {
  constructor(camera, world) {
    this.camera = camera
    this.world = world
    this.pos = new THREE.Vector3(0, 0, 17.5)
    this.vel = new THREE.Vector3()
    this.yaw = 0
    this.pitch = 0
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.health = 100
    this.maxHealth = 100
    this.armor = 60
    this.maxArmor = 60
    this.alive = true
    this.onGround = true
    this.eye = EYE
    this.crouching = false
    this.sprinting = false
    this.bob = 0
    this.bobAmount = 0
    this.landDip = 0
    this.shake = 0
    this.speed = 0
    this.footstep = 0
    this.timeSinceDamage = 99
    this.deathT = 0
    this.onFootstep = null
    this.damageFlash = 0
    this.lastDamageDir = 0
    camera.rotation.order = 'YXZ'
    this.camera.position.set(this.pos.x, EYE, this.pos.z)
  }

  look(dx, dy, sens = 0.0022) {
    if (!this.alive) return
    this.yaw -= dx * sens
    this.pitch -= dy * sens
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.42, 1.42)
  }

  addRecoil(pitch, yaw) {
    this.recoilPitch += pitch
    this.recoilYaw += yaw
  }

  damage(amount, dirAngle = 0) {
    if (!this.alive) return false
    this.timeSinceDamage = 0
    this.damageFlash = 1
    this.lastDamageDir = dirAngle
    let remaining = amount
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, remaining * 0.62)
      this.armor -= absorbed
      remaining -= absorbed
    }
    this.health -= remaining
    this.shake = Math.min(1, this.shake + 0.35)
    if (this.health <= 0) {
      this.health = 0
      this.alive = false
      this.deathT = 0
      return true
    }
    return false
  }

  update(dt, input, { ads = false } = {}) {
    if (!this.alive) {
      this.deathT += dt
      this.camera.position.y = THREE.MathUtils.lerp(this.camera.position.y, 0.42, 1 - Math.exp(-3 * dt))
      this.camera.rotation.z = THREE.MathUtils.lerp(this.camera.rotation.z, 0.55, 1 - Math.exp(-2.4 * dt))
      this.camera.rotation.x = THREE.MathUtils.lerp(this.camera.rotation.x, -0.15, 1 - Math.exp(-2.4 * dt))
      this.shake = Math.max(0, this.shake - dt)
      return
    }

    this.timeSinceDamage += dt
    if (this.timeSinceDamage > 5.5 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + dt * 7)
    }
    this.damageFlash = Math.max(0, this.damageFlash - dt * 1.6)
    this.shake = Math.max(0, this.shake - dt * 2.2)

    const wantCrouch = !!input.crouch
    this.crouching = wantCrouch
    this.eye = THREE.MathUtils.lerp(this.eye, wantCrouch ? EYE_CROUCH : EYE, 1 - Math.exp(-12 * dt))
    this.sprinting = !!input.sprint && !ads && !wantCrouch && input.moveY > 0.2

    let speed = this.sprinting ? 8.7 : wantCrouch ? 3.1 : 5.6
    if (ads) speed *= 0.58
    if (!this.onGround) speed *= 0.88

    const fwd = input.moveY
    const strafe = input.moveX
    const len = Math.hypot(fwd, strafe)
    const nx = len > 1 ? fwd / len : fwd
    const nxs = len > 1 ? strafe / len : strafe

    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw)
    const wishX = (-sin * nx + cos * nxs) * speed
    const wishZ = (-cos * nx - sin * nxs) * speed

    const accel = this.onGround ? 16 : 4.5
    this.vel.x += (wishX - this.vel.x) * Math.min(1, accel * dt)
    this.vel.z += (wishZ - this.vel.z) * Math.min(1, accel * dt)

    if (input.jump && this.onGround) {
      this.vel.y = 5.7
      this.onGround = false
      this.landDip = -0.035
    }
    this.vel.y -= 17.5 * dt

    const wasGround = this.onGround
    this.pos.x += this.vel.x * dt
    this.pos.z += this.vel.z * dt
    this.pos.y += this.vel.y * dt

    this.resolveCollisions()

    if (this.pos.y <= 0) {
      if (!wasGround && this.vel.y < -4) {
        this.landDip = Math.min(0.09, -this.vel.y * 0.010)
        this.shake = Math.min(1, this.shake + 0.18)
        if (this.onFootstep) this.onFootstep('land')
      }
      this.pos.y = 0
      this.vel.y = 0
      this.onGround = true
    } else {
      this.onGround = false
    }

    const b = this.world.bounds
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, b.minX + 0.5, b.maxX - 0.5)
    this.pos.z = THREE.MathUtils.clamp(this.pos.z, b.minZ + 0.5, b.maxZ - 0.5)

    this.speed = Math.hypot(this.vel.x, this.vel.z)
    this.landDip = THREE.MathUtils.lerp(this.landDip, 0, 1 - Math.exp(-9 * dt))

    // head bob + breathing
    const moveAmt = THREE.MathUtils.clamp(this.speed / 6, 0, 1.35)
    this.bobAmount = THREE.MathUtils.lerp(this.bobAmount, moveAmt * (this.onGround ? 1 : 0.2), 1 - Math.exp(-8 * dt))
    this.bob += dt * (6.2 + this.speed * 1.25)
    const bobY = Math.sin(this.bob) * 0.021 * this.bobAmount * (ads ? 0.28 : 1)
    const bobX = Math.cos(this.bob * 0.5) * 0.016 * this.bobAmount * (ads ? 0.28 : 1)
    const breathe = Math.sin(performance.now() * 0.0011) * 0.0025

    if (this.onGround && this.speed > 1.2) {
      this.footstep += this.speed * dt
      const stride = this.sprinting ? 2.15 : 1.7
      if (this.footstep > stride) {
        this.footstep = 0
        if (this.onFootstep) this.onFootstep('step')
      }
    }

    // recoil recovery
    this.recoilPitch = THREE.MathUtils.lerp(this.recoilPitch, 0, 1 - Math.exp(-7 * dt))
    this.recoilYaw = THREE.MathUtils.lerp(this.recoilYaw, 0, 1 - Math.exp(-7 * dt))

    const shakeAmt = this.shake * 0.02 + (ads ? 0 : 0.0)
    const sx = (Math.random() - 0.5) * shakeAmt
    const sy = (Math.random() - 0.5) * shakeAmt
    const sz = (Math.random() - 0.5) * shakeAmt

    this.camera.position.set(this.pos.x + bobX + sx, this.pos.y + this.eye + bobY + breathe + this.landDip + sy, this.pos.z + sz)
    this.camera.rotation.set(
      this.pitch + this.recoilPitch,
      this.yaw + this.recoilYaw,
      Math.sin(this.bob * 0.5) * 0.004 * this.bobAmount
    )
  }

  resolveCollisions() {
    const y0 = this.pos.y + 0.25
    const y1 = this.pos.y + this.eye - 0.05
    for (const box of this.world.colliders) {
      if (box.max.y < y0 || box.min.y > y1) continue
      const cx = THREE.MathUtils.clamp(this.pos.x, box.min.x, box.max.x)
      const cz = THREE.MathUtils.clamp(this.pos.z, box.min.z, box.max.z)
      let dx = this.pos.x - cx
      let dz = this.pos.z - cz
      const d2 = dx * dx + dz * dz
      if (d2 >= RADIUS * RADIUS) continue
      if (d2 < 1e-8) {
        // inside: push along the shallowest axis
        const l = this.pos.x - box.min.x, r = box.max.x - this.pos.x
        const b = this.pos.z - box.min.z, f = box.max.z - this.pos.z
        const m = Math.min(l, r, b, f)
        if (m === l) this.pos.x = box.min.x - RADIUS
        else if (m === r) this.pos.x = box.max.x + RADIUS
        else if (m === b) this.pos.z = box.min.z - RADIUS
        else this.pos.z = box.max.z + RADIUS
        continue
      }
      const d = Math.sqrt(d2)
      const push = (RADIUS - d) / d
      this.pos.x += dx * push
      this.pos.z += dz * push
    }
  }
}
