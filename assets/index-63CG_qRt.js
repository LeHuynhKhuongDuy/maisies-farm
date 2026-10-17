(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const te=40,di=26,Ht=14,_s=[{id:"core",n:"Vùng lõi",rect:[14,14,26,26],open:!0},{id:"west",n:"Rừng phía Tây",rect:[0,14,14,26],gate:"bridge_w",lv:4},{id:"north",n:"Rừng phía Bắc",rect:[14,0,26,14],gate:"bridge_n",lv:7},{id:"old",n:"Rừng già",rect:[0,0,14,14],gate:"stairs_old",lv:11}],Xt={wheat:{n:"Lúa mì",icon:"nature/crops_wheatStageB",tint:16765534,v:2},corn:{n:"Bắp",icon:"food/corn",v:3},carrot:{n:"Cà rốt",icon:"food/carrot",v:4},strawberry:{n:"Dâu tây",icon:"food/strawberry",v:5},tomato:{n:"Cà chua",icon:"food/tomato",v:5},pumpkin:{n:"Bí ngô",icon:"food/pumpkin",v:8},melon:{n:"Dưa hấu",icon:"food/watermelon",v:10},apple:{n:"Táo",icon:"food/apple",v:6},coconut:{n:"Dừa",icon:"food/coconut",v:6},orange:{n:"Cam",icon:"food/orange",v:7},egg:{n:"Trứng",icon:"food/egg",v:6},milk:{n:"Sữa",icon:"food/carton",v:9},mushroom:{n:"Nấm",icon:"food/mushroom",v:12},chickenfeed:{n:"Thức ăn gà",icon:"food/bag",tint:15910987,v:2},cowfeed:{n:"Thức ăn bò",icon:"food/bag",tint:8176746,v:3},pigfeed:{n:"Thức ăn heo",icon:"food/bag",tint:14256730,v:4},bread:{n:"Bánh mì",icon:"food/loaf",v:10,energy:4},cookie:{n:"Bánh quy",icon:"food/cookie",v:14,energy:5},cake:{n:"Bánh kem",icon:"food/cake",v:30},applepie:{n:"Bánh táo",icon:"food/pie",v:24},cheese:{n:"Phô mai",icon:"food/cheese",v:20},icecream:{n:"Kem dâu",icon:"food/ice-cream-cup",v:18},applejuice:{n:"Nước táo",icon:"food/soda-glass",v:20},orangejuice:{n:"Nước cam",icon:"food/cocktail",v:23},coconutmilk:{n:"Nước dừa",icon:"food/coconut-half",v:14},soup:{n:"Súp rau",icon:"food/bowl-soup",v:26,energy:6},sandwich:{n:"Bánh kẹp",icon:"food/sandwich",v:30,energy:8},pizza:{n:"Pizza",icon:"food/pizza",v:40,energy:12},pancakes:{n:"Bánh kếp",icon:"food/pancakes",v:28,energy:8},sunflower:{n:"Hướng dương",icon:"nature/flower_yellowB",v:4},cabbage:{n:"Bắp cải",icon:"food/cabbage",v:9},onion:{n:"Hành tây",icon:"food/onion",v:8},banana:{n:"Chuối",icon:"food/banana",v:8},lemon:{n:"Chanh",icon:"food/lemon",v:8},pear:{n:"Lê",icon:"food/pear",v:9},cherry:{n:"Anh đào",icon:"food/cherries",v:11},honey:{n:"Mật ong",icon:"food/honey",v:14},donut:{n:"Bánh vòng",icon:"food/donut-sprinkles",v:34},cupcake:{n:"Bánh cupcake",icon:"food/cupcake",v:36},croissant:{n:"Bánh sừng bò",icon:"food/croissant",v:30},muffin:{n:"Bánh muffin",icon:"food/muffin",v:32},waffle:{n:"Bánh quế",icon:"food/waffle",v:34,energy:9},jam:{n:"Mứt dâu",icon:"food/honey",tint:16743034,v:30},lemontea:{n:"Trà chanh mật ong",icon:"food/cup-tea",v:28},salad:{n:"Sa lát",icon:"food/salad",v:32,energy:10},fish:{n:"Cá biển",icon:"food/fish",v:7},bigfish:{n:"Cá vàng to",icon:"food/fish",tint:16752704,v:16},grilledfish:{n:"Cá xiên nướng",icon:"food/skewer",v:30,energy:8},sushi:{n:"Sushi",icon:"food/sushi-salmon",v:34,energy:9},wood:{n:"Gỗ",v:2,mat:1},stone:{n:"Đá",v:2,mat:1},bamboo:{n:"Tre",v:2,mat:1},palmleaf:{n:"Lá cọ",v:1,mat:1},clay:{n:"Đất sét",v:2,mat:1},liana:{n:"Dây leo",v:2,mat:1},planks:{n:"Ván gỗ",v:6,mat:2},rack:{n:"Giá gỗ",v:8,mat:2},firewood:{n:"Củi",v:4,mat:2},basket:{n:"Giỏ đan",v:8,mat:2},reedmat:{n:"Chiếu",v:8,mat:2},rope:{n:"Dây thừng",v:6,mat:2},torch:{n:"Đuốc",v:10,mat:2}},Fe={wheat:{lv:1,t:20,cost:1,xp:1,tint:16765534,stages:["nature/crops_leafsStageA","nature/crops_wheatStageA","nature/crops_wheatStageB"]},corn:{lv:2,t:40,cost:2,xp:1,stages:["nature/crops_cornStageA","nature/crops_cornStageB","nature/crops_cornStageD"]},carrot:{lv:3,t:60,cost:3,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_carrot"]},strawberry:{lv:4,t:80,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crops_leafsStageB"],deco:"food/strawberry"},tomato:{lv:5,t:90,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crops_leafsStageB"],deco:"food/tomato"},pumpkin:{lv:6,t:120,cost:6,xp:3,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_pumpkin"]},sunflower:{lv:6,t:70,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/flower_yellowB"],fit:{size:.36}},melon:{lv:8,t:150,cost:8,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_melon"]},cabbage:{lv:9,t:130,cost:7,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","food/cabbage"],fit:{size:.34}},onion:{lv:10,t:140,cost:7,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","food/onion"],fit:{size:.28}}},Ri={palm:{n:"Cây dừa",lv:2,cost:60,t:100,yield:"coconut",qty:2,xp:2,model:"pirate/palm-straight",fruit:"food/coconut",palm:!0},apple:{n:"Cây táo",lv:3,cost:80,t:120,yield:"apple",qty:3,xp:2,model:"nature/tree_oak",fruit:"food/apple",lush:{fruit:15217963}},orange:{n:"Cây cam",lv:6,cost:120,t:150,yield:"orange",qty:3,xp:3,model:"nature/tree_fat",fruit:"food/orange",lush:{fruit:16751135}},banana:{n:"Cây chuối",lv:7,cost:140,t:160,yield:"banana",qty:3,xp:3,model:"pirate/palm-bend",fruit:"food/banana",palm:!0},lemon:{n:"Cây chanh",lv:8,cost:160,t:170,yield:"lemon",qty:3,xp:3,model:"nature/tree_oak",fruit:"food/lemon",lush:{fruit:16769594}},pear:{n:"Cây lê",lv:10,cost:200,t:190,yield:"pear",qty:3,xp:4,model:"nature/tree_fat",fruit:"food/pear",lush:{fruit:13164618}},cherry:{n:"Cây anh đào",lv:12,cost:260,t:210,yield:"cherry",qty:3,xp:4,model:"nature/tree_oak",fruit:"food/cherries",lush:{leaf:16751816,leaf2:16761564,fruit:14162748,blossom:!0}}},fn={coop:{n:"Chuồng gà",lv:1,cost:80,animal:"pets/animal-chick",an:"Gà",feed:"chickenfeed",prod:"egg",t:60,xp:1,max:6,animalCost:30},cowpen:{n:"Chuồng bò",lv:4,cost:200,animal:"quat/Cow.fbx",an:"Bò",feed:"cowfeed",prod:"milk",t:120,xp:2,max:5,animalCost:80},pigpen:{n:"Chuồng heo",lv:7,cost:320,animal:"quat/Pig.fbx",an:"Heo",feed:"pigfeed",prod:"mushroom",t:150,xp:3,max:5,animalCost:120},beehive:{n:"Vườn ong",lv:7,cost:280,animal:"pets/animal-bee",an:"Ong",feed:"sunflower",prod:"honey",t:120,xp:3,max:4,animalCost:100,fly:!0}},sn={carpentry:{n:"Xưởng mộc",lv:1,cost:40,rec:[{out:"planks",qty:2,in:{wood:3},t:30,lv:1},{out:"firewood",qty:2,in:{wood:1},t:20,lv:1},{out:"rack",in:{wood:2,liana:1},t:45,lv:2}]},weaving:{n:"Nhà đan lát",lv:3,cost:120,rec:[{out:"basket",in:{palmleaf:3},t:30,lv:3},{out:"reedmat",in:{palmleaf:2,bamboo:2},t:45,lv:3},{out:"rope",in:{liana:1,palmleaf:2},t:60,lv:4},{out:"torch",in:{firewood:1,palmleaf:1},t:40,lv:4}]},feedmill:{n:"Máy xay thức ăn",lv:1,cost:60,rec:[{out:"chickenfeed",qty:3,in:{wheat:2},t:20,lv:1},{out:"cowfeed",qty:3,in:{corn:2},t:30,lv:4},{out:"pigfeed",qty:3,in:{carrot:2},t:40,lv:7}]},bakery:{n:"Lò bánh",lv:2,cost:120,rec:[{out:"bread",in:{wheat:3},t:40,lv:1},{out:"cookie",in:{wheat:2,egg:1},t:60,lv:3},{out:"applepie",in:{wheat:2,apple:2},t:80,lv:5},{out:"cake",in:{wheat:2,egg:2,milk:1},t:100,lv:6}]},dairy:{n:"Xưởng sữa",lv:4,cost:220,rec:[{out:"cheese",in:{milk:2},t:70,lv:4},{out:"icecream",in:{milk:1,strawberry:2},t:70,lv:5}]},juicebar:{n:"Quầy nước ép",lv:5,cost:260,rec:[{out:"coconutmilk",in:{coconut:2},t:50,lv:5},{out:"applejuice",in:{apple:3},t:60,lv:5},{out:"orangejuice",in:{orange:3},t:70,lv:6}]},kitchen:{n:"Bếp nấu",lv:6,cost:320,rec:[{out:"soup",in:{carrot:1,tomato:2,pumpkin:1},t:80,lv:6},{out:"sandwich",in:{bread:1,cheese:1,egg:1},t:80,lv:6},{out:"pancakes",in:{wheat:2,egg:1,milk:1},t:80,lv:7},{out:"pizza",in:{bread:1,cheese:1,tomato:2},t:100,lv:8},{out:"salad",in:{cabbage:1,tomato:1,onion:1},t:90,lv:10},{out:"waffle",in:{wheat:2,egg:1,honey:1},t:90,lv:11}]},seafood:{n:"Quán hải sản",lv:5,cost:300,rec:[{out:"grilledfish",in:{fish:2,corn:1},t:70,lv:5},{out:"sushi",in:{fish:1,cabbage:1},t:80,lv:9},{out:"soup",in:{bigfish:1,carrot:1,tomato:1},t:80,lv:6}]},sweets:{n:"Tiệm bánh ngọt",lv:9,cost:420,rec:[{out:"donut",in:{wheat:2,egg:1,honey:1},t:90,lv:9},{out:"cupcake",in:{wheat:1,milk:1,strawberry:2},t:100,lv:9},{out:"croissant",in:{wheat:3,milk:1},t:80,lv:10},{out:"muffin",in:{wheat:2,egg:1,banana:1},t:90,lv:11}]},jammaker:{n:"Nhà làm mứt",lv:10,cost:460,rec:[{out:"jam",in:{strawberry:3,honey:1},t:100,lv:10},{out:"lemontea",in:{lemon:2,honey:1},t:80,lv:10}]}},xs={lumberjack:{n:"Nhà tiều phu",lv:2,cost:80,every:90,gives:["wood","wood","bamboo","palmleaf","liana"],cap:[10,20,30],up:[{planks:6,rope:2},{planks:12,rack:4}]}},La=[{planks:10,stone:10},{rope:3,basket:4},{torch:4,reedmat:4}],Na={"fac:carpentry":[{wood:6,stone:3}],"fac:feedmill":[{wood:6,palmleaf:4}],"fac:bakery":[{wood:8,stone:6},{planks:4,palmleaf:6}],"fac:weaving":[{wood:10,bamboo:6},{planks:6,palmleaf:8}],"fac:dairy":[{planks:6,stone:10},{reedmat:3,firewood:6}],"fac:juicebar":[{planks:8,bamboo:8},{basket:4,rope:2}],"fac:kitchen":[{stone:14,planks:8},{firewood:8,clay:6},{torch:3,reedmat:3}],"fac:seafood":La,"fac:sweets":La,"fac:jammaker":La,"pen:coop":[{wood:6,palmleaf:6}],"pen:cowpen":[{wood:12,planks:4},{rope:2,palmleaf:10}],"pen:pigpen":[{wood:12,stone:8},{planks:6,rope:3}],"pen:beehive":[{planks:6,basket:3}],"gate:bridge_w":[{wood:10,bamboo:8},{planks:6,rope:2}],"gate:bridge_n":[{planks:12,rope:4},{stone:20,torch:3}],"gate:stairs_old":[{stone:30,planks:15},{rope:6,torch:6},{reedmat:6,rack:4}],"helper:lumberjack":[{wood:8,stone:4}],"ruin:house":[{wood:4,palmleaf:4}],"ruin:bakery":[{wood:4,stone:3}],"ruin:boat":[{planks:3,palmleaf:5}]};var jf;for(const n of Object.keys(sn))Na[jf="fac:"+n]||(Na[jf]=La);const Zn={flower_red:{n:"Hoa đỏ",lv:1,cost:5,model:"nature/flower_redA",fit:{size:.5}},flower_yel:{n:"Hoa vàng",lv:1,cost:5,model:"nature/flower_yellowA",fit:{size:.5}},flower_pur:{n:"Hoa tím",lv:1,cost:5,model:"nature/flower_purpleA",fit:{size:.5}},bush:{n:"Bụi cây",lv:1,cost:10,model:"nature/plant_bushLarge",fit:{size:.85}},palmdeco:{n:"Cây dừa nghiêng",lv:1,cost:25,model:"pirate/palm-bend",fit:{h:1.9}},lantern:{n:"Đèn lồng",lv:2,cost:30,model:"town/lantern",fit:{h:1.3}},barrel:{n:"Thùng gỗ",lv:2,cost:15,model:"pirate/barrel",fit:{size:.6}},bench:{n:"Ghế dài",lv:2,cost:35,model:"town/stall-bench",fit:{size:.9}},mushroomdeco:{n:"Nấm đỏ",lv:3,cost:20,model:"nature/mushroom_red",fit:{size:.5}},chest:{n:"Rương báu",lv:3,cost:60,model:"pirate/chest",fit:{size:.65}},dog:{n:"Cún con",lv:3,cost:120,model:"quat/Pug.fbx",pet:!0,fit:{h:.45}},well:{n:"Giếng nước",lv:2,cost:45,model:"kk/buildings/blue/building_well_blue.gltf",fit:{size:.95}},path:{n:"Đường lát gạch",lv:1,cost:4,proc:"brick"},flowerbed:{n:"Luống hoa cúc",lv:1,cost:12,proc:"flowerbed"},whitefence:{n:"Hàng rào trắng",lv:1,cost:6,proc:"fence"},wheelbarrow:{n:"Xe cút kít",lv:2,cost:25,model:"kk/decoration/props/wheelbarrow.gltf",fit:{size:.85}},haysack:{n:"Bao lúa",lv:1,cost:10,model:"kk/decoration/props/sack.gltf",fit:{size:.6}},sheepdeco:{n:"Cừu non",lv:4,cost:140,model:"quat/Sheep.fbx",pet:!0,fit:{h:.55}},horse:{n:"Ngựa con",lv:6,cost:260,model:"quat/Horse.fbx",pet:!0,fit:{h:.95}},llama:{n:"Lạc đà Alpaca",lv:8,cost:300,model:"quat/Llama.fbx",pet:!0,fit:{h:.9}},cat:{n:"Mèo con",lv:3,cost:120,model:"pets/animal-cat",pet:!0,fit:{h:.6}},bunny:{n:"Thỏ trắng",lv:4,cost:150,model:"pets/animal-bunny",pet:!0,fit:{h:.65}},parrot:{n:"Vẹt",lv:5,cost:180,model:"pets/animal-parrot",pet:!0,fit:{h:.6}},penguin:{n:"Chim cánh cụt",lv:6,cost:220,model:"pets/animal-penguin",pet:!0,fit:{h:.6}},sandcastle:{n:"Lâu đài cát",lv:99,cost:0,model:"pirate/tower-complete-small",fit:{size:1.8},w:2,d:2,gift:!0,paint:15913866},goldboat:{n:"Thuyền vàng",lv:99,cost:0,model:"pirate/boat-row-large",fit:{size:1.9},w:2,d:2,gift:!0,paint:16763196},crab:{n:"Bạn Cua",lv:99,cost:0,model:"pets/animal-crab",pet:!0,fit:{h:.5},gift:!0},fountain:{n:"Đài phun nước",lv:5,cost:300,model:"town/fountain-round",fit:{size:1.9},w:2,d:2},boat:{n:"Thuyền nhỏ",lv:4,cost:90,model:"pirate/boat-row-small",fit:{size:1.9},w:2,d:2},campfire:{n:"Lửa trại",lv:4,cost:40,model:"survival/campfire-pit",fit:{size:.7}},hedge:{n:"Hàng rào cây",lv:4,cost:15,model:"town/hedge",fit:{size:.95}},cart:{n:"Xe đẩy",lv:5,cost:60,model:"town/cart",fit:{size:.95}},tent:{n:"Lều cắm trại",lv:6,cost:90,model:"survival/tent-canvas",fit:{size:.95}},flag:{n:"Cờ đuôi nheo",lv:7,cost:50,model:"pirate/flag",fit:{h:1.6}},flower_red2:{n:"Khóm hoa hồng",lv:7,cost:12,model:"nature/flower_redB",fit:{size:.55}},lighthouse:{n:"Ngọn hải đăng",lv:10,cost:600,model:"pirate/tower-complete-small",fit:{size:1.9},w:2,d:2}},Mn={grass:{n:"Bụi cỏ",hp:2,drop:{palmleaf:[1,1]},chest:0,regrow:!0},bush:{n:"Bụi rậm",hp:2,drop:{palmleaf:[1,1]},chest:.05,regrow:!0,proc:"bush"},bamboo:{n:"Bụi tre",hp:3,drop:{bamboo:[1,1]},rare:{liana:.15},chest:.05,regrow:!0},stump:{n:"Gốc cây",hp:3,drop:{wood:[1,1]},chest:.1,regrow:!0,model:"nature/stump_round",fit:{size:.6}},logs:{n:"Đống gỗ",hp:3,drop:{wood:[1,2]},chest:.1,model:"kk/decoration/props/resource_lumber.gltf",fit:{size:.8}},rock:{n:"Tảng đá",hp:4,drop:{stone:[1,1]},chest:.15,regrow:!0,model:"kk/decoration/nature/rock_single_B.gltf",fit:{size:.85}},claymound:{n:"Gò đất sét",hp:4,drop:{clay:[1,1]},chest:.15,regrow:!0},tree:{n:"Cây rừng",hp:6,drop:{wood:[1,1]},rare:{liana:.25},chest:.3,proc:"tree"},bigtree:{n:"Cây cổ thụ",hp:12,drop:{wood:[1,2]},rare:{liana:.3},chest:.6},bigrock:{n:"Tảng đá lớn",hp:12,drop:{stone:[1,2]},chest:.6}},_o=["grass","bush","bamboo","grass","bush","bamboo","stump","rock","claymound"],Ol=["grass","bush","bamboo","stump","logs","rock","claymound","tree"],td=[...Ol,"bigtree","bigrock"],Yf={core:Ol,west:Ol,north:td,old:td},Kf=n=>n<6?0:10+(n-6)*6,Fl=n=>10+n*12,Ai=n=>30+Math.floor(n/2),Bl=30,og={starfish:{n:"Sao biển",energy:2},shell:{n:"Vỏ sò",energy:3},crab:{n:"Cua nhỏ",energy:5}},ag=6,Lc=240,cg=60,lg=25,Jf=n=>50+n*60,Ze=[{id:"maisie",n:"Maisie",model:"chars/character-female-a"},{id:"tom",n:"Bác Tom",model:"chars/character-male-b"},{id:"lily",n:"Cô Lily",model:"chars/character-female-c"},{id:"ben",n:"Anh Ben",model:"chars/character-male-a"},{id:"rosa",n:"Bà Rosa",model:"chars/character-female-b"},{id:"sam",n:"Chú Sam",model:"chars/character-male-c"}],ac=[{who:"maisie",text:"Chào mừng đến đảo! Mình là Maisie. Mình cùng thu hoạch 3 lúa mì nhé!",ev:"harvest",key:"wheat",n:3,coins:20,xp:5},{who:"maisie",text:"Giỏi quá! Giờ gieo hạt vào 4 ô ruộng trống nào.",ev:"plant",n:4,coins:15,xp:5},{who:"tom",text:"Gà nhà mình đói rồi! Ra máy xay làm 1 mẻ thức ăn cho gà nhé.",ev:"make",key:"chickenfeed",n:1,coins:20,xp:6},{who:"tom",text:"Chạm vào chuồng gà để cho các bạn gà ăn.",ev:"feed",n:1,coins:15,xp:5},{who:"tom",text:"Nhặt 2 quả trứng khi gà đẻ xong nhé.",ev:"collect",key:"egg",n:2,coins:20,xp:6},{who:"lily",text:"Bảng đơn hàng có người đặt mua kìa! Giao 1 đơn hàng nhé.",ev:"deliver",n:1,coins:30,xp:8},{who:"maisie",text:"Đảo còn nhiều bụi rậm lắm. Dọn 2 chướng ngại vật để có thêm đất nhé.",ev:"clear",n:2,coins:20,xp:6,gems:2},{who:"ben",text:"Lò bánh đã mở! Nướng 2 ổ bánh mì nào.",ev:"make",key:"bread",n:2,coins:30,xp:8,lv:2},{who:"lily",text:"Trang trí cho đảo thêm xinh: mua 1 món đồ trang trí ở cửa hàng nhé.",ev:"buydecor",n:1,coins:20,xp:5,lv:2},{who:"sam",text:"Tàu chở hàng cập bến rồi! Đóng đầy 2 thùng hàng trên tàu nhé.",ev:"crate",n:2,coins:40,xp:10,lv:2},{who:"rosa",text:"Bà thích bánh quy lắm. Cháu làm 2 hộp bánh quy nhé?",ev:"make",key:"cookie",n:2,coins:40,xp:10,lv:3},{who:"maisie",text:"Trồng 1 cây táo hoặc cây dừa để có trái cây quanh năm nhé!",ev:"buytree",n:1,coins:30,xp:8,lv:3},{who:"tom",text:"Mua thêm 2 bạn gà cho chuồng thêm vui nào.",ev:"buyanimal",n:2,coins:40,xp:10,gems:2,lv:3},{who:"sam",text:"Bến tàu hôm nay đông khách lắm. Giao 3 đơn hàng nhé!",ev:"deliver",n:3,coins:50,xp:12,lv:3},{who:"maisie",text:"Mình đi thuyền ra Bãi Vỏ Sò phiêu lưu đi! Dọn 5 chướng ngại vật nhé.",ev:"clear",n:5,coins:40,xp:12,gems:2,lv:3},{who:"tom",text:"Có chuồng bò rồi! Thu 3 hộp sữa nào.",ev:"collect",key:"milk",n:3,coins:60,xp:14,lv:4},{who:"rosa",text:"Bà muốn làm bánh mì kẹp. Cháu làm 2 miếng phô mai nhé?",ev:"make",key:"cheese",n:2,coins:60,xp:15,lv:4},{who:"lily",text:"Trời nóng quá! Làm 2 cốc nước dừa mát lạnh đi.",ev:"make",key:"coconutmilk",n:2,coins:70,xp:16,lv:5},{who:"ben",text:"Thu hoạch 6 quả dâu tây ngọt lịm nhé!",ev:"harvest",key:"strawberry",n:6,coins:60,xp:15,lv:5},{who:"maisie",text:"Trồng hoa hướng dương để chuẩn bị nuôi ong nào. Thu 6 bông nhé!",ev:"harvest",key:"sunflower",n:6,coins:70,xp:18,lv:6},{who:"sam",text:"Bếp nấu mở rồi! Nấu 1 nồi súp rau thơm phức.",ev:"make",key:"soup",n:1,coins:80,xp:20,gems:2,lv:6},{who:"tom",text:"Ong vàng đã tới! Thu 2 hũ mật ong nhé.",ev:"collect",key:"honey",n:2,coins:90,xp:22,lv:7},{who:"rosa",text:"Bà dạy cháu làm bánh kem. Làm 1 chiếc thật đẹp nhé!",ev:"make",key:"cake",n:1,coins:90,xp:22,lv:7},{who:"lily",text:"Đóng đầy 6 thùng hàng lên tàu để tàu chạy nhé!",ev:"crate",n:6,coins:120,xp:26,gems:3,lv:8},{who:"ben",text:"Tiệm bánh ngọt mở cửa! Làm 2 chiếc bánh vòng nào.",ev:"make",key:"donut",n:2,coins:120,xp:28,lv:9},{who:"maisie",text:"Làm mứt dâu tặng mọi người trên đảo nhé! Làm 2 hũ.",ev:"make",key:"jam",n:2,coins:140,xp:30,gems:3,lv:10}],Yu=[{who:"maisie",text:"Bão làm nhà mình hỏng mất rồi! Góp gỗ và lá cọ để sửa nhà nhé.",ev:"build",key:"ruin:house",n:1,coins:20,xp:6,energy:10},{who:"maisie",text:"Nhà đẹp lại rồi! Thu hoạch 3 lúa mì nào.",ev:"harvest",key:"wheat",n:3,coins:15,xp:5},{who:"tom",text:"Gà đói rồi! Ra máy xay làm thức ăn rồi cho gà ăn nhé.",ev:"feed",n:1,coins:20,xp:6},{who:"maisie",text:"Chặt 3 bụi cây hoặc cây rừng để lấy vật liệu nhé.",ev:"clear",n:3,coins:20,xp:6},{who:"ben",text:"Lò bánh bị đổ rồi. Sửa giúp anh nhé!",ev:"build",key:"ruin:bakery",n:1,coins:30,xp:8,energy:10},{who:"ben",text:"Nướng 1 ổ bánh mì. Ăn bánh mì sẽ có thêm năng lượng đó!",ev:"make",key:"bread",n:1,coins:25,xp:8},{who:"sam",text:"Mua Xưởng mộc ở cửa hàng và xây xong nhé.",ev:"build",key:"fac:carpentry",n:1,coins:30,xp:10},{who:"sam",text:"Làm 3 tấm ván gỗ ở Xưởng mộc.",ev:"make",key:"planks",n:3,coins:30,xp:10},{who:"sam",text:"Sửa chiếc thuyền ở bến để ra khơi!",ev:"build",key:"ruin:boat",n:1,coins:40,xp:12,energy:10},{who:"maisie",text:"Thuyền xong rồi! Mình cùng ra khơi phiêu lưu nào!",ev:"sail",n:1,coins:40,xp:12}],ug={house:"house",bakery:"fac",boat:"boat"},hg={beach:{ground:16047264,ground2:15387528,edge:14267498,obstacles:[["nature/plant_bushLarge",{size:.9},1,4],["nature/grass_large",{size:.8},1,3],["pirate/crate",{size:.7},1,2],["pirate/barrel",{size:.6},1,2],["pirate/rocks-sand-a",{size:.95},2,2],["pirate/palm-straight",{h:1.7},3,2]]},jungle:{ground:10409566,ground2:9226577,edge:6989884,obstacles:[["nature/plant_bushLarge",{size:.95},1,4],["nature/tree_palmTall",{h:1.8},3,2],["kk/decoration/nature/trees_A_medium.gltf",{size:.98},3,2],["kk/decoration/nature/rock_single_B.gltf",{size:.85},2,2],["nature/stump_old",{size:.65},1,2],["nature/log_stack",{size:.85},2,2],["nature/mushroom_red",{size:.5},1,1]]},pirate:{ground:15257493,ground2:14467205,edge:13215845,obstacles:[["pirate/crate",{size:.75},1,3],["pirate/crate-bottles",{size:.75},1,2],["pirate/barrel",{size:.6},1,3],["pirate/rocks-a",{size:.95},2,2],["pirate/palm-bend",{h:1.8},3,2],["nature/plant_bushLarge",{size:.9},1,2]]}},ja=[{id:"shell",n:"Bãi Vỏ Sò",lv:2,w:9,h:12,seed:11,theme:"beach",chests:3,goal:{n:"Rương vỏ sò",model:"pirate/chest"},intro:"Nghe nói có một rương vỏ sò lấp lánh trên bãi biển gần đây. Cùng đi tìm nhé!",reward:{coins:150,gems:4,xp:40}},{id:"crab",n:"Vịnh Cua Đỏ",lv:3,w:10,h:14,seed:23,theme:"beach",chests:3,goal:{n:"Bạn Cua bị kẹt",model:"pets/animal-crab",pet:"crab"},intro:"Một bạn cua nhỏ bị kẹt giữa đống thùng gỗ. Mình dọn đường tới cứu bạn ấy nhé!",reward:{coins:220,gems:5,xp:60}},{id:"palm",n:"Rừng Dừa",lv:5,w:11,h:15,seed:37,theme:"jungle",chests:4,goal:{n:"Bạn Vẹt lạc đường",model:"pets/animal-parrot",pet:"parrot"},intro:"Bạn vẹt bay lạc vào rừng dừa rồi. Mình vào rừng tìm bạn ấy về nông trại nhé!",reward:{coins:320,gems:7,xp:90}},{id:"pirate",n:"Đảo Cướp Biển",lv:7,w:12,h:16,seed:51,theme:"pirate",chests:5,goal:{n:"Kho báu cướp biển",model:"pirate/chest"},intro:"Tấm bản đồ cũ chỉ tới kho báu trên đảo cướp biển. Mình ra khơi thôi!",reward:{coins:500,gems:12,xp:150}},{id:"penguin",n:"Mũi Đá Gió",lv:9,w:12,h:16,seed:67,theme:"beach",chests:5,goal:{n:"Bạn Cánh Cụt",model:"pets/animal-penguin",pet:"penguin"},intro:"Một bạn cánh cụt trôi dạt tới mũi đá. Mình tới đưa bạn ấy về nhà nhé!",reward:{coins:600,gems:14,xp:180}}],wo=[{id:"sea",n:"Kho báu biển",reward:{coins:200,gems:5},pieces:[["bottle","Thư trong chai","pirate/bottle"],["mussel","Con trai","food/mussel"],["pearl","Ngọc trai","food/mussel-open"],["bones","Xương cá","food/fish-bones"],["pflag","Cờ cướp biển","pirate/flag"]]},{id:"sweet",n:"Kẹo ngọt",reward:{coins:220,gems:5},pieces:[["lolly","Kẹo mút","food/lollypop"],["pop","Kem que","food/popsicle"],["choco","Thanh sô-cô-la","food/candy-bar"],["mint","Kem bạc hà","food/ice-cream-scoop-mint"],["cdonut","Bánh vòng sô-cô-la","food/donut-chocolate"]]},{id:"tropic",n:"Trái cây nhiệt đới",reward:{coins:260,gems:6},pieces:[["pine","Dứa","food/pineapple"],["coco","Nửa trái dừa","food/coconut-half"],["grape","Chùm nho","food/grapes"],["melon2","Dưa hấu","food/watermelon"],["lime","Lát chanh","food/lemon-half"]]}],ci={n:"Lễ hội Biển",token:"Vỏ sò vàng",icon:"food/mussel",tint:16765503,gain:{harvest:1,collect:1,make:1,deliver:3,crate:2,clear:1,visitor:3,chest:3,help:1},tiers:[{at:20,coins:80},{at:50,gems:3},{at:90,coins:200},{at:140,decor:"sandcastle"},{at:200,gems:10},{at:280,decor:"goldboat"}]},In=(n,t)=>`kk/buildings/${t}/building_${n}_${t}.gltf`,dg={house:{model:In("home_B","blue"),size:2.5,rot:0},barn:{model:In("home_A","red"),size:1.75,rot:0},market:{model:In("market","red"),size:1.9,rot:0},feedmill:{model:In("windmill","yellow"),size:2.1,rot:0,spin:"fan",axis:"z"},bakery:{model:In("blacksmith","red"),size:1.85,rot:0},dairy:{model:In("watermill","blue"),size:1.75,rot:0,spin:"wheel",axis:"x"},juicebar:{model:In("tavern","green"),size:1.75,rot:0},seafood:{model:In("home_A","blue"),size:1.6,rot:0},kitchen:{model:In("home_A","green"),size:1.6,rot:0},sweets:{model:In("market","yellow"),size:1.9,rot:0},jammaker:{model:In("home_B","yellow"),size:1.6,rot:0},carpentry:{model:In("home_A","red"),size:1.4,rot:0},weaving:{model:In("market","red"),size:1.5,rot:0}},Zf={},fg={},Qf=[...[7,8,9,10,11].map(n=>["path",12,n]),...[7,8,9,10,11,13,14,15,16,17,18].map(n=>["path",n,12]),["path",12,12],["flowerbed",11,7],["flowerbed",13,7],["flowerbed",9,6],["flowerbed",10,6],["flowerbed",14,7],["flowerbed",17,7],["flowerbed",18,8]],tp={house:{width:3.7},ruin_house:{width:3.7},carpentry:{width:2.6},weaving:{width:2.6},lumberjack:{width:2.5},scaffold:{width:2.2},ruin_bakery:{width:2.6},ruin_boat:{width:1.9},bridge_w:{width:2.3},bridge_w_broken:{width:2.3},bridge_n:{width:2.3},bridge_n_broken:{width:2.3},stairs_old:{width:2.1},stairs_old_broken:{width:2.1},jungletree:{width:1.85},bigtree:{width:2.4},claymound:{width:1},bigrock:{width:1.5},starfish:{width:.6},beachshell:{width:.55},bamboo:{width:1.05},barn:{width:2.7},feedmill:{width:2.9},bakery:{width:2.6},market:{width:2.7},board:{width:2},coop:{width:1.25},cowshed:{width:1.7},pigsty:{width:1.6},chicken:{width:.55},cow:{width:1.05},pig:{width:.85},wheat:{width:1.35},corn:{width:1.35},carrot:{width:1.35},sprout:{width:1.35},appletree:{width:1.7},leafytree:{width:1.6},palm:{width:1.7},maisie:{width:.54},bush:{width:.95},rock:{width:.9},dairy:{width:2.6},juicebar:{width:2.6},kitchen:{width:2.7},seafood:{width:2.6},sweets:{width:2.6},jammaker:{width:2.7},beehive:{width:1.5},ship:{width:3.6},strawberry:{width:1.35},tomato:{width:1.35},pumpkin:{width:1.35},sunflower:{width:1.35},melon:{width:1.35},cabbage:{width:1.35},onion:{width:1.35},bananatree:{width:1.8},orangetree:{width:1.7},lemontree:{width:1.7},peartree:{width:1.7},cherrytree:{width:1.75},goldboat:{width:1.9},boat:{width:1.8},tent:{width:1.3},sandcastle:{width:1.8},well:{width:1.05},cart:{width:1.1},fountain:{width:1.95},lighthouse:{width:1.5},flower_red:{width:.6},flower_yel:{width:.6},flower_pur:{width:.6},flower_red2:{width:.65},mushroomdeco:{width:.5},lantern:{width:.5},barrel:{width:.55},chest:{width:.7},crate:{width:.7},haysack:{width:.55},campfire:{width:.75},hedge:{width:.95},flag:{width:.7},stump:{width:.7},logs:{width:.85},bee:{width:.3},bench:{width:.9},wheelbarrow:{width:.85},tom:{width:.66},lily:{width:.5},ben:{width:.86},rosa:{width:.61},sam:{width:.73},gull1:{width:.9},gull2:{width:.9},pier:{width:4.6},grasstuft:{width:.6},daisies:{width:.85},fence:{width:1.05},axe:{width:.5},signboard:{width:1},bucket:{width:.4},fishingrod:{width:.9},soil:{width:1.35},trough:{width:.8},dog:{width:.62},cat:{width:.58},bunny:{width:.52},parrot:{width:.6},penguin:{width:.56},sheepdeco:{width:.7},horse:{width:.85},llama:{width:.6},crab:{width:.6}},zl={coop:"chicken",cowpen:"cow",pigpen:"pig",beehive:"bee"},ep={apple:"appletree",palm:"palm",banana:"bananatree",orange:"orangetree",lemon:"lemontree",pear:"peartree",cherry:"cherrytree"},np={palmdeco:"palm",flowerbed:"daisies",whitefence:"fence"},pg={"nature/plant_bushLarge":"bush","pirate/crate":"crate","pirate/crate-bottles":"crate","pirate/barrel":"barrel","pirate/rocks-sand-a":"rock","pirate/rocks-a":"rock","kk/decoration/nature/rock_single_B.gltf":"rock","pirate/palm-straight":"palm","pirate/palm-bend":"palm","nature/tree_palmTall":"palm","kk/decoration/nature/trees_A_medium.gltf":"leafytree","nature/stump_old":"stump","nature/log_stack":"logs","nature/mushroom_red":"mushroomdeco","pirate/chest":"chest","pirate/boat-row-small":"boat","nature/grass_large":"grasstuft","survival/bucket":"bucket","pirate/tool-paddle":"fishingrod","survival/box-large":"trough","pets/animal-crab":"crab","pets/animal-parrot":"parrot","pets/animal-penguin":"penguin"};function Ku(n){let t=n;return()=>(t=t*16807%2147483647)/2147483647}function fi(n,t){for(const e of _s){const[i,s,r,o]=e.rect;if(n>=i&&n<i+r&&t>=s&&t<s+o)return e.id}return null}function Qn(n,t){var i;const e=fi(n,t);return!!e&&!!((i=_.zones)!=null&&i[e])}function mg(n,t){const e=_s.find(d=>d.id===n),i=Yf[n],[s,r,o,a]=e.rect,c=Ku(t),l=[],u=s+Math.floor(o/2),h=r+Math.floor(a/2);for(let d=s;d<s+o;d++)for(let f=r;f<r+a;f++){const p=n==="west"?f===h:n==="north"?d===u:d===u||f===h,v=c(),g=i[Math.floor(c()*i.length)],m=Math.floor(c()*4);p||v>=.55||l.push({k:"obstacle",t:g,x:d,z:f,r:m})}return l}function ip(n){const t=[];return _s.filter(e=>!e.open).forEach((e,i)=>mg(e.id,20240611+i*977).forEach(s=>t.push({id:n++,...s}))),{objs:t,nextId:n}}function sp(n){const t=n;t.objs.forEach(s=>{s.x+=Ht,s.z+=Ht}),(t.visitors||[]).forEach(s=>{s.x+=Ht,s.z+=Ht}),t.inv||(t.inv={});for(const[s,r]of[["wood",20],["stone",10],["palmleaf",10]])t.inv[s]=(t.inv[s]||0)+r;const e=Math.max(t.nextId||1,...t.objs.map(s=>s.id||0))+1,i=ip(e);return t.objs.push(...i.objs),t.nextId=i.nextId,t.zones={core:!0,west:!1,north:!1,old:!1},Ju(t),t.tut=999,t.boatFixed=!0,t.v=2,t}const Vr={bridge_w:{n:"Cầu tre",zone:"west",home:"core",along:"z",line:Ht,pref:Ht+13,span:[Ht,Ht+di-1]},bridge_n:{n:"Cầu gỗ",zone:"north",home:"core",along:"x",line:Ht,pref:Ht+13,span:[Ht,Ht+di-2]},stairs_old:{n:"Bậc đá",zone:"old",home:"west",along:"x",line:Ht,pref:7,span:[0,Ht-2]}},Bo=n=>_s.find(t=>{var e;return t.id===((e=Vr[n])==null?void 0:e.zone)}),gg=n=>n.k==="obstacle"?0:n.k==="decor"?1:n.k==="field"&&!n.crop?2:null;function Ju(n){var t;for(const[e,i]of Object.entries(Vr)){if((t=n.zones)!=null&&t[i.zone]||n.objs.some(u=>u.k==="gate"&&u.t===e))continue;const s=new Map;for(const u of n.objs){const[h,d]=pn(u);for(let f=0;f<h;f++)for(let p=0;p<d;p++)s.set(u.x+f+","+(u.z+p),u)}let r=null,o=1/0;const a=(u,h,d)=>{const f=new Set;let p=d;for(const[S,M]of[[u,h],[u+1,h]]){const x=s.get(S+","+M);if(!x)continue;const L=gg(x);if(L===null||d&&L)return;p=Math.max(p,L),f.add(x)}const[v,g]=i.along==="z"?[h,u]:[u,h],m=p*1e6+Math.abs(g-i.line)*1e3+Math.abs(v-i.pref)*10+f.size*3;m<o&&(o=m,r={x:u,z:h,hit:f})};for(let u=0;u<te-1;u++)for(let h=0;h<te;h++)fi(u,h)===i.home&&fi(u+1,h)===i.home&&a(u,h,0);const c=i.along==="z"?i.line-2:i.line-1;for(let u=i.span[0];u<=i.span[1];u++){const[h,d]=i.along==="z"?[c,u]:[u,c];fi(h,d)===i.zone&&fi(h+1,d)===i.zone&&a(h,d,3)}if(!r)continue;for(const u of r.hit)u.k==="decor"&&((n.store||(n.store={}))[u.t]=(n.store[u.t]||0)+1);n.objs=n.objs.filter(u=>!r.hit.has(u));const l=Math.max(n.nextId||1,...n.objs.map(u=>(u.id||0)+1));n.objs.push({id:l,k:"gate",t:e,x:r.x,z:r.z,r:0,site:{stage:0,got:{}}}),n.nextId=l+1}return n}function vg(n){!_.zones||_.zones[n]||(_.zones[n]=!0,_i("zone",n))}function rp(n){for(const[t,e]of[[n.x,n.z],[n.x+1,n.z]]){if(Qn(t,e))return!0;for(const[i,s]of[[1,0],[-1,0],[0,1],[0,-1]])if(Qn(t+i,e+s))return!0}return!1}const zo=n=>n.k==="gate"?rp(n):Qn(n.x,n.z);function op(n,t=new Set){const e=_s.find(r=>r.id===n);if(!(e!=null&&e.gate)||t.has(n))return null;const i=_.objs.find(r=>r.k==="gate"&&r.t===e.gate);if(!i)return null;const s=fi(i.x,i.z);return rp(i)?i:op(s,t.add(n))}const Vo=n=>{var t;return(t=n.site)!=null&&t.ruin?"ruin:"+n.t:`${n.k}:${n.t}`},Zu=n=>Na[Vo(n)],Qu=n=>{var t;return((t=Zu(n))==null?void 0:t.length)||0};function _g(n){Zu(n)&&(n.site={stage:0,got:{}})}function Ho(n){var i;const t=n.site&&((i=Zu(n))==null?void 0:i[n.site.stage]);if(!t)return{};const e={};for(const[s,r]of Object.entries(t))e[s]={need:r,got:n.site.got[s]||0};return e}function ds(n){if(n.k!=="gate")return 0;const t=Mg(Vo(n));return _.level<t?t:0}function xg(n,t){if(ds(n))return 0;const e=Ho(n)[t];if(!e)return 0;const i=Math.max(0,Math.min(zt(t),e.need-e.got));return i?(Xe(t,-i),n.site.got[t]=e.got+i,i):0}const ap=n=>!!n.site&&n.site.stage>=Qu(n);function yg(n){if(ap(n)&&!ds(n))return ed(n);const t=Ho(n),e=Object.keys(t);return ds(n)||!e.length||e.some(i=>t[i].got<t[i].need)?"none":(Rn(10*(n.site.stage+1)),n.site.stage++,n.site.got={},n.site.stage<Qu(n)?"stage":ed(n))}function ed(n){const t=Vo(n);return delete n.site,t==="ruin:boat"&&(_.boatFixed=!0),Qe("build",t),n.k==="gate"&&vg(Bo(n.t).id),"done"}function bg(n){for(const t of n.objs){if(!ap(t))continue;const e=Vo(t);if(delete t.site,e==="ruin:boat"&&(n.boatFixed=!0),t.k==="gate"){const i=Bo(t.t);i&&((n.zones||(n.zones={}))[i.id]=!0)}}return n}function Mg(n){var i,s,r,o;const[t,e]=n.split(":");return t==="fac"?((i=sn[e])==null?void 0:i.lv)??1:t==="pen"?((s=fn[e])==null?void 0:s.lv)??1:t==="helper"?((r=xs[e])==null?void 0:r.lv)??1:t==="gate"?((o=_s.find(a=>a.gate===e))==null?void 0:o.lv)??1:1}const Sg=n=>_o.find(t=>{var e;return(e=Mn[t])==null?void 0:e.drop[n]})||_o.find(t=>{var e,i;return(i=(e=Mn[t])==null?void 0:e.rare)==null?void 0:i[n]});function Eo(n){const t=Xt[n];if(!t)return"";if(t.mat===1){const i=Sg(n),s=i?Mn[i]:Object.values(Mn).find(r=>r.drop[n])||Object.values(Mn).find(r=>{var o;return(o=r.rare)==null?void 0:o[n]});return s?`Chặt ${s.n.toLowerCase()} để có ${t.n.toLowerCase()}`:""}const e=Object.values(sn).find(i=>i.rec.some(s=>s.out===n));return e?`Làm ở ${e.n}`:""}const th="maisies-farm-v1",Lt=()=>Date.now(),be=n=>Math.floor(Math.random()*n),wn=n=>n[be(n.length)],Ua={},Hr=(n,t)=>(Ua[n]||(Ua[n]=[])).push(t),_i=(n,...t)=>(Ua[n]||[]).forEach(e=>e(...t));let _=null;function pn(n){switch(n.k){case"field":case"tree":return[1,1];case"pen":case"house":return[3,3];case"fac":case"barn":case"market":case"boat":case"helper":return[2,2];case"board":case"gate":return[2,1];case"decor":{const t=Zn[n.t],e=t.w||1,i=t.d||1;return n.r%2?[i,e]:[e,i]}case"obstacle":return[1,1]}return[1,1]}function cc(n){const t=new Map;for(const e of _.objs){if(e.id===n)continue;const[i,s]=pn(e);for(let r=0;r<i;r++)for(let o=0;o<s;o++)t.set(e.x+r+","+(e.z+o),e.id)}return t}function cp(n,t,e,i,s){if(n<0||t<0||n+e>te||t+i>te)return!1;const r=cc(s);for(let o=0;o<e;o++)for(let a=0;a<i;a++)if(r.has(n+o+","+(t+a))||!Qn(n+o,t+a))return!1;return!0}function lc(n,t,e=Ht+di/2,i=Ht+di/2){let s=null,r=1e9;const o=cc();for(let a=0;a<=te-n;a++)for(let c=0;c<=te-t;c++){let l=!0;for(let h=0;h<n&&l;h++)for(let d=0;d<t&&l;d++)(o.has(a+h+","+(c+d))||!Qn(a+h,c+d))&&(l=!1);if(!l)continue;const u=Math.hypot(a-e,c-i);u<r&&(r=u,s=[a,c])}return s}function wg(n,t){return lc(n,t)?null:`Đảo chưa còn chỗ trống ${n}×${t} ô. Chặt bớt bụi cây, hoặc cất bớt đồ trang trí vào túi 📦 rồi đặt nhé!`}const zt=n=>_.inv[n]||0,eh=()=>cg+_.barnLvl*lg,lp=()=>Object.entries(_.inv).reduce((n,[t,e])=>{var i;return n+((i=Xt[t])!=null&&i.mat?0:e)},0),js=()=>eh()-lp();function Xe(n,t){_.inv[n]=(_.inv[n]||0)+t,_.inv[n]<=0&&delete _.inv[n]}const fs=n=>Object.entries(n).every(([t,e])=>zt(t)>=e);function nh(n){for(const[t,e]of Object.entries(n))Xe(t,-e)}function Rn(n){for(_.xp+=n;_.xp>=Fl(_.level);){_.xp-=Fl(_.level),_.level++;const t={coins:20+_.level*10,gems:2};_.coins+=t.coins,_.gems+=t.gems,_.energy=Math.max(_.energy,Ai(_.level)),_i("levelup",_.level,t)}}function Eg(){const n=Lt(),t=Ai(_.level);if(_.energy>=t){_.energyAt=n;return}const e=Math.floor((n-_.energyAt)/(Bl*1e3));e>0&&(_.energy=Math.min(t,_.energy+e),_.energyAt+=e*Bl*1e3)}const Tg=(n,t)=>n>=100?"99+":`${n}/${t}`,Ag=()=>_.energy>=Ai(_.level)?0:_.energyAt+Bl*1e3-Lt();function ih(){const n=_.level,t=new Set;for(const[e,i]of Object.entries(Fe))i.lv<=n&&t.add(e);for(const e of _.objs)if(!e.site&&(e.k==="tree"&&t.add(Ri[e.t].yield),e.k==="pen"&&e.animals.length&&t.add(fn[e.t].prod),e.k==="fac"))for(const i of sn[e.t].rec)i.lv<=n&&!i.out.endsWith("feed")&&t.add(i.out);return[...t].filter(e=>!Xt[e].mat)}function Cg(){const n=ih(),t=n.filter(o=>Fe[o]),e=1+be(Math.min(3,1+Math.floor(_.level/2))),i={};for(let o=0;Object.keys(i).length<e&&o<80;o++){const a=Math.random()<.45?wn(t):wn(n);if(i[a])continue;const c=Fe[a]?Math.min(6,2+Math.floor(_.level/2)):2;i[a]=1+be(c)}const s=Object.entries(i).reduce((o,[a,c])=>o+Xt[a].v*c,0);return{who:wn(Ze.slice(1)).id,items:i,coins:Math.round(s*1.5)+5,xp:Math.max(2,Math.round(s/3))}}function uc(){const n=Lt();_.orders=_.orders.map(t=>!t||t.wait&&n>=t.wait?Cg():t)}function hc(){const n=ih(),t=[],e=[...n].sort(()=>Math.random()-.5);for(let s=0;s<6;s++){const r=e.length?e.pop():wn(n),o=Fe[r]?2+be(4):1+be(2);t.push({item:r,n:o,done:!1})}const i=t.reduce((s,r)=>s+Xt[r.item].v*r.n,0);return{st:"docked",crates:t,coins:Math.round(i*.6),xp:Math.round(i/4),gems:1+be(2),leaveAt:Lt()+15*6e4}}function Rg(){const n=Lt(),t=_.ship;t.st==="away"&&n>=t.backAt?(_.ship=hc(),_i("ship","arrive")):t.st==="docked"&&n>=t.leaveAt&&(_.ship={st:"away",backAt:n+9e4},_i("ship","leave"))}const sh=()=>_.tut<Yu.length;function Pg(n){const[t,e]=n.split(":"),i=t==="ruin"?ug[e]:t;return _.objs.some(s=>s.k===i&&s.t===e&&!s.site)}function Gr(n=!0){var e;if(sh()){const i=Yu[_.tut];return i.ev==="build"&&_.qprog<i.n&&Pg(i.key)&&(_.qprog=i.n),i}const t=ac[_.quest];return t?t.lv&&_.level>0&&_.level<t.lv?null:t:(n&&((e=_.gq)==null?void 0:e.ev)==="clear"&&_.qprog<_.gq.n&&!up()&&(_.gq=null,_.qprog=0),_.gq||(_.gq=Ig()),_.gq)}const up=()=>_.objs.some(n=>n.k==="obstacle"&&Qn(n.x,n.z));function Ig(){const n=wn(Ze).id,t=_.level,e=[],i=Object.entries(Fe).filter(([,l])=>l.lv<=t).map(([l])=>l),s=wn(i),r=4+be(6);e.push({text:`Mình cần ${r} ${Xt[s].n.toLowerCase()} cho bữa tiệc. Bạn thu hoạch giúp nhé!`,ev:"harvest",key:s,n:r});const o=[];for(const l of _.objs)if(l.k==="fac"&&!l.site)for(const u of sn[l.t].rec)u.lv<=t&&!u.out.endsWith("feed")&&!Xt[u.out].mat&&o.push(u.out);if(o.length){const l=wn(o),u=1+be(3);e.push({text:`Làm giúp mình ${u} ${Xt[l].n.toLowerCase()} được không?`,ev:"make",key:l,n:u})}const a=_.objs.filter(l=>l.k==="pen"&&!l.site&&l.animals.length);if(a.length){const l=fn[wn(a).t],u=3+be(4);e.push({text:`Thu ${u} ${Xt[l.prod].n.toLowerCase()} từ chuồng ${l.an.toLowerCase()} nhé!`,ev:"collect",key:l.prod,n:u})}e.push({text:`Hôm nay nhiều người đặt hàng lắm. Giao ${2+be(3)} đơn hàng nhé!`,ev:"deliver",n:2+be(3)}),up()&&e.push({text:"Dọn thêm 3 chướng ngại vật để đảo rộng hơn nào!",ev:"clear",n:3});const c=wn(e);return c.ev==="deliver"&&(c.text=c.text.replace(/\d+ đơn/,c.n+" đơn")),{who:n,...c,coins:20+t*8,xp:6+t*2,gems:Math.random()<.3?1:0}}function Dg(){const n=Gr();if(!n||_.qprog<n.n)return null;const t=sh();return _.coins+=n.coins||0,_.gems+=n.gems||0,_.energy+=n.energy||0,Rn(n.xp||0),t?_.tut++:ac[_.quest]?_.quest++:_.gq=null,_.qprog=0,n}function Qe(n,t,e=1){_i("act",n,t,e);const i=Gr(!1);!i||i.ev!==n||i.key&&i.key!==t||(_.qprog=Math.min(i.n,_.qprog+e),_i("quest"))}const Wr=()=>_.nextId=(_.nextId||1)+1;function hp(){const n=Lt(),t=[],e=()=>t.length+1,i=(h,d)=>({x:h+Ht,z:d+Ht}),s=()=>({stage:0,got:{},ruin:!0});t.push({id:e(),k:"house",t:"house",...i(11,4),r:0,site:s()}),t.push({id:e(),k:"barn",t:"barn",...i(15,5),r:0}),[[8,9],[9,9],[10,9],[8,10],[9,10],[10,10]].forEach(([h,d],f)=>t.push({id:e(),k:"field",t:"field",...i(h,d),r:0,crop:f<3?"wheat":null,s:n-18e3,e:n+2e3+f*1500})),t.push({id:e(),k:"pen",t:"coop",...i(14,9),r:0,animals:[{s:0,e:0},{s:0,e:0}]}),t.push({id:e(),k:"fac",t:"feedmill",...i(12,13),r:0,jobs:[]}),t.push({id:e(),k:"board",t:"board",...i(8,13),r:0}),t.push({id:e(),k:"tree",t:"palm",...i(17,14),r:0,s:n-1e5,e:n}),Qf.forEach(([h,d,f])=>t.push({id:e(),k:"decor",t:h,...i(d,f),r:0})),t.push({id:e(),k:"decor",t:"bush",...i(18,6),r:0}),t.push({id:e(),k:"fac",t:"bakery",...i(15,14),r:0,jobs:[],site:s()}),t.push({id:e(),k:"boat",t:"boat",...i(18,24),r:0,site:s()});const o=Ku(20240611),a=new Set;for(const h of t){const[d,f]=pn(h);for(let p=-1;p<=d;p++)for(let v=-1;v<=f;v++)a.add(h.x+p+","+(h.z+v))}const c=Yf.core;for(let h=0;h<di;h++)for(let d=0;d<di;d++){if(h>=6&&h<=19&&d>=2&&d<=16||a.has(h+Ht+","+(d+Ht)))continue;const p=Math.min(h,d,di-1-h,di-1-d),v=h<13,g=p<1?v?.3:.12:v?.6:.24;o()<g&&t.push({id:e(),k:"obstacle",t:c[Math.floor(o()*c.length)],...i(h,d),r:Math.floor(o()*4)})}const l=ip(t.length+1);t.push(...l.objs);const u={ffsDeco:!0,v:2,coins:150,gems:10,xp:0,level:1,energy:Ai(1),energyAt:n,inv:{wheat:4,chickenfeed:2,wood:4,palmleaf:4},barnLvl:0,objs:t,nextId:l.nextId,orders:[null,null,null,null,null,null],ship:null,quest:0,qprog:0,lastDaily:"",sound:!0,music:!0,seed:"wheat",zones:{core:!0,west:!1,north:!1,old:!1},beach:[],tut:0,boatFixed:!1};return Ju(u)}function se(){try{localStorage.setItem(th,JSON.stringify(_))}catch{}}const nd=th+"-backup";function dp(n){try{localStorage.getItem(nd)==null&&localStorage.setItem(nd,n)}catch{}}function Lg(){let n=null,t=null;try{t=localStorage.getItem(th),n=JSON.parse(t)}catch{}return n&&n.v===1&&Array.isArray(n.objs)?(dp(t),_=sp(n),se()):_=n&&n.v===2&&Array.isArray(n.objs)?fp(n):hp(),_.ship||(_.ship=hc()),uc(),_}const Ng=()=>btoa(unescape(encodeURIComponent(JSON.stringify(_))));function Ug(n){const t=decodeURIComponent(escape(atob(n.replace(/\s+/g,"")))),e=JSON.parse(t);if(!e||e.v!==1&&e.v!==2||!Array.isArray(e.objs))throw new Error("bad");e.v===1&&dp(t),_=e.v===1?sp(e):fp(e),se()}function fp(n){const t=n.objs.find(e=>e.k==="boat");return t?t.site||(n.boatFixed=!0):(n.tut>=Yu.length||(n.tut=999),n.boatFixed=!0),bg(n),Ju(n)}function kg(n){if(!_.ffsDeco){_.ffsDeco=!0;for(const[t,e,i]of Qf){const s=e+Ht,r=i+Ht;if(!cp(s,r,1,1))continue;const o={id:Wr(),k:"decor",t,x:s,z:r,r:0};_.objs.push(o),n(o)}se()}}function Og(){_=hp(),_.ship=hc(),uc(),se()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="170",Fg=0,id=1,Bg=2,pp=1,mp=2,zi=3,ps=0,En=1,li=2,Hi=0,Cr=1,sd=2,rd=3,od=4,zg=5,Is=100,Vg=101,Hg=102,Gg=103,Wg=104,$g=200,Xg=201,qg=202,jg=203,Vl=204,Hl=205,Yg=206,Kg=207,Jg=208,Zg=209,Qg=210,t0=211,e0=212,n0=213,i0=214,Gl=0,Wl=1,$l=2,Nr=3,Xl=4,ql=5,jl=6,Yl=7,gp=0,s0=1,r0=2,us=0,vp=1,_p=2,xp=3,yp=4,o0=5,bp=6,oh=7,Mp=300,Ur=301,kr=302,Kl=303,Jl=304,dc=306,To=1e3,Ns=1001,Zl=1002,Bn=1003,a0=1004,Zo=1005,Si=1006,Nc=1007,Us=1008,Xi=1009,Sp=1010,wp=1011,Ao=1012,ah=1013,Bs=1014,wi=1015,$r=1016,ch=1017,lh=1018,Or=1020,Ep=35902,Tp=1021,Ap=1022,pi=1023,Cp=1024,Rp=1025,Rr=1026,Fr=1027,uh=1028,hh=1029,Pp=1030,dh=1031,fh=1033,ka=33776,Oa=33777,Fa=33778,Ba=33779,Ql=35840,tu=35841,eu=35842,nu=35843,iu=36196,su=37492,ru=37496,ou=37808,au=37809,cu=37810,lu=37811,uu=37812,hu=37813,du=37814,fu=37815,pu=37816,mu=37817,gu=37818,vu=37819,_u=37820,xu=37821,za=36492,yu=36494,bu=36495,Ip=36283,Mu=36284,Su=36285,wu=36286,c0=2200,l0=2201,u0=2202,Ya=2300,Eu=2301,Uc=2302,wr=2400,Er=2401,Ka=2402,ph=2500,h0=2501,d0=3200,f0=3201,Dp=0,p0=1,os="",Ie="srgb",Xr="srgb-linear",fc="linear",_e="srgb",sr=7680,ad=519,m0=512,g0=513,v0=514,Lp=515,_0=516,x0=517,y0=518,b0=519,Tu=35044,cd="300 es",Vi=2e3,Ja=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ld=1234567;const xo=Math.PI/180,Co=180/Math.PI;function gi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function en(n,t,e){return Math.max(t,Math.min(e,n))}function mh(n,t){return(n%t+t)%t}function M0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function S0(n,t,e){return n!==t?(e-n)/(t-n):0}function yo(n,t,e){return(1-e)*n+e*t}function w0(n,t,e,i){return yo(n,t,1-Math.exp(-e*i))}function E0(n,t=1){return t-Math.abs(mh(n,t*2)-t)}function T0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function A0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function C0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function R0(n,t){return n+Math.random()*(t-n)}function P0(n){return n*(.5-Math.random())}function I0(n){n!==void 0&&(ld=n);let t=ld+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function D0(n){return n*xo}function L0(n){return n*Co}function N0(n){return(n&n-1)===0&&n!==0}function U0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function k0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zs={DEG2RAD:xo,RAD2DEG:Co,generateUUID:gi,clamp:en,euclideanModulo:mh,mapLinear:M0,inverseLerp:S0,lerp:yo,damp:w0,pingpong:E0,smoothstep:T0,smootherstep:A0,randInt:C0,randFloat:R0,randFloatSpread:P0,seededRandom:I0,degToRad:D0,radToDeg:L0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:k0,setQuaternionFromProperEuler:O0,normalize:xe,denormalize:ui};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=s[0],g=s[3],m=s[6],S=s[1],M=s[4],x=s[7],L=s[2],C=s[5],R=s[8];return r[0]=o*v+a*S+c*L,r[3]=o*g+a*M+c*C,r[6]=o*m+a*x+c*R,r[1]=l*v+u*S+h*L,r[4]=l*g+u*M+h*C,r[7]=l*m+u*x+h*R,r[2]=d*v+f*S+p*L,r[5]=d*g+f*M+p*C,r[8]=d*m+f*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=e*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kc.makeScale(t,e)),this}rotate(t){return this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new Kt;function Np(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function F0(){const n=Ro("canvas");return n.style.display="block",n}const ud={};function mo(n){n in ud||(ud[n]=!0,console.warn(n))}function B0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function z0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function V0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(n.r=Pr(n.r),n.g=Pr(n.g),n.b=Pr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===os?fc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hd=[.64,.33,.3,.6,.15,.06],dd=[.2126,.7152,.0722],fd=[.3127,.329],pd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Xr]:{primaries:hd,whitePoint:fd,transfer:fc,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:hd,whitePoint:fd,transfer:_e,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let rr;class H0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=Ro("canvas")),rr.width=t.width,rr.height=t.height;const i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let G0=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W0=0;class rn extends Ys{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,i=Ns,s=Ns,r=Si,o=Us,a=pi,c=Xi,l=rn.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=gi(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Mp;rn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,i=0,s=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,L=(m+1)/2,C=(u+d)/4,R=(h+v)/4,D=(p+g)/4;return M>x&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=R/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=D/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=D/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(h-v)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends Ys{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends $0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kp extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(h!==v||c!==d||l!==f||u!==p){let g=1-a;const m=c*d+l*f+u*p+h*v,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),C=Math.atan2(L,m*S);g=Math.sin(g*C)/L,a=Math.sin(a*C)/L}const x=a*S;if(c=c*g+d*x,l=l*g+f*x,u=u*g+p*x,h=h*g+v*x,g===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new I,gd=new Ei;class ti{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),ta.subVectors(this.max,so),or.subVectors(t.a,so),ar.subVectors(t.b,so),cr.subVectors(t.c,so),Qi.subVectors(ar,or),ts.subVectors(cr,ar),Ms.subVectors(or,cr);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-Ms.z,Ms.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,Ms.z,0,-Ms.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-Ms.y,Ms.x,0];return!Bc(e,or,ar,cr,ta)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,or,ar,cr,ta))?!1:(ea.crossVectors(Qi,ts),e=[ea.x,ea.y,ea.z],Bc(e,or,ar,cr,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ui=[new I,new I,new I,new I,new I,new I,new I,new I],ii=new I,Qo=new ti,or=new I,ar=new I,cr=new I,Qi=new I,ts=new I,Ms=new I,so=new I,ta=new I,ea=new I,Ss=new I;function Bc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const q0=new ti,ro=new I,zc=new I;class qr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):q0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);const e=ro.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(zc)),this.expandByPoint(ro.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new I,Vc=new I,na=new I,es=new I,Hc=new I,ia=new I,Gc=new I;class Op{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),es.copy(this.origin).sub(Vc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=es.dot(this.direction),c=-es.dot(na),l=es.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Vc).addScaledVector(na,d),f}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,s,r){Hc.subVectors(e,t),ia.subVectors(i,t),Gc.crossVectors(Hc,ia);let o=this.direction.dot(Gc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,t);const c=a*this.direction.dot(ia.crossVectors(es,ia));if(c<0)return null;const l=a*this.direction.dot(Hc.cross(es));if(l<0||c+l>o)return null;const u=-a*es.dot(Gc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,g)}set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,p=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,v=l*h;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,v=l*h;e[0]=d-v*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,p=a*u,v=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*u,e[4]=v-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(j0,t,Y0)}lookAt(t,e,i){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ns.crossVectors(i,Dn),ns.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ns.crossVectors(i,Dn)),ns.normalize(),sa.crossVectors(Dn,ns),s[0]=ns.x,s[4]=sa.x,s[8]=Dn.x,s[1]=ns.y,s[5]=sa.y,s[9]=Dn.y,s[2]=ns.z,s[6]=sa.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],S=i[3],M=i[7],x=i[11],L=i[15],C=s[0],R=s[4],D=s[8],E=s[12],b=s[1],P=s[5],H=s[9],F=s[13],X=s[2],K=s[6],$=s[10],tt=s[14],G=s[3],ht=s[7],xt=s[11],Et=s[15];return r[0]=o*C+a*b+c*X+l*G,r[4]=o*R+a*P+c*K+l*ht,r[8]=o*D+a*H+c*$+l*xt,r[12]=o*E+a*F+c*tt+l*Et,r[1]=u*C+h*b+d*X+f*G,r[5]=u*R+h*P+d*K+f*ht,r[9]=u*D+h*H+d*$+f*xt,r[13]=u*E+h*F+d*tt+f*Et,r[2]=p*C+v*b+g*X+m*G,r[6]=p*R+v*P+g*K+m*ht,r[10]=p*D+v*H+g*$+m*xt,r[14]=p*E+v*F+g*tt+m*Et,r[3]=S*C+M*b+x*X+L*G,r[7]=S*R+M*P+x*K+L*ht,r[11]=S*D+M*H+x*$+L*xt,r[15]=S*E+M*F+x*tt+L*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+g*(+e*l*h-e*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],S=h*g*l-v*d*l+v*c*f-a*g*f-h*c*m+a*d*m,M=p*d*l-u*g*l-p*c*f+o*g*f+u*c*m-o*d*m,x=u*v*l-p*h*l+p*a*f-o*v*f-u*a*m+o*h*m,L=p*h*c-u*v*c-p*a*d+o*v*d+u*a*g-o*h*g,C=e*S+i*M+s*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=S*R,t[1]=(v*d*r-h*g*r-v*s*f+i*g*f+h*s*m-i*d*m)*R,t[2]=(a*g*r-v*c*r+v*s*l-i*g*l-a*s*m+i*c*m)*R,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*R,t[4]=M*R,t[5]=(u*g*r-p*d*r+p*s*f-e*g*f-u*s*m+e*d*m)*R,t[6]=(p*c*r-o*g*r-p*s*l+e*g*l+o*s*m-e*c*m)*R,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(p*h*r-u*v*r-p*i*f+e*v*f+u*i*m-e*h*m)*R,t[10]=(o*v*r-p*a*r+p*i*l-e*v*l-o*i*m+e*a*m)*R,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*f-e*a*f)*R,t[12]=L*R,t[13]=(u*v*s-p*h*s+p*i*d-e*v*d-u*i*g+e*h*g)*R,t[14]=(p*a*s-o*v*s-p*i*c+e*v*c+o*i*g-e*a*g)*R,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,v=o*u,g=o*h,m=a*h,S=c*l,M=c*u,x=c*h,L=i.x,C=i.y,R=i.z;return s[0]=(1-(v+m))*L,s[1]=(f+x)*L,s[2]=(p-M)*L,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+m))*C,s[6]=(g+S)*C,s[7]=0,s[8]=(p+M)*R,s[9]=(g-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=lr.set(s[0],s[1],s[2]).length();const o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);const l=1/r,u=1/o,h=1/a;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,e.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Vi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,p;if(a===Vi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ja)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*l,f=(i+s)*u;let p,v;if(a===Vi)p=(o+r)*h,v=-2*h;else if(a===Ja)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const lr=new I,si=new de,j0=new I(0,0,0),Y0=new I(1,1,1),ns=new I,sa=new I,Dn=new I,vd=new de,_d=new Ei;class Ci{constructor(t=0,e=0,i=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _d.setFromEuler(this),this.setFromQuaternion(_d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K0=0;const xd=new I,ur=new Ei,Oi=new de,ra=new I,oo=new I,J0=new I,Z0=new Ei,yd=new I(1,0,0),bd=new I(0,1,0),Md=new I(0,0,1),Sd={type:"added"},Q0={type:"removed"},hr={type:"childadded",child:null},Wc={type:"childremoved",child:null};class $e extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new I,e=new Ci,i=new Ei,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Kt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(yd,t)}rotateY(t){return this.rotateOnAxis(bd,t)}rotateZ(t){return this.rotateOnAxis(Md,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yd,t)}translateY(t){return this.translateOnAxis(bd,t)}translateZ(t){return this.translateOnAxis(Md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ra.copy(t):ra.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(oo,ra,this.up):Oi.lookAt(ra,oo,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Oi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sd),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Q0),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sd),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,J0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}$e.DEFAULT_UP=new I(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new I,Fi=new I,$c=new I,Bi=new I,dr=new I,fr=new I,wd=new I,Xc=new I,qc=new I,jc=new I,Yc=new Oe,Kc=new Oe,Jc=new Oe;class Xn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Fi.subVectors(i,e),$c.subVectors(t,e);const o=ri.dot(ri),a=ri.dot(Fi),c=ri.dot($c),l=Fi.dot(Fi),u=Fi.dot($c),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Yc.setScalar(0),Kc.setScalar(0),Jc.setScalar(0),Yc.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,i),Jc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yc,r.x),o.addScaledVector(Kc,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Fi.subVectors(t,e),ri.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ri.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Xn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,i),fr.subVectors(r,i),Xc.subVectors(t,i);const c=dr.dot(Xc),l=fr.dot(Xc);if(c<=0&&l<=0)return e.copy(i);qc.subVectors(t,s);const u=dr.dot(qc),h=fr.dot(qc);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(dr,o);jc.subVectors(t,r);const f=dr.dot(jc),p=fr.dot(jc);if(p>=0&&f<=p)return e.copy(r);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(fr,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return wd.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(wd,a);const m=1/(g+v+d);return o=v*m,a=d*m,e.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Zc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=mh(t,1),e=en(e,0,1),i=en(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Zc(o,r,t+1/3),this.g=Zc(o,r,t),this.b=Zc(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=Fp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return oe.fromWorkingColorSpace(hn.copy(this),t),Math.round(en(hn.r*255,0,255))*65536+Math.round(en(hn.g*255,0,255))*256+Math.round(en(hn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(hn.copy(this),e);const i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ie){oe.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,i=hn.g,s=hn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(oa);const i=yo(is.h,oa.h,e),s=yo(is.s,oa.s,e),r=yo(is.l,oa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Qt;Qt.NAMES=Fp;let tv=0;class jr extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=gi(),this.name="",this.blending=Cr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Hl,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends jr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new I,aa=new st;class zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tu&&(t.usage=this.usage),t}}class Bp extends zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class zp extends zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ev=0;const Gn=new de,Qc=new $e,pr=new I,Ln=new ti,ao=new ti,Ye=new I;class cn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?zp:Bp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Ln.min,ao.min),Ln.expandByPoint(Ye),Ye.addVectors(Ln.max,ao.max),Ln.expandByPoint(Ye)):(Ln.expandByPoint(ao.min),Ln.expandByPoint(ao.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(t,l),Ye.add(pr)),s=Math.max(s,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new I,c[D]=new I;const l=new I,u=new I,h=new I,d=new st,f=new st,p=new st,v=new I,g=new I;function m(D,E,b){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),a[D].add(v),a[E].add(v),a[b].add(v),c[D].add(g),c[E].add(g),c[b].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,E=S.length;D<E;++D){const b=S[D],P=b.start,H=b.count;for(let F=P,X=P+H;F<X;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new I,x=new I,L=new I,C=new I;function R(D){L.fromBufferAttribute(s,D),C.copy(L);const E=a[D];M.copy(E),M.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(C,E);const P=x.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,E=S.length;D<E;++D){const b=S[D],P=b.start,H=b.count;for(let F=P,X=P+H;F<X;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new de,ws=new Op,ca=new qr,Td=new I,la=new I,ua=new I,ha=new I,tl=new I,da=new I,Ad=new I,fa=new I;class Nt extends $e{constructor(t=new cn,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(tl.fromBufferAttribute(h,t),o?da.addScaledVector(tl,u):da.addScaledVector(tl.sub(e),u))}e.add(da)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(ca.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ca,Td)===null||ws.origin.distanceToSquared(Td)>(t.far-t.near)**2))&&(Ed.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,L=M;x<L;x+=3){const C=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=pa(this,m,t,i,l,u,h,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=pa(this,o,t,i,l,u,h,S,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,L=M;x<L;x+=3){const C=x,R=x+1,D=x+2;s=pa(this,m,t,i,l,u,h,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=g,M=g+1,x=g+2;s=pa(this,o,t,i,l,u,h,S,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function nv(n,t,e,i,s,r,o,a){let c;if(t.side===En?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ps,a),c===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(fa);return l<e.near||l>e.far?null:{distance:l,point:fa.clone(),object:n}}function pa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,la),n.getVertexPosition(c,ua),n.getVertexPosition(l,ha);const u=nv(n,t,e,i,la,ua,ha,Ad);if(u){const h=new I;Xn.getBarycoord(Ad,la,ua,ha,h),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,c,l,h,new st)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,c,l,h,new st)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Xn.getNormal(la,ua,ha,d.normal),u.face=d,u.barycoord=h}return u}class Ve extends cn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function p(v,g,m,S,M,x,L,C,R,D,E){const b=x/R,P=L/D,H=x/2,F=L/2,X=C/2,K=R+1,$=D+1;let tt=0,G=0;const ht=new I;for(let xt=0;xt<$;xt++){const Et=xt*P-F;for(let qt=0;qt<K;qt++){const pe=qt*b-H;ht[v]=pe*S,ht[g]=Et*M,ht[m]=X,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[g]=0,ht[m]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(qt/R),h.push(1-xt/D),tt+=1}}for(let xt=0;xt<D;xt++)for(let Et=0;Et<R;Et++){const qt=d+Et+K*xt,pe=d+Et+K*(xt+1),Y=d+(Et+1)+K*(xt+1),at=d+(Et+1)+K*xt;c.push(qt,pe,at),c.push(pe,Y,at),G+=6}a.addGroup(f,G,E),f+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const s in i)t[s]=i[s]}return t}function iv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const vh={clone:Br,merge:vn};var sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends jr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hp extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new I,Cd=new st,Rd=new st;class $n extends Hp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,Cd,Rd),e.subVectors(Rd,Cd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,gr=1;class ov extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $n(mr,gr,t,e);s.layers=this.layers,this.add(s);const r=new $n(mr,gr,t,e);r.layers=this.layers,this.add(r);const o=new $n(mr,gr,t,e);o.layers=this.layers,this.add(o);const a=new $n(mr,gr,t,e);a.layers=this.layers,this.add(a);const c=new $n(mr,gr,t,e);c.layers=this.layers,this.add(c);const l=new $n(mr,gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Gp extends rn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class av extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ve(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Hi});r.uniforms.tEquirect.value=e;const o=new Nt(s,r),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=Si),new ov(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const el=new I,cv=new I,lv=new Kt;class rs{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=el.subVectors(i,e).cross(cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(el),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lv.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new qr,ma=new I;class _h{constructor(t=new rs,e=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],S=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,g-f,x-m).normalize(),i[1].setComponents(c+r,d+l,g+f,x+m).normalize(),i[2].setComponents(c+o,d+u,g+p,x+S).normalize(),i[3].setComponents(c-o,d-u,g-p,x-S).normalize(),i[4].setComponents(c-a,d-h,g-v,x-M).normalize(),e===Vi)i[5].setComponents(c+a,d+h,g+v,x+M).normalize();else if(e===Ja)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function uv(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ji extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const S=m*d-o;for(let M=0;M<l;M++){const x=M*h-r;p.push(x,-S,0),v.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const M=S+l*m,x=S+l*(m+1),L=S+1+l*(m+1),C=S+1+l*m;f.push(M,x,C),f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ev=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,__=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:hv,alphahash_pars_fragment:dv,alphamap_fragment:fv,alphamap_pars_fragment:pv,alphatest_fragment:mv,alphatest_pars_fragment:gv,aomap_fragment:vv,aomap_pars_fragment:_v,batching_pars_vertex:xv,batching_vertex:yv,begin_vertex:bv,beginnormal_vertex:Mv,bsdfs:Sv,iridescence_fragment:wv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:Av,clipping_planes_pars_vertex:Cv,clipping_planes_vertex:Rv,color_fragment:Pv,color_pars_fragment:Iv,color_pars_vertex:Dv,color_vertex:Lv,common:Nv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:kv,displacementmap_pars_vertex:Ov,displacementmap_vertex:Fv,emissivemap_fragment:Bv,emissivemap_pars_fragment:zv,colorspace_fragment:Vv,colorspace_pars_fragment:Hv,envmap_fragment:Gv,envmap_common_pars_fragment:Wv,envmap_pars_fragment:$v,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:i_,envmap_vertex:qv,fog_vertex:jv,fog_pars_vertex:Yv,fog_fragment:Kv,fog_pars_fragment:Jv,gradientmap_pars_fragment:Zv,lightmap_pars_fragment:Qv,lights_lambert_fragment:t_,lights_lambert_pars_fragment:e_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:o_,lights_phong_pars_fragment:a_,lights_physical_fragment:c_,lights_physical_pars_fragment:l_,lights_fragment_begin:u_,lights_fragment_maps:h_,lights_fragment_end:d_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:v_,map_pars_fragment:__,map_particle_fragment:x_,map_particle_pars_fragment:y_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:M_,morphinstance_vertex:S_,morphcolor_vertex:w_,morphnormal_vertex:E_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:R_,normal_pars_fragment:P_,normal_pars_vertex:I_,normal_vertex:D_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:O_,opaque_fragment:F_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:V_,dithering_fragment:H_,dithering_pars_fragment:G_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:j_,shadowmask_pars_fragment:Y_,skinbase_vertex:K_,skinning_pars_vertex:J_,skinning_vertex:Z_,skinnormal_vertex:Q_,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:cx,worldpos_vertex:lx,background_vert:ux,background_frag:hx,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:vx,distanceRGBA_vert:_x,distanceRGBA_frag:xx,equirect_vert:yx,equirect_frag:bx,linedashed_vert:Mx,linedashed_frag:Sx,meshbasic_vert:wx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Cx,meshmatcap_frag:Rx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Dx,meshphong_frag:Lx,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:kx,meshtoon_frag:Ox,points_vert:Fx,points_frag:Bx,shadow_vert:zx,shadow_frag:Vx,sprite_vert:Hx,sprite_frag:Gx},dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Mi={basic:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:vn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:vn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:vn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:vn([dt.points,dt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:vn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:vn([dt.common,dt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:vn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:vn([dt.sprite,dt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:vn([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:vn([dt.lights,dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Mi.physical={uniforms:vn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ga={r:0,b:0,g:0},Ts=new Ci,Wx=new de;function $x(n,t,e,i,s,r,o){const a=new Qt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function p(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const x=p(S);x===null?m(a,c):x&&x.isColor&&(m(x,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===dc)?(u===void 0&&(u=new Nt(new Ve(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Br(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ts.copy(M.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(Ts)),u.material.toneMapped=oe.getTransfer(x.colorSpace)!==_e,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new ji(2,2),new xi({name:"BackgroundMaterial",uniforms:Br(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(ga,Vp(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:v,addToRenderList:g}}function Xx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(b,P,H,F,X){let K=!1;const $=h(F,H,P);r!==$&&(r=$,l(r.object)),K=f(b,F,H,X),K&&p(b,F,H,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(b,P,H,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,P,H){const F=H.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let K=X[P.id];K===void 0&&(K={},X[P.id]=K);let $=K[F];return $===void 0&&($=d(c()),K[F]=$),$}function d(b){const P=[],H=[],F=[];for(let X=0;X<e;X++)P[X]=0,H[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,P,H,F){const X=r.attributes,K=P.attributes;let $=0;const tt=H.getAttributes();for(const G in tt)if(tt[G].location>=0){const xt=X[G];let Et=K[G];if(Et===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),xt===void 0||xt.attribute!==Et||Et&&xt.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function p(b,P,H,F){const X={},K=P.attributes;let $=0;const tt=H.getAttributes();for(const G in tt)if(tt[G].location>=0){let xt=K[G];xt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));const Et={};Et.attribute=xt,xt&&xt.data&&(Et.data=xt.data),X[G]=Et,$++}r.attributes=X,r.attributesNum=$,r.index=F}function v(){const b=r.newAttributes;for(let P=0,H=b.length;P<H;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){const H=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;H[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),X[b]!==P&&(n.vertexAttribDivisor(b,P),X[b]=P)}function S(){const b=r.newAttributes,P=r.enabledAttributes;for(let H=0,F=P.length;H<F;H++)P[H]!==b[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function M(b,P,H,F,X,K,$){$===!0?n.vertexAttribIPointer(b,P,H,X,K):n.vertexAttribPointer(b,P,H,F,X,K)}function x(b,P,H,F){v();const X=F.attributes,K=H.getAttributes(),$=P.defaultAttributeValues;for(const tt in K){const G=K[tt];if(G.location>=0){let ht=X[tt];if(ht===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){const xt=ht.normalized,Et=ht.itemSize,qt=t.get(ht);if(qt===void 0)continue;const pe=qt.buffer,Y=qt.type,at=qt.bytesPerElement,Tt=Y===n.INT||Y===n.UNSIGNED_INT||ht.gpuType===ah;if(ht.isInterleavedBufferAttribute){const lt=ht.data,kt=lt.stride,Gt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)g(G.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Bt=0;Bt<G.locationSize;Bt++)M(G.location+Bt,Et/G.locationSize,Y,xt,kt*at,(Gt+Et/G.locationSize*Bt)*at,Tt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt,ht.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let lt=0;lt<G.locationSize;lt++)M(G.location+lt,Et/G.locationSize,Y,xt,Et*at,Et/G.locationSize*lt*at,Tt)}}else if($!==void 0){const xt=$[tt];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(G.location,xt);break;case 3:n.vertexAttrib3fv(G.location,xt);break;case 4:n.vertexAttrib4fv(G.location,xt);break;default:n.vertexAttrib1fv(G.location,xt)}}}}S()}function L(){D();for(const b in i){const P=i[b];for(const H in P){const F=P[H];for(const X in F)u(F[X].object),delete F[X];delete P[H]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const H in P){const F=P[H];for(const X in F)u(F[X].object),delete F[X];delete P[H]}delete i[b.id]}function R(b){for(const P in i){const H=i[P];if(H[b.id]===void 0)continue;const F=H[b.id];for(const X in F)u(F[X].object),delete F[X];delete H[b.id]}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function qx(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==pi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wi&&!D)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function Yx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new rs,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{const S=r?0:i,M=S*4;let x=m.clippingState||null;c.value=x,x=u(p,d,M,f);for(let L=0;L!==M;++L)x[L]=e[L];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Kx(n){let t=new WeakMap;function e(o,a){return a===Kl?o.mapping=Ur:a===Jl&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kl||a===Jl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new av(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class pc extends Hp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Tr=4,Pd=[.125,.215,.35,.446,.526,.582],Ds=20,nl=new pc,Id=new Qt;let il=null,sl=0,rl=0,ol=!1;const Ps=(1+Math.sqrt(5))/2,vr=1/Ps,Dd=[new I(-Ps,vr,0),new I(Ps,vr,0),new I(-vr,0,Ps),new I(vr,0,Ps),new I(0,Ps,-vr),new I(0,Ps,vr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ld{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:$r,format:pi,colorSpace:Xr,depthBuffer:!1},s=Nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=Zx(r,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,i,s){const a=new $n(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Id),u.toneMapping=us,u.autoClear=!1;const f=new Jn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),p=new Nt(new Ve,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Id),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;va(s,S*M,m>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ur||t.mapping===kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;va(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,nl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(s-r-1)%Dd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);const m=[];let S=0;for(let R=0;R<Ds;++R){const D=R/v,E=Math.exp(-D*D/2);m.push(E),R===0?S+=E:R<g&&(S+=2*E)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;const x=this._sizeLods[s],L=3*x*(s>M-Tr?s-M+Tr:0),C=4*(this._cubeSize-x);va(e,L,C,3*x,2*x),c.setRenderTarget(e),c.render(h,nl)}}function Jx(n){const t=[],e=[],i=[];let s=n;const r=n-Tr+1+Pd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Tr?c=Pd[o-n+Tr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*f),M=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,D=C>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(E,v*p*C),M.set(d,g*p*C);const b=[C,C,C,C,C,C];x.set(b,m*p*C)}const L=new cn;L.setAttribute("position",new zn(S,v)),L.setAttribute("uv",new zn(M,g)),L.setAttribute("faceIndex",new zn(x,m)),t.push(L),s>Tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nd(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Zx(n,t,e){const i=new Float32Array(Ds),s=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ud(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function kd(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Kl||c===Jl,u=c===Ur||c===kr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ld(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Ld(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ty(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ey(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let M=0,x=S.length;M<x;M+=3){const L=S[M+0],C=S[M+1],R=S[M+2];d.push(L,C,C,R,R,L)}}else if(p!==void 0){const S=p.array;v=p.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const L=M+0,C=M+1,R=M+2;d.push(L,C,C,R,R,L)}}else return;const g=new(Np(d)?zp:Bp)(d,1);g.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ny(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function h(d,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,p);let m=0;for(let S=0;S<p;S++)m+=f[S]*v[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function iy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sy(n,t,e){const i=new WeakMap,s=new Oe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let L=a.attributes.position.count*x,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*C*4*h),D=new kp(R,L,C,h);D.type=wi,D.needsUpdate=!0;const E=x*4;for(let P=0;P<h;P++){const H=m[P],F=S[P],X=M[P],K=L*C*4*P;for(let $=0;$<H.count;$++){const tt=$*E;p===!0&&(s.fromBufferAttribute(H,$),R[K+tt+0]=s.x,R[K+tt+1]=s.y,R[K+tt+2]=s.z,R[K+tt+3]=0),v===!0&&(s.fromBufferAttribute(F,$),R[K+tt+4]=s.x,R[K+tt+5]=s.y,R[K+tt+6]=s.z,R[K+tt+7]=0),g===!0&&(s.fromBufferAttribute(X,$),R[K+tt+8]=s.x,R[K+tt+9]=s.y,R[K+tt+10]=s.z,R[K+tt+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new st(L,C)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ry(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $p extends rn{constructor(t,e,i,s,r,o,a,c,l,u=Rr){if(u!==Rr&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rr&&(i=Bs),i===void 0&&u===Fr&&(i=Or),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xp=new rn,Od=new $p(1,1),qp=new kp,jp=new X0,Yp=new Gp,Fd=[],Bd=[],zd=new Float32Array(16),Vd=new Float32Array(9),Hd=new Float32Array(4);function Yr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mc(n,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function oy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function uy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;Hd.set(i),n.uniformMatrix2fv(this.addr,!1,Hd),je(e,i)}}function hy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;Vd.set(i),n.uniformMatrix3fv(this.addr,!1,Vd),je(e,i)}}function dy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;zd.set(i),n.uniformMatrix4fv(this.addr,!1,zd),je(e,i)}}function fy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function vy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function by(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Od.compareFunction=Lp,r=Od):r=Xp,e.setTexture2D(t||r,s)}function My(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jp,s)}function Sy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yp,s)}function wy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qp,s)}function Ey(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return cy;case 35666:return ly;case 35674:return uy;case 35675:return hy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return _y;case 36295:return xy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return wy}}function Ty(n,t){n.uniform1fv(this.addr,t)}function Ay(n,t){const e=Yr(t,this.size,2);n.uniform2fv(this.addr,e)}function Cy(n,t){const e=Yr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ry(n,t){const e=Yr(t,this.size,4);n.uniform4fv(this.addr,e)}function Py(n,t){const e=Yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Iy(n,t){const e=Yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dy(n,t){const e=Yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ly(n,t){n.uniform1iv(this.addr,t)}function Ny(n,t){n.uniform2iv(this.addr,t)}function Uy(n,t){n.uniform3iv(this.addr,t)}function ky(n,t){n.uniform4iv(this.addr,t)}function Oy(n,t){n.uniform1uiv(this.addr,t)}function Fy(n,t){n.uniform2uiv(this.addr,t)}function By(n,t){n.uniform3uiv(this.addr,t)}function zy(n,t){n.uniform4uiv(this.addr,t)}function Vy(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xp,r[o])}function Hy(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jp,r[o])}function Gy(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yp,r[o])}function Wy(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qp,r[o])}function $y(n){switch(n){case 5126:return Ty;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return ky;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class Xy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ey(e.type)}}class qy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$y(e.type)}}class jy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Gd(n,t){n.seq.push(t),n.map[t.id]=t}function Yy(n,t,e){const i=n.name,s=i.length;for(al.lastIndex=0;;){const r=al.exec(i),o=al.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gd(e,l===void 0?new Xy(a,n,t):new qy(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new jy(a),Gd(e,h)),e=h}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Yy(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Wd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ky=37297;let Jy=0;function Zy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const $d=new Kt;function Qy(n){oe._getMatrix($d,oe.workingColorSpace,n);const t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case fc:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zy(n.getShaderSource(t),o)}else return s}function tb(n,t){const e=Qy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eb(n,t){let e;switch(t){case vp:e="Linear";break;case _p:e="Reinhard";break;case xp:e="Cineon";break;case yp:e="ACESFilmic";break;case bp:e="AgX";break;case oh:e="Neutral";break;case o0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new I;function nb(){oe.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ib(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function sb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function go(n){return n!==""}function qd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(n){return n.replace(ob,cb)}const ab=new Map;function cb(n,t){let e=Zt[t];if(e===void 0){const i=ab.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Au(e)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(n){return n.replace(lb,ub)}function ub(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hb(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function db(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case kr:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case kr:t="ENVMAP_MODE_REFRACTION";break}return t}function pb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case s0:t="ENVMAP_BLENDING_MIX";break;case r0:t="ENVMAP_BLENDING_ADD";break}return t}function mb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function gb(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hb(e),l=db(e),u=fb(e),h=pb(e),d=mb(e),f=ib(e),p=sb(r),v=s.createProgram();let g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),m.length>0&&(m+=`
`)):(g=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Zt.tonemapping_pars_fragment:"",e.toneMapping!==us?eb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,tb("linearToOutputTexel",e.outputColorSpace),nb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=Au(o),o=qd(o,e),o=jd(o,e),a=Au(a),a=qd(a,e),a=jd(a,e),o=Yd(o),a=Yd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+g+o,x=S+m+a,L=Wd(s,s.VERTEX_SHADER,M),C=Wd(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim();let K=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,C);else{const tt=Xd(s,L,"vertex"),G=Xd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||X==="")&&($=!1);$&&(P.diagnostics={runnable:K,programLog:H,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(L),s.deleteShader(C),D=new Va(s,v),E=rb(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Ky)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let vb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new xb(t),e.set(t,i)),i}}class xb{constructor(t){this.id=vb++,this.code=t,this.usedTimes=0}}function yb(n,t,e,i,s,r,o){const a=new gh,c=new _b,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,b,P,H,F){const X=H.fog,K=F.geometry,$=E.isMeshStandardMaterial?H.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),G=tt&&tt.mapping===dc?tt.image.height:null,ht=p[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=xt!==void 0?xt.length:0;let qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let pe,Y,at,Tt;if(ht){const ve=Mi[ht];pe=ve.vertexShader,Y=ve.fragmentShader}else pe=E.vertexShader,Y=E.fragmentShader,c.update(E),at=c.getVertexShaderID(E),Tt=c.getFragmentShaderID(E);const lt=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,ae=!!E.map,Q=!!E.matcap,rt=!!tt,A=!!E.aoMap,It=!!E.lightMap,nt=!!E.bumpMap,Mt=!!E.normalMap,ut=!!E.displacementMap,Ot=!!E.emissiveMap,yt=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,O=E.clearcoat>0,q=E.dispersion>0,et=E.iridescence>0,j=E.sheen>0,At=E.transmission>0,ft=y&&!!E.anisotropyMap,bt=O&&!!E.clearcoatMap,ne=O&&!!E.clearcoatNormalMap,it=O&&!!E.clearcoatRoughnessMap,St=et&&!!E.iridescenceMap,Ft=et&&!!E.iridescenceThicknessMap,Vt=j&&!!E.sheenColorMap,wt=j&&!!E.sheenRoughnessMap,re=!!E.specularMap,Jt=!!E.specularColorMap,Se=!!E.specularIntensityMap,N=At&&!!E.transmissionMap,pt=At&&!!E.thicknessMap,W=!!E.gradientMap,Z=!!E.alphaMap,vt=E.alphaTest>0,mt=!!E.alphaHash,jt=!!E.extensions;let Ue=us;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ln={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:pe,fragmentShader:Y,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Xr,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:Q,envMap:rt,envMapMode:rt&&tt.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:It,bumpMap:nt,normalMap:Mt,displacementMap:d&&ut,emissiveMap:Ot,normalMapObjectSpace:Mt&&E.normalMapType===p0,normalMapTangentSpace:Mt&&E.normalMapType===Dp,metalnessMap:yt,roughnessMap:T,anisotropy:y,anisotropyMap:ft,clearcoat:O,clearcoatMap:bt,clearcoatNormalMap:ne,clearcoatRoughnessMap:it,dispersion:q,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Ft,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:re,specularColorMap:Jt,specularIntensityMap:Se,transmission:At,transmissionMap:N,thicknessMap:pt,gradientMap:W,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:vt,alphaHash:mt,combine:E.combine,mapUv:ae&&v(E.map.channel),aoMapUv:A&&v(E.aoMap.channel),lightMapUv:It&&v(E.lightMap.channel),bumpMapUv:nt&&v(E.bumpMap.channel),normalMapUv:Mt&&v(E.normalMap.channel),displacementMapUv:ut&&v(E.displacementMap.channel),emissiveMapUv:Ot&&v(E.emissiveMap.channel),metalnessMapUv:yt&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ft&&v(E.anisotropyMap.channel),clearcoatMapUv:bt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(E.sheenRoughnessMap.channel),specularMapUv:re&&v(E.specularMap.channel),specularColorMapUv:Jt&&v(E.specularColorMap.channel),specularIntensityMapUv:Se&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:pt&&v(E.thicknessMap.channel),alphaMapUv:Z&&v(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Mt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(ae||Z),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:kt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:qt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===_e,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===_e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===li,flipSided:E.side===En,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ln.vertexUv1s=l.has(1),ln.vertexUv2s=l.has(2),ln.vertexUv3s=l.has(3),l.clear(),ln}function m(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)b.push(P),b.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(b,E),M(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const b=p[E.type];let P;if(b){const H=Mi[b];P=vh.clone(H.uniforms)}else P=E.uniforms;return P}function L(E,b){let P;for(let H=0,F=u.length;H<F;H++){const X=u[H];if(X.cacheKey===b){P=X,++P.usedTimes;break}}return P===void 0&&(P=new gb(n,b,E,r),u.push(P)),P}function C(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:D}}function bb(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Mb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,p,v,g){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},n[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),t++,m}function a(h,d,f,p,v,g){const m=o(h,d,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,p,v,g){const m=o(h,d,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||Mb),i.length>1&&i.sort(d||Jd),s.length>1&&s.sort(d||Jd)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Sb(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Zd,n.set(i,[o])):s>=r.length?(o=new Zd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function wb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Eb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Tb=0;function Ab(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cb(n){const t=new wb,e=Eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new de,o=new de;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,M=0,x=0,L=0,C=0,R=0;l.sort(Ab);for(let E=0,b=l.length;E<b;E++){const P=l[E],H=P.color,F=P.intensity,X=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*F,h+=H.g*F,d+=H.b*F;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],F);R++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=P.shadow.matrix,S++}i.directional[f]=$,f++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(H).multiplyScalar(F),$.distance=X,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[v]=$;const tt=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,tt.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=tt.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=K,x++}v++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(H).multiplyScalar(F),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=$,g++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const tt=P.shadow,G=e.get(P);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=P.shadow.matrix,M++}i.point[p]=$,p++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(F),$.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[m]=$,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==L||D.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=f,D.pointLength=p,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=L,D.numLightProbes=R,i.version=Tb++)}function c(l,u){let h=0,d=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const M=l[m];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Qd(n){const t=new Cb(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Rb(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qd(n),t.set(s,[a])):r>=o.length?(a=new Qd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Pb extends jr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ib extends jr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nb(n,t,e){let i=new _h;const s=new st,r=new st,o=new Oe,a=new Pb({depthPacking:f0}),c=new Ib,l={},u=e.maxTextureSize,h={[ps]:En,[En]:ps,[li]:li},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Db,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new cn;p.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let m=this.type;this.render=function(C,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=m!==zi&&this.type===zi,X=m===zi&&this.type!==zi;for(let K=0,$=C.length;K<$;K++){const tt=C[K],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||F===!0||X===!0){const Et=this.type!==zi?{minFilter:Bn,magFilter:Bn}:{};G.map!==null&&G.map.dispose(),G.map=new ms(s.x,s.y,Et),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const xt=G.getViewportCount();for(let Et=0;Et<xt;Et++){const qt=G.getViewport(Et);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),H.viewport(o),G.updateMatrices(tt,Et),i=G.getFrustum(),x(R,D,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&S(G,D),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,b,P)};function S(C,R){const D=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,f,v,null)}function M(C,R,D,E){let b=null;const P=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=b.uuid,F=R.uuid;let X=l[H];X===void 0&&(X={},l[H]=X);let K=X[F];K===void 0&&(K=b.clone(),X[F]=K,R.addEventListener("dispose",L)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,E===zi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=n.properties.get(b);H.light=D}return b}function x(C,R,D,E,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===zi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=t.update(C),X=C.material;if(Array.isArray(X)){const K=F.groups;for(let $=0,tt=K.length;$<tt;$++){const G=K[$],ht=X[G.materialIndex];if(ht&&ht.visible){const xt=M(C,ht,E,b);C.onBeforeShadow(n,C,R,D,F,xt,G),n.renderBufferDirect(D,null,F,xt,C,G),C.onAfterShadow(n,C,R,D,F,xt,G)}}}else if(X.visible){const K=M(C,X,E,b);C.onBeforeShadow(n,C,R,D,F,K,null),n.renderBufferDirect(D,null,F,K,C,null),C.onAfterShadow(n,C,R,D,F,K,null)}}const H=C.children;for(let F=0,X=H.length;F<X;F++)x(H[F],R,D,E,b)}function L(C){C.target.removeEventListener("dispose",L);for(const D in l){const E=l[D],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Ub={[Gl]:Wl,[$l]:jl,[Xl]:Yl,[Nr]:ql,[Wl]:Gl,[jl]:$l,[Yl]:Xl,[ql]:Nr};function kb(n,t){function e(){let N=!1;const pt=new Oe;let W=null;const Z=new Oe(0,0,0,0);return{setMask:function(vt){W!==vt&&!N&&(n.colorMask(vt,vt,vt,vt),W=vt)},setLocked:function(vt){N=vt},setClear:function(vt,mt,jt,Ue,ln){ln===!0&&(vt*=Ue,mt*=Ue,jt*=Ue),pt.set(vt,mt,jt,Ue),Z.equals(pt)===!1&&(n.clearColor(vt,mt,jt,Ue),Z.copy(pt))},reset:function(){N=!1,W=null,Z.set(-1,0,0,0)}}}function i(){let N=!1,pt=!1,W=null,Z=null,vt=null;return{setReversed:function(mt){if(pt!==mt){const jt=t.get("EXT_clip_control");pt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Ue=vt;vt=null,this.setClear(Ue)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?lt(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(mt){W!==mt&&!N&&(n.depthMask(mt),W=mt)},setFunc:function(mt){if(pt&&(mt=Ub[mt]),Z!==mt){switch(mt){case Gl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=mt}},setLocked:function(mt){N=mt},setClear:function(mt){vt!==mt&&(pt&&(mt=1-mt),n.clearDepth(mt),vt=mt)},reset:function(){N=!1,W=null,Z=null,vt=null,pt=!1}}}function s(){let N=!1,pt=null,W=null,Z=null,vt=null,mt=null,jt=null,Ue=null,ln=null;return{setTest:function(ve){N||(ve?lt(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(ve){pt!==ve&&!N&&(n.stencilMask(ve),pt=ve)},setFunc:function(ve,ei,Li){(W!==ve||Z!==ei||vt!==Li)&&(n.stencilFunc(ve,ei,Li),W=ve,Z=ei,vt=Li)},setOp:function(ve,ei,Li){(mt!==ve||jt!==ei||Ue!==Li)&&(n.stencilOp(ve,ei,Li),mt=ve,jt=ei,Ue=Li)},setLocked:function(ve){N=ve},setClear:function(ve){ln!==ve&&(n.clearStencil(ve),ln=ve)},reset:function(){N=!1,pt=null,W=null,Z=null,vt=null,mt=null,jt=null,Ue=null,ln=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,S=null,M=null,x=null,L=null,C=null,R=new Qt(0,0,0),D=0,E=!1,b=null,P=null,H=null,F=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=tt>=2);let ht=null,xt={};const Et=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),pe=new Oe().fromArray(Et),Y=new Oe().fromArray(qt);function at(N,pt,W,Z){const vt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(N,mt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<W;jt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(pt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return mt}const Tt={};Tt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Nr),nt(!1),Mt(id),lt(n.CULL_FACE),A(Hi);function lt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function kt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Gt(N,pt){return h[N]!==pt?(n.bindFramebuffer(N,pt),h[N]=pt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Bt(N,pt){let W=f,Z=!1;if(N){W=d.get(pt),W===void 0&&(W=[],d.set(pt,W));const vt=N.textures;if(W.length!==vt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,jt=vt.length;mt<jt;mt++)W[mt]=n.COLOR_ATTACHMENT0+mt;W.length=vt.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function ae(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const Q={[Is]:n.FUNC_ADD,[Vg]:n.FUNC_SUBTRACT,[Hg]:n.FUNC_REVERSE_SUBTRACT};Q[Gg]=n.MIN,Q[Wg]=n.MAX;const rt={[$g]:n.ZERO,[Xg]:n.ONE,[qg]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Qg]:n.SRC_ALPHA_SATURATE,[Jg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[jg]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[Zg]:n.ONE_MINUS_DST_COLOR,[Kg]:n.ONE_MINUS_DST_ALPHA,[t0]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[n0]:n.CONSTANT_ALPHA,[i0]:n.ONE_MINUS_CONSTANT_ALPHA};function A(N,pt,W,Z,vt,mt,jt,Ue,ln,ve){if(N===Hi){v===!0&&(kt(n.BLEND),v=!1);return}if(v===!1&&(lt(n.BLEND),v=!0),N!==zg){if(N!==g||ve!==E){if((m!==Is||x!==Is)&&(n.blendEquation(n.FUNC_ADD),m=Is,x=Is),ve)switch(N){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sd:n.blendFunc(n.ONE,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case od:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case od:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,M=null,L=null,C=null,R.set(0,0,0),D=0,g=N,E=ve}return}vt=vt||pt,mt=mt||W,jt=jt||Z,(pt!==m||vt!==x)&&(n.blendEquationSeparate(Q[pt],Q[vt]),m=pt,x=vt),(W!==S||Z!==M||mt!==L||jt!==C)&&(n.blendFuncSeparate(rt[W],rt[Z],rt[mt],rt[jt]),S=W,M=Z,L=mt,C=jt),(Ue.equals(R)===!1||ln!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ln),R.copy(Ue),D=ln),g=N,E=!1}function It(N,pt){N.side===li?kt(n.CULL_FACE):lt(n.CULL_FACE);let W=N.side===En;pt&&(W=!W),nt(W),N.blending===Cr&&N.transparent===!1?A(Hi):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function Mt(N){N!==Fg?(lt(n.CULL_FACE),N!==P&&(N===id?n.cullFace(n.BACK):N===Bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),P=N}function ut(N){N!==H&&($&&n.lineWidth(N),H=N)}function Ot(N,pt,W){N?(lt(n.POLYGON_OFFSET_FILL),(F!==pt||X!==W)&&(n.polygonOffset(pt,W),F=pt,X=W)):kt(n.POLYGON_OFFSET_FILL)}function yt(N){N?lt(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function T(N){N===void 0&&(N=n.TEXTURE0+K-1),ht!==N&&(n.activeTexture(N),ht=N)}function y(N,pt,W){W===void 0&&(ht===null?W=n.TEXTURE0+K-1:W=ht);let Z=xt[W];Z===void 0&&(Z={type:void 0,texture:void 0},xt[W]=Z),(Z.type!==N||Z.texture!==pt)&&(ht!==W&&(n.activeTexture(W),ht=W),n.bindTexture(N,pt||Tt[N]),Z.type=N,Z.texture=pt)}function O(){const N=xt[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){pe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function wt(N){Y.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function re(N,pt){let W=l.get(pt);W===void 0&&(W=new WeakMap,l.set(pt,W));let Z=W.get(N);Z===void 0&&(Z=n.getUniformBlockIndex(pt,N.name),W.set(N,Z))}function Jt(N,pt){const Z=l.get(pt).get(N);c.get(pt)!==Z&&(n.uniformBlockBinding(pt,Z,N.__bindingPointIndex),c.set(pt,Z))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,xt={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,S=null,M=null,x=null,L=null,C=null,R=new Qt(0,0,0),D=0,E=!1,b=null,P=null,H=null,F=null,X=null,pe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:kt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:ae,setBlending:A,setMaterial:It,setFlipSided:nt,setCullFace:Mt,setLineWidth:ut,setPolygonOffset:Ot,setScissorTest:yt,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:et,texImage2D:St,texImage3D:Ft,updateUBOMapping:re,uniformBlockBinding:Jt,texStorage2D:ne,texStorage3D:it,texSubImage2D:j,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:bt,scissor:Vt,viewport:wt,reset:Se}}function tf(n,t,e,i){const s=Ob(i);switch(e){case Tp:return n*t;case Cp:return n*t;case Rp:return n*t*2;case uh:return n*t/s.components*s.byteLength;case hh:return n*t/s.components*s.byteLength;case Pp:return n*t*2/s.components*s.byteLength;case dh:return n*t*2/s.components*s.byteLength;case Ap:return n*t*3/s.components*s.byteLength;case pi:return n*t*4/s.components*s.byteLength;case fh:return n*t*4/s.components*s.byteLength;case ka:case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tu:case nu:return Math.max(n,16)*Math.max(t,8)/4;case Ql:case eu:return Math.max(n,8)*Math.max(t,8)/2;case iu:case su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ou:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case za:case yu:case bu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ip:case Mu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Su:case wu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ob(n){switch(n){case Xi:case Sp:return{byteLength:1,components:1};case Ao:case wp:case $r:return{byteLength:2,components:1};case ch:case lh:return{byteLength:2,components:4};case Bs:case ah:case wi:return{byteLength:4,components:1};case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Fb(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,y){return f?new OffscreenCanvas(T,y):Ro("canvas")}function v(T,y,O){let q=1;const et=yt(T);if((et.width>O||et.height>O)&&(q=O/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(q*et.width),At=Math.floor(q*et.height);h===void 0&&(h=p(j,At));const ft=y?p(j,At):h;return ft.width=j,ft.height=At,ft.getContext("2d").drawImage(T,0,0,j,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+At+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,O,q,et=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=y;if(y===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),y===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const At=et?fc:oe.getTransfer(q);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=At===_e?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(T,y){let O;return T?y===null||y===Bs||y===Or?O=n.DEPTH24_STENCIL8:y===wi?O=n.DEPTH32F_STENCIL8:y===Ao&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bs||y===Or?O=n.DEPTH_COMPONENT24:y===wi?O=n.DEPTH_COMPONENT32F:y===Ao&&(O=n.DEPTH_COMPONENT16),O}function L(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bn&&T.minFilter!==Si?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){const y=T.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&u.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),b(y)}function D(T){const y=i.get(T);if(y.__webglInit===void 0)return;const O=T.source,q=d.get(O);if(q){const et=q[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(T),Object.keys(q).length===0&&d.delete(O)}i.remove(T)}function E(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const O=T.source,q=d.get(O);delete q[y.__cacheKey],o.memory.textures--}function b(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let et=0;et<y.__webglFramebuffer[q].length;et++)n.deleteFramebuffer(y.__webglFramebuffer[q][et]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,et=O.length;q<et;q++){const j=i.get(O[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(T)}let P=0;function H(){P=0}function F(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function X(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function K(T,y){const O=i.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,y);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function $(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function tt(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,y);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function G(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){at(O,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const ht={[To]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[Zl]:n.MIRRORED_REPEAT},xt={[Bn]:n.NEAREST,[a0]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},Et={[m0]:n.NEVER,[b0]:n.ALWAYS,[g0]:n.LESS,[Lp]:n.LEQUAL,[v0]:n.EQUAL,[y0]:n.GEQUAL,[_0]:n.GREATER,[x0]:n.NOTEQUAL};function qt(T,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Si||y.magFilter===Nc||y.magFilter===Zo||y.magFilter===Us||y.minFilter===Si||y.minFilter===Nc||y.minFilter===Zo||y.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ht[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ht[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ht[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,xt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bn||y.minFilter!==Zo&&y.minFilter!==Us||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function pe(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const q=y.source;let et=d.get(q);et===void 0&&(et={},d.set(q,et));const j=X(y);if(j!==T.__cacheKey){et[j]===void 0&&(et[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[j].usedTimes++;const At=et[T.__cacheKey];At!==void 0&&(et[T.__cacheKey].usedTimes--,At.usedTimes===0&&E(y)),T.__cacheKey=j,T.__webglTexture=et[j].texture}return O}function Y(T,y,O){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const et=pe(T,y),j=y.source;e.bindTexture(q,T.__webglTexture,n.TEXTURE0+O);const At=i.get(j);if(j.version!==At.__version||et===!0){e.activeTexture(n.TEXTURE0+O);const ft=oe.getPrimaries(oe.workingColorSpace),bt=y.colorSpace===os?null:oe.getPrimaries(y.colorSpace),ne=y.colorSpace===os||ft===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let it=v(y.image,!1,s.maxTextureSize);it=Ot(y,it);const St=r.convert(y.format,y.colorSpace),Ft=r.convert(y.type);let Vt=M(y.internalFormat,St,Ft,y.colorSpace,y.isVideoTexture);qt(q,y);let wt;const re=y.mipmaps,Jt=y.isVideoTexture!==!0,Se=At.__version===void 0||et===!0,N=j.dataReady,pt=L(y,it);if(y.isDepthTexture)Vt=x(y.format===Fr,y.type),Se&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Vt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Vt,it.width,it.height,0,St,Ft,null));else if(y.isDataTexture)if(re.length>0){Jt&&Se&&e.texStorage2D(n.TEXTURE_2D,pt,Vt,re[0].width,re[0].height);for(let W=0,Z=re.length;W<Z;W++)wt=re[W],Jt?N&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,wt.width,wt.height,St,Ft,wt.data):e.texImage2D(n.TEXTURE_2D,W,Vt,wt.width,wt.height,0,St,Ft,wt.data);y.generateMipmaps=!1}else Jt?(Se&&e.texStorage2D(n.TEXTURE_2D,pt,Vt,it.width,it.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,St,Ft,it.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,it.width,it.height,0,St,Ft,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Vt,re[0].width,re[0].height,it.depth);for(let W=0,Z=re.length;W<Z;W++)if(wt=re[W],y.format!==pi)if(St!==null)if(Jt){if(N)if(y.layerUpdates.size>0){const vt=tf(wt.width,wt.height,y.format,y.type);for(const mt of y.layerUpdates){const jt=wt.data.subarray(mt*vt/wt.data.BYTES_PER_ELEMENT,(mt+1)*vt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,mt,wt.width,wt.height,1,St,jt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,wt.width,wt.height,it.depth,St,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Vt,wt.width,wt.height,it.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,wt.width,wt.height,it.depth,St,Ft,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Vt,wt.width,wt.height,it.depth,0,St,Ft,wt.data)}else{Jt&&Se&&e.texStorage2D(n.TEXTURE_2D,pt,Vt,re[0].width,re[0].height);for(let W=0,Z=re.length;W<Z;W++)wt=re[W],y.format!==pi?St!==null?Jt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Vt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?N&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,wt.width,wt.height,St,Ft,wt.data):e.texImage2D(n.TEXTURE_2D,W,Vt,wt.width,wt.height,0,St,Ft,wt.data)}else if(y.isDataArrayTexture)if(Jt){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Vt,it.width,it.height,it.depth),N)if(y.layerUpdates.size>0){const W=tf(it.width,it.height,y.format,y.type);for(const Z of y.layerUpdates){const vt=it.data.subarray(Z*W/it.data.BYTES_PER_ELEMENT,(Z+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,St,Ft,vt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,Ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,it.width,it.height,it.depth,0,St,Ft,it.data);else if(y.isData3DTexture)Jt?(Se&&e.texStorage3D(n.TEXTURE_3D,pt,Vt,it.width,it.height,it.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,Ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,it.width,it.height,it.depth,0,St,Ft,it.data);else if(y.isFramebufferTexture){if(Se)if(Jt)e.texStorage2D(n.TEXTURE_2D,pt,Vt,it.width,it.height);else{let W=it.width,Z=it.height;for(let vt=0;vt<pt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Vt,W,Z,0,St,Ft,null),W>>=1,Z>>=1}}else if(re.length>0){if(Jt&&Se){const W=yt(re[0]);e.texStorage2D(n.TEXTURE_2D,pt,Vt,W.width,W.height)}for(let W=0,Z=re.length;W<Z;W++)wt=re[W],Jt?N&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,St,Ft,wt):e.texImage2D(n.TEXTURE_2D,W,Vt,St,Ft,wt);y.generateMipmaps=!1}else if(Jt){if(Se){const W=yt(it);e.texStorage2D(n.TEXTURE_2D,pt,Vt,W.width,W.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ft,it)}else e.texImage2D(n.TEXTURE_2D,0,Vt,St,Ft,it);g(y)&&m(q),At.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function at(T,y,O){if(y.image.length!==6)return;const q=pe(T,y),et=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const j=i.get(et);if(et.version!==j.__version||q===!0){e.activeTexture(n.TEXTURE0+O);const At=oe.getPrimaries(oe.workingColorSpace),ft=y.colorSpace===os?null:oe.getPrimaries(y.colorSpace),bt=y.colorSpace===os||At===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ne=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,St=[];for(let Z=0;Z<6;Z++)!ne&&!it?St[Z]=v(y.image[Z],!0,s.maxCubemapSize):St[Z]=it?y.image[Z].image:y.image[Z],St[Z]=Ot(y,St[Z]);const Ft=St[0],Vt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),re=M(y.internalFormat,Vt,wt,y.colorSpace),Jt=y.isVideoTexture!==!0,Se=j.__version===void 0||q===!0,N=et.dataReady;let pt=L(y,Ft);qt(n.TEXTURE_CUBE_MAP,y);let W;if(ne){Jt&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,re,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){W=St[Z].mipmaps;for(let vt=0;vt<W.length;vt++){const mt=W[vt];y.format!==pi?Vt!==null?Jt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,mt.width,mt.height,Vt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,re,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,mt.width,mt.height,Vt,wt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,re,mt.width,mt.height,0,Vt,wt,mt.data)}}}else{if(W=y.mipmaps,Jt&&Se){W.length>0&&pt++;const Z=yt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,re,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Jt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,St[Z].width,St[Z].height,Vt,wt,St[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,re,St[Z].width,St[Z].height,0,Vt,wt,St[Z].data);for(let vt=0;vt<W.length;vt++){const jt=W[vt].image[Z].image;Jt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,jt.width,jt.height,Vt,wt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,re,jt.width,jt.height,0,Vt,wt,jt.data)}}else{Jt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Vt,wt,St[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,re,Vt,wt,St[Z]);for(let vt=0;vt<W.length;vt++){const mt=W[vt];Jt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,Vt,wt,mt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,re,Vt,wt,mt.image[Z])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),j.__version=et.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Tt(T,y,O,q,et,j){const At=r.convert(O.format,O.colorSpace),ft=r.convert(O.type),bt=M(O.internalFormat,At,ft,O.colorSpace),ne=i.get(y),it=i.get(O);if(it.__renderTarget=y,!ne.__hasExternalTextures){const St=Math.max(1,y.width>>j),Ft=Math.max(1,y.height>>j);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,j,bt,St,Ft,y.depth,0,At,ft,null):e.texImage2D(et,j,bt,St,Ft,0,At,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Mt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,et,it.__webglTexture,0,nt(y)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,et,it.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(T,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const q=y.depthTexture,et=q&&q.isDepthTexture?q.type:null,j=x(y.stencilBuffer,et),At=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=nt(y);Mt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,j,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,T)}else{const q=y.textures;for(let et=0;et<q.length;et++){const j=q[et],At=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),bt=M(j.internalFormat,At,ft,j.colorSpace),ne=nt(y);O&&Mt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,bt,y.width,y.height):Mt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,bt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,bt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const et=q.__webglTexture,j=nt(y);if(y.depthTexture.format===Rr)Mt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(y.depthTexture.format===Fr)Mt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Gt(T){const y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");kt(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),lt(y.__webglDepthbuffer[q],T,!1);else{const et=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),lt(y.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(T,y,O){const q=i.get(T);y!==void 0&&Tt(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Gt(T)}function ae(T){const y=T.texture,O=i.get(T),q=i.get(y);T.addEventListener("dispose",R);const et=T.textures,j=T.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let bt=0;bt<y.mipmaps.length;bt++)O.__webglFramebuffer[ft][bt]=n.createFramebuffer()}else O.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)O.__webglFramebuffer[ft]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(At)for(let ft=0,bt=et.length;ft<bt;ft++){const ne=i.get(et[ft]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const bt=et[ft];O.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);const ne=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),St=M(bt.internalFormat,ne,it,bt.colorSpace,T.isXRRenderTarget===!0),Ft=nt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),qt(n.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)Tt(O.__webglFramebuffer[ft][bt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,bt);else Tt(O.__webglFramebuffer[ft],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(y)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,bt=et.length;ft<bt;ft++){const ne=et[ft],it=i.get(ne);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),qt(n.TEXTURE_2D,ne),Tt(O.__webglFramebuffer,T,ne,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),g(ne)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),qt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)Tt(O.__webglFramebuffer[bt],T,y,n.COLOR_ATTACHMENT0,ft,bt);else Tt(O.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ft,0);g(y)&&m(ft),e.unbindTexture()}T.depthBuffer&&Gt(T)}function Q(T){const y=T.textures;for(let O=0,q=y.length;O<q;O++){const et=y[O];if(g(et)){const j=S(T),At=i.get(et).__webglTexture;e.bindTexture(j,At),m(j),e.unbindTexture()}}}const rt=[],A=[];function It(T){if(T.samples>0){if(Mt(T)===!1){const y=T.textures,O=T.width,q=T.height;let et=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(T),ft=y.length>1;if(ft)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const ne=i.get(y[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,et,n.NEAREST),c===!0&&(rt.length=0,A.length=0,rt.push(n.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(j),A.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const ne=i.get(y[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function nt(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Ot(T,y){const O=T.colorSpace,q=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Xr&&O!==os&&(oe.getTransfer(O)===_e?(q!==pi||et!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Mt}function Bb(n,t){function e(i,s=os){let r;const o=oe.getTransfer(s);if(i===Xi)return n.UNSIGNED_BYTE;if(i===ch)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ep)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sp)return n.BYTE;if(i===wp)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===ah)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Tp)return n.ALPHA;if(i===Ap)return n.RGB;if(i===pi)return n.RGBA;if(i===Cp)return n.LUMINANCE;if(i===Rp)return n.LUMINANCE_ALPHA;if(i===Rr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===uh)return n.RED;if(i===hh)return n.RED_INTEGER;if(i===Pp)return n.RG;if(i===dh)return n.RG_INTEGER;if(i===fh)return n.RGBA_INTEGER;if(i===ka||i===Oa||i===Fa||i===Ba)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===tu||i===eu||i===nu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===iu||i===su||i===ru)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===iu||i===su)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ru)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ou||i===au||i===cu||i===lu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu||i===gu||i===vu||i===_u||i===xu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ou)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===du)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_u)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===yu||i===bu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===Mu||i===Su||i===wu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Su)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class zb extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vb={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xi({vertexShader:Hb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends Ys{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const v=new Wb,g=e.getContextAttributes();let m=null,S=null;const M=[],x=[],L=new st;let C=null;const R=new $n;R.viewport=new Oe;const D=new $n;D.viewport=new Oe;const E=[R,D],b=new zb;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=M[Y];return at===void 0&&(at=new cl,M[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=M[Y];return at===void 0&&(at=new cl,M[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=M[Y];return at===void 0&&(at=new cl,M[Y]=at),at.getHandSpace()};function F(Y){const at=x.indexOf(Y.inputSource);if(at===-1)return;const Tt=M[at];Tt!==void 0&&(Tt.update(Y.inputSource,Y.frame,l||o),Tt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<M.length;Y++){const at=x[Y];at!==null&&(x[Y]=null,M[Y].disconnect(at))}P=null,H=null,v.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,S=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ms(f.framebufferWidth,f.framebufferHeight,{format:pi,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,Tt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Fr:Rr,Tt=g.stencil?Or:Bs);const kt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ms(d.textureWidth,d.textureHeight,{format:pi,type:Xi,depthTexture:new $p(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Y){for(let at=0;at<Y.removed.length;at++){const Tt=Y.removed[at],lt=x.indexOf(Tt);lt>=0&&(x[lt]=null,M[lt].disconnect(Tt))}for(let at=0;at<Y.added.length;at++){const Tt=Y.added[at];let lt=x.indexOf(Tt);if(lt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=x.length){x.push(Tt),lt=Gt;break}else if(x[Gt]===null){x[Gt]=Tt,lt=Gt;break}if(lt===-1)break}const kt=M[lt];kt&&kt.connect(Tt)}}const $=new I,tt=new I;function G(Y,at,Tt){$.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(Tt.matrixWorld);const lt=$.distanceTo(tt),kt=at.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,Bt=kt[14]/(kt[10]-1),ae=kt[14]/(kt[10]+1),Q=(kt[9]+1)/kt[5],rt=(kt[9]-1)/kt[5],A=(kt[8]-1)/kt[0],It=(Gt[8]+1)/Gt[0],nt=Bt*A,Mt=Bt*It,ut=lt/(-A+It),Ot=ut*-A;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),kt[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const yt=Bt+ut,T=ae+ut,y=nt-Ot,O=Mt+(lt-Ot),q=Q*ae/T*yt,et=rt*ae/T*yt;Y.projectionMatrix.makePerspective(y,O,q,et,yt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,Tt=Y.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),b.near=D.near=R.near=at,b.far=D.far=R.far=Tt,(P!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,H=b.far),R.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,b.layers.mask=R.layers.mask|D.layers.mask;const lt=Y.parent,kt=b.cameras;ht(b,lt);for(let Gt=0;Gt<kt.length;Gt++)ht(kt[Gt],lt);kt.length===2?G(b,R,D):b.projectionMatrix.copy(R.projectionMatrix),xt(Y,b,lt)};function xt(Y,at,Tt){Tt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(Tt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Co*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Et=null;function qt(Y,at){if(u=at.getViewerPose(l||o),p=at,u!==null){const Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let lt=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let Gt=0;Gt<Tt.length;Gt++){const Bt=Tt[Gt];let ae=null;if(f!==null)ae=f.getViewport(Bt);else{const rt=h.getViewSubImage(d,Bt);ae=rt.viewport,Gt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(S))}let Q=E[Gt];Q===void 0&&(Q=new $n,Q.layers.enable(Gt),Q.viewport=new Oe,E[Gt]=Q),Q.matrix.fromArray(Bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ae.x,ae.y,ae.width,ae.height),Gt===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(Q)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Gt=h.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const lt=x[Tt],kt=M[Tt];lt!==null&&kt!==void 0&&kt.update(lt,at,l||o)}Et&&Et(Y,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const pe=new Wp;pe.setAnimationLoop(qt),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}}const As=new Ci,Xb=new de;function qb(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Vp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,S,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,x=S.envMapRotation;M&&(g.envMap.value=M,As.copy(x),As.x*=-1,As.y*=-1,As.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(As)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const x=M.program;i.uniformBlockBinding(S,x)}function l(S,M){let x=s[S.id];x===void 0&&(p(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",g));const L=M.program;i.updateUBOMapping(S,L);const C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function u(S){const M=h();S.__bindingPointIndex=M;const x=n.createBuffer(),L=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,R=x.length;C<R;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,b=D.length;E<b;E++){const P=D[E];if(f(P,C,E,L)===!0){const H=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let K=0;K<F.length;K++){const $=F[K],tt=v($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,H+X,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,x,L){const C=S.value,R=M+"_"+x;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const D=L[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function p(S){const M=S.uniforms;let x=0;const L=16;for(let R=0,D=M.length;R<D;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,P=E.length;b<P;b++){const H=E[b],F=Array.isArray(H.value)?H.value:[H.value];for(let X=0,K=F.length;X<K;X++){const $=F[X],tt=v($),G=x%L,ht=G%tt.boundary,xt=G+ht;x+=ht,xt!==0&&L-xt<tt.storage&&(x+=L-xt),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=tt.storage}}}const C=x%L;return C>0&&(x+=L-C),S.__size=x,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){const M=S.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Kp{constructor(t={}){const{canvas:e=F0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=us,this.toneMappingExposure=1;const x=this;let L=!1,C=0,R=0,D=null,E=-1,b=null;const P=new Oe,H=new Oe;let F=null;const X=new Qt(0);let K=0,$=e.width,tt=e.height,G=1,ht=null,xt=null;const Et=new Oe(0,0,$,tt),qt=new Oe(0,0,$,tt);let pe=!1;const Y=new _h;let at=!1,Tt=!1;const lt=new de,kt=new de,Gt=new I,Bt=new Oe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return D===null?G:1}let A=i;function It(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rh}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),A===null){const U="webgl2";if(A=It(U,w),A===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,Mt,ut,Ot,yt,T,y,O,q,et,j,At,ft,bt,ne,it,St,Ft,Vt,wt,re,Jt,Se,N;function pt(){nt=new ty(A),nt.init(),Jt=new Bb(A,nt),Mt=new jx(A,nt,t,Jt),ut=new kb(A,nt),Mt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Ot=new iy(A),yt=new bb,T=new Fb(A,nt,ut,yt,Mt,Jt,Ot),y=new Kx(x),O=new Qx(x),q=new uv(A),Se=new Xx(A,q),et=new ey(A,q,Ot,Se),j=new ry(A,et,q,Ot),Vt=new sy(A,Mt,T),it=new Yx(yt),At=new yb(x,y,O,nt,Mt,Se,it),ft=new qb(x,yt),bt=new Sb,ne=new Rb(nt),Ft=new $x(x,y,O,ut,j,f,c),St=new Nb(x,j,Mt),N=new jb(A,Ot,Mt,ut),wt=new qx(A,nt,Ot),re=new ny(A,nt,Ot),Ot.programs=At.programs,x.capabilities=Mt,x.extensions=nt,x.properties=yt,x.renderLists=bt,x.shadowMap=St,x.state=ut,x.info=Ot}pt();const W=new $b(x,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize($,tt,!1))},this.getSize=function(w){return w.set($,tt)},this.setSize=function(w,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,tt=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set($*G,tt*G).floor()},this.setDrawingBufferSize=function(w,U,B){$=w,tt=U,G=B,e.width=Math.floor(w*B),e.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,U,B,z){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,U,B,z),ut.viewport(P.copy(Et).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,U,B,z){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,U,B,z),ut.scissor(H.copy(qt).multiplyScalar(G).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){ut.setScissorTest(pe=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,U=!0,B=!0){let z=0;if(w){let k=!1;if(D!==null){const ct=D.texture.format;k=ct===fh||ct===dh||ct===hh}if(k){const ct=D.texture.type,gt=ct===Xi||ct===Bs||ct===Ao||ct===Or||ct===ch||ct===lh,Ct=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Wt=Ct.r,Yt=Ct.g,Pt=Ct.b;gt?(p[0]=Wt,p[1]=Yt,p[2]=Pt,p[3]=Rt,A.clearBufferuiv(A.COLOR,0,p)):(v[0]=Wt,v[1]=Yt,v[2]=Pt,v[3]=Rt,A.clearBufferiv(A.COLOR,0,v))}else z|=A.COLOR_BUFFER_BIT}U&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),bt.dispose(),ne.dispose(),yt.dispose(),y.dispose(),O.dispose(),j.dispose(),Se.dispose(),N.dispose(),At.dispose(),W.dispose(),W.removeEventListener("sessionstart",Xh),W.removeEventListener("sessionend",qh),bs.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Ot.autoReset,U=St.enabled,B=St.autoUpdate,z=St.needsUpdate,k=St.type;pt(),Ot.autoReset=w,St.enabled=U,St.autoUpdate=B,St.needsUpdate=z,St.type=k}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const U=w.target;U.removeEventListener("dispose",jt),Ue(U)}function Ue(w){ln(w),yt.remove(w)}function ln(w){const U=yt.get(w).programs;U!==void 0&&(U.forEach(function(B){At.releaseProgram(B)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,z,k,ct){U===null&&(U=ae);const gt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=ig(w,U,B,z,k);ut.setMaterial(z,gt);let Rt=B.index,Wt=1;if(z.wireframe===!0){if(Rt=et.getWireframeAttribute(B),Rt===void 0)return;Wt=2}const Yt=B.drawRange,Pt=B.attributes.position;let le=Yt.start*Wt,we=(Yt.start+Yt.count)*Wt;ct!==null&&(le=Math.max(le,ct.start*Wt),we=Math.min(we,(ct.start+ct.count)*Wt)),Rt!==null?(le=Math.max(le,0),we=Math.min(we,Rt.count)):Pt!=null&&(le=Math.max(le,0),we=Math.min(we,Pt.count));const Ae=we-le;if(Ae<0||Ae===1/0)return;Se.setup(k,z,Ct,B,Rt);let Sn,me=wt;if(Rt!==null&&(Sn=q.get(Rt),me=re,me.setIndex(Sn)),k.isMesh)z.wireframe===!0?(ut.setLineWidth(z.wireframeLinewidth*rt()),me.setMode(A.LINES)):me.setMode(A.TRIANGLES);else if(k.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),ut.setLineWidth(Dt*rt()),k.isLineSegments?me.setMode(A.LINES):k.isLineLoop?me.setMode(A.LINE_LOOP):me.setMode(A.LINE_STRIP)}else k.isPoints?me.setMode(A.POINTS):k.isSprite&&me.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Dt=k._multiDrawStarts,Ni=k._multiDrawCounts,ge=k._multiDrawCount,ni=Rt?q.get(Rt).bytesPerElement:1,ir=yt.get(z).currentProgram.getUniforms();for(let Pn=0;Pn<ge;Pn++)ir.setValue(A,"_gl_DrawID",Pn),me.render(Dt[Pn]/ni,Ni[Pn])}else if(k.isInstancedMesh)me.renderInstances(le,Ae,k.count);else if(B.isInstancedBufferGeometry){const Dt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ni=Math.min(B.instanceCount,Dt);me.renderInstances(le,Ae,Ni)}else me.render(le,Ae)};function ve(w,U,B){w.transparent===!0&&w.side===li&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Jo(w,U,B),w.side=ps,w.needsUpdate=!0,Jo(w,U,B),w.side=li):Jo(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),m=ne.get(B),m.init(U),M.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const z=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ct=k.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const Ct=ct[gt];ve(Ct,B,k),z.add(Ct)}else ve(ct,B,k),z.add(ct)}),M.pop(),m=null,z},this.compileAsync=function(w,U,B=null){const z=this.compile(w,U,B);return new Promise(k=>{function ct(){if(z.forEach(function(gt){yt.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){k(w);return}setTimeout(ct,10)}nt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ei=null;function Li(w){ei&&ei(w)}function Xh(){bs.stop()}function qh(){bs.start()}const bs=new Wp;bs.setAnimationLoop(Li),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(w){ei=w,W.setAnimationLoop(w),w===null?bs.stop():bs.start()},W.addEventListener("sessionstart",Xh),W.addEventListener("sessionend",qh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,D),m=ne.get(w,M.length),m.init(U),M.push(m),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(kt),Tt=this.localClippingEnabled,at=it.init(this.clippingPlanes,Tt),g=bt.get(w,S.length),g.init(),S.push(g),W.enabled===!0&&W.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&Dc(ct,U,-1/0,x.sortObjects)}Dc(w,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,xt),Q=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Q&&Ft.addToRenderList(g,w),this.info.render.frame++,at===!0&&it.beginShadows();const B=m.state.shadowsArray;St.render(B,w,U),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,k=g.transmissive;if(m.setupLights(),U.isArrayCamera){const ct=U.cameras;if(k.length>0)for(let gt=0,Ct=ct.length;gt<Ct;gt++){const Rt=ct[gt];Yh(z,k,w,Rt)}Q&&Ft.render(w);for(let gt=0,Ct=ct.length;gt<Ct;gt++){const Rt=ct[gt];jh(g,w,Rt,Rt.viewport)}}else k.length>0&&Yh(z,k,w,U),Q&&Ft.render(w),jh(g,w,U);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(x,w,U),Se.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],at===!0&&it.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Dc(w,U,B,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){z&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(kt);const gt=j.update(w),Ct=w.material;Ct.visible&&g.push(w,gt,Ct,B,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const gt=j.update(w),Ct=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(kt)),Array.isArray(Ct)){const Rt=gt.groups;for(let Wt=0,Yt=Rt.length;Wt<Yt;Wt++){const Pt=Rt[Wt],le=Ct[Pt.materialIndex];le&&le.visible&&g.push(w,gt,le,B,Bt.z,Pt)}}else Ct.visible&&g.push(w,gt,Ct,B,Bt.z,null)}}const ct=w.children;for(let gt=0,Ct=ct.length;gt<Ct;gt++)Dc(ct[gt],U,B,z)}function jh(w,U,B,z){const k=w.opaque,ct=w.transmissive,gt=w.transparent;m.setupLightsView(B),at===!0&&it.setGlobalState(x.clippingPlanes,B),z&&ut.viewport(P.copy(z)),k.length>0&&Ko(k,U,B),ct.length>0&&Ko(ct,U,B),gt.length>0&&Ko(gt,U,B),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Yh(w,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new ms(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?$r:Xi,minFilter:Us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ct=m.state.transmissionRenderTarget[z.id],gt=z.viewport||P;ct.setSize(gt.z,gt.w);const Ct=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(X),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ft.render(B);const Rt=x.toneMapping;x.toneMapping=us;const Wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),at===!0&&it.setGlobalState(x.clippingPlanes,z),Ko(w,B,z),T.updateMultisampleRenderTarget(ct),T.updateRenderTargetMipmap(ct),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pt=0,le=U.length;Pt<le;Pt++){const we=U[Pt],Ae=we.object,Sn=we.geometry,me=we.material,Dt=we.group;if(me.side===li&&Ae.layers.test(z.layers)){const Ni=me.side;me.side=En,me.needsUpdate=!0,Kh(Ae,B,z,Sn,me,Dt),me.side=Ni,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(T.updateMultisampleRenderTarget(ct),T.updateRenderTargetMipmap(ct))}x.setRenderTarget(Ct),x.setClearColor(X,K),Wt!==void 0&&(z.viewport=Wt),x.toneMapping=Rt}function Ko(w,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ct=w.length;k<ct;k++){const gt=w[k],Ct=gt.object,Rt=gt.geometry,Wt=z===null?gt.material:z,Yt=gt.group;Ct.layers.test(B.layers)&&Kh(Ct,U,B,Rt,Wt,Yt)}}function Kh(w,U,B,z,k,ct){w.onBeforeRender(x,U,B,z,k,ct),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,U,B,z,w,ct),k.transparent===!0&&k.side===li&&k.forceSinglePass===!1?(k.side=En,k.needsUpdate=!0,x.renderBufferDirect(B,U,z,k,w,ct),k.side=ps,k.needsUpdate=!0,x.renderBufferDirect(B,U,z,k,w,ct),k.side=li):x.renderBufferDirect(B,U,z,k,w,ct),w.onAfterRender(x,U,B,z,k,ct)}function Jo(w,U,B){U.isScene!==!0&&(U=ae);const z=yt.get(w),k=m.state.lights,ct=m.state.shadowsArray,gt=k.state.version,Ct=At.getParameters(w,k.state,ct,U,B),Rt=At.getProgramCacheKey(Ct);let Wt=z.programs;z.environment=w.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",jt),Wt=new Map,z.programs=Wt);let Yt=Wt.get(Rt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===gt)return Zh(w,Ct),Yt}else Ct.uniforms=At.getUniforms(w),w.onBeforeCompile(Ct,x),Yt=At.acquireProgram(Ct,Rt),Wt.set(Rt,Yt),z.uniforms=Ct.uniforms;const Pt=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=it.uniform),Zh(w,Ct),z.needsLights=rg(w),z.lightsStateVersion=gt,z.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMap.value=k.state.directionalShadowMap,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotShadowMap.value=k.state.spotShadowMap,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMap.value=k.state.pointShadowMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Yt,z.uniformsList=null,Yt}function Jh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Va.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Zh(w,U){const B=yt.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function ig(w,U,B,z,k){U.isScene!==!0&&(U=ae),T.resetTextureUnits();const ct=U.fog,gt=z.isMeshStandardMaterial?U.environment:null,Ct=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xr,Rt=(z.isMeshStandardMaterial?O:y).get(z.envMap||gt),Wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Yt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!B.morphAttributes.position,le=!!B.morphAttributes.normal,we=!!B.morphAttributes.color;let Ae=us;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const Sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=Sn!==void 0?Sn.length:0,Dt=yt.get(z),Ni=m.state.lights;if(at===!0&&(Tt===!0||w!==b)){const Hn=w===b&&z.id===E;it.setState(z,w,Hn)}let ge=!1;z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ni.state.version||Dt.outputColorSpace!==Ct||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Rt||z.fog===!0&&Dt.fog!==ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==Yt||Dt.morphTargets!==Pt||Dt.morphNormals!==le||Dt.morphColors!==we||Dt.toneMapping!==Ae||Dt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Dt.__version=z.version);let ni=Dt.currentProgram;ge===!0&&(ni=Jo(z,U,k));let ir=!1,Pn=!1,no=!1;const Ce=ni.getUniforms(),bi=Dt.uniforms;if(ut.useProgram(ni.program)&&(ir=!0,Pn=!0,no=!0),z.id!==E&&(E=z.id,Pn=!0),ir||b!==w){ut.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),z0(lt),V0(lt),Ce.setValue(A,"projectionMatrix",lt)):Ce.setValue(A,"projectionMatrix",w.projectionMatrix),Ce.setValue(A,"viewMatrix",w.matrixWorldInverse);const Ji=Ce.map.cameraPosition;Ji!==void 0&&Ji.setValue(A,Gt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&Ce.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ce.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Pn=!0,no=!0)}if(k.isSkinnedMesh){Ce.setOptional(A,k,"bindMatrix"),Ce.setOptional(A,k,"bindMatrixInverse");const Hn=k.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Ce.setValue(A,"boneTexture",Hn.boneTexture,T))}k.isBatchedMesh&&(Ce.setOptional(A,k,"batchingTexture"),Ce.setValue(A,"batchingTexture",k._matricesTexture,T),Ce.setOptional(A,k,"batchingIdTexture"),Ce.setValue(A,"batchingIdTexture",k._indirectTexture,T),Ce.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&Ce.setValue(A,"batchingColorTexture",k._colorsTexture,T));const io=B.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Vt.update(k,B,ni),(Pn||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,Ce.setValue(A,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(bi.envMap.value=Rt,bi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(bi.envMapIntensity.value=U.environmentIntensity),Pn&&(Ce.setValue(A,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&sg(bi,no),ct&&z.fog===!0&&ft.refreshFogUniforms(bi,ct),ft.refreshMaterialUniforms(bi,z,G,tt,m.state.transmissionRenderTarget[w.id]),Va.upload(A,Jh(Dt),bi,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Va.upload(A,Jh(Dt),bi,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ce.setValue(A,"center",k.center),Ce.setValue(A,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(A,"normalMatrix",k.normalMatrix),Ce.setValue(A,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Hn=z.uniformsGroups;for(let Ji=0,Zi=Hn.length;Ji<Zi;Ji++){const Qh=Hn[Ji];N.update(Qh,ni),N.bind(Qh,ni)}}return ni}function sg(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function rg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,U,B){yt.get(w.texture).__webglTexture=U,yt.get(w.depthTexture).__webglTexture=B;const z=yt.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const B=yt.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){D=w,C=U,R=B;let z=!0,k=null,ct=!1,gt=!1;if(w){const Rt=yt.get(w);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(Rt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Rt.__hasExternalTextures)T.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&yt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(gt=!0);const Yt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[U])?k=Yt[U][B]:k=Yt[U],ct=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?k=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[B]:k=Yt,P.copy(w.viewport),H.copy(w.scissor),F=w.scissorTest}else P.copy(Et).multiplyScalar(G).floor(),H.copy(qt).multiplyScalar(G).floor(),F=pe;if(ut.bindFramebuffer(A.FRAMEBUFFER,k)&&z&&ut.drawBuffers(w,k),ut.viewport(P),ut.scissor(H),ut.setScissorTest(F),ct){const Rt=yt.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,B)}else if(gt){const Rt=yt.get(w.texture),Wt=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,B||0,Wt)}E=-1},this.readRenderTargetPixels=function(w,U,B,z,k,ct,gt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){ut.bindFramebuffer(A.FRAMEBUFFER,Ct);try{const Rt=w.texture,Wt=Rt.format,Yt=Rt.type;if(!Mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&B>=0&&B<=w.height-k&&A.readPixels(U,B,z,k,Jt.convert(Wt),Jt.convert(Yt),ct)}finally{const Rt=D!==null?yt.get(D).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,U,B,z,k,ct,gt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){const Rt=w.texture,Wt=Rt.format,Yt=Rt.type;if(!Mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-z&&B>=0&&B<=w.height-k){ut.bindFramebuffer(A.FRAMEBUFFER,Ct);const Pt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.bufferData(A.PIXEL_PACK_BUFFER,ct.byteLength,A.STREAM_READ),A.readPixels(U,B,z,k,Jt.convert(Wt),Jt.convert(Yt),0);const le=D!==null?yt.get(D).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,le);const we=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await B0(A,we,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ct),A.deleteBuffer(Pt),A.deleteSync(we),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,B=0){w.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-B),k=Math.floor(w.image.width*z),ct=Math.floor(w.image.height*z),gt=U!==null?U.x:0,Ct=U!==null?U.y:0;T.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,gt,Ct,k,ct),ut.unbindTexture()},this.copyTextureToTexture=function(w,U,B=null,z=null,k=0){w.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],U=arguments[2],k=arguments[3]||0,B=null);let ct,gt,Ct,Rt,Wt,Yt,Pt,le,we;const Ae=w.isCompressedTexture?w.mipmaps[k]:w.image;B!==null?(ct=B.max.x-B.min.x,gt=B.max.y-B.min.y,Ct=B.isBox3?B.max.z-B.min.z:1,Rt=B.min.x,Wt=B.min.y,Yt=B.isBox3?B.min.z:0):(ct=Ae.width,gt=Ae.height,Ct=Ae.depth||1,Rt=0,Wt=0,Yt=0),z!==null?(Pt=z.x,le=z.y,we=z.z):(Pt=0,le=0,we=0);const Sn=Jt.convert(U.format),me=Jt.convert(U.type);let Dt;U.isData3DTexture?(T.setTexture3D(U,0),Dt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Dt=A.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Dt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Ni=A.getParameter(A.UNPACK_ROW_LENGTH),ge=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ni=A.getParameter(A.UNPACK_SKIP_PIXELS),ir=A.getParameter(A.UNPACK_SKIP_ROWS),Pn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ae.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ae.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Rt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Yt);const no=w.isDataArrayTexture||w.isData3DTexture,Ce=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const bi=yt.get(w),io=yt.get(U),Hn=yt.get(bi.__renderTarget),Ji=yt.get(io.__renderTarget);ut.bindFramebuffer(A.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ut.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Zi=0;Zi<Ct;Zi++)no&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,k,Yt+Zi),w.isDepthTexture?(Ce&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,k,we+Zi),A.blitFramebuffer(Rt,Wt,ct,gt,Pt,le,ct,gt,A.DEPTH_BUFFER_BIT,A.NEAREST)):Ce?A.copyTexSubImage3D(Dt,k,Pt,le,we+Zi,Rt,Wt,ct,gt):A.copyTexSubImage2D(Dt,k,Pt,le,we+Zi,Rt,Wt,ct,gt);ut.bindFramebuffer(A.READ_FRAMEBUFFER,null),ut.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Dt,k,Pt,le,we,ct,gt,Ct,Sn,me,Ae.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,k,Pt,le,we,ct,gt,Ct,Sn,Ae.data):A.texSubImage3D(Dt,k,Pt,le,we,ct,gt,Ct,Sn,me,Ae):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,k,Pt,le,ct,gt,Sn,me,Ae.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,k,Pt,le,Ae.width,Ae.height,Sn,Ae.data):A.texSubImage2D(A.TEXTURE_2D,k,Pt,le,ct,gt,Sn,me,Ae);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ni),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ge),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ni),A.pixelStorei(A.UNPACK_SKIP_ROWS,ir),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pn),k===0&&U.generateMipmaps&&A.generateMipmap(Dt),ut.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B=null,z=null,k=0){return w.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],U=arguments[3],k=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,B,z,k)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,ut.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class yh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=i}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jp extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tu,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new I;class Za{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new zn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Za(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gc extends jr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _r;const co=new I,xr=new I,yr=new I,br=new st,lo=new st,Zp=new de,xa=new I,uo=new I,ya=new I,ef=new st,ll=new st,nf=new st;class Qa extends $e{constructor(t=new gc){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new cn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yb(e,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Za(i,3,0,!1)),_r.setAttribute("uv",new Za(i,2,3,!1))}this.geometry=_r,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),Zp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ba(xa.set(-.5,-.5,0),yr,o,xr,s,r),ba(uo.set(.5,-.5,0),yr,o,xr,s,r),ba(ya.set(.5,.5,0),yr,o,xr,s,r),ef.set(0,0),ll.set(1,0),nf.set(1,1);let a=t.ray.intersectTriangle(xa,uo,ya,!1,co);if(a===null&&(ba(uo.set(-.5,.5,0),yr,o,xr,s,r),ll.set(0,1),a=t.ray.intersectTriangle(xa,ya,uo,!1,co),a===null))return;const c=t.ray.origin.distanceTo(co);c<t.near||c>t.far||e.push({distance:c,point:co.clone(),uv:Xn.getInterpolation(co,xa,uo,ya,ef,ll,nf,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ba(n,t,e,i,s,r){br.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(lo.x=r*br.x-s*br.y,lo.y=s*br.x+r*br.y):lo.copy(br),n.copy(t),n.x+=lo.x,n.y+=lo.y,n.applyMatrix4(Zp)}class Kb extends rn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Bn,u=Bn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sf extends zn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mr=new de,rf=new de,Ma=[],of=new ti,Jb=new de,ho=new Nt,fo=new qr;class Cu extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),of.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(of)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),fo.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(fo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(i),t.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),rf.multiplyMatrices(i,Mr),ho.matrixWorld=rf,ho.raycast(t,Ma);for(let o=0,a=Ma.length;o<a;o++){const c=Ma[o];c.instanceId=r,c.object=this,e.push(c)}Ma.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kb(new Float32Array(s*this.count),s,this.count,uh,wi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ks extends rn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new st:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,s=[],r=[],o=[],a=new I,c=new de;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(en(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(en(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bh extends Pi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zb extends bh{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Sa=new I,ul=new Mh,hl=new Mh,dl=new Mh;class Qb extends Pi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),l=Sa);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),ul.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,v,g),hl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,v,g),dl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),hl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),dl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(ul.calc(c),hl.calc(c),dl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function af(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function tM(n,t){const e=1-n;return e*e*t}function eM(n,t){return 2*(1-n)*n*t}function nM(n,t){return n*n*t}function bo(n,t,e,i){return tM(n,t)+eM(n,e)+nM(n,i)}function iM(n,t){const e=1-n;return e*e*e*t}function sM(n,t){const e=1-n;return 3*e*e*n*t}function rM(n,t){return 3*(1-n)*n*n*t}function oM(n,t){return n*n*n*t}function Mo(n,t,e,i,s){return iM(n,t)+sM(n,e)+rM(n,i)+oM(n,s)}class Qp extends Pi{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class aM extends Pi{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y),Mo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tm extends Pi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cM extends Pi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends Pi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lM extends Pi{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y),bo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nm extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(af(a,c.x,l.x,u.x,h.x),af(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Ru=Object.freeze({__proto__:null,ArcCurve:Zb,CatmullRomCurve3:Qb,CubicBezierCurve:Qp,CubicBezierCurve3:aM,EllipseCurve:bh,LineCurve:tm,LineCurve3:cM,QuadraticBezierCurve:em,QuadraticBezierCurve3:lM,SplineCurve:nm});class uM extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ru[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ru[s.type]().fromJSON(s))}return this}}class Pu extends uM{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new tm(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new em(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Qp(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new bh(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ys extends cn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const v=[],g=i/2;let m=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function S(){const x=new I,L=new I;let C=0;const R=(e-t)/i;for(let D=0;D<=r;D++){const E=[],b=D/r,P=b*(e-t)+t;for(let H=0;H<=s;H++){const F=H/s,X=F*c+a,K=Math.sin(X),$=Math.cos(X);L.x=P*K,L.y=-b*i+g,L.z=P*$,h.push(L.x,L.y,L.z),x.set(K,R,$).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-b),E.push(p++)}v.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const b=v[E][D],P=v[E+1][D],H=v[E+1][D+1],F=v[E][D+1];(t>0||E!==0)&&(u.push(b,P,F),C+=3),(e>0||E!==r-1)&&(u.push(P,H,F),C+=3)}l.addGroup(m,C,0),m+=C}function M(x){const L=p,C=new st,R=new I;let D=0;const E=x===!0?t:e,b=x===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;const P=p;for(let H=0;H<=s;H++){const X=H/s*c+a,K=Math.cos(X),$=Math.sin(X);R.x=E*$,R.y=g*b,R.z=E*K,h.push(R.x,R.y,R.z),d.push(0,b,0),C.x=K*.5+.5,C.y=$*.5*b+.5,f.push(C.x,C.y),p++}for(let H=0;H<s;H++){const F=L+H,X=P+H;x===!0?u.push(X,X+1,F):u.push(X+1,X,F),D+=3}l.addGroup(m,D,x===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vc extends ys{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sh extends cn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new I,x=new I,L=new I;for(let C=0;C<e.length;C+=3)f(e[C+0],M),f(e[C+1],x),f(e[C+2],L),c(M,x,L,S)}function c(S,M,x,L){const C=L+1,R=[];for(let D=0;D<=C;D++){R[D]=[];const E=S.clone().lerp(x,D/C),b=M.clone().lerp(x,D/C),P=C-D;for(let H=0;H<=P;H++)H===0&&D===C?R[D][H]=E:R[D][H]=E.clone().lerp(b,H/P)}for(let D=0;D<C;D++)for(let E=0;E<2*(C-D)-1;E++){const b=Math.floor(E/2);E%2===0?(d(R[D][b+1]),d(R[D+1][b]),d(R[D][b])):(d(R[D][b+1]),d(R[D+1][b+1]),d(R[D+1][b]))}}function l(S){const M=new I;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(S),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const S=new I;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const x=g(S)/2/Math.PI+.5,L=m(S)/Math.PI+.5;o.push(x,1-L)}p(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],x=o[S+2],L=o[S+4],C=Math.max(M,x,L),R=Math.min(M,x,L);C>.9&&R<.1&&(M<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){const x=S*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const S=new I,M=new I,x=new I,L=new I,C=new st,R=new st,D=new st;for(let E=0,b=0;E<r.length;E+=9,b+=6){S.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),C.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),L.copy(S).add(M).add(x).divideScalar(3);const P=g(L);v(C,b+0,S,P),v(R,b+2,M,P),v(D,b+4,x,P)}}function v(S,M,x,L){L<0&&S.x===1&&(o[M]=S.x-1),x.x===0&&x.z===0&&(o[M]=L/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.vertices,t.indices,t.radius,t.details)}}class _c extends Pu{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Pu().fromJSON(s))}return this}}const hM={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=im(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(i&&(r=gM(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let p=e;p<s;p+=e)h=n[p],d=n[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Po(r,o,e,a,c,f,0),o}};function im(n,t,e,i,s){let r,o;if(s===AM(n,t,e,i)>0)for(r=t;r<e;r+=i)o=cf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=cf(r,n[r],n[r+1],o);return o&&xc(o,o.next)&&(Do(o),o=o.next),o}function Vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(xc(e,e.next)||De(e.prev,e,e.next)===0)){if(Do(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Po(n,t,e,i,s,r,o){if(!n)return;!o&&r&&bM(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?fM(n,i,s,r):dM(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Do(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=pM(Vs(n),t,e),Po(n,t,e,i,s,r,2)):o===2&&mM(n,t,e,i,s,r):Po(Vs(n),t,e,i,s,r,1);break}}}function dM(n){const t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ar(s,a,r,c,o,l,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fM(n,t,e,i){const s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,m=Iu(f,p,t,e,i),S=Iu(v,g,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=m&&x&&x.z<=S;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Ar(a,u,c,h,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ar(a,u,c,h,l,d,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Ar(a,u,c,h,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ar(a,u,c,h,l,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function pM(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!xc(s,r)&&sm(s,i,i.next,r)&&Io(s,r)&&Io(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Do(i),Do(i.next),i=n=r),i=i.next}while(i!==n);return Vs(i)}function mM(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wM(o,a)){let c=rm(o,a);o=Vs(o,o.next),c=Vs(c,c.next),Po(o,t,e,i,s,r,0),Po(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function gM(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=im(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(SM(l));for(s.sort(vM),r=0;r<s.length;r++)e=_M(s[r],e);return e}function vM(n,t){return n.x-t.x}function _M(n,t){const e=xM(n,t);if(!e)return t;const i=rm(e,n);return Vs(i,i.next),Vs(e,e.next)}function xM(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ar(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Io(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&yM(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function yM(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function bM(n,t,e,i){let s=n;do s.z===0&&(s.z=Iu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,MM(s)}function MM(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Iu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function SM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ar(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function wM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!EM(n,t)&&(Io(n,t)&&Io(t,n)&&TM(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||xc(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function xc(n,t){return n.x===t.x&&n.y===t.y}function sm(n,t,e,i){const s=Ea(De(n,t,e)),r=Ea(De(n,t,i)),o=Ea(De(e,i,n)),a=Ea(De(e,i,t));return!!(s!==r&&o!==a||s===0&&wa(n,e,t)||r===0&&wa(n,i,t)||o===0&&wa(e,n,i)||a===0&&wa(e,t,i))}function wa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ea(n){return n>0?1:n<0?-1:0}function EM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Io(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function TM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rm(n,t){const e=new Du(n.i,n.x,n.y),i=new Du(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function cf(n,t,e,i){const s=new Du(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Do(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Du(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function AM(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class hs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return hs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];lf(t),uf(i,t);let o=t.length;e.forEach(lf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,uf(i,e[c]);const a=hM.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function lf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function uf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class yc extends cn{constructor(t=new _c([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:CM;let M,x=!1,L,C,R,D;m&&(M=m.getSpacedPoints(u),x=!0,d=!1,L=m.computeFrenetFrames(u,!1),C=new I,R=new I,D=new I),d||(g=0,f=0,p=0,v=0);const E=a.extractPoints(l);let b=E.shape;const P=E.holes;if(!hs.isClockWise(b)){b=b.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){const A=P[Q];hs.isClockWise(A)&&(P[Q]=A.reverse())}}const F=hs.triangulateShape(b,P),X=b;for(let Q=0,rt=P.length;Q<rt;Q++){const A=P[Q];b=b.concat(A)}function K(Q,rt,A){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,A)}const $=b.length,tt=F.length;function G(Q,rt,A){let It,nt,Mt;const ut=Q.x-rt.x,Ot=Q.y-rt.y,yt=A.x-Q.x,T=A.y-Q.y,y=ut*ut+Ot*Ot,O=ut*T-Ot*yt;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(y),et=Math.sqrt(yt*yt+T*T),j=rt.x-Ot/q,At=rt.y+ut/q,ft=A.x-T/et,bt=A.y+yt/et,ne=((ft-j)*T-(bt-At)*yt)/(ut*T-Ot*yt);It=j+ut*ne-Q.x,nt=At+Ot*ne-Q.y;const it=It*It+nt*nt;if(it<=2)return new st(It,nt);Mt=Math.sqrt(it/2)}else{let q=!1;ut>Number.EPSILON?yt>Number.EPSILON&&(q=!0):ut<-Number.EPSILON?yt<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(T)&&(q=!0),q?(It=-Ot,nt=ut,Mt=Math.sqrt(y)):(It=ut,nt=Ot,Mt=Math.sqrt(y/2))}return new st(It/Mt,nt/Mt)}const ht=[];for(let Q=0,rt=X.length,A=rt-1,It=Q+1;Q<rt;Q++,A++,It++)A===rt&&(A=0),It===rt&&(It=0),ht[Q]=G(X[Q],X[A],X[It]);const xt=[];let Et,qt=ht.concat();for(let Q=0,rt=P.length;Q<rt;Q++){const A=P[Q];Et=[];for(let It=0,nt=A.length,Mt=nt-1,ut=It+1;It<nt;It++,Mt++,ut++)Mt===nt&&(Mt=0),ut===nt&&(ut=0),Et[It]=G(A[It],A[Mt],A[ut]);xt.push(Et),qt=qt.concat(Et)}for(let Q=0;Q<g;Q++){const rt=Q/g,A=f*Math.cos(rt*Math.PI/2),It=p*Math.sin(rt*Math.PI/2)+v;for(let nt=0,Mt=X.length;nt<Mt;nt++){const ut=K(X[nt],ht[nt],It);lt(ut.x,ut.y,-A)}for(let nt=0,Mt=P.length;nt<Mt;nt++){const ut=P[nt];Et=xt[nt];for(let Ot=0,yt=ut.length;Ot<yt;Ot++){const T=K(ut[Ot],Et[Ot],It);lt(T.x,T.y,-A)}}}const pe=p+v;for(let Q=0;Q<$;Q++){const rt=d?K(b[Q],qt[Q],pe):b[Q];x?(R.copy(L.normals[0]).multiplyScalar(rt.x),C.copy(L.binormals[0]).multiplyScalar(rt.y),D.copy(M[0]).add(R).add(C),lt(D.x,D.y,D.z)):lt(rt.x,rt.y,0)}for(let Q=1;Q<=u;Q++)for(let rt=0;rt<$;rt++){const A=d?K(b[rt],qt[rt],pe):b[rt];x?(R.copy(L.normals[Q]).multiplyScalar(A.x),C.copy(L.binormals[Q]).multiplyScalar(A.y),D.copy(M[Q]).add(R).add(C),lt(D.x,D.y,D.z)):lt(A.x,A.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){const rt=Q/g,A=f*Math.cos(rt*Math.PI/2),It=p*Math.sin(rt*Math.PI/2)+v;for(let nt=0,Mt=X.length;nt<Mt;nt++){const ut=K(X[nt],ht[nt],It);lt(ut.x,ut.y,h+A)}for(let nt=0,Mt=P.length;nt<Mt;nt++){const ut=P[nt];Et=xt[nt];for(let Ot=0,yt=ut.length;Ot<yt;Ot++){const T=K(ut[Ot],Et[Ot],It);x?lt(T.x,T.y+M[u-1].y,M[u-1].x+A):lt(T.x,T.y,h+A)}}}Y(),at();function Y(){const Q=s.length/3;if(d){let rt=0,A=$*rt;for(let It=0;It<tt;It++){const nt=F[It];kt(nt[2]+A,nt[1]+A,nt[0]+A)}rt=u+g*2,A=$*rt;for(let It=0;It<tt;It++){const nt=F[It];kt(nt[0]+A,nt[1]+A,nt[2]+A)}}else{for(let rt=0;rt<tt;rt++){const A=F[rt];kt(A[2],A[1],A[0])}for(let rt=0;rt<tt;rt++){const A=F[rt];kt(A[0]+$*u,A[1]+$*u,A[2]+$*u)}}i.addGroup(Q,s.length/3-Q,0)}function at(){const Q=s.length/3;let rt=0;Tt(X,rt),rt+=X.length;for(let A=0,It=P.length;A<It;A++){const nt=P[A];Tt(nt,rt),rt+=nt.length}i.addGroup(Q,s.length/3-Q,1)}function Tt(Q,rt){let A=Q.length;for(;--A>=0;){const It=A;let nt=A-1;nt<0&&(nt=Q.length-1);for(let Mt=0,ut=u+g*2;Mt<ut;Mt++){const Ot=$*Mt,yt=$*(Mt+1),T=rt+It+Ot,y=rt+nt+Ot,O=rt+nt+yt,q=rt+It+yt;Gt(T,y,O,q)}}}function lt(Q,rt,A){c.push(Q),c.push(rt),c.push(A)}function kt(Q,rt,A){Bt(Q),Bt(rt),Bt(A);const It=s.length/3,nt=S.generateTopUV(i,s,It-3,It-2,It-1);ae(nt[0]),ae(nt[1]),ae(nt[2])}function Gt(Q,rt,A,It){Bt(Q),Bt(rt),Bt(It),Bt(rt),Bt(A),Bt(It);const nt=s.length/3,Mt=S.generateSideWallUV(i,s,nt-6,nt-3,nt-2,nt-1);ae(Mt[0]),ae(Mt[1]),ae(Mt[3]),ae(Mt[1]),ae(Mt[2]),ae(Mt[3])}function Bt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function ae(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return RM(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ru[s.type]().fromJSON(s)),new yc(i,t.options)}}const CM={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new st(r,o),new st(a,c),new st(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new st(o,1-c),new st(l,1-h),new st(d,1-p),new st(v,1-m)]:[new st(a,1-c),new st(u,1-h),new st(f,1-p),new st(g,1-m)]}};function RM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bc extends Sh{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bc(t.radius,t.detail)}}class wh extends cn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new I,p=new st;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){const g=v*(i+1);for(let m=0;m<i;m++){const S=m+g,M=S,x=S+i+1,L=S+i+2,C=S+1;a.push(M,x,C),a.push(x,L,C)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Go extends cn{constructor(t=new _c([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const p=d.holes;hs.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];hs.isClockWise(S)===!0&&(p[g]=S.reverse())}const v=hs.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=v.length;g<m;g++){const S=v[g],M=S[0]+h,x=S[1]+h,L=S[2]+h;i.push(M,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return PM(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Go(i,t.curveSegments)}}function PM(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Vn extends cn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const S=[],M=m/i;let x=0;m===0&&o===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(C+x,1-M),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){const M=u[m][S+1],x=u[m][S],L=u[m+1][S],C=u[m+1][S+1];(m!==0||o>0)&&f.push(M,x,C),(m!==i-1||c<Math.PI)&&f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class IM extends xi{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Pe extends jr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Ta(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function DM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function LM(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function hf(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=n[a+c]}return s}function om(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(t.push(r.time),e.push(o)),r=n[s++];while(r!==void 0)}class Mc{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){const a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class NM extends Mc{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wr,endingEnd:wr}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Er:r=t,a=2*e-i;break;case Ka:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Er:o=t,c=2*i-e;break;case Ka:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}const l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,S=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let L=0;L!==a;++L)r[L]=m*o[u+L]+S*o[l+L]+M*o[c+L]+x*o[h+L];return r}}class am extends Mc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class UM extends Mc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ii{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ta(e,this.TimeBufferType),this.values=Ta(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ta(t.times,Array),values:Ta(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new UM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new am(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new NM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ya:e=this.InterpolantFactoryMethodDiscrete;break;case Eu:e=this.InterpolantFactoryMethodLinear;break;case Uc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return Eu;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&DM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const v=e[h+p];if(v!==e[d+p]||v!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Eu;class Kr extends Ii{constructor(t,e,i){super(t,e,i)}}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Ya;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class cm extends Ii{}cm.prototype.ValueTypeName="color";class tc extends Ii{}tc.prototype.ValueTypeName="number";class kM extends Mc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Ei.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Sc extends Ii{InterpolantFactoryMethodLinear(t){return new kM(this.times,this.values,this.getValueSize(),t)}}Sc.prototype.ValueTypeName="quaternion";Sc.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends Ii{constructor(t,e,i){super(t,e,i)}}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Ya;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ec extends Ii{}ec.prototype.ValueTypeName="vector";class df{constructor(t="",e=-1,i=[],s=ph){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(FM(i[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=i.length;r!==o;++r)e.push(Ii.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=LM(c);c=hf(c,1,u),l=hf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new tc(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,i));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,v){if(f.length!==0){const g=[],m=[];om(f,g,m,p),g.length!==0&&v.push(new h(d,g,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let S=0;S!==d[p].morphTargets.length;++S){const M=d[p];g.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new tc(".morphTargetInfluence["+v+"]",g,m))}c=f.length*o}else{const f=".bones["+e[h].name+"]";i(ec,f+".position",d,"pos",s),i(Sc,f+".quaternion",d,"rot",s),i(ec,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tc;case"vector":case"vector2":case"vector3":case"vector4":return ec;case"color":return cm;case"quaternion":return Sc;case"bool":case"boolean":return Kr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function FM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=OM(n.type);if(n.times===void 0){const e=[],i=[];om(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const ff={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BM{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const zM=new BM;class Eh{constructor(t){this.manager=t!==void 0?t:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Eh.DEFAULT_MATERIAL_NAME="__DEFAULT";class VM extends Eh{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ff.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ro("img");function c(){u(),ff.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Th extends Eh{constructor(t){super(t)}load(t,e,i,s){const r=new rn,o=new VM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class lm extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class um extends lm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fl=new de,pf=new I,mf=new I;class HM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class GM extends HM{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends lm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new GM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class WM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gf(){return performance.now()}class $M{constructor(t,e,i){this.binding=t,this.valueSize=i;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(i,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){a.setValue(i,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,s=i*this._origIndex;t.getValue(e,s);for(let r=i,o=s;r!==o;++r)e[r]=e[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[i+o]}_slerp(t,e,i,s){Ei.slerpFlat(t,e,t,e,t,i,s)}_slerpAdditive(t,e,i,s,r){const o=this._workIndex*r;Ei.multiplyQuaternionsFlat(t,o,t,e,t,i),Ei.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[i+a]*s}}_lerpAdditive(t,e,i,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[i+o]*s}}}const Ah="\\[\\]\\.:\\/",XM=new RegExp("["+Ah+"]","g"),Ch="[^"+Ah+"]",qM="[^"+Ah.replace("\\.","")+"]",jM=/((?:WC+[\/:])*)/.source.replace("WC",Ch),YM=/(WCOD+)?/.source.replace("WCOD",qM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),JM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),ZM=new RegExp("^"+jM+YM+KM+JM+"$"),QM=["material","materials","bones","map"];class t1{constructor(t,e,i){const s=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ye{constructor(t,e,i){this.path=e,this.parsedPath=i||ye.parseTrackName(e),this.node=ye.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ye.Composite(t,e,i):new ye(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(t){const e=ZM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);QM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ye.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ye.Composite=t1;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class e1{constructor(t,e,i=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:wr,endingEnd:wr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=l0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case h0:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ph:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let s=this.time+t,r=this._loopCount;const o=i===u0;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(i===c0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,i){const s=this._interpolantSettings;i?(s.endingStart=Er,s.endingEnd=Er):(t?s.endingStart=this.zeroSlopeAtStart?Er:wr:s.endingStart=Ka,e?s.endingEnd=this.zeroSlopeAtEnd?Er:wr:s.endingEnd=Ka)}_scheduleFading(t,e,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=i,this}}const n1=new Float32Array(1);class i1 extends Ys{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const v=e&&e._propertyBindings[h].binding.parsedPath;p=new $M(ye.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,i)}const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],s=t._cacheIndex;i._cacheIndex=s,e[s]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new am(new Float32Array(2),new Float32Array(2),1,n1),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?df.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=ph),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new e1(this,o,e,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const i=e||this._root,s=i.uuid,r=typeof t=="string"?df.findByName(i,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const vf=new de;class s1{constructor(t,e,i=0,s=1/0){this.ray=new Op(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(t,e=!0,i=[]){return Lu(t,this,i,e),i.sort(_f),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Lu(t[s],this,i,e);return i.sort(_f),i}}function _f(n,t){return n.distance-t.distance}function Lu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Lu(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function r1(n){const t=new Map,e=new Map,i=n.clone();return dm(n,i,function(s,r){t.set(r,s),e.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function dm(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)dm(n.children[i],t.children[i],e)}const on=(n,t,e=1,i=1)=>new I(n+e/2-te/2,0,t+i/2-te/2),fm=n=>[Math.floor(n.x+te/2),Math.floor(n.z+te/2)],V={renderer:null,scene:null,camera:null,target:new I(0,0,2),zoom:1.7,waterTex:null,pickables:[],mode:"farm",farm:null,advPick:[],sun:null,bounds:{x0:-te/2-1,x1:te/2+1,z0:-te/2-1,z1:te/2+5}},Yn=Math.PI/4,Ti=zs.degToRad(30),pl=60,o1=15;function a1(n){const t=new Kp({canvas:n,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.outputColorSpace=Ie,t.shadowMap.enabled=!0,t.shadowMap.type=mp,t.toneMapping=oh,t.toneMappingExposure=1,V.renderer=t;const e=new Jp;e.background=new Qt(6279392),e.fog=new yh(6279392,70,140),V.scene=e;const i=new pc(-1,1,1,-1,.1,300);V.camera=i,e.add(new um(16777215,11065464,2.3));const s=new hm(16774364,1.7);s.position.set(-14,26,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=s.shadow.camera;r.left=-20,r.right=20,r.top=20,r.bottom=-20,r.near=1,r.far=80,s.shadow.bias=-5e-4,s.shadow.normalBias=.02,s.shadow.intensity=.42,s.shadow.radius=3,e.add(s,s.target),V.sun=s,V.farm=new Ut,e.add(V.farm),c1(e),xf(),window.addEventListener("resize",xf)}function Lo(n,t){const e=new _c,i=n/2;return e.moveTo(-i+t,-i),e.lineTo(i-t,-i),e.quadraticCurveTo(i,-i,i,-i+t),e.lineTo(i,i-t),e.quadraticCurveTo(i,i,i-t,i),e.lineTo(-i+t,i),e.quadraticCurveTo(-i,i,-i,i-t),e.lineTo(-i,-i+t),e.quadraticCurveTo(-i,-i,-i+t,-i),e}function No(n,t,e,i,s){const r=new yc(Lo(n,t),{depth:e,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2);const o=new Nt(r,i);return o.position.y=s-e-.08,o.receiveShadow=!0,o}function ml(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Ks(i);return s.colorSpace=Ie,s.wrapS=s.wrapT=To,s.anisotropy=4,s}function c1(n){V.waterTex=ml(256,256,(a,c,l)=>{a.fillStyle="#34cfe0",a.fillRect(0,0,c,l),a.strokeStyle="rgba(255,255,255,.35)",a.lineWidth=4,a.lineCap="round";for(let u=0;u<9;u++){const h=u*97%c,d=u*61%l;a.beginPath(),a.moveTo(h,d),a.quadraticCurveTo(h+14,d-8,h+28,d),a.quadraticCurveTo(h+42,d+8,h+56,d),a.stroke()}}),V.waterTex.repeat.set(30,30);const t=new Nt(new ji(400,400),new Pe({map:V.waterTex,roughness:.35,metalness:.05}));t.rotation.x=-Math.PI/2,t.position.y=-.55,t.receiveShadow=!0,n.add(t);const e=new Nt(new Go(Lo(te+9,6),12),new Pe({color:9168620,transparent:!0,opacity:.55,roughness:.3}));e.rotation.x=-Math.PI/2,e.position.y=-.5,V.farm.add(e);const i=ml(128,128,(a,c,l)=>{a.fillStyle="#f4dca0",a.fillRect(0,0,c,l);for(let u=0;u<160;u++)a.fillStyle=`rgba(${180+Math.random()*40},${140+Math.random()*30},80,.25)`,a.fillRect(Math.random()*c,Math.random()*l,2,2)});i.repeat.set(.25,.25),V.sandMat=new Pe({map:i,roughness:.95}),V.farm.add(No(te+4.4,3,.8,V.sandMat,-.12));const s=ml(256,256,(a,c,l)=>{a.fillStyle="#86d94a",a.fillRect(0,0,c,l),a.fillStyle="#93e256",a.fillRect(0,0,c/2,l/2),a.fillRect(c/2,l/2,c/2,l/2);for(let u=0;u<900;u++){const h=Math.random()*c,d=Math.random()*l,f=3+Math.random()*5;a.strokeStyle=Math.random()<.5?"rgba(45,110,20,.35)":"rgba(170,230,110,.4)",a.lineWidth=1.4,a.beginPath(),a.moveTo(h,d),a.lineTo(h+(Math.random()-.5)*3,d-f),a.stroke()}for(let u=0;u<26;u++)a.fillStyle=["#fff7d6","#ffe066","#ffd0e8"][u%3],a.beginPath(),a.arc(Math.random()*c,Math.random()*l,1.8,0,7),a.fill()});s.repeat.set(.5,.5);const r=new Image;r.onload=()=>{const a=s.image;a.width=a.height=1024;const c=a.getContext("2d");c.drawImage(r,0,0,1024,1024),c.fillStyle="rgba(255,255,230,.10)",c.fillRect(0,0,1024,1024),c.fillStyle="rgba(255,255,255,.07)";for(let l=0;l<4;l++)for(let u=0;u<4;u++)(l+u)%2===0&&c.fillRect(l*256,u*256,256,256);s.repeat.set(.25,.25),s.dispose(),s.needsUpdate=!0},r.src="/maisies-farm/textures/grass.webp";const o=No(te+.4,1.6,.5,new Pe({map:s,roughness:1}),0);o.name="ground",V.farm.add(o),V.ground=o}function xf(){const n=window.innerWidth,t=window.innerHeight;V.renderer.setSize(n,t,!1),Js()}function Js(){const n=V.camera,t=window.innerWidth,e=window.innerHeight,i=Math.min(t,e),s=o1/2/V.zoom;n.left=-s*t/i,n.right=s*t/i,n.top=s*e/i,n.bottom=-s*e/i;const r=V.bounds;V.target.x=zs.clamp(V.target.x,r.x0,r.x1),V.target.z=zs.clamp(V.target.z,r.z0,r.z1),n.position.set(V.target.x+pl*Math.cos(Ti)*Math.sin(Yn),V.target.y+pl*Math.sin(Ti),V.target.z+pl*Math.cos(Ti)*Math.cos(Yn)),n.lookAt(V.target),V.sun&&(V.sun.position.set(V.target.x-14,26,V.target.z+10),V.sun.target.position.copy(V.target)),n.updateProjectionMatrix()}function yf(n){V.zoom=zs.clamp(n,.55,2.6),Js()}function gl(n,t){Uu++;const e=V.camera,i=window.innerHeight,s=(e.top-e.bottom)/i,r=new I(Math.cos(Yn),0,-Math.sin(Yn)),o=new I(-Math.sin(Yn),0,-Math.cos(Yn));V.target.addScaledVector(r,-n*s),V.target.addScaledVector(o,t*s/Math.sin(Ti)),Js()}const Rh=new s1,bf=new st,l1=new rs(new I(0,1,0),0);function pm(n,t){bf.set(n/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Rh.setFromCamera(bf,V.camera)}function Nu(n,t){pm(n,t);const e=new I;return Rh.ray.intersectPlane(l1,e)?e:null}function Hs(n,t,e){pm(n,t);const i=Rh.intersectObjects(V.mode==="farm"?V.pickables:V.advPick,!0);let s=null;for(const r of i){let o=r.object,a=!o.visible;for(;o&&o.userData.oid===void 0;)o=o.parent,a||(a=o?!o.visible:!1);if(!(!o||a||!o.visible)){if(!e||e(o.userData.oid))return o.userData.oid;s===null&&(s=o.userData.oid)}}return s}const Aa=new I;function Gs(n){return Aa.copy(n).project(V.camera),[(Aa.x+1)/2*window.innerWidth,(1-Aa.y)/2*window.innerHeight,Aa.z<1]}function Zs(n){V.target.set(n.x,0,n.z),Js()}let Uu=0;function Ph(n,t=700){const e=V.target.clone(),i=new I(n.x,0,n.z),s=performance.now(),r=++Uu,o=()=>{if(r!==Uu)return;const a=Math.min(1,(performance.now()-s)/t),c=a*a*(3-2*a);V.target.lerpVectors(e,i,c),Js(),a<1&&requestAnimationFrame(o)};o()}const mm="/maisies-farm/sprites/",wc={};async function u1(){const n=new Th;await Promise.all(Object.keys(tp).map(t=>new Promise(e=>{n.load(mm+t+".webp",i=>{i.colorSpace=Ie,i.anisotropy=4,wc[t]={tex:i,aspect:i.image.height/i.image.width},e()},void 0,()=>e())})))}const On=n=>!!wc[n],h1=n=>wc[n]?mm+n+".webp":null,d1=(()=>{const n=new de,t=new I(Math.cos(Ti)*Math.sin(Yn),Math.sin(Ti),Math.cos(Ti)*Math.cos(Yn));return n.lookAt(t,new I,new I(0,1,0)),new Ei().setFromRotationMatrix(n)})();let vl=null;function f1(n,t){if(!vl){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d"),r=s.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(30,50,10,.38)"),r.addColorStop(1,"rgba(30,50,10,0)"),s.fillStyle=r,s.fillRect(0,0,64,64),vl=new Ks(i)}const e=new Nt(new ji(n*2,t*2),new Jn({map:vl,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}const Mf=96;function p1(n){if(n.mask!==void 0)return n.mask;n.mask=null;try{const t=n.tex.image,e=Mf,i=Math.max(1,Math.round(Mf*n.aspect)),s=document.createElement("canvas");s.width=e,s.height=i;const r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(t,0,0,e,i);const o=r.getImageData(0,0,e,i).data,a=new Uint8Array(e*i);for(let c=0;c<a.length;c++)a[c]=o[c*4+3];n.mask={w:e,h:i,a}}catch{}return n.mask}function m1(n,t){const e=p1(n);if(!e)return!0;const i=Math.floor(t.x*e.w),s=Math.floor((1-t.y)*e.h);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=i+o,c=s+r;if(a>=0&&c>=0&&a<e.w&&c<e.h&&e.a[c*e.w+a]>90)return!0}return!1}const _l=[];function g1(n,t,e,i){_l.length=0,Nt.prototype.raycast.call(n,e,_l);for(const s of _l)(!s.uv||m1(t,s.uv))&&i.push(s)}const xl=new Map;function ku(n,{width:t=1.4,w:e=1,d:i=1,lift:s=0,shadow:r=!0}={}){const o=wc[n],a=new Ut,c=t*o.aspect,l=t+":"+c;if(!xl.has(l)){const p=new ji(t,c);p.translate(0,c/2,0),xl.set(l,p)}const u=new Jn({map:o.tex,transparent:!0,alphaTest:.35,side:li}),h=new Nt(xl.get(l),u),d=new Ut;d.quaternion.copy(d1);const f=new I(Math.sin(Yn),0,Math.cos(Yn));return d.position.copy(new I(e/2,0,i/2).projectOnVector(f)),d.position.y=s,h.userData.sprite=!0,h.raycast=(p,v)=>g1(h,o,p,v),d.add(h),a.add(d),a.userData.plane=h,r&&a.add(f1(e*.62,i*.62)),a}function vi(n,t,e,i=0){const s=n.userData.plane;if(!s)return;const r=Math.sign(s.scale.x)||1;if(e==="walk"){const o=t*9+i;s.position.y=Math.abs(Math.sin(o))*.06,s.rotation.z=Math.sin(o)*.09,s.scale.set(r,1,1)}else if(e==="happy"){const o=t*6+i,a=Math.max(0,Math.sin(o));s.position.y=a*.16,s.scale.set(r*(1+(1-a)*.06),1-(1-a)*.08,1),s.rotation.z=0}else{const o=Math.sin(t*2.2+i);s.position.y=0,s.scale.set(r*(1-o*.015),1+o*.03,1),s.rotation.z=e==="eat"?Math.sin(t*3+i)*.05-.06*r:0}}const v1=new Map;async function _1(n){n==null||n(1)}const Sf=new Set;function fe(n,t={}){const e=v1.get(n),i=new Ut;if(!e){Sf.has(n)||(Sf.add(n),console.warn("Thiếu mô hình 3D",n));const u=new Nt(new Ve(.5,.5,.5),new Pe({color:16711935}));return u.position.y=.25,i.add(u),i}const s=e.animations.length>0,r=s?r1(e.scene):e.scene.clone(!0);t.tint!==void 0&&b1(r,t.tint),t.paint!==void 0&&y1(r,t.paint),i.add(r);const o=new ti().setFromObject(r),a=o.getSize(new I);let c=1;t.size?c=t.size/Math.max(a.x,a.z,.001):t.h?c=t.h/Math.max(a.y,.001):t.s&&(c=t.s),r.scale.multiplyScalar(c);const l=o.getCenter(new I);return t.center!==!1&&(r.position.x-=l.x*c,r.position.z-=l.z*c),r.position.y-=o.min.y*c,s&&(i.userData.mixer=new i1(r),i.userData.clips=Object.fromEntries(e.animations.map(u=>[u.name,u]))),i}const x1={dance:["dance","jump","idle"],eat:["eat","idle"],walk:["walk","walkslow","run","idle"],"emote-yes":["emote-yes","jump","idle"],"interact-right":["interact-right","idle"]};function We(n,t,e=.2){const{mixer:i,clips:s}=n.userData;if(!i)return;const r=(x1[t]||[t,"idle"]).find(c=>s[c]);if(!r||n.userData.cur===r)return;const o=i.clipAction(s[r]),a=n.userData.curAction;o.reset().play(),a&&a.crossFadeTo(o,e,!1),n.userData.cur=r,n.userData.curAction=o}function y1(n,t){n.traverse(e=>{e.isMesh&&(e.material=new Pe({color:t,roughness:.8,metalness:0,flatShading:!0}))})}function b1(n,t){const e=new Qt(t);n.traverse(i=>{i.isMesh&&(i.material=Array.isArray(i.material)?i.material.map(s=>s.clone()):i.material.clone(),(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>s.color.multiply(e)))})}const Le={},M1={windmill:"feedmill","stall-red":"market","stall-green":"juicebar",watermill:"dairy",campfire:"campfire",field:"soil",fence:"fence",ship:"ship",crate:"crate",axe:"axe"},vo="/maisies-farm/items/",Sr=n=>n&&On(n)?h1(n):null;function S1(n){if(Xt[n])return vo+n+".webp";const[t,e]=n.split(":");switch(t){case"ev":return e==="token"?vo+"shell.webp":null;case"face":return Ze.some(i=>i.id===e)&&On(e)?vo+"face-"+e+".webp":null;case"decor":return e==="path"?"/maisies-farm/textures/brick.webp":Sr(np[e]||e);case"tree":return Sr(ep[e]);case"animal":return Sr(zl[e]);case"fac":return Sr(e);case"pen":return Sr(e==="coop"||e==="beehive"?e:zl[e]);case"col":return wo.some(i=>i.pieces.some(s=>s[0]===e))?vo+e+".webp":null;case"b":return Sr(M1[e])}return null}function w1(){const n=e=>`url(${vo}${e}.webp)`,t=document.createElement("style");t.textContent=`.ico.coin{background-image:${n("coin")}}.ico.gem{background-image:${n("gem")}}.ico.bolt{background-image:${n("energy")}}
.xp{background:${n("star")} center/contain no-repeat;clip-path:none}`,document.head.appendChild(t)}async function E1(n){var o;if(w1(),n=n.filter(([a])=>{const c=S1(a);return c&&(Le[a]=c),!c}),!n.length)return;const t=160,e=new Kp({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(t,t),e.setPixelRatio(1),e.outputColorSpace=Ie;const i=new Jp;i.add(new um(16777215,8952234,2.2));const s=new hm(16777215,2.2);s.position.set(2,4,3),i.add(s);const r=new $n(30,1,.01,100);for(const[a,c]of n){const l=c.obj?c.obj():fe(c.model,{tint:c.tint,paint:c.paint});c.extra&&c.extra(l);const{mixer:u,clips:h}=l.userData;u&&(h!=null&&h.idle)&&(u.clipAction(h.idle).play(),u.update(.4)),l.updateMatrixWorld(!0);const d=new ti().setFromObject(l,!0),f=d.getBoundingSphere(new qr);if(c.face){const g=d.max.y-d.min.y;f.center.y=d.max.y-g*.36,f.radius=g*.36}l.rotation.y=c.rotY??-.5,i.add(l);const p=f.radius/Math.sin(zs.degToRad(15))*1.02,v=new I(0,.75,1).normalize();r.position.copy(f.center).addScaledVector(v,p),r.lookAt(f.center),e.render(i,r),Le[a]=e.domElement.toDataURL("image/png"),i.remove(l)}e.dispose(),(o=e.forceContextLoss)==null||o.call(e)}function T1(){const n=Object.entries(Xt).map(([t,e])=>[t,{model:e.icon,tint:e.tint}]);return Object.entries(Ri).forEach(([t,e])=>n.push(["tree:"+t,{model:e.model}])),Object.entries(fn).forEach(([t,e])=>n.push(["animal:"+t,{model:e.animal,rotY:.4}])),Object.entries(Zn).filter(([,t])=>!t.proc).forEach(([t,e])=>n.push(["decor:"+t,{model:e.model,tint:e.tint,paint:e.paint,rotY:e.pet?.4:-.5}])),Ze.forEach(t=>n.push(["face:"+t.id,{model:t.model,rotY:.25,face:!0}])),n.push(["b:windmill",{model:"town/windmill",rotY:-.8}]),n.push(["b:stall-red",{model:"town/stall-red"}]),n.push(["b:stall-green",{model:"town/stall-green"}]),n.push(["b:watermill",{model:"town/watermill",rotY:-.9}]),n.push(["b:campfire",{model:"survival/campfire-pit"}]),n.push(["b:field",{model:"nature/crops_dirtDoubleRow"}]),n.push(["b:fence",{model:"nature/fence_gate"}]),n.push(["b:ship",{model:"pirate/ship-small",rotY:-.9}]),n.push(["b:crate",{model:"pirate/crate"}]),n.push(["b:axe",{model:"survival/tool-axe"}]),n}function gm(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new cn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=wf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);const p=wf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function wf(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new zn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){const v=u.getComponent(d,p);a.setComponent(d+h,p,v)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const yl={},mi=(n,t={})=>{var e;return yl[e=n+JSON.stringify(t)]||(yl[e]=new Pe({color:n,roughness:.7,metalness:0,...t}))},zr=n=>(n.castShadow=!0,n.receiveShadow=!0,n);function vm(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Ks(i);return s.colorSpace=Ie,s.anisotropy=4,s}const bl=new Map;function _m(n=1){if(!bl.has(n)){const t=[],e=Math.max(2,Math.round(n/.22));for(let i=0;i<=e;i++){const s=-n/2+i/e*n,r=new Ve(.07,.38,.05);r.translate(s,.19,0),t.push(r);const o=new vc(.05,.08,4);o.rotateY(Math.PI/4),o.translate(s,.42,0),t.push(o)}for(const i of[.12,.28]){const s=new Ve(n,.05,.035);s.translate(0,i,-.035),t.push(s)}bl.set(n,gm(t.map(i=>i.toNonIndexed())))}return zr(new Nt(bl.get(n),mi(16777215)))}function A1(n,t,e=!0){const i=new Ut,s=(r,o,a,c)=>{const l=_m(r);l.position.set(o,0,a),l.rotation.y=c,i.add(l)};if(s(n,0,-t/2,0),s(t,-n/2,0,Math.PI/2),s(t,n/2,0,Math.PI/2),e){const r=(n-.8)/2;s(r,-n/2+r/2,t/2,0),s(r,n/2-r/2,t/2,0)}else s(n,0,t/2,0);return i}let Cs=null;const Ml=new Map;function C1(n=0,t=0){Cs===null&&(Cs=new Th().load("/maisies-farm/textures/brick.webp"),Cs.colorSpace=Ie,Cs.wrapS=Cs.wrapT=To,Cs.anisotropy=4);const e=(n&1)+":"+(t&1);if(!Ml.has(e)){const s=Cs.clone();s.repeat.set(.5,.5),s.offset.set((n&1)*.5,(t&1)*.5),Ml.set(e,new Pe({roughness:.9,map:s}))}const i=new Nt(new Ve(1,.05,1),Ml.get(e));return i.position.y=.02,i.receiveShadow=!0,i}const R1=new Vn(.055,8,6),P1=new Vn(.028,6,4);function I1(n=[16777215,16765414,16777215,16752327]){const t=new Ut,e=new Nt(new Ve(.94,.12,.94),mi(5941306));e.position.y=.06,zr(e),t.add(e);const i=new Nt(new Vn(.2,10,8),mi(5020208));for(let l=0;l<6;l++){const u=i.clone();u.position.set((Math.random()-.5)*.6,.14,(Math.random()-.5)*.6),u.scale.set(1.2,.55,1.2),t.add(u)}const s=22,r=new Cu(R1,mi(16777215),s),o=new Cu(P1,mi(16765503),s),a=new de,c=new Qt;for(let l=0;l<s;l++){const u=(Math.random()-.5)*.78,h=(Math.random()-.5)*.78,d=.22+Math.random()*.08;a.makeScale(1,.55,1).setPosition(u,d,h),r.setMatrixAt(l,a),r.setColorAt(l,c.set(n[l%n.length])),a.makeTranslation(u,d+.03,h),o.setMatrixAt(l,a)}return r.castShadow=!0,t.add(r,o),t}let Ca=null,Ef=null;function Tf(){if(!Ca){const e=i=>vm(128,128,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<260;a++)s.fillStyle=`rgba(${90+Math.random()*70},${55+Math.random()*40},25,.3)`,s.beginPath(),s.arc(Math.random()*r,Math.random()*o,1+Math.random()*2.5,0,7),s.fill()});Ca=new Pe({map:e("#a8723f"),roughness:1}),Ef=new Pe({map:e("#8a5a30"),roughness:1})}const n=new Ut,t=new Nt(new ys(.4,.5,.15,24),[Ca,Ef,Ca]);return t.position.y=.075,t.receiveShadow=!0,n.add(t),n}let Sl=null;function D1(){Sl||(Sl=new Pe({roughness:1,map:vm(64,64,(i,s,r)=>{i.fillStyle="#7a4b28",i.fillRect(0,0,s,r);for(let o=0;o<4;o++)i.fillStyle="rgba(40,20,5,.35)",i.fillRect(0,o*16+10,s,4),i.fillStyle="rgba(255,220,180,.12)",i.fillRect(0,o*16+6,s,3)})}));const n=new Ut,t=new Nt(new Ve(.98,.14,.98),mi(13208914));t.position.y=.07,zr(t),n.add(t);const e=new Nt(new Ve(.84,.02,.84),Sl);return e.position.y=.145,e.receiveShadow=!0,n.add(e),n}const L1=new bc(.42,2),N1=new Vn(.075,10,8),wl=[];function U1(n,t){return wl[n]||(wl[n]=gm(t))}function xm({leaf:n=5423668,leaf2:t=7329866,fruit:e=15217963,n:i=12,blossom:s=!1}={}){const r=new Ut,o=new Nt(new ys(.08,.12,.75,8),mi(9132587));o.position.y=.52,zr(o),r.add(o);const a=[[0,1.25,0,1.15],[-.32,1.08,.1,.8],[.34,1.1,-.05,.82],[.05,1.08,.33,.8],[0,1.6,0,.75],[-.05,1.05,-.3,.78]],c=[[],[]];a.forEach(([d,f,p,v],g)=>{const m=L1.clone();m.scale(v,v,v),m.translate(d,f,p),c[g===4?1:0].push(m)}),c.forEach((d,f)=>{const p=new Nt(U1(f,d),mi(f?t:n));zr(p),r.add(p)});const l=new Cu(N1,mi(e,{roughness:.35}),i),u=new de,h=new I;for(let d=0;d<i;d++){const f=d/i*Math.PI*2*1.6+.3,p=1+d*37%10/10*.55;h.set(Math.cos(f)*.55,p,Math.sin(f)*.55),h.x+h.z<-.3&&h.multiplyScalar(-1).setY(p),u.makeScale(s?.8:1,s?.8:1.08,s?.8:1).setPosition(h),l.setMatrixAt(d,u)}return l.castShadow=!0,r.add(l),{group:r,fruits:l}}const k1=new bc(.25,2);function O1(n=5224494,t=6736958,e=!1){const i=new Ut;if([[0,.24,0,1.15,n],[-.22,.18,.08,.85,t],[.22,.18,-.04,.9,n],[.04,.2,.22,.8,t]].forEach(([s,r,o,a,c])=>{const l=new Nt(k1,mi(c));l.position.set(s,r,o),l.scale.set(a,a*.85,a),zr(l),i.add(l)}),e)for(let s=0;s<6;s++){const r=new Nt(new Vn(.04,6,5),mi(16731501)),o=s*1.1;r.position.set(Math.cos(o)*.3,.22+s%3*.08,Math.sin(o)*.3),i.add(r)}return i}const Ec=n=>xs[n.t].cap[n.lvl||0],Ws=n=>Object.values(n.bag||{}).reduce((t,e)=>t+e,0),Ou=n=>Ws(n)>=Ec(n),Ih=n=>xs[n.t].up[n.lvl||0]||null;function Dh(n,t){const e=xs[n.t];if(!e)return 0;if(n.site||n.at==null||Ou(n))return n.at=t,0;const i=e.every*1e3,s=Math.floor((t-n.at)/i);if(s<=0)return 0;const r=n.bag||(n.bag={}),o=Math.min(s,Ec(n)-Ws(n));for(let a=0;a<o;a++){const c=e.gives[(n.n||0)%e.gives.length];n.n=(n.n||0)+1,r[c]=(r[c]||0)+1}return n.at+=o*i,Ou(n)&&(n.at=t),o}function F1(n){if(n.site)return{};const t=n.bag||{};for(const[e,i]of Object.entries(t))Xe(e,i);return n.bag={},t}function B1(n){const t=Ih(n);return!t||n.site||!fs(t)?!1:(nh(t),n.lvl=(n.lvl||0)+1,!0)}function ee(n,t=1,e=1,i={}){return On(n)?ku(n,{width:tp[n].width*(i.scale||1),w:t,d:e,shadow:i.shadow!==!1}):null}function qn(n,t,e=1,i=1){return ee(pg[n],e,i)||fe(n,t)}function qi(n,t,e){if(n.userData.isArt){const i=t*Math.cos(Math.PI/4)-e*Math.sin(Math.PI/4);Math.abs(i)>.001&&(n.userData.plane.scale.x=i>0?-1:1)}else n.rotation.y=Math.atan2(t,e)}function Qs(n,t,e){const i=n&&ee(n,.5,.5);return i?(i.userData.isArt=!0,i.userData.plane=i.userData.plane,i):fe(t,e)}const he=new Map,El={},ym=(n,t={})=>{var e;return El[e=n+JSON.stringify(t)]||(El[e]=new Pe({color:n,roughness:.9,...t}))},yn=(n,t,e,i,s)=>{const r=new Nt(new Ve(n,t,e),ym(i,s));return r.castShadow=r.receiveShadow=!0,r};let Tl=null;function Ir(){if(!Tl){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.translate(32,32),e.fillStyle="#fff6b0",e.shadowColor="#ffd23f",e.shadowBlur=10,e.beginPath();for(let s=0;s<8;s++){const r=s%2?9:26,o=s*Math.PI/4;e.lineTo(Math.sin(o)*r,-Math.cos(o)*r)}e.fill();const i=new Ks(t);i.colorSpace=Ie,Tl=new gc({map:i,depthTest:!1,transparent:!0})}const n=new Qa(Tl);return n.scale.set(.35,.35,1),n.renderOrder=5,n}let Al=null;function z1(){Al||(Al=new Pe({color:16777215,transparent:!0,opacity:.8,roughness:1}));const n=new Ut;for(let t=0;t<3;t++){const e=new Nt(new Vn(.12,8,6),Al.clone());e.userData.ph=t/3,n.add(e)}return n.userData.tick=t=>n.children.forEach(e=>{const i=(t*.6+e.userData.ph)%1;e.position.set(Math.sin(i*6)*.08,i*.9,0),e.scale.setScalar(.6+i*1.4),e.material.opacity=.75*(1-i)}),n}function V1(n,t,{stone:e=!1,roof:i="town/roof-gable",roofH:s=1.4,wallTint:r,roofTint:o,door:a="south",floors:c=1}={}){const l=new Ut,u=e?"town/wall":"town/wall-wood";for(let f=0;f<c;f++)for(let p=0;p<n;p++)for(let v=0;v<t;v++){const g=-n/2+.5+p,m=-t/2+.5+v,S=[];p===n-1&&S.push(["e",0]),p===0&&S.push(["w",Math.PI]),v===t-1&&S.push(["s",-Math.PI/2]),v===0&&S.push(["n",Math.PI/2]);for(const[M,x]of S){let L=u+"-window-shutters";f===0&&M===a&&p===Math.floor((n-1)/2)||f===0&&M==="e"&&v===Math.floor((t-1)/2)&&a==="east"?L=u+"-door":(p+v+f)%2&&(L=u);const C=fe(L,{s:1,center:!1,tint:r});C.rotation.y=x,C.position.set(g,f,m),l.add(C)}}const h=fe(i,o!==void 0?{paint:o}:{}),d=new ti().setFromObject(h).getSize(new I);return h.scale.set((n+.25)/d.x,s/d.y,(t+.25)/d.z),h.position.y=c,l.add(h),l.userData.top=c+s,l}const H1=[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]],G1={wheat:.9,corn:.75,carrot:1,strawberry:1,tomato:1,pumpkin:1,melon:1};function tr(n,t){return n.crop?t>=n.e?3:(t-n.s)/(n.e-n.s)<.5?0:1:-1}function W1(n){const t=new Ut,e=On("soil");e||t.add(D1());const i=new Ut;i.position.y=e?0:.12,t.add(i);const s=Ir();s.visible=!1,t.add(s);let r="";return{root:t,refresh(o){const a=tr(n,o),c=n.crop+a;if(c===r)return;if(r=c,i.clear(),s.visible=a===3,e){const f=a<0?"soil":a===3&&On(n.crop)?n.crop:"sprout";i.add(ee(f,1,1,{shadow:!1}));return}if(a<0)return;const l=Fe[n.crop],u=l.stages[a===3?2:a],h=a===3?On(n.crop)?n.crop:null:On("sprout")?"sprout":null;if(h){const f=a===0?.65:a===1?.88:1,p=ee(h,f,f,{scale:f,shadow:!1});i.add(p);return}const d=(G1[n.crop]||1)*(a===0?.7:1);H1.forEach(([f,p],v)=>{const g=fe(u,a===3&&l.fit?{...l.fit}:a===3&&l.tint?{s:d,tint:l.tint}:{s:d});if(g.position.set(f,.04,p),g.rotation.y=v*1.3,i.add(g),a===3&&l.deco)for(let m=0;m<2;m++){const S=fe(l.deco,{size:.13});S.position.set(f+(m?.08:-.07),.18+m*.06,p+(m?-.05:.06)),i.add(S)}})},update(o){s.visible&&(s.position.set(0,.85+Math.sin(o*3+n.id)*.08,0),s.material.rotation=o)}}}function $1(n){const t=Ri[n.t],e=new Ut,i=!!t.palm,s=ep[n.t]||null;if(s&&On(s)){t.lush&&e.add(Tf());const f=ee(s),p=On("leafytree")&&!i?ee("leafytree"):null;[f,p].forEach(g=>{g&&(g.position.y=t.lush?.15:0,e.add(g))});const v=Ir();return e.add(v),{root:e,refresh(g){const m=g>=n.e;f.visible=m||!p,p&&(p.visible=!m),v.visible=m;const S=Math.min(1,(g-n.s)/(n.e-n.s)),M=m?1:.8+.2*S;f.scale.setScalar(M),p&&p.scale.setScalar(M)},update(g){v.visible&&(v.position.set(0,2.2+Math.sin(g*3+n.id)*.08,0),v.material.rotation=g)}}}if(t.lush){e.add(Tf());const{group:f,fruits:p}=xm(t.lush);f.position.y=.15,e.add(f);const v=Ir();return e.add(v),{root:e,refresh(g){const m=g>=n.e;p.visible=m,v.visible=m;const S=Math.min(1,(g-n.s)/(n.e-n.s));f.scale.setScalar(m?1:.8+.2*S)},update(g){v.visible&&(v.position.set(0,2.35+Math.sin(g*3+n.id)*.08,0),v.material.rotation=g)}}}const r=fe(t.model,{h:i?2.1:1.8,tint:t.tint});e.add(r);const o=new Ut;e.add(o);const a=new ti().setFromObject(r),c=a.getSize(new I),l=i?a.max.y-.35:a.min.y+c.y*.66,u=Math.max(c.x,c.z)/2*(i?.25:.92);(i?[[.2,-.05],[1,0],[1.8,-.05]]:[[.25,.1],[.85,-.12],[1.35,.18],[.6,.32],[1.1,-.35]]).forEach(([f,p])=>{const v=fe(t.fruit,{size:i?.22:.24});v.position.set(Math.cos(f)*u,l+p*c.y*.5,Math.sin(f)*u),o.add(v)});const d=Ir();return e.add(d),{root:e,refresh(f){const p=f>=n.e;o.visible=p,d.visible=p;const v=Math.min(1,(f-n.s)/(n.e-n.s));r.scale.setScalar(p?1:.85+.15*v)},update(f){d.visible&&(d.position.set(0,2.25+Math.sin(f*3+n.id)*.08,0),d.material.rotation=f)}}}const X1={coop:15323775,cowpen:10935410,pigpen:12094044,beehive:13035674},Cl={cowpen:"cowshed",pigpen:"pigsty"};function q1(n){const t=fn[n.t],e=new Ut,i=yn(2.9,.05,2.9,X1[n.t]);if(i.position.y=0,e.add(i),e.add(A1(2.92,2.92)),n.t==="beehive"){const a=ee("beehive");if(a)a.position.set(-.85,0,-.85),e.add(a);else for(let c=0;c<2;c++){const l=fe("survival/box-large",{size:.55,tint:16765503});l.position.set(-.95+c*.6,0,-.95),e.add(l)}[[.6,-.7],[.9,.3],[-.8,.5],[.1,.8],[-.2,-.3]].forEach(([c,l],u)=>{const h=ee(u%2?"flower_yel":"flower_red",.4,.4,{scale:.75,shadow:!1});h&&(h.position.set(c,0,l),e.add(h))})}else if(n.t==="coop"&&On("coop")){const a=ee("coop");a.position.set(-.85,0,-.85),e.add(a)}else if(n.t==="coop"){const a=V1(1,1,{roof:"town/roof-point",roofH:.7,roofTint:15229004});a.scale.setScalar(.75),a.position.set(-.85,0,-.85),e.add(a)}else if(On(Cl[n.t])){const a=ee(Cl[n.t]);if(a.position.set(-.8,0,-.85),e.add(a),n.t==="cowpen"){const c=ee("trough",1,1,{scale:.8});c&&(c.position.set(.55,0,-.95),e.add(c))}}else{const a=qn("survival/box-large",{size:.8});a.position.set(-.9,0,-.9),e.add(a);const c=qn("survival/bucket",{size:.3},.4,.4);c.position.set(-.3,0,-1.05),e.add(c)}const s=[],r=a=>(Cl[n.t]&&a.x+a.z<-.5&&(a.x=-a.x,a.z=-a.z),a),o=()=>{for(;s.length<n.animals.length;){const a=Qs(zl[n.t],t.animal,{h:n.t==="coop"?.5:n.t==="beehive"?.35:n.t==="cowpen"?.85:.6});r(a.position.set((Math.random()-.5)*1.6,.03,(Math.random()-.5)*1.4+.2)),a.userData.goal=a.position.clone(),a.userData.wait=Math.random()*3,e.add(a),s.push(a)}for(;s.length>n.animals.length;)e.remove(s.pop())};return o(),{root:e,herd:s,refresh(a){o()},update(a,c){s.forEach((l,u)=>{var g;const h=n.animals[u];if(!h)return;const d=l.userData;(g=d.mixer)==null||g.update(c);const f=h.e&&a>=h.e,p=h.e&&a<h.e;if(t.fly&&(l.position.y=.55+Math.sin(a*3+u)*.12),f){We(l,"dance"),d.isArt&&vi(l,a,"happy",u);return}const v=d.goal.clone().sub(l.position);v.y=0,v.length()>.05?(We(l,"walk"),v.setLength(Math.min(v.length(),c*.45)),l.position.add(v),qi(l,v.x,v.z),d.isArt&&vi(l,a,"walk",u)):(We(l,p?"eat":"idle"),d.isArt&&vi(l,a,p?"eat":"idle",u),d.wait-=c,d.wait<=0&&(r(d.goal.set((Math.random()-.5)*1.8,.03,(Math.random()-.5)*1.6+.15)),d.wait=2+Math.random()*4))})}}}function Tc(n){const t=dg[n],e=fe(t.model,{size:t.size});e.rotation.y=t.rot||0;let i=null;return t.spin&&e.traverse(s=>{!i&&s.name.includes(t.spin)&&(i=s)}),{m:e,spin:i,axis:t.axis}}function Ke(n,t,e,i,s,r=0){const o=fe(t,e);return o.position.set(i,0,s),o.rotation.y=r,n.add(o),o}const Rl={feedmill:n=>{Ke(n,"kk/decoration/props/sack.gltf",{size:.4},.7,.75),Ke(n,"kk/decoration/props/sack.gltf",{size:.35},.35,.85,1)},bakery:n=>{Ke(n,"food/loaf",{size:.3},.75,.8)},dairy:n=>{Ke(n,"kk/decoration/props/bucket_water.gltf",{size:.3},-.75,.8),Ke(n,"food/carton",{h:.3},-.45,.85)},juicebar:n=>{Ke(n,"kk/decoration/props/crate_open.gltf",{size:.4},.75,.8),Ke(n,"food/orange",{size:.15},.75,.8).position.y=.2},seafood:n=>{Ke(n,"survival/campfire-pit",{size:.45},.7,.75),Ke(n,"food/fish",{size:.3},-.65,.8)},kitchen:n=>{Ke(n,"survival/campfire-pit",{size:.45},.7,.75),Ke(n,"survival/workbench",{size:.5},-.65,.75)},sweets:n=>{Ke(n,"food/cupcake",{size:.3},.75,.85),Ke(n,"food/donut-sprinkles",{size:.28},-.7,.85)},jammaker:n=>{Ke(n,"food/honey",{size:.28,tint:16743034},.7,.8),Ke(n,"kk/decoration/props/barrel.gltf",{size:.4},-.7,.75)}},Af={bakery:[.35,1.7,-.35],kitchen:[.7,.3,.75],seafood:[.7,.3,.75],sweets:[0,1.5,0],jammaker:[-.3,1.9,-.3]};function j1(n){var c;const t=new Ut;t.add(Zr(1.9));const e=Zf[n.t],i=e?ee(e.sprite,2,2,{scale:e.scale}):ee(n.t,2,2),{m:s,spin:r,axis:o}=i?{m:i}:Tc(n.t);t.add(s),i||(c=Rl[n.t])==null||c.call(Rl,t);let a=null;return Af[n.t]&&!i&&(a=z1(),a.position.set(...Af[n.t]),t.add(a)),{root:t,refresh(l){a&&(a.visible=n.jobs.some(u=>l<u.e&&l>=u.s))},update(l,u){const h=n.jobs.some(d=>l<d.e&&l>=d.s);if(r&&(r.rotation[o]+=u*(h?2.2:.3)),i){const d=h?Math.abs(Math.sin(l*4))*.025:0;i.userData.plane.scale.set(1+d*.5,1-d,1)}a!=null&&a.visible&&a.userData.tick(l)}}}function Y1(n){const t=new Ut;t.add(Zr(1.9));const e=fg[n.t],i=e?ee(e.sprite,2,2,{scale:e.scale}):ee(n.t,2,2);i&&t.add(i);const s=(o,a,c)=>{const l=ee("logs",.7,.7,{scale:c})||fe("kk/decoration/props/resource_lumber.gltf",{size:.6});return l.position.set(o,0,a),t.add(l),l};s(-.6,.6,.8);const r=[s(.65,.65,.9),s(.35,.85,.7)];return r.forEach(o=>o.visible=!1),{root:t,refresh(){const o=Ws(n),a=Ec(n);r[0].visible=o>0,r[1].visible=o>=a/2}}}let Ra=null;function Zr(n){if(!Ra){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d");i.fillStyle="#d9b57a",i.fillRect(0,0,128,128);for(let s=0;s<220;s++)i.fillStyle=`rgba(${120+Math.random()*60},${80+Math.random()*40},40,.25)`,i.beginPath(),i.arc(Math.random()*128,Math.random()*128,1+Math.random()*2.5,0,7),i.fill();Ra=new Ks(e),Ra.colorSpace=Ie}const t=new Nt(new ys(n*.62,n*.66,.06,28),new Pe({map:Ra,roughness:1}));return t.position.y=0,t.scale.z=.92,t.receiveShadow=!0,t}function K1(){const n=new Ut;n.add(Zr(2.9));const t=ee("house",3,3);if(t)return n.add(t),{root:n};const{m:e}=Tc("house");e.position.z=-.2,n.add(e);const i=fe("town/lantern",{h:.9});i.position.set(-1.25,0,1.1),n.add(i);const s=fe("town/lantern",{h:.9});return s.position.set(1.25,0,1.1),n.add(s),[[-.8,1.15,"nature/flower_redA"],[.8,1.15,"nature/flower_yellowA"],[-1.2,-.9,"nature/plant_bushLarge"],[1.25,-.8,"nature/flower_purpleA"]].forEach(([r,o,a])=>Ke(n,a,{size:.4},r,o)),{root:n}}function J1(){const n=new Ut;n.add(Zr(1.95));const t=ee("barn",2,2);if(t)return n.add(t),{root:n};const{m:e}=Tc("barn");return e.position.z=-.1,n.add(e),Ke(n,"kk/decoration/props/sack.gltf",{size:.4},.72,.78),Ke(n,"kk/decoration/props/crate_A_big.gltf",{size:.38},-.72,.78,.4),{root:n}}function Z1(){const n=new Ut,t=ee("board",2,1);if(t)return n.add(t),{root:n,cart:null};const e=yn(.1,1.2,.1,9132587);e.position.set(-.75,.6,0),n.add(e);const i=e.clone();i.position.x=.75,n.add(i);const s=yn(1.8,.85,.08,13208914);s.position.set(0,.95,0),n.add(s);const r=yn(1.95,.12,.2,9658426);r.position.set(0,1.42,0),n.add(r),[16775920,16773312,15267583,16775920,16770799,15794152].forEach((c,l)=>{const u=yn(.4,.3,.02,c);u.position.set(-.55+l%3*.55,1.15-Math.floor(l/3)*.38,.06),u.rotation.z=l%2?.05:-.04,n.add(u)});const a=fe("town/cart",{size:.9});return a.position.set(.2,0,.55),a.rotation.y=Math.PI/2,n.add(a),{root:n,cart:a}}function Q1(n){const t=new Ut;t.add(Zr(1.9));const e=ee("market",2,2);if(e)return t.add(e),{root:t,refresh(){}};const{m:i}=Tc("market");t.add(i);const s=fe("kk/decoration/props/crate_A_big.gltf",{size:.35});s.position.set(-.75,0,.8),t.add(s);const r=fe("kk/decoration/props/barrel.gltf",{size:.32});r.position.set(.78,0,.8),t.add(r);const o=new Ut;o.position.set(0,.62,.55),t.add(o);let a="";return{root:t,refresh(){const c=n.slots.map(l=>l?l.item+(l.sold?"$":""):"-").join();c!==a&&(a=c,o.clear(),n.slots.forEach((l,u)=>{if(!l||l.sold)return;const h=fe(Xt[l.item].icon,{size:.26,tint:Xt[l.item].tint});h.position.set(-.5+u%3*.5,0,Math.floor(u/3)*.3-.1),o.add(h)}))}}}function bm(n,t={x:0,z:0}){if(n==="brick")return C1(t.x,t.z);if(n==="flowerbed")return ee("daisies")||I1();if(n==="fence"){const e=ee("fence",1,1,{shadow:!1});return e?(e.userData.plane.userData.flip=-1,e):_m(1)}}function tS(n){const t=Zn[n.t],e=new Ut;if(t.proc)return e.add(bm(t.proc,n)),{root:e};const i=np[n.t]||n.t;if(!t.pet)return e.add(ee(i,t.w||1,t.d||1)||fe(t.model,{...t.fit,tint:t.tint,paint:t.paint})),{root:e};const s=Qs(i,t.model,t.fit);return e.add(s),s.userData.goal=new I,s.userData.wait=1,{root:e,update(r,o){var l;const a=s.userData;(l=a.mixer)==null||l.update(o);const c=a.goal.clone().sub(s.position);c.length()>.05?(We(s,"walk"),c.setLength(Math.min(c.length(),o*.5)),s.position.add(c),qi(s,c.x,c.z),a.isArt&&vi(s,r,"walk",n.id)):(We(s,a.dance?"dance":"idle"),a.isArt&&vi(s,r,a.dance?"happy":"idle",n.id),a.wait-=o,a.wait<=0&&(a.goal.set((Math.random()-.5)*2.4,0,(Math.random()-.5)*2.4),a.wait=2+Math.random()*5,a.dance=Math.random()<.25))}}}const Fu=.8;let Pl=null;function eS(n){Pl||(Pl=[3811866,8314970].map(s=>new gc({color:s,depthTest:!1,transparent:!0})));const t=new Ut,e=new Qa(Pl[0]),i=new Qa(Pl[1]);return e.scale.set(Fu+.08,.16,1),i.scale.set(Fu,.09,1),e.renderOrder=6,i.renderOrder=7,t.add(e,i),t.position.y=n,t.userData.fill=i,t.visible=!1,t}function Mm(n,t){const e=Math.max(.01,Math.min(1,t)),i=n.userData.fill;i.scale.x=Fu*e,i.center.set(.5/e,.5),n.visible=t<1&&t>0}function nS(n,t){const e=he.get(n);e!=null&&e.hp&&Mm(e.hp,t)}function iS(n){const t=he.get(n);t&&(t.shakeT=performance.now())}const sS={bush:["bush"],rock:["rock"],tree:["jungletree"],stump:["stump"],logs:["logs"],grass:["grasstuft"],bamboo:["bamboo"],claymound:["claymound"],bigtree:["bigtree"],bigrock:["bigrock"]},rS={grass:"bush",bamboo:"bush",claymound:"rock",bigtree:"tree",bigrock:"rock"};function oS(n){var u;const t=new Ut,[e,i,s=1]=sS[n.t]||[];let r=e&&ee(e,1,1,{scale:s});if(r)i!=null&&r.userData.plane.material.color.set(i);else{const h=Mn[rS[n.t]||n.t];h.proc==="tree"?(r=xm({leaf:4171818,leaf2:5816890,n:0}).group,r.scale.setScalar(.85*s)):h.model?(r=fe(h.model,h.fit),r.scale.multiplyScalar(s)):r=O1(5224494,6736958,n.id%3===0),i!=null&&r.traverse(d=>{d.isMesh&&(d.material=d.material.clone(),d.material.color.set(i))}),r.rotation.y=(n.r||0)*1.57+n.id%7*.3}t.add(r);const o=new ti().setFromObject(r).max.y,a=eS(Math.min(3,Math.max(.8,(isFinite(o)?o:1.2)+.15)));t.add(a);const c={root:t,hp:a,shakeT:0,update(){const h=c.shakeT?(performance.now()-c.shakeT)/260:1;h<1?(r.position.x=Math.sin(h*Math.PI*6)*.07*(1-h),r.rotation.z=Math.sin(h*Math.PI*6)*.05*(1-h)):c.shakeT&&(r.position.x=0,r.rotation.z=0,c.shakeT=0)}},l=(u=Mn[n.t])==null?void 0:u.hp;return n.hp!=null&&l&&Mm(a,n.hp/l),c}function aS(n){const t=new Ut,e=ee("chest")||fe("pirate/chest",{size:.65});t.add(e);const i=Ir();return i.position.y=1,t.add(i),{root:t,update(s){i.position.y=1+Math.sin(s*3+n.id)*.08}}}function cS(n){const t=new Ut,[e,i]=pn(n),s=Math.min(e,i);t.add(Zr(s*.95));const r=ee("scaffold",e,i,{scale:s/2*(.85+.1*Math.min(n.site.stage||0,2))});if(r)return t.add(r),{root:t};const o=new Ut;t.add(o);const a=s*.5,c=.8+.3*(n.site.stage||0),l=11565637,u=9067051;for(const[v,g]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const m=yn(.08,c,.08,l);m.position.set(v*a/2,c/2,g*a/2),o.add(m)}for(let v=.35;v<c;v+=.4)for(const[g,m,S]of[[0,-1,0],[0,1,0],[-1,0,1],[1,0,1]]){const M=yn(a+.08,.06,.06,u);M.position.set(g*a/2,v,m*a/2),M.rotation.y=S*Math.PI/2,o.add(M)}const h=yn(a*.9,.05,a*.9,14264426);h.position.y=.36,o.add(h);const d=yn(.05,Math.hypot(a,c)*.95,.05,u);d.position.set(0,c/2,a/2+.03),d.rotation.z=Math.atan2(a,c),o.add(d),o.position.set(-s*.08,0,-s*.08);const f=ee("crate",.6,.6,{scale:.75})||fe("pirate/crate",{size:.5});f.position.set(s*.32,0,s*.3),t.add(f);const p=ee("logs",.7,.7,{scale:.8})||fe("kk/decoration/props/resource_lumber.gltf",{size:.6});return p.position.set(-s*.3,0,s*.36),t.add(p),{root:t}}function lS(){const n=new Ut;return n.add(ee("boat",2,2)||fe("pirate/boat-row-small",{size:1.9})),{root:n}}const Cf=new Qt(9206376);function uS(n){const t=new Ut,[e,i]=pn(n),s=Math.min(e,i),r=n.k==="house"?"ruin_house":n.k==="boat"?"ruin_boat":n.k==="fac"&&n.t==="bakery"?"ruin_bakery":null,o=r&&ee(r,e,i);if(o)return t.add(o),{root:t};const a=Ac({...n,site:void 0}).root;t.add(a),a.traverse(u=>{if(!u.isMesh||!u.material)return;const h=d=>(d=d.clone(),d.color&&(u.userData.sprite?d.color.copy(Cf):d.color.multiply(Cf)),d);u.material=Array.isArray(u.material)?u.material.map(h):h(u.material)});const c=n.k==="boat";a.rotation.z=c?.28:.09,a.rotation.x=c?.1:-.05,c?a.position.y=-.12:a.scale.y=.88;for(let u=0;u<(c?3:5);u++){const h=yn(.18+.5*(u*37%10)/10,.05,.12,u%2?11565637:9067051);h.position.set((u*53%10/10-.5)*s*.9,.04+u*.01,s*.32+u*29%10/10*.25),h.rotation.y=u*1.3,h.rotation.z=(u%3-1)*.15,t.add(h)}const l=ee("logs",.7,.7,{scale:.7})||fe("kk/decoration/props/resource_lumber.gltf",{size:.55});return l.position.set(-s*.38,0,s*.38),t.add(l),{root:t}}let Ha=null;function hS(){Ha||(Ha=new Pe({color:16747038,emissive:16738816,emissiveIntensity:.5,roughness:.6,transparent:!0}));const n=new Ut;n.scale.setScalar(1.4);const t=new Nt(new vc(.32,.5,4),Ha);t.rotation.x=Math.PI,t.position.y=.25;const e=new Nt(new Ve(.16,.42,.16),Ha);return e.position.y=.68,n.add(t,e),n}function dS(n){const t=new Ut,e=Vr[n.t],i=n.t==="stairs_old",s=n.site?n.site.stage:9,r=n.t==="bridge_w",o=r?13218394:11565637,a=r?9414714:8015654,c=new Ut;t.add(c);const l=ee(n.site?n.t+"_broken":n.t,2,1);if(l)c.add(l);else if(i){const f=n.site?1+s:3;for(let p=0;p<3;p++){const v=p<f,g=yn(1.7-p*.12,.22*(p+1),.32,v?12170408:10130826);g.position.set(v?0:(p-1)*.2,.11*(p+1),.3-p*.3),v||(g.scale.set(.45,.5,.9),g.rotation.y=.5*p),c.add(g)}if(!n.site)for(const p of[-.8,.8]){const v=yn(.12,.5,.12,9209724);v.position.set(p,.25,.32),c.add(v)}}else{const f=n.t==="bridge_w"?"x":"z",p=f==="x"?2:1.3,v=f==="x"?.9:1.8,g=9,m=n.site?Math.min(g,3+s*3):g;for(let S=0;S<g;S++){if(S>=m&&S%2)continue;const M=yn(f==="x"?p/g*.85:v,.07,f==="x"?v:p/g*.85,S<m?o:9071168),x=-p/2+(S+.5)*p/g;M.position.set(f==="x"?x:0,.16+(S<m?0:-.06),f==="x"?0:x),S>=m&&(M.rotation.y=.25),c.add(M)}for(const S of[-1,1])for(const M of[-1,1]){const x=yn(.1,.55,.1,a);x.position.set(f==="x"?S*p/2:M*v/2,.27,f==="x"?M*v/2:S*p/2),c.add(x)}if(!n.site||s>=1)for(const S of[-1,1]){const M=yn(f==="x"?p:.05,.05,f==="x"?.05:p,n.site?13149290:a);M.position.set(f==="x"?0:S*v/2,.5,f==="x"?S*v/2:0),c.add(M)}}if(n.site){const f=ee("logs",.6,.6,{scale:.6})||fe("kk/decoration/props/resource_lumber.gltf",{size:.45});f.position.set(i?.75:.6,0,.45),t.add(f)}const u=e.zone,h=hS();return t.add(h),{root:t,update(f){var v;const p=!((v=_.zones)!=null&&v[u])&&zo(n);h.visible=p,p&&(h.position.y=1.5+Math.abs(Math.sin(f*3))*.35,Ha.opacity=.55+.45*(.5+.5*Math.sin(f*6)),h.rotation.y=f*1.5)}}}let Rs=null;const Uo=new Map;function fS(){if(Rs)return Rs;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");for(const[s,r,o]of[[64,72,44],[40,76,30],[88,76,30],[56,52,30],[78,56,26]]){const a=t.createRadialGradient(s,r,o*.2,s,r,o);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.65,"rgba(255,255,255,.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,7),t.fill()}t.globalCompositeOperation="source-atop";const e=t.createLinearGradient(0,30,0,118);e.addColorStop(0,"rgba(160,185,215,0)"),e.addColorStop(.55,"rgba(160,185,215,.18)"),e.addColorStop(1,"rgba(140,165,200,.6)"),t.fillStyle=e,t.fillRect(0,0,128,128),Rs=new Ks(n),Rs.colorSpace=Ie;const i=new Image;return i.onload=()=>{n.width=i.width,n.height=i.height,t.drawImage(i,0,0),Rs.dispose(),Rs.needsUpdate=!0},i.src="/maisies-farm/textures/cloud.webp",Rs}function pS(n,t){const[e,i,s,r]=n.rect,o=Ku(7919+t*131),a=[],c=new $e;c.lookAt(Math.sin(Yn)*Math.cos(Ti),Math.sin(Ti),Math.cos(Yn)*Math.cos(Ti));const l=new I(1,0,0).applyQuaternion(c.quaternion),u=new I(0,1,0).applyQuaternion(c.quaternion),h=new I(0,0,1).applyQuaternion(c.quaternion),d=2.1;for(let x=0;x<2;x++)for(let L=e+.6;L<e+s-.2;L+=d)for(let C=i+.6;C<i+r-.2;C+=d){const R=L+(o()-.5)*.9+x*.7,D=C+(o()-.5)*.9+x*.7;if(R>e+s-.4||D>i+r-.4)continue;const E=new I(R-te/2,.55+x*.75+o()*.35,D-te/2);a.push({p:E,s:3+o()*1.3,c:x?1:.9+o()*.06,f:o()<.5})}a.sort((x,L)=>x.p.dot(h)-L.p.dot(h));const f=[],p=[],v=[],g=[];a.forEach(({p:x,s:L,c:C,f:R},D)=>{for(const[E,b]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]]){const P=x.clone().addScaledVector(l,E*L).addScaledVector(u,b*L*.75);f.push(P.x,P.y,P.z),p.push(R?.5-E:E+.5,b+.5),v.push(C*.97,C*.98,C)}g.push(D*4,D*4+1,D*4+2,D*4,D*4+2,D*4+3)});const m=new cn;m.setAttribute("position",new Me(f,3)),m.setAttribute("uv",new Me(p,2)),m.setAttribute("color",new Me(v,3)),m.setIndex(g);const S=new Jn({map:fS(),vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),M=new Nt(m,S);return M.renderOrder=4,{mesh:M,mat:S,t0:0}}const mS=n=>typeof n.id=="number"&&!zo(n);function gS(){_s.forEach((n,t)=>{var i;if((i=_.zones)!=null&&i[n.id]||Uo.has(n.id))return;const e=pS(n,t);V.farm.add(e.mesh),Uo.set(n.id,e)})}Hr("zone",n=>{for(const e of _.objs){const i=he.get(e.id);i&&fi(e.x,e.z)===n&&(i.root.visible=!0)}const t=Uo.get(n);t&&!t.t0&&(t.t0=performance.now())});function vS(n){for(const[t,e]of Uo){if(!e.t0){e.mesh.position.y=Math.sin(n*.8+t.length)*.06;continue}const i=(performance.now()-e.t0)/1500;if(i>=1){V.farm.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose(),Uo.delete(t);continue}e.mat.opacity=1-i*i,e.mesh.position.y=i*1.6}}function Ac(n){var t;if(n.k==="gate")return dS(n);if((t=n.site)!=null&&t.ruin)return uS(n);if(n.site)return cS(n);switch(n.k){case"field":return W1(n);case"tree":return $1(n);case"pen":return q1(n);case"fac":return j1(n);case"helper":return Y1(n);case"house":return K1();case"barn":return J1();case"board":return Z1();case"decor":return tS(n);case"obstacle":return oS(n);case"loot":return aS(n);case"market":return Q1(n);case"boat":return lS()}return{root:new Ut}}function Lh(n,t){const[e,i]=pn(t);if(n.root.position.copy(on(t.x,t.z,e,i)),t.k!=="decor")return;let s=!1;n.root.traverse(r=>{r.userData.sprite&&(s=!0,r.scale.x=Math.abs(r.scale.x)*((t.r||0)%2?-1:1)*(r.userData.flip||1))}),n.root.rotation.y=s?0:-(t.r||0)*Math.PI/2}function Wi(n){var e;const t=Ac(n);return t.root.userData.oid=n.id,Lh(t,n),mS(n)&&(t.root.visible=!1),V.farm.add(t.root),V.pickables.push(t.root),he.set(n.id,t),(e=t.refresh)==null||e.call(t,Lt()),t}function Qr(n){const t=he.get(n);t&&(V.farm.remove(t.root),V.pickables.splice(V.pickables.indexOf(t.root),1),he.delete(n))}function _S(n){return Qr(n.id),Wi(n)}const dn={},Rf=-.55;function xS(){const n=new Ut,t=on(17+Ht,te-1);if(On("pier")){const p=ku("pier",{width:5.1,w:1.6,d:5.6,lift:Rf,shadow:!1});p.position.z=3.2,n.add(p)}else for(let p=0;p<3;p++){const v=fe("pirate/structure-platform-dock",{size:1.6});v.position.set(0,-.62,1.2+p*1.6),n.add(v)}const e=qn("pirate/barrel",{size:.4},.5,.5);e.position.set(.5,.15,1.5),n.add(e);const i=qn("pirate/crate",{size:.5},.5,.5);i.position.set(-.5,.15,2.4),n.add(i),n.position.set(t.x,0,t.z),n.userData.oid="ship",V.farm.add(n),V.pickables.push(n);const s=ee("ship",1,1,{shadow:!1}),r=s||fe("pirate/ship-small",{h:3.2});s||(r.rotation.y=Math.PI);const o=new I(t.x+2.1,-.5,t.z+(s?5:4));r.position.copy(o),r.userData.oid="ship",V.farm.add(r),V.pickables.push(r),dn.ship=r,dn.shipHome=o,dn.dock=n;const a=new Ut,c=on(te-1,9+Ht);if(On("pier")){const p=ku("pier",{width:4.2,w:4.35,d:1.5,lift:Rf,shadow:!1});p.userData.plane.scale.x=-1,a.add(p)}else for(let p=0;p<3;p++){const v=fe("pirate/structure-platform-dock-small",{size:1.5});v.rotation.y=Math.PI/2,v.position.set(-1.45+p*1.45,-.62,0),a.add(v)}const l=qn("pirate/barrel",{size:.4},.5,.5);l.position.set(-1.3,.15,.45),l.userData.plane||a.add(l);const u=qn("survival/bucket",{size:.3},.4,.4);u.position.set(.9,.15,-.4),a.add(u);const h=qn("pirate/tool-paddle",{h:1.2});h.position.set(1.6,.15,.3),h.userData.plane||(h.rotation.z=-.6),a.add(h),a.position.set(c.x+3.6,0,c.z),a.userData.oid="pier",V.farm.add(a),V.pickables.push(a),dn.pier=a;const d=Qs("maisie",Ze[0].model,{h:1.15});d.userData.isArt||Wo(d,"maisie"),d.userData.oid="maisie";const f=on(12+Ht,8+Ht);d.position.copy(f),d.userData.goal=f.clone(),d.userData.wait=2,V.farm.add(d),V.pickables.push(d),dn.maisie=d}function Sm(n,t,e){const i=dn.maisie;if(!i){e==null||e();return}const s=i.userData,r=cc(),o=i.position;let a=null,c=1e9;for(const[u,h]of[[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){const d=n+u,f=t+h;if(d<0||f<0||d>=te||f>=te||r.has(d+","+f)||!Qn(d,f))continue;const p=on(d,f),v=p.distanceTo(o)+(u&&h?.3:0);v<c&&(c=v,a=p)}const l=on(n,t);if(!a){const u=o.clone().sub(l);u.y=0,u.length()<.001&&u.set(0,0,1),a=l.clone().add(u.setLength(.75))}s.job={goal:a,face:l,onArrive:e}}function yS(n,t){const e=dn.maisie;if(!e)return;const i=on(n,t),s=e.userData;qi(e,i.x-e.position.x,i.z-e.position.z),s.wave=.3,s.wait=Math.max(s.wait||0,2.5)}function bS(n,t){var l,u;const e=dn.ship,i=_.ship.st==="away",s=dn.shipHome.clone();i&&(s.z+=30),e.position.lerp(s,Math.min(1,t*.6)),e.position.y=-.5+Math.sin(n*1.4)*.05,(e.userData.plane||e).rotation.z=Math.sin(n*1.1)*.03,e.visible=e.position.z<dn.shipHome.z+25;const r=dn.maisie,o=r.userData;(l=o.mixer)==null||l.update(t);const a=o.job;a&&o.goal.copy(a.goal);const c=o.goal.clone().sub(r.position);if(c.y=0,c.length()>.05)We(r,"walk"),c.setLength(Math.min(c.length(),t*(a?3:.9))),r.position.add(c),qi(r,c.x,c.z),o.isArt&&vi(r,n,"walk");else if(a)o.job=null,o.wait=2.5,qi(r,a.face.x-r.position.x,a.face.z-r.position.z),(u=a.onArrive)==null||u.call(a);else if(o.isArt&&vi(r,n,o.wave>0?"happy":"idle"),We(r,o.wave>0?"emote-yes":"idle"),o.wait-=t,o.wave=(o.wave||0)-t,o.wait<=0){for(let h=0;h<20;h++){const d=7+Ht+be(13),f=3+Ht+be(14);if(!_.objs.some(p=>{const[v,g]=pn(p);return d>=p.x&&d<p.x+v&&f>=p.z&&f<p.z+g})){o.goal.copy(on(d,f));break}}o.wait=3+Math.random()*5}}function Tn(n){const t=typeof n=="string"?{root:dn[n]}:he.get(n);t!=null&&t.root&&(t.root.userData.bounceT=performance.now())}function MS(n){const t=n.userData.bounceT;if(!t)return;const e=(performance.now()-t)/350;if(e>=1){n.scale.set(1,1,1),n.userData.bounceT=0;return}const i=Math.sin(e*Math.PI)*.12;n.scale.set(1+i*.5,1-i,1+i*.5)}function SS(){const n=[],t=e=>{var s;const i=Ac(e);return(s=i.refresh)==null||s.call(i,Lt()),i.root};for(const e of Object.keys(sn))n.push(["fac:"+e,{obj:()=>t({k:"fac",t:e,jobs:[]}),rotY:.2}]);for(const e of Object.keys(xs))n.push(["helper:"+e,{obj:()=>t({k:"helper",t:e,lvl:0,bag:{}}),rotY:.2}]);for(const e of Object.keys(fn))n.push(["pen:"+e,{obj:()=>t({k:"pen",t:e,animals:[{s:0,e:0},{s:0,e:0}]}),rotY:.2}]);n.push(["b:field",{obj:()=>t({k:"field",crop:"wheat",s:0,e:1}),rotY:.2}]);for(const e of Object.keys(Ri))n.push(["tree:"+e,{obj:()=>{const i=t({k:"tree",t:e,s:0,e:1});return i.children.filter(s=>s.isSprite).forEach(s=>s.visible=!1),i},rotY:.3}]);for(const[e,i]of Object.entries(Zn))i.proc&&n.push(["decor:"+e,{obj:()=>bm(i.proc),rotY:.3}]);return Ze.forEach(e=>n.push(["face:"+e.id,{model:e.model,rotY:.25,face:!0,extra:i=>Wo(i,e.id)}])),n}const wS={maisie:{kind:"straw",band:16743096},tom:{kind:"straw",band:9132587},lily:{kind:"sun",band:16751312,color:16773577},ben:{kind:"cap",color:3837920},rosa:{kind:"sun",band:10120447,color:15983280},sam:{kind:"captain",color:16777215}};function Wo(n,t){const e=wS[t];if(!e)return;const i=n.getObjectByName("head");if(!i)return;const s=new Ut,r=a=>new Pe({color:a,roughness:.85}),o=(a,c,l,u,h)=>{const d=new Nt(new ys(a,c,l,20),r(u));return d.position.y=h,d.castShadow=!0,s.add(d),d};if(e.kind==="straw")o(.3,.3,.025,15385694,0),o(.15,.17,.13,15385694,.07),o(.172,.172,.035,e.band,.025);else if(e.kind==="sun"){o(.34,.34,.02,e.color,0),o(.15,.17,.11,e.color,.06),o(.172,.172,.03,e.band,.02);const a=new Nt(new Vn(.05,10,8),r(16735631));a.position.set(.15,.05,.06),s.add(a)}else if(e.kind==="cap"){const a=new Nt(new Vn(.17,18,10,0,Math.PI*2,0,Math.PI/2),r(e.color));s.add(a);const c=o(.16,.16,.02,e.color,0);c.scale.set(1,1,.6),c.position.z=.13}else if(e.kind==="captain"){o(.17,.16,.1,e.color,.05),o(.172,.172,.03,2047866,.015);const a=o(.12,.12,.015,2047866,0);a.scale.z=.7,a.position.z=.12}s.position.set(0,.3,0),i.add(s)}const ls=new Map,ES=-.12;let Il=null,Pa=null,TS=null;const AS=new Jn({colorWrite:!1,depthWrite:!1});function CS(){if(!Pa){const e=new _c;for(let i=0;i<10;i++){const s=i%2?.15:.38,r=i*Math.PI/5;e[i?"lineTo":"moveTo"](Math.sin(r)*s,Math.cos(r)*s)}e.closePath(),Pa=new yc(e,{depth:.05,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2}),Pa.rotateX(-Math.PI/2)}const n=new Ut,t=new Nt(Pa,ym(16747084,{roughness:.6}));return t.castShadow=!0,t.rotation.x=.35,t.position.y=.06,n.add(t),n}function RS(){if(!Il){const e=new Th().load("/maisies-farm/items/shell.webp");e.colorSpace=Ie,Il=new gc({map:e,transparent:!0,alphaTest:.3})}const n=new Qa(Il);n.center.set(.5,0),n.scale.set(.8,.8,1);const t=new Ut;return t.add(n),t}function PS(n){if(n==="crab"){const e=Qs("crab","pets/animal-crab",{h:.42});return e.userData.isArt&&e.scale.setScalar(1.4),e}const t=ee(n==="shell"?"beachshell":"starfish",1,1,{shadow:!1});return t||(n==="shell"?RS():CS())}function IS(n){const t=on(n.x,n.z);return t.y=ES,t}function DS(n){const t=_.beach||[],e=new Set(t.map(i=>i.id));for(const[i,s]of ls)!e.has(i)&&!s.leaving&&(V.farm.remove(s.root),V.pickables.splice(V.pickables.indexOf(s.root),1),ls.delete(i));for(const i of t){if(ls.has(i.id)||!n[i.spot])continue;const s=new Ut,r=PS(i.t);s.add(r);const o=new Nt(TS||(TS=new Vn(.6,8,6)),AS);o.position.y=.3,s.add(o);const a=Ir();a.position.y=.9,s.add(a),s.position.copy(IS(n[i.spot])),s.userData.oid="beach:"+i.id,s.scale.setScalar(.01),V.farm.add(s),V.pickables.push(s),ls.set(i.id,{root:s,body:r,st:a,kind:i.t,ph:i.id*1.7,t0:performance.now()})}}const LS=n=>{var t;return(t=ls.get(n))==null?void 0:t.root};function NS(n){const t=ls.get(n);t&&(t.leaving=performance.now(),V.pickables.splice(V.pickables.indexOf(t.root),1))}function US(n){const t=performance.now();for(const[e,i]of ls){if(i.leaving){const r=(t-i.leaving)/380;if(r>=1){V.farm.remove(i.root),ls.delete(e);continue}i.root.scale.setScalar(1+r*.4-r*r*1.35),i.body.position.y=Math.sin(r*Math.PI)*.6;continue}const s=Math.min(1,(t-i.t0)/450);i.root.scale.setScalar(s<1?s*(1+Math.sin(s*Math.PI)*.25):1),i.st.position.y=.9+Math.sin(n*3+i.ph)*.08,i.kind==="crab"?(i.body.position.x=Math.sin(n*1.3+i.ph)*.18,i.body.userData.isArt&&vi(i.body,n,"walk",i.ph)):i.kind==="starfish"&&!i.body.userData.plane?i.body.rotation.y=Math.sin(n*.8+i.ph)*.25:i.body.position.y=Math.abs(Math.sin(n*2+i.ph))*.05}}const Ga=(n,[t,e])=>t+Math.floor(n()*(e-t+1)),kS=()=>Object.keys(Xt).filter(n=>Xt[n].mat===1);function OS(n=Math.random){const t=kS();return{energy:Ga(n,[3,8]),coins:Ga(n,[5,20]),mats:{[t[Math.min(t.length-1,Math.floor(n()*t.length))]]:Ga(n,[2,4])}}}function FS(n,t=Math.random){const e=Mn[n.t];if(!e||_.energy<1||!_.objs.includes(n))return null;n.hp==null&&(n.hp=e.hp),_.energy-=1,n.hp-=1;const i={},s=(c,l)=>{i[c]=(i[c]||0)+l,Xe(c,l)};for(const[c,l]of Object.entries(e.drop))s(c,Ga(t,l));for(const[c,l]of Object.entries(e.rare||{}))t()<l&&s(c,1);const r=n.hp<=0;let o=null,a=1;return r&&(_.objs.splice(_.objs.indexOf(n),1),a+=2,t()<e.chest&&(o=OS(t))),Rn(a),{drops:i,xp:a,done:r,chest:o}}function BS(n){const t=_.objs.indexOf(n);if(t<0||!n.chest)return null;const{energy:e=0,coins:i=0,mats:s={}}=n.chest;_.objs.splice(t,1),_.energy+=e,_.coins+=i;for(const[r,o]of Object.entries(s))Xe(r,o);return Qe("loot"),{energy:e,coins:i,mats:s}}function zS(n,t){let e=null,i=1/0;for(const s of _.objs){if(s.k!=="obstacle"||!Mn[s.t]||!Qn(s.x,s.z)||!n(s))continue;const r=t(s);r<i&&(i=r,e=s)}return e}const VS=n=>["wood","stone","palmleaf"].some(t=>{var e;return(e=Mn[n.t])==null?void 0:e.drop[t]}),Pf=180,HS=8;function GS(n,t=Math.random){if(_.regrowAt==null)return _.regrowAt=n+Pf*1e3,null;if(n<_.regrowAt||(_.regrowAt=n+Pf*1e3,_.objs.filter(f=>{var p;return f.k==="obstacle"&&((p=Mn[f.t])==null?void 0:p.regrow)&&Qn(f.x,f.z)}).length>=HS))return null;const i=cc(),s=new Set,r=new Set;for(const f of _.objs){if(f.k==="obstacle")continue;const[p,v]=pn(f);for(let g=-1;g<=p;g++)for(let m=-1;m<=v;m++)r.add(f.x+g+","+(f.z+m))}for(const f of _.visitors||[])s.add(f.x+","+f.z);s.add(17+Ht+","+(te-1)),s.add(te-1+","+(9+Ht));const o=[],a=[];for(let f=0;f<te;f++)for(let p=0;p<te;p++){const v=f+","+p;i.has(v)||s.has(v)||!Qn(f,p)||(r.has(v)?a:o).push([f,p])}const c=o.length?o:a;if(!c.length)return null;const[l,u]=c[Math.min(c.length-1,Math.floor(t()*c.length))],h=_o[Math.min(_o.length-1,Math.floor(t()*_o.length))],d={id:Wr(),k:"obstacle",t:h,x:l,z:u,r:Math.floor(t()*4)%4,hp:Mn[h].hp};return _.objs.push(d),d}const Ia=1.7,WS=14+Ht,$S=17+Ht,XS=9+Ht,qS=n=>n>WS-2&&n<$S+5,jS=n=>Math.abs(n-XS)<=2;let Dl=null;function wm(){if(Dl)return Dl;const n=[],t=i=>Math.min(te-1,Math.max(0,Math.round(i))),e=(i,s)=>n.push({x:i,z:s,zone:fi(t(i),t(s))});for(let i=1;i<te-1;i+=2)qS(i)||e(i,te-1+Ia),jS(i)||e(te-1+Ia,i),e(i,-Ia),e(-Ia,i);return Dl=n}function YS(n,t=Math.random){const e=_.beach||(_.beach=[]);if(_.beachAt==null)return _.beachAt=n+Lc*1e3,null;if(n<_.beachAt)return null;const i=wm(),s=new Set(e.map(u=>u.spot)),r=[];if(i.forEach((u,h)=>{var d;!s.has(h)&&((d=_.zones)!=null&&d[u.zone])&&r.push(h)}),e.length>=ag||!r.length)return _.beachAt=n+Lc*1e3,null;_.beachAt+=Lc*1e3;const o=t(),a=o<.15?"crab":o<.5?"shell":"starfish",c=r[Math.min(r.length-1,Math.floor(t()*r.length))],l={id:_.beachId=(_.beachId||0)+1,t:a,spot:c};return e.push(l),l}function KS(n){var r;const t=_.beach||[],e=t.findIndex(o=>o.id===n);if(e<0)return 0;const[i]=t.splice(e,1),s=((r=og[i.t])==null?void 0:r.energy)||0;return _.energy+=s,Qe("beach"),s}let Fn=null,as=null,ko=null;function Wn(){if(!Fn)try{Fn=new(window.AudioContext||window.webkitAudioContext)}catch{return}Fn.state==="suspended"&&Fn.resume(),_.music&&!ko&&Em()}function Ge(n,t,{type:e="sine",vol:i=.12,at:s=0,to:r=null,dest:o=null}={}){const a=Fn.currentTime+s,c=Fn.createOscillator(),l=Fn.createGain();c.type=e,c.frequency.setValueAtTime(n,a),r&&c.frequency.exponentialRampToValueAtTime(r,a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l),l.connect(o||Fn.destination),c.start(a),c.stop(a+t+.05)}function J(n){if(!(!Fn||!_.sound))try{switch(n){case"tap":Ge(700,.06,{type:"triangle",vol:.06});break;case"plant":Ge(380,.08,{type:"triangle"}),Ge(520,.1,{type:"triangle",at:.06});break;case"harvest":Ge(520,.1,{to:900,type:"triangle"});break;case"coin":Ge(988,.08,{type:"square",vol:.05}),Ge(1319,.2,{type:"square",vol:.05,at:.07});break;case"collect":[660,880].forEach((t,e)=>Ge(t,.1,{type:"triangle",at:e*.06}));break;case"build":[262,330,392].forEach((t,e)=>Ge(t,.12,{type:"square",vol:.05,at:e*.07}));break;case"level":[523,659,784,1047,1319].forEach((t,e)=>Ge(t,.25,{type:"triangle",vol:.14,at:e*.1}));break;case"no":Ge(240,.18,{to:170,vol:.08});break;case"chop":Ge(160,.1,{type:"square",vol:.06}),Ge(120,.12,{type:"square",vol:.05,at:.12});break;case"ship":Ge(196,.5,{type:"sawtooth",vol:.05}),Ge(147,.6,{type:"sawtooth",vol:.05,at:.45});break;case"moo":Ge(180,.35,{to:140,type:"sawtooth",vol:.04});break;case"cluck":Ge(900,.05,{type:"square",vol:.03}),Ge(1100,.05,{type:"square",vol:.03,at:.07});break}}catch{}}const If=[67,72,76,74,72,67,69,72,71,67,64,67,72,76,79,77,76,72,74,76,72,0,0,0],Df=[48,48,53,53,55,55,48,48];function Em(){if(!Fn||ko)return;as=Fn.createGain(),as.gain.value=.35,as.connect(Fn.destination);let n=0;const t=.32,e=i=>440*Math.pow(2,(i-69)/12);ko=setInterval(()=>{if(!_.music||Fn.state!=="running")return;const i=If[n%If.length];i&&Ge(e(i),t*.9,{type:"triangle",vol:.05,dest:as}),n%3===0&&Ge(e(Df[Math.floor(n/3)%Df.length]),t*2.5,{type:"sine",vol:.06,dest:as}),n++},t*1e3)}function JS(){clearInterval(ko),ko=null,as==null||as.disconnect()}const ot=n=>document.querySelector(n),Ee=n=>`<img src="${Le[n]||""}" alt="">`,tn='<span class="ico coin"></span>',An='<span class="ico gem"></span>',to='<span class="ico bolt"></span>',eo='<span class="xp"></span>',Re=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function yi(n){const t=Math.max(0,Math.ceil(n/1e3));if(t<60)return t+" giây";const e=Math.floor(t/60),i=t%60;return e<60?i?`${e} phút ${i} giây`:`${e} phút`:e<1440?`${Math.floor(e/60)} giờ ${e%60} phút`:`${Math.floor(e/1440)} ngày ${Math.floor(e%1440/60)} giờ`}const Lf=n=>n>=1e4?(n/1e3).toFixed(n>=1e5?0:1)+"k":String(n);let Nf;function _t(n){const t=ot("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(Nf),Nf=setTimeout(()=>t.classList.remove("show"),2400)}function an(n,t,e){const i=document.createElement("div");i.className="plus",i.textContent=e,i.style.left=n+"px",i.style.top=t+"px",ot("#fx").appendChild(i),setTimeout(()=>i.remove(),1e3)}let po=null;function Nh(n){const t=Object.keys(n||{}).filter(i=>n[i]>0);if(!t.length)return;if(!po){const i=document.createElement("div");i.className="gain",ot("#fx").appendChild(i),po={el:i,sum:{}}}const e=po;for(const i of t)e.sum[i]=(e.sum[i]||0)+n[i];e.el.innerHTML=Object.entries(e.sum).map(([i,s])=>{var r;return`<span>+${s} ${Ee(i)}${Re(((r=Xt[i])==null?void 0:r.n)||i)}</span>`}).join(" "),e.el.classList.remove("bump"),e.el.offsetWidth,e.el.classList.add("bump"),clearTimeout(e.t),e.t=setTimeout(()=>{po===e&&(po=null),e.el.classList.add("out"),setTimeout(()=>e.el.remove(),400)},1200)}function er(n,t,e,i,s=0){const r=typeof e=="string"?ot(e):e;if(!r)return;const o=r.getBoundingClientRect(),a=o.left+o.width/2,c=o.top+o.height/2,l=document.createElement("div");l.className="fly",l.innerHTML=i,l.style.transform=`translate(${n}px,${t}px)`,ot("#fx").appendChild(l);const u=(n+a)/2+(Math.random()-.5)*80,h=Math.min(t,c)-80,d=l.animate([{transform:`translate(${n}px,${t}px) scale(.6)`},{transform:`translate(${u}px,${h}px) scale(1.15)`,offset:.4},{transform:`translate(${a}px,${c}px) scale(.7)`}],{duration:750,delay:s,easing:"cubic-bezier(.5,0,.5,1)",fill:"backwards"});d.onfinish=()=>{l.remove(),r.animate([{transform:"scale(1.18)"},{transform:"scale(1)"}],{duration:200})}}function Di(n,t,e,i=1){for(let s=0;s<Math.min(i,4);s++)er(n+s*8,t,"#btnBarn",Ee(e),s*90)}const Cn=(n,t,e)=>{for(let i=0;i<Math.min(5,Math.ceil(e/10));i++)er(n,t,"#coinPill",tn,i*80)},gs=(n,t)=>er(n,t,"#gemPill",An),nr=(n,t)=>er(n,t,"#lvlBox",eo);function Yi(n=50){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=["#ff6b5b","#ffd23f","#3aa7e8","#62c43f","#ff8ad8","#a06cff"];for(let e=0;e<n;e++){const i=document.createElement("span");i.className="conf",i.style.left=Math.random()*100+"vw",i.style.background=t[e%t.length],i.style.animationDuration=1.6+Math.random()*1.6+"s",i.style.animationDelay=Math.random()*.4+"s",i.style.borderRadius=Math.random()<.5?"50%":"2px",ot("#fx").appendChild(i),setTimeout(()=>i.remove(),4e3)}}let ie=null;function Ki(n,t,e,i={}){ie={type:n,...i},ot("#mTitle").textContent=t,ot("#mBody").innerHTML=e,ot("#modal").hidden=!1}function ZS(n){const t=ot("#mBody"),e=t.scrollTop;t.innerHTML=n,t.scrollTop=e}function nn(){ie=null,ot("#modal").hidden=!0}function Te(){ot("#lv").textContent=_.level;const n=Fl(_.level);ot("#xpfill").style.width=_.xp/n*100+"%",ot("#xptxt").textContent=`${_.xp}/${n}`,ot("#coins").textContent=Lf(_.coins),ot("#gems").textContent=Lf(_.gems);const t=Ai(_.level);ot("#energy").textContent=Tg(_.energy,t),ot("#efill").style.width=Math.min(100,_.energy/t*100)+"%",ot("#energyPill").classList.toggle("low",_.energy<1);const e=Gr();if(ot("#questBtn").hidden=!e,e){ot("#questFace").src=Le["face:"+e.who]||"";const i=_.qprog>=e.n,s=ot("#questBadge");s.textContent=i?"✓":"!",s.classList.toggle("ok",i)}ot("#btnGift").hidden=_.lastDaily===new Date().toDateString()}function QS(){return _.energy>=Ai(_.level)?"Đầy năng lượng":`+1 sau ${yi(Ag())}`}function tw(n){let t=n*9301+49297;return()=>(t=t*16807%2147483647)/2147483647}function Tm(n){const t=tw(n.seed),e=hg[n.theme],i=[],s=Math.floor(n.w/2),r=(u,h)=>h*n.w+u;for(let u=0;u<n.h;u++)for(let h=0;h<n.w;h++){const d=(h-(n.w-1)/2)/(n.w/2),f=(u-(n.h-1)/2)/(n.h/2),p=d*d+f*f<1+t()*.28;i.push({x:h,z:u,k:p?"ob":"water"})}[[s,n.h-1],[s,n.h-2],[s-1,n.h-2],[s+1,n.h-2]].forEach(([u,h])=>{i[r(u,h)].k="open"});const a=i[r(s,1)];a.k="goal",[[s,0],[s-1,1],[s+1,1],[s,2]].forEach(([u,h])=>{i[r(u,h)].k==="water"&&(i[r(u,h)].k="ob")});const c=i.filter(u=>u.k==="ob"&&u.z>2&&u.z<n.h-3);for(let u=0;u<n.chests&&c.length;u++)c.splice(Math.floor(t()*c.length),1)[0].k="chest";const l=e.obstacles.reduce((u,h)=>u+h[3],0);return i.forEach(u=>{if(u.k!=="ob")return;let h=t()*l,d=0;for(;h>e.obstacles[d][3];)h-=e.obstacles[d][3],d++;u.t=d,u.e=e.obstacles[d][2],u.rot=t()*6.28;const f=t();u.loot=f<.35?{coins:3+Math.floor(t()*8)}:f<.55?{item:"crop"}:f<.67?{energy:3}:f<.71?{gems:1}:null}),{A:n,T:e,cells:i,idx:r,cx:s}}const Cc=n=>{var t,e;return(t=_.adv||(_.adv={}))[e=n.id]||(t[e]={open:[],chests:[],done:!1,runs:0})};function ew(n){const t=Tm(n),e=Cc(n),i=t.cells.filter(s=>s.k==="ob").length;return Math.round(Math.min(1,e.open.length/i)*100)}let $t=null;const ks=(n,t,e)=>new I(t-n.A.w/2+.5,0,e-n.A.h/2+.5);function Rc(n){return n.k==="open"||$t.p.open.includes($t.map.idx(n.x,n.z))||n.k==="chest"&&$t.p.chests.includes($t.map.idx(n.x,n.z))}function Bu(n){const{map:t}=$t;return[[1,0],[-1,0],[0,1],[0,-1]].some(([e,i])=>{const s=n.x+e,r=n.z+i;if(s<0||r<0||s>=t.A.w||r>=t.A.h)return!1;const o=t.cells[t.idx(s,r)];return o.k!=="water"&&Rc(o)})}function nw(n){const t=Tm(n),e=Cc(n),i=t.T,s=new Ut;$t={A:n,map:t,p:e,group:s,views:new Map,rings:[],pick:[]};const r=No(Math.max(n.w,n.h)+2,2.5,.8,new Pe({color:i.edge,roughness:1}),-.15);r.scale.set((n.w+2)/(Math.max(n.w,n.h)+2),1,(n.h+2)/(Math.max(n.w,n.h)+2)),s.add(r);const o=new Nt(new Go(Lo(Math.max(n.w,n.h)+7,5),10),new Pe({color:9168620,transparent:!0,opacity:.55}));o.rotation.x=-Math.PI/2,o.position.y=-.5,o.scale.set((n.w+7)/(Math.max(n.w,n.h)+7),(n.h+7)/(Math.max(n.w,n.h)+7),1),s.add(o);const a=new Ve(1,.3,1),c=new Pe({color:i.ground,roughness:1}),l=new Pe({color:i.ground2,roughness:1});$t.tiles=new Map,t.cells.forEach((p,v)=>{if(p.k==="water")return;const g=new Nt(a,(p.x+p.z)%2?c:l);g.position.copy(ks(t,p.x,p.z)),g.position.y=-.15,g.receiveShadow=!0,s.add(g),$t.tiles.set(v,g)});const u=qn("pirate/boat-row-small",{size:1.8});u.position.copy(ks(t,t.cx,n.h)).add(new I(0,-.45,.8)),u.userData.plane||(u.rotation.y=Math.PI/2),u.userData.oid="a:boat",s.add(u),$t.pick.push(u),$t.boat=u;const h=new wh(.36,.5,28),d=new Jn({color:16769126,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1});t.cells.forEach((p,v)=>{if(p.k==="water"||p.k==="open"||Rc(p))return;let g;if(p.k==="ob"){const[S,M]=i.obstacles[p.t];g=qn(S,M),g.userData.plane||(g.rotation.y=p.rot)}else if(p.k==="chest")g=qn("pirate/chest",{size:.7}),g.userData.plane||(g.rotation.y=-.6);else if(p.k==="goal"){g=new Ut;const S=new Nt(new ys(.48,.52,.12,24),new Pe({color:16765503}));S.position.y=.06,g.add(S);const M=qn(n.goal.model,n.goal.pet?{h:.75}:{size:.8},.6,.6);M.position.y=.12,g.add(M),g.userData.inner=M,e.done&&(g.visible=!1)}g.position.copy(ks(t,p.x,p.z)),g.userData.oid="a:"+v,s.add(g),$t.pick.push(g),$t.views.set(v,g);const m=new Nt(h,d);m.rotation.x=-Math.PI/2,m.position.copy(g.position),m.position.y=.04,m.visible=!1,m.renderOrder=5,s.add(m),$t.rings.push([v,m])});const f=Qs("maisie","chars/character-female-a",{h:1.15});return f.userData.isArt||Wo(f,"maisie"),f.position.copy(ks(t,t.cx,n.h-1)),f.userData.goal=f.position.clone(),f.userData.oid="a:maisie",f.userData.isArt||(f.rotation.y=Math.PI),s.add(f),$t.maisie=f,Vu(),s}const Ll=new Map;function zu(n){if(!Ll.has(n)){const t=n.clone(),e=n.isMeshBasicMaterial?.3:.55;t.color=n.color.clone().multiplyScalar(e).lerp(new Qt(4874872),.3),Ll.set(n,t)}return Ll.get(n)}function iw(n,t){n.userData.dim!==t&&(n.userData.dim=t,n.traverse(e=>{var i;e.isMesh&&((i=e.userData).baseMat||(i.baseMat=e.material),e.material=t?Array.isArray(e.userData.baseMat)?e.userData.baseMat.map(zu):zu(e.userData.baseMat):e.userData.baseMat)}))}function Vu(){var n;for(const[t,e]of $t.rings){const i=$t.map.cells[t],s=$t.views.get(t),r=s&&s.visible&&Bu(i);e.visible=!!r,s&&(iw(s,!r&&i.k!=="goal"),s.userData.reach=!!r)}for(const[t,e]of $t.tiles){const i=$t.map.cells[t],s=Rc(i)||Bu(i)||i.k==="goal";(n=e.userData).baseMat||(n.baseMat=e.material),e.material=s?e.userData.baseMat:zu(e.userData.baseMat)}}let Wa=null,Fs={};function sw(n,t){Fs=t;const e=ja.find(s=>s.id===n),i=Cc(e);i.done&&(Object.assign(i,{open:[],chests:[],done:!1}),i.runs++),nn(),Wa={target:V.target.clone(),zoom:V.zoom,bounds:V.bounds},V.farm.visible=!1,V.adv=nw(e),V.scene.add(V.adv),V.advPick=$t.pick,V.mode="adv",V.bounds={x0:-e.w/2,x1:e.w/2,z0:-e.h/2,z1:e.h/2+2},V.zoom=1.25,Zs(ks($t.map,$t.map.cx,e.h-3)),document.body.classList.add("in-adv"),kh(),J("ship"),_t(e.intro)}function Uh(){var n;V.mode==="adv"&&(V.scene.remove(V.adv),V.adv.traverse(t=>{var e,i;t.geometry&&t.geometry!==void 0&&((i=(e=t.geometry).dispose)==null||i.call(e))}),V.adv=null,$t=null,V.farm.visible=!0,V.mode="farm",V.bounds=Wa.bounds,V.zoom=Wa.zoom,V.target.copy(Wa.target),Js(),document.body.classList.remove("in-adv"),ot("#advHud").hidden=!0,(n=Fs.onLeave)==null||n.call(Fs),se())}function kh(){const{A:n,p:t}=$t,e=$t.map.cells.filter(s=>s.k==="chest").length,i=ot("#advHud");i.hidden=!1,i.innerHTML=`<div class="advtitle"><b>${Re(n.n)}</b><span>Rương ${t.chests.length}/${e} · ${t.done?"Đã tới đích!":Re(n.goal.n)}</span></div>
    <button class="rbtn home" id="advHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>`,ot("#advHome").onclick=()=>{J("tap"),Uh()}}function rw(n,t){var o;if(!$t)return;const e=Hs(n,t);if(e==="a:boat"){Uh();return}if(e==="a:maisie"){We($t.maisie,"emote-yes"),$t.maisie.userData.busy=1,J("collect");return}if(typeof e!="string"||!e.startsWith("a:"))return;const i=+e.slice(2),s=$t.map.cells[i],r=$t.views.get(i);if(!(!r||!r.visible)){if(!Bu(s)){_t("Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng."),J("no"),cw(r);return}if(s.k==="ob"){if(_.energy<s.e){(o=Fs.openEnergy)==null||o.call(Fs);return}_.energy-=s.e,an(n,t-30,`-${s.e}⚡`),Nl(s),J("chop"),Uf(r,()=>{$t.p.open.push(i),ow(s.loot,n,t),Rn(1),Vu(),Te(),se()}),Qe("clear")}else if(s.k==="chest"){Nl(s),r.userData.mixer&&We(r,"open"),J("collect"),$t.p.chests.push(i),_i("act","chest");const c=20+be(30),l=Math.random();_.coins+=c,Cn(n,t,c),l<.4?(_.gems+=1+be(2),gs(n,t)):l<.7&&(_.energy+=5,an(n,t-60,"+5⚡")),setTimeout(()=>Uf(r,()=>{Vu()}),900),kh(),Te(),se()}else s.k==="goal"&&(Nl(s),aw(r))}}function ow(n,t,e){if(n&&(n.coins&&(_.coins+=n.coins,Cn(t,e,n.coins)),n.gems&&(_.gems+=n.gems,gs(t,e)),n.energy&&(_.energy+=n.energy,an(t,e-55,`+${n.energy}⚡`)),n.item&&js()>0)){const i=Object.keys(Fe).filter(r=>Fe[r].lv<=_.level),s=i[be(i.length)];Xe(s,1),Di(t,e,s,1)}}function aw(n,t,e){var l;const{A:i,p:s}=$t;if(s.done)return;s.done=!0;const r=s.runs>0?.5:1,o={coins:Math.round(i.reward.coins*r),gems:Math.max(1,Math.round(i.reward.gems*r)),xp:Math.round(i.reward.xp*r)};_.coins+=o.coins,_.gems+=o.gems;const a=n.userData.inner;a!=null&&a.userData.mixer?We(a,"dance"):(l=a==null?void 0:a.userData.clips)!=null&&l.open&&We(a,"open");let c="";i.goal.pet&&s.runs===0&&((_.pendingDecor||(_.pendingDecor=[])).push(i.goal.pet),c=`<p class="hint">${Re(Zn[i.goal.pet].n)} sẽ về sống ở nông trại của bạn!</p>`),Yi(),J("level"),setTimeout(()=>{Rn(o.xp),Ki("advdone","Hoàn thành!",`<div class="celebrate"><div class="talk"><img src="${Le["face:maisie"]}" alt=""><div class="say">Tuyệt vời! Bạn đã tới được <b>${Re(i.goal.n)}</b> ở ${Re(i.n)}!</div></div>
      <div class="reward" style="font-size:22px"><span>${tn}+${o.coins}</span><span>${An}+${o.gems}</span><span>${eo}+${o.xp}</span></div>${c}
      <button class="btn wide orange" id="advBack">Về nông trại</button></div>`),ot("#advBack").onclick=()=>{nn(),Uh()},kh(),Te(),se()},1200)}function cw(n){n.userData.bumpT=performance.now()}function Uf(n,t){n.userData.vanishing=!0;const e=performance.now(),i=1,s=()=>{const r=(performance.now()-e)/420;r<1?(n.scale.setScalar(i*(1-r)),n.userData.plane||(n.rotation.y+=.25),requestAnimationFrame(s)):(n.visible=!1,t==null||t())};setTimeout(s,250)}function Nl(n){const{map:t}=$t;let e=null,i=1e9;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=n.x+s,a=n.z+r;if(o<0||a<0||o>=t.A.w||a>=t.A.h)continue;const c=t.cells[t.idx(o,a)];if(c.k==="water"||!Rc(c))continue;const l=ks(t,o,a),u=l.distanceTo($t.maisie.position);u<i&&(i=u,e=l)}e&&($t.maisie.userData.goal.copy(e),$t.maisie.userData.face=ks(t,n.x,n.z))}function lw(n,t){var o,a,c,l,u;if(!$t)return;const e=$t.maisie,i=e.userData;(o=i.mixer)==null||o.update(t);const s=i.goal.clone().sub(e.position);if(s.y=0,s.length()>.05)We(e,"walk"),s.setLength(Math.min(s.length(),t*2.2)),e.position.add(s),qi(e,s.x,s.z),i.acted=!1;else if(i.face&&!i.acted){const h=i.face.clone().sub(e.position);qi(e,h.x,h.z),We(e,"interact-right"),i.acted=!0,i.idleAt=n+.8}else i.busy>0?i.busy-=t:(!i.idleAt||n>i.idleAt)&&We(e,"idle");for(const h of $t.views.values()){(a=h.userData.mixer)==null||a.update(t),(l=(c=h.userData.inner)==null?void 0:c.userData.mixer)==null||l.update(t),(u=h.userData.inner)!=null&&u.userData.mixer&&!h.userData.inner.userData.cur&&We(h.userData.inner,"idle");const d=h.userData.bumpT;if(d){const f=(performance.now()-d)/300;h.position.x+=Math.sin(f*30)*.01*(1-f),f>1&&(h.userData.bumpT=0)}}const r=.9+Math.sin(n*4)*.1;for(const[h,d]of $t.rings)if(d.visible){d.scale.setScalar(r);const f=$t.views.get(h);if(f&&!f.userData.vanishing){const p=1+Math.max(0,Math.sin(n*4+h))*.06;f.scale.set(p,2-p,p)}}$t.boat.position.y=-.45+Math.sin(n*1.5)*.04}function uw(n){const t=ja.map(e=>{const i=_.level<e.lv,s=Cc(e),r=ew(e);return`<div class="card adv ${i?"lock":""}">${i?`<span class="lk">Cấp ${e.lv}</span>`:""}
      <img src="${Le[e.goal.pet?"decor:"+e.goal.pet:"decor:chest"]}" alt="">
      <b>${Re(e.n)}</b><small>${s.done?"Đã hoàn thành ✓":`Đã khám phá ${r}%`}</small>
      <button class="btn small ${i?"gray":"blue"}" data-adv="${e.id}">${i?"Chưa mở":s.done?"Chơi lại":r?"Đi tiếp":"Ra khơi"}</button></div>`}).join("");Ki("adventures","Phiêu lưu",`<p class="hint">Đi thuyền tới các hòn đảo, dọn đường bằng năng lượng <span class="ico bolt sm"></span> để tìm kho báu và giải cứu các bạn thú!</p><div class="grid">${t}</div>`),document.querySelectorAll("[data-adv]").forEach(e=>e.onclick=()=>{const i=ja.find(s=>s.id===e.dataset.adv);if(_.level<i.lv){_t(`Mở ở cấp ${i.lv}`),J("no");return}sw(i.id,n)})}const vs=new Map,Am=()=>on(17+Ht,te-1),hw={crop:["Bác đang nấu cơm, cháu bán cho bác {n} {item} nhé?","Nhà cô hết {item} rồi. Cháu có {n} {item} không?"],food:["Cháu ơi, bác thèm {item} quá! Cho bác mua {n} phần nhé?","Hôm nay sinh nhật con chú, chú cần {n} {item}!"],other:["Cháu có {n} {item} không? Bác trả giá cao lắm!","Mình đi ngang qua, mua {n} {item} được không bạn?"]};function dw(){for(let n=0;n<40;n++){const t=7+Ht+be(12),e=5+Ht+be(11);if(!(_.objs.some(s=>{const[r,o]=pn(s);return t>=s.x&&t<s.x+r&&e>=s.z&&e<s.z+o})||_.visitors.some(s=>s.x===t&&s.z===e)))return[t,e]}return[12+Ht,8+Ht]}function fw(){const n=new Set(_.visitors.map(h=>h.who)),t=Ze.slice(1).filter(h=>!n.has(h.id));if(!t.length)return;const e=wn(t).id,i=wn(ih()),s=Fe[i]?2+be(3):1+be(2),r=Xt[i].v*s,[o,a]=dw(),c=Fe[i]?"crop":Xt[i].v>=10?"food":"other",l=wn(hw[c]).replaceAll("{n}",s).replaceAll("{item}",Xt[i].n.toLowerCase()),u={id:_.visitId=(_.visitId||0)+1,who:e,item:i,n:s,x:o,z:a,text:l,coins:Math.round(r*2)+5,xp:Math.max(2,Math.round(r/2)),gems:Math.random()<.15?1:0,arrive:!0};_.visitors.push(u),Cm(u)}function Cm(n){const t=Ze.find(s=>s.id===n.who),e=Qs(n.who,t.model,{h:1.15});e.userData.isArt||Wo(e,n.who),e.userData.oid="v:"+n.id;const i=on(n.x,n.z);e.position.copy(n.arrive?Am():i),e.userData.goal=i.clone(),V.farm.add(e),V.pickables.push(e),vs.set(n.id,e)}function pw(n){const t=vs.get(n);t&&(V.farm.remove(t),V.pickables.splice(V.pickables.indexOf(t),1),vs.delete(n))}function mw(){_.visitors||(_.visitors=[]),_.visitors.forEach(n=>{n.arrive=!1,Cm(n)}),_.visitNext||(_.visitNext=Lt()+2e4)}function gw(){const n=Lt();_.level>=2&&_.visitors.length<2&&n>=_.visitNext&&(fw(),_.visitNext=n+45e3+be(45e3))}function vw(n,t){var e;for(const[i,s]of vs){const r=s.userData;(e=r.mixer)==null||e.update(t);const o=r.goal.clone().sub(s.position);o.y=0,o.length()>.05?(We(s,"walk"),o.setLength(Math.min(o.length(),t*1.1)),s.position.add(o),qi(s,o.x,o.z),r.isArt&&vi(s,n,"walk",i)):r.leaving?pw(i):(We(s,r.happy>0?"emote-yes":"idle"),r.happy=(r.happy||0)-t,r.isArt?vi(s,n,r.happy>0?"happy":"idle",i):s.rotation.y+=(.6-s.rotation.y)*t*2)}}function _w(){return _.visitors.filter(n=>vs.has(n.id)&&!vs.get(n.id).userData.leaving).map(n=>({oid:"v:"+n.id,y:1.35,icon:n.item,n:n.n,cls:zt(n.item)>=n.n?"":"hungry"}))}const xw=n=>vs.get(+String(n).slice(2));function kf(n,t){const e=vs.get(n.id);_.visitors.splice(_.visitors.indexOf(n),1),e&&(e.userData.happy=t?1.2:0,setTimeout(()=>{e.userData.leaving=!0,e.userData.goal.copy(Am())},t?1200:200)),se()}function yw(n){const t=_.visitors.find(s=>"v:"+s.id===n);if(!t)return;const e=Ze.find(s=>s.id===t.who),i=zt(t.item)>=t.n;J("tap"),Ki("visitor",e.n,`<div class="talk"><img src="${Le["face:"+t.who]}" alt=""><div class="say">${Re(t.text)}</div></div>
    <div class="need" style="margin:14px 0 8px"><span class="${i?"ok":"lack"}">${Ee(t.item)}${Math.min(zt(t.item),t.n)}/${t.n}</span></div>
    <div class="reward" style="font-size:18px"><span>Trả:</span><span>${tn}${t.coins}</span><span>${eo}${t.xp}</span>${t.gems?`<span>${An}${t.gems}</span>`:""}</div>
    <div class="row" style="justify-content:center;margin-top:14px;gap:10px">
      <button class="btn gray" id="vNo">Hết hàng rồi</button>
      <button class="btn ${i?"orange":"gray"}" id="vYes">Bán cho ${Re(e.n.split(" ").pop())}</button></div>`),ot("#vNo").onclick=()=>{nn(),kf(t,!1),_t(`${e.n} sẽ quay lại sau nhé!`)},ot("#vYes").onclick=s=>{if(zt(t.item)<t.n){_t(`Cần thêm ${t.n-zt(t.item)} ${Xt[t.item].n.toLowerCase()}`),J("no");return}Xe(t.item,-t.n),_.coins+=t.coins,_.gems+=t.gems,Rn(t.xp),Cn(s.clientX,s.clientY,t.coins),nr(s.clientX,s.clientY),t.gems&&gs(s.clientX,s.clientY),J("coin"),nn(),kf(t,!0),Qe("deliver"),_i("act","visitor"),Te()}}const bw=6,$o=()=>_.objs.find(n=>n.k==="market");function Mw(n){if($o())return;const t=lc(2,2,6+Ht,12+Ht);if(!t)return;const e={id:Wr(),k:"market",t:"market",x:t[0],z:t[1],r:0,slots:[null,null,null,null],cap:4};_.objs.push(e),n==null||n(e)}function Sw(){const n=$o();if(!n)return;const t=Lt();let e=!1;for(const i of n.slots)i&&!i.sold&&t>=i.buyAt&&(i.sold=!0,i.buyer=wn(Ze.slice(1)).id,e=!0);e&&(ie==null?void 0:ie.type)==="market"&&Ls<0&&!ue&&_n(n)}const Of=()=>{var n;return(((n=$o())==null?void 0:n.slots)||[]).filter(t=>t&&t.sold).length};function Hu(n,t){const e=$o();let i=0;return e.slots=e.slots.map(s=>s&&s.sold?(i+=s.price,null):s),i?(_.coins+=i,Cn(n,t,i),J("coin"),_i("act","deliver"),se(),Te(),!0):!1}let Ls=-1,ue=null;function ww(){const n=$o();n&&(Ls=-1,ue=null,_n(n))}function _n(n){const t=Lt();let e;if(ue){const o=Xt[ue.item],a=Math.min(10,zt(ue.item));e=`<div class="celebrate"><img src="${Le[ue.item]}" alt="" style="width:90px;height:90px"><b style="font-size:20px">${Re(o.n)}</b>
      <div class="row" style="gap:12px"><button class="btn small blue" id="qm">−</button><b style="font-size:22px;min-width:60px">×${ue.n}</b><button class="btn small blue" id="qp">+</button></div>
      <div class="row" style="gap:12px"><button class="btn small" id="pm">−</button><b style="font-size:22px;min-width:90px">${tn}${ue.price}</b><button class="btn small" id="pp">+</button></div>
      <p class="hint">Giá vừa phải thì khách tới mua nhanh hơn.</p>
      <div class="row" style="gap:10px"><button class="btn gray" id="dBack">Quay lại</button><button class="btn orange" id="dOk">Bày lên sạp</button></div></div>`,ot("#mBody").innerHTML=e;const c=()=>Math.round(o.v*ue.n*1.4);ot("#qm").onclick=()=>{ue.n=Math.max(1,ue.n-1),ue.price=c(),_n(n)},ot("#qp").onclick=()=>{ue.n=Math.min(a,ue.n+1),ue.price=c(),_n(n)},ot("#pm").onclick=()=>{ue.price=Math.max(1,ue.price-Math.max(1,Math.round(o.v/2))),_n(n)},ot("#pp").onclick=()=>{ue.price+=Math.max(1,Math.round(o.v/2)),_n(n)},ot("#dBack").onclick=()=>{ue=null,_n(n)},ot("#dOk").onclick=()=>{if(zt(ue.item)<ue.n){_t("Kho không đủ hàng");return}Xe(ue.item,-ue.n);const l=ue.price/(o.v*ue.n);n.slots[Ls]={item:ue.item,n:ue.n,price:ue.price,buyAt:t+(20+be(40))*1e3*Math.max(.6,l),sold:!1},J("build"),ue=null,Ls=-1,se(),Te(),_n(n)};return}if(Ls>=0){const o=Object.keys(Xt).filter(a=>zt(a)>0);e=o.length?`<p class="hint">Chọn món muốn bán</p><div class="inv">${o.map(a=>`<button class="it" data-mi="${a}">${Ee(a)}<span class="q">${zt(a)}</span><small>${Re(Xt[a].n)}</small></button>`).join("")}</div>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn gray" id="mBack">Quay lại</button></div>`:'<p class="hint">Kho trống, chưa có gì để bán.</p>',ot("#mBody").innerHTML=e,document.querySelectorAll("[data-mi]").forEach(a=>a.onclick=()=>{const c=a.dataset.mi;ue={item:c,n:Math.min(zt(c),Ew(c)?5:1),price:0},ue.price=Math.round(Xt[c].v*ue.n*1.4),_n(n)}),ot("#mBack")&&(ot("#mBack").onclick=()=>{Ls=-1,_n(n)});return}const i=n.slots.map((o,a)=>o?o.sold?`<button class="slot mk done" data-mc="${a}"><img src="${Le["face:"+o.buyer]}" alt=""><span class="t">Đã bán ${tn.replace("ico coin","ico coin sm")}${o.price}</span></button>`:`<div class="slot mk"><img src="${Le[o.item]}" alt=""><span class="t">×${o.n} · ${o.price} xu</span><span class="bar"><i data-s="${o.buyAt-6e4}" data-e="${o.buyAt}"></i></span><button class="mkx" data-mx="${a}" aria-label="Cất lại vào kho">✕</button></div>`:`<button class="slot mk" data-ms="${a}"><span style="font-size:30px;color:var(--ink-soft)">＋</span><span class="t">Bày hàng</span></button>`).join(""),s=n.cap<bw?`<button class="slot buy" id="mMore">Thêm sạp<span>${An}${(n.cap-3)*4}</span></button>`:"",r=n.slots.filter(o=>o&&o.sold).length;Ki("market","Quầy chợ",`<p class="hint">Bày nông sản lên sạp, khách đi ngang sẽ mua. Chạm vào sạp đã bán để thu xu.</p>
    <div class="queue">${i}${s}</div>
    ${r?`<button class="btn wide orange" id="mCollect" style="margin-top:14px">Thu ${r} sạp đã bán</button>`:""}`),document.querySelectorAll("[data-ms]").forEach(o=>o.onclick=()=>{Ls=+o.dataset.ms,_n(n)}),document.querySelectorAll("[data-mc]").forEach(o=>o.onclick=a=>{Hu(a.clientX,a.clientY),_n(n)}),document.querySelectorAll("[data-mx]").forEach(o=>o.onclick=()=>{const a=+o.dataset.mx,c=n.slots[a];Xe(c.item,c.n),n.slots[a]=null,J("tap"),se(),_n(n)}),ot("#mCollect")&&(ot("#mCollect").onclick=o=>{Hu(o.clientX,o.clientY),_n(n)}),ot("#mMore")&&(ot("#mMore").onclick=()=>{const o=(n.cap-3)*4;if(_.gems<o){_t(`Cần ${o} kim cương`),J("no");return}_.gems-=o,n.cap++,n.slots.push(null),J("build"),se(),Te(),_n(n)})}const Ew=n=>Xt[n].v<=6,nc=[{id:"tom",farm:"Trang trại Gió Mát",lv:8,seed:3},{id:"lily",farm:"Vườn Hoa Biển",lv:6,seed:7},{id:"ben",farm:"Nông trại Nắng Vàng",lv:10,seed:13},{id:"rosa",farm:"Nhà Vườn Bà Rosa",lv:14,seed:19},{id:"sam",farm:"Bến Cá Chú Sam",lv:5,seed:29}],Oh=5,Ff=(te-di)/2,Da=(n,t,e,i)=>on(n+Ff,t+Ff,e,i),ic=()=>new Date().toDateString();function Pc(){return(!_.nb||_.nb.day!==ic())&&(_.nb={day:ic(),help:{},done:{},gift:{}}),_.nb}function Tw(n){let t=n*7919+17;return()=>(t=t*16807%2147483647)/2147483647}function Aw(n){const t=Tw(n.seed),e=Lt(),i=[];let s=1;const r=c=>i.push({id:"n"+s++,r:0,...c});r({k:"house",t:"house",x:11,z:4}),r({k:"barn",t:"barn",x:15,z:5});const o=Object.keys(Fe).filter(c=>Fe[c].lv<=n.lv);for(let c=0;c<9;c++){const l=o[Math.floor(t()*o.length)],u=Fe[l].t*1e3,h=e+u*(.3+t()*.7)*20;r({k:"field",t:"field",x:7+c%3,z:8+Math.floor(c/3),crop:l,s:h-u*20*(1+t()),e:h})}r({k:"pen",t:"coop",x:12,z:8,animals:[0,1,2].map(()=>({s:e,e:e+9e8}))}),r({k:"pen",t:n.lv>=7?"beehive":"cowpen",x:16,z:8,animals:[0,1].map(()=>({s:e,e:e+9e8}))}),r({k:"fac",t:"feedmill",x:11,z:13,jobs:[{r:0,s:e,e:e+9e8}]}),r({k:"fac",t:n.lv>=9?"sweets":"bakery",x:14,z:13,jobs:[]}),[["palm",7,13],["apple",8,14],["orange",6,15],["banana",18,13]].forEach(([c,l,u])=>r({k:"tree",t:c,x:l,z:u,s:e-1e5,e:e+(t()<.5?-1:9e8)}));const a=["flower_red","flower_yel","flower_pur","bush","palmdeco","lantern","bench","barrel","mushroomdeco","hedge","campfire","dog","cat"];for(let c=0;c<16;c++){const l=4+Math.floor(t()*18),u=3+Math.floor(t()*16);i.some(h=>l>=h.x-1&&l<=h.x+3&&u>=h.z-1&&u<=h.z+3)||r({k:"decor",t:a[Math.floor(t()*a.length)],x:l,z:u})}return i}let ke=null,Gu=null;const Cw=n=>({house:[3,3],pen:[3,3],fac:[2,2],barn:[2,2]})[n.k]||[1,1];function Rw(n,t){const e=nc.find(u=>u.id===n),i=Aw(e);nn();const s=new Ut,r=[],o=[];s.add(No(di+4.4,3,.8,V.sandMat,-.12)),s.add(No(di+.4,1.6,.5,V.ground.material,0)),i.forEach(u=>{var p;const h=Ac(u);(p=h.refresh)==null||p.call(h,Lt());const[d,f]=Cw(u);h.root.position.copy(Da(u.x,u.z,d,f)),h.root.userData.oid=u.id,s.add(h.root),o.push(h.root),r.push([u,h])});const a=Ze.find(u=>u.id===n),c=Qs(n,a.model,{h:1.15});c.userData.isArt||(Wo(c,n),c.rotation.y=.7),c.position.copy(Da(12,7)),c.userData.oid="host",s.add(c),o.push(c);const l=qn("pirate/chest",{size:.6});l.position.copy(Da(10,6)),l.userData.oid="gift",Pc().gift[n]||(s.add(l),o.push(l)),Gu={target:V.target.clone(),zoom:V.zoom},V.farm.visible=!1,V.scene.add(s),V.adv=s,V.advPick=o,V.mode="nb",ke={N:e,objs:i,views:r,g:s,host:c,gift:l},Zs(Da(12,10)),document.body.classList.add("in-adv"),Rm(),J("ship"),_t(`Chào mừng tới ${e.farm}!`)}function Pw(){V.mode==="nb"&&(V.scene.remove(ke.g),V.adv=null,ke=null,V.farm.visible=!0,V.mode="farm",V.zoom=Gu.zoom,V.target.copy(Gu.target),Js(),document.body.classList.remove("in-adv"),ot("#advHud").hidden=!0,se(),Te())}function Wu(){return Oh-(Pc().help[ke.N.id]||0)}function Rm(){const n=Ze.find(e=>e.id===ke.N.id),t=ot("#advHud");t.hidden=!1,t.innerHTML=`<div class="advtitle"><b>${Re(ke.N.farm)}</b><span>${Re(n.n)} · cấp ${ke.N.lv} · Giúp đỡ còn ${Wu()}/${Oh} lượt</span></div>
    <button class="rbtn home" id="nbHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>`,ot("#nbHome").onclick=()=>{J("tap"),Pw()}}function Iw(n,t){var d;if(!ke)return;const e=Hs(n,t);if(!e)return;const i=Pc(),s=ke.N.id;if(e==="host"){We(ke.host,"emote-yes"),J("collect"),_t(`${Ze.find(f=>f.id===s).n}: Cảm ơn cháu đã ghé chơi!`);return}if(e==="gift"){i.gift[s]=!0,ke.g.remove(ke.gift);const f=10+be(20);_.coins+=f,Cn(n,t,f),Math.random()<.3&&(_.gems+=1,gs(n,t)),J("collect"),se(),Te();return}const r=ke.views.find(([f])=>f.id===e);if(!r)return;const[o,a]=r,c=(d=i.done)[s]||(d[s]=[]);if(!(o.k==="field"||o.k==="pen"||o.k==="tree"||o.k==="fac")){a.root.userData.bumpT=performance.now();return}if(c.includes(o.id)){_t("Chỗ này bạn giúp rồi!");return}if(Wu()<=0){_t("Hôm nay đã giúp đủ 5 lượt rồi. Mai quay lại nhé!"),J("no");return}i.help[s]=(i.help[s]||0)+1,c.push(o.id);const u=o.k==="field"?"Tưới nước":o.k==="pen"?"Cho thú ăn":o.k==="tree"?"Bắt sâu":"Lau máy";an(n,t-40,u+"!");const h=3+be(5);if(_.coins+=h,Cn(n,t,h),Rn(1),nr(n,t),Math.random()<.12&&(_.gems+=1,gs(n,t)),Math.random()<.25&&js()>0){const f=Object.keys(Fe).filter(v=>Fe[v].lv<=_.level),p=f[be(f.length)];Xe(p,1),Di(n,t,p,1)}_i("act","help"),Dw(a.root.position),J("harvest"),Rm(),se(),Te(),Wu()===0&&setTimeout(()=>_t(`Đã giúp đủ! ${Ze.find(f=>f.id===s).n} rất vui đó.`),800)}function Dw(n){const t=new Nt(new Vn(.5,12,8),new Jn({color:9168639,transparent:!0,opacity:.6,depthWrite:!1}));t.position.copy(n),t.position.y=.4,ke.g.add(t);const e=performance.now(),i=ke.g,s=()=>{const r=(performance.now()-e)/600;if(r>=1){i.remove(t);return}t.scale.setScalar(1+r*1.5),t.material.opacity=.6*(1-r),requestAnimationFrame(s)};s()}function Lw(n,t){var e,i;if(ke){for(const[,s]of ke.views)(e=s.update)==null||e.call(s,n,t);(i=ke.host.userData.mixer)==null||i.update(t),ke.host.userData.isArt?vi(ke.host,n,"idle"):ke.host.userData.cur||We(ke.host,"idle")}}function Nw(n){const t=Pc(),e=nc.map(i=>{const s=Ze.find(o=>o.id===i.id),r=Oh-(t.help[i.id]||0);return`<div class="card"><img src="${Le["face:"+i.id]}" alt="" style="border-radius:50%;background:var(--cream-d)"><b>${Re(i.farm)}</b>
      <small>${Re(s.n)} · cấp ${i.lv}</small><small>${r?`Còn ${r} lượt giúp`:"Đã giúp hôm nay ✓"}${t.gift[i.id]?"":" · có quà 🎁"}</small>
      <button class="btn small blue" data-nb="${i.id}">Ghé thăm</button></div>`}).join("");Ki("neighbors","Hàng xóm",`<p class="hint">Ghé thăm hàng xóm, giúp tưới cây và cho thú ăn 5 lượt mỗi ngày để nhận xu, sao và quà.</p><div class="grid">${e}</div>`),document.querySelectorAll("[data-nb]").forEach(i=>i.onclick=()=>Rw(i.dataset.nb))}function Uw(){if(_.level<2||_.nbHelped===ic())return;_.nbHelped=ic();const n=Lt(),t=_.objs.filter(s=>s.k==="field"&&s.crop&&s.e>n);if(!t.length)return;const e=nc[be(nc.length)],i=Math.min(3,t.length);t.slice(0,i).forEach(s=>{s.e=n}),setTimeout(()=>_t(`${Ze.find(s=>s.id===e.id).n} đã sang tưới giúp ${i} ô ruộng của bạn!`),2500)}const kw=[["fish",58],["bigfish",20],["coins",12],["boot",10]];let hi="idle",Ul=0,Un=null;function Ow(n){hi="idle",Un=null,Ki("fish","Cầu câu cá",`<div class="pond" id="pond">
      <span class="swim s1">${Ee("fish")}</span><span class="swim s2">${Ee("bigfish")}</span><span class="swim s3">${Ee("fish")}</span>
      <div id="pondScene"></div></div>
    <button class="btn wide orange" id="fishBtn" style="margin-top:12px"></button>
    <p class="hint" style="margin-top:8px">Mỗi lần thả câu tốn 1 năng lượng. Phao chìm thì bấm <b>Kéo lên!</b> thật nhanh.</p>`),So(),ot("#fishBtn").onclick=()=>Bf(n),ot("#pond").onclick=()=>Bf(n)}function So(){if(!ie||ie.type!=="fish")return;const n=ot("#pondScene"),t=ot("#fishBtn");if(hi==="idle")n.innerHTML='<span class="rod">🎣</span>',t.textContent="Thả câu",t.className="btn wide orange";else if(hi==="wait")n.innerHTML='<span class="line"></span><span class="bobber"></span>',t.textContent="Đang chờ cá cắn câu…",t.className="btn wide gray";else if(hi==="bite")n.innerHTML='<span class="line"></span><span class="ripple"></span><span class="bobber bite"></span><span class="bang">❗</span>',t.textContent="Kéo lên!",t.className="btn wide hot";else if(hi==="got"){const e=Un==="boot"?'<span class="caught">👢</span>':Un==="coins"?`<span class="caught">${tn}</span>`:`<span class="caught">${Ee(Un)}</span>`;n.innerHTML=e,t.textContent=Un==="boot"?"Ôi, chiếc ủng cũ! Câu tiếp":Un==="coins"?"Câu được túi xu! Câu tiếp":`Câu được ${Xt[Un].n.toLowerCase()}! Câu tiếp`,t.className="btn wide orange"}else n.innerHTML='<span class="rod">💦</span>',t.textContent="Cá chạy mất rồi! Thử lại",t.className="btn wide orange"}function Bf(n){var t;if(clearTimeout(Ul),hi==="wait"){_t("Chờ phao chìm rồi mới kéo nhé!");return}if(hi==="bite"){Fw();return}if(_.energy<1){nn(),(t=n.openEnergy)==null||t.call(n);return}if(js()<=0){_t("Kho đầy rồi!"),J("no");return}_.energy-=1,Te(),hi="wait",J("plant"),So(),Ul=setTimeout(()=>{hi="bite",J("cluck"),So(),Ul=setTimeout(()=>{hi="miss",So()},1900)},1400+be(2600))}function Fw(){let n=be(100);Un=kw.find(([,s])=>(n-=s)<0)[0];const t=ot("#fishBtn").getBoundingClientRect(),e=t.left+t.width/2,i=t.top;if(Un==="boot")_.coins+=2;else if(Un==="coins"){const s=8+be(12);_.coins+=s,Cn(e,i,s)}else Xe(Un,1),Di(e,i,Un,1);Rn(1),_i("act","harvest",Un,1),hi="got",J("collect"),So(),se(),Te()}let Fh=null;function mn(n,t,e,i){Ki(n,t,e,i),Fh=i&&i.sig!==void 0?ie:null}const xn=n=>_.objs.find(t=>t.id===n),Bh=n=>{var t;return typeof n=="number"&&((t=xn(n))==null?void 0:t.k)==="field"},Be=n=>Xt[n].n,zh=n=>Math.max(1,Math.ceil(n/12e4));function Pm(n,t){if(Wn(),V.mode==="adv"){rw(n,t),Te();return}if(V.mode==="nb"){Iw(n,t),Te();return}if(ce){const i=Nu(n,t);i&&Hm(i);return}const e=Hs(n,t,$s==="seed"?Bh:null);if(qs(),e==null){if($s==="seed"){Xs();return}const i=Nu(n,t),[s,r]=i?fm(i):[-1,-1],o=fi(s,r);o&&!Qn(s,r)&&Vh(o);return}Im(e,n,t)}function Vh(n){const t=op(n);t&&(_t(`Sửa ${Vr[t.t].n.toLowerCase()} để mở ${Bo(t.t).n} nhé!`),J("tap"),Ph(on(t.x,t.z,...pn(t))),Tn(t.id))}function Im(n,t,e){if(n==="ship")return Tn("dock"),rE();if(n==="maisie")return dn.maisie.userData.wave=1.5,rc();if(typeof n=="string"&&n.startsWith("v:"))return yw(n);if(typeof n=="string"&&n.startsWith("beach:"))return nE(+n.slice(6));if(n==="pier")return Tn("pier"),J("tap"),Ow({openEnergy:Xo});const i=xn(n);if(i){if(!zo(i))return Vh(fi(i.x,i.z));if(Tn(n),i.site)return J("tap"),qw(i);switch(i.k){case"field":return Bw(i,t,e);case"tree":return Vw(i,t,e);case"pen":return Hw(i,t,e);case"fac":return Gw(i,t,e);case"helper":return Yw(i,t,e);case"board":return J("tap"),iE();case"market":if(Hu(t,e)){he.get(i.id).refresh();return}return J("tap"),ww();case"barn":return J("tap"),Fm();case"house":return J("tap"),rc();case"obstacle":return Qw(i);case"loot":return eE(i);case"gate":return J("tap"),_t(`${Vr[i.t].n} dẫn tới ${Bo(i.t).n}`);case"boat":return qm();case"decor":{const s=Zn[i.t];if(s.pet){const r=he.get(i.id).root.children[0];r.userData.dance=!0,r.userData.wait=2.5,r.userData.goal.copy(r.position),J("collect")}else J("tap"),_t(`${s.n} · giữ lâu để di chuyển`)}}}}function Bw(n,t,e){const i=tr(n,Lt());if(i===3)return Dm(n,t,e);if(i<0){if($s==="seed"&&_.seed){Dr=n,Hh(n,_.seed);return}zw(n);return}Wm(n)}function Dm(n,t,e){var r;if(js()<2)return Ic(),!1;const i=n.crop,s=Fe[i];return Xe(i,2),Rn(s.xp),n.crop=null,(r=he.get(n.id))==null||r.refresh(Lt()),Di(t,e,i,2),an(t,e-30,"+2"),J("harvest"),Qe("harvest",i,2),!0}function Hh(n,t,e){var r;const i=Fe[t];if(_.level<i.lv)return _t(`${Be(t)} mở ở cấp ${i.lv}`),!1;if(_.coins<i.cost)return e||(_t("Không đủ xu để mua hạt giống"),J("no")),!1;_.coins-=i.cost;const s=Lt();return n.crop=t,n.s=s,n.e=s+i.t*1e3,(r=he.get(n.id))==null||r.refresh(s),J("plant"),Qe("plant"),!0}let zf=0;function Ic(){Lt()-zf>3e3&&(_t("Kho đầy rồi! Vào Kho để nâng cấp hoặc bán bớt nhé"),J("no"),zf=Lt())}let $s=null,Dr=null;function zw(n){$s="seed",Dr=n,Lm()}function Lm(){const n=Object.entries(Fe).map(([e,i])=>{const s=_.level<i.lv;return`<button class="seed ${_.seed===e?"on":""} ${s?"lock":""}" data-act="seed" data-k="${e}" aria-label="${Be(e)}">
      ${s?`<span class="lk">Cấp ${i.lv}</span>`:""}${Ee(e)}<small>${tn}${i.cost}</small></button>`}).join(""),t=ot("#tray");t.className="",t.innerHTML=`<div class="seeds">${n}</div><button class="traybtn no" data-act="closetray" aria-label="Đóng">✕</button>`,t.hidden=!1}function Xs(){$s=null,Dr=null,ot("#tray").hidden=!0}function Vw(n,t,e){const i=Ri[n.t],s=Lt();if(s<n.e)return Wm(n);if(js()<i.qty)return Ic();Xe(i.yield,i.qty),Rn(i.xp),n.s=s,n.e=s+i.t*1e3,he.get(n.id).refresh(s),Di(t,e,i.yield,i.qty),an(t,e-30,"+"+i.qty),J("harvest"),Qe("harvest",i.yield,i.qty)}function Hw(n,t,e){const i=fn[n.t],s=Lt(),r=n.animals.filter(a=>a.e&&s>=a.e);if(r.length){const a=Math.min(r.length,js());if(a<=0)return Ic();r.slice(0,a).forEach(c=>{c.e=0,c.s=0}),Xe(i.prod,a),Rn(i.xp*a),Di(t,e,i.prod,a),an(t,e-30,"+"+a),J(n.t==="cowpen"?"moo":"cluck"),Qe("collect",i.prod,a),he.get(n.id).refresh(s);return}const o=n.animals.filter(a=>!a.e);if(o.length){const a=Math.min(o.length,zt(i.feed));if(a<=0)return Vf(n);o.slice(0,a).forEach(c=>{c.s=s,c.e=s+i.t*1e3}),Xe(i.feed,-a),an(t,e-30,`🍽 ×${a}`),J(n.t==="cowpen"?"moo":"cluck"),Qe("feed"),a<o.length&&_t(`Còn ${o.length-a} bạn ${i.an.toLowerCase()} chưa được ăn. Làm thêm ${Be(i.feed).toLowerCase()} nhé!`);return}Vf(n)}function Vf(n){const t=fn[n.t];He=()=>{const e=Lt(),i=n.animals.map((r,o)=>{const a=r.e?e>=r.e?"Có "+Be(t.prod).toLowerCase():"Còn "+yi(r.e-e):"Đói bụng";return`<div class="it">${Ee("animal:"+n.t)}<small>${t.an} ${o+1}<br>${a}</small></div>`}).join(""),s=n.animals.length<t.max;return`<p class="hint">Cho ăn bằng <img class="inl" src="${Le[t.feed]}" alt=""> ${Be(t.feed)} (đang có ${zt(t.feed)}). Làm ở Máy xay thức ăn.</p>
      <div class="inv">${i}</div>
      <div class="row" style="justify-content:center;margin-top:14px">
        ${s?`<button class="btn" data-act="buyanimal" data-oid="${n.id}">Mua thêm ${t.an.toLowerCase()} ${tn}${t.animalCost}</button>`:`<span class="hint">Chuồng đã đầy (${t.max}/${t.max})</span>`}
      </div>`},Ne=()=>n.animals.map(e=>e.e?Lt()>=e.e?"r":"p":"h").join()+n.animals.length,mn("pen",t.n,He(),{sig:Ne()})}function Gw(n,t,e){Nm(n,t,e)||Ww(n)}function Nm(n,t,e){const i=Lt(),s=sn[n.t],r=n.jobs.filter(a=>i>=a.e);if(!r.length)return!1;let o=0;for(const a of r){const c=s.rec[a.r],l=c.qty||1;if(js()<l){Ic();break}Xe(c.out,l),Rn(Math.max(1,Math.round(Xt[c.out].v/6))),n.jobs.splice(n.jobs.indexOf(a),1),Di(t,e,c.out,l),Qe("make",c.out,l),o++}return o&&(an(t,e-30,"+"+o),J("collect"),he.get(n.id).refresh(i)),o>0}function Ww(n){const t=sn[n.t];He=()=>{const e=Lt(),i=n.slots||2,s=t.rec.map((a,c)=>{const l=_.level<a.lv,u=Object.entries(a.in).map(([h,d])=>`<span class="${zt(h)>=d?"ok":"lack"}">${Ee(h)}${zt(h)}/${d}</span>`).join("");return`<div class="recipe ${l?"lock":""}">
        <img class="out" src="${Le[a.out]}" alt=""><b>${Be(a.out)}${a.qty>1?" ×"+a.qty:""}</b>
        ${l?`<span class="t">Mở ở cấp ${a.lv}</span>`:`<div class="need">${u}</div><span class="t">⏱ ${yi(a.t*1e3)}</span>
        <button class="btn small ${fs(a.in)?"":"gray"}" data-act="make" data-oid="${n.id}" data-i="${c}">Làm</button>`}
      </div>`}).join(""),r=[];for(let a=0;a<i;a++){const c=n.jobs[a];if(!c){r.push('<div class="slot"></div>');continue}const l=t.rec[c.r],u=e>=c.e,h=!u&&e>=c.s;r.push(`<button class="slot ${u?"done":""}" data-act="${u?"collectfac":h?"speedjob":""}" data-oid="${n.id}">
        ${Ee(l.out)}${h?`<span class="t" data-rt="${c.e}">${yi(c.e-e)}</span><span class="bar"><i data-s="${c.s}" data-e="${c.e}"></i></span>`:u?'<span class="t">Xong!</span>':'<span class="t">Đang chờ</span>'}
      </button>`)}i<4&&r.push(`<button class="slot buy" data-act="buyslot" data-oid="${n.id}">Thêm chỗ<span>${An}${i*3}</span></button>`);const o=n.jobs.find(a=>e<a.e&&e>=a.s);return`<div class="recipes">${s}</div><h3 class="sub">Hàng chờ</h3><div class="queue">${r.join("")}</div>
      ${o?'<p class="hint" style="margin-top:12px">Chạm vào món đang làm để xong ngay bằng <span class="ico gem sm"></span></p>':""}`},Ne=()=>n.jobs.map(e=>(Lt()>=e.e?"d":Lt()>=e.s?"r":"w")+e.r).join()+(n.slots||2)+JSON.stringify(_.inv)+_.level,mn("fac",t.n,He(),{sig:Ne(),oid:n.id})}function $w(n,t,e,i){const s=sn[n.t],r=s.rec[t],o=n.slots||2;if(_.level<r.lv)return;if(n.jobs.length>=o){_t("Hàng chờ đầy rồi. Chờ xong món trước nhé!"),J("no");return}if(!fs(r.in)){const u=Object.entries(r.in).filter(([h,d])=>zt(h)<d).map(([h,d])=>`${d-zt(h)} ${Be(h).toLowerCase()}`);_t("Còn thiếu "+u.join(", ")),J("no");return}nh(r.in);const a=Lt(),c=n.jobs.length?n.jobs[n.jobs.length-1].e:a,l=Math.max(a,c);n.jobs.push({r:t,s:l,e:l+r.t*1e3}),J("build"),he.get(n.id).refresh(a),Je()}const Xw=n=>n[0].toLowerCase()+n.slice(1);function $a(n){var t;return n.k==="house"?"Nhà của Maisie":n.k==="boat"?"Thuyền nhỏ":n.k==="fac"?sn[n.t].n:n.k==="pen"?fn[n.t].n:n.k==="helper"?xs[n.t].n:n.k==="gate"?((t=Vr[n.t])==null?void 0:t.n)||"Cổng":"Công trình"}function qw(n){Xs(),qs(),He=()=>{if(!n.site)return'<p class="hint">Đã xây xong!</p>';const t=Ho(n),e=Qu(n),i=ds(n),s=Le[n.k+":"+n.t]||n.k==="boat"&&Le["decor:boat"],r=s?`<img class="sitepic" src="${s}" alt="">`:"",o=Object.entries(t).map(([c,l])=>{const u=l.got>=l.need,h=zt(c);return`<div class="mat ${u?"ok":"lack"}">${Ee(c)}<b>${Be(c)}</b><span class="q">${l.got}/${l.need}</span>
        ${u?'<span class="t">✓ Đủ rồi</span>':i?`<small>${Re(Eo(c))}</small>`:`<button class="btn small ${h?"":"gray"}" data-act="give" data-oid="${n.id}" data-k="${c}">Góp</button>
             <small>${h?`Đang có ${h}`:Re(Eo(c))}</small>`}</div>`}).join(""),a=n.k==="gate"?`sửa ${$a(n).toLowerCase()}, mở ${Bo(n.t).n}`:`${n.site.ruin?"sửa":"xây"} ${Xw($a(n))}`;return`<div class="sitehead">${r}<span class="stage">Giai đoạn ${n.site.stage+1}/${e}</span></div>
      ${i?`<p class="hint lockmsg">🔒 Mở ở cấp ${i}</p>`:""}
      <p class="hint">Góp đủ vật liệu để ${Re(a)} nhé!</p><div class="mats">${o}</div>`},Ne=()=>JSON.stringify(n.site||null)+JSON.stringify(_.inv)+_.level,mn("site",$a(n),He(),{sig:Ne(),oid:n.id})}function jw(n,t,e,i){if(!(n!=null&&n.site))return;const s=xg(n,t);if(ds(n)){_t(`Mở ở cấp ${ds(n)}`),J("no");return}if(!s){const c=Eo(t);_t(`Chưa có ${Be(t).toLowerCase()}.${c?" "+c+" nhé!":""}`),J("no");return}Tn(n.id);const r=n.site.stage,o=n.site.ruin,a=yg(n);if(a==="none"){an(e,i-24,"+"+s),J("tap"),Je();return}if(Yi(18),nr(e,i),an(e,i-50,`+${10*(r+1)} xp`),_S(n),Tn(n.id),se(),a==="stage"){J("build"),_t(`Xong giai đoạn ${r+1}! Cố lên nào`),Je();return}J("level"),nn(),_t(`${$a(n)} đã ${o?"sửa":"xây"} xong!`),Zs(he.get(n.id).root.position)}function Yw(n,t,e){if(Dh(n,Lt()),Ws(n))return Um(n,t,e);J("tap"),Kw(n)}function Um(n,t,e){var s;const i=F1(n);if(!Object.keys(i).length)return!1;for(const[r,o]of Object.entries(i))Di(t,e,r,o);return an(t,e-30,"+"+Object.values(i).reduce((r,o)=>r+o,0)),Nh(i),J("collect"),(s=he.get(n.id))==null||s.refresh(Lt()),se(),!0}function Kw(n){const t=xs[n.t];He=()=>{Dh(n,Lt());const e=Ws(n),i=Ec(n),s=Ih(n),r=Object.entries(n.bag||{}).map(([c,l])=>`<span class="hbag">${Ee(c)}<b>${l}</b></span>`).join("")||"<small>Túi đang rỗng</small>",o=Ou(n)?"Túi đầy rồi!":`Món tiếp theo sau <span data-rt="${n.at+t.every*1e3}">${yi(n.at+t.every*1e3-Lt())}</span>`,a=s?`<p class="hint">Nâng cấp để túi chứa ${t.cap[(n.lvl||0)+1]} món:</p><div class="mats">${Object.entries(s).map(([c,l])=>`<div class="mat ${zt(c)>=l?"ok":"lack"}">${Ee(c)}<b>${Be(c)}</b><span class="q">${Math.min(zt(c),l)}/${l}</span>${zt(c)>=l?"":`<small>${Re(Eo(c))}</small>`}</div>`).join("")}</div><div class="hbtns"><button class="btn ${Object.entries(s).every(([c,l])=>zt(c)>=l)?"":"gray"}" data-act="helperup" data-oid="${n.id}">Nâng cấp</button></div>`:'<p class="hint">Đã nâng cấp tối đa!</p>';return`<p class="hint">Cấp ${(n.lvl||0)+1} · Túi ${e}/${i}</p><div class="hbags">${r}</div>
      <p class="hint">${o}</p>
      ${e?`<div class="hbtns"><button class="btn" data-act="helpertake" data-oid="${n.id}">Nhận hết</button></div>`:""}${a}`},Ne=()=>JSON.stringify([n.bag,n.lvl])+JSON.stringify(_.inv),mn("helper",t.n,He(),{sig:Ne(),oid:n.id})}function Jw(n,t,e){var i;if(n){if(!B1(n)){const s=Ih(n)||{},r=Object.keys(s).find(o=>zt(o)<s[o]);_t(r?`Chưa đủ ${Be(r).toLowerCase()}. ${Eo(r)}`:"Đã nâng cấp tối đa!"),J("no");return}Yi(18),an(t,e-30,"Túi to hơn!"),Tn(n.id),J("level"),(i=he.get(n.id))==null||i.refresh(Lt()),Je(),se()}}const Zw=350;let Os=null;const kl=new I;function km(n,t=.9){var i;const e=(i=he.get(n.id))==null?void 0:i.root;return e?(kl.copy(e.position),kl.y+=t,Gs(kl)):[innerWidth/2,innerHeight/2]}function Om(n){return Qn(n.x,n.z)?_.energy<1?(Xo(),!1):!0:(Vh(fi(n.x,n.z)),!1)}function Qw(n){sc(),Om(n)&&Sm(n.x,n.z,()=>$u(n))}function tE(n){if(sc(),!Om(n))return;const t=Os={o:n,down:!0,timer:0};Sm(n.x,n.z,()=>{!$u(n)||!t.down||Os!==t||(t.timer=setInterval(()=>{(!t.down||Os!==t||V.mode!=="farm"||ie||!$u(n))&&sc()},Zw))})}function sc(){Os&&(Os.down=!1,clearInterval(Os.timer),Os=null)}function Hf(){sc()}function $u(n){if(!_.objs.includes(n))return!1;const t=FS(n);if(!t)return Xo(),!1;const[e,i]=km(n);J("chop"),iS(n.id),yS(n.x,n.z),nS(n.id,n.hp/Mn[n.t].hp),an(e,i-30,"-1⚡");for(const[s,r]of Object.entries(t.drops))Di(e,i,s,r);if(Nh(t.drops),t.done){nr(e,i);const s=he.get(n.id),r=performance.now(),o=()=>{const a=(performance.now()-r)/380;a<1?(s.root.scale.setScalar(1-a),s.root.rotation.y+=.2,requestAnimationFrame(o)):Qr(n.id)};if(s&&(s.root.userData.bounceT=0,o()),Qe("clear"),t.chest){const a={id:Wr(),k:"loot",t:"chest",x:n.x,z:n.z,r:0,chest:t.chest};_.objs.push(a),Wi(a),Tn(a.id),J("collect")}se()}return Te(),!t.done}function eE(n){const[t,e]=km(n,.5),i=BS(n);if(i){Qr(n.id),J("collect"),i.coins&&Cn(t,e,i.coins);for(let s=0;s<Math.min(i.energy,4);s++)er(t,e,"#energyPill",to,s*80);for(const[s,r]of Object.entries(i.mats))Di(t,e,s,r);an(t,e-30,`+${i.energy}⚡ +${i.coins}`),Nh(i.mats),Te(),se()}}function nE(n){const t=LS(n);if(!t)return;kn.copy(t.position),kn.y+=.4;const[e,i]=Gs(kn),s=KS(n);if(s){NS(n),J("collect");for(let r=0;r<Math.min(s,4);r++)er(e,i,"#energyPill",to,r*80);an(e,i-30,`+${s}⚡`),Te(),se()}}function Xo(){const n=Object.entries(Xt).filter(([i,s])=>s.energy&&zt(i)>0),t=n.length?`<div class="inv">${n.map(([i,s])=>`<div class="it">${Ee(i)}<span class="q">${zt(i)}</span><small>${s.n}<br>+${s.energy} năng lượng</small><div class="acts"><button class="btn small" data-act="eat" data-k="${i}">Ăn</button></div></div>`).join("")}</div>`:'<p class="hint">Nướng bánh mì ở Lò bánh rồi ăn để có thêm năng lượng nhé!</p>',e=_.energy>=Ai(_.level);mn("energy",_.energy>0?"Năng lượng":"Hết năng lượng",`<p class="hint">Dọn dẹp cần năng lượng <span class="ico bolt sm"></span>. Năng lượng tự hồi: ${QS()}. Nhặt sao biển, vỏ sò, cua trên bãi biển cũng có năng lượng!</p>${t}
    <div class="row" style="justify-content:center;margin-top:14px">${e?'<button class="btn gray" data-close>Năng lượng đang đầy</button>':`<button class="btn blue" data-act="buyenergy">Nạp đầy ${An}5</button>`}</div>`)}function iE(){uc(),He=()=>{const n=Lt();return`<div class="orders">${_.orders.map((t,e)=>{if(t.wait)return`<div class="order wait">${Ee("b:crate")}Đơn mới sắp tới<br><span data-rt="${t.wait}">${yi(t.wait-n)}</span></div>`;const i=Ze.find(o=>o.id===t.who),s=Object.entries(t.items).map(([o,a])=>`<span class="${zt(o)>=a?"ok":"lack"}">${Ee(o)}${Math.min(zt(o),a)}/${a}</span>`).join(""),r=fs(t.items);return`<div class="order"><button class="skip" data-act="skiporder" data-i="${e}" aria-label="Bỏ đơn này">✕</button>
        <img class="face" src="${Le["face:"+t.who]}" alt=""><b>${i.n}</b><div class="need">${s}</div>
        <div class="reward"><span>${tn}${t.coins}</span><span>${eo}${t.xp}</span></div>
        <button class="btn ${r?"":"gray"}" data-act="deliver" data-i="${e}">Giao hàng</button></div>`}).join("")}</div>`},Ne=()=>_.orders.map(n=>n.wait?Lt()>=n.wait?"x":"w":"o").join()+JSON.stringify(_.inv),mn("orders","Bảng đơn hàng",He(),{sig:Ne()})}function sE(n,t,e){var a;const i=_.orders[n];if(!i||i.wait)return;if(!fs(i.items)){const c=Object.entries(i.items).filter(([l,u])=>zt(l)<u).map(([l,u])=>`${u-zt(l)} ${Be(l).toLowerCase()}`);_t("Còn thiếu "+c.join(", ")),J("no");return}nh(i.items),_.coins+=i.coins,Rn(i.xp),Cn(t,e,i.coins),nr(t,e),J("coin");const s=Lt();_.orders[n]={wait:s+15e3,s},Qe("deliver");const r=_.objs.find(c=>c.k==="board"),o=r&&((a=he.get(r.id))==null?void 0:a.cart);if(o){const c=performance.now(),l=()=>{const u=(performance.now()-c)/1200;o.position.x=.2+Math.sin(u*Math.PI)*1.5,u<1?requestAnimationFrame(l):o.position.x=.2};l()}Je()}function rE(){He=()=>{const n=_.ship,t=Lt();if(n.st==="away")return`<div class="celebrate">${Ee("b:ship")}<p class="hint">Tàu đang đi giao hàng.<br>Quay lại sau <b data-rt="${n.backAt}">${yi(n.backAt-t)}</b></p>
      <button class="btn blue" data-act="shipnow">Gọi tàu về ngay ${An}2</button></div>`;const e=n.crates.map((s,r)=>`<div class="crate ${s.done?"done":""}">${Ee(s.item)}<b>${Be(s.item)}</b>
      <div class="need"><span class="${zt(s.item)>=s.n||s.done?"ok":"lack"}">${s.done?s.n:Math.min(zt(s.item),s.n)}/${s.n}</span></div>
      ${s.done?"":`<button class="btn small ${zt(s.item)>=s.n?"":"gray"}" data-act="fillcrate" data-i="${r}">Đóng thùng</button>`}</div>`).join(""),i=n.crates.every(s=>s.done);return`<p class="hint">Đóng đủ 6 thùng hàng rồi cho tàu chạy để nhận thưởng lớn! Tàu rời bến sau <span data-rt="${n.leaveAt}">${yi(n.leaveAt-t)}</span>.</p>
      <div class="crates">${e}</div>
      <div class="reward" style="margin:14px 0 10px;font-size:18px"><span>Thưởng:</span><span>${tn}${n.coins}</span><span>${eo}${n.xp}</span><span>${An}${n.gems}</span></div>
      <button class="btn wide ${i?"orange":"gray"}" data-act="sendship">${i?"Cho tàu chạy!":"Chưa đủ thùng hàng"}</button>`},Ne=()=>_.ship.st+(_.ship.crates||[]).map(n=>n.done).join()+JSON.stringify(_.inv),mn("ship","Tàu chở hàng",He(),{sig:Ne()})}function oE(n,t,e){var r;const i=(r=_.ship.crates)==null?void 0:r[n];if(!i||i.done)return;if(zt(i.item)<i.n){_t(`Cần ${i.n-zt(i.item)} ${Be(i.item).toLowerCase()} nữa`),J("no");return}Xe(i.item,-i.n),i.done=!0;const s=Math.round(Xt[i.item].v*i.n*.6);_.coins+=s,Cn(t,e,s),J("coin"),Qe("crate"),Je()}function aE(n,t){const e=_.ship;if(e.st!=="docked"||!e.crates.every(i=>i.done)){_t("Đóng đủ 6 thùng hàng trước nhé!");return}_.coins+=e.coins,_.gems+=e.gems,Rn(e.xp),Cn(n,t,e.coins),gs(n,t),nr(n,t),_.ship={st:"away",backAt:Lt()+12e4},J("ship"),Yi(),Je()}const cE=[["Nông sản",n=>!Xt[n].mat&&Fe[n]||Object.values(Ri).some(t=>t.yield===n)],["Từ chuồng",n=>!Xt[n].mat&&Object.values(fn).some(t=>t.prod===n)],["Thức ăn thú",n=>!Xt[n].mat&&n.endsWith("feed")],["Món ngon",n=>!Xt[n].mat],["Vật liệu",n=>!!Xt[n].mat]];function Fm(){He=()=>{const n=lp(),t=eh(),e=n>=t,i=Object.keys(Xt).filter(o=>zt(o)>0);let s=`<div class="cap ${e?"full":""}"><i style="width:${Math.min(100,n/t*100)}%"></i><span>${n} / ${t}</span></div>`;const r=new Set;for(const[o,a]of cE){const c=i.filter(l=>!r.has(l)&&a(l));c.forEach(l=>r.add(l)),c.length&&(s+=`<h3 class="sub">${o}</h3><div class="inv">${c.map(l=>`<div class="it">${Ee(l)}<span class="q">${zt(l)}</span><small>${Be(l)}</small>
        <div class="acts">${Xt[l].energy?`<button class="btn small blue" data-act="eat" data-k="${l}">Ăn</button>`:""}<button class="btn small orange" data-act="sell" data-k="${l}">Bán ${Xt[l].v}</button></div></div>`).join("")}</div>`)}return i.length||(s+='<p class="hint">Kho đang trống. Thu hoạch ruộng để có nông sản nhé!</p>'),s+=`<div class="row" style="justify-content:center;margin-top:16px"><button class="btn blue" data-act="upbarn">Nâng cấp kho (+25 chỗ) ${tn}${Jf(_.barnLvl)}</button></div>`,s},Ne=()=>JSON.stringify(_.inv)+_.barnLvl,mn("barn","Kho hàng",He(),{sig:Ne()})}function Bm(n){_.level;const t=[];if(n==="farm"){const e=_.objs.filter(i=>i.k==="field").length;t.push({id:"field",icon:"b:field",n:"Ô ruộng",cost:Kf(e),lv:1,note:`Đang có ${e}`});for(const[i,s]of Object.entries(Ri))t.push({id:"tree:"+i,icon:"tree:"+i,n:s.n,cost:s.cost,lv:s.lv,note:`Cho ${Be(s.yield).toLowerCase()}`})}else if(n==="animals")for(const[e,i]of Object.entries(fn)){const s=_.objs.filter(c=>c.k==="pen"&&c.t===e);t.push({id:"pen:"+e,icon:"pen:"+e,n:i.n,cost:i.cost,lv:i.lv,note:`Đang có ${s.length}/2`,max:s.length>=2});const r=s.filter(c=>!c.site),o=r.some(c=>c.animals.length<i.max),a=!o&&s.some(c=>c.site);t.push({id:"animal:"+e,icon:"animal:"+e,n:i.an,cost:i.animalCost,lv:i.lv,note:s.length?a?"Chuồng đang xây":o?`Cho ${Be(i.prod).toLowerCase()}`:"Chuồng đã đầy":`Cần ${i.n.toLowerCase()}`,max:!o&&!a})}else if(n==="factory"){for(const[e,i]of Object.entries(sn)){const s=_.objs.find(r=>r.k==="fac"&&r.t===e);t.push({id:"fac:"+e,icon:"fac:"+e,n:i.n,cost:i.cost,lv:i.lv,note:s?s.site?"Đang xây":"Đã có":i.rec.map(r=>Be(r.out)).slice(0,2).join(", "),max:!!s})}for(const[e,i]of Object.entries(xs)){const s=_.objs.find(r=>r.k==="helper"&&r.t===e);t.push({id:"helper:"+e,icon:"helper:"+e,n:i.n,cost:i.cost,lv:i.lv,note:s?s.site?"Đang xây":"Đã có":"Tự gom gỗ, tre, lá cọ",max:!!s})}}else{for(const[e,i]of Object.entries(_.store||{}))i>0&&t.push({id:"stored:"+e,icon:"decor:"+e,n:Zn[e].n,cost:0,lv:1,note:`Đã cất · có ${i}`,stored:!0});for(const[e,i]of Object.entries(Zn))i.gift||t.push({id:"decor:"+e,icon:"decor:"+e,n:i.n,cost:i.cost,lv:i.lv,note:i.pet?"Biết đi dạo":""})}return t}let cs="farm";function lE(n=cs){cs=n,He=()=>{const t=[["farm","Ruộng & Cây"],["animals","Chuồng & Thú"],["factory","Nhà máy"],["decor","Trang trí"]].map(([i,s])=>`<button class="tab ${cs===i?"on":""}" data-act="shoptab" data-k="${i}">${s}</button>`).join(""),e=Bm(cs).map(i=>{const s=_.level<i.lv;return`<button class="card ${s||i.max?"lock":""}" data-act="buy" data-k="${i.id}">
        ${s?`<span class="lk">Cấp ${i.lv}</span>`:""}${Ee(i.icon)}<b>${i.n}</b>${i.note?`<small>${i.note}</small>`:""}
        <span class="price">${tn}${i.cost||"Miễn phí"}</span></button>`}).join("");return`<div class="tabs">${t}</div><div class="grid">${e}</div>`},Ne=()=>cs+_.coins+_.level,mn("shop","Cửa hàng",He(),{sig:Ne()})}function uE(n){const t=Bm(cs).find(r=>r.id===n);if(!t)return;if(t.stored){const r=n.split(":")[1];Oo({k:"decor",t:r,r:0},!0,0)&&(ce.fromStore=r);return}if(_.level<t.lv){_t(`Mở ở cấp ${t.lv}`),J("no");return}if(t.max){_t(t.note),J("no");return}if(_.coins<t.cost){_t(`Cần thêm ${t.cost-_.coins} xu nữa`),J("no");return}const[e,i]=n.split(":");if(e==="animal")return zm(i);let s;e==="field"?s={k:"field",t:"field",crop:null,s:0,e:0}:e==="tree"?s={k:"tree",t:i,s:Lt(),e:Lt()+Ri[i].t*1e3}:e==="pen"?s={k:"pen",t:i,animals:[{s:0,e:0}]}:e==="fac"?s={k:"fac",t:i,jobs:[],slots:2}:e==="helper"?s={k:"helper",t:i,lvl:0,bag:{},at:Lt()}:s={k:"decor",t:i},s.r=0,Oo(s,!0,t.cost)}function zm(n,t){const e=fn[n],i=_.objs.filter(r=>r.k==="pen"&&r.t===n),s=t?xn(t):i.find(r=>!r.site&&r.animals.length<e.max)||i.find(r=>r.site);if(!s){_t(`Cần mua ${e.n.toLowerCase()} trước`),J("no");return}if(s.site){_t("Chuồng đang xây, góp đủ vật liệu trước nhé!"),J("no");return}if(s.animals.length>=e.max){_t("Chuồng đã đầy");return}if(_.coins<e.animalCost){_t(`Cần thêm ${e.animalCost-_.coins} xu nữa`),J("no");return}_.coins-=e.animalCost,s.animals.push({s:0,e:0}),he.get(s.id).refresh(Lt()),J("build"),_t(`Chào mừng bạn ${e.an.toLowerCase()} mới!`),Qe("buyanimal"),nn(),Zs(he.get(s.id).root.position)}let ce=null,jn=null;function Oo(n,t,e=0){if(t){const[i,s]=pn(n),r=wg(i,s);if(r){_t(r),J("no");return}}if(nn(),Xs(),qs(),t){const[i,s]=pn(n),[r,o]=fm(V.target),a=lc(i,s,r-i/2,o-s/2)||[Math.max(0,r-1),Math.max(0,o-1)];n.x=a[0],n.z=a[1],n.id="ghost",ce={obj:n,isNew:t,cost:e,view:Wi(n)}}else ce={obj:{...n},real:n,isNew:t,cost:0,view:he.get(n.id)};return jn||(jn=new Nt(new ji(1,1),new Jn({color:6472767,transparent:!0,opacity:.65,depthWrite:!1,depthTest:!1})),jn.rotation.x=-Math.PI/2,jn.renderOrder=8),V.scene.add(jn),qo(),Zs(ce.view.root.position),hE(),!0}function Gh(n,t,e=!0){n.root.traverse(i=>{i.isMesh&&(i.userData.ro===void 0&&(i.userData.ro=i.renderOrder),i.renderOrder=t?9:i.userData.ro,i.userData.sprite&&(i.material.depthTest=!t,i.material.color.set(t&&!e?16748431:16777215)))})}function Vm(){const n=ce.obj,[t,e]=pn(n);return cp(n.x,n.z,t,e,ce.isNew?"ghost":n.id)}function qo(){const n=ce.obj,[t,e]=pn(n),i=ce.view;Lh(i,n),i.root.position.y=.25,jn.scale.set(t+.3,e+.3,1),jn.position.copy(on(n.x,n.z,t,e)),jn.position.y=.03;const s=Vm();jn.material.color.set(s?6472767:16735581),Gh(i,!0,s);const r=ot('#tray [data-act="placeok"]');r&&(r.disabled=!s)}function Hm(n){const t=ce.obj,[e,i]=pn(t),s=zs.clamp(Math.round(n.x+te/2-e/2),0,te-e),r=zs.clamp(Math.round(n.z+te/2-i/2),0,te-i);(s!==t.x||r!==t.z)&&(t.x=s,t.z=r,qo())}function hE(){const n=ce.obj,t=n.k==="decor";ot("#tray").className=t&&!ce.isNew?"many":"",ot("#tray").innerHTML=`<button class="traybtn no" data-act="placeno" aria-label="Huỷ">✕</button>
    <div class="traytxt">${ce.isNew?"Kéo để chọn chỗ":"Kéo để chuyển chỗ"}<small>${ce.cost?"Giá "+ce.cost+" xu":"Chạm ✓ để xong"}</small></div>
    ${t?'<button class="traybtn rot" data-act="placerot" aria-label="Xoay">↻</button>':""}
    ${t&&!ce.isNew?'<button class="traybtn store" data-act="placestore" aria-label="Cất vào túi">📦</button>':""}
    <button class="traybtn ok" data-act="placeok" aria-label="Đặt">✓</button>`,ot("#tray").hidden=!1,$s="place",qo()}function dE(){if(!ce)return;if(!Vm()){_t("Chỗ này bị vướng rồi"),J("no");return}const{obj:n,real:t,isNew:e,cost:i,view:s,fromStore:r}=ce;if(e){if(_.coins<i){_t("Không đủ xu");return}_.coins-=i,r&&_.store[r]--,Qr("ghost"),n.id=Wr(),_.objs.push(n),n.k==="helper"&&(n.at=Lt()),_g(n),Wi(n),n.site&&_t("Chạm vào công trường để góp vật liệu nhé!"),n.k==="decor"&&Qe("buydecor"),n.k==="tree"&&Qe("buytree"),J("build")}else Object.assign(t,{x:n.x,z:n.z,r:n.r}),s.root.position.y=0,Gh(s,!1),J("build");V.scene.remove(jn);const o=e&&n.k==="field";if(ce=null,Xs(),se(),o){const a=_.objs.filter(l=>l.k==="field").length,c=Kf(a);_.coins>=c&&Oo({k:"field",t:"field",crop:null,s:0,e:0,r:0},!0,c)}}function Gm(){if(!ce)return;const{isNew:n,view:t,real:e}=ce;n?Qr("ghost"):(Lh(t,e),t.root.position.y=0,Gh(t,!1)),V.scene.remove(jn),ce=null,Xs()}function fE(n,t){var s;if(ce||V.mode!=="farm")return;const e=Hs(n,t),i=typeof e=="number"?xn(e):null;if(!(!i||i.k==="loot"||i.k==="gate"||i.k==="boat"||(s=i.site)!=null&&s.ruin||!zo(i))){if(qs(),i.k==="obstacle"){Tn(i.id),tE(i);return}J("tap"),Oo(i,!1)}}let oi=null;function pE(n,t){if(V.mode!=="farm")return!1;if(ce){const r=Hs(n,t);return r==="ghost"||r===ce.obj.id?(oi={mode:"ghost"},!0):!1}const e=Hs(n,t,Bh),i=typeof e=="number"?xn(e):null;if(!i||i.k!=="field")return!1;const s=tr(i,Lt());return s===3?(oi={mode:"harvest",done:new Set},!0):s<0&&$s==="seed"&&_.seed?(oi={mode:"plant",done:new Set},!0):!1}function mE(n,t){if(!oi)return;if(oi.mode==="ghost"){const r=Nu(n,t);r&&Hm(r);return}const e=Hs(n,t,Bh),i=typeof e=="number"?xn(e):null;if(!i||i.k!=="field"||oi.done.has(i.id))return;oi.done.add(i.id);const s=tr(i,Lt());oi.mode==="harvest"&&s===3&&(Dm(i,n,t),Tn(i.id)),oi.mode==="plant"&&s<0&&(Hh(i,_.seed,!0),Tn(i.id))}function Gf(n,t,e){const i=oi;if(oi=null,!!i)if(n)i.mode==="ghost"&&qo();else{if(i.mode==="ghost")return;Pm(t,e)}}let bn=null;function Wm(n){qs();const t=document.createElement("div");t.className="timer",bn={oid:n.id,el:t};const e=()=>{const i=Lt();let s,r,o;if(n.k==="field"?(s=Be(n.crop),r=n.s,o=n.e):n.k==="tree"&&(s=Ri[n.t].n,r=n.s,o=n.e),i>=o){qs();return}const a=zh(o-i);t.innerHTML=`<b>${s}</b><div class="bar"><i style="width:${(i-r)/(o-r)*100}%"></i></div><span class="t">Còn ${yi(o-i)}</span>
      <div style="margin-top:6px"><button class="btn small blue" data-act="speed" data-oid="${n.id}">Xong ngay ${An}${a}</button></div>`};e(),bn.draw=e,ot("#bubbles").appendChild(t),J("tap")}function qs(){bn==null||bn.el.remove(),bn=null}function gE(n){const t=Lt(),e=zh(n.e-t);if(_.gems<e){_t("Không đủ kim cương"),J("no");return}_.gems-=e,n.e=t,n.k==="field"&&(n.s=Math.min(n.s,t-1)),he.get(n.id).refresh(t),qs(),J("collect")}function rc(){const n=Gr();if(!n){const i=ac[_.quest];mn("quest","Maisie",`<div class="talk">${Ee("face:maisie")}<div class="say">Bạn làm tốt lắm! Nhiệm vụ tiếp theo sẽ mở khi bạn lên <b>cấp ${(i==null?void 0:i.lv)||_.level+1}</b>. Cùng chăm sóc nông trại nhé!</div></div>`);return}const t=Ze.find(i=>i.id===n.who),e=_.qprog>=n.n;He=()=>`<div class="talk">${Ee("face:"+n.who)}<div class="say"><b>${t.n}:</b> ${Re(n.text)}</div></div>
    <div class="prog"><i style="width:${_.qprog/n.n*100}%"></i><span>${_.qprog} / ${n.n}</span></div>
    <div class="reward" style="font-size:18px"><span>Thưởng:</span>${n.coins?`<span>${tn}${n.coins}</span>`:""}${n.xp?`<span>${eo}${n.xp}</span>`:""}${n.gems?`<span>${An}${n.gems}</span>`:""}${n.energy?`<span>${to}${n.energy}</span>`:""}</div>
    <div style="margin-top:14px">${_.qprog>=n.n?'<button class="btn wide orange" data-act="claimquest">Nhận thưởng!</button>':'<button class="btn wide blue" data-act="questgo">Mình đi làm ngay!</button>'}</div>`,Ne=()=>_.qprog+"/"+_.quest+"/"+_.tut,mn("quest","Nhiệm vụ",He(),{sig:Ne()}),e||J("tap")}function vE(n){const t=[];for(const[e,i]of Object.entries(Fe))i.lv===n&&t.push([e,"Hạt "+Be(e).toLowerCase()]);for(const[e,i]of Object.entries(Ri))i.lv===n&&t.push(["tree:"+e,i.n]);for(const[e,i]of Object.entries(fn))i.lv===n&&t.push(["pen:"+e,i.n]);for(const[e,i]of Object.entries(sn))if(i.lv===n)t.push(["fac:"+e,i.n]);else for(const s of i.rec)s.lv===n&&i.lv<n&&t.push([s.out,Be(s.out)]);for(const[e,i]of Object.entries(Zn))i.lv===n&&t.push(["decor:"+e,i.n]);for(const e of ja)e.lv===n&&t.push([e.goal.pet?"decor:"+e.goal.pet:"decor:chest","Đảo "+e.n]);return t}Hr("levelup",(n,t)=>{setTimeout(()=>{const e=vE(n);mn("level","Lên cấp!",`<div class="celebrate"><span class="bigstar"><b>${n}</b></span>
      <div class="reward" style="font-size:20px"><span>${tn}+${t.coins}</span><span>${An}+${t.gems}</span><span>${to}Đầy</span></div>
      ${e.length?`<h3 class="sub" style="margin:4px 0 0">Mở khoá mới</h3><div class="unlocks">${e.map(([i,s])=>`<div>${Ee(i)}${Re(s)}</div>`).join("")}</div>`:""}
      <button class="btn wide orange" data-close>Tuyệt vời!</button></div>`),Yi(),J("level")},400)});Hr("quest",()=>Te());Hr("zone",n=>{const t=_s.find(e=>e.id===n);setTimeout(()=>{_t(`Đã mở ${t.n}! Vào chặt cây thôi`),Yi(24)},500),se()});Hr("ship",n=>{n==="arrive"&&(_t("Tàu chở hàng đã cập bến!"),J("ship"))});const $m=[{coins:40},{energy:15},{coins:80},{gems:2},{coins:140},{gems:3,energy:30},{gems:6,coins:200}],oc=n=>new Date(n).toDateString();function Xm(){const n=oc(Date.now()),t=oc(Date.now()-864e5),e=_.login||(_.login={streak:0,last:""}),i=_.lastDaily!==n,s=i?e.last===t?e.streak%7:0:(e.streak-1+7)%7,r=$m.map((o,a)=>{const c=i?a<s:a<=s,l=a===s,u=[o.coins&&`${tn}${o.coins}`,o.gems&&`${An}${o.gems}`,o.energy&&`${to}${o.energy}`].filter(Boolean).join(" ");return`<div class="dday ${c?"got":""} ${l&&i?"today":""} ${a===6?"big":""}"><b>Ngày ${a+1}</b><span class="gift">${a===6?"🎁":"📦"}</span><span class="rw">${u}</span></div>`}).join("");mn("gift","Quà mỗi ngày",`<p class="hint">Vào chơi mỗi ngày để nhận quà. Ngày thứ 7 có quà lớn!</p><div class="daily">${r}</div>
    <div style="margin-top:14px">${i?'<button class="btn wide orange" data-act="claimdaily">Nhận quà hôm nay</button>':'<button class="btn wide gray" data-close>Mai quay lại nhé!</button>'}</div>`)}function _E(n,t){const e=oc(Date.now()),i=oc(Date.now()-864e5);if(_.lastDaily===e)return;const s=_.login||(_.login={streak:0,last:""});s.streak=s.last===i?s.streak+1:1,s.last=e,_.lastDaily=e;const r=$m[(s.streak-1)%7];r.coins&&(_.coins+=r.coins,Cn(n,t,r.coins)),r.gems&&(_.gems+=r.gems,gs(n,t)),r.energy&&(_.energy=Math.max(_.energy,Ai(_.level))+(r.energy>20?0:r.energy)),Yi(),J("level"),Xm()}function Xa(n){mn("settings","Cài đặt",`
    <div class="setting">Âm thanh <button class="btn small ${_.sound?"":"gray"}" data-act="togglesound">${_.sound?"Bật":"Tắt"}</button></div>
    <div class="setting">Nhạc nền <button class="btn small ${_.music?"":"gray"}" data-act="togglemusic">${_.music?"Bật":"Tắt"}</button></div>
    <div class="setting" style="flex-direction:column;align-items:flex-start;font-size:15px;font-weight:700">
      <b style="font-size:17px">Cài lên điện thoại</b>
      iPhone: mở bằng Safari → nút Chia sẻ → "Thêm vào MH chính".<br>Android: mở bằng Chrome → menu ⋮ → "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính".</div>
    <div class="setting">Chuyển sang máy khác <span class="row" style="gap:6px"><button class="btn small blue" data-act="backup">Lấy mã</button><button class="btn small" data-act="restore">Nhập mã</button></span></div>
    <div class="setting">${n?"Chắc chắn chơi lại từ đầu?":"Chơi lại từ đầu"}
      <button class="btn small red" data-act="${n?"resetyes":"reset"}">${n?"Xoá hết":"Chơi lại"}</button></div>
    <p class="hint" style="font-size:13px;margin-top:10px">Hình 2D vẽ tay (AI vẽ); cảm ơn Kenney.nl và KayKit (CC0) vì các bộ mô hình dùng ở bản đầu. Maisie's Farm · làm tặng bé Maisie.</p>`)}let He=null,Ne=null;function Je(){ie&&ie===Fh&&He&&(ZS(He()),ie.sig=Ne==null?void 0:Ne())}const xE={seed(n){const t=n.dataset.k,e=Fe[t];if(_.level<e.lv){_t(`${Be(t)} mở ở cấp ${e.lv}`),J("no");return}_.seed=t,Lm(),Dr&&tr(Dr,Lt())<0&&Hh(Dr,t),_t("Kéo ngón tay qua các ô trống để gieo tiếp")},closetray(){Xs()},placeok(){dE()},placeno(){Gm()},placerot(){ce.obj.r=((ce.obj.r||0)+1)%4,qo()},placestore(){const n=ce.real;V.scene.remove(jn),Qr(n.id),_.objs.splice(_.objs.indexOf(n),1),(_.store||(_.store={}))[n.t]=(_.store[n.t]||0)+1,ce=null,Xs(),J("collect"),_t(`Đã cất ${Zn[n.t].n.toLowerCase()} vào túi. Đặt lại trong Cửa hàng → Trang trí`)},claimdaily(n,t,e){_E(t,e)},placestored(n){var e;const t=n.dataset.k;((e=_.store)==null?void 0:e[t])>0&&Oo({k:"decor",t,r:0},!0,0)&&(ce.fromStore=t)},make(n,t,e){$w(xn(+n.dataset.oid),+n.dataset.i)},helperup(n,t,e){Jw(xn(+n.dataset.oid),t,e)},helpertake(n,t,e){const i=xn(+n.dataset.oid);i&&Um(i,t,e)&&Je()},give(n,t,e){jw(xn(+n.dataset.oid),n.dataset.k,t,e)},collectfac(n,t,e){Nm(xn(+n.dataset.oid),t,e),Je()},speedjob(n){const t=xn(+n.dataset.oid),e=Lt(),i=t.jobs.find(o=>e<o.e&&e>=o.s);if(!i)return;const s=zh(i.e-e);if(_.gems<s){_t(`Cần ${s} kim cương`),J("no");return}_.gems-=s;const r=i.e-e;t.jobs.forEach(o=>{o.e>e&&(o.e-=r,o.s=Math.max(e,o.s-r))}),i.e=e,J("collect"),Je()},buyslot(n){const t=xn(+n.dataset.oid),e=(t.slots||2)*3;if(_.gems<e){_t(`Cần ${e} kim cương`),J("no");return}_.gems-=e,t.slots=(t.slots||2)+1,J("build"),Je()},buyanimal(n){const t=xn(+n.dataset.oid);zm(t.t,t.id)},deliver(n,t,e){sE(+n.dataset.i,t,e)},skiporder(n){const t=Lt();_.orders[+n.dataset.i]={wait:t+1e4,s:t},J("tap"),Je()},fillcrate(n,t,e){oE(+n.dataset.i,t,e)},sendship(n,t,e){aE(t,e)},shipnow(){if(_.gems<2){_t("Cần 2 kim cương");return}_.gems-=2,_.ship=hc(),J("ship"),Je()},sell(n,t,e){const i=n.dataset.k;zt(i)<1||(Xe(i,-1),_.coins+=Xt[i].v,Cn(t,e,Xt[i].v),J("coin"),Je())},eat(n,t,e){const i=n.dataset.k;if(!(zt(i)<1)){if(_.energy>=99){_t("Năng lượng đã rất nhiều rồi");return}Xe(i,-1),_.energy+=Xt[i].energy,an(t,e-20,`+${Xt[i].energy}⚡`),J("collect"),ie.type==="energy"?nn():Je()}},buyenergy(){if(_.energy>=Ai(_.level)){_t("Năng lượng đang đầy rồi"),nn();return}if(_.gems<5){_t("Cần 5 kim cương"),J("no");return}_.gems-=5,_.energy=Math.max(_.energy,Ai(_.level)),J("collect"),nn()},upbarn(){const n=Jf(_.barnLvl);if(_.coins<n){_t(`Cần thêm ${n-_.coins} xu nữa`),J("no");return}_.coins-=n,_.barnLvl++,J("build"),_t(`Kho chứa được ${eh()} món`),Je()},shoptab(n){cs=n.dataset.k,Je()},buy(n){uE(n.dataset.k)},claimquest(n,t,e){const i=Dg();if(i){Cn(t,e,i.coins||0),nr(t,e),i.gems&&gs(t,e);for(let s=0;s<Math.min(i.energy||0,4);s++)er(t,e,"#energyPill",to,s*80);J("coin"),nn(),Te(),setTimeout(()=>{ie||rc()},900)}},speed(n){gE(xn(+n.dataset.oid))},questgo(){nn();const n=Km(),t=(n==null?void 0:n.oid)!=null&&Wh(n.oid);if(!t)return;const[e,i]=Gs(kn.copy(t.position));(e<Kn.l||e>innerWidth-Kn.r||i<Kn.t||i>innerHeight-Kn.b)&&Ph(t.position.clone())},togglesound(){_.sound=!_.sound,Xa()},togglemusic(){_.music=!_.music,_.music?Em():JS(),Xa()},reset(){Xa(!0)},backup(){mn("backup","Mã sao lưu",`<p class="hint">Sao chép mã này, rồi trên máy mới vào Cài đặt → Nhập mã.</p>
      <textarea id="saveCode" class="code" readonly>${Ng()}</textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn orange" data-act="copycode">Sao chép mã</button></div>`)},copycode(){var t;const n=ot("#saveCode");((t=navigator.clipboard)==null?void 0:t.writeText(n.value).then(()=>_t("Đã sao chép mã"),()=>{n.select(),_t("Hãy giữ vào ô mã và chọn Sao chép")}))??(n.select(),_t("Hãy giữ vào ô mã và chọn Sao chép"))},restore(){mn("restore","Nhập mã sao lưu",`<p class="hint">Dán mã từ máy cũ vào đây. Nông trại hiện tại trên máy này sẽ được thay thế.</p>
      <textarea id="restoreCode" class="code" placeholder="Dán mã vào đây"></textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn red" data-act="restoreyes">Khôi phục</button></div>`)},restoreyes(){try{Ug(ot("#restoreCode").value),_t("Đã khôi phục! Đang mở lại…"),setTimeout(()=>location.reload(),600)}catch{_t("Mã không đúng. Kiểm tra lại đã dán đủ mã chưa nhé"),J("no")}},resetyes(){Og(),location.reload()}};function yE(){const n=t=>{const e=t.target.closest("[data-act],[data-close]");if(!e)return;if(Wn(),e.hasAttribute("data-close")){nn();return}const i=xE[e.dataset.act];if(!i)return;let s=t.clientX,r=t.clientY;if(!s&&!r){const o=e.getBoundingClientRect();s=o.left+o.width/2,r=o.top+o.height/2}i(e,s,r),Te(),se()};document.addEventListener("click",n),ot("#btnShop").onclick=()=>{Wn(),J("tap"),lE()},ot("#btnBarn").onclick=()=>{Wn(),J("tap"),Fm()},ot("#btnSet").onclick=()=>{Wn(),J("tap"),Xa()},ot("#questBtn").onclick=()=>{Wn(),rc()},ot("#btnGift").onclick=()=>{Wn(),Xm(),Te(),se()},ot("#energyPill").onclick=()=>{Wn(),Xo()},ot("#btnNb").onclick=()=>{if(Wn(),J("tap"),_.level<2){_t("Hàng xóm mở ở cấp 2");return}Nw()},ot("#btnAdv").onclick=()=>{Wn(),qm()},ot("#barnIco").src=Le["b:crate"],document.addEventListener("keydown",t=>{t.key==="Escape"&&(ie?nn():ce&&Gm())})}function qm(){if(J("tap"),!_.boatFixed){_t("Sửa thuyền ở bến trước nhé!");const n=_.objs.find(t=>t.k==="boat");n&&(Ph(on(n.x,n.z,...pn(n))),Tn(n.id));return}if(_.level<2){_t("Phiêu lưu mở ở cấp 2");return}uw({openEnergy:Xo,onLeave:jm}),Qe("sail")}function jm(){const n=_.pendingDecor||[];for(;n.length;){const t=n.shift(),e=lc(1,1,12+Ht,9+Ht);if(!e)break;const i={id:Wr(),k:"decor",t,x:e[0],z:e[1],r:0};_.objs.push(i),Wi(i),Zs(he.get(i.id).root.position),_t(`${Zn[t].n} đã về nông trại!`),Tn(i.id)}se()}let Xu=[];function qu(){const n=Lt(),t=[];for(const s of _.objs)if(he.get(s.id)){if(s.site){!ds(s)&&zo(s)&&Object.entries(Ho(s)).some(([o,a])=>a.got<a.need&&zt(o)>0)&&t.push({oid:s.id,y:1.6,mark:"🔨",cls:"sitemark"});continue}if(s.k==="pen"){const o=fn[s.t],a=s.animals.filter(l=>l.e&&n>=l.e).length,c=s.animals.filter(l=>!l.e).length;a?t.push({oid:s.id,y:1.4,icon:o.prod,n:a}):c&&t.push({oid:s.id,y:1.4,icon:o.feed,n:zt(o.feed)?null:0,cls:"hungry"+(zt(o.feed)?"":" warn")})}else if(s.k==="fac"){const o=s.jobs.filter(a=>n>=a.e);o.length&&t.push({oid:s.id,y:2.6,icon:sn[s.t].rec[o[0].r].out,n:o.length>1?o.length:null})}else s.k==="helper"?Ws(s)&&t.push({oid:s.id,y:1.9,icon:"wood",n:Ws(s)}):s.k==="market"?Of()&&t.push({oid:s.id,y:1.9,html:tn,n:Of()}):s.k==="board"&&_.orders.some(o=>!o.wait&&fs(o.items))&&t.push({oid:s.id,y:1.9,mark:"!"})}_.ship.st==="docked"&&_.ship.crates.some(s=>!s.done&&zt(s.item)>=s.n)&&t.push({oid:"ship",y:3.4,mark:"!"}),t.push(..._w()),t.push({oid:"pier",y:1.4,mark:"🎣",cls:"fishmark"});const e=Gr();e&&_.qprog>=e.n?t.push({oid:"maisie",y:1.3,mark:"✓"}):e&&_.quest<ac.length&&_.qprog===0&&t.push({oid:"maisie",y:1.3,mark:"!"});const i=t.map(s=>s.oid+(s.icon||s.mark||"h")+s.n+s.cls).join("|");i!==qu.sig&&(qu.sig=i,Xu.forEach(s=>s.el.remove()),Xu=t.map(s=>{const r=document.createElement("button");return r.className="bub "+(s.mark?"mark":"")+" "+(s.cls||""),r.innerHTML=s.mark?s.mark:`${s.html||Ee(s.icon)}${s.n!=null?`<span class="n">${s.n}</span>`:""}`,r.onclick=o=>{Wn(),Im(s.oid,o.clientX,o.clientY),Te(),se()},ot("#bubbles").appendChild(r),{...s,el:r}}))}const kn=new I;function Wh(n){var t;return n==="ship"?dn.dock:n==="pier"?dn.pier:n==="maisie"?dn.maisie:typeof n=="string"&&n.startsWith("v:")?xw(n):(t=he.get(n))==null?void 0:t.root}let Nn=null;const Kn={l:110,r:60,t:150,b:140},bE=new I,ju=n=>zS(n,t=>{var o;const e=(o=he.get(t.id))==null?void 0:o.root;if(!e)return 1/0;const[i,s]=Gs(bE.copy(e.position)),r=i<Kn.l||i>innerWidth-Kn.r||s<Kn.t||s>innerHeight-Kn.b;return Math.hypot(i-innerWidth/2,s-innerHeight/2)+(r?1e4:0)}),ME={house:2.6,fac:2.2,helper:1.8,pen:1.8,boat:1.3,gate:1.3,obstacle:.9},$i=n=>{var t;return{oid:n.id,y:n.site&&!n.site.ruin&&n.k!=="gate"?1.5:(ME[n.k]||1.4)*(n.k==="fac"&&((t=Zf[n.t])==null?void 0:t.scale)||1)}},Lr=n=>({el:"#mBody "+n});function Ym(n){const t=Xt[n],e=Lt();if((t==null?void 0:t.mat)===1){const i=ju(s=>{var r;return Mn[s.t].drop[n]||((r=Mn[s.t].rare)==null?void 0:r[n])});return i&&$i(i)}if((t==null?void 0:t.mat)===2){const i=_.objs.find(s=>s.k==="fac"&&sn[s.t].rec.some(r=>r.out===n));return i?i.site?$h(i):$i(i):{el:"#btnShop"}}if(Fe[n]){const i=_.objs.find(s=>s.k==="field"&&s.crop===n&&tr(s,e)===3)||_.objs.find(s=>s.k==="field"&&!s.crop);return i?{oid:i.id,y:.5}:null}return null}function $h(n){if(ie)return ie.type!=="site"||ie.oid!==n.id?null:ot('#mBody [data-act="give"]:not(.gray)')?Lr('[data-act="give"]:not(.gray)'):{el:"#modal .xbtn"};const t=Object.entries(Ho(n)).filter(([,e])=>e.got<e.need);if(ds(n)||t.some(([e,i])=>zt(e)>=i.need-i.got))return $i(n);for(const[e]of t){const i=Ym(e);if(i)return i}return $i(n)}function Wf(n,t=1){const e=Lt(),i=_.objs.find(c=>c.k==="fac"&&sn[c.t].rec.some(l=>l.out===n));if(!i)return ie?null:{el:"#btnShop"};if(i.site)return $h(i);const s=sn[i.t].rec.findIndex(c=>c.out===n),r=sn[i.t].rec[s],o=i.jobs.filter(c=>c.r===s).length*(r.qty||1)<t,a=i.jobs.length<(i.slots||2);if(ie)return ie.type!=="fac"||ie.oid!==i.id?null:i.jobs.some(c=>e>=c.e)?Lr(".slot.done"):o&&a&&fs(r.in)?Lr(`[data-act="make"][data-i="${s}"]`):o&&a?{el:"#modal .xbtn"}:null;if(i.jobs.some(c=>e>=c.e))return $i(i);if(o&&a&&!fs(r.in)){for(const c of Object.keys(r.in))if(zt(c)<r.in[c]){const l=Ym(c);if(l)return l}}return $i(i)}function Km(){if(V.mode!=="farm"||!sh()&&_.quest>=10)return null;const n=Gr();if(!n)return null;if(_.qprog>=n.n)return ie?ie.type==="quest"?Lr('[data-act="claimquest"]'):{el:"#modal .xbtn"}:{el:"#questBtn"};if((ie==null?void 0:ie.type)==="quest")return Lr('[data-act="questgo"]');if(ce)return ce.isNew&&n.ev==="build"?{el:'#tray [data-act="placeok"]'}:null;const t=Lt(),e=_.objs,i=s=>e.find(s);if(n.ev==="build"){const s=i(r=>r.site&&Vo(r)===n.key);return s?$h(s):ie?ie.type==="shop"?Lr(cs==="factory"?`[data-act="buy"][data-k="${n.key}"]`:'[data-act="shoptab"][data-k="factory"]'):null:n.key.startsWith("fac:")?{el:"#btnShop"}:null}if(n.ev==="make")return Wf(n.key,n.n-_.qprog);if(ie)return null;switch(n.ev){case"harvest":{const s=i(o=>o.k==="field"&&tr(o,t)===3&&(!n.key||o.crop===n.key));if(s)return{oid:s.id,y:.5};const r=i(o=>o.k==="field"&&!o.crop);return r?{oid:r.id,y:.5}:null}case"plant":{const s=i(r=>r.k==="field"&&!r.crop);return s?{oid:s.id,y:.5}:null}case"feed":{const s=i(r=>r.k==="pen"&&!r.site&&r.animals.some(o=>!o.e))||i(r=>r.k==="pen");return s?zt(fn[s.t].feed)||!s.animals.some(r=>!r.e)?$i(s):Wf(fn[s.t].feed):null}case"collect":case"buyanimal":{const s=i(r=>r.k==="pen");return s?$i(s):null}case"deliver":{const s=i(r=>r.k==="board");return s?{oid:s.id,y:2.1}:null}case"clear":{const s=ju(VS)||ju(()=>!0);return s?$i(s):null}case"crate":return{oid:"ship",y:3.6};case"buydecor":case"buytree":return{el:"#btnShop"};case"sail":return{el:"#btnAdv"}}return null}function SE(){var s;Nn||(Nn=document.createElement("div"),Nn.className="hand",Nn.textContent="👇",document.body.appendChild(Nn));const n=Km();if(!n){Nn.hidden=!0;return}let t,e,i="👇";if(n.el){const r=(s=ot(n.el))==null?void 0:s.getBoundingClientRect();if(!r||!r.width){Nn.hidden=!0;return}t=r.left+r.width/2,e=r.top+r.height/2+24}else{const r=Wh(n.oid);if(!r){Nn.hidden=!0;return}kn.copy(r.position),kn.y+=n.y,[t,e]=Gs(kn),e+=22;const o=Math.min(innerWidth-Kn.r,Math.max(Kn.l,t)),a=Math.min(innerHeight-Kn.b,Math.max(Kn.t,e));i=o>t?"👈":o<t?"👉":a>e?"👆":"👇",t=o,e=a}Nn.textContent!==i&&(Nn.textContent=i),Nn.style.zIndex=n.el?35:5,Nn.hidden=!1,Nn.style.transform=`translate(${t}px,${e}px)`}function wE(){var n;SE();for(const t of Xu){const e=Wh(t.oid);if(!e)continue;kn.copy(e.position),kn.y+=t.y;const[i,s]=Gs(kn);t.el.style.transform=`translate(${i}px,${s}px)`}if(bn){const t=(n=he.get(bn.oid))==null?void 0:n.root;if(t){kn.copy(t.position),kn.y+=1;const[e,i]=Gs(kn);bn.el.style.left=e+"px",bn.el.style.top=i+"px"}}}let $f=0;function Xf(){var e,i;const n=Lt();for(const s of _.objs)s.k==="helper"&&Dh(s,n);Eg(),Rg(),gw(),Sw();const t=GS(n);t&&(Wi(t),Tn(t.id)),YS(n),DS(wm()),ie&&ie.type==="orders"||uc();for(const s of he.values())(e=s.refresh)==null||e.call(s,n);qu(),(i=bn==null?void 0:bn.draw)==null||i.call(bn),ie&&ie===Fh&&Ne&&Ne()!==ie.sig&&Je(),document.querySelectorAll("[data-rt]").forEach(s=>{s.textContent=yi(+s.dataset.rt-n)}),document.querySelectorAll("#mBody [data-s]").forEach(s=>{s.style.width=Math.min(100,(n-s.dataset.s)/(s.dataset.e-s.dataset.s)*100)+"%"}),Te(),n-$f>5e3&&(se(),$f=n)}function EE(n){const t=new Map;let e=null,i=!1,s=null,r=0,o=null,a={x:0,y:0},c=0;n.addEventListener("pointerdown",u=>{try{n.setPointerCapture(u.pointerId)}catch{}if(t.set(u.pointerId,{x:u.clientX,y:u.clientY}),a.x=a.y=0,t.size===1)e={x:u.clientX,y:u.clientY,t:performance.now()},i=!1,s=pE(u.clientX,u.clientY)?"drag":"pan",clearTimeout(r),r=setTimeout(()=>{!i&&t.size===1&&s==="pan"&&(s="none",fE(e.x,e.y))},550);else if(t.size===2){clearTimeout(r),Hf(),s==="drag"&&Gf(!0,0,0),s="pinch";const[h,d]=[...t.values()];o={d:Math.hypot(h.x-d.x,h.y-d.y),zoom:V.zoom,mx:(h.x+d.x)/2,my:(h.y+d.y)/2}}}),n.addEventListener("pointermove",u=>{const h=t.get(u.pointerId);if(!h)return;const d=u.clientX-h.x,f=u.clientY-h.y;if(h.x=u.clientX,h.y=u.clientY,e&&Math.hypot(u.clientX-e.x,u.clientY-e.y)>10&&(i=!0,clearTimeout(r)),s==="pan"&&i){gl(d,f);const p=performance.now(),v=Math.max(1,p-c);c=p,a.x=d/v*16,a.y=f/v*16}else if(s==="drag")mE(u.clientX,u.clientY);else if(s==="pinch"&&t.size===2){const[p,v]=[...t.values()],g=Math.hypot(p.x-v.x,p.y-v.y),m=(p.x+v.x)/2,S=(p.y+v.y)/2;yf(o.zoom*g/o.d),gl(m-o.mx,S-o.my),o.mx=m,o.my=S}});const l=u=>{if(t.has(u.pointerId)){if(t.delete(u.pointerId),clearTimeout(r),t.size||Hf(),s==="pinch"){t.size===0&&(s=null),e=null;return}t.size||(s==="drag"?Gf(i,u.clientX,u.clientY):s==="pan"&&!i&&e&&performance.now()-e.t<550&&Pm(u.clientX,u.clientY),(s!=="pan"||performance.now()-c>80)&&(a.x=a.y=0),s=null,e=null)}};return n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),n.addEventListener("wheel",u=>{u.preventDefault(),yf(V.zoom*(u.deltaY<0?1.1:.9))},{passive:!1}),document.addEventListener("gesturestart",u=>u.preventDefault()),function(){t.size||Math.abs(a.x)<.2&&Math.abs(a.y)<.2||(gl(a.x,a.y),a.x*=.9,a.y*=.9)}}const TE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const AE=new pc(-1,1,1,-1,0,1);class CE extends cn{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const RE=new CE;class Jm{constructor(t){this._mesh=new Nt(RE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,AE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Zm extends jo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vh.clone(t.uniforms),this.material=new xi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jm(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qf extends jo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class PE extends jo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class IE{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new ms(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$r}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zm(TE),this.copyPass.material.blending=Hi,this.clock=new WM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qf!==void 0&&(o instanceof qf?i=!0:o instanceof PE&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class DE extends jo{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const LE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class NE extends jo{constructor(){super();const t=LE;this.uniforms=vh.clone(t.uniforms),this.material=new IM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Jm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_p?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ai={clouds:[],birds:[],boats:[],flies:[],foam:[]};function UE(){var o;const n=new Ut;V.farm.add(n);const t=new Jn({colorWrite:!1,depthWrite:!1});for(let a=0;a<4;a++){const c=new Ut;for(let l=0;l<5;l++){const u=new Nt(new Vn(1.6+Math.random()*1.2,10,8),t);u.position.set((l-2)*1.9,Math.random()*.6,(Math.random()-.5)*2),u.castShadow=!0,c.add(u)}c.position.set(-30+a*16,14,-20+a*9),c.userData.speed=.5+Math.random()*.4,n.add(c),ai.clouds.push(c)}const e=new Pe({color:16777215,roughness:.8}),i=new Pe({color:10135472});for(let a=0;a<4;a++){const c=ee("gull1",1,1,{shadow:!1}),l=ee("gull2",1,1,{shadow:!1});if(c&&l){const p=new Ut;p.add(c,l),p.userData={r:16+a*4,h:5+a*.8,sp:.12+a*.03,ph:a*1.7,frames:[c,l]},n.add(p),ai.birds.push(p);continue}const u=new Ut,h=new Nt(new Ve(.18,.14,.5),e);u.add(h);const d=new Nt(new Ve(.14,.14,.14),e);d.position.set(0,.06,.3),u.add(d);const f=new Nt(new Ve(.05,.05,.12),new Pe({color:16756784}));f.position.set(0,.04,.42),u.add(f);for(const p of[-1,1]){const v=new Ut;v.position.set(p*.09,.03,0);const g=new Nt(new Ve(.6,.03,.26),(p<0,e));g.position.x=p*.3,v.add(g);const m=new Nt(new Ve(.2,.031,.22),i);m.position.x=p*.62,v.add(m),v.userData.side=p,u.add(v)}u.castShadow=!0,u.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),u.userData={r:16+a*4,h:5+a*.8,sp:.12+a*.03,ph:a*1.7},n.add(u),ai.birds.push(u)}for(let a=0;a<2;a++){const c=ee("boat",1,1,{scale:a?.6:.75,shadow:!1})||fe("pirate/boat-row-large",{h:.9});Object.assign(c.userData,{r:34+a*7,sp:(a?-1:1)*(.025+a*.01),ph:a*3}),n.add(c),ai.boats.push(c)}for(let a=0;a<2;a++){const c=Lo(te+6.2,4.2),l=Lo(te+4.6,3.2);c.holes.push(new Pu(l.getPoints(24).reverse()));const u=new Nt(new Go(c,24),new Jn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=-.45,u.renderOrder=3,u.userData.ph=a*.5,n.add(u),ai.foam.push(u)}const s=[16747224,16765503,9425151,16777215];for(let a=0;a<5;a++){const c=new Ut,l=new Jn({color:s[a%4],side:li});for(const u of[-1,1]){const h=new Nt(new ji(.16,.12),l);h.position.x=u*.08,h.userData.side=u,c.add(h)}c.userData={cx:7+(Math.random()-.5)*12,cz:7+(Math.random()-.5)*10,ph:Math.random()*6},n.add(c),ai.flies.push(c)}const r=ee("signboard",1,1,{scale:2.6});if(r){const a=r.userData.plane.material,c=a.map.image,l=document.createElement("canvas");l.width=c.width*2,l.height=c.height*2;const u=l.getContext("2d"),h=new Ks(l);h.colorSpace=Ie,h.anisotropy=4;const d=()=>{u.setTransform(2,0,0,2,0,0),u.clearRect(0,0,c.width,c.height),u.drawImage(c,0,0),u.fillStyle="#fff8e7",u.strokeStyle="#6e4322",u.lineJoin="round",u.textAlign="center",u.textBaseline="middle",[["Maisie's",112],["Farm",196]].forEach(([p,v])=>{let g=62;for(u.font=`800 ${g}px "Baloo 2", system-ui, sans-serif`;u.measureText(p).width>250&&g>30;)u.font=`800 ${--g}px "Baloo 2", system-ui, sans-serif`;u.setTransform(2,-.54,0,2,170*2,v*2),u.lineWidth=9,u.strokeText(p,0,2),u.fillText(p,0,2)}),h.needsUpdate=!0};d(),a.map=h;const f=on(14+Ht,te-1);r.position.set(f.x,0,f.z+.9),n.add(r),(o=document.fonts)==null||o.ready.then(d)}}function kE(n,t){for(const e of ai.clouds)e.position.x+=t*e.userData.speed,e.position.z+=t*e.userData.speed*.4,e.position.x>34&&(e.position.x=-34,e.position.z=-24+Math.random()*20);for(const e of ai.birds){const i=e.userData,s=n*i.sp+i.ph;if(e.position.set(Math.cos(s)*i.r,i.h+Math.sin(n*.7+i.ph)*.6,Math.sin(s)*i.r),i.frames){const[o,a]=i.frames,c=Math.sin(n*7+i.ph)>0;o.visible=c,a.visible=!c;const l=-Math.sin(s)*i.sp,u=Math.cos(s)*i.sp,h=l-u>0?-1:1;o.userData.plane.scale.x=a.userData.plane.scale.x=h;continue}e.rotation.y=-s,e.rotation.z=.25;const r=Math.sin(n*9+i.ph)*.5;e.children.forEach(o=>{o.userData.side&&(o.rotation.z=o.userData.side*r)})}for(const e of ai.boats){const i=e.userData,s=n*i.sp+i.ph;if(e.position.set(Math.cos(s)*i.r,-.5+Math.sin(n*1.3+i.ph)*.05,Math.sin(s)*i.r),i.plane){i.isArt=!0,qi(e,-Math.sin(s)*i.sp,Math.cos(s)*i.sp),i.plane.rotation.z=Math.sin(n+i.ph)*.04;continue}e.rotation.y=-s+(i.sp>0?Math.PI:0),e.rotation.z=Math.sin(n+i.ph)*.04}for(const e of ai.foam){const i=(n*.25+e.userData.ph)%1;e.scale.setScalar(1+i*.1),e.material.opacity=.75*(1-i)}for(const e of ai.flies){const i=e.userData,s=n*.6+i.ph;e.position.set(i.cx+Math.cos(s)*1.4,.7+Math.sin(n*2+i.ph)*.25,i.cz+Math.sin(s*1.3)*1.2),e.rotation.y=-s;const r=Math.sin(n*18+i.ph)*1.1;e.children.forEach(o=>{o.rotation.y=o.userData.side*r})}}const OE={harvest:.03,collect:.03,make:.04,clear:.08,chest:.35,deliver:.06,visitor:.1,crate:.06,help:.06},Qm=wo.flatMap(n=>n.pieces.map(t=>({set:n.id,id:t[0],n:t[1],model:t[2]})));function tg(n=new Date){const t=(n.getDay()+6)%7;return new Date(n.getFullYear(),n.getMonth(),n.getDate()-t)}function Fo(){const n=tg().toDateString();return(!_.ev||_.ev.week!==n)&&(_.ev={week:n,pts:0,claimed:[]}),_.coll||(_.coll={}),_.ev}const FE=()=>tg().getTime()+7*864e5-Date.now();let qa={};function BE(n){qa=n,Fo(),Hr("act",(t,e,i=1)=>{const s=Fo(),r=ci.gain[t];r&&(s.pts+=r,zE()),Math.random()<(OE[t]||0)&&VE(wn(Qm))}),ot("#btnEvent").onclick=()=>{J("tap"),eg()},ot("#btnColl").onclick=()=>{J("tap"),ng()},ot("#evIco").src=Le["ev:token"],Yo()}function zE(){ot("#btnEvent").animate([{transform:"scale(1.2)"},{transform:"scale(1)"}],{duration:300}),Yo()}function Yo(){const n=Fo(),t=ci.tiers.some((i,s)=>n.pts>=i.at&&!n.claimed.includes(s));ot("#evBadge").hidden=!t,ot("#evPts").textContent=n.pts;const e=wo.some(i=>i.pieces.every(s=>(_.coll[s[0]]||0)>0));ot("#collBadge").hidden=!e}function VE(n){_.coll[n.id]=(_.coll[n.id]||0)+1;const t=document.createElement("div");t.className="found",t.innerHTML=`<img src="${Le["col:"+n.id]}" alt=""><div><small>Tìm thấy đồ sưu tập!</small><b>${Re(n.n)}</b></div>`,ot("#fx").appendChild(t),setTimeout(()=>t.remove(),3e3),J("collect"),Yo(),se()}function HE(n){return n.coins?`${tn}${n.coins}`:n.gems?`${An}${n.gems}`:`<img class="inl" src="${Le["decor:"+n.decor]}" alt="">${Re(Zn[n.decor].n)}`}function eg(){const n=Fo(),t=ci.tiers[ci.tiers.length-1].at,e=ci.tiers.map((i,s)=>{const r=n.claimed.includes(s),o=n.pts>=i.at&&!r;return`<div class="tier ${r?"done":""}"><span class="at"><img class="inl" src="${Le["ev:token"]}" alt="">${i.at}</span>
      <span class="rw">${HE(i)}</span>
      ${r?'<span class="ok">Đã nhận ✓</span>':`<button class="btn small ${o?"orange":"gray"}" data-tier="${s}">${o?"Nhận":"Chưa đủ"}</button>`}</div>`}).join("");Ki("event",ci.n,`<p class="hint">Gom <b>${ci.token}</b> bằng cách thu hoạch, làm bánh, giao hàng, bán cho khách và phiêu lưu. Còn <b>${yi(FE())}</b> là hết tuần.</p>
    <div class="prog"><i style="width:${Math.min(100,n.pts/t*100)}%"></i><span><img class="inl" src="${Le["ev:token"]}" alt=""> ${n.pts} / ${t}</span></div>
    <div class="tiers">${e}</div>`),document.querySelectorAll("[data-tier]").forEach(i=>i.onclick=()=>GE(+i.dataset.tier))}function GE(n){var i;const t=Fo(),e=ci.tiers[n];if(t.pts<e.at||t.claimed.includes(n)){_t(`Cần ${e.at} ${ci.token.toLowerCase()}`),J("no");return}t.claimed.push(n),e.coins&&(_.coins+=e.coins),e.gems&&(_.gems+=e.gems),e.decor&&((_.pendingDecor||(_.pendingDecor=[])).push(e.decor),nn(),(i=qa.placePending)==null||i.call(qa)),Yi(),J("level"),se(),Te(),Yo(),e.decor||eg()}function ng(){const n=wo.map(t=>{const e=t.pieces.every(i=>(_.coll[i[0]]||0)>0);return`<div class="cset"><h3 class="sub">${Re(t.n)}</h3><div class="cpieces">${t.pieces.map(i=>{const s=_.coll[i[0]]||0;return`<div class="cp ${s?"":"none"}"><img src="${Le["col:"+i[0]]}" alt=""><small>${Re(i[1])}</small>${s?`<span class="q">${s}</span>`:""}</div>`}).join("")}</div>
    <div class="row" style="justify-content:center;gap:10px;margin-top:8px"><span class="reward">${tn}${t.reward.coins} ${An}${t.reward.gems}</span>
    <button class="btn small ${e?"orange":"gray"}" data-set="${t.id}">${e?"Đổi thưởng":"Chưa đủ bộ"}</button></div></div>`}).join("");Ki("coll","Sổ sưu tập",`<p class="hint">Đồ sưu tập rơi ra ngẫu nhiên khi thu hoạch, làm bánh, dọn dẹp và mở rương báu.</p>${n}`),document.querySelectorAll("[data-set]").forEach(t=>t.onclick=()=>{const e=wo.find(i=>i.id===t.dataset.set);if(!e.pieces.every(i=>(_.coll[i[0]]||0)>0)){_t("Còn thiếu vài món trong bộ này"),J("no");return}e.pieces.forEach(i=>_.coll[i[0]]--),_.coins+=e.reward.coins,_.gems+=e.reward.gems,Yi(),J("level"),se(),Te(),Yo(),ng()})}function WE(){const n=Qm.map(t=>["col:"+t.id,{model:t.model}]);return n.push(["ev:token",{model:ci.icon,paint:ci.tint}]),n}async function $E(){Lg();const n=ot("#loadfill");await _1(u=>{n.style.width=u*80+"%"}),await u1(),ot("#loadtxt").textContent="Đang vẽ hình…",await E1([...T1(),...SS(),...WE()]),n.style.width="100%";const t=ot("#c");a1(t);for(const u of _.objs)Wi(u);Mw(Wi),kg(Wi),Uw(),xS(),gS(),mw(),UE(),Zs(on(12.5+Ht,11.5+Ht));const e=EE(t);yE(),BE({placePending:jm}),Te(),ot("#loading").hidden=!0,ot("#hud").hidden=!1,document.addEventListener("pointerdown",Wn,{once:!0}),setInterval(Xf,250),Xf();const i=new IE(V.renderer);i.addPass(new DE(V.scene,V.camera)),i.addPass(new NE),i.addPass(new Zm({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(tDiffuse, vUv);
        float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
        c.rgb = mix(vec3(l), c.rgb, 1.32);                 // độ bão hoà
        c.rgb = (c.rgb - 0.5) * 1.06 + 0.5;               // tương phản nhẹ
        c.rgb += (1.0 - c.rgb) * 0.06;                    // nâng vùng tối cho trong trẻo
        c.rgb *= vec3(1.03, 1.0, 0.97);                   // ấm hơn chút
        gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
      }`}));const s=()=>{i.setPixelRatio(V.renderer.getPixelRatio()),i.setSize(window.innerWidth,window.innerHeight)};s(),window.addEventListener("resize",s);let r=performance.now(),o=0,a=!1;const c=()=>{a=!0,V.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),V.scene.traverse(u=>{var h;u.isDirectionalLight&&u.shadow&&(u.shadow.mapSize.set(1024,1024),(h=u.shadow.map)==null||h.dispose(),u.shadow.map=null)}),window.dispatchEvent(new Event("resize"))};_.lowGfx&&c();const l=()=>{var f;const u=performance.now(),h=Math.min(.1,(u-r)/1e3);r=u,!a&&!document.hidden&&(o=h>.04?o+h:Math.max(0,o-h*.5),o>3&&(_.lowGfx=!0,c()));const d=u/1e3;if(e(),V.mode==="adv")lw(d,h);else if(V.mode==="nb")Lw(d,h);else{for(const p of he.values())(f=p.update)==null||f.call(p,d,h),MS(p.root);bS(d,h),vS(d),US(d),vw(d,h),kE(d,h)}V.waterTex.offset.x=d*.01%1,V.waterTex.offset.y=d*.006%1,wE(),a?V.renderer.render(V.scene,V.camera):i.render(),requestAnimationFrame(l),a&&(V.renderer.shadowMap.autoUpdate=Math.floor(d*30)%2===0)};l(),document.addEventListener("visibilitychange",()=>{document.hidden&&se()}),window.addEventListener("pagehide",se)}$E().catch(n=>{console.error(n),ot("#loadtxt").textContent="Có lỗi khi mở game. Hãy tải lại trang."});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/maisies-farm/sw.js").catch(()=>{}));
