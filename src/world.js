import * as THREE from 'three';
import {
  concreteTexture,
  metalTexture,
  hazardTexture,
  signTexture,
  windowTexture,
  puddleAlphaTexture,
  glowTexture,
  smokeTexture,
} from './textures.js';

const C = {
  concrete: 0x6f787c,
  dark: 0x141a1e,
  steel: 0x2c353a,
  orange: 0xff8a2a,
  cyan: 0x54e2ff,
  red: 0xff3b30,
};

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeEnvMap(renderer) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#060d17');
  g.addColorStop(0.42, '#102434');
  g.addColorStop(0.58, '#2a4350');
  g.addColorStop(0.66, '#3a3a32');
  g.addColorStop(0.72, '#12181a');
  g.addColorStop(1, '#050708');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 256);
  // hazy city glow
  const rg = ctx.createRadialGradient(380, 160, 0, 380, 160, 150);
  rg.addColorStop(0, 'rgba(255,160,70,0.35)');
  rg.addColorStop(1, 'rgba(255,160,70,0)');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, 512, 256);
  const cg = ctx.createRadialGradient(110, 150, 0, 110, 150, 130);
  cg.addColorStop(0, 'rgba(70,200,255,0.22)');
  cg.addColorStop(1, 'rgba(70,200,255,0)');
  ctx.fillStyle = cg;
  ctx.fillRect(0, 0, 512, 256);
  // moon
  const mg = ctx.createRadialGradient(300, 68, 0, 300, 68, 22);
  mg.addColorStop(0, 'rgba(230,244,255,1)');
  mg.addColorStop(0.5, 'rgba(180,210,255,0.6)');
  mg.addColorStop(1, 'rgba(160,200,255,0)');
  ctx.fillStyle = mg;
  ctx.fillRect(0, 0, 512, 256);

  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  tex.dispose();
  return env;
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.colliders = [];
    this.solidMeshes = [];
    this.spawnPoints = [];
    this.neons = [];
    this.flickers = [];
    this.steamVents = [];
    this.time = 0;
    this.lightningTimer = 8 + Math.random() * 10;
    this.lightning = 0;
    this.rainUniforms = null;
    this.dynamicLights = [];
    this.disposables = [];

    scene.environment = makeEnvMap(renderer);
    scene.environmentIntensity = 0.35;

    this.buildMaterials();
    this.buildLights();
    this.buildSky();
    this.buildGround();
    this.buildPerimeter();
    this.buildCentral();
    this.buildProps();
    this.buildForeground();
    this.buildRain();
    this.buildAtmosphere();
  }

  buildMaterials() {
    const concrete = concreteTexture(5);
    this.mat = {
      wall: new THREE.MeshStandardMaterial({
        color: 0x485154,
        map: concrete.map,
        normalMap: concrete.normal,
        normalScale: new THREE.Vector2(0.7, 0.7),
        roughness: 0.92,
        metalness: 0.04,
      }),
      wallDark: new THREE.MeshStandardMaterial({
        color: 0x262d30,
        map: concrete.map,
        normalMap: concrete.normal,
        roughness: 0.95,
        metalness: 0.03,
      }),
      floor: new THREE.MeshStandardMaterial({
        color: 0x353f44,
        map: (() => { const t = concrete.map.clone(); t.repeat.set(11, 11); t.needsUpdate = true; return t; })(),
        normalMap: (() => { const t = concrete.normal.clone(); t.repeat.set(11, 11); t.needsUpdate = true; return t; })(),
        normalScale: new THREE.Vector2(1.3, 1.3),
        roughness: 0.4,
        metalness: 0.45,
        envMapIntensity: 1.7,
      }),
      steel: new THREE.MeshStandardMaterial({
        color: 0x353f44,
        map: metalTexture(3),
        roughness: 0.62,
        metalness: 0.72,
        envMapIntensity: 0.85,
      }),
      steelDark: new THREE.MeshStandardMaterial({
        color: 0x1a2024,
        map: metalTexture(2),
        roughness: 0.55,
        metalness: 0.8,
        envMapIntensity: 0.7,
      }),
      rust: new THREE.MeshStandardMaterial({ color: 0x6e3f26, roughness: 0.9, metalness: 0.35 }),
      containerBlue: new THREE.MeshStandardMaterial({ color: 0x1f4c5c, roughness: 0.7, metalness: 0.4 }),
      containerRust: new THREE.MeshStandardMaterial({ color: 0x5a3826, roughness: 0.82, metalness: 0.35 }),
      containerGreen: new THREE.MeshStandardMaterial({ color: 0x33483a, roughness: 0.75, metalness: 0.35 }),
      sandbag: new THREE.MeshStandardMaterial({ color: 0x5a553d, roughness: 1, metalness: 0, flatShading: true }),
      hazard: new THREE.MeshStandardMaterial({ map: hazardTexture(1), roughness: 0.7, metalness: 0.25 }),
      black: new THREE.MeshStandardMaterial({ color: 0x0a0d0f, roughness: 0.6, metalness: 0.4 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x0c2530, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.55 }),
      puddle: new THREE.MeshStandardMaterial({
        color: 0x0d171c,
        roughness: 0.1,
        metalness: 0.95,
        transparent: true,
        opacity: 0.42,
        alphaMap: puddleAlphaTexture(),
        envMapIntensity: 2.4,
        depthWrite: false,
      }),
    };
    this.mat.puddle.alphaMap.rotation = 0;
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0x3a5872, 0x16120d, 1.45);
    this.scene.add(hemi);

    const moon = new THREE.DirectionalLight(0xa8c6ff, 2.9);
    moon.position.set(-28, 42, -18);
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    moon.shadow.camera.left = -42;
    moon.shadow.camera.right = 42;
    moon.shadow.camera.top = 42;
    moon.shadow.camera.bottom = -42;
    moon.shadow.camera.near = 1;
    moon.shadow.camera.far = 120;
    moon.shadow.bias = -0.0008;
    moon.shadow.normalBias = 0.025;
    this.scene.add(moon);
    this.moon = moon;

    const fill = new THREE.DirectionalLight(0xff9a4a, 0.9);
    fill.position.set(26, 18, 30);
    this.scene.add(fill);

    // soft cool front rim so metal silhouettes separate from the background
    const rim = new THREE.DirectionalLight(0x4e86a8, 0.85);
    rim.position.set(4, 9, 34);
    this.scene.add(rim);

    const towerLight = new THREE.PointLight(C.cyan, 95, 30, 2);
    towerLight.position.set(0, 6.5, -2);
    this.scene.add(towerLight);
    this.dynamicLights.push(towerLight);
    this.towerLight = towerLight;

    const red = new THREE.PointLight(C.red, 55, 18, 2);
    red.position.set(22, 4, -22);
    this.scene.add(red);
    this.dynamicLights.push(red);

    const warm = new THREE.PointLight(0xffa040, 80, 22, 2);
    warm.position.set(-20, 3.4, 8);
    this.scene.add(warm);
    this.dynamicLights.push(warm);

    // floodlights
    for (const [x, z, ry] of [[-30, 30, Math.PI * 0.25], [30, 30, -Math.PI * 0.25]]) {
      const p = new THREE.SpotLight(0xd8e8ff, 260, 52, Math.PI * 0.14, 0.55, 1.5);
      p.position.set(x, 9.4, z);
      p.target.position.set(x * 0.25, 0, z * 0.25);
      this.scene.add(p, p.target);
      this.dynamicLights.push(p);
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(5.5, 18, 24, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x9fc8ff, transparent: true, opacity: 0.016, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
      );
      cone.position.set(x, 9.4, z);
      cone.lookAt(x * 0.25, 0, z * 0.25);
      cone.rotateX(-Math.PI / 2);
      cone.position.y -= 2;
      this.scene.add(cone);
    }

    // courtyard key masts: warm-white floods that carve the fighting space
    const mastSpecs = [
      { x: 0, z: 27, tx: 0, tz: 2, color: 0xffd9a8, intensity: 340 },
      { x: -19, z: 11, tx: -2, tz: -2, color: 0xffcf9a, intensity: 220 },
      { x: 19, z: 10, tx: 2, tz: -4, color: 0xcfe4ff, intensity: 230 },
    ];
    for (const spec of mastSpecs) {
      const s = new THREE.SpotLight(spec.color, spec.intensity, 55, 0.72, 0.68, 1.35);
      s.position.set(spec.x, 10.5, spec.z);
      s.target.position.set(spec.tx, 0, spec.tz);
      this.scene.add(s, s.target);
      s.castShadow = false;
      this.dynamicLights.push(s);
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(8.5, 20, 28, 1, true),
        new THREE.MeshBasicMaterial({ color: spec.color, transparent: true, opacity: 0.012, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
      );
      cone.position.set(spec.x, 9.6, spec.z);
      cone.lookAt(spec.tx, 0, spec.tz);
      cone.rotateX(-Math.PI / 2);
      this.scene.add(cone);
    }

    // a pair of slowly sweeping searchlights for scale and atmosphere
    this.searchlights = [];
    for (const base of [Math.PI * 0.25, Math.PI * 1.25]) {
      const light = new THREE.SpotLight(0xbfe0ff, 420, 90, 0.085, 0.62, 1.1);
      light.position.set(Math.cos(base) * 30, 15, Math.sin(base) * 30);
      const target = new THREE.Object3D();
      target.position.set(0, 0, 0);
      this.scene.add(light, target);
      light.target = target;
      this.searchlights.push({ light, target, base, phase: Math.random() * 6 });
    }
  }

  buildSky() {
    const skyGeo = new THREE.SphereGeometry(240, 32, 24);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTop: { value: new THREE.Color(0x030609) },
        uMid: { value: new THREE.Color(0x0b1a26) },
        uHorizon: { value: new THREE.Color(0x26333a) },
        uGlow: { value: new THREE.Color(0x7a3d1a) },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vDir;
        uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uGlow;
        void main(){
          float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 col = mix(uHorizon, uMid, smoothstep(0.46, 0.62, h));
          col = mix(col, uTop, smoothstep(0.58, 0.95, h));
          float glow = pow(max(0.0, 1.0 - abs(vDir.y) * 5.0), 3.0);
          float ang = atan(vDir.z, vDir.x);
          float band = 0.5 + 0.5 * sin(ang * 1.0 + 1.3);
          col += uGlow * glow * band * 0.32;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.scene.add(new THREE.Mesh(skyGeo, skyMat));

    // stars
    const starGeo = new THREE.BufferGeometry();
    const n = 900;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const r = mulberry32(7);
    for (let i = 0; i < n; i++) {
      const theta = r() * Math.PI * 2;
      const y = 0.08 + r() * 0.9;
      const rad = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(theta) * rad * 225;
      pos[i * 3 + 1] = y * 225;
      pos[i * 3 + 2] = Math.sin(theta) * rad * 225;
      const b = 0.35 + r() * 0.65;
      const tint = r();
      col[i * 3] = b * (tint > 0.8 ? 1 : 0.8);
      col[i * 3 + 1] = b * 0.9;
      col[i * 3 + 2] = b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 1.4, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false }));
    this.scene.add(stars);

    // moon sprite
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xcfe4ff, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
    moon.position.set(-58, 66, -105);
    moon.scale.setScalar(11);
    this.scene.add(moon);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(3.1, 32), new THREE.MeshBasicMaterial({ color: 0xeaf4ff, fog: false }));
    disc.position.copy(moon.position);
    disc.lookAt(0, 2, 0);
    this.scene.add(disc);

    // distant skyline
    const winTex = windowTexture();
    winTex.repeat.set(1, 1);
    const cityMat = new THREE.MeshStandardMaterial({
      color: 0x0b1116,
      roughness: 0.9,
      metalness: 0.1,
      map: winTex,
      emissive: 0xffb066,
      emissiveMap: winTex,
      emissiveIntensity: 0.8,
    });
    const cityGeo = new THREE.BoxGeometry(1, 1, 1);
    const count = 70;
    const city = new THREE.InstancedMesh(cityGeo, cityMat, count);
    const dummy = new THREE.Object3D();
    const r2 = mulberry32(99);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + r2() * 0.06;
      const rad = 58 + r2() * 110;
      const w = 6 + r2() * 16;
      const h = 16 + r2() * 70;
      dummy.position.set(Math.cos(a) * rad, h / 2 - 1, Math.sin(a) * rad);
      dummy.rotation.y = r2() * Math.PI;
      dummy.scale.set(w, h, w * (0.7 + r2() * 0.6));
      dummy.updateMatrix();
      city.setMatrixAt(i, dummy.matrix);
    }
    this.scene.add(city);
    this.city = city;
  }

  buildGround() {
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(84, 84), this.mat.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);
    this.solidMeshes.push(floor);

    // broad wet sheen: a glossy, broken-up layer that catches the neon and moonlight
    const sheenAlpha = puddleAlphaTexture();
    sheenAlpha.repeat.set(3.4, 3.4);
    sheenAlpha.needsUpdate = true;
    const sheenMat = new THREE.MeshStandardMaterial({
      color: 0x11202a,
      roughness: 0.06,
      metalness: 1,
      transparent: true,
      opacity: 0.3,
      alphaMap: sheenAlpha,
      envMapIntensity: 2.8,
      depthWrite: false,
    });
    const sheen = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), sheenMat);
    sheen.rotation.x = -Math.PI / 2;
    sheen.position.y = 0.008;
    sheen.renderOrder = 1;
    this.scene.add(sheen);

    // puddles
    const puddleGeo = new THREE.PlaneGeometry(6.5, 6.5);
    const r = mulberry32(41);
    for (let i = 0; i < 22; i++) {
      const p = new THREE.Mesh(puddleGeo, this.mat.puddle);
      p.rotation.x = -Math.PI / 2;
      p.rotation.z = r() * Math.PI * 2;
      p.position.set((r() - 0.5) * 64, 0.012 + i * 0.0002, (r() - 0.5) * 64);
      p.scale.setScalar(0.5 + r() * 1.5);
      p.renderOrder = 1;
      this.scene.add(p);
    }

    // warm light pools cast on the wet floor
    this.addGroundGlow(0, 10, 0xffd2a0, 15, 0.3);
    this.addGroundGlow(-13, 6, 0xffb877, 10, 0.24);
    this.addGroundGlow(14, 4, 0x9fd4ff, 10, 0.2);
    this.addGroundGlow(-20, -6, 0xffb060, 8, 0.18);
    this.addGroundGlow(0, -20, 0x5fe0ff, 12, 0.16);

    // painted markings
    const paint = new THREE.MeshBasicMaterial({ color: 0xc9a03a, transparent: true, opacity: 0.15, depthWrite: false });
    const paintRed = new THREE.MeshBasicMaterial({ color: 0x9a3a2a, transparent: true, opacity: 0.055, depthWrite: false });
    for (let i = 0; i < 5; i++) {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 22), i === 2 ? paintRed : paint);
      line.rotation.x = -Math.PI / 2;
      line.position.set(-11 + i * 5.5, 0.02, 16);
      this.scene.add(line);
    }
    // dashed guide line toward the uplink
    for (let i = 0; i < 9; i++) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.9), paint);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, 0.021, 21 - i * 2.4);
      this.scene.add(dash);
    }
    const circle = new THREE.Mesh(new THREE.RingGeometry(4.6, 4.8, 64), paintRed);
    circle.rotation.x = -Math.PI / 2;
    circle.position.set(0, 0.02, -1);
    this.scene.add(circle);
    const circle2 = new THREE.Mesh(new THREE.RingGeometry(3.6, 3.68, 64), paint);
    circle2.rotation.x = -Math.PI / 2;
    circle2.position.set(0, 0.021, -1);
    this.scene.add(circle2);

    // drain grates
    const grateMat = new THREE.MeshStandardMaterial({ color: 0x0b0e10, roughness: 0.5, metalness: 0.8 });
    for (const [x, z] of [[-8, 6], [9, 10], [-14, -12], [17, -6]]) {
      const g = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.04, 0.8), grateMat);
      g.position.set(x, 0.015, z);
      this.scene.add(g);
    }
  }

  addGroundGlow(x, z, color, size, opacity) {
    const mat = new THREE.MeshBasicMaterial({
      map: glowTexture(),
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, 0.018, z);
    p.renderOrder = 2;
    this.scene.add(p);
  }

  addBox(w, h, d, mat, x, y, z, ry = 0, collide = true, cast = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.rotation.y = ry;
    m.castShadow = cast;
    m.receiveShadow = true;
    this.scene.add(m);
    this.solidMeshes.push(m);
    if (collide && h > 0.35) {
      const c = Math.abs(Math.cos(ry));
      const s = Math.abs(Math.sin(ry));
      const ex = (w * c + d * s) / 2;
      const ez = (w * s + d * c) / 2;
      this.colliders.push(new THREE.Box3(
        new THREE.Vector3(x - ex, 0, z - ez),
        new THREE.Vector3(x + ex, h, z + ez),
      ));
    }
    return m;
  }

  addColliderBox(box) {
    this.colliders.push(box);
  }

  buildPerimeter() {
    const H = 11;
    const T = 1.6;
    // walls
    this.addBox(76, H, T, this.mat.wall, 0, H / 2, -37, 0, true);
    this.addBox(76, H, T, this.mat.wall, 0, H / 2, 37, 0, true);
    this.addBox(T, H, 76, this.mat.wall, -37, H / 2, 0, 0, true);
    this.addBox(T, H, 76, this.mat.wall, 37, H / 2, 0, 0, true);

    // wall trim / panels
    for (let i = 0; i < 10; i++) {
      this.addBox(6.4, 4.5, 0.18, this.mat.wallDark, -31 + i * 6.9, 7.3, -36.1, 0, false);
      this.addBox(6.4, 4.5, 0.18, this.mat.wallDark, -31 + i * 6.9, 7.3, 36.1, 0, false);
    }
    for (let i = 0; i < 10; i++) {
      this.addBox(0.18, 4.5, 6.4, this.mat.wallDark, -36.1, 7.3, -31 + i * 6.9, 0, false);
      this.addBox(0.18, 4.5, 6.4, this.mat.wallDark, 36.1, 7.3, -31 + i * 6.9, 0, false);
    }

    // hazard base stripes
    const stripeGeo = new THREE.PlaneGeometry(72, 0.9);
    for (const [x, z, ry] of [[0, -36.15, 0], [0, 36.15, Math.PI], [-36.15, 0, Math.PI / 2], [36.15, 0, -Math.PI / 2]]) {
      const s = new THREE.Mesh(stripeGeo, this.mat.hazard);
      s.position.set(x, 0.55, z);
      s.rotation.y = ry;
      this.scene.add(s);
    }

    // catwalk along north wall
    const cat = this.addBox(50, 0.22, 2.6, this.mat.steel, 0, 4.6, -34.4, 0, false);
    cat.castShadow = true;
    for (let i = 0; i < 6; i++) {
      this.addBox(0.16, 1.15, 0.16, this.mat.steelDark, -24 + i * 9.6, 5.4, -33.2, 0, false);
    }
    const rail = this.addBox(50, 0.08, 0.08, this.mat.steelDark, 0, 5.95, -33.2, 0, false);
    const rail2 = this.addBox(50, 0.06, 0.06, this.mat.steelDark, 0, 5.4, -33.2, 0, false);
    rail.castShadow = rail2.castShadow = false;
    // stair silhouette
    for (let i = 0; i < 10; i++) {
      this.addBox(2, 0.16, 1.1, this.mat.steel, 24.5, 0.4 + i * 0.44, -31 + i * 1.05, 0, false);
    }

    // pipes on walls
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x3b4448, roughness: 0.55, metalness: 0.8 });
    for (let i = 0; i < 3; i++) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 74, 12), pipeMat);
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set(0, 3.2 + i * 0.55, -36.4);
      pipe.castShadow = true;
      this.scene.add(pipe);
      this.solidMeshes.push(pipe);
    }
    for (let i = 0; i < 4; i++) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 72, 10), pipeMat);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(-36.4, 2.2 + i * 0.4, 0);
      pipe.castShadow = true;
      this.scene.add(pipe);
    }
    // vertical pipes with steam
    for (const [x, z] of [[-31, -35], [31, -35], [-35, 12]]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 10, 12), pipeMat);
      p.position.set(x, 5, z);
      p.castShadow = true;
      this.scene.add(p);
      this.steamVents.push(new THREE.Vector3(x + 0.2, 8.2, z));
    }

    // signs
    const signs = [
      { text: 'BLACKSITE', color: '#62e7ff', pos: [-11.5, 8.6, -35.85], scale: [12, 4.6], ry: 0, glow: [-11.5, -29] },
      { text: 'ZERO HOUR', color: '#ffb02e', pos: [12, 7.4, -35.85], scale: [11, 3.8], ry: 0, glow: [12, -29] },
      { text: 'NEXUS', color: '#ffb02e', pos: [35.9, 6.5, -8], scale: [7, 3.5], ry: -Math.PI / 2, glow: [29, -8] },
      { text: 'SECTOR 07', color: '#ff5a3a', pos: [-35.9, 7.2, -14], scale: [8, 4], ry: Math.PI / 2, glow: [-29, -14] },
      { text: 'DANGER', color: '#ff3b30', pos: [24, 5, -35.9], scale: [5, 2.5], ry: 0, glow: [24, -30] },
    ];
    for (const s of signs) {
      const tex = signTexture(s.text, s.color);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(s.scale[0], s.scale[1]), mat);
      plane.position.set(...s.pos);
      plane.rotation.y = s.ry;
      this.scene.add(plane);
      this.neons.push({ mat, base: 1, speed: 1 + Math.random() * 2, phase: Math.random() * 10, mode: 'sign' });
      const glow = new THREE.PointLight(new THREE.Color(s.color), 22, 15, 2);
      glow.position.set(s.pos[0], s.pos[1], s.pos[2]);
      if (s.ry === 0) glow.position.z += 1.4;
      this.scene.add(glow);
      this.dynamicLights.push(glow);
      if (s.glow) this.addGroundGlow(s.glow[0], s.glow[1], new THREE.Color(s.color).getHex(), 16, 0.16);
    }

    // wall lamps
    for (let i = 0; i < 8; i++) {
      const x = -28 + i * 8;
      const z = -35.6;
      const housing = this.addBox(0.7, 0.35, 0.5, this.mat.steelDark, x, 6.2, z, 0, false);
      housing.castShadow = false;
      const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.36), new THREE.MeshBasicMaterial({ color: 0xffd7a0, toneMapped: false }));
      bulb.position.set(x, 6.02, z + 0.12);
      this.scene.add(bulb);
      if (i % 2 === 0) {
        const l = new THREE.PointLight(0xffbb77, 38, 16, 2);
        l.position.set(x, 5.8, z + 0.8);
        this.scene.add(l);
        this.dynamicLights.push(l);
      }
    }

    // spawn points
    this.spawnPoints = [
      new THREE.Vector3(-30, 0, -28), new THREE.Vector3(-16, 0, -32), new THREE.Vector3(0, 0, -32),
      new THREE.Vector3(16, 0, -32), new THREE.Vector3(30, 0, -27), new THREE.Vector3(-32, 0, -8),
      new THREE.Vector3(32, 0, -8), new THREE.Vector3(-32, 0, 12), new THREE.Vector3(32, 0, 12),
      new THREE.Vector3(-24, 0, 30), new THREE.Vector3(24, 0, 30), new THREE.Vector3(0, 0, 31),
    ];
  }

  buildCentral() {
    const g = new THREE.Group();
    this.scene.add(g);

    // bunker base
    this.addBox(9, 1.1, 9, this.mat.wallDark, 0, 0.55, -3, 0, true);
    this.addBox(7.4, 2.6, 7.4, this.mat.steelDark, 0, 1.9, -3, 0, true);
    this.addBox(8.2, 0.25, 8.2, this.mat.steel, 0, 3.3, -3, 0, false);

    // uplink tower
    const towerMat = this.mat.steel;
    const legs = 4;
    for (let i = 0; i < legs; i++) {
      const a = (i / legs) * Math.PI * 2 + Math.PI / 4;
      const x = Math.cos(a) * 2.1;
      const z = -3 + Math.sin(a) * 2.1;
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 8.5, 8), towerMat);
      leg.position.set(x, 7.4, z);
      leg.castShadow = true;
      this.scene.add(leg);
      this.solidMeshes.push(leg);
      this.addColliderBox(new THREE.Box3(new THREE.Vector3(x - 0.28, 0, z - 0.28), new THREE.Vector3(x + 0.28, 9, z + 0.28)));
    }
    for (let i = 0; i < 4; i++) {
      const y = 4 + i * 1.9;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.055, 6, 24), this.mat.steel);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, y, -3);
      ring.castShadow = true;
      this.scene.add(ring);
    }

    // radar dish
    const dishGroup = new THREE.Group();
    dishGroup.position.set(0, 11.6, -3);
    const dish = new THREE.Mesh(new THREE.SphereGeometry(1.5, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), this.mat.steel);
    dish.rotation.x = -Math.PI * 0.7;
    dish.castShadow = true;
    dishGroup.add(dish);
    const dishGlow = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.035, 6, 36), new THREE.MeshBasicMaterial({ color: C.cyan, toneMapped: false }));
    dishGlow.rotation.x = -Math.PI * 0.7;
    dishGlow.position.z = 0.1;
    dishGroup.add(dishGlow);
    this.scene.add(dishGroup);
    this.radarDish = dishGroup;

    // antenna
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, 5, 6), this.mat.steel);
    ant.position.set(0, 13, -3);
    this.scene.add(ant);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), new THREE.MeshBasicMaterial({ color: C.red, toneMapped: false }));
    beacon.position.set(0, 15.55, -3);
    this.scene.add(beacon);
    this.beacon = beacon;
    const beaconLight = new THREE.PointLight(C.red, 8, 14, 2);
    beaconLight.position.copy(beacon.position);
    this.scene.add(beaconLight);
    this.beaconLight = beaconLight;

    // holographic ring
    const holo = new THREE.Mesh(
      new THREE.RingGeometry(3.3, 3.4, 64),
      new THREE.MeshBasicMaterial({ color: C.cyan, transparent: true, opacity: 0.45, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
    );
    holo.rotation.x = -Math.PI / 2;
    holo.position.set(0, 3.55, -3);
    this.scene.add(holo);
    this.holo = holo;

    // consoles
    for (const [x, z, ry] of [[3.6, -1.5, -0.4], [-3.7, -4.6, 0.5], [2.8, -6.2, 2.7]]) {
      const base = this.addBox(1.4, 0.95, 0.7, this.mat.steelDark, x, 3.85, z, ry, false);
      base.position.y = 3.85;
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.62), new THREE.MeshBasicMaterial({ color: 0x123c48, toneMapped: false }));
      screen.position.set(x, 4.55, z);
      screen.rotation.y = ry;
      screen.rotation.x = -0.35;
      this.scene.add(screen);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.57), new THREE.MeshBasicMaterial({ color: C.cyan, transparent: true, opacity: 0.35, toneMapped: false }));
      glow.position.copy(screen.position);
      glow.rotation.copy(screen.rotation);
      glow.position.y += 0.005;
      glow.position.z += 0.005;
      this.scene.add(glow);
    }

    // crates around bunker
    this.buildCrate(-5.6, -3.2, 1.3, 0.2);
    this.buildCrate(5.5, -4.8, 1.15, -0.3);
    this.buildCrate(-3.4, -7.4, 1.1, 0.5);
  }

  buildCrate(x, z, s = 1.2, ry = 0, y = null) {
    const h = s;
    const baseY = y === null ? s / 2 : y;
    const box = this.addBox(s, h, s, this.mat.containerGreen, x, baseY, z, ry, true);
    const frameMat = this.mat.steelDark;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const e = new THREE.Mesh(new THREE.BoxGeometry(0.08, h + 0.04, 0.08), frameMat);
        e.position.set(x + (sx * (s / 2 - 0.02)) * Math.cos(ry) - (sz * (s / 2 - 0.02)) * Math.sin(ry), baseY, z + (sx * (s / 2 - 0.02)) * Math.sin(ry) + (sz * (s / 2 - 0.02)) * Math.cos(ry));
        e.castShadow = true;
        this.scene.add(e);
      }
    }
    const band = new THREE.Mesh(new THREE.BoxGeometry(s + 0.05, 0.06, s + 0.05), frameMat);
    band.position.set(x, baseY + h * 0.32, z);
    band.rotation.y = ry;
    this.scene.add(band);
    return box;
  }

  buildContainer(x, z, ry, mat, stacked = false) {
    const w = 8.4, h = 2.7, d = 2.7;
    const baseY = 1.35;
    const m = this.addBox(w, h, d, mat, x, baseY, z, ry, true);
    // ribbing
    const ribMat = this.mat.steelDark;
    const cos = Math.cos(ry), sin = Math.sin(ry);
    for (let i = -6; i <= 6; i++) {
      const off = i * 0.62;
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.1, h - 0.12, 0.06), ribMat);
      rib.position.set(x + off * cos, baseY, z + off * sin);
      rib.rotation.y = ry;
      this.scene.add(rib);
      const rib2 = rib.clone();
      rib2.position.set(x + off * cos - sin * (d / 2), baseY, z + off * sin + cos * (d / 2));
      rib2.rotation.y = ry;
      this.scene.add(rib2);
    }
    // doors
    const door = new THREE.Mesh(new THREE.PlaneGeometry(2.5, h - 0.3), this.mat.steelDark);
    door.position.set(x + Math.cos(ry) * (w / 2 + 0.01), baseY, z + Math.sin(ry) * (w / 2 + 0.01));
    door.rotation.y = ry + Math.PI / 2;
    door.rotation.y = ry;
    this.scene.add(door);
    // hazard strip
    const hs = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, 0.28), this.mat.hazard);
    hs.position.set(x, 0.45, z);
    hs.rotation.y = ry;
    this.scene.add(hs);

    if (stacked) {
      const m2 = this.addBox(w, h, d, mat, x, baseY + h + 0.02, z, ry, true);
      const st = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, 0.26), this.mat.hazard);
      st.position.set(x, h + 0.45, z + 0.01);
      st.rotation.y = ry;
      this.scene.add(st);
      // accent light
      const strip = new THREE.Mesh(new THREE.BoxGeometry(w * 0.7, 0.06, 0.04), new THREE.MeshBasicMaterial({ color: C.orange, toneMapped: false }));
      strip.position.set(x, h + 1.4, z + Math.cos(ry) * (d / 2 + 0.03));
      strip.rotation.y = ry;
      this.scene.add(strip);
    }
    return m;
  }

  buildBarrel(x, z, color = 0x9b3b22) {
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.55 });
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.95, 16), mat);
    b.position.set(x, 0.475, z);
    b.castShadow = true;
    b.receiveShadow = true;
    this.scene.add(b);
    const ringMat = this.mat.steelDark;
    for (const y of [0.18, 0.76]) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.022, 5, 18), ringMat);
      r.rotation.x = Math.PI / 2;
      r.position.set(x, y, z);
      this.scene.add(r);
    }
    this.addColliderBox(new THREE.Box3(new THREE.Vector3(x - 0.36, 0, z - 0.36), new THREE.Vector3(x + 0.36, 0.95, z + 0.36)));
    this.solidMeshes.push(b);
  }

  buildSandbags(x, z, ry = 0, count = 4) {
    const geo = new THREE.SphereGeometry(0.36, 7, 5);
    for (let row = 0; row < 2; row++) {
      for (let i = 0; i < count; i++) {
        const m = new THREE.Mesh(geo, this.mat.sandbag);
        const off = (i - (count - 1) / 2) * 0.6 + (row % 2 ? 0.22 : 0);
        m.position.set(x + Math.cos(ry) * off, 0.16 + row * 0.26, z + Math.sin(ry) * off);
        m.scale.set(1, 0.62, 0.78);
        m.rotation.y = ry + Math.random() * 0.4;
        m.castShadow = true;
        m.receiveShadow = true;
        this.scene.add(m);
      }
    }
    this.addColliderBox(new THREE.Box3(new THREE.Vector3(x - count * 0.34, 0, z - count * 0.34), new THREE.Vector3(x + count * 0.34, 0.75, z + count * 0.34)));
  }

  buildProps() {
    // containers
    this.buildContainer(-18, -14, 0.1, this.mat.containerBlue, true);
    this.buildContainer(16, -18, -0.16, this.mat.containerRust, false);
    this.buildContainer(22, 9, 0.35, this.mat.containerBlue, true);
    this.buildContainer(-22, 13, -0.28, this.mat.containerGreen, false);

    // crates clusters
    const crates = [
      [-9, 9, 1.2, 0.1], [-10.3, 9.5, 0.9, 0.5], [12, 14, 1.3, -0.2],
      [13.2, 14.6, 1, 0.2], [-15, 22, 1.2, 0.4], [8, -9, 1.15, 0.3],
      [9.2, -9.7, 0.85, -0.1], [-6, 20, 1.1, 0.2], [4, 22, 1.2, -0.4],
      [-26, -3, 1.3, 0.3], [27, -2, 1.2, -0.2],
    ];
    for (const [x, z, s, ry] of crates) this.buildCrate(x, z, s, ry);

    // barrels
    for (const [x, z, c] of [[-20, 20, 0x9b3b22], [-20.9, 20.6, 0x2f5a3f], [-19.6, 21.1, 0x9b3b22], [19, 19, 0x2f5a3f], [19.8, 19.7, 0x9b3b22], [-12, -18, 0x9b3b22], [12.6, -12.2, 0x2f5a3f]]) {
      this.buildBarrel(x, z, c);
    }

    // foreground cover framing the spawn approach
    this.buildCrate(-6.4, 22.2, 1.15, 0.25);
    this.buildCrate(-7.5, 21.5, 0.85, -0.1);
    this.buildCrate(7.2, 20.8, 1.2, -0.3);
    this.buildCrate(8.4, 21.6, 0.9, 0.4);
    this.buildBarrel(-9.3, 19.6, 0x9b3b22);
    this.buildBarrel(-8.6, 20.4, 0x2f5a3f);
    this.buildBarrel(9.6, 18.6, 0x9b3b22);

    // sandbag lines
    this.buildSandbags(-7, -18, 0.1, 5);
    this.buildSandbags(10, 5, Math.PI / 2, 4);
    this.buildSandbags(-27, 24, 0.5, 4);

    // jersey barriers
    for (const [x, z, ry] of [[-4, 13, 0.12], [3, 13.4, -0.06], [-14, 5, 1.5], [15, -5, 1.6]]) {
      const b = this.addBox(3.2, 0.9, 0.6, this.mat.wall, x, 0.45, z, ry, true);
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.3), this.mat.hazard);
      stripe.position.set(x, 0.6, z + 0.31);
      stripe.rotation.y = ry;
      this.scene.add(stripe);
    }

    // lamps / light posts
    for (const [x, z] of [[-12, 4], [12, -3], [-23, -22], [24, 20]]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 6.2, 8), this.mat.steelDark);
      pole.position.set(x, 3.1, z);
      pole.castShadow = true;
      this.scene.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.08), this.mat.steelDark);
      arm.position.set(x - 0.5, 6.15, z);
      this.scene.add(arm);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.36), this.mat.steelDark);
      head.position.set(x - 0.95, 6.05, z);
      this.scene.add(head);
      const bulb = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.26), new THREE.MeshBasicMaterial({ color: 0xffe0a0, toneMapped: false }));
      bulb.rotation.x = Math.PI / 2;
      bulb.position.set(x - 0.95, 5.95, z);
      this.scene.add(bulb);
      const light = new THREE.PointLight(0xffc070, 60, 17, 2);
      light.position.set(x - 0.95, 5.7, z);
      this.scene.add(light);
      this.dynamicLights.push(light);
      this.flickers.push({ light, base: 60, phase: Math.random() * 8, speed: 2.4 + Math.random() * 3 });
      this.addColliderBox(new THREE.Box3(new THREE.Vector3(x - 0.2, 0, z - 0.2), new THREE.Vector3(x + 0.2, 6.2, z + 0.2)));
    }

    // hanging work lamps over the courtyard
    const hangSpecs = [
      [-7, 19, 0xffc27a], [8, 12, 0xffcf92], [-12, 2, 0xffb56a], [13, -8, 0xbfe0ff], [-3, -14, 0xffc27a],
    ];
    for (const [x, z, color] of hangSpecs) {
      const y = 6.4;
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 2.2, 5), this.mat.steelDark);
      cable.position.set(x, y + 1.1, z);
      this.scene.add(cable);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.26, 12, 1, true), this.mat.steelDark);
      shade.position.set(x, y + 0.12, z);
      shade.rotation.x = Math.PI;
      this.scene.add(shade);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), new THREE.MeshBasicMaterial({ color, toneMapped: false }));
      bulb.position.set(x, y - 0.04, z);
      this.scene.add(bulb);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
      halo.position.set(x, y - 0.04, z);
      halo.scale.setScalar(2.2);
      this.scene.add(halo);
      const light = new THREE.PointLight(color, 70, 19, 2);
      light.position.set(x, y - 0.15, z);
      this.scene.add(light);
      this.dynamicLights.push(light);
      this.flickers.push({ light, base: 70, phase: Math.random() * 8, speed: 1.6 + Math.random() * 3 });
    }

    // cables between posts
    const cableMat = new THREE.LineBasicMaterial({ color: 0x090c0e, transparent: true, opacity: 0.8 });
    const cablePoints = [];
    for (let i = 0; i < 24; i++) {
      const t = i / 23;
      const x = -12 + t * 24;
      const y = 6.1 - Math.sin(t * Math.PI) * 1.1;
      cablePoints.push(new THREE.Vector3(x, y, 4 + Math.sin(t * 3) * 0.15));
    }
    const curve = new THREE.CatmullRomCurve3(cablePoints);
    const cableGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(60));
    this.scene.add(new THREE.Line(cableGeo, cableMat));

    // steam grate
    for (const [x, z] of [[-3, 7], [17, -11]]) {
      const g = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 1.2), this.mat.steelDark);
      g.position.set(x, 0.04, z);
      this.scene.add(g);
      this.steamVents.push(new THREE.Vector3(x, 0.2, z));
    }

    // scattered debris
    const debrisMat = new THREE.MeshStandardMaterial({ color: 0x3b3a34, roughness: 0.9, metalness: 0.2 });
    for (let i = 0; i < 26; i++) {
      const d = new THREE.Mesh(new THREE.BoxGeometry(0.1 + Math.random() * 0.35, 0.03 + Math.random() * 0.12, 0.1 + Math.random() * 0.4), debrisMat);
      d.position.set((Math.random() - 0.5) * 60, 0.05, (Math.random() - 0.5) * 60);
      d.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      d.castShadow = true;
      this.scene.add(d);
    }
  }

  buildForeground() {
    // watch towers in corners
    for (const [x, z] of [[-31, 31], [31, 31]]) {
      const base = this.addBox(2.6, 5.4, 2.6, this.mat.wallDark, x, 2.7, z, 0, true);
      const cabin = this.addBox(3.4, 1.3, 3.4, this.mat.steel, x, 6.2, z, 0, false);
      const roof = this.addBox(3.8, 0.16, 3.8, this.mat.steelDark, x, 6.95, z, 0, false);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 6), this.mat.steelDark);
        post.position.set(x + Math.cos(a) * 1.6, 7.7, z + Math.sin(a) * 1.6);
        this.scene.add(post);
      }
      const roofTop = this.addBox(4.2, 0.12, 4.2, this.mat.steelDark, x, 8.4, z, 0, false);
      base.castShadow = true;
      // searchlight glow
      const lamp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffd7a0, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
      lamp.position.set(x, 6.7, z);
      lamp.scale.setScalar(4);
      this.scene.add(lamp);
    }

    // fence pieces / razor wire hint
    const postMat = this.mat.steelDark;
    for (let i = 0; i < 14; i++) {
      const x = -34 + i * 5.2;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 2.2, 5), postMat);
      post.position.set(x, 1.1, 34.8);
      this.scene.add(post);
    }
    const wire = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-34, 2.1, 34.8), new THREE.Vector3(34, 2.2, 34.8)]),
      new THREE.LineBasicMaterial({ color: 0x20292d, transparent: true, opacity: 0.7 }),
    );
    this.scene.add(wire);
  }

  buildRain() {
    const count = 900;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 2 * 3);
    const ends = new Float32Array(count * 2);
    const r = mulberry32(21);
    for (let i = 0; i < count; i++) {
      const x = (r() - 0.5) * 54;
      const y = r() * 26;
      const z = (r() - 0.5) * 54;
      for (let j = 0; j < 2; j++) {
        const idx = (i * 2 + j) * 3;
        pos[idx] = x;
        pos[idx + 1] = y;
        pos[idx + 2] = z;
        ends[i * 2 + j] = j;
      }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aEnd', new THREE.BufferAttribute(ends, 1));
    const uniforms = { uTime: { value: 0 }, uOpacity: { value: 0.32 } };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aEnd;
        uniform float uTime;
        varying float vFade;
        void main(){
          vec3 p = position;
          p.y = mod(p.y - uTime * 15.0, 26.0);
          p.y += aEnd * 0.55;
          p.x += aEnd * 0.03;
          vFade = 0.35 + 0.65 * aEnd;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying float vFade;
        void main(){ gl_FragColor = vec4(0.62, 0.78, 0.9, uOpacity * vFade); }
      `,
    });
    const rain = new THREE.LineSegments(geo, mat);
    rain.frustumCulled = false;
    rain.position.set(0, 0, 0);
    this.scene.add(rain);
    this.rain = rain;
    this.rainUniforms = uniforms;
  }

  buildAtmosphere() {
    // floating dust / embers
    const count = 240;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const r = mulberry32(5);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (r() - 0.5) * 66;
      pos[i * 3 + 1] = 0.3 + r() * 9;
      pos[i * 3 + 2] = (r() - 0.5) * 66;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xb8d8e8, size: 0.045, transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending });
    const dust = new THREE.Points(geo, mat);
    this.scene.add(dust);
    this.dust = dust;

    // ground haze planes
    const hazeMat = new THREE.MeshBasicMaterial({ color: 0x8fb0c0, transparent: true, opacity: 0.028, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    for (let i = 0; i < 4; i++) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), hazeMat);
      p.rotation.x = -Math.PI / 2;
      p.position.y = 0.4 + i * 0.9;
      this.scene.add(p);
    }
  }

  getSpawnPoint(around, minDist = 12) {
    const list = this.spawnPoints.filter((p) => p.distanceTo(around) > minDist);
    return list[Math.floor(Math.random() * list.length)] || this.spawnPoints[0];
  }

  raycast(origin, dir, maxDist = 200) {
    const ray = new THREE.Ray(origin, dir);
    let best = null;
    const hit = new THREE.Vector3();
    for (const box of this.colliders) {
      if (ray.intersectBox(box, hit)) {
        const d = hit.distanceTo(origin);
        if (d < maxDist && (!best || d < best.distance)) {
          best = { distance: d, point: hit.clone(), normal: this.boxNormal(hit, box) };
        }
      }
    }
    if (dir.y < 0) {
      const t = -origin.y / dir.y;
      if (t > 0 && t < maxDist && (!best || t < best.distance)) {
        best = { distance: t, point: origin.clone().addScaledVector(dir, t), normal: new THREE.Vector3(0, 1, 0) };
      }
    }
    return best;
  }

  boxNormal(p, box) {
    const eps = 0.03;
    if (Math.abs(p.x - box.min.x) < eps) return new THREE.Vector3(-1, 0, 0);
    if (Math.abs(p.x - box.max.x) < eps) return new THREE.Vector3(1, 0, 0);
    if (Math.abs(p.z - box.min.z) < eps) return new THREE.Vector3(0, 0, -1);
    if (Math.abs(p.z - box.max.z) < eps) return new THREE.Vector3(0, 0, 1);
    if (Math.abs(p.y - box.min.y) < eps) return new THREE.Vector3(0, -1, 0);
    return new THREE.Vector3(0, 1, 0);
  }

  resolveCollision(pos, radius = 0.42) {
    for (const box of this.colliders) {
      if (pos.y > box.max.y + 0.1) continue;
      const cx = Math.max(box.min.x, Math.min(pos.x, box.max.x));
      const cz = Math.max(box.min.z, Math.min(pos.z, box.max.z));
      const dx = pos.x - cx;
      const dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < radius * radius) {
        if (d2 > 0.00001) {
          const d = Math.sqrt(d2);
          pos.x = cx + (dx / d) * radius;
          pos.z = cz + (dz / d) * radius;
        } else {
          const left = Math.abs(pos.x - box.min.x);
          const right = Math.abs(box.max.x - pos.x);
          const back = Math.abs(pos.z - box.min.z);
          const front = Math.abs(box.max.z - pos.z);
          const m = Math.min(left, right, back, front);
          if (m === left) pos.x = box.min.x - radius;
          else if (m === right) pos.x = box.max.x + radius;
          else if (m === back) pos.z = box.min.z - radius;
          else pos.z = box.max.z + radius;
        }
      }
    }
    pos.x = THREE.MathUtils.clamp(pos.x, -35.2, 35.2);
    pos.z = THREE.MathUtils.clamp(pos.z, -35.2, 35.2);
  }

  update(dt, camera, effects) {
    this.time += dt;
    const t = this.time;

    if (this.rainUniforms) {
      this.rainUniforms.uTime.value = t;
      if (camera) this.rain.position.set(camera.position.x, 0, camera.position.z);
    }
    if (this.dust) this.dust.rotation.y += dt * 0.006;

    if (this.radarDish) this.radarDish.rotation.y += dt * 0.9;
    if (this.holo) {
      this.holo.rotation.z += dt * 0.35;
      this.holo.material.opacity = 0.28 + Math.sin(t * 2.4) * 0.1;
    }
    if (this.beacon) {
      const on = Math.sin(t * 4) > 0.3;
      this.beacon.material.color.setHex(on ? C.red : 0x330000);
      this.beaconLight.intensity = on ? 12 : 1;
    }
    if (this.towerLight) this.towerLight.intensity = 92 + Math.sin(t * 2.1) * 14;

    if (this.searchlights) {
      for (const s of this.searchlights) {
        const a = s.base + Math.sin(t * 0.16 + s.phase) * 0.85;
        s.target.position.set(Math.cos(a) * 16, 0, Math.sin(a) * 16);
      }
    }

    for (const f of this.flickers) {
      const v = Math.sin(t * f.speed + f.phase) * 0.5 + 0.5;
      let k = 0.86 + v * 0.14;
      if (Math.sin(t * 11 + f.phase) > 0.985) k *= 0.25;
      f.light.intensity = f.base * k;
    }

    // lightning
    this.lightningTimer -= dt;
    if (this.lightningTimer <= 0) {
      this.lightning = 1;
      this.lightningTimer = 14 + Math.random() * 18;
      this._thunderQueued = true;
    }
    if (this.lightning > 0) {
      this.lightning = Math.max(0, this.lightning - dt * 3.2);
      const f = this.lightning * (0.5 + Math.random() * 0.5);
      if (this.moon) this.moon.intensity = 2.9 + f * 10;
    } else if (this.moon) {
      this.moon.intensity += (2.9 - this.moon.intensity) * Math.min(1, dt * 6);
    }

    // steam
    if (effects) {
      this._steamClock = (this._steamClock || 0) + dt;
      if (this._steamClock > 0.09) {
        this._steamClock = 0;
        for (const v of this.steamVents) {
          effects.smoke.spawn(
            v.x + (Math.random() - 0.5) * 0.3,
            v.y + Math.random() * 0.2,
            v.z + (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3,
            0.45 + Math.random() * 0.4,
            (Math.random() - 0.5) * 0.3,
            0.6 + Math.random() * 0.5,
            1.2 + Math.random() * 1.2,
            new THREE.Color(0x8a9ba4),
            0.12,
          );
        }
      }
    }
  }

  takeThunder() {
    if (this._thunderQueued) {
      this._thunderQueued = false;
      return true;
    }
    return false;
  }

  setQuality(level) {
    // level: 'high' | 'low'
    const high = level === 'high';
    if (this.moon) {
      this.moon.castShadow = high;
      this.moon.shadow.mapSize.set(high ? 2048 : 1024, high ? 2048 : 1024);
    }
    if (this.rain) this.rain.visible = true;
  }
}
