// Hội thoại: lớp #talk phủ toàn màn hình, chân dung lớn ở góc dưới trái, khung chữ ở đáy.
// Chạm bất kỳ đâu → câu sau; hết câu thì gọi done. "Bỏ qua" kết thúc ngay.
import { ICONS } from './assets.js';
import { talkerName } from './data.js';

let cur = null; // { lines, i, done } khi đang nói chuyện
const queue = []; // lời thoại xếp hàng, nói sau khi đoạn đang nói xong

const $ = s => document.querySelector(s);

function show() {
  const [who, text] = cur.lines[cur.i];
  const url = ICONS['talk:' + who] || ICONS['face:' + who];
  const im = $('#talkFace');
  if (url) { im.src = url; im.hidden = false; } else { im.removeAttribute('src'); im.hidden = true; }
  im.classList.toggle('half', !!ICONS['talk:' + who]); // hình nửa người không cắt tròn
  $('#talkWho').textContent = talkerName(who);
  $('#talkTxt').textContent = text;
  $('#talkNext').textContent = cur.i + 1 < cur.lines.length ? '▶' : '✓';
}

function finish() {
  const c = cur; if (!c) return;
  cur = null;
  $('#talk').hidden = true;
  c.done?.();
  if (!cur && queue.length) talk(queue.shift());
}

function next() {
  if (!cur) return;
  if (++cur.i >= cur.lines.length) finish(); else show();
}

// Một lần gắn các sự kiện (an toàn khi gọi nhiều lần)
let wired = false;
function wire() {
  if (wired) return; wired = true;
  const root = $('#talk');
  root.addEventListener('click', e => { e.stopPropagation(); if (e.target.closest('#talkSkip')) finish(); else next(); });
  root.addEventListener('pointerdown', e => e.stopPropagation());
  // Bàn phím: Esc = bỏ qua (chặn không cho đóng bảng bên dưới), Enter/Space = câu sau
  document.addEventListener('keydown', e => {
    if (!cur) return;
    if (e.key === 'Escape') { e.stopImmediatePropagation(); finish(); }
    else if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest?.('#talkSkip')) { e.preventDefault(); next(); }
  }, true);
}

// lines: [[who, text], …]. Rỗng thì gọi done ngay.
export function talk(lines, done) {
  if (cur) { const q = queue.splice(0); finish(); queue.unshift(...q); } // đang nói dở thì kết thúc câu chuyện cũ trước (hàng đợi giữ nguyên)
  if (!lines || !lines.length) { done?.(); return; }
  wire();
  cur = { lines, i: 0, done };
  $('#talk').hidden = false;
  show();
  $('#talkSkip').focus({ preventScroll: true });
}

// Đang nói thì xếp hàng nói sau, rảnh thì nói ngay
export function talkLater(lines) { if (cur) queue.push(lines); else talk(lines); }

export const talking = () => !!cur;
