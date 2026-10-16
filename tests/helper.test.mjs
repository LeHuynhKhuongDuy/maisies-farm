import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put } from './helpers.mjs';
import { S, have } from '../src/state.js';
import { HELPERS, BUILD } from '../src/data.js';
import { helperTick, helperCollect, helperUpgrade, helperCount, helperFull } from '../src/helper.js';
import { unlockLevel, startSite, keyOf } from '../src/build.js';

const T0 = 1e12;
const mk = (over = {}) => put({ k: 'helper', t: 'lumberjack', lvl: 0, bag: {}, at: T0, ...over });

test('dữ liệu nhà tiều phu đúng thông số', () => {
  const H = HELPERS.lumberjack;
  assert.equal(H.n, 'Nhà tiều phu'); assert.equal(H.lv, 2); assert.equal(H.cost, 80); assert.equal(H.every, 90);
  assert.deepEqual(H.gives, ['wood', 'wood', 'bamboo', 'palmleaf']);
  assert.deepEqual(H.cap, [10, 20, 30]);
  assert.deepEqual(H.up, [{ planks: 6, rope: 2 }, { planks: 12, rack: 4 }]);
  assert.deepEqual(BUILD['helper:lumberjack'], [{ wood: 8, stone: 4 }]);
  assert.equal(unlockLevel('helper:lumberjack'), 2);
  assert.equal(keyOf({ k: 'helper', t: 'lumberjack' }), 'helper:lumberjack');
});
test('chưa đủ 90 giây thì chưa có món nào', () => {
  fresh(); const o = mk();
  assert.equal(helperTick(o, T0 + 89999), 0); assert.equal(helperCount(o), 0);
});
test('tắt game 10 phút: đúng floor(600/90) = 6 món, lần lượt theo gives', () => {
  fresh(); const o = mk();
  assert.equal(helperTick(o, T0 + 600 * 1000), 6);
  assert.equal(helperCount(o), 6);
  assert.deepEqual(o.bag, { wood: 4, bamboo: 1, palmleaf: 1 });
});
test('gọi lại nhiều lần không tính trùng; phần dư giây được giữ', () => {
  fresh(); const o = mk();
  helperTick(o, T0 + 100000); helperTick(o, T0 + 100000);
  assert.equal(helperCount(o), 1);
  helperTick(o, T0 + 180000); // đủ 2 chu kỳ từ đầu
  assert.equal(helperCount(o), 2);
});
test('không vượt cap; đầy thì đồng hồ chạy lại từ lúc đầy (không dồn bù)', () => {
  fresh(); const o = mk();
  helperTick(o, T0 + 100 * 3600 * 1000);
  assert.equal(helperCount(o), 10); assert.ok(helperFull(o));
  const full = T0 + 100 * 3600 * 1000;
  helperCollect(o);
  helperTick(o, full + 89000); assert.equal(helperCount(o), 0);
  helperTick(o, full + 90000); assert.equal(helperCount(o), 1);
});
test('món tiếp theo nối tiếp vòng gives sau khi nhận', () => {
  fresh(); const o = mk();
  helperTick(o, T0 + 90000 * 3); // wood wood bamboo
  helperCollect(o);
  helperTick(o, T0 + 90000 * 4); // palmleaf
  assert.deepEqual(o.bag, { palmleaf: 1 });
});
test('helperCollect đổ túi vào kho (kể cả khi Kho nông sản đầy) và làm rỗng túi', () => {
  fresh({ inv: { wood: 1 } }); const o = mk();
  helperTick(o, T0 + 600 * 1000);
  const got = helperCollect(o);
  assert.deepEqual(got, { wood: 4, bamboo: 1, palmleaf: 1 });
  assert.equal(have('wood'), 5); assert.equal(have('bamboo'), 1); assert.equal(have('palmleaf'), 1);
  assert.deepEqual(o.bag, {}); assert.equal(helperCount(o), 0);
  assert.deepEqual(helperCollect(o), {});
});
test('đang có công trường thì không gom và không gom bù', () => {
  fresh(); const o = mk(); startSite(o);
  assert.equal(helperTick(o, T0 + 600 * 1000), 0); assert.equal(helperCount(o), 0);
  assert.deepEqual(helperCollect(o), {});
  delete o.site;
  helperTick(o, T0 + 600 * 1000 + 89000); assert.equal(helperCount(o), 0, 'tính từ lúc xây xong');
  helperTick(o, T0 + 600 * 1000 + 90000); assert.equal(helperCount(o), 1);
});
test('cap tăng theo cấp nâng', () => {
  fresh(); const o = mk({ lvl: 2 });
  helperTick(o, T0 + 1000 * 3600 * 1000);
  assert.equal(helperCount(o), 30);
});
test('nâng cấp thiếu vật liệu trả false, kho và cấp không đổi', () => {
  fresh({ inv: { planks: 6, rope: 1 } }); const o = mk();
  assert.equal(helperUpgrade(o), false);
  assert.equal(o.lvl, 0); assert.equal(have('planks'), 6); assert.equal(have('rope'), 1);
});
test('nâng cấp đủ vật liệu: trừ kho, tăng cấp; tối đa cấp 2', () => {
  fresh({ inv: { planks: 20, rope: 2, rack: 4 } }); const o = mk();
  assert.equal(helperUpgrade(o), true); assert.equal(o.lvl, 1);
  assert.equal(have('planks'), 14); assert.equal(have('rope'), 0);
  assert.equal(helperUpgrade(o), true); assert.equal(o.lvl, 2);
  assert.equal(have('planks'), 2); assert.equal(have('rack'), 0);
  S.inv = { planks: 99, rope: 9, rack: 9 };
  assert.equal(helperUpgrade(o), false); assert.equal(o.lvl, 2); assert.equal(have('planks'), 99);
});
test('lvl thiếu trong bản lưu coi như 0; at thiếu thì bắt đầu từ bây giờ', () => {
  fresh(); const o = put({ k: 'helper', t: 'lumberjack' });
  helperTick(o, T0); assert.equal(o.at, T0); assert.equal(helperCount(o), 0);
  helperTick(o, T0 + 90000); assert.equal(helperCount(o), 1);
});
