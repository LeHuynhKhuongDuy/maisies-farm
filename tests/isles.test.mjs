import test from 'node:test';
import assert from 'node:assert/strict';
import { ADVENTURES } from '../src/data.js';
import { buildMap } from '../src/advmap.js';
import { S, have } from '../src/state.js';
import {
  FOG_R, isleState, fogged, lootMat, ruinNeed, ruinGive, ruinAdvance,
  isleQuest, isleEvent, isleClaim, nextHint, isleFinish, isleReplayReset, chartLocked,
} from '../src/isles.js';
import { fresh } from './helpers.mjs';

// ván mới nhưng Kho trống (ván mới có sẵn ít gỗ và lá cọ)
const start = (o) => { fresh(o); S.inv = {}; return S; };

const byId = id => ADVENTURES.find(a => a.id === id);
const LC = byId('lang-chai'), HD = byId('hai-dang'), DB = byId('dao-buom'), OLD = byId('shell');
const manh = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.z - b.z);
const nbrs = (m, c) => [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dz]) => m.cells[m.idx(c.x + dx, c.z + dz)]).filter(Boolean);
const isOpen = (m, p, c) => c.k === 'open' || p.open.includes(m.idx(c.x, c.z)) || (c.k === 'chest' && p.chests.includes(m.idx(c.x, c.z)));
const reach = (m, p, c) => nbrs(m, c).some(n => n.k !== 'water' && isOpen(m, p, n));

test('sương: ô xa hơn 2 ô so với vùng đã mở bị che; mở thêm thì sương lùi; đảo cũ không có sương', () => {
  start();
  const m = buildMap(LC), p = isleState(LC), cells = m.cells;
  const f = fogged(m, p), src = () => cells.filter(c => c.k === 'open' || p.open.includes(m.idx(c.x, c.z)) || p.chests.includes(m.idx(c.x, c.z)));
  assert.equal(FOG_R, 2);
  assert.ok(f.size > 0);
  for (const c of cells) {
    const i = m.idx(c.x, c.z), near = src().some(s => manh(s, c) <= FOG_R);
    if (c.k === 'water') assert.ok(!f.has(i), 'nước không có sương');
    else assert.equal(f.has(i), !near, `ô ${i} ${c.k}`);
  }
  // mở một ô vật cản thì sương quanh nó lùi
  const far = cells.find(c => c.k === 'ob' && f.has(m.idx(c.x, c.z)));
  const before = f.size;
  p.open.push(m.idx(far.x, far.z));
  const f2 = fogged(m, p);
  assert.ok(f2.size < before);
  assert.ok(!f2.has(m.idx(far.x, far.z)));
  // rương đã mở cũng làm sương lùi
  const chest = cells.find(c => c.k === 'chest');
  p.chests.push(m.idx(chest.x, chest.z));
  assert.ok(fogged(m, p).size < f2.size);
  // ô npc / ruin cũng có thể bị che (cách xa vùng mở)
  const ruin = cells.find(c => c.k === 'ruin');
  assert.ok(f.has(m.idx(ruin.x, ruin.z)));
  // sương tắt sau lần xong đầu
  p.fog = false;
  assert.equal(fogged(m, p).size, 0);
  // đảo cũ: không sương
  const mo = buildMap(OLD);
  assert.equal(fogged(mo, isleState(OLD)).size, 0);
});

test('lootMat: vật cản rơi đúng vật liệu; jungletree có thể rơi thêm dây leo (roll giả)', () => {
  const m = buildMap(DB), T = m.T;
  const jt = m.cells.find(c => c.k === 'ob' && T.obstacles[c.t][0] === 'art:jungletree');
  assert.ok(jt, 'đảo Bướm có jungletree');
  assert.deepEqual(lootMat(jt, () => 0.1, T), { wood: 1, liana: 1 });
  assert.deepEqual(lootMat(jt, () => 0.5, T), { wood: 1 });
  const bam = m.cells.find(c => c.k === 'ob' && c.mat === 'bamboo');
  assert.deepEqual(lootMat(bam, () => 0, T), { bamboo: 1 });
  const none = m.cells.find(c => c.k === 'ob' && c.mat === null);
  assert.deepEqual(lootMat(none, () => 0, T), {});
  assert.deepEqual(lootMat({ k: 'ob', t: 0, mat: 'stone' }), { stone: 1 }); // không có T: không có dây leo
});

test('sửa công trình: góp từ Kho, không góp quá cần, đủ thì sang giai đoạn, xong thì aruin', () => {
  start();
  const p = isleState(LC);
  assert.deepEqual(ruinNeed(LC, p), { wood: { need: 4, got: 0 }, palmleaf: { need: 4, got: 0 } });
  assert.equal(ruinGive(LC, p, 'wood'), 0, 'Kho trống');
  S.inv.wood = 10; S.inv.palmleaf = 2; S.inv.stone = 9;
  assert.equal(ruinGive(LC, p, 'wood'), 4);
  assert.equal(have('wood'), 6);
  assert.equal(ruinGive(LC, p, 'wood'), 0, 'không góp quá cần');
  assert.equal(ruinGive(LC, p, 'stone'), 0, 'món không cần ở giai đoạn này');
  assert.equal(have('stone'), 9);
  assert.equal(ruinGive(LC, p, 'palmleaf'), 2);
  assert.equal(ruinAdvance(LC, p), null, 'chưa đủ');
  assert.equal(ruinNeed(LC, p).palmleaf.got, 2);
  S.inv.palmleaf = 5;
  assert.equal(ruinGive(LC, p, 'palmleaf'), 2);
  assert.equal(have('palmleaf'), 3);
  assert.equal(ruinAdvance(LC, p), 'stage');
  assert.equal(p.ruin.stage, 1);
  assert.deepEqual(ruinNeed(LC, p), { stone: { need: 4, got: 0 }, wood: { need: 4, got: 0 } });
  assert.equal(isleQuest(LC).got, 0);
  assert.equal(ruinGive(LC, p, 'stone'), 4);
  assert.equal(ruinGive(LC, p, 'wood'), 4);
  assert.equal(have('wood'), 2);
  assert.equal(ruinAdvance(LC, p), 'done');
  assert.equal(ruinNeed(LC, p), null);
  assert.equal(ruinAdvance(LC, p), null, 'xong rồi thì thôi');
  assert.equal(ruinGive(LC, p, 'wood'), 0);
  // sau khi sửa xong, bước aruin ở đúng thứ tự vẫn tính là xong
  p.q = 1;
  assert.equal(isleQuest(LC).got, 1);
});

test('nhiệm vụ đảo: sự kiện chỉ cộng cho đúng đảo, chặn ở n, nhận thưởng một lần rồi sang bước sau', () => {
  start({ coins: 0, xp: 0 });
  const p = isleState(LC), q = isleState(HD);
  const step0 = LC.story.steps[0];
  assert.equal(isleQuest(LC).req.ev, 'aclear');
  assert.equal(isleQuest(LC).got, 0);
  assert.equal(isleClaim(LC), null, 'chưa đủ');
  isleEvent(LC, 'aclear', 4);
  isleEvent(LC, 'achest');           // sai loại sự kiện
  isleEvent(HD, 'aclear', 3);        // đảo khác
  assert.equal(isleQuest(LC).got, 4);
  assert.equal(q.qp, 3);
  assert.equal(p.qp, 4);
  assert.equal(isleClaim(LC), null);
  isleEvent(LC, 'aclear', 9);
  assert.equal(isleQuest(LC).got, step0.req.n, 'chặn ở n');
  const coins = S.coins;
  const got = isleClaim(LC);
  assert.equal(got.req.ev, 'aclear');
  assert.equal(S.coins, coins + step0.coins);
  assert.ok(S.xp > 0 || S.level > 1);
  assert.equal(p.q, 1);
  assert.equal(p.qp, 0);
  assert.equal(isleQuest(LC).req.ev, 'aruin');
  assert.equal(isleClaim(LC), null, 'không nhận lại, bước sau chưa xong');
  assert.equal(S.coins, coins + step0.coins);
  // rương: đếm theo số rương đã mở trên đảo, kể cả mở trước khi tới bước
  p.q = 2; p.chests = [3, 4];
  assert.equal(isleQuest(LC).got, 2);
  assert.ok(isleClaim(LC));
  // đích: chỉ đếm khi đang ở bước đó
  assert.equal(isleQuest(LC).req.ev, 'agoal');
  isleEvent(LC, 'agoal');
  assert.ok(isleClaim(LC));
  assert.equal(isleQuest(LC), null, 'hết bước');
  assert.equal(isleClaim(LC), null);
  isleEvent(LC, 'aclear'); // không hỏng khi hết bước
  // đảo cũ: không có nhiệm vụ
  assert.equal(isleQuest(OLD), null);
  assert.equal(isleClaim(OLD), null);
});

test('nextHint: chỉ ô chạm được; đích sau vật cản thì chỉ vật cản đầu tiên trên đường; bước aruin thiếu đá thì chỉ vật cản rơi đá; hết vật cản thì null', () => {
  start();
  const m = buildMap(LC), p = isleState(LC), T = m.T;
  // aclear: một vật cản chạm được
  let h = nextHint(m, p);
  assert.equal(m.cells[h].k, 'ob');
  assert.ok(reach(m, p, m.cells[h]));
  // achest: lần theo gợi ý thì cuối cùng chạm tới rương, mỗi bước đều chạm được
  p.q = 2;
  const chests = new Set(m.cells.map((c, i) => c.k === 'chest' ? i : -1).filter(i => i >= 0));
  let guard = 0;
  for (h = nextHint(m, p); !chests.has(h); h = nextHint(m, p)) {
    assert.ok(reach(m, p, m.cells[h]) && m.cells[h].k === 'ob', 'gợi ý phải chạm được');
    p.open.push(h);
    assert.ok(++guard < 200);
  }
  assert.ok(reach(m, p, m.cells[h]));
  p.chests.push(h);
  // mở hết rương: bước achest xong (đủ 2) thì chỉ người dân
  const other = [...chests].find(i => i !== h);
  p.chests.push(other);
  assert.equal(isleQuest(LC).got, 2);
  assert.equal(m.cells[nextHint(m, p)].k, 'npc');
  // aruin: Kho trống thì chỉ vật cản rơi gỗ / lá cọ; có đồ thì chỉ công trình (qua vật cản trên đường)
  start();
  const p2 = isleState(LC); p2.q = 1;
  h = nextHint(m, p2);
  assert.ok(['wood', 'palmleaf'].includes(m.cells[h].mat) && reach(m, p2, m.cells[h]));
  S.inv.wood = 4; S.inv.palmleaf = 4;
  const ruinIdx = m.cells.findIndex(c => c.k === 'ruin');
  guard = 0;
  for (h = nextHint(m, p2); h !== ruinIdx; h = nextHint(m, p2)) {
    assert.equal(m.cells[h].k, 'ob'); assert.ok(reach(m, p2, m.cells[h]));
    p2.open.push(h);
    assert.ok(++guard < 200);
  }
  // giai đoạn 2 cần đá: thiếu đá thì chỉ vật cản rơi đá
  ruinGive(LC, p2, 'wood'); ruinGive(LC, p2, 'palmleaf');
  assert.equal(ruinAdvance(LC, p2), 'stage');
  S.inv.wood = 4; // đủ gỗ, thiếu đá
  h = nextHint(m, p2);
  assert.equal(m.cells[h].k, 'ob');
  assert.equal(m.cells[h].mat, 'stone');
  assert.ok(reach(m, p2, m.cells[h]));
  // đủ đá thì lại chỉ công trình
  S.inv.stone = 4;
  guard = 0;
  for (h = nextHint(m, p2); h !== ruinIdx; h = nextHint(m, p2)) { p2.open.push(h); assert.ok(++guard < 200); }
  // agoal: đích (hoặc vật cản đầu đường)
  p2.q = 3;
  guard = 0;
  const goalIdx = m.cells.findIndex(c => c.k === 'goal');
  for (h = nextHint(m, p2); h !== goalIdx; h = nextHint(m, p2)) {
    assert.equal(m.cells[h].k, 'ob'); assert.ok(reach(m, p2, m.cells[h]));
    p2.open.push(h);
    assert.ok(++guard < 300);
  }
  // hết vật cản: aclear không còn gì để chỉ
  start();
  const p3 = isleState(LC);
  m.cells.forEach((c, i) => { if (c.k === 'ob') p3.open.push(i); });
  assert.equal(nextHint(m, p3), null);
  // đảo Bướm thiếu dây leo: chỉ cây rơi dây leo
  start();
  const md = buildMap(DB), pd = isleState(DB); pd.q = 1; pd.ruin.stage = 1;
  S.inv.wood = 6;
  h = nextHint(md, pd);
  assert.equal(md.T.obstacles[md.cells[h].t][0], 'art:jungletree');
  // đảo cũ
  assert.equal(nextHint(buildMap(OLD), isleState(OLD)), null);
  void T;
});

test('xong đảo: trao quà một lần; chơi lại: vật cản mọc lại, sương không phủ lại, nhiệm vụ và công trình giữ nguyên, quà không trao lần hai', () => {
  start();
  const p = isleState(LC);
  assert.equal(p.fog, undefined);
  p.open = [5, 6, 7]; p.chests = [9]; p.done = true; p.q = 2; p.qp = 3; p.ruin = { stage: 1, got: { stone: 2 } };
  assert.deepEqual(isleFinish(LC), { prize: 'kitten' });
  assert.deepEqual(S.pendingDecor, ['kitten']);
  assert.equal(p.prize, true);
  assert.equal(p.fog, false);
  assert.deepEqual(isleFinish(LC), {});
  assert.deepEqual(S.pendingDecor, ['kitten']);
  isleReplayReset(LC);
  assert.deepEqual(p.open, []); assert.deepEqual(p.chests, []);
  assert.equal(p.done, false); assert.equal(p.runs, 1);
  assert.equal(p.q, 2); assert.equal(p.qp, 3);
  assert.deepEqual(p.ruin, { stage: 1, got: { stone: 2 } });
  assert.equal(p.prize, true); assert.equal(p.fog, false);
  assert.equal(fogged(buildMap(LC), p).size, 0);
  // chưa xong thì không đặt lại
  p.open = [1];
  isleReplayReset(LC);
  assert.deepEqual(p.open, [1]); assert.equal(p.runs, 1);
  p.done = true; isleFinish(LC);
  assert.deepEqual(S.pendingDecor, ['kitten']);
  // đảo cũ: không quà, không đổi
  const po = isleState(OLD);
  assert.deepEqual(isleFinish(OLD), {});
  assert.deepEqual(Object.keys(po).sort(), ['chests', 'done', 'open', 'runs']);
});

test('bản lưu cũ S.adv.shell { open, chests, done, runs } mở ra giữ nguyên, isleState không thêm trường cho đảo cũ', () => {
  start();
  S.adv = { shell: { open: [1, 2], chests: [0], done: true, runs: 2 } };
  const p = isleState(OLD);
  assert.deepEqual(p, { open: [1, 2], chests: [0], done: true, runs: 2 });
  assert.equal(p, S.adv.shell);
  isleReplayReset(OLD);
  assert.deepEqual(p, { open: [], chests: [], done: false, runs: 3 });
  // đảo truyện thiếu trường (bản lưu giữa chừng) được bổ sung, không mất trường đã có
  S.adv['lang-chai'] = { open: [3], chests: [], done: false, runs: 0 };
  const q = isleState(LC);
  assert.deepEqual(q.open, [3]);
  assert.equal(q.q, 0); assert.equal(q.qp, 0); assert.equal(q.prize, false);
  assert.deepEqual(q.ruin, { stage: 0, got: {} });
  // đảo truyện mới
  const n = isleState(HD);
  assert.deepEqual(n, { open: [], chests: [], done: false, runs: 0, q: 0, qp: 0, ruin: { stage: 0, got: {} }, prize: false });
});

test('chartLocked: cấp thấp thì có lời gợi ý, đủ cấp thì null', () => {
  start({ level: 1 });
  assert.equal(chartLocked(HD), 'Mở ở cấp 6');
  S.level = 5; assert.equal(chartLocked(HD), 'Mở ở cấp 6');
  S.level = 6; assert.equal(chartLocked(HD), null);
  S.level = 12; assert.equal(chartLocked(DB), null);
});
