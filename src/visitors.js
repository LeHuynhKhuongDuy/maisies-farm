// Khách ghé thăm: đi bộ từ bến tàu vào nông trại, xin mua một món, nhận xong thì về
import * as THREE from 'three';
import { GRID, ITEMS, CROPS, PEOPLE } from './data.js';
import { S, now, rnd, pick, have, add, addXP, producible, footprint, save, questEvent, emit } from './state.js';
import { W, cellToWorld } from './world.js';
import { make, play, ICONS } from './assets.js';
import { sfx } from './sound.js';
import { $, img, coinI, gemI, xpI, esc, toast, flyCoins, flyGems, flyXP, openModal, closeModal, renderHUD } from './ui.js';

const views = new Map(); // id -> holder
const DOCK = () => cellToWorld(17, GRID - 1);
const SAY = {
  crop: ['Bác đang nấu cơm, cháu bán cho bác {n} {item} nhé?', 'Nhà cô hết {item} rồi. Cháu có {n} {item} không?'],
  food: ['Cháu ơi, bác thèm {item} quá! Cho bác mua {n} phần nhé?', 'Hôm nay sinh nhật con chú, chú cần {n} {item}!'],
  other: ['Cháu có {n} {item} không? Bác trả giá cao lắm!', 'Mình đi ngang qua, mua {n} {item} được không bạn?'],
};

function freeSpot() {
  for (let k = 0; k < 40; k++) {
    const x = 7 + rnd(12), z = 5 + rnd(11);
    const busy = S.objs.some(o => { const [w, d] = footprint(o); return x >= o.x && x < o.x + w && z >= o.z && z < o.z + d; })
      || S.visitors.some(v => v.x === x && v.z === z);
    if (!busy) return [x, z];
  }
  return [12, 8];
}

function spawn() {
  const present = new Set(S.visitors.map(v => v.who));
  const people = PEOPLE.slice(1).filter(p => !present.has(p.id));
  if (!people.length) return;
  const who = pick(people).id, item = pick(producible());
  const n = CROPS[item] ? 2 + rnd(3) : 1 + rnd(2);
  const val = ITEMS[item].v * n;
  const [x, z] = freeSpot();
  const cat = CROPS[item] ? 'crop' : ITEMS[item].v >= 10 ? 'food' : 'other';
  const text = pick(SAY[cat]).replaceAll('{n}', n).replaceAll('{item}', ITEMS[item].n.toLowerCase());
  const v = { id: (S.visitId = (S.visitId || 0) + 1), who, item, n, x, z, text,
    coins: Math.round(val * 2) + 5, xp: Math.max(2, Math.round(val / 2)), gems: Math.random() < 0.15 ? 1 : 0, arrive: true };
  S.visitors.push(v);
  addView(v);
}

function addView(v) {
  const p = PEOPLE.find(x => x.id === v.who);
  const m = make(p.model, { h: 0.95 });
  m.userData.oid = 'v:' + v.id;
  const spot = cellToWorld(v.x, v.z);
  m.position.copy(v.arrive ? DOCK() : spot);
  m.userData.goal = spot.clone();
  W.farm.add(m); W.pickables.push(m);
  views.set(v.id, m);
}
function removeView(id) {
  const m = views.get(id); if (!m) return;
  W.farm.remove(m); W.pickables.splice(W.pickables.indexOf(m), 1); views.delete(id);
}

export function initVisitors() {
  S.visitors ||= [];
  S.visitors.forEach(v => { v.arrive = false; addView(v); });
  S.visitNext ||= now() + 20000;
}

export function visitorsTick() {
  const t = now();
  if (S.level >= 2 && S.visitors.length < 2 && t >= S.visitNext) {
    spawn(); S.visitNext = t + 45000 + rnd(45000);
  }
}

export function visitorsUpdate(t, dt) {
  for (const [id, m] of views) {
    const u = m.userData; u.mixer?.update(dt);
    const d = u.goal.clone().sub(m.position); d.y = 0;
    if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * 1.1)); m.position.add(d); m.rotation.y = Math.atan2(d.x, d.z); }
    else if (u.leaving) removeView(id);
    else { play(m, u.happy > 0 ? 'emote-yes' : 'idle'); u.happy = (u.happy || 0) - dt; m.rotation.y += (0.6 - m.rotation.y) * dt * 2; }
  }
}

export function visitorBubbles() {
  return S.visitors.filter(v => views.has(v.id) && !views.get(v.id).userData.leaving)
    .map(v => ({ oid: 'v:' + v.id, y: 1.35, icon: v.item, n: v.n, cls: have(v.item) >= v.n ? '' : 'hungry' }));
}
export const visitorRoot = oid => views.get(+String(oid).slice(2));

function leave(v, happy) {
  const m = views.get(v.id);
  S.visitors.splice(S.visitors.indexOf(v), 1);
  if (m) { m.userData.happy = happy ? 1.2 : 0; setTimeout(() => { m.userData.leaving = true; m.userData.goal.copy(DOCK()); }, happy ? 1200 : 200); }
  save();
}

export function tapVisitor(oid) {
  const v = S.visitors.find(x => 'v:' + x.id === oid); if (!v) return;
  const p = PEOPLE.find(x => x.id === v.who), ok = have(v.item) >= v.n;
  sfx('tap');
  openModal('visitor', p.n, `<div class="talk"><img src="${ICONS['face:' + v.who]}" alt=""><div class="say">${esc(v.text)}</div></div>
    <div class="need" style="margin:14px 0 8px"><span class="${ok ? 'ok' : 'lack'}">${img(v.item)}${Math.min(have(v.item), v.n)}/${v.n}</span></div>
    <div class="reward" style="font-size:18px"><span>Trả:</span><span>${coinI}${v.coins}</span><span>${xpI}${v.xp}</span>${v.gems ? `<span>${gemI}${v.gems}</span>` : ''}</div>
    <div class="row" style="justify-content:center;margin-top:14px;gap:10px">
      <button class="btn gray" id="vNo">Hết hàng rồi</button>
      <button class="btn ${ok ? 'orange' : 'gray'}" id="vYes">Bán cho ${esc(p.n.split(' ').pop())}</button></div>`);
  $('#vNo').onclick = () => { closeModal(); leave(v, false); toast(`${p.n} sẽ quay lại sau nhé!`); };
  $('#vYes').onclick = e => {
    if (have(v.item) < v.n) { toast(`Cần thêm ${v.n - have(v.item)} ${ITEMS[v.item].n.toLowerCase()}`); sfx('no'); return; }
    add(v.item, -v.n); S.coins += v.coins; S.gems += v.gems; addXP(v.xp);
    flyCoins(e.clientX, e.clientY, v.coins); flyXP(e.clientX, e.clientY); if (v.gems) flyGems(e.clientX, e.clientY);
    sfx('coin'); closeModal(); leave(v, true); questEvent('deliver'); emit('act', 'visitor'); renderHUD();
  };
}
