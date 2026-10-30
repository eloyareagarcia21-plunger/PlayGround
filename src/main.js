import './style.css'
import * as THREE from 'three'
import { Engine } from './engine.js'
import { buildLevel } from './level.js'
import { buildWeapon } from './weapon.js'
import { Input } from './input.js'
import { Effects } from './effects.js'
import { Audio } from './audio.js'
import { Hud } from './hud.js'
import { Player } from './player.js'
import { EnemySystem } from './enemies.js'

const canvas = document.getElementById('game')
const startScreen = document.getElementById('startScreen')
const pauseScreen = document.getElementById('pauseScreen')
const deathScreen = document.getElementById('deathScreen')
const playBtn = document.getElementById('playBtn')
const tiltBtn = document.getElementById('tiltBtn')
const pauseTiltBtn = document.getElementById('pauseTiltBtn')
const audioBtn = document.getElementById('audioBtn')
const resumeBtn = document.getElementById('resumeBtn')
const restartBtn = document.getElementById('restartBtn')
const redeployBtn = document.getElementById('redeployBtn')
const pauseWave = document.getElementById('pauseWave')
const pauseScore = document.getElementById('pauseScore')
const pauseKills = document.getElementById('pauseKills')
const deathWave = document.getElementById('deathWave')
const deathScore = document.getElementById('deathScore')
const deathKills = document.getElementById('deathKills')
const deathAcc = document.getElementById('deathAcc')
const bootError = document.getElementById('bootError')

function boot() {
  const engine = new Engine(canvas)
  const level = buildLevel(engine.scene, engine)
  const weapon = buildWeapon(engine.weaponScene)
  const hud = new Hud()
  const audio = new Audio()
  const touchDevice = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
  const showTouch = touchDevice || window.innerWidth < 760
  if (showTouch) document.body.classList.add('touch')

  const input = new Input({ canvas, touch: touchDevice })
  const effects = new Effects({ scene: engine.scene, camera: engine.camera, level, engine })
  const player = new Player({
    camera: engine.camera,
    weaponCamera: engine.weaponCamera,
    level,
    input,
    weapon,
    effects,
    audio,
    hud,
    engine,
  })
  const enemies = new EnemySystem({
    scene: engine.scene,
    level,
    player,
    effects,
    audio,
  })
  player.enemies = enemies

  const game = {
    state: 'menu',
    score: 0,
    kills: 0,
    wave: 1,
    waveTransition: false,
    transitionT: 0,
    time: 0,
    clock: 0,
    menuTime: 0,
    best: 0,
  }

  const menuCam = {
    base: new THREE.Vector3(8.6, 2.35, 15.0),
    look: new THREE.Vector3(-1.2, 2.5, -8.0),
  }

  /* ------------------------------------------------------------- lifecycle */
  function resetMatch() {
    game.score = 0
    game.kills = 0
    game.wave = 1
    game.waveTransition = false
    game.transitionT = 0
    game.time = 0
    enemies.clear()
    player.reset()
    player.score = 0
    player.wave = 1
    player.hostiles = 0
    hud.reset()
    hud.show()
    hud.showTouch(showTouch)
    deathScreen.classList.add('hidden')
    pauseScreen.classList.add('hidden')
    startScreen.classList.add('hidden')
    document.getElementById('killfeed').innerHTML = ''
    input.enabled = true
    input.resetFlags()
    player.enabled = true
    document.body.classList.remove('ads')
    input.lockPointer()
    game.state = 'playing'
    beginWave(1)
  }

  function beginWave(wave) {
    game.wave = wave
    enemies.beginWave(wave)
    hud.banner(`WAVE ${String(wave).padStart(2, '0')}`, wave > 1 ? 'HOSTILE REINFORCEMENTS INBOUND' : 'HOSTILES INBOUND // WEAPONS FREE', 2600)
    audio.waveStart()
  }

  function pauseGame() {
    if (game.state !== 'playing') return
    game.state = 'paused'
    input.enabled = false
    player.enabled = false
    document.body.classList.remove('ads')
    input.resetFlags()
    input.releasePointer()
    pauseWave.textContent = String(game.wave).padStart(2, '0')
    pauseScore.textContent = game.score.toLocaleString('en-US')
    pauseKills.textContent = String(game.kills)
    pauseScreen.classList.remove('hidden')
    syncTiltButtons()
  }

  function resumeGame() {
    if (game.state !== 'paused') return
    pauseScreen.classList.add('hidden')
    input.enabled = true
    player.enabled = true
    input.lockPointer()
    game.state = 'playing'
    audio.resume()
  }

  function playerDied(stats) {
    if (game.state === 'dead') return
    game.state = 'dead'
    input.enabled = false
    player.enabled = false
    document.body.classList.remove('ads')
    input.resetFlags()
    input.releasePointer()
    hud.showTouch(false)
    deathWave.textContent = String(game.wave).padStart(2, '0')
    deathScore.textContent = game.score.toLocaleString('en-US')
    deathKills.textContent = String(game.kills)
    const acc = stats.shots ? Math.round((stats.hits / stats.shots) * 100) : 0
    deathAcc.textContent = `${acc}%`
    setTimeout(() => deathScreen.classList.remove('hidden'), 900)
    hud.banner('SIGNAL LOST', 'OPERATOR DOWN', 2200)
  }

  player.onDeath = playerDied
  enemies.onDeath = (enemy, headshot) => {
    const base = enemy.heavy ? 220 : 100
    const points = headshot ? Math.round(base * 1.6) : base
    game.score += points
    game.kills++
    hud.killFeed(enemy.heavy ? 'BRUTE' : 'HOSTILE', headshot, points)
    player.addReserve(enemy.heavy ? 18 : 9)
  }

  /* ------------------------------------------------------------------ UI */
  function syncTiltButtons() {
    const on = input.tilt.enabled
    const label = `TILT AIM: ${on ? 'ON' : 'OFF'}`
    if (tiltBtn) {
      tiltBtn.textContent = label
      tiltBtn.setAttribute('aria-pressed', String(on))
    }
    if (pauseTiltBtn) {
      pauseTiltBtn.textContent = label
      pauseTiltBtn.setAttribute('aria-pressed', String(on))
    }
    if (on && !input.tilt.hasData) {
      setTimeout(() => {
        if (input.tilt.enabled && !input.tilt.hasData) {
          tiltBtn.textContent = 'TILT AIM: NO SENSOR'
          tiltBtn.setAttribute('aria-pressed', 'false')
        }
      }, 2200)
    }
    if (input.tilt.error === 'denied') {
      tiltBtn.textContent = 'MOTION ACCESS DENIED'
      setTimeout(syncTiltButtons, 2600)
    }
    if (input.tilt.error === 'unsupported') {
      tiltBtn.textContent = 'TILT: NOT SUPPORTED'
      setTimeout(syncTiltButtons, 2600)
    }
  }

  async function toggleTilt() {
    audio.ui()
    if (input.tilt.enabled) {
      input.disableTilt()
      syncTiltButtons()
      return
    }
    tiltBtn.textContent = 'REQUESTING MOTION…'
    const ok = await input.enableTilt()
    syncTiltButtons()
    if (ok) input.recenterTilt()
  }

  tiltBtn?.addEventListener('click', toggleTilt)
  pauseTiltBtn?.addEventListener('click', toggleTilt)

  audioBtn?.addEventListener('click', () => {
    const muted = !audio.muted
    audio.setMuted(muted)
    audioBtn.textContent = `AUDIO: ${muted ? 'OFF' : 'ON'}`
    audioBtn.setAttribute('aria-pressed', String(!muted))
    if (!muted) audio.ui()
  })

  playBtn.addEventListener('click', () => {
    if (game.state !== 'menu') return
    audio.init()
    audio.resume()
    audio.ui()
    resetMatch()
  })

  resumeBtn?.addEventListener('click', () => {
    audio.ui()
    resumeGame()
  })

  restartBtn?.addEventListener('click', () => {
    audio.ui()
    resetMatch()
  })

  redeployBtn?.addEventListener('click', () => {
    audio.ui()
    resetMatch()
  })

  input.onPause = () => pauseGame()
  input.onReload = () => player.startReload()
  input.onJump = () => {}
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && game.state === 'playing') pauseGame()
  })

  /* -------------------------------------------------------- scene animation */
  const flicker = []
  for (const lamp of level.lamps) {
    flicker.push({ ...lamp, off: Math.random() * 10 })
  }

  function animateLevel(dt) {
    const t = game.clock
    for (const lamp of flicker) {
      const n = Math.sin(t * 1.7 + lamp.phase) * 0.04 + Math.sin(t * 7.3 + lamp.phase * 2.1) * 0.02
      let intensity = lamp.base * (0.95 + n)
      if (Math.sin(t * 0.37 + lamp.phase * 4) > 0.9985) intensity *= 0.4
      lamp.light.intensity = intensity
    }
    for (const v of level.volumes) {
      v.mat.uniforms.uTime.value = t
      const flick = 0.9 + Math.sin(t * 2.2 + v.phase) * 0.08 + Math.sin(t * 9.1 + v.phase) * 0.03
      v.mat.uniforms.uOpacity.value = v.base * flick
    }
    for (const a of level.animated) {
      if (a.type === 'beacon') {
        const on = Math.sin(t * 2.6 + a.phase) > 0.2
        a.mesh.material.color.setHex(on ? 0xff2e3c : 0x3a0a0d)
      } else if (a.type === 'led') {
        const on = Math.sin(t * 3.4 + a.phase) > -0.2
        a.mesh.material.color.setHex(on ? 0xffc27a : 0x4a2a12)
      }
    }
    if (level.sign) {
      const s = 0.94 + Math.sin(t * 1.4) * 0.03 + (Math.sin(t * 13.7) > 0.98 ? -0.25 : 0)
      level.sign.material.opacity = s
    }
    // distant city beacons
    for (const beacon of engine.sky.city.children) {
      if (beacon.userData.beacon) {
        const on = Math.sin(t * 2.0 + beacon.position.x) > 0.1
        beacon.material.color.setHex(on ? 0xff2e3c : 0x2a080b)
      }
    }
  }

  /* -------------------------------------------------------------- menu cam */
  function animateMenu(dt) {
    game.menuTime += dt
    const t = game.menuTime
    const cam = engine.camera
    cam.fov += (60 - cam.fov) * Math.min(1, dt * 2)
    cam.updateProjectionMatrix()
    cam.position.set(
      menuCam.base.x + Math.sin(t * 0.13) * 2.4,
      menuCam.base.y + Math.sin(t * 0.21) * 0.35,
      menuCam.base.z + Math.cos(t * 0.11) * 1.6
    )
    const look = menuCam.look.clone()
    look.x += Math.sin(t * 0.09) * 1.2
    cam.lookAt(look)
    cam.updateMatrixWorld(true)
  }

  /* -------------------------------------------------------------- game loop */
  let last = performance.now()
  let perfTimer = 0

  function frame(now) {
    const dt = Math.min(0.05, Math.max(0.0001, (now - last) / 1000))
    last = now
    engine.updateFps(dt)
    engine.adaptiveQuality(dt)
    game.clock += dt

    if (game.state === 'playing') {
      game.time += dt
      player.score = game.score
      player.wave = game.wave
      player.hostiles = enemies.remainingCount
      player.update(dt)
      enemies.update(dt)
      effects.update(dt, game.time)
      animateLevel(dt)

      if (!game.waveTransition && enemies.remainingCount === 0 && enemies.queue.length === 0 && game.time > 2) {
        game.waveTransition = true
        game.transitionT = 4.2
        game.score += 250
        hud.banner('SECTOR CLEAR', 'REGROUP // NEXT WAVE INBOUND', 2400)
        audio.waveClear()
        player.addReserve(30)
      }
      if (game.waveTransition) {
        game.transitionT -= dt
        if (game.transitionT <= 0) {
          game.waveTransition = false
          beginWave(game.wave + 1)
        }
      }

      engine.render(dt, weapon.root, true)
    } else if (game.state === 'menu') {
      game.menuTime += dt
      animateMenu(dt)
      effects.update(dt * 0.6, game.menuTime)
      animateLevel(dt * 0.6)
      engine.render(dt, weapon.root, false)
    } else if (game.state === 'paused') {
      engine.render(0, weapon.root, false)
    } else if (game.state === 'dead') {
      game.time += dt
      player.updateDeath(dt)
      animateLevel(dt)
      engine.render(dt, weapon.root, false)
    }

    // Start-screen performance readout.
    perfTimer += dt
    if (game.state === 'menu' && perfTimer > 0.5) {
      perfTimer = 0
      const info = engine.renderer.info.render
      hud.setPerf(`${engine.mobile ? 'MOBILE' : 'DESKTOP'} · ${engine.renderer.domElement.width}×${engine.renderer.domElement.height} · ${Math.round(engine.fps)} FPS · ${info.calls} DRAW CALLS`)
    }

    requestAnimationFrame(frame)
  }

  // Debug / automation hooks.
  window.__NIGHTSHADE__ = {
    game,
    engine,
    player,
    enemies,
    effects,
    input,
    start: () => { if (game.state === 'menu') resetMatch() },
    pause: pauseGame,
    resume: resumeGame,
    addScore: (n) => { game.score += n },
  }

  if (new URLSearchParams(location.search).has('autostart')) resetMatch()

  requestAnimationFrame((t) => {
    last = t
    frame(t)
  })

  // First-frame sanity check for the boot error overlay.
  setTimeout(() => {
    if (!engine.renderer.getContext()) throw new Error('WebGL context unavailable')
  }, 500)
}

try {
  boot()
} catch (error) {
  console.error(error)
  bootError.classList.remove('hidden')
  bootError.textContent = `RENDERER FAILURE\n\n${error?.stack || error}`
}
