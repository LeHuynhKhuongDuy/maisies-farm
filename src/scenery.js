// Phong cảnh cho đảo đỡ trống và có sức sống:
// - cỏ, hoa nhỏ, đá cuội rải tự nhiên trên đất trống (chỉ để nhìn, không chặn chạm, tự ẩn khi có vật đặt lên)
// - cây, lúa, bụi, hoa đung đưa nhẹ trong gió
import { S, occupancy } from './state.js';
import { GRID, SPRITE_ART } from './data.js';
import { W, cellToWorld } from './world.js';
import { art, VIEWS } from './entities.js';
import { isOpenCell } from './island.js';

// [tên hình, độ lớn, tỉ lệ xuất hiện]
const BITS = [['grasstuft', 0.55, 5], ['grasstuft', 0.4, 4], ['daisies', 0.45, 2], ['flower_yel', 0.38, 1], ['flower_pur', 0.38, 1],
  ['flower_red', 0.36, 1], ['rock', 0.28, 1]];
const DENSITY = 0.14; // tỉ lệ ô trống có một nhúm cỏ hoa
const SWAY_KINDS = new Set(['tree', 'obstacle', 'decor']); // ruộng không lắc: hình ruộng có sẵn luống gỗ
const NO_SWAY = new Set(['rock', 'bigrock', 'claymound', 'stump', 'logs', 'path', 'well', 'bench', 'barrel', 'crate', 'fountain', 'lotuspond',
  'minilight', 'lighthouse_big', 'sandcastle', 'goldboat', 'boat', 'cart', 'tent', 'flag', 'chest', 'campfire', 'whitefence', 'wheelbarrow', 'lantern']);

// số ngẫu nhiên cố định theo ô (cùng ô luôn ra cùng kết quả)
const hash = (x, z, k) => { let h = (x * 374761393 + z * 668265263 + k * 2147483647) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const total = BITS.reduce((a, b) => a + b[2], 0);
const pickBit = r => { let t = r * total; for (const b of BITS) { if ((t -= b[2]) < 0) return b; } return BITS[0]; };

let bits = []; // { x, z, obj }
let sig = '';
const bitSway = []; // cỏ hoa rải: { p: tấm ảnh, ph, amp }
let objSway = []; // cây, bụi, hoa của các vật trên đảo (tính lại khi đảo đổi)

const noPick = o => o.traverse(c => { c.raycast = () => {}; });

export function buildScenery() {
  for (let x = 0; x < GRID; x++) for (let z = 0; z < GRID; z++) {
    if (hash(x, z, 1) > DENSITY) continue;
    const [name, size] = pickBit(hash(x, z, 2));
    const obj = SPRITE_ART[name] && art(name, 0.4, 0.4, { scale: size / SPRITE_ART[name].width, shadow: false }); // size = bề ngang (đơn vị ô)
    if (!obj) continue;
    const p = cellToWorld(x, z);
    obj.position.set(p.x - 0.2 + (hash(x, z, 3) - 0.5) * 0.6, 0, p.z - 0.2 + (hash(x, z, 4) - 0.5) * 0.6);
    if (hash(x, z, 5) < 0.5) obj.userData.plane.scale.x = -1; // lật ngẫu nhiên cho đỡ giống nhau
    noPick(obj);
    obj.visible = false;
    W.farm.add(obj);
    bits.push({ x, z, obj });
    if (name !== 'rock') bitSway.push({ p: obj.userData.plane, ph: hash(x, z, 6) * 6.28, amp: 0.05 });
  }
  refreshScenery(true);
}

// Ẩn cỏ hoa ở ô có vật hoặc còn dưới mây; chỉ tính lại khi đảo thay đổi
export function refreshScenery(force) {
  const s = S.objs.length + ':' + S.objs.reduce((a, o) => a + o.x * 31 + o.z * 17 + o.id, 0) + ':' + JSON.stringify(S.zones || {});
  if (!force && s === sig) return;
  sig = s;
  const g = occupancy();
  for (const b of bits) b.obj.visible = !g.has(b.x + ',' + b.z) && isOpenCell(b.x, b.z);
  collectSway();
}

// Tìm các tấm ảnh cây cối, lúa, bụi, hoa để cho đung đưa
function collectSway() {
  objSway = [];
  for (const o of S.objs) {
    if (!SWAY_KINDS.has(o.k) || NO_SWAY.has(o.t)) continue;
    const v = VIEWS.get(o.id); if (!v) continue;
    const amp = o.k === 'tree' ? 0.022 : 0.035;
    v.root.traverse(c => { if (c.userData.sprite) objSway.push({ p: c, ph: (o.id * 1.7) % 6.28, amp }); });
  }
}

// Gió: nghiêng nhẹ quanh gốc (tấm ảnh có gốc ở mép dưới). Mỗi khung hình
export function updateScenery(t) {
  for (const list of [bitSway, objSway]) for (const s of list) {
    if (!s.p.parent) continue;
    s.p.rotation.z = Math.sin(t * 1.3 + s.ph) * s.amp + Math.sin(t * 2.9 + s.ph * 1.7) * s.amp * 0.3;
  }
}
