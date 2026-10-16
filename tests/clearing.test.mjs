import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, obstacle, fillBarnToCap } from './helpers.mjs';
import { S, have, barnUsed, barnRoom } from '../src/state.js';
import { OBSTACLES, ITEMS, JUNGLE_MIX } from '../src/data.js';
import { hitObstacle, rollChest } from '../src/clearing.js';

test('mỗi nhát trừ 1 năng lượng và rơi vật liệu', () => {
  fresh({ energy: 5 }); const o = obstacle('tree');
  const r = hitObstacle(o, () => 0.99); // không rơi hiếm, không rương
  assert.equal(S.energy, 4); assert.equal(o.hp, 5); assert.equal(have('wood'), 1); assert.equal(r.done, false);
});
test('nhát cuối xóa vật cản, cộng xp thưởng, có thể ra rương', () => {
  fresh({ energy: 9 }); const o = obstacle('stump'); o.hp = 1;
  const r = hitObstacle(o, () => 0.0); // rand thấp → có rương
  assert.equal(r.done, true); assert.ok(!S.objs.includes(o)); assert.ok(r.chest);
  assert.equal(r.xp, 3);
});
test('hết năng lượng thì không chặt, năng lượng không âm', () => {
  fresh({ energy: 0 }); const o = obstacle('rock');
  assert.equal(hitObstacle(o), null); assert.equal(S.energy, 0); assert.equal(o.hp, 4);
});
test('kho nông sản đầy vẫn nhận vật liệu', () => {
  fresh({ energy: 3 }); fillBarnToCap(); const o = obstacle('bush');
  hitObstacle(o, () => 0.99); assert.equal(have('palmleaf'), 1); assert.equal(barnRoom(), 0);
});
test('barnUsed bỏ qua vật liệu', () => { fresh(); S.inv = { wheat: 3, wood: 50, planks: 9 }; assert.equal(barnUsed(), 3); });

test('vật cản chưa có hp (rừng sinh sẵn) được gán hp khi chặt', () => {
  fresh({ energy: 5 }); const o = obstacle('rock'); delete o.hp;
  hitObstacle(o, () => 0.99); assert.equal(o.hp, 3);
});
test('rơi hiếm và rương: rand thấp ra dây leo, rương cộng đồ', () => {
  fresh({ energy: 5, coins: 0 }); const o = obstacle('tree');
  const r = hitObstacle(o, () => 0.0);
  assert.equal(have('liana'), 1); assert.equal(r.drops.liana, 1); assert.equal(r.chest, null); // chưa xong thì chưa có rương
  o.hp = 1; const e0 = S.energy, c0 = S.coins;
  const r2 = hitObstacle(o, () => 0.0);
  assert.ok(r2.chest && r2.chest.energy >= 3 && S.coins >= c0 + 5 && S.energy >= e0 - 1 + 3);
  const matN = Object.values(r2.chest.mats)[0]; assert.ok(matN >= 2 && matN <= 4);
});
test('rollChest: năng lượng 3..8, xu 5..20, một vật liệu thô 2..4', () => {
  for (const v of [0, 0.5, 0.999]) {
    const c = rollChest(() => v), ks = Object.keys(c.mats);
    assert.ok(c.energy >= 3 && c.energy <= 8 && c.coins >= 5 && c.coins <= 20);
    assert.equal(ks.length, 1); assert.equal(ITEMS[ks[0]].mat, 1); assert.ok(c.mats[ks[0]] >= 2 && c.mats[ks[0]] <= 4);
  }
});
test('dữ liệu: 10 loại vật cản, mọi loại rơi đồ là vật liệu thô, 5 loại cũ còn nguyên', () => {
  for (const t of ['grass', 'bush', 'bamboo', 'stump', 'logs', 'rock', 'claymound', 'tree', 'bigtree', 'bigrock']) {
    const O = OBSTACLES[t]; assert.ok(O && O.hp > 0, t);
    for (const k of Object.keys(O.drop)) assert.equal(ITEMS[k].mat, 1, t + ' ' + k);
    for (const k of Object.keys(O.rare || {})) assert.equal(ITEMS[k].mat, 1);
  }
  assert.deepEqual(['wood', 'stone', 'bamboo', 'palmleaf', 'clay', 'liana'].map(k => ITEMS[k].mat), [1, 1, 1, 1, 1, 1]);
  assert.deepEqual(['planks', 'rack', 'firewood', 'basket', 'reedmat', 'rope', 'torch'].map(k => ITEMS[k].mat), [2, 2, 2, 2, 2, 2, 2]);
  assert.equal(ITEMS.bread.energy, 4); assert.equal(ITEMS.cookie.energy, 5);
  assert.ok(!JUNGLE_MIX.core.some(t => t.startsWith('big')) && !JUNGLE_MIX.west.some(t => t.startsWith('big')));
  assert.ok(JUNGLE_MIX.north.includes('bigtree') && JUNGLE_MIX.old.includes('bigrock'));
});
test('chặt liên tục tới hết năng lượng thì dừng, không âm', () => {
  fresh({ energy: 3 }); const o = obstacle('bigtree'); let n = 0;
  while (hitObstacle(o, () => 0.99)) n++;
  assert.equal(n, 3); assert.equal(S.energy, 0); assert.equal(o.hp, 9);
});
