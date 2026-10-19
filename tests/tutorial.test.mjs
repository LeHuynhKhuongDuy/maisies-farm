// Task 7: ván mới bắt đầu bằng sửa nhà đổ nát, hướng dẫn 10 bước
import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, memStorage, v1Save, obstacle } from './helpers.mjs';
import { S, load, have, add, take, footprint, producible, currentQuest, claimQuest, questEvent, resetGame } from '../src/state.js';
import { activeQuests } from '../src/quests.js';
import { TUTORIAL, OFF, CORE, OBSTACLES, FACTORIES, ITEMS } from '../src/data.js';
import { keyOf, siteReq, contribute, tryAdvance, startSite } from '../src/build.js';
import { hitObstacle, nearestObstacle, cellDist, basicDrop } from '../src/clearing.js';
import { isOpenCell, zoneAt } from '../src/island.js';

const KEY = 'maisies-farm-v1';
const ruins = () => S.objs.filter(o => o.site?.ruin);
const ruin = key => S.objs.find(o => o.site?.ruin && keyOf(o) === key);
const CX = 12 + OFF, CZ = 10 + OFF; // giữa nông trại, chỗ bàn tay tìm vật cản gần nhất
// Góp đủ mọi giai đoạn đang có vật liệu, trả kết quả tryAdvance cuối
const build = o => { let r; do { for (const k of Object.keys(siteReq(o))) contribute(o, k); r = tryAdvance(o); } while (r === 'stage'); return r; };

test('ván mới: nhà, lò bánh, thuyền là đồ đổ nát; hướng dẫn ở bước 0; thuyền chưa sửa', () => {
  fresh();
  assert.equal(S.tut, 0); assert.equal(S.boatFixed, false);
  assert.deepEqual(ruins().map(keyOf).sort(), ['ruin:bakery', 'ruin:boat', 'ruin:house']);
  for (const o of ruins()) assert.deepEqual(o.site, { stage: 0, got: {}, ruin: true });
  const house = ruin('ruin:house'), bakery = ruin('ruin:bakery'), boat = ruin('ruin:boat');
  assert.deepEqual([house.k, house.t, house.x, house.z], ['house', 'house', 11 + OFF, 4 + OFF]); // nhà vẫn ở chỗ cũ
  assert.equal(bakery.k, 'fac'); assert.equal(bakery.t, 'bakery'); assert.deepEqual(bakery.jobs, []);
  assert.equal(boat.k, 'boat'); assert.equal(boat.t, 'boat'); assert.deepEqual(footprint(boat), [2, 2]);
  assert.equal(boat.z + 2, CORE + OFF); // sát bờ Nam, cạnh bến
  assert.ok(Math.abs(boat.x - (17 + OFF)) <= 3);
  for (const o of ruins()) assert.ok(isOpenCell(o.x, o.z));
  assert.equal(have('wood'), 4); assert.equal(have('palmleaf'), 4); // đủ sửa nhà ngay
  assert.equal(have('wheat'), 4); assert.equal(have('chickenfeed'), 2);
});

test('ván mới: không vật nào chồng nhau; rừng dày ở nửa Tây vùng lõi, đủ gỗ, đá, lá cọ gần nhà', () => {
  fresh();
  const seen = new Set();
  for (const o of S.objs) { const [w, d] = footprint(o); for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) { const k = (o.x + i) + ',' + (o.z + j); assert.ok(!seen.has(k), k); seen.add(k); } }
  const west = S.objs.filter(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === 'core' && o.x < OFF + 13);
  const east = S.objs.filter(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === 'core' && o.x >= OFF + 13);
  assert.ok(west.length > east.length * 1.5, `Tây ${west.length}, Đông ${east.length}`);
  const near = west.filter(o => Math.hypot(o.x - CX, o.z - CZ) <= 12);
  for (const item of ['wood', 'stone', 'palmleaf']) assert.ok(near.filter(o => OBSTACLES[o.t].drop[item]).length >= 3, item);
});

test('TUTORIAL: 10 bước đúng thứ tự, thưởng xu 15–40, xp 5–12, bước 1, 5, 9 thêm 10 năng lượng', () => {
  assert.equal(TUTORIAL.length, 10);
  assert.deepEqual(TUTORIAL.map(q => [q.who, q.ev, q.key ?? null, q.n]), [
    ['maisie', 'build', 'ruin:house', 1], ['maisie', 'harvest', 'wheat', 3], ['tom', 'feed', null, 1],
    ['maisie', 'clear', null, 3], ['ben', 'build', 'ruin:bakery', 1], ['ben', 'make', 'bread', 1],
    ['sam', 'build', 'fac:carpentry', 1], ['sam', 'make', 'planks', 3], ['sam', 'build', 'ruin:boat', 1], ['maisie', 'sail', null, 1],
  ]);
  assert.equal(TUTORIAL[0].text, 'Bão làm nhà mình hỏng mất rồi! Góp gỗ và lá cọ để sửa nhà nhé.');
  assert.equal(TUTORIAL[9].text, 'Thuyền xong rồi! Mình cùng ra khơi phiêu lưu nào!');
  TUTORIAL.forEach((q, i) => {
    assert.ok(q.coins >= 15 && q.coins <= 40, 'xu ' + i); assert.ok(q.xp >= 5 && q.xp <= 12, 'xp ' + i);
    assert.equal(q.energy || 0, [0, 4, 8].includes(i) ? 10 : 0, 'năng lượng ' + i);
  });
});

test('bánh mì nướng được từ cấp 1 (bước 6 của hướng dẫn)', () => {
  assert.equal(FACTORIES.bakery.rec.find(r => r.out === 'bread').lv, 1);
  assert.ok(ITEMS.bread.energy > 0);
});

test('sửa xong: nhà là nhà thường, lò bánh là nhà máy làm bánh mì ở cấp 1, thuyền sửa thì mở phiêu lưu', () => {
  fresh(); S.inv = { wood: 99, stone: 99, palmleaf: 99, planks: 99 };
  for (const key of ['ruin:house', 'ruin:bakery', 'ruin:boat']) assert.equal(build(ruin(key)), 'done', key);
  assert.equal(ruins().length, 0);
  const house = S.objs.find(o => o.k === 'house'), bakery = S.objs.find(o => o.k === 'fac' && o.t === 'bakery');
  assert.equal(house.site, undefined); assert.equal(keyOf(house), 'house:house');
  assert.equal(bakery.site, undefined); assert.equal(keyOf(bakery), 'fac:bakery'); assert.deepEqual(bakery.jobs, []);
  assert.equal(S.level >= 1, true); S.level = 1;
  assert.ok(producible().includes('bread'));
  assert.equal(S.boatFixed, true);
});

test('sửa đồ đổ nát báo nhiệm vụ đúng khóa ruin:*', () => {
  fresh(); S.inv = { wood: 4, palmleaf: 4 };
  assert.equal(currentQuest(), TUTORIAL[0]);
  build(ruin('ruin:house'));
  assert.equal(S.qprog, 1);
  const e = S.energy, c = S.coins;
  assert.equal(claimQuest(), TUTORIAL[0]);
  assert.equal(S.tut, 1); assert.equal(S.qprog, 0);
  assert.equal(S.energy, e + 10); assert.equal(S.coins, c + TUTORIAL[0].coins);
  assert.equal(currentQuest(), TUTORIAL[1]);
});

test('công trình xây trước khi tới bước của nó thì bước đó tự xong (không kẹt)', () => {
  fresh(); S.inv = { wood: 99, stone: 99, palmleaf: 99 };
  build(ruin('ruin:bakery')); // bé sửa lò bánh sớm, khi đang ở bước 1
  assert.equal(S.qprog, 0);
  S.tut = 4; S.qprog = 0; // tới bước sửa lò bánh
  assert.equal(currentQuest(), TUTORIAL[4]); assert.equal(S.qprog, 1);
  assert.ok(claimQuest()); assert.equal(S.tut, 5);
  S.tut = 6; S.qprog = 0; // mua xưởng mộc chưa xây xong: chưa tính
  const f = { id: 9999, k: 'fac', t: 'carpentry', jobs: [], x: 0, z: 0 }; startSite(f); S.objs.push(f);
  currentQuest(); assert.equal(S.qprog, 0);
  delete f.site; currentQuest(); assert.equal(S.qprog, 1);
});

test('đi hết hướng dẫn thì currentQuest() là null và activeQuests() có ve-dao:0', () => {
  fresh({ level: 2 }); S.inv = { wood: 99, stone: 99, palmleaf: 99, planks: 99 };
  const fire = {
    build: q => { const o = q.key.startsWith('ruin:') ? ruin(q.key) : null; if (o) build(o); else questEvent('build', q.key); },
    harvest: q => questEvent('harvest', q.key, 2),
    make: q => questEvent('make', q.key, 1),
    feed: () => questEvent('feed'), clear: () => questEvent('clear'), sail: () => questEvent('sail'),
  };
  for (let i = 0; i < TUTORIAL.length; i++) {
    const q = currentQuest(); assert.equal(q, TUTORIAL[i]);
    for (let g = 0; S.qprog < q.n && g < 10; g++) fire[q.ev](q);
    assert.equal(claimQuest(), q, 'bước ' + (i + 1));
  }
  assert.equal(S.tut, TUTORIAL.length);
  assert.equal(currentQuest(), null);
  assert.ok(activeQuests().some(q => q.id === 've-dao:0'));
  assert.equal(S.boatFixed, true);
});

test('chơi thật cả 10 bước ở cấp 1: không bao giờ kẹt năng lượng hay vật liệu', () => {
  fresh();
  const lo = () => 0; // rơi ít nhất, không mở rương (bất lợi nhất)
  let regen = 0, chops = 0;
  const hit = o => {
    if (S.energy < 1) { if (have('bread')) { add('bread', -1); S.energy += ITEMS.bread.energy; } else { regen++; S.energy += 1; } }
    assert.ok(hitObstacle(o, lo)); chops++;
  };
  // chặt vật cản gần nhất (như bàn tay chỉ) rơi `item` tới khi đủ `need`
  const gather = (item, need) => {
    while (have(item) < need) {
      const o = nearestObstacle(x => OBSTACLES[x.t].drop[item], cellDist(CX, CZ)); assert.ok(o, 'hết chỗ lấy ' + item);
      while (S.objs.includes(o) && have(item) < need) hit(o);
    }
  };
  const repair = o => { for (const [k, r] of Object.entries(siteReq(o))) gather(k, r.need - r.got); assert.equal(build(o), 'done'); };
  const step = (i, act) => { assert.equal(currentQuest(), TUTORIAL[i]); act(); assert.ok(claimQuest(), 'bước ' + (i + 1)); };

  step(0, () => repair(ruin('ruin:house')));
  step(1, () => { for (let k = 0; k < 2; k++) { add('wheat', 2); questEvent('harvest', 'wheat', 2); } });
  step(2, () => { take({ chickenfeed: 2 }); questEvent('feed'); });
  step(3, () => { for (let k = 0; k < 3; k++) { const o = nearestObstacle(basicDrop, cellDist(CX, CZ)); while (S.objs.includes(o)) hit(o); questEvent('clear'); } });
  step(4, () => repair(ruin('ruin:bakery')));
  step(5, () => { take({ wheat: 3 }); add('bread', 1); questEvent('make', 'bread', 1); });
  step(6, () => {
    S.coins -= FACTORIES.carpentry.cost; assert.ok(S.coins >= 0);
    const f = { id: 9999, k: 'fac', t: 'carpentry', jobs: [], x: 0, z: 0 }; startSite(f); S.objs.push(f); repair(f);
  });
  step(7, () => { for (let k = 0; k < 2; k++) { gather('wood', 3); take({ wood: 3 }); add('planks', 2); questEvent('make', 'planks', 2); } });
  step(8, () => repair(ruin('ruin:boat')));
  step(9, () => questEvent('sail'));
  assert.equal(S.tut, TUTORIAL.length);
  assert.ok(S.energy >= 0);
  // không phải ngồi chờ năng lượng hồi lần nào (hiện ~31 nhát, xong vẫn còn ~33 năng lượng)
  assert.equal(regen, 0, `phải chờ hồi ${regen} năng lượng (${chops} nhát)`);
});

test('bản v1 chuyển sang: bỏ qua hướng dẫn, có 2–4 nhiệm vụ', () => {
  memStorage({ [KEY]: JSON.stringify(v1Save()) });
  load();
  assert.ok(S.tut >= TUTORIAL.length); assert.equal(S.boatFixed, true);
  const n = activeQuests().length; assert.ok(n >= 2 && n <= 4);
});

test('bản v2 cũ (trước Task 7, không có thuyền): coi như đã xong hướng dẫn, thuyền đã sửa', () => {
  memStorage({}); resetGame();
  const old = JSON.parse(localStorage.getItem(KEY));
  old.objs = old.objs.filter(o => o.k !== 'boat'); old.objs.forEach(o => { if (o.site?.ruin) delete o.site; });
  old.tut = 0; delete old.boatFixed; old.quest = 3; old.qprog = 1;
  memStorage({ [KEY]: JSON.stringify(old) });
  load();
  assert.ok(S.tut >= TUTORIAL.length); assert.equal(S.boatFixed, true);
  const n = activeQuests().length; assert.ok(n >= 2 && n <= 4);
});

test('bản v2 đang giữa hướng dẫn giữ nguyên tiến độ', () => {
  memStorage({}); resetGame(); S.tut = 4; S.qprog = 0;
  const saved = localStorage.getItem(KEY); localStorage.setItem(KEY, JSON.stringify({ ...JSON.parse(saved), tut: 4 }));
  load();
  assert.equal(S.tut, 4); assert.equal(S.boatFixed, false); assert.equal(currentQuest(), TUTORIAL[4]);
});

test('nearestObstacle: vật cản gần nhất (theo dist) trong vùng mở thỏa điều kiện', () => {
  fresh();
  const o = nearestObstacle(x => OBSTACLES[x.t].drop.stone, cellDist(CX, CZ));
  assert.ok(o && OBSTACLES[o.t].drop.stone && isOpenCell(o.x, o.z));
  const d = Math.hypot(o.x - CX, o.z - CZ);
  assert.ok(S.objs.every(x => x.k !== 'obstacle' || !OBSTACLES[x.t].drop.stone || !isOpenCell(x.x, x.z) || Math.hypot(x.x - CX, x.z - CZ) >= d));
  assert.equal(nearestObstacle(() => false, cellDist(CX, CZ)), null);
  assert.ok(basicDrop({ t: 'bush' }) && basicDrop({ t: 'logs' }) && basicDrop({ t: 'rock' }) && !basicDrop({ t: 'claymound' }) && !basicDrop({ t: 'bamboo' }));
});
