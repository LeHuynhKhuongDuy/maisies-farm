import * as THREE from 'three';
import { ADVENTURES, CHART_ART, ITEMS, CROPS, DECOR, talkerName } from './data.js';
import { buildMap } from './advmap.js';
import { isleState, isleReplayReset, isleQuest, isleEvent, isleClaim, isleFinish, nextHint, lootMat, mainOf, touchable, fogged, ruinNeed, ruinGive, ruinAdvance, chartLocked } from './isles.js';
import { S, rnd, add, have, barnRoom, addXP, save, questEvent, emit } from './state.js';
import { W, pickAt, groundAt, toScreen, focusOn, flyCamTo, updateCamera, slab, roundedRect } from './world.js';
import { make, play, ICONS } from './assets.js';
import { dressUp, bodyOf, faceDir, artOrModel, art, cloudTexture } from './entities.js';
import { hasSprite, spriteUrl, animateArt } from './sprites.js';
import { talk, talkLater } from './talk.js';
import { sfx } from './sound.js';
import { $, img, coinI, gemI, boltI, xpI, esc, toast, plus, flyTo, flyCoins, flyGems, flyXP, flyItem, gainLine, confetti, openModal, setModalBody, closeModal, renderHUD, M } from './ui.js';

// ---------- Trạng thái ----------
const progress = isleState; // đảo cũ: { open, chests, done, runs }; đảo truyện thêm q, qp, ruin, prize
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
  cur = { A, map, p, group: g, views: new Map(), rings: [], pick: [], fogSp: new Map(), fades: [], fog: new Set(), hint: null };
  if (A.story) { // công trình 2×2: các ô thuộc cùng một khối (để ẩn/hiện theo sương)
    const rm = map.cells.findIndex(c => c.k === 'ruin');
    cur.ruinMain = rm; cur.ruinCells = map.cells.map((c, j) => ((c.k === 'ruin' || c.k === 'ruinpart') && mainOf(map, j) === rm ? j : -1)).filter(j => j >= 0);
  }
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
    if (c.k === 'ruinpart') return; // cả khối công trình là một vật, vẽ ở ô chính
    let v;
    if (c.k === 'npc') v = npcView(A.story.who);
    else if (c.k === 'ruin') v = ruinView(A, c, !ruinNeed(A, p));
    else if (c.k === 'ob') { const [model, fit] = T.obstacles[c.t]; v = artOrModel(model, fit); if (!v.userData.plane) v.rotation.y = c.rot; }
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
    if (c.k === 'ruin') v.position.add(new THREE.Vector3((c.span - 1) / 2, 0, (c.span - 1) / 2));
    v.userData.oid = 'a:' + i;
    g.add(v); cur.pick.push(v); cur.views.set(i, v);
    if (c.k === 'npc') { v.userData.mark = markSprite(v); return; } // người dân luôn sáng, không có vòng vàng
    const ring = new THREE.Mesh(ringGeo, ringMat); ring.rotation.x = -Math.PI / 2; ring.position.copy(v.position); ring.position.y = 0.04; ring.visible = false; ring.renderOrder = 5;
    if (c.k === 'ruin') ring.userData.big = c.span;
    g.add(ring); cur.rings.push([i, ring]);
  });
  // Maisie đi phiêu lưu
  const maisie = bodyOf('maisie', 'chars/character-female-a', { h: 1.15 }); if (!maisie.userData.isArt) dressUp(maisie, 'maisie');
  maisie.position.copy(cellPos(map, map.cx, A.h - 1));
  maisie.userData.goal = maisie.position.clone(); maisie.userData.oid = 'a:maisie';
  if (!maisie.userData.isArt) maisie.rotation.y = Math.PI;
  g.add(maisie); cur.maisie = maisie;
  if (A.story) { // thú dẫn đường đi theo Maisie
    const gv = bodyOf(A.story.guide, 'pets/animal-dog', { h: 0.5 });
    gv.position.copy(maisie.position).add(new THREE.Vector3(-0.85, 0, 0.3)); gv.userData.oid = 'a:guide';
    gv.userData.mark = markSprite(gv);
    g.add(gv); cur.pick.push(gv); cur.guide = gv;
    updateFog(true);
  }
  updateRings();
  return g;
}

// ---------- Đảo truyện: hình vẽ ----------
// Người dân: dùng hình riêng nếu đã có, chưa có thì mượn hình nhân vật sẵn có và nhuộm màu khác
const PLACEHOLDER = { nina: ['lily', 0xffb09a], otto: ['tom', 0x9cc4ee], mia: ['maisie', 0xd9b0ff] };
function npcView(who) {
  let v = hasSprite(who) ? art(who, 0.5, 0.5) : null;
  if (!v) {
    const [sp, col] = PLACEHOLDER[who] || ['maisie', 0xffffff];
    v = art(sp, 0.5, 0.5);
    if (v) v.userData.plane.material.color.set(col);
  }
  v ||= bodyOf(null, 'chars/character-female-a', { h: 1.1 });
  v.userData.isArt = !!v.userData.plane; v.userData.npc = true;
  return v;
}
// Công trình hỏng (hoặc đã sửa xong) vẽ cả khối 2×2
function ruinView(A, c, fixed) {
  const R = A.story.ruin, v = artOrModel('art:' + (fixed ? R.fixed : R.sprite), { size: 1.8 }, c.span, c.span);
  return v;
}
// Công trình vừa sửa xong: thay hình hỏng bằng hình mới ở đúng chỗ cũ
function swapRuin() {
  const { A, map } = cur, i = cur.ruinMain, old = cur.views.get(i);
  const v = ruinView(A, map.cells[i], true);
  v.position.copy(old.position); v.userData.oid = old.userData.oid;
  cur.group.add(v); cur.group.remove(old);
  cur.pick.splice(cur.pick.indexOf(old), 1, v); cur.views.set(i, v);
  hop(v); updateRings(); updateFog();
}
// Bong bóng "!" nhỏ trên đầu người dân / thú dẫn đường
let markMat = null;
function markSprite(v) {
  if (!markMat) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const x = cv.getContext('2d');
    x.fillStyle = '#fff'; x.beginPath(); x.arc(32, 32, 28, 0, 7); x.fill();
    x.fillStyle = '#ff7a2f'; x.beginPath(); x.arc(32, 32, 23, 0, 7); x.fill();
    x.fillStyle = '#fff'; x.font = '900 38px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('!', 32, 35);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    markMat = new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true });
  }
  const s = new THREE.Sprite(markMat), top = new THREE.Box3().setFromObject(v).max.y;
  s.scale.set(0.4, 0.4, 1); s.renderOrder = 6; s.visible = false; s.raycast = () => {};
  s.userData.y0 = Math.max(0.5, top) + 0.25; s.position.y = s.userData.y0;
  v.add(s); return s;
}

// ---------- Đảo truyện: sương ----------
let fogMat = null;
const fogMaterial = () => (fogMat ||= new THREE.SpriteMaterial({ map: cloudTexture(), transparent: true, depthWrite: false, opacity: 0.96, fog: false }));
function addFog(i) {
  const c = cur.map.cells[i], p = cellPos(cur.map, c.x, c.z), s = new THREE.Sprite(fogMaterial());
  s.position.set(p.x, 0.5 + ((c.x * 7 + c.z * 13) % 5) * 0.06, p.z); s.scale.set(2.7, 2.2, 1); s.renderOrder = -1; s.raycast = () => {}; // renderOrder âm: vẽ trước mọi hình 2D, vật chưa bị sương che luôn nằm trên mây
  cur.group.add(s); cur.fogSp.set(i, s);
}
function dropFog(i, instant) {
  const s = cur.fogSp.get(i); cur.fogSp.delete(i);
  if (instant) { cur.group.remove(s); return; }
  s.material = s.material.clone(); cur.fades.push({ s, t0: performance.now() }); // tấm mây tan dần
}
// Tính lại sương sau mỗi lần dọn: ô vừa lộ ra thì mây mờ dần, vật trên ô sương thì ẩn
function updateFog(first) {
  if (!cur?.A.story) return;
  const { map, p } = cur, f = fogged(map, p);
  cur.fog = f;
  for (const i of f) if (!cur.fogSp.has(i)) addFog(i);
  for (const i of [...cur.fogSp.keys()]) if (!f.has(i)) dropFog(i, first);
  for (const [i, v] of cur.views) {
    const c = map.cells[i];
    if (v.userData.vanishing || isOpen(c)) continue;
    v.visible = !(c.k === 'ruin' ? cur.ruinCells : [i]).every(j => f.has(j));
  }
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
    const r = v && v.visible && (c.k === 'ruin' ? touchable(cur.map, cur.p, i) : reachable(c));
    ring.visible = !!r;
    if (v) { setDim(v, !r && c.k !== 'goal'); v.userData.reach = !!r; }
  }
  // nền: chỗ đã đi qua và kề bên thì sáng, còn lại tối như sương
  for (const [i, t] of cur.tiles) {
    const c = cur.map.cells[i], lit = isOpen(c) || reachable(c) || c.k === 'goal' || c.k === 'npc' || ((c.k === 'ruin' || c.k === 'ruinpart') && touchable(cur.map, cur.p, i));
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
  isleReplayReset(A); // đảo đã xong: vật cản và rương mọc lại
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
  refreshStory();
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
    <button class="rbtn home" id="advHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>${A.story ? questCard() : ''}`;
  $('#advHome').onclick = () => { sfx('tap'); leaveAdventure(); };
  const cl = $('#advClaim'); if (cl) cl.onclick = e => claimIsle(e.currentTarget);
}
const faceOf = who => (ICONS['face:' + who] ? `<img src="${ICONS['face:' + who]}" alt="">` : '');
const barHtml = (got, n) => `<div class="iqbar"><i style="width:${Math.round(got / n * 100)}%"></i><span>${got}/${n}</span></div>`;
// Thẻ nhiệm vụ đảo ở đáy màn hình: chân dung, lời nhiệm vụ, thanh tiến độ, nút nhận thưởng
function questCard() {
  const { A } = cur, q = isleQuest(A);
  if (!q) return `<div class="isleq ok">${faceOf(A.story.who)}<div class="iq"><b>Xong hết việc ở đây rồi!</b></div></div>`;
  const done = q.got >= q.req.n;
  return `<div class="isleq ${done ? 'ok' : ''}">${faceOf(q.who)}<div class="iq"><b>${esc(q.text)}</b>${barHtml(q.got, q.req.n)}
    ${done ? '<button class="btn small orange" id="advClaim">Nhận thưởng!</button>' : ''}</div></div>`;
}
// Sau mỗi việc làm: tính lại sương, gợi ý, dấu "!" và thẻ nhiệm vụ
const seenTalk = new Set(); // lời thoại bước nào đã nghe trong lần mở game này
function refreshStory() {
  if (!cur?.A.story) return;
  const { A, p } = cur, q = isleQuest(A);
  cur.hint = nextHint(cur.map, p);
  updateFog(); updateRings();
  if (cur.guide) cur.guide.userData.mark.visible = cur.hint != null;
  const npc = cur.views.get(cur.map.cells.findIndex(c => c.k === 'npc'));
  if (npc) npc.userData.mark.visible = !!q && (q.got >= q.req.n || !seenTalk.has(A.id + ':' + q.i));
  if ($('#advHud') && !$('#advHud').hidden) drawAdvHud();
}
function claimIsle(btn) {
  const { A } = cur, step = isleClaim(A);
  if (!step) return;
  const r = btn?.getBoundingClientRect(), x = r ? r.left + r.width / 2 : innerWidth / 2, y = r ? r.top : innerHeight / 2;
  if (M?.type === 'isleq') closeModal();
  confetti(24); sfx('level');
  if (step.coins) flyCoins(x, y, step.coins);
  if (step.gems) flyGems(x, y);
  flyXP(x, y); toast('Giỏi quá! Xong một việc rồi!');
  renderHUD(); refreshStory(); save();
  if (step.outro) talkLater(step.outro);
}
// Bảng nhiệm vụ đảo: người dân nói gì, làm tới đâu, nhận thưởng
function openIsleQuest() {
  if (!cur) return;
  const { A } = cur, q = isleQuest(A), who = q?.who || A.story.who;
  let body;
  if (!q) body = '<p class="hint">Cảm ơn bé nhiều! Mình đã làm xong hết các việc ở đây.</p>';
  else {
    const done = q.got >= q.req.n;
    body = `<p class="hint iqtext">${esc(q.text)}</p>${barHtml(q.got, q.req.n)}
      <div class="reward" style="font-size:20px">${q.coins ? `<span>${coinI}+${q.coins}</span>` : ''}${q.xp ? `<span>${xpI}+${q.xp}</span>` : ''}</div>
      ${done ? '<button class="btn wide orange" id="iqClaim">Nhận thưởng!</button>' : '<p class="hint">Chạm vào bạn thú dẫn đường để biết đi đâu nhé!</p>'}`;
  }
  openModal('isleq', talkerName(who), `<div class="isleqp">${faceOf(who)}<div>${body}</div></div>`);
  const b = $('#iqClaim'); if (b) b.onclick = e => claimIsle(e.currentTarget);
}
// Bảng góp vật liệu sửa công trình (cùng mẫu với công trường ở đảo nhà)
function ruinHtml() {
  const { A, p } = cur, R = A.story.ruin, need = ruinNeed(A, p), n = R.stages.length;
  const url = spriteUrl(R.sprite), pic = url ? `<img class="sitepic" style="object-fit:contain" src="${url}" alt="">` : '';
  if (!need) return `<div class="sitehead">${pic}</div><p class="hint">${esc(R.n)} đã sửa xong rồi!</p>`;
  const rows = Object.entries(need).map(([k, r]) => {
    const done = r.got >= r.need, h = have(k), name = ITEMS[k].n;
    return `<div class="mat ${done ? 'ok' : 'lack'}">${img(k)}<b>${esc(name)}</b><span class="q">${r.got}/${r.need}</span>
      ${done ? '<span class="t">✓ Đủ rồi</span>' : `<button class="btn small ${h ? '' : 'gray'}" data-give="${k}">Góp</button>
      <small>${h ? `Đang có ${h}` : `Dọn vật cản trên đảo để có ${esc(name.toLowerCase())}`}</small>`}</div>`;
  }).join('');
  return `<div class="sitehead">${pic}<span class="stage">Giai đoạn ${p.ruin.stage + 1}/${n}</span></div>
    <p class="hint">Góp đủ vật liệu để sửa ${esc(lc(R.n))} nhé!</p><div class="mats">${rows}</div>`;
}
const lc = t => t[0].toLowerCase() + t.slice(1);
function bindRuin() {
  document.querySelectorAll('#mBody [data-give]').forEach(b => b.onclick = () => {
    const r = b.getBoundingClientRect(); giveRuin(b.dataset.give, r.left + r.width / 2, r.top);
  });
}
function openRuin() {
  openModal('isleruin', cur.A.story.ruin.n, ruinHtml());
  bindRuin();
}
function giveRuin(k, x, y) {
  if (!cur || M?.type !== 'isleruin') return;
  const { A, p } = cur, R = A.story.ruin, stage = p.ruin.stage, n = ruinGive(A, p, k);
  if (!n) { toast(`Chưa có ${ITEMS[k].n.toLowerCase()}. Dọn vật cản trên đảo để nhặt nhé!`); sfx('no'); return; }
  const v = cur.views.get(cur.ruinMain); if (v) bump(v);
  const r = ruinAdvance(A, p);
  renderHUD(); save();
  if (r === 'done') { closeModal(); confetti(); sfx('level'); toast(`${R.n} đã sửa xong!`); swapRuin(); refreshStory(); return; }
  if (r === 'stage') { confetti(18); flyXP(x, y); sfx('build'); toast(`Xong giai đoạn ${stage + 1}! Cố lên nào`); }
  else { plus(x, y - 24, '+' + n); sfx('tap'); }
  setModalBody(ruinHtml()); bindRuin(); refreshStory();
}
// Chạm người dân: nghe lời của bước hiện tại (một lần), rồi mở bảng nhiệm vụ
function tapNpc(c) {
  const { A } = cur, q = isleQuest(A);
  walkTo([c]); sfx('tap');
  if (q && q.got < q.req.n && !seenTalk.has(A.id + ':' + q.i)) {
    seenTalk.add(A.id + ':' + q.i); refreshStory();
    talk(q.talk, () => openIsleQuest());
  } else openIsleQuest();
}
// Chạm thú dẫn đường: camera bay tới ô gợi ý, ô đó nảy lên
function tapGuide() {
  sfx('collect'); cur.guide.userData.happy = performance.now() + 1000;
  const i = cur.hint, v = i != null && cur.views.get(i);
  if (!v) { toast('Bé làm xong hết rồi! Mình về nhà thôi.'); return; }
  flyCamTo(v.position); hop(v);
}
// Chạm vào sương (hoặc vật đang ẩn dưới sương)
function fogTap(sx, sy) {
  if (!cur.fog.size) return false;
  const g = groundAt(sx, sy); if (!g) return false;
  const { A } = cur, away = new THREE.Vector3(-Math.SQRT1_2, 0, -Math.SQRT1_2); // mây lơ lửng nên nhìn lệch ra sau một ô
  for (const q of [g, g.clone().add(away)]) {
    const x = Math.floor(q.x + A.w / 2), z = Math.floor(q.z + A.h / 2);
    if (x >= 0 && z >= 0 && x < A.w && z < A.h && cur.fog.has(cur.map.idx(x, z))) { toast('Dọn đường tới gần để sương tan nhé!'); sfx('no'); return true; }
  }
  return false;
}
// Thú dẫn đường đứng lệch về phía trước-trái Maisie (gần camera, không bị che); ô đó không trống thì đứng sát bên
function guideSpot() {
  const { map, maisie } = cur;
  for (const off of [[-0.55, 0.45], [-0.3, 0.3], [0, 0]]) {
    const t = maisie.position.clone().add(new THREE.Vector3(off[0], 0, off[1]));
    const x = Math.floor(t.x + map.A.w / 2), z = Math.floor(t.z + map.A.h / 2);
    if (x >= 0 && z >= 0 && x < map.A.w && z < map.A.h && isOpen(map.cells[map.idx(x, z)])) return t;
  }
  return maisie.position.clone();
}
function hop(v) { v.userData.hopT = performance.now(); }

// ---------- Chạm trên đảo ----------
export function advTap(sx, sy) {
  if (!cur) return;
  const oid = pickAt(sx, sy, cur.A.story ? preferOid : undefined);
  if (oid === 'a:boat') { leaveAdventure(); return; }
  if (oid === 'a:maisie') { play(cur.maisie, 'emote-yes'); cur.maisie.userData.busy = 1; sfx('collect'); return; }
  if (oid === 'a:guide') { tapGuide(); return; }
  if (typeof oid !== 'string' || !oid.startsWith('a:')) { if (cur.A.story) fogTap(sx, sy); return; }
  const i = cur.A.story ? mainOf(cur.map, +oid.slice(2)) : +oid.slice(2), c = cur.map.cells[i], v = cur.views.get(i);
  if (!v || !v.visible) { if (cur.A.story) fogTap(sx, sy); return; }
  if (v.userData.vanishing || (c.k === 'chest' && cur.p.chests.includes(i)) || (c.k === 'ob' && cur.p.open.includes(i))) return; // đang tan: chạm thêm không tính lần nữa
  if (c.k === 'npc') { tapNpc(c); return; }
  if (c.k === 'ruin') {
    if (!touchable(cur.map, cur.p, i)) { toast('Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng.'); sfx('no'); bump(v); return; }
    walkTo(cur.ruinCells.map(j => cur.map.cells[j])); sfx('tap');
    if (ruinNeed(cur.A, cur.p)) openRuin(); else { toast(`${cur.A.story.ruin.n} đã sửa xong rồi!`); hop(v); }
    return;
  }
  if (!reachable(c)) { toast('Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng.'); sfx('no'); bump(v); return; }
  if (c.k === 'ob') {
    if (S.energy < c.e) { hooks.openEnergy?.(); return; }
    S.energy -= c.e;
    plus(sx, sy - 30, `-${c.e}⚡`);
    walkTo([c]);
    sfx('chop');
    const here = cur;
    vanish(v, () => {
      here.p.open.push(i);
      giveLoot(c.loot, sx, sy);
      if (here.A.story) { giveMat(here.map, c, sx, sy); isleEvent(here.A, 'aclear'); }
      addXP(1);
      if (cur === here) { updateRings(); refreshStory(); }
      renderHUD(); save();
    });
    questEvent('clear');
  } else if (c.k === 'chest') {
    walkTo([c]);
    const mixer = v.userData.mixer; if (mixer) { play(v, 'open'); }
    sfx('collect');
    cur.p.chests.push(i);
    emit('act', 'chest');
    if (cur.A.story) { isleEvent(cur.A, 'achest'); refreshStory(); }
    const coins = 20 + rnd(30), roll = Math.random();
    S.coins += coins; flyCoins(sx, sy, coins);
    if (roll < 0.4) { S.gems += 1 + rnd(2); flyGems(sx, sy); }
    else if (roll < 0.7) { S.energy += 5; plus(sx, sy - 60, '+5⚡'); }
    setTimeout(() => vanish(v, () => { updateRings(); }), 900);
    drawAdvHud(); renderHUD(); save();
  } else if (c.k === 'goal') {
    const { A, p } = cur;
    if (A.story) { // đảo truyện: sửa xong công trình và tới đúng bước "tới đích" mới được chạm đích
      const q = isleQuest(A), R = A.story.ruin;
      if (ruinNeed(A, p)) { toast(`Sửa xong ${lc(R.n)} trước nhé!`); sfx('no'); bump(v); return; }
      if (q && q.req.ev !== 'agoal') { toast(`Làm xong việc của ${lc(talkerName(q.who))} trước nhé!`); sfx('no'); bump(v); return; }
      isleEvent(A, 'agoal');
    }
    walkTo([c]);
    finish(v, sx, sy);
  }
}

// Chọn vật để chạm: vật GẦN nhất mà chạm được thì thắng; vật chạm không được (tối, đang tan, công trình đã sửa xong,
// vật dưới sương) bị bỏ qua để tia chạm xuyên tới vật chạm được ở phía sau (công trình cao che ô sau lưng nó)
function preferOid(id) {
  if (typeof id !== 'string' || !id.startsWith('a:')) return false;
  if (isNaN(+id.slice(2))) return true; // thuyền, Maisie, thú dẫn đường
  const i = +id.slice(2), c = cur.map.cells[i], v = cur.views.get(i);
  if (!v || !v.visible || v.userData.vanishing) return false;
  if (c.k === 'ruin') return !!ruinNeed(cur.A, cur.p) && touchable(cur.map, cur.p, i);
  if (c.k === 'chest' && cur.p.chests.includes(i)) return false;
  return c.k === 'npc' || !!v.userData.reach;
}

// Vật liệu rơi khi dọn vật cản đảo truyện: vào thẳng Kho nhà, biểu tượng bay về nút Về nhà
function giveMat(map, c, sx, sy) {
  const drops = lootMat(c, map.T);
  for (const [k, n] of Object.entries(drops)) {
    add(k, n);
    for (let j = 0; j < Math.min(n, 4); j++) flyTo(sx + j * 8, sy, '#advHome', img(k), j * 90);
  }
  gainLine(drops);
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
  if (A.story) { // đảo truyện: quà mang về nông trại trao một lần, tắt sương
    const r = isleFinish(A);
    if (r.prize) petNote = `<p class="hint">${esc(DECOR[r.prize].n)} sẽ về sống ở nông trại của bạn!</p>`;
    refreshStory();
  } else if (A.goal.pet && p.runs === 0) {
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
    if (A.story && cur?.A === A) claimIsle(null); // bước cuối đã đủ: nhận thưởng luôn, kể cả lời kết (không có gì để nhận thì bỏ qua)
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
function walkTo(cs) {
  // đứng ở ô trống kề bên vật (cs: các ô của vật; công trình 2×2 có bốn ô)
  const { map } = cur;
  let best = null, bd = 1e9;
  for (const c of cs) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const x = c.x + dx, z = c.z + dz;
    if (x < 0 || z < 0 || x >= map.A.w || z >= map.A.h) continue;
    const n = map.cells[map.idx(x, z)];
    if (n.k === 'water' || !isOpen(n)) continue;
    const p = cellPos(map, x, z), d = p.distanceTo(cur.maisie.position);
    if (d < bd) { bd = d; best = p; }
  }
  if (best) {
    const mid = cs.reduce((a, c) => a.add(cellPos(map, c.x, c.z)), new THREE.Vector3()).divideScalar(cs.length);
    cur.maisie.userData.goal.copy(best); cur.maisie.userData.face = mid;
  }
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
  const now = performance.now();
  for (const v of cur.views.values()) {
    if (v.userData.npc && v.userData.plane) animateArt(v, t, 'idle', 0.7);
    const h = v.userData.hopT; // ô được chỉ: nảy lên vài lần
    if (h) { const k = (now - h) / 1400; if (k < 1) v.position.y = Math.abs(Math.sin(k * Math.PI * 3)) * 0.4 * (1 - k); else { v.userData.hopT = 0; v.position.y = 0; } }
    const mk = v.userData.mark; if (mk) mk.position.y = mk.userData.y0 + Math.sin(t * 5) * 0.05;
  }
  const gv = cur.guide;
  if (gv) {
    const to = guideSpot().sub(gv.position); to.y = 0;
    const L = to.length();
    if (L > 0.1) { to.setLength(Math.min(L, dt * (L > 1.6 ? 3.4 : 2.2))); gv.position.add(to); faceDir(gv, to.x, to.z); animateArt(gv, t, 'walk', 1.3); }
    else animateArt(gv, t, gv.userData.happy > now ? 'happy' : 'idle', 1.3);
    const mk = gv.userData.mark; mk.position.y = mk.userData.y0 + Math.sin(t * 5) * 0.05;
  }
  for (let j = cur.fades.length - 1; j >= 0; j--) { // mây vừa tan: mờ dần rồi bay lên
    const f = cur.fades[j], k = (now - f.t0) / 800;
    if (k >= 1) { cur.group.remove(f.s); f.s.material.dispose(); cur.fades.splice(j, 1); }
    else { f.s.material.opacity = 0.96 * (1 - k); f.s.position.y += dt * 0.5; }
  }
  const pulse = 0.9 + Math.sin(t * 4) * 0.1;
  for (const [i, r] of cur.rings) if (r.visible) {
    r.scale.setScalar(pulse * (r.userData.big || 1));
    const v = cur.views.get(i);
    if (v && !v.userData.vanishing) { const k = 1 + Math.max(0, Math.sin(t * 4 + i)) * 0.06; v.scale.set(k, 2 - k, k); }
  }
  cur.boat.position.y = -0.45 + Math.sin(t * 1.5) * 0.04;
}

// ---------- Hải đồ ----------
const chartIcon = A => (A.story ? ICONS['face:' + A.story.who] : ICONS[A.goal.pet ? 'decor:' + A.goal.pet : 'decor:chest']);
const chartBtn = (A, p, pct) => (p.done ? 'Chơi lại' : pct ? 'Đi tiếp' : 'Ra khơi');
export function openAdventures(h) {
  const nodes = ADVENTURES.map(A => {
    const lock = chartLocked(A), p = progress(A), pct = advPercent(A), done = !lock && p.done;
    return `<button class="cnode ${lock ? 'lock' : ''} ${done ? 'done' : ''}" data-adv="${A.id}" style="left:${A.chart.x}%;top:${A.chart.y}%" aria-label="${esc(A.n)}">
      <span class="cdisc"><img src="${chartIcon(A)}" alt="">${lock ? '<i class="clk">🔒</i>' : done ? '<i class="cok">✓</i>' : ''}</span>
      <b>${esc(A.n)}</b>${lock ? `<small>${esc(lock)}</small>` : `<span class="cbar"><i style="width:${done ? 100 : pct}%"></i></span>`}</button>`;
  }).join('');
  const art = CHART_ART ? ` style="background-image:url(${import.meta.env.BASE_URL}items/seachart.webp)"` : '';
  openModal('adventures', 'Hải đồ', `<div class="chart ${CHART_ART ? 'art' : ''}"${art}>
    <i class="cwave" style="left:6%;top:6%"></i><i class="cwave" style="left:62%;top:6%"></i><i class="cwave" style="left:30%;top:35%"></i>
    <i class="cwave" style="left:70%;top:35%"></i><i class="cwave" style="left:8%;top:64%"></i><i class="cwave" style="left:86%;top:66%"></i>
    <i class="ccompass"></i>
    <div class="cpier"><span class="ico boat"></span><small>Nhà</small></div>
    ${nodes}<div class="ccard" id="chartCard" hidden></div></div>`);
  const card = $('#chartCard');
  document.querySelectorAll('[data-adv]').forEach(b => b.onclick = () => {
    const A = ADVENTURES.find(a => a.id === b.dataset.adv), lock = chartLocked(A), p = progress(A), pct = advPercent(A);
    sfx(lock ? 'no' : 'tap');
    card.hidden = false; card.classList.toggle('top', A.chart.y > 55); // đảo ở nửa dưới thì thẻ hiện ở trên để khỏi che
    card.innerHTML = lock
      ? `<img src="${chartIcon(A)}" alt=""><div class="cinfo"><b>${esc(A.n)}</b><p>${esc(lock)}</p></div>`
      : `<img src="${chartIcon(A)}" alt=""><div class="cinfo"><b>${esc(A.n)}</b><p>${esc(A.intro)}</p>
         <small>${p.done ? 'Đã hoàn thành ✓' : `Đã khám phá ${pct}%`}</small></div>
         <button class="btn small blue" id="chartGo">${chartBtn(A, p, pct)}</button>`;
    const go = $('#chartGo'); if (go) go.onclick = () => enterAdventure(A.id, h);
  });
}
