import * as THREE from 'three'
import { randRange } from './textures.js'

const _q = new THREE.Quaternion()
const _up = new THREE.Vector3(0, 1, 0)
const _v = new THREE.Vector3()
const _v2 = new THREE.Vector3()

class ParticleField {
  constructor(scene, capacity = 1000) {
    this.capacity = capacity
    this.cursor = 0
    this.pos = new Float32Array(capacity * 3)
    this.col = new Float32Array(capacity * 3)
    this.size = new Float32Array(capacity)
    this.alpha = new Float32Array(capacity)
    this.vel = new Float32Array(capacity * 3)
    this.life = new Float32Array(capacity)
    this.maxLife = new Float32Array(capacity)
    this.drag = new Float32Array(capacity)
    this.gravity = new Float32Array(capacity)
    for (let i = 0; i < capacity; i++) this.pos[i * 3 + 1] = -999

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3))
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3))
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1))
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1))
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (420.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(vColor * (0.8 + a * 0.9), a * vAlpha);
        }`,
    })
    this.points = new THREE.Points(geo, mat)
    this.points.frustumCulled = false
    scene.add(this.points)
    this.geo = geo
  }

  emit(x, y, z, vx, vy, vz, color, size, life, gravity = 0, drag = 0.98) {
    const i = this.cursor
    this.cursor = (this.cursor + 1) % this.capacity
    const i3 = i * 3
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz
    this.col[i3] = color.r; this.col[i3 + 1] = color.g; this.col[i3 + 2] = color.b
    this.size[i] = size
    this.alpha[i] = 1
    this.life[i] = life
    this.maxLife[i] = life
    this.gravity[i] = gravity
    this.drag[i] = drag
  }

  update(dt) {
    const n = this.capacity
    for (let i = 0; i < n; i++) {
      if (this.life[i] <= 0) continue
      this.life[i] -= dt
      if (this.life[i] <= 0) { this.alpha[i] = 0; this.pos[i * 3 + 1] = -999; continue }
      const i3 = i * 3
      const drag = Math.pow(this.drag[i], dt * 60)
      this.vel[i3] *= drag
      this.vel[i3 + 1] = this.vel[i3 + 1] * drag + this.gravity[i] * dt
      this.vel[i3 + 2] *= drag
      this.pos[i3] += this.vel[i3] * dt
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt
      const t = this.life[i] / this.maxLife[i]
      this.alpha[i] = Math.min(1, t * 2.4)
    }
    this.geo.attributes.position.needsUpdate = true
    this.geo.attributes.aColor.needsUpdate = true
    this.geo.attributes.aSize.needsUpdate = true
    this.geo.attributes.aAlpha.needsUpdate = true
  }
}

export class Effects {
  constructor(scene, camera, T) {
    this.scene = scene
    this.camera = camera
    this.T = T
    this.field = new ParticleField(scene, 1400)

    this.sparks = [new THREE.Color(0xffc27a), new THREE.Color(0xff8b3d), new THREE.Color(0xfff0cf)]
    this.dust = [new THREE.Color(0x9b8a70), new THREE.Color(0x6d6660)]

    // tracers
    this.tracers = []
    const tracerGeo = new THREE.BoxGeometry(1, 1, 1)
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffd9a0, transparent: true, opacity: 1,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
      const mesh = new THREE.Mesh(tracerGeo, mat)
      mesh.visible = false
      mesh.frustumCulled = false
      scene.add(mesh)
      this.tracers.push({ mesh, life: 0, max: 1 })
    }
    this.tracerCursor = 0

    // smoke sprites
    this.smokes = []
    for (let i = 0; i < 34; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: T.smoke, transparent: true, opacity: 0, depthWrite: false,
        color: 0x89847a,
      }))
      sprite.visible = false
      scene.add(sprite)
      this.smokes.push({ sprite, life: 0, max: 1, vel: new THREE.Vector3(), grow: 1 })
    }
    this.smokeCursor = 0

    // decals
    this.decals = []
    const decalGeo = new THREE.PlaneGeometry(0.26, 0.26)
    for (let i = 0; i < 64; i++) {
      const mesh = new THREE.Mesh(decalGeo, new THREE.MeshBasicMaterial({
        map: T.hole, transparent: true, opacity: 0, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -4, color: 0xffffff,
      }))
      mesh.visible = false
      scene.add(mesh)
      this.decals.push(mesh)
    }
    this.decalCursor = 0

    // shell casings
    this.shells = []
    const shellGeo = new THREE.CylinderGeometry(0.012, 0.014, 0.05, 6)
    const shellMat = new THREE.MeshStandardMaterial({ color: 0xd1a24d, metalness: 1, roughness: 0.28, envMapIntensity: 1.4 })
    for (let i = 0; i < 24; i++) {
      const mesh = new THREE.Mesh(shellGeo, shellMat)
      mesh.visible = false
      scene.add(mesh)
      this.shells.push({ mesh, life: 0, vel: new THREE.Vector3(), spin: new THREE.Vector3() })
    }
    this.shellCursor = 0

    // muzzle flash sprite + light
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: T.glows.warm, color: 0xffc47a, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
    }))
    this.flash.scale.setScalar(1)
    scene.add(this.flash)
    this.flashLife = 0
    this.flashLight = new THREE.PointLight(0xffb066, 0, 9, 2)
    scene.add(this.flashLight)
    this.flashLightLife = 0

    this.shake = 0
    this.shakeDecay = 0
  }

  muzzle(pos, dir, scale = 1) {
    this.flash.position.copy(pos)
    this.flash.position.addScaledVector(dir, 0.05)
    this.flash.scale.setScalar(randRange(0.55, 0.85) * scale)
    this.flash.material.rotation = Math.random() * Math.PI * 2
    this.flash.material.opacity = 1
    this.flashLife = 0.055
    this.flashLight.position.copy(pos)
    this.flashLight.intensity = 55 * scale
    this.flashLightLife = 0.07
    this.shake = Math.max(this.shake, 0.10 * scale)
    for (let i = 0; i < 5; i++) {
      this.field.emit(
        pos.x, pos.y, pos.z,
        dir.x * randRange(3, 9) + randRange(-1.2, 1.2),
        dir.y * randRange(3, 9) + randRange(-0.6, 1.4),
        dir.z * randRange(3, 9) + randRange(-1.2, 1.2),
        this.sparks[i % 3], randRange(0.6, 1.4), randRange(0.04, 0.1), -2, 0.92
      )
    }
    // powder smoke
    this.smoke(pos, dir, 0.35, 0.28)
  }

  tracer(start, end, color = 0xffd8a0, width = 0.016) {
    const t = this.tracers[this.tracerCursor]
    this.tracerCursor = (this.tracerCursor + 1) % this.tracers.length
    const len = start.distanceTo(end)
    if (len < 0.2) return
    t.mesh.visible = true
    t.mesh.position.copy(start).add(end).multiplyScalar(0.5)
    t.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), _v.copy(end).sub(start).normalize())
    t.mesh.scale.set(width, width, len)
    t.mesh.material.color.setHex(color)
    t.mesh.material.opacity = 0.95
    t.life = 0.075
    t.max = 0.075
  }

  smoke(pos, dir = null, linger = 1.0, strength = 1) {
    const s = this.smokes[this.smokeCursor]
    this.smokeCursor = (this.smokeCursor + 1) % this.smokes.length
    s.sprite.visible = true
    s.sprite.position.copy(pos)
    s.vel.set(randRange(-0.3, 0.3), randRange(0.3, 0.9), randRange(-0.3, 0.3))
    if (dir) {
      s.vel.x += dir.x * 0.8
      s.vel.y += dir.y * 0.8
      s.vel.z += dir.z * 0.8
    }
    s.sprite.scale.setScalar(0.12 * strength)
    s.sprite.material.opacity = 0.42 * strength
    s.sprite.material.color.setHex(0x8d877c)
    s.sprite.material.rotation = Math.random() * 6.28
    s.life = linger
    s.max = linger
    s.grow = 0.9 * strength
  }

  decal(point, normal) {
    const mesh = this.decals[this.decalCursor]
    this.decalCursor = (this.decalCursor + 1) % this.decals.length
    mesh.visible = true
    mesh.position.copy(point).addScaledVector(normal, 0.012)
    mesh.lookAt(_v.copy(point).add(normal))
    mesh.rotateZ(Math.random() * Math.PI * 2)
    const s = randRange(0.7, 1.15)
    mesh.scale.set(s, s, s)
    mesh.material.opacity = 0.9
  }

  impact(point, normal, kind = 'concrete') {
    const n = Math.random()
    const count = 10
    for (let i = 0; i < count; i++) {
      const speed = randRange(1.5, 6)
      const c = this.sparks[i % this.sparks.length]
      this.field.emit(
        point.x + normal.x * 0.02, point.y + normal.y * 0.02, point.z + normal.z * 0.02,
        normal.x * speed + randRange(-2.5, 2.5),
        normal.y * speed + randRange(-1.5, 3),
        normal.z * speed + randRange(-2.5, 2.5),
        kind === 'metal' ? c : this.dust[i % 2], randRange(0.7, 1.7), randRange(0.08, 0.28), -7, 0.94
      )
    }
    if (n < 0.6) this.smoke(_v.copy(point).addScaledVector(normal, 0.06), normal, randRange(0.5, 0.9), randRange(0.35, 0.7))
    if (kind !== 'flesh') this.decal(point, normal)
  }

  blood(point, dir) {
    for (let i = 0; i < 10; i++) {
      this.field.emit(
        point.x, point.y, point.z,
        dir.x * randRange(2, 5) + randRange(-1, 1),
        randRange(0.2, 2.4),
        dir.z * randRange(2, 5) + randRange(-1, 1),
        new THREE.Color(0x8a2418), randRange(0.8, 1.6), randRange(0.12, 0.3), -6, 0.9
      )
    }
  }

  casing(pos, dir) {
    const s = this.shells[this.shellCursor]
    this.shellCursor = (this.shellCursor + 1) % this.shells.length
    s.mesh.visible = true
    s.mesh.position.copy(pos)
    s.vel.set(randRange(1.2, 2.4) - dir.z * 0.4, randRange(1.4, 2.6), randRange(-1.4, -0.2))
    s.spin.set(randRange(-14, 14), randRange(-14, 14), randRange(-14, 14))
    s.life = 3.2
  }

  explosion(point, color = 0xff6a32) {
    for (let i = 0; i < 26; i++) {
      const dir = new THREE.Vector3(randRange(-1, 1), randRange(-0.1, 1), randRange(-1, 1)).normalize()
      this.field.emit(
        point.x, point.y, point.z,
        dir.x * randRange(2, 8), dir.y * randRange(1, 7), dir.z * randRange(2, 8),
        Math.random() > 0.5 ? new THREE.Color(color) : new THREE.Color(0xffd69a),
        randRange(1, 2.4), randRange(0.2, 0.6), -6, 0.93
      )
    }
    this.smoke(point, null, 1.2, 1.4)
    this.shake = Math.max(this.shake, 0.22)
  }

  update(dt) {
    this.field.update(dt)
    for (const t of this.tracers) {
      if (t.life <= 0) continue
      t.life -= dt
      t.mesh.material.opacity = Math.max(0, t.life / t.max)
      if (t.life <= 0) t.mesh.visible = false
    }
    for (const s of this.smokes) {
      if (s.life <= 0) continue
      s.life -= dt
      const k = Math.max(0, s.life / s.max)
      s.sprite.position.addScaledVector(s.vel, dt)
      s.vel.multiplyScalar(0.985)
      s.sprite.scale.addScalar(s.grow * dt)
      s.sprite.material.opacity = 0.4 * k
      if (s.life <= 0) s.sprite.visible = false
    }
    for (const m of this.decals) {
      if (!m.visible) continue
      m.material.opacity = Math.max(0, m.material.opacity - dt * 0.012)
      if (m.material.opacity <= 0.01) m.visible = false
    }
    for (const s of this.shells) {
      if (s.life <= 0) continue
      s.life -= dt
      s.vel.y -= 12 * dt
      s.mesh.position.addScaledVector(s.vel, dt)
      s.mesh.rotation.x += s.spin.x * dt
      s.mesh.rotation.y += s.spin.y * dt
      s.mesh.rotation.z += s.spin.z * dt
      if (s.mesh.position.y < 0.02) {
        s.mesh.position.y = 0.02
        s.vel.y *= -0.35
        s.vel.x *= 0.6
        s.vel.z *= 0.6
        s.spin.multiplyScalar(0.55)
      }
      if (s.life <= 0) s.mesh.visible = false
    }
    if (this.flashLife > 0) {
      this.flashLife -= dt
      this.flash.material.opacity = Math.max(0, this.flashLife / 0.055)
      if (this.flashLife <= 0) this.flash.material.opacity = 0
    }
    if (this.flashLightLife > 0) {
      this.flashLightLife -= dt
      this.flashLight.intensity = Math.max(0, this.flashLightLife / 0.07) * 55
    }
    this.shake = Math.max(0, this.shake - dt * 0.55)
  }
}
