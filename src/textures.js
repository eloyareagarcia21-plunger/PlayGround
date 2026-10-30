import * as THREE from 'three'

/* =========================================================================
   Procedural texture pipeline — no external assets, everything is generated
   at boot so the build stays self-contained and fast to load.
   ========================================================================= */

const TAU = Math.PI * 2

function rng(seed = 1) {
  let s = (seed >>> 0) || 1
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function makeCanvas(size = 512) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  return [canvas, canvas.getContext('2d', { willReadFrequently: true })]
}

function toTexture(canvas, { repeat = [1, 1], srgb = true, aniso = 4 } = {}) {
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat[0], repeat[1])
  tex.anisotropy = aniso
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
  tex.needsUpdate = true
  return tex
}

function speckle(ctx, size, rand, count, alpha = 0.05, light = true) {
  for (let i = 0; i < count; i++) {
    const x = rand() * size, y = rand() * size, r = rand() * 1.7 + 0.3
    ctx.fillStyle = light
      ? `rgba(255,255,255,${alpha * rand()})`
      : `rgba(0,0,0,${alpha * rand()})`
    ctx.beginPath()
    ctx.arc(x, y, r, 0, TAU)
    ctx.fill()
  }
}

function blotches(ctx, size, rand, count, color, radius = [30, 120], alpha = 0.12) {
  for (let i = 0; i < count; i++) {
    const x = rand() * size, y = rand() * size, r = radius[0] + rand() * (radius[1] - radius[0])
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, color.replace('ALPHA', (alpha * rand()).toFixed(3)))
    g.addColorStop(1, color.replace('ALPHA', '0'))
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, TAU)
    ctx.fill()
  }
}

function cracks(ctx, size, rand, count, color = 'rgba(10,12,14,0.4)') {
  ctx.strokeStyle = color
  ctx.lineCap = 'round'
  for (let i = 0; i < count; i++) {
    let x = rand() * size, y = rand() * size
    let angle = rand() * TAU
    ctx.lineWidth = 0.6 + rand() * 1.6
    ctx.beginPath()
    ctx.moveTo(x, y)
    const steps = 4 + Math.floor(rand() * 8)
    for (let s = 0; s < steps; s++) {
      angle += (rand() - 0.5) * 1.3
      x += Math.cos(angle) * (6 + rand() * 20)
      y += Math.sin(angle) * (6 + rand() * 20)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}

/* Luminance height -> tangent-space normal map. */
function normalMapFrom(canvas, strength = 2.2) {
  const size = canvas.width
  const src = canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, size, size).data
  const [out, octx] = makeCanvas(size)
  const img = octx.createImageData(size, size)
  const lum = (x, y) => {
    const ix = ((y + size) % size * size + (x + size) % size) * 4
    return (src[ix] * 0.299 + src[ix + 1] * 0.587 + src[ix + 2] * 0.114) / 255
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = lum(x + 1, y) - lum(x - 1, y)
      const dy = lum(x, y + 1) - lum(x, y - 1)
      const i = (y * size + x) * 4
      img.data[i] = Math.max(0, Math.min(255, 128 - dx * 255 * strength))
      img.data[i + 1] = Math.max(0, Math.min(255, 128 - dy * 255 * strength))
      img.data[i + 2] = 255
      img.data[i + 3] = 255
    }
  }
  octx.putImageData(img, 0, 0)
  return out
}

/* --------------------------------------------------------------- concrete */
export function createConcrete({
  size = 512,
  base = '#6c7175',
  repeat = [2, 2],
  wet = false,
  seed = 3,
  grime = 1,
} = {}) {
  const rand = rng(seed)
  const [canvas, ctx] = makeCanvas(size)

  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  // Aggregate + micro texture.
  speckle(ctx, size, rand, 14000, 0.05, true)
  speckle(ctx, size, rand, 9000, 0.06, false)
  blotches(ctx, size, rand, 26, 'rgba(35,39,42,ALPHA)', [30, 150], 0.2 * grime)
  blotches(ctx, size, rand, 18, 'rgba(190,198,204,ALPHA)', [20, 90], 0.09)

  // Form seams.
  ctx.strokeStyle = 'rgba(24,27,30,0.35)'
  ctx.lineWidth = 2
  const seam = size / 2
  ctx.beginPath(); ctx.moveTo(seam, 0); ctx.lineTo(seam, size); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(0, seam); ctx.lineTo(size, seam); ctx.stroke()

  cracks(ctx, size, rand, 14 + Math.floor(grime * 8))

  if (wet) {
    blotches(ctx, size, rand, 12, 'rgba(8,13,19,ALPHA)', [40, 150], 0.4)
  }

  const [roughCanvas, rctx] = makeCanvas(size)
  rctx.fillStyle = wet ? '#b4b4b4' : '#cfcfcf'
  rctx.fillRect(0, 0, size, size)
  speckle(rctx, size, rand, 9000, 0.25, true)
  speckle(rctx, size, rand, 7000, 0.25, false)
  if (wet) {
    // Low roughness puddle areas → mirror-like env reflections.
    for (let i = 0; i < 14; i++) {
      const x = rand() * size, y = rand() * size, r = 30 + rand() * 110
      const g = rctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, 'rgba(28,28,28,0.9)')
      g.addColorStop(0.6, 'rgba(70,70,70,0.55)')
      g.addColorStop(1, 'rgba(160,160,160,0)')
      rctx.fillStyle = g
      rctx.beginPath(); rctx.arc(x, y, r, 0, TAU); rctx.fill()
    }
  }
  cracks(rctx, size, rand, 12, 'rgba(235,235,235,0.8)')

  return {
    map: toTexture(canvas, { repeat }),
    normalMap: toTexture(normalMapFrom(canvas, 1.1), { repeat, srgb: false }),
    roughnessMap: toTexture(roughCanvas, { repeat, srgb: false }),
  }
}

/* ------------------------------------------------------------------ metal */
export function createMetal({ size = 512, base = '#565c63', repeat = [2, 2], seed = 11, rust = 0.25 } = {}) {
  const rand = rng(seed)
  const [canvas, ctx] = makeCanvas(size)
  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  for (let i = 0; i < 2600; i++) {
    const y = rand() * size
    ctx.strokeStyle = rand() > 0.5 ? `rgba(255,255,255,${rand() * 0.035})` : `rgba(0,0,0,${rand() * 0.05})`
    ctx.lineWidth = rand() * 1.2 + 0.2
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(size, y + (rand() - 0.5) * 3)
    ctx.stroke()
  }

  blotches(ctx, size, rand, 20, 'rgba(18,20,22,ALPHA)', [15, 80], 0.25)
  // rust streaks
  for (let i = 0; i < 16 * rust * 4; i++) {
    const x = rand() * size
    ctx.fillStyle = `rgba(${120 + rand() * 40 | 0},${60 + rand() * 25 | 0},${28 + rand() * 15 | 0},${0.05 + rand() * 0.16})`
    ctx.fillRect(x, rand() * size * 0.5, 1 + rand() * 4, 30 + rand() * 160)
  }
  cracks(ctx, size, rand, 8, 'rgba(12,14,16,0.5)')

  const [rough, rctx] = makeCanvas(size)
  rctx.fillStyle = '#8f8f8f'
  rctx.fillRect(0, 0, size, size)
  speckle(rctx, size, rand, 8000, 0.35, true)
  speckle(rctx, size, rand, 8000, 0.3, false)

  return {
    map: toTexture(canvas, { repeat }),
    normalMap: toTexture(normalMapFrom(canvas, 1.4), { repeat, srgb: false }),
    roughnessMap: toTexture(rough, { repeat, srgb: false }),
  }
}

/* -------------------------------------------------------------- container */
export function createContainer({ size = 512, color = '#2f5a63', repeat = [2, 1], seed = 21 } = {}) {
  const rand = rng(seed)
  const [canvas, ctx] = makeCanvas(size)
  ctx.fillStyle = color
  ctx.fillRect(0, 0, size, size)

  // Corrugation.
  const step = size / 32
  for (let x = 0; x < size; x += step) {
    const g = ctx.createLinearGradient(x, 0, x + step, 0)
    g.addColorStop(0, 'rgba(0,0,0,0.34)')
    g.addColorStop(0.35, 'rgba(255,255,255,0.1)')
    g.addColorStop(0.6, 'rgba(255,255,255,0.02)')
    g.addColorStop(1, 'rgba(0,0,0,0.3)')
    ctx.fillStyle = g
    ctx.fillRect(x, 0, step, size)
  }

  // Rust and grime.
  for (let i = 0; i < 90; i++) {
    const x = rand() * size, y = rand() * size
    const g = ctx.createRadialGradient(x, y, 0, x, y, 8 + rand() * 50)
    g.addColorStop(0, `rgba(${80 + rand() * 50 | 0},${42 + rand() * 26 | 0},${20 + rand() * 16 | 0},${0.06 + rand() * 0.2})`)
    g.addColorStop(1, 'rgba(60,30,15,0)')
    ctx.fillStyle = g
    ctx.beginPath(); ctx.arc(x, y, 60, 0, TAU); ctx.fill()
    const sy = y + rand() * 120
    ctx.fillStyle = `rgba(90,45,22,${0.05 + rand() * 0.1})`
    ctx.fillRect(x, sy, 1 + rand() * 3, 20 + rand() * 90)
  }

  // Stencil code.
  ctx.save()
  ctx.globalAlpha = 0.5
  ctx.fillStyle = 'rgba(230,232,228,0.75)'
  ctx.font = 'bold 26px "Arial Narrow", sans-serif'
  ctx.letterSpacing = '4px'
  ctx.fillText('MSKU 701144 2', 26, size - 40)
  ctx.font = '16px monospace'
  ctx.fillText('MAX GROSS 30,480 KG', 26, size - 18)
  ctx.restore()

  const [rough, rctx] = makeCanvas(size)
  rctx.fillStyle = '#a5a5a5'
  rctx.fillRect(0, 0, size, size)
  speckle(rctx, size, rand, 6000, 0.3, true)
  speckle(rctx, size, rand, 6000, 0.35, false)

  return {
    map: toTexture(canvas, { repeat }),
    normalMap: toTexture(normalMapFrom(canvas, 1.8), { repeat, srgb: false }),
    roughnessMap: toTexture(rough, { repeat, srgb: false }),
  }
}

/* ----------------------------------------------------------- hazard paint */
export function createHazard({ size = 256, seed = 5 } = {}) {
  const rand = rng(seed)
  const [canvas, ctx] = makeCanvas(size)
  ctx.fillStyle = '#111'
  ctx.fillRect(0, 0, size, size)
  ctx.save()
  ctx.translate(size / 2, size / 2)
  ctx.rotate(-Math.PI / 4)
  const stripe = size / 6
  for (let i = -8; i < 8; i++) {
    ctx.fillStyle = i % 2 ? '#d3a133' : '#171717'
    ctx.fillRect(i * stripe, -size, stripe, size * 2)
  }
  ctx.restore()
  // wear
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = `rgba(28,30,32,${rand() * 0.35})`
    ctx.beginPath()
    ctx.arc(rand() * size, rand() * size, rand() * 4, 0, TAU)
    ctx.fill()
  }
  blotches(ctx, size, rand, 8, 'rgba(30,25,15,ALPHA)', [10, 40], 0.4)
  const tex = toTexture(canvas, { repeat: [1, 1] })
  return { map: tex, roughnessMap: tex }
}

/* -------------------------------------------------------------- glow/misc */
export function createGlowTexture({ size = 128, color = '255,255,255', core = 0.12 } = {}) {
  const [canvas, ctx] = makeCanvas(size)
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, `rgba(${color},1)`)
  g.addColorStop(core, `rgba(${color},0.75)`)
  g.addColorStop(0.45, `rgba(${color},0.16)`)
  g.addColorStop(1, `rgba(${color},0)`)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createMuzzleTexture({ size = 128 } = {}) {
  const [canvas, ctx] = makeCanvas(size)
  ctx.translate(size / 2, size / 2)
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2)
  g.addColorStop(0, 'rgba(255,255,245,1)')
  g.addColorStop(0.18, 'rgba(255,232,170,0.95)')
  g.addColorStop(0.45, 'rgba(255,150,50,0.35)')
  g.addColorStop(1, 'rgba(255,90,20,0)')
  ctx.fillStyle = g
  ctx.fillRect(-size / 2, -size / 2, size, size)
  // star spikes
  ctx.globalCompositeOperation = 'lighter'
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + 0.2
    const len = size * (i % 2 ? 0.28 : 0.47)
    ctx.save()
    ctx.rotate(a)
    const lg = ctx.createLinearGradient(0, 0, len, 0)
    lg.addColorStop(0, 'rgba(255,240,200,0.9)')
    lg.addColorStop(1, 'rgba(255,120,40,0)')
    ctx.fillStyle = lg
    ctx.beginPath()
    ctx.moveTo(0, -3.2)
    ctx.lineTo(len, 0)
    ctx.lineTo(0, 3.2)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createBulletHole({ size = 128 } = {}) {
  const rand = rng(99)
  const [canvas, ctx] = makeCanvas(size)
  const c = size / 2
  const g = ctx.createRadialGradient(c, c, 1, c, c, size * 0.28)
  g.addColorStop(0, 'rgba(2,2,3,0.98)')
  g.addColorStop(0.4, 'rgba(8,8,9,0.9)')
  g.addColorStop(0.68, 'rgba(20,20,21,0.55)')
  g.addColorStop(1, 'rgba(30,30,30,0)')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(c, c, size * 0.3, 0, TAU); ctx.fill()

  ctx.strokeStyle = 'rgba(210,205,195,0.28)'
  for (let i = 0; i < 14; i++) {
    const a = rand() * TAU
    const len = size * (0.08 + rand() * 0.24)
    ctx.lineWidth = 0.6 + rand()
    ctx.beginPath()
    ctx.moveTo(c, c)
    ctx.lineTo(c + Math.cos(a) * len, c + Math.sin(a) * len)
    ctx.stroke()
  }
  // rim highlight
  ctx.strokeStyle = 'rgba(240,240,235,0.22)'
  ctx.lineWidth = 1.4
  ctx.beginPath(); ctx.arc(c, c, size * 0.17, 0, TAU); ctx.stroke()
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createSignTexture({ text = 'BLACKSITE', color = '#ffb45c', size = 1024 } = {}) {
  const [canvas, ctx] = makeCanvas(size)
  const h = size / 4
  canvas.height = h
  ctx.clearRect(0, 0, size, h)
  ctx.font = `700 ${h * 0.62}px "Arial Narrow", "Helvetica Neue", sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.letterSpacing = '14px'
  ctx.shadowColor = color
  ctx.shadowBlur = 40
  ctx.fillStyle = color
  ctx.fillText(text, size / 2, h * 0.52)
  ctx.shadowBlur = 0
  ctx.fillStyle = 'rgba(255,255,255,0.55)'
  ctx.font = `12px monospace`
  ctx.letterSpacing = '6px'
  ctx.fillText('// RESTRICTED ACCESS //', size / 2, h * 0.9)
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createWindowTexture({ size = 512, cols = 8, rows = 12, seed = 41 } = {}) {
  const rand = rng(seed)
  const [canvas, ctx] = makeCanvas(size)
  ctx.fillStyle = '#070b10'
  ctx.fillRect(0, 0, size, size)
  const cw = size / cols, ch = size / rows
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const lit = rand() > 0.52
      const warm = rand() > 0.35
      if (lit) {
        ctx.fillStyle = warm
          ? `rgba(${255},${170 + rand() * 40 | 0},${90 + rand() * 40 | 0},${0.55 + rand() * 0.45})`
          : `rgba(${140 + rand() * 40 | 0},${200 + rand() * 30 | 0},255,${0.4 + rand() * 0.4})`
      } else {
        ctx.fillStyle = `rgba(20,28,38,${0.5 + rand() * 0.4})`
      }
      ctx.fillRect(x * cw + cw * 0.2, y * ch + ch * 0.22, cw * 0.6, ch * 0.5)
    }
  }
  // vertical structure grime
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  for (let x = 0; x < size; x += cw) ctx.fillRect(x, 0, 3, size)
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createMarkingTexture({ kind = 'stencil', text = '07', color = '#c9a35a', size = 512 } = {}) {
  const rand = rng(13)
  const [canvas, ctx] = makeCanvas(size)
  ctx.clearRect(0, 0, size, size)
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = size * 0.035
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (kind === 'stencil') {
    ctx.font = `700 ${size * 0.62}px "Arial Narrow", sans-serif`
    ctx.strokeText(text, size / 2, size / 2)
    ctx.globalAlpha = 0.24
    ctx.fillText(text, size / 2, size / 2)
  } else if (kind === 'arrow') {
    ctx.beginPath()
    ctx.moveTo(size * 0.15, size * 0.5)
    ctx.lineTo(size * 0.55, size * 0.5)
    ctx.lineWidth = size * 0.08
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(size * 0.5, size * 0.25)
    ctx.lineTo(size * 0.82, size * 0.5)
    ctx.lineTo(size * 0.5, size * 0.75)
    ctx.closePath()
    ctx.fill()
  } else if (kind === 'zone') {
    ctx.lineWidth = size * 0.05
    ctx.setLineDash([size * 0.07, size * 0.05])
    ctx.strokeRect(size * 0.1, size * 0.1, size * 0.8, size * 0.8)
    ctx.setLineDash([])
    ctx.font = `700 ${size * 0.16}px "Arial Narrow", sans-serif`
    ctx.fillText(text, size / 2, size / 2)
  }

  // worn paint
  ctx.globalCompositeOperation = 'destination-out'
  for (let i = 0; i < 1600; i++) {
    ctx.fillStyle = `rgba(0,0,0,${rand() * 0.9})`
    ctx.beginPath()
    ctx.arc(rand() * size, rand() * size, rand() * 1.7, 0, TAU)
    ctx.fill()
  }
  ctx.globalCompositeOperation = 'source-over'
  return toTexture(canvas, { repeat: [1, 1] })
}

export function createBloodTexture({ size = 128 } = {}) {
  const rand = rng(77)
  const [canvas, ctx] = makeCanvas(size)
  const c = size / 2
  const g = ctx.createRadialGradient(c, c, 0, c, c, size * 0.3)
  g.addColorStop(0, 'rgba(120,6,12,0.9)')
  g.addColorStop(0.6, 'rgba(70,2,7,0.5)')
  g.addColorStop(1, 'rgba(40,0,4,0)')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(c, c, size * 0.3, 0, TAU); ctx.fill()
  for (let i = 0; i < 24; i++) {
    const a = rand() * TAU, d = size * (0.1 + rand() * 0.4)
    ctx.fillStyle = `rgba(80,4,8,${0.2 + rand() * 0.5})`
    ctx.beginPath()
    ctx.arc(c + Math.cos(a) * d, c + Math.sin(a) * d, rand() * 4 + 1, 0, TAU)
    ctx.fill()
  }
  return toTexture(canvas, { repeat: [1, 1] })
}
