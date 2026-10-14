import './style.css';
import { load, save, S, ensureStarterDecor } from './state.js';
import { loadAll, renderIcons, iconList, ICONS } from './assets.js';
import { initWorld, W, focusOn } from './world.js';
import { VIEWS, addView, buildSpecials, updateSpecials, updateBounce, buildingIcons } from './entities.js';
import { initInput } from './input.js';
import { initUI, tick, positionBubbles, placePendingPets } from './game.js';
import { renderHUD, $ } from './ui.js';
import { audioUnlock } from './sound.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { advUpdate } from './adventure.js';
import { initVisitors, visitorsUpdate } from './visitors.js';
import { buildAmbient, updateAmbient } from './ambient.js';
import { initEvents, eventIcons } from './events.js';
import { loadSprites } from './sprites.js';
import { ensureMarket } from './market.js';
import { nbUpdate, neighborsHelpYou } from './neighbors.js';

async function boot() {
  load();
  const fill = $('#loadfill');
  await loadAll(p => { fill.style.width = (p * 80) + '%'; });
  await loadSprites();
  $('#loadtxt').textContent = 'Đang vẽ hình…';
  await renderIcons([...iconList(), ...buildingIcons(), ...eventIcons()]);
  fill.style.width = '100%';

  const canvas = $('#c');
  initWorld(canvas);
  for (const o of S.objs) addView(o);
  ensureMarket(addView);
  ensureStarterDecor(addView);
  neighborsHelpYou();
  buildSpecials();
  initVisitors();
  buildAmbient();
  focusOn({ x: 0, z: -1 });
  const momentum = initInput(canvas);
  initUI();
  initEvents({ placePending: placePendingPets });
  renderHUD();

  $('#loading').hidden = true;
  $('#hud').hidden = false;
  document.addEventListener('pointerdown', audioUnlock, { once: true });

  if (import.meta.env.DEV) window.__game = { get S() { return S; }, W, ICONS };
  setInterval(tick, 250);
  tick();
  // Hậu kỳ màu kiểu game di động: tươi, rực, vùng tối được nâng sáng (tắt khi máy yếu)
  const composer = new EffectComposer(W.renderer);
  composer.addPass(new RenderPass(W.scene, W.camera));
  composer.addPass(new OutputPass()); // chỉnh màu sau khi đã ra không gian màu sRGB
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(tDiffuse, vUv);
        float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
        c.rgb = mix(vec3(l), c.rgb, 1.32);                 // độ bão hoà
        c.rgb = (c.rgb - 0.5) * 1.06 + 0.5;               // tương phản nhẹ
        c.rgb += (1.0 - c.rgb) * 0.06;                    // nâng vùng tối cho trong trẻo
        c.rgb *= vec3(1.03, 1.0, 0.97);                   // ấm hơn chút
        gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
      }`,
  }));
  const resizeComposer = () => { composer.setPixelRatio(W.renderer.getPixelRatio()); composer.setSize(window.innerWidth, window.innerHeight); };
  resizeComposer(); window.addEventListener('resize', resizeComposer);
  let last = performance.now(), slow = 0, lowered = false;
  // Máy yếu: tự giảm độ nét và bóng đổ để chơi mượt hơn
  const lowerQuality = () => {
    lowered = true;
    W.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    W.scene.traverse(o => { if (o.isDirectionalLight && o.shadow) { o.shadow.mapSize.set(1024, 1024); o.shadow.map?.dispose(); o.shadow.map = null; } });
    window.dispatchEvent(new Event('resize'));
  };
  if (S.lowGfx) lowerQuality();
  const loop = () => {
    const nowT = performance.now(), dt = Math.min(0.1, (nowT - last) / 1000); last = nowT;
    if (!lowered && !document.hidden) { slow = dt > 0.04 ? slow + dt : Math.max(0, slow - dt * 0.5); if (slow > 3) { S.lowGfx = true; lowerQuality(); } }
    const t = nowT / 1000;
    momentum();
    if (W.mode === 'adv') advUpdate(t, dt);
    else if (W.mode === 'nb') nbUpdate(t, dt);
    else {
      for (const v of VIEWS.values()) { v.update?.(t, dt); updateBounce(v.root); }
      updateSpecials(t, dt);
      visitorsUpdate(t, dt);
      updateAmbient(t, dt);
    }
    W.waterTex.offset.x = (t * 0.01) % 1; W.waterTex.offset.y = (t * 0.006) % 1;
    positionBubbles();
    if (!lowered) composer.render(); else W.renderer.render(W.scene, W.camera);
    requestAnimationFrame(loop);
    if (lowered) W.renderer.shadowMap.autoUpdate = (Math.floor(t * 30) % 2) === 0; // bóng cập nhật 15 lần/giây
  };
  loop();

  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
  window.addEventListener('pagehide', save);
}

boot().catch(err => {
  console.error(err);
  $('#loadtxt').textContent = 'Có lỗi khi mở game. Hãy tải lại trang.';
});

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js').catch(() => {}));
}
