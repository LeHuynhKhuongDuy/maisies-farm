import { GRID, CORE, OFF, ITEMS, CROPS, TREES, PENS, FACTORIES, DECOR, JUNGLE_MIX, PEOPLE, QUESTS, STARTER_DECOR,
  xpNeed, ENERGY_MAX, ENERGY_REGEN, BARN_BASE, BARN_STEP } from './data.js';
import { seeded, outerJungle, migrateV1 } from './island.js';

const KEY = 'maisies-farm-v1';
export const now = () => Date.now();
export const rnd = n => Math.floor(Math.random() * n);
export const pick = a => a[rnd(a.length)];

// ---------- Sự kiện ----------
const listeners = {};
export const on = (ev, fn) => (listeners[ev] ||= []).push(fn);
export const emit = (ev, ...a) => (listeners[ev] || []).forEach(fn => fn(...a));

export let S = null;

// ---------- Kích thước chiếm chỗ ----------
export function footprint(o) {
  switch (o.k) {
    case 'field': case 'tree': return [1, 1];
    case 'pen': case 'house': return [3, 3];
    case 'fac': case 'barn': case 'market': return [2, 2];
    case 'board': return [2, 1];
    case 'decor': { const d = DECOR[o.t]; const w = d.w || 1, h = d.d || 1; return o.r % 2 ? [h, w] : [w, h]; }
    case 'obstacle': return [1, 1];
  }
  return [1, 1];
}

export function occupancy(ignoreId) {
  const g = new Map();
  for (const o of S.objs) {
    if (o.id === ignoreId) continue;
    const [w, d] = footprint(o);
    for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) g.set((o.x + i) + ',' + (o.z + j), o.id);
  }
  return g;
}
export function isFree(x, z, w, d, ignoreId) {
  if (x < 0 || z < 0 || x + w > GRID || z + d > GRID) return false;
  const g = occupancy(ignoreId);
  for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) if (g.has((x + i) + ',' + (z + j))) return false;
  return true;
}
export function findFree(w, d, nearX = OFF + CORE / 2, nearZ = OFF + CORE / 2) {
  let best = null, bd = 1e9;
  const g = occupancy();
  for (let x = 0; x <= GRID - w; x++) for (let z = 0; z <= GRID - d; z++) {
    let ok = true;
    for (let i = 0; i < w && ok; i++) for (let j = 0; j < d && ok; j++) if (g.has((x + i) + ',' + (z + j))) ok = false;
    if (!ok) continue;
    const dist = Math.hypot(x - nearX, z - nearZ);
    if (dist < bd) { bd = dist; best = [x, z]; }
  }
  return best;
}

// ---------- Kho ----------
export const have = k => S.inv[k] || 0;
export const barnCap = () => BARN_BASE + S.barnLvl * BARN_STEP;
export const barnUsed = () => Object.entries(S.inv).reduce((a, [k, n]) => a + (ITEMS[k]?.mat ? 0 : n), 0); // vật liệu không chiếm chỗ Kho
export const barnRoom = () => barnCap() - barnUsed();
export function add(k, n) {
  S.inv[k] = (S.inv[k] || 0) + n;
  if (S.inv[k] <= 0) delete S.inv[k];
}
export const hasAll = req => Object.entries(req).every(([k, q]) => have(k) >= q);
export function take(req) { for (const [k, q] of Object.entries(req)) add(k, -q); }

// ---------- Kinh nghiệm & năng lượng ----------
export function addXP(n) {
  S.xp += n;
  while (S.xp >= xpNeed(S.level)) {
    S.xp -= xpNeed(S.level);
    S.level++;
    const bonus = { coins: 20 + S.level * 10, gems: 2 };
    S.coins += bonus.coins; S.gems += bonus.gems;
    S.energy = Math.max(S.energy, ENERGY_MAX);
    emit('levelup', S.level, bonus);
  }
}
export function energyTick() {
  const t = now();
  if (S.energy >= ENERGY_MAX) { S.energyAt = t; return; }
  const gained = Math.floor((t - S.energyAt) / (ENERGY_REGEN * 1000));
  if (gained > 0) {
    S.energy = Math.min(ENERGY_MAX, S.energy + gained);
    S.energyAt += gained * ENERGY_REGEN * 1000;
  }
}
export const energyNextIn = () => S.energy >= ENERGY_MAX ? 0 : S.energyAt + ENERGY_REGEN * 1000 - now();

// ---------- Những gì người chơi làm ra được ----------
export function producible() {
  const L = S.level, set = new Set();
  for (const [k, c] of Object.entries(CROPS)) if (c.lv <= L) set.add(k);
  for (const o of S.objs) {
    if (o.site) continue; // công trường chưa xây xong chưa làm ra gì
    if (o.k === 'tree') set.add(TREES[o.t].yield);
    if (o.k === 'pen' && o.animals.length) set.add(PENS[o.t].prod);
    if (o.k === 'fac') for (const r of FACTORIES[o.t].rec) if (r.lv <= L && !r.out.endsWith('feed')) set.add(r.out);
  }
  return [...set].filter(k => !ITEMS[k].mat); // vật liệu không bao giờ thành món đơn hàng
}

// ---------- Đơn hàng ----------
export function genOrder() {
  const pool = producible();
  const crops = pool.filter(k => CROPS[k]);
  const kinds = 1 + rnd(Math.min(3, 1 + Math.floor(S.level / 2)));
  const items = {};
  for (let g = 0; Object.keys(items).length < kinds && g < 80; g++) {
    const id = Math.random() < 0.45 ? pick(crops) : pick(pool);
    if (items[id]) continue;
    const maxQ = CROPS[id] ? Math.min(6, 2 + Math.floor(S.level / 2)) : 2;
    items[id] = 1 + rnd(maxQ);
  }
  const val = Object.entries(items).reduce((s, [k, q]) => s + ITEMS[k].v * q, 0);
  const who = pick(PEOPLE.slice(1)).id;
  return { who, items, coins: Math.round(val * 1.5) + 5, xp: Math.max(2, Math.round(val / 3)) };
}
export function refreshOrders() {
  const t = now();
  S.orders = S.orders.map(o => (!o || (o.wait && t >= o.wait)) ? genOrder() : o);
}

// ---------- Tàu hàng ----------
export function newShip() {
  const pool = producible();
  const crates = [];
  // ưu tiên mỗi thùng một món khác nhau
  const bag = [...pool].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 6; i++) {
    const item = bag.length ? bag.pop() : pick(pool);
    const n = CROPS[item] ? 2 + rnd(4) : 1 + rnd(2);
    crates.push({ item, n, done: false });
  }
  const val = crates.reduce((s, c) => s + ITEMS[c.item].v * c.n, 0);
  return { st: 'docked', crates, coins: Math.round(val * 0.6), xp: Math.round(val / 4), gems: 1 + rnd(2), leaveAt: now() + 15 * 60000 };
}
export function shipTick() {
  const t = now(), sh = S.ship;
  if (sh.st === 'away' && t >= sh.backAt) { S.ship = newShip(); emit('ship', 'arrive'); }
  else if (sh.st === 'docked' && t >= sh.leaveAt) { S.ship = { st: 'away', backAt: t + 90000 }; emit('ship', 'leave'); }
}

// ---------- Nhiệm vụ ----------
export function currentQuest() {
  const q = QUESTS[S.quest];
  if (q) return (q.lv && S.level > 0 && S.level < q.lv) ? null : q;
  if (!S.gq) S.gq = genQuest();
  return S.gq;
}
// Nhiệm vụ ngẫu nhiên sau khi xong chuỗi hướng dẫn
function genQuest() {
  const who = pick(PEOPLE).id, L = S.level, opts = [];
  const crops = Object.entries(CROPS).filter(([, c]) => c.lv <= L).map(([k]) => k);
  const c = pick(crops), n = 4 + rnd(6);
  opts.push({ text: `Mình cần ${n} ${ITEMS[c].n.toLowerCase()} cho bữa tiệc. Bạn thu hoạch giúp nhé!`, ev: 'harvest', key: c, n });
  const made = [];
  for (const o of S.objs) if (o.k === 'fac' && !o.site) for (const r of FACTORIES[o.t].rec) if (r.lv <= L && !r.out.endsWith('feed') && !ITEMS[r.out].mat) made.push(r.out);
  if (made.length) { const m = pick(made), k = 1 + rnd(3); opts.push({ text: `Làm giúp mình ${k} ${ITEMS[m].n.toLowerCase()} được không?`, ev: 'make', key: m, n: k }); }
  const pens = S.objs.filter(o => o.k === 'pen' && !o.site && o.animals.length);
  if (pens.length) { const p = PENS[pick(pens).t], k = 3 + rnd(4); opts.push({ text: `Thu ${k} ${ITEMS[p.prod].n.toLowerCase()} từ chuồng ${p.an.toLowerCase()} nhé!`, ev: 'collect', key: p.prod, n: k }); }
  opts.push({ text: `Hôm nay nhiều người đặt hàng lắm. Giao ${2 + rnd(3)} đơn hàng nhé!`, ev: 'deliver', n: 2 + rnd(3) });
  if (S.objs.some(o => o.k === 'obstacle')) opts.push({ text: 'Dọn thêm 3 chướng ngại vật để đảo rộng hơn nào!', ev: 'clear', n: 3 });
  const q = pick(opts);
  if (q.ev === 'deliver') q.text = q.text.replace(/\d+ đơn/, q.n + ' đơn');
  return { who, ...q, coins: 20 + L * 8, xp: 6 + L * 2, gems: Math.random() < 0.3 ? 1 : 0 };
}
export function claimQuest() {
  const q = currentQuest(); if (!q || S.qprog < q.n) return null;
  S.coins += q.coins || 0; S.gems += q.gems || 0; addXP(q.xp || 0);
  if (QUESTS[S.quest]) S.quest++; else S.gq = null;
  S.qprog = 0;
  return q;
}
export function questEvent(ev, key, n = 1) {
  emit('act', ev, key, n);
  const q = currentQuest();
  if (!q || q.ev !== ev || (q.key && q.key !== key)) return;
  S.qprog = Math.min(q.n, S.qprog + n);
  emit('quest');
}

// ---------- Tạo nông trại mới ----------
let nextId = 1;
export const newId = () => (S.nextId = (S.nextId || 1) + 1);

function freshState() {
  const t = now();
  const objs = [];
  const id = () => objs.length + 1;
  const c = (x, z) => ({ x: x + OFF, z: z + OFF }); // toạ độ cũ (đảo 26x26) -> vùng lõi
  objs.push({ id: id(), k: 'house', t: 'house', ...c(11, 4), r: 0 });
  objs.push({ id: id(), k: 'barn', t: 'barn', ...c(15, 5), r: 0 });
  // 6 ô ruộng, 3 ô đang có lúa mì sắp chín
  const fields = [[8, 9], [9, 9], [10, 9], [8, 10], [9, 10], [10, 10]];
  fields.forEach(([x, z], i) => objs.push({ id: id(), k: 'field', t: 'field', ...c(x, z), r: 0,
    crop: i < 3 ? 'wheat' : null, s: t - 18000, e: t + 2000 + i * 1500 }));
  objs.push({ id: id(), k: 'pen', t: 'coop', ...c(14, 9), r: 0, animals: [{ s: 0, e: 0 }, { s: 0, e: 0 }] });
  objs.push({ id: id(), k: 'fac', t: 'feedmill', ...c(12, 13), r: 0, jobs: [] });
  objs.push({ id: id(), k: 'board', t: 'board', ...c(8, 13), r: 0 });
  objs.push({ id: id(), k: 'tree', t: 'palm', ...c(17, 14), r: 0, s: t - 100000, e: t });
  STARTER_DECOR.forEach(([t, x, z]) => objs.push({ id: id(), k: 'decor', t, ...c(x, z), r: 0 }));
  objs.push({ id: id(), k: 'decor', t: 'bush', ...c(18, 6), r: 0 });

  // chướng ngại vật quanh mép vùng lõi (cách sinh cũ, dời theo OFF)
  const rand = seeded(20240611);
  const taken = new Set();
  for (const o of objs) { const [w, d] = footprint(o); for (let i = -1; i <= w; i++) for (let j = -1; j <= d; j++) taken.add((o.x + i) + ',' + (o.z + j)); }
  const types = JUNGLE_MIX.core;
  for (let x = 0; x < CORE; x++) for (let z = 0; z < CORE; z++) {
    const inCore = x >= 6 && x <= 19 && z >= 2 && z <= 16;
    if (inCore || taken.has((x + OFF) + ',' + (z + OFF))) continue;
    const edge = Math.min(x, z, CORE - 1 - x, CORE - 1 - z);
    const p = edge < 1 ? 0.12 : 0.24;
    if (rand() < p) objs.push({ id: id(), k: 'obstacle', t: types[Math.floor(rand() * types.length)], ...c(x, z), r: Math.floor(rand() * 4) });
  }
  // rừng ở 3 vùng ngoài
  const j = outerJungle(objs.length + 1);
  objs.push(...j.objs);

  const st = {
    ffsDeco: true,
    v: 2, coins: 150, gems: 10, xp: 0, level: 1, energy: ENERGY_MAX, energyAt: t,
    inv: { wheat: 4, chickenfeed: 2 }, barnLvl: 0,
    objs, nextId: j.nextId,
    orders: [null, null, null, null, null, null],
    ship: null, quest: 0, qprog: 0,
    lastDaily: '', sound: true, music: true, seed: 'wheat',
    zones: { core: true, west: false, north: false, old: false },
    tut: 0, boatFixed: true, // Task 7 sẽ đổi: ván mới bắt đầu với thuyền hỏng
  };
  return st;
}

export function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
export function load() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(KEY)); } catch (e) { }
  if (raw && raw.v === 1 && Array.isArray(raw.objs)) { S = migrateV1(raw); save(); }
  else S = raw && raw.v === 2 && Array.isArray(raw.objs) ? raw : freshState();
  if (!S.ship) S.ship = newShip();
  refreshOrders();
  return S;
}
// Mã sao lưu để chuyển nông trại sang máy khác
export const exportSave = () => btoa(unescape(encodeURIComponent(JSON.stringify(S))));
export function importSave(code) {
  const o = JSON.parse(decodeURIComponent(escape(atob(code.replace(/\s+/g, '')))));
  if (!o || (o.v !== 1 && o.v !== 2) || !Array.isArray(o.objs)) throw new Error('bad');
  S = o.v === 1 ? migrateV1(o) : o; save();
}
// Nông trại cũ: thêm đường gạch, luống hoa vào chỗ còn trống (chỉ một lần)
export function ensureStarterDecor(addView) {
  if (S.ffsDeco) return;
  S.ffsDeco = true;
  for (const [t, cx, cz] of STARTER_DECOR) {
    const x = cx + OFF, z = cz + OFF;
    if (!isFree(x, z, 1, 1)) continue;
    const o = { id: newId(), k: 'decor', t, x, z, r: 0 };
    S.objs.push(o); addView(o);
  }
  save();
}
export function resetGame() { S = freshState(); S.ship = newShip(); refreshOrders(); save(); }
