// Sinh bản đồ đảo phiêu lưu (thuần, không đụng tới 3D hay trạng thái nên kiểm thử được bằng node)
import { ADV_THEMES } from './data.js';

// Số ngẫu nhiên cố định theo seed để lần sau đảo vẫn giống
export function rng(seed) { let s = seed * 9301 + 49297; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

export function buildMap(A) {
  const R = rng(A.seed), T = ADV_THEMES[A.theme];
  const cells = [], cx = Math.floor(A.w / 2);
  const idx = (x, z) => z * A.w + x;
  for (let z = 0; z < A.h; z++) for (let x = 0; x < A.w; x++) {
    const dx = (x - (A.w - 1) / 2) / (A.w / 2), dz = (z - (A.h - 1) / 2) / (A.h / 2);
    const inside = dx * dx + dz * dz < 1.0 + R() * 0.28;
    cells.push({ x, z, k: inside ? 'ob' : 'water' });
  }
  // lối vào ở mép trước, đích ở cuối đảo
  const start = [[cx, A.h - 1], [cx, A.h - 2], [cx - 1, A.h - 2], [cx + 1, A.h - 2]];
  start.forEach(([x, z]) => { cells[idx(x, z)].k = 'open'; });
  const goal = cells[idx(cx, 1)]; goal.k = 'goal';
  [[cx, 0], [cx - 1, 1], [cx + 1, 1], [cx, 2]].forEach(([x, z]) => { if (cells[idx(x, z)].k === 'water') cells[idx(x, z)].k = 'ob'; });
  // rương báu
  const mids = cells.filter(c => c.k === 'ob' && c.z > 2 && c.z < A.h - 3);
  for (let i = 0; i < A.chests && mids.length; i++) mids.splice(Math.floor(R() * mids.length), 1)[0].k = 'chest';
  // chướng ngại vật + phần thưởng ẩn bên dưới
  const total = T.obstacles.reduce((s, o) => s + o[3], 0);
  cells.forEach(c => {
    if (c.k !== 'ob') return;
    let r = R() * total, t = 0;
    while (r > T.obstacles[t][3]) { r -= T.obstacles[t][3]; t++; }
    c.t = t; c.e = T.obstacles[t][2]; c.rot = R() * 6.28;
    const l = R();
    c.loot = l < 0.35 ? { coins: 3 + Math.floor(R() * 8) } : l < 0.55 ? { item: 'crop' } : l < 0.67 ? { energy: 3 } : l < 0.71 ? { gems: 1 } : null;
    if (A.story) c.mat = T.obstacles[t][4] ?? null; // vật liệu rơi ra khi dọn (đảo truyện)
  });
  if (A.story) storyCells(A, cells, idx, cx);
  return { A, T, cells, idx, cx };
}

// Đảo truyện: thêm ô người dân sát lối vào và ô công trình hỏng ở giữa đảo.
// Làm sau cùng và không dùng số ngẫu nhiên, nên không đổi bản đồ nền theo seed.
function storyCells(A, cells, idx, cx) {
  const at = (x, z) => (x >= 0 && z >= 0 && x < A.w && z < A.h ? cells[idx(x, z)] : null);
  // người dân: ô đất kề lối vào (ưu tiên bên phải, rồi bên trái, rồi hàng trên)
  const near = [[cx + 1, A.h - 1], [cx - 1, A.h - 1], [cx + 2, A.h - 2], [cx - 2, A.h - 2], [cx + 1, A.h - 3], [cx - 1, A.h - 3]];
  const spot = near.map(([x, z]) => at(x, z)).find(c => c && c.k === 'ob') || at(...near[0]);
  cells[idx(spot.x, spot.z)] = { x: spot.x, z: spot.z, k: 'npc' };
  // công trình: 2×2 ở giữa đảo nếu cả bốn ô đều là vật cản, không thì 1 ô; thử dần từ tâm ra ngoài
  const mx = cx, mz = Math.floor(A.h / 2);
  const offs = [];
  for (let dz = -3; dz <= 3; dz++) for (let dx = -3; dx <= 3; dx++) offs.push([dx, dz]);
  offs.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]) || a[1] - b[1] || a[0] - b[0]);
  const ob = (x, z) => at(x, z)?.k === 'ob';
  let top = null, span = 2;
  for (const [dx, dz] of offs) { const x = mx + dx, z = mz + dz; if (ob(x, z) && ob(x + 1, z) && ob(x, z + 1) && ob(x + 1, z + 1)) { top = [x, z]; break; } }
  if (!top) { span = 1; for (const [dx, dz] of offs) if (ob(mx + dx, mz + dz)) { top = [mx + dx, mz + dz]; break; } }
  const [rx, rz] = top, main = idx(rx, rz);
  cells[main] = { x: rx, z: rz, k: 'ruin', span };
  if (span === 2) [[1, 0], [0, 1], [1, 1]].forEach(([dx, dz]) => { cells[idx(rx + dx, rz + dz)] = { x: rx + dx, z: rz + dz, k: 'ruinpart', main }; });
}
