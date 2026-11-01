import * as THREE from 'three';
import { CHARACTERS, createCharacter, animateCharacter } from './characters.js';

/* ============================================================
   Wisteria Entertainment — a procedurally constructed facility.
   One scene, one renderer. The office camera and every CCTV feed
   are real 3D views of the same space.
   ============================================================ */

export const CAMERA_DEFS = {
  stage:   { index: 1, label: 'CAM 01', name: 'SHOW STAGE', pos: [0, 3.05, -19.4], target: [0, 1.35, -29.6], fov: 56 },
  dining:  { index: 2, label: 'CAM 02', name: 'DINING HALL', pos: [0, 2.75, -6.2], target: [0, 1.1, -15.2], fov: 64 },
  west:    { index: 3, label: 'CAM 03', name: 'WEST HALL', pos: [-17.2, 2.25, 0.15], target: [-8.4, 1.4, 0.1], fov: 57 },
  east:    { index: 4, label: 'CAM 04', name: 'EAST HALL', pos: [17.2, 2.25, 0.15], target: [8.4, 1.4, 0.1], fov: 57 },
  kitchen: { index: 5, label: 'CAM 05', name: 'KITCHEN', pos: [8.35, 2.55, -7.1], target: [16.5, 0.95, -13.5], fov: 61 },
  storage: { index: 6, label: 'CAM 06', name: 'STORAGE', pos: [-8.35, 2.55, -7.1], target: [-16.5, 0.95, -13.5], fov: 61 },
  vent:    { index: 7, label: 'CAM 07', name: 'VENT ACCESS', pos: [0, 2.52, 13.9], target: [0, 2.12, 6.05], fov: 69 }
};

export const ROOM_ANCHORS = {
  stage: [
    { p: [-4.6, 0.57, -28.5], r: 0 }, { p: [-2.75, 0.57, -28.1], r: 0.06 },
    { p: [-0.9, 0.57, -28.6], r: -0.04 }, { p: [0.95, 0.57, -28.2], r: 0.03 },
    { p: [2.8, 0.57, -28.6], r: -0.02 }, { p: [4.65, 0.57, -28.3], r: 0.05 }
  ],
  dining: [
    { p: [-4.3, 0, -10.8], r: 0.3 }, { p: [3.9, 0, -12.4], r: -0.4 },
    { p: [-2.1, 0, -16.1], r: 0.1 }, { p: [2.4, 0, -9.1], r: -0.1 },
    { p: [-6.1, 0, -13.9], r: 0.5 }, { p: [6.2, 0, -15.7], r: -0.5 }
  ],
  west: [
    { p: [-11.4, 0, 0.1], r: -Math.PI / 2 }, { p: [-9.2, 0, -0.3], r: -Math.PI / 2 },
    { p: [-13.3, 0, 0.35], r: -Math.PI / 2 }, { p: [-15.2, 0, -0.2], r: -Math.PI / 2 },
    { p: [-10.3, 0, 0.4], r: -Math.PI / 2 }, { p: [-12.4, 0, -0.4], r: -Math.PI / 2 }
  ],
  east: [
    { p: [11.4, 0, 0.1], r: Math.PI / 2 }, { p: [9.2, 0, -0.3], r: Math.PI / 2 },
    { p: [13.3, 0, 0.35], r: Math.PI / 2 }, { p: [15.2, 0, -0.2], r: Math.PI / 2 },
    { p: [10.3, 0, 0.4], r: Math.PI / 2 }, { p: [12.4, 0, -0.4], r: Math.PI / 2 }
  ],
  kitchen: [
    { p: [15.4, 0, -11.4], r: 0.5 }, { p: [12.4, 0, -10.5], r: 0.3 },
    { p: [17.2, 0, -14.8], r: -0.3 }, { p: [14.3, 0, -15.8], r: -0.1 },
    { p: [18.1, 0, -9.5], r: -0.8 }, { p: [11.5, 0, -15.2], r: 0.6 }
  ],
  storage: [
    { p: [-15.4, 0, -11.4], r: 2.5 }, { p: [-12.4, 0, -10.5], r: 2.7 },
    { p: [-17.2, 0, -14.8], r: 3.1 }, { p: [-14.3, 0, -15.8], r: 2.9 },
    { p: [-18.1, 0, -9.5], r: 3.6 }, { p: [-11.5, 0, -15.2], r: 2.3 }
  ],
  vent: [{ p: [0, 1.24, 10.2], r: 0, s: 0.78 }],
  westDoor: [{ p: [-5.75, 0, 0.55], r: Math.PI / 2 }],
  eastDoor: [{ p: [5.75, 0, 0.55], r: -Math.PI / 2 }],
  office: [{ p: [0, 0, 1.6], r: 0 }]
};

const ROOM_SLOTS = {
  stage: 6, dining: 6, west: 6, east: 6, kitchen: 6, storage: 6,
  vent: 1, westDoor: 1, eastDoor: 1, office: 1
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function canvasTexture(w, h, draw, repeatX = 1, repeatY = 1) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  return tex;
}

function noise(ctx, w, h, amount, alpha) {
  for (let i = 0; i < amount; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const s = Math.random() * 2 + .3;
    ctx.fillStyle = `rgba(${Math.random() > .5 ? 255 : 0},${Math.random() > .5 ? 240 : 0},${Math.random() > .5 ? 220 : 0},${Math.random() * alpha})`;
    ctx.fillRect(x, y, s, s);
  }
}

function makeWallTexture(base = '#756c58', accent = '#514937') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    // fanned plaster noise
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(20,18,14,${Math.random() * .045})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 8, 0, Math.PI * 2);
      ctx.fill();
    }
    // water stains
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * w, y = Math.random() * h * .7;
      const g = ctx.createRadialGradient(x, y, 1, x, y, 40 + Math.random() * 55);
      g.addColorStop(0, 'rgba(42,34,23,.13)');
      g.addColorStop(1, 'rgba(42,34,23,0)');
      ctx.fillStyle = g; ctx.fillRect(x - 100, y - 100, 200, 200);
    }
    // wainscot
    ctx.fillStyle = accent; ctx.fillRect(0, h * .68, w, h * .32);
    ctx.fillStyle = 'rgba(235,220,190,.08)'; ctx.fillRect(0, h * .68, w, 3);
    ctx.strokeStyle = 'rgba(0,0,0,.13)'; ctx.lineWidth = 2;
    for (let x = 0; x < w; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, h * .69); ctx.lineTo(x, h); ctx.stroke();
    }
    noise(ctx, w, h, 800, .12);
  }, 2, 1);
}

function makeFloorTexture(base = '#332c24', plank = '#201b16') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    const rowH = 42;
    for (let y = 0; y < h; y += rowH) {
      const off = (y / rowH) % 2 === 0 ? 0 : 70;
      for (let x = -off; x < w; x += 140) {
        ctx.fillStyle = `rgba(${20 + Math.random() * 18},${17 + Math.random() * 14},${13 + Math.random() * 10},.35)`;
        ctx.fillRect(x + 2, y + 2, 136, rowH - 4);
        ctx.strokeStyle = 'rgba(5,4,3,.35)'; ctx.lineWidth = 2;
        ctx.strokeRect(x, y, 140, rowH);
      }
    }
    for (let i = 0; i < 40; i++) {
      ctx.strokeStyle = `rgba(10,8,6,${Math.random() * .18})`;
      ctx.beginPath();
      const y = Math.random() * h;
      ctx.moveTo(0, y); ctx.bezierCurveTo(w * .3, y + 6, w * .7, y - 4, w, y + 2); ctx.stroke();
    }
    noise(ctx, w, h, 900, .14);
  }, 4, 4);
}

function makeCeilingTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#24231e'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(0,0,0,.3)'; ctx.lineWidth = 3;
    for (let x = 0; x < w; x += 128) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 128) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * w, y = Math.random() * h;
      const g = ctx.createRadialGradient(x, y, 1, x, y, 35);
      g.addColorStop(0, 'rgba(5,5,4,.35)'); g.addColorStop(1, 'rgba(5,5,4,0)');
      ctx.fillStyle = g; ctx.fillRect(x - 40, y - 40, 80, 80);
    }
    noise(ctx, w, h, 500, .1);
  }, 5, 5);
}

function makeCurtainTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#420c12'; ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 24) {
      const g = ctx.createLinearGradient(x, 0, x + 24, 0);
      g.addColorStop(0, 'rgba(14,2,3,.55)');
      g.addColorStop(.45, 'rgba(180,40,48,.22)');
      g.addColorStop(.7, 'rgba(90,12,18,.2)');
      g.addColorStop(1, 'rgba(8,1,2,.5)');
      ctx.fillStyle = g; ctx.fillRect(x, 0, 24, h);
    }
    ctx.fillStyle = 'rgba(235,195,90,.1)';
    for (let i = 0; i < 30; i++) ctx.fillRect(Math.random() * w, Math.random() * h, 1, 2);
    noise(ctx, w, h, 500, .1);
  }, 3, 1);
}

function makeCheckTexture(a = '#c9bea6', b = '#292a27') {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = a; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = b;
    const s = 32;
    for (let y = 0; y < h / s; y++) for (let x = 0; x < w / s; x++) {
      if ((x + y) % 2 === 0) ctx.fillRect(x * s, y * s, s, s);
    }
    noise(ctx, w, h, 300, .12);
  }, 4, 4);
}

function makePosterTexture(type = 0) {
  const palettes = [
    ['#7e1a20', '#e8ddc4', '#131413'],
    ['#c7b17a', '#1a1a18', '#91222a'],
    ['#263c39', '#d7ceb6', '#9a2931']
  ];
  const p = palettes[type % 3];
  return canvasTexture(384, 512, (ctx, w, h) => {
    ctx.fillStyle = p[0]; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = p[1]; ctx.lineWidth = 3; ctx.strokeRect(16, 16, w - 32, h - 32);
    ctx.fillStyle = p[1];
    ctx.font = 'bold 42px serif'; ctx.textAlign = 'center';
    ctx.fillText(type === 0 ? 'NIGHT' : type === 1 ? 'SMILE' : 'DON\'T', w / 2, 118);
    ctx.fillText(type === 0 ? 'SHIFT' : type === 1 ? 'FOR THE' : 'LOOK', w / 2, 167);
    ctx.fillText(type === 0 ? 'CREW' : type === 1 ? 'CAMERA' : 'BACK', w / 2, 216);
    ctx.beginPath();
    ctx.arc(w / 2, h * .57, 91, 0, Math.PI * 2);
    ctx.fillStyle = p[2]; ctx.fill();
    ctx.fillStyle = p[1];
    ctx.beginPath(); ctx.arc(w / 2, h * .57, 68, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = p[0];
    ctx.beginPath(); ctx.arc(w / 2 - 16, h * .55, 13, 0, Math.PI * 2); ctx.arc(w / 2 + 17, h * .55, 13, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = p[0]; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(w / 2, h * .61, 20, .15, Math.PI - .15); ctx.stroke();
    ctx.font = '16px monospace'; ctx.fillStyle = p[1];
    ctx.fillText('WISTERIA ENTERTAINMENT CO.', w / 2, h - 56);
    ctx.font = '11px monospace';
    ctx.fillText('EMPLOYEES ONLY · NIGHT DIVISION', w / 2, h - 32);
    noise(ctx, w, h, 500, .1);
  });
}

function makeBannerTexture() {
  return canvasTexture(1024, 256, (ctx, w, h) => {
    ctx.fillStyle = '#0d0e0d'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#82151c'; ctx.lineWidth = 4; ctx.strokeRect(9, 9, w - 18, h - 18);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#d8ceb7'; ctx.font = 'bold 92px serif';
    ctx.fillText('KIMETSU', w / 2 - 180, 126);
    ctx.fillStyle = '#b8212b'; ctx.font = 'bold 108px serif';
    ctx.fillText('夜', w / 2 + 122, 132);
    ctx.fillStyle = '#b7ac94'; ctx.font = '26px monospace';
    ctx.fillText('N I G H T M A R E   S H I F T   ·   N I G H T   A T T R A C T I O N', w / 2, 184);
    noise(ctx, w, h, 300, .1);
  });
}

function makeMetalTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#383b39'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) {
      ctx.fillStyle = y % 32 === 0 ? 'rgba(220,210,185,.05)' : 'rgba(0,0,0,.15)';
      ctx.fillRect(0, y, w, 8);
    }
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = 'rgba(20,18,14,.3)';
      ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, 12 + Math.random() * 26, 0, Math.PI * 2); ctx.fill();
    }
    noise(ctx, w, h, 700, .12);
  }, 2, 2);
}

function makeWoodTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#4a3524'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = `rgba(20,12,7,${.05 + Math.random() * .12})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      const x = Math.random() * w;
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 20, h * .3, x - 20, h * .7, x + 5, h);
      ctx.stroke();
    }
    noise(ctx, w, h, 300, .1);
  }, 2, 2);
}

function makeDuctTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#4a4c48'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 42) {
      ctx.fillStyle = 'rgba(10,10,9,.28)'; ctx.fillRect(0, y, w, 5);
      ctx.fillStyle = 'rgba(210,205,190,.06)'; ctx.fillRect(0, y + 5, w, 2);
    }
    for (let x = 20; x < w; x += 80) {
      ctx.fillStyle = 'rgba(20,20,18,.6)';
      ctx.beginPath(); ctx.arc(x, 22, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x, h - 22, 3, 0, Math.PI * 2); ctx.fill();
    }
    for (let i = 0; i < 45; i++) {
      ctx.fillStyle = `rgba(110,42,25,${Math.random() * .12})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 9, 1 + Math.random() * 4);
    }
    noise(ctx, w, h, 800, .15);
  }, 1.5, 3);
}

function makeClockTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#0b0c0b'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c8bda5'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(w / 2, h / 2, 108, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#d8ceb8'; ctx.textAlign = 'center'; ctx.font = 'bold 24px monospace';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      ctx.fillText(String(i === 0 ? 12 : i), w / 2 + Math.cos(a) * 82, h / 2 + Math.sin(a) * 82 + 8);
    }
    ctx.strokeStyle = '#b8212b'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2, h / 2 - 45); ctx.stroke();
    ctx.strokeStyle = '#d8ceb8'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2 + 52, h / 2 + 14); ctx.stroke();
    ctx.fillStyle = '#b8212b'; ctx.beginPath(); ctx.arc(w / 2, h / 2, 7, 0, Math.PI * 2); ctx.fill();
    ctx.font = '14px monospace'; ctx.fillStyle = '#817967'; ctx.fillText('WISTERIA', w / 2, h - 42);
  });
}

function makeGrilleTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#171a19'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#5c5b52'; ctx.lineWidth = 8;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); ctx.moveTo(20, 28 + i * 48); ctx.lineTo(w - 20, 28 + i * 48); ctx.stroke();
    }
    ctx.strokeStyle = '#2c2d29'; ctx.lineWidth = 10; ctx.strokeRect(10, 10, w - 20, h - 20);
  });
}

function makeDoorTexture() {
  return canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#333634'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 24) {
      ctx.fillStyle = y % 48 === 0 ? 'rgba(230,220,190,.055)' : 'rgba(0,0,0,.2)';
      ctx.fillRect(0, y, w, 11);
    }
    ctx.strokeStyle = 'rgba(190,180,155,.18)'; ctx.lineWidth = 5;
    ctx.strokeRect(14, 14, w - 28, h - 28);
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgba(120,48,25,${Math.random() * .12})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 12, 2 + Math.random() * 5);
    }
    noise(ctx, w, h, 400, .1);
  }, 1, 1);
}

export class World {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050707);
    this.scene.fog = new THREE.FogExp2(0x080b0a, 0.034);

    this.officeCamera = new THREE.PerspectiveCamera(72, 1, 0.05, 90);
    this.officeCamera.position.set(0, 1.62, 3.35);
    this.officeCamera.rotation.order = 'YXZ';
    this.officeCamera.rotation.set(-0.035, 0, 0);
    this.scene.add(this.officeCamera);

    this.menuCamera = new THREE.PerspectiveCamera(54, 1, 0.05, 110);
    this.menuCamera.position.set(0, 2.28, -18.8);
    this.menuCamera.lookAt(0, 1.38, -29);
    this.scene.add(this.menuCamera);

    this.securityCamera = new THREE.PerspectiveCamera(58, 1, 0.05, 100);
    this.scene.add(this.securityCamera);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.lookYaw = 0;
    this.lookPitch = -0.035;
    this.menuTime = 0;

    this.characters = {};
    this.characterPositions = {};
    this.characterModes = {};
    this.characterSlots = {};
    this.monitorCanvas = null;
    this.monitorTexture = null;
    this.monitorCtx = null;
    this._lastMonitorDraw = 0;
    this._lastClockDraw = -10;
    this._doorTarget = { left: 0, right: 0 };
    this._doorProgress = { left: 0, right: 0 };
    this._flicker = 1;
    this._tmpVec = new THREE.Vector3();
    this._tmpVec2 = new THREE.Vector3();
    this.lightPool = [];
    this._lightCullTimer = 0;

    this._makeShared();
    this._buildOffice();
    this._buildDining();
    this._buildStage();
    this._buildHalls();
    this._buildKitchen();
    this._buildStorage();
    this._buildVent();
    this._buildCharacters();
    this._buildAtmosphere();
    this._setupLights();
    // Pool the room point lights so only the nearest few are ever shaded.
    this.scene.traverse(o => {
      if (o.isPointLight && o !== this.flashlight) this.lightPool.push(o);
    });

    this.setMenuMode(true);
  }

  _makeShared() {
    this.wallTex = makeWallTexture();
    this.wallTex2 = makeWallTexture('#5d5b4c', '#3e3b2e');
    this.floorTex = makeFloorTexture();
    this.ceilingTex = makeCeilingTexture();
    this.curtainTex = makeCurtainTexture();
    this.checkTex = makeCheckTexture();
    this.metalTex = makeMetalTexture();
    this.woodTex = makeWoodTexture();
    this.ductTex = makeDuctTexture();
    this.grilleTex = makeGrilleTexture();
    this.doorTex = makeDoorTexture();
    this.clockTex = makeClockTexture();

    this.mWall = new THREE.MeshStandardMaterial({ map: this.wallTex, roughness: .96 });
    this.mWall2 = new THREE.MeshStandardMaterial({ map: this.wallTex2, roughness: .96 });
    this.mFloor = new THREE.MeshStandardMaterial({ map: this.floorTex, roughness: .92 });
    this.mCeil = new THREE.MeshStandardMaterial({ map: this.ceilingTex, roughness: .98 });
    this.mCurtain = new THREE.MeshStandardMaterial({ map: this.curtainTex, roughness: .92, side: THREE.DoubleSide });
    this.mCheck = new THREE.MeshStandardMaterial({ map: this.checkTex, roughness: .7 });
    this.mMetal = new THREE.MeshStandardMaterial({ map: this.metalTex, roughness: .56, metalness: .45 });
    this.mWood = new THREE.MeshStandardMaterial({ map: this.woodTex, roughness: .86 });
    this.mDuct = new THREE.MeshStandardMaterial({ map: this.ductTex, roughness: .58, metalness: .55 });
    this.mGrille = new THREE.MeshStandardMaterial({ map: this.grilleTex, roughness: .7, metalness: .4 });
    this.mDoor = new THREE.MeshStandardMaterial({ map: this.doorTex, roughness: .53, metalness: .5 });
    this.mDark = new THREE.MeshStandardMaterial({ color: 0x0c0e0d, roughness: .95 });
    this.mBlack = new THREE.MeshStandardMaterial({ color: 0x050606, roughness: .9 });
    this.mRed = new THREE.MeshStandardMaterial({ color: 0x8e1119, roughness: .78 });
    this.mRust = new THREE.MeshStandardMaterial({ color: 0x5b301f, roughness: .9 });
    this.mBrass = new THREE.MeshStandardMaterial({ color: 0x9a7d48, roughness: .45, metalness: .7 });
    this.mWhite = new THREE.MeshStandardMaterial({ color: 0xcfc7b4, roughness: .8 });
    this.mPaper = new THREE.MeshStandardMaterial({ color: 0xbeb39c, roughness: .95 });
    this.mGlowWarm = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffb45e, emissiveIntensity: 1.8, roughness: .3 });
    this.mGlowRed = new THREE.MeshStandardMaterial({ color: 0xff3b3b, emissive: 0x9a0810, emissiveIntensity: 2, roughness: .3 });
    this.mGlowGreen = new THREE.MeshStandardMaterial({ color: 0x8effa8, emissive: 0x2b9c4c, emissiveIntensity: 1.5, roughness: .3 });

    this._box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    this._plane = (w, h) => new THREE.PlaneGeometry(w, h);
  }

  addBox(w, h, d, mat, x, y, z, rot = null, parent = null, shadow = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    if (rot) m.rotation.set(rot[0] || 0, rot[1] || 0, rot[2] || 0);
    m.castShadow = shadow;
    m.receiveShadow = shadow;
    (parent || this.scene).add(m);
    return m;
  }

  addPlane(w, h, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = null) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.receiveShadow = true;
    (parent || this.scene).add(m);
    return m;
  }

  addCylinder(rt, rb, h, mat, x, y, z, segments = 12, parent = null) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), mat);
    m.position.set(x, y, z);
    m.castShadow = true; m.receiveShadow = true;
    (parent || this.scene).add(m);
    return m;
  }

  _roomShell({ x = 0, z = 0, w = 20, d = 14, h = 3.7, wall = this.mWall, floor = this.mFloor, ceil = this.mCeil, openFront = false }) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.scene.add(g);
    const f = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floor);
    f.rotation.x = -Math.PI / 2;
    f.position.y = 0;
    f.receiveShadow = true;
    g.add(f);
    const c = new THREE.Mesh(new THREE.PlaneGeometry(w, d), ceil);
    c.rotation.x = Math.PI / 2;
    c.position.y = h;
    c.receiveShadow = true;
    g.add(c);
    const back = this.addBox(w, h, .18, wall, 0, h / 2, -d / 2, null, g, false);
    void back;
    this.addBox(.18, h, d, wall, -w / 2, h / 2, 0, null, g, false);
    this.addBox(.18, h, d, wall, w / 2, h / 2, 0, null, g, false);
    if (!openFront) this.addBox(w, h, .18, wall, 0, h / 2, d / 2, null, g, false);
    return g;
  }

  _poster(type, w, h, x, y, z, ry = 0, parent = null) {
    const tex = makePosterTexture(type);
    const m = new THREE.MeshStandardMaterial({ map: tex, roughness: .9 });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
    p.position.set(x, y, z);
    p.rotation.y = ry;
    p.receiveShadow = true;
    (parent || this.scene).add(p);
    return p;
  }

  /* ============================ OFFICE ============================ */
  _buildOffice() {
    const room = new THREE.Group();
    this.office = room;
    this.scene.add(room);
    this.addPlane(11, 10, this.mFloor, 0, 0.002, 0, -Math.PI / 2, 0, 0, room);
    this.addPlane(11, 10, this.mCeil, 0, 3.58, 0, Math.PI / 2, 0, 0, room);
    this.addBox(11, 3.6, .22, this.mWall, 0, 1.8, -5, null, room, false);
    this.addBox(11, 3.6, .22, this.mWall, 0, 1.8, 5, null, room, false);

    // side walls with door cut-outs
    [-1, 1].forEach(side => {
      const x = side * 5.5;
      this.addBox(.22, 3.6, 4.35, this.mWall, x, 1.8, -2.825, null, room, false);
      this.addBox(.22, 3.6, 3.15, this.mWall, x, 1.8, 3.425, null, room, false);
      this.addBox(.22, .58, 2.5, this.mWall, x, 3.31, .6, null, room, false);
      // frame
      const frameMat = this.mMetal;
      this.addBox(.3, 3.2, .12, frameMat, x - side * .06, 1.6, -.65, null, room, true);
      this.addBox(.3, 3.2, .12, frameMat, x - side * .06, 1.6, 1.85, null, room, true);
      this.addBox(.3, .15, 2.62, frameMat, x - side * .06, 3.16, .6, null, room, true);
    });

    // security doors
    this.officeDoors = {};
    [-1, 1].forEach(side => {
      const door = this.addBox(.13, 3.12, 2.42, this.mDoor, side * 5.42, 4.70, .6, null, room, true);
      door.userData.side = side < 0 ? 'left' : 'right';
      this.officeDoors[side < 0 ? 'left' : 'right'] = door;
      // hazard stripes mounted to the moving panel
      const stripeMat = new THREE.MeshStandardMaterial({ color: 0x9b842d, roughness: .7 });
      for (let i = 0; i < 5; i++) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(.09, .08, 2.2), stripeMat);
        stripe.position.set(0, -1.0 + i * .45, 0);
        stripe.rotation.x = 0.4;
        door.add(stripe);
      }
      // inside button panel
      const panel = new THREE.Group();
      panel.position.set(side * 5.37, 1.48, 2.26);
      panel.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
      room.add(panel);
      this.addBox(.46, .7, .12, this.mMetal, 0, 0, 0, null, panel, true);
      const btn = this.addCylinder(.12, .12, .06, this.mGlowRed, 0, .11, -.08, 12, panel);
      btn.rotation.x = Math.PI / 2;
      this.addBox(.3, .06, .03, this.mDark, 0, -.16, -.07, null, panel, false);
      const ledMat = new THREE.MeshStandardMaterial({ color: 0x8effa8, emissive: 0x2b9c4c, emissiveIntensity: 1.5, roughness: .3 });
      const led = this.addBox(.055, .055, .03, ledMat, 0, .27, -.07, null, panel, false);
      if (side < 0) this.ledL = led; else this.ledR = led;
    });

    // ceiling light fixture
    this.addBox(2.3, .06, 1.25, this.mDark, 0, 3.52, .2, null, room, false);
    this.addBox(2.1, .03, 1.05, this.mGlowWarm, 0, 3.48, .2, null, room, false);
    this.officeLightMesh = this.addBox(2.1, .02, 1.05, this.mGlowWarm, 0, 3.47, .2, null, room, false);

    // desk
    this.addBox(5.1, .14, 1.6, this.mWood, 0, .86, .62, null, room, true);
    this.addBox(5.1, .7, .1, this.mWood, 0, .48, 1.36, null, room, true);
    [-2.3, 2.3].forEach(x => this.addBox(.12, .83, .12, this.mMetal, x, .42, .2, null, room, true));
    // desk clutter
    this.addBox(2.18, 1.2, .1, this.mDark, 0, 1.47, .1, null, room, true);
    this.addBox(2.02, 1.04, .03, new THREE.MeshStandardMaterial({ color: 0x0a0c0b, roughness: .35 }), 0, 1.47, .16, null, room, false);
    this.monitorCanvas = document.createElement('canvas');
    this.monitorCanvas.width = 512; this.monitorCanvas.height = 288;
    this.monitorCtx = this.monitorCanvas.getContext('2d');
    // Pre-render static noise tiles once instead of drawing 1,800 specks per update.
    this.monitorNoise = [];
    for (let n = 0; n < 3; n++) {
      const nc = document.createElement('canvas');
      nc.width = 512; nc.height = 288;
      const nctx = nc.getContext('2d');
      const img = nctx.createImageData(nc.width, nc.height);
      for (let i = 0; i < img.data.length; i += 4) {
        if (Math.random() > .42) continue;
        const v = Math.random() * 130 | 0;
        img.data[i] = v * .3 | 0; img.data[i + 1] = v; img.data[i + 2] = v * .6 | 0;
        img.data[i + 3] = Math.random() * 90 | 0;
      }
      nctx.putImageData(img, 0, 0);
      this.monitorNoise.push(nc);
    }
    this._noiseIndex = 0;
    this.monitorTexture = new THREE.CanvasTexture(this.monitorCanvas);
    this.monitorTexture.colorSpace = THREE.SRGBColorSpace;
    this.monitorMaterial = new THREE.MeshStandardMaterial({
      map: this.monitorTexture, emissive: 0x1b5344, emissiveIntensity: .75, roughness: .35
    });
    this.addPlane(1.88, .96, this.monitorMaterial, 0, 1.47, .181, 0, 0, 0, room);
    // monitor stand
    this.addBox(.12, .25, .12, this.mDark, 0, .99, .04, null, room, true);
    this.addBox(.62, .05, .38, this.mDark, 0, .91, .04, null, room, true);
    // second monitor
    this.addBox(1.1, .8, .08, this.mDark, 1.7, 1.31, .25, [0, -.24, 0], room, true);
    const m2 = new THREE.MeshStandardMaterial({ color: 0x10241d, emissive: 0x1f5b46, emissiveIntensity: .55, roughness: .4 });
    this.addPlane(.98, .68, m2, 1.72, 1.31, .3, 0, -.24, 0, room);
    // keyboard
    this.addBox(1.25, .045, .36, this.mDark, 0, .945, .92, null, room, true);
    for (let i = 0; i < 3; i++) this.addBox(.34, .012, .3, new THREE.MeshStandardMaterial({ color: 0x2e302e }), -0.4 + i * .4, .972, .92, null, room, false);
    // papers, mug, phone
    this.addBox(.35, .006, .48, this.mPaper, -1.25, .935, 1.03, [0, .2, 0], room, false);
    this.addBox(.34, .006, .47, this.mPaper, 1.45, .935, .87, [0, -.15, 0], room, false);
    this.addCylinder(.075, .07, .17, new THREE.MeshStandardMaterial({ color: 0x6f2d29, roughness: .7 }), -1.7, 1.0, .7, 12, room);
    this.addBox(.36, .08, .25, this.mDark, 1.9, .96, 1.12, [0, .2, 0], room, true);
    // desk lamp
    const lamp = new THREE.Group();
    lamp.position.set(-2.15, .91, .5); room.add(lamp);
    this.addCylinder(.17, .2, .04, this.mMetal, 0, 0, 0, 16, lamp);
    this.addCylinder(.025, .025, .6, this.mMetal, 0, .3, 0, 8, lamp);
    const shade = this.addCylinder(.23, .11, .22, new THREE.MeshStandardMaterial({ color: 0x3b3420, roughness: .5 }), 0, .63, .12, 12, lamp);
    shade.rotation.x = -.3;
    this.addCylinder(.16, .16, .02, this.mGlowWarm, 0, .56, .2, 12, lamp);
    this.lampLightPos = new THREE.Vector3(-2.15, 1.4, .55);
    // desk fan
    const fan = new THREE.Group(); fan.position.set(2.15, 1.0, .52); room.add(fan);
    this.addCylinder(.17, .2, .04, this.mMetal, 0, -.02, 0, 16, fan);
    this.addCylinder(.025, .025, .48, this.mMetal, 0, .24, -.02, 8, fan);
    this.fanRotor = new THREE.Group(); this.fanRotor.position.set(0, .51, .02); fan.add(this.fanRotor);
    this.addCylinder(.22, .22, .02, this.mDark, 0, 0, 0, 16, this.fanRotor);
    for (let i = 0; i < 4; i++) {
      const blade = this.addBox(.12, .28, .01, this.mMetal, Math.cos(i * Math.PI / 2) * .11, Math.sin(i * Math.PI / 2) * .11, .02, [0, 0, i * Math.PI / 2], this.fanRotor, false);
      blade.scale.set(1, 1, 1);
    }
    this.addCylinder(.24, .24, .035, this.mDark, 0, .51, .08, 16, fan).rotation.x = Math.PI / 2;

    // back wall dressing
    this._poster(0, 1.15, 1.5, -3.85, 2.15, -4.86, 0, room);
    this._poster(1, 1.05, 1.35, 3.95, 2.2, -4.86, 0, room);
    this._poster(2, .9, 1.15, -1.3, 2.45, -4.86, 0, room);
    // corkboard
    this.addBox(2.3, 1.4, .06, new THREE.MeshStandardMaterial({ color: 0x4f3b26, roughness: .95 }), 1.65, 2.15, -4.87, null, room, false);
    for (let i = 0; i < 7; i++) {
      this.addBox(.32 + Math.random() * .2, .23 + Math.random() * .15, .01, this.mPaper, .7 + Math.random() * 1.9, 1.65 + Math.random() * 1, -4.82, null, room, false);
    }
    // clock
    const clockMat = new THREE.MeshStandardMaterial({ map: this.clockTex, emissive: 0x1d1a13, emissiveIntensity: .3, roughness: .8 });
    const clock = new THREE.Mesh(new THREE.CircleGeometry(.4, 24), clockMat);
    clock.position.set(0, 2.82, -4.875); room.add(clock);
    this.addCylinder(.43, .43, .05, this.mDark, 0, 2.82, -4.92, 24, room).rotation.x = Math.PI / 2;
    // vent grille on back wall (Nezuko's entrance)
    const officeVentMat = new THREE.MeshStandardMaterial({
      map: this.grilleTex, emissiveMap: this.grilleTex, roughness: .7, metalness: .4,
      emissive: 0x000000, emissiveIntensity: 0
    });
    this.officeVentMesh = this.addBox(1.05, .68, .06, officeVentMat, -3.9, 2.92, -4.87, null, room, false);
    this.officeVentPos = new THREE.Vector3(-3.9, 2.9, -4.5);
    // Pre-created alert light so the shader light count never changes mid-game.
    this.officeVentLight = new THREE.PointLight(0xff2a33, 0, 5.5, 2);
    this.officeVentLight.position.set(-3.6, 2.45, -4.15);
    room.add(this.officeVentLight);
    // exit sign over door
    const exitMat = new THREE.MeshStandardMaterial({ color: 0x193c30, emissive: 0x1e7d50, emissiveIntensity: 1.4, roughness: .5 });
    this.addBox(.9, .22, .05, exitMat, 3.8, 3.09, -4.86, null, room, false);
    // cabinets
    this.addBox(1.6, .85, .55, this.mWood, -4.45, .43, -4.37, null, room, true);
    this.addBox(1.65, .04, .6, this.mDark, -4.45, .87, -4.37, null, room, true);
    this.addBox(.7, 1.7, .95, this.mMetal, 4.7, .85, -3.9, null, room, true);
    // wires
    for (let i = 0; i < 4; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.8 + i * .2, 3.45, -.2),
        new THREE.Vector3(-1.5 + i * .25, 3.1 + Math.random() * .2, -.8),
        new THREE.Vector3(-1.9 + i * .2, 2.8, -1.4)
      ]);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, .008, 5, false), this.mDark);
      room.add(tube);
    }
    // floor papers
    for (let i = 0; i < 5; i++) this.addBox(.3, .005, .4, this.mPaper, -3 + Math.random() * 6, .012, 2.6 + Math.random() * 1.4, [0, Math.random() * 3, 0], room, false);

    // flashlight (attached to office camera)
    this.flashlight = new THREE.SpotLight(0xfff0cf, 0, 20, Math.PI * .15, .42, 1.15);
    this.flashlight.castShadow = false;
    this.flashlight.position.set(0, 0, 0);
    this.flashlightTarget = new THREE.Object3D();
    this.flashlightTarget.position.set(0, 0, -6);
    this.officeCamera.add(this.flashlight, this.flashlightTarget);
    this.flashlight.target = this.flashlightTarget;

    const beamGeo = new THREE.ConeGeometry(1.05, 6.5, 20, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffedc7, transparent: true, opacity: 0.0, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    this.flashlightBeam = new THREE.Mesh(beamGeo, beamMat);
    this.flashlightBeam.rotation.x = -Math.PI / 2;
    this.flashlightBeam.position.set(0, -.08, -3.2);
    this.officeCamera.add(this.flashlightBeam);

    // Slight camera breathing / desk override
    this.officeBaseY = 1.62;
  }

  /* ============================ DINING ============================ */
  _buildDining() {
    const g = this._roomShell({ x: 0, z: -12.5, w: 24, d: 13, h: 4, wall: this.mWall, floor: this.mFloor, ceil: this.mCeil, openFront: true });
    this.dining = g;
    // checkered dance floor centre
    this.addPlane(9, 8, this.mCheck, 0, .012, 2.7, -Math.PI / 2, 0, 0, g);
    // tables
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x4b3322, roughness: .75 });
    const cloth = new THREE.MeshStandardMaterial({ color: 0x92262d, roughness: .92 });
    const positions = [[-7, 4.1], [7, 4.1], [-5.6, -1.7], [5.7, -1.7], [0, 1.4]];
    positions.forEach(([x, z], idx) => {
      const tg = new THREE.Group(); tg.position.set(x, 0, z); g.add(tg);
      this.addCylinder(.08, .1, .74, this.mMetal, 0, .37, 0, 10, tg);
      this.addCylinder(.92, .92, .06, tableMat, 0, .77, 0, 24, tg);
      this.addCylinder(.98, .98, .015, cloth, 0, .81, 0, 24, tg);
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2 + .4;
        this._chair(tg, Math.cos(a) * 1.45, Math.sin(a) * 1.45, -a + Math.PI / 2);
      }
      // plates + candles
      for (let i = 0; i < 3; i++) {
        const a = i * Math.PI * 2 / 3 + idx;
        this.addCylinder(.14, .14, .012, this.mWhite, Math.cos(a) * .64, .835, Math.sin(a) * .64, 12, tg);
      }
      const candle = this.addCylinder(.028, .03, .17, this.mWhite, 0, .92, 0, 8, tg);
      const flame = this.addCylinder(.012, .018, .07, this.mGlowWarm, 0, 1.03, 0, 8, tg);
      flame.castShadow = false;
      void candle;
    });
    // hanging lanterns
    for (let i = 0; i < 5; i++) {
      const x = -9 + i * 4.5;
      const lamp = new THREE.Group(); lamp.position.set(x, 3.2, 3.5 - (i % 2) * 4); g.add(lamp);
      this.addCylinder(.008, .008, 1.5, this.mDark, 0, .75, 0, 5, lamp);
      const shade = this.addCylinder(.16, .32, .4, new THREE.MeshStandardMaterial({ color: 0x7a2b25, emissive: 0x9c3b1d, emissiveIntensity: .7, roughness: .9, side: THREE.DoubleSide }), 0, 0, 0, 8, lamp);
      // Only two lanterns carry real lights; the rest glow via emissive shades.
      if (i === 0 || i === 4) {
        const light = new THREE.PointLight(0xff9d5a, 2.2, 7, 2); light.position.set(0, -.1, 0); lamp.add(light);
      }
      void shade;
    }
    // stage curtains far end
    this.addBox(10, .35, .25, this.mRed, 0, 3.72, -6.2, null, g, false);
    for (let i = 0; i < 6; i++) this.addBox(1.75, 3.4, .18, this.mCurtain, -8.75 + i * 3.5, 1.8, -6.28, null, g, false);
    // banners
    const bannerMat = new THREE.MeshStandardMaterial({ map: makeBannerTexture(), roughness: .9, side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.8), bannerMat);
    banner.position.set(0, 2.3, -6.1); g.add(banner);
    // wall banquettes
    this.addBox(10, .55, .8, new THREE.MeshStandardMaterial({ color: 0x4b1b20, roughness: .9 }), -6.5, .28, -5.4, null, g, true);
    this.addBox(10, .55, .8, new THREE.MeshStandardMaterial({ color: 0x4b1b20, roughness: .9 }), 6.5, .28, -5.4, null, g, true);
    // wall posters
    this._poster(0, .8, 1.15, -11.85, 2.15, 3.0, Math.PI / 2, g);
    this._poster(1, .8, 1.15, 11.85, 2.15, -1.0, -Math.PI / 2, g);
    this._poster(2, .75, 1.05, -5.2, 2.1, -6.32, 0, g);
    // scattered confetti
    const confetti = new THREE.InstancedMesh(new THREE.PlaneGeometry(.05, .02), new THREE.MeshBasicMaterial({ color: 0x9e3b42 }), 90);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 90; i++) {
      dummy.position.set((Math.random() - .5) * 20, .025, 5.5 - Math.random() * 11);
      dummy.rotation.set(-Math.PI / 2, 0, Math.random() * 6);
      dummy.updateMatrix();
      confetti.setMatrixAt(i, dummy.matrix);
    }
    g.add(confetti);
    // light
    const dl = new THREE.PointLight(0xffbf84, 6.5, 20, 1.5);
    dl.position.set(0, 3.5, 1.2); g.add(dl);
  }

  _chair(parent, x, z, rot) {
    const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = rot; parent.add(c);
    this.addBox(.48, .06, .45, this.mWood, 0, .44, 0, null, c, true);
    this.addBox(.46, .58, .05, this.mWood, 0, .72, -.22, null, c, true);
    [[-.19, -.17], [.19, -.17], [-.19, .17], [.19, .17]].forEach(([lx, lz]) => {
      this.addBox(.045, .44, .045, this.mMetal, lx, .22, lz, null, c, true);
    });
    return c;
  }

  /* ============================ STAGE ============================ */
  _buildStage() {
    const g = this._roomShell({ x: 0, z: -29, w: 26, d: 16, h: 5.4, wall: this.mWall2, floor: this.mFloor, ceil: this.mCeil, openFront: true });
    this.stage = g;
    // raised stage
    this.addBox(16, .6, 8.2, this.mWood, 0, .3, -3.2, null, g, true);
    this.addBox(16.2, .14, .4, this.mDark, 0, .62, .88, null, g, true);
    // curtain back and sides
    this.addBox(16.4, 4.6, .18, this.mCurtain, 0, 2.7, -7.25, null, g, false);
    this.addBox(.35, 4.7, 6.5, this.mCurtain, -8.1, 2.6, -4, null, g, false);
    this.addBox(.35, 4.7, 6.5, this.mCurtain, 8.1, 2.6, -4, null, g, false);
    // valance
    for (let i = 0; i < 9; i++) {
      const c = this.addBox(1.9, .5, .3, this.mCurtain, -8 + i * 2, 5.15, .7, null, g, false);
      c.rotation.z = (i % 2 ? -1 : 1) * 0.04;
    }
    // banner
    const bannerMat = new THREE.MeshStandardMaterial({ map: makeBannerTexture(), roughness: .9, side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(9.8, 2.2), bannerMat);
    banner.position.set(0, 2.1, -7.1); g.add(banner);
    // stage truss
    for (let i = 0; i < 2; i++) {
      this.addCylinder(.09, .09, 15.8, this.mMetal, 0, 5.0, -5.5 + i * 1.2, 8, g).rotation.z = Math.PI / 2;
    }
    for (let i = -3; i <= 3; i++) {
      this.addCylinder(.03, .03, 1.2, this.mMetal, i * 2.3, 4.45, -3.5, 6, g);
      const can = this.addCylinder(.18, .24, .4, this.mDark, i * 2.3, 3.8, -3.5, 10, g);
      can.rotation.x = .5;
      this.addCylinder(.12, .12, .03, this.mGlowWarm, i * 2.3, 3.62, -3.32, 10, g).rotation.x = .5;
    }
    // speakers
    [-7.1, 7.1].forEach(x => {
      this.addBox(1.4, 2.7, 1.25, this.mBlack, x, 1.35, -1.3, null, g, true);
      this.addCylinder(.36, .36, .08, this.mDark, x, 1.9, -.65, 16, g).rotation.x = Math.PI / 2;
      this.addCylinder(.5, .5, .08, this.mDark, x, .9, -.65, 16, g).rotation.x = Math.PI / 2;
    });
    // mic stands
    [0, -4.2, 4.2].forEach((x, i) => {
      const mic = new THREE.Group(); mic.position.set(x, .6, -2 + i * .8); g.add(mic);
      this.addCylinder(.02, .02, 1.4, this.mMetal, 0, .7, 0, 6, mic);
      const head = this.addCylinder(.06, .08, .14, this.mDark, 0, 1.43, 0, 8, mic);
      head.rotation.z = .4;
    });
    // old show props, mannequin dresses
    for (let i = 0; i < 3; i++) {
      const x = -10 + i * 10;
      this.addCylinder(.28, .38, .08, this.mDark, x, 3.0, -6.7, 12, g);
    }
    // spotlights
    this.stageLights = [];
    [[-5, 4.8, -1], [5, 4.8, -1]].forEach(([x, y, z], i) => {
      const spot = new THREE.SpotLight(i === 1 ? 0xd94242 : 0xffd9a4, 38, 30, Math.PI * .22, .6, 1.2);
      spot.position.set(x, y, z);
      spot.target.position.set(x * .82, 1.0, .8);
      g.add(spot, spot.target);
      this.stageLights.push(spot);
    });
    // beams
    [[-4, 4.7, -.6], [4, 4.7, -.6], [0, 4.8, 1.4]].forEach(([x, y, z]) => {
      const geo = new THREE.ConeGeometry(1.8, 7.2, 24, 1, true);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffdfb0, transparent: true, opacity: .025, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
      const cone = new THREE.Mesh(geo, mat);
      cone.position.set(x, y - 3.2, z - 1.8);
      cone.rotation.x = .08;
      g.add(cone);
    });
    // fog dust
    this._dust(g, new THREE.Vector3(0, 2.4, -3), 220, 12, 7);
    // floor marks
    for (let i = 0; i < 3; i++) {
      const mark = this.addBox(1.8, .01, .05, new THREE.MeshBasicMaterial({ color: 0xb09d73 }), 0, .61, -2.5 + i * 2.2, null, g, false);
      mark.material.transparent = true; mark.material.opacity = .25;
    }
  }

  /* ============================ HALLS ============================ */
  _buildHalls() {
    this.halls = {};
    const hallWall = new THREE.MeshStandardMaterial({ map: makeWallTexture('#615c4c', '#3d392d'), roughness: .96 });
    [-1, 1].forEach(side => {
      const g = new THREE.Group(); this.scene.add(g); this.halls[side < 0 ? 'west' : 'east'] = g;
      const x0 = side * 6.2, x1 = side * 18;
      const cx = (x0 + x1) / 2;
      this.addPlane(11.8, 3.7, this.mFloor, cx, 0.002, 0, -Math.PI / 2, 0, 0, g);
      this.addPlane(11.8, 3.7, this.mCeil, cx, 3.15, 0, Math.PI / 2, 0, 0, g);
      this.addBox(11.8, 3.2, .18, hallWall, cx, 1.6, -1.8, null, g, false);
      this.addBox(11.8, 3.2, .18, hallWall, cx, 1.6, 1.8, null, g, false);
      this.addBox(.18, 3.2, 3.6, hallWall, x1, 1.6, 0, null, g, false);
      // doorway to office
      this.addBox(.25, 3.2, .13, this.mMetal, x0, 1.6, -1.25, null, g, true);
      this.addBox(.25, 3.2, .13, this.mMetal, x0, 1.6, 1.25, null, g, true);
      // ceiling strip lights
      for (let i = 0; i < 3; i++) {
        const lx = side * (8.2 + i * 3.2);
        this.addBox(1.2, .04, .26, this.mGlowWarm, lx, 3.1, 0, null, g, false);
        if (i === 1) {
          const pl = new THREE.PointLight(0xffbd7e, 2.6, 8.5, 2);
          pl.position.set(lx, 2.85, 0); g.add(pl);
        }
      }
      // flickering fixture
      const flick = this.addBox(1.2, .04, .26, this.mGlowWarm, side * 14.6, 3.1, .3, null, g, false);
      if (side < 0) this.flickerWest = flick; else this.flickerEast = flick;
      // wall posters and signs
      this._poster(side < 0 ? 1 : 2, .8, 1.1, side * 9.5, 2.1, 1.69, Math.PI, g);
      this._poster(side < 0 ? 2 : 0, .7, .95, side * 13.2, 2.15, -1.69, 0, g);
      // end door
      this.addBox(.14, 3, 2.6, this.mDoor, x1 + side * .03, 1.5, 0, null, g, true);
      // crates/lockers
      if (side > 0) {
        this.addBox(.8, 1.9, 1.4, this.mMetal, side * 16.3, .95, -1.1, null, g, true);
        this.addBox(.5, .6, .7, this.mWood, side * 16.3, .3, .9, null, g, true);
        this.addBox(.4, .4, .4, this.mWood, side * 16.8, .2, .7, [0, .4, 0], g, true);
      } else {
        this.addBox(1.2, .9, .55, this.mWood, side * 16.1, .45, 1.2, null, g, true);
        this.addBox(.8, 1.2, .8, this.mMetal, side * 16.7, .6, -1.05, null, g, true);
        this.addBox(.55, .55, .55, this.mWood, side * 15.4, .28, .9, [0, -.3, 0], g, true);
      }
      // wet floor sign
      const sign = this.addBox(.4, .6, .04, new THREE.MeshStandardMaterial({ color: 0xa88b32, roughness: .8 }), side * 11.4, .3, .4, [0, .3, 0], g, false);
      sign.rotation.x = .08;
      // pipes on ceiling
      for (let i = 0; i < 2; i++) {
        this.addCylinder(.05, .05, 11.5, this.mRust, cx, 3.0 - i * .12, -1.25, 7, g).rotation.z = Math.PI / 2;
      }
      // floor puddle
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(.8, 16), new THREE.MeshStandardMaterial({ color: 0x1b2422, roughness: .12, metalness: .25, transparent: true, opacity: .6 }));
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.set(side * 11.6, .008, .2);
      g.add(puddle);
    });
  }

  /* ============================ KITCHEN ============================ */
  _buildKitchen() {
    const g = this._roomShell({ x: 14.5, z: -12.5, w: 15, d: 13, h: 3.8, wall: this.mWall2, floor: this.mCheck, ceil: this.mCeil });
    this.kitchen = g;
    // counters along left+back
    const counter = new THREE.MeshStandardMaterial({ color: 0x454b46, roughness: .6, metalness: .3 });
    this.addBox(8.2, 1.0, .8, counter, -.8, .5, 2.3, null, g, true);
    this.addBox(8.2, .06, .86, this.mWhite, -.8, 1.04, 2.3, null, g, true);
    this.addBox(7, 1.0, .8, counter, -5.2, .5, -3, [0, Math.PI / 2, 0], g, true);
    // stove
    this.addBox(3.2, .95, 1.3, this.mMetal, 2.6, .48, -2.2, null, g, true);
    for (let i = 0; i < 4; i++) {
      const ring = this.addCylinder(.32, .32, .015, this.mGlowRed, 1.5 + (i % 2) * 1.7, 1.0, -2.5 + Math.floor(i / 2) * .6, 16, g);
      ring.rotation.x = Math.PI / 2;
    }
    // fridge
    this.addBox(2.2, 3.2, 1.35, this.mMetal, 5.6, 1.6, -4.7, null, g, true);
    this.addBox(.04, 1.1, .05, this.mWhite, 5.0, 1.9, -4.0, null, g, false);
    // hanging pots
    for (let i = 0; i < 6; i++) {
      const x = -5 + i * .72;
      this.addCylinder(.012, .012, .8, this.mDark, x, 2.65, 0, 5, g);
      this.addCylinder(.2, .2, .08, this.mMetal, x, 2.25, 0, 12, g).rotation.x = Math.PI / 2;
    }
    // shelves / dishes
    for (let i = 0; i < 8; i++) this.addCylinder(.13, .13, .02, this.mWhite, -3.8 + i * .35, 2.6, -5.9, 12, g);
    // wall tiles
    this.addBox(14, 1.2, .025, new THREE.MeshStandardMaterial({ color: 0x7a7c6a, roughness: .6 }), 0, 2.1, -6.42, null, g, false);
    // mop bucket
    this.addCylinder(.28, .32, .55, new THREE.MeshStandardMaterial({ color: 0x8a7c2e, roughness: .8 }), -4, .28, .8, 12, g);
    // trash
    this.addCylinder(.32, .28, .8, this.mDark, 4.3, .4, 1.4, 10, g);
    // flickering service light
    const dl = new THREE.PointLight(0xd6d0a4, 3.4, 16, 1.4); dl.position.set(0, 3.3, -1); g.add(dl);
    this.kitchenRed = null;
  }

  /* ============================ STORAGE ============================ */
  _buildStorage() {
    const g = this._roomShell({ x: -14.5, z: -12.5, w: 15, d: 13, h: 3.8, wall: this.mWall, floor: this.mFloor, ceil: this.mCeil });
    this.storage = g;
    // shelves
    for (let row = 0; row < 3; row++) {
      const x = -5.9 + row * 3.2;
      for (let level = 0; level < 3; level++) {
        this.addBox(2.8, .08, .85, this.mMetal, x, .35 + level * 1.0, -4.7, null, g, true);
      }
      this.addBox(.06, 3, .85, this.mMetal, x - 1.38, 1.5, -4.7, null, g, true);
      this.addBox(.06, 3, .85, this.mMetal, x + 1.38, 1.5, -4.7, null, g, true);
      // boxes
      for (let level = 0; level < 3; level++) {
        for (let i = 0; i < 3; i++) {
          if (Math.random() > .5) continue;
          const s = .45 + Math.random() * .22;
          const m = new THREE.MeshStandardMaterial({ color: Math.random() > .5 ? 0x6b5235 : 0x504536, roughness: .95 });
          this.addBox(s, s * .8, s * .7, m, x - .8 + i * .8, .42 + level * 1.0 + s * .4, -4.65, [0, Math.random() * .5, 0], g, true);
        }
      }
    }
    // barrels
    for (let i = 0; i < 4; i++) {
      this.addCylinder(.46, .5, 1.1, this.mRust, 3.5 + (i % 2) * 1.2, .55, -3.5 + Math.floor(i / 2) * 1.4, 14, g);
    }
    // mannequin / dummy
    const man = new THREE.Group(); man.position.set(4.4, 0, 1.4); man.rotation.y = -0.7; g.add(man);
    this.addCylinder(.16, .24, .9, this.mDark, 0, .8, 0, 8, man);
    this.addCylinder(.08, .08, .6, this.mDark, 0, 1.45, 0, 8, man);
    this.addBox(.8, 1.5, .3, new THREE.MeshStandardMaterial({ color: 0x3f3b31, roughness: .95 }), 0, 1.3, 0, null, man, true);
    this.addCylinder(.18, .2, .18, this.mDark, 0, 1.8, 0, 8, man);
    // hanging bulb
    this.addCylinder(.008, .008, 1.6, this.mDark, 0, 2.8, -1.6, 5, g);
    const bulb = this.addCylinder(.09, .11, .15, this.mGlowWarm, 0, 1.95, -1.6, 10, g);
    const bl = new THREE.PointLight(0xffb166, 2.6, 12, 1.7); bl.position.set(0, 1.8, -1.6); g.add(bl);
    this.storageBulb = bulb; this.storageLight = bl;
    // boxes near foreground
    for (let i = 0; i < 8; i++) {
      const x = -5 + Math.random() * 10, z = -.5 + Math.random() * 4;
      const s = .35 + Math.random() * .55;
      this.addBox(s, s, s, new THREE.MeshStandardMaterial({ color: 0x5a4932, roughness: .95 }), x, s / 2, z, [0, Math.random() * 2, 0], g, true);
    }
    // rack of old costumes
    this.addCylinder(.04, .04, 3.2, this.mMetal, 5.4, 1.6, -5.5, 8, g).rotation.z = Math.PI / 2;
    for (let i = 0; i < 4; i++) {
      this.addBox(.35, 1.5, .08, new THREE.MeshStandardMaterial({ color: i % 2 ? 0x3a2a35 : 0x4a3c31, roughness: .95 }), 4.2 + i * .7, 1.1, -5.5, [0, .2, 0], g, true);
    }
  }

  /* ============================ VENT ============================ */
  _buildVent() {
    const g = new THREE.Group(); this.scene.add(g); this.ventRoom = g;
    // duct behind office, at shoulder height
    this.addBox(2.4, .15, 9.4, this.mDuct, 0, 1.13, 10.2, null, g, false);
    this.addBox(2.4, .15, 9.4, this.mDuct, 0, 3.12, 10.2, null, g, false);
    this.addBox(.12, 2.0, 9.4, this.mDuct, -1.2, 2.12, 10.2, null, g, false);
    this.addBox(.12, 2.0, 9.4, this.mDuct, 1.2, 2.12, 10.2, null, g, false);
    this.addBox(2.4, 2.0, .12, this.mDuct, 0, 2.12, 14.9, null, g, false);
    // grille at office end
    this.addBox(2.15, 1.7, .08, this.mGrille, 0, 2.1, 5.52, null, g, false);
    // rivets / seams
    for (let z = 6.2; z < 14.6; z += .8) {
      [-1.15, 1.15].forEach(x => {
        const rivet = this.addCylinder(.035, .035, .03, this.mBrass, x, 2.15, z, 6, g);
        rivet.rotation.z = Math.PI / 2;
      });
    }
    // cables and dust
    for (let i = 0; i < 3; i++) {
      const c = this.addCylinder(.025, .025, 8, this.mDark, -.8 + i * .7, 2.92, 10, 5, g);
      c.rotation.x = Math.PI / 2;
    }
    const red = new THREE.PointLight(0xa51a1a, 3.2, 10, 2);
    red.position.set(0, 2.2, 9); g.add(red);
    this._dust(g, new THREE.Vector3(0, 2.2, 10), 80, 1.6, 4);
  }

  /* ============================ CHARACTERS ============================ */
  _buildCharacters() {
    for (const id of Object.keys(CHARACTERS)) {
      const c = createCharacter(id);
      c.visible = false;
      this.scene.add(c);
      this.characters[id] = c;
    }
  }

  _dust(parent, center, count, spreadX, spreadZ) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = center.x + (Math.random() - .5) * spreadX;
      pos[i * 3 + 1] = center.y + (Math.random() - .3) * 3;
      pos[i * 3 + 2] = center.z + (Math.random() - .5) * spreadZ;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xd9cba9, size: .025, transparent: true, opacity: .38, depthWrite: false, blending: THREE.AdditiveBlending });
    const p = new THREE.Points(geo, mat);
    parent.add(p);
    if (!this.dustSystems) this.dustSystems = [];
    this.dustSystems.push({ points: p, seed: Math.random() * 1000, positions: pos });
  }

  _buildAtmosphere() {
    // Ash / dust drifting in the office.
    this._dust(this.office, new THREE.Vector3(0, 1.9, 1), 120, 9, 8);
    // Wisteria petals in the stage, subtle.
    const geo = new THREE.BufferGeometry();
    const count = 90;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - .5) * 20;
      pos[i * 3 + 1] = Math.random() * 5;
      pos[i * 3 + 2] = -22 - Math.random() * 12;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const petals = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x8b6a9b, size: .035, transparent: true, opacity: .5, depthWrite: false }));
    this.scene.add(petals);
    this.petals = petals;
  }

  _setupLights() {
    this.scene.add(new THREE.HemisphereLight(0x3c4540, 0x0a0907, 0.46));
    const ambient = new THREE.AmbientLight(0x3b3a31, 0.18);
    this.scene.add(ambient);

    // office main fixture
    const spot = new THREE.SpotLight(0xffdcae, 42, 11, Math.PI * .34, .68, 1.35);
    spot.position.set(0, 3.45, .4);
    spot.target.position.set(0, .7, .4);
    spot.castShadow = true;
    spot.shadow.mapSize.set(512, 512);
    spot.shadow.bias = -0.0007;
    spot.shadow.camera.near = .3;
    spot.shadow.camera.far = 11;
    this.scene.add(spot, spot.target);
    this.officeSpot = spot;
    const fill = new THREE.PointLight(0xffe0b8, 3.4, 8, 1.6);
    fill.position.set(0, 2.7, 1.5); this.scene.add(fill);
    this.officeFill = fill;
    const lamp = new THREE.PointLight(0xffb45e, 2.2, 4.5, 2);
    lamp.position.copy(this.lampLightPos); this.scene.add(lamp);
    this.lampLight = lamp;
    // Doorway wash lights: without these the side doors read as black voids.
    const doorGlowL = new THREE.PointLight(0xffb37a, 1.4, 6, 1.8);
    doorGlowL.position.set(-4.55, 2.3, .7); this.scene.add(doorGlowL);
    const doorGlowR = new THREE.PointLight(0xffb37a, 1.4, 6, 1.8);
    doorGlowR.position.set(4.55, 2.3, .7); this.scene.add(doorGlowR);
    this.doorLightL = doorGlowL; this.doorLightR = doorGlowR;
    // Dim back-wall wash so the vent, posters and clock stay readable.
    const wallWash = new THREE.PointLight(0xffcf9e, 2.2, 7, 1.8);
    wallWash.position.set(0, 2.75, -4.1); this.scene.add(wallWash);
    this.officeWallLight = wallWash;
    // Red key light for Muzan's manifestation, created up-front to keep shader lights stable.
    const manifest = new THREE.PointLight(0xff2a33, 0, 6, 2);
    manifest.position.set(0, 2.15, 2.9); this.scene.add(manifest);
    this.officeManifestLight = manifest;

    // low red emergency light
    const emergency = new THREE.PointLight(0x6b0b10, 1.2, 7, 2);
    emergency.position.set(0, 2.6, -4.2); this.scene.add(emergency);
    this.emergencyLight = emergency;

    // CCTV infrared fill: a wide, soft beam locked to the security camera.
    const ir = new THREE.SpotLight(0xbcd2c2, 34, 30, Math.PI * .46, .95, 1.25);
    const irTarget = new THREE.Object3D();
    irTarget.position.set(0, 0, -1);
    this.securityCamera.add(ir, irTarget);
    ir.target = irTarget;
    this.irLight = ir;
  }

  /* ============================ STATE API ============================ */
  setMenuMode(isMenu) {
    this.menuMode = isMenu;
    this.scene.fog.density = isMenu ? 0.027 : 0.034;
    if (isMenu) {
      const ids = Object.keys(this.characters);
      ids.forEach((id, i) => {
        const c = this.characters[id];
        const anchor = ROOM_ANCHORS.stage[i];
        c.visible = true;
        c.position.set(...anchor.p);
        c.rotation.set(0, anchor.r, 0);
        c.scale.setScalar(1);
        c.userData.mode = 'idle';
        this.characterPositions[id] = anchor.p;
      });
      this.office.visible = true;
      this.menuCamera.lookAt(0, 1.38, -29);
    } else {
      this.characters && Object.values(this.characters).forEach(c => c.visible = false);
    }
  }

  setCharacterPlacement(id, room, slot, visible, mode = 'idle') {
    const c = this.characters[id];
    if (!c) return;
    if (!visible || !room) { c.visible = false; return; }
    const anchors = ROOM_ANCHORS[room];
    if (!anchors) { c.visible = false; return; }
    const max = ROOM_SLOTS[room] || anchors.length;
    const a = anchors[(slot || 0) % Math.min(max, anchors.length)] || anchors[0];
    c.visible = true;
    c.position.set(a.p[0], a.p[1], a.p[2]);
    c.rotation.set(0, a.r + (c.userData.extraRot || 0), 0);
    const s = a.s || 1;
    c.scale.setScalar(s);
    c.userData.mode = mode;
    this.characterPositions[id] = a.p;
  }

  setDoor(side, closed) {
    if (this._doorTarget[side] === undefined) return;
    this._doorTarget[side] = closed ? 1 : 0;
  }

  setFlashlight(on, intensity = 1) {
    this.flashlight.intensity = on ? 11 * intensity : 0;
    this.flashlightBeam.material.opacity = on ? .045 * intensity : 0;
    // Keep the light object visible so the shader light count never changes.
    this.flashlight.visible = true;
    this.flashlightBeam.visible = on;
  }

  setOfficeLighting({ powerOut = false, flicker = 1, hour = 0, redAlert = false }) {
    const p = powerOut ? 0 : 1;
    this.officeSpot.intensity = 42 * p * flicker;
    this.officeFill.intensity = 3.4 * p * flicker;
    this.lampLight.intensity = powerOut ? 0 : 2.2;
    if (this.officeWallLight) this.officeWallLight.intensity = powerOut ? 0 : 2.2 * flicker;
    if (this.doorLightL) this.doorLightL.intensity = powerOut ? 0 : (1.4 * flicker);
    if (this.doorLightR) this.doorLightR.intensity = powerOut ? 0 : (1.4 * flicker);
    this.emergencyLight.intensity = powerOut ? 2.4 : (redAlert ? 3.2 : 1.2);
    this.officeLightMesh.material.emissiveIntensity = powerOut ? 0 : 1.8 * flicker;
    this.officeLightMesh.material.color.setHex(powerOut ? 0x222222 : 0xffd9a0);
    if (this._ledL) void this._ledL;
    const tint = hour >= 5 ? 0xffb27a : hour >= 4 ? 0xffcf9c : 0xffdcae;
    this.officeSpot.color.setHex(tint);
    this.officeFill.color.setHex(tint);
    document.body.classList.toggle('power-out', powerOut);
  }

  updateCamera(camera, yaw, pitch) {
    this.officeCamera.position.y = this.officeBaseY + Math.sin(this.time * 1.4) * 0.004;
    this.officeCamera.rotation.set(pitch, yaw, 0);
  }

  getCharacter(id) { return this.characters[id]; }

  setActiveCamera(camKey) {
    const def = CAMERA_DEFS[camKey] || CAMERA_DEFS.stage;
    const cam = this.securityCamera;
    cam.fov = def.fov;
    cam.updateProjectionMatrix();
    const sway = this.menuTime * .35;
    cam.position.set(def.pos[0] + Math.sin(sway) * .035, def.pos[1] + Math.sin(sway * 1.7) * .02, def.pos[2]);
    cam.lookAt(def.target[0], def.target[1] + Math.sin(sway * 1.3) * .02, def.target[2]);
  }

  resize(w, h) {
    this.officeCamera.aspect = w / h;
    this.officeCamera.updateProjectionMatrix();
    this.menuCamera.aspect = w / h;
    this.menuCamera.updateProjectionMatrix();
    this.securityCamera.aspect = w / h;
    this.securityCamera.updateProjectionMatrix();
  }

  update(dt, time, state = {}) {
    this.time += dt;
    this.menuTime += dt;
    const t = this.time;

    // character rigs
    for (const id of Object.keys(this.characters)) {
      const c = this.characters[id];
      if (c.visible) animateCharacter(c, t, c.userData.mode || 'idle');
    }

    // fan
    if (this.fanRotor) this.fanRotor.rotation.z += dt * 14;

    // menu drift
    if (this.menuMode) {
      this.menuCamera.position.x = Math.sin(t * .12) * .7;
      this.menuCamera.position.y = 2.28 + Math.sin(t * .19) * .035;
      this.menuCamera.lookAt(0, 1.38, -29);
      if (this.stageLights) {
        this.stageLights.forEach((l, i) => {
          l.intensity = 22 + Math.sin(t * .7 + i * 2) * 5;
          l.color.setHex(i === 1 ? 0xd94242 : 0xffd9a4);
        });
      }
    } else if (state.security) {
      this.setActiveCamera(state.security);
    }

    // door motion
    ['left', 'right'].forEach(side => {
      const target = this._doorTarget[side] || 0;
      const cur = this._doorProgress[side] || 0;
      const next = cur + (target - cur) * Math.min(1, dt * 8.5);
      this._doorProgress[side] = next;
      const door = this.officeDoors[side];
      if (door) door.position.y = 4.70 - next * 3.12;
      const led = side === 'left' ? this.ledL : this.ledR;
      if (led && led.material) {
        led.material.color.setHex(target > .5 ? 0xff3b3b : 0x8effa8);
        led.material.emissive.setHex(target > .5 ? 0x9a0810 : 0x2b9c4c);
        led.material.emissiveIntensity = target > .5 ? 2.2 : 1.5;
      }
    });

    // office light random Flicker
    if (!state.powerOut) {
      const chance = state.hour >= 4 ? .07 : .025;
      if (Math.random() < chance * dt * 60) this._flicker = Math.random() < .35 ? .12 : .7;
      this._flicker += (1 - this._flicker) * Math.min(1, dt * 6);
    } else {
      this._flicker = 0;
    }
    if (this.officeLightMesh) {
      const glow = state.powerOut ? 0 : this._flicker;
      this.officeLightMesh.material.emissiveIntensity = glow * 1.8;
    }
    if (!state.menu) {
      this.setOfficeLighting({
        powerOut: !!state.powerOut,
        flicker: this._flicker,
        hour: state.hour || 0,
        redAlert: !!state.redAlert
      });
    }

    // hall flicker
    if (this.flickerWest) {
      const f = (Math.sin(t * 17.3) > .72 ? .14 : 1) * (Math.random() > .985 ? .2 : 1);
      this.flickerWest.material.emissiveIntensity = 1.8 * f;
    }
    if (this.flickerEast) {
      const f = (Math.sin(t * 13.7 + 1) > .82 ? .1 : 1);
      this.flickerEast.material.emissiveIntensity = 1.8 * f;
    }
    if (this.storageBulb) {
      const f = Math.random() > .96 ? .1 : (0.85 + Math.sin(t * 3) * .15);
      this.storageBulb.material.emissiveIntensity = 1.8 * f;
      this.storageLight.intensity = 2.6 * f;
    }
    if (this.kitchenRed) this.kitchenRed.intensity = 1.2 + Math.sin(t * 2.4) * .3;
    if (this.emergencyLight) this.emergencyLight.intensity = (state.powerOut ? 2.4 : 1.2) + Math.sin(t * 1.1) * .2;
    if (this.officeVentMesh) {
      const ventAlert = !!state.danger?.vent;
      const pulse = ventAlert ? 1.7 + Math.sin(t * 11) * .8 : 0;
      this.officeVentMesh.material.emissive.setHex(ventAlert ? 0xff1a24 : 0x1a0507);
      this.officeVentMesh.material.emissiveIntensity = ventAlert ? pulse : .9;
      if (this.officeVentLight) this.officeVentLight.intensity = ventAlert ? 5 + Math.sin(t * 11) * 2.4 : 0;
    }
    if (this.officeManifestLight) {
      this.officeManifestLight.intensity = state.redAlert ? 5.2 + Math.sin(t * 9) * 1.8 : 0;
    }

    // dust drift
    if (this.dustSystems) {
      for (const d of this.dustSystems) {
        const arr = d.positions;
        for (let i = 0; i < arr.length; i += 3) {
          arr[i + 1] += ((Math.sin(t * .25 + i) * .5 + .5) - .5) * dt * .06;
          arr[i] += Math.sin(t * .18 + i * .3) * dt * .012;
          if (arr[i + 1] > 4) arr[i + 1] = .4;
        }
        d.points.geometry.attributes.position.needsUpdate = true;
      }
    }
    if (this.petals) this.petals.rotation.y += dt * .006;

    // monitor drawing at 5fps (canvas upload is intentionally throttled)
    if (this.monitorCtx && time - this._lastMonitorDraw > .20) {
      this._lastMonitorDraw = time;
      this._drawMonitor(state);
    }

    // wall clock
    if (time - this._lastClockDraw > 1) {
      this._lastClockDraw = time;
      this._updateClock(state.hourFloat || 0);
    }
  }

  _drawMonitor(state) {
    const ctx = this.monitorCtx;
    const w = this.monitorCanvas.width, h = this.monitorCanvas.height;
    ctx.fillStyle = '#050c09'; ctx.fillRect(0, 0, w, h);
    // static (pre-rendered tiles)
    if (this.monitorNoise) {
      ctx.drawImage(this.monitorNoise[this._noiseIndex++ % this.monitorNoise.length], 0, 0);
    }
    // camera window
    ctx.strokeStyle = 'rgba(104,210,164,.28)'; ctx.lineWidth = 2;
    ctx.strokeRect(24, 22, w - 48, h - 80);
    ctx.fillStyle = 'rgba(87,180,141,.9)';
    ctx.font = 'bold 21px monospace';
    ctx.fillText(`CAM 0${state.monitorCam ? CAMERA_DEFS[state.monitorCam]?.index || 1 : 1}`, 40, 52);
    ctx.font = '13px monospace';
    ctx.fillStyle = 'rgba(100,190,155,.62)';
    ctx.fillText(state.monitorCam ? CAMERA_DEFS[state.monitorCam].name : 'SHOW STAGE', 40, 74);
    // crosshair
    ctx.strokeStyle = 'rgba(93,210,160,.35)';
    ctx.beginPath(); ctx.moveTo(w / 2 - 20, h / 2); ctx.lineTo(w / 2 + 20, h / 2); ctx.moveTo(w / 2, h / 2 - 20); ctx.lineTo(w / 2, h / 2 + 20); ctx.stroke();
    // bars
    ctx.fillStyle = 'rgba(70,160,124,.55)';
    ctx.fillRect(24, h - 44, 150, 9);
    ctx.fillStyle = 'rgba(70,160,124,.2)';
    ctx.fillRect(24, h - 44, 300, 9);
    ctx.fillStyle = 'rgba(160,230,200,.55)';
    ctx.font = '11px monospace';
    ctx.fillText(`${state.timeLabel || '12:00 AM'}  ·  PWR ${Math.round(state.power ?? 100)}%`, 24, h - 17);
    if (state.monitorCam) ctx.fillText('LIVE FEED', w - 126, h - 17);
    else ctx.fillText('MONITOR STANDBY', w - 184, h - 17);
    this.monitorTexture.needsUpdate = true;
  }

  _updateClock(hourFloat) {
    const totalMinutes = (hourFloat + 0) * 60;
    const hh = Math.floor(totalMinutes / 60) % 12 || 12;
    const mm = Math.floor(totalMinutes % 60);
    const ctx = this.clockTex.image.getContext('2d');
    const w = 256, h = 256;
    ctx.fillStyle = '#0b0c0b'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c8bda5'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(128, 128, 108, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#d8ceb8'; ctx.textAlign = 'center'; ctx.font = 'bold 24px monospace';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      ctx.fillText(String(i === 0 ? 12 : i), 128 + Math.cos(a) * 82, 128 + Math.sin(a) * 82 + 8);
    }
    const hourAngle = ((hh % 12) + mm / 60) / 12 * Math.PI * 2 - Math.PI / 2;
    const minAngle = (mm / 60) * Math.PI * 2 - Math.PI / 2;
    ctx.strokeStyle = '#b8212b'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(128, 128); ctx.lineTo(128 + Math.cos(hourAngle) * 48, 128 + Math.sin(hourAngle) * 48); ctx.stroke();
    ctx.strokeStyle = '#d8ceb8'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(128, 128); ctx.lineTo(128 + Math.cos(minAngle) * 70, 128 + Math.sin(minAngle) * 70); ctx.stroke();
    ctx.fillStyle = '#b8212b'; ctx.beginPath(); ctx.arc(128, 128, 7, 0, Math.PI * 2); ctx.fill();
    ctx.font = '14px monospace'; ctx.fillStyle = '#817967'; ctx.fillText('WISTERIA', 128, 210);
    this.clockTex.needsUpdate = true;
  }

  render(camera) {
    this._cullRoomLights(camera);
    this.renderer.render(this.scene, camera);
  }

  _cullRoomLights(camera) {
    if (!this.lightPool.length) return;
    const MAX_ACTIVE = 5;
    const pos = camera.getWorldPosition(this._tmpVec2);
    const ranked = [];
    for (const l of this.lightPool) {
      l.getWorldPosition(this._tmpVec);
      ranked.push({ l, d: this._tmpVec.distanceToSquared(pos), on: l.intensity > 0.02 });
    }
    ranked.sort((a, b) => (b.on - a.on) || (a.d - b.d));
    const keep = new Set();
    for (let i = 0; i < ranked.length && keep.size < MAX_ACTIVE; i++) {
      if (ranked[i].on) keep.add(ranked[i].l);
    }
    // Pad with the nearest switched-off lights so the shader light count never changes.
    for (let i = 0; i < ranked.length && keep.size < MAX_ACTIVE; i++) {
      keep.add(ranked[i].l);
    }
    for (const l of this.lightPool) l.visible = keep.has(l);
  }

  getMenuCamera() { return this.menuCamera; }
}
