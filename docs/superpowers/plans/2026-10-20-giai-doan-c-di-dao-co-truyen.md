# Giai đoạn C: Đi đảo có truyện — Kế hoạch làm

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Thêm hải đồ với 5 đảo Phiêu lưu cũ và 3 đảo có truyện mới. Đảo truyện có sương mù lùi dần, người dân giao chuỗi nhiệm vụ, thú dẫn đường, công trình đổ nát góp vật liệu để sửa, phần thưởng lâu dài mang về đảo nhà, và chơi lại được để nhặt vật liệu.

**Architecture:**
- Đảo truyện chạy trên cùng bộ máy đảo Phiêu lưu hiện có (`src/adventure.js`: lưới ô, chặt bằng năng lượng, rương, đích).
- Phần sinh bản đồ được tách ra module thuần `src/advmap.js`. Logic đảo truyện (sương, rơi vật liệu, góp sửa, nhiệm vụ đảo, gợi ý đường, phần thưởng, ao sen) nằm trong module thuần mới `src/isles.js`. Cả hai được kiểm thử bằng `node --test`.
- Phần hiển thị nằm trong `src/adventure.js`, `src/game.js`, `src/style.css`. Dữ liệu khai báo trong `src/data.js`.

**Tech Stack:** JavaScript ES modules thuần, Three.js 0.170, Vite 5, `node --test`.

**Spec:** [docs/superpowers/specs/2026-10-16-huong-taonga-design.md](../specs/2026-10-16-huong-taonga-design.md) (mục 3, 4, 5, 7C, 8, 9, 11).

## Global Constraints

- Chữ trong game bằng tiếng Việt, câu ngắn, dễ hiểu với trẻ nhỏ. Chú thích code bằng tiếng Việt như code hiện có.
- Không thư viện mới. Không sao chép tên, nhân vật, cốt truyện của Taonga.
- Giữ nguyên 5 đảo Phiêu lưu cũ cùng tiến độ đã lưu (`S.adv[id]`: `open`, `chests`, `done`, `runs`) và các con vật thưởng. Không đổi cách chơi của đảo cũ.
- Không mất tiến độ: khóa lưu vẫn `maisies-farm-v1`, vẫn `v: 2`, chỉ thêm trường. Bản lưu cũ không có trường mới phải mở được.
- Không cân nặng khoang thuyền, không lương thực (spec mục 9.2).
- Không làm bé kẹt:
  - Vật liệu để sửa công trình trên đảo truyện phải lấy được từ chính vật cản của đảo đó.
  - Số vật cản rơi ra mỗi loại vật liệu phải đủ cho tổng yêu cầu.
  - Nhiệm vụ đảo chỉ dùng sự kiện xảy ra trên đảo đó.
- Vật liệu nhặt ở đảo đi thẳng vào Kho nhà (không tính sức chứa). Công trình trên đảo lấy vật liệu từ Kho. Như vậy "dùng ngay tại đó, phần dư về kho" mà không cần khoang riêng.
- Hình chưa có thì dùng hình tạm (sprite có sẵn gần nghĩa); code không chờ hình.
- Màn chính 375×812 dọc; 667×375, 812×375, 1280×800 vẫn chơi được. Ở cả bốn khổ, đoạn kiểm chồng nút sau phải trả `[]` (chạy cả trên đảo nhà lẫn khi đang ở đảo):
  ```js
  [...document.querySelectorAll('#hud button:not([hidden]), #advHud button')].map(b => [b, b.getBoundingClientRect()]).filter(([, r]) => r.width)
    .flatMap(([a, r], i, L) => L.slice(i + 1).filter(([, s]) => r.left < s.right && s.left < r.right && r.top < s.bottom && s.top < r.bottom).map(([b]) => a.id + '×' + b.id))
  ```
- Mỗi việc kết thúc bằng `npm test` và `npm run build` chạy được, rồi commit tiếng Việt.

## Review Focus

1. **Bản lưu có đảo cũ đang dở hoặc đã xong** (`S.adv.shell = { open: [...], chests: [...], done: true, runs: 2 }`): sau khi tách `advmap.js`, bản đồ sinh ra y hệt (cùng ô, cùng rương, cùng phần thưởng ẩn), tiến độ cũ giữ nguyên. → test ở Task 1.
2. **Hết năng lượng giữa đảo truyện, hoặc đủ vật liệu nhưng công trình nằm sau sương**: gợi ý đường vẫn chỉ được ô kế tiếp; công trình không bị khóa vĩnh viễn; về nhà rồi quay lại thì tiến độ còn nguyên. → test ở Task 2.
3. **Chơi lại đảo truyện đã xong**: vật cản mọc lại để nhặt vật liệu, nhưng sương không phủ lại, nhiệm vụ đảo, công trình đã sửa và phần thưởng lâu dài không bị làm lại hay nhận lần hai. → test ở Task 2.
4. **Ao sen chạm liên tục, hoặc đổi giờ máy lùi về trước**: chỉ nhận năng lượng khi đủ thời gian chờ; giờ lùi không cho nhận thêm và không làm hỏng mốc. → test ở Task 5.
5. **Đất trống trên đảo nhà đã kín khi nhận phần thưởng**: phần thưởng không mất (vào `S.store` để đặt sau). → test ở Task 5.

---

## Bố cục file

| File | Trách nhiệm |
|---|---|
| `src/advmap.js` (mới) | `rng`, `buildMap(A)`: sinh lưới đảo cố định theo seed (chuyển nguyên từ `adventure.js`), thêm ô `npc` và `ruin` cho đảo truyện |
| `src/isles.js` (mới) | Logic đảo truyện: tiến độ, sương, vật liệu rơi, góp sửa, nhiệm vụ đảo, gợi ý đường, phần thưởng, chơi lại, mở khóa hải đồ, ao sen |
| `src/data.js` | 3 đảo truyện trong `ADVENTURES`, 3 chủ đề mới trong `ADV_THEMES`, 3 người dân trong `ISLANDERS`, đồ trang trí thưởng trong `DECOR`, `LOTUS` |
| `src/adventure.js` | Vẽ sương, người dân, công trình, thú dẫn đường; chạm; thẻ nhiệm vụ đảo trong `#advHud`; hải đồ |
| `src/entities.js` | `artOrModel` nhận tên dạng `'art:<sprite>'` |
| `src/game.js`, `src/style.css` | Ao sen trên đảo nhà; thuyền và nút Phiêu lưu mở hải đồ |
| `public/items/face-{nina,otto,mia}.webp` | Hình tạm (Task 6) |
| `art-in/danh-sach-ve-theo-to.txt` | Câu lệnh vẽ hình giai đoạn C (Task 6) |
| `tests/advmap.test.mjs`, `tests/isles.test.mjs` (mới), `tests/data.test.mjs` | Kiểm thử |

### Dạng dữ liệu dùng chung

```js
// src/data.js — một đảo truyện là một mục ADVENTURES có thêm `story`
{ id: 'lang-chai', n: 'Làng Chài Gió', lv: 3, w: 10, h: 14, seed: 101, theme: 'village', chests: 2,
  goal: { n: 'Chú mèo nghịch ngợm', model: 'art:cat', pet: 'kitten' },
  intro: '…', reward: { coins: 250, gems: 5, xp: 70 },
  story: {
    who: 'nina',                       // người dân đảo (ISLANDERS)
    guide: 'dog',                      // sprite thú dẫn đường
    ruin: { n: 'Sạp cá', sprite: 'ruin_boat', fixed: 'market', stages: [{ wood: 4, palmleaf: 4 }, { stone: 4, wood: 4 }] },
    steps: [ { who: 'nina', text: '…', talk: [[who, line], …], req: { ev: 'aclear', n: 6 }, coins: 40, xp: 10 }, … ],
    prize: 'kitten',                   // DECOR mang về đảo nhà (một lần)
  } }
// ADV_THEMES.<theme>.obstacles: [model, fit, năng lượng, tỉ lệ, vật liệu rơi | null]  (phần tử thứ 5 mới; đảo cũ không có)
// Sự kiện nhiệm vụ đảo: 'aclear' (dọn 1 ô), 'achest' (mở rương), 'aruin' (sửa xong công trình), 'agoal' (tới đích)
```

Bản lưu đảo truyện thêm vào `S.adv[id]`: `q` (bước nhiệm vụ), `qp` (tiến độ bước), `ruin: { stage, got: {} }`, `prize` (đã trao chưa), `fog: false` sau lần xong đầu. Đảo cũ không có các trường này.

---

### Task 1: Tách bản đồ đảo và dữ liệu 3 đảo truyện

**Files:**
- Create: `src/advmap.js`, `tests/advmap.test.mjs`
- Modify: `src/adventure.js` (bỏ `rng`/`buildMap`, nhập từ `advmap.js`), `src/data.js`, `src/entities.js` (`artOrModel`), `tests/data.test.mjs`

**Interfaces:**
- Produces: `buildMap(A) -> { A, T, cells, idx, cx }` (giữ nguyên dạng cũ). Với đảo truyện có thêm một ô `k: 'npc'` sát lối vào và một ô `k: 'ruin'` ở giữa đảo, chiếm 2×2 nếu đặt vừa, không thì 1 ô. Mỗi ô `ob` của đảo truyện có `c.mat` lấy từ phần tử thứ 5 của chủ đề.
- Produces: `artOrModel('art:cat', …)` vẽ thẳng sprite `cat`.

Ba đảo (spec 7C). Lời thoại do người làm viết: 2–3 câu mỗi bước, câu ngắn.

| id | Tên | lv | chủ đề | kích thước | người dân · thú dẫn | công trình (sprite tạm → sau khi sửa) | giai đoạn sửa | bước nhiệm vụ | quà mang về |
|---|---|---|---|---|---|---|---|---|---|
| `lang-chai` | Làng Chài Gió | 3 | `village` | 10×14, 2 rương | `nina` 'Cô Nina' · `dog` | Sạp cá (`ruin_boat` → `market`) | {wood 4, palmleaf 4}, {stone 4, wood 4} | aclear 6 / aruin 1 / achest 2 / agoal 1 (bắt chú mèo nghịch) | `kitten` 'Mèo con nghịch ngợm' (sprite `cat`) |
| `hai-dang` | Đảo Đá Hải Đăng | 6 | `rock` | 11×15, 3 rương | `otto` 'Ông Otto' · `seagull` (sprite `gull1`) | Hải đăng (`stairs_old_broken` → `lighthouse`) | {stone 6, clay 3}, {wood 5, stone 5}, {clay 4, wood 4} | aclear 8 / aruin 1 / achest 3 / agoal 1 (thắp lại đèn) | `minilight` 'Hải đăng nhỏ' (sprite `lighthouse`) |
| `dao-buom` | Đảo Bướm | 9 | `flower` | 12×16, 3 rương | `mia` 'Bé Mia' · `bunny` | Vườn bướm (`ruin_house` → `fountain`) | {bamboo 6, palmleaf 6}, {wood 6, liana 2}, {bamboo 6, wood 6} | aclear 10 / aruin 1 / achest 3 / agoal 1 (tìm ao sen) | `lotuspond` 'Ao sen' (sprite `fountain`, sinh năng lượng — Task 5) |

Chủ đề mới (vật cản dùng sprite có sẵn qua `'art:'`; mỗi dòng `[model, fit, năng lượng, tỉ lệ, vật liệu]`):
- `village` (nền cát): `art:bush` → palmleaf; `art:crate` → wood; `art:palm` → wood; `art:rock` → stone; `art:barrel` → null.
- `rock` (nền xám xanh): `art:rock` → stone; `art:bigrock` → stone (năng lượng 2); `art:stump` → wood; `art:claymound` → clay; `art:grasstuft` → palmleaf.
- `flower` (nền xanh tươi): `art:bush` → palmleaf; `art:bamboo` → bamboo; `art:jungletree` → wood (năng lượng 2); `art:flower_pur` → null; `art:logs` → wood. Riêng `art:jungletree` rơi thêm `liana` 1 với xác suất 30%, tính trong `isles.js`.

`DECOR` thêm `kitten`, `minilight`, `lotuspond`. Đây là đồ không bán trong cửa hàng, gắn cờ giống cách `crab`/`parrot`/`penguin` đang được loại khỏi cửa hàng. `ISLANDERS` thêm `nina`, `otto`, `mia`.

- [ ] **Step 1: Viết test hỏng.**
  - `tests/advmap.test.mjs`, test "buildMap của 5 đảo cũ không đổi": chụp `JSON.stringify(buildMap(A).cells)` của 5 đảo cũ TRƯỚC khi chuyển code (chạy một lần bằng hàm cũ, dán chuỗi băm SHA-1 vào test). Sau khi chuyển, băm phải giống hệt.
  - Test "đảo truyện có đúng 1 ô npc kề ô open, ô ruin không nằm trên lối vào hay đích, mọi ô ob có mat thuộc chủ đề".
  - `tests/data.test.mjs`, test "đủ vật liệu":
    - Với mỗi đảo truyện, mỗi loại vật liệu, số ô `ob` rơi ra loại đó trên bản đồ (theo seed) ≥ tổng yêu cầu loại đó qua mọi giai đoạn. Riêng `liana`: kỳ vọng 30% × số `jungletree` ≥ 2 × yêu cầu.
    - Mỗi bước có `req.ev` thuộc `['aclear','achest','aruin','agoal']`.
    - `aclear` n không vượt số ô `ob`; `achest` n không vượt `chests`.
    - `prize` có trong `DECOR`; `story.who` có trong `ISLANDERS`.
- [ ] **Step 2: Chạy `npm test`** — FAIL.
- [ ] **Step 3: Tạo `src/advmap.js`, chuyển `rng`/`buildMap` sang; thêm dữ liệu; `artOrModel` nhận `'art:'`.**
- [ ] **Step 4: `npm test`, `npm run build`** — PASS.
- [ ] **Step 5: Commit** `Tách bản đồ đảo; dữ liệu 3 đảo có truyện`

---

### Task 2: Logic đảo truyện (`src/isles.js`)

**Files:**
- Create: `src/isles.js`, `tests/isles.test.mjs`

**Interfaces:**
- Consumes: `buildMap`, các mục `ADVENTURES` có `story` (Task 1); `S`, `add`, `take`, `have`, `addXP`, `emit` từ `src/state.js`.
- Produces:
  - `isleState(A)`: trả `S.adv[A.id]`, tạo các trường thiếu.
  - `fogged(map, p) -> Set<idx>`: ô (không phải nước) cách mọi ô đã mở hoặc ô `open` hơn `FOG_R = 2` theo khoảng cách Manhattan. Rỗng nếu đảo không có `story` hoặc `p.fog === false`.
  - `lootMat(c, roll = Math.random) -> { [vật liệu]: số }`: rơi `c.mat` 1, cộng `liana` 1 khi `c.t` là jungletree và `roll() < 0.3`.
  - `ruinNeed(A, p) -> { [k]: { need, got } } | null`: `null` khi đã sửa xong. `ruinGive(A, p, k) -> số đã góp` lấy từ Kho. `ruinAdvance(A, p) -> 'stage' | 'done' | null`; `'done'` thì phát `isleEvent(A, 'aruin')`.
  - `isleQuest(A) -> bước hiện tại | null`, `isleEvent(A, ev, n = 1)`, `isleClaim(A) -> bước | null` (cộng thưởng, sang bước sau).
  - `nextHint(map, p) -> idx | null`: ô vật cản (hoặc rương / công trình / người dân) mà bé nên chạm tiếp, chọn theo đích của bước nhiệm vụ. aclear: vật cản gần nhất chạm được. achest: rương gần nhất. aruin: công trình nếu Kho đủ vật liệu cho giai đoạn hiện tại; còn thiếu thì vật cản gần nhất rơi ra thứ đang thiếu. agoal: đích. Nếu đích chưa chạm được thì lấy vật cản đầu tiên trên đường ngắn nhất (BFS qua ô không phải nước, ô đã mở tốn 0, vật cản tốn 1).
  - `isleFinish(A) -> { prize?: string }`: trao `prize` một lần (`S.pendingDecor` như thú đảo cũ), đặt `p.prize = true`, `p.fog = false`.
  - `isleReplayReset(A)`: dùng khi vào lại đảo đã xong. Mở lại vật cản và rương (như đảo cũ); giữ `q`, `ruin`, `prize`, `fog`.
  - `chartLocked(A) -> string | null`: lời gợi ý mở khóa, ví dụ `'Mở ở cấp 6'`, hoặc `null`.

- [ ] **Step 1: Viết test hỏng trong `tests/isles.test.mjs`**

```js
test('sương: ô xa hơn 2 ô so với vùng đã mở bị che; mở thêm thì sương lùi; đảo cũ không có sương', …);
test('lootMat: vật cản rơi đúng vật liệu; jungletree có thể rơi thêm dây leo (roll giả)', …);
test('sửa công trình: góp từ Kho, không góp quá cần, đủ thì sang giai đoạn, xong thì aruin', …);
test('nhiệm vụ đảo: sự kiện chỉ cộng cho đúng đảo, chặn ở n, nhận thưởng một lần rồi sang bước sau', …);
test('nextHint: chỉ ô chạm được; đích sau vật cản thì chỉ vật cản đầu tiên trên đường; bước aruin thiếu đá thì chỉ vật cản rơi đá; hết vật cản thì null', …);
test('xong đảo: trao quà một lần; chơi lại: vật cản mọc lại, sương không phủ lại, nhiệm vụ và công trình giữ nguyên, quà không trao lần hai', …);
test('bản lưu cũ S.adv.shell { open, chests, done, runs } mở ra giữ nguyên, isleState không thêm trường cho đảo cũ', …);
test('chartLocked: cấp thấp thì có lời gợi ý, đủ cấp thì null', …);
```
Mỗi test dùng `fresh()` từ `tests/helpers.mjs` và các giá trị ở Task 1.

- [ ] **Step 2: `npm test`** — FAIL.
- [ ] **Step 3: Viết `src/isles.js`.**
- [ ] **Step 4: `npm test`, `npm run build`** — PASS.
- [ ] **Step 5: Commit** `Logic đảo có truyện: sương, vật liệu, sửa công trình, nhiệm vụ đảo, gợi ý đường`

---

### Task 3: Đảo truyện trên màn hình

**Files:**
- Modify: `src/adventure.js`, `src/style.css`

**Interfaces:**
- Consumes: `src/isles.js` (Task 2); `talk()` từ `src/talk.js`; `flyItem` từ `src/ui.js`.

Hành vi:
- **Sương:** mỗi ô trong `fogged()` phủ một tấm mây trắng mềm (dùng `textures/cloud.webp` như mây đảo nhà), vật trên ô đó ẩn. Chạm vào sương: toast "Dọn đường tới gần để sương tan nhé!". Sau mỗi nhát chặt tính lại sương; ô vừa lộ ra có hiệu ứng mờ dần.
- **Vật liệu:** chặt vật cản trên đảo truyện thì rơi `lootMat`, bay biểu tượng về nút Về nhà, rồi `add()` vào Kho. Phần rơi ngẫu nhiên cũ (xu, nông sản, năng lượng, kim cương) vẫn giữ.
- **Người dân:** ô `npc` vẽ sprite `<id>` nếu đã có (`hasSprite`). Chưa có thì dùng hình tạm là sprite nhân vật sẵn có, nhuộm màu khác qua `material.color`: nina ← `lily`, otto ← `tom`, mia ← `maisie`. Chạm vào thì chạy `talk(step.talk)` của bước hiện tại, rồi mở bảng nhiệm vụ đảo.
- **Công trình:** ô `ruin` vẽ `story.ruin.sprite`; khi sửa xong thì vẽ `fixed`. Chạm vào mở bảng góp vật liệu: mỗi vật liệu có biểu tượng, `có/cần`, nút "Góp", cùng mẫu với bảng công trường ở đảo nhà.
- **Thú dẫn đường:** sprite `story.guide` đứng cạnh Maisie và đi theo bé. Khi `nextHint` có ô, trên đầu thú có bong bóng "!". Chạm vào thú thì camera bay tới ô gợi ý và ô đó nảy lên.
- **`#advHud` của đảo truyện:** thêm thẻ nhiệm vụ đảo gồm chân dung người dân, lời nhiệm vụ ngắn, thanh `qp/n`, nút "Nhận thưởng!" khi xong. Đảo cũ giữ HUD như cũ.
- Sự kiện: chặt → `isleEvent(A,'aclear')`; mở rương → `'achest'`; tới đích → `'agoal'` rồi `isleFinish`. Với đảo truyện, tới đích chỉ được khi đã sửa xong công trình. Chưa sửa thì toast "Sửa xong <tên công trình> trước nhé!".

- [ ] **Step 1: Làm theo mô tả trên.**
- [ ] **Step 2: Kiểm tra trên preview ở 375×812.**
  - Vào `lang-chai`: thấy sương, người dân, công trình, thú dẫn đường.
  - Chặt thì sương lùi, vật liệu vào Kho.
  - Góp đủ thì công trình đổi hình.
  - Nhận thưởng nhiệm vụ đảo; thú dẫn đường chỉ đúng.
  - Tới đích thì quà về đảo nhà.
  - Ra rồi vào lại: tiến độ còn.
  - Một đảo cũ (`shell`) chơi như trước.
  - Đoạn kiểm chồng nút trả `[]`. Console không lỗi.
- [ ] **Step 3: `npm test`, `npm run build`, commit** `Đảo có truyện: sương, người dân, công trình, thú dẫn đường`

---

### Task 4: Hải đồ

**Files:**
- Modify: `src/adventure.js` (`openAdventures`), `src/style.css`

Hành vi:
- Nút Phiêu lưu và chạm vào thuyền ở đảo nhà (đã gọi `goSail` → `openAdventures`) mở **hải đồ** thay cho lưới thẻ.
- Hải đồ chiếm gần cả màn hình. Nền biển là gradient xanh, có vài gợn sóng và la bàn vẽ bằng CSS (hình tạm tới khi có `public/items/seachart.webp`; có file đó thì dùng làm nền).
- 8 đảo đặt ở vị trí cố định trên hải đồ, khai báo trong `ADVENTURES[].chart = { x, y }` (phần trăm). Chỗ của đảo nhà và bến thuyền ở dưới giữa.
- Mỗi đảo là một nút tròn có biểu tượng (đảo cũ: thú hoặc rương như hiện nay; đảo truyện: khuôn mặt người dân), tên ngắn và thanh tiến độ.
  - Đảo khóa thì mờ, có ổ khóa và lời `chartLocked(A)`.
  - Đảo xong có dấu ✓.
- Chạm vào một đảo mở một thẻ nhỏ: tên, lời giới thiệu `intro`, phần trăm khám phá, nút "Ra khơi" / "Đi tiếp" / "Chơi lại" như thẻ cũ. Đảo khóa chỉ hiện lời gợi ý.
- Ở 375×812 cả 8 đảo nằm gọn, không chồng nhau, chữ ≥ 13 px.

- [ ] **Step 1: Làm theo mô tả.**
- [ ] **Step 2: Kiểm tra trên preview.**
  - Ở 375×812, 667×375 và 1280×800: đủ 8 đảo, khóa và mở đúng theo cấp (thử cấp 2, 6, 12), thẻ đảo mở được.
  - Đảo cũ đang dở vẫn hiện đúng phần trăm.
  - Chạm thuyền trên đảo nhà mở hải đồ.
  - Console không lỗi.
- [ ] **Step 3: `npm test`, `npm run build`, commit** `Hải đồ: 5 đảo phiêu lưu cũ và 3 đảo có truyện`

---

### Task 5: Phần thưởng lâu dài trên đảo nhà (ao sen sinh năng lượng)

**Files:**
- Modify: `src/isles.js`, `src/data.js` (`LOTUS = { every: 4 * 3600, energy: 5 }`), `src/game.js`, `tests/isles.test.mjs`

**Interfaces:**
- Produces:
  - `lotusReady(o, t) -> boolean`: đúng khi `t - (o.at ?? 0) >= LOTUS.every * 1000`. Nếu `o.at > t` (giờ máy lùi) thì đặt `o.at = t` và trả false.
  - `lotusCollect(o, t) -> number`: số năng lượng nhận (0 nếu chưa tới giờ); nhận xong thì `o.at = t`.
  - `placePrize(t)`: đặt đồ thưởng lên đảo nhà. Hết chỗ trống thì cộng vào `S.store[t]` (kho đồ trang trí đã cất) và toast "Đã cất vào kho đồ trang trí".

Hành vi:
- Ao sen đặt trên đảo nhà. Khi `lotusReady` thì có bong bóng ⚡ trên ao; chạm thì bay năng lượng về thanh năng lượng (`S.energy += …`, vượt giới hạn cũng được, như các nguồn khác).
- Chưa tới giờ thì chạm hiện "Sen đang nở, lát nữa quay lại nhé!" (không hiện đồng hồ).
- `kitten` và `minilight` là đồ trang trí thường.

- [ ] **Step 1: Viết test hỏng.**
  - "ao sen: chưa đủ 4 giờ thì 0; đủ thì 5 và đặt lại mốc; giờ lùi thì không nhận và mốc về hiện tại".
  - "placePrize: còn chỗ thì đặt lên đảo; kín chỗ thì vào S.store, không mất".
- [ ] **Step 2: `npm test`** — FAIL.
- [ ] **Step 3: Viết code; dùng `placePrize` ở `placePendingPets` cho cả quà đảo truyện.**
- [ ] **Step 4: Kiểm tra trên preview.** Ao sen hiện bong bóng khi đủ giờ (giả thời gian bằng cách sửa `o.at`); chạm thì nhận năng lượng; chạm lại thì hiện lời chờ.
- [ ] **Step 5: `npm test`, `npm run build`, commit** `Phần thưởng đảo truyện về đảo nhà; ao sen sinh năng lượng`

---

### Task 6: Hình tạm cho người dân đảo và câu lệnh vẽ hình giai đoạn C

**Files:**
- Create: `public/items/face-nina.webp`, `public/items/face-otto.webp`, `public/items/face-mia.webp`
- Modify: `art-in/danh-sach-ve-theo-to.txt` (file nằm ngoài git, sửa trên đĩa)

- [ ] **Step 1: Tạo hình tạm bằng cách xoay màu khuôn mặt có sẵn** (cùng lệnh Python đã dùng cho ông Kai, đổi file nguồn và độ xoay): nina ← `face-lily.webp` (+60), otto ← `face-tom.webp` (+90), mia ← `face-maisie.webp` (+120).
- [ ] **Step 2: Thêm mục "GIAI ĐOẠN C" vào cuối `art-in/danh-sach-ve-theo-to.txt`** theo đúng luật tờ ở đầu file:
  - **Tờ 21** (lưới 4×2): ba người dân nina, otto, mia, vẽ toàn thân; ba thú dẫn đường dog, gull, bunny, vẽ lại cho to hơn; hai ô trống. Kèm lệnh tách.
  - **Tờ 22** (lưới 4×2): sạp cá hỏng, sạp cá đã sửa, hải đăng hỏng, hải đăng đã sửa, vườn bướm hỏng, vườn bướm đã sửa, mèo con, ao sen. Kèm lệnh tách.
  - **Tờ 23**: chân dung nửa người của nina, otto, mia (lưới 3×1).
  - **Tờ 24**: khuôn mặt tròn của nina, otto, mia (lưới 3×1).
  - **Một hình hải đồ**: bản đồ biển vẽ tay nhìn từ trên xuống, vài đảo nhỏ, la bàn, không chữ. Lưu `seachart.png`.
  - Tả người dân: Cô Nina là cô bán cá vui tính, khăn trùm tóc xanh, tạp dề, giỏ cá. Ông Otto là ông giữ hải đăng, râu xám, mũ len, áo khoác vàng đi mưa. Bé Mia là cô bé thích bướm, váy hồng, vợt bắt bướm.
- [ ] **Step 3: `npm test`, `npm run build`, commit** `Hình tạm người dân đảo; câu lệnh vẽ hình giai đoạn C`

---

### Task 7: Kiểm tra tổng thể

- [ ] **Step 1: Chơi trên preview ở 375×812.**
  - Ván cấp 3: mở hải đồ, đi `lang-chai` từ đầu tới cuối (đi theo thú dẫn đường, sửa sạp cá, bắt mèo). Mèo con về đảo nhà.
  - Ván cấp 9: đi `dao-buom` tới khi ao sen về đảo nhà; ao sen cho năng lượng.
  - Một bản lưu có tiến độ ở đảo cũ: hải đồ hiện đúng, đảo cũ chơi như trước.
- [ ] **Step 2:** Đoạn kiểm chồng nút trả `[]` ở bốn khổ màn; console không lỗi; `npm test`, `npm run build` chạy được.
- [ ] **Step 3: Commit** (nếu có sửa) `Kiểm tra giai đoạn C`
