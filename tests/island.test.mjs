import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memStorage, v1Save, fresh } from './helpers.mjs';
import { GRID, CORE, OFF, ZONES, OBSTACLES, JUNGLE_MIX } from '../src/data.js';
import { S, load, importSave, resetGame, footprint, isFree, findFree, have, on } from '../src/state.js';
import { zoneAt, isOpenCell, genJungle, migrateV1, openZone, gateFor, GATES } from '../src/island.js';
import { siteReq, contribute, tryAdvance, gateLock } from '../src/build.js';

test('migrateV1 dời mọi vật vào vùng lõi', () => {
  const v1 = v1Save(); const s = migrateV1(structuredClone(v1));
  assert.equal(s.v, 2);
  v1.objs.forEach((o, i) => { assert.equal(s.objs[i].x, o.x + 14); assert.equal(s.objs[i].z, o.z + 14); });
  assert.deepEqual(s.inv, { ...v1.inv, wood: 20, stone: 10, palmleaf: 10 }); // quà vật liệu khởi đầu
  assert.equal(s.level, v1.level); assert.equal(s.coins, v1.coins); assert.equal(s.quest, v1.quest);
  assert.deepEqual(s.adv, v1.adv);
  assert.equal(s.tut, 999);
  assert.equal(s.boatFixed, true);
});
test('migrateV1 dời cả khách đang đứng trong nông trại', () => {
  const v1 = v1Save(); const s = migrateV1(structuredClone(v1));
  assert.equal(s.visitors[0].x, v1.visitors[0].x + OFF); assert.equal(s.visitors[0].z, v1.visitors[0].z + OFF);
});
test('migrateV1 thêm rừng ở 3 vùng ngoài và đóng chúng', () => {
  const s = migrateV1(v1Save());
  assert.deepEqual(s.zones, { core: true, west: false, north: false, old: false });
  for (const z of ['west', 'north', 'old']) assert.ok(s.objs.filter(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === z).length > 40);
});
test('migrateV1: id không trùng và nextId đủ lớn', () => {
  const s = migrateV1(v1Save());
  const ids = s.objs.map(o => o.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(s.nextId > Math.max(...ids));
});
test('migrateV1: không vật nào chồng lên nhau', () => {
  const s = migrateV1(v1Save()), seen = new Set();
  for (const o of s.objs) { const [w, d] = footprint(o); for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) { const k = (o.x + i) + ',' + (o.z + j); assert.ok(!seen.has(k), k); seen.add(k); } }
});
test('load() nhận bản v1 từ localStorage và lưu lại thành v2', () => {
  memStorage({ 'maisies-farm-v1': JSON.stringify(v1Save()) });
  const s = load(); assert.equal(s.v, 2);
  assert.equal(JSON.parse(localStorage.getItem('maisies-farm-v1')).v, 2);
});
test('load() giữ nguyên bản v2 đã có', () => {
  memStorage({}); resetGame();
  const saved = JSON.parse(localStorage.getItem('maisies-farm-v1'));
  memStorage({ 'maisies-farm-v1': JSON.stringify(saved) });
  const s = load(); assert.equal(s.v, 2); assert.equal(s.objs.length, saved.objs.length);
});
test('importSave nhận mã v1', () => { memStorage({}); importSave(btoa(unescape(encodeURIComponent(JSON.stringify(v1Save()))))); assert.equal(S.v, 2); });
test('importSave từ chối mã hỏng', () => { memStorage({}); assert.throws(() => importSave(btoa(JSON.stringify({ v: 3, objs: [] })))); });
test('zoneAt', () => { assert.equal(zoneAt(20, 20), 'core'); assert.equal(zoneAt(3, 20), 'west'); assert.equal(zoneAt(20, 3), 'north'); assert.equal(zoneAt(3, 3), 'old'); assert.equal(zoneAt(40, 0), null); });
test('hằng số đảo', () => { assert.equal(GRID, 40); assert.equal(CORE, 26); assert.equal(OFF, 14); assert.equal(ZONES.length, 4); });
test('ván mới: vùng lõi như cũ dời 14 ô, 3 vùng ngoài đóng và có rừng', () => {
  memStorage({}); resetGame();
  assert.equal(S.v, 2); assert.deepEqual(S.zones, { core: true, west: false, north: false, old: false });
  assert.equal(S.tut, 0); assert.equal(S.boatFixed, true);
  const house = S.objs.find(o => o.k === 'house'); assert.deepEqual([house.x, house.z], [11 + OFF, 4 + OFF]);
  for (const z of ['west', 'north', 'old']) assert.ok(S.objs.filter(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === z).length > 40);
  assert.ok(S.objs.every(o => o.x >= 0 && o.z >= 0 && o.x < GRID && o.z < GRID));
});
test('isOpenCell theo S.zones', () => {
  memStorage({}); resetGame();
  assert.equal(isOpenCell(20, 20), true); assert.equal(isOpenCell(3, 20), false); assert.equal(isOpenCell(40, 0), false);
  S.zones.west = true; assert.equal(isOpenCell(3, 20), true);
});
test('genJungle: mật độ ~55%, chừa đường 1 ô ở giữa, chỉ dùng loại trong JUNGLE_MIX', () => {
  for (const z of ZONES.filter(z => z.id !== 'core')) {
    const objs = genJungle(z.id, 42), [x0, z0, w, d] = z.rect;
    const ratio = objs.length / (w * d);
    assert.ok(ratio > 0.4 && ratio < 0.65, z.id + ' ' + ratio);
    assert.ok(objs.every(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === z.id && JUNGLE_MIX[z.id].includes(o.t) && OBSTACLES[o.t]));
    assert.equal(new Set(objs.map(o => o.x + ',' + o.z)).size, objs.length);
  }
  const w = genJungle('west', 1); // đường ngang giữa vùng Tây
  assert.ok(!w.some(o => o.z === 14 + 13));
  assert.deepEqual(genJungle('north', 5), genJungle('north', 5));
});

// ---------- Task 6: vùng dưới mây và cổng mở vùng ----------
const cellsOf = o => { const [w, d] = footprint(o), out = []; for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) out.push([o.x + i, o.z + j]); return out; };
const gateOf = (s, t) => s.objs.filter(o => o.k === 'gate' && o.t === t);
// Gỡ mọi vật đè lên khung (x, z, w, d) để thử riêng chuyện vùng mở/đóng
const clearRect = (x, z, w, d) => { S.objs = S.objs.filter(o => !cellsOf(o).some(([cx, cz]) => cx >= x && cx < x + w && cz >= z && cz < z + d)); };
const fullStages = (o) => { // góp đủ mọi giai đoạn, trả kết quả tryAdvance cuối
  let r; do { for (const k of Object.keys(siteReq(o))) contribute(o, k); r = tryAdvance(o); } while (r === 'stage'); return r;
};
const lots = () => Object.fromEntries(['wood', 'bamboo', 'planks', 'rope', 'stone', 'torch', 'reedmat', 'rack'].map(k => [k, 99]));

test('isFree từ chối ô vùng đóng và khung vắt qua ranh giới', () => {
  fresh(); clearRect(10, 18, 8, 6);
  assert.equal(isFree(13, 20, 2, 2), false); // vắt qua ranh giới lõi / Tây
  assert.equal(isFree(10, 20, 1, 1), false); // trong rừng Tây
  assert.equal(isFree(14, 20, 2, 2), true);  // sát mép, vẫn trong lõi
  S.zones.west = true;
  assert.equal(isFree(13, 20, 2, 2), true); assert.equal(isFree(10, 20, 1, 1), true);
});
test('findFree chỉ trả ô vùng mở', () => {
  fresh();
  for (const [nx, nz] of [[0, 0], [3, 25], [25, 3], [13, 13]]) {
    const [x, z] = findFree(2, 2, nx, nz);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) assert.ok(isOpenCell(x + i, z + j), `${nx},${nz} -> ${x},${z}`);
  }
  S.objs = []; S.zones.west = true;
  const [x] = findFree(1, 1, 0, 20); assert.equal(x, 0); // mở rồi thì tìm được trong rừng Tây
});
test('ván mới có 3 cổng 2x1 đúng ranh giới, đang là công trường', () => {
  fresh();
  const [bw] = gateOf(S, 'bridge_w'), [bn] = gateOf(S, 'bridge_n'), [so] = gateOf(S, 'stairs_old');
  assert.ok(bw && bn && so);
  for (const g of [bw, bn, so]) { assert.deepEqual(footprint(g), [2, 1]); assert.deepEqual(g.site, { stage: 0, got: {} }); }
  assert.ok(cellsOf(bw).every(([x, z]) => zoneAt(x, z) === 'core')); assert.equal(zoneAt(bw.x - 1, bw.z), 'west');
  assert.ok(cellsOf(bn).every(([x, z]) => zoneAt(x, z) === 'core')); assert.equal(zoneAt(bn.x, bn.z - 1), 'north');
  assert.ok(cellsOf(so).every(([x, z]) => zoneAt(x, z) === 'west')); assert.equal(zoneAt(so.x, so.z - 1), 'old');
  const seen = new Set(); // không vật nào chồng lên nhau
  for (const o of S.objs) for (const [x, z] of cellsOf(o)) { const k = x + ',' + z; assert.ok(!seen.has(k), k); seen.add(k); }
});
test('migrateV1 đặt cổng; vùng lõi kín ranh giới: dọn vật cản, không đè công trình', () => {
  const v1 = v1Save();
  v1.objs = v1.objs.filter(o => o.k !== 'obstacle');
  v1.objs.push({ id: 900, k: 'fac', t: 'bakery', x: 0, z: 12, r: 0, jobs: [] });
  for (let z = 0; z < 26; z++) if (z !== 12 && z !== 13) v1.objs.push({ id: 901 + z, k: 'obstacle', t: 'rock', x: 0, z, r: 0 });
  for (let x = 1; x < 26; x++) v1.objs.push({ id: 950 + x, k: 'obstacle', t: 'bush', x, z: 0, r: 0 });
  v1.nextId = 1000;
  const s = migrateV1(v1);
  for (const t of ['bridge_w', 'bridge_n', 'stairs_old']) assert.equal(gateOf(s, t).length, 1, t);
  const [bw] = gateOf(s, 'bridge_w'), [bn] = gateOf(s, 'bridge_n');
  assert.equal(bw.x, OFF); assert.equal(bn.z, OFF);
  const seen = new Map();
  for (const o of s.objs) for (const [x, z] of cellsOf(o)) { const k = x + ',' + z; assert.ok(!seen.has(k), `${o.k} đè ${seen.get(k)} ở ${k}`); seen.set(k, o.k); }
  assert.ok(s.objs.some(o => o.id === 900)); // nhà máy vẫn còn
  const ids = s.objs.map(o => o.id); assert.equal(new Set(ids).size, ids.length); assert.ok(s.nextId > Math.max(...ids));
});
test('load() bản v2 thiếu cổng thì thêm cổng (một lần)', () => {
  memStorage({}); resetGame();
  const saved = JSON.parse(localStorage.getItem('maisies-farm-v1'));
  saved.objs = saved.objs.filter(o => o.k !== 'gate'); saved.zones.west = true;
  memStorage({ 'maisies-farm-v1': JSON.stringify(saved) });
  const s = load();
  assert.equal(gateOf(s, 'bridge_n').length, 1); assert.equal(gateOf(s, 'stairs_old').length, 1);
  assert.equal(gateOf(s, 'bridge_w').length, 0); // vùng đã mở thì thôi
  load(); assert.equal(gateOf(S, 'bridge_n').length, 1);
});
test('góp đủ cầu tre thì mở rừng phía Tây và báo sự kiện zone', () => {
  fresh({ level: 4 }); S.inv = lots();
  const got = []; on('zone', id => got.push(id));
  const [g] = gateOf(S, 'bridge_w');
  assert.equal(fullStages(g), 'done');
  assert.equal(S.zones.west, true); assert.equal(S.zones.north, false); assert.deepEqual(got, ['west']);
  assert.equal(isOpenCell(3, 20), true);
});
test('cổng không nhận góp khi cấp thấp hơn lv của vùng', () => {
  fresh({ level: 3 }); S.inv = lots();
  const [g] = gateOf(S, 'bridge_w');
  assert.equal(gateLock(g), 4);
  assert.equal(contribute(g, 'wood'), 0); assert.equal(have('wood'), 99); assert.equal(tryAdvance(g), 'none');
  S.level = 4; assert.equal(gateLock(g), 0); assert.equal(contribute(g, 'wood'), 10);
  const [so] = gateOf(S, 'stairs_old'); S.level = 10; assert.equal(gateLock(so), 11);
});
test('openZone mở vùng; gateFor chỉ cổng tới được (Rừng già cần qua rừng Tây trước)', () => {
  fresh();
  assert.equal(gateFor('west').t, 'bridge_w'); assert.equal(gateFor('north').t, 'bridge_n');
  assert.equal(gateFor('old').t, 'bridge_w'); // bậc đá còn dưới mây
  openZone('west'); assert.equal(S.zones.west, true);
  assert.equal(gateFor('old').t, 'stairs_old');
  assert.equal(GATES.bridge_w.n, 'Cầu tre'); assert.equal(GATES.bridge_n.n, 'Cầu gỗ'); assert.equal(GATES.stairs_old.n, 'Bậc đá');
});
