import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put } from './helpers.mjs';
import { unlockLevel } from '../src/build.js';
import { S, producible, genOrder, newShip, energyLabel } from '../src/state.js';
import { ITEMS, FACTORIES, TUTORIAL, STORIES, REQ_EVENTS, ISLANDERS, PEOPLE, CROPS, TREES, PENS, BUILD, talkerName } from '../src/data.js';

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

// ---- Chữ cho bé ----
test('anh Ben xưng "anh", không gọi mình là "ông"', () => {
  const ongRe = /(^|[\s,.!])ông([\s,.!]|$)/u;
  for (const q of TUTORIAL) if (q.who === 'ben') assert.ok(!ongRe.test(q.text), q.text);
  // lời của Ben trong mọi mạch truyện (text, talk, outro) cũng không tự xưng "ông"
  for (const a of STORIES) for (const s of a.steps) {
    if (s.who === 'ben') assert.ok(!ongRe.test(s.text), s.text);
    for (const [w, line] of [...s.talk, ...s.outro]) if (w === 'ben') assert.ok(!ongRe.test(line), line);
  }
  assert.ok(TUTORIAL.some(q => q.who === 'ben' && q.text.includes('giúp anh')));
});
test('bánh mì hồi năng lượng, nướng ở Lò bánh từ cấp 1 (bảng năng lượng chỉ tới Lò bánh)', () => {
  const r = FACTORIES.bakery.rec.find(r => r.out === 'bread');
  assert.equal(r.lv, 1); assert.ok(ITEMS.bread.energy > 0); assert.equal(FACTORIES.bakery.n, 'Lò bánh');
});
test('viên năng lượng: dưới 100 hiện số/giới hạn, từ 100 trở lên chỉ hiện 99+', () => {
  assert.equal(energyLabel(30, 37), '30/37'); assert.equal(energyLabel(99, 37), '99/37');
  assert.equal(energyLabel(100, 37), '99+'); assert.equal(energyLabel(1234, 40), '99+');
});

// ---- Mạch truyện ----
const lvOf = (a, s) => Math.max(a.lv, s.lv || 0);
// Yêu cầu làm được ở cấp L: không kẹt
function doable(r, L) {
  if (r.ev === 'make') return Object.values(FACTORIES).some(F => F.lv <= L && F.rec.some(x => x.out === r.key && x.lv <= L));
  if (r.ev === 'harvest') return (CROPS[r.key]?.lv ?? 99) <= L || Object.values(TREES).some(T => T.yield === r.key && T.lv <= L);
  if (r.ev === 'collect') return Object.values(PENS).some(P => P.prod === r.key && P.lv <= L);
  if (r.ev === 'build') return !!BUILD[r.key] && unlockLevel(r.key) <= L;
  return true;
}
test('STORIES: id không trùng, mỗi mạch 3 bước, mỗi bước 1–3 yêu cầu hợp lệ và làm được ở cấp mở', () => {
  assert.equal(new Set(STORIES.map(a => a.id)).size, STORIES.length);
  for (const a of STORIES) {
    assert.equal(a.steps.length, 3, a.id);
    for (const s of a.steps) {
      assert.ok(s.reqs.length >= 1 && s.reqs.length <= 3, a.id);
      assert.ok(talkerName(s.who), s.who);
      for (const [w] of [...s.talk, ...s.outro]) assert.ok(talkerName(w), w);
      for (const r of s.reqs) { assert.ok(REQ_EVENTS.includes(r.ev), r.ev); assert.ok(r.n >= 1); assert.ok(doable(r, lvOf(a, s)), `${a.id} ${r.ev} ${r.key} ở cấp ${lvOf(a, s)}`); }
    }
  }
});
test('ISLANDERS không trùng id với PEOPLE', () => {
  for (const i of ISLANDERS) assert.ok(!PEOPLE.some(p => p.id === i.id));
});
