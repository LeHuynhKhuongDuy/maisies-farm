// Chặt vật cản nhiều nhát: trừ năng lượng, rơi vật liệu, rương. Chỉ logic thuần (không Three/DOM) để chạy được trong node
import { ITEMS, OBSTACLES } from './data.js';
import { S, add, addXP } from './state.js';

const between = (rand, [lo, hi]) => lo + Math.floor(rand() * (hi - lo + 1));
const RAW = () => Object.keys(ITEMS).filter(k => ITEMS[k].mat === 1);

// Rương: năng lượng 3..8, xu 5..20, một loại vật liệu thô 2..4
export function rollChest(rand = Math.random) {
  const raw = RAW();
  return {
    energy: between(rand, [3, 8]),
    coins: between(rand, [5, 20]),
    mats: { [raw[Math.min(raw.length - 1, Math.floor(rand() * raw.length))]]: between(rand, [2, 4]) },
  };
}

// Một nhát chặt. Trả null nếu hết năng lượng (hoặc vật cản đã bị chặt xong rồi), không trừ gì cả.
// Rương (nếu có) được cộng ngay vào kho/xu/năng lượng; giao diện chỉ việc hiển thị.
export function hitObstacle(o, rand = Math.random) {
  const O = OBSTACLES[o.t];
  if (!O || S.energy < 1 || !S.objs.includes(o)) return null;
  if (o.hp == null) o.hp = O.hp;
  S.energy -= 1;
  o.hp -= 1;
  const drops = {};
  const give = (k, n) => { drops[k] = (drops[k] || 0) + n; add(k, n); };
  for (const [k, range] of Object.entries(O.drop)) give(k, between(rand, range));
  for (const [k, p] of Object.entries(O.rare || {})) if (rand() < p) give(k, 1);
  const done = o.hp <= 0;
  let chest = null, xp = 1;
  if (done) {
    S.objs.splice(S.objs.indexOf(o), 1);
    xp += 2;
    if (rand() < O.chest) {
      chest = rollChest(rand);
      S.energy += chest.energy; S.coins += chest.coins;
      for (const [k, n] of Object.entries(chest.mats)) add(k, n);
    }
  }
  addXP(xp);
  return { drops, xp, done, chest };
}
