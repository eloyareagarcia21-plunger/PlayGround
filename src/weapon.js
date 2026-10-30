import * as THREE from 'three';
import { muzzleTexture } from './textures.js';

const UP = new THREE.Vector3(0, 1, 0);
const RIGHT = new THREE.Vector3(1, 0, 0);

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}

function cyl(r1, r2, h, mat, seg = 12) {
  return new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat);
}

function armSegment(from, to, r1, r2, mat, seg = 10) {
  const dir = new THREE.Vector3().subVectors(to, from);
  const len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, len, seg), mat);
  m.position.copy(from).addScaledVector(dir, 0.5);
  m.quaternion.setFromUnitVectors(UP, dir.clone().normalize());
  return m;
}

function weaponTexture(hex, opts = {}) {
  const { grime = 0.5, wear = 0.6, scratch = 40 } = opts;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const base = new THREE.Color(hex);
  ctx.fillStyle = `#${base.getHexString()}`;
  ctx.fillRect(0, 0, 256, 256);
  // blotchy grime
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const r = 4 + Math.random() * 34;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const dark = Math.random() > 0.35;
    g.addColorStop(0, dark ? `rgba(10,12,12,${0.08 * grime})` : `rgba(210,220,215,${0.05 * grime})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // fine speckle
  const img = ctx.getImageData(0, 0, 256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
  // edge wear / scratches
  for (let i = 0; i < scratch; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const len = 2 + Math.random() * 22;
    ctx.strokeStyle = Math.random() > 0.4 ? `rgba(190,196,190,${0.16 * wear})` : `rgba(12,14,14,${0.22 * wear})`;
    ctx.lineWidth = Math.random() < 0.7 ? 0.7 : 1.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y + (Math.random() - 0.5) * 4);
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function decalTexture() {  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 128);
  ctx.fillStyle = 'rgba(196,210,214,0.82)';
  ctx.font = '800 52px monospace';
  ctx.fillText('VK-7', 16, 60);
  ctx.fillStyle = 'rgba(196,210,214,0.5)';
  ctx.font = '600 19px monospace';
  ctx.fillText('5.56 NATO // BLK-07', 16, 92);
  ctx.strokeStyle = 'rgba(196,210,214,0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(12, 12, 232, 104);
  // wear scratches
  ctx.strokeStyle = 'rgba(20,24,26,0.55)';
  for (let i = 0; i < 22; i++) {
    ctx.beginPath();
    const x = Math.random() * 256;
    const y = Math.random() * 128;
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.random() * 16 - 8, y + Math.random() * 5 - 2.5);
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export class Weapon {
  constructor(camera, world, effects, audio, callbacks = {}, worldCamera = camera) {
    this.camera = camera;
    this.worldCamera = worldCamera;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.callbacks = callbacks;

    this.ammo = 30;
    this.magSize = 30;
    this.reserve = 180;
    this.maxReserve = 300;
    this.fireInterval = 60 / 730;
    this.cooldown = 0;
    this.reloading = false;
    this.reloadTime = 1.95;
    this.reloadElapsed = 0;
    this.adsBlend = 0;
    this.triggerWasDown = false;
    this.recoilKick = 0;
    this.recoilRot = 0;
    this.flashTimer = 0;
    this.shots = 0;
    this.hits = 0;
    this.spread = 0.004;
    this.shakeT = 0;
    this.reloadDropped = false;

    this.group = new THREE.Group();
    this.group.position.set(0, 0, 0);
    this.group.scale.setScalar(1);
    camera.add(this.group);

    this.buildModel();
    this.buildFlash();
    this.buildFlashlight();
  }

  buildModel() {
    const metal = new THREE.MeshStandardMaterial({ map: weaponTexture(0x5a656c, { grime: 0.55, wear: 0.8, scratch: 55 }), roughness: 0.36, metalness: 0.78, envMapIntensity: 1.4 });
    const metalDark = new THREE.MeshStandardMaterial({ map: weaponTexture(0x242b2f, { grime: 0.45, wear: 0.6, scratch: 40 }), roughness: 0.48, metalness: 0.72, envMapIntensity: 1.15 });
    const tan = new THREE.MeshStandardMaterial({ map: weaponTexture(0x776548, { grime: 0.9, wear: 0.9, scratch: 80 }), roughness: 0.6, metalness: 0.1, envMapIntensity: 0.8 });
    const tanDark = new THREE.MeshStandardMaterial({ map: weaponTexture(0x564a35, { grime: 0.85, wear: 0.7, scratch: 55 }), roughness: 0.68, metalness: 0.08, envMapIntensity: 0.65 });
    const polymer = new THREE.MeshStandardMaterial({ map: weaponTexture(0x262c2f, { grime: 0.55, wear: 0.45, scratch: 30 }), roughness: 0.72, metalness: 0.16, envMapIntensity: 0.5 });
    const rubber = new THREE.MeshStandardMaterial({ color: 0x0e1113, roughness: 0.95, metalness: 0.02 });
    const glove = new THREE.MeshStandardMaterial({ color: 0x23281f, roughness: 0.92, metalness: 0.03, envMapIntensity: 0.3 });
    const glovePlate = new THREE.MeshStandardMaterial({ color: 0x33382e, roughness: 0.66, metalness: 0.22, envMapIntensity: 0.4 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x1a1f18, roughness: 0.98, metalness: 0.01, envMapIntensity: 0.2 });
    const accent = new THREE.MeshStandardMaterial({ color: 0xb07a28, roughness: 0.5, metalness: 0.7, emissive: 0x2a1603, emissiveIntensity: 1 });
    const lens = new THREE.MeshBasicMaterial({ color: 0x8fdcff, toneMapped: false });
    const reticle = new THREE.MeshBasicMaterial({ color: 0xff5a3a, toneMapped: false });
    const laser = new THREE.MeshBasicMaterial({ color: 0xff2e20, toneMapped: false });

    const m = new THREE.Group();
    this.model = m;
    m.scale.setScalar(0.58);

    // ---- receiver / upper ----
    m.add(box(0.083, 0.102, 0.31, metal, 0, 0, -0.02));
    m.add(box(0.074, 0.05, 0.36, metalDark, 0, 0.056, -0.035));
    m.add(box(0.086, 0.016, 0.24, metalDark, 0, 0.081, -0.04));
    // ejection port
    m.add(box(0.03, 0.032, 0.075, rubber, 0.045, 0.02, -0.06));
    m.add(box(0.012, 0.01, 0.05, metal, 0.058, 0.045, -0.09));
    // charging handle
    m.add(box(0.018, 0.012, 0.06, metalDark, 0.043, 0.055, 0.09));
    m.add(box(0.03, 0.02, 0.02, metalDark, 0.052, 0.055, 0.12));
    // selector
    const selector = cyl(0.008, 0.008, 0.012, accent, 8);
    selector.rotation.z = Math.PI / 2;
    selector.position.set(-0.045, -0.012, 0.03);
    m.add(selector);
    // serial / side plate
    m.add(box(0.002, 0.018, 0.07, metalDark, -0.0435, 0.008, -0.04));
    const decal = new THREE.Mesh(
      new THREE.PlaneGeometry(0.088, 0.044),
      new THREE.MeshBasicMaterial({ map: decalTexture(), transparent: true, depthWrite: false, toneMapped: false }),
    );
    decal.position.set(-0.0424, 0.008, -0.055);
    decal.rotation.y = -Math.PI / 2;
    m.add(decal);

    // ---- handguard (FDE) ----
    m.add(box(0.078, 0.082, 0.33, tan, 0, 0.005, -0.35));
    m.add(box(0.083, 0.018, 0.31, tanDark, 0, 0.047, -0.35));
    for (let i = 0; i < 6; i++) {
      const z = -0.23 - i * 0.047;
      m.add(box(0.082, 0.013, 0.026, tanDark, 0, 0.031, z));
      m.add(box(0.082, 0.013, 0.026, tanDark, 0, -0.022, z));
      // M-LOK slots on both sides
      m.add(box(0.003, 0.02, 0.032, rubber, 0.0405, -0.012, z));
      m.add(box(0.003, 0.02, 0.032, rubber, -0.0405, -0.012, z));
    }
    // top rail across the handguard
    m.add(box(0.056, 0.012, 0.34, tanDark, 0, 0.053, -0.35));
    for (let i = 0; i < 9; i++) {
      m.add(box(0.058, 0.009, 0.016, metal, 0, 0.062, -0.5 + i * 0.038));
    }
    // QD sling socket + retention screws
    const qd = cyl(0.011, 0.011, 0.006, metal, 10);
    qd.rotation.z = Math.PI / 2;
    qd.position.set(-0.042, -0.022, -0.49);
    m.add(qd);
    for (const z of [-0.24, -0.46]) {
      const screw = cyl(0.005, 0.005, 0.006, metal, 8);
      screw.rotation.z = Math.PI / 2;
      screw.position.set(0.043, -0.03, z);
      m.add(screw);
    }
    // rubber band / grip tape
    m.add(box(0.084, 0.024, 0.045, rubber, 0, 0.002, -0.27));

    // angled foregrip
    const afg = box(0.052, 0.09, 0.062, tanDark, 0, -0.086, -0.43);
    afg.rotation.x = -0.5;
    m.add(afg);
    m.add(box(0.058, 0.014, 0.07, rubber, 0, -0.13, -0.455));

    // ---- barrel / suppressor ----
    const barrel = cyl(0.0125, 0.0125, 0.24, metalDark, 14);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.006, -0.57);
    m.add(barrel);
    const supp = cyl(0.028, 0.029, 0.18, metalDark, 18);
    supp.rotation.x = Math.PI / 2;
    supp.position.set(0, 0.006, -0.735);
    m.add(supp);
    for (let i = 0; i < 4; i++) {
      const r = cyl(0.0305, 0.0305, 0.011, metal, 18);
      r.rotation.x = Math.PI / 2;
      r.position.set(0, 0.006, -0.665 - i * 0.046);
      m.add(r);
    }
    const suppTip = cyl(0.025, 0.027, 0.014, rubber, 16);
    suppTip.rotation.x = Math.PI / 2;
    suppTip.position.set(0, 0.006, -0.826);
    m.add(suppTip);

    // ---- stock ----
    m.add(box(0.05, 0.05, 0.16, metalDark, 0, 0.015, 0.205));
    const stock = box(0.058, 0.095, 0.2, tan, 0, -0.004, 0.29);
    stock.rotation.x = 0.03;
    m.add(stock);
    m.add(box(0.064, 0.105, 0.022, rubber, 0, -0.008, 0.395));
    m.add(box(0.044, 0.024, 0.12, tanDark, 0, 0.056, 0.26));
    // sling loop
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.014, 0.004, 5, 10), metalDark);
    loop.position.set(-0.036, -0.036, 0.33);
    m.add(loop);

    // ---- magazine ----
    const mag = box(0.056, 0.155, 0.082, polymer, 0, -0.115, -0.055);
    mag.rotation.x = -0.17;
    m.add(mag);
    for (let i = 0; i < 4; i++) {
      m.add(box(0.06, 0.011, 0.086, metalDark, 0, -0.065 - i * 0.031, -0.045 - i * 0.005));
    }
    m.add(box(0.062, 0.012, 0.09, rubber, 0, -0.19, -0.03));

    // ---- grip / trigger ----
    const grip = box(0.05, 0.115, 0.062, tanDark, 0, -0.1, 0.075);
    grip.rotation.x = -0.32;
    m.add(grip);
    for (let i = 0; i < 3; i++) {
      m.add(box(0.052, 0.008, 0.064, rubber, 0, -0.07 - i * 0.028, 0.062 + i * 0.009));
    }
    const guard = new THREE.Mesh(new THREE.TorusGeometry(0.033, 0.0045, 5, 12, Math.PI), metalDark);
    guard.rotation.y = Math.PI / 2;
    guard.position.set(0, -0.055, 0.008);
    m.add(guard);
    const trigger = box(0.008, 0.03, 0.012, metal, 0, -0.063, 0.022);
    trigger.rotation.x = 0.25;
    m.add(trigger);

    // ---- top rail ----
    for (let i = 0; i < 10; i++) {
      m.add(box(0.055, 0.012, 0.018, metalDark, 0, 0.097, -0.17 + i * 0.036));
    }
    // iron sights
    m.add(box(0.012, 0.045, 0.014, metalDark, 0, 0.125, -0.5));
    m.add(box(0.05, 0.012, 0.018, metalDark, 0, 0.104, -0.5));
    m.add(box(0.055, 0.032, 0.022, metalDark, 0, 0.112, 0.13));
    m.add(box(0.016, 0.04, 0.012, metalDark, 0.022, 0.134, 0.13));
    m.add(box(0.016, 0.04, 0.012, metalDark, -0.022, 0.134, 0.13));

    // ---- holographic sight ----
    m.add(box(0.05, 0.028, 0.1, metalDark, 0, 0.108, -0.06));
    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.027, 0.0032, 7, 22), metalDark);
    frame.position.set(0, 0.158, -0.06);
    m.add(frame);
    const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.0295, 0.0295, 0.007, 22, 1, true), metalDark);
    hood.rotation.x = Math.PI / 2;
    hood.position.set(0, 0.158, -0.073);
    m.add(hood);
    const glass = new THREE.Mesh(new THREE.CircleGeometry(0.0255, 22), new THREE.MeshBasicMaterial({ color: 0x2a6d80, transparent: true, opacity: 0.2, side: THREE.DoubleSide }));
    glass.position.set(0, 0.158, -0.06);
    m.add(glass);
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.0019, 10), reticle);
    dot.position.set(0, 0.158, -0.057);
    m.add(dot);
    this.reticleDot = dot;
    // sight buttons
    m.add(box(0.012, 0.01, 0.012, accent, -0.032, 0.128, -0.03));

    // ---- flashlight ----
    const fl = cyl(0.018, 0.018, 0.1, metalDark, 14);
    fl.rotation.x = Math.PI / 2;
    fl.position.set(0.048, -0.018, -0.45);
    m.add(fl);
    const flLens = new THREE.Mesh(new THREE.CircleGeometry(0.017, 14), lens);
    flLens.position.set(0.048, -0.018, -0.501);
    flLens.rotation.y = Math.PI;
    m.add(flLens);
    m.add(box(0.03, 0.016, 0.03, metalDark, 0.048, 0.001, -0.4));

    // ---- laser module ----
    m.add(box(0.026, 0.024, 0.06, metalDark, 0.047, 0.03, -0.24));
    const laserLens = new THREE.Mesh(new THREE.CircleGeometry(0.0055, 10), laser);
    laserLens.position.set(0.047, 0.03, -0.272);
    laserLens.rotation.y = Math.PI;
    m.add(laserLens);

    // ---- hands / arms ----
    // right hand wraps the pistol grip; forearm exits bottom-right of frame
    const rPalm = box(0.05, 0.078, 0.062, glove, 0.007, -0.108, 0.078);
    rPalm.rotation.x = -0.3;
    m.add(rPalm);
    for (let i = 0; i < 4; i++) {
      const f = box(0.046, 0.013, 0.017, glove, -0.005, -0.128 + i * 0.016, 0.043 + i * 0.004);
      f.rotation.x = -0.3;
      m.add(f);
      const knuckle = box(0.05, 0.012, 0.01, glovePlate, 0.026, -0.122 + i * 0.016, 0.055 + i * 0.004);
      knuckle.rotation.x = -0.3;
      m.add(knuckle);
    }
    const rThumb = box(0.018, 0.05, 0.022, glove, -0.028, -0.085, 0.06);
    rThumb.rotation.z = 0.45;
    rThumb.rotation.x = -0.2;
    m.add(rThumb);
    const rCuff = cyl(0.035, 0.039, 0.032, glovePlate, 10);
    rCuff.rotation.x = Math.PI / 2 + 0.5;
    rCuff.position.set(0.035, -0.155, 0.155);
    m.add(rCuff);
    m.add(armSegment(new THREE.Vector3(0.038, -0.17, 0.18), new THREE.Vector3(0.19, -0.34, 0.44), 0.034, 0.048, sleeve, 10));
    const rElbow = new THREE.Mesh(new THREE.SphereGeometry(0.044, 8, 6), sleeve);
    rElbow.position.set(0.19, -0.34, 0.44);
    m.add(rElbow);

    // left hand supports the handguard, forearm exits bottom-left
    const lPalm = box(0.05, 0.062, 0.075, glove, -0.028, -0.034, -0.34);
    lPalm.rotation.x = 0.08;
    lPalm.rotation.z = 0.12;
    m.add(lPalm);
    for (let i = 0; i < 4; i++) {
      const f = box(0.016, 0.05, 0.015, glove, -0.05, -0.014 + i * 0.002, -0.3 - i * 0.021);
      f.rotation.z = 0.35;
      m.add(f);
      m.add(box(0.008, 0.018, 0.014, glovePlate, -0.061, -0.002, -0.3 - i * 0.021));
    }
    const lThumb = box(0.018, 0.016, 0.06, glove, 0.006, 0.043, -0.32);
    lThumb.rotation.x = 0.15;
    m.add(lThumb);
    // fingers curling over the top of the handguard (visible in ADS)
    for (let i = 0; i < 4; i++) {
      const f = box(0.018, 0.016, 0.052, glove, 0.026, 0.06, -0.285 - i * 0.027);
      f.rotation.z = -0.18;
      f.rotation.x = 0.12;
      m.add(f);
      m.add(box(0.01, 0.008, 0.03, glovePlate, 0.03, 0.07, -0.29 - i * 0.027));
    }
    const lCuff = cyl(0.033, 0.038, 0.028, glovePlate, 10);
    lCuff.rotation.x = Math.PI / 2 - 0.6;
    lCuff.rotation.z = 0.2;
    lCuff.position.set(-0.02, -0.095, -0.29);
    m.add(lCuff);
    m.add(armSegment(new THREE.Vector3(-0.035, -0.105, -0.29), new THREE.Vector3(-0.15, -0.42, 0.0), 0.027, 0.038, sleeve, 10));
    const lElbow = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), sleeve);
    lElbow.position.set(-0.15, -0.42, 0.0);
    m.add(lElbow);
    // glove seams / wrist straps
    m.add(box(0.052, 0.006, 0.03, glovePlate, 0.007, -0.148, 0.09));
    m.add(box(0.05, 0.006, 0.03, glovePlate, -0.004, -0.073, -0.325));

    // ---- sling ----
    const slingMat = new THREE.MeshStandardMaterial({ color: 0x32362c, roughness: 1 });
    const sling = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.005, 4, 14, Math.PI), slingMat);
    sling.rotation.x = Math.PI / 2;
    sling.position.set(-0.045, -0.095, 0.08);
    sling.scale.set(0.7, 1.7, 1);
    m.add(sling);

    // muzzle anchor
    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.006, -0.845);
    m.add(this.muzzle);
    this.ejectPort = new THREE.Object3D();
    this.ejectPort.position.set(0.05, 0.032, -0.04);
    m.add(this.ejectPort);

    // markers
    this.hipPos = new THREE.Vector3(0.42, -0.375, -0.73);
    this.adsPos = new THREE.Vector3(0, -0.092, -0.58);
    this.hipYaw = 0.12;
    this.modelBaseY = this.hipPos.y;
    m.position.copy(this.hipPos);
    this.group.add(m);
    m.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = false;
        o.receiveShadow = false;
        o.frustumCulled = false;
      }
    });
  }

  buildFlash() {
    const tex = muzzleTexture();
    this.flashMat = new THREE.SpriteMaterial({ map: tex, color: 0xffc980, transparent: true, opacity: 0, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending });
    this.flash = new THREE.Sprite(this.flashMat);
    this.flash.scale.setScalar(0.32);
    this.flash.position.copy(this.muzzle.position);
    this.flash.position.z -= 0.02;
    this.model.add(this.flash);
    this.flashLight = new THREE.PointLight(0xffa040, 0, 9, 2);
    this.flashLight.position.set(0.08, -0.04, -0.5);
    this.group.add(this.flashLight);
  }

  buildFlashlight() {
    this.flashlight = new THREE.SpotLight(0xd8ecff, 34, 42, 0.46, 0.5, 1.15);
    this.flashlight.position.set(0.1, -0.08, -0.05);
    this.flashlightTarget = new THREE.Object3D();
    this.flashlightTarget.position.set(0, 0, -10);
    this.worldCamera.add(this.flashlight, this.flashlightTarget);
    this.flashlight.target = this.flashlightTarget;
    this.flashlightOn = true;
  }

  reset() {
    this.ammo = 30;
    this.reserve = 180;
    this.reloading = false;
    this.reloadElapsed = 0;
    this.cooldown = 0;
    this.adsBlend = 0;
    this.recoilKick = 0;
    this.shots = 0;
    this.hits = 0;
    this.group.position.set(0, 0, 0);
    this.model.position.copy(this.hipPos);
    this.model.rotation.set(0, 0, 0);
    this.callbacks.onAmmo?.(this.ammo, this.reserve, false, 0);
  }

  startReload() {
    if (this.reloading || this.ammo >= this.magSize || this.reserve <= 0) return;
    this.reloading = true;
    this.reloadElapsed = 0;
    this.reloadDropped = false;
    this.audio?.reload();
    this.callbacks.onReloadStart?.();
  }

  addAmmo(amount) {
    this.reserve = Math.min(this.maxReserve, this.reserve + amount);
    this.callbacks.onAmmo?.(this.ammo, this.reserve, this.reloading, this.reloadElapsed / this.reloadTime);
  }

  getAimDirection(spread) {
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    if (spread > 0) {
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * spread;
      dir.addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r).normalize();
    }
    return dir;
  }

  fire(player, enemies) {
    if (this.reloading || this.dead) return;
    if (this.cooldown > 0) return;
    if (this.ammo <= 0) {
      this.audio?.empty();
      this.cooldown = 0.3;
      this.startReload();
      return;
    }
    this.ammo--;
    this.cooldown = this.fireInterval;
    this.shots++;
    this.audio?.shot(player.ads);
    this.callbacks.onAmmo?.(this.ammo, this.reserve, this.reloading, 0);

    this.camera.updateMatrixWorld(true);
    const moving = Math.min(1, player.moveState.speed / 9.6);
    const spreadBase = player.ads ? 0.0014 : 0.008;
    const spread = spreadBase + moving * (player.ads ? 0.0025 : 0.012) + (player.grounded ? 0 : 0.02);
    const dir = this.getAimDirection(spread);
    const origin = new THREE.Vector3().setFromMatrixPosition(this.worldCamera.matrixWorld);
    const muzzleLocal = this.muzzle.getWorldPosition(new THREE.Vector3());
    const muzzleWorld = muzzleLocal.applyMatrix4(this.worldCamera.matrixWorld);

    // recoil
    const kickPitch = (player.ads ? 0.0035 : 0.0062) * (0.85 + Math.random() * 0.3);
    const kickYaw = (Math.random() - 0.5) * (player.ads ? 0.002 : 0.004);
    player.addRecoil(kickPitch, kickYaw);
    this.recoilKick = Math.min(1.4, this.recoilKick + 0.55);
    this.recoilRot = Math.min(0.35, this.recoilRot + 0.12);
    this.shakeT = 0.07;

    // muzzle flash
    this.flashTimer = 0.055 + Math.random() * 0.02;
    this.flash.material.rotation = Math.random() * Math.PI * 2;
    this.flash.scale.setScalar(0.32 + Math.random() * 0.26);
    this.flashMat.opacity = 0.95;
    this.flashLight.intensity = 18;
    this.effects.muzzleFlash(muzzleWorld, dir);
    this.effects.tracer(muzzleWorld, origin.clone().addScaledVector(dir, 70), 0xffdca0, 0.045);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    this.effects.casing(this.ejectPort.getWorldPosition(new THREE.Vector3()), right);

    // hitscan
    let worldHit = this.world.raycast(origin, dir, 140);
    let enemyHit = null;
    for (const e of enemies) {
      if (!e.alive) continue;
      const hit = e.raycast(origin, dir, worldHit ? worldHit.distance : 140);
      if (hit && (!enemyHit || hit.distance < enemyHit.distance)) enemyHit = hit;
    }

    if (enemyHit) {
      this.hits++;
      const kind = enemyHit.part === 'head' ? 'head' : 'body';
      const mult = enemyHit.part === 'head' ? 2.4 : enemyHit.part === 'limb' ? 0.72 : 1;
      const falloff = THREE.MathUtils.clamp(1 - Math.max(0, enemyHit.distance - 22) / 110, 0.55, 1);
      const dmg = 27 * mult * falloff;
      const killed = enemyHit.enemy.takeDamage(dmg, enemyHit.part, enemyHit.point, dir);
      this.callbacks.onHit?.({ head: enemyHit.part === 'head', kill: killed, enemy: enemyHit.enemy, point: enemyHit.point });
      this.audio?.hit(enemyHit.part === 'head');
      this.effects.impact(enemyHit.point, dir.clone().negate(), 'flesh', dir);
      this.effects.tracer(muzzleWorld, enemyHit.point, 0xffe0b0, 0.03);
      if (killed) {
        this.audio?.kill();
        this.callbacks.onKill?.(enemyHit.enemy, enemyHit.part === 'head');
      }
    } else if (worldHit) {
      this.effects.impact(worldHit.point, worldHit.normal, 'metal', dir);
      this.callbacks.onMiss?.();
    } else {
      this.callbacks.onMiss?.();
    }
  }

  update(dt, player, input, enemies) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.flashTimer = Math.max(0, this.flashTimer - dt);
    this.shakeT = Math.max(0, this.shakeT - dt);
    this.recoilKick *= Math.max(0, 1 - dt * 15);
    this.recoilRot *= Math.max(0, 1 - dt * 12);

    const wantAds = input.mouse.right && !this.reloading;
    this.adsBlend += ((wantAds ? 1 : 0) - this.adsBlend) * Math.min(1, dt * 13);

    // reload
    if (this.reloading) {
      this.reloadElapsed += dt;
      if (!this.reloadDropped && this.reloadElapsed > 0.35) {
        this.reloadDropped = true;
      }
      this.callbacks.onReloadProgress?.(Math.min(1, this.reloadElapsed / this.reloadTime));
      if (this.reloadElapsed >= this.reloadTime) {
        const needed = this.magSize - this.ammo;
        const take = Math.min(needed, this.reserve);
        this.ammo += take;
        this.reserve -= take;
        this.reloading = false;
        this.reloadElapsed = 0;
        this.callbacks.onAmmo?.(this.ammo, this.reserve, false, 0);
        this.callbacks.onReloadEnd?.();
      }
    } else {
      this.callbacks.onReloadProgress?.(0);
    }

    // firing
    const trigger = input.mouse.left && !player.dead;
    if (trigger && !this.reloading) {
      if (this.cooldown <= 0) this.fire(player, enemies);
    }
    this.triggerWasDown = trigger;

    // weapon animation
    const speed = player.moveState.speed;
    const bobT = player.bobTime;
    const bobAmt = player.bobAmount;
    const sprintDamp = player.sprinting ? 1 : 0;
    const swayX = Math.cos(bobT) * 0.012 * bobAmt + (player.sprinting ? Math.sin(bobT) * 0.02 : 0);
    const swayY = Math.abs(Math.sin(bobT)) * -0.01 * bobAmt;

    const targetPos = new THREE.Vector3().copy(this.hipPos).lerp(this.adsPos, this.adsBlend);
    targetPos.x += swayX * (1 - this.adsBlend * 0.85);
    targetPos.y += swayY * (1 - this.adsBlend * 0.85) + Math.sin(player.time * 1.6) * 0.0025;
    targetPos.z += this.recoilKick * 0.055;
    targetPos.y += this.recoilRot * 0.09;
    targetPos.x += sprintDamp * 0.035;
    targetPos.y += sprintDamp * -0.02;

    if (this.reloading) {
      const p = this.reloadElapsed / this.reloadTime;
      const k = p < 0.3 ? p / 0.3 : p > 0.75 ? 1 - (p - 0.75) / 0.25 : 1;
      targetPos.y -= 0.13 * k;
      targetPos.z += 0.04 * k;
      this.model.rotation.z = 0.22 * k;
      this.model.rotation.x = -0.28 * k;
    } else {
      const restZ = 0.028 * (1 - this.adsBlend);
      this.model.rotation.z += (restZ - this.model.rotation.z) * Math.min(1, dt * 10);
      this.model.rotation.x += (this.recoilRot * 0.5 - this.model.rotation.x) * Math.min(1, dt * 15);
    }

    this.model.position.lerp(targetPos, Math.min(1, dt * 16));
    this.model.rotation.y = (1 - this.adsBlend) * this.hipYaw + this.recoilRot * 0.1;

    // flash fade
    if (this.flashTimer > 0) {
      this.flashMat.opacity = Math.min(1, this.flashTimer / 0.05) * 0.95;
      this.flashLight.intensity = 18 * (this.flashTimer / 0.07);
    } else {
      this.flashMat.opacity = 0;
      this.flashLight.intensity = 0;
    }

    // reticle brightness in ADS
    if (this.reticleDot) this.reticleDot.material.color.setHex(player.ads ? 0xff3b30 : 0xff6a45);
    this.flashlight.intensity = player.ads ? 26 : 34;
    this.flashlight.visible = this.flashlightOn;

    this.spread = (player.ads ? 0.0014 : 0.008) + Math.min(1, speed / 9.6) * (player.ads ? 0.0025 : 0.012);
    this.callbacks.onSpread?.(this.spread, player.ads);
  }
}
