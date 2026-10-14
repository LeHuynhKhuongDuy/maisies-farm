import * as THREE from 'three';
import { GRID } from './data.js';

// Toạ độ ô lưới -> toạ độ thế giới (tâm của vùng w x d bắt đầu tại ô x,z)
export const cellToWorld = (x, z, w = 1, d = 1) => new THREE.Vector3(x + w / 2 - GRID / 2, 0, z + d / 2 - GRID / 2);
export const worldToCell = (p) => [Math.floor(p.x + GRID / 2), Math.floor(p.z + GRID / 2)];

export const W = {
  renderer: null, scene: null, camera: null, target: new THREE.Vector3(0, 0, 2),
  zoom: 1.7, clock: new THREE.Clock(), waterTex: null, pickables: [],
  mode: 'farm', farm: null, advPick: [], bounds: { x0: -14, x1: 14, z0: -14, z1: 18 },
};

// Góc nhìn chéo 2:1 kiểu game nông trại (nâng 30°)
export const AZ = Math.PI / 4, EL = THREE.MathUtils.degToRad(30), DIST = 60;
const VIEW = 15; // số đơn vị thế giới theo chiều ngắn của màn hình khi zoom = 1

export function initWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // Neutral giữ màu tươi (ACES làm màu bị xỉn và ngả xanh)
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  W.renderer = renderer;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x5fd0e0);
  scene.fog = new THREE.Fog(0x5fd0e0, 70, 140);
  W.scene = scene;

  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 300);
  W.camera = cam;

  // Ánh sáng mềm, sáng đều: trời sáng nhiều, nắng vừa, bóng đổ nhạt
  scene.add(new THREE.HemisphereLight(0xffffff, 0xa8d878, 2.3));
  const sun = new THREE.DirectionalLight(0xfff4dc, 1.7);
  sun.position.set(-14, 26, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera; sc.left = -20; sc.right = 20; sc.top = 20; sc.bottom = -20; sc.near = 1; sc.far = 80;
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.02; sun.shadow.intensity = 0.42; sun.shadow.radius = 3;
  scene.add(sun);

  W.farm = new THREE.Group(); scene.add(W.farm);
  buildIsland(scene);
  resize();
  window.addEventListener('resize', resize);
}

export function roundedRect(size, r) {
  const s = new THREE.Shape(), h = size / 2;
  s.moveTo(-h + r, -h); s.lineTo(h - r, -h); s.quadraticCurveTo(h, -h, h, -h + r);
  s.lineTo(h, h - r); s.quadraticCurveTo(h, h, h - r, h); s.lineTo(-h + r, h);
  s.quadraticCurveTo(-h, h, -h, h - r); s.lineTo(-h, -h + r); s.quadraticCurveTo(-h, -h, -h + r, -h);
  return s;
}
export function slab(size, r, depth, mat, topY) {
  const g = new THREE.ExtrudeGeometry(roundedRect(size, r), { depth, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 2, curveSegments: 10 });
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat);
  m.position.y = topY - depth - 0.08;
  m.receiveShadow = true;
  return m;
}

export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

function buildIsland(scene) {
  // Biển
  W.waterTex = canvasTex(256, 256, (x, w, h) => {
    x.fillStyle = '#34cfe0'; x.fillRect(0, 0, w, h);
    x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 4; x.lineCap = 'round';
    for (let i = 0; i < 9; i++) {
      const px = (i * 97) % w, py = (i * 61) % h;
      x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + 14, py - 8, px + 28, py); x.quadraticCurveTo(px + 42, py + 8, px + 56, py); x.stroke();
    }
  });
  W.waterTex.repeat.set(30, 30);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ map: W.waterTex, roughness: 0.35, metalness: 0.05 }));
  sea.rotation.x = -Math.PI / 2; sea.position.y = -0.55; sea.receiveShadow = true;
  scene.add(sea);
  // nước nông quanh đảo
  const shallow = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(GRID + 9, 6), 12),
    new THREE.MeshStandardMaterial({ color: 0x8be6ec, transparent: true, opacity: 0.55, roughness: 0.3 }));
  shallow.rotation.x = -Math.PI / 2; shallow.position.y = -0.5;
  W.farm.add(shallow);

  // Bãi cát
  const sandTex = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#f4dca0'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 160; i++) { x.fillStyle = `rgba(${180 + Math.random() * 40},${140 + Math.random() * 30},80,.25)`; x.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  });
  sandTex.repeat.set(0.25, 0.25);
  W.sandMat = new THREE.MeshStandardMaterial({ map: sandTex, roughness: 0.95 });
  W.farm.add(slab(GRID + 4.4, 3, 0.8, W.sandMat, -0.12));

  // Cỏ dạng ô bàn cờ nhạt như sân cỏ
  // Cỏ vẽ tay: ô sân sáng tối xen kẽ, ngọn cỏ, hoa li ti
  const grassTex = canvasTex(256, 256, (x, w, h) => {
    x.fillStyle = '#86d94a'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#93e256'; x.fillRect(0, 0, w / 2, h / 2); x.fillRect(w / 2, h / 2, w / 2, h / 2);
    for (let i = 0; i < 900; i++) {
      const px = Math.random() * w, py = Math.random() * h, l = 3 + Math.random() * 5;
      x.strokeStyle = Math.random() < 0.5 ? 'rgba(45,110,20,.35)' : 'rgba(170,230,110,.4)'; x.lineWidth = 1.4;
      x.beginPath(); x.moveTo(px, py); x.lineTo(px + (Math.random() - 0.5) * 3, py - l); x.stroke();
    }
    for (let i = 0; i < 26; i++) { x.fillStyle = ['#fff7d6', '#ffe066', '#ffd0e8'][i % 3]; x.beginPath(); x.arc(Math.random() * w, Math.random() * h, 1.8, 0, 7); x.fill(); }
  });
  grassTex.repeat.set(0.5, 0.5); // mỗi ô lưới một ô sáng/tối -> thành hình thoi khi nhìn chéo
  const grass = slab(GRID + 0.4, 1.6, 0.5, new THREE.MeshStandardMaterial({ map: grassTex, roughness: 1 }), 0);
  grass.name = 'ground';
  W.farm.add(grass);
  W.ground = grass;
}

export function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  W.renderer.setSize(w, h, false);
  updateCamera();
}

export function updateCamera() {
  const cam = W.camera, w = window.innerWidth, h = window.innerHeight;
  const short = Math.min(w, h), half = VIEW / 2 / W.zoom;
  cam.left = -half * w / short; cam.right = half * w / short;
  cam.top = half * h / short; cam.bottom = -half * h / short;
  // giới hạn vùng nhìn trong đảo
  const b = W.bounds;
  W.target.x = THREE.MathUtils.clamp(W.target.x, b.x0, b.x1);
  W.target.z = THREE.MathUtils.clamp(W.target.z, b.z0, b.z1);
  cam.position.set(
    W.target.x + DIST * Math.cos(EL) * Math.sin(AZ),
    W.target.y + DIST * Math.sin(EL),
    W.target.z + DIST * Math.cos(EL) * Math.cos(AZ));
  cam.lookAt(W.target);
  cam.updateProjectionMatrix();
}

export function setZoom(z) { W.zoom = THREE.MathUtils.clamp(z, 0.55, 2.6); updateCamera(); }

// Kéo màn hình: đổi pixel -> dịch chuyển trên mặt đất
export function panBy(dx, dy) {
  const cam = W.camera, h = window.innerHeight;
  const unitsPerPx = (cam.top - cam.bottom) / h;
  const right = new THREE.Vector3(Math.cos(AZ), 0, -Math.sin(AZ));
  const fwd = new THREE.Vector3(-Math.sin(AZ), 0, -Math.cos(AZ));
  W.target.addScaledVector(right, -dx * unitsPerPx);
  W.target.addScaledVector(fwd, dy * unitsPerPx / Math.sin(EL));
  updateCamera();
}

const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function setRay(sx, sy) {
  ndc.set(sx / window.innerWidth * 2 - 1, -(sy / window.innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, W.camera);
}
export function groundAt(sx, sy) {
  setRay(sx, sy);
  const p = new THREE.Vector3();
  return ray.ray.intersectPlane(plane, p) ? p : null;
}
// Trả về đối tượng (root có userData.oid) dưới ngón tay
export function pickAt(sx, sy) {
  setRay(sx, sy);
  const hits = ray.intersectObjects(W.mode === 'farm' ? W.pickables : W.advPick, true);
  for (const h of hits) {
    let o = h.object;
    while (o && o.userData.oid === undefined) o = o.parent;
    if (o) return o.userData.oid;
  }
  return null;
}

const tmp = new THREE.Vector3();
export function toScreen(v) {
  tmp.copy(v).project(W.camera);
  return [(tmp.x + 1) / 2 * window.innerWidth, (1 - tmp.y) / 2 * window.innerHeight, tmp.z < 1];
}
export function focusOn(v) { W.target.set(v.x, 0, v.z); updateCamera(); }
