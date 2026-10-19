// Đảo có truyện: sương, vật liệu rơi, sửa công trình, nhiệm vụ đảo, gợi ý đường, quà mang về.
// Chỉ logic thuần (không Three/DOM) để chạy được trong node --test. Đảo cũ (không có `story`) không bị đụng tới.
import { S, add, take, have, addXP, emit, findFree, footprint as sizeOf, newId } from './state.js';
import { LOTUS, OFF } from './data.js';

export const FOG_R = 2; // ô cách vùng đã mở quá 2 ô (Manhattan) thì bị sương che
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// ---------- Tiến độ ----------
// Trả S.adv[id], tạo các trường còn thiếu (đảo cũ chỉ có open/chests/done/runs, đảo truyện thêm q/qp/ruin/prize)
export function isleState(A) {
  const p = (S.adv ||= {})[A.id] ||= { open: [], chests: [], done: false, runs: 0 };
  if (A.story) {
    p.q ??= 0; p.qp ??= 0; p.prize ??= false;
    p.ruin ||= { stage: 0, got: {} };
  }
  return p;
}
// Ô đã mở: ô lối vào, vật cản đã dọn, rương đã mở
const openAt = (map, p, i) => {
  const c = map.cells[i];
  return c.k === 'open' || p.open.includes(i) || (c.k === 'chest' && p.chests.includes(i));
};
const nbrIdx = (map, c) => DIRS.map(([dx, dz]) => [c.x + dx, c.z + dz]).filter(([x, z]) => x >= 0 && z >= 0 && x < map.A.w && z < map.A.h).map(([x, z]) => map.idx(x, z));

// Cả công trình 2×2 là một vật: chạm vào ô nào cũng tính là chạm công trình (ruinpart -> ô chính)
export const mainOf = (map, i) => (map.cells[i].k === 'ruinpart' ? map.cells[i].main : i);
const footprint = (map, i) => {
  const m = mainOf(map, i);
  return map.cells[m].k === 'ruin' ? [m, ...map.cells.map((c, j) => (c.k === 'ruinpart' && c.main === m ? j : -1)).filter(j => j >= 0)] : [i];
};
// Chạm được ô i ngay bây giờ: có ô nào của vật (cả khối công trình) kề bên một ô đã mở
export function touchable(map, p, i) {
  const fp = footprint(map, i);
  return fp.some(ci => nbrIdx(map, map.cells[ci]).some(j => !fp.includes(j) && map.cells[j].k !== 'water' && openAt(map, p, j)));
}

// ---------- Sương ----------
// Tập ô bị che: ô đất (không phải nước) cách mọi ô đã mở hơn FOG_R. Rỗng nếu đảo cũ hoặc đã xong lần đầu (p.fog === false)
export function fogged(map, p) {
  const out = new Set();
  if (!map.A.story || p.fog === false) return out;
  const seen = new Set();
  map.cells.forEach((s, i) => {
    if (!openAt(map, p, i)) return;
    for (let dz = -FOG_R; dz <= FOG_R; dz++) for (let dx = -(FOG_R - Math.abs(dz)); dx <= FOG_R - Math.abs(dz); dx++) {
      const x = s.x + dx, z = s.z + dz;
      if (x >= 0 && z >= 0 && x < map.A.w && z < map.A.h) seen.add(map.idx(x, z));
    }
  });
  map.cells.forEach((c, i) => { if (c.k !== 'water' && !seen.has(i)) out.add(i); });
  return out;
}

// ---------- Vật liệu rơi khi dọn vật cản ----------
// Không dùng may rủi để bé không bao giờ kẹt: 1 món theo c.mat; cây rừng (art:jungletree) rơi thêm 1 dây leo
// khi (x + z) chia hết cho 3 (khoảng 1/3 số cây, đếm được chính xác trên bản đồ).
// Task 3 gọi: lootMat(c, map.T) khi dọn ô c (ô ob của đảo truyện), rồi add(k, n) từng món vào Kho.
const isJungle = (c, T) => T?.obstacles[c.t]?.[0] === 'art:jungletree';
export function lootMat(c, T) {
  const out = {};
  if (c.mat) out[c.mat] = 1;
  if (isJungle(c, T) && (c.x + c.z) % 3 === 0) out.liana = 1;
  return out;
}

// ---------- Sửa công trình ----------
const stages = A => A.story.ruin.stages;
const ruinDone = (A, p) => p.ruin.stage >= stages(A).length;
// Giai đoạn hiện tại cần gì: { vật liệu: { need, got } }; null khi đã sửa xong
export function ruinNeed(A, p) {
  if (!A.story || ruinDone(A, p)) return null;
  const got = p.ruin.got || {};
  return Object.fromEntries(Object.entries(stages(A)[p.ruin.stage]).map(([k, need]) => [k, { need, got: got[k] || 0 }]));
}
// Góp một loại vật liệu từ Kho, không quá phần còn thiếu. Trả số đã góp
export function ruinGive(A, p, k) {
  const n = ruinNeed(A, p)?.[k];
  if (!n) return 0;
  const amt = Math.min(have(k), n.need - n.got);
  if (amt <= 0) return 0;
  take({ [k]: amt });
  (p.ruin.got ||= {})[k] = n.got + amt;
  return amt;
}
// Đủ vật liệu giai đoạn này thì sang giai đoạn sau. 'stage' | 'done' (xong hẳn, báo 'aruin') | null (chưa đủ)
export function ruinAdvance(A, p) {
  const need = ruinNeed(A, p);
  if (!need || !Object.values(need).every(n => n.got >= n.need)) return null;
  p.ruin.stage++; p.ruin.got = {};
  if (!ruinDone(A, p)) return 'stage';
  isleEvent(A, 'aruin');
  return 'done';
}

// ---------- Nhiệm vụ đảo (tuyến tính, một bước một lúc) ----------
// Tiến độ bước: rương và công trình tính theo trạng thái thật (mở/sửa trước khi tới bước vẫn được tính);
// dọn ô và tới đích chỉ đếm sự kiện lúc bước đang chạy (p.qp)
function stepGot(A, p, step) {
  const { ev, n } = step.req;
  if (ev === 'achest') return Math.min(n, p.chests.length);
  if (ev === 'aruin') return ruinDone(A, p) ? 1 : 0;
  return Math.min(n, p.qp || 0);
}
const questOf = (A, p) => {
  const step = A.story?.steps[p.q];
  return step ? { ...step, i: p.q, got: stepGot(A, p, step) } : null;
};
// Bước hiện tại kèm tiến độ { ...bước, i, got }; null khi hết bước hoặc đảo cũ
export const isleQuest = A => (A.story ? questOf(A, isleState(A)) : null);
// Báo một việc vừa làm trên đảo này. Chỉ 'aclear' và 'agoal' cần đếm; 'achest'/'aruin' lấy từ trạng thái nên chỉ phát tín hiệu
export function isleEvent(A, ev, n = 1) {
  if (!A.story) return;
  const p = isleState(A), q = questOf(A, p);
  if (!q || q.req.ev !== ev) return;
  if (ev === 'aclear' || ev === 'agoal') p.qp = Math.min(q.req.n, (p.qp || 0) + n);
  emit('quest');
}
// Nhận thưởng khi bước đủ; trả bước vừa nhận, sang bước sau. Chưa đủ thì null
export function isleClaim(A) {
  if (!A.story) return null;
  const p = isleState(A), q = questOf(A, p);
  if (!q || q.got < q.req.n) return null;
  S.coins += q.coins || 0; S.gems += q.gems || 0; S.energy += q.energy || 0; addXP(q.xp || 0);
  p.q++; p.qp = 0;
  emit('quest');
  return q;
}

// ---------- Gợi ý ô nên chạm tiếp ----------
// Từ vùng đã mở, mỗi ô đất có chi phí = số vật cản/rương phải dọn để đứng tới (ô mở 0, vật cản/rương 1).
// Nước, người dân, công trình và đích không đi xuyên qua được. Trả bảng chi phí và ô cha để lần ngược đường.
function paths(map, p) {
  const n = map.cells.length, dist = Array(n).fill(Infinity), par = Array(n).fill(-1), dq = [];
  map.cells.forEach((_, i) => { if (openAt(map, p, i)) { dist[i] = 0; dq.push(i); } });
  while (dq.length) {
    const i = dq.shift();
    for (const j of nbrIdx(map, map.cells[i])) {
      const k = map.cells[j].k;
      if (!(k === 'ob' || k === 'chest' || k === 'open')) continue;
      const w = openAt(map, p, j) ? 0 : 1;
      if (dist[i] + w < dist[j]) { dist[j] = dist[i] + w; par[j] = i; w ? dq.push(j) : dq.unshift(j); }
    }
  }
  return { dist, par };
}
// Chọn đích gần nhất trong `targets` [{ ret, cells: [idx] }]; chạm được thì trả luôn, chưa thì trả vật cản đầu đường
function aim(map, p, targets) {
  if (!targets.length) return null;
  const { dist, par } = paths(map, p), ent = { x: map.cx, z: map.A.h - 1 };
  let best = null;
  for (const t of targets) {
    const own = new Set(t.cells);
    let nb = -1, d = Infinity;
    for (const ci of t.cells) for (const j of nbrIdx(map, map.cells[ci])) if (!own.has(j) && dist[j] < d) { d = dist[j]; nb = j; }
    if (nb < 0 || d === Infinity) continue;
    const c = map.cells[t.cells[0]], far = Math.abs(c.x - ent.x) + Math.abs(c.z - ent.z);
    if (!best || d < best.d || (d === best.d && (far < best.far || (far === best.far && t.ret < best.t.ret)))) best = { t, d, nb, far };
  }
  if (!best) return null;
  if (touchable(map, p, best.t.ret)) return best.t.ret;
  let j = best.nb;
  while (par[j] >= 0 && dist[par[j]] > 0) j = par[j]; // lùi về ô vật cản sát vùng đã mở
  return j;
}

// Ô bé nên chạm tiếp theo bước nhiệm vụ hiện tại (luôn là ô chạm được); null nếu không còn gì để chạm
export function nextHint(map, p) {
  const A = map.A;
  if (!A.story) return null;
  const q = questOf(A, p), cells = map.cells;
  const one = (pred) => cells.map((c, i) => (pred(c, i) ? { ret: i, cells: [i] } : null)).filter(Boolean);
  const closedOb = (c, i) => c.k === 'ob' && !p.open.includes(i);
  const find = k => cells.findIndex(c => c.k === k);
  if (q && q.got >= q.req.n) return aim(map, p, one(c => c.k === 'npc')); // xong bước: về gặp người dân
  if (!q) return null; // đã nhận hết các bước
  const ev = q.req.ev;
  if (ev === 'aclear') return aim(map, p, one(closedOb));
  if (ev === 'achest') return aim(map, p, one((c, i) => c.k === 'chest' && !p.chests.includes(i)));
  if (ev === 'agoal') return aim(map, p, one(c => c.k === 'goal')); // kể cả khi đã chạm đích sớm (p.done)
  // aruin: đủ vật liệu cho giai đoạn này thì chạm công trình, còn thiếu thì chặt thứ đang thiếu
  const need = ruinNeed(A, p);
  if (!need) return null;
  const miss = Object.entries(need).filter(([k, n]) => have(k) < n.need - n.got).map(([k]) => k);
  if (!miss.length) {
    const r = find('ruin');
    return aim(map, p, [{ ret: r, cells: footprint(map, r) }]);
  }
  return aim(map, p, one((c, i) => closedOb(c, i) && Object.keys(lootMat(c, map.T)).some(k => miss.includes(k))));
}

// ---------- Xong đảo, chơi lại, khóa cấp ----------
// Trao quà một lần (vào hàng chờ đặt ở nông trại), tắt sương. Trả { prize } lần đầu, {} các lần sau và với đảo cũ
export function isleFinish(A) {
  if (!A.story) return {};
  const p = isleState(A);
  if (p.prize) return {};
  p.prize = true; p.fog = false;
  (S.pendingDecor ||= []).push(A.story.prize);
  return { prize: A.story.prize };
}
// Vào lại đảo đã xong: vật cản và rương mọc lại, đếm thêm một lượt. Giữ q, qp, ruin, prize, fog (đảo cũ vẫn như trước)
export function isleReplayReset(A) {
  const p = isleState(A);
  if (!p.done) return false;
  Object.assign(p, { open: [], chests: [], done: false });
  p.runs++;
  return true;
}
// Gợi ý khóa trên bản đồ biển; null khi đủ cấp
export const chartLocked = A => (S.level < A.lv ? `Mở ở cấp ${A.lv}` : null);

// ---------- Ao sen: sinh năng lượng ----------
// Ao mới đặt chưa có mốc `at` nên nhận được ngay lần đầu. Giờ máy lùi thì kéo mốc về hiện tại (không kẹt chờ mãi)
export function lotusReady(o, t) {
  if ((o.at ?? 0) > t) { o.at = t; return false; }
  return t - (o.at ?? 0) >= LOTUS.every * 1000;
}
// Trả số năng lượng nhận (0 nếu chưa tới giờ) và đặt lại mốc. Người gọi tự cộng vào S.energy (để còn bay về thanh năng lượng)
export function lotusCollect(o, t) {
  if (!lotusReady(o, t)) return 0;
  o.at = t;
  return LOTUS.energy;
}

// ---------- Đặt đồ thưởng lên đảo nhà ----------
// Còn chỗ: thêm vào S.objs, trả { obj }. Hết chỗ: cất vào S.store (không mất), trả { stored: true }. Hình và lời chào do game.js lo
export function placePrize(t, near = [12 + OFF, 9 + OFF]) {
  const o = { id: 0, k: 'decor', t, x: 0, z: 0, r: 0 };
  const [w, d] = sizeOf(o), spot = findFree(w, d, ...near);
  if (!spot) { (S.store ||= {})[t] = (S.store[t] || 0) + 1; return { stored: true }; }
  o.id = newId(); o.x = spot[0]; o.z = spot[1];
  S.objs.push(o);
  return { obj: o };
}
