import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, obstacle, fillBarnToCap, put } from './helpers.mjs';
import { S, have, barnUsed, barnRoom } from '../src/state.js';
import { OBSTACLES, ITEMS, JUNGLE_MIX } from '../src/data.js';
import { hitObstacle, rollChest, openChest, regrowTick } from '../src/clearing.js';
import { isOpenCell, zoneAt } from '../src/island.js';

test('mỗi nhát trừ 1 năng lượng và rơi vật liệu', () => {
  fresh({ energy: 5 }); const o = obstacle('tree'), w0 = have('wood'); // ván mới có sẵn ít gỗ để sửa nhà
  const r = hitObstacle(o, () => 0.99); // không rơi hiếm, không rương
  assert.equal(S.energy, 4); assert.equal(o.hp, 5); assert.equal(have('wood'), w0 + 1); assert.equal(r.done, false);
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
  fresh({ energy: 3 }); fillBarnToCap(); const o = obstacle('bush'), p0 = have('palmleaf');
  hitObstacle(o, () => 0.99); assert.equal(have('palmleaf'), p0 + 1); assert.equal(barnRoom(), 0);
});
test('barnUsed bỏ qua vật liệu', () => { fresh(); S.inv = { wheat: 3, wood: 50, planks: 9 }; assert.equal(barnUsed(), 3); });

test('vật cản chưa có hp (rừng sinh sẵn) được gán hp khi chặt', () => {
  fresh({ energy: 5 }); const o = obstacle('rock'); delete o.hp;
  hitObstacle(o, () => 0.99); assert.equal(o.hp, 3);
});
test('rơi hiếm và rương: rand thấp ra dây leo, rương chỉ trả về, chưa cộng', () => {
  fresh({ energy: 5, coins: 0 }); const o = obstacle('tree');
  const r = hitObstacle(o, () => 0.0);
  assert.equal(have('liana'), 1); assert.equal(r.drops.liana, 1); assert.equal(r.chest, null); // chưa xong thì chưa có rương
  o.hp = 1; const e0 = S.energy, c0 = S.coins, inv0 = { ...S.inv };
  const r2 = hitObstacle(o, () => 0.0);
  assert.ok(r2.chest && r2.chest.energy >= 3);
  assert.equal(S.coins, c0); assert.equal(S.energy, e0 - 1); // chạm rương mới nhận quà
  const [mk, matN] = Object.entries(r2.chest.mats)[0]; assert.ok(matN >= 2 && matN <= 4);
  assert.equal(have(mk), (inv0[mk] || 0) + (r2.drops[mk] || 0));
});
test('openChest: nhận quà đúng một lần, xóa rương', () => {
  fresh({ energy: 2, coins: 0 });
  const loot = put({ k: 'loot', t: 'chest', r: 0, chest: { energy: 4, coins: 7, mats: { stone: 3 } } });
  const r = openChest(loot);
  assert.deepEqual(r, { energy: 4, coins: 7, mats: { stone: 3 } });
  assert.equal(S.energy, 6); assert.equal(S.coins, 7); assert.equal(have('stone'), 3); assert.ok(!S.objs.includes(loot));
  assert.equal(openChest(loot), null);
  assert.equal(S.energy, 6); assert.equal(S.coins, 7); assert.equal(have('stone'), 3);
});

test('mọc lại khi vùng mở còn ít bụi', () => { fresh(); S.objs = S.objs.filter(o => o.k !== 'obstacle'); S.regrowAt = 0;
  const o = regrowTick(200_000, () => 0.5); assert.ok(o && ['grass','bush','bamboo'].includes(o.t)); assert.ok(isOpenCell(o.x, o.z)); });
test('không mọc khi chưa tới giờ hoặc đã đủ', () => { fresh(); S.regrowAt = 1e12; assert.equal(regrowTick(0), null); });
test('không mọc vào vùng đóng', () => {
  fresh(); S.objs = S.objs.filter(o => !(o.k === 'obstacle' && OBSTACLES[o.t].regrow && isOpenCell(o.x, o.z))); S.regrowAt = 0;
  let n = 0;
  for (let i = 0; i < 50; i++) { const o = regrowTick(200_000 * (i + 1)); if (o) { n++; assert.equal(zoneAt(o.x, o.z), 'core'); } }
  assert.ok(n >= 1, 'phải có ít nhất một bụi mọc lại');
});
test('mọc lại: vật mới nằm trong S.objs, ô trống, không kề công trình, hẹn mốc sau', () => {
  fresh(); S.objs = S.objs.filter(o => o.k !== 'obstacle'); S.regrowAt = 0;
  const t = 500_000, o = regrowTick(t, () => 0.3);
  assert.ok(S.objs.includes(o)); assert.equal(o.k, 'obstacle'); assert.equal(o.hp, OBSTACLES[o.t].hp); assert.ok(o.id);
  assert.equal(S.objs.filter(p => p.x === o.x && p.z === o.z).length, 1);
  for (const p of S.objs) if (p !== o && p.k !== 'obstacle') {
    const w = p.k === 'house' || p.k === 'pen' ? 3 : p.k === 'fac' || p.k === 'barn' || p.k === 'market' ? 2 : p.k === 'board' ? 2 : 1;
    const d = p.k === 'house' || p.k === 'pen' ? 3 : p.k === 'fac' || p.k === 'barn' || p.k === 'market' ? 2 : 1;
    assert.ok(o.x < p.x - 1 || o.x > p.x + w || o.z < p.z - 1 || o.z > p.z + d, `kề ${p.k} ${p.t}`);
  }
  assert.equal(S.regrowAt, t + 180_000);
  assert.equal(regrowTick(t + 1000), null); // chưa tới mốc
});
test('đủ 8 vật cản mọc lại trong vùng mở thì không mọc thêm', () => {
  fresh(); S.objs = S.objs.filter(o => o.k !== 'obstacle');
  for (let i = 0; i < 8; i++) obstacle('grass');
  S.regrowAt = 0; assert.equal(regrowTick(1e6), null);
  S.objs.pop(); S.regrowAt = 0; assert.ok(regrowTick(2e6));
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
