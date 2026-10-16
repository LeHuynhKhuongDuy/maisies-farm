// Hàng xóm: ghé thăm nông trại của người dân trên đảo, giúp tưới cây/cho thú ăn mỗi ngày
import * as THREE from 'three';
import { GRID, CORE, CROPS, PEOPLE, ITEMS } from './data.js';
import { S, now, rnd, add, barnRoom, addXP, save, emit } from './state.js';
import { W, cellToWorld as cellToWorldG, focusOn, updateCamera, slab, pickAt } from './world.js';
import { createView, cropStage, dressUp, bodyOf, artOrModel } from './entities.js';
import { make, play, ICONS } from './assets.js';
import { animateArt } from './sprites.js';
import { sfx } from './sound.js';
import { $, coinI, gemI, xpI, esc, toast, plus, flyCoins, flyGems, flyXP, flyItem, openModal, closeModal, renderHUD } from './ui.js';

export const NEIGHBORS = [
  { id: 'tom', farm: 'Trang trại Gió Mát', lv: 8, seed: 3 },
  { id: 'lily', farm: 'Vườn Hoa Biển', lv: 6, seed: 7 },
  { id: 'ben', farm: 'Nông trại Nắng Vàng', lv: 10, seed: 13 },
  { id: 'rosa', farm: 'Nhà Vườn Bà Rosa', lv: 14, seed: 19 },
  { id: 'sam', farm: 'Bến Cá Chú Sam', lv: 5, seed: 29 },
];
const HELPS = 5;
// Nông trại hàng xóm vẫn là đảo 26x26 đặt giữa gốc toạ độ: dời ô cho khớp cách tính theo GRID
const NB = (GRID - CORE) / 2;
const cellToWorld = (x, z, w, d) => cellToWorldG(x + NB, z + NB, w, d);
const today = () => new Date().toDateString();
function day() {
  if (!S.nb || S.nb.day !== today()) S.nb = { day: today(), help: {}, done: {}, gift: {} };
  return S.nb;
}

function rng(seed) { let s = seed * 7919 + 17; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
function layout(N) {
  const R = rng(N.seed), t = now(), objs = [];
  let id = 1;
  const push = o => objs.push({ id: 'n' + (id++), r: 0, ...o });
  push({ k: 'house', t: 'house', x: 11, z: 4 });
  push({ k: 'barn', t: 'barn', x: 15, z: 5 });
  const crops = Object.keys(CROPS).filter(k => CROPS[k].lv <= N.lv);
  for (let i = 0; i < 9; i++) {
    const c = crops[Math.floor(R() * crops.length)], dur = CROPS[c].t * 1000;
    const e = t + dur * (0.3 + R() * 0.7) * 20; push({ k: 'field', t: 'field', x: 7 + (i % 3), z: 8 + Math.floor(i / 3), crop: c, s: e - dur * 20 * (1 + R()), e });
  }
  push({ k: 'pen', t: 'coop', x: 12, z: 8, animals: [0, 1, 2].map(() => ({ s: t, e: t + 9e8 })) });
  push({ k: 'pen', t: N.lv >= 7 ? 'beehive' : 'cowpen', x: 16, z: 8, animals: [0, 1].map(() => ({ s: t, e: t + 9e8 })) });
  push({ k: 'fac', t: 'feedmill', x: 11, z: 13, jobs: [{ r: 0, s: t, e: t + 9e8 }] });
  push({ k: 'fac', t: N.lv >= 9 ? 'sweets' : 'bakery', x: 14, z: 13, jobs: [] });
  [['palm', 7, 13], ['apple', 8, 14], ['orange', 6, 15], ['banana', 18, 13]].forEach(([tr, x, z]) => push({ k: 'tree', t: tr, x, z, s: t - 1e5, e: t + (R() < 0.5 ? -1 : 9e8) }));
  const decos = ['flower_red', 'flower_yel', 'flower_pur', 'bush', 'palmdeco', 'lantern', 'bench', 'barrel', 'mushroomdeco', 'hedge', 'campfire', 'dog', 'cat'];
  for (let i = 0; i < 16; i++) {
    const x = 4 + Math.floor(R() * 18), z = 3 + Math.floor(R() * 16);
    if (objs.some(o => x >= o.x - 1 && x <= o.x + 3 && z >= o.z - 1 && z <= o.z + 3)) continue;
    push({ k: 'decor', t: decos[Math.floor(R() * decos.length)], x, z });
  }
  return objs;
}

// ---------- Cảnh ----------
let cur = null, saved = null, hooks = {};
const footW = o => ({ house: [3, 3], pen: [3, 3], fac: [2, 2], barn: [2, 2] }[o.k] || [1, 1]);

export function visitNeighbor(nid, h) {
  hooks = h;
  const N = NEIGHBORS.find(n => n.id === nid), objs = layout(N);
  closeModal();
  const g = new THREE.Group(), views = [], pick = [];
  g.add(slab(CORE + 4.4, 3, 0.8, W.sandMat, -0.12));
  g.add(slab(CORE + 0.4, 1.6, 0.5, W.ground.material, 0));
  objs.forEach(o => {
    const v = createView(o); v.refresh?.(now());
    const [w, d] = footW(o);
    v.root.position.copy(cellToWorld(o.x, o.z, w, d));
    v.root.userData.oid = o.id;
    g.add(v.root); pick.push(v.root); views.push([o, v]);
  });
  // chủ nhà đứng trước cửa
  const p = PEOPLE.find(x => x.id === nid);
  const host = bodyOf(nid, p.model, { h: 1.15 }); if (!host.userData.isArt) { dressUp(host, nid); host.rotation.y = 0.7; }
  host.position.copy(cellToWorld(12, 7)); host.userData.oid = 'host';
  g.add(host); pick.push(host);
  // hộp quà mỗi ngày
  const gift = artOrModel('pirate/chest', { size: 0.6 }); gift.position.copy(cellToWorld(10, 6)); gift.userData.oid = 'gift';
  if (!day().gift[nid]) { g.add(gift); pick.push(gift); }
  saved = { target: W.target.clone(), zoom: W.zoom };
  W.farm.visible = false; W.scene.add(g);
  W.adv = g; W.advPick = pick; W.mode = 'nb';
  cur = { N, objs, views, g, host, gift };
  focusOn(cellToWorld(12, 10));
  document.body.classList.add('in-adv');
  drawHud();
  sfx('ship');
  toast(`Chào mừng tới ${N.farm}!`);
}
export function leaveNeighbor() {
  if (W.mode !== 'nb') return;
  W.scene.remove(cur.g); W.adv = null; cur = null;
  W.farm.visible = true; W.mode = 'farm'; W.zoom = saved.zoom; W.target.copy(saved.target); updateCamera();
  document.body.classList.remove('in-adv'); $('#advHud').hidden = true;
  save(); renderHUD();
}

function helpsLeft() { return HELPS - (day().help[cur.N.id] || 0); }
function drawHud() {
  const p = PEOPLE.find(x => x.id === cur.N.id);
  const h = $('#advHud'); h.hidden = false;
  h.innerHTML = `<div class="advtitle"><b>${esc(cur.N.farm)}</b><span>${esc(p.n)} · cấp ${cur.N.lv} · Giúp đỡ còn ${helpsLeft()}/${HELPS} lượt</span></div>
    <button class="rbtn home" id="nbHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>`;
  $('#nbHome').onclick = () => { sfx('tap'); leaveNeighbor(); };
}

export function nbTap(sx, sy) {
  if (!cur) return;
  const oid = pickAt(sx, sy); if (!oid) return;
  const nb = day(), nid = cur.N.id;
  if (oid === 'host') { play(cur.host, 'emote-yes'); sfx('collect'); toast(`${PEOPLE.find(x => x.id === nid).n}: Cảm ơn cháu đã ghé chơi!`); return; }
  if (oid === 'gift') {
    nb.gift[nid] = true; cur.g.remove(cur.gift);
    const c = 10 + rnd(20); S.coins += c; flyCoins(sx, sy, c);
    if (Math.random() < 0.3) { S.gems += 1; flyGems(sx, sy); }
    sfx('collect'); save(); renderHUD(); return;
  }
  const entry = cur.views.find(([o]) => o.id === oid); if (!entry) return;
  const [o, v] = entry;
  const done = (nb.done[nid] ||= []);
  const helpable = o.k === 'field' || o.k === 'pen' || o.k === 'tree' || o.k === 'fac';
  if (!helpable) { v.root.userData.bumpT = performance.now(); return; }
  if (done.includes(o.id)) { toast('Chỗ này bạn giúp rồi!'); return; }
  if (helpsLeft() <= 0) { toast('Hôm nay đã giúp đủ 5 lượt rồi. Mai quay lại nhé!'); sfx('no'); return; }
  nb.help[nid] = (nb.help[nid] || 0) + 1; done.push(o.id);
  const what = o.k === 'field' ? 'Tưới nước' : o.k === 'pen' ? 'Cho thú ăn' : o.k === 'tree' ? 'Bắt sâu' : 'Lau máy';
  plus(sx, sy - 40, what + '!');
  const c = 3 + rnd(5); S.coins += c; flyCoins(sx, sy, c); addXP(1); flyXP(sx, sy);
  if (Math.random() < 0.12) { S.gems += 1; flyGems(sx, sy); }
  if (Math.random() < 0.25 && barnRoom() > 0) { const ks = Object.keys(CROPS).filter(k => CROPS[k].lv <= S.level), k = ks[rnd(ks.length)]; add(k, 1); flyItem(sx, sy, k, 1); }
  emit('act', 'help');
  sparkle(v.root.position);
  sfx('harvest'); drawHud(); save(); renderHUD();
  if (helpsLeft() === 0) setTimeout(() => toast(`Đã giúp đủ! ${PEOPLE.find(x => x.id === nid).n} rất vui đó.`), 800);
}

function sparkle(pos) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), new THREE.MeshBasicMaterial({ color: 0x8be6ff, transparent: true, opacity: 0.6, depthWrite: false }));
  m.position.copy(pos); m.position.y = 0.4; cur.g.add(m);
  const t0 = performance.now(), g = cur.g;
  const f = () => { const k = (performance.now() - t0) / 600; if (k >= 1) { g.remove(m); return; } m.scale.setScalar(1 + k * 1.5); m.material.opacity = 0.6 * (1 - k); requestAnimationFrame(f); };
  f();
}

export function nbUpdate(t, dt) {
  if (!cur) return;
  for (const [, v] of cur.views) v.update?.(t, dt);
  cur.host.userData.mixer?.update(dt);
  if (cur.host.userData.isArt) animateArt(cur.host, t, 'idle');
  else if (!cur.host.userData.cur) play(cur.host, 'idle');
}

export function openNeighbors(h) {
  const nb = day();
  const cards = NEIGHBORS.map(N => {
    const p = PEOPLE.find(x => x.id === N.id), left = HELPS - (nb.help[N.id] || 0);
    return `<div class="card"><img src="${ICONS['face:' + N.id]}" alt="" style="border-radius:50%;background:var(--cream-d)"><b>${esc(N.farm)}</b>
      <small>${esc(p.n)} · cấp ${N.lv}</small><small>${left ? `Còn ${left} lượt giúp` : 'Đã giúp hôm nay ✓'}${nb.gift[N.id] ? '' : ' · có quà 🎁'}</small>
      <button class="btn small blue" data-nb="${N.id}">Ghé thăm</button></div>`;
  }).join('');
  openModal('neighbors', 'Hàng xóm', `<p class="hint">Ghé thăm hàng xóm, giúp tưới cây và cho thú ăn 5 lượt mỗi ngày để nhận xu, sao và quà.</p><div class="grid">${cards}</div>`);
  document.querySelectorAll('[data-nb]').forEach(b => b.onclick = () => visitNeighbor(b.dataset.nb, h));
}

// Hàng xóm sang tưới giúp ruộng của bé mỗi ngày một lần
export function neighborsHelpYou() {
  if (S.level < 2 || S.nbHelped === today()) return;
  S.nbHelped = today();
  const t = now(), growing = S.objs.filter(o => o.k === 'field' && o.crop && o.e > t);
  if (!growing.length) return;
  const who = NEIGHBORS[rnd(NEIGHBORS.length)], n = Math.min(3, growing.length);
  growing.slice(0, n).forEach(o => { o.e = t; });
  setTimeout(() => toast(`${PEOPLE.find(x => x.id === who.id).n} đã sang tưới giúp ${n} ô ruộng của bạn!`), 2500);
}
