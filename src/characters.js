import * as THREE from 'three';

/* ============================================================
   Character cast — stylised, low-poly 3D figures built entirely
   from primitives and canvas-painted fabric. No external assets.
   ============================================================ */

export const CHARACTERS = {
  tanjiro: {
    id: 'tanjiro', name: 'TANJIRO KAMADO', short: 'TANJIRO', role: 'THE HUNTER',
    color: '#6e9a7a', accent: '#b83236', threat: 3,
    desc: 'Methodical. He closes in through the west hall. Watching him on camera can hold him still for a moment.',
    hint: 'Footsteps in the west hall.',
    room: 'stage', speed: 1
  },
  nezuko: {
    id: 'nezuko', name: 'NEZUKO KAMADO', short: 'NEZUKO', role: 'THE CRAWLER',
    color: '#c77c92', accent: '#ef9ab5', threat: 4,
    desc: 'She travels through the vent above the office. Torchlight — or a look at CAM 07 — makes her retreat.',
    hint: 'Something scrapes inside the vent.',
    room: 'dining', speed: 0.94
  },
  zenitsu: {
    id: 'zenitsu', name: 'ZENITSU AGATSUMA', short: 'ZENITSU', role: 'THE BOLT',
    color: '#d8bd5a', accent: '#f5e5a3', threat: 4,
    desc: 'Erratic and lightning-fast. He sprints down either hall with almost no warning. Seal the door the instant he arrives.',
    hint: 'A crack of static. Running feet.',
    room: 'dining', speed: 0.72
  },
  inosuke: {
    id: 'inosuke', name: 'INOSUKE HASHIBIRA', short: 'INOSUKE', role: 'THE BOAR',
    color: '#8b7967', accent: '#d3b786', threat: 4,
    desc: 'He pounds on the east door and drains power while he does it. Watching him on camera only makes him angrier.',
    hint: 'Heavy breathing from the east.',
    room: 'east', speed: 0.9
  },
  giyu: {
    id: 'giyu', name: 'GIYU TOMIOKA', short: 'GIYU', role: 'THE QUIET',
    color: '#5f9697', accent: '#b53a3e', threat: 5,
    desc: 'Silent. He only moves while your monitor is raised. Lower the camera and check the west door before it is too late.',
    hint: 'The hall light dies. Silence.',
    room: 'west', speed: 1.08
  },
  muzan: {
    id: 'muzan', name: 'MUZAN KIBUTSUJI', short: 'MUZAN', role: 'THE PROGENITOR',
    color: '#a0212b', accent: '#f0ded0', threat: 5,
    desc: 'He does not use doors. When he manifests inside the office, hold the torch beam on him until he dissolves.',
    hint: 'The air turns cold. Your eyes sting.',
    room: 'office', speed: 0
  }
};

const C = (hex) => new THREE.Color(hex);
const matCache = new Map();

function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.82,
    metalness: opts.metalness ?? 0.02,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    flatShading: !!opts.flatShading
  });
  matCache.set(key, m);
  return m;
}

function canvasMat(width, height, draw, opts = {}) {
  const cv = document.createElement('canvas');
  cv.width = width; cv.height = height;
  const ctx = cv.getContext('2d');
  draw(ctx, width, height);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return new THREE.MeshStandardMaterial({
    map: tex,
    roughness: opts.roughness ?? 0.88,
    metalness: 0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    side: opts.side ?? THREE.FrontSide
  });
}

function patternMaterial(base, pattern, size = 8, colors = []) {
  return canvasMat(256, 256, (ctx, w, h) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = pattern; ctx.lineWidth = 3;
    const s = w / size;
    if (colors[0] === 'check') {
      ctx.fillStyle = pattern;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if ((x + y) % 2 === 0) ctx.fillRect(x * s, y * s, s, s);
        }
      }
      ctx.strokeStyle = colors[1] || 'rgba(255,255,255,.12)'; ctx.lineWidth = 1;
      for (let i = 0; i <= size; i++) { ctx.beginPath(); ctx.moveTo(i * s, 0); ctx.lineTo(i * s, h); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * s); ctx.lineTo(w, i * s); ctx.stroke(); }
    } else if (colors[0] === 'tri') {
      ctx.fillStyle = pattern;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        ctx.beginPath();
        ctx.moveTo(x * s, y * s + s); ctx.lineTo(x * s + s / 2, y * s); ctx.lineTo(x * s + s, y * s + s); ctx.closePath(); ctx.fill();
      }
    } else if (colors[0] === 'geo') {
      ctx.fillStyle = pattern;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        if ((x * 3 + y) % 4 === 0) {
          ctx.beginPath(); ctx.moveTo(x * s, y * s); ctx.lineTo(x * s + s, y * s); ctx.lineTo(x * s + s / 2, y * s + s); ctx.closePath(); ctx.fill();
        }
      }
    } else if (colors[0] === 'floral') {
      ctx.fillStyle = pattern;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        const cx = x * s + s / 2, cy = y * s + s / 2;
        for (let p = 0; p < 5; p++) {
          ctx.beginPath();
          ctx.ellipse(cx + Math.cos(p * 1.256) * s * .22, cy + Math.sin(p * 1.256) * s * .22, s * .13, s * .07, p * 1.256, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  });
}

function mesh(geo, material, x = 0, y = 0, z = 0, parent = null) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const sphere = (r, s = 12, rs = 8) => new THREE.SphereGeometry(r, s, rs);
const cyl = (rt, rb, h, s = 10) => new THREE.CylinderGeometry(rt, rb, h, s);

function createFace(head, skin, opts = {}) {
  const eyeColor = opts.eyeColor || '#5c3130';
  const eyeWhite = mat(opts.white || '#efe8dc', { roughness: .6 });
  const iris = mat(eyeColor, { roughness: .5, emissive: opts.eyeGlow ? C(eyeColor) : 0x000000, emissiveIntensity: opts.eyeGlow ? .65 : 0 });
  const pupil = mat('#090706', { roughness: .5 });
  const brow = mat(opts.brow || '#241511', { roughness: .9 });
  const mouthMat = mat(opts.mouth || '#512a2b', { roughness: .8 });

  const face = new THREE.Group();
  head.add(face);

  [-1, 1].forEach(side => {
    const eye = new THREE.Group();
    eye.position.set(side * 0.083, 0.02, 0.196);
    const white = mesh(new THREE.CircleGeometry(0.047, 12), eyeWhite, 0, 0, 0, eye);
    white.scale.set(1, 1.18, 1);
    const ir = mesh(new THREE.CircleGeometry(0.027, 12), iris, 0, -0.002, 0.002, eye);
    ir.scale.set(0.9, 1.15, 1);
    const pu = mesh(new THREE.CircleGeometry(0.012, 10), pupil, 0, -0.002, 0.003, eye);
    pu.scale.set(0.8, 1.25, 1);
    const spark = mesh(new THREE.CircleGeometry(0.007, 8), mat('#ffffff', { emissive: 0xffffff, emissiveIntensity: .4 }), -0.008, 0.012, 0.005, eye);
    spark.scale.set(1, 1, 1);
    eye.rotation.y = -side * 0.12;
    face.add(eye);

    const eyebrow = mesh(box(0.085, 0.012, 0.008), brow, side * 0.083, 0.1, 0.2, face);
    eyebrow.rotation.z = side * (opts.browAngle ?? 0.04);
  });

  if (opts.nose !== false) {
    const nose = mesh(new THREE.ConeGeometry(0.02, 0.05, 5), mat(opts.noseColor || '#d9a283'), 0, -0.045, 0.215, face);
    nose.rotation.x = Math.PI / 2;
    nose.rotation.z = Math.PI;
  }
  if (opts.mouth !== false) {
    const m = mesh(box(0.068, 0.012, 0.006), mouthMat, 0, -0.112, 0.2, face);
    m.scale.set(1, 1, 1);
  }
  return face;
}

function hairCap(head, color, scaleY = 1) {
  const g = new THREE.Group();
  head.add(g);
  const cap = mesh(new THREE.SphereGeometry(0.236, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), mat(color, { roughness: .9, flatShading: true }), 0, 0.018, -0.004, g);
  cap.scale.set(1.02, 1.05 * scaleY, 1.02);
  return g;
}

function bangs(head, color, count = 5, length = 0.12, spread = 0.18) {
  const m = mat(color, { roughness: .9, flatShading: true });
  for (let i = 0; i < count; i++) {
    const b = mesh(new THREE.ConeGeometry(0.045, length + Math.random() * 0.05, 4), m, -spread + (i / (count - 1)) * spread * 2, 0.13 - 0.02 * Math.sin(i), 0.205, head);
    b.rotation.x = Math.PI * 0.96;
    b.rotation.z = (i - (count - 1) / 2) * 0.12;
  }
}

function sideLocks(head, color, length = .3) {
  const m = mat(color, { roughness: .9, flatShading: true });
  [-1, 1].forEach(side => {
    const lock = mesh(box(0.06, length, 0.07), m, side * 0.215, 0.02 - length * .22, 0.03, head);
    lock.rotation.z = side * 0.08;
  });
}

function makeBody(char, uniformMat, skinMat, opts = {}) {
  const torso = new THREE.Group();
  torso.position.y = 0.82;
  torso.userData.rigPart = 'torso';
  char.add(torso);

  const chest = mesh(box(0.48, 0.6, 0.27), uniformMat, 0, 0.29, 0, torso);
  chest.scale.set(1, 1, 1);
  mesh(box(0.42, 0.08, 0.25), mat(opts.belt || '#2a2521'), 0, 0.02, 0, torso);

  // neck
  mesh(cyl(0.075, 0.085, 0.11, 8), skinMat, 0, 0.64, 0, torso);

  // arms with pivots
  const armL = new THREE.Group();
  const armR = new THREE.Group();
  armL.position.set(-0.29, 0.52, 0);
  armR.position.set(0.29, 0.52, 0);
  armL.userData.rigPart = 'armL';
  armR.userData.rigPart = 'armR';
  torso.add(armL, armR);
  [armL, armR].forEach((arm, i) => {
    const sleeve = mesh(box(0.14, 0.33, 0.17), uniformMat, 0, -0.16, 0, arm);
    sleeve.scale.set(1, 1, 1);
    const fore = mesh(cyl(0.045, 0.055, 0.27, 8), opts.bareArms ? skinMat : uniformMat, 0, -0.43, 0, arm);
    void sleeve; void fore;
    const hand = mesh(sphere(0.062, 8, 6), skinMat, 0, -0.58, 0, arm);
    hand.scale.set(0.9, 1.2, 0.75);
    arm.rotation.z = i === 0 ? 0.04 : -0.04;
  });

  // legs
  const legL = new THREE.Group();
  const legR = new THREE.Group();
  legL.position.set(-0.125, 0.82, 0);
  legR.position.set(0.125, 0.82, 0);
  legL.userData.rigPart = 'legL';
  legR.userData.rigPart = 'legR';
  char.add(legL, legR);
  const trouserMat = opts.trouserMat || mat(opts.trouser || '#17181b');
  [legL, legR].forEach(leg => {
    mesh(cyl(0.078, 0.065, 0.73, 8), trouserMat, 0, -0.37, 0, leg);
    const shoe = mesh(box(0.16, 0.1, 0.27), mat(opts.shoe || '#121314'), 0, -0.755, 0.055, leg);
    shoe.castShadow = true;
  });

  // head
  const headGroup = new THREE.Group();
  headGroup.position.y = 1.55;
  headGroup.userData.rigPart = 'head';
  char.add(headGroup);
  const headMesh = mesh(sphere(0.225, 18, 14), skinMat, 0, 0, 0, headGroup);
  headMesh.scale.set(0.95, 1.02, 0.94);
  createFace(headGroup, skinMat, opts.face || {});
  return { torso, head: headGroup, armL, armR, legL, legR };
}

function addHaori(torso, material, color, opts = {}) {
  const frontL = mesh(box(0.12, 0.64, 0.045), material, -0.2, 0.3, 0.14, torso);
  const frontR = mesh(box(0.12, 0.64, 0.045), material, 0.2, 0.3, 0.14, torso);
  const back = mesh(box(0.52, 0.64, 0.04), material, 0, 0.3, -0.145, torso);
  const shoulderL = mesh(box(0.18, 0.08, 0.3), material, -0.26, 0.59, 0, torso);
  const shoulderR = mesh(box(0.18, 0.08, 0.3), material, 0.26, 0.59, 0, torso);
  frontL.rotation.z = -0.03; frontR.rotation.z = 0.03;
  void color; void opts; void shoulderL; void shoulderR;
}

function addSword(char, opts = {}) {
  const sword = new THREE.Group();
  const sheath = mesh(box(0.032, 0.72, 0.055), mat(opts.sheath || '#171a1a', { roughness: .5, metalness: .15 }), 0, 0, 0, sword);
  sheath.rotation.z = opts.angle ?? 0.22;
  const guard = mesh(cyl(0.065, 0.065, 0.018, 12), mat('#b89a5b', { metalness: .7, roughness: .3 }), 0.075, 0.355, 0, sword);
  guard.rotation.z = 0.22;
  const handle = mesh(box(0.035, 0.23, 0.045), mat(opts.handle || '#3b2721'), 0.11, 0.47, 0, sword);
  handle.rotation.z = 0.22;
  sword.position.set(opts.x ?? 0.31, 1.0, opts.z ?? -0.02);
  sword.rotation.z = opts.rot ?? -0.2;
  char.add(sword);
  return sword;
}

function tanjiro() {
  const g = new THREE.Group();
  const skin = mat('#e7b18c', { roughness: .68 });
  const uniform = mat('#171a1c', { roughness: .9 });
  const check = patternMaterial('#1b3b2b', '#0e1814', 8, ['check', 'rgba(207,210,180,.22)']);
  const parts = makeBody(g, uniform, skin, { face: { eyeColor: '#7b2f2c', brow: '#2a1011', browAngle: 0.09 }, trouser: '#17191a', belt: '#d9d0bb' });
  addHaori(parts.torso, check, 'green');
  const h = parts.head;
  hairCap(h, '#2a1111');
  bangs(h, '#2a1111', 6, 0.13, 0.17);
  sideLocks(h, '#2a1111', 0.20);
  // forehead scar
  const scar = mesh(new THREE.CircleGeometry(0.055, 3), mat('#9d342e', { roughness: .85 }), 0.07, 0.13, 0.203, h);
  scar.scale.set(1, .8, 1);
  scar.rotation.z = 0.6;
  // hanafuda earrings
  [-1, 1].forEach(side => {
    const e = new THREE.Group();
    e.position.set(side * 0.225, -0.02, 0);
    mesh(box(0.004, 0.09, 0.004), mat('#c6a86d', { metalness: .5 }), 0, -0.045, 0, e);
    const card = mesh(box(0.075, 0.13, 0.008), mat('#efe3cc'), side * 0.04, -0.13, 0, e);
    const sun = mesh(new THREE.CircleGeometry(0.025, 10), mat('#b5252b'), side * 0.04, -0.13, 0.006, e);
    void card; void sun;
    g.add(e);
  });
  addSword(g, { angle: 0.25, x: -0.33, rot: 0.2 });
  return g;
}

function nezuko() {
  const g = new THREE.Group();
  const skin = mat('#f1c4a5', { roughness: .62 });
  const kimono = patternMaterial('#a65368', 'rgba(232,184,197,.18)', 9, ['floral']);
  const obi = mat('#482231', { roughness: .8 });
  const parts = makeBody(g, kimono, skin, { face: { eyeColor: '#d65e82', brow: '#2a1114', mouth: '#6e3039', eyeGlow: false }, trouser: '#6f3144', belt: '#482231', shoe: '#5f2434' });
  const h = parts.head;
  hairCap(h, '#1b1416');
  bangs(h, '#1b1416', 4, 0.1, 0.16);
  sideLocks(h, '#1b1416', 0.28);
  // long hair
  const backHair = mesh(box(0.34, 0.68, 0.13), mat('#1b1416', { roughness: .95, flatShading: true }), 0, -0.22, -0.13, h);
  backHair.rotation.x = -0.08;
  for (let i = 0; i < 3; i++) {
    const lock = mesh(new THREE.ConeGeometry(0.07, 0.34, 4), mat('#1b1416', { flatShading: true }), (i - 1) * .11, -0.48, -0.12, h);
    lock.rotation.x = 0.05;
  }
  // ribbon
  const ribbon = mesh(box(0.21, 0.045, 0.02), mat('#d79a7a'), 0.1, 0.17, -0.22, h);
  ribbon.rotation.z = 0.18;
  // bamboo muzzle
  const bamboo = mesh(cyl(0.026, 0.026, 0.25, 8), mat('#b4a267', { roughness: .75 }), 0, -0.08, 0.212, h);
  bamboo.rotation.z = Math.PI / 2;
  const band = mesh(box(0.012, 0.22, 0.022), mat('#4c3e27'), 0, -0.02, 0.215, h);
  band.rotation.z = Math.PI / 2;
  // sleeves
  const sleeveMat = kimono;
  [-1, 1].forEach(side => {
    const sleeve = mesh(box(0.20, 0.46, 0.22), sleeveMat, side * 0.34, 1.15, 0, g);
    sleeve.rotation.z = side * 0.06;
  });
  void obi; void parts;
  return g;
}

function zenitsu() {
  const g = new THREE.Group();
  const skin = mat('#efbf99', { roughness: .65 });
  const uniform = mat('#151719', { roughness: .9 });
  const haori = patternMaterial('#d2b04f', '#f0e6c7', 7, ['tri']);
  const parts = makeBody(g, uniform, skin, { face: { eyeColor: '#9a692a', brow: '#6b4a17', mouth: '#6e3732' }, trouser: '#17191a', belt: '#e6ddc5' });
  addHaori(parts.torso, haori, 'yellow');
  const h = parts.head;
  hairCap(h, '#e1bf56');
  bangs(h, '#e1bf56', 5, 0.15, 0.19);
  sideLocks(h, '#e1bf56', 0.19);
  for (let i = 0; i < 4; i++) {
    const spike = mesh(new THREE.ConeGeometry(0.045, 0.2, 4), mat('#e1bf56', { flatShading: true }), (i - 1.5) * 0.09, 0.19, 0.16, h);
    spike.rotation.x = 0.55;
    spike.rotation.z = (i - 1.5) * .12;
  }
  addSword(g, { angle: 0.29, x: 0.35, rot: -0.24, handle: '#d5a648', sheath: '#27211b' });
  return g;
}

function inosuke() {
  const g = new THREE.Group();
  const skin = mat('#e8b18d', { roughness: .7 });
  const uniform = mat('#8f745e', { roughness: .95 });
  const parts = makeBody(g, uniform, skin, { bareArms: true, face: { eyeColor: '#436f60', brow: '#251b17', mouth: false, nose: false }, trouser: '#40352c', belt: '#2e251f', shoe: '#2a2420' });
  // bare chest
  parts.torso.children[0].material = skin;
  const chest = parts.torso.children[0];
  chest.scale.set(1.04, 1.03, 1.02);
  // fur pelt around waist
  const furMat = mat('#51443a', { roughness: 1, flatShading: true });
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2;
    const tuft = mesh(new THREE.ConeGeometry(0.06, 0.18, 4), furMat, Math.cos(a) * .25, 0.84, Math.sin(a) * .16, g);
    tuft.rotation.x = Math.PI + Math.sin(a) * .3;
    tuft.rotation.z = Math.cos(a) * .3;
  }
  // boar mask
  const mask = new THREE.Group();
  mask.position.y = 1.55;
  mask.userData.rigPart = 'head';
  g.add(mask);
  parts.head.userData.rigPart = '';
  const boar = mesh(sphere(0.31, 16, 12), mat('#7b6a5e', { roughness: .92, flatShading: true }), 0, 0.02, 0, mask);
  boar.scale.set(1, .96, 1.04);
  const snout = mesh(cyl(0.13, 0.18, 0.23, 8), mat('#9b8676', { roughness: .9 }), 0, -0.07, 0.29, mask);
  snout.rotation.x = Math.PI / 2;
  const nose = mesh(box(0.15, 0.1, 0.04), mat('#3b2f2b', { roughness: .8 }), 0, -0.04, 0.42, mask);
  // nostrils
  [-1, 1].forEach(side => mesh(sphere(0.025, 8, 6), mat('#171313'), side * .045, -0.04, 0.444, mask));
  // tusks
  [-1, 1].forEach(side => {
    const tusk = mesh(new THREE.ConeGeometry(0.035, 0.2, 5), mat('#e8dfca', { roughness: .5 }), side * .15, -0.19, 0.29, mask);
    tusk.rotation.x = Math.PI;
    tusk.rotation.z = side * 0.35;
  });
  // eye holes
  [-1, 1].forEach(side => {
    const eye = mesh(sphere(0.06, 8, 6), mat('#17120f'), side * .12, 0.1, 0.263, mask);
    eye.scale.set(1.2, .7, .5);
    const glow = mesh(sphere(0.023, 8, 6), mat('#8bae84', { emissive: 0x5f7d55, emissiveIntensity: .5 }), side * .12, 0.1, 0.292, mask);
    void glow;
  });
  // ears
  [-1, 1].forEach(side => {
    const ear = mesh(new THREE.ConeGeometry(0.11, 0.2, 4), mat('#7b6a5e', { flatShading: true }), side * .31, 0.16, -0.01, mask);
    ear.rotation.z = side * -0.8;
  });
  // hair tufts
  for (let i = 0; i < 4; i++) {
    const hair = mesh(new THREE.ConeGeometry(0.05, 0.22, 4), mat('#241c18', { flatShading: true }), (i - 1.5) * .11, 0.3, -0.15, mask);
    hair.rotation.x = -0.7;
  }
  // jagged swords
  [-1, 1].forEach((side, i) => {
    const s = new THREE.Group();
    s.position.set(side * .32, 1.05, -0.08);
    s.rotation.z = side * .38;
    const blade = mesh(box(0.075, 0.86, 0.025), mat('#9ca4a2', { roughness: .3, metalness: .75 }), 0, 0.2, 0, s);
    for (let j = 0; j < 5; j++) {
      const tooth = mesh(new THREE.ConeGeometry(0.035, 0.08, 3), mat('#aeb7b4', { metalness: .7, roughness: .35 }), 0.075, -0.15 + j * 0.18, 0, s);
      tooth.rotation.z = -Math.PI / 2;
    }
    const hilt = mesh(box(0.06, 0.25, 0.06), mat('#3f2f27'), 0, -0.35, 0, s);
    void blade; void hilt; void i;
    g.add(s);
  });
  return g;
}

function giyu() {
  const g = new THREE.Group();
  const skin = mat('#e9b693', { roughness: .67 });
  const uniform = mat('#15181b', { roughness: .9 });
  // split haori: one side teal geometric, other deep red
  const teal = patternMaterial('#3e7f80', '#234d4d', 7, ['geo']);
  const red = mat('#6e2429', { roughness: .92 });
  const parts = makeBody(g, uniform, skin, { face: { eyeColor: '#3f6d76', brow: '#1c1716', mouth: '#613234', browAngle: 0.13 }, trouser: '#17191b', belt: '#d9d0bb' });
  addHaori(parts.torso, teal, 'teal');
  const back = parts.torso.children[6];
  if (back) back.material = teal;
  // red half panel
  const redPanel = mesh(box(0.27, 0.64, 0.04), red, -0.14, 0.3, -0.15, parts.torso);
  void redPanel;
  const h = parts.head;
  hairCap(h, '#171415');
  bangs(h, '#171415', 5, 0.11, 0.17);
  sideLocks(h, '#171415', 0.22);
  // low ponytail
  const tail = mesh(cyl(0.06, 0.03, 0.42, 6), mat('#171415', { flatShading: true }), 0, -0.13, -0.22, h);
  tail.rotation.x = -0.25;
  addSword(g, { angle: 0.18, x: 0.34, rot: -0.3, handle: '#375d5b', sheath: '#1b2424' });
  return g;
}

function muzan() {
  const g = new THREE.Group();
  const skin = mat('#e7ded1', { roughness: .62 });
  const suit = mat('#d9d2c5', { roughness: .77 });
  const shirt = mat('#171416', { roughness: .75 });
  const parts = makeBody(g, suit, skin, { face: { eyeColor: '#bf1e2b', brow: '#1a1113', mouth: '#6a2c31', eyeGlow: true, noseColor: '#d5cab9' }, trouser: '#d0c9bd', belt: '#171416', shoe: '#1b1818' });
  // shirt + tie visible
  const shirtPanel = mesh(box(0.22, 0.52, 0.02), shirt, 0, 0.3, 0.145, parts.torso);
  const tie = mesh(box(0.045, 0.35, 0.015), mat('#8e1720'), 0, 0.32, 0.158, parts.torso);
  tie.rotation.z = 0.02;
  const lapelL = mesh(box(0.08, 0.25, 0.02), mat('#b9b1a4'), -0.11, 0.4, 0.15, parts.torso);
  const lapelR = mesh(box(0.08, 0.25, 0.02), mat('#b9b1a4'), 0.11, 0.4, 0.15, parts.torso);
  lapelL.rotation.z = -0.15; lapelR.rotation.z = 0.15;
  void shirtPanel;
  // hands pale
  // head
  const h = parts.head;
  hairCap(h, '#171315');
  bangs(h, '#171315', 5, 0.12, 0.16);
  sideLocks(h, '#171315', 0.2);
  // fedora
  const brim = mesh(cyl(0.32, 0.34, 0.025, 20), mat('#e2dbce', { roughness: .75 }), 0, 0.18, 0, h);
  const crown = mesh(cyl(0.17, 0.21, 0.18, 18), mat('#e2dbce', { roughness: .75 }), 0, 0.27, 0, h);
  mesh(cyl(0.213, 0.216, 0.04, 18), mat('#541018', { roughness: .8 }), 0, 0.22, 0, h);
  brim.rotation.z = 0.02; crown.rotation.z = -0.02;
  // eyes glow
  const glow = new THREE.PointLight(0xd01a27, 0.8, 1.5, 2);
  glow.position.set(0, 0.02, 0.32);
  h.add(glow);
  // small red tendril motifs at shoulders
  [-1, 1].forEach(side => {
    const tendril = mesh(new THREE.ConeGeometry(0.035, 0.45, 5), mat('#6f0b14', { roughness: .5, emissive: 0x4a050a, emissiveIntensity: .3 }), side * .32, 1.24, -0.1, g);
    tendril.rotation.z = side * -0.55;
    tendril.rotation.x = 0.2;
  });
  return g;
}

const builders = { tanjiro, nezuko, zenitsu, inosuke, giyu, muzan };

export function createCharacter(id) {
  const builder = builders[id];
  if (!builder) throw new Error('Unknown character ' + id);
  const group = builder();
  group.name = id;
  group.userData.characterId = id;
  group.userData.baseY = 0;
  group.userData.phase = Math.random() * Math.PI * 2;
  group.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
  });
  return group;
}

const tempV = new THREE.Vector3();

export function animateCharacter(group, time, mode = 'idle') {
  const d = group.userData;
  if (!d.parts) {
    // discover rig from naming conventions by traversing shape positions
    d.parts = findParts(group);
  }
  const p = d.parts;
  if (!p) return;
  const phase = d.phase || 0;
  const t = time + phase;
  let walk = 0;
  if (mode === 'walk') walk = Math.sin(t * 8) * 0.65;
  else if (mode === 'crawl') walk = Math.sin(t * 5) * 0.3;
  else if (mode === 'menace') walk = Math.sin(t * 1.8) * 0.22;
  else if (mode === 'jumpscare') walk = Math.sin(t * 24) * 0.4;
  else walk = Math.sin(t * 1.4) * 0.06;

  if (p.legL) p.legL.rotation.x = walk;
  if (p.legR) p.legR.rotation.x = -walk;
  if (p.armL) p.armL.rotation.x = -walk * 0.85 + (mode === 'menace' ? 0.1 : 0);
  if (p.armR) p.armR.rotation.x = walk * 0.85 + (mode === 'menace' ? -0.1 : 0);
  if (p.armL) p.armL.rotation.z = 0.04 + (mode === 'jumpscare' ? 0.9 : 0);
  if (p.armR) p.armR.rotation.z = -0.04 - (mode === 'jumpscare' ? 0.9 : 0);

  if (p.torso) {
    p.torso.position.y = 0.82 + Math.sin(t * 1.9) * (mode === 'walk' ? 0.014 : 0.007);
    p.torso.rotation.z = Math.sin(t * 1.2) * 0.012;
    p.torso.rotation.x = mode === 'crawl' ? 0.25 : (mode === 'jumpscare' ? 0.14 : 0);
  }
  if (p.head) {
    p.head.rotation.y = Math.sin(t * 0.7) * 0.13;
    p.head.rotation.x = Math.sin(t * 0.55) * 0.035 + (mode === 'menace' ? -0.08 : 0);
    p.head.position.y = 1.55 + (mode === 'walk' ? Math.sin(t * 8) * 0.012 : Math.sin(t * 1.7) * 0.008);
    if (mode === 'jumpscare') {
      p.head.rotation.x = -0.05 + Math.sin(t * 20) * 0.06;
      p.head.rotation.z = Math.sin(t * 13) * 0.05;
    }
  }
}

function findParts(group) {
  const parts = {};
  group.traverse(o => {
    if (o.userData && o.userData.rigPart) parts[o.userData.rigPart] = o;
  });
  group.userData.parts = parts;
  return parts;
}

/* Utility for framing a character. */
export function characterHeight(id) {
  return id === 'inosuke' ? 1.92 : id === 'muzan' ? 1.86 : 1.78;
}
