import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { randRange } from './textures.js'

const lerp = THREE.MathUtils.lerp
const damp = (a, b, l, dt) => lerp(a, b, 1 - Math.exp(-l * dt))

/* Worn gunmetal detail map: mostly light so the material tint survives,
 * with grime, machining streaks and edge scuffs to break up the boxes. */
function gunmetalMap() {
  const S = 256
  const c = document.createElement('canvas')
  c.width = c.height = S
  const x = c.getContext('2d')
  x.fillStyle = '#cfd4d7'
  x.fillRect(0, 0, S, S)
  for (let i = 0; i < 70; i++) {
    const r = 8 + Math.random() * 46
    const px = Math.random() * S, py = Math.random() * S
    const g = x.createRadialGradient(px, py, 0, px, py, r)
    const a = 0.04 + Math.random() * 0.10
    g.addColorStop(0, `rgba(20,24,26,${a})`)
    g.addColorStop(1, 'rgba(20,24,26,0)')
    x.fillStyle = g
    x.fillRect(px - r, py - r, r * 2, r * 2)
  }
  for (let i = 0; i < 90; i++) {
    x.strokeStyle = Math.random() > 0.55 ? 'rgba(255,255,255,0.28)' : 'rgba(24,28,30,0.22)'
    x.lineWidth = Math.random() * 1.2 + 0.3
    const px = Math.random() * S, py = Math.random() * S
    x.beginPath()
    x.moveTo(px, py)
    x.lineTo(px + (Math.random() - 0.5) * 22, py + (Math.random() - 0.5) * 3)
    x.stroke()
  }
  for (let i = 0; i < 220; i++) {
    x.fillStyle = `rgba(16,20,22,${0.10 + Math.random() * 0.22})`
    x.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 2, 1 + Math.random() * 2)
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.colorSpace = THREE.SRGBColorSpace
  t.repeat.set(1.6, 1.6)
  return t
}

/* A fully procedural MK-17 carbine viewmodel: receiver, free-float rail,
 * optic, suppressor, magazine, gloved hands and animated reload. */
export class Weapon {
  constructor(camera, scene) {
    this.camera = camera
    this.group = new THREE.Group()
    camera.add(this.group)
    scene.add(camera)

    const worn = gunmetalMap()
    this.metal = new THREE.MeshStandardMaterial({
      color: 0x2c3236, map: worn, metalness: 0.86, roughness: 0.38, envMapIntensity: 0.85,
    })
    this.metalDark = new THREE.MeshStandardMaterial({
      color: 0x14181a, map: worn, metalness: 0.8, roughness: 0.5, envMapIntensity: 0.7,
    })
    this.polymer = new THREE.MeshStandardMaterial({ color: 0x181b1c, map: worn, metalness: 0.12, roughness: 0.82 })
    this.tan = new THREE.MeshStandardMaterial({ color: 0x5f5039, map: worn, metalness: 0.1, roughness: 0.82 })
    this.glove = new THREE.MeshStandardMaterial({ color: 0x262a23, metalness: 0.06, roughness: 0.94 })
    this.sleeve = new THREE.MeshStandardMaterial({ color: 0x3d4138, metalness: 0.05, roughness: 0.95 })
    this.glass = new THREE.MeshPhysicalMaterial({
      color: 0x9fd6e8, metalness: 0, roughness: 0.06, transmission: 0.65, transparent: true,
      opacity: 0.35, envMapIntensity: 1.4, side: THREE.DoubleSide,
    })
    this.reticleMat = new THREE.MeshBasicMaterial({ color: 0xff3a20 })

    const g = this.group
    this.parts = {}

    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = g) => {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, z)
      m.rotation.set(rx, ry, rz)
      parent.add(m)
      return m
    }
    const bx = (w, h, d) => new RoundedBoxGeometry(w, h, d, 2, Math.min(w, h, d) * 0.1)
    const cyl = (r1, r2, h, s = 12) => new THREE.CylinderGeometry(r1, r2, h, s)

    // ---- lower receiver / chassis
    add(bx(0.082, 0.125, 0.34), this.metal, 0, 0, -0.03)
    add(bx(0.072, 0.035, 0.30), this.metalDark, 0, 0.073, -0.06)
    // ---- upper receiver
    const upper = add(bx(0.088, 0.085, 0.33), this.metal, 0, 0.095, -0.10)
    // rail
    add(bx(0.065, 0.022, 0.42), this.metalDark, 0, 0.148, -0.15)
    for (let i = 0; i < 15; i++) {
      add(bx(0.068, 0.014, 0.012), this.metal, 0, 0.158, 0.05 - i * 0.027)
    }
    // handguard
    const hg = add(bx(0.09, 0.105, 0.30), this.metal, 0, 0.075, -0.42)
    for (let i = 0; i < 7; i++) {
      add(bx(0.096, 0.014, 0.022), this.metalDark, 0, 0.126, -0.30 - i * 0.04)
      add(bx(0.096, 0.012, 0.02), this.metalDark, 0, 0.023, -0.30 - i * 0.04)
    }
    // ---- barrel + suppressor
    add(cyl(0.019, 0.019, 0.3, 10), this.metalDark, 0, 0.075, -0.66, Math.PI / 2)
    add(cyl(0.033, 0.03, 0.19, 14), this.metal, 0, 0.075, -0.82, Math.PI / 2)
    for (let i = 0; i < 5; i++) {
      add(cyl(0.034, 0.034, 0.006, 14), this.metalDark, 0, 0.075, -0.87 + i * 0.022, Math.PI / 2)
    }
    add(cyl(0.026, 0.026, 0.012, 12), this.metalDark, 0, 0.075, -0.916, Math.PI / 2)

    // ---- gas block + folding front sight
    add(bx(0.056, 0.062, 0.05), this.metalDark, 0, 0.075, -0.575)
    add(bx(0.046, 0.018, 0.046), this.metalDark, 0, 0.114, -0.575)
    add(bx(0.012, 0.086, 0.013), this.metal, 0, 0.152, -0.578)
    add(bx(0.024, 0.016, 0.016), this.metalDark, 0, 0.198, -0.578)
    add(new THREE.CylinderGeometry(0.005, 0.005, 0.028, 6), this.metal, 0, 0.198, -0.578, 0, 0, Math.PI / 2)
    // handguard end cap + QD socket
    add(bx(0.094, 0.112, 0.018), this.metalDark, 0, 0.075, -0.568)
    add(cyl(0.012, 0.012, 0.016, 10), this.metalDark, -0.05, 0.075, -0.40, 0, 0, Math.PI / 2)

    // ---- magwell flare + ejection port + controls
    add(bx(0.074, 0.075, 0.125), this.metal, 0, -0.085, -0.045)
    add(bx(0.004, 0.036, 0.078), this.metalDark, 0.0445, 0.10, -0.055)
    add(bx(0.012, 0.022, 0.042), this.metal, 0.045, 0.062, 0.005)
    add(bx(0.01, 0.018, 0.03), this.metalDark, -0.045, 0.09, -0.02)
    add(bx(0.048, 0.09, 0.012), this.metalDark, 0, 0.06, 0.148)

    // ---- magazine (animated on reload)
    this.mag = new THREE.Group()
    this.mag.position.set(0, -0.125, -0.035)
    g.add(this.mag)
    const magBody = new THREE.Mesh(bx(0.055, 0.20, 0.105), this.tan)
    magBody.position.y = -0.07
    magBody.rotation.x = -0.13
    this.mag.add(magBody)
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(bx(0.058, 0.012, 0.107), this.polymer)
      rib.position.set(0, -0.02 - i * 0.05, 0.01 + i * 0.007)
      rib.rotation.x = -0.13
      this.mag.add(rib)
    }
    const floor = new THREE.Mesh(bx(0.062, 0.022, 0.115), this.polymer)
    floor.position.set(0, -0.19, 0.015)
    this.mag.add(floor)

    // ---- pistol grip + trigger guard
    add(bx(0.052, 0.16, 0.075), this.polymer, 0, -0.14, 0.105, 0.22)
    add(bx(0.05, 0.02, 0.01), this.metal, 0, -0.205, 0.13)
    const guard = add(new THREE.TorusGeometry(0.055, 0.008, 5, 12, Math.PI * 1.35), this.metalDark, 0, -0.075, 0.055, 0, Math.PI / 2, 0.2)
    add(bx(0.012, 0.05, 0.012), this.metal, 0, -0.10, 0.03, 0.5)

    // ---- stock
    add(bx(0.07, 0.115, 0.26), this.polymer, 0, 0.045, 0.25)
    add(bx(0.075, 0.07, 0.10), this.polymer, 0, 0.02, 0.36)
    add(bx(0.078, 0.15, 0.035), this.metalDark, 0, 0.03, 0.405)
    add(bx(0.03, 0.045, 0.08), this.polymer, 0, 0.115, 0.20)

    // ---- optic: enclosed holographic sight
    add(bx(0.06, 0.03, 0.11), this.metalDark, 0, 0.185, -0.12)
    add(bx(0.075, 0.075, 0.085), this.metal, 0, 0.235, -0.12)
    // hood / glass
    add(bx(0.002, 0.058, 0.06), this.glass, 0.038, 0.235, -0.12)
    add(bx(0.002, 0.058, 0.06), this.glass, -0.038, 0.235, -0.12)
    // floating reticle
    const dot = add(new THREE.SphereGeometry(0.0028, 8, 8), this.reticleMat, 0, 0.232, -0.105)
    dot.renderOrder = 3
    const ring = add(new THREE.TorusGeometry(0.009, 0.0014, 4, 20), this.reticleMat, 0, 0.232, -0.107)
    ring.renderOrder = 3
    const glassPlane = add(new THREE.PlaneGeometry(0.062, 0.055), this.glass, 0, 0.232, -0.108)
    glassPlane.rotation.y = 0
    this.reticle = new THREE.Group()
    this.reticle.add(dot)
    // controls
    add(cyl(0.012, 0.012, 0.014, 10), this.metalDark, 0.042, 0.25, -0.12, 0, 0, Math.PI / 2)
    add(bx(0.018, 0.014, 0.05), this.polymer, 0.044, 0.212, -0.09)
    // optic turrets + rear lens hood
    add(cyl(0.011, 0.011, 0.02, 10), this.metalDark, 0.052, 0.235, -0.12, 0, 0, Math.PI / 2)
    add(cyl(0.010, 0.010, 0.016, 10), this.metalDark, 0, 0.286, -0.12)
    add(bx(0.072, 0.01, 0.008), this.metalDark, 0, 0.235, -0.165)

    // ---- charging handle, bolt, ejection port, selectors
    add(bx(0.02, 0.016, 0.05), this.metalDark, 0.048, 0.118, 0.0)
    add(bx(0.006, 0.028, 0.055), this.metalDark, 0.047, 0.10, -0.02)
    add(cyl(0.009, 0.009, 0.04, 8), this.metal, 0.043, 0.045, 0.035, 0, 0, Math.PI / 2)
    add(bx(0.024, 0.011, 0.033), this.metalDark, 0.044, 0.05, -0.04)
    // flashlight / laser unit
    const lamp = add(cyl(0.021, 0.023, 0.10, 12), this.metalDark, -0.062, 0.075, -0.42, Math.PI / 2)
    add(new THREE.CircleGeometry(0.019, 12), new THREE.MeshBasicMaterial({ color: 0xffe0b0 }), -0.062, 0.075, -0.471)
    // sling loop
    const loop = add(new THREE.TorusGeometry(0.02, 0.004, 4, 10), this.metalDark, -0.045, 0.03, 0.36, 0, Math.PI / 2)

    // ---- gloved hands / forearms
    const handR = new THREE.Group()
    handR.position.set(0.002, -0.155, 0.10)
    handR.rotation.set(0.22, 0, -0.04)
    g.add(handR)
    const palmR = new THREE.Mesh(bx(0.062, 0.09, 0.10), this.glove)
    handR.add(palmR)
    for (let i = 0; i < 4; i++) {
      const finger = new THREE.Mesh(bx(0.016, 0.024, 0.072), this.glove)
      finger.position.set(0.016 - i * 0.0135, -0.008, -0.075)
      finger.rotation.x = -0.55
      handR.add(finger)
    }
    const thumbR = new THREE.Mesh(bx(0.022, 0.05, 0.024), this.glove)
    thumbR.position.set(-0.036, 0.015, -0.03)
    thumbR.rotation.x = 0.5
    handR.add(thumbR)
    // Arms stay out of frame; the gloves and the weapon are the read.
    const forearmR = new THREE.Mesh(cyl(0.032, 0.045, 0.12, 8), this.sleeve)
    forearmR.position.set(0.08, -0.34, 0.19)
    forearmR.rotation.set(1.35, 0.12, -0.32)
    forearmR.visible = false
    g.add(forearmR)

    const handL = new THREE.Group()
    handL.position.set(-0.015, 0.005, -0.47)
    handL.rotation.set(-0.1, 0, 0.12)
    g.add(handL)
    const palmL = new THREE.Mesh(bx(0.06, 0.055, 0.11), this.glove)
    handL.add(palmL)
    for (let i = 0; i < 4; i++) {
      const finger = new THREE.Mesh(bx(0.013, 0.048, 0.024), this.glove)
      finger.position.set(-0.02 + i * 0.0135, 0.024, -0.035)
      finger.rotation.x = 0.2
      handL.add(finger)
    }
    const thumbL = new THREE.Mesh(bx(0.024, 0.024, 0.06), this.glove)
    thumbL.position.set(0.035, 0.012, 0.0)
    handL.add(thumbL)
    const forearmL = new THREE.Mesh(cyl(0.032, 0.045, 0.12, 8), this.sleeve)
    forearmL.position.set(-0.06, -0.17, -0.58)
    forearmL.rotation.set(1.25, 0, -0.55)
    forearmL.visible = false
    g.add(forearmL)

    // small fill light so the weapon reads in the dark
    const fill = new THREE.PointLight(0xc3d7e6, 2.1, 2.2, 2)
    fill.position.set(0.5, 0.26, 0.45)
    g.add(fill)
    const rim = new THREE.PointLight(0xffb27a, 1.35, 1.8, 2)
    rim.position.set(-0.42, 0.12, -0.2)
    g.add(rim)
    const topRim = new THREE.PointLight(0x9fc6e8, 1.05, 1.6, 2)
    topRim.position.set(-0.2, 0.55, -0.35)
    g.add(topRim)

    // The viewmodel shrinks on portrait screens, where the horizontal FOV is
    // narrow and a full-size rifle would swallow the playfield.
    this.baseScale = 0.72
    this.narrowScale = 0.58
    g.scale.setScalar(this.baseScale)

    // muzzle marker
    this.muzzle = new THREE.Object3D()
    this.muzzle.position.set(0, 0.075, -0.95)
    g.add(this.muzzle)
    this.ejectPort = new THREE.Object3D()
    this.ejectPort.position.set(0.05, 0.10, -0.02)
    g.add(this.ejectPort)

    this.basePos = new THREE.Vector3(0.27, -0.40, -0.94)
    this.baseRot = new THREE.Vector3(0.012, 0.045, 0.022)
    this.adsPos = new THREE.Vector3(0, -0.172, -0.72)
    this.adsRot = new THREE.Vector3(0, 0, 0)
    this.sprintPos = new THREE.Vector3(0.34, -0.44, -0.92)
    this.sprintRot = new THREE.Vector3(-0.20, 0.62, 0.16)

    this.ads = 0
    this.sprint = 0
    this.bobPhase = 0
    this.swayX = 0
    this.swayY = 0
    this.kick = 0
    this.recoilRot = 0
    this.reloadT = 0
    this.reloading = false
    this.reloadDuration = 2.15
    this.sprintAmount = 0
  }

  setReloading(on) {
    this.reloading = on
    if (on) this.reloadT = 0
    else this.reloadT = 0
  }

  reset() {
    this.setReloading(false)
    this.kick = 0
    this.recoilRot = 0
    this.ads = 0
    this.sprint = 0
    this.swayX = 0
    this.swayY = 0
    this.group.visible = true
    this.group.position.copy(this.basePos)
    this.group.rotation.set(0, 0, 0)
    this.mag.position.set(0, -0.125, -0.035)
    this.mag.rotation.set(0, 0, 0)
  }

  fire(kick = 1) {
    this.kick = Math.min(1.5, this.kick + 0.55 * kick)
    this.recoilRot = Math.min(1, this.recoilRot + 0.32 * kick)
  }

  update(dt, { moving = 0, sprinting = false, ads = false, lookDX = 0, lookDY = 0, grounded = true, time = 0 } = {}) {
    this.ads = damp(this.ads, ads ? 1 : 0, 14, dt)
    this.sprint = damp(this.sprint, sprinting ? 1 : 0, 8, dt)
    this.kick = damp(this.kick, 0, 13, dt)
    this.recoilRot = damp(this.recoilRot, 0, 11, dt)
    this.swayX = damp(this.swayX, THREE.MathUtils.clamp(-lookDX * 0.0012, -0.03, 0.03), 9, dt)
    this.swayY = damp(this.swayY, THREE.MathUtils.clamp(lookDY * 0.0012, -0.03, 0.03), 9, dt)

    const speed = moving
    this.bobPhase += dt * (7.0 + speed * 2.2)
    const bobAmp = (1 - this.ads * 0.75) * (grounded ? 1 : 0.3) * (0.45 + speed * 0.55)
    const bobX = Math.cos(this.bobPhase * 0.5) * 0.006 * bobAmp
    const bobY = Math.sin(this.bobPhase) * 0.008 * bobAmp

    // Portrait screens have a much narrower horizontal FOV, so shrink the
    // viewmodel and pull it toward the centre to keep it on screen.
    const narrow = THREE.MathUtils.clamp((0.95 - this.camera.aspect) / 0.42, 0, 1)
    const scale = lerp(this.baseScale, this.narrowScale, narrow)
    this.group.scale.setScalar(scale)
    this.adsPos.y = -0.2205 * scale
    const hipX = lerp(this.basePos.x, 0.16, narrow)
    const hipY = lerp(this.basePos.y, -0.31, narrow)
    let px = lerp(hipX, this.adsPos.x, this.ads)
    let py = lerp(hipY, this.adsPos.y, this.ads)
    let pz = lerp(this.basePos.z, this.adsPos.z, this.ads)
    px = lerp(px, lerp(this.sprintPos.x, 0.22, narrow), this.sprint)
    py = lerp(py, this.sprintPos.y, this.sprint)
    pz = lerp(pz, this.sprintPos.z, this.sprint)

    let rx = lerp(this.baseRot.x, this.adsRot.x, this.ads)
    let ry = lerp(this.baseRot.y, this.adsRot.y, this.ads)
    let rz = lerp(this.baseRot.z, this.adsRot.z, this.ads)
    rx = lerp(rx, this.sprintRot.x, this.sprint)
    ry = lerp(ry, this.sprintRot.y, this.sprint)
    rz = lerp(rz, this.sprintRot.z, this.sprint)

    // reload choreography: dip, mag out, mag in, slap
    let reloadY = 0, reloadRotX = 0, reloadRotZ = 0, magDrop = 0
    if (this.reloading) {
      this.reloadT += dt
      const p = THREE.MathUtils.clamp(this.reloadT / this.reloadDuration, 0, 1)
      const dip = Math.sin(Math.min(1, p * 1.15) * Math.PI) * 1
      reloadY = -0.10 * dip
      reloadRotX = -0.42 * dip
      reloadRotZ = 0.55 * dip
      magDrop = p > 0.16 && p < 0.72 ? Math.min(1, (p - 0.16) / 0.10) * (1 - Math.min(1, (p - 0.62) / 0.10)) : 0
      this.mag.position.y = -0.125 - magDrop * 0.42
      this.mag.rotation.z = magDrop * 0.5
      this.mag.rotation.x = magDrop * 0.3
      if (p >= 1) {
        this.reloading = false
        this.reloadT = 0
        this.mag.position.set(0, -0.125, -0.035)
        this.mag.rotation.set(0, 0, 0)
      }
    }

    // recoil
    pz += this.kick * 0.045
    rx -= this.recoilRot * 0.10
    py += this.kick * 0.006
    px += Math.sin(this.bobPhase * 9) * this.recoilRot * 0.004

    // positional sway + bob + reload
    this.group.position.set(
      px + bobX + this.swayX,
      py + bobY + reloadY + this.swayY + Math.sin(time * 1.2) * 0.0018,
      pz
    )
    this.group.rotation.set(
      rx + reloadRotX + Math.sin(time * 0.8) * 0.002,
      ry + this.swayX * 0.9,
      rz + reloadRotZ + bobX * 0.5
    )
  }

  muzzleWorld(out = new THREE.Vector3()) {
    return this.muzzle.getWorldPosition(out)
  }

  ejectWorld(out = new THREE.Vector3()) {
    return this.ejectPort.getWorldPosition(out)
  }
}
