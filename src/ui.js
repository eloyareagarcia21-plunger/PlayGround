const SETTINGS_KEY = 'blacksite.settings.v1'
const BEST_KEY = 'blacksite.best.v1'
const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

function loadSettings() {
  try {
    return Object.assign({ sens: 1, muted: false, tilt: false }, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}'))
  } catch { return { sens: 1, muted: false, tilt: false } }
}

export class UI {
  constructor(callbacks = {}) {
    this.cb = callbacks
    this.settings = loadSettings()
    this.inGame = false
    this.best = 0
    try { this.best = Number(localStorage.getItem(BEST_KEY) || 0) || 0 } catch {}
    this.cache = {}
    this.mobile = false

    this.el = {
      loading: document.getElementById('loading'),
      hud: document.getElementById('hud'),
      start: document.getElementById('start-screen'),
      pause: document.getElementById('pause-screen'),
      death: document.getElementById('death-screen'),
      banner: document.getElementById('banner'),
      bannerKicker: document.getElementById('banner-kicker'),
      bannerTitle: document.getElementById('banner-title'),
      bannerSub: document.getElementById('banner-sub'),
      crosshair: document.getElementById('crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      damageVignette: document.getElementById('damage-vignette'),
      damageIndicators: document.getElementById('damage-indicators'),
      killfeed: document.getElementById('killfeed'),
      healthFill: document.getElementById('health-fill'),
      armorFill: document.getElementById('armor-fill'),
      healthNum: document.getElementById('health-num'),
      armorNum: document.getElementById('armor-num'),
      healthBar: document.querySelector('.bar.health'),
      lowHealth: document.getElementById('low-health'),
      ammoMag: document.getElementById('ammo-mag'),
      ammoReserve: document.getElementById('ammo-reserve'),
      reloadLabel: document.getElementById('reload-label'),
      reloadBar: document.getElementById('reload-bar'),
      waveNum: document.getElementById('wave-num'),
      hostileNum: document.getElementById('hostile-num'),
      scoreNum: document.getElementById('score-num'),
      waveProgress: document.querySelector('#wave-progress span'),
      statusText: document.getElementById('status-text'),
      compassStrip: document.getElementById('compass-strip'),
      compassDeg: document.getElementById('compass-deg'),
      best: document.getElementById('best-score'),
      toast: document.getElementById('toast'),
      touch: document.getElementById('touch-ui'),
      fps: document.getElementById('fps'),
    }

    this.bind()
    this.buildCompass()
    this.applySettings()
    this.showBest()
  }

  bind() {
    const click = (id, fn) => document.getElementById(id)?.addEventListener('click', (e) => {
      e.preventDefault()
      this.cb.uiSound?.()
      fn()
    })
    click('btn-start', () => this.cb.onStart?.())
    click('btn-resume', () => this.cb.onResume?.())
    click('btn-restart', () => this.cb.onRestart?.())
    click('btn-again', () => this.cb.onRestart?.())
    click('btn-menu', () => this.cb.onMenu?.())
    click('btn-full', () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {})
      else document.exitFullscreen?.()
    })
    click('btn-tilt', () => this.cb.onTiltToggle?.())
    click('btn-tilt-pause', () => this.cb.onTiltToggle?.())
    click('btn-sound', () => this.toggleSound())
    click('btn-sound-pause', () => this.toggleSound())
    click('btn-mute', () => this.toggleSound())

    const sens = document.getElementById('sens')
    const sensPause = document.getElementById('sens-pause')
    const onSens = (v) => {
      this.settings.sens = Number(v)
      if (sens) sens.value = v
      if (sensPause) sensPause.value = v
      const label = document.getElementById('sens-val')
      if (label) label.textContent = this.settings.sens.toFixed(2)
      this.save()
    }
    sens?.addEventListener('input', (e) => onSens(e.target.value))
    sensPause?.addEventListener('input', (e) => onSens(e.target.value))
  }

  toggleSound() {
    this.settings.muted = !this.settings.muted
    this.applySettings()
    this.save()
    this.cb.onMute?.(this.settings.muted)
  }

  applySettings() {
    const soundBtns = [document.getElementById('btn-sound'), document.getElementById('btn-sound-pause'), document.getElementById('btn-mute')]
    for (const b of soundBtns) if (b) b.setAttribute('aria-pressed', String(!this.settings.muted))
    const st = document.getElementById('sound-state')
    if (st) st.textContent = this.settings.muted ? 'MUTED' : 'ENABLED'
    const stp = document.getElementById('sound-state-pause')
    if (stp) stp.textContent = this.settings.muted ? 'OFF' : 'ON'
    const sens = document.getElementById('sens')
    const sensPause = document.getElementById('sens-pause')
    if (sens) sens.value = this.settings.sens
    if (sensPause) sensPause.value = this.settings.sens
    const label = document.getElementById('sens-val')
    if (label) label.textContent = this.settings.sens.toFixed(2)
    this.setTilt(this.settings.tilt, this.tiltAvailable !== false)
  }

  setTilt(on, available = true) {
    this.settings.tilt = !!on
    for (const id of ['btn-tilt', 'btn-tilt-pause']) {
      const b = document.getElementById(id)
      if (b) {
        b.setAttribute('aria-pressed', String(!!on))
        b.disabled = !available
        b.style.opacity = available ? '' : '0.5'
      }
    }
    const s = document.getElementById('tilt-state')
    if (s) s.textContent = on ? 'ENGAGED · GYROSCOPE' : available ? 'OPTIONAL · GYROSCOPE' : 'UNAVAILABLE'
    const sp = document.getElementById('tilt-state-pause')
    if (sp) sp.textContent = on ? 'ON' : 'OFF'
    const quick = document.getElementById('btn-tilt-quick')
    if (quick) quick.classList.toggle('on', !!on)
    this.save()
  }

  showBest() {
    if (this.el.best) this.el.best.textContent = String(this.best).padStart(6, '0')
    const best = document.getElementById('best-score')
    if (best) best.textContent = String(this.best).padStart(6, '0')
  }

  save() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)) } catch {}
  }

  buildCompass() {
    const strip = this.el.compassStrip
    if (!strip) return
    strip.innerHTML = ''
    for (let deg = 0; deg <= 1080; deg += 45) {
      const v = ((deg % 360) + 360) % 360
      const label = document.createElement('span')
      label.className = 'compass-label cardinal' + (v === 0 ? ' major' : '')
      label.textContent = CARDINALS[v / 45]
      label.style.left = `${deg * 3}px`
      strip.appendChild(label)
    }
    for (let deg = 0; deg <= 1080; deg += 15) {
      if (deg % 45 === 0) continue
      const num = document.createElement('span')
      num.className = 'compass-label'
      num.textContent = String(((deg % 360) + 360) % 360).padStart(3, '0')
      num.style.left = `${deg * 3}px`
      num.style.opacity = '0.42'
      num.style.fontSize = '7px'
      strip.appendChild(num)
    }
  }

  setLoadingDone() {
    this.el.loading?.classList.add('done')
    setTimeout(() => this.el.loading?.remove(), 700)
  }

  showMenu() {
    this.inGame = false
    this.el.start?.classList.remove('hidden', 'out')
    this.el.hud?.classList.add('hidden')
    this.el.pause?.classList.add('hidden')
    this.el.death?.classList.add('hidden')
    this.clearKillfeed()
    document.body.classList.remove('in-game')
  }

  showGame() {
    this.inGame = true
    const start = this.el.start
    if (start) {
      start.classList.add('out')
      setTimeout(() => start.classList.add('hidden'), 480)
    }
    this.el.hud?.classList.remove('hidden')
    this.el.pause?.classList.add('hidden')
    this.el.death?.classList.add('hidden')
    document.body.classList.add('in-game')
  }

  showPause() {
    this.el.pause?.classList.remove('hidden')
    this.el.hud?.classList.add('dim')
  }

  hidePause() {
    this.el.pause?.classList.add('hidden')
    this.el.hud?.classList.remove('dim')
  }

  showDeath({ wave, score, kills }) {
    this.el.hud?.classList.add('hidden')
    this.el.death?.classList.remove('hidden')
    this.el.pause?.classList.add('hidden')
    const w = document.getElementById('death-wave')
    const s = document.getElementById('death-score')
    const k = document.getElementById('death-kills')
    if (w) w.textContent = String(wave).padStart(2, '0')
    if (s) s.textContent = String(score).padStart(6, '0')
    if (k) k.textContent = String(kills).padStart(2, '0')
    if (score > this.best) {
      this.best = score
      try { localStorage.setItem(BEST_KEY, String(score)) } catch {}
      this.showBest()
    }
  }

  toggleTouch(on, available = true, device) {
    this.mobile = on
    this.touch?.classList.toggle('hidden', !on)
    if (device !== undefined) this.mobileDevice = device
    this.setTilt(this.settings.tilt, available)
  }

  banner(kicker, title, sub) {
    const b = this.el.banner
    if (!b) return
    this.el.bannerKicker.textContent = kicker
    this.el.bannerTitle.textContent = title
    this.el.bannerSub.textContent = sub
    b.classList.remove('show')
    void b.offsetWidth
    b.classList.add('show')
  }

  kill(name = 'YOU', weapon = 'MK-17', head = false) {
    const feed = this.el.killfeed
    if (!feed) return
    const item = document.createElement('div')
    item.className = 'kill-item' + (head ? ' head' : '')
    item.innerHTML = `<b>${name}</b><span>▸</span><span>HOSTILE</span><span class="kf-weapon">${weapon}${head ? ' // HEAD' : ''}</span>`
    feed.prepend(item)
    while (feed.children.length > 4) feed.lastChild.remove()
    setTimeout(() => {
      item.classList.add('fade')
      setTimeout(() => item.remove(), 420)
    }, 4200)
  }

  clearKillfeed() {
    if (this.el.killfeed) this.el.killfeed.innerHTML = ''
  }

  hitmarker(head = false) {
    const h = this.el.hitmarker
    if (!h) return
    h.classList.toggle('head', head)
    h.classList.remove('show')
    void h.offsetWidth
    h.classList.add('show')
  }

  damage(angle) {
    const wrap = document.createElement('div')
    wrap.className = 'dmg-dir'
    wrap.style.transform = `rotate(${angle}rad)`
    const arc = document.createElement('div')
    arc.className = 'dmg-arc'
    wrap.appendChild(arc)
    this.el.damageIndicators?.appendChild(wrap)
    setTimeout(() => wrap.remove(), 1200)
  }

  toast(msg, ms = 2600) {
    const t = this.el.toast
    if (!t) return
    t.textContent = msg
    t.classList.remove('show')
    void t.offsetWidth
    t.classList.add('show')
    clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => t.classList.remove('show'), ms)
  }

  update(s) {
    const c = this.cache
    const health = Math.max(0, Math.round(s.health))
    const armor = Math.max(0, Math.round(s.armor))
    if (c.health !== health) {
      c.health = health
      this.el.healthFill.style.width = `${health}%`
      this.el.healthNum.textContent = health
      this.el.healthBar?.classList.toggle('low', health < 35)
    }
    if (c.armor !== armor) {
      c.armor = armor
      this.el.armorFill.style.width = `${Math.min(100, (armor / 60) * 100)}%`
      this.el.armorNum.textContent = armor
    }
    if (c.ammo !== s.ammo) {
      c.ammo = s.ammo
      this.el.ammoMag.textContent = s.ammo
      this.el.ammoMag.classList.toggle('low', s.ammo <= 5)
    }
    if (c.reserve !== s.reserve) {
      c.reserve = s.reserve
      this.el.ammoReserve.textContent = s.reserve
    }
    if (c.reloading !== s.reloading || c.reloadPct !== s.reloadPct) {
      c.reloading = s.reloading
      c.reloadPct = s.reloadPct
      this.el.reloadBar.classList.toggle('active', s.reloading)
      this.el.reloadBar.querySelector('span').style.width = `${Math.round(s.reloadPct * 100)}%`
      this.el.reloadLabel.textContent = s.reloading ? 'RELOADING' : s.ammo === 0 ? 'EMPTY' : 'READY'
      this.el.reloadLabel.classList.toggle('reloading', s.reloading)
    }
    if (c.wave !== s.wave) {
      c.wave = s.wave
      this.el.waveNum.textContent = String(s.wave).padStart(2, '0')
      const pw = document.getElementById('pause-wave')
      if (pw) pw.textContent = String(s.wave).padStart(2, '0')
    }
    if (c.hostiles !== s.hostiles) {
      c.hostiles = s.hostiles
      this.el.hostileNum.textContent = String(Math.max(0, s.hostiles)).padStart(2, '0')
      const ph = document.getElementById('pause-hostiles')
      if (ph) ph.textContent = String(Math.max(0, s.hostiles)).padStart(2, '0')
    }
    if (c.score !== s.score) {
      c.score = s.score
      this.el.scoreNum.textContent = String(s.score).padStart(6, '0')
      const ps = document.getElementById('pause-score')
      if (ps) ps.textContent = String(s.score).padStart(6, '0')
    }
    if (c.progress !== s.progress) {
      c.progress = s.progress
      this.el.waveProgress.style.width = `${Math.round(s.progress * 100)}%`
    }
    if (c.status !== s.status) {
      c.status = s.status
      this.el.statusText.textContent = s.status
    }

    // compass
    const heading = ((s.yaw * 180 / Math.PI) % 360 + 360) % 360
    if (this.el.compassStrip) this.el.compassStrip.style.transform = `translateX(${(-heading * 3).toFixed(1)}px)`
    if (this.el.compassDeg) this.el.compassDeg.textContent = String(Math.round(heading) % 360).padStart(3, '0')

    // crosshair bloom
    const gap = 5 + (s.spread || 0) * 16
    if (c.gap !== Math.round(gap)) {
      c.gap = Math.round(gap)
      this.el.crosshair?.style.setProperty('--gap', `${c.gap}px`)
    }
    this.el.crosshair?.classList.toggle('ads', !!s.ads)

    // damage & low health
    if (this.el.damageVignette) this.el.damageVignette.style.opacity = String(Math.min(1, (s.damageFlash || 0) * 0.9))
    this.el.lowHealth?.classList.toggle('on', health > 0 && health < 35)
    this.el.fps.textContent = s.fps ? `${s.fps} FPS` : ''
  }

  updatePauseStats(state) {
    const w = document.getElementById('pause-wave')
    const s = document.getElementById('pause-score')
    const h = document.getElementById('pause-hostiles')
    if (w) w.textContent = String(state.wave).padStart(2, '0')
    if (s) s.textContent = String(state.score).padStart(6, '0')
    if (h) h.textContent = String(Math.max(0, state.hostiles)).padStart(2, '0')
  }
}
