// Đồ dùng chung cho các bài kiểm thử (chạy bằng node --test, không cần trình duyệt)
import { S, resetGame, findFree, footprint, barnCap, barnUsed } from '../src/state.js';
import { OBSTACLES } from '../src/data.js';

// localStorage giả lưu trong bộ nhớ
export function memStorage(initial = {}) {
  const m = new Map(Object.entries(initial));
  globalThis.localStorage = {
    getItem: k => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => void m.set(k, String(v)),
    removeItem: k => void m.delete(k),
    clear: () => m.clear(),
  };
  return globalThis.localStorage;
}

// Một bản lưu v1 mẫu: cấp 15, kho đầy, đủ loại công trình, vật cản, phiêu lưu có tiến độ
export function v1Save() {
  const t = 1.7e12, objs = [];
  const add = o => objs.push({ id: objs.length + 1, r: 0, ...o });
  add({ k: 'house', t: 'house', x: 11, z: 4 });
  add({ k: 'barn', t: 'barn', x: 15, z: 5 });
  add({ k: 'market', t: 'market', x: 6, z: 12, slots: [null, null, null, null], cap: 4 });
  for (let i = 0; i < 10; i++) add({ k: 'field', t: 'field', x: 6 + (i % 5), z: 8 + Math.floor(i / 5), crop: i % 2 ? 'wheat' : null, s: t, e: t + 5000 });
  ['coop', 'cowpen', 'pigpen', 'beehive'].forEach((p, i) => add({ k: 'pen', t: p, x: 2 + i * 4, z: 18, animals: [{ s: 0, e: 0 }, { s: 0, e: 0 }] }));
  ['feedmill', 'bakery', 'sweets', 'kitchen', 'seafood', 'jammaker', 'dairy'].forEach((f, i) => add({ k: 'fac', t: f, x: 1 + i * 3, z: 22, jobs: [] }));
  add({ k: 'board', t: 'board', x: 8, z: 13 });
  add({ k: 'tree', t: 'palm', x: 17, z: 14, s: t, e: t });
  add({ k: 'decor', t: 'path', x: 12, z: 7 });
  add({ k: 'decor', t: 'flowerbed', x: 11, z: 7 });
  add({ k: 'decor', t: 'bush', x: 18, z: 6 });
  ['bush', 'rock', 'stump', 'tree', 'logs'].forEach((o, i) => add({ k: 'obstacle', t: o, x: 0, z: i }));
  return {
    v: 1, ffsDeco: true, coins: 4321, gems: 77, xp: 12, level: 15, energy: 30, energyAt: t,
    inv: { wheat: 40, corn: 30, egg: 12, chickenfeed: 3 }, barnLvl: 2,
    objs, nextId: objs.length + 1,
    orders: [null, null, null, null, null, null], ship: { st: 'away', backAt: t },
    quest: 9, qprog: 2, lastDaily: '', sound: true, music: true, seed: 'wheat',
    adv: { island1: { open: [1, 2], chests: [0], done: false, runs: 3 } },
    visitors: [{ id: 1, who: 'tom', item: 'wheat', n: 2, x: 9, z: 10, text: 'Xin chào' }], visitId: 1,
    coll: { shell: 2 },
  };
}

// Ván mới tinh (tuỳ chọn ghi đè một vài trường)
export function fresh(over = {}) {
  memStorage({});
  resetGame();
  Object.assign(S, over);
  return S;
}

// Đặt một vật vào ô trống đang mở gần tâm vùng lõi
export function put(obj) {
  const [w, d] = footprint(obj);
  const spot = findFree(w, d);
  obj.id = (S.nextId = (S.nextId || 1) + 1);
  obj.x = spot[0]; obj.z = spot[1];
  S.objs.push(obj);
  return obj;
}
export const obstacle = t => put({ k: 'obstacle', t, r: 0, hp: OBSTACLES[t].hp });

// Làm đầy Kho bằng lúa mì
export function fillBarnToCap() { S.inv.wheat = barnCap() - barnUsed() + (S.inv.wheat || 0); }
