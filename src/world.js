import * as THREE from 'three'
import { fbm, rand, randRange } from './textures.js'

const PALETTE = {
  fog: 0x0c141a,
  moon: 0x9dc4ea,
  warm: 0xffb36b,
  red: 0xff4b32,
}

const _box = new THREE.Box3()
const _mat4 = new THREE.Matrix4()
const _v = new THREE.Vector3()

function addBoxCollider(colliders, mesh, pad = 0) {
  mesh.updateWorldMatrix(true, false)
  const box = new THREE.Box3().setFromObject(mesh)
  box.min.x -= pad; box.min.y -= pad; box.min.z -= pad
  box.max.x += pad; box.max.y += pad; box.max.z += pad
  colliders.push(box)
  return box
}

/* Light shaft: an additive cone that fakes atmospheric scattering. */
function lightShaft(color, height, radiusTop, radiusBottom) {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 24, 1, true)
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: new THREE.Color(color) }, uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; varying vec3 vPos; void main(){ vUv=uv; vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying vec3 vPos;
      void main(){
        float edge = smoothstep(0.0,0.25,vUv.x)*smoothstep(1.0,0.75,vUv.x);
        float fade = pow(1.0-vUv.y, 1.4);
        float flicker = 0.85 + 0.15*sin(uTime*9.0 + vPos.y*2.0);
        gl_FragColor = vec4(uColor, edge*fade*0.022*flicker);
      }`,
  })
  return new THREE.Mesh(geo, mat)
}

export function buildWorld(scene, renderer, T, quality) {
  const colliders = []
  const solids = []
  const emissiveMats = []
  const flickerLights = []
  const shafts = []
  const smokes = []
  const animated = []
  const spawnPoints = []

  scene.background = T.sky
  scene.backgroundIntensity = 0.72
  scene.fog = new THREE.FogExp2(PALETTE.fog, 0.021)

  /* Environment reflections from the dusk sky. */
  const pmrem = new THREE.PMREMGenerator(renderer)
  const env = pmrem.fromEquirectangular(T.sky).texture
  scene.environment = env
  scene.environmentIntensity = 0.72
  pmrem.dispose()

  /* ------------------------------ lighting ----------------------------- */
  const hemi = new THREE.HemisphereLight(0x94b4cd, 0x1b1712, 0.85)
  scene.add(hemi)

  const moon = new THREE.DirectionalLight(PALETTE.moon, 2.7)
  moon.position.set(-22, 30, 16)
  moon.castShadow = quality.shadows
  moon.shadow.mapSize.set(quality.shadowSize, quality.shadowSize)
  moon.shadow.camera.left = -26; moon.shadow.camera.right = 26
  moon.shadow.camera.top = 26; moon.shadow.camera.bottom = -26
  moon.shadow.camera.near = 1; moon.shadow.camera.far = 80
  moon.shadow.bias = -0.0006
  moon.shadow.normalBias = 0.035
  scene.add(moon)
  scene.add(moon.target)

  const ambient = new THREE.AmbientLight(0x3b4d5c, 1.0)
  scene.add(ambient)

  const frontFill = new THREE.DirectionalLight(0x8ba6bd, 0.85)
  frontFill.position.set(4, 7, 24)
  frontFill.target.position.set(0, 1, -2)
  scene.add(frontFill)
  scene.add(frontFill.target)

  const rimLight = new THREE.DirectionalLight(0x6089ad, 1.35)
  rimLight.position.set(-18, 11, -16)
  rimLight.target.position.set(0, 1.5, 4)
  scene.add(rimLight)
  scene.add(rimLight.target)

  /* ------------------------------- ground ------------------------------ */
  const groundMat = new THREE.MeshStandardMaterial({
    map: T.asphalt.map,
    roughnessMap: T.asphalt.roughnessMap,
    bumpMap: T.asphalt.bumpMap,
    bumpScale: 0.055,
    roughness: 1.0,
    metalness: 0.52,
    envMapIntensity: 1.1,
    color: 0x8d949b,
  })
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)
  solids.push(ground)

  // Wet sheen pools under the lights
  const poolMat = new THREE.MeshBasicMaterial({
    map: T.glows.warm, transparent: true, opacity: 0.10,
    blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffa25a,
  })
  for (const [x, z, sx, sz] of [[-14, -14, 14, 7], [14, -13, 11, 6], [2, 12, 7, 4]]) {
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(sx, sz), poolMat.clone())
    pool.rotation.x = -Math.PI / 2
    pool.position.set(x, 0.02, z)
    scene.add(pool)
  }

  // Painted ground markings
  const paint = document.createElement('canvas')
  paint.width = paint.height = 1024
  const px = paint.getContext('2d')
  px.clearRect(0, 0, 1024, 1024)
  px.strokeStyle = 'rgba(206,188,132,0.5)'
  px.lineWidth = 16
  px.strokeRect(90, 90, 844, 844)
  px.setLineDash([46, 34])
  px.strokeStyle = 'rgba(206,188,132,0.33)'
  px.lineWidth = 9
  px.strokeRect(180, 180, 664, 664)
  px.setLineDash([])
  px.fillStyle = 'rgba(206,188,132,0.46)'
  px.font = 'bold 210px "Arial Narrow", Arial, sans-serif'
  px.textAlign = 'center'
  px.fillText('07', 512, 600)
  px.font = 'bold 42px "Arial Narrow", Arial, sans-serif'
  px.fillText('B L A C K S I T E   L O G I S T I C S', 512, 690)
  const paintTex = new THREE.CanvasTexture(paint)
  paintTex.colorSpace = THREE.SRGBColorSpace
  paintTex.anisotropy = 8
  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(17, 17),
    new THREE.MeshBasicMaterial({ map: paintTex, transparent: true, opacity: 0.5, depthWrite: false, color: 0xd8c48a })
  )
  decal.rotation.x = -Math.PI / 2
  decal.rotation.z = 0.12
  decal.position.set(1, 0.015, 1)
  scene.add(decal)

  /* ------------------------------- helpers ----------------------------- */
  const concreteMat = new THREE.MeshStandardMaterial({
    map: T.concrete.map, roughnessMap: T.concrete.roughnessMap,
    bumpMap: T.concrete.bumpMap, bumpScale: 0.06,
    metalness: 0.08, roughness: 1.0, envMapIntensity: 0.5, color: 0xa3a49c,
  })
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x2b3033, metalness: 0.9, roughness: 0.34, envMapIntensity: 1.1 })
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x121517, metalness: 0.6, roughness: 0.55 })
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0c, metalness: 0.1, roughness: 0.92 })
  const woodMat = new THREE.MeshStandardMaterial({ map: T.wood.map, roughness: 0.82, metalness: 0.05, bumpMap: T.wood.map, bumpScale: 0.02 })
  const rustMat = new THREE.MeshStandardMaterial({ color: 0x5b3624, metalness: 0.55, roughness: 0.82, envMapIntensity: 0.5 })

  function box(w, h, d, mat, x, y, z, { ry = 0, cast = true, receive = true, collider = false, solid = true, parent = scene } = {}) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    m.rotation.y = ry
    m.castShadow = cast && quality.shadows
    m.receiveShadow = receive
    parent.add(m)
    if (collider) addBoxCollider(colliders, m)
    if (solid) solids.push(m)
    return m
  }

  /* ----------------------------- containers ---------------------------- */
  function container(x, z, ry, textile, stacked = 0) {
    const L = 6.06, H = 2.59, W = 2.44
    const mat = new THREE.MeshStandardMaterial({
      map: textile.map, bumpMap: textile.bumpMap, bumpScale: 0.09,
      metalness: 0.72, roughness: 0.58, envMapIntensity: 0.9, color: 0xb9b9b9,
    })
    const g = new THREE.Group()
    g.position.set(x, stacked * H, z)
    g.rotation.y = ry
    const body = new THREE.Mesh(new THREE.BoxGeometry(L, H, W), mat)
    body.position.y = H / 2
    body.castShadow = quality.shadows
    body.receiveShadow = true
    g.add(body)
    solids.push(body)
    // corner castings
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      for (const sy of [0.09, H - 0.09]) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.24), darkMat)
        c.position.set(sx * (L / 2 - 0.1), sy, sz * (W / 2 - 0.1))
        c.castShadow = quality.shadows
        g.add(c)
      }
    }
    // door bars on one end
    for (let i = 0; i < 4; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.05, H - 0.4, 0.05), steelMat)
      bar.position.set(L / 2 - 0.03, H / 2, -W / 2 + 0.3 + i * (W - 0.6) / 3)
      g.add(bar)
    }
    scene.add(g)
    g.updateWorldMatrix(true, true)
    const bounds = new THREE.Box3().setFromObject(g)
    colliders.push(bounds)
    return g
  }

  container(-12.5, 7.5, 0, T.orange)
  container(13.2, 10.5, 0, T.blue)
  container(13.2, -6.5, Math.PI / 2, T.green)
  container(-13.0, -12.5, Math.PI / 2, T.orange)
  container(-12.5, -19.0, 0, T.blue)
  container(12.9, -19.3, 0, T.green)
  container(13.2, 10.5, 0, T.orange, 1)

  /* -------------------------- central bunker --------------------------- */
  const bunker = new THREE.Group()
  bunker.position.set(0.5, 0, -8)
  scene.add(bunker)
  const bBody = new THREE.Mesh(new THREE.BoxGeometry(8.4, 3.2, 5.2), concreteMat)
  bBody.position.y = 1.6
  bBody.castShadow = quality.shadows
  bBody.receiveShadow = true
  bunker.add(bBody)
  solids.push(bBody)
  addBoxCollider(colliders, bBody)
  const bLip = new THREE.Mesh(new THREE.BoxGeometry(8.9, 0.28, 5.7), concreteMat)
  bLip.position.y = 3.34
  bLip.castShadow = quality.shadows
  bunker.add(bLip)
  // doorway recess + lit interior
  const doorCanvas = document.createElement('canvas')
  doorCanvas.width = 96; doorCanvas.height = 160
  const dctx = doorCanvas.getContext('2d')
  const dg = dctx.createLinearGradient(0, 0, 0, 160)
  dg.addColorStop(0, '#ffd6a2')
  dg.addColorStop(0.18, '#ffb066')
  dg.addColorStop(0.5, '#b05e24')
  dg.addColorStop(0.82, '#3a1c0a')
  dg.addColorStop(1, '#120906')
  dctx.fillStyle = dg
  dctx.fillRect(0, 0, 96, 160)
  dctx.fillStyle = 'rgba(30,12,4,0.5)'
  dctx.fillRect(46, 0, 4, 160)
  dctx.fillRect(0, 52, 96, 3)
  dctx.fillStyle = 'rgba(255,225,190,0.25)'
  dctx.fillRect(10, 0, 3, 160)
  const doorTex = new THREE.CanvasTexture(doorCanvas)
  doorTex.colorSpace = THREE.SRGBColorSpace
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 2.25), new THREE.MeshBasicMaterial({ map: doorTex, toneMapped: false }))
  door.position.set(-1.2, 1.19, 2.61)
  bunker.add(door)
  const doorFrameL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.5, 0.2), darkMat)
  doorFrameL.position.set(-1.95, 1.3, 2.64)
  bunker.add(doorFrameL)
  const doorFrameR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.5, 0.2), darkMat)
  doorFrameR.position.set(-0.45, 1.3, 2.64)
  bunker.add(doorFrameR)
  const doorLamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.24), steelMat)
  doorLamp.position.set(-1.2, 2.62, 2.62)
  bunker.add(doorLamp)
  const doorLampLens = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.06), new THREE.MeshBasicMaterial({ color: 0xffd9a8, toneMapped: false }))
  doorLampLens.position.set(-1.2, 2.58, 2.75)
  doorLampLens.rotation.x = 0.5
  bunker.add(doorLampLens)
  const doorGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glows.warm, color: 0xffb066, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55 }))
  doorGlow.position.set(-1.2, 2.0, 2.8)
  doorGlow.scale.set(2.2, 2.6, 1)
  bunker.add(doorGlow)
  const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.16, 0.24), steelMat)
  doorFrame.position.set(-1.2, 2.44, 2.64)
  bunker.add(doorFrame)
  const doorLight = new THREE.PointLight(0xffa355, 22, 9, 1.8)
  doorLight.position.set(-1.2, 1.5, 3.2)
  bunker.add(doorLight)
  flickerLights.push({ light: doorLight, base: 22, speed: 2.2, amount: 0.12 })
  // vent pipes and roof details
  for (let i = 0; i < 3; i++) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.6, 10), steelMat)
    pipe.position.set(1.6 + i * 0.7, 4.1, -0.8)
    pipe.castShadow = quality.shadows
    bunker.add(pipe)
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.16, 10), darkMat)
    cap.position.set(1.6 + i * 0.7, 4.95, -0.8)
    bunker.add(cap)
  }
  // antenna
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 3.4, 6), steelMat)
  mast.position.set(3.1, 5.2, -1.4)
  bunker.add(mast)
  const mastLight = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff2f22 }))
  mastLight.position.set(3.1, 6.95, -1.4)
  bunker.add(mastLight)
  animated.push((t) => { mastLight.visible = Math.sin(t * 3.4) > 0.2 })
  // roof railing
  for (let i = 0; i < 5; i++) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.0, 0.07), steelMat)
    post.position.set(-3.6 + i * 1.8, 3.9, 2.4)
    bunker.add(post)
  }
  const rail = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.07, 0.07), steelMat)
  rail.position.set(0, 4.35, 2.4)
  bunker.add(rail)

  /* --------------------------- jersey barriers ------------------------- */
  const jerseyShape = new THREE.Shape()
  jerseyShape.moveTo(-0.42, 0)
  jerseyShape.lineTo(0.42, 0)
  jerseyShape.lineTo(0.30, 0.22)
  jerseyShape.lineTo(0.20, 1.02)
  jerseyShape.lineTo(-0.20, 1.02)
  jerseyShape.lineTo(-0.30, 0.22)
  jerseyShape.closePath()
  const jerseyGeo = new THREE.ExtrudeGeometry(jerseyShape, { depth: 2.6, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.03, bevelSegments: 2 })
  jerseyGeo.translate(0, 0, -1.3)
  function jersey(x, z, ry = 0, len = 1) {
    const m = new THREE.Mesh(jerseyGeo, concreteMat)
    m.position.set(x, 0, z)
    m.rotation.y = ry
    m.scale.z = len
    m.castShadow = quality.shadows
    m.receiveShadow = true
    scene.add(m)
    solids.push(m)
    addBoxCollider(colliders, m)
    return m
  }
  jersey(-3.4, 5.6, 0)
  jersey(-0.3, 5.6, 0)
  jersey(7.4, 1.2, Math.PI / 2)
  jersey(-6.8, -3.4, Math.PI / 2)
  jersey(4.6, -15.0, 0)
  jersey(-4.0, -16.0, 0.25)
  jersey(16.0, 3.2, Math.PI / 2, 0.9)
  jersey(-18.0, 2.0, Math.PI / 2, 0.9)

  /* ------------------------------- crates ------------------------------ */
  function crate(x, z, s = 1.05, ry = 0, stack = 0) {
    const m = box(s, s, s, woodMat, x, s / 2 + stack * s, z, { ry, collider: true })
    // metal strapping
    const strap = new THREE.Mesh(new THREE.BoxGeometry(s * 1.03, 0.055, s * 1.03), steelMat)
    strap.position.copy(m.position)
    strap.position.y = m.position.y + s * 0.28
    strap.rotation.y = ry
    scene.add(strap)
    return m
  }
  crate(7.6, 6.4, 1.1, 0.2)
  crate(8.6, 6.9, 1.0, -0.15)
  crate(-8.4, 2.0, 1.05, 0.35)
  crate(-8.0, 2.9, 1.0, -0.2)
  crate(3.2, -3.4, 1.15, 0.15)
  crate(2.1, -3.7, 0.95, -0.3)
  crate(-15.6, -6.5, 1.1, 0.5)
  crate(17.6, 8.6, 1.0, 0.2)
  crate(17.0, 9.6, 1.1, -0.1)
  crate(4.4, 14.8, 1.15, 0.05)

  /* ------------------------------- barrels ----------------------------- */
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x8a3f1f, metalness: 0.62, roughness: 0.52, envMapIntensity: 0.8 })
  function barrel(x, z, burning = false) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.95, 18), barrelMat)
    b.position.y = 0.475
    b.castShadow = quality.shadows
    g.add(b)
    for (const y of [0.19, 0.75]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.342, 0.022, 6, 22), steelMat)
      ring.rotation.x = Math.PI / 2
      ring.position.y = y
      g.add(ring)
    }
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.03, 18), steelMat)
    lid.position.y = 0.96
    g.add(lid)
    scene.add(g)
    solids.push(b)
    addBoxCollider(colliders, g)
    if (burning) {
      const fireMat = new THREE.SpriteMaterial({ map: T.glows.warm, color: 0xff7a2a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9 })
      const fire = new THREE.Sprite(fireMat)
      fire.position.y = 1.25
      fire.scale.set(0.9, 1.4, 1)
      g.add(fire)
      const light = new THREE.PointLight(0xff7a2a, 42, 12, 1.8)
      light.position.y = 1.5
      g.add(light)
      flickerLights.push({ light, base: 42, speed: 7.0, amount: 0.35 })
      animated.push((t) => {
        fire.scale.set(0.8 + Math.sin(t * 13) * 0.1, 1.3 + Math.sin(t * 11 + 1) * 0.2, 1)
        fire.material.opacity = 0.7 + Math.sin(t * 17) * 0.15
      })
      // smoke
      for (let i = 0; i < 5; i++) {
        const sm = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.smoke, color: 0x1b1d1e, transparent: true, opacity: 0.30, depthWrite: false }))
        sm.position.set(x + randRange(-0.2, 0.2), 1.6 + i * 0.9, z + randRange(-0.2, 0.2))
        sm.scale.setScalar(1.2 + i * 0.9)
        sm.userData.baseY = sm.position.y
        sm.userData.phase = rand() * 10
        sm.userData.speed = 0.35 + rand() * 0.3
        scene.add(sm)
        smokes.push(sm)
      }
    }
    return g
  }
  barrel(5.6, 12.0, true)
  barrel(-7.2, 8.8)
  barrel(-6.5, 9.3)
  barrel(-15.7, 2.6)

  // ammo boxes, sandbag walls
  const ammoMat = new THREE.MeshStandardMaterial({ color: 0x3c4a37, metalness: 0.3, roughness: 0.78 })
  for (const [x, z, r] of [[-1.4, 11.2, 0.2], [9.8, -1.8, -0.4], [-11.0, 13.6, 0.6]]) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    g.rotation.y = r
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.34, 0.48), ammoMat)
    b.position.y = 0.17
    b.castShadow = quality.shadows
    g.add(b)
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.06, 0.5), darkMat)
    lid.position.y = 0.37
    g.add(lid)
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.012, 4, 10, Math.PI), steelMat)
    handle.position.y = 0.41
    g.add(handle)
    scene.add(g)
    solids.push(b)
    addBoxCollider(colliders, g)
  }

  const sandMat = new THREE.MeshStandardMaterial({ color: 0x85745a, roughness: 0.95, metalness: 0.0 })
  function sandbagWall(x, z, ry = 0, count = 7) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    g.rotation.y = ry
    for (let row = 0; row < 2; row++) {
      for (let i = 0; i < count; i++) {
        const bag = new THREE.Mesh(new THREE.CapsuleGeometry(0.19, 0.34, 4, 8), sandMat)
        bag.rotation.z = Math.PI / 2
        bag.rotation.y = randRange(-0.14, 0.14)
        bag.position.set((i - count / 2) * 0.44 + (row % 2) * 0.2, 0.2 + row * 0.30, randRange(-0.04, 0.04))
        bag.scale.set(1, 1, 0.78)
        bag.castShadow = quality.shadows
        g.add(bag)
      }
    }
    scene.add(g)
    addBoxCollider(colliders, g)
    return g
  }
  sandbagWall(10.6, 5.8, 0.2, 8)
  sandbagWall(-12.0, -2.2, -0.3, 6)
  sandbagWall(-1.2, -16.8, 0.05, 8)

  /* ---------------------------- watchtower ----------------------------- */
  function tower(x, z, height = 6.4) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, height, 0.16), steelMat)
      leg.position.set(sx * 1.5, height / 2, sz * 1.5)
      leg.castShadow = quality.shadows
      g.add(leg)
    }
    for (let i = 1; i < 4; i++) {
      const ring = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.06, 0.06), steelMat)
      ring.position.set(0, i * height / 4, 1.5)
      g.add(ring)
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.22, 3.6), darkMat)
    deck.position.y = height
    deck.castShadow = quality.shadows
    g.add(deck)
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.0, 2.5), concreteMat)
    cab.position.y = height + 1.1
    cab.castShadow = quality.shadows
    g.add(cab)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.14, 3.0), steelMat)
    roof.position.y = height + 2.14
    g.add(roof)
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.7), new THREE.MeshBasicMaterial({ color: 0xffb066, transparent: true, opacity: 0.55 }))
    win.position.set(0, height + 1.35, 1.26)
    g.add(win)
    for (let i = 0; i < 3; i++) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.0, 0.06), steelMat)
      post.position.set(-1.6 + i * 1.6, height + 0.6, -1.7)
      g.add(post)
    }
    scene.add(g)
    addBoxCollider(colliders, g)
    return g
  }
  tower(-18.5, -19.5)
  tower(19.0, -18.5, 5.6)

  /* --------------------------- floodlight rig -------------------------- */
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xffd7a0 })
  function floodlight(x, z, targetX, targetZ) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 8.2, 10), steelMat)
    pole.position.y = 4.1
    pole.castShadow = quality.shadows
    g.add(pole)
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.09, 0.09), steelMat)
    bar.position.y = 8.0
    bar.rotation.y = Math.atan2(targetX - x, targetZ - z) + Math.PI / 2
    g.add(bar)
    const lamps = []
    for (const off of [-0.55, 0.55]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.30, 0.34), darkMat)
      head.position.set(off, 8.0, 0)
      g.add(head)
      const lens = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.22), lampMat)
      lens.position.set(off, 8.0, 0.18)
      g.add(lens)
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glows.warm, color: 0xffd2a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9 }))
      glow.position.set(off, 8.0, 0.24)
      glow.scale.setScalar(1.8)
      g.add(glow)
      lamps.push(glow)
    }
    const spot = new THREE.SpotLight(0xffbd82, 380, 34, 0.62, 0.55, 1.7)
    spot.position.set(0, 7.9, 0)
    spot.target.position.set(targetX - x, 0, targetZ - z)
    g.add(spot)
    g.add(spot.target)
    scene.add(g)
    addBoxCollider(colliders, pole)

    const shaft = lightShaft(0xffc087, 9, 0.35, 4.2)
    shaft.position.set(x, 4.6, z)
    shaft.rotation.z = Math.PI * 0.02
    scene.add(shaft)
    shafts.push(shaft)
    return g
  }
  floodlight(-15.5, -15.0, 0, 1)
  floodlight(15.8, -13.2, 0, 2)

  /* ----------------------------- perimeter ----------------------------- */
  const wallMat = new THREE.MeshStandardMaterial({
    map: T.concrete.map, bumpMap: T.concrete.bumpMap, bumpScale: 0.08,
    roughnessMap: T.concrete.roughnessMap, metalness: 0.05, color: 0x6b6f6b,
  })
  for (const [x, z, w, d] of [[0, -27, 58, 2], [0, 27, 58, 2], [-27, 0, 2, 58], [27, 0, 2, 58]]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, 4.2, d), wallMat)
    wall.position.set(x, 2.1, z)
    wall.castShadow = quality.shadows
    wall.receiveShadow = true
    scene.add(wall)
    solids.push(wall)
    addBoxCollider(colliders, wall)
  }
  // fence in front of walls
  for (const [x, z, ry] of [[0, -24.6, 0], [0, 24.6, 0], [-24.6, 0, Math.PI / 2], [24.6, 0, Math.PI / 2]]) {
    const fence = new THREE.Mesh(new THREE.PlaneGeometry(52, 3.0), new THREE.MeshStandardMaterial({
      map: T.chain, transparent: true, side: THREE.DoubleSide, alphaTest: 0.15,
      metalness: 0.8, roughness: 0.6, color: 0x9aa3a4, depthWrite: true,
    }))
    fence.position.set(x, 1.5, z)
    fence.rotation.y = ry
    fence.castShadow = false
    scene.add(fence)
    for (let i = -24; i <= 24; i += 4) {
      const postX = ry === 0 ? x + i : x
      const postZ = ry === 0 ? z : z + i
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 3.4, 6), steelMat)
      post.position.set(postX, 1.7, postZ)
      scene.add(post)
    }
  }

  // distant skyline
  const winMat = new THREE.MeshStandardMaterial({ map: T.windows, emissiveMap: T.windows, emissive: 0xffc98a, emissiveIntensity: 0.55, color: 0x14181b, roughness: 0.9, metalness: 0.1 })
  const skyline = new THREE.Group()
  for (let i = 0; i < 22; i++) {
    const side = i % 4
    const dist = 38 + rand() * 38
    const x = side === 0 ? -dist : side === 1 ? dist : randRange(-45, 45)
    const z = side === 2 ? -dist : side === 3 ? dist : randRange(-45, 45)
    const h = 10 + rand() * 30
    const b = new THREE.Mesh(new THREE.BoxGeometry(5 + rand() * 9, h, 5 + rand() * 9), winMat)
    b.position.set(x, h / 2, z)
    skyline.add(b)
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff3322 }))
    beacon.position.set(x, h + 0.2, z)
    skyline.add(beacon)
    animated.push((t) => { beacon.visible = Math.sin(t * 1.6 + i) > 0.35 })
  }
  scene.add(skyline)

  // overhead cables
  for (let i = 0; i < 4; i++) {
    const pts = []
    for (let j = 0; j <= 20; j++) {
      const u = j / 20
      pts.push(new THREE.Vector3(-24 + u * 48, 7.2 + Math.sin(u * Math.PI) * -1.2 + i * 0.35, -20 + i * 2.5))
    }
    const cable = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0x0a0c0d, transparent: true, opacity: 0.85 })
    )
    scene.add(cable)
  }

  /* ------------------------------- rain -------------------------------- */
  const rainCount = quality.rainCount
  const rainPositions = new Float32Array(rainCount * 6)
  const rainDrops = []
  for (let i = 0; i < rainCount; i++) {
    rainDrops.push({
      x: randRange(-26, 26), y: randRange(0, 26), z: randRange(-26, 26),
      speed: randRange(16, 26), len: randRange(0.35, 0.85),
    })
  }
  const rainGeo = new THREE.BufferGeometry()
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3))
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({
    color: 0xaec8dd, transparent: true, opacity: 0.19, blending: THREE.AdditiveBlending, depthWrite: false,
  }))
  rain.frustumCulled = false
  scene.add(rain)

  // drifting motes
  const moteCount = quality.moteCount
  const motePos = new Float32Array(moteCount * 3)
  for (let i = 0; i < moteCount; i++) {
    motePos[i * 3] = randRange(-20, 20)
    motePos[i * 3 + 1] = randRange(0.2, 8)
    motePos[i * 3 + 2] = randRange(-20, 20)
  }
  const moteGeo = new THREE.BufferGeometry()
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3))
  const motes = new THREE.Points(moteGeo, new THREE.PointsMaterial({
    color: 0xffd7a8, size: 0.035, transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  }))
  scene.add(motes)

  /* ----------------------------- spawn points -------------------------- */
  spawnPoints.push(
    new THREE.Vector3(-21, 0, 17), new THREE.Vector3(21, 0, 17),
    new THREE.Vector3(-21, 0, -3), new THREE.Vector3(21, 0, -2),
    new THREE.Vector3(0, 0, -21.5), new THREE.Vector3(-15, 0, -21.5),
    new THREE.Vector3(16, 0, -21.5), new THREE.Vector3(-21, 0, 9),
    new THREE.Vector3(-8, 0, 5), new THREE.Vector3(8.5, 0, 3.2),
    new THREE.Vector3(-14, 0, -2), new THREE.Vector3(14, 0, -1),
    new THREE.Vector3(-5, 0, -14.5), new THREE.Vector3(7.5, 0, -15.5),
  )

  // low drifting mist
  const mists = []
  for (let i = 0; i < 8; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: T.smoke, color: 0x93a9b8, transparent: true, opacity: 0.055 + rand() * 0.03,
      depthWrite: false,
    }))
    sp.position.set(randRange(-18, 18), 0.9 + rand() * 0.7, randRange(-17, 18))
    sp.scale.set(10 + rand() * 8, 3.2 + rand() * 2, 1)
    sp.userData.phase = rand() * 9
    sp.userData.speed = 0.12 + rand() * 0.2
    scene.add(sp)
    mists.push(sp)
  }

  const world = {
    ground, colliders, solids, spawnPoints,
    bounds: { minX: -23, maxX: 23, minZ: -23, maxZ: 23 },
    lights: { hemi, moon, ambient },
    rain, motes, skyline,
    update(dt, camera, t) {
      // rain follows the camera so the storm feels infinite
      for (let i = 0; i < rainCount; i++) {
        const d = rainDrops[i]
        d.y -= d.speed * dt
        if (d.y < -0.5) {
          d.y = 24 + rand() * 6
          d.x = camera.position.x + randRange(-26, 26)
          d.z = camera.position.z + randRange(-26, 26)
        }
        const j = i * 6
        rainPositions[j] = d.x
        rainPositions[j + 1] = d.y
        rainPositions[j + 2] = d.z
        rainPositions[j + 3] = d.x + 0.05
        rainPositions[j + 4] = d.y + d.len
        rainPositions[j + 5] = d.z
      }
      rainGeo.attributes.position.needsUpdate = true

      for (let i = 0; i < moteCount; i++) {
        motePos[i * 3] += Math.sin(t * 0.4 + i) * dt * 0.06
        motePos[i * 3 + 1] += dt * 0.06
        if (motePos[i * 3 + 1] > 9) motePos[i * 3 + 1] = 0.1
      }
      moteGeo.attributes.position.needsUpdate = true

      for (const f of flickerLights) {
        const n = Math.sin(t * f.speed) * 0.5 + Math.sin(t * f.speed * 2.7 + 1.2) * 0.3
        f.light.intensity = f.base * (1 + n * f.amount)
      }
      for (const s of smokes) {
        s.position.y += s.userData.speed * dt
        s.position.x += Math.sin(t * 0.6 + s.userData.phase) * dt * 0.25
        s.material.opacity = 0.22 * Math.max(0, 1 - (s.position.y - s.userData.baseY) / 6.5)
        s.scale.x = s.scale.y = 1.2 + (s.position.y - s.userData.baseY) * 0.55
      }
      for (const a of animated) a(t)
      for (const s of shafts) s.material.uniforms.uTime.value = t
      for (let i = 0; i < mists.length; i++) {
        const m = mists[i]
        m.position.x += m.userData.speed * dt
        if (m.position.x > 24) m.position.x = -24
        m.material.opacity = (0.05 + Math.sin(t * 0.12 + m.userData.phase) * 0.02)
      }
    },
  }

  // expose helper for enemies to check line of sight
  world.blocked = (a, b) => {
    for (const box of colliders) {
      if (box.max.y < 0.3) continue
      if (segmentBox(a, b, box)) return true
    }
    return false
  }

  return world
}

/* Segment/AABB intersection (slab method). */
export function segmentBox(a, b, box) {
  let tmin = 0, tmax = 1
  const d = { x: b.x - a.x, y: b.y - a.y, z: b.z - a.z }
  for (const axis of ['x', 'y', 'z']) {
    const origin = a[axis], dir = d[axis]
    if (Math.abs(dir) < 1e-8) {
      if (origin < box.min[axis] || origin > box.max[axis]) return false
    } else {
      let t1 = (box.min[axis] - origin) / dir
      let t2 = (box.max[axis] - origin) / dir
      if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp }
      tmin = Math.max(tmin, t1)
      tmax = Math.min(tmax, t2)
      if (tmin > tmax) return false
    }
  }
  return true
}

export { PALETTE }
