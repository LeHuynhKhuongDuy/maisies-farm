// Nhiệm vụ giai đoạn B: vài nhiệm vụ truyện làm cùng lúc + việc vặt bù cho đủ. Chỉ logic thuần (không Three/DOM).
// Hướng dẫn đầu game (TUTORIAL) vẫn chạy trong state.js; hết hướng dẫn mới có nhiệm vụ ở đây.
import { STORIES, PEOPLE, CROPS, ITEMS, FACTORIES, PENS } from './data.js';
import { GATES } from './island.js';
import { S, on, emit, addXP, pick, rnd, inTutorial, builtKey, openObstacle } from './state.js';

const MAX = 4, MIN = 2, MAX_STORY = 3;

// ---------- Việc vặt (trước là genQuest trong state.js) ----------
export function newChore() {
  const who = pick(PEOPLE).id, L = S.level, opts = [];
  const crops = Object.entries(CROPS).filter(([, c]) => c.lv <= L).map(([k]) => k);
  const c = pick(crops), n = 4 + rnd(6);
  opts.push({ text: `Mình cần ${n} ${ITEMS[c].n.toLowerCase()} cho bữa tiệc. Bạn thu hoạch giúp nhé!`, ev: 'harvest', key: c, n });
  const made = [];
  for (const o of S.objs) if (o.k === 'fac' && !o.site) for (const r of FACTORIES[o.t].rec) if (r.lv <= L && !r.out.endsWith('feed') && !ITEMS[r.out].mat) made.push(r.out);
  if (made.length) { const m = pick(made), k = 1 + rnd(3); opts.push({ text: `Làm giúp mình ${k} ${ITEMS[m].n.toLowerCase()} được không?`, ev: 'make', key: m, n: k }); }
  const pens = S.objs.filter(o => o.k === 'pen' && !o.site && o.animals.length);
  if (pens.length) { const p = PENS[pick(pens).t], k = 3 + rnd(4); opts.push({ text: `Thu ${k} ${ITEMS[p.prod].n.toLowerCase()} từ chuồng ${p.an.toLowerCase()} nhé!`, ev: 'collect', key: p.prod, n: k }); }
  const dn = 2 + rnd(3);
  opts.push({ text: `Hôm nay nhiều người đặt hàng lắm. Giao ${dn} đơn hàng nhé!`, ev: 'deliver', n: dn });
  if (openObstacle()) opts.push({ text: 'Dọn thêm 3 chướng ngại vật để đảo rộng hơn nào!', ev: 'clear', n: 3 });
  const q = pick(opts), req = q.key ? { ev: q.ev, key: q.key, n: q.n } : { ev: q.ev, n: q.n };
  return { who, title: 'Việc vặt', text: q.text, reqs: [req], coins: 20 + L * 8, xp: 6 + L * 2, gems: Math.random() < 0.3 ? 1 : 0 };
}

// ---------- Nhãn yêu cầu cho giao diện ----------
const itemName = k => ITEMS[k]?.n || k;
export function reqLabel(r) {
  switch (r.ev) {
    case 'harvest': return 'Thu hoạch ' + itemName(r.key);
    case 'make': return 'Làm ' + itemName(r.key);
    case 'collect': return 'Thu ' + itemName(r.key);
    case 'build': {
      const [k, t] = (r.key || '').split(':');
      if (k === 'ruin') return 'Sửa ' + ({ house: 'Nhà', bakery: 'Lò bánh', boat: 'Thuyền' }[t] || t);
      return 'Xây ' + ((k === 'fac' ? FACTORIES[t]?.n : k === 'pen' ? PENS[t]?.n : k === 'gate' ? GATES[t]?.n : '') || t);
    }
    case 'plant': return 'Gieo hạt';
    case 'feed': return 'Cho thú ăn';
    case 'deliver': return 'Giao đơn hàng';
    case 'clear': return 'Dọn chướng ngại vật';
    case 'crate': return 'Đóng thùng hàng';
    case 'buydecor': return 'Mua đồ trang trí';
    case 'buytree': return 'Trồng cây';
    case 'beach': return 'Nhặt đồ ở bãi biển';
    case 'sail': return 'Ra khơi phiêu lưu';
  }
  return r.ev;
}

// ---------- Nhiệm vụ đang mở ----------
const arcOf = id => STORIES.find(a => a.id === id);
const stepLv = (a, s) => Math.max(a.lv, s.lv || 0);
// Mục S.qs -> định nghĩa (bước truyện hoặc việc vặt đã lưu); null nếu bước không còn (dữ liệu đổi)
function defOf(e) {
  if (e.c) return e.c;
  const [arc, i] = e.id.split(':'), a = arcOf(arc);
  return a?.steps[+i] || null;
}
const isDone = (e, d) => d.reqs.every((r, i) => (e.p[i] || 0) >= r.n);
const untouched = e => !e.p.some(x => x > 0);

function toQuest(e, d) {
  const a = e.c ? null : arcOf(e.id.split(':')[0]);
  return { id: e.id, arc: a ? a.id : null, title: a ? a.n : d.title, who: d.who, text: d.text,
    talk: d.talk || [[d.who, d.text]], outro: d.outro || [], reqs: d.reqs, p: e.p,
    coins: d.coins || 0, xp: d.xp || 0, gems: d.gems || 0, energy: d.energy || 0, seen: !!e.seen, done: isDone(e, d) };
}

export function activeQuests() {
  S.story ||= {}; S.qs ||= []; S.choreN ||= 0;
  delete S.quest; delete S.gq; // chuỗi nhiệm vụ cũ không còn; qprog và tut vẫn dùng cho hướng dẫn
  if (inTutorial()) return [];
  // bỏ mục không còn mở: bước truyện đã qua / chưa đủ cấp / không còn trong dữ liệu
  const keep = [];
  for (const e of S.qs) {
    const d = defOf(e);
    if (!d) continue;
    if (!e.c) {
      const [arc, i] = e.id.split(':'), a = arcOf(arc);
      if ((S.story[arc] || 0) !== +i || S.level < stepLv(a, d)) continue;
    }
    d.reqs.forEach((r, i) => { e.p[i] ||= 0; if (r.ev === 'build' && builtKey(r.key)) e.p[i] = r.n; });
    // việc vặt dọn dẹp chưa xong mà hết vật cản trong vùng mở: đổi việc khác, không bắt bé chờ
    if (e.c && !isDone(e, d) && d.reqs[0].ev === 'clear' && !openObstacle()) {
      e.c = newChore(); e.id = 'chore:' + (++S.choreN); e.p = e.c.reqs.map(() => 0); e.seen = false;
    }
    keep.push(e);
  }
  // thêm bước truyện mới (theo thứ tự STORIES), tối đa 3; việc vặt chưa làm gì nhường chỗ khi đã đủ 4
  const has = id => keep.some(e => e.id.split(':')[0] === id);
  let stories = keep.filter(e => !e.c).length;
  for (const a of STORIES) {
    if (stories >= MAX_STORY) break;
    const i = S.story[a.id] || 0, s = a.steps[i];
    if (!s || has(a.id) || S.level < stepLv(a, s)) continue;
    if (keep.length >= MAX) {
      const j = keep.findIndex(e => e.c && untouched(e) && !isDone(e, e.c));
      if (j < 0) break;
      keep.splice(j, 1);
    }
    keep.push({ id: a.id + ':' + i, p: s.reqs.map(() => 0), seen: false }); stories++;
    const e = keep[keep.length - 1];
    s.reqs.forEach((r, k) => { if (r.ev === 'build' && builtKey(r.key)) e.p[k] = r.n; });
  }
  // bù việc vặt cho đủ ít nhất 2 nhiệm vụ
  while (keep.length < MIN) {
    const c = newChore();
    keep.push({ id: 'chore:' + (++S.choreN), p: c.reqs.map(() => 0), seen: false, c });
  }
  // truyện đứng trước, việc vặt sau (mỗi nhóm giữ thứ tự cũ)
  S.qs = [...keep.filter(e => !e.c), ...keep.filter(e => e.c)];
  return S.qs.map(e => toQuest(e, defOf(e)));
}

// Nhận thưởng: chỉ khi xong. Trả nhiệm vụ để giao diện chạy lời thoại `outro`; không có / chưa xong thì null
export function claimStory(id) {
  const e = (S.qs || []).find(x => x.id === id), d = e && defOf(e);
  if (!d || !isDone(e, d)) return null;
  const q = toQuest(e, d);
  S.qs = S.qs.filter(x => x !== e);
  if (!e.c) S.story[q.arc] = (S.story[q.arc] || 0) + 1;
  S.coins += q.coins; S.gems += q.gems; S.energy += q.energy; addXP(q.xp);
  return q;
}
export function markSeen(id) {
  const e = (S.qs || []).find(x => x.id === id); if (e) e.seen = true;
}

// Mỗi sự kiện của bé cộng cho mọi nhiệm vụ đang mở có yêu cầu khớp (chặn ở n). Không làm mới danh sách ở đây:
// nhát chặt vật cản cuối cùng vừa xóa nó vẫn phải được tính cho việc vặt dọn dẹp
on('act', (ev, key, n = 1) => {
  if (inTutorial()) return;
  if (!S.qs) activeQuests();
  let changed = false;
  for (const e of S.qs) {
    const d = defOf(e); if (!d) continue;
    d.reqs.forEach((r, i) => {
      if (r.ev !== ev || (r.key && r.key !== key) || (e.p[i] || 0) >= r.n) return;
      e.p[i] = Math.min(r.n, (e.p[i] || 0) + n); changed = true;
    });
  }
  if (changed) emit('quest');
});
