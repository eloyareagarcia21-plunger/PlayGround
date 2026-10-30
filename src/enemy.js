import * as THREE from 'three';
import { glowTexture } from './textures.js';

const TYPES = {
  grunt: {
    hp: 110, speed: 2.65, scale: 1, accent: 0xff4433, range: 24, preferred: 15,
    damage: 7, fireDelay: 1.15, burst: 3, burstGap: 0.11, accuracy: 0.55, score: 100,
    name: 'GRUNT',
  },
  rusher: {
    hp: 80, speed: 4.7, scale: 0.92, accent: 0xff8a2a, range: 2.1, preferred: 1.3,
    damage: 17, fireDelay: 1.0, burst: 1, burstGap: 0.1, accuracy: 0.9, score: 150,
    name: 'RUSHER', melee: true,
  },
  heavy: {
    hp: 300, speed: 1.75, scale: 1.28, accent: 0xff2b2b, range: 14, preferred: 9,
    damage: 6, fireDelay: 1.9, burst: 6, burstGap: 0.09, accuracy: 0.45, score: 300,
    name: 'BREACHER', shotgun: true,
  },
  drone: {
    hp: 65, speed: 3.6, scale: 0.95, accent: 0x54e2ff, range: 26, preferred: 13,
    damage: 5, fireDelay: 1.35, burst: 2, burstGap: 0.14, accuracy: 0.72, score: 175,
    name: 'DRONE', flying: true,
  },
};

function raySphere(origin, dir, center, radius) {
  const oc = origin.clone().sub(center);
  const b = oc.dot(dir);
  const c = oc.lengthSq() - radius * radius;
  const disc = b * b - c;
  if (disc < 0) return -1;
  const sq = Math.sqrt(disc);
  let t = -b - sq;
  if (t < 0) t = -b + sq;
  return t >= 0 ? t : -1;
}

function makeMaterials(accent) {
  return {
    body: new THREE.MeshStandardMaterial({ color: 0x424d53, roughness: 0.5, metalness: 0.58, envMapIntensity: 1.25 }),
    plate: new THREE.MeshStandardMaterial({ color: 0x515d63, roughness: 0.4, metalness: 0.7, envMapIntensity: 1.4 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x181f23, roughness: 0.58, metalness: 0.6, envMapIntensity: 0.9 }),
    accent: new THREE.MeshStandardMaterial({ color: 0x151a1d, emissive: accent, emissiveIntensity: 3.6, roughness: 0.4, metalness: 0.5, toneMapped: false }),
    glow: new THREE.MeshBasicMaterial({ color: accent, toneMapped: false }),
    gun: new THREE.MeshStandardMaterial({ color: 0x14181a, roughness: 0.5, metalness: 0.8 }),
    joint: new THREE.MeshStandardMaterial({ color: 0x6c787e, roughness: 0.28, metalness: 1, envMapIntensity: 1.4 }),
  };
}

function glowSprite(color, scale, opacity) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(),
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  }));
  s.scale.setScalar(scale);
  return s;
}

export class Enemy {
  constructor(scene, type, position, effects, audio, opts = {}) {
    this.scene = scene;
    this.type = type;
    this.cfg = TYPES[type];
    this.effects = effects;
    this.audio = audio;
    this.alive = true;
    this.hp = this.cfg.hp * (opts.hpScale || 1);
    this.maxHp = this.hp;
    this.position = position.clone();
    this.position.y = this.cfg.flying ? 3.2 : 0;
    this.velocity = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.walkTime = Math.random() * 10;
    this.attackCooldown = 0.8 + Math.random() * 1.5;
    this.burstLeft = 0;
    this.burstTimer = 0;
    this.flash = 0;
    this.deathTime = 0;
    this.deadRemoved = false;
    this.spawnTime = 0;
    this.state = 'spawn';
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 1 + Math.random() * 2;
    this.aimBlend = 0;
    this.recoil = 0;
    this.hasLOS = false;
    this.meleeWind = 0;
    this.materials = makeMaterials(this.cfg.accent);
    this.hitRadius = 0.42;
    this.score = this.cfg.score;
    this.parts = [];
    this.mesh = this.build();
    this.mesh.position.copy(this.position);
    this.mesh.scale.setScalar(0.01);
    this.scene.add(this.mesh);
    this.mesh.updateMatrixWorld(true);
    this.spawnRipple();
  }

  spawnRipple() {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.55, 32),
      new THREE.MeshBasicMaterial({ color: this.cfg.accent, transparent: true, opacity: 0.8, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(this.position).setY(0.05);
    this.scene.add(ring);
    this.spawnRing = ring;
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * Math.PI * 2;
      this.effects.sparks.spawn(
        this.position.x + Math.cos(a) * 0.5, 0.1, this.position.z + Math.sin(a) * 0.5,
        Math.cos(a) * 1.5, 1 + Math.random() * 2, Math.sin(a) * 1.5,
        0.08, 0.5, new THREE.Color(this.cfg.accent), 0.9,
      );
    }
  }

  makeLimb(w, h, d, mat, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }

  build() {
    const g = new THREE.Group();
    const m = this.materials;
    const s = this.cfg.scale;
    g.scale.setScalar(1);

    if (this.cfg.flying) return this.buildDrone(g);

    // legs
    this.legs = [];
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.16, 0.82, 0);
      const thigh = this.makeLimb(0.17, 0.42, 0.19, m.body, 0, -0.21, 0);
      const knee = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), m.joint);
      knee.position.set(0, -0.43, 0);
      const shin = this.makeLimb(0.145, 0.4, 0.16, m.plate, 0, -0.63, 0.01);
      const foot = this.makeLimb(0.18, 0.1, 0.3, m.dark, 0, -0.85, 0.07);
      const accent = this.makeLimb(0.02, 0.22, 0.02, m.accent, side * 0.08, -0.5, -0.07);
      hip.add(thigh, knee, shin, foot, accent);
      g.add(hip);
      this.legs.push(hip);
    }

    // pelvis + torso
    g.add(this.makeLimb(0.42, 0.22, 0.26, m.dark, 0, 0.9, 0));
    const torso = this.makeLimb(0.62, 0.58, 0.34, m.body, 0, 1.24, 0);
    g.add(torso);
    this.torso = torso;
    g.add(this.makeLimb(0.5, 0.28, 0.08, m.plate, 0, 1.29, -0.19));
    g.add(this.makeLimb(0.2, 0.14, 0.03, m.accent, 0, 1.29, -0.24));
    // shoulder pads
    for (const side of [-1, 1]) {
      const pad = this.makeLimb(0.24, 0.18, 0.32, m.plate, side * 0.42, 1.42, 0);
      pad.rotation.z = side * -0.18;
      g.add(pad);
      g.add(this.makeLimb(0.06, 0.1, 0.06, m.accent, side * 0.53, 1.42, 0));
    }
    // backpack
    g.add(this.makeLimb(0.4, 0.42, 0.16, m.dark, 0, 1.26, 0.24));
    for (const side of [-1, 1]) {
      g.add(this.makeLimb(0.07, 0.2, 0.05, m.accent, side * 0.15, 1.26, 0.33));
    }
    // head
    const head = new THREE.Group();
    head.position.set(0, 1.68, 0);
    head.add(this.makeLimb(0.3, 0.28, 0.3, m.plate, 0, 0, 0));
    const visor = this.makeLimb(0.26, 0.08, 0.03, m.glow, 0, 0.01, -0.16);
    head.add(visor);
    head.add(this.makeLimb(0.34, 0.06, 0.14, m.dark, 0, 0.15, -0.04));
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.3, 5), m.joint);
    antenna.position.set(0.12, 0.3, 0.04);
    antenna.rotation.z = -0.2;
    head.add(antenna);
    g.add(head);
    this.head = head;

    // readability glows: visor bloom + chest core + faint ground ring
    const visorGlow = glowSprite(this.cfg.accent, 0.5, 0.42);
    visorGlow.position.set(0, 0.012, -0.19);
    head.add(visorGlow);
    const chestGlow = glowSprite(this.cfg.accent, 0.62, 0.2);
    chestGlow.position.set(0, 1.29, -0.26);
    g.add(chestGlow);
    const footRing = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.56, 24),
      new THREE.MeshBasicMaterial({ color: this.cfg.accent, transparent: true, opacity: 0.12, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
    );
    footRing.rotation.x = -Math.PI / 2;
    footRing.position.y = 0.02;
    g.add(footRing);
    this.footRing = footRing;

    // arms + weapon
    this.arms = [];
    const gun = new THREE.Group();
    gun.position.set(0.22, 1.2, -0.42);
    gun.add(this.makeLimb(0.09, 0.1, 0.46, m.gun, 0, 0, -0.05));
    gun.add(this.makeLimb(0.045, 0.045, 0.3, m.dark, 0, 0.02, -0.38));
    gun.add(this.makeLimb(0.07, 0.16, 0.1, m.gun, 0, -0.1, 0.03));
    gun.add(this.makeLimb(0.05, 0.04, 0.14, m.accent, 0, 0.06, -0.12));
    this.gunMuzzle = new THREE.Object3D();
    this.gunMuzzle.position.set(0, 0.02, -0.55);
    gun.add(this.gunMuzzle);
    g.add(gun);
    this.gun = gun;

    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.4, 1.42, 0);
      const upper = this.makeLimb(0.15, 0.36, 0.17, m.body, 0, -0.18, 0);
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.075, 7, 6), m.joint);
      elbow.position.set(0, -0.36, 0);
      const fore = this.makeLimb(0.13, 0.34, 0.15, m.plate, 0, -0.53, -0.02);
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.13, 0.13), m.dark);
      hand.position.set(0, -0.71, -0.03);
      shoulder.add(upper, elbow, fore, hand);
      shoulder.rotation.x = side === 1 ? -1.18 : -1.32;
      shoulder.rotation.z = side === 1 ? 0.18 : 0.7;
      g.add(shoulder);
      this.arms.push(shoulder);
    }

    // rusher blades
    if (this.cfg.melee) {
      for (const side of [-1, 1]) {
        const blade = this.makeLimb(0.05, 0.5, 0.03, m.accent, side * 0.5, 0.95, -0.28);
        blade.rotation.x = 0.9;
        blade.rotation.z = side * 0.2;
        g.add(blade);
      }
    }
    if (this.cfg.shotgun) {
      const shield = this.makeLimb(0.5, 0.62, 0.08, m.plate, 0.22, 1.2, -0.4);
      shield.rotation.y = -0.2;
      g.add(shield);
    }

    // hit parts local (scaled by object scale automatically through localToWorld)
    this.parts = [
      { name: 'head', y: 1.68, r: 0.2, mult: 1 },
      { name: 'body', y: 1.24, r: 0.34, mult: 1 },
      { name: 'body', y: 0.94, r: 0.26, mult: 1 },
      { name: 'limb', y: 0.45, r: 0.22, mult: 0.72 },
      { name: 'limb', y: 1.18, r: 0.2, mult: 0.72, x: 0.42 },
      { name: 'limb', y: 1.18, r: 0.2, mult: 0.72, x: -0.42 },
    ];
    return g;
  }

  buildDrone(g) {
    const m = this.materials;
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 8), m.body);
    body.scale.set(1.2, 0.7, 1.1);
    body.castShadow = true;
    g.add(body);
    g.add(new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.035, 6, 20), m.plate));
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), m.glow);
    eye.position.set(0, 0.02, -0.3);
    g.add(eye);
    const eyeGlow = glowSprite(this.cfg.accent, 1.1, 0.65);
    eyeGlow.position.set(0, 0.02, -0.36);
    g.add(eyeGlow);
    g.add(this.makeLimb(0.06, 0.05, 0.06, m.dark, 0, -0.12, -0.32));
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.045, 0.06), m.dark);
      arm.position.set(Math.cos(a) * 0.42, 0.16, Math.sin(a) * 0.42);
      arm.rotation.y = -a;
      g.add(arm);
      const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.012, 12), m.accent);
      rotor.position.set(Math.cos(a) * 0.64, 0.19, Math.sin(a) * 0.64);
      rotor.material = new THREE.MeshBasicMaterial({ color: this.cfg.accent, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false });
      g.add(rotor);
      (this.rotors ||= []).push(rotor);
    }
    // gun pods
    g.add(this.makeLimb(0.08, 0.08, 0.3, m.gun, 0.3, -0.08, 0.18));
    g.add(this.makeLimb(0.08, 0.08, 0.3, m.gun, -0.3, -0.08, 0.18));
    this.gunMuzzle = new THREE.Object3D();
    this.gunMuzzle.position.set(0, -0.08, -0.42);
    g.add(this.gunMuzzle);
    this.gun = this.gunMuzzle;
    this.parts = [
      { name: 'head', y: 0.02, r: 0.34, mult: 1.35 },
      { name: 'body', y: -0.02, r: 0.4, mult: 1 },
    ];
    return g;
  }

  raycast(origin, dir, maxDist) {
    if (!this.alive) return null;
    this.mesh.updateMatrixWorld(true);
    let best = null;
    for (const part of this.parts) {
      const center = new THREE.Vector3(part.x || 0, part.y, 0).applyMatrix4(this.mesh.matrixWorld);
      const radius = part.r * this.cfg.scale;
      const t = raySphere(origin, dir, center, radius);
      if (t > 0 && t < maxDist && (!best || t < best.distance)) {
        best = {
          distance: t,
          point: origin.clone().addScaledVector(dir, t),
          normal: dir.clone().negate(),
          part: part.name,
          enemy: this,
        };
      }
    }
    return best;
  }

  takeDamage(amount, part, point, dir) {
    if (!this.alive) return false;
    this.hp -= amount;
    this.flash = 1;
    this.effects.sparks.spawn(point.x, point.y, point.z, -dir.x * 1.5, 1, -dir.z * 1.5, 0.14, 0.2, new THREE.Color(0xff4a20), 0.9);
    if (this.hp <= 0) {
      this.die(part, point, dir);
      return true;
    }
    // stagger
    if (part === 'head') this.aimBlend = 0;
    return false;
  }

  die(part, point, dir) {
    this.alive = false;
    this.state = 'dead';
    this.deathTime = 0;
    this.deathDir = dir ? dir.clone() : new THREE.Vector3(0, 0, 1);
    this.mesh.traverse((o) => {
      if (o.isSprite) o.visible = false;
      if (o.isMesh && o.material && o.material.blending === THREE.AdditiveBlending) o.visible = false;
    });
    this.effects.explosion(point.clone());
    this.audio?.explosion();
    for (const m of Object.values(this.materials)) {
      if (m.emissive) {
        m.emissive.setHex(0xff3b20);
        m.emissiveIntensity = 0;
      }
    }
  }

  muzzleWorld() {
    return this.gunMuzzle.getWorldPosition(new THREE.Vector3());
  }

  eyeWorld() {
    return new THREE.Vector3(0, this.cfg.flying ? 0.1 : 1.6, 0).applyMatrix4(this.mesh.matrixWorld);
  }

  shoot(player, distance) {
    const origin = this.muzzleWorld();
    const target = player.camera.position.clone().add(new THREE.Vector3(0, -0.15, 0));
    const acc = this.cfg.accuracy * THREE.MathUtils.clamp(1.15 - distance / 46, 0.35, 1.1);
    const willHit = Math.random() < acc;
    let end;
    if (willHit) {
      end = target;
      player.takeDamage(this.cfg.damage, origin);
    } else {
      end = target.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3.4, (Math.random() - 0.4) * 2.6, (Math.random() - 0.5) * 3.4));
      this.effects.impact(target.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)), new THREE.Vector3(0, 1, 0), 'metal');
    }
    const dir = end.clone().sub(origin).normalize();
    this.effects.tracer(origin, end, this.cfg.accent, 0.055);
    this.effects.muzzleFlash(origin, dir, this.cfg.accent);
    this.audio?.enemyShot(distance);
    this.recoil = 1;
    this.muzzleFlash = 0.07;
  }

  update(dt, player, world, enemies, callbacks) {
    this.walkTime += dt;
    this.flash = Math.max(0, this.flash - dt * 6);
    this.recoil = Math.max(0, this.recoil - dt * 8);
    this.spawnTime += dt;

    for (const m of [this.materials.body, this.materials.plate]) {
      if (m.emissive) m.emissiveIntensity = this.flash * 0.9;
    }
    if (this.materials.body.emissive) this.materials.body.emissive.setHex(0xff2a10);

    if (!this.alive) {
      this.deathTime += dt;
      const k = Math.min(1, this.deathTime / 0.55);
      const ease = 1 - Math.pow(1 - k, 3);
      if (this.cfg.flying) {
        this.position.y -= dt * 6.5;
        this.mesh.rotation.z += dt * 5;
        this.mesh.rotation.x += dt * 3;
        if (this.position.y <= 0.2 && !this.deadRemoved) {
          this.position.y = 0.2;
          this.effects.explosion(this.position.clone());
          this.deadRemoved = true;
        }
      } else {
        this.mesh.rotation.x = -ease * 1.45;
        this.mesh.position.y = -ease * 0.25;
        this.mesh.rotation.z = Math.sin(this.deathTime * 4) * 0.06 * (1 - ease);
      }
      const fade = Math.max(0, 1 - Math.max(0, this.deathTime - 1.3) / 1.2);
      if (this.deathTime > 1.1) {
        this.mesh.position.y -= dt * 0.55;
      }
      this.mesh.traverse((o) => {
        if (o.isMesh) {
          if (!o.material._noFade) {
            if (o.material.transparent === false) {
              o.material = o.material.clone();
              o.material._noFade = true;
            }
            o.material.transparent = true;
            o.material.opacity = fade;
          }
        }
      });
      if (this.spawnRing) {
        this.spawnRing.material.opacity = Math.max(0, this.spawnRing.material.opacity - dt * 2);
        if (this.spawnRing.material.opacity <= 0) {
          this.scene.remove(this.spawnRing);
          this.spawnRing = null;
        }
      }
      this.mesh.position.x = this.position.x;
      this.mesh.position.z = this.position.z;
      return false;
    }

    // spawn scale in
    const spawnK = Math.min(1, this.spawnTime / 0.45);
    const scale = this.cfg.scale * (0.2 + 0.8 * (1 - Math.pow(1 - spawnK, 2)));
    this.mesh.scale.setScalar(scale);
    if (this.spawnRing) {
      const rk = Math.min(1, this.spawnTime / 0.9);
      this.spawnRing.scale.setScalar(1 + rk * 4);
      this.spawnRing.material.opacity = 0.9 * (1 - rk);
      if (rk >= 1) {
        this.scene.remove(this.spawnRing);
        this.spawnRing = null;
      }
    }

    const playerPos = player.position;
    const eye = this.eyeWorld();
    const target = playerPos.clone().add(new THREE.Vector3(0, 1.5, 0));
    const toPlayer = target.clone().sub(eye);
    const dist = toPlayer.length();
    toPlayer.normalize();

    // LOS
    const losHit = world.raycast(eye, toPlayer, Math.max(0.1, dist - 0.3));
    this.hasLOS = !losHit;

    const flat = new THREE.Vector3(playerPos.x - this.position.x, 0, playerPos.z - this.position.z);
    const flatDist = flat.length();
    flat.normalize();

    // desired yaw
    const targetYaw = Math.atan2(flat.x, flat.z) + Math.PI;
    let dYaw = targetYaw - this.yaw;
    while (dYaw > Math.PI) dYaw -= Math.PI * 2;
    while (dYaw < -Math.PI) dYaw += Math.PI * 2;
    this.yaw += dYaw * Math.min(1, dt * 7);
    this.mesh.rotation.y = this.yaw;

    if (this.cfg.flying) {
      return this.updateDrone(dt, player, world, enemies, callbacks, flat, flatDist, eye);
    }
    if (player.dead) {
      this.animateIdle(dt);
      return true;
    }

    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeTimer = 1.2 + Math.random() * 2.2;
      this.strafeDir *= -1;
    }

    const cfg = this.cfg;
    let move = new THREE.Vector3();
    if (flatDist > cfg.preferred + 0.8) {
      move.copy(flat);
    } else if (flatDist < cfg.preferred - 1.5) {
      move.copy(flat).multiplyScalar(-1);
    } else if (this.hasLOS) {
      move.set(-flat.z, 0, flat.x).multiplyScalar(this.strafeDir * 0.7);
    }
    // soft separation
    for (const other of enemies) {
      if (other === this || !other.alive) continue;
      const dx = this.position.x - other.position.x;
      const dz = this.position.z - other.position.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.01 && d < 1.5) {
        move.x += (dx / d) * (1.5 - d) * 1.5;
        move.z += (dz / d) * (1.5 - d) * 1.5;
      }
    }
    if (move.lengthSq() > 0.001) {
      move.normalize();
      const spd = cfg.speed * (this.meleeWind > 0 ? 0.2 : 1) * (this.hasLOS ? 1 : 1.12);
      this.position.x += move.x * spd * dt;
      this.position.z += move.z * spd * dt;
      const before = this.position.clone();
      world.resolveCollision(this.position, 0.55 * cfg.scale);
      if (before.distanceToSquared(this.position) > 0.0001) {
        // slide
        this.position.x += -move.z * spd * dt * 0.8;
        this.position.z += move.x * spd * dt * 0.8;
        world.resolveCollision(this.position, 0.55 * cfg.scale);
      }
      this.animSpeed = spd;
    } else {
      this.animSpeed = 0.2;
    }
    this.mesh.position.x = this.position.x;
    this.mesh.position.z = this.position.z;
    this.mesh.position.y = 0;
    this.animateWalk(dt);

    if (player.dead) return true;

    // combat
    this.attackCooldown -= dt;
    if (this.cfg.melee) {
      if (flatDist < 2.5 && this.hasLOS) {
        this.meleeWind += dt;
        this.arms[0].rotation.x = -2.2 + Math.sin(this.walkTime * 30) * 0.15;
        this.arms[1].rotation.x = -2.2 + Math.cos(this.walkTime * 30) * 0.15;
        if (this.meleeWind > 0.42) {
          this.meleeWind = 0;
          if (flatDist < 2.9) {
            player.takeDamage(cfg.damage, this.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
            this.audio?.enemyShot(2);
            callbacks.onPlayerDamage?.(cfg.damage, this.position);
          }
        }
      } else {
        this.meleeWind = Math.max(0, this.meleeWind - dt);
      }
    } else if (this.hasLOS && flatDist < cfg.range && this.attackCooldown <= 0) {
      if (this.burstLeft <= 0) {
        this.burstLeft = cfg.burst;
        this.burstTimer = 0;
        this.attackCooldown = cfg.fireDelay + Math.random() * 0.5;
      }
    }

    if (this.burstLeft > 0) {
      this.burstTimer -= dt;
      if (this.burstTimer <= 0 && this.hasLOS) {
        this.burstLeft--;
        this.burstTimer = cfg.burstGap;
        if (!this.cfg.melee) {
          this.shoot(player, dist);
          callbacks.onEnemyShot?.(this);
        }
      }
    }

    // aim pose / recoil
    const aiming = this.hasLOS && flatDist < cfg.range + 2;
    this.aimBlend += ((aiming ? 1 : 0) - this.aimBlend) * Math.min(1, dt * 5);
    if (!this.cfg.melee) {
      this.arms[1].rotation.x = -1.32 + this.recoil * 0.28;
      this.arms[0].rotation.x = -1.18 + this.recoil * 0.18;
      this.gun.position.z = -0.42 + this.recoil * 0.07;
    }
    return true;
  }

  updateDrone(dt, player, world, enemies, callbacks, flat, flatDist, eye) {
    const cfg = this.cfg;
    this.mesh.rotation.y = this.yaw;
    if (this.rotors) {
      for (const r of this.rotors) r.rotation.y += dt * 60;
    }
    const hoverY = 3.0 + Math.sin(this.walkTime * 1.7) * 0.35;
    this.position.y += (hoverY - this.position.y) * Math.min(1, dt * 2);
    if (!player.dead) {
      const radial = flatDist > cfg.preferred + 3 ? 2.4 : flatDist < cfg.preferred - 3 ? -2.2 : 0;
      const drift = new THREE.Vector3(-flat.z, 0, flat.x).multiplyScalar(this.strafeDir * 1.5);
      const toward = flat.clone().multiplyScalar(radial);
      this.position.x += (toward.x + drift.x) * dt;
      this.position.z += (toward.z + drift.z) * dt;
      this.position.x = THREE.MathUtils.clamp(this.position.x, -33, 33);
      this.position.z = THREE.MathUtils.clamp(this.position.z, -33, 33);
      this.attackCooldown -= dt;
      if (this.hasLOS && flatDist < cfg.range && this.attackCooldown <= 0) {
        this.attackCooldown = cfg.fireDelay + Math.random() * 0.4;
        this.shoot(player, Math.max(4, flatDist));
        callbacks.onEnemyShot?.(this);
      }
    }
    this.mesh.position.copy(this.position);
    this.mesh.rotation.z = Math.sin(this.walkTime * 1.2) * 0.05;
    this.mesh.rotation.x = Math.sin(this.walkTime * 2.1) * 0.04;
    return true;
  }

  animateWalk(dt) {
    const spd = this.animSpeed || 0;
    const rate = 5 + spd * 2;
    this.walkTime += dt * spd * 0.4;
    const swing = Math.sin(this.walkTime * rate * 0.45) * Math.min(0.7, spd * 0.2);
    if (this.legs) {
      this.legs[0].rotation.x = swing;
      this.legs[1].rotation.x = -swing;
    }
    if (this.arms && !this.cfg.melee) {
      this.arms[0].rotation.x = -1.18 + Math.sin(this.walkTime * rate * 0.45) * 0.05;
      this.arms[1].rotation.x = -1.32 - Math.sin(this.walkTime * rate * 0.45) * 0.05;
    }
    if (this.torso) {
      this.torso.position.y = 1.24 + Math.abs(Math.sin(this.walkTime * rate * 0.45)) * 0.025;
    }
    if (this.head) {
      this.head.rotation.y = Math.sin(this.walkTime * 0.7) * 0.1;
    }
  }

  animateIdle(dt) {
    if (this.legs) {
      this.legs[0].rotation.x *= 0.9;
      this.legs[1].rotation.x *= 0.9;
    }
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((o) => {
      if (o.isMesh) {
        o.geometry?.dispose?.();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
        else o.material?.dispose?.();
      }
    });
    if (this.spawnRing) this.scene.remove(this.spawnRing);
  }
}

export class EnemyManager {
  constructor(scene, world, effects, audio, callbacks) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.callbacks = callbacks;
    this.enemies = [];
    this.queue = [];
    this.spawnTimer = 0;
    this.wave = 0;
    this.active = false;
    this.pickups = [];
    this.pickupGroup = new THREE.Group();
    scene.add(this.pickupGroup);
    this.buildPickupAssets();
  }

  buildPickupAssets() {
    this.healthGeo = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    this.healthMat = new THREE.MeshStandardMaterial({ color: 0x0c2a1a, emissive: 0x2eff88, emissiveIntensity: 2, roughness: 0.4, metalness: 0.6 });
    this.ammoGeo = new THREE.BoxGeometry(0.44, 0.26, 0.3);
    this.ammoMat = new THREE.MeshStandardMaterial({ color: 0x2a1d08, emissive: 0xff9c2e, emissiveIntensity: 1.6, roughness: 0.5, metalness: 0.5 });
    this.crossMat = new THREE.MeshBasicMaterial({ color: 0x6dffb0, toneMapped: false });
  }

  reset() {
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    for (const p of this.pickups) this.pickupGroup.remove(p.mesh);
    this.pickups = [];
    this.queue = [];
    this.wave = 0;
    this.active = false;
  }

  beginWave(wave) {
    this.wave = wave;
    this.active = true;
    this.queue = [];
    const count = Math.min(20, 4 + wave * 2);
    for (let i = 0; i < count; i++) {
      let type = 'grunt';
      const r = Math.random();
      if (wave >= 2 && r < 0.18 + Math.min(0.16, wave * 0.02)) type = 'rusher';
      else if (wave >= 4 && r > 0.84) type = 'heavy';
      else if (wave >= 3 && r > 0.68 && r < 0.84) type = 'drone';
      this.queue.push(type);
    }
    // guarantee a heavy on later waves
    if (wave >= 6 && !this.queue.includes('heavy')) this.queue[this.queue.length - 1] = 'heavy';
    if (wave >= 8 && !this.queue.includes('drone')) this.queue[0] = 'drone';
    this.spawnTimer = 0.6;
    this.maxAlive = Math.min(14, 5 + Math.floor(wave * 0.8));
  }

  spawnOne(type) {
    const playerPos = this.callbacks.getPlayerPos();
    let spawn = null;
    for (let i = 0; i < 10; i++) {
      const a = Math.random() * Math.PI * 2;
      const radius = 14 + Math.random() * 9;
      const candidate = new THREE.Vector3(
        THREE.MathUtils.clamp(playerPos.x + Math.cos(a) * radius, -33, 33),
        0,
        THREE.MathUtils.clamp(playerPos.z + Math.sin(a) * radius, -33, 33),
      );
      this.world.resolveCollision(candidate, 0.8);
      const clear = this.enemies.every((e) => !e.alive || e.position.distanceTo(candidate) > 3);
      if (clear && candidate.distanceTo(playerPos) > 11) { spawn = candidate; break; }
    }
    if (!spawn) spawn = this.world.getSpawnPoint(playerPos, 12);
    this.world.resolveCollision(spawn, 0.7);
    const hpScale = 1 + Math.max(0, this.wave - 1) * 0.055;
    const enemy = new Enemy(this.scene, type, spawn, this.effects, this.audio, { hpScale });
    this.enemies.push(enemy);
    this.callbacks.onSpawn?.(enemy);
  }

  update(dt, player) {
    if (this.active && this.queue.length > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        const alive = this.enemies.filter((e) => e.alive).length;
        if (alive < this.maxAlive) {
          this.spawnOne(this.queue.shift());
          this.spawnTimer = 0.55 + Math.random() * 0.9;
        } else {
          this.spawnTimer = 0.4;
        }
      }
    }

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      e.update(dt, player, this.world, this.enemies, this.callbacks);
      if (!e.alive && e.deathTime > 2.7) {
        e.dispose();
        this.enemies.splice(i, 1);
      }
    }

    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i];
      p.life -= dt;
      p.mesh.rotation.y += dt * 2;
      p.mesh.position.y = p.baseY + Math.sin(p.life * 3 + p.phase) * 0.1;
      if (player.position.distanceTo(p.mesh.position) < 1.6 && !player.dead) {
        this.callbacks.onPickup?.(p.type, p.mesh.position);
        this.pickupGroup.remove(p.mesh);
        this.pickups.splice(i, 1);
        continue;
      }
      if (p.life <= 0) {
        this.pickupGroup.remove(p.mesh);
        this.pickups.splice(i, 1);
      }
    }
  }

  dropPickup(pos, type = null) {
    if (!type) {
      const r = Math.random();
      if (r < 0.15) type = 'health';
      else if (r < 0.38) type = 'ammo';
      else return;
    }
    const mesh = new THREE.Group();
    if (type === 'health') {
      const core = new THREE.Mesh(this.healthGeo, this.healthMat);
      core.castShadow = true;
      mesh.add(core);
      const a = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.1), this.crossMat);
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.1), this.crossMat);
      mesh.add(a, b);
    } else {
      const core = new THREE.Mesh(this.ammoGeo, this.ammoMat);
      core.castShadow = true;
      mesh.add(core);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.32), new THREE.MeshBasicMaterial({ color: 0xffc46a, toneMapped: false }));
      mesh.add(stripe);
    }
    mesh.position.copy(pos).setY(0.55);
    this.pickupGroup.add(mesh);
    this.pickups.push({ mesh, type, life: 22, baseY: 0.55, phase: Math.random() * 6 });
  }

  aliveCount() {
    return this.enemies.filter((e) => e.alive).length;
  }

  isCleared() {
    return this.active && this.queue.length === 0 && this.aliveCount() === 0;
  }
}
