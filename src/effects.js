import * as THREE from 'three';
import { sparkTexture, smokeTexture, bulletHoleTexture, glowTexture } from './textures.js';

const particleVertex = `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  uniform float uPixelRatio;
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uPixelRatio * (260.0 / max(0.1, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;

const particleFragment = `
  uniform sampler2D uMap;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    if (tex.a < 0.01) discard;
    gl_FragColor = vec4(vColor * tex.rgb, tex.a * vAlpha);
  }
`;

class ParticlePool {
  constructor(scene, count, map, { additive = true, gravity = -9.8, drag = 1.6 } = {}) {
    this.count = count;
    this.gravity = gravity;
    this.drag = drag;
    this.pos = new Float32Array(count * 3);
    this.col = new Float32Array(count * 3);
    this.size = new Float32Array(count);
    this.alpha = new Float32Array(count);
    this.vel = new Float32Array(count * 3);
    this.life = new Float32Array(count);
    this.max = new Float32Array(count);
    this.baseSize = new Float32Array(count);
    this.baseAlpha = new Float32Array(count);
    this.cursor = 0;

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: map },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
      },
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    this.points = new THREE.Points(g, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 6 : 5;
    scene.add(this.points);
    this.geometry = g;

    for (let i = 0; i < count; i++) {
      this.pos[i * 3 + 1] = -999;
      this.alpha[i] = 0;
    }
  }

  spawn(x, y, z, vx, vy, vz, size, life, color, alpha = 1) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.count;
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx;
    this.vel[i * 3 + 1] = vy;
    this.vel[i * 3 + 2] = vz;
    this.col[i * 3] = color.r;
    this.col[i * 3 + 1] = color.g;
    this.col[i * 3 + 2] = color.b;
    this.baseSize[i] = size;
    this.size[i] = size;
    this.baseAlpha[i] = alpha;
    this.alpha[i] = alpha;
    this.life[i] = life;
    this.max[i] = life;
  }

  update(dt) {
    for (let i = 0; i < this.count; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        this.pos[i * 3 + 1] = -999;
        continue;
      }
      const t = this.life[i] / this.max[i];
      const drag = Math.max(0, 1 - this.drag * dt);
      this.vel[i * 3] *= drag;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * drag + this.gravity * dt;
      this.vel[i * 3 + 2] *= drag;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.alpha[i] = this.baseAlpha[i] * Math.pow(t, 0.6);
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }

  setPixelRatio(pr) {
    this.material.uniforms.uPixelRatio.value = pr;
  }
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.sparks = new ParticlePool(scene, 700, sparkTexture(), { additive: true, gravity: -11, drag: 1.4 });
    this.smoke = new ParticlePool(scene, 260, smokeTexture(), { additive: false, gravity: 0.45, drag: 1.2 });
    this.glow = new ParticlePool(scene, 100, glowTexture(), { additive: true, gravity: 0, drag: 0.6 });

    this.tracers = [];
    for (let i = 0; i < 26; i++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const mat = new THREE.LineBasicMaterial({
        color: 0xffd79a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const line = new THREE.Line(geo, mat);
      line.frustumCulled = false;
      line.visible = false;
      line.renderOrder = 7;
      scene.add(line);
      this.tracers.push({ line, life: 0, max: 1 });
    }
    this.tracerCursor = 0;

    this.decalGeo = new THREE.PlaneGeometry(0.16, 0.16);
    this.decalMat = new THREE.MeshBasicMaterial({
      map: bulletHoleTexture(),
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      opacity: 0.95,
    });
    this.decals = [];
    for (let i = 0; i < 48; i++) {
      const m = new THREE.Mesh(this.decalGeo, this.decalMat);
      m.visible = false;
      m.renderOrder = 2;
      scene.add(m);
      this.decals.push(m);
    }
    this.decalCursor = 0;

    this.rings = [];
    for (let i = 0; i < 6; i++) {
      const geo = new THREE.RingGeometry(0.4, 0.55, 40);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffb060, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      scene.add(mesh);
      this.rings.push({ mesh, life: 0, max: 0.5 });
    }

    this.flashLights = [];
    for (let i = 0; i < 4; i++) {
      const l = new THREE.PointLight(0xffa040, 0, 9, 2);
      l.visible = false;
      scene.add(l);
      this.flashLights.push({ light: l, life: 0 });
    }
    this.flashCursor = 0;

    this.casings = [];
    const caseGeo = new THREE.CylinderGeometry(0.012, 0.014, 0.05, 6);
    const caseMat = new THREE.MeshStandardMaterial({ color: 0xc7a35a, metalness: 0.9, roughness: 0.35 });
    for (let i = 0; i < 16; i++) {
      const m = new THREE.Mesh(caseGeo, caseMat);
      m.visible = false;
      scene.add(m);
      this.casings.push({ mesh: m, vel: new THREE.Vector3(), life: 0, spin: new THREE.Vector3() });
    }
    this.caseCursor = 0;
  }

  setPixelRatio(pr) {
    this.sparks.setPixelRatio(pr);
    this.smoke.setPixelRatio(pr);
    this.glow.setPixelRatio(pr);
  }

  tracer(from, to, color = 0xffd79a, life = 0.06) {
    const t = this.tracers[this.tracerCursor];
    this.tracerCursor = (this.tracerCursor + 1) % this.tracers.length;
    const p = t.line.geometry.attributes.position;
    p.setXYZ(0, from.x, from.y, from.z);
    p.setXYZ(1, to.x, to.y, to.z);
    p.needsUpdate = true;
    t.line.material.color.setHex(color);
    t.line.material.opacity = 0.95;
    t.line.visible = true;
    t.life = life;
    t.max = life;
  }

  impact(pos, normal, kind = 'metal', direction = null) {
    const n = normal.clone().normalize();
    const sparkCount = kind === 'flesh' ? 5 : 14;
    const sparkColor = kind === 'flesh' ? new THREE.Color(0xff5a2a) : new THREE.Color(0xffc070);
    for (let i = 0; i < sparkCount; i++) {
      const spread = 4.5;
      this.sparks.spawn(
        pos.x, pos.y, pos.z,
        n.x * (1.5 + Math.random() * 3.5) + (Math.random() - 0.5) * spread,
        n.y * (1.5 + Math.random() * 3.5) + (Math.random() - 0.2) * spread + 0.5,
        n.z * (1.5 + Math.random() * 3.5) + (Math.random() - 0.5) * spread,
        0.05 + Math.random() * 0.12,
        0.22 + Math.random() * 0.4,
        sparkColor,
        0.9,
      );
    }
    if (kind !== 'flesh') {
      for (let i = 0; i < 3; i++) {
        this.smoke.spawn(
          pos.x + (Math.random() - 0.5) * 0.1,
          pos.y + (Math.random() - 0.5) * 0.1,
          pos.z + (Math.random() - 0.5) * 0.1,
          n.x * 0.5 + (Math.random() - 0.5) * 0.5,
          0.4 + Math.random() * 0.4,
          n.z * 0.5 + (Math.random() - 0.5) * 0.5,
          0.28 + Math.random() * 0.25,
          0.6 + Math.random() * 0.5,
          new THREE.Color(0x8899a0),
          0.28,
        );
      }
      this.placeDecal(pos, n, kind);
    }
    if (direction) {
      this.glow.spawn(pos.x, pos.y, pos.z, 0, 0, 0, 0.5, 0.09, new THREE.Color(0xffc070), 0.5);
    }
  }

  placeDecal(pos, normal, kind) {
    if (kind === 'dirt') return;
    const m = this.decals[this.decalCursor];
    this.decalCursor = (this.decalCursor + 1) % this.decals.length;
    m.position.copy(pos).addScaledVector(normal, 0.012);
    m.lookAt(pos.clone().add(normal));
    m.rotation.z = Math.random() * Math.PI * 2;
    const s = 0.7 + Math.random() * 0.7;
    m.scale.set(s, s, s);
    m.visible = true;
    m.userData.life = 24;
  }

  muzzleFlash(pos, dir, color = 0xffb050) {
    for (let i = 0; i < 3; i++) {
      this.glow.spawn(
        pos.x + dir.x * 0.1, pos.y + dir.y * 0.1, pos.z + dir.z * 0.1,
        dir.x * (1 + Math.random()) + (Math.random() - 0.5) * 0.4,
        dir.y * (1 + Math.random()) + (Math.random() - 0.5) * 0.4,
        dir.z * (1 + Math.random()) + (Math.random() - 0.5) * 0.4,
        0.5 + Math.random() * 0.3, 0.05 + Math.random() * 0.03, new THREE.Color(color), 0.85,
      );
    }
    const flash = this.flashLights[this.flashCursor];
    this.flashCursor = (this.flashCursor + 1) % this.flashLights.length;
    flash.light.position.copy(pos);
    flash.light.color.setHex(color);
    flash.light.intensity = 22;
    flash.light.distance = 8;
    flash.light.visible = true;
    flash.life = 0.055;
  }

  explosion(pos) {
    this.glow.spawn(pos.x, pos.y, pos.z, 0, 0, 0, 6, 0.24, new THREE.Color(0xffc070), 1);
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * Math.PI * 2;
      const el = Math.random() * Math.PI * 0.55;
      const sp = 2 + Math.random() * 9;
      this.sparks.spawn(
        pos.x, pos.y, pos.z,
        Math.cos(a) * Math.cos(el) * sp,
        Math.sin(el) * sp + 1,
        Math.sin(a) * Math.cos(el) * sp,
        0.1 + Math.random() * 0.2,
        0.4 + Math.random() * 0.7,
        new THREE.Color(Math.random() > 0.5 ? 0xffc070 : 0xff6a20),
        1,
      );
    }
    for (let i = 0; i < 18; i++) {
      this.smoke.spawn(
        pos.x + (Math.random() - 0.5) * 0.8,
        pos.y + Math.random() * 0.6,
        pos.z + (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 1.6,
        0.7 + Math.random(),
        (Math.random() - 0.5) * 1.6,
        1.2 + Math.random() * 1.6,
        1.5 + Math.random() * 1.2,
        new THREE.Color(0x5b6068),
        0.5,
      );
    }
    const flash = this.flashLights[this.flashCursor];
    this.flashCursor = (this.flashCursor + 1) % this.flashLights.length;
    flash.light.position.copy(pos).add(new THREE.Vector3(0, 0.5, 0));
    flash.light.color.setHex(0xff8a30);
    flash.light.intensity = 90;
    flash.light.distance = 24;
    flash.light.visible = true;
    flash.life = 0.22;

    const ring = this.rings.find((r) => r.life <= 0) || this.rings[0];
    ring.mesh.position.copy(pos).setY(pos.y + 0.06);
    ring.mesh.scale.setScalar(0.5);
    ring.mesh.material.opacity = 0.8;
    ring.mesh.visible = true;
    ring.life = 0.55;
    ring.max = 0.55;
  }

  casing(pos, right) {
    const c = this.casings[this.caseCursor];
    this.caseCursor = (this.caseCursor + 1) % this.casings.length;
    c.mesh.position.copy(pos);
    c.mesh.visible = true;
    c.vel.set(right.x * (1.2 + Math.random()) + (Math.random() - 0.5) * 0.4, 1.6 + Math.random() * 1.2, right.z * (1.2 + Math.random()) + (Math.random() - 0.5) * 0.4);
    c.spin.set(Math.random() * 14, Math.random() * 14, Math.random() * 14);
    c.life = 1.6;
    c.mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
  }

  update(dt) {
    this.sparks.update(dt);
    this.smoke.update(dt);
    this.glow.update(dt);

    for (const t of this.tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      t.line.material.opacity = Math.max(0, (t.life / t.max) * 0.95);
      if (t.life <= 0) t.line.visible = false;
    }

    for (const d of this.decals) {
      if (!d.visible) continue;
      d.userData.life -= dt;
      if (d.userData.life <= 0) d.visible = false;
    }

    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      const k = 1 - r.life / r.max;
      r.mesh.scale.setScalar(0.5 + k * 6);
      r.mesh.material.opacity = 0.8 * (1 - k);
      if (r.life <= 0) r.mesh.visible = false;
    }

    for (const f of this.flashLights) {
      if (f.life <= 0) continue;
      f.life -= dt;
      f.light.intensity *= Math.max(0, 1 - dt * 26);
      if (f.life <= 0) {
        f.light.visible = false;
        f.light.intensity = 0;
      }
    }

    for (const c of this.casings) {
      if (c.life <= 0) continue;
      c.life -= dt;
      c.vel.y -= 9.8 * dt;
      c.mesh.position.addScaledVector(c.vel, dt);
      c.mesh.rotation.x += c.spin.x * dt;
      c.mesh.rotation.y += c.spin.y * dt;
      c.mesh.rotation.z += c.spin.z * dt;
      if (c.mesh.position.y < 0.03) {
        c.mesh.position.y = 0.03;
        c.vel.y *= -0.35;
        c.vel.x *= 0.6;
        c.vel.z *= 0.6;
      }
      if (c.life <= 0) c.mesh.visible = false;
    }
  }
}
