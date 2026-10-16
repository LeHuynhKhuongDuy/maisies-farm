// Chặt vật cản nhiều nhát: trừ năng lượng, rơi vật liệu, rương, mọc lại. Chỉ logic thuần (không Three/DOM) để chạy được trong node
import { GRID, OFF, ITEMS, OBSTACLES, REGROW_MIX } from './data.js';
import { S, add, addXP, footprint, occupancy, newId, questEvent } from './state.js';
import { isOpenCell } from './island.js';

const between = (rand, [lo, hi]) => lo + Math.floor(rand() * (hi - lo + 1));
const RAW = () => Object.keys(ITEMS).filter(k => ITEMS[k].mat === 1);

// Rương: năng lượng 3..8, xu 5..20, một loại vật liệu thô 2..4
export function rollChest(rand = Math.random) {
  const raw = RAW();
  return {
    energy: between(rand, [3, 8]),
    coins: between(rand, [5, 20]),
    mats: { [raw[Math.min(raw.length - 1, Math.floor(rand() * raw.length))]]: between(rand, [2, 4]) },
  };
}

// Một nhát chặt. Trả null nếu hết năng lượng (hoặc vật cản đã bị chặt xong rồi), không trừ gì cả.
// Rương (nếu có) chỉ được trả về; giao diện đặt rương lên ô vừa dọn, bé chạm vào mới nhận (openChest).
export function hitObstacle(o, rand = Math.random) {
  const O = OBSTACLES[o.t];
  if (!O || S.energy < 1 || !S.objs.includes(o)) return null;
  if (o.hp == null) o.hp = O.hp;
  S.energy -= 1;
  o.hp -= 1;
  const drops = {};
  const give = (k, n) => { drops[k] = (drops[k] || 0) + n; add(k, n); };
  for (const [k, range] of Object.entries(O.drop)) give(k, between(rand, range));
  for (const [k, p] of Object.entries(O.rare || {})) if (rand() < p) give(k, 1);
  const done = o.hp <= 0;
  let chest = null, xp = 1;
  if (done) {
    S.objs.splice(S.objs.indexOf(o), 1);
    xp += 2;
    if (rand() < O.chest) chest = rollChest(rand);
  }
  addXP(xp);
  return { drops, xp, done, chest };
}

// Mở rương nằm trên đất ({k:'loot', t:'chest', chest}): cộng quà, xóa rương. Rương đã mở rồi thì trả null.
export function openChest(loot) {
  const i = S.objs.indexOf(loot);
  if (i < 0 || !loot.chest) return null;
  const { energy = 0, coins = 0, mats = {} } = loot.chest;
  S.objs.splice(i, 1);
  S.energy += energy; S.coins += coins;
  for (const [k, n] of Object.entries(mats)) add(k, n);
  questEvent('loot');
  return { energy, coins, mats };
}

// Vật cản trong vùng đang mở thỏa `pred` có `dist(o)` nhỏ nhất (bàn tay hướng dẫn chỉ vào đây), không có thì null.
// dist trả Infinity thì bỏ qua vật đó
export function nearestObstacle(pred, dist) {
  let best = null, bd = Infinity;
  for (const o of S.objs) {
    if (o.k !== 'obstacle' || !OBSTACLES[o.t] || !isOpenCell(o.x, o.z) || !pred(o)) continue;
    const d = dist(o);
    if (d < bd) { bd = d; best = o; }
  }
  return best;
}
export const cellDist = (x, z) => o => Math.hypot(o.x - x, o.z - z);

// Vật cản rơi vật liệu dùng ngay trong hướng dẫn đầu game (gỗ, đá, lá cọ)
export const basicDrop = o => ['wood', 'stone', 'palmleaf'].some(k => OBSTACLES[o.t]?.drop[k]);

// ---------- Mọc lại ----------
export const REGROW_EVERY = 180, REGROW_MIN = 8; // giây; số vật cản mọc lại tối thiểu trong các vùng đang mở
// Cứ REGROW_EVERY giây xem một lần: vùng mở còn ít bụi thì mọc một vật cản (theo REGROW_MIX) ở ô trống,
// ưu tiên ô không sát công trình; nông trại kín đồ thì mọc sát cũng được.
// S.regrowAt = mốc lần xem tới (ms). Trả về vật cản mới (đã vào S.objs) hoặc null.
export function regrowTick(t, rand = Math.random) {
  if (S.regrowAt == null) { S.regrowAt = t + REGROW_EVERY * 1000; return null; }
  if (t < S.regrowAt) return null;
  S.regrowAt = t + REGROW_EVERY * 1000;
  const n = S.objs.filter(o => o.k === 'obstacle' && OBSTACLES[o.t]?.regrow && isOpenCell(o.x, o.z)).length;
  if (n >= REGROW_MIN) return null;
  // ô bị chiếm; chỗ khách đứng, chân bến tàu, cầu câu cá không bao giờ mọc;
  // ưu tiên ô không kề công trình (vòng 1 ô quanh mọi thứ không phải vật cản)
  const taken = occupancy(), keep = new Set(), near = new Set();
  for (const o of S.objs) {
    if (o.k === 'obstacle') continue;
    const [w, d] = footprint(o);
    for (let i = -1; i <= w; i++) for (let j = -1; j <= d; j++) near.add((o.x + i) + ',' + (o.z + j));
  }
  for (const v of S.visitors || []) keep.add(v.x + ',' + v.z);
  keep.add((17 + OFF) + ',' + (GRID - 1)); keep.add((GRID - 1) + ',' + (9 + OFF)); // chân bến tàu, cầu câu cá
  const strict = [], relaxed = [];
  for (let x = 0; x < GRID; x++) for (let z = 0; z < GRID; z++) {
    const key = x + ',' + z;
    if (taken.has(key) || keep.has(key) || !isOpenCell(x, z)) continue;
    (near.has(key) ? relaxed : strict).push([x, z]);
  }
  // nông trại cũ kín đồ (trang trí, ruộng sát nhau): không còn ô xa công trình thì mọc sát cũng được, để không bao giờ cạn vật liệu
  const cells = strict.length ? strict : relaxed;
  if (!cells.length) return null;
  const [x, z] = cells[Math.min(cells.length - 1, Math.floor(rand() * cells.length))];
  const type = REGROW_MIX[Math.min(REGROW_MIX.length - 1, Math.floor(rand() * REGROW_MIX.length))];
  const o = { id: newId(), k: 'obstacle', t: type, x, z, r: Math.floor(rand() * 4) % 4, hp: OBSTACLES[type].hp };
  S.objs.push(o);
  return o;
}
