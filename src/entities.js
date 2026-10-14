import * as THREE from 'three';
import { make, play } from './assets.js';
import { W, cellToWorld } from './world.js';
import { S, footprint, now, rnd } from './state.js';
import { GRID, ITEMS, CROPS, TREES, PENS, FACTORIES, DECOR, OBSTACLES, PEOPLE, BUILDING_MODELS } from './data.js';

export const VIEWS = new Map();
const mats = {};
const mat = (c, o = {}) => (mats[c + JSON.stringify(o)] ||= new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, ...o }));
const box = (w, h, d, c, o) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c, o)); m.castShadow = m.receiveShadow = true; return m; };

// Ngôi sao lấp lánh cho ô ruộng đã chín
let starMat = null;
function sparkle() {
  if (!starMat) {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'); x.translate(32, 32); x.fillStyle = '#fff6b0'; x.shadowColor = '#ffd23f'; x.shadowBlur = 10;
    x.beginPath(); for (let i = 0; i < 8; i++) { const r = i % 2 ? 9 : 26, a = i * Math.PI / 4; x.lineTo(Math.sin(a) * r, -Math.cos(a) * r); } x.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    starMat = new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true });
  }
  const s = new THREE.Sprite(starMat); s.scale.set(0.35, 0.35, 1); s.renderOrder = 5; return s;
}

// Khói ống khói khi nhà máy đang chạy
let puffMat = null;
function smoke() {
  if (!puffMat) puffMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, roughness: 1 });
  const g = new THREE.Group();
  for (let i = 0; i < 3; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), puffMat.clone()); p.userData.ph = i / 3; g.add(p); }
  g.userData.tick = (t) => g.children.forEach(p => {
    const f = (t * 0.6 + p.userData.ph) % 1;
    p.position.set(Math.sin(f * 6) * 0.08, f * 0.9, 0); p.scale.setScalar(0.6 + f * 1.4); p.material.opacity = 0.75 * (1 - f);
  });
  return g;
}

// ---------- Nhà ghép từ bộ Fantasy Town ----------
// Mảnh tường nằm ở cạnh +x của ô; xoay để đặt các cạnh khác
function house(w, d, { stone = false, roof = 'town/roof-gable', roofH = 1.4, wallTint, roofTint, door = 'south', floors = 1 } = {}) {
  const g = new THREE.Group();
  const P = stone ? 'town/wall' : 'town/wall-wood';
  for (let f = 0; f < floors; f++) {
    for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) {
      const cx = -w / 2 + 0.5 + i, cz = -d / 2 + 0.5 + j;
      const edges = [];
      if (i === w - 1) edges.push(['e', 0]);
      if (i === 0) edges.push(['w', Math.PI]);
      if (j === d - 1) edges.push(['s', -Math.PI / 2]);
      if (j === 0) edges.push(['n', Math.PI / 2]);
      for (const [side, rot] of edges) {
        let k = P + '-window-shutters';
        if (f === 0 && side === door && i === Math.floor((w - 1) / 2)) k = P + '-door';
        else if (f === 0 && side === 'e' && j === Math.floor((d - 1) / 2) && door === 'east') k = P + '-door';
        else if ((i + j + f) % 2) k = P;
        const piece = make(k, { s: 1, center: false, tint: wallTint });
        piece.rotation.y = rot; piece.position.set(cx, f, cz);
        g.add(piece);
      }
    }
  }
  const r = make(roof, roofTint !== undefined ? { paint: roofTint } : {});
  const rb = new THREE.Box3().setFromObject(r).getSize(new THREE.Vector3());
  r.scale.set((w + 0.25) / rb.x, roofH / rb.y, (d + 0.25) / rb.z);
  r.position.y = floors;
  g.add(r);
  g.userData.top = floors + roofH;
  return g;
}

// Cánh quạt / bánh xe quay quanh tâm của nó
function spinner(key, h) {
  const m = make(key, { h });
  const c = new THREE.Box3().setFromObject(m).getCenter(new THREE.Vector3());
  const pivot = new THREE.Group(); m.position.sub(c); pivot.add(m);
  return pivot;
}

// ---------- Từng loại vật thể ----------
const CLUSTER = [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]];
const CROP_SCALE = { wheat: 0.9, corn: 0.75, carrot: 1, strawberry: 1, tomato: 1, pumpkin: 1, melon: 1 };

export function cropStage(o, t) {
  if (!o.crop) return -1;
  if (t >= o.e) return 3;
  const f = (t - o.s) / (o.e - o.s);
  return f < 0.5 ? 0 : 1;
}

function fieldView(o) {
  const root = new THREE.Group();
  const soil = box(0.98, 0.08, 0.98, 0x8a5a33); soil.position.y = 0.0; root.add(soil);
  const rows = make('nature/crops_dirtDoubleRow', { size: 0.94 }); rows.position.y = 0.03; root.add(rows);
  const plant = new THREE.Group(); root.add(plant);
  const star = sparkle(); star.visible = false; root.add(star);
  let key = '';
  return {
    root,
    refresh(t) {
      const st = cropStage(o, t), k = o.crop + st;
      if (k === key) return;
      key = k; plant.clear();
      star.visible = st === 3;
      if (st < 0) return;
      const c = CROPS[o.crop], model = c.stages[st === 3 ? 2 : st];
      const sc = (CROP_SCALE[o.crop] || 1) * (st === 0 ? 0.7 : 1);
      CLUSTER.forEach(([x, z], n) => {
        const m = make(model, st === 3 && c.fit ? { ...c.fit } : st === 3 && c.tint ? { s: sc, tint: c.tint } : { s: sc }); m.position.set(x, 0.04, z); m.rotation.y = n * 1.3; plant.add(m);
        if (st === 3 && c.deco) for (let q = 0; q < 2; q++) {
          const f = make(c.deco, { size: 0.13 }); f.position.set(x + (q ? 0.08 : -0.07), 0.18 + q * 0.06, z + (q ? -0.05 : 0.06)); plant.add(f);
        }
      });
    },
    update(t) { if (star.visible) { star.position.set(0, 0.85 + Math.sin(t * 3 + o.id) * 0.08, 0); star.material.rotation = t; } },
  };
}

function treeView(o) {
  const T = TREES[o.t], root = new THREE.Group();
  const isPalm = !!T.palm;
  const m = make(T.model, { h: isPalm ? 2.1 : 1.8, tint: T.tint }); root.add(m);
  const fruits = new THREE.Group(); root.add(fruits);
  const spots = isPalm ? [[0.12, 1.62, 0.05], [-0.08, 1.6, 0.1], [0.02, 1.6, -0.12]] : [[0.3, 1.05, 0.25], [-0.28, 1.2, 0.2], [0.05, 1.35, 0.35], [0.25, 1.4, -0.2]];
  spots.forEach(([x, y, z]) => { const f = make(T.fruit, { size: isPalm ? 0.2 : 0.18 }); f.position.set(x, y, z); fruits.add(f); });
  const star = sparkle(); root.add(star);
  return {
    root,
    refresh(t) { const ready = t >= o.e; fruits.visible = ready; star.visible = ready; const f = Math.min(1, (t - o.s) / (o.e - o.s)); m.scale.setScalar(ready ? 1 : 0.85 + 0.15 * f); },
    update(t) { if (star.visible) { star.position.set(0, 2.25 + Math.sin(t * 3 + o.id) * 0.08, 0); star.material.rotation = t; } },
  };
}

const PEN_GROUND = { coop: 0xe9d27f, cowpen: 0xa6dc72, pigpen: 0xb88a5c, beehive: 0xc6e89a };
function penView(o) {
  const P = PENS[o.t], root = new THREE.Group();
  const ground = box(2.9, 0.05, 2.9, PEN_GROUND[o.t]); ground.position.y = 0.0; root.add(ground);
  // hàng rào bao quanh, cổng ở giữa cạnh trước
  for (let i = 0; i < 3; i++) {
    const x = -1 + i;
    const n = make('nature/fence_simple', { s: 1 }); n.position.set(x, 0, -1.47); root.add(n);
    const s = make(i === 1 ? 'nature/fence_gate' : 'nature/fence_simple', { s: 1 }); s.position.set(x, 0, 1.47); root.add(s);
    const wv = make('nature/fence_simple', { s: 1 }); wv.rotation.y = Math.PI / 2; wv.position.set(-1.47, 0, x); root.add(wv);
    const e = make('nature/fence_simple', { s: 1 }); e.rotation.y = Math.PI / 2; e.position.set(1.47, 0, x); root.add(e);
  }
  if (o.t === 'beehive') {
    for (let i = 0; i < 2; i++) { const hv = make('survival/box-large', { size: 0.55, tint: 0xffd23f }); hv.position.set(-0.95 + i * 0.6, 0, -0.95); root.add(hv); }
    [[0.6, -0.7], [0.9, 0.3], [-0.8, 0.5], [0.1, 0.8], [-0.2, -0.3]].forEach(([x, z], i) => { const f = make(i % 2 ? 'nature/flower_yellowB' : 'nature/flower_redB', { size: 0.35 }); f.position.set(x, 0, z); root.add(f); });
  } else if (o.t === 'coop') {
    const hut = house(1, 1, { roof: 'town/roof-point', roofH: 0.7, roofTint: 0xe8604c }); hut.scale.setScalar(0.75); hut.position.set(-0.85, 0, -0.85); root.add(hut);
  } else {
    const tr = make('survival/box-large', { size: 0.8 }); tr.position.set(-0.9, 0, -0.9); root.add(tr);
    const bk = make('survival/bucket', { size: 0.3 }); bk.position.set(-0.3, 0, -1.05); root.add(bk);
  }
  const herd = [];
  const sync = () => {
    while (herd.length < o.animals.length) {
      const a = make(P.animal, { h: o.t === 'coop' ? 0.5 : o.t === 'beehive' ? 0.35 : o.t === 'cowpen' ? 0.85 : 0.6 });
      a.position.set((Math.random() - 0.5) * 1.6, 0.03, (Math.random() - 0.5) * 1.4 + 0.2);
      a.userData.goal = a.position.clone(); a.userData.wait = Math.random() * 3;
      root.add(a); herd.push(a);
    }
    while (herd.length > o.animals.length) root.remove(herd.pop());
  };
  sync();
  return {
    root, herd,
    refresh(t) { sync(); },
    update(t, dt) {
      herd.forEach((a, i) => {
        const st = o.animals[i]; if (!st) return;
        const u = a.userData; u.mixer?.update(dt);
        const ready = st.e && t >= st.e, busy = st.e && t < st.e;
        if (P.fly) a.position.y = 0.55 + Math.sin(t * 3 + i) * 0.12;
        if (ready) { play(a, 'dance'); return; }
        const d = u.goal.clone().sub(a.position); d.y = 0;
        if (d.length() > 0.05) {
          play(a, 'walk'); d.setLength(Math.min(d.length(), dt * 0.45)); a.position.add(d);
          a.rotation.y = Math.atan2(d.x, d.z);
        } else {
          play(a, busy ? 'eat' : 'idle');
          u.wait -= dt;
          if (u.wait <= 0) { u.goal.set((Math.random() - 0.5) * 1.8, 0.03, (Math.random() - 0.5) * 1.6 + 0.15); u.wait = 2 + Math.random() * 4; }
        }
      });
    },
  };
}

// Nhà KayKit: trả về mô hình + bộ phận quay (cánh quạt, bánh xe) nếu có
function kkBuilding(key) {
  const B = BUILDING_MODELS[key];
  const m = make(B.model, { size: B.size });
  m.rotation.y = B.rot || 0;
  let spin = null;
  if (B.spin) m.traverse(o => { if (!spin && o.name.includes(B.spin)) spin = o; });
  return { m, spin, axis: B.axis };
}
function prop(root, key, opts, x, z, ry = 0) { const p = make(key, opts); p.position.set(x, 0, z); p.rotation.y = ry; root.add(p); return p; }

const FAC_PROPS = {
  feedmill: r => { prop(r, 'kk/decoration/props/sack.gltf', { size: 0.4 }, 0.7, 0.75); prop(r, 'kk/decoration/props/sack.gltf', { size: 0.35 }, 0.35, 0.85, 1); },
  bakery: r => { prop(r, 'food/loaf', { size: 0.3 }, 0.75, 0.8); },
  dairy: r => { prop(r, 'kk/decoration/props/bucket_water.gltf', { size: 0.3 }, -0.75, 0.8); prop(r, 'food/carton', { h: 0.3 }, -0.45, 0.85); },
  juicebar: r => { prop(r, 'kk/decoration/props/crate_open.gltf', { size: 0.4 }, 0.75, 0.8); prop(r, 'food/orange', { size: 0.15 }, 0.75, 0.8).position.y = 0.2; },
  seafood: r => { prop(r, 'survival/campfire-pit', { size: 0.45 }, 0.7, 0.75); prop(r, 'food/fish', { size: 0.3 }, -0.65, 0.8); },
  kitchen: r => { prop(r, 'survival/campfire-pit', { size: 0.45 }, 0.7, 0.75); prop(r, 'survival/workbench', { size: 0.5 }, -0.65, 0.75); },
  sweets: r => { prop(r, 'food/cupcake', { size: 0.3 }, 0.75, 0.85); prop(r, 'food/donut-sprinkles', { size: 0.28 }, -0.7, 0.85); },
  jammaker: r => { prop(r, 'food/honey', { size: 0.28, tint: 0xff7a7a }, 0.7, 0.8); prop(r, 'kk/decoration/props/barrel.gltf', { size: 0.4 }, -0.7, 0.75); },
};
const SMOKE_AT = { bakery: [0.35, 1.7, -0.35], kitchen: [0.7, 0.3, 0.75], seafood: [0.7, 0.3, 0.75], sweets: [0, 1.5, 0], jammaker: [-0.3, 1.9, -0.3] };

function facView(o) {
  const root = new THREE.Group();
  root.add(yardPatch(1.9));
  const { m, spin, axis } = kkBuilding(o.t); root.add(m);
  FAC_PROPS[o.t]?.(root);
  let puff = null;
  if (SMOKE_AT[o.t]) { puff = smoke(); puff.position.set(...SMOKE_AT[o.t]); root.add(puff); }
  return {
    root,
    refresh(t) { if (puff) puff.visible = o.jobs.some(j => t < j.e && t >= j.s); },
    update(t, dt) {
      const working = o.jobs.some(j => t < j.e && t >= j.s);
      if (spin) spin.rotation[axis] += dt * (working ? 2.2 : 0.3);
      if (puff?.visible) puff.userData.tick(t);
    },
  };
}

// Sân đất nện dưới chân công trình
let yardTex = null;
function yardPatch(size) {
  if (!yardTex) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    x.fillStyle = '#d9b57a'; x.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 220; i++) { x.fillStyle = `rgba(${120 + Math.random() * 60},${80 + Math.random() * 40},40,.25)`; x.beginPath(); x.arc(Math.random() * 128, Math.random() * 128, 1 + Math.random() * 2.5, 0, 7); x.fill(); }
    yardTex = new THREE.CanvasTexture(c); yardTex.colorSpace = THREE.SRGBColorSpace;
  }
  const g = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.62, size * 0.66, 0.06, 28), new THREE.MeshStandardMaterial({ map: yardTex, roughness: 1 }));
  g.position.y = 0.0; g.scale.z = 0.92; g.receiveShadow = true;
  return g;
}

function mainHouseView() {
  const root = new THREE.Group();
  root.add(yardPatch(2.9));
  const { m } = kkBuilding('house'); m.position.z = -0.2; root.add(m);
  const l1 = make('town/lantern', { h: 0.9 }); l1.position.set(-1.25, 0, 1.1); root.add(l1);
  const l2 = make('town/lantern', { h: 0.9 }); l2.position.set(1.25, 0, 1.1); root.add(l2);
  [[-0.8, 1.15, 'nature/flower_redA'], [0.8, 1.15, 'nature/flower_yellowA'], [-1.2, -0.9, 'nature/plant_bushLarge'], [1.25, -0.8, 'nature/flower_purpleA']].forEach(([x, z, k]) => prop(root, k, { size: 0.4 }, x, z));
  return { root };
}

function barnView() {
  const root = new THREE.Group();
  root.add(yardPatch(1.95));
  const { m } = kkBuilding('barn'); m.position.z = -0.1; root.add(m);
  prop(root, 'kk/decoration/props/sack.gltf', { size: 0.4 }, 0.72, 0.78);
  prop(root, 'kk/decoration/props/crate_A_big.gltf', { size: 0.38 }, -0.72, 0.78, 0.4);
  return { root };
}

function boardView() {
  const root = new THREE.Group();
  const p1 = box(0.1, 1.2, 0.1, 0x8b5a2b); p1.position.set(-0.75, 0.6, 0); root.add(p1);
  const p2 = p1.clone(); p2.position.x = 0.75; root.add(p2);
  const bd = box(1.8, 0.85, 0.08, 0xc98d52); bd.position.set(0, 0.95, 0); root.add(bd);
  const top = box(1.95, 0.12, 0.2, 0x93603a); top.position.set(0, 1.42, 0); root.add(top);
  const colors = [0xfffaf0, 0xfff0c0, 0xe8f6ff, 0xfffaf0, 0xffe6ef, 0xf0ffe8];
  colors.forEach((c, i) => { const n = box(0.4, 0.3, 0.02, c); n.position.set(-0.55 + (i % 3) * 0.55, 1.15 - Math.floor(i / 3) * 0.38, 0.06); n.rotation.z = (i % 2 ? 0.05 : -0.04); root.add(n); });
  const cart = make('town/cart', { size: 0.9 }); cart.position.set(0.2, 0, 0.55); cart.rotation.y = Math.PI / 2; root.add(cart);
  return { root, cart };
}

// Quầy chợ: hàng đang bày hiện lên mặt sạp
function marketView(o) {
  const root = new THREE.Group();
  root.add(yardPatch(1.9));
  const { m } = kkBuilding('market'); root.add(m);
  const c1 = make('kk/decoration/props/crate_A_big.gltf', { size: 0.35 }); c1.position.set(-0.75, 0, 0.8); root.add(c1);
  const b1 = make('kk/decoration/props/barrel.gltf', { size: 0.32 }); b1.position.set(0.78, 0, 0.8); root.add(b1);
  const goods = new THREE.Group(); goods.position.set(0, 0.62, 0.55); root.add(goods);
  let sig = '';
  return {
    root,
    refresh() {
      const s = o.slots.map(x => x ? x.item + (x.sold ? '$' : '') : '-').join();
      if (s === sig) return; sig = s; goods.clear();
      o.slots.forEach((x, i) => {
        if (!x || x.sold) return;
        const m = make(ITEMS[x.item].icon, { size: 0.26, tint: ITEMS[x.item].tint });
        m.position.set(-0.5 + (i % 3) * 0.5, 0, Math.floor(i / 3) * 0.3 - 0.1); goods.add(m);
      });
    },
  };
}

function decorView(o) {
  const D = DECOR[o.t], root = new THREE.Group();
  const m = make(D.model, { ...D.fit, tint: D.tint, paint: D.paint }); root.add(m);
  if (!D.pet) return { root };
  // thú cưng đi dạo quanh chỗ đặt
  m.userData.goal = new THREE.Vector3(); m.userData.wait = 1;
  return {
    root,
    update(t, dt) {
      const u = m.userData; u.mixer?.update(dt);
      const d = u.goal.clone().sub(m.position);
      if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * 0.5)); m.position.add(d); m.rotation.y = Math.atan2(d.x, d.z); }
      else { play(m, u.dance ? 'dance' : 'idle'); u.wait -= dt; if (u.wait <= 0) { u.goal.set((Math.random() - 0.5) * 2.4, 0, (Math.random() - 0.5) * 2.4); u.wait = 2 + Math.random() * 5; u.dance = Math.random() < 0.25; } }
    },
  };
}

function obstacleView(o) {
  const O = OBSTACLES[o.t], root = new THREE.Group();
  const m = make(O.model, O.fit); m.rotation.y = (o.r || 0) * 1.57 + (o.id % 7) * 0.3; root.add(m);
  if (o.t !== 'tree' && o.t !== 'rock') { const g = make('nature/grass', { size: 0.4 }); g.position.set(0.3, 0, 0.3); root.add(g); }
  return { root };
}

export function createView(o) {
  switch (o.k) {
    case 'field': return fieldView(o);
    case 'tree': return treeView(o);
    case 'pen': return penView(o);
    case 'fac': return facView(o);
    case 'house': return mainHouseView(o);
    case 'barn': return barnView(o);
    case 'board': return boardView(o);
    case 'decor': return decorView(o);
    case 'obstacle': return obstacleView(o);
    case 'market': return marketView(o);
  }
  return { root: new THREE.Group() };
}

export function place(v, o) {
  const [w, d] = footprint(o);
  v.root.position.copy(cellToWorld(o.x, o.z, w, d));
  if (o.k === 'decor') v.root.rotation.y = -(o.r || 0) * Math.PI / 2;
}

export function addView(o) {
  const v = createView(o);
  v.root.userData.oid = o.id;
  place(v, o);
  W.farm.add(v.root);
  W.pickables.push(v.root);
  VIEWS.set(o.id, v);
  v.refresh?.(now());
  return v;
}
export function removeView(id) {
  const v = VIEWS.get(id); if (!v) return;
  W.farm.remove(v.root);
  W.pickables.splice(W.pickables.indexOf(v.root), 1);
  VIEWS.delete(id);
}
export function rebuildView(o) { removeView(o.id); return addView(o); }

// ---------- Bến tàu, tàu hàng, Maisie ----------
export const SPECIAL = {};
export function buildSpecials() {
  // Bến gỗ nhô ra biển ở mép trước đảo
  const dock = new THREE.Group();
  const p = cellToWorld(17, GRID - 1);
  for (let i = 0; i < 3; i++) { const d = make('pirate/structure-platform-dock', { size: 1.6 }); d.position.set(0, -0.62, 1.2 + i * 1.6); dock.add(d); }
  const bar = make('pirate/barrel', { size: 0.4 }); bar.position.set(0.5, 0.15, 1.5); dock.add(bar);
  const crt = make('pirate/crate', { size: 0.5 }); crt.position.set(-0.5, 0.15, 2.4); dock.add(crt);
  dock.position.set(p.x, 0, p.z);
  dock.userData.oid = 'ship';
  W.farm.add(dock); W.pickables.push(dock);

  const ship = make('pirate/ship-small', { h: 3.2 });
  ship.rotation.y = Math.PI;
  const home = new THREE.Vector3(p.x + 2.1, -0.5, p.z + 4.0);
  ship.position.copy(home);
  ship.userData.oid = 'ship';
  W.farm.add(ship); W.pickables.push(ship);
  SPECIAL.ship = ship; SPECIAL.shipHome = home; SPECIAL.dock = dock;

  // Cầu câu cá ở mép phải đảo
  const pier = new THREE.Group(), pp = cellToWorld(GRID - 1, 9);
  for (let i = 0; i < 3; i++) { const d = make('pirate/structure-platform-dock-small', { size: 1.5 }); d.rotation.y = Math.PI / 2; d.position.set(-1.45 + i * 1.45, -0.62, 0); pier.add(d); }
  const pb = make('pirate/barrel', { size: 0.4 }); pb.position.set(-1.3, 0.15, 0.45); pier.add(pb);
  const bucket = make('survival/bucket', { size: 0.3 }); bucket.position.set(0.9, 0.15, -0.4); pier.add(bucket);
  const rod = make('pirate/tool-paddle', { h: 1.2 }); rod.position.set(1.6, 0.15, 0.3); rod.rotation.z = -0.6; pier.add(rod);
  pier.position.set(pp.x + 3.6, 0, pp.z); pier.userData.oid = 'pier';
  W.farm.add(pier); W.pickables.push(pier); SPECIAL.pier = pier;

  // Maisie đi dạo quanh nhà
  const maisie = make(PEOPLE[0].model, { h: 0.95 });
  maisie.userData.oid = 'maisie';
  const mp = cellToWorld(12, 8); maisie.position.copy(mp);
  maisie.userData.goal = mp.clone(); maisie.userData.wait = 2;
  W.farm.add(maisie); W.pickables.push(maisie);
  SPECIAL.maisie = maisie;
}

export function updateSpecials(t, dt) {
  const sh = SPECIAL.ship, away = S.ship.st === 'away';
  const target = SPECIAL.shipHome.clone(); if (away) target.z += 30;
  sh.position.lerp(target, Math.min(1, dt * 0.6));
  sh.position.y = -0.5 + Math.sin(t * 1.4) * 0.05;
  sh.rotation.z = Math.sin(t * 1.1) * 0.03;
  sh.visible = sh.position.z < SPECIAL.shipHome.z + 25;

  const m = SPECIAL.maisie, u = m.userData; u.mixer?.update(dt);
  const d = u.goal.clone().sub(m.position); d.y = 0;
  if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * 0.9)); m.position.add(d); m.rotation.y = Math.atan2(d.x, d.z); }
  else {
    play(m, u.wave > 0 ? 'emote-yes' : 'idle'); u.wait -= dt; u.wave = (u.wave || 0) - dt;
    if (u.wait <= 0) {
      // đi tới một ô trống gần trung tâm
      for (let k = 0; k < 20; k++) {
        const x = 7 + rnd(13), z = 3 + rnd(14);
        if (!S.objs.some(o => { const [w, dd] = footprint(o); return x >= o.x && x < o.x + w && z >= o.z && z < o.z + dd; })) { u.goal.copy(cellToWorld(x, z)); break; }
      }
      u.wait = 3 + Math.random() * 5;
    }
  }
}

export function bounce(id) {
  const v = typeof id === 'string' ? { root: SPECIAL[id] } : VIEWS.get(id);
  if (v?.root) v.root.userData.bounceT = performance.now();
}
export function updateBounce(root) {
  const b = root.userData.bounceT; if (!b) return;
  const f = (performance.now() - b) / 350;
  if (f >= 1) { root.scale.set(1, 1, 1); root.userData.bounceT = 0; return; }
  const k = Math.sin(f * Math.PI) * 0.12;
  root.scale.set(1 + k * 0.5, 1 - k, 1 + k * 0.5);
}

// Biểu tượng cửa hàng vẽ từ chính mô hình nhà/chuồng
export function buildingIcons() {
  const list = [];
  const view = o => { const v = createView(o); v.refresh?.(now()); return v.root; };
  for (const k of Object.keys(FACTORIES)) list.push(['fac:' + k, { obj: () => view({ k: 'fac', t: k, jobs: [] }), rotY: 0.2 }]);
  for (const k of Object.keys(PENS)) list.push(['pen:' + k, { obj: () => view({ k: 'pen', t: k, animals: [{ s: 0, e: 0 }, { s: 0, e: 0 }] }), rotY: 0.2 }]);
  list.push(['b:field', { obj: () => view({ k: 'field', crop: 'wheat', s: 0, e: 1 }), rotY: 0.2 }]);
  return list;
}
