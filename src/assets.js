import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { ITEMS, TREES, PENS, DECOR, PEOPLE, COLLECTIONS, PEN_SPRITE, TREE_SPRITE, DECOR_SPRITE } from './data.js';
import { hasSprite, spriteUrl } from './sprites.js';

const BASE = import.meta.env.BASE_URL + 'models/';
const cache = new Map(); // key -> gltf

// Hầu hết vật thể đã có hình 2D vẽ tay (public/sprites); chỉ tải những mô hình 3D còn hiện trong game.
// Danh sách chi tiết + nơi xuất hiện: art-in/con-lai-3d.txt. Vẽ tay xong món nào thì bỏ khỏi đây và xoá file .glb.
const STILL_3D = [
  'nature/flower_yellowB', 'nature/flower_redB', // hoa trồng trong vườn ong (entities.js penView)
];

// Bộ Nature của Kenney có lá màu xanh ngọc; đổi sang xanh lá tươi cho giống game nông trại
const hsl = {};
function greener(m) {
  m.color.getHSL(hsl);
  if (hsl.h > 0.36 && hsl.h < 0.56 && hsl.s > 0.15) m.color.setHSL(0.27 + (hsl.h - 0.46) * 0.3, Math.min(1, hsl.s * 1.15), hsl.l * 0.92);
}

export async function loadAll(onProgress) {
  const keys = STILL_3D;
  const gl = new GLTFLoader();
  let done = 0;
  const finish = (k, g) => {
    g.scene.traverse(o => {
      if (!o.isMesh) return;
      o.castShadow = true; o.receiveShadow = true;
      if (o.isSkinnedMesh) o.frustumCulled = false;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach(m => {
        // nhiều mô hình không ghi độ kim loại -> mặc định là kim loại và bị tối; chuyển về vật liệu thường
        m.metalness = 0; m.roughness = Math.max(m.roughness ?? 1, 0.75); m.transparent = false; m.opacity = 1;
        if (k.startsWith('nature/')) greener(m);
      });
      o.material = Array.isArray(o.material) ? mats : mats[0];
    });
    // tên hoạt ảnh "Armature|Walk" -> "walk"
    g.animations.forEach(a => { a.name = a.name.split('|').pop().toLowerCase(); });
    cache.set(k, g); done++; onProgress?.(done / keys.length);
  };
  await Promise.all(keys.map(k => new Promise(res => {
    const fail = err => { console.warn('Không tải được', k, err); done++; onProgress?.(done / keys.length); res(); };
    gl.load(BASE + k + (/\.gltf$/.test(k) ? '' : '.glb'), g => { finish(k, g); res(); }, undefined, fail);
  })));
}

const warned = new Set();
// Tạo một bản sao mô hình. Trả về Group đã căn giữa, đặt đáy chạm y=0.
// opts.size: thu phóng để cạnh lớn nhất theo mặt đất bằng size; opts.h: theo chiều cao; opts.s: hệ số cố định
export function make(key, opts = {}) {
  const g = cache.get(key);
  const holder = new THREE.Group();
  if (!g) { // dự phòng khi thiếu mô hình (chưa có hình vẽ tay mà mô hình không nằm trong STILL_3D)
    if (!warned.has(key)) { warned.add(key); console.warn('Thiếu mô hình 3D', key); }
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

const ALIAS = { dance: ['dance', 'jump', 'idle'], eat: ['eat', 'idle'], walk: ['walk', 'walkslow', 'run', 'idle'],
  'emote-yes': ['emote-yes', 'jump', 'idle'], 'interact-right': ['interact-right', 'idle'] };
export function play(holder, want, fade = 0.2) {
  const { mixer, clips } = holder.userData;
  if (!mixer) return;
  const name = (ALIAS[want] || [want, 'idle']).find(n => clips[n]);
  if (!name || holder.userData.cur === name) return;
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
// Biểu tượng nút/menu -> hình vẽ tay
const B_ICON = { windmill: 'feedmill', 'stall-red': 'market', 'stall-green': 'juicebar', watermill: 'dairy', campfire: 'campfire',
  field: 'soil', fence: 'fence', ship: 'ship', crate: 'crate', axe: 'axe' };
// Biểu tượng vẽ tay (nếu có) thay cho ảnh chụp mô hình 3D
const ITEM_DIR = import.meta.env.BASE_URL + 'items/';
const sp = name => (name && hasSprite(name) ? spriteUrl(name) : null);
function paintedIcon(id) {
  if (ITEMS[id]) return ITEM_DIR + id + '.webp';
  const [kind, key] = id.split(':');
  switch (kind) {
    case 'ev': return key === 'token' ? ITEM_DIR + 'shell.webp' : null;
    case 'face': return PEOPLE.some(p => p.id === key) && hasSprite(key) ? ITEM_DIR + 'face-' + key + '.webp' : null;
    case 'decor': return key === 'path' ? import.meta.env.BASE_URL + 'textures/brick.webp' : sp(DECOR_SPRITE[key] || key);
    case 'tree': return sp(TREE_SPRITE[key]);
    case 'animal': return sp(PEN_SPRITE[key]);
    case 'fac': return sp(key);
    case 'pen': return sp(key === 'coop' || key === 'beehive' ? key : PEN_SPRITE[key]);
    case 'col': return COLLECTIONS.some(c => c.pieces.some(p => p[0] === key)) ? ITEM_DIR + key + '.webp' : null;
    case 'b': return sp(B_ICON[key]);
  }
  return null;
}
// Xu, kim cương, năng lượng, sao kinh nghiệm trên thanh trạng thái
function paintedHudIcons() {
  const u = n => `url(${ITEM_DIR}${n}.webp)`;
  const st = document.createElement('style');
  st.textContent = `.ico.coin{background-image:${u('coin')}}.ico.gem{background-image:${u('gem')}}.ico.bolt{background-image:${u('energy')}}
.xp{background:${u('star')} center/contain no-repeat;clip-path:none}`;
  document.head.appendChild(st);
}

export async function renderIcons(list) {
  paintedHudIcons();
  list = list.filter(([id]) => { const u = paintedIcon(id); if (u) ICONS[id] = u; return !u; });
  if (!list.length) return; // đã đủ biểu tượng vẽ tay, khỏi tạo thêm WebGL
  const SIZE = 160;
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(SIZE, SIZE); r.setPixelRatio(1);
  r.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 2.2));
  const dl = new THREE.DirectionalLight(0xffffff, 2.2); dl.position.set(2, 4, 3); scene.add(dl);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
  for (const [id, spec] of list) {
    const m = spec.obj ? spec.obj() : make(spec.model, { tint: spec.tint, paint: spec.paint });
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
  Object.entries(DECOR).filter(([, d]) => !d.proc).forEach(([k, d]) => list.push(['decor:' + k, { model: d.model, tint: d.tint, paint: d.paint, rotY: d.pet ? 0.4 : -0.5 }]));
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
