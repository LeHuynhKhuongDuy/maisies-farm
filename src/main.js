import './style.css';
import { load, save, S } from './state.js';
import { loadAll, renderIcons, iconList, ICONS } from './assets.js';
import { initWorld, W, focusOn } from './world.js';
import { VIEWS, addView, buildSpecials, updateSpecials, updateBounce, buildingIcons } from './entities.js';
import { initInput } from './input.js';
import { initUI, tick, positionBubbles, placePendingPets } from './game.js';
import { renderHUD, $ } from './ui.js';
import { audioUnlock } from './sound.js';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
import { advUpdate } from './adventure.js';
import { initVisitors, visitorsUpdate } from './visitors.js';
import { buildAmbient, updateAmbient } from './ambient.js';
import { initEvents, eventIcons } from './events.js';
import { ensureMarket } from './market.js';
import { nbUpdate, neighborsHelpYou } from './neighbors.js';

async function boot() {
  load();
  const fill = $('#loadfill');
  await loadAll(p => { fill.style.width = (p * 85) + '%'; });
  $('#loadtxt').textContent = 'Đang vẽ hình…';
  await renderIcons([...iconList(), ...buildingIcons(), ...eventIcons()]);
  fill.style.width = '100%';

  const canvas = $('#c');
  initWorld(canvas);
  for (const o of S.objs) addView(o);
  ensureMarket(addView);
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
  // Nét viền hoạt hình quanh mọi vật (tắt khi máy yếu)
  const outline = new OutlineEffect(W.renderer, { defaultThickness: 0.004, defaultColor: [0.16, 0.1, 0.06], defaultAlpha: 1 });
  // không vẽ viền cho mây vô hình, mặt nước, hiệu ứng trong suốt và mặt đất
  const noOutline = m => { if (m) (m.userData ||= {}).outlineParameters = { visible: false }; };
  W.scene.traverse(o => {
    if (!o.isMesh && !o.isSprite) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    if (o.name === 'ground' || ms.some(m => m.transparent || m.colorWrite === false) || o.geometry?.type?.includes('Plane') || o.geometry?.type?.includes('Shape')) ms.forEach(noOutline);
  });
  W.noOutline = noOutline;
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
    if (outline && !lowered) outline.render(W.scene, W.camera); else W.renderer.render(W.scene, W.camera);
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
