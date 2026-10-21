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
  // quà mang về từ ba đảo có truyện (không bán trong cửa hàng)
  kitten:      { n: 'Mèo con nghịch ngợm', lv: 99, cost: 0, model: 'pets/animal-cat', pet: true, fit: { h: 0.6 }, gift: true },
  minilight:   { n: 'Hải đăng nhỏ',  lv: 99, cost: 0,  model: 'pirate/tower-complete-small', fit: { size: 1.9 }, w: 2, d: 2, gift: true },
  lotuspond:   { n: 'Ao sen',        lv: 99, cost: 0,  model: 'town/fountain-round', fit: { size: 1.9 }, w: 2, d: 2, gift: true },
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
// Ao sen trên đảo nhà (quà đảo Lá Buồm): cứ 4 giờ cho 5 năng lượng, bé chạm để nhận
export const LOTUS = { every: 4 * 3600, energy: 5 };
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

// ---------- Hướng dẫn đầu game (chỉ ván mới) ----------
// ev: tên sự kiện, key: vật phẩm (tuỳ chọn), n: số lần; ev 'build' với key công trình (xem keyOf trong build.js), 'sail' đếm khi mở màn Phiêu lưu.
// energy: thưởng thêm năng lượng. Xong hết thì nhiệm vụ truyện và việc vặt (quests.js) mở ra.
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

// ---------- Nhiệm vụ có truyện (giai đoạn B) ----------
// Sự kiện mà một yêu cầu có thể đếm. Không có 'loot' và 'buyanimal' (có thể bị chặn hoặc ngẫu nhiên -> làm bé kẹt)
export const REQ_EVENTS = ['harvest', 'plant', 'make', 'feed', 'collect', 'deliver', 'clear', 'crate', 'buydecor', 'buytree', 'build', 'beach', 'sail'];
// Một mạch truyện gồm 3 bước làm lần lượt; bước mở khi S.level >= max(arc.lv, step.lv || 0).
// who: người giao; text: một dòng mô tả; talk: lời thoại lúc nhận; outro: lời thoại lúc xong.
// reqs: { ev, key, n } (key là vật phẩm cho harvest/make/collect, khoá công trình cho build).
// Thưởng mỗi bước ~ coins 20 + cấp * 10, xp 6 + cấp * 2; bước cuối thêm 2 kim cương.
export const STORIES = [
  { id: 've-dao', n: 'Về đảo của ông bà', lv: 1, steps: [
    { who: 'rosa', lv: 2, text: 'Gặt 6 lúa mì và nướng 2 ổ bánh mì cho bà Rosa.',
      talk: [['rosa', 'Maisie! Cháu về rồi à? Bà nhớ ông bà của cháu lắm.'], ['maisie', 'Cháu chào bà Rosa! Bão làm đảo hỏng nhiều quá. Cháu về để sửa lại.'], ['rosa', 'Giỏi lắm! Trước tiên cháu cần ăn no đã. Gặt lúa mì rồi nướng bánh mì nhé.']],
      outro: [['rosa', 'Bánh mì thơm quá! Ông bà cháu cũng hay nướng bánh như vậy đó.']],
      reqs: [{ ev: 'harvest', key: 'wheat', n: 6 }, { ev: 'make', key: 'bread', n: 2 }], coins: 40, xp: 10 },
    { who: 'maisie', lv: 1, text: 'Dọn 5 bụi cây và làm 2 tấm ván gỗ.',
      talk: [['maisie', 'Bà Rosa kể ông bà từng sửa nhà bằng ván gỗ.'], ['maisie', 'Mình dọn bớt bụi rậm lấy gỗ, rồi làm ván ở Xưởng mộc nhé!']],
      outro: [['maisie', 'Có ván gỗ rồi! Đảo sắp đẹp lại rồi.']],
      reqs: [{ ev: 'clear', n: 5 }, { ev: 'make', key: 'planks', n: 2 }], coins: 30, xp: 8 },
    { who: 'rosa', lv: 3, text: 'Xây Nhà đan lát và đan 1 chiếc giỏ.',
      talk: [['rosa', 'Ông bà cháu hay đan giỏ để đựng quả đó.'], ['rosa', 'Cháu xây Nhà đan lát rồi đan thử một chiếc giỏ nhé.'], ['maisie', 'Dạ! Cháu sẽ cố gắng ạ.']],
      outro: [['rosa', 'Chiếc giỏ đẹp quá! Ông bà cháu mà thấy chắc vui lắm.'], ['maisie', 'Cháu sẽ giữ gìn đảo thật tốt ạ!']],
      reqs: [{ ev: 'build', key: 'fac:weaving', n: 1 }, { ev: 'make', key: 'basket', n: 1 }], coins: 50, xp: 12, gems: 2 },
  ] },
  { id: 'dan-ga', n: 'Đàn gà của bác Tom', lv: 1, steps: [
    { who: 'tom', lv: 1, text: 'Làm 2 mẻ thức ăn và cho gà ăn 2 lần.',
      talk: [['tom', 'Maisie ơi, đàn gà của ông bà cháu đói cả buổi rồi.'], ['maisie', 'Cháu giúp bác ạ! Cháu làm thức ăn thế nào ạ?'], ['tom', 'Ra máy xay làm thức ăn, rồi cho gà ăn nhé.']],
      outro: [['tom', 'Cục ta cục tác! Gà vui lắm kìa.']],
      reqs: [{ ev: 'make', key: 'chickenfeed', n: 2 }, { ev: 'feed', n: 2 }], coins: 30, xp: 8 },
    { who: 'tom', lv: 1, text: 'Nhặt 4 quả trứng.',
      talk: [['tom', 'Gà ăn no thì sẽ đẻ trứng.'], ['tom', 'Cháu nhặt giúp bác 4 quả trứng nhé.']],
      outro: [['tom', 'Trứng còn ấm nữa! Cảm ơn cháu.']],
      reqs: [{ ev: 'collect', key: 'egg', n: 4 }], coins: 30, xp: 8 },
    { who: 'tom', lv: 2, text: 'Giao 3 đơn hàng.',
      talk: [['tom', 'Có nhiều người muốn mua trứng và rau của đảo mình đó.'], ['maisie', 'Cháu giao hàng giúp bác nhé!'], ['tom', 'Ừ, nhìn bảng đơn hàng và giao 3 đơn nhé.']],
      outro: [['tom', 'Cháu giỏi như ông bà ngày xưa vậy.'], ['maisie', 'Hì hì, cháu cảm ơn bác Tom!']],
      reqs: [{ ev: 'deliver', n: 3 }], coins: 40, xp: 10, gems: 2 },
  ] },
  { id: 'thuyen', n: 'Chiếc thuyền của chú Sam', lv: 2, steps: [
    { who: 'sam', lv: 2, text: 'Đóng đầy 2 thùng hàng trên tàu.',
      talk: [['sam', 'Chào Maisie! Tàu hàng cập bến rồi đó.'], ['sam', 'Chú cần người đóng thùng hàng. Cháu giúp chú 2 thùng nhé?'], ['maisie', 'Dạ được ạ!']],
      outro: [['sam', 'Nhanh quá! Chú thấy cháu làm việc giỏi lắm.']],
      reqs: [{ ev: 'crate', n: 2 }], coins: 40, xp: 10 },
    { who: 'sam', lv: 4, text: 'Làm 2 sợi dây thừng và giao 2 đơn hàng.',
      talk: [['sam', 'Thuyền của chú cần dây thừng mới để buộc buồm.'], ['maisie', 'Cháu làm dây ở Nhà đan lát nhé chú?'], ['sam', 'Đúng rồi. Giao thêm 2 đơn hàng để chú mua gỗ nữa nhé.']],
      outro: [['sam', 'Dây chắc quá! Buồm buộc xong rồi.']],
      reqs: [{ ev: 'make', key: 'rope', n: 2 }, { ev: 'deliver', n: 2 }], coins: 60, xp: 14 },
    { who: 'sam', lv: 4, text: 'Ra khơi phiêu lưu 1 chuyến.',
      talk: [['sam', 'Thuyền đã sẵn sàng. Ra khơi thử một chuyến nào!'], ['maisie', 'Cháu hơi hồi hộp, nhưng cháu muốn đi ạ.']],
      outro: [['sam', 'Gió đẹp quá! Có thuyền rồi, mình khám phá được nhiều nơi.'], ['maisie', 'Cảm ơn chú Sam nhiều ạ!']],
      reqs: [{ ev: 'sail', n: 1 }], coins: 60, xp: 14, gems: 2 },
  ] },
  { id: 'banh-ba', n: 'Bánh của bà Rosa', lv: 3, steps: [
    { who: 'rosa', lv: 3, text: 'Làm 2 hộp bánh quy.',
      talk: [['rosa', 'Maisie này, ông bà cháu hay nướng bánh quy vào ngày này.'], ['rosa', 'Bà muốn làm lại, nhưng tay bà mỏi rồi. Cháu giúp bà nhé?']],
      outro: [['rosa', 'Thơm quá! Cảm ơn cháu nhiều.']],
      reqs: [{ ev: 'make', key: 'cookie', n: 2 }], coins: 50, xp: 12 },
    { who: 'ben', lv: 4, text: 'Hái 6 quả dâu tây và làm 1 miếng phô mai.',
      talk: [['ben', 'Chào Maisie! Bà Rosa muốn làm bánh kem, anh phải chuẩn bị đồ.'], ['ben', 'Em hái giúp anh 6 quả dâu và làm một miếng phô mai nhé.'], ['maisie', 'Dạ, em làm ngay ạ!']],
      outro: [['ben', 'Dâu đỏ mọng luôn! Em giỏi lắm.']],
      reqs: [{ ev: 'harvest', key: 'strawberry', n: 6 }, { ev: 'make', key: 'cheese', n: 1 }], coins: 60, xp: 14 },
    { who: 'rosa', lv: 6, text: 'Làm 1 chiếc bánh kem.',
      talk: [['rosa', 'Giờ cháu có đủ đồ rồi. Làm một chiếc bánh kem thật đẹp nhé.'], ['maisie', 'Cháu sợ làm không đẹp ạ.'], ['rosa', 'Đừng lo. Làm bằng cả tấm lòng là đẹp nhất.']],
      outro: [['rosa', 'Đúng vị bánh ngày xưa rồi! Bà nhớ ông bà cháu quá.'], ['maisie', 'Cháu cũng nhớ ông bà ạ.']],
      reqs: [{ ev: 'make', key: 'cake', n: 1 }], coins: 80, xp: 18, gems: 2 },
  ] },
  { id: 'vuon-lily', n: 'Khu vườn của cô Lily', lv: 3, steps: [
    { who: 'lily', lv: 3, text: 'Mua 1 món trang trí và 1 cái cây.',
      talk: [['lily', 'Maisie ơi, cô thích khu vườn thật xinh.'], ['lily', 'Cháu mua một món trang trí và trồng một cái cây cho vườn nhé.']],
      outro: [['lily', 'Đẹp ghê! Khu vườn sáng bừng lên rồi.']],
      reqs: [{ ev: 'buydecor', n: 1 }, { ev: 'buytree', n: 1 }], coins: 50, xp: 12 },
    { who: 'lily', lv: 5, text: 'Hái 6 quả cà chua và làm 1 cốc nước táo.',
      talk: [['lily', 'Cô muốn mời mọi người một bữa nhẹ trong vườn.'], ['maisie', 'Cháu hái cà chua và ép nước táo nhé cô?'], ['lily', 'Đúng rồi. Cô cảm ơn cháu.']],
      outro: [['lily', 'Cà chua tươi quá! Nước táo thơm nữa.']],
      reqs: [{ ev: 'harvest', key: 'tomato', n: 6 }, { ev: 'make', key: 'applejuice', n: 1 }], coins: 70, xp: 16 },
    { who: 'lily', lv: 6, text: 'Hái 6 bông hướng dương.',
      talk: [['lily', 'Vườn còn thiếu một màu vàng thật rực.'], ['lily', 'Hoa hướng dương là hợp nhất. Cháu hái 6 bông nhé.']],
      outro: [['lily', 'Vàng rực như mặt trời vậy!'], ['maisie', 'Vườn đẹp quá, cháu thích lắm!']],
      reqs: [{ ev: 'harvest', key: 'sunflower', n: 6 }], coins: 80, xp: 18, gems: 2 },
  ] },
  { id: 'ong-kai', n: 'Ông Kai trong rừng', lv: 4, steps: [
    { who: 'kai', lv: 4, text: 'Dọn 8 bụi cây và nhặt 3 món ở bãi biển.',
      talk: [['kai', 'Chào cháu. Ông là Kai, ông sống trong rừng này.'], ['kai', 'Ông biết nhiều lối đi trên đảo, nhưng rừng rậm quá. Cháu dọn giúp ông nhé.'], ['maisie', 'Dạ, cháu chào ông Kai! Cháu giúp ông ạ.']],
      outro: [['kai', 'Rừng thoáng hơn rồi. Cảm ơn cháu.']],
      reqs: [{ ev: 'clear', n: 8 }, { ev: 'beach', n: 3 }], coins: 60, xp: 14 },
    { who: 'kai', lv: 4, text: 'Sửa Cầu tre phía tây.',
      talk: [['kai', 'Phía tây có một lối đi cũ, nhưng cầu tre bị bão làm gãy.'], ['kai', 'Cháu sửa cầu giúp ông, mình sẽ đi qua được.']],
      outro: [['kai', 'Cầu chắc lắm! Giờ ông đi lại dễ rồi.']],
      reqs: [{ ev: 'build', key: 'gate:bridge_w', n: 1 }], coins: 60, xp: 14 },
    { who: 'maisie', lv: 5, text: 'Làm 2 cây đuốc và dọn 10 bụi cây.',
      talk: [['maisie', 'Ông Kai nói trong rừng tối lắm.'], ['maisie', 'Mình làm đuốc để soi đường và dọn thêm bụi rậm nhé!']],
      outro: [['maisie', 'Đuốc sáng quá! Rừng không còn đáng sợ nữa.'], ['kai', 'Cháu gan dạ lắm. Ông bà cháu cũng sẽ rất tự hào.']],
      reqs: [{ ev: 'make', key: 'torch', n: 2 }, { ev: 'clear', n: 10 }], coins: 70, xp: 16, gems: 2 },
  ] },
  { id: 'mat-ong', n: 'Mật ong của bác Tom', lv: 7, steps: [
    { who: 'tom', lv: 7, text: 'Thu 2 hũ mật ong.',
      talk: [['tom', 'Maisie, ong của bác làm tổ xong rồi.'], ['tom', 'Cháu thu giúp bác 2 hũ mật nhé. Cẩn thận ong nha!']],
      outro: [['tom', 'Ngọt thơm quá! Cảm ơn cháu.']],
      reqs: [{ ev: 'collect', key: 'honey', n: 2 }], coins: 90, xp: 20 },
    { who: 'tom', lv: 7, text: 'Thu 3 cây nấm.',
      talk: [['tom', 'Bác còn muốn nấu món nấm thơm.'], ['tom', 'Heo của bác tìm được nấm đó. Cháu nhặt 3 cây giúp bác nhé.']],
      outro: [['tom', 'Nấm to quá! Tối nay bác nấu món ngon.']],
      reqs: [{ ev: 'collect', key: 'mushroom', n: 3 }], coins: 90, xp: 20 },
    { who: 'sam', lv: 8, text: 'Đóng đầy 6 thùng hàng trên tàu.',
      talk: [['sam', 'Bác Tom muốn gửi mật ong và nấm đi xa.'], ['sam', 'Chú cần 6 thùng hàng để chất lên tàu. Cháu giúp chú nhé.'], ['maisie', 'Dạ được ạ!']],
      outro: [['sam', 'Tàu đầy hàng rồi. Mọi người sẽ được ăn đồ của đảo mình.'], ['maisie', 'Cháu vui quá!']],
      reqs: [{ ev: 'crate', n: 6 }], coins: 100, xp: 22, gems: 2 },
  ] },
  { id: 'tiec-dao', n: 'Bữa tiệc trên đảo', lv: 9, steps: [
    { who: 'maisie', lv: 9, text: 'Làm 2 chiếc bánh vòng.',
      talk: [['maisie', 'Đảo mình đẹp lại rồi! Mình mở một bữa tiệc nhé.'], ['maisie', 'Đầu tiên, cháu làm bánh vòng ngọt cho mọi người.']],
      outro: [['maisie', 'Bánh vòng thơm phức! Ai cũng sẽ thích.']],
      reqs: [{ ev: 'make', key: 'donut', n: 2 }], coins: 110, xp: 24 },
    { who: 'rosa', lv: 10, text: 'Làm 2 hũ mứt và giao 4 đơn hàng.',
      talk: [['rosa', 'Tiệc cần mứt ngọt để ăn với bánh.'], ['rosa', 'Cháu làm mứt dâu, rồi giao vài đơn hàng để mua đồ trang trí nhé.']],
      outro: [['rosa', 'Mứt thơm ngon quá! Bà tự hào về cháu.']],
      reqs: [{ ev: 'make', key: 'jam', n: 2 }, { ev: 'deliver', n: 4 }], coins: 120, xp: 26 },
    { who: 'maisie', lv: 10, text: 'Làm 2 cốc trà chanh.',
      talk: [['maisie', 'Cuối cùng là đồ uống mát lạnh.'], ['maisie', 'Cháu pha trà chanh mật ong cho cả đảo uống.']],
      outro: [['maisie', 'Mọi người tới đủ rồi! Cùng ăn tiệc thôi.'], ['tom', 'Maisie, đảo này lại đông vui như ngày xưa rồi.'], ['rosa', 'Ông bà cháu nhìn thấy chắc sẽ cười thật tươi.']],
      reqs: [{ ev: 'make', key: 'lemontea', n: 2 }], coins: 120, xp: 26, gems: 2 },
  ] },
];
// Người dân đảo không đi dạo, chỉ có chân dung khi nói chuyện
export const ISLANDERS = [{ id: 'kai', n: 'Ông Kai' }, { id: 'nina', n: 'Cô Nina' }, { id: 'otto', n: 'Ông Otto' }, { id: 'mia', n: 'Bé Mia' }];
// id nhân vật đã có hình nửa người public/items/talk-<id>.webp (chưa có thì dùng hình tạm)
export const TALK_ART = ['maisie', 'tom', 'lily', 'ben', 'rosa', 'sam', 'kai', 'nina', 'otto', 'mia'];
// Việc vặt hằng ngày: số việc, thưởng mỗi việc (theo cấp), kim cương và năng lượng khi làm xong cả ngày
export const DAILY = { count: 5, coins: l => 20 + l * 10, gems: 2, energy: 10 };
export const talkerName = id => (PEOPLE.find(p => p.id === id) || ISLANDERS.find(p => p.id === id))?.n || '';

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
  village: {
    ground: 0xf0dcae, ground2: 0xe6cd98, edge: 0xd6b878,
    obstacles: [
      ['art:bush', { size: 0.9 }, 1, 4, 'palmleaf'], ['art:crate', { size: 0.75 }, 1, 3, 'wood'],
      ['art:palm', { h: 1.7 }, 3, 2, 'wood'], ['art:rock', { size: 0.9 }, 2, 3, 'stone'],
      ['art:barrel', { size: 0.6 }, 1, 2, null],
    ],
  },
  rock: {
    ground: 0xb7c4c9, ground2: 0xa8b7bd, edge: 0x8d9ea6,
    obstacles: [
      ['art:rock', { size: 0.9 }, 1, 4, 'stone'], ['art:bigrock', { size: 1.1 }, 2, 3, 'stone'],
      ['art:stump', { size: 0.7 }, 1, 2, 'wood'], ['art:claymound', { size: 0.8 }, 1, 3, 'clay'],
      ['art:grasstuft', { size: 0.7 }, 1, 2, 'palmleaf'],
    ],
  },
  flower: {
    ground: 0xa5e07a, ground2: 0x93d46a, edge: 0x72b84a,
    obstacles: [
      ['art:bush', { size: 0.95 }, 1, 3, 'palmleaf'], ['art:bamboo', { size: 0.9 }, 1, 4, 'bamboo'],
      ['art:jungletree', { h: 1.8 }, 2, 3, 'wood'], ['art:flower_pur', { size: 0.6 }, 1, 2, null],
      ['art:logs', { size: 0.85 }, 1, 3, 'wood'],
    ],
  },
};

// Hải đồ: true khi đã có public/items/seachart.webp (khi đó dùng làm nền hải đồ, không thì nền gradient vẽ bằng CSS)
export const CHART_ART = true;
// chart: { x, y } là vị trí đảo trên hải đồ, tính bằng phần trăm (đảo nhà và bến thuyền ở dưới giữa)
export const ADVENTURES = [
  { id: 'shell', n: 'Bãi Vỏ Sò', lv: 2, w: 9, h: 12, seed: 11, theme: 'beach', chart: { x: 33, y: 83 }, chests: 3,
    goal: { n: 'Rương vỏ sò', model: 'pirate/chest' },
    intro: 'Nghe nói có một rương vỏ sò lấp lánh trên bãi biển gần đây. Cùng đi tìm nhé!',
    reward: { coins: 150, gems: 4, xp: 40 } },
  { id: 'crab', n: 'Vịnh Cua Đỏ', lv: 3, w: 10, h: 14, seed: 23, theme: 'beach', chart: { x: 67, y: 83 }, chests: 3,
    goal: { n: 'Bạn Cua bị kẹt', model: 'pets/animal-crab', pet: 'crab' },
    intro: 'Một bạn cua nhỏ bị kẹt giữa đống thùng gỗ. Mình dọn đường tới cứu bạn ấy nhé!',
    reward: { coins: 220, gems: 5, xp: 60 } },
  { id: 'palm', n: 'Rừng Dừa', lv: 5, w: 11, h: 15, seed: 37, theme: 'jungle', chart: { x: 50, y: 50 }, chests: 4,
    goal: { n: 'Bạn Vẹt lạc đường', model: 'pets/animal-parrot', pet: 'parrot' },
    intro: 'Bạn vẹt bay lạc vào rừng dừa rồi. Mình vào rừng tìm bạn ấy về nông trại nhé!',
    reward: { coins: 320, gems: 7, xp: 90 } },
  { id: 'pirate', n: 'Đảo Cướp Biển', lv: 7, w: 12, h: 16, seed: 51, theme: 'pirate', chart: { x: 17, y: 17 }, chests: 5,
    goal: { n: 'Kho báu cướp biển', model: 'pirate/chest' },
    intro: 'Tấm bản đồ cũ chỉ tới kho báu trên đảo cướp biển. Mình ra khơi thôi!',
    reward: { coins: 500, gems: 12, xp: 150 } },
  { id: 'penguin', n: 'Mũi Đá Gió', lv: 9, w: 12, h: 16, seed: 67, theme: 'beach', chart: { x: 50, y: 17 }, chests: 5,
    goal: { n: 'Bạn Cánh Cụt', model: 'pets/animal-penguin', pet: 'penguin' },
    intro: 'Một bạn cánh cụt trôi dạt tới mũi đá. Mình tới đưa bạn ấy về nhà nhé!',
    reward: { coins: 600, gems: 14, xp: 180 } },
  // ---- Ba đảo có truyện: chạy trên cùng bộ máy phiêu lưu, thêm người dân, công trình cần sửa và quà mang về ----
  { id: 'lang-chai', n: 'Làng Chài Gió', lv: 3, w: 10, h: 14, seed: 101, theme: 'village', chart: { x: 17, y: 50 }, chests: 2,
    goal: { n: 'Chú mèo nghịch ngợm', model: 'art:kitten', pet: 'kitten' },
    intro: 'Làng chài nhỏ này đang cần người giúp. Cô Nina bán cá đang chờ mình đấy!',
    reward: { coins: 250, gems: 5, xp: 70 },
    story: {
      who: 'nina', guide: 'guide_dog',
      ruin: { n: 'Sạp cá', sprite: 'ruin_fishstall', fixed: 'fishstall', stages: [{ wood: 4, palmleaf: 4 }, { stone: 4, wood: 4 }] },
      steps: [
        { who: 'nina', text: 'Dọn 6 chỗ vướng trong làng.',
          talk: [['nina', 'Chào bé! Làng chài của cô bị gió thổi bừa bộn hết rồi.'], ['maisie', 'Cháu giúp cô nhé! Cháu dọn trước.']],
          outro: [['nina', 'Gọn quá! Giờ thấy sạp cá của cô rồi.']],
          req: { ev: 'aclear', n: 6 }, coins: 40, xp: 10 },
        { who: 'nina', text: 'Sửa sạp cá cho cô Nina.',
          talk: [['nina', 'Sạp cá của cô hỏng rồi. Cần gỗ và lá cọ để sửa.'], ['maisie', 'Đồ trên đảo mình nhặt được. Cháu sửa ngay!']],
          outro: [['nina', 'Sạp cá đẹp lại rồi! Cảm ơn bé nhiều.']],
          req: { ev: 'aruin', n: 1 }, coins: 50, xp: 12 },
        { who: 'nina', text: 'Mở 2 rương báu.',
          talk: [['nina', 'Gió thổi mấy cái rương lên bờ đấy.'], ['maisie', 'Cháu đi tìm và mở rương cho cô.']],
          outro: [['nina', 'Giỏi quá! Có đồ trong rương thì cô bán thêm được nhiều cá.']],
          req: { ev: 'achest', n: 2 }, coins: 50, xp: 12 },
        { who: 'nina', text: 'Bắt chú mèo nghịch ngợm.',
          talk: [['nina', 'Chú mèo nghịch ngợm trốn mất rồi. Bé tìm giúp cô nhé.'], ['maisie', 'Cháu đi tìm mèo con ở cuối đảo nhé!']],
          outro: [['maisie', 'Cháu tìm thấy rồi! Mèo con ơi, lại đây nào.'], ['nina', 'Mèo con thích bé lắm. Bé mang mèo về nhà nuôi nhé!'], ['maisie', 'Cháu cảm ơn cô Nina!']],
          req: { ev: 'agoal', n: 1 }, coins: 60, xp: 16 },
      ],
      prize: 'kitten',
    } },
  { id: 'hai-dang', n: 'Đảo Đá Hải Đăng', lv: 6, w: 11, h: 15, seed: 113, theme: 'rock', chart: { x: 83, y: 50 }, chests: 3,
    goal: { n: 'Ngọn đèn hải đăng', model: 'art:lighthouse' },
    intro: 'Ngọn hải đăng trên đảo đá đã tắt đèn. Ông Otto chờ mình giúp thắp lại!',
    reward: { coins: 420, gems: 9, xp: 120 },
    story: {
      who: 'otto', guide: 'guide_gull',
      ruin: { n: 'Hải đăng', sprite: 'ruin_lighthouse', fixed: 'lighthouse_big', stages: [{ stone: 6, clay: 3 }, { wood: 5, stone: 5 }, { clay: 4, wood: 4 }] },
      steps: [
        { who: 'otto', text: 'Dọn 8 tảng đá chắn đường.',
          talk: [['otto', 'Chào cháu! Ta giữ ngọn hải đăng này.'], ['otto', 'Đá chắn kín lối đi rồi. Cháu dọn giúp ta nhé.']],
          outro: [['otto', 'Đường sáng sủa rồi. Cảm ơn cháu.']],
          req: { ev: 'aclear', n: 8 }, coins: 60, xp: 14 },
        { who: 'otto', text: 'Sửa lại hải đăng.',
          talk: [['otto', 'Hải đăng cũ hỏng rồi. Cần đá, đất sét và gỗ.'], ['maisie', 'Cháu nhặt đủ đồ trên đảo rồi sửa từng bước nhé!']],
          outro: [['otto', 'Hải đăng đứng vững lại rồi! Cháu giỏi lắm.']],
          req: { ev: 'aruin', n: 1 }, coins: 80, xp: 18 },
        { who: 'otto', text: 'Mở 3 rương báu.',
          talk: [['otto', 'Đèn cần dầu và dây. Chúng nằm trong mấy cái rương.'], ['maisie', 'Cháu đi tìm rương ngay!']],
          outro: [['otto', 'Đủ cả rồi. Giờ chỉ còn thắp đèn thôi.']],
          req: { ev: 'achest', n: 3 }, coins: 80, xp: 18 },
        { who: 'otto', text: 'Thắp lại ngọn đèn.',
          talk: [['otto', 'Cháu lên đỉnh thắp đèn giúp ta nhé.'], ['maisie', 'Cháu lên thắp đèn ngay!']],
          outro: [['maisie', 'Cháu thắp rồi! Đèn sáng quá!'], ['otto', 'Tàu thuyền nhìn thấy đèn là về bến an toàn.'], ['otto', 'Cháu mang hải đăng nhỏ này về nhà nhé.']],
          req: { ev: 'agoal', n: 1 }, coins: 90, xp: 22 },
      ],
      prize: 'minilight',
    } },
  { id: 'dao-buom', n: 'Đảo Bướm', lv: 9, w: 12, h: 16, seed: 131, theme: 'flower', chart: { x: 83, y: 17 }, chests: 3,
    goal: { n: 'Ao sen bí mật', model: 'art:fountain' },
    intro: 'Đảo Bướm đầy hoa và cánh bướm. Bé Mia muốn dẫn mình đi tìm một ao sen!',
    reward: { coins: 600, gems: 13, xp: 170 },
    story: {
      who: 'mia', guide: 'guide_bunny',
      ruin: { n: 'Vườn bướm', sprite: 'ruin_butterfly', fixed: 'butterfly_garden', stages: [{ bamboo: 6, palmleaf: 6 }, { wood: 6, liana: 2 }, { bamboo: 6, wood: 6 }] },
      steps: [
        { who: 'mia', text: 'Dọn 10 chỗ rậm rạp.',
          talk: [['mia', 'Chào chị Maisie! Em thích bướm nhất đấy.'], ['mia', 'Nhưng cây cối rậm quá, bướm không bay được.'], ['maisie', 'Chị dọn giúp em nhé!']],
          outro: [['mia', 'Hoa lộ ra rồi! Bướm bay ra kìa.']],
          req: { ev: 'aclear', n: 10 }, coins: 70, xp: 16 },
        { who: 'mia', text: 'Sửa vườn bướm.',
          talk: [['mia', 'Vườn bướm của em hỏng rồi. Cần tre, lá cọ, gỗ và dây leo.'], ['maisie', 'Chị lấy ở trên đảo này, không sao đâu.']],
          outro: [['mia', 'Vườn bướm đẹp quá! Cảm ơn chị.']],
          req: { ev: 'aruin', n: 1 }, coins: 90, xp: 20 },
        { who: 'mia', text: 'Mở 3 rương báu.',
          talk: [['mia', 'Có mấy cái rương giấu giữa các bụi hoa đấy.'], ['maisie', 'Chị đi tìm rương cho em!']],
          outro: [['mia', 'Chị giỏi quá! Trong rương toàn đồ lấp lánh.']],
          req: { ev: 'achest', n: 3 }, coins: 90, xp: 20 },
        { who: 'mia', text: 'Tìm ao sen.',
          talk: [['mia', 'Bướm bay về phía cuối đảo. Ở đó có ao sen.'], ['maisie', 'Chị đi tìm ao sen ngay!']],
          outro: [['maisie', 'Chị thấy ao sen rồi! Đẹp quá!'], ['mia', 'Chị mang ao sen này về nhà nhé. Bướm sẽ tới thăm chị.'], ['maisie', 'Cảm ơn em Mia!']],
          req: { ev: 'agoal', n: 1 }, coins: 100, xp: 24 },
      ],
      prize: 'lotuspond',
    } },
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
// faceR: hình vẽ quay mặt sang phải (mặc định quay trái) — để lật đúng chiều khi đi (faceDir)
export const SPRITE_ART = {
  house: { width: 3.7 }, ruin_house: { width: 3.7 }, carpentry: { width: 2.6 }, weaving: { width: 2.6 }, lumberjack: { width: 2.5 }, scaffold: { width: 2.2 }, ruin_bakery: { width: 2.6 }, ruin_boat: { width: 1.9 }, bridge_w: { width: 2.3 }, bridge_w_broken: { width: 2.3 }, bridge_n: { width: 2.3 }, bridge_n_broken: { width: 2.3 }, stairs_old: { width: 2.1 }, stairs_old_broken: { width: 2.1 }, jungletree: { width: 1.85 }, bigtree: { width: 2.4 }, claymound: { width: 1.0 }, bigrock: { width: 1.5 }, starfish: { width: 0.6 }, beachshell: { width: 0.55 }, bamboo: { width: 1.05 }, barn: { width: 2.7 }, feedmill: { width: 2.9 }, bakery: { width: 2.6 },
  market: { width: 2.7 }, board: { width: 2.0 }, coop: { width: 1.25 }, cowshed: { width: 1.7 }, pigsty: { width: 1.6 },
  chicken: { width: 0.55, faceR: true }, cow: { width: 1.05 }, pig: { width: 0.85 },
  wheat: { width: 1.35 }, corn: { width: 1.35 }, carrot: { width: 1.35 }, sprout: { width: 1.35 },
  appletree: { width: 1.7 }, leafytree: { width: 1.6 }, palm: { width: 1.7 },
  maisie: { width: 0.54 }, bush: { width: 0.95 }, rock: { width: 0.9 },
  dairy: { width: 2.6 }, juicebar: { width: 2.6 }, kitchen: { width: 2.7 }, seafood: { width: 2.6 },
  sweets: { width: 2.6 }, jammaker: { width: 2.7 }, beehive: { width: 1.5 }, ship: { width: 3.6 },
  strawberry: { width: 1.35 }, tomato: { width: 1.35 }, pumpkin: { width: 1.35 }, sunflower: { width: 1.35 },
  melon: { width: 1.35 }, cabbage: { width: 1.35 }, onion: { width: 1.35 }, bananatree: { width: 1.8 },
  orangetree: { width: 1.7 }, lemontree: { width: 1.7 }, peartree: { width: 1.7 }, cherrytree: { width: 1.75 },
  goldboat: { width: 1.9 }, boat: { width: 1.8, faceR: true }, tent: { width: 1.3 }, sandcastle: { width: 1.8 },
  well: { width: 1.05 }, cart: { width: 1.1 }, fountain: { width: 1.95 }, lighthouse: { width: 1.5 },
  flower_red: { width: 0.6 }, flower_yel: { width: 0.6 }, flower_pur: { width: 0.6 }, flower_red2: { width: 0.65 },
  mushroomdeco: { width: 0.5 }, lantern: { width: 0.5 }, barrel: { width: 0.55 }, chest: { width: 0.7 }, crate: { width: 0.7 },
  haysack: { width: 0.55 }, campfire: { width: 0.75 }, hedge: { width: 0.95 }, flag: { width: 0.7 },
  stump: { width: 0.7 }, logs: { width: 0.85 }, bee: { width: 0.3, faceR: true }, bench: { width: 0.9 }, wheelbarrow: { width: 0.85 },
  tom: { width: 0.66 }, lily: { width: 0.5 }, ben: { width: 0.86 }, rosa: { width: 0.61 }, sam: { width: 0.73 },
  nina: { width: 0.68 }, otto: { width: 0.64 }, mia: { width: 0.52 }, // người dân đảo truyện (tờ 21)
  ruin_fishstall: { width: 1.9 }, fishstall: { width: 1.9 }, ruin_lighthouse: { width: 1.45 }, lighthouse_big: { width: 1.5 }, // công trình đảo truyện (tờ 22)
  ruin_butterfly: { width: 1.9 }, butterfly_garden: { width: 1.9 }, kitten: { width: 0.55, faceR: true }, lotuspond: { width: 1.95 },
  guide_dog: { width: 0.51 }, guide_gull: { width: 0.6, faceR: true }, guide_bunny: { width: 0.37 }, // thú dẫn đường
  gull1: { width: 0.9, faceR: true }, gull2: { width: 0.9, faceR: true }, pier: { width: 4.6 }, grasstuft: { width: 0.6 }, daisies: { width: 0.85 },
  fence: { width: 1.05 }, axe: { width: 0.5 }, signboard: { width: 1 }, bucket: { width: 0.4 }, fishingrod: { width: 0.9 },
  soil: { width: 1.35 }, trough: { width: 0.8 },
  dog: { width: 0.62 }, cat: { width: 0.58 }, bunny: { width: 0.52, faceR: true }, parrot: { width: 0.6, faceR: true }, penguin: { width: 0.56 },
  sheepdeco: { width: 0.7, faceR: true }, horse: { width: 0.85, faceR: true }, llama: { width: 0.6, faceR: true }, crab: { width: 0.6 },
};
export const PEN_SPRITE = { coop: 'chicken', cowpen: 'cow', pigpen: 'pig', beehive: 'bee' };
export const TREE_SPRITE = { apple: 'appletree', palm: 'palm', banana: 'bananatree', orange: 'orangetree', lemon: 'lemontree', pear: 'peartree', cherry: 'cherrytree' };
// Đồ trang trí: tên hình 2D (mặc định trùng tên món)
export const DECOR_SPRITE = { palmdeco: 'palm', flowerbed: 'daisies', whitefence: 'fence', kitten: 'kitten', minilight: 'lighthouse_big', lotuspond: 'lotuspond' };
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
