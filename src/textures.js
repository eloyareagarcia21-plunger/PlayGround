import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * Procedural texture atelier.  Every surface in the game is generated
 * at runtime so the experience ships as code only: no external assets.
 * ------------------------------------------------------------------ */

let seed = 90210
export function rand() {
  seed = (seed * 1664525 + 1013904223) >>> 0
  return seed / 4294967296
}
export function randRange(a, b) { return a + rand() * (b - a) }
export function randInt(a, b) { return Math.floor(randRange(a, b + 1)) }

const smooth = (t) => t * t * (3 - 2 * t)
function hash2(x, y) {
  let h = x * 374761393 + y * 668265263
  h = (h ^ (h >> 13)) * 1274126177
  return ((h ^ (h >> 16)) >>> 0) / 4294967296
}
function valueNoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y)
  const xf = smooth(x - xi), yf = smooth(y - yi)
  const a = hash2(xi, yi), b = hash2(xi + 1, yi)
  const c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1)
  return (a + (b - a) * xf) * (1 - yf) + (c + (d - c) * xf) * yf
}
export function fbm(x, y, octaves = 4) {
  let sum = 0, amp = 0.5, freq = 1
  for (let i = 0; i < octaves; i++) {
    sum += valueNoise(x * freq, y * freq) * amp
    freq *= 2.03
    amp *= 0.5
  }
  return sum
}

function canvas(size = 512, h = size) {
  const c = document.createElement('canvas')
  c.width = size
  c.height = h
  return c
}

function tex(c, { srgb = false, repeat = [1, 1], aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat[0], repeat[1])
  t.anisotropy = aniso
  if (srgb) t.colorSpace = THREE.SRGBColorSpace
  t.needsUpdate = true
  return t
}

function drawCrack(ctx, w, h, x, y, len, width, alpha = 0.5) {
  ctx.save()
  ctx.strokeStyle = `rgba(6,7,8,${alpha})`
  ctx.lineWidth = width
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x, y)
  let a = rand() * Math.PI * 2
  for (let i = 0; i < len; i++) {
    a += (rand() - 0.5) * 0.9
    x += Math.cos(a) * 9
    y += Math.sin(a) * 9
    ctx.lineTo(x, y)
    if (rand() < 0.08) {
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
    }
  }
  ctx.stroke()
  ctx.restore()
}

/* ----------------------------- asphalt ----------------------------- */
function asphaltMaps() {
  const S = 1024
  const alb = canvas(S)
  const a = alb.getContext('2d')
  const img = a.createImageData(S, S)
  const rough = canvas(S)
  const r = rough.getContext('2d')
  const rimg = r.createImageData(S, S)
  const bump = canvas(S)
  const b = bump.getContext('2d')
  const bimg = b.createImageData(S, S)
  const puddle = []
  for (let i = 0; i < 16; i++) puddle.push([rand() * S, rand() * S, 60 + rand() * 190])

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = (y * S + x) * 4
      const n = fbm(x / 90, y / 90, 4)
      const grain = valueNoise(x / 2.2, y / 2.2)
      const stain = fbm(x / 320 + 7, y / 320 + 3, 3)
      let v = 32 + n * 30 + grain * 16 - stain * 12
      let wet = 0
      for (const [px, py, rad] of puddle) {
        const d = Math.hypot(x - px, y - py) / rad
        if (d < 1) wet = Math.max(wet, smooth(1 - d))
      }
      wet = Math.max(wet, smooth(THREE.MathUtils.clamp((fbm(x / 200 + 23, y / 200 + 11, 3) - 0.62) * 5, 0, 1)))
      const rr = Math.round(14 + v * 0.42 + wet * 22)
      const gg = Math.round(rr * 1.01)
      const bb = Math.round(rr * 1.08)
      img.data[i] = rr
      img.data[i + 1] = gg
      img.data[i + 2] = bb
      img.data[i + 3] = 255
      const ro = 55 + (1 - wet) * 155 - n * 25 + grain * 20
      rimg.data[i] = rimg.data[i + 1] = rimg.data[i + 2] = Math.max(10, Math.min(255, ro))
      rimg.data[i + 3] = 255
      const bv = 90 + grain * 90 + n * 50 - wet * 40
      bimg.data[i] = bimg.data[i + 1] = bimg.data[i + 2] = Math.max(20, Math.min(255, bv))
      bimg.data[i + 3] = 255
    }
  }
  a.putImageData(img, 0, 0)
  r.putImageData(rimg, 0, 0)
  b.putImageData(bimg, 0, 0)

  // tar seams, cracks, faded paint
  a.strokeStyle = 'rgba(8,9,10,0.55)'
  a.lineWidth = 5
  for (let i = 0; i < 7; i++) {
    a.beginPath()
    let y = rand() * S
    a.moveTo(0, y)
    for (let x = 0; x < S; x += 32) { y += (rand() - 0.5) * 14; a.lineTo(x, y) }
    a.stroke()
  }
  for (let i = 0; i < 26; i++) drawCrack(a, S, S, rand() * S, rand() * S, 14 + rand() * 10, 1 + rand(), 0.4)
  a.save()
  a.translate(S / 2, S / 2)
  a.rotate(-0.1)
  a.globalAlpha = 0.30
  a.fillStyle = '#c9bda0'
  for (let i = -4; i < 5; i++) a.fillRect(i * 120, -S / 2, 26, S)
  a.restore()
  // paint chips on the wet surface
  a.globalAlpha = 0.16
  for (let i = 0; i < 900; i++) {
    a.fillStyle = rand() > 0.5 ? '#9aa4ac' : '#0b0d0e'
    a.fillRect(rand() * S, rand() * S, 1 + rand() * 3, 1 + rand() * 3)
  }
  a.globalAlpha = 1

  return {
    map: tex(alb, { srgb: true, repeat: [12, 12], aniso: 16 }),
    roughnessMap: tex(rough, { repeat: [12, 12], aniso: 8 }),
    bumpMap: tex(bump, { repeat: [12, 12], aniso: 4 }),
  }
}

/* ----------------------------- concrete ---------------------------- */
function concreteMaps() {
  const S = 512
  const alb = canvas(S), rough = canvas(S), bump = canvas(S)
  const a = alb.getContext('2d'), r = rough.getContext('2d'), b = bump.getContext('2d')
  const img = a.createImageData(S, S), rimg = r.createImageData(S, S), bimg = b.createImageData(S, S)
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = (y * S + x) * 4
      const n = fbm(x / 60, y / 60, 4)
      const grain = valueNoise(x / 2.5, y / 2.5)
      const streak = fbm(x / 180 + 40, y / 40 + 9, 3)
      const v = 78 + n * 54 + grain * 22 - Math.max(0, streak - 0.55) * 95
      img.data[i] = v * 1.02
      img.data[i + 1] = v * 0.99
      img.data[i + 2] = v * 0.92
      img.data[i + 3] = 255
      const ro = 190 + grain * 35 - n * 30
      rimg.data[i] = rimg.data[i + 1] = rimg.data[i + 2] = ro
      rimg.data[i + 3] = 255
      const bv = 100 + n * 100 + grain * 55
      bimg.data[i] = bimg.data[i + 1] = bimg.data[i + 2] = bv
      bimg.data[i + 3] = 255
    }
  }
  a.putImageData(img, 0, 0); r.putImageData(rimg, 0, 0); b.putImageData(bimg, 0, 0)
  a.strokeStyle = 'rgba(30,32,30,0.35)'
  a.lineWidth = 2
  for (let y = 0; y < S; y += 128) {
    a.beginPath(); a.moveTo(0, y); a.lineTo(S, y); a.stroke()
    b.strokeStyle = 'rgba(20,20,20,0.6)'
    b.beginPath(); b.moveTo(0, y + 2); b.lineTo(S, y + 2); b.stroke()
  }
  for (let i = 0; i < 10; i++) drawCrack(a, S, S, rand() * S, rand() * S, 10, 0.8, 0.35)
  // form-tie holes
  for (let i = 0; i < 8; i++) {
    const x = 30 + rand() * (S - 60), y = 30 + rand() * (S - 60)
    a.fillStyle = 'rgba(24,26,24,0.55)'
    a.beginPath(); a.arc(x, y, 3.4, 0, 7); a.fill()
  }
  return {
    map: tex(alb, { srgb: true, repeat: [2, 2] }),
    roughnessMap: tex(rough, { repeat: [2, 2] }),
    bumpMap: tex(bump, { repeat: [2, 2] }),
  }
}

/* ---------------------------- containers --------------------------- */
function containerTexture(base, rust = '#7a3a1e') {
  const W = 512, H = 512
  const alb = canvas(W, H), bump = canvas(W, H)
  const a = alb.getContext('2d'), b = bump.getContext('2d')
  a.fillStyle = base
  a.fillRect(0, 0, W, H)
  const grad = a.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, 'rgba(255,255,255,0.10)')
  grad.addColorStop(0.5, 'rgba(0,0,0,0)')
  grad.addColorStop(1, 'rgba(0,0,0,0.28)')
  a.fillStyle = grad
  a.fillRect(0, 0, W, H)
  // corrugation
  for (let x = 0; x < W; x += 8) {
    const v = Math.sin((x / W) * Math.PI * 64)
    a.fillStyle = `rgba(${v > 0 ? '255,255,255' : '0,0,0'},${Math.abs(v) * 0.10})`
    a.fillRect(x, 0, 4, H)
    b.fillStyle = v > 0 ? '#d0d0d0' : '#202020'
    b.fillRect(x, 0, 4, H)
  }
  // top/bottom rails
  a.fillStyle = 'rgba(0,0,0,0.35)'
  a.fillRect(0, 0, W, 14); a.fillRect(0, H - 18, W, 18)
  a.fillStyle = 'rgba(255,255,255,0.10)'
  a.fillRect(0, 14, W, 4)
  // rust blooms and drips
  for (let i = 0; i < 70; i++) {
    const x = rand() * W, y = rand() * H
    const rr = 4 + rand() * 38
    const g = a.createRadialGradient(x, y, 0, x, y, rr)
    g.addColorStop(0, rust + 'cc')
    g.addColorStop(0.5, rust + '55')
    g.addColorStop(1, rust + '00')
    a.fillStyle = g
    a.beginPath(); a.arc(x, y, rr, 0, 7); a.fill()
  }
  for (let i = 0; i < 24; i++) {
    a.fillStyle = `rgba(90,40,20,${0.05 + rand() * 0.12})`
    a.fillRect(rand() * W, H * 0.35 + rand() * H * 0.6, 1 + rand() * 3, 30 + rand() * 120)
  }
  // painted stencil
  a.save()
  a.translate(W * 0.5, H * 0.6)
  a.rotate(-0.02)
  a.globalAlpha = 0.55
  a.fillStyle = '#ded9c7'
  a.font = 'bold 34px "Arial Narrow", Arial, sans-serif'
  a.textAlign = 'center'
  a.fillText('BLACKSITE LOGISTICS', 0, 0)
  a.font = 'bold 17px "Arial Narrow", Arial, sans-serif'
  a.fillText('SECTOR 07  //  HANDLE WITH CARE', 0, 26)
  a.restore()
  a.globalAlpha = 1
  // scuffs
  for (let i = 0; i < 400; i++) {
    a.fillStyle = rand() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.10)'
    a.fillRect(rand() * W, rand() * H, 1 + rand() * 5, 1 + rand() * 2)
  }
  return {
    map: tex(alb, { srgb: true, repeat: [1, 1] }),
    bumpMap: tex(bump, { repeat: [1, 1] }),
  }
}

/* ------------------------------- crate ----------------------------- */
function woodMaps() {
  const S = 512
  const c = canvas(S)
  const x = c.getContext('2d')
  x.fillStyle = '#5c4a33'
  x.fillRect(0, 0, S, S)
  for (let p = 0; p < 5; p++) {
    const y = p * (S / 5)
    x.fillStyle = `rgb(${82 + rand() * 18},${64 + rand() * 14},${44 + rand() * 10})`
    x.fillRect(0, y + 2, S, S / 5 - 4)
    for (let i = 0; i < 80; i++) {
      x.strokeStyle = `rgba(20,12,6,${0.04 + rand() * 0.10})`
      x.lineWidth = 0.6 + rand()
      x.beginPath()
      const yy = y + rand() * (S / 5)
      x.moveTo(0, yy)
      x.bezierCurveTo(S * 0.3, yy + (rand() - 0.5) * 9, S * 0.7, yy + (rand() - 0.5) * 9, S, yy + (rand() - 0.5) * 6)
      x.stroke()
    }
  }
  x.strokeStyle = 'rgba(18,12,7,0.6)'
  x.lineWidth = 7
  x.strokeRect(3, 3, S - 6, S - 6)
  x.fillStyle = 'rgba(20,14,8,0.55)'
  x.font = 'bold 44px "Arial Narrow", Arial, sans-serif'
  x.textAlign = 'center'
  x.fillText('SUPPLY 07', S / 2, S / 2 + 8)
  x.font = 'bold 20px monospace'
  x.fillText('CLASSIFIED', S / 2, S / 2 + 42)
  return { map: tex(c, { srgb: true, repeat: [1, 1] }) }
}

/* -------------------------------- sky ------------------------------ */
function skyEquirect() {
  const W = 1024, H = 512
  const c = canvas(W, H)
  const x = c.getContext('2d')
  const g = x.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0.0, '#050a12')
  g.addColorStop(0.35, '#0b1826')
  g.addColorStop(0.56, '#223b4d')
  g.addColorStop(0.63, '#6d6250')
  g.addColorStop(0.68, '#a86a38')
  g.addColorStop(0.72, '#4a3a2c')
  g.addColorStop(0.8, '#0d1115')
  g.addColorStop(1.0, '#050607')
  x.fillStyle = g
  x.fillRect(0, 0, W, H)
  // sun bloom just under the cloud deck
  const sx = W * 0.62, sy = H * 0.645
  const sg = x.createRadialGradient(sx, sy, 0, sx, sy, 230)
  sg.addColorStop(0, 'rgba(255,196,120,0.95)')
  sg.addColorStop(0.25, 'rgba(240,140,64,0.45)')
  sg.addColorStop(0.6, 'rgba(120,70,38,0.15)')
  sg.addColorStop(1, 'rgba(0,0,0,0)')
  x.fillStyle = sg
  x.fillRect(0, 0, W, H)
  // cloud bands
  for (let i = 0; i < 90; i++) {
    const cy = H * (0.36 + rand() * 0.26)
    const w = 80 + rand() * 260
    const h = 6 + rand() * 26
    const cg = x.createRadialGradient(0, 0, 0, 0, 0, w)
    cg.addColorStop(0, `rgba(${120 + rand() * 60},${110 + rand() * 50},${100 + rand() * 40},${0.05 + rand() * 0.10})`)
    cg.addColorStop(1, 'rgba(0,0,0,0)')
    x.save()
    x.translate(rand() * W, cy)
    x.scale(1, h / w)
    x.fillStyle = cg
    x.beginPath(); x.arc(0, 0, w, 0, 7); x.fill()
    x.restore()
  }
  const t = new THREE.CanvasTexture(c)
  t.mapping = THREE.EquirectangularReflectionMapping
  t.colorSpace = THREE.SRGBColorSpace
  t.needsUpdate = true
  return t
}

/* --------------------------- misc sprites -------------------------- */
function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = canvas(128)
  const x = c.getContext('2d')
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64)
  g.addColorStop(0, inner)
  g.addColorStop(0.18, inner)
  g.addColorStop(0.45, 'rgba(255,220,170,0.35)')
  g.addColorStop(1, outer)
  x.fillStyle = g
  x.fillRect(0, 0, 128, 128)
  return tex(c, { srgb: true })
}

function smokeTexture() {
  const S = 256
  const c = canvas(S)
  const x = c.getContext('2d')
  for (let i = 0; i < 22; i++) {
    const px = S / 2 + (rand() - 0.5) * 90
    const py = S / 2 + (rand() - 0.5) * 90
    const r = 30 + rand() * 60
    const g = x.createRadialGradient(px, py, 0, px, py, r)
    g.addColorStop(0, `rgba(255,255,255,${0.05 + rand() * 0.1})`)
    g.addColorStop(1, 'rgba(255,255,255,0)')
    x.fillStyle = g
    x.beginPath(); x.arc(px, py, r, 0, 7); x.fill()
  }
  return tex(c, { srgb: true })
}

function bulletHoleTexture() {
  const S = 128
  const c = canvas(S)
  const x = c.getContext('2d')
  const g = x.createRadialGradient(64, 64, 2, 64, 64, 54)
  g.addColorStop(0, 'rgba(3,3,4,0.98)')
  g.addColorStop(0.22, 'rgba(10,9,8,0.9)')
  g.addColorStop(0.5, 'rgba(28,25,22,0.5)')
  g.addColorStop(1, 'rgba(20,18,16,0)')
  x.fillStyle = g
  x.beginPath(); x.arc(64, 64, 64, 0, 7); x.fill()
  for (let i = 0; i < 9; i++) {
    const a = rand() * Math.PI * 2
    x.strokeStyle = 'rgba(10,10,10,0.35)'
    x.lineWidth = 1 + rand() * 2
    x.beginPath()
    x.moveTo(64, 64)
    x.lineTo(64 + Math.cos(a) * (20 + rand() * 30), 64 + Math.sin(a) * (20 + rand() * 30))
    x.stroke()
  }
  return tex(c, { srgb: true })
}

function windowTexture() {
  const W = 256, H = 512
  const c = canvas(W, H)
  const x = c.getContext('2d')
  x.fillStyle = '#070a0d'
  x.fillRect(0, 0, W, H)
  for (let y = 8; y < H - 8; y += 18) {
    for (let xx = 8; xx < W - 8; xx += 16) {
      const lit = rand()
      if (lit > 0.82) {
        x.fillStyle = lit > 0.96 ? 'rgba(255,196,120,0.9)' : 'rgba(140,180,200,0.30)'
        x.fillRect(xx, y, 8, 9)
      }
    }
  }
  return tex(c, { srgb: true, repeat: [1, 1] })
}

function chainTexture() {
  const S = 256
  const c = canvas(S)
  const x = c.getContext('2d')
  x.clearRect(0, 0, S, S)
  x.strokeStyle = 'rgba(160,170,175,0.72)'
  x.lineWidth = 3
  for (let i = -S; i < S * 2; i += 26) {
    x.beginPath(); x.moveTo(i, 0); x.lineTo(i + S, S); x.stroke()
    x.beginPath(); x.moveTo(i, S); x.lineTo(i + S, 0); x.stroke()
  }
  const t = tex(c, { srgb: true, repeat: [3, 2] })
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  return t
}

export function buildTextures(renderer) {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  const asphalt = asphaltMaps()
  const concrete = concreteMaps()
  const orange = containerTexture('#6a3b22')
  const blue = containerTexture('#1e3d4a')
  const green = containerTexture('#2f4034')
  const wood = woodMaps()
  const sky = skyEquirect()
  const glows = {
    warm: glowTexture('rgba(255,220,170,1)'),
    red: glowTexture('rgba(255,90,70,1)'),
    white: glowTexture('rgba(255,255,255,1)'),
  }
  const smoke = smokeTexture()
  const hole = bulletHoleTexture()
  const windows = windowTexture()
  const chain = chainTexture()
  for (const t of [asphalt.map, asphalt.roughnessMap, asphalt.bumpMap, concrete.map, concrete.roughnessMap, concrete.bumpMap, orange.map, orange.bumpMap, blue.map, blue.bumpMap, green.map, green.bumpMap, wood.map]) {
    t.anisotropy = aniso
  }
  return { asphalt, concrete, orange, blue, green, wood, sky, glows, smoke, hole, windows, chain }
}
