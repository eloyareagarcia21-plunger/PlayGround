import * as THREE from 'three'
import {
  createConcrete,
  createMetal,
  createContainer,
  createHazard,
  createGlowTexture,
  createSignTexture,
  createMarkingTexture,
  createWindowTexture,
} from './textures.js'

const TAU = Math.PI * 2

function cloneTex(tex, rx, ry) {
  const t = tex.clone()
  t.needsUpdate = true
  t.repeat.set(rx, ry)
  return t
}

function rng(seed = 9) {
  let s = seed >>> 0
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296)
}

function makeVolumeMat(color, opacity) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      varying vec3 vPos;
      varying vec3 vNormalV;
      varying vec3 vViewV;
      void main() {
        vUv = uv;
        vPos = position;
        vNormalV = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */`
      varying vec2 vUv;
      varying vec3 vPos;
      varying vec3 vNormalV;
      varying vec3 vViewV;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      void main() {
        float vertical = pow(clamp(vUv.y, 0.0, 1.0), 1.35);
        float soft = mix(0.22, 1.0, pow(abs(dot(normalize(vNormalV), normalize(vViewV))), 1.2));
        float bands = 0.86 + 0.14 * sin(vPos.x * 1.5 + uTime * 0.5) * sin(vPos.z * 1.7 - uTime * 0.35);
        float alpha = vertical * bands * soft * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    toneMapped: false,
  })
}

export function buildLevel(scene, engine) {
  const rand = rng(17)
  const level = {
    blockers: [],
    shootables: [],
    spawnPoints: [],
    lamps: [],
    volumes: [],
    puddles: [],
    bounds: 26.5,
    animated: [],
  }

  /* ------------------------------------------------------------- materials */
  const floorConcrete = createConcrete({ base: '#5d646b', repeat: [9, 9], wet: true, seed: 5, grime: 1.4 })
  const wallConcrete = createConcrete({ base: '#737a80', repeat: [10, 4], seed: 9 })
  const propConcrete = createConcrete({ base: '#7a8086', repeat: [2, 2], seed: 21 })
  const metal = createMetal({ base: '#565d66', repeat: [3, 3], seed: 3 })
  const darkMetal = createMetal({ base: '#2c333b', repeat: [2, 2], seed: 8, rust: 0.6 })
  const rustMetal = createMetal({ base: '#6a4a36', repeat: [2, 2], seed: 14, rust: 0.9 })
  const hazard = createHazard({})
  const containerTeal = createContainer({ color: '#2c5157', repeat: [1.6, 1], seed: 31 })
  const containerRed = createContainer({ color: '#5c2b28', repeat: [1.6, 1], seed: 33 })
  const containerBlue = createContainer({ color: '#283d52', repeat: [1.6, 1], seed: 37 })
  const containerOlive = createContainer({ color: '#3d4430', repeat: [1.6, 1], seed: 39 })

  const mats = {
    floor: new THREE.MeshStandardMaterial({
      ...floorConcrete,
      color: 0xa4acb4,
      metalness: 0.28,
      roughness: 1.0,
      envMapIntensity: 1.15,
      normalScale: new THREE.Vector2(0.9, 0.9),
    }),
    wall: new THREE.MeshStandardMaterial({
      ...wallConcrete,
      color: 0xb0b7be,
      metalness: 0.06,
      roughness: 0.94,
      envMapIntensity: 0.6,
    }),
    prop: new THREE.MeshStandardMaterial({
      ...propConcrete,
      color: 0x9aa1a8,
      metalness: 0.05,
      roughness: 0.92,
      envMapIntensity: 0.5,
    }),
    metal: new THREE.MeshStandardMaterial({
      ...metal,
      color: 0x9aa4af,
      metalness: 0.86,
      roughness: 0.55,
      envMapIntensity: 0.9,
    }),
    darkMetal: new THREE.MeshStandardMaterial({
      ...darkMetal,
      color: 0x77818c,
      metalness: 0.9,
      roughness: 0.48,
      envMapIntensity: 1.0,
    }),
    rust: new THREE.MeshStandardMaterial({
      ...rustMetal,
      color: 0x9c7c60,
      metalness: 0.55,
      roughness: 0.78,
    }),
    hazard: new THREE.MeshStandardMaterial({ ...hazard, color: 0xc8b060, metalness: 0.2, roughness: 0.8 }),
    containerTeal: new THREE.MeshStandardMaterial({ ...containerTeal, color: 0xc8d0d2, metalness: 0.55, roughness: 0.62, envMapIntensity: 0.7 }),
    containerRed: new THREE.MeshStandardMaterial({ ...containerRed, color: 0xc9b6b2, metalness: 0.5, roughness: 0.66, envMapIntensity: 0.7 }),
    containerBlue: new THREE.MeshStandardMaterial({ ...containerBlue, color: 0xb6c2d0, metalness: 0.55, roughness: 0.6, envMapIntensity: 0.7 }),
    containerOlive: new THREE.MeshStandardMaterial({ ...containerOlive, color: 0xb9bfb0, metalness: 0.5, roughness: 0.68, envMapIntensity: 0.7 }),
    wood: new THREE.MeshStandardMaterial({
      map: createMetal({ base: '#6b4a2c', repeat: [1, 1], seed: 55, rust: 0 }).map,
      color: 0x9d7248,
      metalness: 0.05,
      roughness: 0.9,
    }),
  }

  const emissiveWarm = new THREE.MeshBasicMaterial({ color: 0xffc27a, toneMapped: false })
  const emissiveCool = new THREE.MeshBasicMaterial({ color: 0x9fe4ff, toneMapped: false })
  const emissiveRed = new THREE.MeshBasicMaterial({ color: 0xff2e3c, toneMapped: false })

  /* --------------------------------------------------------------- helpers */
  const addToWorld = (mesh, { collide = true, shoot = true, cast = true, receive = true } = {}) => {
    mesh.castShadow = cast
    mesh.receiveShadow = receive
    scene.add(mesh)
    mesh.updateMatrixWorld(true)
    if (collide) {
      const b = new THREE.Box3().setFromObject(mesh)
      level.blockers.push({ minX: b.min.x, maxX: b.max.x, minZ: b.min.z, maxZ: b.max.z })
    }
    if (shoot) level.shootables.push(mesh)
    return mesh
  }

  const box = (w, h, d, mat, x, baseY, z, { ry = 0, ...opts } = {}) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    mesh.position.set(x, baseY + h / 2, z)
    mesh.rotation.y = ry
    return addToWorld(mesh, opts)
  }

  const cyl = (rt, rb, h, mat, x, baseY, z, { rx = 0, rz = 0, seg = 14, ...opts } = {}) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat)
    mesh.position.set(x, baseY + h / 2, z)
    mesh.rotation.x = rx
    mesh.rotation.z = rz
    return addToWorld(mesh, opts)
  }

  /* ------------------------------------------------------------------ floor */
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(92, 92, 1, 1), mats.floor)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = 0
  floor.receiveShadow = true
  scene.add(floor)
  level.shootables.push(floor)
  level.floor = floor

  // Puddles.
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x172430,
    metalness: 0.95,
    roughness: 0.14,
    envMapIntensity: 1.9,
    transparent: true,
    opacity: 0.6,
  })
  const puddleSpots = [
    [-7.5, 3.2, 3.4, 2.2], [6.5, -1.5, 4.0, 1.6], [-2.5, -9.5, 3.6, 2.0],
    [11.5, 8.5, 2.8, 1.4], [-15.5, -5.0, 2.4, 1.8], [3.5, 12.0, 2.2, 1.2],
    [16.0, -12.0, 3.2, 1.5],
  ]
  for (const [x, z, sx, sz] of puddleSpots) {
    const p = new THREE.Mesh(new THREE.CircleGeometry(1, 28), puddleMat)
    p.rotation.x = -Math.PI / 2
    p.position.set(x, 0.012, z)
    p.scale.set(sx, sz, 1)
    scene.add(p)
    level.puddles.push(p)
  }

  // Painted floor markings.
  const addDecal = (tex, w, d, x, z, rot = 0, opacity = 0.55) => {
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity, depthWrite: false, toneMapped: false })
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat)
    p.rotation.x = -Math.PI / 2
    p.rotation.z = rot
    p.position.set(x, 0.014, z)
    scene.add(p)
    return p
  }
  addDecal(createMarkingTexture({ kind: 'stencil', text: '07', color: '#cbb06b' }), 4.2, 4.2, 0, 7.2, 0, 0.32)
  addDecal(createMarkingTexture({ kind: 'arrow', color: '#9fb2c0' }), 4, 4, -4, -6, -Math.PI / 2, 0.3)
  addDecal(createMarkingTexture({ kind: 'zone', text: 'HOLD', color: '#c4a45e' }), 8, 8, -4, 16, 0, 0.28)
  addDecal(createMarkingTexture({ kind: 'zone', text: 'LZ-07', color: '#8ea4b5' }), 6, 6, 17, 15, 0.4, 0.26)

  /* -------------------------------------------------------------- perimeter */
  // Far operations building.
  box(56, 17, 9, mats.wall, 0, 0, -34.5)
  // Left and right warehouses.
  box(10, 14, 56, mats.wall, -34.5, 0, 0)
  box(10, 12, 56, mats.wall, 34.5, 0, 0)
  // Rear building behind spawn.
  box(56, 13, 9, mats.wall, 0, 0, 34.5)

  // Roof parapets for silhouettes.
  box(57, 1.0, 0.6, mats.prop, 0, 17, -30.1, { collide: false, shoot: false, cast: false })
  box(0.6, 1.0, 57, mats.prop, -29.6, 14, 0, { collide: false, shoot: false, cast: false })
  box(0.6, 1.0, 57, mats.prop, 29.6, 12, 0, { collide: false, shoot: false, cast: false })

  // Loading door, frame and glowing sign on the far building.
  box(11, 7.5, 0.35, mats.darkMetal, 0, 0, -29.85, { collide: false })
  box(0.4, 8.1, 0.5, mats.metal, -5.7, 0, -29.75, { collide: false })
  box(0.4, 8.1, 0.5, mats.metal, 5.7, 0, -29.75, { collide: false })
  box(11.8, 0.45, 0.5, mats.metal, 0, 7.6, -29.75, { collide: false })
  // Door warning stripe.
  box(10.4, 0.7, 0.06, mats.hazard, 0, 0.05, -29.65, { collide: false })

  const signTex = createSignTexture({ text: 'BLACKSITE', color: '#ffb45c' })
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 3.75),
    new THREE.MeshBasicMaterial({ map: signTex, transparent: true, toneMapped: false, depthWrite: false })
  )
  sign.position.set(0, 11.4, -29.82)
  scene.add(sign)
  level.sign = sign

  // Window strips on upper facades.
  const windowTex = createWindowTexture({ seed: 61, cols: 12, rows: 3 })
  const windowMat = new THREE.MeshBasicMaterial({ map: windowTex, color: 0x9fb3c8, toneMapped: false })
  const addWindows = (w, h, x, y, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), windowMat)
    m.position.set(x, y, z)
    m.rotation.y = ry
    scene.add(m)
  }
  addWindows(44, 4.0, 0, 14.2, -29.98, 0)
  addWindows(44, 3.2, 0, 14.2, 29.98, Math.PI)
  addWindows(44, 3.6, -29.48, 11.0, 0, Math.PI / 2)
  addWindows(44, 3.0, 29.48, 9.6, 0, -Math.PI / 2)

  // Roof machinery / antenna silhouettes.
  box(4, 1.2, 2.5, mats.darkMetal, -11, 17, -33, { collide: false })
  box(3.4, 1.0, 2.2, mats.darkMetal, 9, 17, -34, { collide: false })
  cyl(0.06, 0.09, 9, mats.metal, 16, 17, -34, { collide: false, cast: false })
  const antennaBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), emissiveRed)
  antennaBeacon.position.set(16, 26.1, -34)
  scene.add(antennaBeacon)
  level.animated.push({ type: 'beacon', mesh: antennaBeacon, phase: 0 })

  // Catwalk along the far wall.
  const catwalkMat = mats.metal
  box(27, 0.22, 2.4, catwalkMat, 0, 5.15, -28.2, { collide: false })
  for (let i = -13; i <= 13; i += 2.6) {
    box(0.09, 1.15, 0.09, catwalkMat, i, 5.26, -27.15, { collide: false, cast: false })
    box(0.07, 0.07, 2.3, catwalkMat, i, 6.32, -28.2, { collide: false, cast: false })
  }
  box(26, 0.07, 0.07, catwalkMat, 0, 6.32, -27.15, { collide: false, cast: false })
  // Ladder up to catwalk.
  for (let i = 0; i < 6; i++) {
    box(1.0, 0.05, 0.05, catwalkMat, 13.9, 0.6 + i * 0.85, -27.65, { collide: false, cast: false })
  }
  box(0.05, 5.4, 0.05, catwalkMat, 13.4, 0, -27.65, { collide: false, cast: false })
  box(0.05, 5.4, 0.05, catwalkMat, 14.4, 0, -27.65, { collide: false, cast: false })

  /* --------------------------------------------------------------- lamps */
  const lampPositions = [
    [-13.5, 11.5, 1],
    [12.5, 6.5, -1],
    [-7.0, -17.0, 1],
    [19.0, -6.0, -1],
  ]
  const glowTex = createGlowTexture({ size: 128, color: '255,200,135', core: 0.1 })
  const lensGeo = new THREE.BoxGeometry(0.72, 0.16, 0.42)
  const bulbGeo = new THREE.SphereGeometry(0.09, 8, 8)

  for (const [x, z, armDir] of lampPositions) {
    cyl(0.085, 0.12, 7.4, mats.darkMetal, x, 0, z, { collide: true, cast: true })
    box(1.5, 0.12, 0.14, mats.darkMetal, x + armDir * 0.7, 7.1, z, { collide: false, cast: false })
    const headX = x + armDir * 1.35
    box(0.8, 0.22, 0.5, mats.darkMetal, headX, 6.95, z, { collide: false, cast: true })
    const lens = new THREE.Mesh(lensGeo, emissiveWarm)
    lens.position.set(headX, 6.88, z)
    scene.add(lens)

    const light = new THREE.PointLight(0xffa45c, 88, 32, 2)
    light.position.set(headX, 6.75, z)
    scene.add(light)

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0xffbe86, transparent: true, opacity: 0.75,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }))
    glow.position.set(headX, 6.85, z)
    glow.scale.setScalar(2.2)
    glow.material.opacity = 0.55
    scene.add(glow)

    const volMat = makeVolumeMat(0xff9e52, 0.085)
    const vol = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 4.4, 6.8, 22, 1, true), volMat)
    vol.position.set(headX, 3.45, z)
    vol.renderOrder = 4
    scene.add(vol)
    level.volumes.push({ mesh: vol, mat: volMat, phase: rand() * TAU, base: 0.085 })

    level.lamps.push({ light, lens, glow, base: 88, phase: rand() * TAU })
  }

  // Cool floodlight above the loading door.
  const flood = new THREE.PointLight(0x76b7ff, 110, 42, 2)
  flood.position.set(0, 10.5, -28.4)
  scene.add(flood)
  const floodLens = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, 0.5), emissiveCool)
  floodLens.position.set(0, 10.2, -28.9)
  scene.add(floodLens)
  const floodVol = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 5.5, 9, 22, 1, true), makeVolumeMat(0x6fb4ff, 0.055))
  floodVol.position.set(0, 5.2, -27.9)
  scene.add(floodVol)
  level.volumes.push({ mesh: floodVol, mat: floodVol.material, phase: 1.6, base: 0.055 })

  // Strings of warm bulbs across the courtyard.
  const stringLight = new THREE.PointLight(0xffb070, 26, 24, 2)
  stringLight.position.set(0, 6.0, 4)
  scene.add(stringLight)
  level.lamps.push({ light: stringLight, lens: null, glow: null, base: 26, phase: 2.2, soft: true })

  const addCable = (a, b, sag, count, bulbScale = 1) => {
    const p0 = new THREE.Vector3(...a)
    const p1 = new THREE.Vector3(...b)
    const pts = []
    for (let i = 0; i <= 32; i++) {
      const t = i / 32
      const p = p0.clone().lerp(p1, t)
      p.y -= Math.sin(Math.PI * t) * sag
      pts.push(p)
    }
    const curve = new THREE.CatmullRomCurve3(pts)
    const cable = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 40, 0.018, 4, false),
      new THREE.MeshBasicMaterial({ color: 0x0b0e12 })
    )
    scene.add(cable)
    for (let i = 1; i < count; i++) {
      const t = i / count
      const p = curve.getPoint(t)
      const bulb = new THREE.Mesh(bulbGeo, emissiveWarm)
      bulb.scale.setScalar(bulbScale)
      bulb.position.copy(p)
      bulb.position.y -= 0.12
      scene.add(bulb)
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: 0xffb678, transparent: true, opacity: 0.5,
        depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
      }))
      glow.position.copy(bulb.position)
      glow.scale.setScalar(0.55)
      glow.material.opacity = 0.32
      scene.add(glow)
    }
  }
  addCable([-29, 7.6, 8], [29, 7.2, -3], 1.6, 18)
  addCable([-29, 7.1, -13], [29, 7.4, 15], 2.0, 18)

  /* --------------------------------------------------------------- props */
  // Shipping containers.
  const containerDefs = [
    [6, 2.6, 2.5, mats.containerTeal, -10.5, 0, -11.5, 0.1],
    [6, 2.6, 2.5, mats.containerRed, -10.5, 2.62, -11.5, 0.1],
    [6, 2.6, 2.5, mats.containerBlue, 12.5, 0, -10.0, -0.28],
    [6, 2.6, 2.5, mats.containerOlive, 16.0, 0, 4.5, Math.PI / 2 + 0.06],
    [6, 2.6, 2.5, mats.containerRed, -18.0, 0, 7.5, 0.42],
    [6, 2.6, 2.5, mats.containerBlue, -17.5, 0, 12.5, -0.06],
  ]
  for (const [w, h, d, mat, x, y, z, ry] of containerDefs) {
    box(w, h, d, mat, x, y, z, { ry })
    // corner casting highlights
    for (const cx of [-w / 2 + 0.18, w / 2 - 0.18]) {
      for (const cz of [-d / 2 + 0.18, d / 2 - 0.18]) {
        box(0.28, 0.2, 0.28, mats.darkMetal, x + Math.cos(ry) * cx + Math.sin(ry) * cz, y + h - 0.2, z - Math.sin(ry) * cx + Math.cos(ry) * cz, { collide: false, cast: false })
      }
    }
    // container door bars
    const doorX = x + Math.cos(ry) * (w / 2 + 0.01)
    const doorZ = z - Math.sin(ry) * (w / 2 + 0.01)
    for (const off of [-0.62, -0.2, 0.2, 0.62]) {
      box(0.06, h * 0.72, 0.06, mats.metal, doorX + Math.sin(ry) * off, y + 0.3, doorZ + Math.cos(ry) * off, { collide: false, cast: false, ry })
    }
    // container ID light
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.02), emissiveRed)
    led.position.set(x + Math.cos(ry) * (w / 2 + 0.03), y + h - 0.35, z - Math.sin(ry) * (w / 2 + 0.03))
    scene.add(led)
  }

  // Concrete barriers.
  const barrierDefs = [
    [-2.5, -3.0, 0.0], [4.2, -6.0, 0.18], [-12.0, 2.0, Math.PI / 2], [8.0, 10.0, -0.35],
    [20.0, -14.5, Math.PI / 2], [-20.0, -13.0, 0.25], [1.0, -20.0, Math.PI / 2],
  ]
  for (const [x, z, ry] of barrierDefs) {
    box(3.2, 0.9, 0.62, mats.prop, x, 0, z, { ry })
    box(3.3, 0.16, 0.9, mats.prop, x, 0, z, { ry })
    box(2.6, 0.12, 0.08, mats.hazard, x + Math.sin(ry) * 0.33, 0.62, z + Math.cos(ry) * 0.33, { ry, collide: false, cast: false })
  }

  // Wooden supply crates.
  const crateDefs = [
    [-6.5, 0, 4.4, 1.3, 0.2], [-5.4, 0, 5.2, 1.0, 0.6], [-6.0, 1.3, 4.6, 1.1, -0.2],
    [6.5, 0, 6.2, 1.4, 0.35], [7.6, 0, 6.9, 1.0, -0.4], [6.8, 1.4, 6.4, 1.0, 0.1],
    [19.5, 0, 8.5, 1.2, 0.7], [18.4, 0, 9.0, 1.0, 0.2],
    [-16.5, 0, -3.5, 1.4, -0.3], [-15.2, 0, -4.0, 1.0, 0.5],
    [10.0, 0, -18.5, 1.3, 0.2], [11.2, 0, -19.0, 1.1, -0.1],
  ]
  for (const [x, y, z, s, ry] of crateDefs) {
    box(s, s, s, mats.wood, x, y, z, { ry })
    box(s * 0.9, 0.06, 0.08, mats.darkMetal, x, y + s * 0.7, z, { ry, collide: false, cast: false })
  }

  // Barrels.
  const barrelMatA = new THREE.MeshStandardMaterial({ ...metal, color: 0xb08a5a, metalness: 0.5, roughness: 0.72 })
  const barrelMatB = new THREE.MeshStandardMaterial({ ...metal, color: 0x435a68, metalness: 0.7, roughness: 0.55 })
  const barrelDefs = [
    [-8.5, -17.2], [-7.8, -16.4], [-8.9, -15.7], [15.0, -4.0], [15.8, -4.6],
    [-20.5, 15.0], [-19.7, 15.6], [9.5, 14.8], [21.5, -18.0],
  ]
  barrelDefs.forEach(([x, z], i) => {
    const mat = i % 2 ? barrelMatA : barrelMatB
    cyl(0.34, 0.34, 1.05, mat, x, 0, z)
    cyl(0.36, 0.36, 0.05, mats.darkMetal, x, 0.24, z, { collide: false, cast: false })
    cyl(0.36, 0.36, 0.05, mats.darkMetal, x, 0.76, z, { collide: false, cast: false })
  })

  // Sandbag emplacements (instanced).
  const sandbagMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5c, roughness: 0.95, metalness: 0.02 })
  const bagGeo = new THREE.CapsuleGeometry(0.17, 0.5, 4, 8)
  const bagInstances = []
  const wallRuns = [
    { x: -3.0, z: -14.5, ry: 0, len: 10, rows: 4 },
    { x: 12.0, z: 13.0, ry: Math.PI / 2, len: 8, rows: 3 },
  ]
  for (const run of wallRuns) {
    for (let row = 0; row < run.rows; row++) {
      for (let i = 0; i < run.len; i++) {
        bagInstances.push({
          x: run.x + Math.cos(run.ry) * (i * 0.62 - run.len * 0.31) + (rand() - 0.5) * 0.06,
          y: 0.18 + row * 0.3,
          z: run.z - Math.sin(run.ry) * (i * 0.62 - run.len * 0.31) + (rand() - 0.5) * 0.06,
          ry: run.ry + Math.PI / 2 + (rand() - 0.5) * 0.22,
          rz: (rand() - 0.5) * 0.1,
        })
      }
    }
    // Single collision volume.
    const b = { minX: run.x - 3.2, maxX: run.x + 3.2, minZ: run.z - 0.45, maxZ: run.z + 0.45 }
    if (run.ry !== 0) {
      b.minX = run.x - 0.45; b.maxX = run.x + 0.45
      b.minZ = run.z - 3.2; b.maxZ = run.z + 3.2
    }
    level.blockers.push(b)
  }
  const bags = new THREE.InstancedMesh(bagGeo, sandbagMat, bagInstances.length)
  const dummy = new THREE.Object3D()
  bagInstances.forEach((b, i) => {
    dummy.position.set(b.x, b.y, b.z)
    dummy.rotation.set(0, b.ry, b.rz)
    dummy.updateMatrix()
    bags.setMatrixAt(i, dummy.matrix)
  })
  bags.castShadow = true
  bags.receiveShadow = true
  scene.add(bags)
  level.shootables.push(bags)

  // Generator unit with a warm status light.
  box(2.1, 1.25, 1.2, mats.darkMetal, -16.5, 0, -8.5, { ry: 0.18 })
  box(0.4, 0.5, 0.4, mats.metal, -15.6, 1.25, -8.5, { collide: false })
  const genLed = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), emissiveWarm)
  genLed.position.set(-17.2, 0.95, -7.86)
  scene.add(genLed)
  level.animated.push({ type: 'led', mesh: genLed, phase: 0.4 })

  // Cable reels by the right wall.
  for (const [x, z] of [[24.5, 18.0], [25.5, 16.5]]) {
    cyl(0.9, 0.9, 0.2, mats.wood, x, 0.0, z, { rx: Math.PI / 2, collide: false, cast: true })
    cyl(0.25, 0.25, 1.1, mats.darkMetal, x, 0.0, z, { rx: Math.PI / 2, collide: false, cast: true })
  }

  // Pipes along the left warehouse wall.
  for (const [y, r] of [[2.2, 0.11], [3.4, 0.09], [4.6, 0.13]]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 40, 10), mats.rust)
    pipe.rotation.x = Math.PI / 2
    pipe.position.set(-29.15, y, -2)
    pipe.castShadow = true
    scene.add(pipe)
    level.shootables.push(pipe)
  }
  for (let i = 0; i < 5; i++) {
    box(0.12, 0.7, 0.12, mats.darkMetal, -29.15, 1.8 + i * 1.4, -14 + i * 7, { collide: false, cast: false })
  }

  // Watchtower.
  const towerX = 20.5, towerZ = -20.5
  for (const [ox, oz] of [[-1.8, -1.8], [1.8, -1.8], [-1.8, 1.8], [1.8, 1.8]]) {
    box(0.22, 6.2, 0.22, mats.darkMetal, towerX + ox, 0, towerZ + oz, { collide: false })
  }
  box(4.4, 0.28, 4.4, mats.metal, towerX, 6.2, towerZ)
  for (let i = 0; i < 4; i++) {
    box(0.1, 1.1, 0.1, mats.metal, towerX - 2 + i * 1.33, 6.48, towerZ + 2.1, { collide: false, cast: false })
  }
  box(4.3, 0.1, 0.1, mats.metal, towerX, 7.5, towerZ + 2.1, { collide: false, cast: false })
  box(4.3, 0.1, 0.1, mats.metal, towerX, 7.5, towerZ - 2.1, { collide: false, cast: false })
  box(0.1, 0.1, 4.3, mats.metal, towerX + 2.1, 7.5, towerZ, { collide: false, cast: false })
  box(0.1, 0.1, 4.3, mats.metal, towerX - 2.1, 7.5, towerZ, { collide: false, cast: false })
  box(5.2, 0.18, 5.2, mats.darkMetal, towerX, 8.4, towerZ, { collide: false })
  // Tower spotlight.
  const towerLight = new THREE.PointLight(0xffb067, 55, 28, 2)
  towerLight.position.set(towerX - 1.6, 7.0, towerZ + 1.6)
  scene.add(towerLight)
  level.lamps.push({ light: towerLight, lens: null, glow: null, base: 55, phase: 4.1, soft: true })
  const towerGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xffbd80, transparent: true, opacity: 0.6,
    depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }))
  towerGlow.position.copy(towerLight.position)
  towerGlow.scale.setScalar(1.6)
  scene.add(towerGlow)
  const towerVol = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 3.6, 6.2, 18, 1, true), makeVolumeMat(0xffa55c, 0.06))
  towerVol.position.set(towerX - 2.4, 3.5, towerZ + 2.6)
  towerVol.rotation.z = 0.24
  scene.add(towerVol)
  level.volumes.push({ mesh: towerVol, mat: towerVol.material, phase: 2.7, base: 0.06 })

  // Fence posts and low wall along the right side.
  for (let i = 0; i < 8; i++) {
    box(0.12, 2.3, 0.12, mats.darkMetal, 26.4, 0, -18 + i * 4.0, { collide: false, cast: false })
  }
  for (const y of [0.7, 1.5]) {
    box(0.05, 0.05, 28, mats.metal, 26.4, y, -4, { collide: false, cast: false })
  }

  /* ----------------------------------------------------------- spawn points */
  level.spawnPoints = [
    new THREE.Vector3(-22.5, 0, -17.5),
    new THREE.Vector3(22.8, 0, -19.0),
    new THREE.Vector3(-24.0, 0, 3.0),
    new THREE.Vector3(24.2, 0, 9.5),
    new THREE.Vector3(-9.5, 0, -25.0),
    new THREE.Vector3(9.0, 0, -25.5),
    new THREE.Vector3(0.0, 0, -27.0),
    new THREE.Vector3(-6.0, 0, -20.0),
    new THREE.Vector3(7.5, 0, -21.0),
    new THREE.Vector3(-14.5, 0, -15.0),
    new THREE.Vector3(13.5, 0, -16.5),
    new THREE.Vector3(-21.0, 0, 19.5),
    new THREE.Vector3(18.0, 0, 21.5),
    // Mid-field pressure points so contact happens quickly after the bell.
    new THREE.Vector3(-17.5, 0, -2.0),
    new THREE.Vector3(17.8, 0, -4.5),
    new THREE.Vector3(-11.0, 0, -9.5),
    new THREE.Vector3(10.5, 0, -11.0),
    new THREE.Vector3(-6.5, 0, 1.5),
    new THREE.Vector3(6.8, 0, -1.0),
    // Forward contact lanes: ensures the first firefight is on-screen fast.
    new THREE.Vector3(-8.0, 0, 1.5),
    new THREE.Vector3(8.5, 0, 1.0),
    new THREE.Vector3(-12.5, 0, -3.0),
    new THREE.Vector3(12.0, 0, -3.5),
    new THREE.Vector3(-3.5, 0, -5.0),
    new THREE.Vector3(4.0, 0, -6.5),
  ]

  level.playerStart = new THREE.Vector3(0, 0, 14.5)
  level.playerStartYaw = 0

  return level
}
