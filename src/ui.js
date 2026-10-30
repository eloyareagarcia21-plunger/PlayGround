const STORE = 'blacksite-settings-v1';

export const defaultSettings = {
  sensitivity: 1,
  fov: 78,
  volume: 0.7,
  postfx: true,
  shadows: true,
  motionblur: true,
  tilt: false,
  tiltSensitivity: 1,
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(STORE);
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) };
  } catch {}
  return { ...defaultSettings };
}

export function saveSettings(s) {
  try {
    localStorage.setItem(STORE, JSON.stringify(s));
  } catch {}
}

export class UI {
  constructor(settings, callbacks) {
    this.settings = settings;
    this.cb = callbacks;
    this.menu = document.getElementById('menu');
    this.briefing = document.getElementById('briefing');
    this.settingsScreen = document.getElementById('settings');
    this.pause = document.getElementById('pause');
    this.gameover = document.getElementById('gameover');
    this.hud = document.getElementById('hud');
    this.loading = document.getElementById('loading');
    this.fatal = document.getElementById('fatal');
    this.rotate = document.getElementById('rotate-hint');
    this.tiltNote = document.getElementById('tilt-note');
    this.tiltPermBtn = document.getElementById('tilt-permission');
    this.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    this.settingsReturn = 'menu';
    this.bind();
    this.applySettings();
    this.checkOrientation();
    window.addEventListener('resize', () => this.checkOrientation());
    window.addEventListener('orientationchange', () => setTimeout(() => this.checkOrientation(), 250));
    if (this.ios) document.getElementById('mobile-hint')?.classList.remove('hidden');
  }

  bind() {
    document.getElementById('deploy-btn').addEventListener('click', () => this.cb.onDeploy?.());
    document.getElementById('briefing-btn').addEventListener('click', () => this.openPanel('briefing'));
    document.getElementById('settings-btn').addEventListener('click', () => this.openPanel('settings'));
    document.getElementById('resume-btn').addEventListener('click', () => this.cb.onResume?.());
    document.getElementById('resume-x').addEventListener('click', () => this.cb.onResume?.());
    document.getElementById('pause-settings').addEventListener('click', () => {
      this.settingsReturn = 'pause';
      this.openPanel('settings');
    });
    document.getElementById('abort-btn').addEventListener('click', () => this.cb.onAbort?.());
    document.getElementById('retry-btn').addEventListener('click', () => this.cb.onRetry?.());
    document.getElementById('menu-btn').addEventListener('click', () => this.cb.onMenu?.());
    document.getElementById('tilt-permission').addEventListener('click', async () => {
      const ok = await this.cb.onTiltRequest?.();
      if (ok) {
        this.setToggle('tilt', true);
        this.settings.tilt = true;
        this.tiltNote.classList.add('hidden');
        this.tiltPermBtn.classList.add('hidden');
        this.cb.onTiltChange?.(true);
      }
    });

    for (const el of document.querySelectorAll('[data-close]')) {
      el.addEventListener('click', () => {
        this.closePanel(el.dataset.close);
      });
    }

    // settings inputs
    const bindRange = (id, key, label, transform = (v) => v) => {
      const input = document.getElementById(id);
      const out = document.getElementById(label);
      input.value = this.settings[key];
      if (out) out.textContent = transform(this.settings[key]);
      input.addEventListener('input', () => {
        this.settings[key] = parseFloat(input.value);
        if (out) out.textContent = transform(this.settings[key]);
        saveSettings(this.settings);
        this.cb.onSettingsChange?.(this.settings);
      });
    };
    bindRange('sens', 'sensitivity', 'sens-val', (v) => Number(v).toFixed(2));
    bindRange('fov', 'fov', 'fov-val', (v) => Math.round(v));
    bindRange('vol', 'volume', 'vol-val', (v) => Math.round(v * 100));
    bindRange('tiltsens', 'tiltSensitivity', 'tilt-val', (v) => Number(v).toFixed(2));

    const bindToggle = (id, key) => {
      const input = document.getElementById(id);
      input.checked = !!this.settings[key];
      input.addEventListener('change', () => {
        this.settings[key] = input.checked;
        saveSettings(this.settings);
        this.cb.onSettingsChange?.(this.settings);
        if (key === 'postfx' || key === 'shadows') return;
      });
    };
    bindToggle('postfx', 'postfx');
    bindToggle('shadows', 'shadows');
    bindToggle('motionblur', 'motionblur');

    const tilt = document.getElementById('tilt');
    tilt.checked = !!this.settings.tilt;
    tilt.addEventListener('change', async () => {
      if (tilt.checked) {
        const ok = await this.cb.onTiltRequest?.();
        if (!ok) {
          tilt.checked = false;
          this.settings.tilt = false;
          if (this.ios) {
            this.tiltNote.classList.remove('hidden');
            this.tiltPermBtn.classList.remove('hidden');
          }
          return;
        }
        this.settings.tilt = true;
        this.cb.onTiltChange?.(true);
      } else {
        this.settings.tilt = false;
        this.cb.onTiltChange?.(false);
      }
      saveSettings(this.settings);
    });

    document.getElementById('sens').addEventListener('change', () => this.cb.onSettingsChange?.(this.settings));
    document.getElementById('vol').addEventListener('input', (e) => this.cb.onVolume?.(parseFloat(e.target.value)));
  }

  setToggle(id, on) {
    const el = document.getElementById(id);
    if (el) el.checked = on;
  }

  applySettings() {
    document.getElementById('sens').value = this.settings.sensitivity;
    document.getElementById('fov').value = this.settings.fov;
    document.getElementById('vol').value = this.settings.volume;
    document.getElementById('postfx').checked = this.settings.postfx;
    document.getElementById('shadows').checked = this.settings.shadows;
    document.getElementById('motionblur').checked = this.settings.motionblur;
    document.getElementById('tilt').checked = this.settings.tilt;
    document.getElementById('tiltsens').value = this.settings.tiltSensitivity;
    document.getElementById('sens-val').textContent = Number(this.settings.sensitivity).toFixed(2);
    document.getElementById('fov-val').textContent = Math.round(this.settings.fov);
    document.getElementById('vol-val').textContent = Math.round(this.settings.volume * 100);
    document.getElementById('tilt-val').textContent = Number(this.settings.tiltSensitivity).toFixed(2);
  }

  openPanel(name) {
    if (name === 'briefing') {
      this.briefing.classList.remove('hidden');
    } else if (name === 'settings') {
      this.settingsScreen.classList.remove('hidden');
      this.applySettings();
    }
  }

  closePanel(name) {
    if (name === 'briefing') this.briefing.classList.add('hidden');
    if (name === 'settings') {
      this.settingsScreen.classList.add('hidden');
      if (this.settingsReturn === 'pause') {
        this.settingsReturn = 'menu';
        this.cb.onResume?.();
      } else {
        this.cb.onSettingsClose?.();
      }
    }
    this.cb.onSettingsChange?.(this.settings);
  }

  showMenu() {
    this.menu.classList.remove('hidden');
    this.hud.classList.add('hidden');
    this.pause.classList.add('hidden');
    this.gameover.classList.add('hidden');
    this.briefing.classList.add('hidden');
    this.settingsScreen.classList.add('hidden');
    document.getElementById('mobile').classList.add('hidden');
  }

  showGame() {
    this.menu.classList.add('hidden');
    this.briefing.classList.add('hidden');
    this.settingsScreen.classList.add('hidden');
    this.pause.classList.add('hidden');
    this.gameover.classList.add('hidden');
    this.hud.classList.remove('hidden');
    if (this.cb.isTouch?.()) document.getElementById('mobile').classList.remove('hidden');
  }

  showPause() {
    this.pause.classList.remove('hidden');
  }

  hidePause() {
    this.pause.classList.add('hidden');
  }

  showGameOver({ win, wave, kills, score, accuracy }) {
    this.gameover.classList.remove('hidden');
    this.gameover.classList.toggle('win', win);
    document.getElementById('go-kicker').textContent = win ? 'MISSION ACCOMPLISHED' : 'OPERATOR STATUS';
    document.getElementById('go-title').textContent = win ? 'EXFIL' : 'K.I.A.';
    document.getElementById('go-sub').textContent = win
      ? 'The Blacksite is silent. All ten waves neutralized. Outstanding work, operator.'
      : 'The Blacksite has fallen. Regroup, re-arm, and take it back.';
    document.getElementById('go-wave').textContent = wave;
    document.getElementById('go-kills').textContent = kills;
    document.getElementById('go-score').textContent = score;
    document.getElementById('go-acc').textContent = `${accuracy}%`;
    this.hud.classList.add('hidden');
    document.getElementById('mobile').classList.add('hidden');
  }

  hideGameOver() {
    this.gameover.classList.add('hidden');
  }

  setLoading(progress = 1) {
    if (progress >= 1) {
      this.loading.classList.add('done');
      setTimeout(() => this.loading.classList.add('hidden'), 700);
    }
  }

  checkOrientation() {
    const portrait = window.innerHeight > window.innerWidth * 1.05;
    const small = Math.min(window.innerWidth, window.innerHeight) < 620;
    this.rotate.classList.toggle('hidden', !(portrait && small && this.cb.isTouch?.()));
  }

  fatal(msg) {
    this.fatal.classList.remove('hidden');
    document.getElementById('fatal-msg').textContent = msg;
  }

  setGpuLabel(text) {
    const el = document.getElementById('gpu-label');
    if (el) el.textContent = text;
  }
}
