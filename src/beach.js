// Đồ nhặt trên bãi biển (sao biển, vỏ sò, cua nhỏ): cứ một lúc lại dạt vào bãi cát, bé chạm để nhận năng lượng.
// Nguồn năng lượng luôn có kể cả khi hết năng lượng và các vùng rừng còn đóng.
// Chỉ logic thuần (không Three/DOM) để chạy được trong node --test
import { GRID, OFF, BEACH, BEACH_MAX, BEACH_EVERY } from './data.js';
import { S, questEvent } from './state.js';
import { zoneAt } from './island.js';

// Toạ độ theo ô (cùng cách tính với cellToWorld): cỏ phủ ô 0..GRID-1, dải cát rộng ~2 ô bao quanh,
// giữa dải cát cách mép ô ngoài cùng 1,7 ô
const SAND = 1.7;
const SIGN_X = 14 + OFF, DOCK_X = 17 + OFF, PIER_Z = 9 + OFF; // biển tên nông trại, bến tàu (bờ Nam), cầu câu cá (bờ Đông)
const nearDock = x => x > SIGN_X - 2 && x < DOCK_X + 5; // biển tên, bến tàu, tàu hàng, thuyền sát bờ
const nearPier = z => Math.abs(z - PIER_Z) <= 2;

let SPOTS = null;
// Các điểm cố định trên bãi cát quanh đảo, mỗi điểm thuộc vùng của ô cỏ sát nó (điểm của vùng còn đóng thì chưa dùng).
// Cách nhau 2 ô, chừa 4 góc bo tròn, bến tàu và cầu câu cá. Thứ tự không đổi (món trên bãi lưu số thứ tự điểm).
export function beachSpots() {
  if (SPOTS) return SPOTS;
  const out = [], edge = v => Math.min(GRID - 1, Math.max(0, Math.round(v)));
  const add = (x, z) => out.push({ x, z, zone: zoneAt(edge(x), edge(z)) });
  for (let a = 1; a < GRID - 1; a += 2) {
    if (!nearDock(a)) add(a, GRID - 1 + SAND); // bờ Nam
    if (!nearPier(a)) add(GRID - 1 + SAND, a); // bờ Đông
    add(a, -SAND);                              // bờ Bắc
    add(-SAND, a);                              // bờ Tây
  }
  return (SPOTS = out);
}

// Gọi trong nhịp game. S.beachAt = mốc lần dạt vào tới (ms). Tới mốc: thêm một món vào một điểm trống
// ở bờ vùng đang mở (cua 15%, vỏ sò 35%, sao biển 50%), trả món mới { id, t, spot } hoặc null.
// Đi vắng lâu: mỗi nhịp thêm một món cho tới khi bắt kịp giờ hoặc bãi đầy (BEACH_MAX).
export function beachTick(t, rand = Math.random) {
  const list = (S.beach ||= []);
  if (S.beachAt == null) { S.beachAt = t + BEACH_EVERY * 1000; return null; }
  if (t < S.beachAt) return null;
  const spots = beachSpots(), used = new Set(list.map(b => b.spot));
  const free = [];
  spots.forEach((s, i) => { if (!used.has(i) && S.zones?.[s.zone]) free.push(i); });
  if (list.length >= BEACH_MAX || !free.length) { S.beachAt = t + BEACH_EVERY * 1000; return null; }
  S.beachAt += BEACH_EVERY * 1000;
  const r = rand(), kind = r < 0.15 ? 'crab' : r < 0.5 ? 'shell' : 'starfish';
  const spot = free[Math.min(free.length - 1, Math.floor(rand() * free.length))];
  const it = { id: (S.beachId = (S.beachId || 0) + 1), t: kind, spot };
  list.push(it);
  return it;
}

// Nhặt món `id`: xóa khỏi bãi, cộng năng lượng (được vượt giới hạn theo cấp). Trả số năng lượng nhận được (0 nếu không còn món đó).
export function pickBeach(id) {
  const list = S.beach || [], i = list.findIndex(b => b.id === id);
  if (i < 0) return 0;
  const [it] = list.splice(i, 1), e = BEACH[it.t]?.energy || 0;
  S.energy += e;
  questEvent('beach');
  return e;
}
