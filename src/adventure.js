import * as THREE from 'three';
import { ADVENTURES, ITEMS, CROPS, DECOR } from './data.js';
import { buildMap } from './advmap.js';
import { S, rnd, add, barnRoom, addXP, save, questEvent, emit } from './state.js';
import { W, pickAt, toScreen, focusOn, updateCamera, slab, roundedRect } from './world.js';
import { make, play, ICONS } from './assets.js';
import { dressUp, bodyOf, faceDir, artOrModel } from './entities.js';
import { sfx } from './sound.js';
import { $, img, coinI, gemI, boltI, xpI, esc, toast, plus, flyCoins, flyGems, flyXP, flyItem, confetti, openModal, closeModal, renderHUD } from './ui.js';

// ---------- Trạng thái ----------
const progress = A => (S.adv ||= {})[A.id] ||= { open: [], chests: [], done: false, runs: 0 };
export function advPercent(A) {
  const m = buildMap(A), p = progress(A);
  const n = m.cells.filter(c => c.k === 'ob').length;
  return Math.round(Math.min(1, p.open.length / n) * 100);
}

// ---------- Cảnh 3D ----------
let cur = null; // { A, map, group, views: Map(idx -> obj), maisie, rings }
const cellPos = (m, x, z) => new THREE.Vector3(x - m.A.w / 2 + 0.5, 0, z - m.A.h / 2 + 0.5);

function isOpen(c) { return c.k === 'open' || cur.p.open.includes(cur.map.idx(c.x, c.z)) || (c.k === 'chest' && cur.p.chests.includes(cur.map.idx(c.x, c.z))); }
function reachable(c) {
  const { map } = cur;
  return [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dz]) => {
    const x = c.x + dx, z = c.z + dz;
    if (x < 0 || z < 0 || x >= map.A.w || z >= map.A.h) return false;
    const n = map.cells[map.idx(x, z)];
    return n.k !== 'water' && isOpen(n);
  });
}

function buildScene(A) {
  const map = buildMap(A), p = progress(A), T = map.T;
  const g = new THREE.Group();
  cur = { A, map, p, group: g, views: new Map(), rings: [], pick: [] };
  // nền đảo: cát viền + từng ô đất
  const base = slab(Math.max(A.w, A.h) + 2, 2.5, 0.8, new THREE.MeshStandardMaterial({ color: T.edge, roughness: 1 }), -0.15);
  base.scale.set((A.w + 2) / (Math.max(A.w, A.h) + 2), 1, (A.h + 2) / (Math.max(A.w, A.h) + 2));
  g.add(base);
  const shallow = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(Math.max(A.w, A.h) + 7, 5), 10),
    new THREE.MeshStandardMaterial({ color: 0x8be6ec, transparent: true, opacity: 0.55 }));
  shallow.rotation.x = -Math.PI / 2; shallow.position.y = -0.5;
  shallow.scale.set((A.w + 7) / (Math.max(A.w, A.h) + 7), (A.h + 7) / (Math.max(A.w, A.h) + 7), 1);
  g.add(shallow);
  const tileGeo = new THREE.BoxGeometry(1, 0.3, 1);
  const m1 = new THREE.MeshStandardMaterial({ color: T.ground, roughness: 1 }), m2 = new THREE.MeshStandardMaterial({ color: T.ground2, roughness: 1 });
  cur.tiles = new Map();
  map.cells.forEach((c, i) => {
    if (c.k === 'water') return;
    const t = new THREE.Mesh(tileGeo, (c.x + c.z) % 2 ? m1 : m2);
    t.position.copy(cellPos(map, c.x, c.z)); t.position.y = -0.15; t.receiveShadow = true;
    g.add(t); cur.tiles.set(i, t);
  });
  // thuyền ở bến
  const boat = artOrModel('pirate/boat-row-small', { size: 1.8 });
  boat.position.copy(cellPos(map, map.cx, A.h)).add(new THREE.Vector3(0, -0.45, 0.8));
  if (!boat.userData.plane) boat.rotation.y = Math.PI / 2; boat.userData.oid = 'a:boat';
  g.add(boat); cur.pick.push(boat); cur.boat = boat;

  // vòng vàng vẽ đè lên trên (không bị hình 2D đứng trên ô che mất)
  const ringGeo = new THREE.RingGeometry(0.36, 0.5, 28);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false });
  map.cells.forEach((c, i) => {
    if (c.k === 'water' || c.k === 'open' || isOpen(c)) return;
    if (c.k === 'npc' || c.k === 'ruin' || c.k === 'ruinpart') return; // đảo truyện: vẽ ở bước sau
    let v;
    if (c.k === 'ob') { const [model, fit] = T.obstacles[c.t]; v = artOrModel(model, fit); if (!v.userData.plane) v.rotation.y = c.rot; }
    else if (c.k === 'chest') { v = artOrModel('pirate/chest', { size: 0.7 }); if (!v.userData.plane) v.rotation.y = -0.6; }
    else if (c.k === 'goal') {
      v = new THREE.Group();
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.12, 24), new THREE.MeshStandardMaterial({ color: 0xffd23f }));
      pad.position.y = 0.06; v.add(pad);
      const gm = artOrModel(A.goal.model, A.goal.pet ? { h: 0.75 } : { size: 0.8 }, 0.6, 0.6); gm.position.y = 0.12; v.add(gm);
      v.userData.inner = gm;
      if (p.done) v.visible = false;
    }
    v.position.copy(cellPos(map, c.x, c.z));
    v.userData.oid = 'a:' + i;
    g.add(v); cur.pick.push(v); cur.views.set(i, v);
    const ring = new THREE.Mesh(ringGeo, ringMat); ring.rotation.x = -Math.PI / 2; ring.position.copy(v.position); ring.position.y = 0.04; ring.visible = false; ring.renderOrder = 5;
    g.add(ring); cur.rings.push([i, ring]);
  });
  // Maisie đi phiêu lưu
  const maisie = bodyOf('maisie', 'chars/character-female-a', { h: 1.15 }); if (!maisie.userData.isArt) dressUp(maisie, 'maisie');
  maisie.position.copy(cellPos(map, map.cx, A.h - 1));
  maisie.userData.goal = maisie.position.clone(); maisie.userData.oid = 'a:maisie';
  if (!maisie.userData.isArt) maisie.rotation.y = Math.PI;
  g.add(maisie); cur.maisie = maisie;
  updateRings();
  return g;
}

// Chỗ chưa tới được thì tối màu (như sương mù), chỗ dọn được thì sáng và nhún nhảy
const darkCache = new Map();
function darkOf(m) {
  if (!darkCache.has(m)) {
    const d = m.clone(), k = m.isMeshBasicMaterial ? 0.3 : 0.55; // hình 2D không chịu ánh sáng nên làm tối mạnh hơn mới thấy rõ
    d.color = m.color.clone().multiplyScalar(k).lerp(new THREE.Color(0x4a6278), 0.3); darkCache.set(m, d);
  }
  return darkCache.get(m);
}
function setDim(v, dim) {
  if (v.userData.dim === dim) return;
  v.userData.dim = dim;
  v.traverse(o => {
    if (!o.isMesh) return;
    o.userData.baseMat ||= o.material;
    o.material = dim ? (Array.isArray(o.userData.baseMat) ? o.userData.baseMat.map(darkOf) : darkOf(o.userData.baseMat)) : o.userData.baseMat;
  });
}
function updateRings() {
  for (const [i, ring] of cur.rings) {
    const c = cur.map.cells[i], v = cur.views.get(i);
    const r = v && v.visible && reachable(c);
    ring.visible = !!r;
    if (v) { setDim(v, !r && c.k !== 'goal'); v.userData.reach = !!r; }
  }
  // nền: chỗ đã đi qua và kề bên thì sáng, còn lại tối như sương
  for (const [i, t] of cur.tiles) {
    const c = cur.map.cells[i], lit = isOpen(c) || reachable(c) || c.k === 'goal';
    t.userData.baseMat ||= t.material;
    t.material = lit ? t.userData.baseMat : darkOf(t.userData.baseMat);
  }
}

// ---------- Vào / ra đảo ----------
let saved = null, hooks = {};
export function enterAdventure(id, h) {
  hooks = h;
  const A = ADVENTURES.find(a => a.id === id);
  const p = progress(A);
  if (p.done) { Object.assign(p, { open: [], chests: [], done: false }); p.runs++; }
  closeModal();
  saved = { target: W.target.clone(), zoom: W.zoom, bounds: W.bounds };
  W.farm.visible = false;
  W.adv = buildScene(A);
  W.scene.add(W.adv);
  W.advPick = cur.pick;
  W.mode = 'adv';
  W.bounds = { x0: -A.w / 2, x1: A.w / 2, z0: -A.h / 2, z1: A.h / 2 + 2 };
  W.zoom = 1.25;
  focusOn(cellPos(cur.map, cur.map.cx, A.h - 3));
  document.body.classList.add('in-adv');
  drawAdvHud();
  sfx('ship');
  toast(A.intro);
}
export function leaveAdventure() {
  if (W.mode !== 'adv') return;
  W.scene.remove(W.adv);
  W.adv.traverse(o => { if (o.geometry && o.geometry !== undefined) o.geometry.dispose?.(); });
  W.adv = null; cur = null;
  W.farm.visible = true; W.mode = 'farm';
  W.bounds = saved.bounds; W.zoom = saved.zoom; W.target.copy(saved.target); updateCamera();
  document.body.classList.remove('in-adv');
  $('#advHud').hidden = true;
  hooks.onLeave?.();
  save();
}

function drawAdvHud() {
  const { A, p } = cur;
  const total = cur.map.cells.filter(c => c.k === 'chest').length;
  const h = $('#advHud'); h.hidden = false;
  h.innerHTML = `<div class="advtitle"><b>${esc(A.n)}</b><span>Rương ${p.chests.length}/${total} · ${p.done ? 'Đã tới đích!' : esc(A.goal.n)}</span></div>
    <button class="rbtn home" id="advHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>`;
  $('#advHome').onclick = () => { sfx('tap'); leaveAdventure(); };
}

// ---------- Chạm trên đảo ----------
export function advTap(sx, sy) {
  if (!cur) return;
  const oid = pickAt(sx, sy);
  if (oid === 'a:boat') { leaveAdventure(); return; }
  if (oid === 'a:maisie') { play(cur.maisie, 'emote-yes'); cur.maisie.userData.busy = 1; sfx('collect'); return; }
  if (typeof oid !== 'string' || !oid.startsWith('a:')) return;
  const i = +oid.slice(2), c = cur.map.cells[i], v = cur.views.get(i);
  if (!v || !v.visible) return;
  if (!reachable(c)) { toast('Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng.'); sfx('no'); bump(v); return; }
  if (c.k === 'ob') {
    if (S.energy < c.e) { hooks.openEnergy?.(); return; }
    S.energy -= c.e;
    plus(sx, sy - 30, `-${c.e}⚡`);
    walkTo(c);
    sfx('chop');
    vanish(v, () => {
      cur.p.open.push(i);
      giveLoot(c.loot, sx, sy);
      addXP(1);
      updateRings(); renderHUD(); save();
    });
    questEvent('clear');
  } else if (c.k === 'chest') {
    walkTo(c);
    const mixer = v.userData.mixer; if (mixer) { play(v, 'open'); }
    sfx('collect');
    cur.p.chests.push(i);
    emit('act', 'chest');
    const coins = 20 + rnd(30), roll = Math.random();
    S.coins += coins; flyCoins(sx, sy, coins);
    if (roll < 0.4) { S.gems += 1 + rnd(2); flyGems(sx, sy); }
    else if (roll < 0.7) { S.energy += 5; plus(sx, sy - 60, '+5⚡'); }
    setTimeout(() => vanish(v, () => { updateRings(); }), 900);
    drawAdvHud(); renderHUD(); save();
  } else if (c.k === 'goal') {
    walkTo(c);
    finish(v, sx, sy);
  }
}

function giveLoot(l, sx, sy) {
  if (!l) return;
  if (l.coins) { S.coins += l.coins; flyCoins(sx, sy, l.coins); }
  if (l.gems) { S.gems += l.gems; flyGems(sx, sy); }
  if (l.energy) { S.energy += l.energy; plus(sx, sy - 55, `+${l.energy}⚡`); }
  if (l.item && barnRoom() > 0) {
    const crops = Object.keys(CROPS).filter(k => CROPS[k].lv <= S.level);
    const k = crops[rnd(crops.length)]; add(k, 1); flyItem(sx, sy, k, 1);
  }
}

function finish(v, sx, sy) {
  const { A, p } = cur;
  if (p.done) return;
  p.done = true;
  const half = p.runs > 0 ? 0.5 : 1;
  const r = { coins: Math.round(A.reward.coins * half), gems: Math.max(1, Math.round(A.reward.gems * half)), xp: Math.round(A.reward.xp * half) };
  S.coins += r.coins; S.gems += r.gems;
  const inner = v.userData.inner;
  if (inner?.userData.mixer) play(inner, 'dance');
  else if (inner?.userData.clips?.open) play(inner, 'open');
  let petNote = '';
  if (A.goal.pet && p.runs === 0) {
    (S.pendingDecor ||= []).push(A.goal.pet);
    petNote = `<p class="hint">${esc(DECOR[A.goal.pet].n)} sẽ về sống ở nông trại của bạn!</p>`;
  }
  confetti(); sfx('level');
  setTimeout(() => {
    addXP(r.xp);
    openModal('advdone', 'Hoàn thành!', `<div class="celebrate"><div class="talk"><img src="${ICONS['face:maisie']}" alt=""><div class="say">Tuyệt vời! Bạn đã tới được <b>${esc(A.goal.n)}</b> ở ${esc(A.n)}!</div></div>
      <div class="reward" style="font-size:22px"><span>${coinI}+${r.coins}</span><span>${gemI}+${r.gems}</span><span>${xpI}+${r.xp}</span></div>${petNote}
      <button class="btn wide orange" id="advBack">Về nông trại</button></div>`);
    $('#advBack').onclick = () => { closeModal(); leaveAdventure(); };
    drawAdvHud(); renderHUD(); save();
  }, 1200);
}

function bump(v) { v.userData.bumpT = performance.now(); }
function vanish(v, done) {
  v.userData.vanishing = true;
  const t0 = performance.now(), s0 = 1;
  const f = () => {
    const k = (performance.now() - t0) / 420;
    if (k < 1) { v.scale.setScalar(s0 * (1 - k)); if (!v.userData.plane) v.rotation.y += 0.25; requestAnimationFrame(f); }
    else { v.visible = false; done?.(); }
  };
  setTimeout(f, 250);
}
function walkTo(c) {
  // đứng ở ô trống kề bên chướng ngại
  const { map } = cur;
  let best = null, bd = 1e9;
  for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const x = c.x + dx, z = c.z + dz;
    if (x < 0 || z < 0 || x >= map.A.w || z >= map.A.h) continue;
    const n = map.cells[map.idx(x, z)];
    if (n.k === 'water' || !isOpen(n)) continue;
    const p = cellPos(map, x, z), d = p.distanceTo(cur.maisie.position);
    if (d < bd) { bd = d; best = p; }
  }
  if (best) { cur.maisie.userData.goal.copy(best); cur.maisie.userData.face = cellPos(map, c.x, c.z); }
}

export function advUpdate(t, dt) {
  if (!cur) return;
  const m = cur.maisie, u = m.userData; u.mixer?.update(dt);
  const d = u.goal.clone().sub(m.position); d.y = 0;
  if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * 2.2)); m.position.add(d); faceDir(m, d.x, d.z); u.acted = false; }
  else {
    if (u.face && !u.acted) { const f = u.face.clone().sub(m.position); faceDir(m, f.x, f.z); play(m, 'interact-right'); u.acted = true; u.idleAt = t + 0.8; }
    else if (u.busy > 0) { u.busy -= dt; }
    else if (!u.idleAt || t > u.idleAt) play(m, 'idle');
  }
  for (const v of cur.views.values()) {
    v.userData.mixer?.update(dt);
    v.userData.inner?.userData.mixer?.update(dt);
    if (v.userData.inner?.userData.mixer && !v.userData.inner.userData.cur) play(v.userData.inner, 'idle');
    const b = v.userData.bumpT;
    if (b) { const k = (performance.now() - b) / 300; v.position.x += Math.sin(k * 30) * 0.01 * (1 - k); if (k > 1) v.userData.bumpT = 0; }
  }
  const pulse = 0.9 + Math.sin(t * 4) * 0.1;
  for (const [i, r] of cur.rings) if (r.visible) {
    r.scale.setScalar(pulse);
    const v = cur.views.get(i);
    if (v && !v.userData.vanishing) { const k = 1 + Math.max(0, Math.sin(t * 4 + i)) * 0.06; v.scale.set(k, 2 - k, k); }
  }
  cur.boat.position.y = -0.45 + Math.sin(t * 1.5) * 0.04;
}

// ---------- Bảng chọn đảo ----------
export function openAdventures(h) {
  const cards = ADVENTURES.filter(A => !A.story).map(A => { // đảo truyện chờ bảng đồ biển mới vào được
    const lock = S.level < A.lv, p = progress(A), pct = advPercent(A);
    return `<div class="card adv ${lock ? 'lock' : ''}">${lock ? `<span class="lk">Cấp ${A.lv}</span>` : ''}
      <img src="${ICONS[A.goal.pet ? 'decor:' + A.goal.pet : 'decor:chest']}" alt="">
      <b>${esc(A.n)}</b><small>${p.done ? 'Đã hoàn thành ✓' : `Đã khám phá ${pct}%`}</small>
      <button class="btn small ${lock ? 'gray' : 'blue'}" data-adv="${A.id}">${lock ? 'Chưa mở' : p.done ? 'Chơi lại' : pct ? 'Đi tiếp' : 'Ra khơi'}</button></div>`;
  }).join('');
  openModal('adventures', 'Phiêu lưu', `<p class="hint">Đi thuyền tới các hòn đảo, dọn đường bằng năng lượng <span class="ico bolt sm"></span> để tìm kho báu và giải cứu các bạn thú!</p><div class="grid">${cards}</div>`);
  document.querySelectorAll('[data-adv]').forEach(b => b.onclick = () => {
    const A = ADVENTURES.find(a => a.id === b.dataset.adv);
    if (S.level < A.lv) { toast(`Mở ở cấp ${A.lv}`); sfx('no'); return; }
    enterAdventure(A.id, h);
  });
}
