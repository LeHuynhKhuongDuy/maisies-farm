import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh } from './helpers.mjs';
import { S, addXP, energyTick, on } from '../src/state.js';
import { GRID, OFF, energyMax, BEACH, BEACH_MAX, BEACH_EVERY } from '../src/data.js';
import { beachSpots, beachTick, pickBeach } from '../src/beach.js';
import { zoneAt } from '../src/island.js';

const E = BEACH_EVERY * 1000;

test('energyMax: 30 ở cấp 1, 35 ở cấp 10', () => {
  assert.equal(energyMax(1), 30); assert.equal(energyMax(10), 35); assert.equal(energyMax(15), 37);
});
test('ván mới bắt đầu đầy năng lượng theo cấp; lên cấp thì nạp đầy theo cấp mới', () => {
  fresh(); assert.equal(S.energy, energyMax(1));
  S.level = 9; S.xp = 0; S.energy = 2; addXP(1000);
  assert.ok(S.level >= 10); assert.equal(S.energy, energyMax(S.level));
});
test('hồi năng lượng chỉ tới giới hạn của cấp, không cắt phần vượt', () => {
  fresh({ level: 10, energy: 34, energyAt: 0 }); energyTick(); assert.equal(S.energy, 35);
  fresh({ level: 10, energy: 50, energyAt: 0 }); energyTick(); assert.equal(S.energy, 50);
});

test('dữ liệu bãi biển', () => {
  assert.deepEqual(Object.fromEntries(Object.entries(BEACH).map(([k, b]) => [k, b.energy])), { starfish: 2, shell: 3, crab: 5 });
  assert.equal(BEACH_MAX, 6); assert.equal(BEACH_EVERY, 240);
});
test('beachSpots: ít nhất 16 điểm trên dải cát, tránh bến tàu, cầu câu, biển tên, thuyền', () => {
  const sp = beachSpots();
  assert.ok(sp.length >= 16);
  assert.ok(sp.filter(s => s.zone === 'core').length >= 16, 'đủ chỗ ở bờ vùng lõi (luôn thấy được)');
  const keys = new Set();
  for (const s of sp) {
    // ngoài lưới ô (trên cát), cách mép cỏ chưa tới 2 ô
    const outX = s.x < 0 || s.x > GRID - 1, outZ = s.z < 0 || s.z > GRID - 1;
    assert.ok(outX !== outZ, 'nằm trên đúng một cạnh bờ');
    assert.ok(s.x > -2 && s.x < GRID + 1 && s.z > -2 && s.z < GRID + 1);
    assert.ok(['core', 'west', 'north', 'old'].includes(s.zone));
    keys.add(s.x + ',' + s.z);
    if (s.z > GRID - 1) assert.ok(Math.abs(s.x - (17 + OFF)) > 3 && Math.abs(s.x - (14 + OFF)) > 1, 'xa bến tàu, biển tên, thuyền ' + s.x);
    if (s.x > GRID - 1) assert.ok(Math.abs(s.z - (9 + OFF)) > 2, 'xa cầu câu cá ' + s.z);
  }
  assert.equal(keys.size, sp.length, 'không trùng điểm');
});
test('beachTick: không thêm trước BEACH_EVERY giây, rồi thêm một món', () => {
  fresh(); const t0 = 1e12;
  assert.equal(beachTick(t0), null);
  assert.equal(beachTick(t0 + E - 1), null);
  assert.equal(S.beach.length, 0);
  const it = beachTick(t0 + E, () => 0.99);
  assert.ok(it); assert.equal(S.beach.length, 1); assert.ok(S.beach.includes(it));
  assert.equal(it.t, 'starfish'); assert.equal(typeof it.id, 'number');
  assert.ok(beachSpots()[it.spot]);
  assert.equal(beachTick(t0 + E + 1000), null, 'chưa tới mốc tiếp theo');
});
test('beachTick: tỉ lệ cua 15%, vỏ sò 35%, sao biển 50%', () => {
  const kind = r => { fresh(); S.beachAt = 0; return beachTick(1, () => r).t; };
  assert.equal(kind(0.0), 'crab'); assert.equal(kind(0.149), 'crab');
  assert.equal(kind(0.15), 'shell'); assert.equal(kind(0.499), 'shell');
  assert.equal(kind(0.5), 'starfish'); assert.equal(kind(0.999), 'starfish');
});
test('beachTick: không vượt BEACH_MAX, mỗi món một chỗ riêng, chỉ ở bờ vùng đang mở', () => {
  fresh(); S.beachAt = 0;
  for (let i = 1; i <= 40; i++) beachTick(i * E);
  assert.equal(S.beach.length, BEACH_MAX);
  assert.equal(new Set(S.beach.map(b => b.spot)).size, BEACH_MAX);
  assert.equal(new Set(S.beach.map(b => b.id)).size, BEACH_MAX);
  for (const b of S.beach) assert.equal(beachSpots()[b.spot].zone, 'core');
  assert.equal(beachTick(41 * E), null);
});
test('mở vùng Tây thì bờ Tây cũng có đồ', () => {
  fresh(); S.zones.west = true; S.beachAt = 0;
  const seen = new Set();
  for (let i = 0; i < 300; i++) { S.beach = []; S.beachAt = 0; const it = beachTick(1); seen.add(beachSpots()[it.spot].zone); }
  assert.ok(seen.has('west') && seen.has('core') && !seen.has('north') && !seen.has('old'));
});
test('pickBeach: cộng năng lượng kể cả khi đang đầy, xóa món, báo nhiệm vụ', () => {
  fresh(); S.beachAt = 0; const it = beachTick(1, () => 0.0); // cua: +5
  S.energy = energyMax(S.level);
  const evs = []; on('act', ev => evs.push(ev));
  assert.equal(pickBeach(it.id), 5);
  assert.deepEqual(evs, ['beach']);
  assert.equal(S.energy, energyMax(S.level) + 5);
  assert.equal(S.beach.length, 0);
  assert.equal(pickBeach(it.id), 0, 'nhặt lần hai không được gì');
  assert.equal(S.energy, energyMax(S.level) + 5); assert.deepEqual(evs, ['beach']);
});
test('hết năng lượng, mọi vùng ngoài đóng: sau tối đa BEACH_EVERY giây có món trên bãi để nhặt', () => {
  fresh({ energy: 0 });
  assert.deepEqual(S.zones, { core: true, west: false, north: false, old: false });
  const t0 = 5e11;
  let t = t0;
  for (; t <= t0 + E; t += 1000) beachTick(t); // nhịp game giả lập, mỗi giây một lần
  assert.ok(S.beach.length >= 1);
  const it = S.beach[0], sp = beachSpots()[it.spot];
  assert.equal(sp.zone, 'core');
  // nằm sát một ô vùng lõi (bé nhìn thấy, không bị mây che)
  const ex = Math.min(GRID - 1, Math.max(0, Math.round(sp.x))), ez = Math.min(GRID - 1, Math.max(0, Math.round(sp.z)));
  assert.equal(zoneAt(ex, ez), 'core');
  assert.ok(pickBeach(it.id) > 0); assert.ok(S.energy > 0);
});
test('bản lưu cũ chưa có S.beach vẫn chạy', () => {
  fresh(); delete S.beach; delete S.beachAt;
  assert.equal(beachTick(1), null); assert.ok(Array.isArray(S.beach));
  assert.equal(pickBeach(123), 0);
});
