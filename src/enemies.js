import * as THREE from 'three'
import { rand, randRange } from './textures.js'

const _v = new THREE.Vector3()
const _v2 = new THREE.Vector3()
const _v3 = new THREE.Vector3()
const _ray = new THREE.Raycaster()
const _dir = new THREE.Vector3()

const UP = new THREE.Vector3(0, 1, 0)
const BODY_DAMAGE = 1
const HEAD_MULT = 3.2

let enemyId = 0

class Enemy {
  constructor(scene, world, effects, audio, point, waveScale = 1) {
    this.id = ++enemyId
    this.scene = scene
    this.world = world
    this.effects = effects
    this.audio = audio
    this.root = new THREE.Group()
    this.root.position.copy(point)
    this.root.position.y = 0
    this.health = 100
    this.maxHealth = 100
    this.alive = true
    this.state = 'advance'
    this.speed = randRange(2.1, 3.0) + Math.min(1.1, waveScale * 0.14)
    this.fireCooldown = randRange(1.2, 3.2)
    this.burst = 0
    this.burstTimer = 0
    this.hitFlash = 0
    this.deadT = 0
    this.strafeDir = Math.random() > 0.5 ? 1 : -1
    this.strafeTimer = randRange(1, 3)
    this.muzzleTimer = 0
    this.stepPhase = Math.random() * 6
    this.aimYaw = 0
    this.hitMeshes = []
    this.materials = []
    this.muzzleSprite = null
    this.baseY = 0
    this.spawnT = 0
    this.radius = 0.36
    this.accuracy = 0.5 + Math.min(0.22, waveScale * 0.03)
    this.damage = 7 + Math.min(5, waveScale * 0.7)

    this.build()
    scene.add(this.root)
  }

  build() {
    const cloth = new THREE.MeshStandardMaterial({ color: 0x30383a, roughness: 0.88, metalness: 0.04, envMapIntensity: 0.55 })
    const clothDark = new THREE.MeshStandardMaterial({ color: 0x161a1b, roughness: 0.94, metalness: 0.02 })
    const vest = new THREE.MeshStandardMaterial({ color: 0x4b5340, roughness: 0.84, metalness: 0.06 })
    const plate = new THREE.MeshStandardMaterial({ color: 0x272c28, roughness: 0.66, metalness: 0.28 })
    const gear = new THREE.MeshStandardMaterial({ color: 0x1a1d1c, roughness: 0.7, metalness: 0.2 })
    const rubber = new THREE.MeshStandardMaterial({ color: 0x0c0d0d, roughness: 0.95 })
    const visor = new THREE.MeshStandardMaterial({ color: 0x2a0b06, emissive: 0xff3517, emissiveIntensity: 3.4, roughness: 0.3, metalness: 0.4 })
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x1b1f21, roughness: 0.4, metalness: 0.9 })
    this.materials.push(cloth, clothDark, vest, plate, gear, gunMetal)

    const root = this.root
    const scale = randRange(0.96, 1.05)
    root.scale.setScalar(scale)
    root.userData.enemy = this

    const mesh = (geo, mat, x, y, z, parent = root) => {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, z)
      m.castShadow = false
      m.receiveShadow = true
      parent.add(m)
      m.userData.enemy = this
      return m
    }

    // ---------------- legs
    this.legs = []
    for (const side of [-1, 1]) {
      const hip = new THREE.Group()
      hip.position.set(side * 0.13, 0.94, 0)
      root.add(hip)
      const thigh = mesh(new THREE.BoxGeometry(0.18, 0.48, 0.21), cloth, 0, -0.24, 0, hip)
      const knee = mesh(new THREE.BoxGeometry(0.17, 0.12, 0.19), plate, 0, -0.46, 0.02, hip)
      const shin = mesh(new THREE.BoxGeometry(0.145, 0.45, 0.17), cloth, 0, -0.69, 0, hip)
      const boot = mesh(new THREE.BoxGeometry(0.17, 0.14, 0.30), rubber, 0, -0.91, 0.05, hip)
      const pouch = mesh(new THREE.BoxGeometry(0.14, 0.14, 0.06), vest, 0, -0.33, 0.13, hip)
      this.legs.push(hip)
      for (const m of [thigh, shin, boot, knee, pouch]) this.hitMeshes.push(m)
    }

    // ---------------- torso
    this.torso = new THREE.Group()
    this.torso.position.y = 0.95
    root.add(this.torso)
    const belly = mesh(new THREE.BoxGeometry(0.42, 0.30, 0.26), cloth, 0, 0.16, 0, this.torso)
    const chest = mesh(new THREE.BoxGeometry(0.50, 0.38, 0.30), cloth, 0, 0.48, 0, this.torso)
    const carrier = mesh(new THREE.BoxGeometry(0.44, 0.42, 0.34), vest, 0, 0.44, 0.01, this.torso)
    const frontPlate = mesh(new THREE.BoxGeometry(0.30, 0.30, 0.06), plate, 0, 0.47, 0.19, this.torso)
    const backPlate = mesh(new THREE.BoxGeometry(0.32, 0.34, 0.07), plate, 0, 0.45, -0.19, this.torso)
    for (let i = 0; i < 3; i++) {
      const pouch = mesh(new THREE.BoxGeometry(0.11, 0.12, 0.09), vest, -0.13 + i * 0.13, 0.26, 0.21, this.torso)
      this.hitMeshes.push(pouch)
    }
    // pouches on belt
    for (let i = 0; i < 2; i++) {
      mesh(new THREE.BoxGeometry(0.10, 0.12, 0.08), clothDark, -0.12 + i * 0.24, 0.04, 0.17, this.torso)
    }
    const strobe = mesh(new THREE.BoxGeometry(0.035, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 0xff3b1e }), 0.20, 0.63, 0.09, this.torso)
    this.strobe = strobe
    // radio
    const radio = mesh(new THREE.BoxGeometry(0.09, 0.17, 0.07), gear, -0.24, 0.55, -0.14, this.torso)
    const antenna = mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.52, 5), gear, -0.25, 0.88, -0.16, this.torso)
    this.antenna = antenna
    for (const m of [belly, chest, carrier, frontPlate, backPlate, radio, antenna]) this.hitMeshes.push(m)

    // ---------------- shoulders & arms
    this.arms = []
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group()
      shoulder.position.set(side * 0.30, 0.62, 0)
      this.torso.add(shoulder)
      const pad = mesh(new THREE.SphereGeometry(0.115, 10, 8), cloth, 0, 0, 0, shoulder)
      pad.scale.set(1.05, 0.9, 1.0)
      const upper = mesh(new THREE.BoxGeometry(0.13, 0.34, 0.15), cloth, 0, -0.19, 0, shoulder)
      const elbow = new THREE.Group()
      elbow.position.set(0, -0.37, 0)
      shoulder.add(elbow)
      const fore = mesh(new THREE.BoxGeometry(0.12, 0.33, 0.13), cloth, 0, -0.16, 0, elbow)
      const glove = mesh(new THREE.BoxGeometry(0.11, 0.13, 0.12), clothDark, 0, -0.34, 0, elbow)
      this.hitMeshes.push(pad, upper, fore, glove)
      this.arms.push({ shoulder, elbow, side })
    }

    // arms aiming: right shoulder forward, left support
    this.arms[0].shoulder.rotation.set(-1.0, 0, -0.25) // side -1 (left? x negative)
    this.arms[0].elbow.rotation.x = -0.5
    this.arms[1].shoulder.rotation.set(-1.15, 0, 0.28)
    this.arms[1].elbow.rotation.x = -0.65

    // ---------------- head
    this.head = new THREE.Group()
    this.head.position.set(0, 0.76, 0)
    this.torso.add(this.head)
    const neck = mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.12, 8), clothDark, 0, -0.02, 0, this.head)
    const skull = mesh(new THREE.SphereGeometry(0.135, 14, 12), clothDark, 0, 0.09, 0, this.head)
    skull.scale.set(0.92, 1.05, 1.0)
    const helmet = mesh(new THREE.SphereGeometry(0.155, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), plate, 0, 0.115, -0.005, this.head)
    helmet.scale.set(1.0, 0.95, 1.05)
    const brim = mesh(new THREE.BoxGeometry(0.24, 0.035, 0.20), plate, 0, 0.105, -0.02, this.head)
    const visorMesh = mesh(new THREE.BoxGeometry(0.19, 0.045, 0.04), visor, 0, 0.075, 0.125, this.head)
    this.visor = visorMesh
    const nvg = mesh(new THREE.BoxGeometry(0.10, 0.07, 0.08), gear, 0, 0.17, 0.13, this.head)
    const mic = mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.20, 5), gear, 0.09, 0.02, 0.10, this.head)
    mic.rotation.z = 0.55
    helmet.userData.part = 'head'
    skull.userData.part = 'head'
    this.hitMeshes.push(neck, skull, helmet, visorMesh)
    for (const m of [neck, skull, helmet, brim, visorMesh, nvg, mic]) m.userData.part = m.userData.part || 'head'

    // ---------------- rifle held at the chest
    this.rifle = new THREE.Group()
    this.rifle.position.set(0.02, 0.42, 0.24)
    this.rifle.rotation.set(-0.06, 0, 0)
    this.torso.add(this.rifle)
    const receiver = mesh(new THREE.BoxGeometry(0.06, 0.10, 0.38), gunMetal, 0, 0, 0, this.rifle)
    const barrel = mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.34, 6), gunMetal, 0, 0.01, -0.33, this.rifle)
    barrel.rotation.x = Math.PI / 2
    const stock = mesh(new THREE.BoxGeometry(0.05, 0.10, 0.20), gunMetal, 0, -0.01, 0.27, this.rifle)
    const mag = mesh(new THREE.BoxGeometry(0.045, 0.16, 0.09), gear, 0, -0.12, -0.03, this.rifle)
    mag.rotation.x = -0.18
    const scope = mesh(new THREE.BoxGeometry(0.035, 0.05, 0.12), gunMetal, 0, 0.09, -0.05, this.rifle)
    this.hitMeshes.push(receiver, barrel, stock, mag, scope)
    this.muzzle = new THREE.Object3D()
    this.muzzle.position.set(0, 0.01, -0.52)
    this.rifle.add(this.muzzle)

    this.muzzleSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.effects.T.glows.warm, color: 0xffb066, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
    }))
    this.muzzleSprite.position.set(0, 0.01, -0.56)
    this.muzzleSprite.scale.setScalar(0.42)
    this.rifle.add(this.muzzleSprite)

    // nameplate-free, but keep a faint red glow for readability at distance
    if (this.audio) { /* reserved */ }

    // footprint shadow
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.34, 16),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false })
    )
    shadow.rotation.x = -Math.PI / 2
    shadow.position.y = 0.012
    root.add(shadow)

    for (const m of this.hitMeshes) {
      if (!m.userData.part) m.userData.part = 'body'
      m.userData.enemy = this
    }
  }

  hit(damage, part, point, dir) {
    if (!this.alive) return false
    const dmg = part === 'head' ? damage * HEAD_MULT : damage
    this.health -= dmg
    this.hitFlash = 1
    this.stagger = Math.min(1, (this.stagger || 0) + 0.5)
    if (this.effects) {
      this.effects.blood(point, dir)
      this.effects.impact(point, _v3.copy(dir).negate(), 'flesh')
    }
    if (this.health <= 0) {
      this.die(dir)
      return true
    }
    return false
  }

  die(dir) {
    this.alive = false
    this.state = 'dead'
    this.deadT = 0
    this.health = 0
    this.audio?.enemyDeath(this.root.position)
    if (this.effects) this.effects.explosion(_v.copy(this.root.position).setY(1.1), 0x8a2a1a)
    this.rifle.visible = false
    this.fallDir = dir && dir.x > 0 ? -1 : 1
  }

  update(dt, player, callbacks) {
    if (!this.alive) {
      this.deadT += dt
      const t = Math.min(1, this.deadT / 0.65)
      const ease = 1 - Math.pow(1 - t, 3)
      this.root.rotation.x = -ease * 1.5 * (this.fallDir || 1)
      this.root.position.y = Math.max(-0.15, -ease * 0.18)
      this.muzzleSprite.material.opacity = 0
      this.hitFlash = Math.max(0, this.hitFlash - dt * 4)
      for (const m of this.materials) m.emissiveIntensity = this.hitFlash * 0.6
      if (this.deadT > 4.5) {
        const fade = Math.max(0, 1 - (this.deadT - 4.5) / 1.0)
        this.root.traverse((o) => {
          if (o.isMesh && o.material) {
            if (!o.material.userData) o.material.userData = {}
            if (o.material.transparent !== true) { o.material.transparent = true; o.material._baseOpacity = o.material.opacity }
            o.material.opacity = fade * (o.material._baseOpacity ?? 1)
          }
        })
      }
      if (this.deadT > 5.6) this.remove = true
      return
    }

    this.spawnT += dt
    this.stagger = Math.max(0, (this.stagger || 0) - dt * 4)
    this.muzzleTimer = Math.max(0, this.muzzleTimer - dt)
    this.muzzleSprite.material.opacity = this.muzzleTimer > 0 ? 1 : 0
    this.muzzleSprite.material.rotation = Math.random() * 6.28

    this.hitFlash = Math.max(0, this.hitFlash - dt * 6)
    for (const m of this.materials) {
      if (m.emissive) {
        m.emissive.setHex(0xff3b1e)
        m.emissiveIntensity = this.hitFlash * 0.9
      }
    }
    this.visor.material.emissiveIntensity = 3.0 + Math.sin(performance.now() * 0.004 + this.id) * 0.7
    if (this.strobe) this.strobe.visible = Math.sin(performance.now() * 0.003 + this.id * 2) > 0.4

    const pEye = _v.set(player.pos.x, player.pos.y + 1.55, player.pos.z)
    const myEye = _v2.set(this.root.position.x, 1.55, this.root.position.z)
    const toPlayer = _v3.copy(pEye).sub(myEye)
    const distance = toPlayer.length()
    const dirToPlayer = toPlayer.clone().normalize()
    const hasLOS = !this.world.blocked(myEye, pEye)
    const desiredYaw = Math.atan2(-dirToPlayer.x, -dirToPlayer.z)
    let yawDiff = desiredYaw - this.root.rotation.y
    while (yawDiff > Math.PI) yawDiff -= Math.PI * 2
    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2
    this.root.rotation.y += yawDiff * Math.min(1, dt * 6)

    this.strafeTimer -= dt
    if (this.strafeTimer <= 0) {
      this.strafeTimer = randRange(1.1, 2.8)
      this.strafeDir *= -1
    }

    let moveSpeed = 0
    if (this.stagger > 0.1) {
      moveSpeed = 0
    } else if (!hasLOS || distance > 24) {
      // close the distance, sliding around cover
      const side = new THREE.Vector3(-dirToPlayer.z, 0, dirToPlayer.x).multiplyScalar(this.strafeDir * 0.55)
      _dir.copy(dirToPlayer).multiplyScalar(0.9).add(side).setY(0).normalize()
      moveSpeed = this.speed
      this.state = 'advance'
    } else if (distance > 12) {
      _dir.copy(dirToPlayer).setY(0).normalize()
      moveSpeed = this.speed * 0.55
      this.state = 'advance'
    } else {
      // strafe while engaging
      _dir.set(-dirToPlayer.z, 0, dirToPlayer.x).multiplyScalar(this.strafeDir)
      moveSpeed = this.speed * 0.32
      this.state = 'engage'
    }

    if (moveSpeed > 0) {
      const nextX = this.root.position.x + _dir.x * moveSpeed * dt
      const nextZ = this.root.position.z + _dir.z * moveSpeed * dt
      this.root.position.x = nextX
      this.root.position.z = nextZ
      this.collide()
      this.stepPhase += dt * (5.2 + moveSpeed * 1.8)
      const swing = Math.sin(this.stepPhase) * 0.55 * Math.min(1, moveSpeed / 1.6)
      this.legs[0].rotation.x = swing
      this.legs[1].rotation.x = -swing
      this.torso.position.y = 0.95 + Math.abs(Math.sin(this.stepPhase)) * 0.025
    } else {
      this.legs[0].rotation.x *= 1 - Math.min(1, dt * 8)
      this.legs[1].rotation.x *= 1 - Math.min(1, dt * 8)
    }

    // aim torso subtly at the player
    this.aimYaw = THREE.MathUtils.clamp(yawDiff, -0.5, 0.5)
    this.torso.rotation.y = this.aimYaw * 0.5

    // keep separation between enemies
    for (const other of callbacks.others(this)) {
      const dx = this.root.position.x - other.root.position.x
      const dz = this.root.position.z - other.root.position.z
      const d2 = dx * dx + dz * dz
      if (d2 > 0.001 && d2 < 1.1) {
        const d = Math.sqrt(d2)
        const push = (1.05 - d) * 0.5
        this.root.position.x += (dx / d) * push
        this.root.position.z += (dz / d) * push
      }
    }

    // shooting
    if (hasLOS && distance < 30 && player.alive) {
      this.fireCooldown -= dt
      if (this.burst > 0) {
        this.burstTimer -= dt
        if (this.burstTimer <= 0) {
          this.shoot(player, distance, callbacks)
          this.burst--
          this.burstTimer = randRange(0.10, 0.16)
          if (this.burst <= 0) this.fireCooldown = randRange(2.0, 3.6)
        }
      } else if (this.fireCooldown <= 0) {
        this.burst = 3 + (rand() > 0.6 ? 1 : 0)
        this.burstTimer = 0.05
      }
    }

    this.root.updateMatrixWorld(true)
  }

  shoot(player, distance, callbacks) {
    const from = this.muzzle.getWorldPosition(new THREE.Vector3())
    const pEye = new THREE.Vector3(player.pos.x, player.pos.y + 1.5, player.pos.z)
    const spread = 0.10 + distance * 0.004
    pEye.x += randRange(-spread, spread) * distance * 0.04
    pEye.y += randRange(-spread, spread) * distance * 0.03
    pEye.z += randRange(-spread, spread) * distance * 0.04
    const dir = pEye.clone().sub(from).normalize()
    const end = pEye.clone()
    this.effects.tracer(from, end, 0xffb066, 0.012)
    this.muzzleTimer = 0.07
    this.muzzleSprite.material.opacity = 1
    this.audio?.enemyShot(this.root.position, distance)

    // probability to hit the player, falls off with distance and movement
    const chance = THREE.MathUtils.clamp(0.62 - distance * 0.012, 0.18, 0.55) * (player.sprinting ? 0.55 : 1) * (player.crouching ? 0.8 : 1)
    if (Math.random() < chance) {
      const dmg = this.damage * randRange(0.8, 1.2)
      const angle = Math.atan2(-(this.root.position.x - player.pos.x), -(this.root.position.z - player.pos.z))
      callbacks.onPlayerHit(dmg, angle, from)
    }
    // impact dust near the player when missing
    if (Math.random() > 0.5) {
      const miss = pEye.clone().add(new THREE.Vector3(randRange(-2, 2), randRange(-1, 1), randRange(-2, 2)))
      this.effects.impact(miss, new THREE.Vector3(0, 1, 0), 'concrete')
    }
  }

  collide() {
    const y0 = 0.3, y1 = 1.75
    for (const box of this.world.colliders) {
      if (box.max.y < y0 || box.min.y > y1) continue
      const cx = THREE.MathUtils.clamp(this.root.position.x, box.min.x, box.max.x)
      const cz = THREE.MathUtils.clamp(this.root.position.z, box.min.z, box.max.z)
      let dx = this.root.position.x - cx
      let dz = this.root.position.z - cz
      const d2 = dx * dx + dz * dz
      if (d2 >= this.radius * this.radius) continue
      if (d2 < 1e-8) continue
      const d = Math.sqrt(d2)
      const push = (this.radius - d) / d
      this.root.position.x += dx * push
      this.root.position.z += dz * push
    }
  }
}

export class Enemies {
  constructor(scene, world, effects, audio) {
    this.scene = scene
    this.world = world
    this.effects = effects
    this.audio = audio
    this.list = []
    this.hitMeshes = []
    this.spawnTimer = 0
    this.wave = 1
  }

  spawn(point, wave) {
    const enemy = new Enemy(this.scene, this.world, this.effects, this.audio, point, wave)
    this.list.push(enemy)
    this.hitMeshes.push(...enemy.hitMeshes)
    return enemy
  }

  aliveCount() {
    return this.list.filter(e => e.alive).length
  }

  update(dt, player, callbacks) {
    for (const e of this.list) {
      e.update(dt, player, {
        others: (self) => this.list.filter(o => o !== self && o.alive),
        onPlayerHit: callbacks.onPlayerHit,
      })
    }
    // prune dead & rebuild hit list
    let changed = false
    this.list = this.list.filter(e => {
      if (e.remove) { this.scene.remove(e.root); changed = true; return false }
      return true
    })
    if (changed) this.rebuildHitMeshes()
    else if (this.list.some(e => !e.alive)) this.rebuildHitMeshes()
  }

  rebuildHitMeshes() {
    this.hitMeshes = []
    for (const e of this.list) if (e.alive) this.hitMeshes.push(...e.hitMeshes)
  }

  raycast(ray) {
    _ray.set(ray.origin, ray.direction)
    _ray.far = 120
    const hits = _ray.intersectObjects(this.hitMeshes, false)
    return hits[0] || null
  }

  clear() {
    for (const e of this.list) this.scene.remove(e.root)
    this.list = []
    this.hitMeshes = []
  }
}
