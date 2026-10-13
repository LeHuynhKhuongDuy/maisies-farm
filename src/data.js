// Toàn bộ dữ liệu cân bằng game. Thời gian tính bằng giây.

export const GRID = 26; // đảo 26 x 26 ô

// ---------- Vật phẩm ----------
// icon: đường dẫn mô hình dùng để vẽ biểu tượng; tint: tô màu lại mô hình (bao thức ăn)
export const ITEMS = {
  wheat:      { n: 'Lúa mì',        icon: 'nature/crops_wheatStageB', tint: 0xffd25e, v: 2 },
  corn:       { n: 'Bắp',           icon: 'food/corn', v: 3 },
  carrot:     { n: 'Cà rốt',        icon: 'food/carrot', v: 4 },
  strawberry: { n: 'Dâu tây',       icon: 'food/strawberry', v: 5 },
  tomato:     { n: 'Cà chua',       icon: 'food/tomato', v: 5 },
  pumpkin:    { n: 'Bí ngô',        icon: 'food/pumpkin', v: 8 },
  melon:      { n: 'Dưa hấu',       icon: 'food/watermelon', v: 10 },

  apple:      { n: 'Táo',           icon: 'food/apple', v: 6 },
  coconut:    { n: 'Dừa',           icon: 'food/coconut', v: 6 },
  orange:     { n: 'Cam',           icon: 'food/orange', v: 7 },

  egg:        { n: 'Trứng',         icon: 'food/egg', v: 6 },
  milk:       { n: 'Sữa',           icon: 'food/carton', v: 9 },
  mushroom:   { n: 'Nấm',           icon: 'food/mushroom', v: 12 },

  chickenfeed:{ n: 'Thức ăn gà',    icon: 'food/bag', tint: 0xf2c84b, v: 2 },
  cowfeed:    { n: 'Thức ăn bò',    icon: 'food/bag', tint: 0x7cc46a, v: 3 },
  pigfeed:    { n: 'Thức ăn heo',   icon: 'food/bag', tint: 0xd98a5a, v: 4 },

  bread:      { n: 'Bánh mì',       icon: 'food/loaf', v: 10 },
  cookie:     { n: 'Bánh quy',      icon: 'food/cookie', v: 14 },
  cake:       { n: 'Bánh kem',      icon: 'food/cake', v: 30 },
  applepie:   { n: 'Bánh táo',      icon: 'food/pie', v: 24 },
  cheese:     { n: 'Phô mai',       icon: 'food/cheese', v: 20 },
  icecream:   { n: 'Kem dâu',       icon: 'food/ice-cream-cup', v: 18 },
  applejuice: { n: 'Nước táo',      icon: 'food/soda-glass', v: 20 },
  orangejuice:{ n: 'Nước cam',      icon: 'food/cocktail', v: 23 },
  coconutmilk:{ n: 'Nước dừa',      icon: 'food/coconut-half', v: 14 },
  soup:       { n: 'Súp rau',       icon: 'food/bowl-soup', v: 26, energy: 6 },
  sandwich:   { n: 'Bánh kẹp',      icon: 'food/sandwich', v: 30, energy: 8 },
  pizza:      { n: 'Pizza',         icon: 'food/pizza', v: 40, energy: 12 },
  pancakes:   { n: 'Bánh kếp',      icon: 'food/pancakes', v: 28, energy: 8 },

  sunflower:  { n: 'Hướng dương',   icon: 'nature/flower_yellowB', v: 4 },
  cabbage:    { n: 'Bắp cải',       icon: 'food/cabbage', v: 9 },
  onion:      { n: 'Hành tây',      icon: 'food/onion', v: 8 },
  banana:     { n: 'Chuối',         icon: 'food/banana', v: 8 },
  lemon:      { n: 'Chanh',         icon: 'food/lemon', v: 8 },
  pear:       { n: 'Lê',            icon: 'food/pear', v: 9 },
  cherry:     { n: 'Anh đào',       icon: 'food/cherries', v: 11 },
  honey:      { n: 'Mật ong',       icon: 'food/honey', v: 14 },
  donut:      { n: 'Bánh vòng',     icon: 'food/donut-sprinkles', v: 34 },
  cupcake:    { n: 'Bánh cupcake',  icon: 'food/cupcake', v: 36 },
  croissant:  { n: 'Bánh sừng bò',  icon: 'food/croissant', v: 30 },
  muffin:     { n: 'Bánh muffin',   icon: 'food/muffin', v: 32 },
  waffle:     { n: 'Bánh quế',      icon: 'food/waffle', v: 34, energy: 9 },
  jam:        { n: 'Mứt dâu',       icon: 'food/honey', tint: 0xff7a7a, v: 30 },
  lemontea:   { n: 'Trà chanh mật ong', icon: 'food/cup-tea', v: 28 },
  salad:      { n: 'Sa lát',        icon: 'food/salad', v: 32, energy: 10 },
};

// ---------- Cây trồng (ruộng 1x1) ----------
// stages: mô hình từng giai đoạn; deco: gắn thêm quả nhỏ lên giai đoạn cuối
export const CROPS = {
  wheat:      { lv: 1, t: 20,  cost: 1, xp: 1, tint: 0xffd25e, stages: ['nature/crops_leafsStageA', 'nature/crops_wheatStageA', 'nature/crops_wheatStageB'] },
  corn:       { lv: 2, t: 40,  cost: 2, xp: 1, stages: ['nature/crops_cornStageA', 'nature/crops_cornStageB', 'nature/crops_cornStageD'] },
  carrot:     { lv: 3, t: 60,  cost: 3, xp: 2, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/crop_carrot'] },
  strawberry: { lv: 4, t: 80,  cost: 4, xp: 2, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/crops_leafsStageB'], deco: 'food/strawberry' },
  tomato:     { lv: 5, t: 90,  cost: 4, xp: 2, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/crops_leafsStageB'], deco: 'food/tomato' },
  pumpkin:    { lv: 6, t: 120, cost: 6, xp: 3, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/crop_pumpkin'] },
  sunflower:  { lv: 6, t: 70,  cost: 4, xp: 2, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/flower_yellowB'], fit: { size: 0.36 } },
  melon:      { lv: 8, t: 150, cost: 8, xp: 4, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'nature/crop_melon'] },
  cabbage:    { lv: 9, t: 130, cost: 7, xp: 4, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'food/cabbage'], fit: { size: 0.34 } },
  onion:      { lv: 10, t: 140, cost: 7, xp: 4, stages: ['nature/crops_leafsStageA', 'nature/crops_leafsStageB', 'food/onion'], fit: { size: 0.28 } },
};

// ---------- Cây ăn quả (1x1, thu hoạch nhiều lần) ----------
export const TREES = {
  palm:   { n: 'Cây dừa',  lv: 2, cost: 60,  t: 100, yield: 'coconut', qty: 2, xp: 2, model: 'pirate/palm-straight', fruit: 'food/coconut', palm: true },
  apple:  { n: 'Cây táo',  lv: 3, cost: 80,  t: 120, yield: 'apple',   qty: 3, xp: 2, model: 'town/tree', fruit: 'food/apple' },
  orange: { n: 'Cây cam',  lv: 6, cost: 120, t: 150, yield: 'orange',  qty: 3, xp: 3, model: 'town/tree-high-round', fruit: 'food/orange' },
  banana: { n: 'Cây chuối', lv: 7, cost: 140, t: 160, yield: 'banana', qty: 3, xp: 3, model: 'pirate/palm-bend', fruit: 'food/banana', palm: true },
  lemon:  { n: 'Cây chanh', lv: 8, cost: 160, t: 170, yield: 'lemon',  qty: 3, xp: 3, model: 'town/tree', fruit: 'food/lemon' },
  pear:   { n: 'Cây lê',    lv: 10, cost: 200, t: 190, yield: 'pear',  qty: 3, xp: 4, model: 'town/tree-high-round', fruit: 'food/pear' },
  cherry: { n: 'Cây anh đào', lv: 12, cost: 260, t: 210, yield: 'cherry', qty: 3, xp: 4, model: 'town/tree', fruit: 'food/cherries', tint: 0xffc4d8 },
};

// ---------- Chuồng thú (3x3) ----------
export const PENS = {
  coop:   { n: 'Chuồng gà', lv: 1, cost: 80,  animal: 'pets/animal-chick', an: 'Gà',  feed: 'chickenfeed', prod: 'egg',      t: 60,  xp: 1, max: 6, animalCost: 30 },
  cowpen: { n: 'Chuồng bò', lv: 4, cost: 200, animal: 'pets/animal-cow',   an: 'Bò',  feed: 'cowfeed',     prod: 'milk',     t: 120, xp: 2, max: 5, animalCost: 80 },
  pigpen: { n: 'Chuồng heo',lv: 7, cost: 320, animal: 'pets/animal-pig',   an: 'Heo', feed: 'pigfeed',     prod: 'mushroom', t: 150, xp: 3, max: 5, animalCost: 120 },
  beehive:{ n: 'Vườn ong',  lv: 7, cost: 280, animal: 'pets/animal-bee',   an: 'Ong', feed: 'sunflower',   prod: 'honey',    t: 120, xp: 3, max: 4, animalCost: 100, fly: true },
};

// ---------- Nhà máy (2x2) ----------
export const FACTORIES = {
  feedmill: { n: 'Máy xay thức ăn', lv: 1, cost: 60, rec: [
    { out: 'chickenfeed', qty: 3, in: { wheat: 2 }, t: 20, lv: 1 },
    { out: 'cowfeed',     qty: 3, in: { corn: 2 },  t: 30, lv: 4 },
    { out: 'pigfeed',     qty: 3, in: { carrot: 2 }, t: 40, lv: 7 },
  ]},
  bakery: { n: 'Lò bánh', lv: 2, cost: 120, rec: [
    { out: 'bread',    in: { wheat: 3 }, t: 40, lv: 2 },
    { out: 'cookie',   in: { wheat: 2, egg: 1 }, t: 60, lv: 3 },
    { out: 'applepie', in: { wheat: 2, apple: 2 }, t: 80, lv: 5 },
    { out: 'cake',     in: { wheat: 2, egg: 2, milk: 1 }, t: 100, lv: 6 },
  ]},
  dairy: { n: 'Xưởng sữa', lv: 4, cost: 220, rec: [
    { out: 'cheese',   in: { milk: 2 }, t: 70, lv: 4 },
    { out: 'icecream', in: { milk: 1, strawberry: 2 }, t: 70, lv: 5 },
  ]},
  juicebar: { n: 'Quầy nước ép', lv: 5, cost: 260, rec: [
    { out: 'coconutmilk', in: { coconut: 2 }, t: 50, lv: 5 },
    { out: 'applejuice',  in: { apple: 3 }, t: 60, lv: 5 },
    { out: 'orangejuice', in: { orange: 3 }, t: 70, lv: 6 },
  ]},
  kitchen: { n: 'Bếp nấu', lv: 6, cost: 320, rec: [
    { out: 'soup',     in: { carrot: 1, tomato: 2, pumpkin: 1 }, t: 80, lv: 6 },
    { out: 'sandwich', in: { bread: 1, cheese: 1, egg: 1 }, t: 80, lv: 6 },
    { out: 'pancakes', in: { wheat: 2, egg: 1, milk: 1 }, t: 80, lv: 7 },
    { out: 'pizza',    in: { bread: 1, cheese: 1, tomato: 2 }, t: 100, lv: 8 },
    { out: 'salad',    in: { cabbage: 1, tomato: 1, onion: 1 }, t: 90, lv: 10 },
    { out: 'waffle',   in: { wheat: 2, egg: 1, honey: 1 }, t: 90, lv: 11 },
  ]},
  sweets: { n: 'Tiệm bánh ngọt', lv: 9, cost: 420, rec: [
    { out: 'donut',     in: { wheat: 2, egg: 1, honey: 1 }, t: 90, lv: 9 },
    { out: 'cupcake',   in: { wheat: 1, milk: 1, strawberry: 2 }, t: 100, lv: 9 },
    { out: 'croissant', in: { wheat: 3, milk: 1 }, t: 80, lv: 10 },
    { out: 'muffin',    in: { wheat: 2, egg: 1, banana: 1 }, t: 90, lv: 11 },
  ]},
  jammaker: { n: 'Nhà làm mứt', lv: 10, cost: 460, rec: [
    { out: 'jam',      in: { strawberry: 3, honey: 1 }, t: 100, lv: 10 },
    { out: 'lemontea', in: { lemon: 2, honey: 1 }, t: 80, lv: 10 },
  ]},
};

// ---------- Trang trí ----------
// fit: cách thu phóng mô hình ({size}: bề ngang, {h}: chiều cao)
export const DECOR = {
  flower_red:  { n: 'Hoa đỏ',        lv: 1, cost: 5,   model: 'nature/flower_redA', fit: { size: 0.5 } },
  flower_yel:  { n: 'Hoa vàng',      lv: 1, cost: 5,   model: 'nature/flower_yellowA', fit: { size: 0.5 } },
  flower_pur:  { n: 'Hoa tím',       lv: 1, cost: 5,   model: 'nature/flower_purpleA', fit: { size: 0.5 } },
  bush:        { n: 'Bụi cây',       lv: 1, cost: 10,  model: 'nature/plant_bushLarge', fit: { size: 0.85 } },
  palmdeco:    { n: 'Cây dừa nghiêng', lv: 1, cost: 25, model: 'pirate/palm-bend', fit: { h: 1.9 } },
  lantern:     { n: 'Đèn lồng',      lv: 2, cost: 30,  model: 'town/lantern', fit: { h: 1.3 } },
  barrel:      { n: 'Thùng gỗ',      lv: 2, cost: 15,  model: 'pirate/barrel', fit: { size: 0.6 } },
  bench:       { n: 'Ghế dài',       lv: 2, cost: 35,  model: 'town/stall-bench', fit: { size: 0.9 } },
  mushroomdeco:{ n: 'Nấm đỏ',        lv: 3, cost: 20,  model: 'nature/mushroom_red', fit: { size: 0.5 } },
  chest:       { n: 'Rương báu',     lv: 3, cost: 60,  model: 'pirate/chest', fit: { size: 0.65 } },
  dog:         { n: 'Cún con',       lv: 3, cost: 120, model: 'pets/animal-dog', pet: true, fit: { h: 0.6 } },
  cat:         { n: 'Mèo con',       lv: 3, cost: 120, model: 'pets/animal-cat', pet: true, fit: { h: 0.6 } },
  bunny:       { n: 'Thỏ trắng',     lv: 4, cost: 150, model: 'pets/animal-bunny', pet: true, fit: { h: 0.65 } },
  parrot:      { n: 'Vẹt',           lv: 5, cost: 180, model: 'pets/animal-parrot', pet: true, fit: { h: 0.6 } },
  penguin:     { n: 'Chim cánh cụt', lv: 6, cost: 220, model: 'pets/animal-penguin', pet: true, fit: { h: 0.6 } },
  sandcastle:  { n: 'Lâu đài cát',   lv: 99, cost: 0,  model: 'pirate/tower-complete-small', fit: { size: 1.8 }, w: 2, d: 2, gift: true, paint: 0xf2d38a },
  goldboat:    { n: 'Thuyền vàng',   lv: 99, cost: 0,  model: 'pirate/boat-row-large', fit: { size: 1.9 }, w: 2, d: 2, gift: true, paint: 0xffc93c },
  crab:        { n: 'Bạn Cua',       lv: 99, cost: 0,  model: 'pets/animal-crab', pet: true, fit: { h: 0.5 }, gift: true },
  fountain:    { n: 'Đài phun nước', lv: 5, cost: 300, model: 'town/fountain-round', fit: { size: 1.9 }, w: 2, d: 2 },
  boat:        { n: 'Thuyền nhỏ',    lv: 4, cost: 90,  model: 'pirate/boat-row-small', fit: { size: 1.9 }, w: 2, d: 2 },
  campfire:    { n: 'Lửa trại',      lv: 4, cost: 40,  model: 'survival/campfire-pit', fit: { size: 0.7 } },
  hedge:       { n: 'Hàng rào cây',  lv: 4, cost: 15,  model: 'town/hedge', fit: { size: 0.95 } },
  cart:        { n: 'Xe đẩy',        lv: 5, cost: 60,  model: 'town/cart', fit: { size: 0.95 } },
  tent:        { n: 'Lều cắm trại',  lv: 6, cost: 90,  model: 'survival/tent-canvas', fit: { size: 0.95 } },
  flag:        { n: 'Cờ đuôi nheo',  lv: 7, cost: 50,  model: 'pirate/flag', fit: { h: 1.6 } },
  flower_red2: { n: 'Khóm hoa hồng', lv: 7, cost: 12,  model: 'nature/flower_redB', fit: { size: 0.55 } },
  lighthouse:  { n: 'Ngọn hải đăng', lv: 10, cost: 600, model: 'pirate/tower-complete-small', fit: { size: 1.9 }, w: 2, d: 2 },
};

// ---------- Chướng ngại vật (dọn bằng năng lượng) ----------
export const OBSTACLES = {
  bush:  { n: 'Bụi rậm',  model: 'nature/plant_bushLarge', fit: { size: 0.9 }, energy: 2, xp: 1 },
  rock:  { n: 'Tảng đá',  model: 'nature/rock_largeA', fit: { size: 0.95 }, energy: 4, xp: 2 },
  stump: { n: 'Gốc cây',  model: 'nature/stump_old', fit: { size: 0.65 }, energy: 3, xp: 1 },
  tree:  { n: 'Cây rừng', model: 'nature/tree_fat', fit: { h: 1.7 }, energy: 5, xp: 2 },
  logs:  { n: 'Đống gỗ',  model: 'nature/log_stack', fit: { size: 0.85 }, energy: 3, xp: 1 },
};

// Giá mua ô ruộng thứ n (n tính từ 0)
export const fieldCost = n => (n < 6 ? 0 : 10 + (n - 6) * 6);
export const xpNeed = l => 10 + l * 12;
export const ENERGY_MAX = 30, ENERGY_REGEN = 30; // giây hồi 1 năng lượng
export const BARN_BASE = 60, BARN_STEP = 25;
export const barnUpgradeCost = lvl => 50 + lvl * 60;

// ---------- Nhân vật ----------
export const PEOPLE = [
  { id: 'maisie', n: 'Maisie',  model: 'chars/character-female-a' },
  { id: 'tom',    n: 'Bác Tom', model: 'chars/character-male-b' },
  { id: 'lily',   n: 'Cô Lily', model: 'chars/character-female-c' },
  { id: 'ben',    n: 'Anh Ben', model: 'chars/character-male-a' },
  { id: 'rosa',   n: 'Bà Rosa', model: 'chars/character-female-b' },
  { id: 'sam',    n: 'Chú Sam', model: 'chars/character-male-c' },
];

// ---------- Nhiệm vụ của Maisie (chuỗi hướng dẫn) ----------
// ev: tên sự kiện; key: vật phẩm (tuỳ chọn); n: số lần
export const QUESTS = [
  { who: 'maisie', text: 'Chào mừng đến đảo! Mình là Maisie. Mình cùng thu hoạch 3 lúa mì nhé!', ev: 'harvest', key: 'wheat', n: 3, coins: 20, xp: 5 },
  { who: 'maisie', text: 'Giỏi quá! Giờ gieo hạt vào 4 ô ruộng trống nào.', ev: 'plant', n: 4, coins: 15, xp: 5 },
  { who: 'tom', text: 'Gà nhà mình đói rồi! Ra máy xay làm 1 mẻ thức ăn cho gà nhé.', ev: 'make', key: 'chickenfeed', n: 1, coins: 20, xp: 6 },
  { who: 'tom', text: 'Chạm vào chuồng gà để cho các bạn gà ăn.', ev: 'feed', n: 1, coins: 15, xp: 5 },
  { who: 'tom', text: 'Nhặt 2 quả trứng khi gà đẻ xong nhé.', ev: 'collect', key: 'egg', n: 2, coins: 20, xp: 6 },
  { who: 'lily', text: 'Bảng đơn hàng có người đặt mua kìa! Giao 1 đơn hàng nhé.', ev: 'deliver', n: 1, coins: 30, xp: 8 },
  { who: 'maisie', text: 'Đảo còn nhiều bụi rậm lắm. Dọn 2 chướng ngại vật để có thêm đất nhé.', ev: 'clear', n: 2, coins: 20, xp: 6, gems: 2 },
  { who: 'ben', text: 'Lò bánh đã mở! Nướng 2 ổ bánh mì nào.', ev: 'make', key: 'bread', n: 2, coins: 30, xp: 8, lv: 2 },
  { who: 'lily', text: 'Trang trí cho đảo thêm xinh: mua 1 món đồ trang trí ở cửa hàng nhé.', ev: 'buydecor', n: 1, coins: 20, xp: 5, lv: 2 },
  { who: 'sam', text: 'Tàu chở hàng cập bến rồi! Đóng đầy 2 thùng hàng trên tàu nhé.', ev: 'crate', n: 2, coins: 40, xp: 10, lv: 2 },
  { who: 'rosa', text: 'Bà thích bánh quy lắm. Cháu làm 2 hộp bánh quy nhé?', ev: 'make', key: 'cookie', n: 2, coins: 40, xp: 10, lv: 3 },
  { who: 'maisie', text: 'Trồng 1 cây táo hoặc cây dừa để có trái cây quanh năm nhé!', ev: 'buytree', n: 1, coins: 30, xp: 8, lv: 3 },
  { who: 'tom', text: 'Mua thêm 2 bạn gà cho chuồng thêm vui nào.', ev: 'buyanimal', n: 2, coins: 40, xp: 10, gems: 2, lv: 3 },
  { who: 'sam', text: 'Bến tàu hôm nay đông khách lắm. Giao 3 đơn hàng nhé!', ev: 'deliver', n: 3, coins: 50, xp: 12, lv: 3 },
  { who: 'maisie', text: 'Mình đi thuyền ra Bãi Vỏ Sò phiêu lưu đi! Dọn 5 chướng ngại vật nhé.', ev: 'clear', n: 5, coins: 40, xp: 12, gems: 2, lv: 3 },
  { who: 'tom', text: 'Có chuồng bò rồi! Thu 3 hộp sữa nào.', ev: 'collect', key: 'milk', n: 3, coins: 60, xp: 14, lv: 4 },
  { who: 'rosa', text: 'Bà muốn làm bánh mì kẹp. Cháu làm 2 miếng phô mai nhé?', ev: 'make', key: 'cheese', n: 2, coins: 60, xp: 15, lv: 4 },
  { who: 'lily', text: 'Trời nóng quá! Làm 2 cốc nước dừa mát lạnh đi.', ev: 'make', key: 'coconutmilk', n: 2, coins: 70, xp: 16, lv: 5 },
  { who: 'ben', text: 'Thu hoạch 6 quả dâu tây ngọt lịm nhé!', ev: 'harvest', key: 'strawberry', n: 6, coins: 60, xp: 15, lv: 5 },
  { who: 'maisie', text: 'Trồng hoa hướng dương để chuẩn bị nuôi ong nào. Thu 6 bông nhé!', ev: 'harvest', key: 'sunflower', n: 6, coins: 70, xp: 18, lv: 6 },
  { who: 'sam', text: 'Bếp nấu mở rồi! Nấu 1 nồi súp rau thơm phức.', ev: 'make', key: 'soup', n: 1, coins: 80, xp: 20, gems: 2, lv: 6 },
  { who: 'tom', text: 'Ong vàng đã tới! Thu 2 hũ mật ong nhé.', ev: 'collect', key: 'honey', n: 2, coins: 90, xp: 22, lv: 7 },
  { who: 'rosa', text: 'Bà dạy cháu làm bánh kem. Làm 1 chiếc thật đẹp nhé!', ev: 'make', key: 'cake', n: 1, coins: 90, xp: 22, lv: 7 },
  { who: 'lily', text: 'Đóng đầy 6 thùng hàng lên tàu để tàu chạy nhé!', ev: 'crate', n: 6, coins: 120, xp: 26, gems: 3, lv: 8 },
  { who: 'ben', text: 'Tiệm bánh ngọt mở cửa! Làm 2 chiếc bánh vòng nào.', ev: 'make', key: 'donut', n: 2, coins: 120, xp: 28, lv: 9 },
  { who: 'maisie', text: 'Làm mứt dâu tặng mọi người trên đảo nhé! Làm 2 hũ.', ev: 'make', key: 'jam', n: 2, coins: 140, xp: 30, gems: 3, lv: 10 },
];

// ---------- Đảo phiêu lưu ----------
// Mỗi đảo là lưới w x h; bắt đầu ở mép trước (gần bến thuyền), đích ở cuối đảo.
// obstacles: [mô hình, cách thu phóng, năng lượng, tỉ lệ xuất hiện]
export const ADV_THEMES = {
  beach: {
    ground: 0xf4dca0, ground2: 0xeacb88, edge: 0xd9b46a,
    obstacles: [
      ['nature/plant_bushLarge', { size: 0.9 }, 1, 4], ['nature/grass_large', { size: 0.8 }, 1, 3],
      ['pirate/crate', { size: 0.7 }, 1, 2], ['pirate/barrel', { size: 0.6 }, 1, 2],
      ['pirate/rocks-sand-a', { size: 0.95 }, 2, 2], ['pirate/palm-straight', { h: 1.7 }, 3, 2],
    ],
  },
  jungle: {
    ground: 0x9ed65e, ground2: 0x8cc951, edge: 0x6aa83c,
    obstacles: [
      ['nature/plant_bushLarge', { size: 0.95 }, 1, 4], ['nature/tree_palmTall', { h: 1.8 }, 3, 2],
      ['nature/tree_fat', { h: 1.7 }, 3, 2], ['nature/rock_largeA', { size: 0.95 }, 2, 2],
      ['nature/stump_old', { size: 0.65 }, 1, 2], ['nature/log_stack', { size: 0.85 }, 2, 2],
      ['nature/mushroom_red', { size: 0.5 }, 1, 1],
    ],
  },
  pirate: {
    ground: 0xe8cf95, ground2: 0xdcc085, edge: 0xc9a865,
    obstacles: [
      ['pirate/crate', { size: 0.75 }, 1, 3], ['pirate/crate-bottles', { size: 0.75 }, 1, 2],
      ['pirate/barrel', { size: 0.6 }, 1, 3], ['pirate/rocks-a', { size: 0.95 }, 2, 2],
      ['pirate/palm-bend', { h: 1.8 }, 3, 2], ['nature/plant_bushLarge', { size: 0.9 }, 1, 2],
    ],
  },
};

export const ADVENTURES = [
  { id: 'shell', n: 'Bãi Vỏ Sò', lv: 2, w: 9, h: 12, seed: 11, theme: 'beach', chests: 3,
    goal: { n: 'Rương vỏ sò', model: 'pirate/chest' },
    intro: 'Nghe nói có một rương vỏ sò lấp lánh trên bãi biển gần đây. Cùng đi tìm nhé!',
    reward: { coins: 150, gems: 4, xp: 40 } },
  { id: 'crab', n: 'Vịnh Cua Đỏ', lv: 3, w: 10, h: 14, seed: 23, theme: 'beach', chests: 3,
    goal: { n: 'Bạn Cua bị kẹt', model: 'pets/animal-crab', pet: 'crab' },
    intro: 'Một bạn cua nhỏ bị kẹt giữa đống thùng gỗ. Mình dọn đường tới cứu bạn ấy nhé!',
    reward: { coins: 220, gems: 5, xp: 60 } },
  { id: 'palm', n: 'Rừng Dừa', lv: 5, w: 11, h: 15, seed: 37, theme: 'jungle', chests: 4,
    goal: { n: 'Bạn Vẹt lạc đường', model: 'pets/animal-parrot', pet: 'parrot' },
    intro: 'Bạn vẹt bay lạc vào rừng dừa rồi. Mình vào rừng tìm bạn ấy về nông trại nhé!',
    reward: { coins: 320, gems: 7, xp: 90 } },
  { id: 'pirate', n: 'Đảo Cướp Biển', lv: 7, w: 12, h: 16, seed: 51, theme: 'pirate', chests: 5,
    goal: { n: 'Kho báu cướp biển', model: 'pirate/chest' },
    intro: 'Tấm bản đồ cũ chỉ tới kho báu trên đảo cướp biển. Mình ra khơi thôi!',
    reward: { coins: 500, gems: 12, xp: 150 } },
  { id: 'penguin', n: 'Mũi Đá Gió', lv: 9, w: 12, h: 16, seed: 67, theme: 'beach', chests: 5,
    goal: { n: 'Bạn Cánh Cụt', model: 'pets/animal-penguin', pet: 'penguin' },
    intro: 'Một bạn cánh cụt trôi dạt tới mũi đá. Mình tới đưa bạn ấy về nhà nhé!',
    reward: { coins: 600, gems: 14, xp: 180 } },
];

// ---------- Bộ sưu tập (nhặt ngẫu nhiên khi chơi) ----------
export const COLLECTIONS = [
  { id: 'sea', n: 'Kho báu biển', reward: { coins: 200, gems: 5 }, pieces: [
    ['bottle', 'Thư trong chai', 'pirate/bottle'], ['mussel', 'Con trai', 'food/mussel'], ['pearl', 'Ngọc trai', 'food/mussel-open'],
    ['bones', 'Xương cá', 'food/fish-bones'], ['pflag', 'Cờ cướp biển', 'pirate/flag'] ] },
  { id: 'sweet', n: 'Kẹo ngọt', reward: { coins: 220, gems: 5 }, pieces: [
    ['lolly', 'Kẹo mút', 'food/lollypop'], ['pop', 'Kem que', 'food/popsicle'], ['choco', 'Thanh sô-cô-la', 'food/candy-bar'],
    ['mint', 'Kem bạc hà', 'food/ice-cream-scoop-mint'], ['cdonut', 'Bánh vòng sô-cô-la', 'food/donut-chocolate'] ] },
  { id: 'tropic', n: 'Trái cây nhiệt đới', reward: { coins: 260, gems: 6 }, pieces: [
    ['pine', 'Dứa', 'food/pineapple'], ['coco', 'Nửa trái dừa', 'food/coconut-half'], ['grape', 'Chùm nho', 'food/grapes'],
    ['melon2', 'Dưa hấu', 'food/watermelon'], ['lime', 'Lát chanh', 'food/lemon-half'] ] },
];

// ---------- Sự kiện hằng tuần ----------
export const EVENT = {
  n: 'Lễ hội Biển', token: 'Vỏ sò vàng', icon: 'food/mussel', tint: 0xffd23f,
  gain: { harvest: 1, collect: 1, make: 1, deliver: 3, crate: 2, clear: 1, visitor: 3, chest: 3 },
  tiers: [
    { at: 20, coins: 80 }, { at: 50, gems: 3 }, { at: 90, coins: 200 },
    { at: 140, decor: 'sandcastle' }, { at: 200, gems: 10 }, { at: 280, decor: 'goldboat' },
  ],
};
