import * as THREE from 'three';

let seed = 1337;
function rnd() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}

function canvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function toTexture(c, repeat = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function heightToNormal(heightCanvas, strength = 2.4) {
  const size = heightCanvas.width;
  const ctx = heightCanvas.getContext('2d');
  const src = ctx.getImageData(0, 0, size, size).data;
  const out = ctx.createImageData(size, size);
  const at = (x, y) => src[((y + size) % size * size + ((x + size) % size)) * 4] / 255;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const len = Math.hypot(dx, dy, 1);
      const i = (y * size + x) * 4;
      out.data[i] = ((-dx / len) * 0.5 + 0.5) * 255;
      out.data[i + 1] = ((-dy / len) * 0.5 + 0.5) * 255;
      out.data[i + 2] = ((1 / len) * 0.5 + 0.5) * 255;
      out.data[i + 3] = 255;
    }
  }
  const c = canvas(size);
  c.getContext('2d').putImageData(out, 0, 0);
  return c;
}

function grainFill(ctx, size, alpha = 0.12, scale = 1) {
  const img = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (rnd() - 0.5) * 255 * alpha;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

export function concreteTexture(repeat = 4) {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const h = canvas(size);
  const hctx = h.getContext('2d');

  ctx.fillStyle = '#2b3033';
  ctx.fillRect(0, 0, size, size);
  hctx.fillStyle = '#808080';
  hctx.fillRect(0, 0, size, size);

  // large mottled patches
  for (let i = 0; i < 90; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const r = 20 + rnd() * 110;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const v = 34 + rnd() * 26;
    g.addColorStop(0, `rgba(${v},${v + 3},${v + 4},${0.16 + rnd() * 0.2})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);

    const hg = hctx.createRadialGradient(x, y, 0, x, y, r);
    hg.addColorStop(0, `rgba(255,255,255,${0.06 + rnd() * 0.1})`);
    hg.addColorStop(1, 'rgba(0,0,0,0)');
    hctx.fillStyle = hg;
    hctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  // aggregate speckle
  for (let i = 0; i < 9000; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const v = 40 + rnd() * 70;
    ctx.fillStyle = `rgba(${v},${v},${v},${0.14 + rnd() * 0.3})`;
    ctx.fillRect(x, y, 1 + rnd() * 1.6, 1 + rnd() * 1.6);
  }

  // seams / expansion joints
  ctx.strokeStyle = 'rgba(10,12,13,0.85)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, size / 2);
  ctx.lineTo(size, size / 2);
  ctx.moveTo(size / 2, 0);
  ctx.lineTo(size / 2, size);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(90,98,100,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, size / 2 + 3);
  ctx.lineTo(size, size / 2 + 3);
  ctx.stroke();

  // cracks
  for (let i = 0; i < 8; i++) {
    let x = rnd() * size;
    let y = rnd() * size;
    ctx.strokeStyle = `rgba(8,10,11,${0.25 + rnd() * 0.35})`;
    ctx.lineWidth = 0.7 + rnd();
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let j = 0; j < 14; j++) {
      x += (rnd() - 0.5) * 40;
      y += (rnd() - 0.5) * 40;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  grainFill(ctx, size, 0.16);

  const map = toTexture(c, repeat);
  const normal = new THREE.CanvasTexture(heightToNormal(h, 2.0));
  normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(repeat, repeat);
  normal.anisotropy = 8;
  return { map, normal };
}

export function metalTexture(repeat = 3) {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#20262a';
  ctx.fillRect(0, 0, size, size);

  // brushed streaks
  for (let i = 0; i < 1600; i++) {
    const y = rnd() * size;
    const x = rnd() * size;
    const w = 20 + rnd() * 120;
    const v = 44 + rnd() * 40;
    ctx.fillStyle = `rgba(${v},${v + 4},${v + 6},${0.05 + rnd() * 0.14})`;
    ctx.fillRect(x, y, w, 0.8 + rnd());
  }
  // pitting
  for (let i = 0; i < 700; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    ctx.fillStyle = `rgba(8,10,12,${0.15 + rnd() * 0.4})`;
    ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  // scuffs
  for (let i = 0; i < 22; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const g = ctx.createLinearGradient(x, y, x + 80, y + 20);
    g.addColorStop(0, 'rgba(160,175,180,0)');
    g.addColorStop(0.5, `rgba(160,175,180,${0.06 + rnd() * 0.12})`);
    g.addColorStop(1, 'rgba(160,175,180,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, 90, 3 + rnd() * 8);
  }
  grainFill(ctx, size, 0.18);
  return toTexture(c, repeat);
}

export function hazardTexture(repeat = 1) {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#c8951c';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#141414';
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.rotate(-Math.PI / 4);
  const step = 58;
  for (let i = -size; i < size; i += step) {
    ctx.fillRect(i, -size, step / 2, size * 2);
  }
  ctx.restore();
  // wear
  for (let i = 0; i < 800; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    ctx.fillStyle = `rgba(20,20,20,${rnd() * 0.35})`;
    ctx.fillRect(x, y, 1 + rnd() * 4, 1 + rnd() * 3);
  }
  grainFill(ctx, size, 0.1);
  return toTexture(c, repeat);
}

export function signTexture(text, color = '#62e7ff', w = 512, h = 256) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#05090b';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.globalAlpha = 0.85;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  ctx.globalAlpha = 1;
  ctx.font = `800 ${Math.floor(h * 0.34)}px "Arial Narrow", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = color;
  ctx.shadowBlur = 26;
  ctx.fillStyle = color;
  ctx.fillText(text, w / 2, h / 2 + 4);
  ctx.shadowBlur = 0;
  ctx.font = `600 ${Math.floor(h * 0.09)}px monospace`;
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.5;
  ctx.fillText('SECTOR 07 // RESTRICTED', w / 2, h - 38);
  grainFill(ctx, Math.min(w, h), 0.1);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function windowTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#050708';
  ctx.fillRect(0, 0, 256, 512);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 7; x++) {
      const on = rnd() > 0.45;
      if (!on) continue;
      const warm = rnd() > 0.5;
      ctx.fillStyle = warm
        ? `rgba(255,${150 + rnd() * 60},${60 + rnd() * 40},${0.35 + rnd() * 0.5})`
        : `rgba(${120 + rnd() * 60},${200 + rnd() * 40},255,${0.25 + rnd() * 0.4})`;
      ctx.fillRect(8 + x * 35, 8 + y * 31, 24, 18);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function radialSprite(size, stops) {
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [p, col] of stops) g.addColorStop(p, col);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export const sparkTexture = () => radialSprite(64, [
  [0, 'rgba(255,255,255,1)'],
  [0.25, 'rgba(255,230,170,0.95)'],
  [0.6, 'rgba(255,130,40,0.55)'],
  [1, 'rgba(255,80,0,0)'],
]);

export const smokeTexture = () => radialSprite(128, [
  [0, 'rgba(190,205,215,0.55)'],
  [0.45, 'rgba(120,135,145,0.2)'],
  [1, 'rgba(70,80,90,0)'],
]);

export const glowTexture = () => radialSprite(128, [
  [0, 'rgba(255,255,255,0.95)'],
  [0.18, 'rgba(180,240,255,0.55)'],
  [0.55, 'rgba(80,180,220,0.14)'],
  [1, 'rgba(40,120,180,0)'],
]);

export const muzzleTexture = () => {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.translate(size / 2, size / 2);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
  g.addColorStop(0, 'rgba(255,255,240,1)');
  g.addColorStop(0.12, 'rgba(255,240,180,0.98)');
  g.addColorStop(0.3, 'rgba(255,170,50,0.75)');
  g.addColorStop(0.65, 'rgba(255,90,10,0.18)');
  g.addColorStop(1, 'rgba(255,60,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    const r = (size / 2) * (0.42 + 0.58 * Math.pow(Math.abs(Math.sin(a * 5)), 2) + rnd() * 0.16);
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
};

export function bulletHoleTexture() {
  const size = 64;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 26);
  g.addColorStop(0, 'rgba(4,4,4,1)');
  g.addColorStop(0.35, 'rgba(14,14,14,0.95)');
  g.addColorStop(0.62, 'rgba(55,55,55,0.55)');
  g.addColorStop(1, 'rgba(90,90,90,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 26; i++) {
    const a = rnd() * Math.PI * 2;
    const r = 10 + rnd() * 18;
    ctx.fillStyle = `rgba(20,20,20,${rnd() * 0.4})`;
    ctx.fillRect(32 + Math.cos(a) * r, 32 + Math.sin(a) * r, 1.5, 1.5);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function puddleAlphaTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  for (let i = 0; i < 26; i++) {
    const x = 40 + rnd() * (size - 80);
    const y = 40 + rnd() * (size - 80);
    const r = 12 + rnd() * 40;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.75)');
    g.addColorStop(0.65, 'rgba(255,255,255,0.35)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * (0.4 + rnd() * 0.5), rnd() * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}
