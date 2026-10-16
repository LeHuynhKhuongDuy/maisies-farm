// Công trường: mua xong chỉ mới là giàn giáo, bé góp vật liệu từng giai đoạn để xây xong.
// Chỉ logic thuần (không Three/DOM) để chạy được trong node --test
import { ITEMS, FACTORIES, PENS, HELPERS, ZONES, OBSTACLES, BUILD, REGROW_MIX } from './data.js';
import { S, have, add, addXP, questEvent } from './state.js';
import { openZone, zoneOfGate } from './island.js';

// Khóa tra bảng BUILD: '<k>:<t>' — 'fac:bakery', 'pen:coop', 'gate:bridge_w' ({k:'gate', t}).
// Đồ đổ nát của ván mới (site.ruin) dùng 'ruin:<t>': nhà 'ruin:house', lò bánh 'ruin:bakery', thuyền 'ruin:boat';
// sửa xong thì thành vật thường ('house:house', 'fac:bakery'...).
// Ruộng, cây, đồ trang trí, thú không có trong BUILD nên không qua công trường.
export const keyOf = o => o.site?.ruin ? 'ruin:' + o.t : `${o.k}:${o.t}`;
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

// Công trường đã qua giai đoạn cuối (bảng BUILD bị rút ngắn sau khi bé đã góp): coi như đã xây xong
export const pastLastStage = o => !!o.site && o.site.stage >= stageCount(o);

// Đủ hết thì sang giai đoạn sau (xp 10 * (giai đoạn + 1)); xong giai đoạn cuối thì hết công trường
export function tryAdvance(o) {
  if (pastLastStage(o) && !gateLock(o)) return finishSite(o);
  const req = siteReq(o), ks = Object.keys(req);
  if (gateLock(o) || !ks.length || ks.some(k => req[k].got < req[k].need)) return 'none';
  addXP(10 * (o.site.stage + 1));
  o.site.stage++; o.site.got = {};
  if (o.site.stage < stageCount(o)) return 'stage';
  return finishSite(o);
}
function finishSite(o) {
  const key = keyOf(o); // lấy trước khi xóa site: đồ đổ nát sửa xong vẫn báo 'ruin:*'
  delete o.site;
  if (key === 'ruin:boat') S.boatFixed = true; // thuyền sửa xong: mở nút Phiêu lưu
  questEvent('build', key);
  if (o.k === 'gate') openZone(zoneOfGate(o.t).id); // cổng xong: mây tan, vùng mở
  return 'done';
}

// Lúc tải bản lưu: công trường đã qua giai đoạn cuối thì hoàn tất luôn (không báo nhiệm vụ),
// cổng như vậy thì mở vùng của nó. Làm trên bản lưu `s` (chưa gán vào S)
export function normalizeSites(s) {
  for (const o of s.objs) {
    if (!pastLastStage(o)) continue;
    const key = keyOf(o);
    delete o.site;
    if (key === 'ruin:boat') s.boatFixed = true;
    if (o.k === 'gate') { const Z = zoneOfGate(o.t); if (Z) (s.zones ||= {})[Z.id] = true; }
  }
  return s;
}

// Cấp mở công trình: lv của nhà máy/chuồng, lv của vùng mà cổng dẫn vào, tàn tích thì cấp 1
export function unlockLevel(key) {
  const [k, t] = key.split(':');
  if (k === 'fac') return FACTORIES[t]?.lv ?? 1;
  if (k === 'pen') return PENS[t]?.lv ?? 1;
  if (k === 'helper') return HELPERS[t]?.lv ?? 1;
  if (k === 'gate') return ZONES.find(z => z.gate === t)?.lv ?? 1;
  return 1; // ruin:*
}

// Vật liệu thô `item` có nguồn không bao giờ cạn ở cấp lv: vật cản mọc lại trong vùng mở rơi ra nó (thường hoặc hiếm),
// hoặc một người giúp việc mở ở cấp ≤ lv gom được nó. (Rừng dưới mây hay vùng lõi chưa dọn thì có thể đã hết.)
const regrowSource = item => REGROW_MIX.find(t => OBSTACLES[t]?.drop[item]) || REGROW_MIX.find(t => OBSTACLES[t]?.rare?.[item]);
export const renewableAt = (item, lv) =>
  !!regrowSource(item) || Object.values(HELPERS).some(H => H.lv <= lv && H.gives.includes(item));

// Vật liệu lấy được (lâu dài) ở cấp lv: thô thì phải có nguồn không cạn (renewableAt);
// bậc 2 thì cần một xưởng mở ở cấp ≤ lv có công thức cấp ≤ lv, và nguyên liệu vật liệu của công thức cũng lấy được
export function obtainableAt(item, lv, seen = new Set()) {
  const I = ITEMS[item];
  if (!I?.mat) return false;
  if (I.mat === 1) return renewableAt(item, lv);
  if (seen.has(item)) return false; // vòng lặp công thức
  const path = new Set(seen).add(item);
  return Object.values(FACTORIES).some(F => F.lv <= lv && F.rec.some(r => r.out === item && r.lv <= lv &&
    Object.keys(r.in).every(k => !ITEMS[k]?.mat || obtainableAt(k, lv, path))));
}

// Gợi ý cho bé chỗ kiếm vật liệu còn thiếu
export function matHint(item) {
  const I = ITEMS[item]; if (!I) return '';
  if (I.mat === 1) {
    // ưu tiên vật cản mọc lại (luôn có trong vùng mở), rồi mới tới rừng
    const t = regrowSource(item), O = t ? OBSTACLES[t] : Object.values(OBSTACLES).find(O => O.drop[item]) || Object.values(OBSTACLES).find(O => O.rare?.[item]);
    return O ? `Chặt ${O.n.toLowerCase()} để có ${I.n.toLowerCase()}` : '';
  }
  const F = Object.values(FACTORIES).find(F => F.rec.some(r => r.out === item));
  return F ? `Làm ở ${F.n}` : '';
}
