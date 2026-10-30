const CARDINALS = {
  0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW',
}

export class Hud {
  constructor() {
    this.el = {
      hud: document.getElementById('hud'),
      wave: document.getElementById('waveLabel'),
      hostiles: document.getElementById('hostileValue'),
      score: document.getElementById('scoreValue'),
      healthFill: document.getElementById('healthFill'),
      healthNum: document.getElementById('healthNum'),
      healthState: document.getElementById('healthState'),
      ammoMag: document.getElementById('ammoMag'),
      ammoReserve: document.getElementById('ammoReserve'),
      reloadFill: document.getElementById('reloadFill'),
      reloadTrack: document.querySelector('.reload-track'),
      reloadChip: document.getElementById('statusReload'),
      crosshair: document.getElementById('crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      damageFlash: document.getElementById('damageFlash'),
      damageDirs: document.getElementById('damageDirs'),
      hitFlash: document.getElementById('hitFlash'),
      banner: document.getElementById('banner'),
      bannerMain: document.getElementById('bannerMain'),
      bannerSub: document.getElementById('bannerSub'),
      killfeed: document.getElementById('killfeed'),
      compassStrip: document.getElementById('compassStrip'),
      compassMask: document.querySelector('.compass-mask'),
      compassHeading: document.getElementById('compassHeading'),
      touchUI: document.getElementById('touchUI'),
      perfReadout: document.getElementById('perfReadout'),
    }
    this.cache = { health: -1, mag: -1, reserve: -1, score: -1, wave: -1, hostiles: -1, reload: null, spread: -1, ads: null, compass: -1 }
    this._bannerTimer = 0
    this._compassWidth = 0
    this._buildCompass()
    window.addEventListener('resize', () => this._buildCompass())
  }

  _buildCompass() {
    const strip = this.el.compassStrip
    if (!strip) return
    strip.innerHTML = ''
    const px = 2.2
    const total = 1080
    for (let deg = 0; deg <= total; deg += 5) {
      const tick = document.createElement('i')
      const d = deg % 360
      const major = d % 45 === 0
      const mid = d % 15 === 0
      tick.className = `compass-tick ${major ? 'major' : mid ? 'mid' : 'minor'}`
      tick.style.left = `${deg * px}px`
      if (major) {
        tick.style.height = '10px'
        const label = document.createElement('span')
        label.className = `compass-label ${d % 90 === 0 ? 'cardinal' : ''}`
        label.textContent = CARDINALS[d] ?? `${d}`
        label.style.left = `${deg * px}px`
        strip.appendChild(label)
      }
      strip.appendChild(tick)
    }
    strip.style.width = `${total * px}px`
    const w = this.el.compassMask?.clientWidth || 320
    this._compassWidth = w
    this._compassPx = px
  }

  show() {
    this.el.hud.classList.remove('hidden')
  }

  hide() {
    this.el.hud.classList.add('hidden')
  }

  showTouch(show) {
    this.el.touchUI.classList.toggle('hidden', !show)
  }

  reset() {
    this.cache = { health: -1, mag: -1, reserve: -1, score: -1, wave: -1, hostiles: -1, reload: null, spread: -1, ads: null, compass: -1 }
    this.el.killfeed.innerHTML = ''
    this.setHealth(100, 100)
    this.setAmmo(30, 150, false, 0)
    this.setScore(0)
    this.setWave(1, 0)
    this.setReloadChip(false)
    this.el.crosshair.classList.remove('ads')
    this.el.hitmarker.classList.remove('show', 'kill')
  }

  update({ health, maxHealth, mag, reserve, reloading, reloadProgress, score, wave, hostiles, yaw, ads, spread }) {
    const c = this.cache
    if (health !== c.health) {
      c.health = health
      const pct = Math.max(0, Math.min(1, health / maxHealth))
      this.el.healthFill.style.width = `${pct * 100}%`
      this.el.healthNum.textContent = Math.max(0, Math.round(health))
      this.el.healthFill.classList.toggle('warn', pct <= 0.55 && pct > 0.28)
      this.el.healthFill.classList.toggle('crit', pct <= 0.28)
      this.el.healthState.textContent = pct > 0.55 ? 'STABLE' : pct > 0.28 ? 'WOUNDED' : 'CRITICAL'
      this.el.healthState.className = `vitals-state ${pct > 0.55 ? '' : pct > 0.28 ? 'warn' : 'crit'}`
    }
    if (mag !== c.mag || reserve !== c.reserve) {
      c.mag = mag
      c.reserve = reserve
      this.el.ammoMag.textContent = String(mag).padStart(2, '0')
      this.el.ammoReserve.textContent = String(reserve)
      this.el.ammoMag.classList.toggle('low', mag > 0 && mag <= 8)
      this.el.ammoMag.classList.toggle('empty', mag === 0)
    }
    if (reloading !== c.reload) {
      c.reload = reloading
      this.el.reloadTrack.classList.toggle('on', reloading)
      this.setReloadChip(reloading)
    }
    if (reloading) this.el.reloadFill.style.width = `${Math.min(100, reloadProgress * 100)}%`
    if (score !== c.score) {
      c.score = score
      this.el.score.textContent = score.toLocaleString('en-US')
    }
    if (wave !== c.wave) {
      c.wave = wave
      this.el.wave.textContent = `WAVE ${String(wave).padStart(2, '0')}`
    }
    if (hostiles !== c.hostiles) {
      c.hostiles = hostiles
      this.el.hostiles.textContent = String(hostiles)
    }
    if (yaw !== undefined && Math.abs(yaw - c.compass) > 0.15) {
      c.compass = yaw
      const deg = ((yaw * 180) / Math.PI % 360 + 360) % 360
      const center = this._compassWidth / 2
      const tx = center - (360 + deg) * this._compassPx
      this.el.compassStrip.style.transform = `translate3d(${tx}px, 0, 0)`
      const card = CARDINALS[Math.round(deg / 45) * 45 % 360]
      this.el.compassHeading.textContent = `${card} ${String(Math.round(deg)).padStart(3, '0')}°`
    }
    if (ads !== c.ads) {
      c.ads = ads
      this.el.crosshair.classList.toggle('ads', ads)
    }
    if (spread !== c.spread) {
      c.spread = spread
      const gap = Math.min(15, 2 + spread)
      const ch = this.el.crosshair.children
      if (ch[0]) ch[0].style.transform = `translateY(${-gap}px)`
      if (ch[1]) ch[1].style.transform = `translateX(${gap}px)`
      if (ch[2]) ch[2].style.transform = `translateY(${gap}px)`
      if (ch[3]) ch[3].style.transform = `translateX(${-gap}px)`
    }
  }

  setHealth(health, maxHealth = 100) {
    this.cache.health = health
    const pct = Math.max(0, Math.min(1, health / maxHealth))
    this.el.healthFill.style.width = `${pct * 100}%`
    this.el.healthNum.textContent = Math.max(0, Math.round(health))
    this.el.healthFill.classList.toggle('warn', pct <= 0.55 && pct > 0.28)
    this.el.healthFill.classList.toggle('crit', pct <= 0.28)
    this.el.healthState.textContent = pct > 0.55 ? 'STABLE' : pct > 0.28 ? 'WOUNDED' : 'CRITICAL'
    this.el.healthState.className = `vitals-state ${pct > 0.55 ? '' : pct > 0.28 ? 'warn' : 'crit'}`
  }

  setAmmo(mag, reserve, reloading = false, progress = 0) {
    this.cache.mag = mag
    this.cache.reserve = reserve
    this.cache.reload = reloading
    this.el.ammoMag.textContent = String(mag).padStart(2, '0')
    this.el.ammoReserve.textContent = String(reserve)
    this.el.ammoMag.classList.toggle('low', mag > 0 && mag <= 8)
    this.el.ammoMag.classList.toggle('empty', mag === 0)
    this.el.reloadTrack.classList.toggle('on', reloading)
    if (reloading) this.el.reloadFill.style.width = `${Math.min(100, progress * 100)}%`
    this.setReloadChip(reloading)
  }

  setScore(score) {
    this.cache.score = score
    this.el.score.textContent = score.toLocaleString('en-US')
  }

  setWave(wave, hostiles = 0) {
    this.cache.wave = wave
    this.cache.hostiles = hostiles
    this.el.wave.textContent = `WAVE ${String(wave).padStart(2, '0')}`
    this.el.hostiles.textContent = String(hostiles)
  }

  setSpread() {}

  setReloadChip(on) {
    this.el.reloadChip.classList.toggle('on', Boolean(on))
  }

  hitmarker(headshot = false, kill = false) {
    const hm = this.el.hitmarker
    hm.classList.remove('show', 'kill')
    void hm.offsetWidth
    if (kill) hm.classList.add('kill')
    hm.classList.add('show')
    clearTimeout(this._hitTimer)
    this._hitTimer = setTimeout(() => hm.classList.remove('show'), 260)
    const flash = this.el.hitFlash
    flash.classList.remove('on')
    void flash.offsetWidth
    flash.classList.add('on')
  }

  damage(angle = 0) {
    const flash = this.el.damageFlash
    flash.classList.add('hit')
    clearTimeout(this._dmgTimer)
    this._dmgTimer = setTimeout(() => flash.classList.remove('hit'), 120)

    const arrow = document.createElement('div')
    arrow.className = 'dmg-arrow'
    arrow.style.transform = `rotate(${angle}rad)`
    this.el.damageDirs.appendChild(arrow)
    setTimeout(() => arrow.remove(), 950)
  }

  killFeed(name, headshot, score) {
    const item = document.createElement('div')
    item.className = 'feed-item'
    item.innerHTML = `<span>${name}</span> <b>${headshot ? '<span class="head">HEADSHOT</span>' : 'ELIMINATED'}</b> <span class="score">+${score}</span>`
    this.el.killfeed.prepend(item)
    setTimeout(() => {
      item.classList.add('out')
      setTimeout(() => item.remove(), 400)
    }, 2800)
    while (this.el.killfeed.children.length > 4) this.el.killfeed.lastElementChild.remove()
  }

  banner(main, sub = '', duration = 2400) {
    this.el.bannerMain.textContent = main
    this.el.bannerSub.textContent = sub
    this.el.banner.classList.remove('show')
    void this.el.banner.offsetWidth
    this.el.banner.classList.add('show')
    clearTimeout(this._bannerTimer)
    this._bannerTimer = setTimeout(() => this.el.banner.classList.remove('show'), duration)
  }

  setPerf(text) {
    if (this.el.perfReadout) this.el.perfReadout.textContent = text
  }
}
