import { ICONS } from './assets.js';
import { S, now, energyNextIn, energyLabel, currentQuest } from './state.js';
import { xpNeed, energyMax, ITEMS } from './data.js';

export const $ = s => document.querySelector(s);
export const img = k => `<img src="${ICONS[k] || ''}" alt="">`;
export const coinI = '<span class="ico coin"></span>', gemI = '<span class="ico gem"></span>', boltI = '<span class="ico bolt"></span>', xpI = '<span class="xp"></span>';
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export function fmt(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  if (s < 60) return s + ' giây';
  const m = Math.floor(s / 60), r = s % 60;
  if (m < 60) return r ? `${m} phút ${r} giây` : `${m} phút`;
  if (m < 1440) return `${Math.floor(m / 60)} giờ ${m % 60} phút`;
  return `${Math.floor(m / 1440)} ngày ${Math.floor(m % 1440 / 60)} giờ`;
}
export const short = n => n >= 10000 ? (n / 1000).toFixed(n >= 100000 ? 0 : 1) + 'k' : String(n);

let toastT;
export function toast(m) {
  const t = $('#toast'); t.textContent = m; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
}

export function plus(x, y, text) {
  const e = document.createElement('div'); e.className = 'plus'; e.textContent = text;
  e.style.left = x + 'px'; e.style.top = y + 'px'; $('#fx').appendChild(e); setTimeout(() => e.remove(), 1000);
}

// Dòng "+3 Gỗ +1 Dây leo" ở góc dưới phải: gom các lần rơi cách nhau dưới 1,2 giây
let gain = null;
export function gainLine(drops) {
  const ks = Object.keys(drops || {}).filter(k => drops[k] > 0); if (!ks.length) return;
  if (!gain) {
    const el = document.createElement('div'); el.className = 'gain'; $('#fx').appendChild(el);
    gain = { el, sum: {} };
  }
  const g = gain;
  for (const k of ks) g.sum[k] = (g.sum[k] || 0) + drops[k];
  g.el.innerHTML = Object.entries(g.sum).map(([k, n]) => `<span>+${n} ${img(k)}${esc(ITEMS[k]?.n || k)}</span>`).join(' ');
  g.el.classList.remove('bump'); void g.el.offsetWidth; g.el.classList.add('bump');
  clearTimeout(g.t);
  g.t = setTimeout(() => { if (gain === g) gain = null; g.el.classList.add('out'); setTimeout(() => g.el.remove(), 400); }, 1200);
}

// Biểu tượng bay từ chỗ chạm về nút trên HUD
export function flyTo(x, y, target, html, delay = 0) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  const r = el.getBoundingClientRect(), tx = r.left + r.width / 2, ty = r.top + r.height / 2;
  const f = document.createElement('div'); f.className = 'fly'; f.innerHTML = html;
  f.style.transform = `translate(${x}px,${y}px)`; $('#fx').appendChild(f);
  const mx = (x + tx) / 2 + (Math.random() - 0.5) * 80, my = Math.min(y, ty) - 80;
  const a = f.animate([
    { transform: `translate(${x}px,${y}px) scale(.6)` },
    { transform: `translate(${mx}px,${my}px) scale(1.15)`, offset: 0.4 },
    { transform: `translate(${tx}px,${ty}px) scale(.7)` },
  ], { duration: 750, delay, easing: 'cubic-bezier(.5,0,.5,1)', fill: 'backwards' });
  a.onfinish = () => { f.remove(); el.animate([{ transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 200 }); };
}
export function flyItem(x, y, item, n = 1) {
  for (let i = 0; i < Math.min(n, 4); i++) flyTo(x + i * 8, y, '#btnBarn', img(item), i * 90);
}
export const flyCoins = (x, y, n) => { for (let i = 0; i < Math.min(5, Math.ceil(n / 10)); i++) flyTo(x, y, '#coinPill', coinI, i * 80); };
export const flyGems = (x, y) => flyTo(x, y, '#gemPill', gemI);
export const flyXP = (x, y) => flyTo(x, y, '#lvlBox', xpI);

export function confetti(n = 50) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cols = ['#ff6b5b', '#ffd23f', '#3aa7e8', '#62c43f', '#ff8ad8', '#a06cff'];
  for (let j = 0; j < n; j++) {
    const s = document.createElement('span'); s.className = 'conf';
    s.style.left = Math.random() * 100 + 'vw'; s.style.background = cols[j % cols.length];
    s.style.animationDuration = (1.6 + Math.random() * 1.6) + 's'; s.style.animationDelay = Math.random() * 0.4 + 's';
    s.style.borderRadius = Math.random() < 0.5 ? '50%' : '2px';
    $('#fx').appendChild(s); setTimeout(() => s.remove(), 4000);
  }
}

// ---------- Hộp thoại ----------
export let M = null;
export function openModal(type, title, html, extra = {}) {
  M = { type, ...extra };
  $('#mTitle').textContent = title; $('#mBody').innerHTML = html;
  $('#modal').hidden = false;
}
export function setModalBody(html) { const b = $('#mBody'), st = b.scrollTop; b.innerHTML = html; b.scrollTop = st; }
export function closeModal() { M = null; $('#modal').hidden = true; }

// ---------- HUD ----------
export function renderHUD() {
  $('#lv').textContent = S.level;
  const need = xpNeed(S.level);
  $('#xpfill').style.width = (S.xp / need * 100) + '%';
  $('#xptxt').textContent = `${S.xp}/${need}`;
  $('#coins').textContent = short(S.coins);
  $('#gems').textContent = short(S.gems);
  const emax = energyMax(S.level);
  $('#energy').textContent = energyLabel(S.energy, emax);
  $('#efill').style.width = Math.min(100, S.energy / emax * 100) + '%';
  $('#energyPill').classList.toggle('low', S.energy < 1);
  const q = currentQuest();
  $('#questBtn').hidden = !q;
  if (q) {
    $('#questFace').src = ICONS['face:' + q.who] || '';
    const done = S.qprog >= q.n, b = $('#questBadge');
    b.textContent = done ? '✓' : '!'; b.classList.toggle('ok', done);
  }
  $('#btnGift').hidden = S.lastDaily === new Date().toDateString();
}
export function energyHint() { return S.energy >= energyMax(S.level) ? 'Đầy năng lượng' : `+1 sau ${fmt(energyNextIn())}`; }
