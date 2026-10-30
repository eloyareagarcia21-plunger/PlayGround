import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { createMetal, createGlowTexture, createMuzzleTexture } from './textures.js'

/* =========================================================================
   First-person weapon rig.

   The gun is modelled at real-world scale (metres) and then shrunk through a
   single root scale so every component keeps believable proportions. Parts
   are layered instead of being one slab: anodised upper, polymer lower,
   free-float handguard, suppressor, adjustable stock, optic and gloved hands.
   Rendered in a dedicated scene so it never clips through world geometry.
   ========================================================================= */

export function buildWeapon(weaponScene) {
  const tanTex = createMetal({ base: '#3a352b', repeat: [2, 2], seed: 74, rust: 0.02 })
  const grainTex = createMetal({ size: 256, base: '#7a7f84', repeat: [6, 6], seed: 41, rust: 0.01 })

  const upperMetal = new THREE.MeshStandardMaterial({
    color: 0x22282e, metalness: 0.84, roughness: 0.52, envMapIntensity: 1.12,
    normalMap: grainTex.normalMap, normalScale: new THREE.Vector2(0.22, 0.22),
    roughnessMap: grainTex.roughnessMap,
  })
  const gunMetal = new THREE.MeshStandardMaterial({
    color: 0x394149, metalness: 0.8, roughness: 0.56, envMapIntensity: 1.0,
    normalMap: grainTex.normalMap, normalScale: new THREE.Vector2(0.2, 0.2),
    roughnessMap: grainTex.roughnessMap,
  })
  const blackMetal = new THREE.MeshStandardMaterial({
    color: 0x0e1114, metalness: 0.7, roughness: 0.64, envMapIntensity: 0.8,
    normalMap: grainTex.normalMap, normalScale: new THREE.Vector2(0.3, 0.3),
    roughnessMap: grainTex.roughnessMap,
  })
  const edgeMetal = new THREE.MeshStandardMaterial({
    color: 0x68727b, metalness: 0.9, roughness: 0.26, envMapIntensity: 1.45,
  })
  const polymer = new THREE.MeshStandardMaterial({
    color: 0x1a1e21, metalness: 0.12, roughness: 0.78, envMapIntensity: 0.55,
  })
  const tanPoly = new THREE.MeshStandardMaterial({
    ...tanTex, color: 0x6d5d42, metalness: 0.08, roughness: 0.74, envMapIntensity: 0.62,
  })
  const rubber = new THREE.MeshStandardMaterial({
    color: 0x0e1012, metalness: 0.02, roughness: 0.94, envMapIntensity: 0.2,
  })
  const glove = new THREE.MeshStandardMaterial({
    color: 0x394034, metalness: 0.05, roughness: 0.88, envMapIntensity: 0.4,
    normalMap: grainTex.normalMap, normalScale: new THREE.Vector2(0.35, 0.35),
  })
  const glovePlate = new THREE.MeshStandardMaterial({
    color: 0x4b5342, metalness: 0.14, roughness: 0.78, envMapIntensity: 0.5,
    normalMap: grainTex.normalMap, normalScale: new THREE.Vector2(0.25, 0.25),
  })
  const sleeve = new THREE.MeshStandardMaterial({ color: 0x0a0d0a, metalness: 0.01, roughness: 1.0, envMapIntensity: 0.06 })
  const brass = new THREE.MeshStandardMaterial({ color: 0xcfa04b, metalness: 0.95, roughness: 0.3 })
  const sightMetal = new THREE.MeshStandardMaterial({
    color: 0x14171a, metalness: 0.2, roughness: 0.86, envMapIntensity: 0.35,
  })
  const lensMat = new THREE.MeshBasicMaterial({
    color: 0x4fb4cc, transparent: true, opacity: 0.13, side: THREE.DoubleSide,
    depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  })
  const reticleMat = new THREE.MeshBasicMaterial({
    color: 0xff3f48, transparent: true, opacity: 0.95, side: THREE.DoubleSide,
    depthWrite: false, toneMapped: false,
  })

  const root = new THREE.Group()
  root.position.set(0.168, -0.162, -0.535)
  root.rotation.set(0.014, 0.060, -0.014)
  weaponScene.add(root)

  const gun = new THREE.Group()
  gun.scale.setScalar(0.60)
  root.add(gun)

  /* ------------------------------------------------------------- primitives */
  const place = (mesh, x, y, z, parent) => {
    mesh.position.set(x, y, z)
    mesh.castShadow = false
    mesh.receiveShadow = false
    parent.add(mesh)
    return mesh
  }
  const box = (w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = gun) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.rotation.set(rx, ry, rz)
    return place(m, x, y, z, parent)
  }
  const rbox = (w, h, d, r, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = gun) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, r), mat)
    m.rotation.set(rx, ry, rz)
    return place(m, x, y, z, parent)
  }
  const cyl = (r1, r2, h, mat, x, y, z, rx = Math.PI / 2, parent = gun, seg = 20) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat)
    m.rotation.x = rx
    return place(m, x, y, z, parent)
  }
  const ring = (inner, outer, depth, mat, x, y, z, parent = gun) => {
    const m = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 24), mat)
    return place(m, x, y, z, parent)
  }
  const screw = (r, x, y, z, parent = gun, axis = 'x') => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.0025, 8), edgeMetal)
    if (axis === 'x') m.rotation.z = Math.PI / 2
    if (axis === 'z') m.rotation.x = Math.PI / 2
    return place(m, x, y, z, parent)
  }
  const limb = (a, b, r1, r2, mat, parent = gun) => {
    const dir = new THREE.Vector3().subVectors(b, a)
    const len = dir.length()
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, len, 10), mat)
    m.position.copy(a).addScaledVector(dir, 0.5)
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    parent.add(m)
    return m
  }
  const roundedRect = (w, h, r) => {
    const s = new THREE.Shape()
    const x = -w / 2
    const y = -h / 2
    s.moveTo(x + r, y)
    s.lineTo(x + w - r, y)
    s.quadraticCurveTo(x + w, y, x + w, y + r)
    s.lineTo(x + w, y + h - r)
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    s.lineTo(x + r, y + h)
    s.quadraticCurveTo(x, y + h, x, y + h - r)
    s.lineTo(x, y + r)
    s.quadraticCurveTo(x, y, x + r, y)
    return s
  }

  /* --------------------------------------------------------------- receiver */
  // Upper and lower are separate anodised shells with a hairline seam.
  rbox(0.047, 0.054, 0.305, 0.0045, upperMetal, 0, 0.018, 0.004)
  rbox(0.0435, 0.038, 0.245, 0.004, blackMetal, 0, -0.023, -0.018)
  box(0.0475, 0.0022, 0.30, edgeMetal, 0, -0.009, 0.004)

  // Magwell / flare.
  rbox(0.0445, 0.033, 0.082, 0.004, blackMetal, 0, -0.049, -0.062, 0.19)
  box(0.048, 0.012, 0.072, blackMetal, 0, -0.066, -0.058, 0.19)

  // Ejection port, dust cover, brass deflector, forward assist.
  box(0.0016, 0.021, 0.058, new THREE.MeshStandardMaterial({ color: 0x050607, metalness: 0.2, roughness: 0.9 }), 0.0241, 0.021, 0.012)
  rbox(0.0045, 0.026, 0.068, 0.0015, gunMetal, 0.0263, 0.0205, 0.013)
  box(0.004, 0.006, 0.062, edgeMetal, 0.0286, 0.034, 0.012)
  rbox(0.012, 0.018, 0.022, 0.004, gunMetal, 0.028, 0.039, 0.062, 0, 0, -0.5)
  const fa = cyl(0.0085, 0.0085, 0.018, gunMetal, 0.030, 0.032, 0.108, 0, gun, 12)
  fa.rotation.set(0, 0, Math.PI / 2)

  // Charging handle + latch.
  box(0.034, 0.009, 0.026, blackMetal, 0, 0.042, 0.155)
  box(0.048, 0.007, 0.013, blackMetal, 0, 0.043, 0.171)
  box(0.010, 0.011, 0.012, gunMetal, 0.028, 0.043, 0.171)

  // Controls.
  const selector = cyl(0.0105, 0.0105, 0.006, edgeMetal, 0.0255, -0.012, 0.062, 0, gun, 14)
  selector.rotation.set(0, 0, Math.PI / 2)
  box(0.016, 0.006, 0.022, blackMetal, 0.026, -0.012, 0.073, 0, 0, 0.2)
  cyl(0.008, 0.008, 0.007, edgeMetal, 0.026, -0.036, 0.048, 0, gun, 12).rotation.set(0, 0, Math.PI / 2)
  box(0.012, 0.023, 0.028, blackMetal, 0.0265, 0.0, 0.086)
  screw(0.004, 0.0245, -0.034, -0.11)
  screw(0.004, 0.0245, 0.026, 0.102)

  // Camera-facing (left) receiver detail: controls, pins and roll marks.
  screw(0.004, -0.0245, -0.034, -0.11)
  screw(0.004, -0.0245, 0.026, 0.102)
  box(0.0018, 0.012, 0.058, edgeMetal, -0.0242, 0.012, -0.02)
  box(0.0032, 0.017, 0.024, blackMetal, -0.0255, -0.004, 0.034)
  cyl(0.009, 0.009, 0.004, edgeMetal, -0.0252, -0.015, 0.066, 0, gun, 14).rotation.set(0, 0, Math.PI / 2)
  box(0.0035, 0.005, 0.017, blackMetal, -0.0268, -0.015, 0.074, 0, 0, 0.3)
  cyl(0.0065, 0.0065, 0.005, gunMetal, -0.0262, -0.038, 0.050, 0, gun, 12).rotation.set(0, 0, Math.PI / 2)
  cyl(0.0072, 0.0072, 0.004, edgeMetal, -0.0255, 0.006, -0.105, 0, gun, 12).rotation.set(0, 0, Math.PI / 2)
  const markCanvas = document.createElement('canvas')
  markCanvas.width = 512
  markCanvas.height = 128
  const ctx = markCanvas.getContext('2d')
  ctx.clearRect(0, 0, 512, 128)
  ctx.fillStyle = 'rgba(205, 214, 218, 0.72)'
  ctx.font = '700 54px "Barlow Condensed", "Arial Narrow", sans-serif'
  ctx.fillText('M4A1', 12, 58)
  ctx.font = '500 26px "Share Tech Mono", monospace'
  ctx.fillStyle = 'rgba(185, 196, 202, 0.52)'
  ctx.fillText('5.56 NATO  //  AUTO', 14, 98)
  const markTex = new THREE.CanvasTexture(markCanvas)
  markTex.colorSpace = THREE.SRGBColorSpace
  markTex.anisotropy = 4
  const mark = new THREE.Mesh(
    new THREE.PlaneGeometry(0.080, 0.020),
    new THREE.MeshBasicMaterial({ map: markTex, transparent: true, opacity: 0.7, depthWrite: false, toneMapped: false, side: THREE.DoubleSide })
  )
  mark.position.set(-0.0244, 0.009, -0.040)
  mark.rotation.y = -Math.PI / 2
  gun.add(mark)

  // Trigger guard + trigger.
  box(0.007, 0.038, 0.005, blackMetal, 0, -0.065, 0.022)
  box(0.007, 0.038, 0.005, blackMetal, 0, -0.065, 0.098)
  box(0.007, 0.005, 0.078, blackMetal, 0, -0.083, 0.060)
  box(0.012, 0.026, 0.007, edgeMetal, 0, -0.055, 0.065, 0.2)

  // Picatinny rail: base plus individually cut teeth.
  box(0.048, 0.008, 0.315, blackMetal, 0, 0.048, 0.002)
  for (let i = 0; i < 17; i++) {
    box(0.049, 0.0045, 0.0095, blackMetal, 0, 0.0535, -0.142 + i * 0.0175)
  }

  /* ------------------------------------------------------------- handguard */
  const hg = new THREE.Group()
  hg.position.set(0, 0.012, -0.305)
  gun.add(hg)
  rbox(0.054, 0.058, 0.285, 0.006, tanPoly, 0, 0, 0, 0, 0, 0, hg)
  box(0.050, 0.007, 0.287, blackMetal, 0, 0.032, 0, 0, 0, 0, hg)
  for (let i = 0; i < 9; i++) {
    box(0.051, 0.005, 0.0145, blackMetal, 0, 0.0375, -0.128 + i * 0.032, 0, 0, 0, hg)
  }
  // M-LOK slots on both flanks, plus recessed bottom slots.
  for (let i = 0; i < 5; i++) {
    for (const sx of [-0.0275, 0.0275]) {
      box(0.0018, 0.013, 0.022, new THREE.MeshStandardMaterial({ color: 0x080a0b, roughness: 0.95 }), sx, 0.0, -0.095 + i * 0.046, 0, 0, 0, hg)
    }
    box(0.022, 0.0018, 0.021, new THREE.MeshStandardMaterial({ color: 0x080a0b, roughness: 0.95 }), 0, -0.0305, -0.095 + i * 0.046, 0, 0, 0, hg)
  }
  // QD socket and front cap.
  cyl(0.0085, 0.0085, 0.006, gunMetal, 0.030, 0.002, -0.10, 0, hg, 12).rotation.set(0, 0, Math.PI / 2)
  cyl(0.0295, 0.0295, 0.009, gunMetal, 0, 0, -0.147, 0, hg, 24)
  cyl(0.0285, 0.0285, 0.005, blackMetal, 0, 0, -0.153, 0, hg, 24)
  for (let i = 0; i < 3; i++) {
    box(0.030, 0.004, 0.016, blackMetal, 0, 0.032, -0.12 + i * 0.028, 0, 0, 0, hg)
  }
  // Folded front sight on the forward rail.
  rbox(0.026, 0.008, 0.022, 0.002, blackMetal, 0, 0.042, -0.135, 0, 0, 0, hg)
  rbox(0.012, 0.006, 0.016, 0.002, gunMetal, 0, 0.048, -0.130, 0, 0, 0, hg)

  /* ---------------------------------------------------------------- barrel */
  cyl(0.0095, 0.0095, 0.30, blackMetal, 0, 0.012, -0.585, Math.PI / 2, gun, 16)
  cyl(0.013, 0.013, 0.028, gunMetal, 0, 0.012, -0.462, Math.PI / 2, gun, 16)
  // Low-profile gas block and gas tube.
  rbox(0.018, 0.034, 0.024, 0.003, blackMetal, 0, 0.035, -0.505)
  box(0.030, 0.008, 0.024, gunMetal, 0, 0.055, -0.505)
  cyl(0.0035, 0.0035, 0.12, gunMetal, 0, 0.038, -0.565, Math.PI / 2, gun, 8)
  // Suppressor with heat rings and capped muzzle.
  cyl(0.0205, 0.0205, 0.175, sightMetal, 0, 0.012, -0.805, Math.PI / 2, gun, 24)
  for (let i = 0; i < 5; i++) {
    cyl(0.0212, 0.0212, 0.006, gunMetal, 0, 0.012, -0.735 - i * 0.032, Math.PI / 2, gun, 24)
  }
  cyl(0.0225, 0.0225, 0.010, gunMetal, 0, 0.012, -0.724, Math.PI / 2, gun, 24)
  cyl(0.0228, 0.0228, 0.014, blackMetal, 0, 0.012, -0.892, Math.PI / 2, gun, 24)
  ring(0.007, 0.0125, 0.002, blackMetal, 0, 0.012, -0.8995)
  // Tiny cable / pressure switch along the left rail.
  box(0.006, 0.007, 0.10, rubber, -0.030, 0.030, -0.30, 0, 0, 0)
  box(0.011, 0.010, 0.024, rubber, -0.031, 0.031, -0.245)

  /* ----------------------------------------------------------- laser module */
  const laser = new THREE.Group()
  laser.position.set(0.031, 0.002, -0.255)
  gun.add(laser)
  rbox(0.022, 0.026, 0.072, 0.003, blackMetal, 0, 0, 0, 0, 0, 0, laser)
  box(0.009, 0.008, 0.052, gunMetal, 0, 0.014, -0.004, 0, 0, 0, laser)
  const laserLens = new THREE.Mesh(
    new THREE.CircleGeometry(0.0062, 16),
    new THREE.MeshBasicMaterial({ color: 0xff2f38, toneMapped: false })
  )
  laserLens.position.set(0, 0.002, -0.0375)
  laserLens.rotation.y = Math.PI
  laser.add(laserLens)
  const laserGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createGlowTexture({ size: 64, color: '255,60,70', core: 0.2 }),
    color: 0xff4650, transparent: true, opacity: 0.45, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  laserGlow.position.set(0, 0.002, -0.0405)
  laserGlow.scale.setScalar(0.032)
  laser.add(laserGlow)

  /* ----------------------------------------------------------- adjustable stock */
  const stock = new THREE.Group()
  gun.add(stock)
  cyl(0.0145, 0.0145, 0.175, gunMetal, 0, 0.008, 0.235, Math.PI / 2, stock, 16)
  cyl(0.019, 0.019, 0.012, blackMetal, 0, 0.008, 0.158, Math.PI / 2, stock, 16)
  // Skeleton struts.
  rbox(0.038, 0.014, 0.105, 0.005, polymer, 0, 0.040, 0.315, 0, 0, 0, stock)
  rbox(0.034, 0.013, 0.105, 0.005, polymer, 0, -0.019, 0.315, 0.06, 0, 0, stock)
  rbox(0.012, 0.055, 0.020, 0.004, polymer, 0, 0.012, 0.292, 0.18, 0, 0, stock)
  // Cheek weld + butt pad.
  rbox(0.036, 0.018, 0.095, 0.006, polymer, 0, 0.053, 0.312, 0, 0, 0, stock)
  rbox(0.040, 0.020, 0.010, 0.006, polymer, 0, 0.054, 0.359, 0, 0, 0, stock)
  rbox(0.043, 0.092, 0.016, 0.006, polymer, 0, 0.010, 0.382, 0, 0, 0, stock)
  rbox(0.047, 0.080, 0.009, 0.003, rubber, 0, 0.010, 0.392, 0, 0, 0, stock)
  box(0.030, 0.006, 0.045, blackMetal, 0, -0.043, 0.34, 0, 0, 0, stock)
  // QD sling socket on the stock.
  cyl(0.007, 0.007, 0.005, edgeMetal, 0.023, 0.008, 0.34, 0, stock, 10).rotation.set(0, 0, Math.PI / 2)
  cyl(0.007, 0.007, 0.005, edgeMetal, -0.023, 0.008, 0.34, 0, stock, 10).rotation.set(0, 0, Math.PI / 2)
  // Sling slot and moulded ribs on the visible cheek/butt face.
  box(0.0018, 0.018, 0.052, blackMetal, -0.0212, 0.010, 0.382, 0, 0, 0, stock)
  for (let i = 0; i < 3; i++) {
    box(0.0022, 0.052, 0.0035, rubber, -0.0216, 0.010, 0.360 + i * 0.012, 0, 0, 0, stock)
  }

  /* ---------------------------------------------------------------- grip/mag */
  const grip = new THREE.Group()
  grip.position.set(0, -0.072, 0.079)
  grip.rotation.x = 0.29
  gun.add(grip)
  rbox(0.038, 0.108, 0.050, 0.008, polymer, 0, -0.032, 0, 0, 0, 0, grip)
  rbox(0.040, 0.030, 0.052, 0.007, blackMetal, 0, 0.028, 0.002, 0, 0, 0, grip)
  // Grip serrations.
  for (let i = 0; i < 5; i++) {
    box(0.042, 0.0024, 0.052, rubber, 0, -0.012 - i * 0.018, 0, 0, 0, 0, grip)
  }
  box(0.010, 0.016, 0.014, edgeMetal, 0.020, 0.025, 0.004, 0, 0, 0, grip)

  const magazine = new THREE.Group()
  magazine.position.set(0, -0.045, -0.055)
  gun.add(magazine)
  const magBody = new THREE.Mesh(new RoundedBoxGeometry(0.041, 0.155, 0.073, 2, 0.006), tanPoly)
  magBody.position.y = -0.071
  magBody.rotation.x = -0.10
  magazine.add(magBody)
  const magBase = new THREE.Mesh(new RoundedBoxGeometry(0.046, 0.018, 0.080, 2, 0.004), blackMetal)
  magBase.position.set(0, -0.154, 0.010)
  magBase.rotation.x = -0.10
  magazine.add(magBase)
  for (let i = 0; i < 2; i++) {
    box(0.0015, 0.0022, 0.060, blackMetal, -0.0212, -0.052 - i * 0.042, 0.004 + i * 0.004, -0.10, 0, 0, magazine)
  }
  box(0.0022, 0.085, 0.004, blackMetal, -0.0212, -0.082, -0.028, -0.10, 0, 0, magazine)
  box(0.006, 0.014, 0.070, edgeMetal, -0.0195, -0.142, 0.01, -0.10, 0, 0, magazine)

  /* ----------------------------------------------------------------- optic */
  // Tall riser keeps the sight at a modern head-up height and moves the
  // receiver/magazine down out of the sight picture while aiming.
  rbox(0.040, 0.023, 0.070, 0.004, blackMetal, 0, 0.069, -0.026)
  rbox(0.024, 0.012, 0.040, 0.003, upperMetal, 0, 0.075, -0.026)
  const optic = new THREE.Group()
  optic.position.set(0, 0.080, -0.026)
  gun.add(optic)
  // Mount + clamp.
  rbox(0.044, 0.013, 0.094, 0.003, sightMetal, 0, 0.006, 0, 0, 0, 0, optic)
  box(0.050, 0.006, 0.026, blackMetal, 0, 0.005, 0.018, 0, 0, 0, optic)
  box(0.020, 0.018, 0.042, gunMetal, 0.030, 0.003, 0.014, 0, 0, 0, optic)
  // Hollow hood extruded as one rounded frame, with a beveled edge.
  const hoodOuter = roundedRect(0.068, 0.066, 0.0075)
  const hoodInner = roundedRect(0.052, 0.050, 0.0045)
  hoodOuter.holes.push(hoodInner)
  const hoodGeo = new THREE.ExtrudeGeometry(hoodOuter, {
    depth: 0.076, bevelEnabled: true, bevelThickness: 0.0016, bevelSize: 0.0013,
    bevelSegments: 2, curveSegments: 10, steps: 1,
  })
  hoodGeo.center()
  const hood = new THREE.Mesh(hoodGeo, sightMetal)
  hood.position.set(0, 0.040, 0)
  optic.add(hood)
  // Lens stack.
  const lens = new THREE.Mesh(new THREE.PlaneGeometry(0.052, 0.050), lensMat)
  lens.position.set(0, 0.040, -0.002)
  optic.add(lens)
  const lensRear = new THREE.Mesh(new THREE.PlaneGeometry(0.054, 0.052), new THREE.MeshBasicMaterial({
    color: 0x7ec6d6, transparent: true, opacity: 0.045, side: THREE.DoubleSide,
    depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  lensRear.position.set(0, 0.040, 0.012)
  optic.add(lensRear)
  // Soft circular lens reflection.
  const lensGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.054, 0.052),
    new THREE.MeshBasicMaterial({
      map: createGlowTexture({ size: 128, color: '110,225,255', core: 0.02 }),
      color: 0x3c9fb5, transparent: true, opacity: 0.28, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    })
  )
  lensGlow.position.set(0, 0.040, 0.004)
  optic.add(lensGlow)
  // A raked reflection makes the glass read as glass.
  const glint = new THREE.Mesh(new THREE.PlaneGeometry(0.036, 0.0028), new THREE.MeshBasicMaterial({
    color: 0xc9f4ff, transparent: true, opacity: 0.24, side: THREE.DoubleSide,
    depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  glint.position.set(-0.005, 0.046, 0.001)
  glint.rotation.z = 0.44
  optic.add(glint)
  // Reticle: fine ring, centre dot and two ranging ticks.
  const retRing = new THREE.Mesh(new THREE.RingGeometry(0.0040, 0.0052, 36), reticleMat)
  retRing.position.set(0, 0.040, 0.003)
  optic.add(retRing)
  const retDot = new THREE.Mesh(new THREE.CircleGeometry(0.0016, 14), reticleMat)
  retDot.position.set(0, 0.040, 0.0035)
  optic.add(retDot)
  box(0.0007, 0.0075, 0.001, reticleMat, 0, 0.040, 0.0035, 0, 0, 0, optic)
  box(0.0075, 0.0007, 0.001, reticleMat, 0, 0.040, 0.0035, 0, 0, 0, optic)
  const retGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createGlowTexture({ size: 64, color: '255,60,70', core: 0.16 }),
    color: 0xff4650, transparent: true, opacity: 0.4, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  retGlow.position.set(0, 0.040, 0.004)
  retGlow.scale.setScalar(0.016)
  optic.add(retGlow)
  // Brightness buttons + adjustment caps.
  cyl(0.0055, 0.0055, 0.006, blackMetal, -0.035, 0.012, 0.026, 0, optic, 12).rotation.set(0, 0, Math.PI / 2)
  cyl(0.007, 0.007, 0.005, gunMetal, 0.035, 0.055, 0.022, 0, optic, 12).rotation.set(0, 0, Math.PI / 2)
  screw(0.0035, 0.032, 0.018, -0.026, optic)
  // Small rear iron sight block, folded flat.
  rbox(0.030, 0.010, 0.016, 0.002, blackMetal, 0, 0.060, 0.112, 0, 0, 0)

  /* ----------------------------------------------------------------- hands */
  // Right hand: palm behind the grip, four fingers wrapping the front.
  const handR = new THREE.Group()
  handR.position.set(0.034, -0.082, 0.079)
  handR.rotation.set(0.1, -0.16, -0.06)
  gun.add(handR)
  rbox(0.050, 0.086, 0.066, 0.017, glove, 0.004, 0.0, 0.008, 0, 0, 0, handR)
  rbox(0.044, 0.044, 0.018, 0.011, glovePlate, 0.002, 0.012, -0.032, 0, 0, 0, handR)
  rbox(0.036, 0.014, 0.030, 0.005, glovePlate, -0.002, -0.035, -0.018, 0, 0, 0, handR)
  for (let i = 0; i < 4; i++) {
    const y = 0.016 - i * 0.0205
    const seg1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.033, 4, 8), glove)
    seg1.position.set(-0.015, y, -0.038)
    seg1.rotation.set(0.05, 0, Math.PI / 2 - 0.28)
    handR.add(seg1)
    const seg2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.0093, 0.026, 4, 8), glove)
    seg2.position.set(-0.032, y - 0.004, -0.055)
    seg2.rotation.set(0.55, 0.15, 0.75)
    handR.add(seg2)
  }
  const thumbR = new THREE.Mesh(new THREE.CapsuleGeometry(0.0118, 0.052, 4, 8), glove)
  thumbR.position.set(-0.020, 0.034, -0.008)
  thumbR.rotation.set(1.18, 0.2, -0.32)
  handR.add(thumbR)
  rbox(0.054, 0.024, 0.044, 0.008, glovePlate, 0.006, 0.047, 0.024, 0.1, 0, 0, handR)
  // Back-of-hand armour, knuckle plates and retention strap.
  rbox(0.042, 0.050, 0.014, 0.010, glovePlate, 0.004, 0.006, 0.038, 0, 0, 0, handR)
  for (let i = 0; i < 4; i++) {
    rbox(0.013, 0.011, 0.009, 0.003, glovePlate, -0.010 + i * 0.008, 0.026 - i * 0.016, 0.043, 0, 0, 0, handR)
  }
  box(0.046, 0.008, 0.010, rubber, 0.002, -0.024, 0.040, 0, 0, 0, handR)
  box(0.010, 0.010, 0.008, edgeMetal, 0.024, -0.024, 0.040, 0, 0, 0, handR)
  // Forearm sweeps out to camera-right, keeping the near plane clear.
  limb(new THREE.Vector3(0.038, -0.086, 0.094), new THREE.Vector3(0.052, -0.106, 0.120), 0.029, 0.033, glove, gun)
  limb(new THREE.Vector3(0.048, -0.100, 0.114), new THREE.Vector3(0.056, -0.112, 0.132), 0.035, 0.038, glovePlate, gun)
  limb(new THREE.Vector3(0.056, -0.112, 0.132), new THREE.Vector3(0.118, -0.190, 0.228), 0.031, 0.036, sleeve, gun)
  // Fabric wrap bands at the cuff.
  limb(new THREE.Vector3(0.060, -0.119, 0.142), new THREE.Vector3(0.068, -0.129, 0.156), 0.037, 0.038, sleeve, gun)
  limb(new THREE.Vector3(0.070, -0.133, 0.160), new THREE.Vector3(0.077, -0.142, 0.174), 0.038, 0.039, glovePlate, gun)

  // Left support hand under the handguard, fingers curling over the right side.
  const handL = new THREE.Group()
  handL.position.set(-0.002, -0.036, -0.305)
  handL.rotation.set(0.06, 0.14, 0.08)
  gun.add(handL)
  rbox(0.060, 0.034, 0.086, 0.013, glove, 0, 0.003, 0, 0, 0, 0, handL)
  rbox(0.049, 0.020, 0.067, 0.008, glovePlate, -0.008, -0.015, -0.002, 0, 0, 0, handL)
  for (let i = 0; i < 4; i++) {
    const z = 0.030 - i * 0.025
    const f1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.0098, 0.031, 4, 8), glove)
    f1.position.set(0.027, 0.015, z)
    f1.rotation.set(0.15, 0, -0.75)
    handL.add(f1)
    const f2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.0088, 0.020, 4, 8), glove)
    f2.position.set(0.037, 0.033, z)
    f2.rotation.set(0.05, 0, -0.25)
    handL.add(f2)
  }
  const thumbL = new THREE.Mesh(new THREE.CapsuleGeometry(0.0118, 0.050, 4, 8), glove)
  thumbL.position.set(-0.033, 0.019, 0.012)
  thumbL.rotation.set(-0.32, 0, 1.2)
  handL.add(thumbL)
  rbox(0.048, 0.019, 0.056, 0.008, glovePlate, 0.002, 0.022, -0.010, 0, 0, 0, handL)
  limb(new THREE.Vector3(-0.002, -0.040, -0.292), new THREE.Vector3(-0.026, -0.058, -0.272), 0.028, 0.032, glove, gun)
  limb(new THREE.Vector3(-0.020, -0.053, -0.278), new THREE.Vector3(-0.036, -0.070, -0.262), 0.035, 0.038, glovePlate, gun)
  limb(new THREE.Vector3(-0.036, -0.070, -0.262), new THREE.Vector3(-0.102, -0.168, -0.098), 0.031, 0.037, sleeve, gun)
  limb(new THREE.Vector3(-0.044, -0.080, -0.248), new THREE.Vector3(-0.054, -0.091, -0.234), 0.037, 0.038, sleeve, gun)
  limb(new THREE.Vector3(-0.056, -0.096, -0.228), new THREE.Vector3(-0.066, -0.107, -0.214), 0.038, 0.039, glovePlate, gun)
  // Wrist-mounted tactical display on the support arm.
  const watch = new THREE.Group()
  watch.position.set(-0.052, -0.078, -0.238)
  watch.rotation.set(0.1, 0.15, 0.3)
  gun.add(watch)
  rbox(0.020, 0.014, 0.026, 0.004, blackMetal, 0, 0, 0, 0, 0, 0, watch)
  const watchFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.014, 0.008),
    new THREE.MeshBasicMaterial({ color: 0x79ffb2, transparent: true, opacity: 0.65, toneMapped: false, side: THREE.DoubleSide })
  )
  watchFace.position.set(-0.0105, 0, 0)
  watchFace.rotation.y = -Math.PI / 2
  watch.add(watchFace)
  const watchGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createGlowTexture({ size: 64, color: '120,255,180', core: 0.2 }),
    color: 0x79ffb2, transparent: true, opacity: 0.35, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  watchGlow.position.set(-0.012, 0, 0)
  watchGlow.scale.setScalar(0.022)
  watch.add(watchGlow)

  /* ------------------------------------------------------------- muzzle fx */
  const muzzle = new THREE.Group()
  muzzle.position.set(0, 0.012, -0.905)
  gun.add(muzzle)

  const flashMat = new THREE.SpriteMaterial({
    map: createMuzzleTexture({ size: 128 }),
    color: 0xffd2a0,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  })
  const flash = new THREE.Sprite(flashMat)
  flash.scale.setScalar(0.18)
  muzzle.add(flash)

  const coneMat = new THREE.MeshBasicMaterial({
    color: 0xffb066, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
    depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
  })
  const flashCone = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.15, 9, 1, true), coneMat)
  flashCone.rotation.x = -Math.PI / 2
  flashCone.position.z = -0.075
  muzzle.add(flashCone)

  const flashLight = new THREE.PointLight(0xffb066, 0, 2.5, 2)
  flashLight.position.set(0, 0.03, -0.06)
  flashLight.castShadow = false
  muzzle.add(flashLight)

  const smokeMat = new THREE.SpriteMaterial({
    map: createGlowTexture({ size: 64, color: '190,170,145', core: 0.3 }),
    transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
  })
  const smoke = new THREE.Sprite(smokeMat)
  smoke.scale.setScalar(0.15)
  smoke.position.z = -0.02
  muzzle.add(smoke)

  // Shell casings.
  const shells = []
  for (let i = 0; i < 4; i++) {
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0065, 0.028, 6), brass)
    shell.visible = false
    shell.rotation.z = Math.PI / 2
    weaponScene.add(shell)
    shells.push({ mesh: shell, life: 0, vel: new THREE.Vector3(), spin: new THREE.Vector3() })
  }

  const state = {
    ads: 0,
    recoil: 0,
    recoilYaw: 0,
    flashT: 0,
    smokeT: 0,
    shellIndex: 0,
    reloadT: 0,
    sprint: 0,
    sway: new THREE.Vector2(),
    basePos: new THREE.Vector3(0.168, -0.162, -0.535),
    // Optic axis sits at local y = 0.120; at 0.60 scale that is 0.0720.
    // Stop the stock just behind the near plane so it never fills the ADS view.
    adsPos: new THREE.Vector3(0, -0.0720, -0.250),
  }

  function triggerFlash() {
    state.flashT = 0.052
    state.smokeT = 0.45
    flash.material.rotation = Math.random() * Math.PI * 2
    flash.scale.setScalar(0.12 + Math.random() * 0.055)
    flashCone.scale.setScalar(0.8 + Math.random() * 0.4)
    flashLight.intensity = 7
    const s = shells[state.shellIndex % shells.length]
    state.shellIndex++
    s.mesh.position.set(0.055, 0.024, -0.03)
    s.mesh.visible = true
    s.life = 0.8
    s.vel.set(1.7 + Math.random() * 0.5, 1.1 + Math.random(), 0.5 + Math.random() * 0.4)
    s.spin.set(8 + Math.random() * 8, 4, 6)
    s.mesh.rotation.set(0, 0, Math.PI / 2)
  }

  function getMuzzleCameraPosition(target = new THREE.Vector3()) {
    const p = new THREE.Vector3(0, 0.012, -0.905).applyMatrix4(gun.matrixWorld)
    return target.copy(p)
  }

  function update(dt, params) {
    const { adsTarget = 0, moving = 0, sprinting = false, reloadProgress = 0, lookDX = 0, lookDY = 0, bobT = 0, time = 0 } = params
    state.ads += (adsTarget - state.ads) * Math.min(1, dt * 11)
    state.sprint += ((sprinting && state.ads < 0.2 ? 1 : 0) - state.sprint) * Math.min(1, dt * 7)

    // Idle breathing + walk bob.
    const idle = Math.sin(time * 1.7) * 0.0032
    const bobX = Math.sin(bobT) * 0.0075 * moving
    const bobY = Math.abs(Math.cos(bobT)) * 0.0065 * moving
    const swayX = THREE.MathUtils.clamp(-lookDX * 0.055, -0.032, 0.032)
    const swayY = THREE.MathUtils.clamp(lookDY * 0.055, -0.028, 0.028)
    state.sway.x += (swayX - state.sway.x) * Math.min(1, dt * 9)
    state.sway.y += (swayY - state.sway.y) * Math.min(1, dt * 9)

    // Recoil spring.
    state.recoil *= Math.pow(0.0009, dt)
    state.recoilYaw *= Math.pow(0.002, dt)

    const reloadEase = reloadProgress > 0 ? Math.sin(reloadProgress * Math.PI) : 0

    const px = THREE.MathUtils.lerp(state.basePos.x, state.adsPos.x, state.ads)
    const py = THREE.MathUtils.lerp(state.basePos.y, state.adsPos.y, state.ads)
    const pz = THREE.MathUtils.lerp(state.basePos.z, state.adsPos.z, state.ads)

    const swayScale = 1 - state.ads * 0.82
    root.position.x = px + (state.sway.x + bobX) * swayScale + state.sprint * 0.045
    root.position.y = py + (idle + state.sway.y + bobY) * swayScale - reloadEase * 0.13 - state.sprint * 0.055
    root.position.z = pz + state.recoil * 0.09 + reloadEase * 0.04

    root.rotation.x = state.recoil * 0.5 + reloadEase * 0.32 + state.sprint * 0.16
    const hipYaw = 0.060 + state.sway.x * 1.4 - state.sprint * 0.4 + state.recoilYaw * 0.5
    const hipRoll = -0.014 + state.sway.y * 1.25 - state.sprint * 0.2 + reloadEase * 0.46
    root.rotation.y = hipYaw * (1 - state.ads)
    root.rotation.z = hipRoll * (1 - state.ads)

    // Shouldered stock slides behind the near plane while aiming; otherwise it
    // fills the bottom of the screen at point-blank range.
    stock.position.z = state.ads * 0.5

    // Magazine drops out during the reload.
    if (reloadProgress > 0.08 && reloadProgress < 0.85) {
      const t = (reloadProgress - 0.08) / 0.77
      magazine.position.y = -0.045 - Math.sin(t * Math.PI) * 0.17
      magazine.rotation.z = Math.sin(t * Math.PI) * 0.36
    } else {
      magazine.position.y += (-0.045 - magazine.position.y) * Math.min(1, dt * 18)
      magazine.rotation.z += (0 - magazine.rotation.z) * Math.min(1, dt * 18)
    }

    if (state.flashT > 0) {
      state.flashT -= dt
      const t = Math.max(0, state.flashT / 0.052)
      flash.material.opacity = t
      coneMat.opacity = t * 0.8
      flashLight.intensity = 7 * t
    } else {
      flash.material.opacity = 0
      coneMat.opacity = 0
      flashLight.intensity = 0
    }

    if (state.smokeT > 0) {
      state.smokeT -= dt
      const t = Math.max(0, state.smokeT / 0.45)
      smoke.material.opacity = t * 0.16
      smoke.scale.setScalar(0.15 + (1 - t) * 0.22)
      smoke.position.z = -0.02 - (1 - t) * 0.22
    } else {
      smoke.material.opacity = 0
    }

    for (const s of shells) {
      if (s.life <= 0) { s.mesh.visible = false; continue }
      s.life -= dt
      s.vel.y -= 9.8 * dt
      s.mesh.position.addScaledVector(s.vel, dt)
      s.mesh.rotation.x += s.spin.x * dt
      s.mesh.rotation.z += s.spin.z * dt
      if (s.life <= 0) s.mesh.visible = false
    }

    root.updateMatrixWorld(true)
  }

  return {
    root,
    gun,
    state,
    update,
    triggerFlash,
    getMuzzleCameraPosition,
    materials: { upperMetal, gunMetal, blackMetal, polymer, tanPoly, glove },
  }
}
