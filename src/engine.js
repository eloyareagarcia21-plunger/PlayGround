import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { buildSky } from './sky.js'

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uDamage: { value: 0 },
    uFade: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uDamage;
    uniform float uFade;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 d = uv - 0.5;
      float r2 = dot(d, d);

      // Very subtle lens fringing, stronger toward the edges.
      float ca = r2 * 0.012;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + d * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - d * ca).b;

      // Filmic contrast + slight desaturated shadow grade.
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, 1.06);
      col = (col - 0.5) * 1.055 + 0.5;
      col += vec3(0.012, 0.018, 0.028) * (1.0 - smoothstep(0.0, 0.3, l));

      // Vignette.
      float vig = smoothstep(1.02, 0.28, length(d) * 1.24);
      col *= mix(0.68, 1.0, vig);

      // Damage wash.
      col = mix(col, vec3(0.42, 0.02, 0.05), uDamage * smoothstep(0.1, 0.75, length(d)) * 0.5);

      // Film grain.
      float grain = fract(sin(dot(uv * uResolution + uTime * 37.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (grain - 0.5) * 0.022;

      col = mix(col, vec3(0.0), uFade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `,
}

function buildEnvironment(renderer) {
  const envScene = new THREE.Scene()
  const geo = new THREE.SphereGeometry(50, 24, 16)
  const pos = geo.attributes.position
  const colors = new Float32Array(pos.count * 3)
  const top = new THREE.Color('#101d2e')
  const horizon = new THREE.Color('#31485f')
  const bottom = new THREE.Color('#070b11')
  const c = new THREE.Color()
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 50
    if (y > 0) c.copy(horizon).lerp(top, Math.min(1, y * 1.6))
    else c.copy(horizon).lerp(bottom, Math.min(1, -y * 2.2))
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  envScene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })))

  const panel = (color, x, y, z, w, h, rot) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
    )
    mesh.position.set(x, y, z)
    mesh.rotation.y = rot
    envScene.add(mesh)
  }
  panel(0xffa45a, -18, 12, -12, 10, 5, Math.PI / 2.4)
  panel(0x4fb8ff, 16, 16, 14, 8, 10, -Math.PI / 2.6)
  panel(0xffd9a0, 4, 22, -20, 14, 3, 0)
  panel(0x7a95b5, 0, 3, 30, 22, 8, 0)

  const pmrem = new THREE.PMREMGenerator(renderer)
  const rt = pmrem.fromScene(envScene, 0.03, 0.1, 120)
  pmrem.dispose()
  geo.dispose()
  return rt.texture
}

// A brighter, warmer studio-style environment just for the first-person
// weapon. Metal needs something to reflect, otherwise it renders black.
function buildWeaponEnvironment(renderer) {
  const envScene = new THREE.Scene()
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(10, 24, 16),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0.055, 0.075, 0.11), side: THREE.BackSide })
  )
  envScene.add(sphere)

  const panel = (color, x, y, z, w, h, ry = 0) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
    )
    mesh.position.set(x, y, z)
    mesh.rotation.y = ry
    envScene.add(mesh)
  }
  // Bright key softbox, cool rim strip, warm bounce and a thin white kicker.
  panel(new THREE.Color(7.5, 6.2, 4.6), -2.6, 2.4, 3.2, 3.4, 4.2, 0.5)
  panel(new THREE.Color(1.3, 2.9, 5.2), 3.4, 1.7, 1.4, 2.2, 5.0, -0.9)
  panel(new THREE.Color(5.0, 2.6, 1.2), 1.2, -2.2, 2.4, 4.0, 1.6, 0.2)
  panel(new THREE.Color(9.0, 9.0, 9.0), 0.0, 3.6, -0.6, 4.5, 0.35, 0)
  panel(new THREE.Color(0.35, 0.55, 0.9), -3.6, 0.4, -2.6, 3.0, 3.0, 0.9)

  const pmrem = new THREE.PMREMGenerator(renderer)
  const rt = pmrem.fromScene(envScene, 0.02, 0.1, 40)
  pmrem.dispose()
  sphere.geometry.dispose()
  return rt.texture
}

export class Engine {
  constructor(canvas) {
    this.canvas = canvas
    this.coarse = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    this.mobile = this.coarse || Math.min(window.innerWidth, window.innerHeight) < 720
    this.maxDpr = this.mobile ? 1.5 : 1.75
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, this.maxDpr)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
      alpha: false,
    })
    renderer.setPixelRatio(this.pixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.32
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.info.autoReset = true
    this.renderer = renderer

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x0d1826, this.mobile ? 0.016 : 0.0175)

    this.camera = new THREE.PerspectiveCamera(76, window.innerWidth / window.innerHeight, 0.02, 420)
    this.camera.position.set(0, 1.68, 14)

    this.weaponScene = new THREE.Scene()
    this.weaponCamera = new THREE.PerspectiveCamera(76, window.innerWidth / window.innerHeight, 0.01, 12)
    this.weaponScene.environment = buildWeaponEnvironment(renderer)
    this.weaponScene.environmentIntensity = 1.15
    this.scene.environment = buildEnvironment(renderer)
    this.scene.environmentIntensity = 0.55

    this._buildLights()
    this.sky = buildSky(this.scene)
    this._buildComposer()

    this.frameTimes = []
    this.qualityScale = 1
    this._lastResize = 0
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 240))
  }

  _buildLights() {
    const scene = this.scene
    this.hemi = new THREE.HemisphereLight(0x5d82ad, 0x0b0e13, 1.15)
    scene.add(this.hemi)

    // Moonlight rakes across the courtyard from behind the camera-right so the
    // far facade and props catch a cool edge instead of sitting in silhouette.
    const moon = new THREE.DirectionalLight(0xbcd2ff, 3.1)
    moon.position.set(34, 46, 26)
    moon.target.position.set(-4, 0, -10)
    moon.castShadow = true
    moon.shadow.mapSize.set(this.mobile ? 1024 : 2048, this.mobile ? 1024 : 2048)
    moon.shadow.camera.near = 2
    moon.shadow.camera.far = 140
    moon.shadow.camera.left = -42
    moon.shadow.camera.right = 42
    moon.shadow.camera.top = 42
    moon.shadow.camera.bottom = -42
    moon.shadow.bias = -0.0006
    moon.shadow.normalBias = 0.035
    scene.add(moon)
    scene.add(moon.target)
    this.moonLight = moon

    // Cool bounce off the far wall.
    this.fillLight = new THREE.PointLight(0x6aa6dd, 90, 60, 2)
    this.fillLight.position.set(6, 12, -20)
    scene.add(this.fillLight)

    // High ambient pool that keeps the concrete readable without flattening it.
    const skyFill = new THREE.PointLight(0x7396bb, 80, 46, 2)
    skyFill.position.set(-8, 11, 6)
    scene.add(skyFill)
    this.skyFill = skyFill

    // ------------------------------------------------------- weapon rig lights
    const w = this.weaponScene
    w.add(new THREE.HemisphereLight(0x8fb4d6, 0x12161c, 0.9))
    const key = new THREE.DirectionalLight(0xdde9ff, 2.7)
    key.position.set(1.6, 2.4, 1.4)
    w.add(key)
    const rim = new THREE.DirectionalLight(0x6fb2ff, 2.5)
    rim.position.set(-1.6, 0.9, -1.8)
    w.add(rim)
    const bounce = new THREE.DirectionalLight(0xffa266, 0.85)
    bounce.position.set(0.5, -1.5, 1.0)
    w.add(bounce)
    this.weaponKey = key
  }

  _buildComposer() {
    const { renderer, scene, camera } = this
    const samples = this.mobile ? 0 : 2
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight)
    const rt = new THREE.WebGLRenderTarget(
      size.x * this.pixelRatio,
      size.y * this.pixelRatio,
      { type: THREE.HalfFloatType, samples, depthBuffer: true }
    )
    this.composer = new EffectComposer(renderer, rt)
    this.composer.setPixelRatio(this.pixelRatio)
    this.composer.setSize(size.x, size.y)

    this.composer.addPass(new RenderPass(scene, camera))
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(size.x / 2, size.y / 2),
      this.mobile ? 0.62 : 0.78,
      0.62,
      0.82
    )
    this.composer.addPass(this.bloom)
    this.grade = new ShaderPass(GradeShader)
    this.grade.uniforms.uResolution.value.set(size.x * this.pixelRatio, size.y * this.pixelRatio)
    this.composer.addPass(this.grade)
    this.composer.addPass(new OutputPass())
  }

  resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, this.maxDpr) * this.qualityScale
    this.renderer.setPixelRatio(this.pixelRatio)
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.weaponCamera.aspect = w / h
    this.weaponCamera.updateProjectionMatrix()
    this.composer.setPixelRatio(this.pixelRatio)
    this.composer.setSize(w, h)
    this.bloom.setSize(w / 2, h / 2)
    this.grade.uniforms.uResolution.value.set(w * this.pixelRatio, h * this.pixelRatio)
    this.composer.renderTarget1.samples = this.mobile ? 0 : 2
  }

  adaptiveQuality(dt) {
    this.frameTimes.push(dt)
    if (this.frameTimes.length < 90) return
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length
    this.frameTimes.length = 0
    if (avg > 0.026 && this.qualityScale > 0.7) {
      this.qualityScale = Math.max(0.7, this.qualityScale - 0.12)
      this.maxDpr = Math.max(1, this.maxDpr - 0.15)
      this.bloom.strength *= 0.94
      this.resize()
    }
  }

  render(dt, weaponRoot, showWeapon) {
    this.grade.uniforms.uTime.value += dt
    this.composer.render()
    if (showWeapon && weaponRoot) {
      const r = this.renderer
      r.autoClear = false
      r.clearDepth()
      r.render(this.weaponScene, this.weaponCamera)
      r.autoClear = true
    }
  }

  get fps() {
    return this._fps || 0
  }

  updateFps(dt) {
    this._fps = this._fps ? this._fps * 0.92 + (1 / Math.max(dt, 0.0001)) * 0.08 : 1 / dt
  }
}
