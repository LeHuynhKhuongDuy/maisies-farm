# Giai đoạn B: Nhiệm vụ có truyện — Kế hoạch làm

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Thay chuỗi nhiệm vụ một-việc-một-lúc bằng nhiều nhiệm vụ cùng lúc theo mạch truyện, có cột chân dung bên trái, hội thoại, nút "Chỉ cho bé" và việc hằng ngày.

**Architecture:** Logic nhiệm vụ thuần (không DOM, không Three.js) nằm trong module mới `src/quests.js`, kiểm thử bằng `node --test`. Nội dung truyện khai báo trong `src/data.js` (`STORIES`, `ISLANDERS`, `DAILY`). `src/state.js` chỉ còn giữ hướng dẫn đầu game (`TUTORIAL`); khi xong hướng dẫn thì `src/quests.js` lo hết. Phần hiển thị nằm trong `src/game.js`, `src/ui.js`, `src/talk.js` (mới), `src/style.css`, `index.html`.

**Tech Stack:** JavaScript ES modules thuần, Three.js 0.170, Vite 5, `node --test`.

**Spec:** [docs/superpowers/specs/2026-10-16-huong-taonga-design.md](../specs/2026-10-16-huong-taonga-design.md) (mục 4, 5, 7B, 8, 11).

## Global Constraints

- Chữ trong game bằng tiếng Việt, câu ngắn, dễ hiểu với trẻ nhỏ. Chú thích code bằng tiếng Việt như code hiện có.
- Không thư viện mới.
- Không giới hạn thời gian cho nhiệm vụ, không đồng hồ đếm ngược, không nút bỏ qua bằng kim cương.
- Không mất tiến độ: bản lưu `v: 1` và `v: 2` cũ mở ra vẫn giữ cấp, xu, kim cương, kho, công trình, và hướng dẫn đang dở. Khóa lưu vẫn là `maisies-farm-v1`, vẫn `v: 2` (chỉ thêm trường, không đổi phiên bản).
- Không làm bé kẹt: mọi yêu cầu của nhiệm vụ truyện phải làm được ở cấp mở bước đó. Không dùng các sự kiện ngẫu nhiên hoặc có thể bị chặn (`loot`, `buyanimal`) trong nhiệm vụ truyện và việc hằng ngày.
- Sau hướng dẫn luôn có **ít nhất 2** và **nhiều nhất 4** nhiệm vụ đang mở.
- Hướng dẫn đầu game (`TUTORIAL`) giữ nguyên cách chạy hiện nay (một bước một lúc, bàn tay chỉ đường).
- Màn chính 375×812 dọc; khổ ngang 812×375 và 1280×800 vẫn chơi được. Không nút HUD nào chồng lên nhau. Cách kiểm: chạy đoạn sau trong preview, kết quả phải là `[]`:
  ```js
  [...document.querySelectorAll('#hud button:not([hidden])')].map(b => [b, b.getBoundingClientRect()]).filter(([, r]) => r.width)
    .flatMap(([a, r], i, L) => L.slice(i + 1).filter(([, s]) => r.left < s.right && s.left < r.right && r.top < s.bottom && s.top < r.bottom).map(([b]) => a.id + '×' + b.id))
  ```
- Hình chưa có thì dùng hình tạm; code không chờ hình.
- Mỗi việc kết thúc bằng `npm test` và `npm run build` chạy được, rồi commit tiếng Việt.

## Review Focus

1. **Bản lưu cũ cấp cao** (v1 cấp 15, hoặc v2 đã xong hướng dẫn với `quest`/`qprog`/`gq` của chuỗi cũ): mở ra có 2–4 nhiệm vụ, không lỗi vì thiếu trường mới, hướng dẫn không chạy lại. → test ở Task 2.
2. **Công trình đã xây trước khi nhiệm vụ đòi xây nó** (ví dụ bé đã mua Nhà đan lát, hoặc bản cũ đã có cầu): yêu cầu `build` tự xong ngay, không chờ sự kiện không bao giờ tới. → test ở Task 2.
3. **Hết vật cản trong vùng mở** khi đang có việc vặt "dọn dẹp": việc đó được thay bằng việc khác; nhát chặt cuối cùng vẫn được tính. → test ở Task 2.
4. **Qua ngày mới khi bé đã làm xong hết việc hằng ngày mà chưa bấm nhận**: quà được cộng luôn, không mất. → test ở Task 3.
5. **Một hành động khớp nhiều nhiệm vụ cùng lúc** (nướng bánh mì khớp cả nhiệm vụ truyện lẫn việc hằng ngày): mỗi nơi được cộng một lần, không vượt quá `n`, nhiệm vụ đã nhận thưởng không được cộng tiếp. → test ở Task 2 và Task 3.

---

## Bố cục file

| File | Trách nhiệm |
|---|---|
| `src/data.js` | Thêm `STORIES`, `ISLANDERS`, `TALK_ART`, `DAILY`, `talkerName()`; xoá `QUESTS` (Task 2) |
| `src/quests.js` (mới) | Nhiệm vụ truyện, việc vặt, việc hằng ngày: chọn nhiệm vụ đang mở, cộng tiến độ, nhận thưởng, chuyển bản lưu cũ |
| `src/state.js` | `currentQuest`/`claimQuest` chỉ còn lo `TUTORIAL`; xuất `builtKey`, `openObstacle`; bỏ `genQuest` (chuyển sang `quests.js`) |
| `src/talk.js` (mới) | Lớp hội thoại: chân dung lớn, khung chữ, chạm để đi tiếp, nút Bỏ qua |
| `src/assets.js` | Biểu tượng `face:` cho người dân đảo mới, `talk:` cho chân dung lớn |
| `src/game.js`, `src/ui.js`, `src/style.css`, `index.html` | Cột nhiệm vụ, bảng nhiệm vụ, bảng việc hằng ngày, "Chỉ cho bé", bàn tay |
| `public/items/face-kai.webp` | Hình tạm cho ông Kai (tạo ở Task 5) |
| `art-in/danh-sach-ve-theo-to.txt` | Thêm câu lệnh vẽ hình giai đoạn B |
| `tests/quests.test.mjs`, `tests/daily.test.mjs` (mới), `tests/data.test.mjs`, `tests/tutorial.test.mjs`, `tests/build.test.mjs` | Kiểm thử |

### Dạng dữ liệu dùng chung

```js
// src/data.js
// Một mạch truyện: các bước làm lần lượt; bước mở khi S.level >= max(arc.lv, step.lv || 0)
// req.ev là một trong REQ_EVENTS; key tuỳ ev (vật phẩm cho harvest/make/collect, khoá công trình cho build)
export const REQ_EVENTS = ['harvest', 'plant', 'make', 'feed', 'collect', 'deliver', 'clear', 'crate', 'buydecor', 'buytree', 'build', 'beach', 'sail'];
export const STORIES = [
  { id: 've-dao', n: 'Về đảo của ông bà', lv: 1, steps: [
    { who: 'rosa', lv: 1, text: '…', talk: [['rosa', '…'], ['maisie', '…']], outro: [['rosa', '…']],
      reqs: [{ ev: 'harvest', key: 'wheat', n: 6 }, { ev: 'make', key: 'bread', n: 2 }], coins: 30, xp: 8 },
    …] },
  …
];
export const ISLANDERS = [{ id: 'kai', n: 'Ông Kai' }]; // chỉ có chân dung, không đi dạo trên đảo
export const TALK_ART = [];                              // id nhân vật đã có hình nửa người public/items/talk-<id>.webp
export const DAILY = { count: 5, coins: l => 20 + l * 10, gems: 2, energy: 10 };
export const talkerName = id => (PEOPLE.find(p => p.id === id) || ISLANDERS.find(p => p.id === id))?.n || '';
```

```js
// Nhiệm vụ đang mở mà activeQuests() trả về (src/quests.js)
{ id: 've-dao:0' /* hoặc 'chore:7' */, arc: 've-dao' /* null với việc vặt */, title, who, text,
  talk: [[who, line], …], outro: [[who, line], …], reqs: [{ ev, key, n }], p: [0, 2],
  coins, xp, gems, energy, seen: false, done: false }
```

Bản lưu thêm: `S.story = { [arcId]: chỉ số bước tiếp theo }`, `S.qs = [{ id, p: [...], seen, c? }]` (`c` là cả đối tượng việc vặt), `S.choreN` (số đếm để đặt id việc vặt), `S.daily = { day, tasks: [{ ev, key, n, p }], got }`. Các trường cũ `quest`, `gq` bị xoá khi mở; `qprog` và `tut` vẫn dùng cho hướng dẫn.

---

### Task 1: Dữ liệu mạch truyện

**Files:**
- Modify: `src/data.js` (thêm sau `TUTORIAL`)
- Test: `tests/data.test.mjs`

**Interfaces:**
- Produces: `STORIES`, `REQ_EVENTS`, `ISLANDERS`, `TALK_ART`, `DAILY`, `talkerName(id) -> string` như mục "Dạng dữ liệu dùng chung". `QUESTS` vẫn giữ trong task này (Task 2 mới xoá).

Tám mạch truyện, theo thứ tự này. Lời thoại (`text`, `talk`, `outro`) do người làm viết: 2–4 câu ngắn mỗi bước, bối cảnh đảo của ông bà Maisie bị bão làm hư, Maisie về sửa lại. Bà Rosa và bác Tom là người quen của ông bà; ông Kai là người dân đảo sống trong rừng, biết đường trên đảo. Thưởng mỗi bước khoảng `coins: 20 + cấp * 10`, `xp: 6 + cấp * 2`, bước cuối mỗi mạch thêm `gems: 2`.

| id | Tên | arc.lv | Bước (người giao · cấp bước · yêu cầu) |
|---|---|---|---|
| `ve-dao` | Về đảo của ông bà | 1 | rosa · 1 · harvest wheat 6, make bread 2 / maisie · 1 · clear 5, make planks 2 / rosa · 3 · build fac:weaving 1, make basket 1 |
| `dan-ga` | Đàn gà của bác Tom | 1 | tom · 1 · make chickenfeed 2, feed 2 / tom · 1 · collect egg 4 / tom · 2 · deliver 3 |
| `thuyen` | Chiếc thuyền của chú Sam | 2 | sam · 2 · crate 2 / sam · 4 · make rope 2, deliver 2 / sam · 4 · sail 1 |
| `banh-ba` | Bánh của bà Rosa | 3 | rosa · 3 · make cookie 2 / ben · 4 · harvest strawberry 6, make cheese 1 / rosa · 6 · make cake 1 |
| `vuon-lily` | Khu vườn của cô Lily | 3 | lily · 3 · buydecor 1, buytree 1 / lily · 5 · harvest tomato 6, make applejuice 1 / lily · 6 · harvest sunflower 6 |
| `ong-kai` | Ông Kai trong rừng | 4 | kai · 4 · clear 8, beach 3 / kai · 4 · build gate:bridge_w 1 / maisie · 5 · make torch 2, clear 10 |
| `mat-ong` | Mật ong của bác Tom | 7 | tom · 7 · collect honey 2 / tom · 7 · collect mushroom 3 / sam · 8 · crate 6 |
| `tiec-dao` | Bữa tiệc trên đảo | 9 | maisie · 9 · make donut 2 / rosa · 10 · make jam 2, deliver 4 / maisie · 10 · make lemontea 2 |

- [ ] **Step 1: Viết test hỏng trong `tests/data.test.mjs`**

```js
import { STORIES, REQ_EVENTS, ISLANDERS, PEOPLE, CROPS, TREES, PENS, FACTORIES, BUILD, talkerName } from '../src/data.js';
const lvOf = (a, s) => Math.max(a.lv, s.lv || 0);
// Yêu cầu làm được ở cấp L: không kẹt
function doable(r, L) {
  if (r.ev === 'make') return Object.values(FACTORIES).some(F => F.lv <= L && F.rec.some(x => x.out === r.key && x.lv <= L));
  if (r.ev === 'harvest') return (CROPS[r.key]?.lv ?? 99) <= L || Object.values(TREES).some(T => T.yield === r.key && T.lv <= L);
  if (r.ev === 'collect') return Object.values(PENS).some(P => P.prod === r.key && P.lv <= L);
  if (r.ev === 'build') return !!BUILD[r.key];
  return true;
}
test('STORIES: id không trùng, mỗi mạch 3 bước, mỗi bước 1–3 yêu cầu hợp lệ và làm được ở cấp mở', () => {
  assert.equal(new Set(STORIES.map(a => a.id)).size, STORIES.length);
  for (const a of STORIES) {
    assert.equal(a.steps.length, 3, a.id);
    for (const s of a.steps) {
      assert.ok(s.reqs.length >= 1 && s.reqs.length <= 3, a.id);
      assert.ok(talkerName(s.who), s.who);
      for (const [w] of [...s.talk, ...s.outro]) assert.ok(talkerName(w), w);
      for (const r of s.reqs) { assert.ok(REQ_EVENTS.includes(r.ev), r.ev); assert.ok(r.n >= 1); assert.ok(doable(r, lvOf(a, s)), `${a.id} ${r.ev} ${r.key}`); }
    }
  }
});
test('ISLANDERS không trùng id với PEOPLE', () => {
  for (const i of ISLANDERS) assert.ok(!PEOPLE.some(p => p.id === i.id));
});
```
Sửa test "Ben không bị gọi là ông" có sẵn (dòng 36) để quét thêm `text`, `talk`, `outro` của mọi bước trong `STORIES`.

- [ ] **Step 2: Chạy `npm test`** — mong đợi: FAIL vì `STORIES` chưa có.
- [ ] **Step 3: Thêm `REQ_EVENTS`, `STORIES` (đúng bảng trên), `ISLANDERS`, `TALK_ART`, `DAILY`, `talkerName` vào `src/data.js`.** Nếu `doable` báo một bước không làm được thì nâng `lv` của bước đó, không sửa test.
- [ ] **Step 4: Chạy `npm test` và `npm run build`** — mong đợi: PASS.
- [ ] **Step 5: Commit** `Dữ liệu 8 mạch truyện cho nhiệm vụ giai đoạn B`

---

### Task 2: Nhiệm vụ truyện và việc vặt (`src/quests.js`)

**Files:**
- Create: `src/quests.js`, `tests/quests.test.mjs`
- Modify: `src/state.js` (khu "Nhiệm vụ", dòng ~157–215), `src/data.js` (xoá `QUESTS`), `tests/tutorial.test.mjs`, `tests/build.test.mjs`, `tests/data.test.mjs`

**Interfaces:**
- Consumes: `STORIES`, `talkerName` (Task 1); `S`, `on`, `emit`, `addXP`, `pick`, `rnd`, `isOpenCell` như hiện có.
- Produces (từ `src/quests.js`):
  - `activeQuests(): Quest[]`: rỗng khi `inTutorial()`; ngược lại 2–4 nhiệm vụ: tối đa 3 bước truyện (theo thứ tự `STORIES`, mỗi mạch chỉ bước tiếp theo, chỉ khi cấp đủ), rồi thêm việc vặt cho đủ 2.
  - `claimStory(id): Quest | null`: chỉ khi `done`; cộng `coins/xp/gems/energy`, tăng `S.story[arc]` hoặc xoá việc vặt; trả nhiệm vụ để giao diện chạy `outro`.
  - `markSeen(id): void`.
  - `reqLabel(req): string`: ví dụ `'Thu hoạch Lúa mì'`, `'Làm Bánh mì'`, `'Xây Nhà đan lát'`, `'Dọn chướng ngại vật'`, `'Giao đơn hàng'`.
  - `newChore(): Chore`: chuyển nguyên `genQuest()` cũ sang, đổi sang dạng `reqs: [{ ev, key, n }]` và thêm `title: 'Việc vặt'`.
- Produces (từ `src/state.js`): `export function builtKey(key)`, `export const openObstacle`. `currentQuest()` chỉ trả `TUTORIAL[S.tut]` hoặc `null`; `claimQuest()` chỉ cho hướng dẫn; `questEvent()` giữ nguyên.

Quy tắc:
- `quests.js` đăng ký `on('act', (ev, key, n) => …)` một lần khi nạp module. Mỗi nhiệm vụ đang mở có yêu cầu khớp (`ev` bằng nhau, và `key` bằng nhau nếu yêu cầu có `key`) được cộng `n`, chặn ở `req.n`. Trong lúc đang hướng dẫn thì không cộng gì.
- Đầu mỗi lần `activeQuests()`: nếu thiếu `S.story`/`S.qs`/`S.choreN` thì tạo; xoá `S.quest`, `S.gq`; bỏ khỏi `S.qs` mục không còn mở; yêu cầu `build` có `builtKey(key)` thì đặt đủ; việc vặt `clear` chưa xong mà `!openObstacle()` thì thay bằng `newChore()`; `newChore()` không ra `clear` khi `!openObstacle()`.

- [ ] **Step 1: Viết test hỏng trong `tests/quests.test.mjs`**

```js
test('xong hướng dẫn thì có 2–4 nhiệm vụ, có bước đầu của ve-dao và dan-ga', () => {
  fresh({ tut: 999, level: 1 });
  const qs = activeQuests();
  assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.ok(qs.some(q => q.id === 've-dao:0')); assert.ok(qs.some(q => q.id === 'dan-ga:0'));
});
test('đang hướng dẫn thì không có nhiệm vụ truyện, sự kiện không cộng vào truyện', () => {
  fresh(); assert.deepEqual(activeQuests(), []);
  questEvent('harvest', 'wheat', 2); S.tut = 999;
  assert.deepEqual(activeQuests().find(q => q.id === 've-dao:0').p, [0, 0]);
});
test('một sự kiện cộng cho mọi nhiệm vụ khớp, không vượt n; key sai thì không cộng', () => {
  fresh({ tut: 999, level: 1 }); activeQuests();
  questEvent('harvest', 'corn', 5); questEvent('harvest', 'wheat', 4); questEvent('harvest', 'wheat', 4);
  assert.deepEqual(activeQuests().find(q => q.id === 've-dao:0').p, [6, 0]);
});
test('nhận thưởng: chỉ khi xong; cộng xu; sang bước tiếp theo; nhận lại thì null', () => {
  fresh({ tut: 999, level: 1, coins: 0 }); activeQuests();
  assert.equal(claimStory('ve-dao:0'), null);
  questEvent('harvest', 'wheat', 6); questEvent('make', 'bread', 2);
  const q = claimStory('ve-dao:0'); assert.ok(q.coins > 0); assert.equal(S.coins, q.coins);
  assert.equal(S.story['ve-dao'], 1); assert.ok(activeQuests().some(x => x.id === 've-dao:1'));
  assert.equal(claimStory('ve-dao:0'), null);
});
test('bước chưa đủ cấp thì chưa mở; tối đa 3 bước truyện khi nhiều mạch cùng mở', () => {
  fresh({ tut: 999, level: 1 }); S.story = { 've-dao': 2 };
  assert.ok(!activeQuests().some(q => q.id === 've-dao:2'));
  fresh({ tut: 999, level: 15 });
  const qs = activeQuests(); assert.equal(qs.filter(q => q.arc).length, 3); assert.ok(qs.length <= 4);
});
test('yêu cầu build tự xong nếu công trình đã xây từ trước', () => {
  fresh({ tut: 999, level: 3 }); S.story = { 've-dao': 2 };
  put({ k: 'fac', t: 'weaving', r: 0, jobs: [] });
  assert.equal(activeQuests().find(q => q.id === 've-dao:2').p[0], 1);
});
test('bản v1 cấp 15 và bản v2 có chuỗi cũ: 2–4 nhiệm vụ, xoá quest/gq, giữ qprog cho hướng dẫn', () => {
  memStorage({ [KEY]: JSON.stringify(v1Save()) }); load();
  let qs = activeQuests(); assert.ok(qs.length >= 2 && qs.length <= 4);
  assert.equal(S.quest, undefined); assert.equal(S.gq, undefined);
  const v2 = { ...v1Save(), v: 2, tut: 999, quest: 30, gq: { ev: 'clear', n: 3 }, qprog: 1 };
  memStorage({ [KEY]: JSON.stringify(v2) }); load();
  qs = activeQuests(); assert.ok(qs.length >= 2 && qs.length <= 4); assert.equal(S.gq, undefined);
});
```
Chuyển 4 test "dọn dẹp" ở `tests/tutorial.test.mjs` (dòng 193–223) sang file này theo việc vặt: (a) `!openObstacle()` thì 300 lần `newChore()` không ra `clear`; (b) còn vật cản thì có lúc ra `clear`; (c) việc vặt `clear` dở khi hết vật cản thì bị thay, việc vặt `clear` đã xong thì giữ để nhận; (d) nhát chặt cuối cùng (`hitObstacle` làm vật cản biến mất) vẫn được cộng cho việc vặt `clear`.

- [ ] **Step 2: Chạy `npm test`** — mong đợi: FAIL vì chưa có `src/quests.js`.
- [ ] **Step 3: Viết `src/quests.js`, rút gọn khu nhiệm vụ trong `src/state.js` như mục Interfaces, xoá `QUESTS` khỏi `src/data.js`.**
- [ ] **Step 4: Sửa test cũ cho hợp:**
  - `tests/tutorial.test.mjs`: test dòng 102 thành "đi hết hướng dẫn thì `currentQuest()` là null và `activeQuests()` có `ve-dao:0`". Test dòng 157 và 164 thành "bỏ qua hướng dẫn, `activeQuests()` có 2–4 nhiệm vụ". Bỏ các `assert` về `S.quest`.
  - `tests/build.test.mjs` dòng 74, 105: thay nhiệm vụ giả `S.gq` bằng `on('act', (ev, key) => got.push([ev, key]))`, rồi kiểm tra `got` có `['build', 'fac:bakery']` (và `'fac:carpentry'`).
  - `tests/data.test.mjs`: bỏ `QUESTS` khỏi import và khỏi test "Ben".
- [ ] **Step 5: Chạy `npm test` và `npm run build`** — mong đợi: PASS. `grep -rn "QUESTS\|genQuest\|S.gq" src/` không còn kết quả (`src/game.js` và `src/ui.js` còn dùng `currentQuest` cho hướng dẫn, Task 4 sẽ nối vào cột nhiệm vụ).
- [ ] **Step 6: Commit** `Nhiệm vụ truyện nhiều cùng lúc và việc vặt (quests.js)`

---

### Task 3: Việc hằng ngày

**Files:**
- Modify: `src/quests.js`
- Create: `tests/daily.test.mjs`

**Interfaces:**
- Consumes: `newChore()` và cách cộng tiến độ ở Task 2; `DAILY` (Task 1).
- Produces: `daily(): { tasks: [{ ev, key, n, p }], got: boolean, done: boolean }` và `claimDaily(): { coins, gems, energy } | null`.

Quy tắc: `S.daily.day` là `new Date().toDateString()`. Khi `daily()` thấy khác ngày: nếu ngày cũ đã xong hết mà chưa nhận thì cộng quà ngày cũ luôn; rồi tạo `DAILY.count` việc mới, mỗi việc khác nhau cặp `ev`+`key`. Nguồn việc là `newChore()` (lấy `reqs[0]`, `n` bằng khoảng một nửa, ít nhất 1) cộng thêm ba việc luôn làm được: `feed` 2, `plant` 4, `beach` 2. Thử tối đa 200 lần; không đủ thì nhận ít hơn 5 việc. Ở cấp 1 vẫn phải đủ 5 việc. Sự kiện `act` cộng vào việc hằng ngày cả khi đang hướng dẫn. Quà: `coins: DAILY.coins(S.level)`, `gems: DAILY.gems`, `energy: DAILY.energy`.

- [ ] **Step 1: Viết test hỏng trong `tests/daily.test.mjs`**

```js
test('mỗi ngày 5 việc khác nhau, kể cả ở cấp 1; không có loot hay buyanimal', () => {
  for (const level of [1, 3, 12]) {
    fresh({ tut: 999, level }); const d = daily();
    assert.equal(d.tasks.length, 5, 'cấp ' + level);
    assert.equal(new Set(d.tasks.map(t => t.ev + ':' + (t.key || ''))).size, 5);
    assert.ok(d.tasks.every(t => !['loot', 'buyanimal'].includes(t.ev)));
  }
});
test('làm xong hết mới nhận được, nhận một lần', () => {
  fresh({ tut: 999, level: 3, coins: 0 }); const d = daily();
  assert.equal(claimDaily(), null);
  for (const t of d.tasks) questEvent(t.ev, t.key, t.n);
  assert.ok(daily().done); const r = claimDaily(); assert.equal(S.coins, r.coins); assert.equal(claimDaily(), null);
});
test('qua ngày mới: việc mới; xong mà chưa nhận thì quà ngày cũ được cộng luôn', () => {
  fresh({ tut: 999, level: 3, coins: 0 }); const d = daily();
  for (const t of d.tasks) questEvent(t.ev, t.key, t.n);
  S.daily.day = 'Mon Jan 01 2001';
  const d2 = daily(); assert.ok(S.coins > 0); assert.equal(d2.got, false); assert.ok(d2.tasks.every(t => t.p === 0));
});
test('một sự kiện cộng cho cả nhiệm vụ truyện và việc hằng ngày', () => {
  fresh({ tut: 999, level: 1 }); activeQuests();
  S.daily = { day: new Date().toDateString(), tasks: [{ ev: 'harvest', key: 'wheat', n: 3, p: 0 }], got: false };
  questEvent('harvest', 'wheat', 2);
  assert.equal(daily().tasks[0].p, 2); assert.equal(activeQuests().find(q => q.id === 've-dao:0').p[0], 2);
});
```

- [ ] **Step 2: Chạy `npm test`** — mong đợi: FAIL.
- [ ] **Step 3: Viết `daily()`, `claimDaily()` trong `src/quests.js`.**
- [ ] **Step 4: Chạy `npm test` và `npm run build`** — mong đợi: PASS.
- [ ] **Step 5: Commit** `Việc hằng ngày: 5 việc nhỏ, xong hết có quà, không đồng hồ`

---

### Task 4: Cột nhiệm vụ bên trái và bảng nhiệm vụ

**Files:**
- Modify: `index.html` (khối `.tl`, `.tr`), `src/style.css`, `src/ui.js` (`renderHUD`), `src/game.js` (`openQuest`, `claimquest`, bong bóng trên đầu Maisie dòng ~1076)

**Interfaces:**
- Consumes: `activeQuests`, `claimStory`, `markSeen`, `reqLabel`, `daily` (Task 2–3); `currentQuest`, `claimQuest` cho hướng dẫn.
- Produces: `openQuest(id)` trong `src/game.js` mở bảng của nhiệm vụ `id` (với hướng dẫn thì `id = 'tut'`). Nút cột mang `data-q="<id>"`. Bảng nhiệm vụ có nút `data-act="questgo" data-q data-r="<chỉ số yêu cầu>"` (Task 6 dùng).

- [ ] **Step 1: Thay `#questBtn` bằng `<div class="qcol" id="questCol"></div>` trong `.tl`; chuyển `#btnEvent`, `#btnColl` sang `.tr` (dưới hai viên xu và kim cương, canh phải).**
- [ ] **Step 2: `renderHUD()` vẽ lại `#questCol` khi danh sách đổi.** Khi đang hướng dẫn: một nút cho bước hướng dẫn. Sau đó: một nút cho mỗi nhiệm vụ của `activeQuests()`, rồi một nút việc hằng ngày (☀️ cùng số `x/5`; ẩn khi `got`). Mỗi nút tròn 54 px có chân dung `ICONS['face:' + who]` và huy hiệu `!` khi `!seen`, `✓` khi `done`. Ở `@media (max-height: 520px)` cột nằm ngang bên phải hộp cấp, nút 44 px.
- [ ] **Step 3: `openQuest(id)` mở bảng 'quest'.** Bảng có tên mạch (hoặc "Việc vặt"), chân dung và lời `text` của người giao, rồi mỗi yêu cầu một dòng: biểu tượng vật phẩm, `reqLabel`, thanh `p/n`, nút **"Chỉ cho bé"** (yêu cầu chưa xong). Cuối bảng là nút "Nhận thưởng!" khi `done`. Mở bảng thì `markSeen(id)`. `claimquest` gọi `claimStory` (hoặc `claimQuest` khi đang hướng dẫn), bay xu/sao như hiện nay, rồi chạy `outro` qua `talk()` ở Task 5. Trước khi có Task 5 thì bỏ qua bước `outro`.
- [ ] **Step 4: Bong bóng trên đầu Maisie:** `✓` khi có nhiệm vụ `done`; `!` khi có nhiệm vụ chưa `seen`.
- [ ] **Step 5: Kiểm tra trên preview.**
  - Ở 375×812, 812×375 và 1280×800: ván mới đang hướng dẫn thì cột có 1 nút. Bản lưu cấp 15 (`v1Save()` từ tests) thì cột có 2–4 nút cộng nút ☀️.
  - Đoạn kiểm chồng nút ở Global Constraints trả `[]`.
  - Console không có lỗi.
- [ ] **Step 6: `npm test`, `npm run build`, commit** `Cột nhiệm vụ bên trái và bảng nhiệm vụ nhiều yêu cầu`

---

### Task 5: Hội thoại và người dân đảo mới

**Files:**
- Create: `src/talk.js`, `public/items/face-kai.webp`
- Modify: `src/assets.js` (khu `case 'face'`), `src/game.js`, `src/style.css`, `index.html`, `art-in/danh-sach-ve-theo-to.txt`

**Interfaces:**
- Consumes: `talkerName`, `ISLANDERS`, `TALK_ART` (Task 1); `openQuest` (Task 4).
- Produces: `talk(lines: [who, text][], done?: () => void): void` trong `src/talk.js`.

- [ ] **Step 1: `talk()` dựng lớp `#talk` phủ toàn màn hình.** Chân dung lớn ở góc dưới trái là `ICONS['talk:' + who]`; chưa có thì dùng `ICONS['face:' + who]` cỡ 160 px. Tên nhân vật in trên khung chữ ở đáy màn hình. Chạm bất kỳ đâu thì sang câu sau; hết câu thì gọi `done`. Nút **"Bỏ qua"** ở góc trên phải kết thúc ngay. Chữ tối thiểu 18 px; khung chữ không tràn ở 375 px.
- [ ] **Step 2: `src/assets.js`.** `face:<id>` của người trong `ISLANDERS` trả `ITEM_DIR + 'face-' + id + '.webp'`. `talk:<id>` trả `ITEM_DIR + 'talk-' + id + '.webp'` khi `TALK_ART.includes(id)`, ngược lại `null`.
- [ ] **Step 3: Tạo hình tạm cho ông Kai** bằng cách xoay màu chân dung chú Sam:
  `python3 -c "from PIL import Image; im=Image.open('public/items/face-sam.webp').convert('RGBA'); h,s,v=im.convert('RGB').convert('HSV').split(); h=h.point(lambda x:(x+40)%256); o=Image.merge('HSV',(h,s,v)).convert('RGBA'); o.putalpha(im.getchannel('A')); o.save('public/items/face-kai.webp',quality=90)"`
- [ ] **Step 4: Nối vào game.** Mở bảng của nhiệm vụ truyện chưa `seen` thì chạy `talk(q.talk)` trước rồi mới hiện bảng. Nhận thưởng thì chạy `talk(q.outro)`.
- [ ] **Step 5: Thêm mục "GIAI ĐOẠN B" vào cuối `art-in/danh-sach-ve-theo-to.txt`.** Gồm một tờ lưới 4×2 chân dung nửa người (maisie, tom, lily, ben, rosa, sam, kai, và một ô trống) theo đúng luật tờ ở đầu file. Lệnh tách: `python3 scripts/split.py art-in/to-20.png talk-maisie,talk-tom,talk-lily,talk-ben,talk-rosa,talk-sam,talk-kai 512 222 icons`. Thêm một câu lệnh vẽ khuôn mặt tròn của ông Kai cùng kiểu tờ `ic-moi-11`. Ông Kai là người già da rám nắng, tóc bạc buộc sau gáy, áo vải thô màu đất, vòng cổ bằng vỏ sò, hiền và vui.
- [ ] **Step 6: Kiểm tra trên preview ở 375×812.** Mở nhiệm vụ mới thì có hội thoại; chạm sang câu sau; "Bỏ qua" đóng ngay; mở lại nhiệm vụ đó thì không hội thoại nữa. Console không có lỗi.
- [ ] **Step 7: `npm test`, `npm run build`, commit** `Hội thoại có chân dung, thêm ông Kai (hình tạm), câu lệnh vẽ hình giai đoạn B`

---

### Task 6: Nút "Chỉ cho bé"

**Files:**
- Modify: `src/game.js` (`questTarget`, `questgo`, `positionHand`, dòng ~1150–1200)

**Interfaces:**
- Consumes: nút `data-act="questgo" data-q data-r` (Task 4).
- Produces: `targetFor(req: {ev, key, n}, left: number)`. Thân hàm là `switch` hiện có trong `questTarget`, đổi `q` thành `req` và `q.n - S.qprog` thành `left`.

- [ ] **Step 1: Tách `targetFor(req, left)` ra khỏi `questTarget()`.** `questTarget()` dùng `targetFor` cho bước hướng dẫn như cũ. Bỏ điều kiện `S.quest >= 10`.
- [ ] **Step 2: Thêm biến `guide = { qid, ri } | null` trong `src/game.js`.**
  - `questgo` đặt `guide`, đóng bảng, rồi bay camera tới vật của `targetFor` (`flyCamTo`).
  - Khi không hướng dẫn mà có `guide`, bàn tay chỉ theo `guide`.
  - `guide` về `null` khi yêu cầu đó xong, khi nhiệm vụ không còn mở, hoặc khi bé mở bảng nhiệm vụ khác.
- [ ] **Step 3: Kiểm tra trên preview ở 375×812 với bản lưu cấp 5 đã xong hướng dẫn.** Với từng loại yêu cầu `harvest`, `make`, `build`, `clear`, `deliver`, `crate`: bấm "Chỉ cho bé" thì camera bay tới đúng chỗ và bàn tay chỉ vào đó. Làm xong yêu cầu thì bàn tay biến mất.
- [ ] **Step 4: `npm test`, `npm run build`, commit** `Nút "Chỉ cho bé": camera bay tới chỗ cần làm, bàn tay chỉ đường`

---

### Task 7: Bảng việc hằng ngày và kiểm tra tổng thể

**Files:**
- Modify: `src/game.js`, `src/style.css`

**Interfaces:**
- Consumes: `daily`, `claimDaily` (Task 3); nút ☀️ trong cột (Task 4).

- [ ] **Step 1: Chạm nút ☀️ mở bảng 'daily'.** Bảng có tiêu đề "Việc hôm nay", 5 dòng (biểu tượng, `reqLabel`, thanh `p/n`, dấu ✓ khi xong) và hộp quà. Nút "Mở quà!" chỉ hiện khi xong hết; bấm thì bay xu, kim cương, năng lượng như nhận thưởng nhiệm vụ. Bảng không có đồng hồ hay chữ "còn … giờ".
- [ ] **Step 2: Kiểm tra tổng thể trên preview.**
  - Ván mới đi hết 10 bước hướng dẫn, rồi cột hiện `ve-dao` và `dan-ga`.
  - Mã sao lưu v1 cấp 15 nhập vào Cài đặt chạy được, cấp, kho và công trình giữ nguyên.
  - Đoạn kiểm chồng nút trả `[]` ở cả ba khổ màn.
  - Console không có lỗi.
- [ ] **Step 3: `npm test`, `npm run build`, commit** `Bảng việc hằng ngày; kiểm tra giai đoạn B`
