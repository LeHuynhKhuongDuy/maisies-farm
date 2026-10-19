// Đảo 40x40: các vùng, ô mở, sinh rừng, chuyển bản lưu v1 -> v2
// Không dùng Three.js/DOM để chạy được trong node --test
import { ZONES, GRID, OFF, CORE, JUNGLE_MIX } from './data.js';
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
// Mỗi vùng ngoài có một cổng (2x1) đặt sát ranh giới, bên phía đã tới được (vùng `home`):
// cầu tre / cầu gỗ ở mép vùng lõi; bậc đá nằm trong rừng Tây, sát Rừng già (Rừng già không giáp lõi).
// line: hàng/cột ô đầu tiên của `home` sát ranh giới; along: trục chạy dọc ranh giới;
// pref: chỗ ưa thích (ngay đầu đường đi giữa rừng); span: các vị trí dọc ranh giới phía bên kia (chỗ dự phòng cuối).
export const GATES = {
  bridge_w:   { n: 'Cầu tre', zone: 'west',  home: 'core', along: 'z', line: OFF, pref: OFF + 13, span: [OFF, OFF + CORE - 1] },
  bridge_n:   { n: 'Cầu gỗ',  zone: 'north', home: 'core', along: 'x', line: OFF, pref: OFF + 13, span: [OFF, OFF + CORE - 2] },
  stairs_old: { n: 'Bậc đá',  zone: 'old',   home: 'west', along: 'x', line: OFF, pref: 7, span: [0, OFF - 2] },
};
export const zoneOfGate = t => ZONES.find(z => z.id === GATES[t]?.zone);

// Vật nằm trên chỗ đặt cổng: bậc phải dời (0 vật cản: dọn đi; 1 đồ trang trí: cất vào túi; 2 ruộng trống: bỏ),
// null = không bao giờ đụng (nhà, chuồng, nhà máy, cây, ruộng đang trồng, rương, cổng...)
const evictTier = o => o.k === 'obstacle' ? 0 : o.k === 'decor' ? 1 : (o.k === 'field' && !o.crop) ? 2 : null;

// Đặt cổng còn thiếu vào bản lưu `s` (ván mới, bản v1 vừa chuyển, bản v2 cũ chưa có cổng). Không bao giờ thất bại:
//  1. tìm khắp vùng `home`: ưu tiên ô trống / vật cản, rồi dời đồ trang trí (cất vào s.store), rồi ruộng trống;
//     cùng bậc thì gần ranh giới, gần đầu đường, ít vật phải dời;
//  2. vùng `home` kín vật không dời được: đặt ngay bên kia ranh giới (vùng còn đóng chỉ có vật cản),
//     cổng vẫn tới được vì sát ô vùng mở (gateReachable).
export function placeGates(s) {
  for (const [t, G] of Object.entries(GATES)) {
    if (s.zones?.[G.zone] || s.objs.some(o => o.k === 'gate' && o.t === t)) continue;
    const occ = new Map();
    for (const o of s.objs) { const [w, d] = footprint(o); for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) occ.set((o.x + i) + ',' + (o.z + j), o); }
    let best = null, bs = Infinity;
    const consider = (x, z, extraTier) => {
      const hit = new Set(); let tier = extraTier;
      for (const [cx, cz] of [[x, z], [x + 1, z]]) { // 2x1
        const o = occ.get(cx + ',' + cz); if (!o) continue;
        const k = evictTier(o); if (k === null || (extraTier && k)) return; // bên kia ranh giới chỉ dọn vật cản
        tier = Math.max(tier, k); hit.add(o);
      }
      const [a, b] = G.along === 'z' ? [z, x] : [x, z];
      const score = tier * 1e6 + Math.abs(b - G.line) * 1000 + Math.abs(a - G.pref) * 10 + hit.size * 3; // dọn 1-2 vật cản để cầu nằm ngay đầu đường
      if (score < bs) { bs = score; best = { x, z, hit }; }
    };
    for (let x = 0; x < GRID - 1; x++) for (let z = 0; z < GRID; z++) if (zoneAt(x, z) === G.home && zoneAt(x + 1, z) === G.home) consider(x, z, 0);
    const far = G.along === 'z' ? G.line - 2 : G.line - 1; // ngay bên kia ranh giới
    for (let a = G.span[0]; a <= G.span[1]; a++) {
      const [x, z] = G.along === 'z' ? [far, a] : [a, far];
      if (zoneAt(x, z) === G.zone && zoneAt(x + 1, z) === G.zone) consider(x, z, 3);
    }
    if (!best) continue; // vùng đóng chỉ có vật cản nên bước 2 luôn có chỗ
    for (const o of best.hit) if (o.k === 'decor') { (s.store ||= {})[o.t] = (s.store[o.t] || 0) + 1; if (o.t === 'lotuspond' && o.at != null) s.lotusAt = o.at; } // bé không mất đồ trang trí (ao sen giữ mốc nhận năng lượng)
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

// Cổng tới được: có ô thuộc vùng mở, hoặc nằm sát (chung cạnh) một ô vùng mở
// (trường hợp vùng lõi kín vật, cổng phải nằm ngay bên kia ranh giới)
export function gateReachable(g) {
  for (const [x, z] of [[g.x, g.z], [g.x + 1, g.z]]) {
    if (isOpenCell(x, z)) return true;
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (isOpenCell(x + dx, z + dz)) return true;
  }
  return false;
}

// Vật tới được (chạm, góp, thấy): cổng theo gateReachable, vật khác phải nằm trong vùng mở
export const canReach = o => o.k === 'gate' ? gateReachable(o) : isOpenCell(o.x, o.z);

// Cổng bé cần sửa để tới được vùng `id`: nếu chính cổng đó còn dưới mây (bậc đá trong rừng Tây đang đóng)
// thì chỉ tới cổng mở vùng đang che nó
export function gateFor(id, seen = new Set()) {
  const Z = ZONES.find(z => z.id === id); if (!Z?.gate || seen.has(id)) return null;
  const g = S.objs.find(o => o.k === 'gate' && o.t === Z.gate); if (!g) return null;
  const under = zoneAt(g.x, g.z);
  return gateReachable(g) ? g : gateFor(under, seen.add(id));
}
