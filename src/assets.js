import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { ITEMS, CROPS, TREES, PENS, DECOR, OBSTACLES, PEOPLE } from './data.js';

const BASE = import.meta.env.BASE_URL + 'models/';
const cache = new Map(); // key -> gltf

// Các mô hình dùng để ghép nhà, chuồng, bến tàu
const PARTS = [
  'town/wall-wood', 'town/wall-wood-door', 'town/wall-wood-window-shutters', 'town/wall-wood-window-glass',
  'town/wall', 'town/wall-door', 'town/wall-window-shutters', 'town/roof-gable', 'town/roof-point', 'town/roof-high',
  'town/chimney', 'town/windmill', 'town/watermill', 'town/stall-red', 'town/stall-green', 'town/cart', 'town/banner-red',
  'town/banner-green', 'town/lantern', 'town/planks', 'town/hedge',
  'nature/fence_simple', 'nature/fence_gate', 'nature/crops_dirtDoubleRow', 'nature/grass', 'nature/grass_large',
  'nature/tree_palmTall', 'nature/tree_palmShort', 'nature/rock_largeB', 'nature/rock_smallA', 'nature/sign',
  'pirate/structure-platform-dock', 'pirate/structure-platform-dock-small', 'pirate/ship-small', 'pirate/crate',
  'pirate/barrel', 'pirate/palm-straight', 'pirate/rocks-sand-a', 'pirate/flag',
  'survival/campfire-pit', 'survival/workbench', 'survival/barrel', 'survival/box-large', 'survival/bucket',
  'survival/resource-wood', 'survival/tool-axe',
];

export function allModelKeys() {
  const s = new Set(PARTS);
  Object.values(ITEMS).forEach(i => s.add(i.icon));
  Object.values(CROPS).forEach(c => { c.stages.forEach(m => s.add(m)); if (c.deco) s.add(c.deco); });
  Object.values(TREES).forEach(t => { s.add(t.model); s.add(t.fruit); });
  Object.values(PENS).forEach(p => s.add(p.animal));
  Object.values(DECOR).forEach(d => s.add(d.model));
  Object.values(OBSTACLES).forEach(o => s.add(o.model));
  PEOPLE.forEach(p => s.add(p.model));
  return [...s];
}

export async function loadAll(onProgress) {
  const keys = allModelKeys();
  const loader = new GLTFLoader();
  let done = 0;
  await Promise.all(keys.map(k => new Promise(res => {
    loader.load(BASE + k + '.glb', g => {
      g.scene.traverse(o => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        // nhiều mô hình không ghi độ kim loại -> mặc định là kim loại và bị tối; chuyển về vật liệu thường
        (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.metalness = 0; m.roughness = Math.max(m.roughness ?? 1, 0.75); });
      });
      cache.set(k, g); done++; onProgress?.(done / keys.length); res();
    }, undefined, err => { console.warn('Không tải được', k, err); done++; onProgress?.(done / keys.length); res(); });
  })));
}

// Tạo một bản sao mô hình. Trả về Group đã căn giữa, đặt đáy chạm y=0.
// opts.size: thu phóng để cạnh lớn nhất theo mặt đất bằng size; opts.h: theo chiều cao; opts.s: hệ số cố định
export function make(key, opts = {}) {
  const g = cache.get(key);
  const holder = new THREE.Group();
  if (!g) { // dự phòng khi thiếu mô hình
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xff00ff }));
    m.position.y = 0.25; holder.add(m); return holder;
  }
  const skinned = g.animations.length > 0;
  const obj = skinned ? SkeletonUtils.clone(g.scene) : g.scene.clone(true);
  if (opts.tint !== undefined) tint(obj, opts.tint);
  if (opts.paint !== undefined) paint(obj, opts.paint);
  holder.add(obj);
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  let s = 1;
  if (opts.size) s = opts.size / Math.max(size.x, size.z, 1e-3);
  else if (opts.h) s = opts.h / Math.max(size.y, 1e-3);
  else if (opts.s) s = opts.s;
  obj.scale.multiplyScalar(s);
  const c = box.getCenter(new THREE.Vector3());
  if (opts.center !== false) { obj.position.x -= c.x * s; obj.position.z -= c.z * s; }
  obj.position.y -= box.min.y * s;
  if (skinned) {
    holder.userData.mixer = new THREE.AnimationMixer(obj);
    holder.userData.clips = Object.fromEntries(g.animations.map(a => [a.name, a]));
  }
  return holder;
}

export function play(holder, name, fade = 0.2) {
  const { mixer, clips } = holder.userData;
  if (!mixer || !clips[name] || holder.userData.cur === name) return;
  const next = mixer.clipAction(clips[name]);
  const prev = holder.userData.curAction;
  next.reset().play();
  if (prev) prev.crossFadeTo(next, fade, false);
  holder.userData.cur = name; holder.userData.curAction = next;
}

// Sơn phẳng một màu (bỏ hoa văn) – dùng cho mái nhà
export function paint(obj, color) {
  obj.traverse(o => { if (o.isMesh) o.material = new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, flatShading: true }); });
}

export function tint(obj, color) {
  const c = new THREE.Color(color);
  obj.traverse(o => {
    if (o.isMesh) {
      o.material = Array.isArray(o.material) ? o.material.map(m => m.clone()) : o.material.clone();
      (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.color.multiply(c));
    }
  });
}

// ---------- Biểu tượng vật phẩm (vẽ mô hình 3D thành ảnh) ----------
export const ICONS = {};
export async function renderIcons(list) {
  const SIZE = 160;
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(SIZE, SIZE); r.setPixelRatio(1);
  r.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 2.2));
  const dl = new THREE.DirectionalLight(0xffffff, 2.2); dl.position.set(2, 4, 3); scene.add(dl);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
  for (const [id, spec] of list) {
    const m = spec.obj ? spec.obj() : make(spec.model, { tint: spec.tint });
    if (spec.extra) spec.extra(m);
    // nhân vật/thú: đứng tư thế "idle" thay vì dang tay
    const { mixer, clips } = m.userData;
    if (mixer && clips?.idle) { mixer.clipAction(clips.idle).play(); mixer.update(0.4); }
    m.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(m, true);
    const sph = box.getBoundingSphere(new THREE.Sphere());
    if (spec.face) { // chỉ lấy phần đầu
      const h = box.max.y - box.min.y;
      sph.center.y = box.max.y - h * 0.36; sph.radius = h * 0.36;
    }
    m.rotation.y = spec.rotY ?? -0.5;
    scene.add(m);
    const dist = sph.radius / Math.sin(THREE.MathUtils.degToRad(15)) * 1.02;
    const dir = new THREE.Vector3(0, 0.75, 1).normalize();
    cam.position.copy(sph.center).addScaledVector(dir, dist);
    cam.lookAt(sph.center);
    r.render(scene, cam);
    ICONS[id] = r.domElement.toDataURL('image/png');
    scene.remove(m);
  }
  r.dispose(); r.forceContextLoss?.();
}

export function iconList() {
  const list = Object.entries(ITEMS).map(([k, it]) => [k, { model: it.icon, tint: it.tint }]);
  Object.entries(TREES).forEach(([k, t]) => list.push(['tree:' + k, { model: t.model }]));
  Object.entries(PENS).forEach(([k, p]) => list.push(['animal:' + k, { model: p.animal, rotY: 0.4 }]));
  Object.entries(DECOR).forEach(([k, d]) => list.push(['decor:' + k, { model: d.model, rotY: d.pet ? 0.4 : -0.5 }]));
  PEOPLE.forEach(p => list.push(['face:' + p.id, { model: p.model, rotY: 0.25, face: true }]));
  list.push(['b:windmill', { model: 'town/windmill', rotY: -0.8 }]);
  list.push(['b:stall-red', { model: 'town/stall-red' }]);
  list.push(['b:stall-green', { model: 'town/stall-green' }]);
  list.push(['b:watermill', { model: 'town/watermill', rotY: -0.9 }]);
  list.push(['b:campfire', { model: 'survival/campfire-pit' }]);
  list.push(['b:field', { model: 'nature/crops_dirtDoubleRow' }]);
  list.push(['b:fence', { model: 'nature/fence_gate' }]);
  list.push(['b:ship', { model: 'pirate/ship-small', rotY: -0.9 }]);
  list.push(['b:crate', { model: 'pirate/crate' }]);
  list.push(['b:axe', { model: 'survival/tool-axe' }]);
  return list;
}
