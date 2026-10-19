import * as THREE from 'three';
import { make, play } from './assets.js';
import { hasSprite, spriteObject, animateArt } from './sprites.js';
import { picketFence, fenceRing, brickTile, flowerBed, planterBase, raisedBed, lushTree, roundBush } from './props.js';
import { W, cellToWorld, AZ, EL } from './world.js';
import { S, footprint, occupancy, now, rnd, on } from './state.js';
import { isOpenCell, zoneAt, seeded, GATES, canReach } from './island.js';
import { helperCount, helperCap } from './helper.js';
import { ZONES, GRID, OFF, ITEMS, CROPS, TREES, PENS, FACTORIES, DECOR, OBSTACLES, PEOPLE, BUILDING_MODELS, SPRITE_ART, PEN_SPRITE, TREE_SPRITE, DECOR_SPRITE, MODEL_SPRITE, FAC_SPRITE, HELPER_SPRITE, HELPERS } from './data.js';

// Hình 2D nếu đã có ảnh, không thì trả về null
export function art(name, w = 1, d = 1, extra = {}) {
  if (!hasSprite(name)) return null;
  return spriteObject(name, { width: SPRITE_ART[name].width * (extra.scale || 1), w, d, shadow: extra.shadow !== false });
}
// Mô hình 3D có hình 2D thay thế thì dùng hình 2D
// 'art:<tên>' vẽ thẳng hình 2D <tên> (đảo truyện); thiếu hình thì make() trả khối tạm
export function artOrModel(model, fit, w = 1, d = 1) {
  return art(model.startsWith('art:') ? model.slice(4) : MODEL_SPRITE[model], w, d) || make(model, fit);
}
// Đặt hướng nhìn cho nhân vật/thú: mô hình 3D thì xoay, hình 2D thì lật trái/phải
export function faceDir(obj, dx, dz) {
  if (obj.userData.isArt) { const sx = dx * Math.cos(Math.PI / 4) - dz * Math.sin(Math.PI / 4); if (Math.abs(sx) > 1e-3) obj.userData.plane.scale.x = sx > 0 ? -1 : 1; }
  else obj.rotation.y = Math.atan2(dx, dz);
}
// Thân thể (mô hình hoặc hình 2D) cho nhân vật và thú
export function bodyOf(spriteName, model, fit) {
  const a = spriteName && art(spriteName, 0.5, 0.5);
  if (a) { a.userData.isArt = true; a.userData.plane = a.userData.plane; return a; }
  return make(model, fit);
}

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
  // hình vẽ tay đã có sẵn luống gỗ: ô trống = 'soil', đang lớn = 'sprout', chín = hình cây trồng
  const beds = hasSprite('soil');
  if (!beds) root.add(raisedBed());
  const plant = new THREE.Group(); plant.position.y = beds ? 0 : 0.12; root.add(plant);
  const star = sparkle(); star.visible = false; root.add(star);
  let key = '';
  return {
    root,
    refresh(t) {
      const st = cropStage(o, t), k = o.crop + st;
      if (k === key) return;
      key = k; plant.clear();
      star.visible = st === 3;
      if (beds) {
        const name = st < 0 ? 'soil' : st === 3 && hasSprite(o.crop) ? o.crop : 'sprout';
        plant.add(art(name, 1, 1, { shadow: false }));
        return;
      }
      if (st < 0) return;
      const c = CROPS[o.crop], model = c.stages[st === 3 ? 2 : st];
      const sp = st === 3 ? (hasSprite(o.crop) ? o.crop : null) : (hasSprite('sprout') ? 'sprout' : null);
      if (sp) { const k = st === 0 ? 0.65 : st === 1 ? 0.88 : 1; const a = art(sp, k, k, { scale: k, shadow: false }); plant.add(a); return; }
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
  const ripeArt = TREE_SPRITE[o.t] || null;
  if (ripeArt && hasSprite(ripeArt)) {
    if (T.lush) root.add(planterBase());
    const ripe = art(ripeArt), green = hasSprite('leafytree') && !isPalm ? art('leafytree') : null;
    [ripe, green].forEach(a => { if (a) { a.position.y = T.lush ? 0.15 : 0; root.add(a); } });
    const star = sparkle(); root.add(star);
    return {
      root,
      refresh(t) { const ready = t >= o.e; ripe.visible = ready || !green; if (green) green.visible = !ready; star.visible = ready; const f = Math.min(1, (t - o.s) / (o.e - o.s)); const k = ready ? 1 : 0.8 + 0.2 * f; ripe.scale.setScalar(k); if (green) green.scale.setScalar(k); },
      update(t) { if (star.visible) { star.position.set(0, 2.2 + Math.sin(t * 3 + o.id) * 0.08, 0); star.material.rotation = t; } },
    };
  }
  if (T.lush) { // cây tán tròn trên gò đất, kiểu Family Farm
    root.add(planterBase());
    const { group: m, fruits } = lushTree(T.lush); m.position.y = 0.15; root.add(m);
    const star = sparkle(); root.add(star);
    return {
      root,
      refresh(t) { const ready = t >= o.e; fruits.visible = ready; star.visible = ready; const f = Math.min(1, (t - o.s) / (o.e - o.s)); m.scale.setScalar(ready ? 1 : 0.8 + 0.2 * f); },
      update(t) { if (star.visible) { star.position.set(0, 2.35 + Math.sin(t * 3 + o.id) * 0.08, 0); star.material.rotation = t; } },
    };
  }
  const m = make(T.model, { h: isPalm ? 2.1 : 1.8, tint: T.tint }); root.add(m);
  const fruits = new THREE.Group(); root.add(fruits);
  // quả nằm trên mặt tán lá, quay về phía camera
  const bb = new THREE.Box3().setFromObject(m), sz = bb.getSize(new THREE.Vector3());
  const cy = isPalm ? bb.max.y - 0.35 : bb.min.y + sz.y * 0.66, rad = Math.max(sz.x, sz.z) / 2 * (isPalm ? 0.25 : 0.92);
  const spots = isPalm ? [[0.2, -0.05], [1.0, 0], [1.8, -0.05]] : [[0.25, 0.1], [0.85, -0.12], [1.35, 0.18], [0.6, 0.32], [1.1, -0.35]];
  spots.forEach(([a, dy]) => {
    const f = make(T.fruit, { size: isPalm ? 0.22 : 0.24 });
    f.position.set(Math.cos(a) * rad, cy + dy * sz.y * 0.5, Math.sin(a) * rad); fruits.add(f);
  });
  const star = sparkle(); root.add(star);
  return {
    root,
    refresh(t) { const ready = t >= o.e; fruits.visible = ready; star.visible = ready; const f = Math.min(1, (t - o.s) / (o.e - o.s)); m.scale.setScalar(ready ? 1 : 0.85 + 0.15 * f); },
    update(t) { if (star.visible) { star.position.set(0, 2.25 + Math.sin(t * 3 + o.id) * 0.08, 0); star.material.rotation = t; } },
  };
}

const PEN_GROUND = { coop: 0xe9d27f, cowpen: 0xa6dc72, pigpen: 0xb88a5c, beehive: 0xc6e89a };
const PEN_HUT = { cowpen: 'cowshed', pigpen: 'pigsty' };
function penView(o) {
  const P = PENS[o.t], root = new THREE.Group();
  const ground = box(2.9, 0.05, 2.9, PEN_GROUND[o.t]); ground.position.y = 0.0; root.add(ground);
  // hàng rào gỗ trắng bao quanh, cổng ở giữa cạnh trước
  root.add(fenceRing(2.92, 2.92));
  if (o.t === 'beehive') {
    const hive = art('beehive');
    if (hive) { hive.position.set(-0.85, 0, -0.85); root.add(hive); }
    else for (let i = 0; i < 2; i++) { const hv = make('survival/box-large', { size: 0.55, tint: 0xffd23f }); hv.position.set(-0.95 + i * 0.6, 0, -0.95); root.add(hv); }
    [[0.6, -0.7], [0.9, 0.3], [-0.8, 0.5], [0.1, 0.8], [-0.2, -0.3]].forEach(([x, z], i) => { const f = art(i % 2 ? 'flower_yel' : 'flower_red', 0.4, 0.4, { scale: 0.75, shadow: false }); if (f) { f.position.set(x, 0, z); root.add(f); } });
  } else if (o.t === 'coop' && hasSprite('coop')) {
    const hut = art('coop'); hut.position.set(-0.85, 0, -0.85); root.add(hut);
  } else if (o.t === 'coop') {
    const hut = house(1, 1, { roof: 'town/roof-point', roofH: 0.7, roofTint: 0xe8604c }); hut.scale.setScalar(0.75); hut.position.set(-0.85, 0, -0.85); root.add(hut);
  } else if (hasSprite(PEN_HUT[o.t])) { // chòi vẽ tay ở góc sau bên trái; chòi heo đã có máng trong hình
    const hut = art(PEN_HUT[o.t]); hut.position.set(-0.8, 0, -0.85); root.add(hut);
    if (o.t === 'cowpen') { const tr = art('trough', 1, 1, { scale: 0.8 }); if (tr) { tr.position.set(0.55, 0, -0.95); root.add(tr); } }
  } else {
    const tr = artOrModel('survival/box-large', { size: 0.8 }); tr.position.set(-0.9, 0, -0.9); root.add(tr);
    const bk = artOrModel('survival/bucket', { size: 0.3 }, 0.4, 0.4); bk.position.set(-0.3, 0, -1.05); root.add(bk);
  }
  const herd = [];
  // bò/heo không đứng lấp chòi ở góc sau bên trái: điểm rơi vào góc đó thì lật sang góc đối diện
  const clearOfHut = v => { if (PEN_HUT[o.t] && v.x + v.z < -0.5) { v.x = -v.x; v.z = -v.z; } return v; };
  const sync = () => {
    while (herd.length < o.animals.length) {
      const a = bodyOf(PEN_SPRITE[o.t], P.animal, { h: o.t === 'coop' ? 0.5 : o.t === 'beehive' ? 0.35 : o.t === 'cowpen' ? 0.85 : 0.6 });
      clearOfHut(a.position.set((Math.random() - 0.5) * 1.6, 0.03, (Math.random() - 0.5) * 1.4 + 0.2));
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
        if (ready) { play(a, 'dance'); if (u.isArt) animateArt(a, t, 'happy', i); return; }
        const d = u.goal.clone().sub(a.position); d.y = 0;
        if (d.length() > 0.05) {
          play(a, 'walk'); d.setLength(Math.min(d.length(), dt * 0.45)); a.position.add(d);
          faceDir(a, d.x, d.z);
          if (u.isArt) animateArt(a, t, 'walk', i);
        } else {
          play(a, busy ? 'eat' : 'idle'); if (u.isArt) animateArt(a, t, busy ? 'eat' : 'idle', i);
          u.wait -= dt;
          if (u.wait <= 0) { clearOfHut(u.goal.set((Math.random() - 0.5) * 1.8, 0.03, (Math.random() - 0.5) * 1.6 + 0.15)); u.wait = 2 + Math.random() * 4; }
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
  const alias = FAC_SPRITE[o.t]; // xưởng chưa có hình riêng thì mượn hình tạm
  const pic = alias ? art(alias.sprite, 2, 2, { scale: alias.scale }) : art(o.t, 2, 2);
  const { m, spin, axis } = pic ? { m: pic } : kkBuilding(o.t); root.add(m);
  if (!pic) FAC_PROPS[o.t]?.(root);
  let puff = null;
  if (SMOKE_AT[o.t] && !pic) { puff = smoke(); puff.position.set(...SMOKE_AT[o.t]); root.add(puff); }
  return {
    root,
    refresh(t) { if (puff) puff.visible = o.jobs.some(j => t < j.e && t >= j.s); },
    update(t, dt) {
      const working = o.jobs.some(j => t < j.e && t >= j.s);
      if (spin) spin.rotation[axis] += dt * (working ? 2.2 : 0.3);
      if (pic) { const b = working ? Math.abs(Math.sin(t * 4)) * 0.025 : 0; pic.userData.plane.scale.set(1 + b * 0.5, 1 - b, 1); }
      if (puff?.visible) puff.userData.tick(t);
    },
  };
}

// Nhà tiều phu (hình tạm: lều + đống gỗ). Túi có đồ thì chất thêm gỗ cho bé thấy
function helperView(o) {
  const root = new THREE.Group();
  root.add(yardPatch(1.9));
  const alias = HELPER_SPRITE[o.t];
  const pic = alias ? art(alias.sprite, 2, 2, { scale: alias.scale }) : art(o.t, 2, 2); if (pic) root.add(pic);
  const mk = (x, z, sc) => { const l = art('logs', 0.7, 0.7, { scale: sc }) || make('kk/decoration/props/resource_lumber.gltf', { size: 0.6 }); l.position.set(x, 0, z); root.add(l); return l; };
  mk(-0.6, 0.6, 0.8); // đống gỗ sẵn có
  const more = [mk(0.65, 0.65, 0.9), mk(0.35, 0.85, 0.7)]; more.forEach(m => m.visible = false);
  return {
    root,
    refresh() { const c = helperCount(o), cap = helperCap(o); more[0].visible = c > 0; more[1].visible = c >= cap / 2; },
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
  const pic = art('house', 3, 3);
  if (pic) { root.add(pic); return { root }; }
  const { m } = kkBuilding('house'); m.position.z = -0.2; root.add(m);
  const l1 = make('town/lantern', { h: 0.9 }); l1.position.set(-1.25, 0, 1.1); root.add(l1);
  const l2 = make('town/lantern', { h: 0.9 }); l2.position.set(1.25, 0, 1.1); root.add(l2);
  [[-0.8, 1.15, 'nature/flower_redA'], [0.8, 1.15, 'nature/flower_yellowA'], [-1.2, -0.9, 'nature/plant_bushLarge'], [1.25, -0.8, 'nature/flower_purpleA']].forEach(([x, z, k]) => prop(root, k, { size: 0.4 }, x, z));
  return { root };
}

function barnView() {
  const root = new THREE.Group();
  root.add(yardPatch(1.95));
  const pic = art('barn', 2, 2);
  if (pic) { root.add(pic); return { root }; }
  const { m } = kkBuilding('barn'); m.position.z = -0.1; root.add(m);
  prop(root, 'kk/decoration/props/sack.gltf', { size: 0.4 }, 0.72, 0.78);
  prop(root, 'kk/decoration/props/crate_A_big.gltf', { size: 0.38 }, -0.72, 0.78, 0.4);
  return { root };
}

function boardView() {
  const root = new THREE.Group();
  const pic = art('board', 2, 1);
  if (pic) { root.add(pic); return { root, cart: null }; }
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
  const pic = art('market', 2, 2);
  if (pic) { root.add(pic); return { root, refresh() {} }; }
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

function procDecor(kind, o = { x: 0, z: 0 }) {
  if (kind === 'brick') return brickTile(o.x, o.z);
  if (kind === 'flowerbed') return art('daisies') || flowerBed();
  if (kind === 'fence') {
    const f = art('fence', 1, 1, { shadow: false });
    if (f) { f.userData.plane.userData.flip = -1; return f; } // hình vẽ hàng rào chạy dọc trục z, mặc định quay theo trục x
    return picketFence(1);
  }
}
function decorView(o) {
  const D = DECOR[o.t], root = new THREE.Group();
  if (D.proc) { root.add(procDecor(D.proc, o)); return { root }; }
  const sp = DECOR_SPRITE[o.t] || o.t;
  if (!D.pet) { root.add(art(sp, D.w || 1, D.d || 1) || make(D.model, { ...D.fit, tint: D.tint, paint: D.paint })); return { root }; }
  const m = bodyOf(sp, D.model, D.fit); root.add(m);
  // thú cưng đi dạo quanh chỗ đặt
  m.userData.goal = new THREE.Vector3(); m.userData.wait = 1;
  return {
    root,
    update(t, dt) {
      const u = m.userData; u.mixer?.update(dt);
      const d = u.goal.clone().sub(m.position);
      if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * 0.5)); m.position.add(d); faceDir(m, d.x, d.z); if (u.isArt) animateArt(m, t, 'walk', o.id); }
      else { play(m, u.dance ? 'dance' : 'idle'); if (u.isArt) animateArt(m, t, u.dance ? 'happy' : 'idle', o.id); u.wait -= dt; if (u.wait <= 0) { u.goal.set((Math.random() - 0.5) * 2.4, 0, (Math.random() - 0.5) * 2.4); u.wait = 2 + Math.random() * 5; u.dance = Math.random() < 0.25; } }
    },
  };
}

// Thanh máu nhỏ trên vật cản: 2 tấm luôn quay về camera (nền tối + phần còn lại màu xanh)
const HP_W = 0.8;
let hpMats = null;
function hpBar(y) {
  hpMats ||= [0x3a2a1a, 0x7ee05a].map(c => new THREE.SpriteMaterial({ color: c, depthTest: false, transparent: true }));
  const g = new THREE.Group(), bg = new THREE.Sprite(hpMats[0]), fill = new THREE.Sprite(hpMats[1]);
  bg.scale.set(HP_W + 0.08, 0.16, 1); fill.scale.set(HP_W, 0.09, 1);
  bg.renderOrder = 6; fill.renderOrder = 7;
  g.add(bg, fill); g.position.y = y; g.userData.fill = fill; g.visible = false;
  return g;
}
// Phần xanh co về mép trái: neo bằng `center` (tính theo màn hình) chứ không dời theo trục x của thế giới
function hpFill(g, frac) {
  const f = Math.max(0.01, Math.min(1, frac)), fill = g.userData.fill;
  fill.scale.x = HP_W * f; fill.center.set(0.5 / f, 0.5);
  g.visible = frac < 1 && frac > 0;
}
// Đặt tỉ lệ máu còn lại (0..1) cho vật cản `oid`; ẩn khi còn nguyên
export function setHp(oid, frac) { const v = VIEWS.get(oid); if (v?.hp) hpFill(v.hp, frac); }
// Rung vật cản khi bị chặt
export function shake(oid) { const v = VIEWS.get(oid); if (v) v.shakeT = performance.now(); }

// Hình tạm cho loại mới (tới khi có hình vẽ riêng): [hình, màu tô, phóng to]
const OBSTACLE_ART = { bush: ['bush'], rock: ['rock'], tree: ['jungletree'], stump: ['stump'], logs: ['logs'],
  grass: ['grasstuft'], bamboo: ['bamboo'], claymound: ['claymound'], bigtree: ['bigtree'], bigrock: ['bigrock'] };
// Không có hình 2D thì dùng mô hình 3D của loại cũ gần nghĩa
const OBSTACLE_BASE = { grass: 'bush', bamboo: 'bush', claymound: 'rock', bigtree: 'tree', bigrock: 'rock' };
function obstacleView(o) {
  const root = new THREE.Group(), [an, tint, sc = 1] = OBSTACLE_ART[o.t] || [];
  let m = an && art(an, 1, 1, { scale: sc });
  if (m) { if (tint != null) m.userData.plane.material.color.set(tint); }
  else {
    const O = OBSTACLES[OBSTACLE_BASE[o.t] || o.t];
    if (O.proc === 'tree') { m = lushTree({ leaf: 0x3fa82a, leaf2: 0x58c23a, n: 0 }).group; m.scale.setScalar(0.85 * sc); }
    else if (O.model) { m = make(O.model, O.fit); m.scale.multiplyScalar(sc); }
    else m = roundBush(0x4fb82e, 0x66cc3e, o.id % 3 === 0);
    if (tint != null) m.traverse(c => { if (c.isMesh) { c.material = c.material.clone(); c.material.color.set(tint); } });
    m.rotation.y = (o.r || 0) * 1.57 + (o.id % 7) * 0.3;
  }
  root.add(m);
  const top = new THREE.Box3().setFromObject(m).max.y;
  const hp = hpBar(Math.min(3, Math.max(0.8, (isFinite(top) ? top : 1.2) + 0.15))); root.add(hp);
  const v = { root, hp, shakeT: 0,
    update() {
      const f = v.shakeT ? (performance.now() - v.shakeT) / 260 : 1;
      if (f < 1) { m.position.x = Math.sin(f * Math.PI * 6) * 0.07 * (1 - f); m.rotation.z = Math.sin(f * Math.PI * 6) * 0.05 * (1 - f); }
      else if (v.shakeT) { m.position.x = 0; m.rotation.z = 0; v.shakeT = 0; }
    } };
  const max = OBSTACLES[o.t]?.hp;
  if (o.hp != null && max) hpFill(hp, o.hp / max);
  return v;
}

// Rương rơi ra khi dọn xong vật cản: nằm trên ô vừa dọn, lấp lánh chờ bé chạm
function lootView(o) {
  const root = new THREE.Group(), m = art('chest') || make('pirate/chest', { size: 0.65 });
  root.add(m);
  const st = sparkle(); st.position.y = 1.0; root.add(st);
  return { root, update(t) { st.position.y = 1.0 + Math.sin(t * 3 + o.id) * 0.08; } };
}

// Công trường: giàn giáo gỗ tạm (nhỏ hơn công trình thật), thùng và đống gỗ bên cạnh; cao dần theo giai đoạn
function siteView(o) {
  const root = new THREE.Group(), [w, d] = footprint(o), s = Math.min(w, d);
  root.add(yardPatch(s * 0.95));
  // có hình giàn giáo vẽ tay: to dần theo giai đoạn, cỡ theo ô đất của công trình
  const pic = art('scaffold', w, d, { scale: (s / 2) * (0.85 + 0.1 * Math.min(o.site.stage || 0, 2)) });
  if (pic) { root.add(pic); return { root }; }
  const g = new THREE.Group(); root.add(g);
  const side = s * 0.5, h = 0.8 + 0.3 * (o.site.stage || 0), wood = 0xb07a45, dark = 0x8a5a2b;
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { // cột
    const p = box(0.08, h, 0.08, wood); p.position.set(x * side / 2, h / 2, z * side / 2); g.add(p);
  }
  for (let y = 0.35; y < h; y += 0.4) for (const [x, z, rot] of [[0, -1, 0], [0, 1, 0], [-1, 0, 1], [1, 0, 1]]) { // xà ngang
    const b = box(side + 0.08, 0.06, 0.06, dark); b.position.set(x * side / 2, y, z * side / 2); b.rotation.y = rot * Math.PI / 2; g.add(b);
  }
  const floor = box(side * 0.9, 0.05, side * 0.9, 0xd9a86a); floor.position.y = 0.36; g.add(floor);
  const brace = box(0.05, Math.hypot(side, h) * 0.95, 0.05, dark); // thanh chéo phía trước
  brace.position.set(0, h / 2, side / 2 + 0.03); brace.rotation.z = Math.atan2(side, h); g.add(brace);
  g.position.set(-s * 0.08, 0, -s * 0.08);
  const crate = art('crate', 0.6, 0.6, { scale: 0.75 }) || make('pirate/crate', { size: 0.5 });
  crate.position.set(s * 0.32, 0, s * 0.3); root.add(crate);
  const logs = art('logs', 0.7, 0.7, { scale: 0.8 }) || make('kk/decoration/props/resource_lumber.gltf', { size: 0.6 });
  logs.position.set(-s * 0.3, 0, s * 0.36); root.add(logs);
  return { root };
}

// Thuyền nhỏ sát bến (ván mới): sửa xong thì chạm để ra khơi
function boatView() {
  const root = new THREE.Group();
  root.add(art('boat', 2, 2) || make('pirate/boat-row-small', { size: 1.9 }));
  return { root };
}

// Đồ đổ nát (nhà, lò bánh, thuyền sau bão): chính công trình thật nhưng tối màu, nghiêng, ván gỗ vương vãi.
// Hình tạm tới khi có hình vẽ riêng (nhà đổ nát, lò bánh đổ nát, thuyền chìm)
const RUIN_TINT = new THREE.Color(0x8c7a68);
function ruinView(o) {
  const root = new THREE.Group(), [w, d] = footprint(o), s = Math.min(w, d);
  // có hình vẽ tay riêng của nhà đổ nát thì dùng luôn, không cần tô tối và làm nghiêng
  const ruinArt = o.k === 'house' ? 'ruin_house' : o.k === 'boat' ? 'ruin_boat' : o.k === 'fac' && o.t === 'bakery' ? 'ruin_bakery' : null;
  const pic = ruinArt && art(ruinArt, w, d);
  if (pic) { root.add(pic); return { root }; }
  const body = createView({ ...o, site: undefined }).root; root.add(body);
  body.traverse(m => {
    if (!m.isMesh || !m.material) return;
    const tint = x => { // chép vật liệu: mô hình 3D có thể dùng chung vật liệu với vật khác
      x = x.clone();
      if (x.color) { if (m.userData.sprite) x.color.copy(RUIN_TINT); else x.color.multiply(RUIN_TINT); }
      return x;
    };
    m.material = Array.isArray(m.material) ? m.material.map(tint) : tint(m.material);
  });
  const boat = o.k === 'boat';
  body.rotation.z = boat ? 0.28 : 0.09; body.rotation.x = boat ? 0.1 : -0.05; // bị bão quật nghiêng
  if (boat) body.position.y = -0.12; // lún xuống cát
  else body.scale.y = 0.88;
  // ván gãy nằm ngổn ngang phía trước
  for (let i = 0; i < (boat ? 3 : 5); i++) {
    const p = box(0.18 + 0.5 * ((i * 37) % 10) / 10, 0.05, 0.12, i % 2 ? 0xb07a45 : 0x8a5a2b);
    p.position.set((((i * 53) % 10) / 10 - 0.5) * s * 0.9, 0.04 + i * 0.01, s * 0.32 + ((i * 29) % 10) / 10 * 0.25);
    p.rotation.y = i * 1.3; p.rotation.z = (i % 3 - 1) * 0.15; root.add(p);
  }
  const logs = art('logs', 0.7, 0.7, { scale: 0.7 }) || make('kk/decoration/props/resource_lumber.gltf', { size: 0.55 });
  logs.position.set(-s * 0.38, 0, s * 0.38); root.add(logs);
  return { root };
}

// ---------- Cổng mở vùng: cầu tre, cầu gỗ, bậc đá ----------
// Đang sửa: ván gãy, cột trơ (mỗi giai đoạn thêm ván); xong: cầu có tay vịn / bậc đá đủ.
// Mũi tên cam nhấp nháy chỉ vào cổng khi vùng còn đóng và cổng đã tới được (không bị mây che).
let arrowMat = null;
function gateArrow() {
  arrowMat ||= new THREE.MeshStandardMaterial({ color: 0xff8a1e, emissive: 0xff6a00, emissiveIntensity: 0.5, roughness: 0.6, transparent: true });
  const g = new THREE.Group(); g.scale.setScalar(1.4);
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.5, 4), arrowMat); head.rotation.x = Math.PI; head.position.y = 0.25;
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.42, 0.16), arrowMat); tail.position.y = 0.68;
  g.add(head, tail);
  return g;
}
function gateView(o) {
  const root = new THREE.Group(), G = GATES[o.t], stairs = o.t === 'stairs_old';
  const n = o.site ? o.site.stage : 9; // số giai đoạn đã xong (9 = xây xong)
  const bamboo = o.t === 'bridge_w', plank = bamboo ? 0xc9b25a : 0xb07a45, post = bamboo ? 0x8fa83a : 0x7a4f26;
  const g = new THREE.Group(); root.add(g);
  // có hình vẽ tay thì dùng: bản hỏng khi đang sửa, bản lành khi đã sửa xong
  const pic = art(o.site ? o.t + '_broken' : o.t, 2, 1);
  if (pic) g.add(pic);
  else if (stairs) { // bậc đá lên Rừng già (phía -z)
    const steps = o.site ? 1 + n : 3;
    for (let i = 0; i < 3; i++) {
      const ok = i < steps, st = box(1.7 - i * 0.12, 0.22 * (i + 1), 0.32, ok ? 0xb9b4a8 : 0x9a958a);
      st.position.set(ok ? 0 : (i - 1) * 0.2, 0.11 * (i + 1), 0.3 - i * 0.3); if (!ok) { st.scale.set(0.45, 0.5, 0.9); st.rotation.y = 0.5 * i; }
      g.add(st);
    }
    if (!o.site) for (const x of [-0.8, 0.8]) { const l = box(0.12, 0.5, 0.12, 0x8c877c); l.position.set(x, 0.25, 0.32); g.add(l); }
  } else {
    // cầu nằm ngang 2 ô; cầu tre chạy theo trục x (sang Tây), cầu gỗ chạy theo trục z (lên Bắc)
    const along = o.t === 'bridge_w' ? 'x' : 'z', L = along === 'x' ? 2 : 1.3, Wd = along === 'x' ? 0.9 : 1.8;
    const k = 9, have = o.site ? Math.min(k, 3 + n * 3) : k; // ván đã lát
    for (let i = 0; i < k; i++) {
      if (i >= have && i % 2) continue; // còn thiếu ván: chừa lỗ hổng
      const p = box(along === 'x' ? L / k * 0.85 : Wd, 0.07, along === 'x' ? Wd : L / k * 0.85, i < have ? plank : 0x8a6a40);
      const u = -L / 2 + (i + 0.5) * L / k;
      p.position.set(along === 'x' ? u : 0, 0.16 + (i < have ? 0 : -0.06), along === 'x' ? 0 : u);
      if (i >= have) p.rotation.y = 0.25;
      g.add(p);
    }
    for (const s1 of [-1, 1]) for (const s2 of [-1, 1]) { // cột ở 4 góc
      const c = box(0.1, 0.55, 0.1, post);
      c.position.set(along === 'x' ? s1 * L / 2 : s2 * Wd / 2, 0.27, along === 'x' ? s2 * Wd / 2 : s1 * L / 2); g.add(c);
    }
    if (!o.site || n >= 1) for (const s2 of [-1, 1]) { // tay vịn (dây hoặc thanh gỗ)
      const r = box(along === 'x' ? L : 0.05, 0.05, along === 'x' ? 0.05 : L, o.site ? 0xc8a46a : post);
      r.position.set(along === 'x' ? 0 : s2 * Wd / 2, 0.5, along === 'x' ? s2 * Wd / 2 : 0); g.add(r);
    }
  }
  if (o.site) { // đống vật liệu chờ góp bên cạnh
    const logs = art('logs', 0.6, 0.6, { scale: 0.6 }) || make('kk/decoration/props/resource_lumber.gltf', { size: 0.45 });
    logs.position.set(stairs ? 0.75 : 0.6, 0, 0.45); root.add(logs);
  }
  const zone = G.zone, arrow = gateArrow(); root.add(arrow);
  const v = { root, update(t) {
    const show = !S.zones?.[zone] && canReach(o);
    arrow.visible = show; if (!show) return;
    arrow.position.y = 1.5 + Math.abs(Math.sin(t * 3)) * 0.35;
    arrowMat.opacity = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(t * 6));
    arrow.rotation.y = t * 1.5;
  } };
  return v;
}

// ---------- Mây phủ vùng còn đóng ----------
// Mỗi vùng một khối lưới gộp nhiều tấm mây mềm luôn quay về camera (camera không xoay nên quay sẵn một lần).
// Tấm xa vẽ trước để pha màu đúng; depthWrite tắt để mây không che lẫn nhau.
let cloudTex = null;
const CLOUDS = new Map(); // id vùng -> { mesh, mat, t0 }
function cloudTexture() {
  if (cloudTex) return cloudTex;
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  for (const [cx, cy, r] of [[64, 72, 44], [40, 76, 30], [88, 76, 30], [56, 52, 30], [78, 56, 26]]) {
    const gr = x.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.65, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  // bụng mây hơi xanh xám để các lớp mây nổi khối
  x.globalCompositeOperation = 'source-atop';
  const sh = x.createLinearGradient(0, 30, 0, 118);
  sh.addColorStop(0, 'rgba(160,185,215,0)'); sh.addColorStop(0.55, 'rgba(160,185,215,.18)'); sh.addColorStop(1, 'rgba(140,165,200,.6)');
  x.fillStyle = sh; x.fillRect(0, 0, 128, 128);
  cloudTex = new THREE.CanvasTexture(c); cloudTex.colorSpace = THREE.SRGBColorSpace;
  // Có ảnh mây vẽ tay thì vẽ đè lên tấm mây dựng sẵn
  const ci = new Image();
  ci.onload = () => { c.width = ci.width; c.height = ci.height; x.drawImage(ci, 0, 0); cloudTex.dispose(); cloudTex.needsUpdate = true; };
  ci.src = import.meta.env.BASE_URL + 'textures/cloud.webp';
  return cloudTex;
}
function cloudMesh(Z, i) {
  const [x0, z0, w, d] = Z.rect, rand = seeded(7919 + i * 131), puffs = [];
  const q = new THREE.Object3D(); q.lookAt(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(q.quaternion), up = new THREE.Vector3(0, 1, 0).applyQuaternion(q.quaternion);
  const toCam = new THREE.Vector3(0, 0, 1).applyQuaternion(q.quaternion);
  const step = 2.1;
  for (let layer = 0; layer < 2; layer++) for (let gx = x0 + 0.6; gx < x0 + w - 0.2; gx += step) for (let gz = z0 + 0.6; gz < z0 + d - 0.2; gz += step) {
    const px = gx + (rand() - 0.5) * 0.9 + layer * 0.7, pz = gz + (rand() - 0.5) * 0.9 + layer * 0.7;
    if (px > x0 + w - 0.4 || pz > z0 + d - 0.4) continue; // không tràn sang vùng đã mở
    const p = new THREE.Vector3(px - GRID / 2, 0.55 + layer * 0.75 + rand() * 0.35, pz - GRID / 2);
    puffs.push({ p, s: 3 + rand() * 1.3, c: layer ? 1 : 0.9 + rand() * 0.06, f: rand() < 0.5 });
  }
  puffs.sort((a, b) => a.p.dot(toCam) - b.p.dot(toCam)); // xa trước, gần sau
  const pos = [], uv = [], col = [], idx = [];
  puffs.forEach(({ p, s, c, f }, k) => {
    for (const [a, b] of [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]]) {
      const v = p.clone().addScaledVector(right, a * s).addScaledVector(up, b * s * 0.75);
      pos.push(v.x, v.y, v.z); uv.push(f ? 0.5 - a : a + 0.5, b + 0.5); col.push(c * 0.97, c * 0.98, c); // f: lật ngang cho đỡ lặp
    }
    idx.push(k * 4, k * 4 + 1, k * 4 + 2, k * 4, k * 4 + 2, k * 4 + 3);
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({ map: cloudTexture(), vertexColors: true, transparent: true, depthWrite: false, fog: false });
  const mesh = new THREE.Mesh(geo, mat); mesh.renderOrder = 4;
  return { mesh, mat, t0: 0 };
}
// Vật nằm dưới mây thì ẩn (đỡ vẽ, và không lòi ra khỏi mây)
const underCloud = o => typeof o.id === 'number' && !canReach(o);
export function buildClouds() {
  ZONES.forEach((Z, i) => {
    if (S.zones?.[Z.id] || CLOUDS.has(Z.id)) return;
    const c = cloudMesh(Z, i); W.farm.add(c.mesh); CLOUDS.set(Z.id, c);
  });
}
// Vùng vừa mở: hiện các vật bên dưới, mây bay lên và tan dần trong 1,5 giây
on('zone', id => {
  for (const o of S.objs) { const v = VIEWS.get(o.id); if (v && zoneAt(o.x, o.z) === id) v.root.visible = true; }
  const c = CLOUDS.get(id); if (c && !c.t0) c.t0 = performance.now();
});
export function updateClouds(t) {
  for (const [id, c] of CLOUDS) {
    if (!c.t0) { c.mesh.position.y = Math.sin(t * 0.8 + id.length) * 0.06; continue; }
    const f = (performance.now() - c.t0) / 1500;
    if (f >= 1) { W.farm.remove(c.mesh); c.mesh.geometry.dispose(); c.mat.dispose(); CLOUDS.delete(id); continue; }
    c.mat.opacity = 1 - f * f; c.mesh.position.y = f * 1.6;
  }
}

export function createView(o) {
  if (o.k === 'gate') return gateView(o);
  if (o.site?.ruin) return ruinView(o);
  if (o.site) return siteView(o);
  switch (o.k) {
    case 'field': return fieldView(o);
    case 'tree': return treeView(o);
    case 'pen': return penView(o);
    case 'fac': return facView(o);
    case 'helper': return helperView(o);
    case 'house': return mainHouseView(o);
    case 'barn': return barnView(o);
    case 'board': return boardView(o);
    case 'decor': return decorView(o);
    case 'obstacle': return obstacleView(o);
    case 'loot': return lootView(o);
    case 'market': return marketView(o);
    case 'boat': return boatView(o);
  }
  return { root: new THREE.Group() };
}

export function place(v, o) {
  const [w, d] = footprint(o);
  v.root.position.copy(cellToWorld(o.x, o.z, w, d));
  if (o.k !== 'decor') return;
  // hình 2D luôn quay về camera: xoay = lật trái/phải; mô hình 3D thì xoay thật
  let isArt = false;
  v.root.traverse(c => { if (c.userData.sprite) { isArt = true; c.scale.x = Math.abs(c.scale.x) * ((o.r || 0) % 2 ? -1 : 1) * (c.userData.flip || 1); } });
  v.root.rotation.y = isArt ? 0 : -(o.r || 0) * Math.PI / 2;
}

export function addView(o) {
  const v = createView(o);
  v.root.userData.oid = o.id;
  place(v, o);
  if (underCloud(o)) v.root.visible = false;
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
const PIER_LIFT = -0.55; // chân cột cầu chìm dưới mặt nước
export function buildSpecials() {
  // Bến gỗ nhô ra biển ở mép trước đảo
  const dock = new THREE.Group();
  const p = cellToWorld(17 + OFF, GRID - 1);
  if (hasSprite('pier')) { // cầu gỗ vẽ tay chạy từ bờ ra biển (dọc trục z)
    const pr = spriteObject('pier', { width: 5.1, w: 1.6, d: 5.6, lift: PIER_LIFT, shadow: false }); pr.position.z = 3.2; dock.add(pr);
  } else for (let i = 0; i < 3; i++) { const d = make('pirate/structure-platform-dock', { size: 1.6 }); d.position.set(0, -0.62, 1.2 + i * 1.6); dock.add(d); }
  const bar = artOrModel('pirate/barrel', { size: 0.4 }, 0.5, 0.5); bar.position.set(0.5, 0.15, 1.5); dock.add(bar);
  const crt = artOrModel('pirate/crate', { size: 0.5 }, 0.5, 0.5); crt.position.set(-0.5, 0.15, 2.4); dock.add(crt);
  dock.position.set(p.x, 0, p.z);
  dock.userData.oid = 'ship';
  W.farm.add(dock); W.pickables.push(dock);

  const shipArt = art('ship', 1, 1, { shadow: false });
  const ship = shipArt || make('pirate/ship-small', { h: 3.2 });
  if (!shipArt) ship.rotation.y = Math.PI;
  const home = new THREE.Vector3(p.x + 2.1, -0.5, p.z + (shipArt ? 5.0 : 4.0)); // hình 2D: lùi ra biển cho khỏi đè bãi cát
  ship.position.copy(home);
  ship.userData.oid = 'ship';
  W.farm.add(ship); W.pickables.push(ship);
  SPECIAL.ship = ship; SPECIAL.shipHome = home; SPECIAL.dock = dock;

  // Cầu câu cá ở mép phải đảo
  const pier = new THREE.Group(), pp = cellToWorld(GRID - 1, 9 + OFF);
  if (hasSprite('pier')) { // cùng hình cầu gỗ, lật ngang để chạy dọc trục x
    const pr = spriteObject('pier', { width: 4.2, w: 4.35, d: 1.5, lift: PIER_LIFT, shadow: false }); pr.userData.plane.scale.x = -1; pier.add(pr);
  } else for (let i = 0; i < 3; i++) { const d = make('pirate/structure-platform-dock-small', { size: 1.5 }); d.rotation.y = Math.PI / 2; d.position.set(-1.45 + i * 1.45, -0.62, 0); pier.add(d); }
  const pb = artOrModel('pirate/barrel', { size: 0.4 }, 0.5, 0.5); pb.position.set(-1.3, 0.15, 0.45); if (!pb.userData.plane) pier.add(pb); // cầu vẽ tay đã đủ cột, dây
  const bucket = artOrModel('survival/bucket', { size: 0.3 }, 0.4, 0.4); bucket.position.set(0.9, 0.15, -0.4); pier.add(bucket);
  const rod = artOrModel('pirate/tool-paddle', { h: 1.2 }); rod.position.set(1.6, 0.15, 0.3); if (!rod.userData.plane) rod.rotation.z = -0.6; pier.add(rod);
  pier.position.set(pp.x + 3.6, 0, pp.z); pier.userData.oid = 'pier';
  W.farm.add(pier); W.pickables.push(pier); SPECIAL.pier = pier;

  // Maisie đi dạo quanh nhà
  const maisie = bodyOf('maisie', PEOPLE[0].model, { h: 1.15 }); if (!maisie.userData.isArt) dressUp(maisie, 'maisie');
  maisie.userData.oid = 'maisie';
  const mp = cellToWorld(12 + OFF, 8 + OFF); maisie.position.copy(mp);
  maisie.userData.goal = mp.clone(); maisie.userData.wait = 2;
  W.farm.add(maisie); W.pickables.push(maisie);
  SPECIAL.maisie = maisie;
}

// Maisie đi tới ô kề gần nhất còn trống của ô (x, z) rồi gọi onArrive(). Gọi mới thì việc cũ chưa tới bị hủy.
// Trong lúc đi làm việc thì không đi dạo; tới nơi nghỉ một lát rồi đi dạo tiếp.
export function walkTo(x, z, onArrive) {
  const m = SPECIAL.maisie; if (!m) { onArrive?.(); return; }
  const u = m.userData, occ = occupancy(), here = m.position;
  let best = null, bd = 1e9;
  for (const [dx, dz] of [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const cx = x + dx, cz = z + dz;
    if (cx < 0 || cz < 0 || cx >= GRID || cz >= GRID || occ.has(cx + ',' + cz) || !isOpenCell(cx, cz)) continue;
    const p = cellToWorld(cx, cz), d = p.distanceTo(here) + (dx && dz ? 0.3 : 0); // ưu tiên đứng thẳng hàng
    if (d < bd) { bd = d; best = p; }
  }
  const c = cellToWorld(x, z);
  if (!best) { // bị vây kín: đứng sát mép ô, phía gần Maisie
    const dir = here.clone().sub(c); dir.y = 0;
    if (dir.length() < 1e-3) dir.set(0, 0, 1);
    best = c.clone().add(dir.setLength(0.75));
  }
  u.job = { goal: best, face: c, onArrive };
}

// Maisie vung tay chặt về phía ô (x, z) và đứng yên thêm một lát (không đi dạo giữa hai nhát)
export function chopPose(x, z) {
  const m = SPECIAL.maisie; if (!m) return;
  const c = cellToWorld(x, z), u = m.userData;
  faceDir(m, c.x - m.position.x, c.z - m.position.z);
  u.wave = 0.3; u.wait = Math.max(u.wait || 0, 2.5);
}

export function updateSpecials(t, dt) {
  const sh = SPECIAL.ship, away = S.ship.st === 'away';
  const target = SPECIAL.shipHome.clone(); if (away) target.z += 30;
  sh.position.lerp(target, Math.min(1, dt * 0.6));
  sh.position.y = -0.5 + Math.sin(t * 1.4) * 0.05;
  (sh.userData.plane || sh).rotation.z = Math.sin(t * 1.1) * 0.03;
  sh.visible = sh.position.z < SPECIAL.shipHome.z + 25;

  const m = SPECIAL.maisie, u = m.userData; u.mixer?.update(dt);
  const job = u.job;
  if (job) u.goal.copy(job.goal);
  const d = u.goal.clone().sub(m.position); d.y = 0;
  if (d.length() > 0.05) { play(m, 'walk'); d.setLength(Math.min(d.length(), dt * (job ? 3 : 0.9))); m.position.add(d); faceDir(m, d.x, d.z); if (u.isArt) animateArt(m, t, 'walk'); }
  else if (job) { // tới nơi làm việc
    u.job = null; u.wait = 2.5;
    faceDir(m, job.face.x - m.position.x, job.face.z - m.position.z);
    job.onArrive?.();
  }
  else {
    if (u.isArt) animateArt(m, t, u.wave > 0 ? 'happy' : 'idle');
    play(m, u.wave > 0 ? 'emote-yes' : 'idle'); u.wait -= dt; u.wave = (u.wave || 0) - dt;
    if (u.wait <= 0) {
      // đi tới một ô trống gần trung tâm
      for (let k = 0; k < 20; k++) {
        const x = 7 + OFF + rnd(13), z = 3 + OFF + rnd(14);
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
  for (const k of Object.keys(HELPERS)) list.push(['helper:' + k, { obj: () => view({ k: 'helper', t: k, lvl: 0, bag: {} }), rotY: 0.2 }]);
  for (const k of Object.keys(PENS)) list.push(['pen:' + k, { obj: () => view({ k: 'pen', t: k, animals: [{ s: 0, e: 0 }, { s: 0, e: 0 }] }), rotY: 0.2 }]);
  list.push(['b:field', { obj: () => view({ k: 'field', crop: 'wheat', s: 0, e: 1 }), rotY: 0.2 }]);
  for (const k of Object.keys(TREES)) list.push(['tree:' + k, { obj: () => { const r = view({ k: 'tree', t: k, s: 0, e: 1 }); r.children.filter(c => c.isSprite).forEach(c => c.visible = false); return r; }, rotY: 0.3 }]);
  for (const [k, D] of Object.entries(DECOR)) if (D.proc) list.push(['decor:' + k, { obj: () => procDecor(D.proc), rotY: 0.3 }]);
  PEOPLE.forEach(p => list.push(['face:' + p.id, { model: p.model, rotY: 0.25, face: true, extra: m => dressUp(m, p.id) }]));
  return list;
}

// ---------- Mũ cho nhân vật (gắn vào xương đầu) ----------
const HATS = {
  maisie: { kind: 'straw', band: 0xff7ab8 },
  tom: { kind: 'straw', band: 0x8b5a2b },
  lily: { kind: 'sun', band: 0xff9ad0, color: 0xfff1c9 },
  ben: { kind: 'cap', color: 0x3a8fe0 },
  rosa: { kind: 'sun', band: 0x9a6cff, color: 0xf3e2b0 },
  sam: { kind: 'captain', color: 0xffffff },
};
export function dressUp(model, who) {
  const H = HATS[who]; if (!H) return;
  const head = model.getObjectByName('head'); if (!head) return;
  const g = new THREE.Group();
  const m = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 });
  const cyl = (rt, rb, h, c, y) => { const x = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, 20), m(c)); x.position.y = y; x.castShadow = true; g.add(x); return x; };
  if (H.kind === 'straw') { cyl(0.3, 0.3, 0.025, 0xeac45e, 0); cyl(0.15, 0.17, 0.13, 0xeac45e, 0.07); cyl(0.172, 0.172, 0.035, H.band, 0.025); }
  else if (H.kind === 'sun') { cyl(0.34, 0.34, 0.02, H.color, 0); cyl(0.15, 0.17, 0.11, H.color, 0.06); cyl(0.172, 0.172, 0.03, H.band, 0.02);
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), m(0xff5d8f)); f.position.set(0.15, 0.05, 0.06); g.add(f); }
  else if (H.kind === 'cap') { const dome = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), m(H.color)); g.add(dome);
    const visor = cyl(0.16, 0.16, 0.02, H.color, 0); visor.scale.set(1, 1, 0.6); visor.position.z = 0.13; }
  else if (H.kind === 'captain') { cyl(0.17, 0.16, 0.1, H.color, 0.05); cyl(0.172, 0.172, 0.03, 0x1f3f7a, 0.015); const v = cyl(0.12, 0.12, 0.015, 0x1f3f7a, 0); v.scale.z = 0.7; v.position.z = 0.12; }
  g.position.set(0, 0.3, 0.0);
  head.add(g);
}

// ---------- Đồ nhặt trên bãi biển (sao biển, vỏ sò, cua nhỏ) ----------
// Không nằm trong S.objs (ở ngoài lưới ô, trên dải cát): S.beach = [{ id, t, spot }], spot = số thứ tự trong beachSpots()
const BEACH_VIEWS = new Map(); // id món -> { root, body, kind, ph, t0 }
const SAND_Y = -0.12; // mặt bãi cát (world.js: slab cát đỉnh ở -0.12)
let shellMat = null, starGeo = null, hitGeo = null;
const hitMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }); // vùng chạm vô hình, to cho ngón tay bé
function starfish() {
  if (!starGeo) {
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.15 : 0.38, a = i * Math.PI / 5; s[i ? 'lineTo' : 'moveTo'](Math.sin(a) * r, Math.cos(a) * r); }
    s.closePath();
    starGeo = new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2 });
    starGeo.rotateX(-Math.PI / 2);
  }
  const g = new THREE.Group(), m = new THREE.Mesh(starGeo, mat(0xff8a4c, { roughness: 0.6 }));
  m.castShadow = true; m.rotation.x = 0.35; // nghiêng về phía camera cho dễ thấy hình ngôi sao
  m.position.y = 0.06; g.add(m);
  return g;
}
function shell() {
  if (!shellMat) { // hình vỏ sò của biểu tượng vật phẩm, dùng chung cho mọi vỏ sò
    const tex = new THREE.TextureLoader().load(import.meta.env.BASE_URL + 'items/shell.webp'); tex.colorSpace = THREE.SRGBColorSpace;
    shellMat = new THREE.SpriteMaterial({ map: tex, transparent: true, alphaTest: 0.3 });
  }
  const sp = new THREE.Sprite(shellMat);
  sp.center.set(0.5, 0); sp.scale.set(0.8, 0.8, 1);
  const g = new THREE.Group(); g.add(sp); return g;
}
function beachBody(kind) {
  if (kind === 'crab') { const c = bodyOf('crab', 'pets/animal-crab', { h: 0.42 }); if (c.userData.isArt) c.scale.setScalar(1.4); return c; }
  // sao biển, vỏ sò vẽ tay (vỏ sò bãi biển tên 'beachshell' để khỏi trùng biểu tượng vật phẩm 'shell')
  const pic = art(kind === 'shell' ? 'beachshell' : 'starfish', 1, 1, { shadow: false });
  if (pic) return pic;
  return kind === 'shell' ? shell() : starfish();
}
export function beachPos(spot) { const p = cellToWorld(spot.x, spot.z); p.y = SAND_Y; return p; }
// Thêm view cho món mới, bỏ view của món đã nhặt
export function syncBeach(spots) {
  const list = S.beach || [], ids = new Set(list.map(b => b.id));
  for (const [id, v] of BEACH_VIEWS) if (!ids.has(id) && !v.leaving) { W.farm.remove(v.root); W.pickables.splice(W.pickables.indexOf(v.root), 1); BEACH_VIEWS.delete(id); }
  for (const b of list) {
    if (BEACH_VIEWS.has(b.id) || !spots[b.spot]) continue;
    const root = new THREE.Group(), body = beachBody(b.t);
    root.add(body);
    const hit = new THREE.Mesh(hitGeo ||= new THREE.SphereGeometry(0.6, 8, 6), hitMat); hit.position.y = 0.3; root.add(hit);
    const st = sparkle(); st.position.y = 0.9; root.add(st);
    root.position.copy(beachPos(spots[b.spot]));
    root.userData.oid = 'beach:' + b.id;
    root.scale.setScalar(0.01);
    W.farm.add(root); W.pickables.push(root);
    BEACH_VIEWS.set(b.id, { root, body, st, kind: b.t, ph: b.id * 1.7, t0: performance.now() });
  }
}
export const beachRoot = id => BEACH_VIEWS.get(id)?.root;
// Nhặt: món nảy lên rồi thu nhỏ biến mất
export function pickBeachView(id) {
  const v = BEACH_VIEWS.get(id); if (!v) return;
  v.leaving = performance.now();
  W.pickables.splice(W.pickables.indexOf(v.root), 1);
}
export function updateBeach(t) {
  const n = performance.now();
  for (const [id, v] of BEACH_VIEWS) {
    if (v.leaving) {
      const f = (n - v.leaving) / 380;
      if (f >= 1) { W.farm.remove(v.root); BEACH_VIEWS.delete(id); continue; }
      v.root.scale.setScalar(1 + f * 0.4 - f * f * 1.35); v.body.position.y = Math.sin(f * Math.PI) * 0.6;
      continue;
    }
    const g = Math.min(1, (n - v.t0) / 450); // dạt vào: lớn dần, nảy nhẹ
    v.root.scale.setScalar(g < 1 ? g * (1 + Math.sin(g * Math.PI) * 0.25) : 1);
    v.st.position.y = 0.9 + Math.sin(t * 3 + v.ph) * 0.08;
    if (v.kind === 'crab') { v.body.position.x = Math.sin(t * 1.3 + v.ph) * 0.18; if (v.body.userData.isArt) animateArt(v.body, t, 'walk', v.ph); }
    else if (v.kind === 'starfish' && !v.body.userData.plane) v.body.rotation.y = Math.sin(t * 0.8 + v.ph) * 0.25;
    else v.body.position.y = Math.abs(Math.sin(t * 2 + v.ph)) * 0.05;
  }
}
