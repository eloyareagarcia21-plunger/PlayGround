import * as THREE from 'three'
import {
  createGlowTexture,
  createMuzzleTexture,
  createBulletHole,
  createBloodTexture,
} from './textures.js'

const MAX_SPARKS = 320
const MAX_DECALS = 56
const MAX_PUFFS = 14
const MAX_FLASHES = 14
const MAX_RIPPLES = 18

export class Effects {
  constructor({ scene, camera, level, engine }) {
    this.scene = scene
    this.camera = camera
    this.level = level
    this.engine = engine

    this.glow = createGlowTexture({ size: 64, color: '255,255,255', core: 0.12 })
    this.muzzleTex = createMuzzleTexture({ size: 128 })
    this.holeTex = createBulletHole({ size: 128 })
    this.bloodTex = createBloodTexture({ size: 128 })

    this.envFlash = new THREE.PointLight(0xffb066, 0, 22, 2)
    this.envFlash.position.set(0, 2, 0)
    scene.add(this.envFlash)

    this._initTracers()
    this._initSparks()
    this._initDecals()
    this._initPuffs()
    this._initEnemyFlashes()
    this._initRain()
    this._initDust()
    this._initRipples()
  }

  /* --------------------------------------------------------------- tracers */
  _initTracers() {
    this.tracers = []
    const geo = new THREE.CylinderGeometry(0.006, 0.006, 1, 5, 1, true)
    geo.translate(0, 0.5, 0)
    for (let i = 0; i < 30; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffcf9a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.visible = false
      mesh.frustumCulled = false
      this.scene.add(mesh)
      this.tracers.push({ mesh, mat, life: 0, max: 0.07 })
    }
    this._tracerIndex = 0
  }

  tracer(from, to, { color = 0xffd6a2, life = 0.07, width = 1, opacity = 0.95 } = {}) {
    const t = this.tracers[this._tracerIndex++ % this.tracers.length]
    const dir = new THREE.Vector3().subVectors(to, from)
    const len = dir.length()
    if (len < 0.05) return
    t.mesh.position.copy(from)
    t.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    t.mesh.scale.set(width, len, width)
    t.mat.color.setHex(color)
    t.mat.opacity = opacity
    t.life = life
    t.max = life
    t.mesh.visible = true
  }

  /* ---------------------------------------------------------------- sparks */
  _initSparks() {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(MAX_SPARKS * 3)
    const col = new Float32Array(MAX_SPARKS * 3)
    const life = new Float32Array(MAX_SPARKS)
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
    geo.setAttribute('aLife', new THREE.BufferAttribute(life, 1))
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: this.glow },
      },
      vertexShader: /* glsl */`
        attribute float aLife;
        attribute vec3 aColor;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (8.0 + 9.0 * aLife) * (180.0 / max(1.0, -mv.z));
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          float a = texture2D(uMap, gl_PointCoord).a;
          gl_FragColor = vec4(vColor, a * clamp(vLife, 0.0, 1.0));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geo, mat)
    points.frustumCulled = false
    points.renderOrder = 6
    this.scene.add(points)
    this.sparkGeo = geo
    this.sparkPos = pos
    this.sparkCol = col
    this.sparkLife = life
    this.sparks = []
    for (let i = 0; i < MAX_SPARKS; i++) this.sparks.push({ vel: new THREE.Vector3(), life: 0, max: 1, drag: 0.9, gravity: 9 })
    this._sparkIndex = 0
  }

  spawnSparks(point, normal, { count = 14, color = 0xffbb77, speed = 5, size = 1, gravity = 9, blood = false } = {}) {
    for (let i = 0; i < count; i++) {
      const idx = this._sparkIndex++ % MAX_SPARKS
      const s = this.sparks[idx]
      const dir = new THREE.Vector3(
        normal.x + (Math.random() - 0.5) * 1.7,
        normal.y + (Math.random() - 0.5) * 1.7 + 0.35,
        normal.z + (Math.random() - 0.5) * 1.7
      ).normalize()
      s.vel.copy(dir).multiplyScalar(speed * (0.35 + Math.random() * 0.9))
      s.life = s.max = 0.25 + Math.random() * (blood ? 0.35 : 0.25)
      s.drag = blood ? 4.5 : 1.2
      s.gravity = gravity
      const p = point.clone()
      p.addScaledVector(normal, 0.02)
      this.sparkPos[idx * 3] = p.x
      this.sparkPos[idx * 3 + 1] = p.y
      this.sparkPos[idx * 3 + 2] = p.z
      const c = new THREE.Color(color)
      c.offsetHSL(0, 0, (Math.random() - 0.5) * 0.2)
      this.sparkCol[idx * 3] = c.r * size
      this.sparkCol[idx * 3 + 1] = c.g * size
      this.sparkCol[idx * 3 + 2] = c.b * size
      this.sparkLife[idx] = 1
    }
    this.sparkGeo.attributes.position.needsUpdate = true
    this.sparkGeo.attributes.aColor.needsUpdate = true
    this.sparkGeo.attributes.aLife.needsUpdate = true
  }

  impact(point, normal, material = 'concrete', enemy = false) {
    if (enemy) {
      this.spawnSparks(point, normal, { count: 16, color: 0xff2a3a, speed: 3.4, gravity: 9, blood: true, size: 1.4 })
      this.puff(point, normal, 0x5c0a10, 0.34, 0.55)
      return
    }
    if (material === 'metal') {
      this.spawnSparks(point, normal, { count: 16, color: 0xffc27a, speed: 6.5, gravity: 11 })
      this.puff(point, normal, 0x9aa0a8, 0.22, 0.4)
    } else if (material === 'wood') {
      this.spawnSparks(point, normal, { count: 10, color: 0xd59a5c, speed: 4, gravity: 9 })
      this.puff(point, normal, 0x6b5138, 0.4, 0.7)
    } else {
      this.spawnSparks(point, normal, { count: 11, color: 0xffc790, speed: 4.8, gravity: 10 })
      this.puff(point, normal, 0x8d8577, 0.55, 0.8)
    }
    this.decal(point, normal)
    this.envFlash.position.copy(point).addScaledVector(normal, 0.5)
    this.envFlash.intensity = Math.max(this.envFlash.intensity, 0.55)
  }

  /* --------------------------------------------------------------- decals */
  _initDecals() {
    this.decals = []
    const geo = new THREE.PlaneGeometry(0.22, 0.22)
    for (let i = 0; i < MAX_DECALS; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: this.holeTex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        toneMapped: false,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.visible = false
      mesh.renderOrder = 2
      this.scene.add(mesh)
      this.decals.push({ mesh, mat, life: 0 })
    }
    this._decalIndex = 0
  }

  decal(point, normal, scale = 1) {
    const d = this.decals[this._decalIndex++ % this.decals.length]
    d.mesh.position.copy(point).addScaledVector(normal, 0.012)
    d.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal.clone().normalize())
    d.mesh.rotateZ(Math.random() * Math.PI * 2)
    d.mesh.scale.setScalar(scale * (0.8 + Math.random() * 0.5))
    d.mat.opacity = 0.92
    d.life = 26
    d.mesh.visible = true
  }

  /* ----------------------------------------------------------------- puffs */
  _initPuffs() {
    this.puffs = []
    for (let i = 0; i < MAX_PUFFS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.glow,
        color: 0x8a857a,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.NormalBlending,
      })
      const sprite = new THREE.Sprite(mat)
      sprite.visible = false
      this.scene.add(sprite)
      this.puffs.push({ sprite, mat, life: 0, max: 1, scale: 1, drift: new THREE.Vector3() })
    }
    this._puffIndex = 0
  }

  puff(point, normal, color = 0x8a857a, scale = 0.5, life = 0.7) {
    const p = this.puffs[this._puffIndex++ % this.puffs.length]
    p.sprite.position.copy(point).addScaledVector(normal, 0.05)
    p.mat.color.setHex(color)
    p.mat.opacity = 0.42
    p.life = life
    p.max = life
    p.scale = scale
    p.sprite.scale.setScalar(scale * 0.5)
    p.sprite.visible = true
    p.drift.set((Math.random() - 0.5) * 0.3, 0.25 + Math.random() * 0.3, (Math.random() - 0.5) * 0.3)
  }

  /* ---------------------------------------------------------- enemy flashes */
  _initEnemyFlashes() {
    this.flashes = []
    for (let i = 0; i < MAX_FLASHES; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.muzzleTex,
        color: 0xffc38a,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      })
      const sprite = new THREE.Sprite(mat)
      sprite.visible = false
      this.scene.add(sprite)
      this.flashes.push({ sprite, mat, life: 0 })
    }
    this._flashIndex = 0
  }

  enemyFlash(position, scale = 0.55) {
    const f = this.flashes[this._flashIndex++ % this.flashes.length]
    f.sprite.position.copy(position)
    f.sprite.scale.setScalar(scale * (0.8 + Math.random() * 0.5))
    f.mat.opacity = 1
    f.life = 0.06
    f.sprite.visible = true
  }

  /* ------------------------------------------------------------------ rain */
  _initRain() {
    const mobile = this.engine?.mobile
    this.rainCount = mobile ? 520 : 1100
    const positions = new Float32Array(this.rainCount * 6)
    this.rainData = []
    for (let i = 0; i < this.rainCount; i++) {
      const x = (Math.random() - 0.5) * 44
      const y = Math.random() * 24
      const z = (Math.random() - 0.5) * 44
      this.rainData.push({ x, y, z, speed: 18 + Math.random() * 9, len: 0.18 + Math.random() * 0.22 })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.LineBasicMaterial({
      color: 0xaac9e0,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    this.rain = new THREE.LineSegments(geo, mat)
    this.rain.frustumCulled = false
    this.rainPositions = positions
    this.scene.add(this.rain)
  }

  /* ------------------------------------------------------------------ dust */
  _initDust() {
    const count = this.engine?.mobile ? 100 : 220
    const pos = new Float32Array(count * 3)
    this.dustData = []
    for (let i = 0; i < count; i++) {
      this.dustData.push({
        x: (Math.random() - 0.5) * 34,
        y: 0.4 + Math.random() * 7,
        z: (Math.random() - 0.5) * 34,
        phase: Math.random() * Math.PI * 2,
        speed: 0.08 + Math.random() * 0.15,
      })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      size: 0.045,
      map: createGlowTexture({ size: 32, color: '255,220,180', core: 0.2 }),
      color: 0xffd9b0,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    this.dust = new THREE.Points(geo, mat)
    this.dust.frustumCulled = false
    this.dustPositions = pos
    this.scene.add(this.dust)
  }

  /* --------------------------------------------------------------- ripples */
  _initRipples() {
    const geo = new THREE.RingGeometry(0.03, 0.05, 14)
    this.ripples = []
    for (let i = 0; i < MAX_RIPPLES; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xaac6da,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.x = -Math.PI / 2
      mesh.visible = false
      this.scene.add(mesh)
      this.ripples.push({ mesh, mat, life: 0 })
    }
    this._rippleIndex = 0
    this._rippleTimer = 0
  }

  ripple(x, z) {
    const r = this.ripples[this._rippleIndex++ % this.ripples.length]
    r.mesh.position.set(x, 0.02, z)
    r.mesh.scale.setScalar(1)
    r.mat.opacity = 0.5
    r.life = 0.6
    r.mesh.visible = true
  }

  /* ---------------------------------------------------------------- update */
  update(dt, time) {
    // tracers
    for (const t of this.tracers) {
      if (t.life <= 0) continue
      t.life -= dt
      const k = Math.max(0, t.life / t.max)
      t.mat.opacity = k * 0.95
      if (t.life <= 0) t.mesh.visible = false
    }

    // sparks
    let sparksDirty = false
    for (let i = 0; i < MAX_SPARKS; i++) {
      const s = this.sparks[i]
      if (s.life <= 0) continue
      s.life -= dt
      const i3 = i * 3
      s.vel.y -= s.gravity * dt
      s.vel.multiplyScalar(1 - Math.min(1, s.drag * dt))
      this.sparkPos[i3] += s.vel.x * dt
      this.sparkPos[i3 + 1] += s.vel.y * dt
      this.sparkPos[i3 + 2] += s.vel.z * dt
      if (this.sparkPos[i3 + 1] < 0.03) {
        this.sparkPos[i3 + 1] = 0.03
        s.vel.y *= -0.35
        s.vel.x *= 0.6
        s.vel.z *= 0.6
      }
      this.sparkLife[i] = Math.max(0, s.life / s.max)
      sparksDirty = true
    }
    if (sparksDirty) {
      this.sparkGeo.attributes.position.needsUpdate = true
      this.sparkGeo.attributes.aLife.needsUpdate = true
    }

    // decals
    for (const d of this.decals) {
      if (d.life <= 0) continue
      d.life -= dt
      if (d.life < 3) d.mat.opacity = Math.max(0, (d.life / 3) * 0.92)
      if (d.life <= 0) d.mesh.visible = false
    }

    // puffs
    for (const p of this.puffs) {
      if (p.life <= 0) continue
      p.life -= dt
      const k = Math.max(0, p.life / p.max)
      p.mat.opacity = k * 0.4
      p.sprite.scale.setScalar(p.scale * (0.5 + (1 - k) * 1.5))
      p.sprite.position.addScaledVector(p.drift, dt)
      if (p.life <= 0) p.sprite.visible = false
    }

    // enemy flashes
    for (const f of this.flashes) {
      if (f.life <= 0) continue
      f.life -= dt
      f.mat.opacity = Math.max(0, f.life / 0.06)
      if (f.life <= 0) f.sprite.visible = false
    }

    this.envFlash.intensity *= Math.pow(0.00004, dt)
    if (this.envFlash.intensity < 0.08) this.envFlash.intensity = 0

    // rain follows the player camera.
    const cam = this.camera.position
    const pos = this.rainPositions
    for (let i = 0; i < this.rainCount; i++) {
      const r = this.rainData[i]
      r.y -= r.speed * dt
      if (r.y < 0) {
        r.y = 18 + Math.random() * 8
        r.x = (Math.random() - 0.5) * 44
        r.z = (Math.random() - 0.5) * 44
      }
      // wrap around camera
      let x = r.x + cam.x * 0.0
      let z = r.z + cam.z * 0.0
      // keep drops inside a 44m box centered on camera using toroidal wrap
      x = ((r.x - cam.x + 22) % 44 + 44) % 44 - 22 + cam.x
      z = ((r.z - cam.z + 22) % 44 + 44) % 44 - 22 + cam.z
      const i6 = i * 6
      pos[i6] = x
      pos[i6 + 1] = r.y
      pos[i6 + 2] = z
      pos[i6 + 3] = x + 0.06
      pos[i6 + 4] = r.y + r.len
      pos[i6 + 5] = z + 0.02
    }
    this.rain.geometry.attributes.position.needsUpdate = true

    // dust motes
    for (let i = 0; i < this.dustData.length; i++) {
      const d = this.dustData[i]
      const i3 = i * 3
      d.y += d.speed * 0.15 * dt
      this.dustPositions[i3] = d.x + Math.sin(time * d.speed + d.phase) * 0.7
      this.dustPositions[i3 + 1] = d.y + Math.sin(time * 0.4 + d.phase) * 0.2
      this.dustPositions[i3 + 2] = d.z + Math.cos(time * d.speed * 0.8 + d.phase) * 0.7
      if (d.y > 8) d.y = 0.3
    }
    this.dust.geometry.attributes.position.needsUpdate = true

    // puddle ripples (sparse, camera-local)
    this._rippleTimer -= dt
    if (this._rippleTimer <= 0) {
      this._rippleTimer = 0.12 + Math.random() * 0.24
      this.ripple(cam.x + (Math.random() - 0.5) * 18, cam.z + (Math.random() - 0.5) * 18)
    }
    for (const r of this.ripples) {
      if (r.life <= 0) continue
      r.life -= dt
      const k = Math.max(0, r.life / 0.6)
      r.mesh.scale.setScalar(1 + (1 - k) * 7)
      r.mat.opacity = k * 0.42
      if (r.life <= 0) r.mesh.visible = false
    }
  }

  muzzleLight(position, intensity = 30) {
    this.envFlash.position.copy(position)
    this.envFlash.intensity = intensity
  }
}
