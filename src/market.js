// Quầy chợ ven đường: bày hàng từ kho, khách ghé mua, chạm để thu xu
import { OFF, ITEMS, PEOPLE } from './data.js';
import { S, now, rnd, pick, have, add, save, footprint, findFree, newId, emit } from './state.js';
import { ICONS } from './assets.js';
import { sfx } from './sound.js';
import { $, img, coinI, gemI, esc, fmt, toast, flyCoins, openModal, closeModal, renderHUD, M } from './ui.js';

const MAX = 6;
export const marketOf = () => S.objs.find(o => o.k === 'market');

// Nông trại cũ chưa có quầy chợ thì tự thêm vào
export function ensureMarket(addView) {
  if (marketOf()) return;
  const spot = findFree(2, 2, 6 + OFF, 12 + OFF); if (!spot) return;
  const o = { id: newId(), k: 'market', t: 'market', x: spot[0], z: spot[1], r: 0, slots: [null, null, null, null], cap: 4 };
  S.objs.push(o); addView?.(o);
}

export function marketTick() {
  const o = marketOf(); if (!o) return;
  const t = now();
  let changed = false;
  for (const s of o.slots) if (s && !s.sold && t >= s.buyAt) { s.sold = true; s.buyer = pick(PEOPLE.slice(1)).id; changed = true; }
  if (changed && M?.type === 'market' && pickSlot < 0 && !draft) draw(o);
}
export const soldCount = () => (marketOf()?.slots || []).filter(s => s && s.sold).length;

export function collectMarket(sx, sy) {
  const o = marketOf(); let coins = 0;
  o.slots = o.slots.map(s => { if (s && s.sold) { coins += s.price; return null; } return s; });
  if (!coins) return false;
  S.coins += coins; flyCoins(sx, sy, coins); sfx('coin'); emit('act', 'deliver'); save(); renderHUD();
  return true;
}

let pickSlot = -1, draft = null;
export function openMarket() {
  const o = marketOf(); if (!o) return;
  pickSlot = -1; draft = null; draw(o);
}
function draw(o) {
  const t = now();
  let body;
  if (draft) { // chọn số lượng & giá
    const it = ITEMS[draft.item], maxQ = Math.min(10, have(draft.item));
    body = `<div class="celebrate"><img src="${ICONS[draft.item]}" alt="" style="width:90px;height:90px"><b style="font-size:20px">${esc(it.n)}</b>
      <div class="row" style="gap:12px"><button class="btn small blue" id="qm">−</button><b style="font-size:22px;min-width:60px">×${draft.n}</b><button class="btn small blue" id="qp">+</button></div>
      <div class="row" style="gap:12px"><button class="btn small" id="pm">−</button><b style="font-size:22px;min-width:90px">${coinI}${draft.price}</b><button class="btn small" id="pp">+</button></div>
      <p class="hint">Giá vừa phải thì khách tới mua nhanh hơn.</p>
      <div class="row" style="gap:10px"><button class="btn gray" id="dBack">Quay lại</button><button class="btn orange" id="dOk">Bày lên sạp</button></div></div>`;
    $('#mBody').innerHTML = body;
    const fair = () => Math.round(it.v * draft.n * 1.4);
    $('#qm').onclick = () => { draft.n = Math.max(1, draft.n - 1); draft.price = fair(); draw(o); };
    $('#qp').onclick = () => { draft.n = Math.min(maxQ, draft.n + 1); draft.price = fair(); draw(o); };
    $('#pm').onclick = () => { draft.price = Math.max(1, draft.price - Math.max(1, Math.round(it.v / 2))); draw(o); };
    $('#pp').onclick = () => { draft.price += Math.max(1, Math.round(it.v / 2)); draw(o); };
    $('#dBack').onclick = () => { draft = null; draw(o); };
    $('#dOk').onclick = () => {
      if (have(draft.item) < draft.n) { toast('Kho không đủ hàng'); return; }
      add(draft.item, -draft.n);
      const ratio = draft.price / (it.v * draft.n); // bán đắt thì chờ lâu hơn
      o.slots[pickSlot] = { item: draft.item, n: draft.n, price: draft.price, buyAt: t + (20 + rnd(40)) * 1000 * Math.max(0.6, ratio), sold: false };
      sfx('build'); draft = null; pickSlot = -1; save(); renderHUD(); draw(o);
    };
    return;
  }
  if (pickSlot >= 0) { // chọn món trong kho
    const keys = Object.keys(ITEMS).filter(k => have(k) > 0);
    body = keys.length ? `<p class="hint">Chọn món muốn bán</p><div class="inv">${keys.map(k => `<button class="it" data-mi="${k}">${img(k)}<span class="q">${have(k)}</span><small>${esc(ITEMS[k].n)}</small></button>`).join('')}</div>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn gray" id="mBack">Quay lại</button></div>`
      : '<p class="hint">Kho trống, chưa có gì để bán.</p>';
    $('#mBody').innerHTML = body;
    document.querySelectorAll('[data-mi]').forEach(b => b.onclick = () => { const k = b.dataset.mi; draft = { item: k, n: Math.min(have(k), CROPISH(k) ? 5 : 1), price: 0 }; draft.price = Math.round(ITEMS[k].v * draft.n * 1.4); draw(o); });
    $('#mBack') && ($('#mBack').onclick = () => { pickSlot = -1; draw(o); });
    return;
  }
  const slots = o.slots.map((s, i) => {
    if (!s) return `<button class="slot mk" data-ms="${i}"><span style="font-size:30px;color:var(--ink-soft)">＋</span><span class="t">Bày hàng</span></button>`;
    if (s.sold) return `<button class="slot mk done" data-mc="${i}"><img src="${ICONS['face:' + s.buyer]}" alt=""><span class="t">Đã bán ${coinI.replace('ico coin', 'ico coin sm')}${s.price}</span></button>`;
    return `<div class="slot mk"><img src="${ICONS[s.item]}" alt=""><span class="t">×${s.n} · ${s.price} xu</span><span class="bar"><i data-s="${s.buyAt - 60000}" data-e="${s.buyAt}"></i></span><button class="mkx" data-mx="${i}" aria-label="Cất lại vào kho">✕</button></div>`;
  }).join('');
  const more = o.cap < MAX ? `<button class="slot buy" id="mMore">Thêm sạp<span>${gemI}${(o.cap - 3) * 4}</span></button>` : '';
  const sold = o.slots.filter(s => s && s.sold).length;
  openModal('market', 'Quầy chợ', `<p class="hint">Bày nông sản lên sạp, khách đi ngang sẽ mua. Chạm vào sạp đã bán để thu xu.</p>
    <div class="queue">${slots}${more}</div>
    ${sold ? `<button class="btn wide orange" id="mCollect" style="margin-top:14px">Thu ${sold} sạp đã bán</button>` : ''}`);
  document.querySelectorAll('[data-ms]').forEach(b => b.onclick = () => { pickSlot = +b.dataset.ms; draw(o); });
  document.querySelectorAll('[data-mc]').forEach(b => b.onclick = e => { collectMarket(e.clientX, e.clientY); draw(o); });
  document.querySelectorAll('[data-mx]').forEach(b => b.onclick = () => { const i = +b.dataset.mx, s = o.slots[i]; add(s.item, s.n); o.slots[i] = null; sfx('tap'); save(); draw(o); });
  $('#mCollect') && ($('#mCollect').onclick = e => { collectMarket(e.clientX, e.clientY); draw(o); });
  $('#mMore') && ($('#mMore').onclick = () => {
    const cost = (o.cap - 3) * 4; if (S.gems < cost) { toast(`Cần ${cost} kim cương`); sfx('no'); return; }
    S.gems -= cost; o.cap++; o.slots.push(null); sfx('build'); save(); renderHUD(); draw(o);
  });
}
const CROPISH = k => ITEMS[k].v <= 6;
