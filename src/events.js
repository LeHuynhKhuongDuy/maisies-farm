// Lễ hội Biển hằng tuần + sổ sưu tập
import { COLLECTIONS, EVENT, DECOR } from './data.js';
import { S, on, rnd, pick, save } from './state.js';
import { ICONS } from './assets.js';
import { sfx } from './sound.js';
import { $, coinI, gemI, esc, fmt, toast, confetti, openModal, closeModal, renderHUD } from './ui.js';

const DROP = { harvest: 0.03, collect: 0.03, make: 0.04, clear: 0.08, chest: 0.35, deliver: 0.06, visitor: 0.1, crate: 0.06, help: 0.06 };
const PIECES = COLLECTIONS.flatMap(c => c.pieces.map(p => ({ set: c.id, id: p[0], n: p[1], model: p[2] })));

function monday(d = new Date()) { const day = (d.getDay() + 6) % 7; return new Date(d.getFullYear(), d.getMonth(), d.getDate() - day); }
function ensureEvent() {
  const wk = monday().toDateString();
  if (!S.ev || S.ev.week !== wk) S.ev = { week: wk, pts: 0, claimed: [] };
  S.coll ||= {};
  return S.ev;
}
const weekEndsIn = () => monday().getTime() + 7 * 86400000 - Date.now();

let hooks = {};
export function initEvents(h) {
  hooks = h; ensureEvent();
  on('act', (ev, key, n = 1) => {
    const e = ensureEvent();
    const g = EVENT.gain[ev];
    if (g) { e.pts += g; pulse(); }
    if (Math.random() < (DROP[ev] || 0)) found(pick(PIECES));
  });
  $('#btnEvent').onclick = () => { sfx('tap'); openEvent(); };
  $('#btnColl').onclick = () => { sfx('tap'); openCollections(); };
  $('#evIco').src = ICONS['ev:token'];
  renderEventBadge();
}

function pulse() {
  const b = $('#btnEvent');
  b.animate([{ transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 300 });
  renderEventBadge();
}
export function renderEventBadge() {
  const e = ensureEvent();
  const ready = EVENT.tiers.some((t, i) => e.pts >= t.at && !e.claimed.includes(i));
  $('#evBadge').hidden = !ready;
  $('#evPts').textContent = e.pts;
  const collReady = COLLECTIONS.some(c => c.pieces.every(p => (S.coll[p[0]] || 0) > 0));
  $('#collBadge').hidden = !collReady;
}

function found(p) {
  S.coll[p.id] = (S.coll[p.id] || 0) + 1;
  const el = document.createElement('div'); el.className = 'found';
  el.innerHTML = `<img src="${ICONS['col:' + p.id]}" alt=""><div><small>Tìm thấy đồ sưu tập!</small><b>${esc(p.n)}</b></div>`;
  $('#fx').appendChild(el); setTimeout(() => el.remove(), 3000);
  sfx('collect'); renderEventBadge(); save();
}

// ---------- Bảng sự kiện ----------
function tierReward(t) {
  if (t.coins) return `${coinI}${t.coins}`;
  if (t.gems) return `${gemI}${t.gems}`;
  return `<img class="inl" src="${ICONS['decor:' + t.decor]}" alt="">${esc(DECOR[t.decor].n)}`;
}
function openEvent() {
  const e = ensureEvent(), max = EVENT.tiers[EVENT.tiers.length - 1].at;
  const rows = EVENT.tiers.map((t, i) => {
    const got = e.claimed.includes(i), can = e.pts >= t.at && !got;
    return `<div class="tier ${got ? 'done' : ''}"><span class="at"><img class="inl" src="${ICONS['ev:token']}" alt="">${t.at}</span>
      <span class="rw">${tierReward(t)}</span>
      ${got ? '<span class="ok">Đã nhận ✓</span>' : `<button class="btn small ${can ? 'orange' : 'gray'}" data-tier="${i}">${can ? 'Nhận' : 'Chưa đủ'}</button>`}</div>`;
  }).join('');
  openModal('event', EVENT.n, `<p class="hint">Gom <b>${EVENT.token}</b> bằng cách thu hoạch, làm bánh, giao hàng, bán cho khách và phiêu lưu. Còn <b>${fmt(weekEndsIn())}</b> là hết tuần.</p>
    <div class="prog"><i style="width:${Math.min(100, e.pts / max * 100)}%"></i><span><img class="inl" src="${ICONS['ev:token']}" alt=""> ${e.pts} / ${max}</span></div>
    <div class="tiers">${rows}</div>`);
  document.querySelectorAll('[data-tier]').forEach(b => b.onclick = () => claimTier(+b.dataset.tier));
}
function claimTier(i) {
  const e = ensureEvent(), t = EVENT.tiers[i];
  if (e.pts < t.at || e.claimed.includes(i)) { toast(`Cần ${t.at} ${EVENT.token.toLowerCase()}`); sfx('no'); return; }
  e.claimed.push(i);
  if (t.coins) S.coins += t.coins;
  if (t.gems) S.gems += t.gems;
  if (t.decor) { (S.pendingDecor ||= []).push(t.decor); closeModal(); hooks.placePending?.(); }
  confetti(); sfx('level'); save(); renderHUD(); renderEventBadge();
  if (!t.decor) openEvent();
}

// ---------- Sổ sưu tập ----------
function openCollections() {
  const sets = COLLECTIONS.map(c => {
    const full = c.pieces.every(p => (S.coll[p[0]] || 0) > 0);
    return `<div class="cset"><h3 class="sub">${esc(c.n)}</h3><div class="cpieces">${c.pieces.map(p => {
      const n = S.coll[p[0]] || 0;
      return `<div class="cp ${n ? '' : 'none'}"><img src="${ICONS['col:' + p[0]]}" alt=""><small>${esc(p[1])}</small>${n ? `<span class="q">${n}</span>` : ''}</div>`;
    }).join('')}</div>
    <div class="row" style="justify-content:center;gap:10px;margin-top:8px"><span class="reward">${coinI}${c.reward.coins} ${gemI}${c.reward.gems}</span>
    <button class="btn small ${full ? 'orange' : 'gray'}" data-set="${c.id}">${full ? 'Đổi thưởng' : 'Chưa đủ bộ'}</button></div></div>`;
  }).join('');
  openModal('coll', 'Sổ sưu tập', `<p class="hint">Đồ sưu tập rơi ra ngẫu nhiên khi thu hoạch, làm bánh, dọn dẹp và mở rương báu.</p>${sets}`);
  document.querySelectorAll('[data-set]').forEach(b => b.onclick = () => {
    const c = COLLECTIONS.find(x => x.id === b.dataset.set);
    if (!c.pieces.every(p => (S.coll[p[0]] || 0) > 0)) { toast('Còn thiếu vài món trong bộ này'); sfx('no'); return; }
    c.pieces.forEach(p => S.coll[p[0]]--);
    S.coins += c.reward.coins; S.gems += c.reward.gems;
    confetti(); sfx('level'); save(); renderHUD(); renderEventBadge(); openCollections();
  });
}

export function eventIcons() {
  const list = PIECES.map(p => ['col:' + p.id, { model: p.model }]);
  list.push(['ev:token', { model: EVENT.icon, paint: EVENT.tint }]);
  return list;
}
