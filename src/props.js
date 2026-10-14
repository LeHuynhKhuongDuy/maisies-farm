// Các chi tiết kiểu Family Farm dựng bằng code: hàng rào gỗ trắng, đường lát gạch,
// luống hoa cúc, bồn cây viền xanh, luống đất nổi, cây ăn quả tán tròn trĩu quả.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const matCache = {};
export const soft = (c, o = {}) => (matCache[c + JSON.stringify(o)] ||= new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, metalness: 0, ...o }));
const shadowy = m => { m.castShadow = true; m.receiveShadow = true; return m; };
function tex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// ---------- Hàng rào gỗ trắng (đoạn dài len, nằm dọc trục x) ----------
const fenceCache = new Map();
export function picketFence(len = 1) {
  if (!fenceCache.has(len)) {
    const parts = [];
    const n = Math.max(2, Math.round(len / 0.22));
    for (let i = 0; i <= n; i++) {
      const x = -len / 2 + (i / n) * len;
      const p = new THREE.BoxGeometry(0.07, 0.38, 0.05); p.translate(x, 0.19, 0); parts.push(p);
      const tip = new THREE.ConeGeometry(0.05, 0.08, 4); tip.rotateY(Math.PI / 4); tip.translate(x, 0.42, 0); parts.push(tip);
    }
    for (const y of [0.12, 0.28]) { const r = new THREE.BoxGeometry(len, 0.05, 0.035); r.translate(0, y, -0.035); parts.push(r); }
    fenceCache.set(len, mergeGeometries(parts.map(g => g.toNonIndexed())));
  }
  return shadowy(new THREE.Mesh(fenceCache.get(len), soft(0xffffff)));
}

// Hàng rào bao quanh hình chữ nhật w x d, chừa cổng giữa cạnh trước
export function fenceRing(w, d, gate = true) {
  const g = new THREE.Group();
  const side = (len, x, z, ry) => { const f = picketFence(len); f.position.set(x, 0, z); f.rotation.y = ry; g.add(f); };
  side(w, 0, -d / 2, 0);
  side(d, -w / 2, 0, Math.PI / 2); side(d, w / 2, 0, Math.PI / 2);
  if (gate) { const s = (w - 0.8) / 2; side(s, -w / 2 + s / 2, d / 2, 0); side(s, w / 2 - s / 2, d / 2, 0); }
  else side(w, 0, d / 2, 0);
  return g;
}

// ---------- Đường lát gạch hồng ----------
let brickMat = null;
export function brickTile() {
  if (!brickMat) brickMat = new THREE.MeshStandardMaterial({ roughness: 0.9, map: tex(128, 128, (x, w, h) => {
    x.fillStyle = '#c99a86'; x.fillRect(0, 0, w, h);
    const rows = 4, bh = h / rows;
    for (let r = 0; r < rows; r++) for (let c = -1; c < 3; c++) {
      const bw = w / 2, ox = (r % 2) * bw / 2;
      const hue = ['#e8b7a2', '#f0c4ae', '#ddab97', '#f4ccb8'][(r + c + 4) % 4];
      x.fillStyle = hue; x.beginPath(); x.roundRect(c * bw + ox + 3, r * bh + 3, bw - 6, bh - 6, 6); x.fill();
      x.fillStyle = 'rgba(255,255,255,.25)'; x.fillRect(c * bw + ox + 6, r * bh + 5, bw - 14, 3);
    }
  }) });
  const m = new THREE.Mesh(new THREE.BoxGeometry(1, 0.05, 1), brickMat);
  m.position.y = 0.02; m.receiveShadow = true;
  return m;
}

// ---------- Luống hoa cúc trắng/hồng ----------
const petalGeo = new THREE.SphereGeometry(0.055, 8, 6), centerGeo = new THREE.SphereGeometry(0.028, 6, 4);
export function flowerBed(palette = [0xffffff, 0xffd1e6, 0xffffff, 0xff9ec7]) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.12, 0.94), soft(0x5aa83a)); base.position.y = 0.06; shadowy(base); g.add(base);
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), soft(0x4c9a30));
  for (let i = 0; i < 6; i++) { const l = leaf.clone(); l.position.set((Math.random() - 0.5) * 0.6, 0.14, (Math.random() - 0.5) * 0.6); l.scale.set(1.2, 0.55, 1.2); g.add(l); }
  const n = 22, petals = new THREE.InstancedMesh(petalGeo, soft(0xffffff), n), centers = new THREE.InstancedMesh(centerGeo, soft(0xffd23f), n);
  const m4 = new THREE.Matrix4(), col = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const x = (Math.random() - 0.5) * 0.78, z = (Math.random() - 0.5) * 0.78, y = 0.22 + Math.random() * 0.08;
    m4.makeScale(1, 0.55, 1).setPosition(x, y, z); petals.setMatrixAt(i, m4); petals.setColorAt(i, col.set(palette[i % palette.length]));
    m4.makeTranslation(x, y + 0.03, z); centers.setMatrixAt(i, m4);
  }
  petals.castShadow = true; g.add(petals, centers);
  return g;
}

// ---------- Bồn cây viền xanh nhạt ----------
export function planterBase() {
  const g = new THREE.Group();
  const rim = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.16, 0.98), soft(0x9fe3f0)); rim.position.y = 0.08; shadowy(rim); g.add(rim);
  const top = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 0.8), soft(0x6dbf3f)); top.position.y = 0.165; g.add(top);
  return g;
}

// ---------- Luống đất nổi cho ruộng ----------
let soilMat = null;
export function raisedBed() {
  if (!soilMat) soilMat = new THREE.MeshStandardMaterial({ roughness: 1, map: tex(64, 64, (x, w, h) => {
    x.fillStyle = '#7a4b28'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) { x.fillStyle = 'rgba(40,20,5,.35)'; x.fillRect(0, i * 16 + 10, w, 4); x.fillStyle = 'rgba(255,220,180,.12)'; x.fillRect(0, i * 16 + 6, w, 3); }
  }) });
  const g = new THREE.Group();
  const rim = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.14, 0.98), soft(0xc98d52)); rim.position.y = 0.07; shadowy(rim); g.add(rim);
  const soil = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.02, 0.84), soilMat); soil.position.y = 0.145; soil.receiveShadow = true; g.add(soil);
  return g;
}

// ---------- Cây ăn quả tán tròn, trĩu quả ----------
const canopyGeo = new THREE.IcosahedronGeometry(0.42, 2), fruitGeo = new THREE.SphereGeometry(0.075, 10, 8);
const canopyCache = [];
function mergedCanopy(i, list) { return (canopyCache[i] ||= mergeGeometries(list)); }
export function lushTree({ leaf = 0x52c234, leaf2 = 0x6fd84a, fruit = 0xe8352b, n = 12, blossom = false } = {}) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.75, 8), soft(0x8b5a2b)); trunk.position.y = 0.52; shadowy(trunk); g.add(trunk);
  const puffs = [[0, 1.25, 0, 1.15], [-0.32, 1.08, 0.1, 0.8], [0.34, 1.1, -0.05, 0.82], [0.05, 1.08, 0.33, 0.8], [0, 1.6, 0, 0.75], [-0.05, 1.05, -0.3, 0.78]];
  // gộp các cụm lá thành 2 khối (lá thường + chỏm sáng) cho nhẹ máy
  const key = 'canopy', parts = [[], []];
  puffs.forEach(([x, y, z, s], i) => { const geo = canopyGeo.clone(); geo.scale(s, s, s); geo.translate(x, y, z); parts[i === 4 ? 1 : 0].push(geo); });
  parts.forEach((list, i) => { const c = new THREE.Mesh(mergedCanopy(i, list), soft(i ? leaf2 : leaf)); shadowy(c); g.add(c); });
  const fruits = new THREE.InstancedMesh(fruitGeo, soft(fruit, { roughness: 0.35 }), n);
  const m4 = new THREE.Matrix4(), v = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    // rải quả trên mặt tán, nhiều hơn ở phía camera nhìn tới
    const a = (i / n) * Math.PI * 2 * 1.6 + 0.3, y = 1.0 + ((i * 37) % 10) / 10 * 0.55;
    v.set(Math.cos(a) * 0.55, y, Math.sin(a) * 0.55);
    if (v.x + v.z < -0.3) v.multiplyScalar(-1).setY(y);
    m4.makeScale(blossom ? 0.8 : 1, blossom ? 0.8 : 1.08, blossom ? 0.8 : 1).setPosition(v); fruits.setMatrixAt(i, m4);
  }
  fruits.castShadow = true; g.add(fruits);
  return { group: g, fruits };
}

// ---------- Bụi cây tròn ----------
const bushGeo = new THREE.IcosahedronGeometry(0.25, 2);
export function roundBush(c1 = 0x4fb82e, c2 = 0x66cc3e, berries = false) {
  const g = new THREE.Group();
  [[0, 0.24, 0, 1.15, c1], [-0.22, 0.18, 0.08, 0.85, c2], [0.22, 0.18, -0.04, 0.9, c1], [0.04, 0.2, 0.22, 0.8, c2]].forEach(([x, y, z, s, c]) => {
    const b = new THREE.Mesh(bushGeo, soft(c)); b.position.set(x, y, z); b.scale.set(s, s * 0.85, s); shadowy(b); g.add(b);
  });
  if (berries) for (let i = 0; i < 6; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), soft(0xff4d6d)); const a = i * 1.1; f.position.set(Math.cos(a) * 0.3, 0.22 + (i % 3) * 0.08, Math.sin(a) * 0.3); g.add(f); }
  return g;
}
