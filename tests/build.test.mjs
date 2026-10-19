import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put, memStorage } from './helpers.mjs';
import { S, have, producible, load, resetGame, on } from '../src/state.js';
import { BUILD, FACTORIES, PENS, ITEMS, OBSTACLES, HELPERS } from '../src/data.js';
import { startSite, keyOf, siteReq, contribute, tryAdvance, isBuilt, unlockLevel, obtainableAt, renewableAt, matHint, pastLastStage } from '../src/build.js';

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
test('mọi vật liệu của mọi giai đoạn là vật liệu và lấy được lâu dài ngay ở cấp mở (không kẹt)', () => {
  for (const [key, stages] of Object.entries(BUILD)) for (const st of stages) for (const item of Object.keys(st)) {
    assert.ok(ITEMS[item]?.mat, `${key}: ${item} không phải vật liệu`);
    assert.ok(obtainableAt(item, unlockLevel(key)), `${key} cần ${item} ở cấp ${unlockLevel(key)}`);
  }
});
test('obtainableAt: thô cần nguồn không cạn; ván gỗ cấp 1; dây thừng cần cấp 4; giỏ cần cấp 3', () => {
  for (const k of ['wood', 'stone', 'bamboo', 'palmleaf', 'clay', 'liana']) assert.ok(obtainableAt(k, 1), k);
  assert.ok(obtainableAt('planks', 1));
  assert.ok(!obtainableAt('rope', 3)); assert.ok(obtainableAt('rope', 4));
  assert.ok(!obtainableAt('basket', 2)); assert.ok(obtainableAt('basket', 3));
  assert.ok(!obtainableAt('wheat', 99));
});
test('obtainableAt: thô chỉ có trong rừng (không mọc lại, không ai gom) thì không tính là lấy được', () => {
  const rare = OBSTACLES.bamboo.rare, gives = HELPERS.lumberjack.gives;
  try {
    delete OBSTACLES.bamboo.rare; // dây leo chỉ còn ở cây rừng (không mọc lại) và nhà tiều phu (cấp 2)
    assert.ok(!renewableAt('liana', 1)); assert.ok(!obtainableAt('liana', 1));
    assert.ok(obtainableAt('liana', 2)); // nhà tiều phu gom dây leo từ cấp 2
    HELPERS.lumberjack.gives = ['wood'];
    assert.ok(!obtainableAt('liana', 99)); assert.ok(!obtainableAt('rope', 99));
  } finally { OBSTACLES.bamboo.rare = rare; HELPERS.lumberjack.gives = gives; }
  assert.ok(obtainableAt('liana', 1));
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
  const got = []; on('act', (ev, key) => got.push([ev, key])); // nghe sự kiện báo ra
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  tryAdvance(o); assert.equal(S.xp, 10);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  tryAdvance(o); assert.equal(S.xp, 30); assert.deepEqual(got.filter(g => g[0] === 'build'), [['build', 'fac:bakery']]);
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
  // dây leo, đá, đất sét: chỉ tới vật cản mọc lại (vùng lõi dọn sạch vẫn có), không chỉ tới cây rừng
  assert.equal(matHint('liana'), 'Chặt bụi tre để có dây leo');
  assert.equal(matHint('stone'), 'Chặt tảng đá để có đá'); assert.equal(matHint('clay'), 'Chặt gò đất sét để có đất sét');
  assert.equal(matHint('planks'), 'Làm ở Xưởng mộc'); assert.equal(matHint('rope'), 'Làm ở Nhà đan lát');
});

// ---- Công trường đã qua giai đoạn cuối (bảng BUILD bị rút ngắn): không kẹt ----
test('tryAdvance: công trường qua giai đoạn cuối thì xong luôn (không cộng xp), báo nhiệm vụ build', () => {
  fresh({ xp: 0, level: 5, tut: 999 }); const got = []; on('act', (ev, key) => got.push([ev, key]));
  const o = put({ k: 'fac', t: 'carpentry', jobs: [] }); startSite(o); o.site.stage = 3; // bảng chỉ có 1 giai đoạn
  assert.ok(pastLastStage(o)); assert.deepEqual(siteReq(o), {});
  assert.equal(tryAdvance(o), 'done'); assert.equal(o.site, undefined); assert.ok(isBuilt(o));
  assert.equal(S.xp, 0); assert.deepEqual(got.filter(g => g[0] === 'build'), [['build', 'fac:carpentry']]);
});
test('tryAdvance: cổng qua giai đoạn cuối mở vùng khi đủ cấp, chưa đủ cấp thì chờ', () => {
  fresh({ level: 2 }); const g = S.objs.find(o => o.k === 'gate' && o.t === 'bridge_w'); g.site.stage = 2;
  assert.equal(tryAdvance(g), 'none'); assert.ok(g.site); assert.equal(S.zones.west, false);
  S.level = 4; assert.equal(tryAdvance(g), 'done'); assert.equal(g.site, undefined); assert.equal(S.zones.west, true);
});
test('load() bản v2: công trường qua giai đoạn cuối được hoàn tất (cổng mở vùng, thuyền đã sửa)', () => {
  memStorage({}); resetGame();
  const s = JSON.parse(localStorage.getItem('maisies-farm-v1'));
  const g = s.objs.find(o => o.k === 'gate' && o.t === 'bridge_n'); g.site = { stage: 9, got: {} };
  const b = s.objs.find(o => o.k === 'boat'); b.site.stage = 4;
  const f = s.objs.find(o => o.k === 'fac' && o.t === 'bakery'); // tàn tích lò bánh đang dở: giữ nguyên
  memStorage({ 'maisies-farm-v1': JSON.stringify(s) }); load();
  const g2 = S.objs.find(o => o.id === g.id), b2 = S.objs.find(o => o.id === b.id), f2 = S.objs.find(o => o.id === f.id);
  assert.equal(g2.site, undefined); assert.equal(S.zones.north, true);
  assert.equal(b2.site, undefined); assert.equal(S.boatFixed, true);
  assert.deepEqual(f2.site, f.site);
  assert.equal(S.objs.filter(o => o.k === 'gate' && o.t === 'bridge_n').length, 1); // không đặt thêm cổng
});
