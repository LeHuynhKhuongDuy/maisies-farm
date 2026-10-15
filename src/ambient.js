// Không khí đảo: bóng mây, hải âu, thuyền buồm, sóng bọt, bướm, biển tên nông trại
import * as THREE from 'three';
import { GRID } from './data.js';
import { W, roundedRect, cellToWorld } from './world.js';
import { make } from './assets.js';
import { art, faceDir } from './entities.js';

const A = { clouds: [], birds: [], boats: [], flies: [], foam: [] };

export function buildAmbient() {
  const g = new THREE.Group(); W.farm.add(g);

  // Mây vô hình chỉ đổ bóng, trôi chầm chậm qua đảo
  const cloudMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  for (let i = 0; i < 4; i++) {
    const c = new THREE.Group();
    for (let k = 0; k < 5; k++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(1.6 + Math.random() * 1.2, 10, 8), cloudMat);
      s.position.set((k - 2) * 1.9, Math.random() * 0.6, (Math.random() - 0.5) * 2); s.castShadow = true; c.add(s);
    }
    c.position.set(-30 + i * 16, 14, -20 + i * 9);
    c.userData.speed = 0.5 + Math.random() * 0.4;
    g.add(c); A.clouds.push(c);
  }

  // Hải âu: thân + 2 cánh vỗ
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), grey = new THREE.MeshStandardMaterial({ color: 0x9aa7b0 });
  for (let i = 0; i < 4; i++) {
    const up = art('gull1', 1, 1, { shadow: false }), down = art('gull2', 1, 1, { shadow: false });
    if (up && down) { // hình vẽ tay: đổi qua lại 2 tư thế cánh
      const b = new THREE.Group(); b.add(up, down);
      b.userData = { r: 16 + i * 4, h: 5 + i * 0.8, sp: 0.12 + i * 0.03, ph: i * 1.7, frames: [up, down] };
      g.add(b); A.birds.push(b); continue;
    }
    const b = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.5), white); b.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), white); head.position.set(0, 0.06, 0.3); b.add(head);
    const beak = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.12), new THREE.MeshStandardMaterial({ color: 0xffb030 })); beak.position.set(0, 0.04, 0.42); b.add(beak);
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group(); pivot.position.set(side * 0.09, 0.03, 0);
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.03, 0.26), side < 0 ? white : white); wing.position.x = side * 0.3; pivot.add(wing);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.031, 0.22), grey); tip.position.x = side * 0.62; pivot.add(tip);
      pivot.userData.side = side; b.add(pivot);
    }
    b.castShadow = true; b.traverse(o => { if (o.isMesh) o.castShadow = true; });
    b.userData = { r: 16 + i * 4, h: 5 + i * 0.8, sp: 0.12 + i * 0.03, ph: i * 1.7 };
    g.add(b); A.birds.push(b);
  }

  // Thuyền buồm chạy vòng ngoài khơi
  for (let i = 0; i < 2; i++) {
    const s = art(i ? 'boat' : 'ship', 1, 1, { scale: i ? 0.7 : 0.8, shadow: false }) || make(i ? 'pirate/boat-row-large' : 'pirate/ship-small', { h: i ? 0.9 : 3 });
    Object.assign(s.userData, { r: 24 + i * 7, sp: (i ? -1 : 1) * (0.025 + i * 0.01), ph: i * 3 });
    g.add(s); A.boats.push(s);
  }

  // Sóng bọt trắng quanh bờ (2 vòng thay nhau loang ra)
  for (let i = 0; i < 2; i++) {
    const outer = roundedRect(GRID + 6.2, 4.2), inner = roundedRect(GRID + 4.6, 3.2);
    outer.holes.push(new THREE.Path(inner.getPoints(24).reverse()));
    const m = new THREE.Mesh(new THREE.ShapeGeometry(outer, 24), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.y = -0.45; m.renderOrder = 3; m.userData.ph = i * 0.5;
    g.add(m); A.foam.push(m);
  }

  // Bướm
  const colors = [0xff8ad8, 0xffd23f, 0x8fd0ff, 0xffffff];
  for (let i = 0; i < 5; i++) {
    const f = new THREE.Group(), mat = new THREE.MeshBasicMaterial({ color: colors[i % 4], side: THREE.DoubleSide });
    for (const side of [-1, 1]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.12), mat); w.position.x = side * 0.08; w.userData.side = side; f.add(w); }
    f.userData = { cx: (Math.random() - 0.5) * 12, cz: (Math.random() - 0.5) * 10, ph: Math.random() * 6 };
    g.add(f); A.flies.push(f);
  }

  // Biển gỗ "Maisie's Farm" ở đầu bến
  const c = document.createElement('canvas'); c.width = 512; c.height = 200;
  const x = c.getContext('2d');
  x.fillStyle = '#c98d52'; x.beginPath(); x.roundRect(8, 8, 496, 184, 36); x.fill();
  x.strokeStyle = '#93603a'; x.lineWidth = 10; x.stroke();
  x.fillStyle = '#fff8e7'; x.font = '800 86px "Baloo 2", system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.strokeStyle = '#93603a'; x.lineWidth = 12; x.strokeText("Maisie's Farm", 256, 104); x.fillText("Maisie's Farm", 256, 104);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const sign = new THREE.Group();
  const board = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.33), new THREE.MeshStandardMaterial({ map: tex, transparent: true, side: THREE.DoubleSide }));
  board.position.y = 1.55; board.castShadow = true; sign.add(board);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b });
  for (const sx of [-1.3, 1.3]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.7, 0.14), postMat); p.position.set(sx, 0.85, -0.03); p.castShadow = true; sign.add(p); }
  const pos = cellToWorld(14, GRID - 1); sign.position.set(pos.x, 0, pos.z + 0.9); sign.rotation.y = Math.PI / 4;
  g.add(sign);
  // vẽ lại chữ khi phông chữ đã tải xong
  document.fonts?.ready.then(() => { x.clearRect(0, 0, 512, 200); x.fillStyle = '#c98d52'; x.beginPath(); x.roundRect(8, 8, 496, 184, 36); x.fill(); x.strokeStyle = '#93603a'; x.lineWidth = 10; x.stroke();
    x.fillStyle = '#fff8e7'; x.strokeStyle = '#93603a'; x.lineWidth = 12; x.strokeText("Maisie's Farm", 256, 104); x.fillText("Maisie's Farm", 256, 104); tex.needsUpdate = true; });
}

export function updateAmbient(t, dt) {
  for (const c of A.clouds) { c.position.x += dt * c.userData.speed; c.position.z += dt * c.userData.speed * 0.4; if (c.position.x > 34) { c.position.x = -34; c.position.z = -24 + Math.random() * 20; } }
  for (const b of A.birds) {
    const u = b.userData, a = t * u.sp + u.ph;
    b.position.set(Math.cos(a) * u.r, u.h + Math.sin(t * 0.7 + u.ph) * 0.6, Math.sin(a) * u.r);
    if (u.frames) {
      const [up, down] = u.frames, flapUp = Math.sin(t * 7 + u.ph) > 0;
      up.visible = flapUp; down.visible = !flapUp;
      // bay theo vòng tròn: lật hình theo hướng bay trên màn hình (hình gốc quay mặt sang trái)
      const dx = -Math.sin(a) * u.sp, dz = Math.cos(a) * u.sp, sx = (dx - dz) > 0 ? -1 : 1;
      up.userData.plane.scale.x = down.userData.plane.scale.x = sx;
      continue;
    }
    b.rotation.y = -a; b.rotation.z = 0.25;
    const flap = Math.sin(t * 9 + u.ph) * 0.5;
    b.children.forEach(ch => { if (ch.userData.side) ch.rotation.z = ch.userData.side * flap; });
  }
  for (const s of A.boats) {
    const u = s.userData, a = t * u.sp + u.ph;
    s.position.set(Math.cos(a) * u.r, -0.5 + Math.sin(t * 1.3 + u.ph) * 0.05, Math.sin(a) * u.r);
    if (u.plane) { u.isArt = true; faceDir(s, -Math.sin(a) * u.sp, Math.cos(a) * u.sp); u.plane.rotation.z = Math.sin(t + u.ph) * 0.04; continue; }
    s.rotation.y = -a + (u.sp > 0 ? Math.PI : 0);
    s.rotation.z = Math.sin(t + u.ph) * 0.04;
  }
  for (const f of A.foam) {
    const k = ((t * 0.25 + f.userData.ph) % 1);
    f.scale.setScalar(1 + k * 0.1); f.material.opacity = 0.75 * (1 - k);
  }
  for (const f of A.flies) {
    const u = f.userData, a = t * 0.6 + u.ph;
    f.position.set(u.cx + Math.cos(a) * 1.4, 0.7 + Math.sin(t * 2 + u.ph) * 0.25, u.cz + Math.sin(a * 1.3) * 1.2);
    f.rotation.y = -a;
    const flap = Math.sin(t * 18 + u.ph) * 1.1;
    f.children.forEach(w => { w.rotation.y = w.userData.side * flap; });
  }
}
