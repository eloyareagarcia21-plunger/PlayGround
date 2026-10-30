import * as THREE from 'three'
import { createGlowTexture } from './textures.js'

const _ray = new THREE.Raycaster()
const _v1 = new THREE.Vector3()
const _v2 = new THREE.Vector3()
const _v3 = new THREE.Vector3()

function makeEnemyMaterials(heavy) {
  return {
    cloth: new THREE.MeshStandardMaterial({
      color: heavy ? 0x3b423d : 0x454d46,
      roughness: 0.94,
      metalness: 0.04,
    }),
    armor: new THREE.MeshStandardMaterial({
      color: heavy ? 0x54493c : 0x4b565c,
      roughness: 0.64,
      metalness: 0.36,
      envMapIntensity: 0.8,
    }),
    helmet: new THREE.MeshStandardMaterial({
      color: heavy ? 0x453e35 : 0x3a444c,
      roughness: 0.52,
      metalness: 0.5,
      envMapIntensity: 1.0,
    }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x121518, roughness: 0.9, metalness: 0.1 }),
    visor: new THREE.MeshBasicMaterial({ color: heavy ? 0xff8a2e : 0xff2f3d, toneMapped: false }),
    metal: new THREE.MeshStandardMaterial({ color: 0x5a636c, roughness: 0.4, metalness: 0.85 }),
    pack: new THREE.MeshStandardMaterial({ color: 0x2a302c, roughness: 0.86, metalness: 0.08 }),
  }
}

const glowTex = createGlowTexture({ size: 64, color: '255,60,70', core: 0.2 })

class Enemy {
  constructor(system, { position, heavy = false, wave = 1 }) {
    this.system = system
    this.heavy = heavy
    this.wave = wave
    this.health = heavy ? 210 : 100
    this.maxHealth = this.health
    this.speed = heavy ? 2.15 : 3.0 + Math.random() * 0.8
    this.radius = heavy ? 0.48 : 0.4
    this.dead = false
    this.deathT = 0
    this.removed = false
    this.spawnT = 0.55
    this.fireCooldown = 1.0 + Math.random() * 1.0
    this.burstLeft = 0
    this.burstTimer = 0
    this.aimT = 0
    this.strafeDir = Math.random() > 0.5 ? 1 : -1
    this.strafeTimer = 1 + Math.random() * 2
    this.flinch = 0
    this.losTimer = 0
    this.hasLOS = false
    this.walkPhase = Math.random() * Math.PI * 2
    this.target = new THREE.Vector3()
    this.moving = false

    this.mats = makeEnemyMaterials(heavy)
    this._build(position)
    this.system.scene.add(this.group)
  }

  _build(position) {
    const g = new THREE.Group()
    g.position.copy(position)
    this.group = g
    const M = this.mats

    const add = (mesh, parent = g) => {
      mesh.castShadow = true
      mesh.receiveShadow = true
      parent.add(mesh)
      return mesh
    }
    const box = (w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = g) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      m.position.set(x, y, z)
      m.rotation.set(rx, ry, rz)
      add(m, parent)
      return m
    }

    // ------------------------------------------------------------- lower body
    this.pelvis = box(0.3, 0.2, 0.22, M.cloth, 0, 0.94, 0)

    const leg = (side) => {
      const hip = new THREE.Group()
      hip.position.set(side * 0.105, 0.9, 0)
      g.add(hip)
      box(0.14, 0.44, 0.16, M.cloth, 0, -0.2, 0, 0, 0, 0, hip)
      box(0.15, 0.12, 0.17, M.armor, 0, -0.4, 0.005, 0, 0, 0, hip) // knee pad
      const knee = new THREE.Group()
      knee.position.set(0, -0.44, 0)
      hip.add(knee)
      box(0.12, 0.42, 0.14, M.cloth, 0, -0.21, 0, 0, 0, 0, knee)
      box(0.145, 0.13, 0.27, M.rubber, 0, -0.4, 0.04, 0, 0, 0, knee)
      return { hip, knee }
    }
    this.legL = leg(-1)
    this.legR = leg(1)

    // ----------------------------------------------------------------- torso
    this.torso = new THREE.Group()
    this.torso.position.set(0, 0.98, 0)
    g.add(this.torso)

    const chest = box(0.4, 0.46, 0.24, M.cloth, 0, 0.24, 0, 0, 0, 0, this.torso)
    const vest = box(0.46, 0.4, 0.29, M.armor, 0, 0.23, 0.005, 0, 0, 0, this.torso)
    box(0.12, 0.18, 0.06, M.pack, -0.12, 0.15, 0.17, 0, 0, 0, this.torso)
    box(0.12, 0.18, 0.06, M.pack, 0.12, 0.15, 0.17, 0, 0, 0, this.torso)
    box(0.1, 0.1, 0.05, M.pack, 0, 0.33, 0.17, 0, 0, 0, this.torso)
    // Backpack
    box(0.34, 0.4, 0.18, M.pack, 0, 0.24, -0.18, 0, 0, 0, this.torso)
    // Chest LED + patch
    const chestLed = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.02, 0.01), M.visor)
    chestLed.position.set(0.13, 0.36, 0.152)
    this.torso.add(chestLed)
    box(0.16, 0.045, 0.012, M.pack, -0.12, 0.36, 0.152, 0, 0, 0, this.torso)

    // Shoulders + arms.
    const arm = (side) => {
      const shoulder = new THREE.Group()
      shoulder.position.set(side * 0.265, 0.44, 0)
      this.torso.add(shoulder)
      box(0.15, 0.15, 0.17, M.armor, 0, -0.02, 0, 0, 0, 0, shoulder)
      box(0.11, 0.3, 0.12, M.cloth, 0, -0.2, 0, 0, 0, 0, shoulder)
      const elbow = new THREE.Group()
      elbow.position.set(0, -0.34, 0)
      shoulder.add(elbow)
      box(0.1, 0.28, 0.11, M.cloth, 0, -0.14, 0, 0, 0, 0, elbow)
      box(0.105, 0.11, 0.14, M.rubber, 0, -0.3, 0.01, 0, 0, 0, elbow)
      return { shoulder, elbow }
    }
    this.armL = arm(-1)
    this.armR = arm(1)

    // ------------------------------------------------------------------ head
    this.headPivot = new THREE.Group()
    this.headPivot.position.set(0, 0.5, 0)
    this.torso.add(this.headPivot)
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.1, 8), M.cloth)
    neck.position.y = 0.02
    add(neck, this.headPivot)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 12), M.rubber)
    head.position.y = 0.13
    head.scale.set(0.95, 1.05, 1)
    add(head, this.headPivot)
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.135, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), M.helmet)
    helmet.position.y = 0.15
    helmet.scale.set(1, 0.95, 1.05)
    add(helmet, this.headPivot)
    // Helmet rail + NVG mount.
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.025, 0.06), M.armor)
    rail.position.set(0, 0.215, 0.08)
    add(rail, this.headPivot)
    const nvg = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.07, 8), M.armor)
    nvg.rotation.x = Math.PI / 2
    nvg.position.set(0, 0.22, 0.11)
    add(nvg, this.headPivot)
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.175, 0.045, 0.03), M.visor)
    visor.position.set(0, 0.135, 0.112)
    add(visor, this.headPivot)
    this.visor = visor

    // Shoulder LED.
    const shoulderLed = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.01), M.visor)
    shoulderLed.position.set(0.21, 0.43, 0.09)
    this.torso.add(shoulderLed)

    // Hostile beacon glow: keeps silhouettes readable in the rain and dark.
    this.visorGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: this.heavy ? 0xff9838 : 0xff3446, transparent: true, opacity: 0.55,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }))
    this.visorGlow.position.set(0, 1.73, 0.14)
    this.visorGlow.scale.setScalar(0.2)
    g.add(this.visorGlow)
    this.chestGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: this.heavy ? 0xff9838 : 0xff3446, transparent: true, opacity: 0.3,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }))
    this.chestGlow.position.set(0.13, 1.34, 0.17)
    this.chestGlow.scale.setScalar(0.12)
    this.torso.add(this.chestGlow)

    // ----------------------------------------------------------------- rifle
    this.rifle = new THREE.Group()
    this.rifle.position.set(0.11, 0.28, 0.24)
    this.torso.add(this.rifle)
    box(0.06, 0.09, 0.34, M.metal, 0, 0, 0, 0, 0, 0, this.rifle)
    box(0.05, 0.06, 0.24, M.armor, 0, 0.01, 0.25, 0, 0, 0, this.rifle)
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24, 8), M.metal)
    barrel.rotation.x = Math.PI / 2
    barrel.position.set(0, 0.015, 0.44)
    add(barrel, this.rifle)
    box(0.04, 0.12, 0.06, M.rubber, 0, -0.09, -0.06, 0.2, 0, 0, this.rifle)
    box(0.03, 0.09, 0.05, M.rubber, 0, -0.06, 0.08, -0.2, 0, 0, this.rifle)
    const optic = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 0.08), M.armor)
    optic.position.set(0, 0.07, 0.1)
    add(optic, this.rifle)

    // Laser sight beam.
    const laserGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, 1)])
    this.laser = new THREE.Line(
      laserGeo,
      new THREE.LineBasicMaterial({
        color: 0xff2a36, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
        depthWrite: false, toneMapped: false,
      })
    )
    this.laser.frustumCulled = false
    this.laser.renderOrder = 3
    this.system.scene.add(this.laser)

    // Spawn flare.
    this.spawnFlare = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0xff3a44, transparent: true, opacity: 0.8,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }))
    this.spawnFlare.position.set(0, 0.9, 0)
    this.spawnFlare.scale.setScalar(2.2)
    g.add(this.spawnFlare)

    // ------------------------------------------------------------- hitboxes
    this.hitboxes = []
    const hit = (mesh, part) => {
      mesh.userData.enemy = this
      mesh.userData.part = part
      this.hitboxes.push(mesh)
    }
    hit(head, 'head')
    hit(helmet, 'head')
    hit(chest, 'body')
    hit(vest, 'body')
    hit(this.pelvis, 'body')
    for (const l of [this.legL, this.legR]) {
      l.hip.children.forEach((c) => { if (c.isMesh && c.geometry.type === 'BoxGeometry' && c.position.y < -0.3) hit(c, 'limb') })
    }

    this.muzzleLocal = new THREE.Vector3(0.11, 0.295, 0.8)
    this.eyeLocal = new THREE.Vector3(0, 1.62, 0.04)
    this.chestLocal = new THREE.Vector3(0, 1.3, 0)
  }

  get alive() {
    return !this.dead && !this.removed
  }

  update(dt, player, system) {
    if (this.removed) return
    this.spawnT = Math.max(0, this.spawnT - dt)
    const spawnEase = 1 - Math.pow(1 - Math.min(1, (0.55 - this.spawnT) / 0.55), 3)
    if (this.spawnT > 0) {
      this.group.scale.setScalar(0.6 + spawnEase * 0.4)
      this.spawnFlare.material.opacity = (1 - spawnEase) * 0.85
      this.spawnFlare.scale.setScalar(2.2 + spawnEase * 1.4)
    } else if (this.spawnFlare.visible) {
      this.spawnFlare.visible = false
      this.group.scale.setScalar(1)
    }

    if (this.dead) {
      this.deathT += dt
      const t = Math.min(1, this.deathT / 0.55)
      this.group.rotation.z = this.deathSide * (Math.PI / 2) * (1 - Math.pow(1 - t, 3))
      this.group.position.y = Math.max(-0.05, this.group.position.y - dt * (this.deathT > 1.4 ? 0.55 : 0))
      this.laser.material.opacity = 0
      this.visor.material = this.mats.armor
      this.visorGlow.visible = false
      this.chestGlow.visible = false
      if (this.deathT > 4.5) this.remove()
      return
    }

    if (this.spawnT > 0) return

    const playerEye = _v1.set(player.position.x, player.position.y + 1.45, player.position.z)
    const myEye = _v2.set(this.group.position.x, this.group.position.y + 1.55, this.group.position.z)
    const toPlayer = _v3.subVectors(playerEye, myEye)
    const dist = toPlayer.length()
    const flatDist = Math.hypot(toPlayer.x, toPlayer.z)

    // Line of sight, refreshed a few times a second.
    this.losTimer -= dt
    if (this.losTimer <= 0) {
      this.losTimer = 0.14 + Math.random() * 0.12
      _ray.set(myEye, toPlayer.clone().normalize())
      _ray.far = dist
      const hits = _ray.intersectObjects(system.level.shootables, false)
      this.hasLOS = hits.length === 0 || hits[0].distance > dist - 0.5
    }

    // ------------------------------------------------------------- movement
    const desired = new THREE.Vector3()
    const toward = new THREE.Vector3(toPlayer.x, 0, toPlayer.z)
    if (flatDist > 0.001) toward.normalize()
    const preferred = this.heavy ? 13 : 10.5
    if (flatDist > preferred) {
      desired.add(toward)
    } else if (flatDist < 6.5) {
      desired.addScaledVector(toward, -1)
    }
    // Lateral strafing.
    this.strafeTimer -= dt
    if (this.strafeTimer <= 0) {
      this.strafeTimer = 1.2 + Math.random() * 2.0
      this.strafeDir *= -1
    }
    const side = new THREE.Vector3(-toward.z, 0, toward.x)
    desired.addScaledVector(side, this.strafeDir * 0.7)

    // Obstacle avoidance.
    const pos = this.group.position
    for (const b of system.level.blockers) {
      const cx = Math.max(b.minX, Math.min(pos.x, b.maxX))
      const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ))
      const dx = pos.x - cx
      const dz = pos.z - cz
      const d2 = dx * dx + dz * dz
      const rr = this.radius + 0.9
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2)
        desired.x += (dx / d) * ((rr - d) / rr) * 2.2
        desired.z += (dz / d) * ((rr - d) / rr) * 2.2
      }
    }
    // Separation from other enemies.
    for (const other of system.enemies) {
      if (other === this || !other.alive) continue
      const dx = pos.x - other.group.position.x
      const dz = pos.z - other.group.position.z
      const d = Math.hypot(dx, dz)
      if (d < 1.4 && d > 0.001) {
        desired.x += (dx / d) * (1.4 - d)
        desired.z += (dz / d) * (1.4 - d)
      }
    }

    this.moving = desired.lengthSq() > 0.02
    if (this.moving) {
      desired.y = 0
      desired.normalize()
      const speed = this.speed * (this.burstLeft > 0 ? 0.35 : 1)
      pos.x += desired.x * speed * dt
      pos.z += desired.z * speed * dt
      this.walkPhase += dt * speed * 4.2
    } else if (this.hasLOS) {
      this.walkPhase += dt * 1.4
    }

    pos.x = THREE.MathUtils.clamp(pos.x, -25.5, 25.5)
    pos.z = THREE.MathUtils.clamp(pos.z, -25.5, 25.5)

    // Push out of blockers.
    for (const b of system.level.blockers) {
      if (pos.x > b.minX - this.radius && pos.x < b.maxX + this.radius &&
          pos.z > b.minZ - this.radius && pos.z < b.maxZ + this.radius) {
        const pushLeft = pos.x - (b.minX - this.radius)
        const pushRight = (b.maxX + this.radius) - pos.x
        const pushDown = pos.z - (b.minZ - this.radius)
        const pushUp = (b.maxZ + this.radius) - pos.z
        const m = Math.min(pushLeft, pushRight, pushDown, pushUp)
        if (m === pushLeft) pos.x -= pushLeft
        else if (m === pushRight) pos.x += pushRight
        else if (m === pushDown) pos.z -= pushDown
        else pos.z += pushUp
      }
    }

    // ------------------------------------------------------------- animation
    const swing = Math.sin(this.walkPhase) * (this.moving ? 0.6 : 0.06)
    this.legL.hip.rotation.x = swing
    this.legR.hip.rotation.x = -swing
    this.legL.knee.rotation.x = Math.max(0, -swing) * 0.7
    this.legR.knee.rotation.x = Math.max(0, swing) * 0.7
    this.torso.position.y = 0.98 + Math.abs(Math.sin(this.walkPhase)) * (this.moving ? 0.035 : 0.01)
    this.torso.rotation.z = Math.sin(this.walkPhase) * 0.03

    // Flinch spring.
    this.flinch *= Math.pow(0.001, dt)
    this.torso.rotation.x = this.flinch * 0.4 + (this.hasLOS ? 0.04 : 0)

    // Face the player whenever engaged, otherwise face movement.
    let targetYaw
    if (this.hasLOS || !this.moving) {
      targetYaw = Math.atan2(player.position.x - pos.x, player.position.z - pos.z)
    } else {
      targetYaw = Math.atan2(desired.x, desired.z)
    }
    let dYaw = targetYaw - this.group.rotation.y
    dYaw = Math.atan2(Math.sin(dYaw), Math.cos(dYaw))
    this.group.rotation.y += dYaw * Math.min(1, dt * 7)

    // ---------------------------------------------------------------- combat
    const canSee = this.hasLOS && dist < 42
    if (canSee) {
      this.group.updateMatrixWorld(true)
    }
    if (canSee) {
      this.aimT += dt
      // Orient the rifle toward the player's chest.
      const pitch = Math.atan2(playerEye.y - (pos.y + 1.28), flatDist)
      this.rifle.rotation.x = -pitch * 0.8
      // arms raised
      this.armL.shoulder.rotation.x = -1.1
      this.armL.elbow.rotation.x = 0.75
      this.armR.shoulder.rotation.x = -1.2
      this.armR.elbow.rotation.x = 0.65
    } else {
      this.aimT = Math.max(0, this.aimT - dt)
      this.rifle.rotation.x *= Math.pow(0.01, dt)
      this.armL.shoulder.rotation.x *= Math.pow(0.01, dt)
      this.armR.shoulder.rotation.x *= Math.pow(0.01, dt)
    }

    // Laser sight.
    if (canSee && this.aimT > 0.25) {
      const muzzleWorld = this.rifle.localToWorld(this.muzzleLocal.clone())
      const chest = new THREE.Vector3(player.position.x, player.position.y + 1.2, player.position.z)
      const attr = this.laser.geometry.attributes.position
      attr.setXYZ(0, muzzleWorld.x, muzzleWorld.y, muzzleWorld.z)
      attr.setXYZ(1, chest.x, chest.y, chest.z)
      attr.needsUpdate = true
      this.laser.material.opacity = this.burstLeft > 0 ? 0.42 : 0.16 + Math.sin(system.time * 8) * 0.04
    } else {
      this.laser.material.opacity = 0
    }

    // Burst fire.
    if (canSee && this.aimT > 0.45) {
      this.fireCooldown -= dt
      if (this.fireCooldown <= 0 && this.burstLeft <= 0) {
        this.burstLeft = this.heavy ? 4 : 3
        this.burstTimer = 0
        this.fireCooldown = (this.heavy ? 1.7 : 1.5) + Math.random() * 1.4
      }
      if (this.burstLeft > 0) {
        this.burstTimer -= dt
        if (this.burstTimer <= 0) {
          this.burstTimer = this.heavy ? 0.12 : 0.135
          this.burstLeft--
          this.fire(player, system, dist)
        }
      }
    }
  }

  fire(player, system, dist) {
    const muzzleWorld = this.rifle.localToWorld(this.muzzleLocal.clone())
    const target = new THREE.Vector3(
      player.position.x,
      player.position.y + 1.25,
      player.position.z
    )
    const spread = 0.14 + dist * 0.006
    target.x += (Math.random() - 0.5) * spread * 2
    target.y += (Math.random() - 0.5) * spread * 1.4
    target.z += (Math.random() - 0.5) * spread * 2

    system.effects.enemyFlash(muzzleWorld, this.heavy ? 0.75 : 0.55)
    system.effects.tracer(muzzleWorld, target, { color: 0xff8a62, life: 0.055, width: 0.6, opacity: 0.85 })
    system.audio.enemyShot(dist)

    // Hit probability falls with range and target motion.
    const chance = THREE.MathUtils.clamp(0.62 - dist * 0.011, 0.2, 0.5)
    if (Math.random() < chance) {
      const dmg = this.heavy ? 9 : 5.5 + Math.random() * 3
      player.takeDamage(dmg, this.group.position)
      system.effects.spawnSparks(target, new THREE.Vector3(0, 0.4, 0), {
        count: 5, color: 0xff6a55, speed: 2.6, gravity: 8, size: 1.1,
      })
    } else {
      const miss = target.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.0, (Math.random() - 0.5) * 1.4
      ))
      system.effects.impact(miss, new THREE.Vector3(0, 1, 0), 'concrete')
    }
    this.rifle.position.z -= 0.015
    setTimeout(() => { if (!this.removed) this.rifle.position.z += 0.015 }, 40)
  }

  takeDamage(amount, headshot, point, normal) {
    if (!this.alive) return false
    this.health -= amount
    this.flinch = Math.min(1.2, this.flinch + (headshot ? 0.8 : 0.45))
    this.visor.material = this.mats.armor
    setTimeout(() => { if (this.alive) this.visor.material = this.mats.visor }, 60)
    if (this.health <= 0) {
      this.die(headshot)
      return true
    }
    return false
  }

  die(headshot) {
    this.dead = true
    this.deathT = 0
    this.deathSide = Math.random() > 0.5 ? 1 : -1
    this.laser.material.opacity = 0
    this.laser.visible = false
    this.spawnFlare.visible = false
    for (const h of this.hitboxes) h.userData.enemy = null
    this.system.onDeath?.(this, headshot)
  }

  remove() {
    this.removed = true
    this.system.scene.remove(this.group)
    this.system.scene.remove(this.laser)
    this.laser.geometry.dispose()
    this.laser.material.dispose()
  }
}

export class EnemySystem {
  constructor({ scene, level, player, effects, audio }) {
    this.scene = scene
    this.level = level
    this.player = player
    this.effects = effects
    this.audio = audio
    this.enemies = []
    this.queue = []
    this.spawnTimer = 0
    this.wave = 0
    this.time = 0
    this.onDeath = null
    this.maxAlive = 7
  }

  beginWave(wave) {
    this.wave = wave
    const count = Math.min(12, 3 + wave * 2)
    this.queue = []
    this.spawnTimer = 0.4
    for (let i = 0; i < count; i++) {
      const spawn = this._pickSpawn()
      this.queue.push({
        position: spawn,
        heavy: wave >= 3 && i % 4 === 3,
        delay: 0.35 + i * (0.55 + Math.random() * 0.35),
      })
    }
    this._spawnClock = 0
  }

  _pickSpawn() {
    const candidates = this.level.spawnPoints
      .filter((p) => {
        const d = p.distanceTo(this.player.position)
        return d > 12 && d < 27
      })
    const pool = candidates.length ? candidates : this.level.spawnPoints
    return pool[Math.floor(Math.random() * pool.length)].clone()
  }

  update(dt) {
    this.time += dt
    this._spawnClock = (this._spawnClock || 0) + dt
    if (this.queue.length && this.enemies.filter((e) => e.alive).length < this.maxAlive) {
      const next = this.queue[0]
      if (this._spawnClock >= next.delay) {
        this.queue.shift()
        const e = new Enemy(this, {
          position: next.position,
          heavy: next.heavy,
          wave: this.wave,
        })
        this.enemies.push(e)
      }
    }
    for (const e of this.enemies) e.update(dt, this.player, this)
    if (this.enemies.some((e) => e.removed)) {
      this.enemies = this.enemies.filter((e) => !e.removed)
    }
  }

  get aliveCount() {
    return this.enemies.reduce((n, e) => n + (e.alive ? 1 : 0), 0)
  }

  get remainingCount() {
    return this.aliveCount + this.queue.length
  }

  get hitboxes() {
    const list = []
    for (const e of this.enemies) {
      if (e.alive) list.push(...e.hitboxes)
    }
    return list
  }

  clear() {
    for (const e of this.enemies) e.remove()
    this.enemies = []
    this.queue = []
  }
}
