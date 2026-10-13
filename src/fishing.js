// Câu cá ở cầu tàu: thả câu, chờ phao chìm rồi bấm thật nhanh
import { ITEMS } from './data.js';
import { S, rnd, add, barnRoom, addXP, save, emit } from './state.js';
import { ICONS } from './assets.js';
import { sfx } from './sound.js';
import { $, img, coinI, esc, toast, flyItem, flyCoins, openModal, closeModal, renderHUD, M } from './ui.js';

const CATCH = [['fish', 58], ['bigfish', 20], ['coins', 12], ['boot', 10]];
let st = 'idle', timer = 0, got = null;

export function openFishing(hooks) {
  st = 'idle'; got = null;
  openModal('fish', 'Cầu câu cá', `<div class="pond" id="pond">
      <span class="swim s1">${img('fish')}</span><span class="swim s2">${img('bigfish')}</span><span class="swim s3">${img('fish')}</span>
      <div id="pondScene"></div></div>
    <button class="btn wide orange" id="fishBtn" style="margin-top:12px"></button>
    <p class="hint" style="margin-top:8px">Mỗi lần thả câu tốn 1 năng lượng. Phao chìm thì bấm <b>Kéo lên!</b> thật nhanh.</p>`);
  render();
  $('#fishBtn').onclick = () => press(hooks);
  $('#pond').onclick = () => press(hooks);
}

function render() {
  if (!M || M.type !== 'fish') return;
  const sc = $('#pondScene'), b = $('#fishBtn');
  if (st === 'idle') { sc.innerHTML = '<span class="rod">🎣</span>'; b.textContent = 'Thả câu'; b.className = 'btn wide orange'; }
  else if (st === 'wait') { sc.innerHTML = '<span class="line"></span><span class="bobber"></span>'; b.textContent = 'Đang chờ cá cắn câu…'; b.className = 'btn wide gray'; }
  else if (st === 'bite') { sc.innerHTML = '<span class="line"></span><span class="ripple"></span><span class="bobber bite"></span><span class="bang">❗</span>'; b.textContent = 'Kéo lên!'; b.className = 'btn wide hot'; }
  else if (st === 'got') {
    const pic = got === 'boot' ? '<span class="caught">👢</span>' : got === 'coins' ? `<span class="caught">${coinI}</span>` : `<span class="caught">${img(got)}</span>`;
    sc.innerHTML = pic;
    b.textContent = got === 'boot' ? 'Ôi, chiếc ủng cũ! Câu tiếp' : got === 'coins' ? 'Câu được túi xu! Câu tiếp' : `Câu được ${ITEMS[got].n.toLowerCase()}! Câu tiếp`;
    b.className = 'btn wide orange';
  } else { sc.innerHTML = '<span class="rod">💦</span>'; b.textContent = 'Cá chạy mất rồi! Thử lại'; b.className = 'btn wide orange'; }
}

function press(hooks) {
  clearTimeout(timer);
  if (st === 'wait') { toast('Chờ phao chìm rồi mới kéo nhé!'); return; }
  if (st === 'bite') { reel(); return; }
  if (S.energy < 1) { closeModal(); hooks.openEnergy?.(); return; }
  if (barnRoom() <= 0) { toast('Kho đầy rồi!'); sfx('no'); return; }
  S.energy -= 1; renderHUD();
  st = 'wait'; sfx('plant'); render();
  timer = setTimeout(() => {
    st = 'bite'; sfx('cluck'); render();
    timer = setTimeout(() => { st = 'miss'; render(); }, 1900);
  }, 1400 + rnd(2600));
}

function reel() {
  let r = rnd(100); got = CATCH.find(([, w]) => (r -= w) < 0)[0];
  const bb = $('#fishBtn').getBoundingClientRect(), x = bb.left + bb.width / 2, y = bb.top;
  if (got === 'boot') { S.coins += 2; }
  else if (got === 'coins') { const c = 8 + rnd(12); S.coins += c; flyCoins(x, y, c); }
  else { add(got, 1); flyItem(x, y, got, 1); }
  addXP(1); emit('act', 'harvest', got, 1);
  st = 'got'; sfx('collect'); render(); save(); renderHUD();
}
