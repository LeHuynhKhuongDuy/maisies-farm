// Toàn bộ dữ liệu cân bằng game. Thời gian tính bằng giây.

export const GRID = 40; // đảo 40 x 40 ô
export const CORE = 26; // vùng lõi (nông trại cũ) 26 x 26 ô
export const OFF = 14; // vùng lõi chiếm ô x,z từ 14 tới 39 (góc Đông Nam): bờ Nam và Đông không đổi
// Các vùng của đảo, rect = [x, z, rộng, sâu]. Vùng ngoài lõi bị rừng phủ, mở dần theo cấp
export const ZONES = [
  { id: 'core',  n: 'Vùng lõi',       rect: [14, 14, 26, 26], open: true },
  { id: 'west',  n: 'Rừng phía Tây',  rect: [0, 14, 14, 26], gate: 'bridge_w', lv: 4 },
  { id: 'north', n: 'Rừng phía Bắc',  rect: [14, 0, 26, 14], gate: 'bridge_n', lv: 7 },
  { id: 'old',   n: 'Rừng già',       rect: [0, 0, 14, 14], gate: 'stairs_old', lv: 11 },
];

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

  bread:      { n: 'Bánh mì',       icon: 'food/loaf', v: 10, energy: 4 },
  cookie:     { n: 'Bánh quy',      icon: 'food/cookie', v: 14, energy: 5 },
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
  fish:       { n: 'Cá biển',       icon: 'food/fish', v: 7 },
  bigfish:    { n: 'Cá vàng to',    icon: 'food/fish', tint: 0xffa040, v: 16 },
  grilledfish:{ n: 'Cá xiên nướng', icon: 'food/skewer', v: 30, energy: 8 },
  sushi:      { n: 'Sushi',         icon: 'food/sushi-salmon', v: 34, energy: 9 },
  // Vật liệu: mat 1 = thô (chặt vật cản mà có), mat 2 = bậc 2 (làm ở xưởng). Không tính vào sức chứa Kho
  wood:       { n: 'Gỗ',            v: 2, mat: 1 },
  stone:      { n: 'Đá',            v: 2, mat: 1 },
  bamboo:     { n: 'Tre',           v: 2, mat: 1 },
  palmleaf:   { n: 'Lá cọ',         v: 1, mat: 1 },
  clay:       { n: 'Đất sét',       v: 2, mat: 1 },
  liana:      { n: 'Dây leo',       v: 2, mat: 1 },
  planks:     { n: 'Ván gỗ',        v: 6, mat: 2 },
  rack:       { n: 'Giá gỗ',        v: 8, mat: 2 },
  firewood:   { n: 'Củi',           v: 4, mat: 2 },
  basket:     { n: 'Giỏ đan',       v: 8, mat: 2 },
  reedmat:    { n: 'Chiếu',         v: 8, mat: 2 },
  rope:       { n: 'Dây thừng',     v: 6, mat: 2 },
  torch:      { n: 'Đuốc',          v: 10, mat: 2 },
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
  apple:  { n: 'Cây táo',  lv: 3, cost: 80,  t: 120, yield: 'apple',   qty: 3, xp: 2, model: 'nature/tree_oak', fruit: 'food/apple', lush: { fruit: 0xe8352b } },
  orange: { n: 'Cây cam',  lv: 6, cost: 120, t: 150, yield: 'orange',  qty: 3, xp: 3, model: 'nature/tree_fat', fruit: 'food/orange', lush: { fruit: 0xff9a1f } },
  banana: { n: 'Cây chuối', lv: 7, cost: 140, t: 160, yield: 'banana', qty: 3, xp: 3, model: 'pirate/palm-bend', fruit: 'food/banana', palm: true },
  lemon:  { n: 'Cây chanh', lv: 8, cost: 160, t: 170, yield: 'lemon',  qty: 3, xp: 3, model: 'nature/tree_oak', fruit: 'food/lemon', lush: { fruit: 0xffe23a } },
  pear:   { n: 'Cây lê',    lv: 10, cost: 200, t: 190, yield: 'pear',  qty: 3, xp: 4, model: 'nature/tree_fat', fruit: 'food/pear', lush: { fruit: 0xc8e04a } },
  cherry: { n: 'Cây anh đào', lv: 12, cost: 260, t: 210, yield: 'cherry', qty: 3, xp: 4, model: 'nature/tree_oak', fruit: 'food/cherries', lush: { leaf: 0xff9cc8, leaf2: 0xffc2dc, fruit: 0xd81b3c, blossom: true } },
};

// ---------- Chuồng thú (3x3) ----------
export const PENS = {
  coop:   { n: 'Chuồng gà', lv: 1, cost: 80,  animal: 'pets/animal-chick', an: 'Gà',  feed: 'chickenfeed', prod: 'egg',      t: 60,  xp: 1, max: 6, animalCost: 30 },
  cowpen: { n: 'Chuồng bò', lv: 4, cost: 200, animal: 'quat/Cow.fbx',   an: 'Bò',  feed: 'cowfeed',     prod: 'milk',     t: 120, xp: 2, max: 5, animalCost: 80 },
  pigpen: { n: 'Chuồng heo',lv: 7, cost: 320, animal: 'quat/Pig.fbx',   an: 'Heo', feed: 'pigfeed',     prod: 'mushroom', t: 150, xp: 3, max: 5, animalCost: 120 },
  beehive:{ n: 'Vườn ong',  lv: 7, cost: 280, animal: 'pets/animal-bee',   an: 'Ong', feed: 'sunflower',   prod: 'honey',    t: 120, xp: 3, max: 4, animalCost: 100, fly: true },
};

// ---------- Nhà máy (2x2) ----------
export const FACTORIES = {
  // Hai xưởng làm vật liệu cho công trường (bậc 2)
  carpentry: { n: 'Xưởng mộc', lv: 1, cost: 40, rec: [
    { out: 'planks',   qty: 2, in: { wood: 3 }, t: 30, lv: 1 },
    { out: 'firewood', qty: 2, in: { wood: 1 }, t: 20, lv: 1 },
    { out: 'rack',     in: { wood: 2, liana: 1 }, t: 45, lv: 2 },
  ]},
  weaving: { n: 'Nhà đan lát', lv: 3, cost: 120, rec: [
    { out: 'basket', in: { palmleaf: 3 }, t: 30, lv: 3 },
    { out: 'reedmat', in: { palmleaf: 2, bamboo: 2 }, t: 45, lv: 3 },
    { out: 'rope',   in: { liana: 1, palmleaf: 2 }, t: 60, lv: 4 },
    { out: 'torch',  in: { firewood: 1, palmleaf: 1 }, t: 40, lv: 4 },
  ]},
  feedmill: { n: 'Máy xay thức ăn', lv: 1, cost: 60, rec: [
    { out: 'chickenfeed', qty: 3, in: { wheat: 2 }, t: 20, lv: 1 },
    { out: 'cowfeed',     qty: 3, in: { corn: 2 },  t: 30, lv: 4 },
    { out: 'pigfeed',     qty: 3, in: { carrot: 2 }, t: 40, lv: 7 },
  ]},
  bakery: { n: 'Lò bánh', lv: 2, cost: 120, rec: [
    { out: 'bread',    in: { wheat: 3 }, t: 40, lv: 1 }, // cấp 1: lò bánh đổ nát sửa xong ở hướng dẫn là nướng được ngay
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
  seafood: { n: 'Quán hải sản', lv: 5, cost: 300, rec: [
    { out: 'grilledfish', in: { fish: 2, corn: 1 }, t: 70, lv: 5 },
    { out: 'sushi',       in: { fish: 1, cabbage: 1 }, t: 80, lv: 9 },
    { out: 'soup',        in: { bigfish: 1, carrot: 1, tomato: 1 }, t: 80, lv: 6 },
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

// ---------- Người giúp việc (2x2): tự gom vật liệu, kể cả lúc tắt game ----------
// every: giây giữa hai món; gives: thứ tự các món gom được (lặp vòng); cap[lvl]: túi chứa tối đa;
// up[lvl]: vật liệu nâng từ cấp lvl lên lvl + 1
export const HELPERS = {
  lumberjack: { n: 'Nhà tiều phu', lv: 2, cost: 80, every: 90, gives: ['wood', 'wood', 'bamboo', 'palmleaf', 'liana'], cap: [10, 20, 30],
    up: [{ planks: 6, rope: 2 }, { planks: 12, rack: 4 }] },
};

// ---------- Công trường: vật liệu cần góp theo từng giai đoạn ----------
// key '<k>:<t>' (xem keyOf trong build.js). Giai đoạn 1 chỉ dùng thứ lấy được ở cấp mở công trình (có test)
const FAC_LATE = [{ planks: 10, stone: 10 }, { rope: 3, basket: 4 }, { torch: 4, reedmat: 4 }];
export const BUILD = {
  'fac:carpentry': [{ wood: 6, stone: 3 }],
  'fac:feedmill':  [{ wood: 6, palmleaf: 4 }],
  'fac:bakery':    [{ wood: 8, stone: 6 }, { planks: 4, palmleaf: 6 }],
  'fac:weaving':   [{ wood: 10, bamboo: 6 }, { planks: 6, palmleaf: 8 }],
  'fac:dairy':     [{ planks: 6, stone: 10 }, { reedmat: 3, firewood: 6 }],
  'fac:juicebar':  [{ planks: 8, bamboo: 8 }, { basket: 4, rope: 2 }],
  'fac:kitchen':   [{ stone: 14, planks: 8 }, { firewood: 8, clay: 6 }, { torch: 3, reedmat: 3 }],
  'fac:seafood':   FAC_LATE, 'fac:sweets': FAC_LATE, 'fac:jammaker': FAC_LATE,
  'pen:coop':      [{ wood: 6, palmleaf: 6 }],
  'pen:cowpen':    [{ wood: 12, planks: 4 }, { rope: 2, palmleaf: 10 }],
  'pen:pigpen':    [{ wood: 12, stone: 8 }, { planks: 6, rope: 3 }],
  'pen:beehive':   [{ planks: 6, basket: 3 }],
  'gate:bridge_w':   [{ wood: 10, bamboo: 8 }, { planks: 6, rope: 2 }],
  'gate:bridge_n':   [{ planks: 12, rope: 4 }, { stone: 20, torch: 3 }],
  'gate:stairs_old': [{ stone: 30, planks: 15 }, { rope: 6, torch: 6 }, { reedmat: 6, rack: 4 }],
  'helper:lumberjack': [{ wood: 8, stone: 4 }],
  'ruin:house':  [{ wood: 4, palmleaf: 4 }],
  'ruin:bakery': [{ wood: 4, stone: 3 }],
  'ruin:boat':   [{ planks: 3, palmleaf: 5 }],
};
// nhà máy chưa có trong bảng thì dùng giai đoạn của quán hải sản
for (const t of Object.keys(FACTORIES)) BUILD['fac:' + t] ||= FAC_LATE;

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
  dog:         { n: 'Cún con',       lv: 3, cost: 120, model: 'quat/Pug.fbx', pet: true, fit: { h: 0.45 } },
  well:        { n: 'Giếng nước',    lv: 2, cost: 45,  model: 'kk/buildings/blue/building_well_blue.gltf', fit: { size: 0.95 } },
  path:        { n: 'Đường lát gạch', lv: 1, cost: 4,  proc: 'brick' },
  flowerbed:   { n: 'Luống hoa cúc', lv: 1, cost: 12, proc: 'flowerbed' },
  whitefence:  { n: 'Hàng rào trắng', lv: 1, cost: 6,  proc: 'fence' },
  wheelbarrow: { n: 'Xe cút kít',    lv: 2, cost: 25,  model: 'kk/decoration/props/wheelbarrow.gltf', fit: { size: 0.85 } },
  haysack:     { n: 'Bao lúa',       lv: 1, cost: 10,  model: 'kk/decoration/props/sack.gltf', fit: { size: 0.6 } },
  sheepdeco:   { n: 'Cừu non',       lv: 4, cost: 140, model: 'quat/Sheep.fbx', pet: true, fit: { h: 0.55 } },
  horse:       { n: 'Ngựa con',      lv: 6, cost: 260, model: 'quat/Horse.fbx', pet: true, fit: { h: 0.95 } },
  llama:       { n: 'Lạc đà Alpaca', lv: 8, cost: 300, model: 'quat/Llama.fbx', pet: true, fit: { h: 0.9 } },
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

// ---------- Chướng ngại vật (chặt nhiều nhát, mỗi nhát tốn 1 năng lượng) ----------
// hp: số nhát; drop: vật liệu rơi mỗi nhát {món: [min, max]}; rare: xác suất rơi thêm mỗi nhát;
// chest: xác suất ra rương khi chặt xong; regrow: có thể mọc lại trong vùng mở (xem REGROW_MIX).
// Hình (proc/model/fit) chỉ có ở 5 loại cũ; loại mới dùng hình tạm trong entities.js
export const OBSTACLES = {
  grass:     { n: 'Bụi cỏ',     hp: 2,  drop: { palmleaf: [1, 1] }, chest: 0,    regrow: true },
  bush:      { n: 'Bụi rậm',    hp: 2,  drop: { palmleaf: [1, 1] }, chest: 0.05, regrow: true, proc: 'bush' },
  bamboo:    { n: 'Bụi tre',    hp: 3,  drop: { bamboo: [1, 1] },   rare: { liana: 0.15 }, chest: 0.05, regrow: true },
  stump:     { n: 'Gốc cây',    hp: 3,  drop: { wood: [1, 1] },     chest: 0.1,  regrow: true, model: 'nature/stump_round', fit: { size: 0.6 } },
  logs:      { n: 'Đống gỗ',    hp: 3,  drop: { wood: [1, 2] },     chest: 0.1,  model: 'kk/decoration/props/resource_lumber.gltf', fit: { size: 0.8 } },
  rock:      { n: 'Tảng đá',    hp: 4,  drop: { stone: [1, 1] },    chest: 0.15, regrow: true, model: 'kk/decoration/nature/rock_single_B.gltf', fit: { size: 0.85 } },
  claymound: { n: 'Gò đất sét', hp: 4,  drop: { clay: [1, 1] },     chest: 0.15, regrow: true },
  tree:      { n: 'Cây rừng',   hp: 6,  drop: { wood: [1, 1] },     rare: { liana: 0.25 }, chest: 0.3, proc: 'tree' },
  bigtree:   { n: 'Cây cổ thụ', hp: 12, drop: { wood: [1, 2] },     rare: { liana: 0.3 },  chest: 0.6 },
  bigrock:   { n: 'Tảng đá lớn', hp: 12, drop: { stone: [1, 2] },   chest: 0.6 },
};

// Vật cản mọc lại trong vùng đang mở (lặp lại một loại = hay mọc hơn): nguồn vật liệu thô không bao giờ cạn,
// kể cả bản cũ đã dọn sạch vùng lõi (dây leo rơi hiếm từ bụi tre; đá, đất sét, gỗ thỉnh thoảng mới có).
// Mọi loại ở đây phải có regrow: true (có test)
export const REGROW_MIX = ['grass', 'bush', 'bamboo', 'grass', 'bush', 'bamboo', 'stump', 'rock', 'claymound'];

// Loại vật cản mọc ở từng vùng (lặp lại một loại = tỉ lệ cao hơn)
const MIX_LOW = ['grass', 'bush', 'bamboo', 'stump', 'logs', 'rock', 'claymound', 'tree'];
const MIX_HIGH = [...MIX_LOW, 'bigtree', 'bigrock'];
export const JUNGLE_MIX = { core: MIX_LOW, west: MIX_LOW, north: MIX_HIGH, old: MIX_HIGH };

// Giá mua ô ruộng thứ n (n tính từ 0)
export const fieldCost = n => (n < 6 ? 0 : 10 + (n - 6) * 6);
export const xpNeed = l => 10 + l * 12;
// Năng lượng tự hồi tới giới hạn theo cấp (quà, rương, bãi biển, món ăn thì được vượt)
export const energyMax = level => 30 + Math.floor(level / 2);
export const ENERGY_REGEN = 30; // giây hồi 1 năng lượng
// Đồ nhặt trên bãi cát quanh đảo: chạm để nhận năng lượng
export const BEACH = {
  starfish: { n: 'Sao biển', energy: 2 },
  shell:    { n: 'Vỏ sò',    energy: 3 },
  crab:     { n: 'Cua nhỏ',  energy: 5 },
};
export const BEACH_MAX = 6, BEACH_EVERY = 240; // tối đa 6 món; cứ 240 giây thêm một món
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

// ---------- Hướng dẫn đầu game (chỉ ván mới) ----------
// Cùng cấu trúc QUESTS; ev 'build' với key công trình (xem keyOf trong build.js), 'sail' đếm khi mở màn Phiêu lưu.
// energy: thưởng thêm năng lượng. Xong hết thì chạy tiếp QUESTS từ đầu.
export const TUTORIAL = [
  { who: 'maisie', text: 'Bão làm nhà mình hỏng mất rồi! Góp gỗ và lá cọ để sửa nhà nhé.', ev: 'build', key: 'ruin:house', n: 1, coins: 20, xp: 6, energy: 10 },
  { who: 'maisie', text: 'Nhà đẹp lại rồi! Thu hoạch 3 lúa mì nào.', ev: 'harvest', key: 'wheat', n: 3, coins: 15, xp: 5 },
  { who: 'tom', text: 'Gà đói rồi! Ra máy xay làm thức ăn rồi cho gà ăn nhé.', ev: 'feed', n: 1, coins: 20, xp: 6 },
  { who: 'maisie', text: 'Chặt 3 bụi cây hoặc cây rừng để lấy vật liệu nhé.', ev: 'clear', n: 3, coins: 20, xp: 6 },
  { who: 'ben', text: 'Lò bánh bị đổ rồi. Sửa giúp anh nhé!', ev: 'build', key: 'ruin:bakery', n: 1, coins: 30, xp: 8, energy: 10 },
  { who: 'ben', text: 'Nướng 1 ổ bánh mì. Ăn bánh mì sẽ có thêm năng lượng đó!', ev: 'make', key: 'bread', n: 1, coins: 25, xp: 8 },
  { who: 'sam', text: 'Mua Xưởng mộc ở cửa hàng và xây xong nhé.', ev: 'build', key: 'fac:carpentry', n: 1, coins: 30, xp: 10 },
  { who: 'sam', text: 'Làm 3 tấm ván gỗ ở Xưởng mộc.', ev: 'make', key: 'planks', n: 3, coins: 30, xp: 10 },
  { who: 'sam', text: 'Sửa chiếc thuyền ở bến để ra khơi!', ev: 'build', key: 'ruin:boat', n: 1, coins: 40, xp: 12, energy: 10 },
  { who: 'maisie', text: 'Thuyền xong rồi! Mình cùng ra khơi phiêu lưu nào!', ev: 'sail', n: 1, coins: 40, xp: 12 },
];
// Đồ đổ nát của ván mới: t -> k của vật sau khi sửa (khóa công trường 'ruin:<t>')
export const RUINS = { house: 'house', bakery: 'fac', boat: 'boat' };

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
      ['kk/decoration/nature/trees_A_medium.gltf', { size: 0.98 }, 3, 2], ['kk/decoration/nature/rock_single_B.gltf', { size: 0.85 }, 2, 2],
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
  gain: { harvest: 1, collect: 1, make: 1, deliver: 3, crate: 2, clear: 1, visitor: 3, chest: 3, help: 1 },
  tiers: [
    { at: 20, coins: 80 }, { at: 50, gems: 3 }, { at: 90, coins: 200 },
    { at: 140, decor: 'sandcastle' }, { at: 200, gems: 10 }, { at: 280, decor: 'goldboat' },
  ],
};

// Nhà và nhà máy dùng bộ KayKit Medieval Hexagon (CC0)
const KK = (b, c) => `kk/buildings/${c}/building_${b}_${c}.gltf`;
export const BUILDING_MODELS = {
  house:    { model: KK('home_B', 'blue'), size: 2.5, rot: 0 },
  barn:     { model: KK('home_A', 'red'), size: 1.75, rot: 0 },
  market:   { model: KK('market', 'red'), size: 1.9, rot: 0 },
  feedmill: { model: KK('windmill', 'yellow'), size: 2.1, rot: 0, spin: 'fan', axis: 'z' },
  bakery:   { model: KK('blacksmith', 'red'), size: 1.85, rot: 0 },
  dairy:    { model: KK('watermill', 'blue'), size: 1.75, rot: 0, spin: 'wheel', axis: 'x' },
  juicebar: { model: KK('tavern', 'green'), size: 1.75, rot: 0 },
  seafood:  { model: KK('home_A', 'blue'), size: 1.6, rot: 0 },
  kitchen:  { model: KK('home_A', 'green'), size: 1.6, rot: 0 },
  sweets:   { model: KK('market', 'yellow'), size: 1.9, rot: 0 },
  jammaker: { model: KK('home_B', 'yellow'), size: 1.6, rot: 0 },
  // Hình tạm cho hai xưởng vật liệu: nhà kho / chợ thu nhỏ
  carpentry: { model: KK('home_A', 'red'), size: 1.4, rot: 0 },
  weaving:   { model: KK('market', 'red'), size: 1.5, rot: 0 },
};
// Hình 2D tạm của nhà máy chưa có ảnh riêng: mượn hình có sẵn, thu nhỏ
export const FAC_SPRITE = {}; // xưởng nào chưa có hình riêng thì mượn hình có sẵn: { sprite, scale }
// Hình 2D tạm của người giúp việc: mượn hình có sẵn, thu nhỏ
export const HELPER_SPRITE = {}; // người giúp việc chưa có hình riêng thì mượn hình có sẵn: { sprite, scale }

// Đường gạch và luống hoa trang trí sẵn quanh nhà (kiểu Family Farm)
// Tọa độ ô theo vùng lõi cũ; khi dùng phải cộng OFF
export const STARTER_DECOR = [
  ...[7, 8, 9, 10, 11].map(z => ['path', 12, z]),
  ...[7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18].map(x => ['path', x, 12]),
  ['path', 12, 12],
  ['flowerbed', 11, 7], ['flowerbed', 13, 7], ['flowerbed', 9, 6], ['flowerbed', 10, 6],
  ['flowerbed', 14, 7], ['flowerbed', 17, 7], ['flowerbed', 18, 8],
];

// Hình 2D vẽ tay (AI vẽ, ảnh trong public/sprites). width: bề rộng ảnh tính theo ô đất.
export const SPRITE_ART = {
  house: { width: 3.7 }, ruin_house: { width: 3.7 }, carpentry: { width: 2.6 }, weaving: { width: 2.6 }, lumberjack: { width: 2.5 }, jungletree: { width: 1.7 }, bamboo: { width: 1.05 }, barn: { width: 2.7 }, feedmill: { width: 2.9 }, bakery: { width: 2.6 },
  market: { width: 2.7 }, board: { width: 2.0 }, coop: { width: 1.25 }, cowshed: { width: 1.7 }, pigsty: { width: 1.6 },
  chicken: { width: 0.55 }, cow: { width: 1.05 }, pig: { width: 0.85 },
  wheat: { width: 1.3 }, corn: { width: 1.3 }, carrot: { width: 1.3 }, sprout: { width: 1.2 },
  appletree: { width: 1.7 }, leafytree: { width: 1.6 }, palm: { width: 1.7 },
  maisie: { width: 0.75 }, bush: { width: 0.95 }, rock: { width: 0.9 },
  dairy: { width: 2.6 }, juicebar: { width: 2.6 }, kitchen: { width: 2.7 }, seafood: { width: 2.6 },
  sweets: { width: 2.6 }, jammaker: { width: 2.7 }, beehive: { width: 1.5 }, ship: { width: 3.6 },
  strawberry: { width: 1.3 }, tomato: { width: 1.3 }, pumpkin: { width: 1.3 }, sunflower: { width: 1.25 },
  melon: { width: 1.3 }, cabbage: { width: 1.3 }, onion: { width: 1.25 }, bananatree: { width: 1.8 },
  orangetree: { width: 1.7 }, lemontree: { width: 1.7 }, peartree: { width: 1.7 }, cherrytree: { width: 1.75 },
  goldboat: { width: 1.9 }, boat: { width: 1.8 }, tent: { width: 1.3 }, sandcastle: { width: 1.8 },
  well: { width: 1.05 }, cart: { width: 1.1 }, fountain: { width: 1.95 }, lighthouse: { width: 1.5 },
  flower_red: { width: 0.6 }, flower_yel: { width: 0.6 }, flower_pur: { width: 0.6 }, flower_red2: { width: 0.65 },
  mushroomdeco: { width: 0.5 }, lantern: { width: 0.5 }, barrel: { width: 0.55 }, chest: { width: 0.7 }, crate: { width: 0.7 },
  haysack: { width: 0.55 }, campfire: { width: 0.75 }, hedge: { width: 0.95 }, flag: { width: 0.7 },
  stump: { width: 0.7 }, logs: { width: 0.85 }, bee: { width: 0.3 }, bench: { width: 0.9 }, wheelbarrow: { width: 0.85 },
  tom: { width: 0.72 }, lily: { width: 0.68 }, ben: { width: 0.75 }, rosa: { width: 0.62 }, sam: { width: 0.75 },
  gull1: { width: 0.9 }, gull2: { width: 0.9 }, pier: { width: 4.6 }, grasstuft: { width: 0.6 }, daisies: { width: 0.85 },
  fence: { width: 1.05 }, axe: { width: 0.5 }, signboard: { width: 1 }, bucket: { width: 0.4 }, fishingrod: { width: 0.9 },
  soil: { width: 1.3 }, trough: { width: 0.8 },
  dog: { width: 0.62 }, cat: { width: 0.58 }, bunny: { width: 0.52 }, parrot: { width: 0.6 }, penguin: { width: 0.56 },
  sheepdeco: { width: 0.7 }, horse: { width: 0.85 }, llama: { width: 0.6 }, crab: { width: 0.6 },
};
export const PEN_SPRITE = { coop: 'chicken', cowpen: 'cow', pigpen: 'pig', beehive: 'bee' };
export const TREE_SPRITE = { apple: 'appletree', palm: 'palm', banana: 'bananatree', orange: 'orangetree', lemon: 'lemontree', pear: 'peartree', cherry: 'cherrytree' };
// Đồ trang trí: tên hình 2D (mặc định trùng tên món)
export const DECOR_SPRITE = { palmdeco: 'palm', flowerbed: 'daisies', whitefence: 'fence' };
// Mô hình 3D -> hình 2D thay thế (dùng ở màn phiêu lưu và bến tàu)
export const MODEL_SPRITE = {
  'nature/plant_bushLarge': 'bush', 'pirate/crate': 'crate', 'pirate/crate-bottles': 'crate', 'pirate/barrel': 'barrel',
  'pirate/rocks-sand-a': 'rock', 'pirate/rocks-a': 'rock', 'kk/decoration/nature/rock_single_B.gltf': 'rock',
  'pirate/palm-straight': 'palm', 'pirate/palm-bend': 'palm', 'nature/tree_palmTall': 'palm',
  'kk/decoration/nature/trees_A_medium.gltf': 'leafytree', 'nature/stump_old': 'stump', 'nature/log_stack': 'logs',
  'nature/mushroom_red': 'mushroomdeco', 'pirate/chest': 'chest', 'pirate/boat-row-small': 'boat',
  'nature/grass_large': 'grasstuft', 'survival/bucket': 'bucket', 'pirate/tool-paddle': 'fishingrod', 'survival/box-large': 'trough',
  'pets/animal-crab': 'crab', 'pets/animal-parrot': 'parrot', 'pets/animal-penguin': 'penguin',
};
// Biểu tượng vẽ tay trong public/items/ (ngoài các món trong ITEMS)
export const ITEM_ICONS_EXTRA = ['shell', 'coin', 'gem', 'energy', 'star'];
