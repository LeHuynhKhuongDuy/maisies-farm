import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put } from './helpers.mjs';
import { S, producible, genOrder, newShip } from '../src/state.js';
import { ITEMS, FACTORIES } from '../src/data.js';

test('mọi nguyên liệu và thành phẩm của mọi công thức đều có trong ITEMS', () => {
  for (const [fk, F] of Object.entries(FACTORIES)) for (const r of F.rec) {
    assert.ok(ITEMS[r.out], `${fk}: thiếu món ra ${r.out}`);
    for (const k of Object.keys(r.in)) assert.ok(ITEMS[k], `${fk}: thiếu nguyên liệu ${k}`);
  }
});
test('mọi vật liệu bậc 2 có ít nhất một công thức làm ra', () => {
  const made = new Set(Object.values(FACTORIES).flatMap(F => F.rec.map(r => r.out)));
  for (const [k, it] of Object.entries(ITEMS)) if (it.mat === 2) assert.ok(made.has(k), `${k} chưa có công thức`);
});
test('xưởng mộc và nhà đan lát đúng thông số', () => {
  assert.equal(FACTORIES.carpentry.n, 'Xưởng mộc'); assert.equal(FACTORIES.carpentry.lv, 1); assert.equal(FACTORIES.carpentry.cost, 40);
  assert.deepEqual(FACTORIES.carpentry.rec[0], { out: 'planks', qty: 2, in: { wood: 3 }, t: 30, lv: 1 });
  assert.equal(FACTORIES.weaving.n, 'Nhà đan lát'); assert.equal(FACTORIES.weaving.lv, 3); assert.equal(FACTORIES.weaving.cost, 120);
  assert.equal(FACTORIES.weaving.rec.length, 4);
});
test('producible, đơn hàng và tàu hàng không có vật liệu (kể cả khi đủ xưởng, cấp cao)', () => {
  fresh({ level: 30 });
  for (const t of Object.keys(FACTORIES)) put({ k: 'fac', t, jobs: [] });
  const isMat = k => ITEMS[k].mat;
  assert.ok(!producible().some(isMat));
  for (let i = 0; i < 100; i++) {
    assert.ok(!Object.keys(genOrder().items).some(isMat));
    assert.ok(!newShip().crates.some(c => isMat(c.item)));
  }
});
