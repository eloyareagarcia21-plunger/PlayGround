export class HUD {
  constructor() {
    this.root = document.getElementById('hud');
    this.mobile = document.getElementById('mobile');
    this.healthBar = document.getElementById('health-bar');
    this.healthNum = document.getElementById('health-num');
    this.armorBar = document.getElementById('armor-bar');
    this.armorNum = document.getElementById('armor-num');
    this.staminaBar = document.getElementById('stamina-bar');
    this.ammoMag = document.getElementById('ammo-mag');
    this.ammoReserve = document.getElementById('ammo-reserve');
    this.weaponName = document.getElementById('weapon-name');
    this.fireMode = document.getElementById('fire-mode');
    this.crosshair = document.getElementById('crosshair');
    this.hitmarker = document.getElementById('hitmarker');
    this.reloadRing = document.getElementById('reload-ring');
    this.rrFg = document.getElementById('rr-fg');
    this.scoreEl = document.getElementById('score');
    this.comboEl = document.getElementById('combo');
    this.objectiveText = document.getElementById('objective-text');
    this.objectiveSub = document.getElementById('objective-sub');
    this.waveBanner = document.getElementById('wave-banner');
    this.waveBannerText = document.getElementById('wave-banner-text');
    this.killfeed = document.getElementById('killfeed');
    this.radar = document.getElementById('radar');
    this.ctx = this.radar.getContext('2d');
    this.damageFlash = document.getElementById('damage-flash');
    this.lowHealth = document.getElementById('low-health');
    this.hitDirection = document.getElementById('hit-direction');
    this.hint = document.getElementById('hud-hint');
    this.perf = document.getElementById('perf');
    this.score = 0;
    this.combo = 0;
    this.comboTimer = 0;
    this.bannerTimer = 0;
    this.hintTimer = 4;
    this.fpsAccum = 0;
    this.fpsFrames = 0;
    this.fps = 60;
    this.radarAngle = 0;
    this.damageNumbers = [];
    this.damageDirTimer = 0;
    this.radarTick = 0;
    this.spread = 9;
  }

  show() {
    this.root.classList.remove('hidden');
    this.hint.classList.remove('hidden');
  }

  hide() {
    this.root.classList.add('hidden');
  }

  setMobile(on) {
    this.mobile.classList.toggle('hidden', !on);
  }

  setHealth(health, armor) {
    const hp = Math.max(0, Math.round(health));
    this.healthNum.textContent = hp;
    this.healthBar.style.width = `${Math.max(0, (health / 100) * 100)}%`;
    this.healthBar.classList.toggle('low', health <= 32);
    this.armorNum.textContent = Math.max(0, Math.round(armor));
    this.armorBar.style.width = `${Math.max(0, (armor / 100) * 100)}%`;
    this.lowHealth.style.opacity = health <= 34 && health > 0 ? 1 : 0;
  }

  setStamina(v) {
    this.staminaBar.style.width = `${Math.max(0, Math.min(100, v))}%`;
    this.staminaBar.style.opacity = v < 12 ? 0.35 : 0.75;
  }

  setAmmo(ammo, reserve, reloading, progress) {
    this.ammoMag.textContent = ammo;
    this.ammoMag.classList.toggle('low', ammo <= 7);
    this.ammoReserve.textContent = reserve;
    if (reloading) {
      this.reloadRing.classList.remove('hidden');
      this.rrFg.style.strokeDashoffset = `${264 * (1 - progress)}`;
    } else {
      this.reloadRing.classList.add('hidden');
    }
  }

  setReloadProgress(p) {
    if (p > 0) {
      this.reloadRing.classList.remove('hidden');
      this.rrFg.style.strokeDashoffset = `${264 * (1 - p)}`;
    } else {
      this.reloadRing.classList.add('hidden');
    }
  }

  setSpread(spread, ads) {
    const px = 5 + spread * 900;
    this.spread += (px - this.spread) * 0.25;
    this.crosshair.style.setProperty('--spread', `${this.spread.toFixed(1)}px`);
    this.crosshair.classList.toggle('ads', ads);
  }

  setScore(score, combo, comboTimer) {
    this.score = score;
    this.scoreEl.textContent = String(score).padStart(6, '0');
    if (combo > 1 && comboTimer > 0) {
      this.comboEl.textContent = `x${combo} COMBO`;
      this.comboEl.style.opacity = 1;
    } else {
      this.comboEl.style.opacity = 0;
    }
  }

  setObjective(main, sub) {
    this.objectiveText.textContent = main;
    if (sub !== undefined) this.objectiveSub.textContent = sub;
  }

  showWave(text, sub = 'INCOMING') {
    this.waveBannerText.textContent = text;
    this.waveBanner.querySelector('.wave-small').textContent = sub;
    this.waveBanner.classList.add('show');
    this.bannerTimer = 2.6;
  }

  hit(head, kill) {
    const el = this.hitmarker;
    el.classList.remove('show', 'head', 'kill');
    void el.offsetWidth;
    el.classList.add('show');
    if (head) el.classList.add('head');
    if (kill) el.classList.add('kill');
  }

  addKill(name, head, score) {
    const div = document.createElement('div');
    div.className = 'kill-item';
    div.innerHTML = `<b>YOU</b> ▸ ${head ? '<span class="hs">HEADSHOT</span> ' : ''}${name} <b>+${score}</b>`;
    this.killfeed.prepend(div);
    while (this.killfeed.children.length > 4) this.killfeed.lastChild.remove();
    setTimeout(() => {
      div.style.transition = 'opacity .4s';
      div.style.opacity = '0';
      setTimeout(() => div.remove(), 420);
    }, 3400);
  }

  damage(amount, fromPos, player) {
    this.damageFlash.style.opacity = Math.min(0.95, 0.3 + amount / 40).toFixed(2);
    this.damageDirTimer = 1.2;
    if (fromPos) {
      const dx = fromPos.x - player.position.x;
      const dz = fromPos.z - player.position.z;
      const cos = Math.cos(player.yaw);
      const sin = Math.sin(player.yaw);
      const sx = dx * cos + dz * sin;
      const sy = -dx * sin + dz * cos;
      const angle = (Math.atan2(sx, -sy) * 180) / Math.PI;
      this.hitDirection.style.transform = `rotate(${angle.toFixed(0)}deg)`;
      this.hitDirection.style.opacity = '0.95';
    }
  }

  addDamageNumber(worldPos, amount, head, camera) {
    const v = worldPos.clone().project(camera);
    if (v.z > 1) return;
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    const el = document.createElement('span');
    el.className = 'dmg-num' + (head ? ' head' : '');
    el.textContent = Math.round(amount);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    this.root.appendChild(el);
    setTimeout(() => el.remove(), 750);
  }

  addPickup(text, color = '#6dffb0') {
    const el = document.createElement('div');
    el.className = 'pickup-toast';
    el.textContent = text;
    el.style.color = color;
    this.root.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }

  update(dt, player, weapon, enemies) {
    this.setHealth(player.health, player.armor);
    this.setStamina(player.stamina);
    this.setScore(this.score, this.combo, this.comboTimer);

    if (this.bannerTimer > 0) {
      this.bannerTimer -= dt;
      if (this.bannerTimer <= 0) this.waveBanner.classList.remove('show');
    }
    if (this.hintTimer > 0) {
      this.hintTimer -= dt;
      if (this.hintTimer <= 0) this.hint.classList.add('hidden');
    }
    if (this.damageDirTimer > 0) {
      this.damageDirTimer -= dt;
      if (this.damageDirTimer <= 0) this.hitDirection.style.opacity = 0;
    }
    const flash = parseFloat(this.damageFlash.style.opacity) || 0;
    if (flash > 0) this.damageFlash.style.opacity = Math.max(0, flash - dt * 2.4).toFixed(2);

    this.radarTick += dt;
    if (this.radarTick > 1 / 30) {
      this.radarTick = 0;
      this.drawRadar(player, enemies);
    }

    this.fpsFrames++;
    this.fpsAccum += dt;
    if (this.fpsAccum > 0.5) {
      this.fps = Math.round(this.fpsFrames / this.fpsAccum);
      this.fpsFrames = 0;
      this.fpsAccum = 0;
      this.perf.textContent = `${this.fps} FPS · ${weapon.ammo}/${weapon.reserve}`;
    }

    for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
      const d = this.damageNumbers[i];
      d.life -= dt;
      if (d.life <= 0) {
        d.el.remove();
        this.damageNumbers.splice(i, 1);
      }
    }
  }

  drawRadar(player, enemies) {
    const ctx = this.ctx;
    const S = 220;
    const c = S / 2;
    const range = 38;
    ctx.clearRect(0, 0, S, S);

    ctx.save();
    ctx.beginPath();
    ctx.arc(c, c, c - 2, 0, Math.PI * 2);
    ctx.clip();
    const g = ctx.createRadialGradient(c, c, 0, c, c, c);
    g.addColorStop(0, 'rgba(8,30,38,0.62)');
    g.addColorStop(0.7, 'rgba(4,14,18,0.52)');
    g.addColorStop(1, 'rgba(2,6,8,0.75)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S, S);

    ctx.strokeStyle = 'rgba(98,231,255,0.13)';
    ctx.lineWidth = 1;
    for (let r = 20; r < c; r += 30) {
      ctx.beginPath();
      ctx.arc(c, c, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    this.radarAngle += 0.045;
    const sweep = ctx.createLinearGradient(c, c, c + Math.cos(this.radarAngle) * c, c + Math.sin(this.radarAngle) * c);
    sweep.addColorStop(0, 'rgba(98,231,255,0.22)');
    sweep.addColorStop(1, 'rgba(98,231,255,0)');
    ctx.strokeStyle = sweep;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(c, c);
    ctx.lineTo(c + Math.cos(this.radarAngle) * c, c + Math.sin(this.radarAngle) * c);
    ctx.stroke();

    const cos = Math.cos(player.yaw);
    const sin = Math.sin(player.yaw);
    const scale = c / range;

    // objective
    const ox = 0 - player.position.x;
    const oz = -3 - player.position.z;
    let sx = ox * cos + oz * sin;
    let sy = -ox * sin + oz * cos;
    if (Math.hypot(sx, sy) < range) {
      ctx.fillStyle = 'rgba(255,176,46,0.9)';
      ctx.beginPath();
      ctx.arc(c + sx * scale, c + sy * scale, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,176,46,0.4)';
      ctx.beginPath();
      ctx.arc(c + sx * scale, c + sy * scale, 8, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const e of enemies) {
      if (!e.alive) continue;
      const dx = e.position.x - player.position.x;
      const dz = e.position.z - player.position.z;
      sx = dx * cos + dz * sin;
      sy = -dx * sin + dz * cos;
      const d = Math.hypot(sx, sy);
      if (d > range) continue;
      const px = c + sx * scale;
      const py = c + sy * scale;
      const col = e.type === 'heavy' ? '#ff3b30' : e.type === 'rusher' ? '#ff9a2a' : e.type === 'drone' ? '#62e7ff' : '#ff5a4a';
      ctx.fillStyle = col;
      ctx.shadowColor = col;
      ctx.shadowBlur = 7;
      ctx.beginPath();
      ctx.arc(px, py, e.type === 'heavy' ? 4 : 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    ctx.restore();

    // player arrow
    ctx.save();
    ctx.translate(c, c);
    ctx.fillStyle = '#eafcff';
    ctx.shadowColor = '#62e7ff';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2.5);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // north marker
    ctx.fillStyle = 'rgba(150,200,215,0.5)';
    ctx.font = '700 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('N', c, 13);
  }
}
