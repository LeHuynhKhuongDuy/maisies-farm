// Công trường: mua xong chỉ mới là giàn giáo, bé góp vật liệu từng giai đoạn để xây xong.
// Chỉ logic thuần (không Three/DOM) để chạy được trong node --test
import { ITEMS, FACTORIES, PENS, ZONES, OBSTACLES, BUILD } from './data.js';
import { S, have, add, addXP, questEvent } from './state.js';
import { openZone, zoneOfGate } from './island.js';

// Khóa tra bảng BUILD: '<k>:<t>' — 'fac:bakery', 'pen:coop', 'gate:bridge_w' ({k:'gate', t}),
// 'ruin:boat' ({k:'ruin', t}). Ruộng, cây, đồ trang trí, thú không có trong BUILD nên không qua công trường.
export const keyOf = o => `${o.k}:${o.t}`;
const stagesOf = o => BUILD[keyOf(o)];
export const stageCount = o => stagesOf(o)?.length || 0;

// Bắt đầu công trường cho vật vừa đặt (nếu loại đó có trong BUILD)
export function startSite(o) {
  if (stagesOf(o)) o.site = { stage: 0, got: {} };
}
// Vật cũ (không có site) là đã xây xong
export const isBuilt = o => !o.site;

// Yêu cầu của giai đoạn hiện tại: { món: { need, got } }
export function siteReq(o) {
  const st = o.site && stagesOf(o)?.[o.site.stage];
  if (!st) return {};
  const out = {};
  for (const [k, need] of Object.entries(st)) out[k] = { need, got: o.site.got[k] || 0 };
  return out;
}

// Cổng chưa tới cấp mở vùng: trả cấp cần (0 nếu góp được)
export function gateLock(o) {
  if (o.k !== 'gate') return 0;
  const lv = unlockLevel(keyOf(o));
  return S.level < lv ? lv : 0;
}

// Góp một món từ kho: chuyển tối đa phần còn thiếu, không quá số đang có. Trả số đã góp
export function contribute(o, item) {
  if (gateLock(o)) return 0;
  const r = siteReq(o)[item]; if (!r) return 0;
  const n = Math.max(0, Math.min(have(item), r.need - r.got));
  if (!n) return 0;
  add(item, -n);
  o.site.got[item] = r.got + n;
  return n;
}

// Đủ hết thì sang giai đoạn sau (xp 10 * (giai đoạn + 1)); xong giai đoạn cuối thì hết công trường
export function tryAdvance(o) {
  const req = siteReq(o), ks = Object.keys(req);
  if (gateLock(o) || !ks.length || ks.some(k => req[k].got < req[k].need)) return 'none';
  addXP(10 * (o.site.stage + 1));
  o.site.stage++; o.site.got = {};
  if (o.site.stage < stagesOf(o).length) return 'stage';
  delete o.site;
  questEvent('build', keyOf(o));
  if (o.k === 'gate') openZone(zoneOfGate(o.t).id); // cổng xong: mây tan, vùng mở
  return 'done';
}

// Cấp mở công trình: lv của nhà máy/chuồng, lv của vùng mà cổng dẫn vào, tàn tích thì cấp 1
export function unlockLevel(key) {
  const [k, t] = key.split(':');
  if (k === 'fac') return FACTORIES[t]?.lv ?? 1;
  if (k === 'pen') return PENS[t]?.lv ?? 1;
  if (k === 'gate') return ZONES.find(z => z.gate === t)?.lv ?? 1;
  return 1; // ruin:*
}

// Vật liệu lấy được ở cấp lv: thô (mat 1) luôn được (chặt vật cản ở vùng lõi);
// bậc 2 thì cần một xưởng mở ở cấp ≤ lv có công thức cấp ≤ lv, và nguyên liệu vật liệu của công thức cũng lấy được
export function obtainableAt(item, lv, seen = new Set()) {
  const I = ITEMS[item];
  if (!I?.mat) return false;
  if (I.mat === 1) return true;
  if (seen.has(item)) return false; // vòng lặp công thức
  const path = new Set(seen).add(item);
  return Object.values(FACTORIES).some(F => F.lv <= lv && F.rec.some(r => r.out === item && r.lv <= lv &&
    Object.keys(r.in).every(k => !ITEMS[k]?.mat || obtainableAt(k, lv, path))));
}

// Gợi ý cho bé chỗ kiếm vật liệu còn thiếu
export function matHint(item) {
  const I = ITEMS[item]; if (!I) return '';
  if (I.mat === 1) {
    const O = Object.values(OBSTACLES).find(O => O.drop[item]) || Object.values(OBSTACLES).find(O => O.rare?.[item]);
    return O ? `Chặt ${O.n.toLowerCase()} để có ${I.n.toLowerCase()}` : '';
  }
  const F = Object.values(FACTORIES).find(F => F.rec.some(r => r.out === item));
  return F ? `Làm ở ${F.n}` : '';
}
