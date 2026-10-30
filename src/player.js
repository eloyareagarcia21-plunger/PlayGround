import * as THREE from 'three';

export class Player {
  constructor(camera, world, settings) {
    this.camera = camera;
    this.world = world;
    this.settings = settings;
    this.position = new THREE.Vector3(0, 0, 24);
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.eyeHeight = 1.68;
    this.radius = 0.42;
    this.grounded = true;
    this.health = 100;
    this.maxHealth = 100;
    this.armor = 50;
    this.maxArmor = 100;
    this.stamina = 100;
    this.sprinting = false;
    this.ads = false;
    this.dead = false;
    this.trauma = 0;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.recoilVelPitch = 0;
    this.recoilVelYaw = 0;
    this.bobTime = 0;
    this.bobAmount = 0;
    this.walkDistance = 0;
    this.stepAccum = 0;
    this.lastDamageTime = -999;
    this.time = 0;
    this.damageFlash = 0;
    this.currentFov = settings.fov;
    this.baseFov = settings.fov;
    this.jumpHeld = false;
    this.landKick = 0;
    this.onFootstep = null;
    this.onDamage = null;
    this.onDeath = null;
    this.onHealthChange = null;
    this.moveState = { x: 0, z: 0, speed: 0 };
    this.aimDir = new THREE.Vector3();
    this.muzzleWorld = new THREE.Vector3();
  }

  reset(spawn = new THREE.Vector3(0, 0, 24), yaw = 0) {
    this.position.copy(spawn);
    this.position.y = 0;
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.armor = 50;
    this.stamina = 100;
    this.dead = false;
    this.trauma = 0;
    this.recoilPitch = this.recoilYaw = 0;
    this.recoilVelPitch = this.recoilVelYaw = 0;
    this.grounded = true;
    this.lastDamageTime = -999;
    this.time = 0;
    this.damageFlash = 0;
    this.currentFov = this.baseFov;
    this.jumpHeld = false;
    this.updateCamera(0, 0);
    this.onHealthChange?.(this.health, this.armor);
  }

  addRecoil(pitch, yaw) {
    this.recoilVelPitch += pitch;
    this.recoilVelYaw += yaw;
    this.trauma = Math.min(1, this.trauma + Math.abs(pitch) * 0.55);
  }

  takeDamage(amount, fromPos) {
    if (this.dead) return;
    let dmg = amount;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.55);
      this.armor -= absorbed;
      dmg -= absorbed;
    }
    this.health = Math.max(0, this.health - dmg);
    this.lastDamageTime = this.time;
    this.trauma = Math.min(1, this.trauma + 0.35 + amount / 120);
    this.damageFlash = Math.min(1, this.damageFlash + 0.55 + amount / 80);
    this.onDamage?.(amount, fromPos);
    this.onHealthChange?.(this.health, this.armor);
    if (this.health <= 0 && !this.dead) {
      this.dead = true;
      this.onDeath?.();
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    this.onHealthChange?.(this.health, this.armor);
  }

  addArmor(amount) {
    this.armor = Math.min(this.maxArmor, this.armor + amount);
    this.onHealthChange?.(this.health, this.armor);
  }

  update(dt, input) {
    if (this.dead) {
      this.updateCamera(dt, 0);
      return;
    }
    this.time += dt;
    const look = input.consumeLook();
    const tilt = input.consumeTilt();
    const sens = this.settings.sensitivity * (this.ads ? 0.62 : 1) * 0.0022;
    this.yaw -= look.dx * sens;
    this.pitch -= look.dy * sens;
    this.yaw -= tilt.x * 0.0065 * this.settings.tiltSensitivity;
    this.pitch -= tilt.y * 0.0055 * this.settings.tiltSensitivity;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.45, 1.45);

    // recoil spring
    this.recoilVelPitch *= Math.max(0, 1 - dt * 14);
    this.recoilVelYaw *= Math.max(0, 1 - dt * 14);
    this.recoilPitch += this.recoilVelPitch;
    this.recoilYaw += this.recoilVelYaw;
    this.recoilPitch *= Math.max(0, 1 - dt * 7.5);
    this.recoilYaw *= Math.max(0, 1 - dt * 7.5);

    this.ads = input.mouse.right && !this.sprinting;
    const wantMove = input.getMove();
    const mag = Math.hypot(wantMove.x, wantMove.z);
    const forward = mag > 0.1;
    const canSprint = input.isSprint() && forward && !input.mouse.right && this.stamina > 4 && wantMove.z < 0.6;
    this.sprinting = canSprint;
    if (this.sprinting) {
      this.stamina = Math.max(0, this.stamina - dt * 17);
    } else {
      this.stamina = Math.min(100, this.stamina + dt * (this.ads ? 8 : 15));
    }

    let maxSpeed = 6.1;
    if (this.ads) maxSpeed = 3.1;
    else if (this.sprinting) maxSpeed = 9.6;
    maxSpeed *= Math.min(1, 0.55 + mag * 0.45);

    const accel = this.grounded ? (this.ads ? 26 : 46) : 12;
    const desiredX = wantMove.x * maxSpeed;
    const desiredZ = wantMove.z * maxSpeed;
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    const worldX = desiredX * cos + desiredZ * sin;
    const worldZ = -desiredX * sin + desiredZ * cos;

    this.velocity.x += (worldX - this.velocity.x) * Math.min(1, accel * dt);
    this.velocity.z += (worldZ - this.velocity.z) * Math.min(1, accel * dt);
    if (!this.grounded) {
      // air drag
      this.velocity.x *= Math.max(0, 1 - dt * 0.35);
      this.velocity.z *= Math.max(0, 1 - dt * 0.35);
    }

    const jumpPressed = input.isJump();
    if (jumpPressed && !this.jumpHeld && this.grounded) {
      this.velocity.y = 6.4;
      this.grounded = false;
      this.landKick = -0.035;
    }
    this.jumpHeld = jumpPressed;

    this.velocity.y -= 21 * dt;
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    if (this.position.y <= 0) {
      if (!this.grounded && this.velocity.y < -5) {
        this.trauma = Math.min(1, this.trauma + Math.min(0.3, -this.velocity.y * 0.025));
        this.landKick = -0.05;
        this.onFootstep?.(true, 1.3);
      }
      this.position.y = 0;
      this.velocity.y = 0;
      this.grounded = true;
    }

    this.world.resolveCollision(this.position, this.radius);

    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    this.moveState.speed = speed;
    this.moveState.x = this.velocity.x;
    this.moveState.z = this.velocity.z;

    if (this.grounded && speed > 0.25) {
      this.bobTime += dt * (this.sprinting ? 12.5 : 8.6) * Math.min(1, speed / 5);
      this.walkDistance += speed * dt;
      this.stepAccum += speed * dt;
      if (this.stepAccum > (this.sprinting ? 2.35 : 3.1)) {
        this.stepAccum = 0;
        this.onFootstep?.(this.sprinting, 1);
      }
    }
    this.bobAmount += ((this.grounded && speed > 0.4 ? Math.min(1, speed / 6) : 0) - this.bobAmount) * Math.min(1, dt * 8);

    if (this.time - this.lastDamageTime > 6 && this.health < this.maxHealth && !this.dead) {
      this.health = Math.min(this.maxHealth, this.health + dt * 11);
      this.onHealthChange?.(this.health, this.armor);
    }

    this.damageFlash = Math.max(0, this.damageFlash - dt * 2.2);
    this.trauma = Math.max(0, this.trauma - dt * 1.15);

    const targetFov = this.ads ? this.baseFov * 0.74 : this.baseFov + (this.sprinting ? 4 : 0);
    this.currentFov += (targetFov - this.currentFov) * Math.min(1, dt * 9);
    if (Math.abs(this.camera.fov - this.currentFov) > 0.01) {
      this.camera.fov = this.currentFov;
      this.camera.updateProjectionMatrix();
    }

    this.updateCamera(dt, speed);
  }

  updateCamera(dt, speed) {
    const bob = this.bobAmount;
    const bobY = Math.sin(this.bobTime * 2) * 0.028 * bob * (this.sprinting ? 1.7 : 1);
    const bobX = Math.cos(this.bobTime) * 0.026 * bob * (this.sprinting ? 1.8 : 1);
    const roll = Math.cos(this.bobTime) * 0.006 * bob * (this.sprinting ? 2.2 : 1);

    const shake = this.trauma * this.trauma;
    const st = this.time * 47;
    const shakeX = Math.sin(st * 1.7) * 0.011 * shake + Math.sin(st * 3.3) * 0.004 * shake;
    const shakeY = Math.cos(st * 2.1) * 0.010 * shake + Math.cos(st * 4.1) * 0.003 * shake;
    const shakeZ = Math.sin(st * 2.6) * 0.008 * shake;

    const breathe = Math.sin(this.time * 1.35) * 0.004 * (1 - bob);

    this.camera.position.set(
      this.position.x + bobX * 0.4,
      this.position.y + this.eyeHeight + bobY + this.landKick,
      this.position.z,
    );
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw + this.recoilYaw + shakeX;
    this.camera.rotation.x = this.pitch + this.recoilPitch + shakeY + breathe;
    this.camera.rotation.z = roll + shakeZ;

    if (this.landKick < 0) this.landKick = Math.min(0, this.landKick + dt * 0.4);

    this.aimDir.set(0, 0, -1).applyEuler(this.camera.rotation);
  }
}
