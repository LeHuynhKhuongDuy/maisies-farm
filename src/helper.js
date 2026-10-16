// Người giúp việc (nhà tiều phu): cứ một lúc lại gom một món vật liệu vào túi, kể cả lúc tắt game.
// Bé chạm vào nhà để nhận hết, hoặc nâng cấp cho túi to hơn.
// Chỉ logic thuần (không Three/DOM) để chạy được trong node --test
import { HELPERS } from './data.js';
import { add, take, hasAll } from './state.js';

export const helperCap = o => HELPERS[o.t].cap[o.lvl || 0];
export const helperCount = o => Object.values(o.bag || {}).reduce((a, n) => a + n, 0);
export const helperFull = o => helperCount(o) >= helperCap(o);
// Nâng cấp tiếp theo: vật liệu cần (null nếu đã tối đa)
export const helperNextUp = o => HELPERS[o.t].up[o.lvl || 0] || null;

// Gọi mỗi nhịp với giờ t (ms). o.at = mốc đã tính tới; o.n = số món đã gom (để chạy vòng `gives`).
// Cứ `every` giây thêm một món cho tới khi túi đầy; tắt game lâu thì thêm bù một lượt (tối đa tới cap).
// Túi đầy thì đồng hồ chạy lại từ lúc đó (không dồn bù). Đang xây thì chưa gom. Trả số món vừa thêm.
export function helperTick(o, t) {
  const H = HELPERS[o.t]; if (!H) return 0;
  if (o.site || o.at == null || helperFull(o)) { o.at = t; return 0; }
  const every = H.every * 1000, k = Math.floor((t - o.at) / every);
  if (k <= 0) return 0;
  const bag = (o.bag ||= {}), n = Math.min(k, helperCap(o) - helperCount(o));
  for (let i = 0; i < n; i++) {
    const item = H.gives[(o.n || 0) % H.gives.length]; o.n = (o.n || 0) + 1;
    bag[item] = (bag[item] || 0) + 1;
  }
  o.at += n * every;
  if (helperFull(o)) o.at = t;
  return n;
}

// Đổ túi vào kho (vật liệu không chiếm chỗ Kho). Trả { món: số }. Đang xây thì không gom
export function helperCollect(o) {
  if (o.site) return {};
  const got = o.bag || {};
  for (const [k, n] of Object.entries(got)) add(k, n);
  o.bag = {};
  return got;
}

// Nâng cấp: đủ vật liệu thì trừ và tăng cấp. Trả true nếu nâng được
export function helperUpgrade(o) {
  const need = helperNextUp(o);
  if (!need || o.site || !hasAll(need)) return false;
  take(need);
  o.lvl = (o.lvl || 0) + 1;
  return true;
}
