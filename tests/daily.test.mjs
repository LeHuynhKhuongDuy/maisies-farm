// Việc hằng ngày (src/quests.js): 5 việc nhỏ, xong hết có quà, không đồng hồ
import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh } from './helpers.mjs';
import { S, questEvent } from '../src/state.js';
import { activeQuests, daily, claimDaily } from '../src/quests.js';

test('mỗi ngày 5 việc khác nhau, kể cả ở cấp 1; không có loot hay buyanimal', () => {
  for (const level of [1, 3, 12]) {
    fresh({ tut: 999, level }); const d = daily();
    assert.equal(d.tasks.length, 5, 'cấp ' + level);
    assert.equal(new Set(d.tasks.map(t => t.ev + ':' + (t.key || ''))).size, 5);
    assert.ok(d.tasks.every(t => !['loot', 'buyanimal'].includes(t.ev)));
  }
});
test('làm xong hết mới nhận được, nhận một lần', () => {
  fresh({ tut: 999, level: 3, coins: 0 }); const d = daily();
  assert.equal(claimDaily(), null);
  for (const t of d.tasks) questEvent(t.ev, t.key, t.n);
  assert.ok(daily().done); const r = claimDaily(); assert.equal(S.coins, r.coins); assert.equal(claimDaily(), null);
});
test('qua ngày mới: việc mới; xong mà chưa nhận thì quà ngày cũ được cộng luôn', () => {
  fresh({ tut: 999, level: 3, coins: 0 }); const d = daily();
  for (const t of d.tasks) questEvent(t.ev, t.key, t.n);
  S.daily.day = 'Mon Jan 01 2001';
  const d2 = daily(); assert.ok(S.coins > 0); assert.equal(d2.got, false); assert.ok(d2.tasks.every(t => t.p === 0));
});
test('một sự kiện cộng cho cả nhiệm vụ truyện và việc hằng ngày', () => {
  fresh({ tut: 999, level: 2 }); activeQuests();
  S.daily = { day: new Date().toDateString(), tasks: [{ ev: 'harvest', key: 'wheat', n: 3, p: 0 }], got: false };
  questEvent('harvest', 'wheat', 2);
  assert.equal(daily().tasks[0].p, 2); assert.equal(activeQuests().find(q => q.id === 've-dao:0').p[0], 2);
});
test('chưa có chuồng nào thì việc hằng ngày không có "cho thú ăn"; có chuồng thì mới có thể có', () => {
  fresh({ tut: 999, level: 3 }); S.objs = S.objs.filter(o => o.k !== 'pen');
  for (let i = 0; i < 60; i++) { S.daily = null; assert.ok(daily().tasks.every(t => t.ev !== 'feed'), 'lần ' + i); }
  S.objs.push({ id: 999, k: 'pen', t: 'coop', x: 14, z: 9, r: 0, animals: [{ s: 0, e: 0 }] });
  let got = false; for (let i = 0; i < 60 && !got; i++) { S.daily = null; got = daily().tasks.some(t => t.ev === 'feed'); }
  assert.ok(got, 'có chuồng thì vẫn có thể ra việc cho thú ăn');
});
test('bản lưu hỏng: S.daily thiếu tasks / S.qs không phải mảng / mục thiếu p thì không văng lỗi và tự lành', () => {
  fresh({ tut: 999, level: 2 });
  S.daily = { day: new Date().toDateString(), got: false };
  assert.doesNotThrow(() => daily()); assert.equal(daily().tasks.length, 5);
  S.daily = { day: new Date().toDateString(), tasks: 'x', got: false };
  assert.doesNotThrow(() => questEvent('harvest', 'wheat', 1)); assert.equal(daily().tasks.length, 5);
  S.qs = 'hỏng'; assert.doesNotThrow(() => activeQuests()); assert.ok(Array.isArray(S.qs) && S.qs.length >= 2);
  S.qs = { a: 1 }; assert.doesNotThrow(() => questEvent('harvest', 'wheat', 1)); assert.doesNotThrow(() => activeQuests());
  activeQuests(); S.qs[0].p = undefined; S.qs[1].p = 5;
  assert.doesNotThrow(() => questEvent('harvest', 'wheat', 1));
  assert.doesNotThrow(() => activeQuests()); assert.ok(S.qs.every(e => Array.isArray(e.p)));
  S.qs.push(null); assert.doesNotThrow(() => activeQuests()); assert.ok(S.qs.every(Boolean));
});
