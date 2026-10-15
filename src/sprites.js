// Hình 2D vẽ tay (AI vẽ, đã tách nền) hiển thị như tấm ảnh đứng quay về phía camera.
// Ảnh vẽ theo góc nhìn chéo giống camera, nên chỉ cần đặt mép dưới ảnh ở góc trước của ô đất.
import * as THREE from 'three';
import { AZ, EL } from './world.js';
import { SPRITE_ART } from './data.js';

const BASE = import.meta.env.BASE_URL + 'sprites/';
const TEX = {}; // tên -> { tex, aspect }

export async function loadSprites() {
  const loader = new THREE.TextureLoader();
  await Promise.all(Object.keys(SPRITE_ART).map(name => new Promise(res => {
    loader.load(BASE + name + '.webp', t => {
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
      TEX[name] = { tex: t, aspect: t.image.height / t.image.width };
      res();
    }, undefined, () => res()); // chưa có ảnh thì dùng mô hình 3D như cũ
  })));
}
export const hasSprite = name => !!TEX[name];
export const spriteUrl = name => TEX[name] ? BASE + name + '.webp' : null;

// Hướng camera cố định: tấm ảnh nghiêng ra sau đúng bằng góc nhìn
const faceQuat = (() => {
  const m = new THREE.Matrix4();
  const dir = new THREE.Vector3(Math.cos(EL) * Math.sin(AZ), Math.sin(EL), Math.cos(EL) * Math.cos(AZ)); // từ vật hướng về camera
  m.lookAt(dir, new THREE.Vector3(), new THREE.Vector3(0, 1, 0));
  return new THREE.Quaternion().setFromRotationMatrix(m);
})();

let shadowTex = null;
function blobShadow(rx, rz) {
  if (!shadowTex) {
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 2, 32, 32, 31); g.addColorStop(0, 'rgba(30,50,10,.38)'); g.addColorStop(1, 'rgba(30,50,10,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64); shadowTex = new THREE.CanvasTexture(c);
  }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(rx * 2, rz * 2), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.03; m.renderOrder = 1;
  return m;
}

// Mặt nạ độ trong suốt (thu nhỏ) để chạm chỉ trúng phần có hình, không trúng nền trong suốt
const MASK_W = 96;
function alphaMask(T) {
  if (T.mask !== undefined) return T.mask;
  T.mask = null;
  try {
    const im = T.tex.image, w = MASK_W, h = Math.max(1, Math.round(MASK_W * T.aspect));
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0, w, h);
    const px = x.getImageData(0, 0, w, h).data, a = new Uint8Array(w * h);
    for (let i = 0; i < a.length; i++) a[i] = px[i * 4 + 3];
    T.mask = { w, h, a };
  } catch (e) { } // không đọc được ảnh thì chạm theo cả khung như cũ
  return T.mask;
}
// Có hình tại toạ độ uv không (nới thêm 1 điểm ảnh quanh đó cho dễ chạm)
function opaqueAt(T, uv) {
  const m = alphaMask(T); if (!m) return true;
  const cx = Math.floor(uv.x * m.w), cy = Math.floor((1 - uv.y) * m.h);
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    const x = cx + dx, y = cy + dy;
    if (x >= 0 && y >= 0 && x < m.w && y < m.h && m.a[y * m.w + x] > 90) return true;
  }
  return false;
}
const tmpHits = [];
function spriteRaycast(mesh, T, raycaster, intersects) {
  tmpHits.length = 0;
  THREE.Mesh.prototype.raycast.call(mesh, raycaster, tmpHits);
  for (const h of tmpHits) if (!h.uv || opaqueAt(T, h.uv)) intersects.push(h);
}

const planeCache = new Map();
// Trả về Group: gốc ở tâm ô đất; ảnh đặt ở góc trước của ô (w x d), rộng `width` đơn vị
export function spriteObject(name, { width = 1.4, w = 1, d = 1, lift = 0, shadow = true } = {}) {
  const T = TEX[name];
  const g = new THREE.Group();
  const height = width * T.aspect;
  const key = width + ':' + height;
  if (!planeCache.has(key)) { const geo = new THREE.PlaneGeometry(width, height); geo.translate(0, height / 2, 0); planeCache.set(key, geo); }
  const mat = new THREE.MeshBasicMaterial({ map: T.tex, transparent: true, alphaTest: 0.35, side: THREE.DoubleSide });
  const p = new THREE.Mesh(planeCache.get(key), mat);
  // khung xoay về camera; tấm ảnh nằm trong khung nên có thể nhún/nghiêng/co giãn/lật theo trục của chính nó
  const pivot = new THREE.Group();
  pivot.quaternion.copy(faceQuat);
  // mép dưới ảnh = điểm trước nhất của ô đất (góc gần camera)
  const fwd = new THREE.Vector3(Math.sin(AZ), 0, Math.cos(AZ));
  pivot.position.copy(new THREE.Vector3(w / 2, 0, d / 2).projectOnVector(fwd));
  pivot.position.y = lift;
  p.userData.sprite = true;
  p.raycast = (rc, out) => spriteRaycast(p, T, rc, out);
  pivot.add(p); g.add(pivot); g.userData.plane = p;
  if (shadow) g.add(blobShadow(w * 0.62, d * 0.62));
  return g;
}

// Cử động cho hình 2D một ảnh: thở (co giãn nhẹ), đi (nhún + lắc lư), vui (nhảy), giật mình khi chạm
export function animateArt(obj, t, state, seed = 0) {
  const p = obj.userData.plane; if (!p) return;
  const sx = Math.sign(p.scale.x) || 1;
  if (state === 'walk') {
    const ph = t * 9 + seed;
    p.position.y = Math.abs(Math.sin(ph)) * 0.06;
    p.rotation.z = Math.sin(ph) * 0.09;
    p.scale.set(sx, 1, 1);
  } else if (state === 'happy') {
    const ph = t * 6 + seed, up = Math.max(0, Math.sin(ph));
    p.position.y = up * 0.16;
    p.scale.set(sx * (1 + (1 - up) * 0.06), 1 - (1 - up) * 0.08, 1);
    p.rotation.z = 0;
  } else { // đứng yên: thở nhẹ, thỉnh thoảng cúi xuống (ăn)
    const br = Math.sin(t * 2.2 + seed);
    p.position.y = 0;
    p.scale.set(sx * (1 - br * 0.015), 1 + br * 0.03, 1);
    p.rotation.z = state === 'eat' ? Math.sin(t * 3 + seed) * 0.05 - 0.06 * sx : 0;
  }
}
