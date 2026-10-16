// Vật liệu thô không bao giờ cạn: bản v1 cũ đã dọn sạch vùng lõi vẫn gom đủ để mở rừng Tây và rừng Bắc
import test from 'node:test';
import assert from 'node:assert/strict';
import { memStorage, v1Save, put } from './helpers.mjs';
import { S, load, have } from '../src/state.js';
import { ITEMS, FACTORIES, OBSTACLES, BUILD, REGROW_MIX } from '../src/data.js';
import { regrowTick, hitObstacle, REGROW_EVERY } from '../src/clearing.js';
import { helperTick, helperCollect } from '../src/helper.js';
import { isOpenCell, seeded } from '../src/island.js';

// Vật liệu thô cần cho các giai đoạn `stages` (bậc 2 quy ra nguyên liệu theo công thức đầu tiên làm ra nó)
function rawNeeds(stages) {
  const tier = {}, raw = {};
  for (const st of stages) for (const [k, n] of Object.entries(st)) tier[k] = (tier[k] || 0) + n;
  const addRaw = (k, n) => {
    if (ITEMS[k].mat === 1) { raw[k] = (raw[k] || 0) + n; return; }
    const r = Object.values(FACTORIES).flatMap(F => F.rec).find(r => r.out === k);
    const batches = Math.ceil(n / (r.qty || 1));
    for (const [i, q] of Object.entries(r.in)) addRaw(i, q * batches);
  };
  for (const [k, n] of Object.entries(tier)) addRaw(k, n);
  return raw;
}
const NEED = rawNeeds([...BUILD['gate:bridge_w'], BUILD['gate:bridge_n'][0]]);

// Bản v1 đã chuyển sang v2, vùng lõi không còn vật cản nào (bé đã dọn sạch nông trại cũ)
function clearedV1() {
  memStorage({ 'maisies-farm-v1': JSON.stringify(v1Save()) });
  load();
  S.objs = S.objs.filter(o => !(o.k === 'obstacle' && isOpenCell(o.x, o.z)));
  assert.equal(S.objs.filter(o => o.k === 'obstacle' && isOpenCell(o.x, o.z)).length, 0);
  S.regrowAt = 0;
}
// Mô phỏng `hours` giờ: mỗi REGROW_EVERY giây năng lượng hồi 6, bé chặt hết vật cản trong vùng mở; nhận túi nhà tiều phu nếu có
function play(hours, lj, rand) {
  const s0 = have('stone'), c0 = have('clay');
  for (let t = REGROW_EVERY * 1000; t <= hours * 3600_000; t += REGROW_EVERY * 1000) {
    regrowTick(t, rand);
    S.energy += REGROW_EVERY / 30;
    for (const o of S.objs.filter(o => o.k === 'obstacle' && isOpenCell(o.x, o.z)))
      while (S.objs.includes(o) && hitObstacle(o, rand)) { /* chặt tới hết */ }
    if (lj) { helperTick(lj, t); helperCollect(lj); }
  }
  return { stone: have('stone') - s0, clay: have('clay') - c0 };
}
const enough = () => Object.entries(NEED).filter(([k, n]) => have(k) < n).map(([k, n]) => `${k} ${have(k)}/${n}`);

test('nhu cầu thô của cầu tre (2 giai đoạn) + cầu gỗ giai đoạn 1 có dây leo', () => {
  assert.ok(NEED.liana >= 6, JSON.stringify(NEED));
});
test('bản v1 dọn sạch vùng lõi: chỉ nhờ vật cản mọc lại, trong 12 giờ đủ dây leo, gỗ, tre, lá cọ; đá và đất sét cũng có thêm', () => {
  clearedV1();
  const got = play(12, null, seeded(4242));
  assert.deepEqual(enough(), []);
  assert.ok(got.stone >= 10, 'đá ' + got.stone); assert.ok(got.clay >= 6, 'đất sét ' + got.clay);
});
test('bản v1 dọn sạch vùng lõi + nhà tiều phu: trong 3 giờ đủ hết', () => {
  clearedV1();
  const lj = put({ k: 'helper', t: 'lumberjack', lvl: 0, bag: {}, at: 0 });
  play(3, lj, seeded(99));
  assert.deepEqual(enough(), []);
});
test('mọi loại trong REGROW_MIX có regrow, và đủ nguồn gỗ, đá, đất sét, dây leo', () => {
  for (const t of REGROW_MIX) assert.ok(OBSTACLES[t]?.regrow, t);
  for (const k of ['wood', 'stone', 'clay', 'liana', 'bamboo', 'palmleaf'])
    assert.ok(REGROW_MIX.some(t => OBSTACLES[t].drop[k] || OBSTACLES[t].rare?.[k]), k);
});
