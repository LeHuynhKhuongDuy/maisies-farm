import * as THREE from 'three';
import { GRID, OFF, ZONES, ITEMS, CROPS, TREES, PENS, FACTORIES, DECOR, OBSTACLES, PEOPLE, QUESTS, ADVENTURES,
  fieldCost, xpNeed, ENERGY_MAX, barnUpgradeCost } from './data.js';
import { S, now, rnd, pick, emit, on, save, footprint, isFree, findFree, have, add, hasAll, take,
  barnCap, barnUsed, barnRoom, addXP, energyTick, shipTick, refreshOrders, newShip,
  currentQuest, questEvent, claimQuest, newId, resetGame, exportSave, importSave } from './state.js';
import { W, groundAt, pickAt, toScreen, worldToCell, cellToWorld, focusOn, flyCamTo } from './world.js';
import { VIEWS, SPECIAL, addView, removeView, rebuildView, place, cropStage, bounce, walkTo, setHp, shake, chopPose } from './entities.js';
import { ICONS } from './assets.js';
import { hitObstacle, openChest, regrowTick } from './clearing.js';
import { isOpenCell, zoneAt, gateFor, zoneOfGate, GATES, canReach } from './island.js';
import { startSite, siteReq, contribute, tryAdvance, stageCount, matHint, gateLock } from './build.js';
import { advTap, openAdventures, leaveAdventure } from './adventure.js';
import { visitorsTick, visitorBubbles, visitorRoot, tapVisitor } from './visitors.js';
import { marketTick, soldCount, collectMarket, openMarket } from './market.js';
import { nbTap, openNeighbors } from './neighbors.js';
import { openFishing } from './fishing.js';
import { sfx, audioUnlock, startMusic, stopMusic } from './sound.js';
import { $, img, coinI, gemI, boltI, xpI, esc, fmt, toast, plus, flyItem, flyCoins, flyGems, flyXP, flyTo,
  confetti, M, openModal as uiOpen, setModalBody, closeModal, renderHUD, energyHint, gainLine } from './ui.js';

// Chỉ vẽ lại bảng do chính game.js mở (bảng khác mở thẳng từ ui.js thì bỏ qua)
let drawOwner = null;
function openModal(type, title, html, extra) {
  uiOpen(type, title, html, extra);
  drawOwner = extra && extra.sig !== undefined ? M : null;
}

const byId = id => S.objs.find(o => o.id === id);
// ô ruộng được ưu tiên khi bị vật khác che (đang cầm hạt giống hoặc kéo gieo/thu hoạch)
const isField = oid => typeof oid === 'number' && byId(oid)?.k === 'field';
const nameOf = k => ITEMS[k].n;
const speedCost = ms => Math.max(1, Math.ceil(ms / 120000));

// ============ Chạm vào thế giới ============
export function onTap(sx, sy) {
  audioUnlock();
  if (W.mode === 'adv') { advTap(sx, sy); renderHUD(); return; }
  if (W.mode === 'nb') { nbTap(sx, sy); renderHUD(); return; }
  if (placing) { const p = groundAt(sx, sy); if (p) moveGhost(p); return; }
  const oid = pickAt(sx, sy, tray === 'seed' ? isField : null);
  closeTimer();
  if (oid == null) {
    if (tray === 'seed') { closeTray(); return; }
    const p = groundAt(sx, sy), [cx, cz] = p ? worldToCell(p) : [-1, -1], z = zoneAt(cx, cz);
    if (z && !isOpenCell(cx, cz)) cloudTap(z); // chạm vào mây
    return;
  }
  tapObject(oid, sx, sy);
}
// Chạm vào vùng mây: nhắc cổng cần sửa và bay camera tới đó
function cloudTap(zoneId) {
  const g = gateFor(zoneId); if (!g) return;
  toast(`Sửa ${GATES[g.t].n.toLowerCase()} để mở ${zoneOfGate(g.t).n} nhé!`); sfx('tap');
  flyCamTo(cellToWorld(g.x, g.z, ...footprint(g))); bounce(g.id);
}

export function tapObject(oid, sx, sy) {
  if (oid === 'ship') { bounce('dock'); return openShip(); }
  if (oid === 'maisie') { SPECIAL.maisie.userData.wave = 1.5; return openQuest(); }
  if (typeof oid === 'string' && oid.startsWith('v:')) return tapVisitor(oid);
  if (oid === 'pier') { bounce('pier'); sfx('tap'); return openFishing({ openEnergy }); }
  const o = byId(oid); if (!o) return;
  if (!canReach(o)) return cloudTap(zoneAt(o.x, o.z)); // vật còn dưới mây
  bounce(oid);
  if (o.site) { sfx('tap'); return openSite(o); } // đang xây: chỉ mở bảng góp vật liệu
  switch (o.k) {
    case 'field': return tapField(o, sx, sy);
    case 'tree': return tapTree(o, sx, sy);
    case 'pen': return tapPen(o, sx, sy);
    case 'fac': return tapFactory(o, sx, sy);
    case 'board': sfx('tap'); return openOrders();
    case 'market': if (collectMarket(sx, sy)) { VIEWS.get(o.id).refresh(); return; } sfx('tap'); return openMarket();
    case 'barn': sfx('tap'); return openBarn();
    case 'house': sfx('tap'); return openQuest();
    case 'obstacle': return clearObstacle(o);
    case 'loot': return takeChest(o);
    case 'gate': sfx('tap'); return toast(`${GATES[o.t].n} dẫn tới ${zoneOfGate(o.t).n}`);
    case 'decor': {
      const D = DECOR[o.t];
      if (D.pet) { const m = VIEWS.get(o.id).root.children[0]; m.userData.dance = true; m.userData.wait = 2.5; m.userData.goal.copy(m.position); sfx('collect'); }
      else { sfx('tap'); toast(`${D.n} · giữ lâu để di chuyển`); }
    }
  }
}

// ============ Ruộng ============
function tapField(o, sx, sy) {
  const st = cropStage(o, now());
  if (st === 3) return harvest(o, sx, sy);
  if (st < 0) {
    if (tray === 'seed' && S.seed) { seedTarget = o; plant(o, S.seed); return; }
    openSeedTray(o); return;
  }
  showTimer(o);
}
function harvest(o, sx, sy) {
  if (barnRoom() < 2) { barnFull(); return false; }
  const k = o.crop, c = CROPS[k];
  add(k, 2); addXP(c.xp);
  o.crop = null; VIEWS.get(o.id)?.refresh(now());
  flyItem(sx, sy, k, 2); plus(sx, sy - 30, '+2');
  sfx('harvest'); questEvent('harvest', k, 2);
  return true;
}
function plant(o, k, quiet) {
  const c = CROPS[k];
  if (S.level < c.lv) { toast(`${nameOf(k)} mở ở cấp ${c.lv}`); return false; }
  if (S.coins < c.cost) { if (!quiet) { toast('Không đủ xu để mua hạt giống'); sfx('no'); } return false; }
  S.coins -= c.cost;
  const t = now(); o.crop = k; o.s = t; o.e = t + c.t * 1000;
  VIEWS.get(o.id)?.refresh(t);
  sfx('plant'); questEvent('plant');
  return true;
}
let barnWarned = 0;
function barnFull() {
  if (now() - barnWarned > 3000) { toast('Kho đầy rồi! Vào Kho để nâng cấp hoặc bán bớt nhé'); sfx('no'); barnWarned = now(); }
}

// ---------- Khay hạt giống ----------
let tray = null, seedTarget = null;
function openSeedTray(o) {
  tray = 'seed'; seedTarget = o;
  drawSeedTray();
}
function drawSeedTray() {
  const cards = Object.entries(CROPS).map(([k, c]) => {
    const lock = S.level < c.lv;
    return `<button class="seed ${S.seed === k ? 'on' : ''} ${lock ? 'lock' : ''}" data-act="seed" data-k="${k}" aria-label="${nameOf(k)}">
      ${lock ? `<span class="lk">Cấp ${c.lv}</span>` : ''}${img(k)}<small>${coinI}${c.cost}</small></button>`;
  }).join('');
  const t = $('#tray'); t.className = '';
  t.innerHTML = `<div class="seeds">${cards}</div><button class="traybtn no" data-act="closetray" aria-label="Đóng">✕</button>`;
  t.hidden = false;
}
export function closeTray() { tray = null; seedTarget = null; $('#tray').hidden = true; }

// ============ Cây ăn quả ============
function tapTree(o, sx, sy) {
  const T = TREES[o.t], t = now();
  if (t < o.e) return showTimer(o);
  if (barnRoom() < T.qty) return barnFull();
  add(T.yield, T.qty); addXP(T.xp);
  o.s = t; o.e = t + T.t * 1000; VIEWS.get(o.id).refresh(t);
  flyItem(sx, sy, T.yield, T.qty); plus(sx, sy - 30, '+' + T.qty);
  sfx('harvest'); questEvent('harvest', T.yield, T.qty);
}

// ============ Chuồng thú ============
function tapPen(o, sx, sy) {
  const P = PENS[o.t], t = now();
  const ready = o.animals.filter(a => a.e && t >= a.e);
  if (ready.length) {
    const n = Math.min(ready.length, barnRoom());
    if (n <= 0) return barnFull();
    ready.slice(0, n).forEach(a => { a.e = 0; a.s = 0; });
    add(P.prod, n); addXP(P.xp * n);
    flyItem(sx, sy, P.prod, n); plus(sx, sy - 30, '+' + n);
    sfx(o.t === 'cowpen' ? 'moo' : 'cluck'); questEvent('collect', P.prod, n);
    VIEWS.get(o.id).refresh(t);
    return;
  }
  const hungry = o.animals.filter(a => !a.e);
  if (hungry.length) {
    const n = Math.min(hungry.length, have(P.feed));
    if (n <= 0) return openPen(o);
    hungry.slice(0, n).forEach(a => { a.s = t; a.e = t + P.t * 1000; });
    add(P.feed, -n);
    plus(sx, sy - 30, `🍽 ×${n}`);
    sfx(o.t === 'cowpen' ? 'moo' : 'cluck'); questEvent('feed');
    if (n < hungry.length) toast(`Còn ${hungry.length - n} bạn ${P.an.toLowerCase()} chưa được ăn. Làm thêm ${nameOf(P.feed).toLowerCase()} nhé!`);
    return;
  }
  openPen(o);
}
function openPen(o) {
  const P = PENS[o.t];
  M_draw = () => {
    const t = now();
    const rows = o.animals.map((a, i) => {
      const st = !a.e ? 'Đói bụng' : t >= a.e ? 'Có ' + nameOf(P.prod).toLowerCase() : 'Còn ' + fmt(a.e - t);
      return `<div class="it">${img('animal:' + o.t)}<small>${P.an} ${i + 1}<br>${st}</small></div>`;
    }).join('');
    const canBuy = o.animals.length < P.max;
    return `<p class="hint">Cho ăn bằng <img class="inl" src="${ICONS[P.feed]}" alt=""> ${nameOf(P.feed)} (đang có ${have(P.feed)}). Làm ở Máy xay thức ăn.</p>
      <div class="inv">${rows}</div>
      <div class="row" style="justify-content:center;margin-top:14px">
        ${canBuy ? `<button class="btn" data-act="buyanimal" data-oid="${o.id}">Mua thêm ${P.an.toLowerCase()} ${coinI}${P.animalCost}</button>` : `<span class="hint">Chuồng đã đầy (${P.max}/${P.max})</span>`}
      </div>`;
  };
  M_sig = () => o.animals.map(a => !a.e ? 'h' : now() >= a.e ? 'r' : 'p').join() + o.animals.length;
  openModal('pen', P.n, M_draw(), { sig: M_sig() });
}

// ============ Nhà máy ============
function tapFactory(o, sx, sy) {
  if (collectJobs(o, sx, sy)) return;
  openFactory(o);
}
function collectJobs(o, sx, sy) {
  const t = now(), F = FACTORIES[o.t];
  const done = o.jobs.filter(j => t >= j.e);
  if (!done.length) return false;
  let got = 0;
  for (const j of done) {
    const r = F.rec[j.r], q = r.qty || 1;
    if (barnRoom() < q) { barnFull(); break; }
    add(r.out, q); addXP(Math.max(1, Math.round(ITEMS[r.out].v / 6)));
    o.jobs.splice(o.jobs.indexOf(j), 1);
    flyItem(sx, sy, r.out, q); questEvent('make', r.out, 1);
    got++;
  }
  if (got) { plus(sx, sy - 30, '+' + got); sfx('collect'); VIEWS.get(o.id).refresh(t); }
  return got > 0;
}
function openFactory(o) {
  const F = FACTORIES[o.t];
  M_draw = () => {
    const t = now(), slots = o.slots || 2;
    const rec = F.rec.map((r, i) => {
      const lock = S.level < r.lv;
      const need = Object.entries(r.in).map(([k, q]) => `<span class="${have(k) >= q ? 'ok' : 'lack'}">${img(k)}${have(k)}/${q}</span>`).join('');
      return `<div class="recipe ${lock ? 'lock' : ''}">
        <img class="out" src="${ICONS[r.out]}" alt=""><b>${nameOf(r.out)}${r.qty > 1 ? ' ×' + r.qty : ''}</b>
        ${lock ? `<span class="t">Mở ở cấp ${r.lv}</span>` : `<div class="need">${need}</div><span class="t">⏱ ${fmt(r.t * 1000)}</span>
        <button class="btn small ${hasAll(r.in) ? '' : 'gray'}" data-act="make" data-oid="${o.id}" data-i="${i}">Làm</button>`}
      </div>`;
    }).join('');
    const q = [];
    for (let i = 0; i < slots; i++) {
      const j = o.jobs[i];
      if (!j) { q.push('<div class="slot"></div>'); continue; }
      const r = F.rec[j.r], done = t >= j.e, running = !done && t >= j.s;
      q.push(`<button class="slot ${done ? 'done' : ''}" data-act="${done ? 'collectfac' : running ? 'speedjob' : ''}" data-oid="${o.id}">
        ${img(r.out)}${running ? `<span class="t" data-rt="${j.e}">${fmt(j.e - t)}</span><span class="bar"><i data-s="${j.s}" data-e="${j.e}"></i></span>` : done ? '<span class="t">Xong!</span>' : '<span class="t">Đang chờ</span>'}
      </button>`);
    }
    if (slots < 4) q.push(`<button class="slot buy" data-act="buyslot" data-oid="${o.id}">Thêm chỗ<span>${gemI}${slots * 3}</span></button>`);
    const run = o.jobs.find(j => t < j.e && t >= j.s);
    return `<div class="recipes">${rec}</div><h3 class="sub">Hàng chờ</h3><div class="queue">${q.join('')}</div>
      ${run ? `<p class="hint" style="margin-top:12px">Chạm vào món đang làm để xong ngay bằng <span class="ico gem sm"></span></p>` : ''}`;
  };
  M_sig = () => o.jobs.map(j => (now() >= j.e ? 'd' : now() >= j.s ? 'r' : 'w') + j.r).join() + (o.slots || 2) + JSON.stringify(S.inv) + S.level;
  openModal('fac', F.n, M_draw(), { sig: M_sig(), oid: o.id });
}
function makeRecipe(o, i, sx, sy) {
  const F = FACTORIES[o.t], r = F.rec[i], slots = o.slots || 2;
  if (S.level < r.lv) return;
  if (o.jobs.length >= slots) { toast('Hàng chờ đầy rồi. Chờ xong món trước nhé!'); sfx('no'); return; }
  if (!hasAll(r.in)) {
    const miss = Object.entries(r.in).filter(([k, q]) => have(k) < q).map(([k, q]) => `${q - have(k)} ${nameOf(k).toLowerCase()}`);
    toast('Còn thiếu ' + miss.join(', ')); sfx('no'); return;
  }
  take(r.in);
  const t = now(), last = o.jobs.length ? o.jobs[o.jobs.length - 1].e : t, s = Math.max(t, last);
  o.jobs.push({ r: i, s, e: s + r.t * 1000 });
  sfx('build'); VIEWS.get(o.id).refresh(t);
  redrawModal();
}

// ============ Công trường ============
function siteName(o) {
  if (o.k === 'fac') return FACTORIES[o.t].n;
  if (o.k === 'pen') return PENS[o.t].n;
  if (o.k === 'gate') return GATES[o.t]?.n || 'Cổng';
  return 'Công trình';
}
function openSite(o) {
  closeTray(); closeTimer();
  M_draw = () => {
    if (!o.site) return '<p class="hint">Đã xây xong!</p>';
    const req = siteReq(o), n = stageCount(o), lock = gateLock(o);
    const icon = ICONS[o.k + ':' + o.t] ? `<img class="sitepic" src="${ICONS[o.k + ':' + o.t]}" alt="">` : '';
    const rows = Object.entries(req).map(([k, r]) => {
      const done = r.got >= r.need, h = have(k);
      return `<div class="mat ${done ? 'ok' : 'lack'}">${img(k)}<b>${nameOf(k)}</b><span class="q">${r.got}/${r.need}</span>
        ${done ? '<span class="t">✓ Đủ rồi</span>' : lock ? `<small>${esc(matHint(k))}</small>`
          : `<button class="btn small ${h ? '' : 'gray'}" data-act="give" data-oid="${o.id}" data-k="${k}">Góp</button>
             <small>${h ? `Đang có ${h}` : esc(matHint(k))}</small>`}</div>`;
    }).join('');
    const what = o.k === 'gate' ? `sửa ${siteName(o).toLowerCase()}, mở ${zoneOfGate(o.t).n}` : `xây ${siteName(o).toLowerCase()}`;
    return `<div class="sitehead">${icon}<span class="stage">Giai đoạn ${o.site.stage + 1}/${n}</span></div>
      ${lock ? `<p class="hint lockmsg">🔒 Mở ở cấp ${lock}</p>` : ''}
      <p class="hint">Góp đủ vật liệu để ${esc(what)} nhé!</p><div class="mats">${rows}</div>`;
  };
  M_sig = () => JSON.stringify(o.site || null) + JSON.stringify(S.inv) + S.level;
  openModal('site', siteName(o), M_draw(), { sig: M_sig(), oid: o.id });
}
function giveSite(o, k, x, y) {
  if (!o?.site) return;
  const n = contribute(o, k);
  if (gateLock(o)) { toast(`Mở ở cấp ${gateLock(o)}`); sfx('no'); return; }
  if (!n) { const h = matHint(k); toast(`Chưa có ${nameOf(k).toLowerCase()}.${h ? ' ' + h + ' nhé!' : ''}`); sfx('no'); return; }
  bounce(o.id);
  const stage = o.site.stage, r = tryAdvance(o);
  if (r === 'none') { plus(x, y - 24, '+' + n); sfx('tap'); redrawModal(); return; }
  // xong một giai đoạn: lấp lánh, xp bay lên, giàn giáo cao thêm (hoặc công trình thật hiện ra)
  confetti(18); flyXP(x, y); plus(x, y - 50, `+${10 * (stage + 1)} xp`);
  rebuildView(o); bounce(o.id); save();
  if (r === 'stage') { sfx('build'); toast(`Xong giai đoạn ${stage + 1}! Cố lên nào`); redrawModal(); return; }
  sfx('level'); closeModal(); toast(`${siteName(o)} đã xây xong!`);
  focusOn(VIEWS.get(o.id).root.position);
}

// ============ Dọn chướng ngại vật ============
// Chạm: Maisie đi tới rồi chặt một nhát. Giữ ngón tay (onLongPress): tới nơi thì chặt liên tục tới khi nhấc tay.
const CHOP_EVERY = 350; // ms giữa hai nhát khi giữ ngón tay
let hold = null; // { o, down, timer }
const sv = new THREE.Vector3();
function screenOf(o, y = 0.9) {
  const r = VIEWS.get(o.id)?.root; if (!r) return [innerWidth / 2, innerHeight / 2];
  sv.copy(r.position); sv.y += y; return toScreen(sv);
}
function canChop(o) {
  if (!isOpenCell(o.x, o.z)) { cloudTap(zoneAt(o.x, o.z)); return false; }
  if (S.energy < 1) { openEnergy(); return false; }
  return true;
}
function clearObstacle(o) {
  stopHold();
  if (canChop(o)) walkTo(o.x, o.z, () => chop(o));
}
function startHold(o) {
  stopHold();
  if (!canChop(o)) return;
  const h = hold = { o, down: true, timer: 0 };
  walkTo(o.x, o.z, () => {
    if (!chop(o) || !h.down || hold !== h) return; // nhấc tay trước khi tới nơi: chỉ một nhát như chạm
    h.timer = setInterval(() => { if (!h.down || hold !== h || W.mode !== 'farm' || M || !chop(o)) stopHold(); }, CHOP_EVERY);
  });
}
function stopHold() { if (!hold) return; hold.down = false; clearInterval(hold.timer); hold = null; }
// Nhấc hết ngón tay (hoặc chuyển sang phóng to bằng 2 ngón): thôi chặt liên tục
export function onRelease() { stopHold(); }

// Một nhát chặt (Maisie đã đứng cạnh). Trả true nếu còn chặt tiếp được.
function chop(o) {
  if (!S.objs.includes(o)) return false; // đã dọn xong rồi
  const r = hitObstacle(o);
  if (!r) { openEnergy(); return false; }
  const [sx, sy] = screenOf(o);
  sfx('chop'); shake(o.id); chopPose(o.x, o.z);
  setHp(o.id, o.hp / OBSTACLES[o.t].hp);
  plus(sx, sy - 30, '-1⚡');
  for (const [k, n] of Object.entries(r.drops)) flyItem(sx, sy, k, n);
  gainLine(r.drops);
  if (r.done) {
    flyXP(sx, sy);
    const v = VIEWS.get(o.id);
    // thu nhỏ rồi biến mất
    const t0 = performance.now();
    const shrink = () => {
      const f = (performance.now() - t0) / 380;
      if (f < 1) { v.root.scale.setScalar(1 - f); v.root.rotation.y += 0.2; requestAnimationFrame(shrink); }
      else removeView(o.id);
    };
    if (v) { v.root.userData.bounceT = 0; shrink(); }
    questEvent('clear');
    if (r.chest) { // rương nằm lại trên ô vừa dọn, chạm để nhận quà
      const loot = { id: newId(), k: 'loot', t: 'chest', x: o.x, z: o.z, r: 0, chest: r.chest };
      S.objs.push(loot); addView(loot); bounce(loot.id); sfx('collect');
    }
    save();
  }
  renderHUD();
  return !r.done;
}
function takeChest(o) {
  const [sx, sy] = screenOf(o, 0.5);
  const r = openChest(o); if (!r) return;
  removeView(o.id); sfx('collect');
  if (r.coins) flyCoins(sx, sy, r.coins);
  for (let i = 0; i < Math.min(r.energy, 4); i++) flyTo(sx, sy, '#energyPill', boltI, i * 80);
  for (const [k, n] of Object.entries(r.mats)) flyItem(sx, sy, k, n);
  plus(sx, sy - 30, `+${r.energy}⚡ +${r.coins}`);
  gainLine(r.mats);
  renderHUD(); save();
}
function openEnergy() {
  const foods = Object.entries(ITEMS).filter(([k, it]) => it.energy && have(k) > 0);
  const list = foods.length ? `<div class="inv">${foods.map(([k, it]) => `<div class="it">${img(k)}<span class="q">${have(k)}</span><small>${it.n}<br>+${it.energy} năng lượng</small><div class="acts"><button class="btn small" data-act="eat" data-k="${k}">Ăn</button></div></div>`).join('')}</div>`
    : '<p class="hint">Bếp nấu làm được món ăn hồi năng lượng (mở ở cấp 6).</p>';
  const full = S.energy >= ENERGY_MAX;
  openModal('energy', S.energy > 0 ? 'Năng lượng' : 'Hết năng lượng', `<p class="hint">Dọn dẹp cần năng lượng <span class="ico bolt sm"></span>. Năng lượng tự hồi: ${energyHint()}.</p>${list}
    <div class="row" style="justify-content:center;margin-top:14px">${full ? '<button class="btn gray" data-close>Năng lượng đang đầy</button>' : `<button class="btn blue" data-act="buyenergy">Nạp đầy ${gemI}5</button>`}</div>`);
}

// ============ Đơn hàng ============
function openOrders() {
  refreshOrders();
  M_draw = () => {
    const t = now();
    return `<div class="orders">${S.orders.map((o, i) => {
      if (o.wait) return `<div class="order wait">${img('b:crate')}Đơn mới sắp tới<br><span data-rt="${o.wait}">${fmt(o.wait - t)}</span></div>`;
      const p = PEOPLE.find(x => x.id === o.who);
      const need = Object.entries(o.items).map(([k, q]) => `<span class="${have(k) >= q ? 'ok' : 'lack'}">${img(k)}${Math.min(have(k), q)}/${q}</span>`).join('');
      const ok = hasAll(o.items);
      return `<div class="order"><button class="skip" data-act="skiporder" data-i="${i}" aria-label="Bỏ đơn này">✕</button>
        <img class="face" src="${ICONS['face:' + o.who]}" alt=""><b>${p.n}</b><div class="need">${need}</div>
        <div class="reward"><span>${coinI}${o.coins}</span><span>${xpI}${o.xp}</span></div>
        <button class="btn ${ok ? '' : 'gray'}" data-act="deliver" data-i="${i}">Giao hàng</button></div>`;
    }).join('')}</div>`;
  };
  M_sig = () => S.orders.map(o => o.wait ? (now() >= o.wait ? 'x' : 'w') : 'o').join() + JSON.stringify(S.inv);
  openModal('orders', 'Bảng đơn hàng', M_draw(), { sig: M_sig() });
}
function deliver(i, sx, sy) {
  const o = S.orders[i]; if (!o || o.wait) return;
  if (!hasAll(o.items)) {
    const miss = Object.entries(o.items).filter(([k, q]) => have(k) < q).map(([k, q]) => `${q - have(k)} ${nameOf(k).toLowerCase()}`);
    toast('Còn thiếu ' + miss.join(', ')); sfx('no'); return;
  }
  take(o.items); S.coins += o.coins; addXP(o.xp);
  flyCoins(sx, sy, o.coins); flyXP(sx, sy); sfx('coin');
  const t = now(); S.orders[i] = { wait: t + 15000, s: t };
  questEvent('deliver');
  // xe đẩy chạy đi
  const board = S.objs.find(x => x.k === 'board'), cart = board && VIEWS.get(board.id)?.cart;
  if (cart) { const t0 = performance.now(); const go = () => { const f = (performance.now() - t0) / 1200; cart.position.x = 0.2 + Math.sin(f * Math.PI) * 1.5; if (f < 1) requestAnimationFrame(go); else cart.position.x = 0.2; }; go(); }
  redrawModal();
}

// ============ Tàu hàng ============
function openShip() {
  M_draw = () => {
    const sh = S.ship, t = now();
    if (sh.st === 'away') return `<div class="celebrate">${img('b:ship')}<p class="hint">Tàu đang đi giao hàng.<br>Quay lại sau <b data-rt="${sh.backAt}">${fmt(sh.backAt - t)}</b></p>
      <button class="btn blue" data-act="shipnow">Gọi tàu về ngay ${gemI}2</button></div>`;
    const crates = sh.crates.map((c, i) => `<div class="crate ${c.done ? 'done' : ''}">${img(c.item)}<b>${nameOf(c.item)}</b>
      <div class="need"><span class="${have(c.item) >= c.n || c.done ? 'ok' : 'lack'}">${c.done ? c.n : Math.min(have(c.item), c.n)}/${c.n}</span></div>
      ${c.done ? '' : `<button class="btn small ${have(c.item) >= c.n ? '' : 'gray'}" data-act="fillcrate" data-i="${i}">Đóng thùng</button>`}</div>`).join('');
    const all = sh.crates.every(c => c.done);
    return `<p class="hint">Đóng đủ 6 thùng hàng rồi cho tàu chạy để nhận thưởng lớn! Tàu rời bến sau <span data-rt="${sh.leaveAt}">${fmt(sh.leaveAt - t)}</span>.</p>
      <div class="crates">${crates}</div>
      <div class="reward" style="margin:14px 0 10px;font-size:18px"><span>Thưởng:</span><span>${coinI}${sh.coins}</span><span>${xpI}${sh.xp}</span><span>${gemI}${sh.gems}</span></div>
      <button class="btn wide ${all ? 'orange' : 'gray'}" data-act="sendship">${all ? 'Cho tàu chạy!' : 'Chưa đủ thùng hàng'}</button>`;
  };
  M_sig = () => S.ship.st + (S.ship.crates || []).map(c => c.done).join() + JSON.stringify(S.inv);
  openModal('ship', 'Tàu chở hàng', M_draw(), { sig: M_sig() });
}
function fillCrate(i, sx, sy) {
  const c = S.ship.crates?.[i]; if (!c || c.done) return;
  if (have(c.item) < c.n) { toast(`Cần ${c.n - have(c.item)} ${nameOf(c.item).toLowerCase()} nữa`); sfx('no'); return; }
  add(c.item, -c.n); c.done = true;
  const coins = Math.round(ITEMS[c.item].v * c.n * 0.6);
  S.coins += coins; flyCoins(sx, sy, coins); sfx('coin');
  questEvent('crate');
  redrawModal();
}
function sendShip(sx, sy) {
  const sh = S.ship; if (sh.st !== 'docked' || !sh.crates.every(c => c.done)) { toast('Đóng đủ 6 thùng hàng trước nhé!'); return; }
  S.coins += sh.coins; S.gems += sh.gems; addXP(sh.xp);
  flyCoins(sx, sy, sh.coins); flyGems(sx, sy); flyXP(sx, sy);
  S.ship = { st: 'away', backAt: now() + 120000 };
  sfx('ship'); confetti();
  redrawModal();
}

// ============ Kho ============
const CAT = [
  ['Nông sản', k => !ITEMS[k].mat && CROPS[k] || Object.values(TREES).some(t => t.yield === k)],
  ['Từ chuồng', k => !ITEMS[k].mat && Object.values(PENS).some(p => p.prod === k)],
  ['Thức ăn thú', k => !ITEMS[k].mat && k.endsWith('feed')],
  ['Món ngon', k => !ITEMS[k].mat],
  ['Vật liệu', k => !!ITEMS[k].mat], // vật liệu thô và đã chế, không tính vào sức chứa
];
function openBarn() {
  M_draw = () => {
    const used = barnUsed(), cap = barnCap(), full = used >= cap;
    const keys = Object.keys(ITEMS).filter(k => have(k) > 0);
    let html = `<div class="cap ${full ? 'full' : ''}"><i style="width:${Math.min(100, used / cap * 100)}%"></i><span>${used} / ${cap}</span></div>`;
    const shown = new Set();
    for (const [title, fn] of CAT) {
      const ks = keys.filter(k => !shown.has(k) && fn(k)); ks.forEach(k => shown.add(k));
      if (!ks.length) continue;
      html += `<h3 class="sub">${title}</h3><div class="inv">${ks.map(k => `<div class="it">${img(k)}<span class="q">${have(k)}</span><small>${nameOf(k)}</small>
        <div class="acts">${ITEMS[k].energy ? `<button class="btn small blue" data-act="eat" data-k="${k}">Ăn</button>` : ''}<button class="btn small orange" data-act="sell" data-k="${k}">Bán ${ITEMS[k].v}</button></div></div>`).join('')}</div>`;
    }
    if (!keys.length) html += '<p class="hint">Kho đang trống. Thu hoạch ruộng để có nông sản nhé!</p>';
    html += `<div class="row" style="justify-content:center;margin-top:16px"><button class="btn blue" data-act="upbarn">Nâng cấp kho (+25 chỗ) ${coinI}${barnUpgradeCost(S.barnLvl)}</button></div>`;
    return html;
  };
  M_sig = () => JSON.stringify(S.inv) + S.barnLvl;
  openModal('barn', 'Kho hàng', M_draw(), { sig: M_sig() });
}

// ============ Cửa hàng ============
function shopItems(tab) {
  const L = S.level, out = [];
  if (tab === 'farm') {
    const n = S.objs.filter(o => o.k === 'field').length;
    out.push({ id: 'field', icon: 'b:field', n: 'Ô ruộng', cost: fieldCost(n), lv: 1, note: `Đang có ${n}` });
    for (const [k, T] of Object.entries(TREES)) out.push({ id: 'tree:' + k, icon: 'tree:' + k, n: T.n, cost: T.cost, lv: T.lv, note: `Cho ${nameOf(T.yield).toLowerCase()}` });
  } else if (tab === 'animals') {
    for (const [k, P] of Object.entries(PENS)) {
      const pens = S.objs.filter(o => o.k === 'pen' && o.t === k);
      out.push({ id: 'pen:' + k, icon: 'pen:' + k, n: P.n, cost: P.cost, lv: P.lv, note: `Đang có ${pens.length}/2`, max: pens.length >= 2 });
      const built = pens.filter(p => !p.site), room = built.some(p => p.animals.length < P.max);
      const building = !room && pens.some(p => p.site); // hết chỗ, còn chuồng đang xây: để buyAnimal nhắc góp vật liệu
      out.push({ id: 'animal:' + k, icon: 'animal:' + k, n: P.an, cost: P.animalCost, lv: P.lv, note: !pens.length ? `Cần ${P.n.toLowerCase()}` : building ? 'Chuồng đang xây' : room ? `Cho ${nameOf(P.prod).toLowerCase()}` : 'Chuồng đã đầy', max: !room && !building });
    }
  } else if (tab === 'factory') {
    for (const [k, F] of Object.entries(FACTORIES)) {
      const owned = S.objs.find(o => o.k === 'fac' && o.t === k);
      out.push({ id: 'fac:' + k, icon: 'fac:' + k, n: F.n, cost: F.cost, lv: F.lv, note: owned ? (owned.site ? 'Đang xây' : 'Đã có') : F.rec.map(r => nameOf(r.out)).slice(0, 2).join(', '), max: !!owned });
    }
  } else {
    for (const [k, n] of Object.entries(S.store || {})) if (n > 0) out.push({ id: 'stored:' + k, icon: 'decor:' + k, n: DECOR[k].n, cost: 0, lv: 1, note: `Đã cất · có ${n}`, stored: true });
    for (const [k, D] of Object.entries(DECOR)) if (!D.gift) out.push({ id: 'decor:' + k, icon: 'decor:' + k, n: D.n, cost: D.cost, lv: D.lv, note: D.pet ? 'Biết đi dạo' : '' });
  }
  return out;
}
let shopTab = 'farm';
function openShop(tab = shopTab) {
  shopTab = tab;
  M_draw = () => {
    const tabs = [['farm', 'Ruộng & Cây'], ['animals', 'Chuồng & Thú'], ['factory', 'Nhà máy'], ['decor', 'Trang trí']]
      .map(([k, l]) => `<button class="tab ${shopTab === k ? 'on' : ''}" data-act="shoptab" data-k="${k}">${l}</button>`).join('');
    const cards = shopItems(shopTab).map(it => {
      const lock = S.level < it.lv;
      return `<button class="card ${lock || it.max ? 'lock' : ''}" data-act="buy" data-k="${it.id}">
        ${lock ? `<span class="lk">Cấp ${it.lv}</span>` : ''}${img(it.icon)}<b>${it.n}</b>${it.note ? `<small>${it.note}</small>` : ''}
        <span class="price">${coinI}${it.cost || 'Miễn phí'}</span></button>`;
    }).join('');
    return `<div class="tabs">${tabs}</div><div class="grid">${cards}</div>`;
  };
  M_sig = () => shopTab + S.coins + S.level;
  openModal('shop', 'Cửa hàng', M_draw(), { sig: M_sig() });
}
function buy(id) {
  const it = shopItems(shopTab).find(x => x.id === id); if (!it) return;
  if (it.stored) { const t = id.split(':')[1]; startPlace({ k: 'decor', t, r: 0 }, true, 0); placing.fromStore = t; return; }
  if (S.level < it.lv) { toast(`Mở ở cấp ${it.lv}`); sfx('no'); return; }
  if (it.max) { toast(it.note); sfx('no'); return; }
  if (S.coins < it.cost) { toast(`Cần thêm ${it.cost - S.coins} xu nữa`); sfx('no'); return; }
  const [kind, t] = id.split(':');
  if (kind === 'animal') return buyAnimal(t);
  let obj;
  if (kind === 'field') obj = { k: 'field', t: 'field', crop: null, s: 0, e: 0 };
  else if (kind === 'tree') obj = { k: 'tree', t, s: now(), e: now() + TREES[t].t * 1000 };
  else if (kind === 'pen') obj = { k: 'pen', t, animals: [{ s: 0, e: 0 }] };
  else if (kind === 'fac') obj = { k: 'fac', t, jobs: [], slots: 2 };
  else obj = { k: 'decor', t };
  obj.r = 0;
  startPlace(obj, true, it.cost);
}
function buyAnimal(t, penId) {
  const P = PENS[t];
  const pens = S.objs.filter(o => o.k === 'pen' && o.t === t);
  const pen = penId ? byId(penId) : pens.find(o => !o.site && o.animals.length < P.max) || pens.find(o => o.site);
  if (!pen) { toast(`Cần mua ${P.n.toLowerCase()} trước`); sfx('no'); return; }
  if (pen.site) { toast('Chuồng đang xây, góp đủ vật liệu trước nhé!'); sfx('no'); return; }
  if (pen.animals.length >= P.max) { toast('Chuồng đã đầy'); return; }
  if (S.coins < P.animalCost) { toast(`Cần thêm ${P.animalCost - S.coins} xu nữa`); sfx('no'); return; }
  S.coins -= P.animalCost; pen.animals.push({ s: 0, e: 0 });
  VIEWS.get(pen.id).refresh(now());
  sfx('build'); toast(`Chào mừng bạn ${P.an.toLowerCase()} mới!`); questEvent('buyanimal');
  closeModal(); focusOn(VIEWS.get(pen.id).root.position);
}

// ============ Đặt / di chuyển vật thể ============
let placing = null, marker = null;
function startPlace(obj, isNew, cost = 0) {
  closeModal(); closeTray(); closeTimer();
  if (isNew) {
    const [w, d] = footprint(obj);
    const [cx, cz] = worldToCell(W.target);
    const spot = findFree(w, d, cx - w / 2, cz - d / 2) || [Math.max(0, cx - 1), Math.max(0, cz - 1)];
    obj.x = spot[0]; obj.z = spot[1]; obj.id = 'ghost';
    placing = { obj, isNew, cost, view: addView(obj) };
  } else {
    // kéo trên bản sao: bản lưu tự động giữa chừng không ghi vị trí đang dở (có thể chồng lên vật khác)
    placing = { obj: { ...obj }, real: obj, isNew, cost: 0, view: VIEWS.get(obj.id) };
  }
  if (!marker) {
    // ô đánh dấu vẽ đè lên vật xung quanh (để thấy chỗ vướng), nhưng dưới chính vật đang đặt
    marker = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0x62c43f, transparent: true, opacity: 0.65, depthWrite: false, depthTest: false }));
    marker.rotation.x = -Math.PI / 2; marker.renderOrder = 8;
  }
  W.scene.add(marker);
  updateGhost();
  focusOn(placing.view.root.position);
  drawPlaceTray();
}
// Vật đang đặt: vẽ sau ô đánh dấu và không bị vật đứng trước che; chỗ vướng thì hình 2D ửng đỏ
function ghostLook(v, on, ok = true) {
  v.root.traverse(m => {
    if (!m.isMesh) return;
    if (m.userData.ro === undefined) m.userData.ro = m.renderOrder;
    m.renderOrder = on ? 9 : m.userData.ro;
    if (m.userData.sprite) { m.material.depthTest = !on; m.material.color.set(on && !ok ? 0xff8f8f : 0xffffff); }
  });
}
function placeOk() {
  const o = placing.obj, [w, d] = footprint(o);
  return isFree(o.x, o.z, w, d, placing.isNew ? 'ghost' : o.id);
}
function updateGhost() {
  const o = placing.obj, [w, d] = footprint(o), v = placing.view;
  place(v, o); v.root.position.y = 0.25;
  marker.scale.set(w + 0.3, d + 0.3, 1);
  marker.position.copy(cellToWorld(o.x, o.z, w, d)); marker.position.y = 0.03;
  const ok = placeOk();
  marker.material.color.set(ok ? 0x62c43f : 0xff5d5d);
  ghostLook(v, true, ok);
  const b = $('#tray [data-act="placeok"]'); if (b) b.disabled = !ok;
}
function moveGhost(p) {
  const o = placing.obj, [w, d] = footprint(o);
  const nx = THREE.MathUtils.clamp(Math.round(p.x + GRID / 2 - w / 2), 0, GRID - w);
  const nz = THREE.MathUtils.clamp(Math.round(p.z + GRID / 2 - d / 2), 0, GRID - d);
  if (nx !== o.x || nz !== o.z) { o.x = nx; o.z = nz; updateGhost(); }
}
function drawPlaceTray() {
  const o = placing.obj, rot = o.k === 'decor';
  $('#tray').className = rot && !placing.isNew ? 'many' : ''; // 4 nút: chữ lên hàng riêng cho vừa màn hình hẹp
  $('#tray').innerHTML = `<button class="traybtn no" data-act="placeno" aria-label="Huỷ">✕</button>
    <div class="traytxt">${placing.isNew ? 'Kéo để chọn chỗ' : 'Kéo để chuyển chỗ'}<small>${placing.cost ? 'Giá ' + placing.cost + ' xu' : 'Chạm ✓ để xong'}</small></div>
    ${rot ? '<button class="traybtn rot" data-act="placerot" aria-label="Xoay">↻</button>' : ''}
    ${rot && !placing.isNew ? '<button class="traybtn store" data-act="placestore" aria-label="Cất vào túi">📦</button>' : ''}
    <button class="traybtn ok" data-act="placeok" aria-label="Đặt">✓</button>`;
  $('#tray').hidden = false; tray = 'place';
  updateGhost();
}
function placeConfirm() {
  if (!placing) return;
  if (!placeOk()) { toast('Chỗ này bị vướng rồi'); sfx('no'); return; }
  const { obj, real, isNew, cost, view, fromStore } = placing;
  if (isNew) {
    if (S.coins < cost) { toast('Không đủ xu'); return; }
    S.coins -= cost;
    if (fromStore) S.store[fromStore]--;
    removeView('ghost');
    obj.id = newId(); S.objs.push(obj);
    startSite(obj); // nhà máy, chuồng: thành công trường, góp vật liệu để xây
    addView(obj);
    if (obj.site) toast('Chạm vào công trường để góp vật liệu nhé!');
    if (obj.k === 'decor') questEvent('buydecor');
    if (obj.k === 'tree') questEvent('buytree');
    sfx('build');
  } else { Object.assign(real, { x: obj.x, z: obj.z, r: obj.r }); view.root.position.y = 0; ghostLook(view, false); sfx('build'); }
  W.scene.remove(marker);
  const wasField = isNew && obj.k === 'field';
  placing = null; closeTray(); save();
  // mua ruộng liên tục như Family Farm
  if (wasField) {
    const n = S.objs.filter(o => o.k === 'field').length, c = fieldCost(n);
    if (S.coins >= c) startPlace({ k: 'field', t: 'field', crop: null, s: 0, e: 0, r: 0 }, true, c);
  }
}
function placeCancel() {
  if (!placing) return;
  const { isNew, view, real } = placing;
  if (isNew) removeView('ghost');
  else { place(view, real); view.root.position.y = 0; ghostLook(view, false); }
  W.scene.remove(marker);
  placing = null; closeTray();
}
export function onLongPress(sx, sy) {
  if (placing || W.mode !== 'farm') return;
  const oid = pickAt(sx, sy);
  const o = typeof oid === 'number' ? byId(oid) : null;
  if (!o || o.k === 'loot' || o.k === 'gate' || !canReach(o)) return; // cổng đứng yên một chỗ
  closeTimer();
  if (o.k === 'obstacle') { bounce(o.id); startHold(o); return; } // giữ ngón trên vật cản = chặt liên tục
  sfx('tap');
  startPlace(o, false);
}

// ============ Kéo: gieo/thu hoạch liên tục, kéo đồ đang đặt ============
let drag = null;
export function beginDrag(sx, sy) {
  if (W.mode !== 'farm') return false;
  if (placing) {
    const oid = pickAt(sx, sy);
    if (oid === 'ghost' || oid === placing.obj.id) { drag = { mode: 'ghost' }; return true; }
    return false;
  }
  const oid = pickAt(sx, sy, isField), o = typeof oid === 'number' ? byId(oid) : null;
  if (!o || o.k !== 'field') return false;
  const st = cropStage(o, now());
  if (st === 3) { drag = { mode: 'harvest', done: new Set() }; return true; }
  if (st < 0 && tray === 'seed' && S.seed) { drag = { mode: 'plant', done: new Set() }; return true; }
  return false;
}
export function dragMove(sx, sy) {
  if (!drag) return;
  if (drag.mode === 'ghost') { const p = groundAt(sx, sy); if (p) moveGhost(p); return; }
  const oid = pickAt(sx, sy, isField), o = typeof oid === 'number' ? byId(oid) : null;
  if (!o || o.k !== 'field' || drag.done.has(o.id)) return;
  drag.done.add(o.id);
  const st = cropStage(o, now());
  if (drag.mode === 'harvest' && st === 3) { harvest(o, sx, sy); bounce(o.id); }
  if (drag.mode === 'plant' && st < 0) { plant(o, S.seed, true); bounce(o.id); }
}
export function endDrag(moved, sx, sy) {
  const d = drag; drag = null;
  if (!d) return;
  if (!moved) { // chỉ chạm, không kéo
    if (d.mode === 'ghost') return;
    onTap(sx, sy);
  } else if (d.mode === 'ghost') updateGhost();
}

// ============ Đồng hồ trên vật thể ============
let timerPop = null;
function showTimer(o) {
  closeTimer();
  const el = document.createElement('div'); el.className = 'timer';
  timerPop = { oid: o.id, el };
  const draw = () => {
    const t = now();
    let name, s, e;
    if (o.k === 'field') { name = nameOf(o.crop); s = o.s; e = o.e; }
    else if (o.k === 'tree') { name = TREES[o.t].n; s = o.s; e = o.e; }
    if (t >= e) { closeTimer(); return; }
    const cost = speedCost(e - t);
    el.innerHTML = `<b>${name}</b><div class="bar"><i style="width:${(t - s) / (e - s) * 100}%"></i></div><span class="t">Còn ${fmt(e - t)}</span>
      <div style="margin-top:6px"><button class="btn small blue" data-act="speed" data-oid="${o.id}">Xong ngay ${gemI}${cost}</button></div>`;
  };
  draw(); timerPop.draw = draw;
  $('#bubbles').appendChild(el);
  sfx('tap');
}
function closeTimer() { timerPop?.el.remove(); timerPop = null; }
function speedUp(o) {
  const t = now(), cost = speedCost(o.e - t);
  if (S.gems < cost) { toast('Không đủ kim cương'); sfx('no'); return; }
  S.gems -= cost; o.e = t; if (o.k === 'field') o.s = Math.min(o.s, t - 1);
  VIEWS.get(o.id).refresh(t); closeTimer(); sfx('collect');
}

// ============ Nhiệm vụ, lên cấp, quà ============
function openQuest() {
  const q = currentQuest();
  if (!q) {
    const nq = QUESTS[S.quest];
    openModal('quest', 'Maisie', `<div class="talk">${img('face:maisie')}<div class="say">Bạn làm tốt lắm! Nhiệm vụ tiếp theo sẽ mở khi bạn lên <b>cấp ${nq?.lv || S.level + 1}</b>. Cùng chăm sóc nông trại nhé!</div></div>`);
    return;
  }
  const p = PEOPLE.find(x => x.id === q.who), done = S.qprog >= q.n;
  M_draw = () => `<div class="talk">${img('face:' + q.who)}<div class="say"><b>${p.n}:</b> ${esc(q.text)}</div></div>
    <div class="prog"><i style="width:${S.qprog / q.n * 100}%"></i><span>${S.qprog} / ${q.n}</span></div>
    <div class="reward" style="font-size:18px"><span>Thưởng:</span>${q.coins ? `<span>${coinI}${q.coins}</span>` : ''}${q.xp ? `<span>${xpI}${q.xp}</span>` : ''}${q.gems ? `<span>${gemI}${q.gems}</span>` : ''}</div>
    <div style="margin-top:14px">${S.qprog >= q.n ? '<button class="btn wide orange" data-act="claimquest">Nhận thưởng!</button>' : '<button class="btn wide blue" data-close>Mình đi làm ngay!</button>'}</div>`;
  M_sig = () => S.qprog + '/' + S.quest;
  openModal('quest', 'Nhiệm vụ', M_draw(), { sig: M_sig() });
  if (!done) sfx('tap');
}
function unlocksAt(L) {
  const u = [];
  for (const [k, c] of Object.entries(CROPS)) if (c.lv === L) u.push([k, 'Hạt ' + nameOf(k).toLowerCase()]);
  for (const [k, T] of Object.entries(TREES)) if (T.lv === L) u.push(['tree:' + k, T.n]);
  for (const [k, P] of Object.entries(PENS)) if (P.lv === L) u.push(['pen:' + k, P.n]);
  for (const [k, F] of Object.entries(FACTORIES)) { if (F.lv === L) u.push(['fac:' + k, F.n]); else for (const r of F.rec) if (r.lv === L && F.lv < L) u.push([r.out, nameOf(r.out)]); }
  for (const [k, D] of Object.entries(DECOR)) if (D.lv === L) u.push(['decor:' + k, D.n]);
  for (const A of ADVENTURES) if (A.lv === L) u.push([A.goal.pet ? 'decor:' + A.goal.pet : 'decor:chest', 'Đảo ' + A.n]);
  return u;
}
on('levelup', (L, bonus) => {
  setTimeout(() => {
    const u = unlocksAt(L);
    openModal('level', 'Lên cấp!', `<div class="celebrate"><span class="bigstar"><b>${L}</b></span>
      <div class="reward" style="font-size:20px"><span>${coinI}+${bonus.coins}</span><span>${gemI}+${bonus.gems}</span><span>${boltI}Đầy</span></div>
      ${u.length ? `<h3 class="sub" style="margin:4px 0 0">Mở khoá mới</h3><div class="unlocks">${u.map(([k, n]) => `<div>${img(k)}${esc(n)}</div>`).join('')}</div>` : ''}
      <button class="btn wide orange" data-close>Tuyệt vời!</button></div>`);
    confetti(); sfx('level');
  }, 400);
});
on('quest', () => renderHUD());
// Cổng xong, vùng mở: mây tan (entities.js), chúc mừng bé
on('zone', id => {
  const Z = ZONES.find(z => z.id === id);
  setTimeout(() => { toast(`Đã mở ${Z.n}! Vào chặt cây thôi`); confetti(24); }, 500);
  save();
});
on('ship', ev => { if (ev === 'arrive') { toast('Tàu chở hàng đã cập bến!'); sfx('ship'); } });

// Lịch quà 7 ngày: điểm danh liên tục thì quà to dần, ngày 7 có quà lớn
const DAILY = [{ coins: 40 }, { energy: 15 }, { coins: 80 }, { gems: 2 }, { coins: 140 }, { gems: 3, energy: 30 }, { gems: 6, coins: 200 }];
const dayName = d => new Date(d).toDateString();
function openGift() {
  const today = dayName(Date.now()), yest = dayName(Date.now() - 86400000);
  const L = (S.login ||= { streak: 0, last: '' });
  const can = S.lastDaily !== today;
  const idx = can ? (L.last === yest ? (L.streak % 7) : 0) : ((L.streak - 1 + 7) % 7);
  const cells = DAILY.map((r, i) => {
    const got = can ? i < idx : i <= idx, isToday = i === idx;
    const what = [r.coins && `${coinI}${r.coins}`, r.gems && `${gemI}${r.gems}`, r.energy && `${boltI}${r.energy}`].filter(Boolean).join(' ');
    return `<div class="dday ${got ? 'got' : ''} ${isToday && can ? 'today' : ''} ${i === 6 ? 'big' : ''}"><b>Ngày ${i + 1}</b><span class="gift">${i === 6 ? '🎁' : '📦'}</span><span class="rw">${what}</span></div>`;
  }).join('');
  openModal('gift', 'Quà mỗi ngày', `<p class="hint">Vào chơi mỗi ngày để nhận quà. Ngày thứ 7 có quà lớn!</p><div class="daily">${cells}</div>
    <div style="margin-top:14px">${can ? '<button class="btn wide orange" data-act="claimdaily">Nhận quà hôm nay</button>' : '<button class="btn wide gray" data-close>Mai quay lại nhé!</button>'}</div>`);
}
function claimDaily(x, y) {
  const today = dayName(Date.now()), yest = dayName(Date.now() - 86400000);
  if (S.lastDaily === today) return;
  const L = (S.login ||= { streak: 0, last: '' });
  L.streak = L.last === yest ? L.streak + 1 : 1; L.last = today; S.lastDaily = today;
  const r = DAILY[(L.streak - 1) % 7];
  if (r.coins) { S.coins += r.coins; flyCoins(x, y, r.coins); }
  if (r.gems) { S.gems += r.gems; flyGems(x, y); }
  if (r.energy) S.energy = Math.max(S.energy, ENERGY_MAX) + (r.energy > 20 ? 0 : r.energy);
  confetti(); sfx('level'); openGift();
}

function openSettings(confirmReset) {
  openModal('settings', 'Cài đặt', `
    <div class="setting">Âm thanh <button class="btn small ${S.sound ? '' : 'gray'}" data-act="togglesound">${S.sound ? 'Bật' : 'Tắt'}</button></div>
    <div class="setting">Nhạc nền <button class="btn small ${S.music ? '' : 'gray'}" data-act="togglemusic">${S.music ? 'Bật' : 'Tắt'}</button></div>
    <div class="setting" style="flex-direction:column;align-items:flex-start;font-size:15px;font-weight:700">
      <b style="font-size:17px">Cài lên điện thoại</b>
      iPhone: mở bằng Safari → nút Chia sẻ → "Thêm vào MH chính".<br>Android: mở bằng Chrome → menu ⋮ → "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính".</div>
    <div class="setting">Chuyển sang máy khác <span class="row" style="gap:6px"><button class="btn small blue" data-act="backup">Lấy mã</button><button class="btn small" data-act="restore">Nhập mã</button></span></div>
    <div class="setting">${confirmReset ? 'Chắc chắn chơi lại từ đầu?' : 'Chơi lại từ đầu'}
      <button class="btn small red" data-act="${confirmReset ? 'resetyes' : 'reset'}">${confirmReset ? 'Xoá hết' : 'Chơi lại'}</button></div>
    <p class="hint" style="font-size:13px;margin-top:10px">Hình 2D vẽ tay (AI vẽ). Vài mô hình 3D còn lại: Kenney.nl (CC0). Maisie's Farm · làm tặng bé Maisie.</p>`);
}

// ============ Xử lý nút bấm trong bảng & khay ============
let M_draw = null, M_sig = null;
function redrawModal() { if (M && M === drawOwner && M_draw) { setModalBody(M_draw()); M.sig = M_sig?.(); } }

const ACT = {
  seed(b) {
    const k = b.dataset.k, c = CROPS[k];
    if (S.level < c.lv) { toast(`${nameOf(k)} mở ở cấp ${c.lv}`); sfx('no'); return; }
    S.seed = k; drawSeedTray();
    if (seedTarget && cropStage(seedTarget, now()) < 0) plant(seedTarget, k);
    toast('Kéo ngón tay qua các ô trống để gieo tiếp');
  },
  closetray() { closeTray(); },
  placeok() { placeConfirm(); }, placeno() { placeCancel(); },
  placerot() { placing.obj.r = ((placing.obj.r || 0) + 1) % 4; updateGhost(); },
  placestore() {
    const o = placing.real; W.scene.remove(marker); removeView(o.id);
    S.objs.splice(S.objs.indexOf(o), 1); (S.store ||= {})[o.t] = (S.store[o.t] || 0) + 1;
    placing = null; closeTray(); sfx('collect'); toast(`Đã cất ${DECOR[o.t].n.toLowerCase()} vào túi. Đặt lại trong Cửa hàng → Trang trí`);
  },
  claimdaily(b, x, y) { claimDaily(x, y); },
  placestored(b) {
    const t = b.dataset.k; if (!(S.store?.[t] > 0)) return;
    startPlace({ k: 'decor', t, r: 0 }, true, 0); placing.fromStore = t;
  },
  make(b, x, y) { makeRecipe(byId(+b.dataset.oid), +b.dataset.i, x, y); },
  give(b, x, y) { giveSite(byId(+b.dataset.oid), b.dataset.k, x, y); },
  collectfac(b, x, y) { collectJobs(byId(+b.dataset.oid), x, y); redrawModal(); },
  speedjob(b) {
    const o = byId(+b.dataset.oid), t = now(), j = o.jobs.find(j => t < j.e && t >= j.s); if (!j) return;
    const cost = speedCost(j.e - t);
    if (S.gems < cost) { toast(`Cần ${cost} kim cương`); sfx('no'); return; }
    S.gems -= cost; const d = j.e - t; o.jobs.forEach(q => { if (q.e > t) { q.e -= d; q.s = Math.max(t, q.s - d); } }); j.e = t;
    sfx('collect'); redrawModal();
  },
  buyslot(b) {
    const o = byId(+b.dataset.oid), cost = (o.slots || 2) * 3;
    if (S.gems < cost) { toast(`Cần ${cost} kim cương`); sfx('no'); return; }
    S.gems -= cost; o.slots = (o.slots || 2) + 1; sfx('build'); redrawModal();
  },
  buyanimal(b) { const o = byId(+b.dataset.oid); buyAnimal(o.t, o.id); },
  deliver(b, x, y) { deliver(+b.dataset.i, x, y); },
  skiporder(b) { const t = now(); S.orders[+b.dataset.i] = { wait: t + 10000, s: t }; sfx('tap'); redrawModal(); },
  fillcrate(b, x, y) { fillCrate(+b.dataset.i, x, y); },
  sendship(b, x, y) { sendShip(x, y); },
  shipnow() { if (S.gems < 2) { toast('Cần 2 kim cương'); return; } S.gems -= 2; S.ship = newShip(); sfx('ship'); redrawModal(); },
  sell(b, x, y) { const k = b.dataset.k; if (have(k) < 1) return; add(k, -1); S.coins += ITEMS[k].v; flyCoins(x, y, ITEMS[k].v); sfx('coin'); redrawModal(); },
  eat(b, x, y) {
    const k = b.dataset.k; if (have(k) < 1) return;
    if (S.energy >= 99) { toast('Năng lượng đã rất nhiều rồi'); return; }
    add(k, -1); S.energy += ITEMS[k].energy; plus(x, y - 20, `+${ITEMS[k].energy}⚡`); sfx('collect');
    if (M.type === 'energy') closeModal(); else redrawModal();
  },
  buyenergy() { if (S.energy >= ENERGY_MAX) { toast('Năng lượng đang đầy rồi'); closeModal(); return; } if (S.gems < 5) { toast('Cần 5 kim cương'); sfx('no'); return; } S.gems -= 5; S.energy = Math.max(S.energy, ENERGY_MAX); sfx('collect'); closeModal(); },
  upbarn() {
    const c = barnUpgradeCost(S.barnLvl);
    if (S.coins < c) { toast(`Cần thêm ${c - S.coins} xu nữa`); sfx('no'); return; }
    S.coins -= c; S.barnLvl++; sfx('build'); toast(`Kho chứa được ${barnCap()} món`); redrawModal();
  },
  shoptab(b) { shopTab = b.dataset.k; redrawModal(); },
  buy(b) { buy(b.dataset.k); },
  claimquest(b, x, y) {
    const q = claimQuest(); if (!q) return;
    flyCoins(x, y, q.coins || 0); flyXP(x, y); if (q.gems) flyGems(x, y);
    sfx('coin'); closeModal(); renderHUD();
    setTimeout(() => { if (!M) openQuest(); }, 900);
  },
  speed(b) { speedUp(byId(+b.dataset.oid)); },
  togglesound() { S.sound = !S.sound; openSettings(); },
  togglemusic() { S.music = !S.music; if (S.music) startMusic(); else stopMusic(); openSettings(); },
  reset() { openSettings(true); },
  backup() {
    openModal('backup', 'Mã sao lưu', `<p class="hint">Sao chép mã này, rồi trên máy mới vào Cài đặt → Nhập mã.</p>
      <textarea id="saveCode" class="code" readonly>${exportSave()}</textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn orange" data-act="copycode">Sao chép mã</button></div>`);
  },
  copycode() {
    const t = $('#saveCode');
    navigator.clipboard?.writeText(t.value).then(() => toast('Đã sao chép mã'), () => { t.select(); toast('Hãy giữ vào ô mã và chọn Sao chép'); })
      ?? (t.select(), toast('Hãy giữ vào ô mã và chọn Sao chép'));
  },
  restore() {
    openModal('restore', 'Nhập mã sao lưu', `<p class="hint">Dán mã từ máy cũ vào đây. Nông trại hiện tại trên máy này sẽ được thay thế.</p>
      <textarea id="restoreCode" class="code" placeholder="Dán mã vào đây"></textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn red" data-act="restoreyes">Khôi phục</button></div>`);
  },
  restoreyes() {
    try { importSave($('#restoreCode').value); toast('Đã khôi phục! Đang mở lại…'); setTimeout(() => location.reload(), 600); }
    catch (e) { toast('Mã không đúng. Kiểm tra lại đã dán đủ mã chưa nhé'); sfx('no'); }
  },
  resetyes() { resetGame(); location.reload(); },
};

export function initUI() {
  const click = e => {
    const b = e.target.closest('[data-act],[data-close]');
    if (!b) return;
    audioUnlock();
    if (b.hasAttribute('data-close')) { closeModal(); return; }
    const fn = ACT[b.dataset.act]; if (!fn) return;
    let x = e.clientX, y = e.clientY;
    if (!x && !y) { const r = b.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
    fn(b, x, y);
    renderHUD(); save();
  };
  document.addEventListener('click', click);
  $('#btnShop').onclick = () => { audioUnlock(); sfx('tap'); openShop(); };
  $('#btnBarn').onclick = () => { audioUnlock(); sfx('tap'); openBarn(); };
  $('#btnSet').onclick = () => { audioUnlock(); sfx('tap'); openSettings(); };
  $('#questBtn').onclick = () => { audioUnlock(); openQuest(); };
  $('#btnGift').onclick = () => { audioUnlock(); openGift(); renderHUD(); save(); };
  $('#energyPill').onclick = () => { audioUnlock(); openEnergy(); };
  $('#btnNb').onclick = () => {
    audioUnlock(); sfx('tap');
    if (S.level < 2) { toast('Hàng xóm mở ở cấp 2'); return; }
    openNeighbors({});
  };
  $('#btnAdv').onclick = () => {
    audioUnlock(); sfx('tap');
    if (S.level < 2) { toast('Phiêu lưu mở ở cấp 2'); return; }
    openAdventures({ openEnergy, onLeave: placePendingPets });
  };
  $('#barnIco').src = ICONS['b:crate'];
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (M) closeModal(); else if (placing) placeCancel(); } });
}

// Thú được giải cứu từ đảo phiêu lưu về sống ở nông trại
export function placePendingPets() {
  const list = S.pendingDecor || [];
  while (list.length) {
    const t = list.shift(), spot = findFree(1, 1, 12 + OFF, 9 + OFF);
    if (!spot) break;
    const o = { id: newId(), k: 'decor', t, x: spot[0], z: spot[1], r: 0 };
    S.objs.push(o); addView(o); focusOn(VIEWS.get(o.id).root.position);
    toast(`${DECOR[t].n} đã về nông trại!`); bounce(o.id);
  }
  save();
}

// ============ Bong bóng trên đầu vật thể ============
let bubbleList = [];
function buildBubbles() {
  const t = now(), list = [];
  for (const o of S.objs) {
    const v = VIEWS.get(o.id); if (!v) continue;
    if (o.site) { // công trường: búa khi bé đang có món góp được
      if (!gateLock(o) && canReach(o) && Object.entries(siteReq(o)).some(([k, r]) => r.got < r.need && have(k) > 0)) list.push({ oid: o.id, y: 1.6, mark: '🔨', cls: 'sitemark' });
      continue;
    }
    if (o.k === 'pen') {
      const P = PENS[o.t], ready = o.animals.filter(a => a.e && t >= a.e).length, hungry = o.animals.filter(a => !a.e).length;
      if (ready) list.push({ oid: o.id, y: 1.4, icon: P.prod, n: ready });
      else if (hungry) list.push({ oid: o.id, y: 1.4, icon: P.feed, n: have(P.feed) ? null : 0, cls: 'hungry' + (have(P.feed) ? '' : ' warn') });
    } else if (o.k === 'fac') {
      const done = o.jobs.filter(j => t >= j.e);
      if (done.length) list.push({ oid: o.id, y: 2.6, icon: FACTORIES[o.t].rec[done[0].r].out, n: done.length > 1 ? done.length : null });
    } else if (o.k === 'market') {
      if (soldCount()) list.push({ oid: o.id, y: 1.9, html: coinI, n: soldCount() });
    } else if (o.k === 'board') {
      if (S.orders.some(x => !x.wait && hasAll(x.items))) list.push({ oid: o.id, y: 1.9, mark: '!' });
    }
  }
  if (S.ship.st === 'docked' && S.ship.crates.some(c => !c.done && have(c.item) >= c.n)) list.push({ oid: 'ship', y: 3.4, mark: '!' });
  list.push(...visitorBubbles());
  list.push({ oid: 'pier', y: 1.4, mark: '🎣', cls: 'fishmark' });
  const q = currentQuest();
  if (q && S.qprog >= q.n) list.push({ oid: 'maisie', y: 1.3, mark: '✓' });
  else if (q && S.quest < QUESTS.length && S.qprog === 0) list.push({ oid: 'maisie', y: 1.3, mark: '!' });
  const sig = list.map(b => b.oid + (b.icon || b.mark || 'h') + b.n + b.cls).join('|');
  if (sig === buildBubbles.sig) return;
  buildBubbles.sig = sig;
  bubbleList.forEach(b => b.el.remove());
  bubbleList = list.map(b => {
    const el = document.createElement('button'); el.className = 'bub ' + (b.mark ? 'mark' : '') + ' ' + (b.cls || '');
    el.innerHTML = b.mark ? b.mark : `${b.html || img(b.icon)}${b.n != null ? `<span class="n">${b.n}</span>` : ''}`;
    el.onclick = e => { audioUnlock(); tapObject(b.oid, e.clientX, e.clientY); renderHUD(); save(); };
    $('#bubbles').appendChild(el);
    return { ...b, el };
  });
}
const v3 = new THREE.Vector3();
function rootOf(oid) { return oid === 'ship' ? SPECIAL.dock : oid === 'pier' ? SPECIAL.pier : oid === 'maisie' ? SPECIAL.maisie : typeof oid === 'string' && oid.startsWith('v:') ? visitorRoot(oid) : VIEWS.get(oid)?.root; }
// ---------- Bàn tay hướng dẫn cho mấy nhiệm vụ đầu ----------
let hand = null;
function questTarget() {
  if (W.mode !== 'farm' || M || placing || S.quest >= 10) return null;
  const q = currentQuest(); if (!q) return null;
  if (S.qprog >= q.n) return { el: '#questBtn' };
  const t = now(), objs = S.objs;
  const find = f => objs.find(f);
  switch (q.ev) {
    case 'harvest': { const r = find(o => o.k === 'field' && cropStage(o, t) === 3 && (!q.key || o.crop === q.key)); if (r) return { oid: r.id, y: 1 };
      const e = find(o => o.k === 'field' && !o.crop); return e ? { oid: e.id, y: 1 } : null; }
    case 'plant': { const e = find(o => o.k === 'field' && !o.crop); return e ? { oid: e.id, y: 1 } : null; }
    case 'make': { const f = find(o => o.k === 'fac' && FACTORIES[o.t].rec.some(r => r.out === q.key)); return f ? { oid: f.id, y: 2.8 } : { el: '#btnShop' }; }
    case 'feed': case 'collect': case 'buyanimal': { const p = find(o => o.k === 'pen'); return p ? { oid: p.id, y: 1.8 } : null; }
    case 'deliver': { const b = find(o => o.k === 'board'); return b ? { oid: b.id, y: 2.1 } : null; }
    case 'clear': { let best = null, bd = 1e9; for (const o of objs) if (o.k === 'obstacle' && isOpenCell(o.x, o.z)) { const d = Math.hypot(o.x - 12 - OFF, o.z - 10 - OFF); if (d < bd) { bd = d; best = o; } } return best ? { oid: best.id, y: 1.4 } : null; }
    case 'crate': return { oid: 'ship', y: 3.6 };
    case 'buydecor': case 'buytree': return { el: '#btnShop' };
  }
  return null;
}
function positionHand() {
  if (!hand) { hand = document.createElement('div'); hand.className = 'hand'; hand.textContent = '👇'; $('#bubbles').appendChild(hand); }
  const tg = questTarget();
  if (!tg) { hand.hidden = true; return; }
  let x, y;
  if (tg.el) { const r = $(tg.el)?.getBoundingClientRect(); if (!r || !r.width) { hand.hidden = true; return; } x = r.left + r.width / 2; y = r.top - 6; }
  else { const r = rootOf(tg.oid); if (!r) { hand.hidden = true; return; } v3.copy(r.position); v3.y += tg.y; [x, y] = toScreen(v3); }
  hand.hidden = false; hand.style.transform = `translate(${x}px,${y}px)`;
}

export function positionBubbles() {
  positionHand();
  for (const b of bubbleList) {
    const r = rootOf(b.oid); if (!r) continue;
    v3.copy(r.position); v3.y += b.y;
    const [x, y] = toScreen(v3);
    b.el.style.transform = `translate(${x}px,${y}px)`;
  }
  if (timerPop) {
    const r = VIEWS.get(timerPop.oid)?.root;
    if (r) { v3.copy(r.position); v3.y += 1; const [x, y] = toScreen(v3); timerPop.el.style.left = x + 'px'; timerPop.el.style.top = y + 'px'; }
  }
}

// ============ Nhịp game (4 lần/giây) ============
let lastSave = 0;
export function tick() {
  const t = now();
  energyTick(); shipTick(); visitorsTick(); marketTick();
  const g = regrowTick(t); if (g) { addView(g); bounce(g.id); }
  if (!(M && M.type === 'orders')) refreshOrders();
  for (const v of VIEWS.values()) v.refresh?.(t);
  buildBubbles();
  timerPop?.draw?.();
  if (M && M === drawOwner && M_sig) { const s = M_sig(); if (s !== M.sig) redrawModal(); }
  document.querySelectorAll('[data-rt]').forEach(el => { el.textContent = fmt(+el.dataset.rt - t); });
  document.querySelectorAll('#mBody [data-s]').forEach(el => { el.style.width = Math.min(100, (t - el.dataset.s) / (el.dataset.e - el.dataset.s) * 100) + '%'; });
  renderHUD();
  if (t - lastSave > 5000) { save(); lastSave = t; }
}
