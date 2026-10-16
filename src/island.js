// Đảo 40x40: các vùng, ô mở, sinh rừng, chuyển bản lưu v1 -> v2
// Không dùng Three.js/DOM để chạy được trong node --test
import { ZONES, OFF, JUNGLE_MIX } from './data.js';
import { S } from './state.js';

export function seeded(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

// Ô (x, z) thuộc vùng nào (null nếu ngoài đảo)
export function zoneAt(x, z) {
  for (const Z of ZONES) {
    const [x0, z0, w, d] = Z.rect;
    if (x >= x0 && x < x0 + w && z >= z0 && z < z0 + d) return Z.id;
  }
  return null;
}
// Ô nằm trong vùng đã mở
export function isOpenCell(x, z) {
  const id = zoneAt(x, z);
  return !!id && !!S.zones?.[id];
}

// Rừng cho một vùng ngoài lõi: ~55% ô có vật cản, chừa đường đi 1 ô ở giữa
// (vùng Tây: hàng giữa; vùng Bắc: cột giữa; Rừng già: cả hàng và cột giữa)
export function genJungle(zoneId, seed) {
  const Z = ZONES.find(z => z.id === zoneId), mix = JUNGLE_MIX[zoneId];
  const [x0, z0, w, d] = Z.rect, rand = seeded(seed), out = [];
  const mx = x0 + Math.floor(w / 2), mz = z0 + Math.floor(d / 2);
  for (let x = x0; x < x0 + w; x++) for (let z = z0; z < z0 + d; z++) {
    const road = zoneId === 'west' ? z === mz : zoneId === 'north' ? x === mx : (x === mx || z === mz);
    const hit = rand(), t = mix[Math.floor(rand() * mix.length)], r = Math.floor(rand() * 4);
    if (road || hit >= 0.55) continue;
    out.push({ k: 'obstacle', t, x, z, r });
  }
  return out;
}
// Rừng của cả 3 vùng ngoài, đã gán id từ `nextId`
export function outerJungle(nextId) {
  const objs = [];
  ZONES.filter(z => !z.open).forEach((Z, i) => genJungle(Z.id, 20240611 + i * 977).forEach(o => objs.push({ id: nextId++, ...o })));
  return { objs, nextId };
}

// Bản lưu v1 (đảo 26x26) -> v2 (đảo 40x40): dời mọi thứ vào vùng lõi, thêm quà vật liệu và rừng
export function migrateV1(raw) {
  const s = raw;
  s.objs.forEach(o => { o.x += OFF; o.z += OFF; });
  (s.visitors || []).forEach(v => { v.x += OFF; v.z += OFF; });
  s.inv ||= {};
  for (const [k, n] of [['wood', 20], ['stone', 10], ['palmleaf', 10]]) s.inv[k] = (s.inv[k] || 0) + n;
  const first = Math.max(s.nextId || 1, ...s.objs.map(o => o.id || 0)) + 1;
  const j = outerJungle(first);
  s.objs.push(...j.objs); s.nextId = j.nextId;
  s.zones = { core: true, west: false, north: false, old: false };
  s.tut = 999; s.boatFixed = true; s.v = 2;
  return s;
}
