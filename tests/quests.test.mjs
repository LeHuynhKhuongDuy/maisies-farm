// Giai đoạn B: nhiều nhiệm vụ truyện cùng lúc + việc vặt (src/quests.js)
import test from 'node:test';
import assert from 'node:assert/strict';
import { fresh, put, memStorage, v1Save, obstacle } from './helpers.mjs';
import { S, load, questEvent, resetGame } from '../src/state.js';
import { activeQuests, claimStory, markSeen, reqLabel, newChore } from '../src/quests.js';
import { hitObstacle } from '../src/clearing.js';
import { isOpenCell } from '../src/island.js';

const KEY = 'maisies-farm-v1';

test('xong hướng dẫn thì có 2–4 nhiệm vụ, có bước đầu của ve-dao và dan-ga', () => {
  fresh({ tut: 999, level: 2 });
  const qs = activeQuests();
  assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.ok(qs.some(q => q.id === 've-dao:0')); assert.ok(qs.some(q => q.id === 'dan-ga:0'));
});
test('cấp 1: ve-dao:0 chưa mở nhưng vẫn đủ 2 nhiệm vụ (dan-ga:0 và việc vặt)', () => {
  fresh({ tut: 999, level: 1 });
  const qs = activeQuests();
  assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.ok(!qs.some(q => q.id === 've-dao:0')); assert.ok(qs.some(q => q.id === 'dan-ga:0'));
});
test('mọi cấp 1–40: luôn 2–4 nhiệm vụ, tối đa 3 bước truyện', () => {
  for (let L = 1; L <= 40; L++) {
    fresh({ tut: 999, level: L });
    const qs = activeQuests();
    assert.ok(qs.length >= 2 && qs.length <= 4, 'cấp ' + L); assert.ok(qs.filter(q => q.arc).length <= 3);
  }
});
test('đang hướng dẫn thì không có nhiệm vụ truyện, sự kiện không cộng vào truyện', () => {
  fresh({ level: 2 }); assert.deepEqual(activeQuests(), []);
  questEvent('harvest', 'wheat', 2); S.tut = 999;
  assert.deepEqual(activeQuests().find(q => q.id === 've-dao:0').p, [0, 0]);
});
test('một sự kiện cộng cho mọi nhiệm vụ khớp, không vượt n; key sai thì không cộng', () => {
  fresh({ tut: 999, level: 2 }); activeQuests();
  questEvent('harvest', 'corn', 5); questEvent('harvest', 'wheat', 4); questEvent('harvest', 'wheat', 4);
  assert.deepEqual(activeQuests().find(q => q.id === 've-dao:0').p, [6, 0]);
});
test('nhận thưởng: chỉ khi xong; cộng xu; sang bước tiếp theo; nhận lại thì null', () => {
  fresh({ tut: 999, level: 2, coins: 0 }); activeQuests();
  assert.equal(claimStory('ve-dao:0'), null);
  questEvent('harvest', 'wheat', 6); questEvent('make', 'bread', 2);
  const q = claimStory('ve-dao:0'); assert.ok(q.coins > 0); assert.equal(S.coins, q.coins);
  assert.equal(S.story['ve-dao'], 1); assert.ok(activeQuests().some(x => x.id === 've-dao:1'));
  assert.equal(claimStory('ve-dao:0'), null);
});
test('markSeen đánh dấu đã xem lời thoại', () => {
  fresh({ tut: 999, level: 2 }); activeQuests();
  assert.equal(activeQuests().find(q => q.id === 've-dao:0').seen, false);
  markSeen('ve-dao:0'); assert.equal(activeQuests().find(q => q.id === 've-dao:0').seen, true);
});
test('bước chưa đủ cấp thì chưa mở; tối đa 3 bước truyện khi nhiều mạch cùng mở', () => {
  fresh({ tut: 999, level: 1 }); S.story = { 've-dao': 2 };
  assert.ok(!activeQuests().some(q => q.id === 've-dao:2'));
  fresh({ tut: 999, level: 15 });
  const qs = activeQuests(); assert.equal(qs.filter(q => q.arc).length, 3); assert.ok(qs.length <= 4);
});
test('yêu cầu build tự xong nếu công trình đã xây từ trước', () => {
  fresh({ tut: 999, level: 3 }); S.story = { 've-dao': 2 };
  put({ k: 'fac', t: 'weaving', r: 0, jobs: [] });
  assert.equal(activeQuests().find(q => q.id === 've-dao:2').p[0], 1);
});
test('bản v1 cấp 15 và bản v2 có chuỗi cũ: 2–4 nhiệm vụ, xoá quest/gq, giữ qprog cho hướng dẫn', () => {
  memStorage({ [KEY]: JSON.stringify(v1Save()) }); load();
  let qs = activeQuests(); assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.equal(S.quest, undefined); assert.equal(S.gq, undefined);
  memStorage({}); resetGame();
  const old = JSON.parse(localStorage.getItem(KEY));
  old.tut = 999; old.quest = 30; old.gq = { ev: 'clear', n: 3 }; old.qprog = 1;
  memStorage({ [KEY]: JSON.stringify(old) }); load();
  assert.equal(S.quest, 30); // còn nguyên tới lúc activeQuests dọn
  qs = activeQuests(); assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.equal(S.quest, undefined); assert.equal(S.gq, undefined); assert.equal(S.qprog, 1);
});
test('nhận thưởng cộng cả kim cương; việc vặt nhận xong thì biến mất và được bù việc mới', () => {
  fresh({ tut: 999, level: 1, gems: 0 }); activeQuests();
  const c = S.qs.find(e => e.c); assert.ok(c);
  c.p = c.c.reqs.map(r => r.n);
  const q = claimStory(c.id); assert.equal(q.arc, null); assert.equal(q.title, 'Việc vặt');
  assert.ok(!activeQuests().some(x => x.id === c.id)); assert.ok(activeQuests().length >= 2);
});
test('reqLabel', () => {
  assert.equal(reqLabel({ ev: 'harvest', key: 'wheat', n: 6 }), 'Thu hoạch Lúa mì');
  assert.equal(reqLabel({ ev: 'make', key: 'bread', n: 2 }), 'Làm Bánh mì');
  assert.equal(reqLabel({ ev: 'build', key: 'fac:weaving', n: 1 }), 'Xây Nhà đan lát');
  assert.equal(reqLabel({ ev: 'build', key: 'gate:bridge_w', n: 1 }), 'Xây Cầu tre');
  assert.equal(reqLabel({ ev: 'clear', n: 5 }), 'Dọn chướng ngại vật');
  assert.equal(reqLabel({ ev: 'deliver', n: 3 }), 'Giao đơn hàng');
});
test('newChore có dạng reqs và tiêu đề Việc vặt', () => {
  fresh({ tut: 999, level: 3 });
  const c = newChore(); assert.equal(c.title, 'Việc vặt'); assert.equal(c.reqs.length, 1);
  assert.ok(c.reqs[0].ev && c.reqs[0].n > 0); assert.ok(c.who && c.text && c.coins > 0 && c.xp > 0);
});

// ---- Việc vặt "dọn chướng ngại vật" chỉ khi còn vật cản trong vùng mở ----
const clearOpen = () => { S.objs = S.objs.filter(o => !(o.k === 'obstacle' && isOpenCell(o.x, o.z))); };
const clearChore = p => ({ id: 'chore:99', p: [p], seen: false, c: { who: 'maisie', title: 'Việc vặt', text: 'Dọn thêm 3', reqs: [{ ev: 'clear', n: 3 }], coins: 1, xp: 1, gems: 0 } });
const pastChain = () => { fresh({ tut: 999, level: 12 }); S.story = { 've-dao': 9, 'dan-ga': 9, thuyen: 9, 'banh-ba': 9, 'vuon-lily': 9, 'ong-kai': 9, 'mat-ong': 9 }; };
test('vùng mở hết vật cản (chỉ còn rừng dưới mây): không bao giờ ra việc vặt dọn dẹp', () => {
  pastChain(); clearOpen();
  assert.ok(S.objs.some(o => o.k === 'obstacle')); // rừng dưới mây vẫn còn
  for (let i = 0; i < 300; i++) assert.notEqual(newChore().reqs[0].ev, 'clear');
});
test('còn vật cản trong vùng mở thì có lúc ra việc vặt dọn dẹp', () => {
  pastChain();
  let seen = false;
  for (let i = 0; i < 300 && !seen; i++) seen = newChore().reqs[0].ev === 'clear';
  assert.ok(seen);
});
test('việc vặt dọn dẹp dở mà hết vật cản: bị thay; đã xong thì giữ để nhận thưởng', () => {
  pastChain(); S.qs = [clearChore(1)]; clearOpen();
  let qs = activeQuests();
  assert.ok(!qs.some(q => q.id === 'chore:99')); assert.ok(qs.length >= 2);
  assert.ok(qs.every(q => q.reqs.every(r => r.ev !== 'clear')));
  S.qs = [clearChore(3)];
  qs = activeQuests(); assert.ok(qs.find(q => q.id === 'chore:99').done); assert.ok(claimStory('chore:99'));
});
test('nhát chặt vật cản cuối cùng trong vùng mở vẫn tính cho việc vặt dọn dẹp', () => {
  pastChain(); clearOpen();
  const o = obstacle('grass'); assert.ok(isOpenCell(o.x, o.z));
  S.qs = [clearChore(2)]; activeQuests();
  S.energy = 9; let r; while (!(r = hitObstacle(o, () => 0.99)).done) { /* chặt tới hết */ }
  assert.ok(!S.objs.includes(o));
  questEvent('clear');
  const q = activeQuests().find(x => x.id === 'chore:99'); assert.deepEqual(q.p, [3]); assert.ok(q.done);
  assert.ok(claimStory('chore:99'));
});
