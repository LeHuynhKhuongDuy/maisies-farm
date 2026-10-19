import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { buildMap } from '../src/advmap.js';
import { ADVENTURES } from '../src/data.js';

const sha = A => createHash('sha1').update(JSON.stringify(buildMap(A).cells)).digest('hex');
const story = ADVENTURES.filter(A => A.story), old = ADVENTURES.filter(A => !A.story);

// Băm chụp bằng hàm buildMap cũ (trước khi tách), đảo cũ phải ra đúng như vậy
const OLD_HASH = {
  shell: '533a80f564f725c868047a2ac530d61d772665cf',
  crab: '43de2f9af5d1592bba00de1ca48894e65d860fd8',
  palm: '64dbb32e3853c2f719d5c788eaf61ea7a3a7feae',
  pirate: 'b45f79ba75f339f35c42193f2645a0da6a296792',
  penguin: 'e70cd99c95316537d26869f7b941dbf6eaa65838',
};

test('buildMap của 5 đảo cũ không đổi', () => {
  assert.deepEqual(old.map(A => A.id), Object.keys(OLD_HASH));
  for (const A of old) assert.equal(sha(A), OLD_HASH[A.id], A.id);
});

test('có 3 đảo truyện', () => {
  assert.deepEqual(story.map(A => A.id), ['lang-chai', 'hai-dang', 'dao-buom']);
});

test('đảo truyện: đúng 1 ô npc kề ô open, ô ruin không nằm trên lối vào hay đích, mọi ô ob có mat thuộc chủ đề', () => {
  for (const A of story) {
    const m = buildMap(A), { cells, idx } = m;
    const nbrs = c => [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dz]) => cells[idx(c.x + dx, c.z + dz)]).filter(Boolean);
    const npc = cells.filter(c => c.k === 'npc');
    assert.equal(npc.length, 1, A.id + ' npc');
    assert.ok(nbrs(npc[0]).some(n => n.k === 'open'), A.id + ' npc kề open');
    const ruin = cells.filter(c => c.k === 'ruin');
    assert.equal(ruin.length, 1, A.id + ' ruin');
    assert.ok([1, 2].includes(ruin[0].span));
    const parts = cells.filter(c => c.k === 'ruinpart');
    assert.equal(parts.length, ruin[0].span === 2 ? 3 : 0);
    for (const p of parts) assert.equal(p.main, idx(ruin[0].x, ruin[0].z));
    // ruin/ruinpart/npc không chồng lên lối vào hay đích
    assert.equal(cells.filter(c => c.k === 'goal').length, 1);
    assert.equal(cells.filter(c => c.k === 'open').length, 4);
    // mọi ô ob có mat thuộc chủ đề
    const mats = m.T.obstacles.map(o => o[4]);
    for (const c of cells.filter(c => c.k === 'ob')) assert.ok(mats.includes(c.mat), `${A.id} mat ${c.mat}`);
    // ruin không bị rương/ob kẹt: ruin kề ít nhất một ô không phải nước
    assert.ok(nbrs(ruin[0]).some(n => n.k !== 'water'));
  }
});

test('đảo cũ không có ô npc/ruin và không có mat', () => {
  for (const A of old) for (const c of buildMap(A).cells) { assert.ok(!['npc', 'ruin', 'ruinpart'].includes(c.k)); assert.ok(!('mat' in c)); }
});
