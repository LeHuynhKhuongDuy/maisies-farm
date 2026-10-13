import { W, panBy, setZoom } from './world.js';
import { onTap, onLongPress, beginDrag, dragMove, endDrag } from './game.js';

// Cử chỉ: 1 ngón kéo = di chuyển bản đồ (hoặc gieo/thu hoạch liên tục), 2 ngón = phóng to/thu nhỏ,
// chạm = chọn, giữ lâu = di chuyển nhà/đồ
export function initInput(canvas) {
  const pts = new Map();
  let start = null, moved = false, mode = null, longT = 0, pinch = null, inertia = { x: 0, y: 0 }, lastMove = 0;

  canvas.addEventListener('pointerdown', e => {
    try { canvas.setPointerCapture(e.pointerId); } catch (err) { }
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    inertia.x = inertia.y = 0;
    if (pts.size === 1) {
      start = { x: e.clientX, y: e.clientY, t: performance.now() };
      moved = false;
      mode = beginDrag(e.clientX, e.clientY) ? 'drag' : 'pan';
      clearTimeout(longT);
      longT = setTimeout(() => { if (!moved && pts.size === 1 && mode === 'pan') { mode = 'none'; onLongPress(start.x, start.y); } }, 550);
    } else if (pts.size === 2) {
      clearTimeout(longT);
      if (mode === 'drag') endDrag(true, 0, 0);
      mode = 'pinch';
      const [a, b] = [...pts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), zoom: W.zoom, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
    }
  });

  canvas.addEventListener('pointermove', e => {
    const p = pts.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 10) { moved = true; clearTimeout(longT); }
    if (mode === 'pan' && moved) {
      panBy(dx, dy);
      const t = performance.now(), dt = Math.max(1, t - lastMove); lastMove = t;
      inertia.x = dx / dt * 16; inertia.y = dy / dt * 16;
    } else if (mode === 'drag') dragMove(e.clientX, e.clientY);
    else if (mode === 'pinch' && pts.size === 2) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      setZoom(pinch.zoom * d / pinch.d);
      panBy(mx - pinch.mx, my - pinch.my); pinch.mx = mx; pinch.my = my;
    }
  });

  const up = e => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    clearTimeout(longT);
    if (mode === 'pinch') { if (pts.size === 0) mode = null; start = null; return; }
    if (pts.size) return;
    if (mode === 'drag') endDrag(moved, e.clientX, e.clientY);
    else if (mode === 'pan' && !moved && start && performance.now() - start.t < 550) onTap(e.clientX, e.clientY);
    if (mode !== 'pan' || performance.now() - lastMove > 80) inertia.x = inertia.y = 0;
    mode = null; start = null;
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);

  canvas.addEventListener('wheel', e => { e.preventDefault(); setZoom(W.zoom * (e.deltaY < 0 ? 1.1 : 0.9)); }, { passive: false });
  // chặn cử chỉ phóng to trang của Safari
  document.addEventListener('gesturestart', e => e.preventDefault());

  return function momentum() {
    if (pts.size || (Math.abs(inertia.x) < 0.2 && Math.abs(inertia.y) < 0.2)) return;
    panBy(inertia.x, inertia.y); inertia.x *= 0.9; inertia.y *= 0.9;
  };
}
