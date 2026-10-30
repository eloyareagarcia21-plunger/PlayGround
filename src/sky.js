import * as THREE from 'three'
import { createGlowTexture, createWindowTexture } from './textures.js'

/* Sky dome, stars, moon and the distant city silhouette. */
export function buildSky(scene) {
  const skyGeo = new THREE.SphereGeometry(280, 32, 20)
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      topColor: { value: new THREE.Color('#03060c') },
      midColor: { value: new THREE.Color('#0b1726') },
      horizonColor: { value: new THREE.Color('#233448') },
      glowColor: { value: new THREE.Color('#3b526c') },
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      varying vec3 vDir;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 glowColor;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, -0.1, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
        col = mix(col, topColor, smoothstep(0.2, 0.75, h));

        // Broad cloud bands lit from the horizon.
        vec2 uv = dir.xz / max(dir.y + 0.28, 0.08);
        float clouds = fbm(uv * 0.9 + vec2(2.0, 5.0));
        clouds = smoothstep(0.46, 0.86, clouds) * smoothstep(0.02, 0.3, h);
        col += glowColor * clouds * 0.16;

        // Horizon light pollution.
        float glow = pow(1.0 - clamp(h, 0.0, 1.0), 18.0);
        col += vec3(0.16, 0.11, 0.06) * glow * 0.9;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const sky = new THREE.Mesh(skyGeo, skyMat)
  sky.renderOrder = -100
  sky.frustumCulled = false
  scene.add(sky)

  // ---------------------------------------------------------------- stars
  const starRand = (() => {
    let s = 1337
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296)
  })()
  const starCount = 1100
  const starPos = new Float32Array(starCount * 3)
  const starSizes = new Float32Array(starCount)
  for (let i = 0; i < starCount; i++) {
    const theta = starRand() * Math.PI * 2
    const phi = Math.acos(0.08 + starRand() * 0.9)
    const r = 250
    starPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
    starPos[i * 3 + 1] = Math.cos(phi) * r
    starPos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r
    starSizes[i] = starRand()
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
  const starMat = new THREE.PointsMaterial({
    size: 1.2,
    map: createGlowTexture({ size: 64, color: '210,228,255', core: 0.08 }),
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    fog: false,
    color: 0xcfe4ff,
  })
  const stars = new THREE.Points(starGeo, starMat)
  stars.renderOrder = -99
  scene.add(stars)

  // ----------------------------------------------------------------- moon
  const moonDir = new THREE.Vector3(-0.48, 0.34, -0.81).normalize()
  const moon = new THREE.Group()
  const moonDisc = new THREE.Mesh(
    new THREE.CircleGeometry(7, 40),
    new THREE.MeshBasicMaterial({ color: '#e8f2ff', fog: false, toneMapped: false })
  )
  moonDisc.position.copy(moonDir).multiplyScalar(242)
  moonDisc.lookAt(0, 0, 0)
  moon.add(moonDisc)

  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createGlowTexture({ size: 256, color: '185,214,255', core: 0.02 }),
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
    fog: false,
    toneMapped: false,
  }))
  moonGlow.position.copy(moonDisc.position)
  moonGlow.scale.setScalar(26)
  moonGlow.material.opacity = 0.32
  moon.add(moonGlow)
  moon.renderOrder = -98
  scene.add(moon)

  // ----------------------------------------------------------- city blocks
  const cityRand = (() => {
    let s = 90210
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296)
  })()
  const windowTexA = createWindowTexture({ seed: 41, cols: 8, rows: 14 })
  const windowTexB = createWindowTexture({ seed: 87, cols: 6, rows: 10 })
  const windowTexC = createWindowTexture({ seed: 133, cols: 10, rows: 16 })
  const cityMats = [
    new THREE.MeshBasicMaterial({ map: windowTexA, color: 0x8fa4ba, fog: true }),
    new THREE.MeshBasicMaterial({ map: windowTexB, color: 0x7c8fa6, fog: true }),
    new THREE.MeshBasicMaterial({ map: windowTexC, color: 0x98a9bd, fog: true }),
  ]
  const city = new THREE.Group()
  for (let i = 0; i < 42; i++) {
    const a = (i / 42) * Math.PI * 2 + cityRand() * 0.12
    const dist = 62 + cityRand() * 40
    const h = 10 + cityRand() * 46
    const w = 5 + cityRand() * 10
    const d = 5 + cityRand() * 10
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), cityMats[i % 3])
    box.position.set(Math.cos(a) * dist, h / 2 - 1, Math.sin(a) * dist)
    box.rotation.y = cityRand() * Math.PI
    city.add(box)

    if (i % 5 === 0) {
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff2e3c, fog: false, toneMapped: false })
      )
      beacon.position.set(box.position.x, h + 0.2, box.position.z)
      beacon.userData.beacon = true
      city.add(beacon)
    }
  }
  scene.add(city)

  return { sky, stars, moon, moonDir, city }
}
