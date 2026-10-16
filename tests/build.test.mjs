import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put } from './helpers.mjs';
import { S, have, producible } from '../src/state.js';
import { BUILD, FACTORIES, PENS, ITEMS } from '../src/data.js';
import { startSite, keyOf, siteReq, contribute, tryAdvance, isBuilt, unlockLevel, obtainableAt, matHint } from '../src/build.js';

test('góp đủ giai đoạn thì sang giai đoạn sau, xong thì hết site', () => {
  fresh(); S.inv = { wood: 20, stone: 20, planks: 10, palmleaf: 10 };
  const o = put({ k:'fac', t:'bakery', jobs: [] }); startSite(o);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  assert.equal(tryAdvance(o), 'stage'); assert.equal(o.site.stage, 1);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  assert.equal(tryAdvance(o), 'done'); assert.equal(o.site, undefined);
});
test('góp thiếu thì chỉ chuyển phần đang có, không âm kho', () => {
  fresh(); S.inv = { wood: 3 }; const o = put({ k:'fac', t:'carpentry', jobs: [] }); startSite(o);
  assert.equal(contribute(o, 'wood'), 3); assert.equal(have('wood'), 0); assert.equal(tryAdvance(o), 'none');
});
test('không góp quá số cần', () => { fresh(); S.inv = { wood: 50 }; const o = put({ k:'fac', t:'carpentry', jobs: [] }); startSite(o);
  assert.equal(contribute(o, 'wood'), 6); assert.equal(have('wood'), 44); });
test('vật liệu giai đoạn 1 lấy được ở cấp mở công trình', () => {
  for (const [key, stages] of Object.entries(BUILD)) { const lv = unlockLevel(key);
    for (const item of Object.keys(stages[0])) assert.ok(obtainableAt(item, lv), `${key} cần ${item} ở cấp ${lv}`); }
});

// ---- thêm ----
test('keyOf, unlockLevel: nhà máy, chuồng, cổng, tàn tích', () => {
  assert.equal(keyOf({ k: 'fac', t: 'bakery' }), 'fac:bakery');
  assert.equal(keyOf({ k: 'gate', t: 'bridge_w' }), 'gate:bridge_w');
  assert.equal(unlockLevel('fac:bakery'), 2); assert.equal(unlockLevel('pen:cowpen'), 4);
  assert.equal(unlockLevel('gate:bridge_w'), 4); assert.equal(unlockLevel('gate:bridge_n'), 7); assert.equal(unlockLevel('gate:stairs_old'), 11);
  assert.equal(unlockLevel('ruin:boat'), 1);
});
test('mọi nhà máy và chuồng đều có công trường; nhà máy lạ dùng giai đoạn của quán hải sản', () => {
  for (const t of Object.keys(FACTORIES)) assert.ok(BUILD['fac:' + t]?.length, t);
  for (const t of Object.keys(PENS)) assert.ok(BUILD['pen:' + t]?.length, t);
  assert.deepEqual(BUILD['fac:bakery'], [{ wood: 8, stone: 6 }, { planks: 4, palmleaf: 6 }]);
  assert.deepEqual(BUILD['gate:stairs_old'][2], { reedmat: 6, rack: 4 });
});
test('mọi vật liệu của mọi giai đoạn là vật liệu và lấy được ở cấp mở (không kẹt)', () => {
  // giai đoạn sau có thể cần cấp cao hơn chút, nhưng không vượt cấp mở + 3
  for (const [key, stages] of Object.entries(BUILD)) for (const st of stages) for (const item of Object.keys(st)) {
    assert.ok(ITEMS[item]?.mat, `${key}: ${item} không phải vật liệu`);
    assert.ok(obtainableAt(item, unlockLevel(key) + 3), `${key} cần ${item}`);
  }
});
test('obtainableAt: thô luôn được; ván gỗ cấp 1; dây thừng cần cấp 4; giỏ cần cấp 3', () => {
  assert.ok(obtainableAt('liana', 1)); assert.ok(obtainableAt('planks', 1));
  assert.ok(!obtainableAt('rope', 3)); assert.ok(obtainableAt('rope', 4));
  assert.ok(!obtainableAt('basket', 2)); assert.ok(obtainableAt('basket', 3));
  assert.ok(!obtainableAt('wheat', 99));
});
test('siteReq báo đã góp / cần; góp món không cần thì 0', () => {
  fresh(); S.inv = { wood: 4, bamboo: 9 }; const o = put({ k: 'fac', t: 'carpentry', jobs: [] }); startSite(o);
  contribute(o, 'wood');
  assert.deepEqual(siteReq(o), { wood: { need: 6, got: 4 }, stone: { need: 3, got: 0 } });
  assert.equal(contribute(o, 'bamboo'), 0); assert.equal(have('bamboo'), 9);
});
test('xong giai đoạn cộng xp 10 * (giai đoạn + 1), xong hết báo nhiệm vụ build', () => {
  fresh({ xp: 0, level: 5, tut: 999 }); S.inv = { wood: 20, stone: 20, planks: 10, palmleaf: 10 }; // đã qua hướng dẫn
  const o = put({ k: 'fac', t: 'bakery', jobs: [] }); startSite(o);
  S.quest = 1e6; S.gq = { ev: 'build', key: 'fac:bakery', n: 1 }; S.qprog = 0; // nhiệm vụ ngẫu nhiên giả
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  tryAdvance(o); assert.equal(S.xp, 10);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  tryAdvance(o); assert.equal(S.xp, 30); assert.equal(S.qprog, 1);
});
test('vật cũ không có site là đã xây xong; tryAdvance/contribute trên vật đã xây không làm gì', () => {
  fresh(); S.inv = { wood: 9 };
  const o = put({ k: 'fac', t: 'carpentry', jobs: [] });
  assert.ok(isBuilt(o)); assert.equal(tryAdvance(o), 'none'); assert.equal(contribute(o, 'wood'), 0); assert.equal(have('wood'), 9);
  assert.deepEqual(siteReq(o), {});
  startSite(o); assert.ok(!isBuilt(o)); assert.deepEqual(o.site, { stage: 0, got: {} });
  const f = put({ k: 'field', t: 'field' }); startSite(f); assert.equal(f.site, undefined); // ruộng không qua công trường
});
test('nhà máy / chuồng đang xây không làm ra món cho đơn hàng', () => {
  fresh({ level: 30 }); S.objs = S.objs.filter(o => o.k !== 'fac' && o.k !== 'pen');
  const f = put({ k: 'fac', t: 'bakery', jobs: [] }); startSite(f);
  const p = put({ k: 'pen', t: 'cowpen', animals: [{ s: 0, e: 0 }] }); startSite(p);
  assert.ok(!producible().includes('bread')); assert.ok(!producible().includes('milk'));
  delete f.site; delete p.site; assert.ok(producible().includes('bread')); assert.ok(producible().includes('milk'));
});
test('matHint: thô thì chặt, bậc 2 thì làm ở xưởng', () => {
  assert.match(matHint('wood'), /^Chặt .* để có gỗ$/);
  assert.equal(matHint('planks'), 'Làm ở Xưởng mộc'); assert.equal(matHint('rope'), 'Làm ở Nhà đan lát');
});
