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
    loader.load(BASE + name + '.png', t => {
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
      TEX[name] = { tex: t, aspect: t.image.height / t.image.width };
      res();
    }, undefined, () => res()); // chưa có ảnh thì dùng mô hình 3D như cũ
  })));
}
export const hasSprite = name => !!TEX[name];
export const spriteUrl = name => TEX[name] ? BASE + name + '.png' : null;

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
  p.quaternion.copy(faceQuat);
  // mép dưới ảnh = điểm trước nhất của ô đất (góc gần camera)
  const fwd = new THREE.Vector3(Math.sin(AZ), 0, Math.cos(AZ));
  p.position.copy(new THREE.Vector3(w / 2, 0, d / 2).projectOnVector(fwd));
  p.position.y = lift;
  p.userData.sprite = true;
  g.add(p); g.userData.plane = p;
  if (shadow) g.add(blobShadow(w * 0.62, d * 0.62));
  return g;
}
