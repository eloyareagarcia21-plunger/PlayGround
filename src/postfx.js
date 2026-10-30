import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uDamage: { value: 0 },
    uLow: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uVignette: { value: 1 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime, uDamage, uLow, uVignette;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }

    void main(){
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);

      // subtle lens dispersion, stronger at the edges
      vec2 ca = centered * (0.00035 + r2 * 0.0016);
      float cr = texture2D(tDiffuse, uv + ca).r;
      float cg = texture2D(tDiffuse, uv).g;
      float cb = texture2D(tDiffuse, uv - ca).b;
      vec3 col = vec3(cr, cg, cb);

      // filmic contrast + split tone (cool shadows, warm highlights)
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(lum), col, 1.08);
      col = (col - 0.5) * 1.045 + 0.5;
      col += vec3(-0.006, 0.004, 0.012) * (1.0 - smoothstep(0.0, 0.45, lum));
      col += vec3(0.014, 0.006, -0.006) * smoothstep(0.55, 1.0, lum);

      // vignette
      float vig = smoothstep(0.92, 0.28, length(centered * vec2(1.05, 1.15))) * uVignette;
      col *= mix(0.62, 1.0, vig);

      // damage + critical health response
      float edge = smoothstep(0.20, 0.76, length(centered * vec2(1.0, 1.15)));
      col = mix(col, vec3(0.34, 0.015, 0.01), edge * uDamage * 0.72);
      float pulse = 0.5 + 0.5 * sin(uTime * 4.2);
      col = mix(col, vec3(0.28, 0.012, 0.008), edge * uLow * (0.20 + pulse * 0.22));

      // fine grain
      float grain = hash(uv * uResolution + fract(uTime) * 91.7) - 0.5;
      col += grain * 0.032;

      // very light scan texture
      col *= 1.0 - 0.012 * step(0.5, fract(uv.y * uResolution.y * 0.5));

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
}

export function createComposer(renderer, scene, camera, quality) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2())
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    samples: quality.samples,
  })
  const composer = new EffectComposer(renderer, target)
  composer.setPixelRatio(quality.pixelRatio)
  composer.setSize(window.innerWidth, window.innerHeight)

  const rendererPass = new RenderPass(scene, camera)

  const bloom = quality.bloom
    ? new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.52, 0.62, 0.82)
    : null

  const output = new OutputPass()
  const grade = new ShaderPass(GradeShader)
  grade.material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)

  composer.addPass(rendererPass)
  if (bloom) composer.addPass(bloom)
  composer.addPass(output)
  composer.addPass(grade)

  return {
    composer,
    bloom,
    grade,
    render(dt) {
      composer.render(dt)
    },
    setSize(w, h) {
      composer.setPixelRatio(quality.pixelRatio)
      composer.setSize(w, h)
      grade.material.uniforms.uResolution.value.set(w, h)
      if (bloom) bloom.setSize(w * quality.pixelRatio, h * quality.pixelRatio)
    },
    setDamage(v) { grade.material.uniforms.uDamage.value = v },
    setLow(v) { grade.material.uniforms.uLow.value = v },
    setTime(t) { grade.material.uniforms.uTime.value = t },
    setPixelRatio(pr) {
      quality.pixelRatio = pr
      renderer.setPixelRatio(pr)
      composer.setPixelRatio(pr)
      composer.setSize(window.innerWidth, window.innerHeight)
    },
  }
}
