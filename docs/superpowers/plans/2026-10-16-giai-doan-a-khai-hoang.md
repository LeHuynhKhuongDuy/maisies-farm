# Giai đoạn A: Khai hoang và xây bằng vật liệu — Kế hoạch làm

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Biến Maisie's Farm thành game khai hoang kiểu Taonga: đảo rộng có rừng dưới mây, chặt vật cản nhiều nhát ra vật liệu, xưởng chế biến vật liệu, công trình xây theo giai đoạn bằng vật liệu, ván mới bắt đầu bằng sửa nhà đổ nát.

**Architecture:** Logic thuần (không đụng Three.js/DOM) đặt trong các module mới `src/island.js`, `src/clearing.js`, `src/build.js`, `src/beach.js`, `src/helper.js` và được kiểm thử bằng `node --test`. Dữ liệu cân bằng khai báo trong `src/data.js` như hiện nay. Phần hiển thị và chạm sửa trong `src/game.js`, `src/entities.js`, `src/world.js`, `src/ui.js`, `src/style.css`. Bản lưu nâng lên `v: 2`, bản `v: 1` được chuyển đổi khi mở.

**Tech Stack:** JavaScript ES modules thuần, Three.js 0.170, Vite 5, Node 26 (`node --test`) cho kiểm thử logic.

**Spec:** [docs/superpowers/specs/2026-10-16-huong-taonga-design.md](../specs/2026-10-16-huong-taonga-design.md) (mục 7A, 8, 9, 11).

## Global Constraints

- Chữ trong game bằng tiếng Việt, câu ngắn, dễ hiểu với trẻ nhỏ. Chú thích code bằng tiếng Việt như code hiện có.
- Không thư viện mới. Chỉ thêm script `"test": "node --test tests/"` vào `package.json`.
- Bản lưu vẫn ở `localStorage` khóa `maisies-farm-v1`; giá trị mới có `v: 2`. `load()` và `importSave()` nhận cả `v: 1` (chuyển đổi) và `v: 2`.
- Không mất tiến độ: bản `v: 1` giữ nguyên cấp, xu, kim cương, kho, mọi công trình, tiến độ nhiệm vụ, phiêu lưu, sưu tập.
- Vật liệu (`ITEMS[k].mat` là 1 hoặc 2) không tính vào sức chứa Kho và không giới hạn.
- Không chỗ nào làm bé kẹt: vật liệu cho giai đoạn của mọi công trình phải lấy được tại cấp mở công trình đó.
- Hình chưa có thì dùng hình tạm (hình sprite có sẵn gần nghĩa, hoặc khối màu); code không chờ hình.
- Màn chính 375×812 dọc; không nút nào tràn màn hình.
- Mỗi việc kết thúc bằng `npm test` và `npm run build` chạy được, rồi commit tiếng Việt.

## Review Focus

1. **Bản lưu thật của bé (v1, cấp cao, vùng lõi kín chỗ)** mở ra: mọi vật đứng đúng chỗ cũ trên màn hình, kho và cấp giữ nguyên; nhập mã sao lưu v1 cũng chạy. → test ở Task 1.
2. **Hết năng lượng khi các vùng rừng còn đóng**: vẫn còn ít nhất một nguồn năng lượng (bãi biển, món ăn, hồi theo thời gian) và vật cản mọc lại để có vật liệu. → test ở Task 3 (mọc lại) và Task 8 (bãi biển).
3. **Kho nông sản đầy** mà vẫn chặt cây: vật liệu vẫn vào kho. → test ở Task 2.
4. **Đặt hoặc kéo công trình vào ô đang bị mây che / vắt qua ranh giới vùng**: bị từ chối như chỗ vướng. → test ở Task 6.
5. **Giữ ngón tay chặt liên tục tới khi năng lượng về 0, hoặc chạm dồn dập khi Maisie đang đi**: dừng gọn, năng lượng không âm, không chặt hai lần cùng một nhát. → test ở Task 2 (không âm) và kiểm tra tay ở Task 3.

---

## Bố cục file

| File | Trách nhiệm |
|---|---|
| `src/data.js` | Thêm `CORE`, `OFF`, `ZONES`, vật liệu trong `ITEMS`, `OBSTACLES` mới, xưởng mới trong `FACTORIES`, `BUILD` (yêu cầu theo giai đoạn), `TUTORIAL`, `BEACH`, `HELPERS`, `energyMax()` |
| `src/island.js` (mới) | Vùng đảo, ô bị mây, sinh rừng, chuyển bản lưu v1 → v2 |
| `src/clearing.js` (mới) | Chặt vật cản: trừ năng lượng, rơi đồ, rương, mọc lại |
| `src/build.js` (mới) | Công trường: yêu cầu giai đoạn hiện tại, góp vật liệu, hoàn thành |
| `src/beach.js` (mới) | Sao biển, vỏ sò, cua trên bãi: xuất hiện, nhặt |
| `src/helper.js` (mới) | Người đốn gỗ tự gom vật liệu |
| `src/state.js` | `load`/`importSave`/`freshState` dùng bản v2; `barnUsed` bỏ vật liệu; `isFree` chặn vùng đóng; nhiệm vụ hướng dẫn |
| `src/world.js`, `src/neighbors.js`, `src/ambient.js`, `src/visitors.js`, `src/entities.js` | Đảo 40×40, mây, công trường, rương, thanh máu, Maisie đi tới chỗ làm |
| `src/game.js`, `src/ui.js`, `src/style.css`, `index.html` | Chạm, giữ để chặt, bảng góp vật liệu, thẻ Vật liệu trong Kho, năng lượng ở giữa trên |
| `tests/*.test.mjs` (mới), `tests/helpers.mjs` (mới) | Kiểm thử logic bằng `node --test` |

`tests/helpers.mjs` (viết ở Task 1, các task sau bổ sung) cung cấp:
- `memStorage(initial)`: gán `globalThis.localStorage` bằng một đối tượng có `getItem/setItem` lưu trong bộ nhớ.
- `v1Save()`: một bản lưu v1 mẫu (cấp 15, kho đầy, có nhà, kho, 10 ruộng, 4 chuồng, 7 nhà máy, đồ trang trí, vật cản, `adv` có tiến độ).
- `fresh(over = {})`: `memStorage({})`, `resetGame()`, rồi `Object.assign(S, over)`.
- `put(obj)`: gán `id` mới, đặt vào ô trống đang mở bằng `findFree`, đẩy vào `S.objs`, trả `obj`.
- `obstacle(t)`: `put({ k:'obstacle', t, hp: OBSTACLES[t].hp })`.
- `fillBarnToCap()`: `S.inv.wheat = barnCap() - barnUsed() + (S.inv.wheat || 0)`.

---

### Task 1: Đảo 40×40 và chuyển bản lưu v1 → v2

**Files:**
- Modify: `package.json` (thêm script test), `src/data.js:3` (GRID), `src/state.js` (`freshState`, `load`, `importSave`, `ensureStarterDecor`), `src/world.js` (bounds, slab), `src/entities.js:455-490` (bến, cầu câu, Maisie), `src/ambient.js:59,94`, `src/visitors.js:13`, `src/neighbors.js:61-62`, `src/game.js:495-496`
- Create: `src/island.js`, `tests/helpers.mjs`, `tests/island.test.mjs`

**Interfaces:**
- Produces (data.js): `GRID = 40`, `CORE = 26`, `OFF = 14` (vùng lõi chiếm ô `x,z ∈ [14, 39]`, tức góc Đông Nam; bờ Nam và Đông giữ nguyên nên bến tàu, cầu câu không đổi chỗ so với biển), `ZONES = [{ id:'core', n:'Vùng lõi', rect:[14,14,26,26], open:true }, { id:'west', n:'Rừng phía Tây', rect:[0,14,14,26], gate:'bridge_w', lv:4 }, { id:'north', n:'Rừng phía Bắc', rect:[14,0,26,14], gate:'bridge_n', lv:7 }, { id:'old', n:'Rừng già', rect:[0,0,14,14], gate:'stairs_old', lv:11 }]` (`rect = [x, z, w, d]`).
- Produces (island.js): `zoneAt(x, z) -> zoneId | null`, `isOpenCell(x, z) -> boolean` (dùng `S.zones`), `genJungle(zoneId, seed) -> obj[]` (vật cản cho một vùng, mật độ ~55%, chừa đường đi 1 ô ở giữa; chọn loại từ `JUNGLE_MIX[zoneId]` trong data.js — ở Task 1 chỉ gồm 5 loại cũ, Task 2 thêm loại mới và cho `bigtree`/`bigrock` vào `north`, `old`), `migrateV1(raw) -> stateV2`.
- Produces (state): `S.v === 2`, `S.zones = { core:true, west:false, north:false, old:false }`, `S.tut` (chỉ số nhiệm vụ hướng dẫn; bản v1 chuyển sang gán `Infinity` thì lưu là `999`).

- [ ] **Step 1: Thêm `"test": "node --test tests/"` vào `package.json`, viết `tests/helpers.mjs` (`memStorage`, `v1Save`).**

- [ ] **Step 2: Viết test chuyển bản lưu**

```js
// tests/island.test.mjs
test('migrateV1 dời mọi vật vào vùng lõi', () => {
  const v1 = v1Save(); const s = migrateV1(structuredClone(v1));
  assert.equal(s.v, 2);
  v1.objs.forEach((o, i) => { assert.equal(s.objs[i].x, o.x + 14); assert.equal(s.objs[i].z, o.z + 14); });
  assert.deepEqual(s.inv, { ...v1.inv, wood: 20, stone: 10, palmleaf: 10 }); // quà vật liệu khởi đầu
  assert.equal(s.level, v1.level); assert.equal(s.coins, v1.coins); assert.equal(s.quest, v1.quest);
  assert.deepEqual(s.adv, v1.adv);
  assert.equal(s.tut, 999);
});
test('migrateV1 thêm rừng ở 3 vùng ngoài và đóng chúng', () => {
  const s = migrateV1(v1Save());
  assert.deepEqual(s.zones, { core: true, west: false, north: false, old: false });
  for (const z of ['west', 'north', 'old']) assert.ok(s.objs.filter(o => o.k === 'obstacle' && zoneAt(o.x, o.z) === z).length > 40);
});
test('load() nhận bản v1 từ localStorage và lưu lại thành v2', () => {
  memStorage({ 'maisies-farm-v1': JSON.stringify(v1Save()) });
  const s = load(); assert.equal(s.v, 2);
  assert.equal(JSON.parse(localStorage.getItem('maisies-farm-v1')).v, 2);
});
test('importSave nhận mã v1', () => { memStorage({}); importSave(btoa(unescape(encodeURIComponent(JSON.stringify(v1Save()))))); assert.equal(S.v, 2); });
test('zoneAt', () => { assert.equal(zoneAt(20, 20), 'core'); assert.equal(zoneAt(3, 20), 'west'); assert.equal(zoneAt(20, 3), 'north'); assert.equal(zoneAt(3, 3), 'old'); assert.equal(zoneAt(40, 0), null); });
```

- [ ] **Step 3: `npm test` → FAIL (`migrateV1` chưa có).**

- [ ] **Step 4: Viết `src/island.js` và sửa `state.js`.**
  - `migrateV1`: dời `x,z` của mọi vật thêm `OFF`; vật cản cũ giữ nguyên loại (5 loại cũ vẫn có trong `OBSTACLES` ở Task 2) và chưa cần `hp` (Task 2 coi `hp` thiếu là đầy máu); thêm `wood:20, stone:10, palmleaf:10`; `zones` như trên; thêm rừng 3 vùng ngoài bằng `genJungle`; `tut = 999`; `boatFixed = true`; `v = 2`.
  - `load()`: `raw.v === 1` → `migrateV1(raw)` rồi `save()`; `raw.v === 2` dùng luôn; còn lại `freshState()`. `importSave` tương tự.
  - `freshState()`: mọi tọa độ cũ cộng `OFF` (viết hàm `c(x, z)` nhỏ trong state.js); `STARTER_DECOR` cộng `OFF` khi dùng; `zones` như trên; rừng trong vùng lõi giữ cách sinh cũ (dời theo `OFF`) và thêm rừng 3 vùng ngoài. (Phần nhà đổ nát làm ở Task 7.)
  - `ensureStarterDecor`: cộng `OFF` khi đọc `STARTER_DECOR`.

- [ ] **Step 5: Sửa hiển thị cho đảo 40×40.**
  - `world.js`: `W.bounds` tính từ `GRID` (bao cả đảo); đất cỏ và cát phủ `GRID`.
  - Bến tàu, cầu câu, biển hiệu, khách (`entities.js`, `ambient.js`, `visitors.js`): tọa độ ô cũ kiểu `(17, GRID - 1)` và `(GRID - 1, 9)` → `(17 + OFF, GRID - 1)` và `(GRID - 1, 9 + OFF)`; Maisie đứng ở `(12 + OFF, 8 + OFF)` và đi dạo trong vùng lõi (`7..19 + OFF`, `3..16 + OFF`).
  - `neighbors.js`: nông trại hàng xóm vẫn là đảo 26×26: slab dùng `CORE`, và nhóm vật của hàng xóm dời `-OFF` ô trên cả hai trục cho khớp slab (`cellToWorld` giờ tính theo `GRID`).
  - Camera lúc mở game nhìn vào vùng lõi như trước.

- [ ] **Step 6: `npm test` → PASS; `npm run build` chạy được.**

- [ ] **Step 7: Kiểm tra tay trên preview `maisies-farm` ở 375×812:** ván mới trông như cũ trong vùng lõi, có thêm rừng ở phía Tây và Bắc; nhập mã của một bản lưu v1 (lấy `v1Save()` mã hóa bằng `btoa`) thì vật nằm đúng chỗ cũ, bến tàu và cầu câu đúng mép biển; hàng xóm hiển thị như trước.

- [ ] **Step 8: Commit** `git commit -m "Giai đoạn A1: đảo 40x40, chuyển bản lưu v1 sang v2"`

---

### Task 2: Vật liệu và chặt vật cản nhiều nhát (logic)

**Files:**
- Modify: `src/data.js` (ITEMS, OBSTACLES, bread/cookie energy), `src/state.js` (`barnUsed`)
- Create: `src/clearing.js`, `tests/clearing.test.mjs`

**Interfaces:**
- Produces (data.js) — `ITEMS` thêm, `mat: 1` là vật liệu thô, `mat: 2` là bậc 2 (đều có `v` để bán):
  `wood 'Gỗ'`, `stone 'Đá'`, `bamboo 'Tre'`, `palmleaf 'Lá cọ'`, `clay 'Đất sét'`, `liana 'Dây leo'` (mat 1);
  `planks 'Ván gỗ'`, `rack 'Giá gỗ'`, `firewood 'Củi'`, `basket 'Giỏ đan'`, `reedmat 'Chiếu'`, `rope 'Dây thừng'`, `torch 'Đuốc'` (mat 2).
  `ITEMS.bread.energy = 4`, `ITEMS.cookie.energy = 5` (A10).
- Produces — `OBSTACLES[t] = { n, hp, drop: { item: [min, max] }, rare?: { item: p }, chest: p, regrow?: true }`:

| t | n | hp | drop mỗi nhát | rare | chest | regrow |
|---|---|---|---|---|---|---|
| grass | Bụi cỏ | 2 | palmleaf 1 | – | 0 | ✓ |
| bush | Bụi rậm | 2 | palmleaf 1 | – | 0.05 | ✓ |
| bamboo | Bụi tre | 3 | bamboo 1 | – | 0.05 | ✓ |
| stump | Gốc cây | 3 | wood 1 | – | 0.1 | |
| logs | Đống gỗ | 3 | wood 1–2 | – | 0.1 | |
| rock | Tảng đá | 4 | stone 1 | – | 0.15 | |
| claymound | Gò đất sét | 4 | clay 1 | – | 0.15 | |
| tree | Cây rừng | 6 | wood 1 | liana 0.25 | 0.3 | |
| bigtree | Cây cổ thụ | 12 | wood 1–2 | liana 0.3 | 0.6 | |
| bigrock | Tảng đá lớn | 12 | stone 1–2 | – | 0.6 | |

  Cập nhật `JUNGLE_MIX` (Task 1): vùng lõi và `west` dùng các loại không có `big`; `north` và `old` thêm `bigtree`, `bigrock`.
- Produces (clearing.js):
  - `hitObstacle(o, rand = Math.random) -> null | { drops: {item:n}, xp: number, done: boolean, chest: null | { energy, coins, mats: {item:n} } }` — `null` nếu `S.energy < 1`. Nếu `o.hp` chưa có thì gán `OBSTACLES[o.t].hp` trước. Trừ 1 năng lượng, giảm `o.hp`, cộng đồ vào kho bằng `add()`, xp 1 mỗi nhát và `+2` khi xong; xong thì xóa `o` khỏi `S.objs`.
  - `rollChest(rand) -> { energy: 3..8, coins: 5..20, mats: {một vật liệu thô: 2..4} }`.
- Produces (state.js): `barnUsed()` chỉ cộng các món không có `ITEMS[k].mat`.

- [ ] **Step 1: Viết test**

```js
test('mỗi nhát trừ 1 năng lượng và rơi vật liệu', () => {
  fresh({ energy: 5 }); const o = obstacle('tree');
  const r = hitObstacle(o, () => 0.99); // không rơi hiếm, không rương
  assert.equal(S.energy, 4); assert.equal(o.hp, 5); assert.equal(have('wood'), 1); assert.equal(r.done, false);
});
test('nhát cuối xóa vật cản, cộng xp thưởng, có thể ra rương', () => {
  fresh({ energy: 9 }); const o = obstacle('stump'); o.hp = 1;
  const r = hitObstacle(o, () => 0.0); // rand thấp → có rương
  assert.equal(r.done, true); assert.ok(!S.objs.includes(o)); assert.ok(r.chest);
});
test('hết năng lượng thì không chặt, năng lượng không âm', () => {
  fresh({ energy: 0 }); const o = obstacle('rock');
  assert.equal(hitObstacle(o), null); assert.equal(S.energy, 0); assert.equal(o.hp, 4);
});
test('kho nông sản đầy vẫn nhận vật liệu', () => {
  fresh({ energy: 3 }); fillBarnToCap(); const o = obstacle('bush');
  hitObstacle(o, () => 0.99); assert.equal(have('palmleaf'), 1); assert.equal(barnRoom(), 0);
});
test('barnUsed bỏ qua vật liệu', () => { fresh(); S.inv = { wheat: 3, wood: 50, planks: 9 }; assert.equal(barnUsed(), 3); });
```
(`fresh(over)` và `obstacle(t)` là hàm nhỏ trong file test: tạo `S` qua `resetGame()` với `memStorage({})` rồi gán đè; `obstacle(t)` đẩy `{id, k:'obstacle', t, hp: OBSTACLES[t].hp, x, z}` vào `S.objs`. `fillBarnToCap()` đặt `S.inv.wheat = barnCap()`.)

- [ ] **Step 2: `npm test` → FAIL.**
- [ ] **Step 3: Thêm dữ liệu vào `data.js`, viết `src/clearing.js`, sửa `barnUsed`.** Biểu tượng vật liệu: tạm dùng sprite gần nghĩa (`logs` cho gỗ/ván/củi, `rock` cho đá, `haysack` cho lá cọ/chiếu/giỏ, `bucket` cho đất sét, `fishingrod` cho dây/dây leo, `campfire` cho đuốc, `crate` cho giá gỗ) qua bảng `ITEM_ART_FALLBACK` trong `src/assets.js` cho tới khi có hình vẽ.
- [ ] **Step 4: `npm test` → PASS; `npm run build` chạy được.**
- [ ] **Step 5: Commit** `"Giai đoạn A2: vật liệu và chặt vật cản nhiều nhát"`

---

### Task 3: Chặt trên màn hình, Maisie đi tới, giữ để chặt, mọc lại

**Files:**
- Modify: `src/game.js` (`clearObstacle` → luồng mới, `onLongPress`, tick), `src/entities.js` (`obstacleView`, `updateSpecials`, thêm `walkTo`), `src/input.js` (giữ ngón), `src/ui.js` (dòng cộng dồn), `src/style.css`
- Modify: `src/clearing.js` (thêm `regrowTick`), `tests/clearing.test.mjs`

**Interfaces:**
- Consumes: `hitObstacle`, `rollChest` (Task 2), `isOpenCell`, `zoneAt` (Task 1).
- Produces (entities.js `obstacleView`): hình tạm cho loại mới tới khi có hình vẽ — `grass` → sprite `grasstuft`, `bamboo` → `hedge` tô xanh vàng, `claymound` → `rock` tô nâu cam, `bigtree` → `leafytree` phóng 1,4 lần, `bigrock` → `rock` phóng 1,4 lần.
- Produces (entities.js): `walkTo(x, z, onArrive)` — Maisie đi tới ô kề gần nhất còn trống của ô `(x, z)` rồi gọi `onArrive()`; gọi mới thì hủy việc cũ chưa tới. `setHp(oid, frac)` — thanh máu nhỏ trên vật cản (ẩn khi `frac` là 1).
- Produces (clearing.js): `regrowTick(t, rand = Math.random) -> obj | null` — mỗi `REGROW_EVERY = 180` giây, nếu số vật cản `regrow` trong các vùng đang mở ít hơn `REGROW_MIN = 8`, sinh một `grass|bush|bamboo` ở một ô trống, đang mở, không kề công trình nào; lưu mốc ở `S.regrowAt`.
- Produces (ui.js): `gainLine(drops)` — gom các lần rơi trong 1,2 giây thành một dòng "+3 Gỗ +1 Dây leo" ở góc dưới phải.
- Produces: vật cản trong vùng đóng (`!isOpenCell`) không chặt được: toast "Chỗ này còn mây che. Mở đường tới đây trước nhé!".
- Rương: khi `hitObstacle` trả `chest`, đặt vật `{k:'loot', t:'chest', x, z, chest}` vào ô vừa dọn (`footprint` 1×1, view dùng sprite `chest`); chạm thì nhận thưởng (`flyItem` từng món), xóa vật, `questEvent('loot')`.

- [ ] **Step 1: Test `regrowTick`**

```js
test('mọc lại khi vùng mở còn ít bụi', () => { fresh(); S.objs = S.objs.filter(o => o.k !== 'obstacle'); S.regrowAt = 0;
  const o = regrowTick(200_000, () => 0.5); assert.ok(o && ['grass','bush','bamboo'].includes(o.t)); assert.ok(isOpenCell(o.x, o.z)); });
test('không mọc khi chưa tới giờ hoặc đã đủ', () => { fresh(); S.regrowAt = 1e12; assert.equal(regrowTick(0), null); });
test('không mọc vào vùng đóng', () => { fresh(); S.regrowAt = 0; for (let i = 0; i < 50; i++) { const o = regrowTick(200_000 * (i + 1)); if (o) assert.equal(zoneAt(o.x, o.z), 'core'); } });
```

- [ ] **Step 2: `npm test` → FAIL; Step 3: viết `regrowTick`; Step 4: `npm test` → PASS.**
- [ ] **Step 5: Nối vào màn hình.**
  - Chạm vật cản: nếu `S.energy < 1` → `openEnergy()`. Nếu không, `walkTo(o.x, o.z, () => chop(o))`; `chop` gọi `hitObstacle`, rung hình, cập nhật `setHp`, gọi `gainLine`, âm thanh `chop`; xong thì hiệu ứng thu nhỏ cũ, `questEvent('clear')`, đặt rương nếu có.
  - Giữ ngón tay trên vật cản (đã tới nơi): chặt lặp lại mỗi 0,35 giây cho tới khi nhấc tay, vật cản hết máu, hoặc hết năng lượng (khi đó mở `openEnergy()` một lần). `onLongPress` hiện dùng để di chuyển công trình: với vật cản thì dùng cho chặt liên tục, các vật khác giữ như cũ.
  - Gọi `regrowTick(now())` trong `tick()`; có vật mới thì `addView`.
  - Nhiệm vụ cũ `ev:'clear'` vẫn đếm theo vật cản dọn xong.
- [ ] **Step 6: Kiểm tra tay:** chạm một cây rừng → Maisie đi tới, mỗi chạm một nhát, thanh máu giảm, dòng "+1 Gỗ" cộng dồn; giữ ngón chặt liên tục và dừng đúng khi hết năng lượng (năng lượng hiển thị 0, không âm); chạm dồn dập vào hai vật khác nhau khi Maisie đang đi → chỉ việc sau cùng được làm; rương hiện ra, chạm nhận quà.
- [ ] **Step 7: `npm run build`; Commit** `"Giai đoạn A3: chặt trên màn hình, giữ để chặt, mọc lại"`

---

### Task 4: Hai xưởng vật liệu

**Files:** Modify `src/data.js` (FACTORIES, BUILDING_MODELS, SPRITE_ART tạm), `src/entities.js` (`facView` dùng sprite tạm), `tests/data.test.mjs` (mới)

**Interfaces:**
- Produces — `FACTORIES` thêm (cùng cấu trúc `rec` hiện có, `t` tính bằng giây):
  - `carpentry: { n:'Xưởng mộc', lv:1, cost:40, rec:[ {out:'planks', qty:2, in:{wood:3}, t:30, lv:1}, {out:'firewood', qty:2, in:{wood:1}, t:20, lv:1}, {out:'rack', in:{wood:2, liana:1}, t:45, lv:2} ] }`
  - `weaving: { n:'Nhà đan lát', lv:3, cost:120, rec:[ {out:'basket', in:{palmleaf:3}, t:30, lv:3}, {out:'reedmat', in:{palmleaf:2, bamboo:2}, t:45, lv:3}, {out:'rope', in:{liana:1, palmleaf:2}, t:60, lv:4}, {out:'torch', in:{firewood:1, palmleaf:1}, t:40, lv:4} ] }`
  - Sprite tạm: xưởng mộc dùng `barn` thu nhỏ, nhà đan lát dùng `market` thu nhỏ, cho tới khi có hình.
- `genOrder`, `newShip`, `genQuest` **không** chọn vật liệu (`ITEMS[k].mat`) làm món đơn hàng — sửa `producible()` lọc `mat`.

- [ ] **Step 1: Test** `tests/data.test.mjs`: mọi `in` và `out` của mọi công thức có trong `ITEMS`; mọi vật liệu bậc 2 có ít nhất một công thức làm ra; `producible()` không chứa món `mat` (dùng `fresh()` với đủ xưởng).
- [ ] **Step 2: FAIL → Step 3: thêm dữ liệu, lọc `producible` → Step 4: PASS, build.**
- [ ] **Step 5: Kiểm tra tay:** mua Xưởng mộc ở thẻ Nhà máy, làm ván từ gỗ đã chặt; đơn hàng và tàu hàng không đòi vật liệu.
- [ ] **Step 6: Commit** `"Giai đoạn A4: xưởng mộc và nhà đan lát"`

---

### Task 5: Xây theo giai đoạn (công trường)

**Files:**
- Create: `src/build.js`, `tests/build.test.mjs`
- Modify: `src/data.js` (`BUILD`), `src/game.js` (`buy`, `placeConfirm`, `tapObject`, bảng góp), `src/entities.js` (view công trường), `src/style.css`

**Interfaces:**
- Produces (data.js) — `BUILD[key]` là mảng giai đoạn, mỗi giai đoạn `{ item: n }`; `key` là `'<k>:<t>'`:

| key | giai đoạn 1 | giai đoạn 2 | giai đoạn 3 |
|---|---|---|---|
| fac:carpentry | wood 6, stone 3 | – | – |
| fac:feedmill | wood 6, palmleaf 4 | – | – |
| fac:bakery | wood 8, stone 6 | planks 4, palmleaf 6 | – |
| fac:weaving | wood 10, bamboo 6 | planks 6, palmleaf 8 | – |
| fac:dairy | planks 6, stone 10 | reedmat 3, firewood 6 | – |
| fac:juicebar | planks 8, bamboo 8 | basket 4, rope 2 | – |
| fac:kitchen | stone 14, planks 8 | firewood 8, clay 6 | torch 3, reedmat 3 |
| fac:seafood, fac:sweets, fac:jammaker | planks 10, stone 10 | rope 3, basket 4 | torch 4, reedmat 4 |
| pen:coop | wood 6, palmleaf 6 | – | – |
| pen:cowpen | wood 12, planks 4 | rope 2, palmleaf 10 | – |
| pen:pigpen | wood 12, stone 8 | planks 6, rope 3 | – |
| pen:beehive | planks 6, basket 3 | – | – |
| gate:bridge_w | wood 10, bamboo 8 | planks 6, rope 2 | – |
| gate:bridge_n | planks 12, rope 4 | stone 20, torch 3 | – |
| gate:stairs_old | stone 30, planks 15 | rope 6, torch 6 | reedmat 6, rack 4 |
| ruin:house | wood 4, palmleaf 4 | – | – |
| ruin:bakery | wood 4, stone 3 | – | – |
| ruin:boat | planks 3, palmleaf 5 | – | – |

  (Tên nhà máy khác trong `FACTORIES` không có ở bảng thì dùng giai đoạn của `fac:seafood`.) Kiểm tra cấp: mọi vật liệu của giai đoạn 1 lấy được ở cấp mở công trình (xem test).
- Produces (build.js):
  - `startSite(o)` — gán `o.site = { stage: 0, got: {} }` nếu `BUILD[keyOf(o)]` có.
  - `keyOf(o) -> string`.
  - `siteReq(o) -> { item: { need, got } }` của giai đoạn hiện tại.
  - `contribute(o, item) -> number` — chuyển `min(have(item), need - got)` từ kho vào `o.site.got`, trả số đã góp.
  - `tryAdvance(o) -> 'none' | 'stage' | 'done'` — đủ thì sang giai đoạn sau (xp `10 * (stage+1)`), giai đoạn cuối xong thì `delete o.site`, `questEvent('build', keyOf(o))`.
  - `isBuilt(o) -> boolean` — `!o.site`.
- Vật có `o.site` không hoạt động (nhà máy không nhận công thức, chuồng không nhận thú, chạm thì mở bảng góp). Ruộng, cây, đồ trang trí, thú không qua công trường. Vật cũ không có `site` là đã xây xong.
- Mua công trình (`buy` → `startPlace` → `placeConfirm`) vẫn trả xu như cũ; khi xác nhận đặt thì `startSite(obj)`. Mua thú cho chuồng đang xây: toast "Chuồng đang xây, góp đủ vật liệu trước nhé!".
- Bảng góp (modal `'site'`): tên công trình, "Giai đoạn 1/2", mỗi món một ô có biểu tượng, `got/need`, nút "Góp" (mờ khi không có món đó, kèm gợi ý "Chặt cây để có gỗ" / "Làm ở Xưởng mộc"); khi xong giai đoạn: lấp lánh (`confetti()` nhỏ), xp bay lên.
- View công trường: hình giàn giáo tạm (khung gỗ dựng bằng `box` + sprite `crate`, `logs` bên cạnh), nhỏ hơn công trình thật; xong thì `rebuildView`.

- [ ] **Step 1: Test**

```js
test('góp đủ giai đoạn thì sang giai đoạn sau, xong thì hết site', () => {
  fresh(); S.inv = { wood: 20, stone: 20, planks: 10, palmleaf: 10 };
  const o = put({ k:'fac', t:'bakery', jobs: [] }); startSite(o);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  assert.equal(tryAdvance(o), 'stage'); assert.equal(o.site.stage, 1);
  for (const k of Object.keys(siteReq(o))) contribute(o, k);
  assert.equal(tryAdvance(o), 'done'); assert.equal(o.site, undefined);
});
test('góp thiếu thì chỉ chuyển phần đang có, không âm kho', () => {
  fresh(); S.inv = { wood: 3 }; const o = put({ k:'fac', t:'carpentry', jobs: [] }); startSite(o);
  assert.equal(contribute(o, 'wood'), 3); assert.equal(have('wood'), 0); assert.equal(tryAdvance(o), 'none');
});
test('không góp quá số cần', () => { fresh(); S.inv = { wood: 50 }; const o = put({ k:'fac', t:'carpentry', jobs: [] }); startSite(o);
  assert.equal(contribute(o, 'wood'), 6); assert.equal(have('wood'), 44); });
test('vật liệu giai đoạn 1 lấy được ở cấp mở công trình', () => {
  for (const [key, stages] of Object.entries(BUILD)) { const lv = unlockLevel(key);
    for (const item of Object.keys(stages[0])) assert.ok(obtainableAt(item, lv), `${key} cần ${item} ở cấp ${lv}`); }
});
```
(`obtainableAt(item, lv)`: vật liệu thô `mat:1` luôn đúng (liana từ cây rừng có ở vùng lõi), vật liệu bậc 2 đúng khi có công thức với `lv` công thức ≤ `lv` công trình và xưởng tương ứng có `lv` ≤ `lv` công trình. `unlockLevel(key)` lấy `lv` của FACTORIES/PENS, của ZONES với `gate:*`, và 1 với `ruin:*`.)

- [ ] **Step 2: FAIL → Step 3: viết `build.js`, dữ liệu `BUILD`, nối vào mua/đặt/chạm → Step 4: PASS, build.** Nếu test "lấy được ở cấp mở" báo lỗi, sửa bảng `BUILD` (đổi món giai đoạn 1 sang vật liệu thô) chứ không sửa test.
- [ ] **Step 5: Kiểm tra tay:** mua Lò bánh → thấy giàn giáo; chạm mở bảng góp; góp thiếu thì ô vẫn đỏ; góp đủ 2 giai đoạn → Lò bánh hiện ra và nướng được bánh mì; bản lưu cũ: nhà máy cũ vẫn chạy bình thường.
- [ ] **Step 6: Commit** `"Giai đoạn A5: xây theo giai đoạn bằng vật liệu"`

---

### Task 6: Vùng rừng dưới mây và cổng mở vùng

**Files:** Modify `src/island.js`, `src/state.js` (`isFree`, `findFree`), `src/entities.js` (view mây, view cổng), `src/game.js` (chạm cổng, chạm ô đóng), `src/world.js`; Test `tests/island.test.mjs`

**Interfaces:**
- Consumes: `startSite`, `tryAdvance`, `BUILD['gate:*']` (Task 5); `ZONES` (Task 1).
- Produces: vật `{ k:'gate', t:'bridge_w'|'bridge_n'|'stairs_old', x, z, site }` đặt sẵn trên ranh giới mỗi vùng (trong vùng lõi, sát mép vùng cần mở; `footprint` 2×1), tạo trong `freshState` và `migrateV1`. Cổng có `site` từ đầu; chỉ góp được khi `S.level >= zone.lv` (trước đó bảng góp hiện "Mở ở cấp N").
- Produces (island.js): `openZone(id)` — `S.zones[id] = true`, gọi khi `tryAdvance(gate) === 'done'`; `emit('zone', id)`.
- `isFree(x, z, w, d)` trả `false` nếu có ô nào `!isOpenCell`; `findFree` chỉ tìm trong ô mở.
- View mây: mỗi vùng đóng phủ các khối mây trắng mềm (sprite tròn nhiều lớp, `depthWrite:false`) trên toàn `rect`, có mũi tên cam nhấp nháy chỉ vào cổng; `emit('zone')` → mây tan dần trong 1,5 giây rồi xóa.
- Chạm vào ô mây: toast "Sửa {tên cổng} để mở {tên vùng} nhé!" và camera bay tới cổng.

- [ ] **Step 1: Test** — `isFree` từ chối ô trong vùng đóng và khung vắt qua ranh giới (ví dụ `isFree(13, 20, 2, 2)` là `false` khi `west` đóng, `true` khi mở); `findFree` không trả ô vùng đóng; góp đủ cổng `bridge_w` → `S.zones.west === true`; cổng không nhận góp khi cấp thấp hơn `lv`.
- [ ] **Step 2: FAIL → Step 3: làm → Step 4: PASS, build.**
- [ ] **Step 5: Kiểm tra tay:** thấy mây phủ rừng phía Tây và Bắc, mũi tên chỉ cầu; kéo một nhà máy vào vùng mây → ô báo đỏ, không đặt được; sửa xong cầu Tây → mây tan, chặt được rừng Tây.
- [ ] **Step 6: Commit** `"Giai đoạn A6: vùng rừng dưới mây và cổng mở vùng"`

---

### Task 7: Ván mới bắt đầu bằng sửa nhà đổ nát và hướng dẫn mới

**Files:** Modify `src/state.js` (`freshState`, `currentQuest`, `claimQuest`, `questEvent`), `src/data.js` (`TUTORIAL`), `src/game.js` (`questTarget`, mở phiêu lưu), `src/entities.js` (view đổ nát); Test `tests/tutorial.test.mjs`

**Interfaces:**
- Consumes: `startSite`/`keyOf`/`questEvent('build', key)` (Task 5), `hitObstacle` (`questEvent('clear')`), xưởng mộc (Task 4).
- Produces: ván mới có `house`, `fac:bakery` và thuyền nhỏ ở bến dưới dạng đổ nát: `o.site = { stage:0, got:{}, ruin:true }` với key `ruin:house`, `ruin:bakery`, `ruin:boat` (thuyền là vật `{k:'boat', t:'boat'}` 2×2 sát bến, không di chuyển được). Kho đầu game thêm `wood: 4, palmleaf: 4` để sửa nhà ngay. Vùng lõi ván mới có thêm rừng dày ở nửa Tây của vùng lõi (ngoài khu nhà/ruộng), đủ gỗ, đá, lá cọ cho các bước đầu.
- Produces (data.js) — `TUTORIAL` (cùng cấu trúc phần tử `QUESTS`, `ev` mới `'build'` với `key`):
  1. maisie: "Bão làm nhà mình hỏng mất rồi! Góp gỗ và lá cọ để sửa nhà nhé." — `ev:'build', key:'ruin:house'`
  2. maisie: "Nhà đẹp lại rồi! Thu hoạch 3 lúa mì nào." — `harvest wheat 3`
  3. tom: "Gà đói rồi! Ra máy xay làm thức ăn rồi cho gà ăn nhé." — `feed 1`
  4. maisie: "Chặt 3 bụi cây hoặc cây rừng để lấy vật liệu nhé." — `clear 3`
  5. ben: "Lò bánh bị đổ rồi. Sửa giúp ông nhé!" — `build ruin:bakery`
  6. ben: "Nướng 1 ổ bánh mì. Ăn bánh mì sẽ có thêm năng lượng đó!" — `make bread 1`
  7. sam: "Mua Xưởng mộc ở cửa hàng và xây xong nhé." — `build fac:carpentry`
  8. sam: "Làm 3 tấm ván gỗ ở Xưởng mộc." — `make planks 3`
  9. sam: "Sửa chiếc thuyền ở bến để ra khơi!" — `build ruin:boat`
  10. maisie: "Thuyền xong rồi! Mình cùng ra khơi phiêu lưu nào!" — `ev:'sail'` (đếm khi mở màn Phiêu lưu)
  Phần thưởng mỗi bước: xu 15–40, xp 5–12; bước 1, 5, 9 thêm năng lượng 10.
- `currentQuest()`: nếu `S.tut < TUTORIAL.length` trả `TUTORIAL[S.tut]`, ngược lại logic cũ (`QUESTS[S.quest]` …). `claimQuest()` tăng `S.tut` khi đang ở hướng dẫn. Ván mới bắt đầu `quest: 0` nên sau hướng dẫn chạy tiếp `QUESTS` như cũ (bỏ qua các mục `QUESTS` mà `lv` hoặc nội dung trùng không cần sửa).
- Nút Phiêu lưu bị khóa tới khi `S.boatFixed` (đặt `true` khi `ruin:boat` xong): chạm thì toast "Sửa thuyền ở bến trước nhé!".
- Bàn tay hướng dẫn (`questTarget`) chỉ vào: vật đổ nát chưa xong cho `ev:'build'` với key `ruin:*`; nút Cửa hàng cho `fac:carpentry` chưa mua; vật cản gần nhất đang mở cho `clear`.

- [ ] **Step 1: Test** — `freshState` có 3 vật `ruin` và `tut:0`; đi hết `TUTORIAL` bằng cách giả lập sự kiện (`questEvent` + `claimQuest`) thì `S.tut === TUTORIAL.length` và `currentQuest()` trả `QUESTS[0]`; bản v1 sau `migrateV1` có `currentQuest()` bằng nhiệm vụ cũ của nó.
- [ ] **Step 2: FAIL → Step 3: làm → Step 4: PASS, build.**
- [ ] **Step 5: Kiểm tra tay:** Cài đặt → Chơi lại từ đầu, chơi hết 10 bước ở 375×812 trong khoảng 10–15 phút mà không bị kẹt năng lượng hay vật liệu; bàn tay luôn chỉ đúng chỗ.
- [ ] **Step 6: Commit** `"Giai đoạn A7: ván mới sửa nhà đổ nát và hướng dẫn mới"`

---

### Task 8: Năng lượng ở giữa trên, giới hạn theo cấp, đồ nhặt trên bãi biển

**Files:** Create `src/beach.js`, `tests/beach.test.mjs`; Modify `src/data.js` (`ENERGY_MAX` → `energyMax`), `src/state.js` (`energyTick`, `energyNextIn`, `addXP`), `src/ui.js`, `src/game.js`, `index.html`, `src/style.css`, `src/entities.js` hoặc `src/ambient.js` (view đồ bãi biển)

**Interfaces:**
- Produces (data.js): `energyMax(level) = 30 + Math.floor(level / 2)`; xóa hằng `ENERGY_MAX`, mọi chỗ dùng đổi sang `energyMax(S.level)`. `BEACH = { starfish: { n:'Sao biển', energy:2 }, shell: { n:'Vỏ sò', energy:3 }, crab: { n:'Cua nhỏ', energy:5 } }`, `BEACH_MAX = 6`, `BEACH_EVERY = 240` (giây).
- Produces (beach.js): `beachSpots()` — danh sách điểm cố định trên dải cát quanh đảo (ít nhất 16 điểm, tính từ `GRID`, không trùng bến tàu và cầu câu); `beachTick(t, rand) -> spot | null` — mỗi `BEACH_EVERY` giây thêm một món (cua 15%, vỏ sò 35%, sao biển 50%) vào `S.beach = [{ id, t, spot }]` nếu ít hơn `BEACH_MAX`; `pickBeach(id) -> energy` — xóa món, cộng năng lượng (được vượt giới hạn, không giới hạn trên), `questEvent('beach')`.
- HUD: viên năng lượng nằm **giữa phía trên**, to hơn ô xu; cấp + thanh xp ở trên trái; xu, kim cương ở trên phải; không chồng nhau ở 375 px.

- [ ] **Step 1: Test** — `energyMax(1) === 30`, `energyMax(10) === 35`; `beachTick` không vượt `BEACH_MAX`, không thêm trước `BEACH_EVERY`; `pickBeach` cộng đúng năng lượng kể cả khi đang đầy; **khi `S.energy === 0` và mọi vùng ngoài đóng, sau tối đa `BEACH_EVERY` giây có ít nhất một món trên bãi** (giả lập `t`).
- [ ] **Step 2: FAIL → Step 3: làm → Step 4: PASS, build.**
- [ ] **Step 5: Kiểm tra tay:** đồ bãi biển hiện trên cát, chạm thì bay vào ô năng lượng; HUD đúng vị trí ở 375×812 và 812×375.
- [ ] **Step 6: Commit** `"Giai đoạn A8: năng lượng ở giữa, giới hạn theo cấp, đồ bãi biển"`

---

### Task 9: Người đốn gỗ

**Files:** Create `src/helper.js`, `tests/helper.test.mjs`; Modify `src/data.js` (`HELPERS`, `BUILD['helper:lumberjack']`, shop), `src/game.js` (mua, chạm, nâng cấp), `src/entities.js` (view)

**Interfaces:**
- Produces (data.js): `HELPERS.lumberjack = { n:'Nhà tiều phu', lv:2, cost:80, every:90, gives:['wood','wood','bamboo','palmleaf'], cap:[10, 20, 30], up:[{ planks:6, rope:2 }, { planks:12, rack:4 }] }`; `BUILD['helper:lumberjack'] = [{ wood:8, stone:4 }]`; mua ở thẻ "Nhà máy" của cửa hàng; tối đa 1.
- Produces (helper.js): `helperTick(o, t)` — cứ `every` giây thêm 1 món lần lượt theo `gives` vào `o.bag` tới khi `o.bag` đủ `cap[o.lvl]` món (tính cả lúc tắt game, dùng `o.at`); `helperCollect(o) -> {item:n}` — đổ `o.bag` vào kho; `helperUpgrade(o) -> boolean` — đủ vật liệu `up[o.lvl]` thì trừ và tăng `o.lvl`.
- Nhà đang có `site` thì không gom. Có đồ thì hiện bong bóng gỗ trên nhà (dùng hệ bong bóng `buildBubbles` hiện có).

- [ ] **Step 1: Test** — sau 10 phút tắt game có đúng `min(cap, floor(600/90)) = 6` món; không vượt `cap`; `helperCollect` trả và làm rỗng túi; nâng cấp thiếu vật liệu trả `false`, kho không đổi.
- [ ] **Step 2: FAIL → Step 3: làm → Step 4: PASS, build.**
- [ ] **Step 5: Kiểm tra tay:** mua, xây xong, chờ, thấy bong bóng, chạm nhận gỗ; nâng cấp.
- [ ] **Step 6: Commit** `"Giai đoạn A9: nhà tiều phu tự gom vật liệu"`

---

### Task 10: Danh sách hình đợt 6, ghép hình đã có, kiểm tra tổng

**Files:** Create `art-in/danh-sach-hinh-dot6.txt` (không commit vì `art-in/` bị gitignore); Modify `README.md`, `src/game.js` (ghi công nếu cần)

- [ ] **Step 1: Viết `art-in/danh-sach-hinh-dot6.txt`** theo mẫu `art-in/danh-sach-hinh-dot5.txt` (cùng đuôi câu lệnh phong cách, tên file đích). Gồm: 13 biểu tượng vật liệu (gỗ, đá, tre, lá cọ, đất sét, dây leo, ván, giá gỗ, củi, giỏ, chiếu, dây thừng, đuốc — câu lệnh kiểu biểu tượng vật phẩm như các đợt trước); vật cản: bụi cỏ, bụi tre, gò đất sét, cây cổ thụ, tảng đá lớn; xưởng mộc; nhà đan lát; nhà tiều phu; giàn giáo công trường; nhà đổ nát; lò bánh đổ nát; thuyền chìm; cầu tre (hỏng + đã sửa); bậc đá rừng già (hỏng + đã sửa); sao biển, vỏ sò, cua trên cát; rương gỗ; đám mây.
- [ ] **Step 2: Cập nhật README** phần "Cách chơi": chặt cây ra vật liệu, xây theo giai đoạn, mở rừng dưới mây, nhặt đồ bãi biển, nhà tiều phu.
- [ ] **Step 3: Kiểm tra tổng** theo mục 11 của spec: `npm test`, `npm run build`; preview 375×812: ván mới đi hết hướng dẫn; nhập một bản lưu v1 cấp cao (từ `v1Save()`), mọi thứ còn nguyên và có rừng mới; tắt mạng sau lần mở đầu vẫn chơi được; console sạch. Chụp màn hình làm bằng chứng.
- [ ] **Step 4: Commit** `"Giai đoạn A10: README, danh sách hình đợt 6"`
