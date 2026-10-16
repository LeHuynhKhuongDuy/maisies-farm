// Đảo 40x40: các vùng, ô mở, sinh rừng, chuyển bản lưu v1 -> v2
// Không dùng Three.js/DOM để chạy được trong node --test
import { ZONES, OFF, CORE, JUNGLE_MIX } from './data.js';
import { S, emit, footprint } from './state.js';

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
  placeGates(s);
  s.tut = 999; s.boatFixed = true; s.v = 2;
  return s;
}

// ---------- Cổng mở vùng ----------
// Mỗi vùng ngoài có một cổng (2x1) đặt sát ranh giới, bên phía đã tới được:
// cầu tre / cầu gỗ ở mép vùng lõi; bậc đá nằm trong rừng Tây, sát Rừng già (Rừng già không giáp lõi).
// line: hàng/cột ô của ranh giới; along: trục chạy dọc ranh giới; pref: chỗ ưa thích (ngay đầu đường đi giữa rừng);
// span: các vị trí cho phép dọc ranh giới; inward: hướng lùi vào trong nếu cả hàng ranh giới bị vướng.
export const GATES = {
  bridge_w:   { n: 'Cầu tre', zone: 'west',  along: 'z', line: OFF, inward: 1, pref: OFF + 13, span: [OFF, OFF + CORE - 2] },
  bridge_n:   { n: 'Cầu gỗ',  zone: 'north', along: 'x', line: OFF, inward: 1, pref: OFF + 13, span: [OFF, OFF + CORE - 2] },
  stairs_old: { n: 'Bậc đá',  zone: 'old',   along: 'x', line: OFF, inward: 1, pref: 7, span: [0, OFF - 2] },
};
export const zoneOfGate = t => ZONES.find(z => z.id === GATES[t]?.zone);

// Đặt cổng còn thiếu vào bản lưu `s` (ván mới, bản v1 vừa chuyển, bản v2 cũ chưa có cổng).
// Chọn chỗ không đè công trình nào; ưu tiên sát ranh giới, ít vật cản phải dọn, gần đầu đường.
// Vật cản (và rương) nằm trên chỗ đã chọn thì dọn đi.
export function placeGates(s) {
  for (const [t, G] of Object.entries(GATES)) {
    if (s.zones?.[G.zone] || s.objs.some(o => o.k === 'gate' && o.t === t)) continue;
    const occ = new Map();
    for (const o of s.objs) { const [w, d] = footprint(o); for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) occ.set((o.x + i) + ',' + (o.z + j), o); }
    let best = null, bs = Infinity;
    for (let depth = 0; depth < 6; depth++) for (let a = G.span[0]; a <= G.span[1]; a++) {
      const b = G.line + depth * G.inward;
      const [x, z] = G.along === 'z' ? [b, a] : [a, b];
      const hit = new Set();
      let ok = true;
      for (const [cx, cz] of [[x, z], [x + 1, z]]) { // 2x1
        const o = occ.get(cx + ',' + cz);
        if (o && o.k !== 'obstacle' && o.k !== 'loot') ok = false; else if (o) hit.add(o);
      }
      if (!ok) continue;
      const score = depth * 1000 + Math.abs(a - G.pref) * 10 + hit.size * 3; // dọn 1-2 vật cản để cầu nằm ngay đầu đường
      if (score < bs) { bs = score; best = { x, z, hit }; }
    }
    if (!best) continue; // không thể xảy ra với đảo thật, nhưng không làm hỏng bản lưu
    s.objs = s.objs.filter(o => !best.hit.has(o));
    const id = Math.max(s.nextId || 1, ...s.objs.map(o => (o.id || 0) + 1));
    s.objs.push({ id, k: 'gate', t, x: best.x, z: best.z, r: 0, site: { stage: 0, got: {} } });
    s.nextId = id + 1;
  }
  return s;
}

// Mở một vùng (cổng vừa xây xong): mây tan, chặt được rừng ở đó
export function openZone(id) {
  if (!S.zones || S.zones[id]) return;
  S.zones[id] = true;
  emit('zone', id);
}

// Cổng bé cần sửa để tới được vùng `id`: nếu chính cổng đó còn dưới mây (bậc đá trong rừng Tây đang đóng)
// thì chỉ tới cổng mở vùng đang che nó
export function gateFor(id, seen = new Set()) {
  const Z = ZONES.find(z => z.id === id); if (!Z?.gate || seen.has(id)) return null;
  const g = S.objs.find(o => o.k === 'gate' && o.t === Z.gate); if (!g) return null;
  const under = zoneAt(g.x, g.z);
  return isOpenCell(g.x, g.z) ? g : gateFor(under, seen.add(id));
}
