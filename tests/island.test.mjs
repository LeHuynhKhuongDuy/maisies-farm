import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memStorage, v1Save } from './helpers.mjs';
import { GRID, CORE, OFF, ZONES, OBSTACLES, JUNGLE_MIX } from '../src/data.js';
import { S, load, importSave, resetGame, footprint } from '../src/state.js';
import { zoneAt, isOpenCell, genJungle, migrateV1 } from '../src/island.js';

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
