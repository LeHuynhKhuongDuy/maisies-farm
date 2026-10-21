(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jt=40,vi=26,$t=14,Ds=[{id:"core",n:"Vùng lõi",rect:[14,14,26,26],open:!0},{id:"west",n:"Rừng phía Tây",rect:[0,14,14,26],gate:"bridge_w",lv:4},{id:"north",n:"Rừng phía Bắc",rect:[14,0,26,14],gate:"bridge_n",lv:7},{id:"old",n:"Rừng già",rect:[0,0,14,14],gate:"stairs_old",lv:11}],Gt={wheat:{n:"Lúa mì",icon:"nature/crops_wheatStageB",tint:16765534,v:2},corn:{n:"Bắp",icon:"food/corn",v:3},carrot:{n:"Cà rốt",icon:"food/carrot",v:4},strawberry:{n:"Dâu tây",icon:"food/strawberry",v:5},tomato:{n:"Cà chua",icon:"food/tomato",v:5},pumpkin:{n:"Bí ngô",icon:"food/pumpkin",v:8},melon:{n:"Dưa hấu",icon:"food/watermelon",v:10},apple:{n:"Táo",icon:"food/apple",v:6},coconut:{n:"Dừa",icon:"food/coconut",v:6},orange:{n:"Cam",icon:"food/orange",v:7},egg:{n:"Trứng",icon:"food/egg",v:6},milk:{n:"Sữa",icon:"food/carton",v:9},mushroom:{n:"Nấm",icon:"food/mushroom",v:12},chickenfeed:{n:"Thức ăn gà",icon:"food/bag",tint:15910987,v:2},cowfeed:{n:"Thức ăn bò",icon:"food/bag",tint:8176746,v:3},pigfeed:{n:"Thức ăn heo",icon:"food/bag",tint:14256730,v:4},bread:{n:"Bánh mì",icon:"food/loaf",v:10,energy:4},cookie:{n:"Bánh quy",icon:"food/cookie",v:14,energy:5},cake:{n:"Bánh kem",icon:"food/cake",v:30},applepie:{n:"Bánh táo",icon:"food/pie",v:24},cheese:{n:"Phô mai",icon:"food/cheese",v:20},icecream:{n:"Kem dâu",icon:"food/ice-cream-cup",v:18},applejuice:{n:"Nước táo",icon:"food/soda-glass",v:20},orangejuice:{n:"Nước cam",icon:"food/cocktail",v:23},coconutmilk:{n:"Nước dừa",icon:"food/coconut-half",v:14},soup:{n:"Súp rau",icon:"food/bowl-soup",v:26,energy:6},sandwich:{n:"Bánh kẹp",icon:"food/sandwich",v:30,energy:8},pizza:{n:"Pizza",icon:"food/pizza",v:40,energy:12},pancakes:{n:"Bánh kếp",icon:"food/pancakes",v:28,energy:8},sunflower:{n:"Hướng dương",icon:"nature/flower_yellowB",v:4},cabbage:{n:"Bắp cải",icon:"food/cabbage",v:9},onion:{n:"Hành tây",icon:"food/onion",v:8},banana:{n:"Chuối",icon:"food/banana",v:8},lemon:{n:"Chanh",icon:"food/lemon",v:8},pear:{n:"Lê",icon:"food/pear",v:9},cherry:{n:"Anh đào",icon:"food/cherries",v:11},honey:{n:"Mật ong",icon:"food/honey",v:14},donut:{n:"Bánh vòng",icon:"food/donut-sprinkles",v:34},cupcake:{n:"Bánh cupcake",icon:"food/cupcake",v:36},croissant:{n:"Bánh sừng bò",icon:"food/croissant",v:30},muffin:{n:"Bánh muffin",icon:"food/muffin",v:32},waffle:{n:"Bánh quế",icon:"food/waffle",v:34,energy:9},jam:{n:"Mứt dâu",icon:"food/honey",tint:16743034,v:30},lemontea:{n:"Trà chanh mật ong",icon:"food/cup-tea",v:28},salad:{n:"Sa lát",icon:"food/salad",v:32,energy:10},fish:{n:"Cá biển",icon:"food/fish",v:7},bigfish:{n:"Cá vàng to",icon:"food/fish",tint:16752704,v:16},grilledfish:{n:"Cá xiên nướng",icon:"food/skewer",v:30,energy:8},sushi:{n:"Sushi",icon:"food/sushi-salmon",v:34,energy:9},wood:{n:"Gỗ",v:2,mat:1},stone:{n:"Đá",v:2,mat:1},bamboo:{n:"Tre",v:2,mat:1},palmleaf:{n:"Lá cọ",v:1,mat:1},clay:{n:"Đất sét",v:2,mat:1},liana:{n:"Dây leo",v:2,mat:1},planks:{n:"Ván gỗ",v:6,mat:2},rack:{n:"Giá gỗ",v:8,mat:2},firewood:{n:"Củi",v:4,mat:2},basket:{n:"Giỏ đan",v:8,mat:2},reedmat:{n:"Chiếu",v:8,mat:2},rope:{n:"Dây thừng",v:6,mat:2},torch:{n:"Đuốc",v:10,mat:2}},Be={wheat:{lv:1,t:20,cost:1,xp:1,tint:16765534,stages:["nature/crops_leafsStageA","nature/crops_wheatStageA","nature/crops_wheatStageB"]},corn:{lv:2,t:40,cost:2,xp:1,stages:["nature/crops_cornStageA","nature/crops_cornStageB","nature/crops_cornStageD"]},carrot:{lv:3,t:60,cost:3,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_carrot"]},strawberry:{lv:4,t:80,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crops_leafsStageB"],deco:"food/strawberry"},tomato:{lv:5,t:90,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crops_leafsStageB"],deco:"food/tomato"},pumpkin:{lv:6,t:120,cost:6,xp:3,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_pumpkin"]},sunflower:{lv:6,t:70,cost:4,xp:2,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/flower_yellowB"],fit:{size:.36}},melon:{lv:8,t:150,cost:8,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","nature/crop_melon"]},cabbage:{lv:9,t:130,cost:7,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","food/cabbage"],fit:{size:.34}},onion:{lv:10,t:140,cost:7,xp:4,stages:["nature/crops_leafsStageA","nature/crops_leafsStageB","food/onion"],fit:{size:.28}}},Fi={palm:{n:"Cây dừa",lv:2,cost:60,t:100,yield:"coconut",qty:2,xp:2,model:"pirate/palm-straight",fruit:"food/coconut",palm:!0},apple:{n:"Cây táo",lv:3,cost:80,t:120,yield:"apple",qty:3,xp:2,model:"nature/tree_oak",fruit:"food/apple",lush:{fruit:15217963}},orange:{n:"Cây cam",lv:6,cost:120,t:150,yield:"orange",qty:3,xp:3,model:"nature/tree_fat",fruit:"food/orange",lush:{fruit:16751135}},banana:{n:"Cây chuối",lv:7,cost:140,t:160,yield:"banana",qty:3,xp:3,model:"pirate/palm-bend",fruit:"food/banana",palm:!0},lemon:{n:"Cây chanh",lv:8,cost:160,t:170,yield:"lemon",qty:3,xp:3,model:"nature/tree_oak",fruit:"food/lemon",lush:{fruit:16769594}},pear:{n:"Cây lê",lv:10,cost:200,t:190,yield:"pear",qty:3,xp:4,model:"nature/tree_fat",fruit:"food/pear",lush:{fruit:13164618}},cherry:{n:"Cây anh đào",lv:12,cost:260,t:210,yield:"cherry",qty:3,xp:4,model:"nature/tree_oak",fruit:"food/cherries",lush:{leaf:16751816,leaf2:16761564,fruit:14162748,blossom:!0}}},Ve={coop:{n:"Chuồng gà",lv:1,cost:80,animal:"pets/animal-chick",an:"Gà",feed:"chickenfeed",prod:"egg",t:60,xp:1,max:6,animalCost:30},cowpen:{n:"Chuồng bò",lv:4,cost:200,animal:"quat/Cow.fbx",an:"Bò",feed:"cowfeed",prod:"milk",t:120,xp:2,max:5,animalCost:80},pigpen:{n:"Chuồng heo",lv:7,cost:320,animal:"quat/Pig.fbx",an:"Heo",feed:"pigfeed",prod:"mushroom",t:150,xp:3,max:5,animalCost:120},beehive:{n:"Vườn ong",lv:7,cost:280,animal:"pets/animal-bee",an:"Ong",feed:"sunflower",prod:"honey",t:120,xp:3,max:4,animalCost:100,fly:!0}},sn={carpentry:{n:"Xưởng mộc",lv:1,cost:40,rec:[{out:"planks",qty:2,in:{wood:3},t:30,lv:1},{out:"firewood",qty:2,in:{wood:1},t:20,lv:1},{out:"rack",in:{wood:2,liana:1},t:45,lv:2}]},weaving:{n:"Nhà đan lát",lv:3,cost:120,rec:[{out:"basket",in:{palmleaf:3},t:30,lv:3},{out:"reedmat",in:{palmleaf:2,bamboo:2},t:45,lv:3},{out:"rope",in:{liana:1,palmleaf:2},t:60,lv:4},{out:"torch",in:{firewood:1,palmleaf:1},t:40,lv:4}]},feedmill:{n:"Máy xay thức ăn",lv:1,cost:60,rec:[{out:"chickenfeed",qty:3,in:{wheat:2},t:20,lv:1},{out:"cowfeed",qty:3,in:{corn:2},t:30,lv:4},{out:"pigfeed",qty:3,in:{carrot:2},t:40,lv:7}]},bakery:{n:"Lò bánh",lv:2,cost:120,rec:[{out:"bread",in:{wheat:3},t:40,lv:1},{out:"cookie",in:{wheat:2,egg:1},t:60,lv:3},{out:"applepie",in:{wheat:2,apple:2},t:80,lv:5},{out:"cake",in:{wheat:2,egg:2,milk:1},t:100,lv:6}]},dairy:{n:"Xưởng sữa",lv:4,cost:220,rec:[{out:"cheese",in:{milk:2},t:70,lv:4},{out:"icecream",in:{milk:1,strawberry:2},t:70,lv:5}]},juicebar:{n:"Quầy nước ép",lv:5,cost:260,rec:[{out:"coconutmilk",in:{coconut:2},t:50,lv:5},{out:"applejuice",in:{apple:3},t:60,lv:5},{out:"orangejuice",in:{orange:3},t:70,lv:6}]},kitchen:{n:"Bếp nấu",lv:6,cost:320,rec:[{out:"soup",in:{carrot:1,tomato:2,pumpkin:1},t:80,lv:6},{out:"sandwich",in:{bread:1,cheese:1,egg:1},t:80,lv:6},{out:"pancakes",in:{wheat:2,egg:1,milk:1},t:80,lv:7},{out:"pizza",in:{bread:1,cheese:1,tomato:2},t:100,lv:8},{out:"salad",in:{cabbage:1,tomato:1,onion:1},t:90,lv:10},{out:"waffle",in:{wheat:2,egg:1,honey:1},t:90,lv:11}]},seafood:{n:"Quán hải sản",lv:5,cost:300,rec:[{out:"grilledfish",in:{fish:2,corn:1},t:70,lv:5},{out:"sushi",in:{fish:1,cabbage:1},t:80,lv:9},{out:"soup",in:{bigfish:1,carrot:1,tomato:1},t:80,lv:6}]},sweets:{n:"Tiệm bánh ngọt",lv:9,cost:420,rec:[{out:"donut",in:{wheat:2,egg:1,honey:1},t:90,lv:9},{out:"cupcake",in:{wheat:1,milk:1,strawberry:2},t:100,lv:9},{out:"croissant",in:{wheat:3,milk:1},t:80,lv:10},{out:"muffin",in:{wheat:2,egg:1,banana:1},t:90,lv:11}]},jammaker:{n:"Nhà làm mứt",lv:10,cost:460,rec:[{out:"jam",in:{strawberry:3,honey:1},t:100,lv:10},{out:"lemontea",in:{lemon:2,honey:1},t:80,lv:10}]}},Is={lumberjack:{n:"Nhà tiều phu",lv:2,cost:80,every:90,gives:["wood","wood","bamboo","palmleaf","liana"],cap:[10,20,30],up:[{planks:6,rope:2},{planks:12,rack:4}]}},ac=[{planks:10,stone:10},{rope:3,basket:4},{torch:4,reedmat:4}],cc={"fac:carpentry":[{wood:6,stone:3}],"fac:feedmill":[{wood:6,palmleaf:4}],"fac:bakery":[{wood:8,stone:6},{planks:4,palmleaf:6}],"fac:weaving":[{wood:10,bamboo:6},{planks:6,palmleaf:8}],"fac:dairy":[{planks:6,stone:10},{reedmat:3,firewood:6}],"fac:juicebar":[{planks:8,bamboo:8},{basket:4,rope:2}],"fac:kitchen":[{stone:14,planks:8},{firewood:8,clay:6},{torch:3,reedmat:3}],"fac:seafood":ac,"fac:sweets":ac,"fac:jammaker":ac,"pen:coop":[{wood:6,palmleaf:6}],"pen:cowpen":[{wood:12,planks:4},{rope:2,palmleaf:10}],"pen:pigpen":[{wood:12,stone:8},{planks:6,rope:3}],"pen:beehive":[{planks:6,basket:3}],"gate:bridge_w":[{wood:10,bamboo:8},{planks:6,rope:2}],"gate:bridge_n":[{planks:12,rope:4},{stone:20,torch:3}],"gate:stairs_old":[{stone:30,planks:15},{rope:6,torch:6},{reedmat:6,rack:4}],"helper:lumberjack":[{wood:8,stone:4}],"ruin:house":[{wood:4,palmleaf:4}],"ruin:bakery":[{wood:4,stone:3}],"ruin:boat":[{planks:3,palmleaf:5}]};var em;for(const n of Object.keys(sn))cc[em="fac:"+n]||(cc[em]=ac);const qn={flower_red:{n:"Hoa đỏ",lv:1,cost:5,model:"nature/flower_redA",fit:{size:.5}},flower_yel:{n:"Hoa vàng",lv:1,cost:5,model:"nature/flower_yellowA",fit:{size:.5}},flower_pur:{n:"Hoa tím",lv:1,cost:5,model:"nature/flower_purpleA",fit:{size:.5}},bush:{n:"Bụi cây",lv:1,cost:10,model:"nature/plant_bushLarge",fit:{size:.85}},palmdeco:{n:"Cây dừa nghiêng",lv:1,cost:25,model:"pirate/palm-bend",fit:{h:1.9}},lantern:{n:"Đèn lồng",lv:2,cost:30,model:"town/lantern",fit:{h:1.3}},barrel:{n:"Thùng gỗ",lv:2,cost:15,model:"pirate/barrel",fit:{size:.6}},bench:{n:"Ghế dài",lv:2,cost:35,model:"town/stall-bench",fit:{size:.9}},mushroomdeco:{n:"Nấm đỏ",lv:3,cost:20,model:"nature/mushroom_red",fit:{size:.5}},chest:{n:"Rương báu",lv:3,cost:60,model:"pirate/chest",fit:{size:.65}},dog:{n:"Cún con",lv:3,cost:120,model:"quat/Pug.fbx",pet:!0,fit:{h:.45}},well:{n:"Giếng nước",lv:2,cost:45,model:"kk/buildings/blue/building_well_blue.gltf",fit:{size:.95}},path:{n:"Đường lát gạch",lv:1,cost:4,proc:"brick"},flowerbed:{n:"Luống hoa cúc",lv:1,cost:12,proc:"flowerbed"},whitefence:{n:"Hàng rào trắng",lv:1,cost:6,proc:"fence"},wheelbarrow:{n:"Xe cút kít",lv:2,cost:25,model:"kk/decoration/props/wheelbarrow.gltf",fit:{size:.85}},haysack:{n:"Bao lúa",lv:1,cost:10,model:"kk/decoration/props/sack.gltf",fit:{size:.6}},sheepdeco:{n:"Cừu non",lv:4,cost:140,model:"quat/Sheep.fbx",pet:!0,fit:{h:.55}},horse:{n:"Ngựa con",lv:6,cost:260,model:"quat/Horse.fbx",pet:!0,fit:{h:.95}},llama:{n:"Lạc đà Alpaca",lv:8,cost:300,model:"quat/Llama.fbx",pet:!0,fit:{h:.9}},cat:{n:"Mèo con",lv:3,cost:120,model:"pets/animal-cat",pet:!0,fit:{h:.6}},bunny:{n:"Thỏ trắng",lv:4,cost:150,model:"pets/animal-bunny",pet:!0,fit:{h:.65}},parrot:{n:"Vẹt",lv:5,cost:180,model:"pets/animal-parrot",pet:!0,fit:{h:.6}},penguin:{n:"Chim cánh cụt",lv:6,cost:220,model:"pets/animal-penguin",pet:!0,fit:{h:.6}},sandcastle:{n:"Lâu đài cát",lv:99,cost:0,model:"pirate/tower-complete-small",fit:{size:1.8},w:2,d:2,gift:!0,paint:15913866},goldboat:{n:"Thuyền vàng",lv:99,cost:0,model:"pirate/boat-row-large",fit:{size:1.9},w:2,d:2,gift:!0,paint:16763196},crab:{n:"Bạn Cua",lv:99,cost:0,model:"pets/animal-crab",pet:!0,fit:{h:.5},gift:!0},kitten:{n:"Mèo con nghịch ngợm",lv:99,cost:0,model:"pets/animal-cat",pet:!0,fit:{h:.6},gift:!0},minilight:{n:"Hải đăng nhỏ",lv:99,cost:0,model:"pirate/tower-complete-small",fit:{size:1.9},w:2,d:2,gift:!0},lotuspond:{n:"Ao sen",lv:99,cost:0,model:"town/fountain-round",fit:{size:1.9},w:2,d:2,gift:!0},fountain:{n:"Đài phun nước",lv:5,cost:300,model:"town/fountain-round",fit:{size:1.9},w:2,d:2},boat:{n:"Thuyền nhỏ",lv:4,cost:90,model:"pirate/boat-row-small",fit:{size:1.9},w:2,d:2},campfire:{n:"Lửa trại",lv:4,cost:40,model:"survival/campfire-pit",fit:{size:.7}},hedge:{n:"Hàng rào cây",lv:4,cost:15,model:"town/hedge",fit:{size:.95}},cart:{n:"Xe đẩy",lv:5,cost:60,model:"town/cart",fit:{size:.95}},tent:{n:"Lều cắm trại",lv:6,cost:90,model:"survival/tent-canvas",fit:{size:.95}},flag:{n:"Cờ đuôi nheo",lv:7,cost:50,model:"pirate/flag",fit:{h:1.6}},flower_red2:{n:"Khóm hoa hồng",lv:7,cost:12,model:"nature/flower_redB",fit:{size:.55}},lighthouse:{n:"Ngọn hải đăng",lv:10,cost:600,model:"pirate/tower-complete-small",fit:{size:1.9},w:2,d:2}},An={grass:{n:"Bụi cỏ",hp:2,drop:{palmleaf:[1,1]},chest:0,regrow:!0},bush:{n:"Bụi rậm",hp:2,drop:{palmleaf:[1,1]},chest:.05,regrow:!0,proc:"bush"},bamboo:{n:"Bụi tre",hp:3,drop:{bamboo:[1,1]},rare:{liana:.15},chest:.05,regrow:!0},stump:{n:"Gốc cây",hp:3,drop:{wood:[1,1]},chest:.1,regrow:!0,model:"nature/stump_round",fit:{size:.6}},logs:{n:"Đống gỗ",hp:3,drop:{wood:[1,2]},chest:.1,model:"kk/decoration/props/resource_lumber.gltf",fit:{size:.8}},rock:{n:"Tảng đá",hp:4,drop:{stone:[1,1]},chest:.15,regrow:!0,model:"kk/decoration/nature/rock_single_B.gltf",fit:{size:.85}},claymound:{n:"Gò đất sét",hp:4,drop:{clay:[1,1]},chest:.15,regrow:!0},tree:{n:"Cây rừng",hp:6,drop:{wood:[1,1]},rare:{liana:.25},chest:.3,proc:"tree"},bigtree:{n:"Cây cổ thụ",hp:12,drop:{wood:[1,2]},rare:{liana:.3},chest:.6},bigrock:{n:"Tảng đá lớn",hp:12,drop:{stone:[1,2]},chest:.6}},ko=["grass","bush","bamboo","grass","bush","bamboo","stump","rock","claymound"],wu=["grass","bush","bamboo","stump","logs","rock","claymound","tree"],Xd=[...wu,"bigtree","bigrock"],nm={core:wu,west:wu,north:Xd,old:Xd},im=n=>n<6?0:10+(n-6)*6,Su=n=>10+n*12,ki=n=>30+Math.floor(n/2),sm={every:4*3600,energy:5},Eu=30,H0={starfish:{n:"Sao biển",energy:2},shell:{n:"Vỏ sò",energy:3},crab:{n:"Cua nhỏ",energy:5}},G0=6,vl=240,W0=60,$0=25,rm=n=>50+n*60,Ke=[{id:"maisie",n:"Maisie",model:"chars/character-female-a"},{id:"tom",n:"Bác Tom",model:"chars/character-male-b"},{id:"lily",n:"Cô Lily",model:"chars/character-female-c"},{id:"ben",n:"Anh Ben",model:"chars/character-male-a"},{id:"rosa",n:"Bà Rosa",model:"chars/character-female-b"},{id:"sam",n:"Chú Sam",model:"chars/character-male-c"}],zh=[{who:"maisie",text:"Bão làm nhà mình hỏng mất rồi! Góp gỗ và lá cọ để sửa nhà nhé.",ev:"build",key:"ruin:house",n:1,coins:20,xp:6,energy:10},{who:"maisie",text:"Nhà đẹp lại rồi! Thu hoạch 3 lúa mì nào.",ev:"harvest",key:"wheat",n:3,coins:15,xp:5},{who:"tom",text:"Gà đói rồi! Ra máy xay làm thức ăn rồi cho gà ăn nhé.",ev:"feed",n:1,coins:20,xp:6},{who:"maisie",text:"Chặt 3 bụi cây hoặc cây rừng để lấy vật liệu nhé.",ev:"clear",n:3,coins:20,xp:6},{who:"ben",text:"Lò bánh bị đổ rồi. Sửa giúp anh nhé!",ev:"build",key:"ruin:bakery",n:1,coins:30,xp:8,energy:10},{who:"ben",text:"Nướng 1 ổ bánh mì. Ăn bánh mì sẽ có thêm năng lượng đó!",ev:"make",key:"bread",n:1,coins:25,xp:8},{who:"sam",text:"Mua Xưởng mộc ở cửa hàng và xây xong nhé.",ev:"build",key:"fac:carpentry",n:1,coins:30,xp:10},{who:"sam",text:"Làm 3 tấm ván gỗ ở Xưởng mộc.",ev:"make",key:"planks",n:3,coins:30,xp:10},{who:"sam",text:"Sửa chiếc thuyền ở bến để ra khơi!",ev:"build",key:"ruin:boat",n:1,coins:40,xp:12,energy:10},{who:"maisie",text:"Thuyền xong rồi! Mình cùng ra khơi phiêu lưu nào!",ev:"sail",n:1,coins:40,xp:12}],q0={house:"house",bakery:"fac",boat:"boat"},om=[{id:"ve-dao",n:"Về đảo của ông bà",lv:1,steps:[{who:"rosa",lv:2,text:"Gặt 6 lúa mì và nướng 2 ổ bánh mì cho bà Rosa.",talk:[["rosa","Maisie! Cháu về rồi à? Bà nhớ ông bà của cháu lắm."],["maisie","Cháu chào bà Rosa! Bão làm đảo hỏng nhiều quá. Cháu về để sửa lại."],["rosa","Giỏi lắm! Trước tiên cháu cần ăn no đã. Gặt lúa mì rồi nướng bánh mì nhé."]],outro:[["rosa","Bánh mì thơm quá! Ông bà cháu cũng hay nướng bánh như vậy đó."]],reqs:[{ev:"harvest",key:"wheat",n:6},{ev:"make",key:"bread",n:2}],coins:40,xp:10},{who:"maisie",lv:1,text:"Dọn 5 bụi cây và làm 2 tấm ván gỗ.",talk:[["maisie","Bà Rosa kể ông bà từng sửa nhà bằng ván gỗ."],["maisie","Mình dọn bớt bụi rậm lấy gỗ, rồi làm ván ở Xưởng mộc nhé!"]],outro:[["maisie","Có ván gỗ rồi! Đảo sắp đẹp lại rồi."]],reqs:[{ev:"clear",n:5},{ev:"make",key:"planks",n:2}],coins:30,xp:8},{who:"rosa",lv:3,text:"Xây Nhà đan lát và đan 1 chiếc giỏ.",talk:[["rosa","Ông bà cháu hay đan giỏ để đựng quả đó."],["rosa","Cháu xây Nhà đan lát rồi đan thử một chiếc giỏ nhé."],["maisie","Dạ! Cháu sẽ cố gắng ạ."]],outro:[["rosa","Chiếc giỏ đẹp quá! Ông bà cháu mà thấy chắc vui lắm."],["maisie","Cháu sẽ giữ gìn đảo thật tốt ạ!"]],reqs:[{ev:"build",key:"fac:weaving",n:1},{ev:"make",key:"basket",n:1}],coins:50,xp:12,gems:2}]},{id:"dan-ga",n:"Đàn gà của bác Tom",lv:1,steps:[{who:"tom",lv:1,text:"Làm 2 mẻ thức ăn và cho gà ăn 2 lần.",talk:[["tom","Maisie ơi, đàn gà của ông bà cháu đói cả buổi rồi."],["maisie","Cháu giúp bác ạ! Cháu làm thức ăn thế nào ạ?"],["tom","Ra máy xay làm thức ăn, rồi cho gà ăn nhé."]],outro:[["tom","Cục ta cục tác! Gà vui lắm kìa."]],reqs:[{ev:"make",key:"chickenfeed",n:2},{ev:"feed",n:2}],coins:30,xp:8},{who:"tom",lv:1,text:"Nhặt 4 quả trứng.",talk:[["tom","Gà ăn no thì sẽ đẻ trứng."],["tom","Cháu nhặt giúp bác 4 quả trứng nhé."]],outro:[["tom","Trứng còn ấm nữa! Cảm ơn cháu."]],reqs:[{ev:"collect",key:"egg",n:4}],coins:30,xp:8},{who:"tom",lv:2,text:"Giao 3 đơn hàng.",talk:[["tom","Có nhiều người muốn mua trứng và rau của đảo mình đó."],["maisie","Cháu giao hàng giúp bác nhé!"],["tom","Ừ, nhìn bảng đơn hàng và giao 3 đơn nhé."]],outro:[["tom","Cháu giỏi như ông bà ngày xưa vậy."],["maisie","Hì hì, cháu cảm ơn bác Tom!"]],reqs:[{ev:"deliver",n:3}],coins:40,xp:10,gems:2}]},{id:"thuyen",n:"Chiếc thuyền của chú Sam",lv:2,steps:[{who:"sam",lv:2,text:"Đóng đầy 2 thùng hàng trên tàu.",talk:[["sam","Chào Maisie! Tàu hàng cập bến rồi đó."],["sam","Chú cần người đóng thùng hàng. Cháu giúp chú 2 thùng nhé?"],["maisie","Dạ được ạ!"]],outro:[["sam","Nhanh quá! Chú thấy cháu làm việc giỏi lắm."]],reqs:[{ev:"crate",n:2}],coins:40,xp:10},{who:"sam",lv:4,text:"Làm 2 sợi dây thừng và giao 2 đơn hàng.",talk:[["sam","Thuyền của chú cần dây thừng mới để buộc buồm."],["maisie","Cháu làm dây ở Nhà đan lát nhé chú?"],["sam","Đúng rồi. Giao thêm 2 đơn hàng để chú mua gỗ nữa nhé."]],outro:[["sam","Dây chắc quá! Buồm buộc xong rồi."]],reqs:[{ev:"make",key:"rope",n:2},{ev:"deliver",n:2}],coins:60,xp:14},{who:"sam",lv:4,text:"Ra khơi phiêu lưu 1 chuyến.",talk:[["sam","Thuyền đã sẵn sàng. Ra khơi thử một chuyến nào!"],["maisie","Cháu hơi hồi hộp, nhưng cháu muốn đi ạ."]],outro:[["sam","Gió đẹp quá! Có thuyền rồi, mình khám phá được nhiều nơi."],["maisie","Cảm ơn chú Sam nhiều ạ!"]],reqs:[{ev:"sail",n:1}],coins:60,xp:14,gems:2}]},{id:"banh-ba",n:"Bánh của bà Rosa",lv:3,steps:[{who:"rosa",lv:3,text:"Làm 2 hộp bánh quy.",talk:[["rosa","Maisie này, ông bà cháu hay nướng bánh quy vào ngày này."],["rosa","Bà muốn làm lại, nhưng tay bà mỏi rồi. Cháu giúp bà nhé?"]],outro:[["rosa","Thơm quá! Cảm ơn cháu nhiều."]],reqs:[{ev:"make",key:"cookie",n:2}],coins:50,xp:12},{who:"ben",lv:4,text:"Hái 6 quả dâu tây và làm 1 miếng phô mai.",talk:[["ben","Chào Maisie! Bà Rosa muốn làm bánh kem, anh phải chuẩn bị đồ."],["ben","Em hái giúp anh 6 quả dâu và làm một miếng phô mai nhé."],["maisie","Dạ, em làm ngay ạ!"]],outro:[["ben","Dâu đỏ mọng luôn! Em giỏi lắm."]],reqs:[{ev:"harvest",key:"strawberry",n:6},{ev:"make",key:"cheese",n:1}],coins:60,xp:14},{who:"rosa",lv:6,text:"Làm 1 chiếc bánh kem.",talk:[["rosa","Giờ cháu có đủ đồ rồi. Làm một chiếc bánh kem thật đẹp nhé."],["maisie","Cháu sợ làm không đẹp ạ."],["rosa","Đừng lo. Làm bằng cả tấm lòng là đẹp nhất."]],outro:[["rosa","Đúng vị bánh ngày xưa rồi! Bà nhớ ông bà cháu quá."],["maisie","Cháu cũng nhớ ông bà ạ."]],reqs:[{ev:"make",key:"cake",n:1}],coins:80,xp:18,gems:2}]},{id:"vuon-lily",n:"Khu vườn của cô Lily",lv:3,steps:[{who:"lily",lv:3,text:"Mua 1 món trang trí và 1 cái cây.",talk:[["lily","Maisie ơi, cô thích khu vườn thật xinh."],["lily","Cháu mua một món trang trí và trồng một cái cây cho vườn nhé."]],outro:[["lily","Đẹp ghê! Khu vườn sáng bừng lên rồi."]],reqs:[{ev:"buydecor",n:1},{ev:"buytree",n:1}],coins:50,xp:12},{who:"lily",lv:5,text:"Hái 6 quả cà chua và làm 1 cốc nước táo.",talk:[["lily","Cô muốn mời mọi người một bữa nhẹ trong vườn."],["maisie","Cháu hái cà chua và ép nước táo nhé cô?"],["lily","Đúng rồi. Cô cảm ơn cháu."]],outro:[["lily","Cà chua tươi quá! Nước táo thơm nữa."]],reqs:[{ev:"harvest",key:"tomato",n:6},{ev:"make",key:"applejuice",n:1}],coins:70,xp:16},{who:"lily",lv:6,text:"Hái 6 bông hướng dương.",talk:[["lily","Vườn còn thiếu một màu vàng thật rực."],["lily","Hoa hướng dương là hợp nhất. Cháu hái 6 bông nhé."]],outro:[["lily","Vàng rực như mặt trời vậy!"],["maisie","Vườn đẹp quá, cháu thích lắm!"]],reqs:[{ev:"harvest",key:"sunflower",n:6}],coins:80,xp:18,gems:2}]},{id:"ong-kai",n:"Ông Kai trong rừng",lv:4,steps:[{who:"kai",lv:4,text:"Dọn 8 bụi cây và nhặt 3 món ở bãi biển.",talk:[["kai","Chào cháu. Ông là Kai, ông sống trong rừng này."],["kai","Ông biết nhiều lối đi trên đảo, nhưng rừng rậm quá. Cháu dọn giúp ông nhé."],["maisie","Dạ, cháu chào ông Kai! Cháu giúp ông ạ."]],outro:[["kai","Rừng thoáng hơn rồi. Cảm ơn cháu."]],reqs:[{ev:"clear",n:8},{ev:"beach",n:3}],coins:60,xp:14},{who:"kai",lv:4,text:"Sửa Cầu tre phía tây.",talk:[["kai","Phía tây có một lối đi cũ, nhưng cầu tre bị bão làm gãy."],["kai","Cháu sửa cầu giúp ông, mình sẽ đi qua được."]],outro:[["kai","Cầu chắc lắm! Giờ ông đi lại dễ rồi."]],reqs:[{ev:"build",key:"gate:bridge_w",n:1}],coins:60,xp:14},{who:"maisie",lv:5,text:"Làm 2 cây đuốc và dọn 10 bụi cây.",talk:[["maisie","Ông Kai nói trong rừng tối lắm."],["maisie","Mình làm đuốc để soi đường và dọn thêm bụi rậm nhé!"]],outro:[["maisie","Đuốc sáng quá! Rừng không còn đáng sợ nữa."],["kai","Cháu gan dạ lắm. Ông bà cháu cũng sẽ rất tự hào."]],reqs:[{ev:"make",key:"torch",n:2},{ev:"clear",n:10}],coins:70,xp:16,gems:2}]},{id:"mat-ong",n:"Mật ong của bác Tom",lv:7,steps:[{who:"tom",lv:7,text:"Thu 2 hũ mật ong.",talk:[["tom","Maisie, ong của bác làm tổ xong rồi."],["tom","Cháu thu giúp bác 2 hũ mật nhé. Cẩn thận ong nha!"]],outro:[["tom","Ngọt thơm quá! Cảm ơn cháu."]],reqs:[{ev:"collect",key:"honey",n:2}],coins:90,xp:20},{who:"tom",lv:7,text:"Thu 3 cây nấm.",talk:[["tom","Bác còn muốn nấu món nấm thơm."],["tom","Heo của bác tìm được nấm đó. Cháu nhặt 3 cây giúp bác nhé."]],outro:[["tom","Nấm to quá! Tối nay bác nấu món ngon."]],reqs:[{ev:"collect",key:"mushroom",n:3}],coins:90,xp:20},{who:"sam",lv:8,text:"Đóng đầy 6 thùng hàng trên tàu.",talk:[["sam","Bác Tom muốn gửi mật ong và nấm đi xa."],["sam","Chú cần 6 thùng hàng để chất lên tàu. Cháu giúp chú nhé."],["maisie","Dạ được ạ!"]],outro:[["sam","Tàu đầy hàng rồi. Mọi người sẽ được ăn đồ của đảo mình."],["maisie","Cháu vui quá!"]],reqs:[{ev:"crate",n:6}],coins:100,xp:22,gems:2}]},{id:"tiec-dao",n:"Bữa tiệc trên đảo",lv:9,steps:[{who:"maisie",lv:9,text:"Làm 2 chiếc bánh vòng.",talk:[["maisie","Đảo mình đẹp lại rồi! Mình mở một bữa tiệc nhé."],["maisie","Đầu tiên, cháu làm bánh vòng ngọt cho mọi người."]],outro:[["maisie","Bánh vòng thơm phức! Ai cũng sẽ thích."]],reqs:[{ev:"make",key:"donut",n:2}],coins:110,xp:24},{who:"rosa",lv:10,text:"Làm 2 hũ mứt và giao 4 đơn hàng.",talk:[["rosa","Tiệc cần mứt ngọt để ăn với bánh."],["rosa","Cháu làm mứt dâu, rồi giao vài đơn hàng để mua đồ trang trí nhé."]],outro:[["rosa","Mứt thơm ngon quá! Bà tự hào về cháu."]],reqs:[{ev:"make",key:"jam",n:2},{ev:"deliver",n:4}],coins:120,xp:26},{who:"maisie",lv:10,text:"Làm 2 cốc trà chanh.",talk:[["maisie","Cuối cùng là đồ uống mát lạnh."],["maisie","Cháu pha trà chanh mật ong cho cả đảo uống."]],outro:[["maisie","Mọi người tới đủ rồi! Cùng ăn tiệc thôi."],["tom","Maisie, đảo này lại đông vui như ngày xưa rồi."],["rosa","Ông bà cháu nhìn thấy chắc sẽ cười thật tươi."]],reqs:[{ev:"make",key:"lemontea",n:2}],coins:120,xp:26,gems:2}]}],Vh=[{id:"kai",n:"Ông Kai"},{id:"nina",n:"Cô Nina"},{id:"otto",n:"Ông Otto"},{id:"mia",n:"Bé Mia"}],am=["maisie","tom","lily","ben","rosa","sam","kai","nina","otto","mia"],lc={count:5,coins:n=>20+n*10,gems:2,energy:10},Wc=n=>{var t;return((t=Ke.find(e=>e.id===n)||Vh.find(e=>e.id===n))==null?void 0:t.n)||""},X0={beach:{ground:16047264,ground2:15387528,edge:14267498,obstacles:[["nature/plant_bushLarge",{size:.9},1,4],["nature/grass_large",{size:.8},1,3],["pirate/crate",{size:.7},1,2],["pirate/barrel",{size:.6},1,2],["pirate/rocks-sand-a",{size:.95},2,2],["pirate/palm-straight",{h:1.7},3,2]]},jungle:{ground:10409566,ground2:9226577,edge:6989884,obstacles:[["nature/plant_bushLarge",{size:.95},1,4],["nature/tree_palmTall",{h:1.8},3,2],["kk/decoration/nature/trees_A_medium.gltf",{size:.98},3,2],["kk/decoration/nature/rock_single_B.gltf",{size:.85},2,2],["nature/stump_old",{size:.65},1,2],["nature/log_stack",{size:.85},2,2],["nature/mushroom_red",{size:.5},1,1]]},pirate:{ground:15257493,ground2:14467205,edge:13215845,obstacles:[["pirate/crate",{size:.75},1,3],["pirate/crate-bottles",{size:.75},1,2],["pirate/barrel",{size:.6},1,3],["pirate/rocks-a",{size:.95},2,2],["pirate/palm-bend",{h:1.8},3,2],["nature/plant_bushLarge",{size:.9},1,2]]},village:{ground:15785134,ground2:15125912,edge:14071928,obstacles:[["art:bush",{size:.9},1,4,"palmleaf"],["art:crate",{size:.75},1,3,"wood"],["art:palm",{h:1.7},3,2,"wood"],["art:rock",{size:.9},2,3,"stone"],["art:barrel",{size:.6},1,2,null]]},rock:{ground:12043465,ground2:11057085,edge:9281190,obstacles:[["art:rock",{size:.9},1,4,"stone"],["art:bigrock",{size:1.1},2,3,"stone"],["art:stump",{size:.7},1,2,"wood"],["art:claymound",{size:.8},1,3,"clay"],["art:grasstuft",{size:.7},1,2,"palmleaf"]]},flower:{ground:10870906,ground2:9688170,edge:7518282,obstacles:[["art:bush",{size:.95},1,3,"palmleaf"],["art:bamboo",{size:.9},1,4,"bamboo"],["art:jungletree",{h:1.8},2,3,"wood"],["art:flower_pur",{size:.6},1,2,null],["art:logs",{size:.85},1,3,"wood"]]}},Ec=[{id:"shell",n:"Bãi Vỏ Sò",lv:2,w:9,h:12,seed:11,theme:"beach",chart:{x:33,y:83},chests:3,goal:{n:"Rương vỏ sò",model:"pirate/chest"},intro:"Nghe nói có một rương vỏ sò lấp lánh trên bãi biển gần đây. Cùng đi tìm nhé!",reward:{coins:150,gems:4,xp:40}},{id:"crab",n:"Vịnh Cua Đỏ",lv:3,w:10,h:14,seed:23,theme:"beach",chart:{x:67,y:83},chests:3,goal:{n:"Bạn Cua bị kẹt",model:"pets/animal-crab",pet:"crab"},intro:"Một bạn cua nhỏ bị kẹt giữa đống thùng gỗ. Mình dọn đường tới cứu bạn ấy nhé!",reward:{coins:220,gems:5,xp:60}},{id:"palm",n:"Rừng Dừa",lv:5,w:11,h:15,seed:37,theme:"jungle",chart:{x:50,y:50},chests:4,goal:{n:"Bạn Vẹt lạc đường",model:"pets/animal-parrot",pet:"parrot"},intro:"Bạn vẹt bay lạc vào rừng dừa rồi. Mình vào rừng tìm bạn ấy về nông trại nhé!",reward:{coins:320,gems:7,xp:90}},{id:"pirate",n:"Đảo Cướp Biển",lv:7,w:12,h:16,seed:51,theme:"pirate",chart:{x:17,y:17},chests:5,goal:{n:"Kho báu cướp biển",model:"pirate/chest"},intro:"Tấm bản đồ cũ chỉ tới kho báu trên đảo cướp biển. Mình ra khơi thôi!",reward:{coins:500,gems:12,xp:150}},{id:"penguin",n:"Mũi Đá Gió",lv:9,w:12,h:16,seed:67,theme:"beach",chart:{x:50,y:17},chests:5,goal:{n:"Bạn Cánh Cụt",model:"pets/animal-penguin",pet:"penguin"},intro:"Một bạn cánh cụt trôi dạt tới mũi đá. Mình tới đưa bạn ấy về nhà nhé!",reward:{coins:600,gems:14,xp:180}},{id:"lang-chai",n:"Làng Chài Gió",lv:3,w:10,h:14,seed:101,theme:"village",chart:{x:17,y:50},chests:2,goal:{n:"Chú mèo nghịch ngợm",model:"art:kitten",pet:"kitten"},intro:"Làng chài nhỏ này đang cần người giúp. Cô Nina bán cá đang chờ mình đấy!",reward:{coins:250,gems:5,xp:70},story:{who:"nina",guide:"guide_dog",ruin:{n:"Sạp cá",sprite:"ruin_fishstall",fixed:"fishstall",stages:[{wood:4,palmleaf:4},{stone:4,wood:4}]},steps:[{who:"nina",text:"Dọn 6 chỗ vướng trong làng.",talk:[["nina","Chào bé! Làng chài của cô bị gió thổi bừa bộn hết rồi."],["maisie","Cháu giúp cô nhé! Cháu dọn trước."]],outro:[["nina","Gọn quá! Giờ thấy sạp cá của cô rồi."]],req:{ev:"aclear",n:6},coins:40,xp:10},{who:"nina",text:"Sửa sạp cá cho cô Nina.",talk:[["nina","Sạp cá của cô hỏng rồi. Cần gỗ và lá cọ để sửa."],["maisie","Đồ trên đảo mình nhặt được. Cháu sửa ngay!"]],outro:[["nina","Sạp cá đẹp lại rồi! Cảm ơn bé nhiều."]],req:{ev:"aruin",n:1},coins:50,xp:12},{who:"nina",text:"Mở 2 rương báu.",talk:[["nina","Gió thổi mấy cái rương lên bờ đấy."],["maisie","Cháu đi tìm và mở rương cho cô."]],outro:[["nina","Giỏi quá! Có đồ trong rương thì cô bán thêm được nhiều cá."]],req:{ev:"achest",n:2},coins:50,xp:12},{who:"nina",text:"Bắt chú mèo nghịch ngợm.",talk:[["nina","Chú mèo nghịch ngợm trốn mất rồi. Bé tìm giúp cô nhé."],["maisie","Cháu đi tìm mèo con ở cuối đảo nhé!"]],outro:[["maisie","Cháu tìm thấy rồi! Mèo con ơi, lại đây nào."],["nina","Mèo con thích bé lắm. Bé mang mèo về nhà nuôi nhé!"],["maisie","Cháu cảm ơn cô Nina!"]],req:{ev:"agoal",n:1},coins:60,xp:16}],prize:"kitten"}},{id:"hai-dang",n:"Đảo Đá Hải Đăng",lv:6,w:11,h:15,seed:113,theme:"rock",chart:{x:83,y:50},chests:3,goal:{n:"Ngọn đèn hải đăng",model:"art:lighthouse"},intro:"Ngọn hải đăng trên đảo đá đã tắt đèn. Ông Otto chờ mình giúp thắp lại!",reward:{coins:420,gems:9,xp:120},story:{who:"otto",guide:"guide_gull",ruin:{n:"Hải đăng",sprite:"ruin_lighthouse",fixed:"lighthouse_big",stages:[{stone:6,clay:3},{wood:5,stone:5},{clay:4,wood:4}]},steps:[{who:"otto",text:"Dọn 8 tảng đá chắn đường.",talk:[["otto","Chào cháu! Ta giữ ngọn hải đăng này."],["otto","Đá chắn kín lối đi rồi. Cháu dọn giúp ta nhé."]],outro:[["otto","Đường sáng sủa rồi. Cảm ơn cháu."]],req:{ev:"aclear",n:8},coins:60,xp:14},{who:"otto",text:"Sửa lại hải đăng.",talk:[["otto","Hải đăng cũ hỏng rồi. Cần đá, đất sét và gỗ."],["maisie","Cháu nhặt đủ đồ trên đảo rồi sửa từng bước nhé!"]],outro:[["otto","Hải đăng đứng vững lại rồi! Cháu giỏi lắm."]],req:{ev:"aruin",n:1},coins:80,xp:18},{who:"otto",text:"Mở 3 rương báu.",talk:[["otto","Đèn cần dầu và dây. Chúng nằm trong mấy cái rương."],["maisie","Cháu đi tìm rương ngay!"]],outro:[["otto","Đủ cả rồi. Giờ chỉ còn thắp đèn thôi."]],req:{ev:"achest",n:3},coins:80,xp:18},{who:"otto",text:"Thắp lại ngọn đèn.",talk:[["otto","Cháu lên đỉnh thắp đèn giúp ta nhé."],["maisie","Cháu lên thắp đèn ngay!"]],outro:[["maisie","Cháu thắp rồi! Đèn sáng quá!"],["otto","Tàu thuyền nhìn thấy đèn là về bến an toàn."],["otto","Cháu mang hải đăng nhỏ này về nhà nhé."]],req:{ev:"agoal",n:1},coins:90,xp:22}],prize:"minilight"}},{id:"dao-buom",n:"Đảo Bướm",lv:9,w:12,h:16,seed:131,theme:"flower",chart:{x:83,y:17},chests:3,goal:{n:"Ao sen bí mật",model:"art:fountain"},intro:"Đảo Bướm đầy hoa và cánh bướm. Bé Mia muốn dẫn mình đi tìm một ao sen!",reward:{coins:600,gems:13,xp:170},story:{who:"mia",guide:"guide_bunny",ruin:{n:"Vườn bướm",sprite:"ruin_butterfly",fixed:"butterfly_garden",stages:[{bamboo:6,palmleaf:6},{wood:6,liana:2},{bamboo:6,wood:6}]},steps:[{who:"mia",text:"Dọn 10 chỗ rậm rạp.",talk:[["mia","Chào chị Maisie! Em thích bướm nhất đấy."],["mia","Nhưng cây cối rậm quá, bướm không bay được."],["maisie","Chị dọn giúp em nhé!"]],outro:[["mia","Hoa lộ ra rồi! Bướm bay ra kìa."]],req:{ev:"aclear",n:10},coins:70,xp:16},{who:"mia",text:"Sửa vườn bướm.",talk:[["mia","Vườn bướm của em hỏng rồi. Cần tre, lá cọ, gỗ và dây leo."],["maisie","Chị lấy ở trên đảo này, không sao đâu."]],outro:[["mia","Vườn bướm đẹp quá! Cảm ơn chị."]],req:{ev:"aruin",n:1},coins:90,xp:20},{who:"mia",text:"Mở 3 rương báu.",talk:[["mia","Có mấy cái rương giấu giữa các bụi hoa đấy."],["maisie","Chị đi tìm rương cho em!"]],outro:[["mia","Chị giỏi quá! Trong rương toàn đồ lấp lánh."]],req:{ev:"achest",n:3},coins:90,xp:20},{who:"mia",text:"Tìm ao sen.",talk:[["mia","Bướm bay về phía cuối đảo. Ở đó có ao sen."],["maisie","Chị đi tìm ao sen ngay!"]],outro:[["maisie","Chị thấy ao sen rồi! Đẹp quá!"],["mia","Chị mang ao sen này về nhà nhé. Bướm sẽ tới thăm chị."],["maisie","Cảm ơn em Mia!"]],req:{ev:"agoal",n:1},coins:100,xp:24}],prize:"lotuspond"}}],Vo=[{id:"sea",n:"Kho báu biển",reward:{coins:200,gems:5},pieces:[["bottle","Thư trong chai","pirate/bottle"],["mussel","Con trai","food/mussel"],["pearl","Ngọc trai","food/mussel-open"],["bones","Xương cá","food/fish-bones"],["pflag","Cờ cướp biển","pirate/flag"]]},{id:"sweet",n:"Kẹo ngọt",reward:{coins:220,gems:5},pieces:[["lolly","Kẹo mút","food/lollypop"],["pop","Kem que","food/popsicle"],["choco","Thanh sô-cô-la","food/candy-bar"],["mint","Kem bạc hà","food/ice-cream-scoop-mint"],["cdonut","Bánh vòng sô-cô-la","food/donut-chocolate"]]},{id:"tropic",n:"Trái cây nhiệt đới",reward:{coins:260,gems:6},pieces:[["pine","Dứa","food/pineapple"],["coco","Nửa trái dừa","food/coconut-half"],["grape","Chùm nho","food/grapes"],["melon2","Dưa hấu","food/watermelon"],["lime","Lát chanh","food/lemon-half"]]}],fi={n:"Lễ hội Biển",token:"Vỏ sò vàng",icon:"food/mussel",tint:16765503,gain:{harvest:1,collect:1,make:1,deliver:3,crate:2,clear:1,visitor:3,chest:3,help:1},tiers:[{at:20,coins:80},{at:50,gems:3},{at:90,coins:200},{at:140,decor:"sandcastle"},{at:200,gems:10},{at:280,decor:"goldboat"}]},Un=(n,t)=>`kk/buildings/${t}/building_${n}_${t}.gltf`,j0={house:{model:Un("home_B","blue"),size:2.5,rot:0},barn:{model:Un("home_A","red"),size:1.75,rot:0},market:{model:Un("market","red"),size:1.9,rot:0},feedmill:{model:Un("windmill","yellow"),size:2.1,rot:0,spin:"fan",axis:"z"},bakery:{model:Un("blacksmith","red"),size:1.85,rot:0},dairy:{model:Un("watermill","blue"),size:1.75,rot:0,spin:"wheel",axis:"x"},juicebar:{model:Un("tavern","green"),size:1.75,rot:0},seafood:{model:Un("home_A","blue"),size:1.6,rot:0},kitchen:{model:Un("home_A","green"),size:1.6,rot:0},sweets:{model:Un("market","yellow"),size:1.9,rot:0},jammaker:{model:Un("home_B","yellow"),size:1.6,rot:0},carpentry:{model:Un("home_A","red"),size:1.4,rot:0},weaving:{model:Un("market","red"),size:1.5,rot:0}},cm={},Y0={},lm=[...[7,8,9,10,11].map(n=>["path",12,n]),...[7,8,9,10,11,13,14,15,16,17,18].map(n=>["path",n,12]),["path",12,12],["flowerbed",11,7],["flowerbed",13,7],["flowerbed",9,6],["flowerbed",10,6],["flowerbed",14,7],["flowerbed",17,7],["flowerbed",18,8]],Ho={house:{width:3.7},ruin_house:{width:3.7},carpentry:{width:2.6},weaving:{width:2.6},lumberjack:{width:2.5},scaffold:{width:2.2},ruin_bakery:{width:2.6},ruin_boat:{width:1.9},bridge_w:{width:2.3},bridge_w_broken:{width:2.3},bridge_n:{width:2.3},bridge_n_broken:{width:2.3},stairs_old:{width:2.1},stairs_old_broken:{width:2.1},jungletree:{width:1.85},bigtree:{width:2.4},claymound:{width:1},bigrock:{width:1.5},starfish:{width:.6},beachshell:{width:.55},bamboo:{width:1.05},barn:{width:2.7},feedmill:{width:2.9},bakery:{width:2.6},market:{width:2.7},board:{width:2},coop:{width:1.25},cowshed:{width:1.7},pigsty:{width:1.6},chicken:{width:.55,faceR:!0},cow:{width:1.05},pig:{width:.85},wheat:{width:1.35},corn:{width:1.35},carrot:{width:1.35},sprout:{width:1.35},appletree:{width:1.7},leafytree:{width:1.6},palm:{width:1.7},maisie:{width:.54},bush:{width:.95},rock:{width:.9},dairy:{width:2.6},juicebar:{width:2.6},kitchen:{width:2.7},seafood:{width:2.6},sweets:{width:2.6},jammaker:{width:2.7},beehive:{width:1.5},ship:{width:3.6},strawberry:{width:1.35},tomato:{width:1.35},pumpkin:{width:1.35},sunflower:{width:1.35},melon:{width:1.35},cabbage:{width:1.35},onion:{width:1.35},bananatree:{width:1.8},orangetree:{width:1.7},lemontree:{width:1.7},peartree:{width:1.7},cherrytree:{width:1.75},goldboat:{width:1.9},boat:{width:1.8,faceR:!0},tent:{width:1.3},sandcastle:{width:1.8},well:{width:1.05},cart:{width:1.1},fountain:{width:1.95},lighthouse:{width:1.5},flower_red:{width:.6},flower_yel:{width:.6},flower_pur:{width:.6},flower_red2:{width:.65},mushroomdeco:{width:.5},lantern:{width:.5},barrel:{width:.55},chest:{width:.7},crate:{width:.7},haysack:{width:.55},campfire:{width:.75},hedge:{width:.95},flag:{width:.7},stump:{width:.7},logs:{width:.85},bee:{width:.3,faceR:!0},bench:{width:.9},wheelbarrow:{width:.85},tom:{width:.66},lily:{width:.5},ben:{width:.86},rosa:{width:.61},sam:{width:.73},nina:{width:.68},otto:{width:.64},mia:{width:.52},ruin_fishstall:{width:1.9},fishstall:{width:1.9},ruin_lighthouse:{width:1.45},lighthouse_big:{width:1.5},ruin_butterfly:{width:1.9},butterfly_garden:{width:1.9},kitten:{width:.55,faceR:!0},lotuspond:{width:1.95},guide_dog:{width:.51},guide_gull:{width:.6,faceR:!0},guide_bunny:{width:.37},gull1:{width:.9,faceR:!0},gull2:{width:.9,faceR:!0},pier:{width:4.6},grasstuft:{width:.6},daisies:{width:.85},fence:{width:1.05},axe:{width:.5},signboard:{width:1},bucket:{width:.4},fishingrod:{width:.9},soil:{width:1.35},trough:{width:.8},dog:{width:.62},cat:{width:.58},bunny:{width:.52,faceR:!0},parrot:{width:.6,faceR:!0},penguin:{width:.56},sheepdeco:{width:.7,faceR:!0},horse:{width:.85,faceR:!0},llama:{width:.6,faceR:!0},crab:{width:.6}},Tu={coop:"chicken",cowpen:"cow",pigpen:"pig",beehive:"bee"},um={apple:"appletree",palm:"palm",banana:"bananatree",orange:"orangetree",lemon:"lemontree",pear:"peartree",cherry:"cherrytree"},hm={palmdeco:"palm",flowerbed:"daisies",whitefence:"fence",kitten:"kitten",minilight:"lighthouse_big",lotuspond:"lotuspond"},K0={"nature/plant_bushLarge":"bush","pirate/crate":"crate","pirate/crate-bottles":"crate","pirate/barrel":"barrel","pirate/rocks-sand-a":"rock","pirate/rocks-a":"rock","kk/decoration/nature/rock_single_B.gltf":"rock","pirate/palm-straight":"palm","pirate/palm-bend":"palm","nature/tree_palmTall":"palm","kk/decoration/nature/trees_A_medium.gltf":"leafytree","nature/stump_old":"stump","nature/log_stack":"logs","nature/mushroom_red":"mushroomdeco","pirate/chest":"chest","pirate/boat-row-small":"boat","nature/grass_large":"grasstuft","survival/bucket":"bucket","pirate/tool-paddle":"fishingrod","survival/box-large":"trough","pets/animal-crab":"crab","pets/animal-parrot":"parrot","pets/animal-penguin":"penguin"};function Hh(n){let t=n;return()=>(t=t*16807%2147483647)/2147483647}function _i(n,t){for(const e of Ds){const[i,s,r,o]=e.rect;if(n>=i&&n<i+r&&t>=s&&t<s+o)return e.id}return null}function Xn(n,t){var i;const e=_i(n,t);return!!e&&!!((i=_.zones)!=null&&i[e])}function J0(n,t){const e=Ds.find(d=>d.id===n),i=nm[n],[s,r,o,a]=e.rect,c=Hh(t),l=[],u=s+Math.floor(o/2),h=r+Math.floor(a/2);for(let d=s;d<s+o;d++)for(let f=r;f<r+a;f++){const p=n==="west"?f===h:n==="north"?d===u:d===u||f===h,v=c(),m=i[Math.floor(c()*i.length)],g=Math.floor(c()*4);p||v>=.55||l.push({k:"obstacle",t:m,x:d,z:f,r:g})}return l}function dm(n){const t=[];return Ds.filter(e=>!e.open).forEach((e,i)=>J0(e.id,20240611+i*977).forEach(s=>t.push({id:n++,...s}))),{objs:t,nextId:n}}function fm(n){const t=n;t.objs.forEach(s=>{s.x+=$t,s.z+=$t}),(t.visitors||[]).forEach(s=>{s.x+=$t,s.z+=$t}),t.inv||(t.inv={});for(const[s,r]of[["wood",20],["stone",10],["palmleaf",10]])t.inv[s]=(t.inv[s]||0)+r;const e=Math.max(t.nextId||1,...t.objs.map(s=>s.id||0))+1,i=dm(e);return t.objs.push(...i.objs),t.nextId=i.nextId,t.zones={core:!0,west:!1,north:!1,old:!1},Gh(t),t.tut=999,t.boatFixed=!0,t.v=2,t}const ar={bridge_w:{n:"Cầu tre",zone:"west",home:"core",along:"z",line:$t,pref:$t+13,span:[$t,$t+vi-1]},bridge_n:{n:"Cầu gỗ",zone:"north",home:"core",along:"x",line:$t,pref:$t+13,span:[$t,$t+vi-2]},stairs_old:{n:"Bậc đá",zone:"old",home:"west",along:"x",line:$t,pref:7,span:[0,$t-2]}},la=n=>Ds.find(t=>{var e;return t.id===((e=ar[n])==null?void 0:e.zone)}),Z0=n=>n.k==="obstacle"?0:n.k==="decor"?1:n.k==="field"&&!n.crop?2:null;function Gh(n){var t;for(const[e,i]of Object.entries(ar)){if((t=n.zones)!=null&&t[i.zone]||n.objs.some(u=>u.k==="gate"&&u.t===e))continue;const s=new Map;for(const u of n.objs){const[h,d]=ln(u);for(let f=0;f<h;f++)for(let p=0;p<d;p++)s.set(u.x+f+","+(u.z+p),u)}let r=null,o=1/0;const a=(u,h,d)=>{const f=new Set;let p=d;for(const[M,b]of[[u,h],[u+1,h]]){const x=s.get(M+","+b);if(!x)continue;const L=Z0(x);if(L===null||d&&L)return;p=Math.max(p,L),f.add(x)}const[v,m]=i.along==="z"?[h,u]:[u,h],g=p*1e6+Math.abs(m-i.line)*1e3+Math.abs(v-i.pref)*10+f.size*3;g<o&&(o=g,r={x:u,z:h,hit:f})};for(let u=0;u<Jt-1;u++)for(let h=0;h<Jt;h++)_i(u,h)===i.home&&_i(u+1,h)===i.home&&a(u,h,0);const c=i.along==="z"?i.line-2:i.line-1;for(let u=i.span[0];u<=i.span[1];u++){const[h,d]=i.along==="z"?[c,u]:[u,c];_i(h,d)===i.zone&&_i(h+1,d)===i.zone&&a(h,d,3)}if(!r)continue;for(const u of r.hit)u.k==="decor"&&((n.store||(n.store={}))[u.t]=(n.store[u.t]||0)+1,u.t==="lotuspond"&&u.at!=null&&(n.lotusAt=u.at));n.objs=n.objs.filter(u=>!r.hit.has(u));const l=Math.max(n.nextId||1,...n.objs.map(u=>(u.id||0)+1));n.objs.push({id:l,k:"gate",t:e,x:r.x,z:r.z,r:0,site:{stage:0,got:{}}}),n.nextId=l+1}return n}function Q0(n){!_.zones||_.zones[n]||(_.zones[n]=!0,Ln("zone",n))}function pm(n){for(const[t,e]of[[n.x,n.z],[n.x+1,n.z]]){if(Xn(t,e))return!0;for(const[i,s]of[[1,0],[-1,0],[0,1],[0,-1]])if(Xn(t+i,e+s))return!0}return!1}const ua=n=>n.k==="gate"?pm(n):Xn(n.x,n.z);function mm(n,t=new Set){const e=Ds.find(r=>r.id===n);if(!(e!=null&&e.gate)||t.has(n))return null;const i=_.objs.find(r=>r.k==="gate"&&r.t===e.gate);if(!i)return null;const s=_i(i.x,i.z);return pm(i)?i:mm(s,t.add(n))}const ha=n=>{var t;return(t=n.site)!=null&&t.ruin?"ruin:"+n.t:`${n.k}:${n.t}`},Wh=n=>cc[ha(n)],$h=n=>{var t;return((t=Wh(n))==null?void 0:t.length)||0};function tv(n){Wh(n)&&(n.site={stage:0,got:{}})}function da(n){var i;const t=n.site&&((i=Wh(n))==null?void 0:i[n.site.stage]);if(!t)return{};const e={};for(const[s,r]of Object.entries(t))e[s]={need:r,got:n.site.got[s]||0};return e}function ws(n){if(n.k!=="gate")return 0;const t=sv(ha(n));return _.level<t?t:0}function ev(n,t){if(ws(n))return 0;const e=da(n)[t];if(!e)return 0;const i=Math.max(0,Math.min(Ft(t),e.need-e.got));return i?(We(t,-i),n.site.got[t]=e.got+i,i):0}const gm=n=>!!n.site&&n.site.stage>=$h(n);function nv(n){if(gm(n)&&!ws(n))return jd(n);const t=da(n),e=Object.keys(t);return ws(n)||!e.length||e.some(i=>t[i].got<t[i].need)?"none":(vn(10*(n.site.stage+1)),n.site.stage++,n.site.got={},n.site.stage<$h(n)?"stage":jd(n))}function jd(n){const t=ha(n);return delete n.site,t==="ruin:boat"&&(_.boatFixed=!0),on("build",t),n.k==="gate"&&Q0(la(n.t).id),"done"}function iv(n){for(const t of n.objs){if(!gm(t))continue;const e=ha(t);if(delete t.site,e==="ruin:boat"&&(n.boatFixed=!0),t.k==="gate"){const i=la(t.t);i&&((n.zones||(n.zones={}))[i.id]=!0)}}return n}function sv(n){var i,s,r,o;const[t,e]=n.split(":");return t==="fac"?((i=sn[e])==null?void 0:i.lv)??1:t==="pen"?((s=Ve[e])==null?void 0:s.lv)??1:t==="helper"?((r=Is[e])==null?void 0:r.lv)??1:t==="gate"?((o=Ds.find(a=>a.gate===e))==null?void 0:o.lv)??1:1}const rv=n=>ko.find(t=>{var e;return(e=An[t])==null?void 0:e.drop[n]})||ko.find(t=>{var e,i;return(i=(e=An[t])==null?void 0:e.rare)==null?void 0:i[n]});function Go(n){const t=Gt[n];if(!t)return"";if(t.mat===1){const i=rv(n),s=i?An[i]:Object.values(An).find(r=>r.drop[n])||Object.values(An).find(r=>{var o;return(o=r.rare)==null?void 0:o[n]});return s?`Chặt ${s.n.toLowerCase()} để có ${t.n.toLowerCase()}`:""}const e=Object.values(sn).find(i=>i.rec.some(s=>s.out===n));return e?`Làm ở ${e.n}`:""}const qh="maisies-farm-v1",It=()=>Date.now(),Ee=n=>Math.floor(Math.random()*n),wn=n=>n[Ee(n.length)],uc={},cr=(n,t)=>(uc[n]||(uc[n]=[])).push(t),Ln=(n,...t)=>(uc[n]||[]).forEach(e=>e(...t));let _=null;function ln(n){switch(n.k){case"field":case"tree":return[1,1];case"pen":case"house":return[3,3];case"fac":case"barn":case"market":case"boat":case"helper":return[2,2];case"board":case"gate":return[2,1];case"decor":{const t=qn[n.t],e=t.w||1,i=t.d||1;return n.r%2?[i,e]:[e,i]}case"obstacle":return[1,1]}return[1,1]}function fa(n){const t=new Map;for(const e of _.objs){if(e.id===n)continue;const[i,s]=ln(e);for(let r=0;r<i;r++)for(let o=0;o<s;o++)t.set(e.x+r+","+(e.z+o),e.id)}return t}function vm(n,t,e,i,s){if(n<0||t<0||n+e>Jt||t+i>Jt)return!1;const r=fa(s);for(let o=0;o<e;o++)for(let a=0;a<i;a++)if(r.has(n+o+","+(t+a))||!Xn(n+o,t+a))return!1;return!0}function $c(n,t,e=$t+vi/2,i=$t+vi/2){let s=null,r=1e9;const o=fa();for(let a=0;a<=Jt-n;a++)for(let c=0;c<=Jt-t;c++){let l=!0;for(let h=0;h<n&&l;h++)for(let d=0;d<t&&l;d++)(o.has(a+h+","+(c+d))||!Xn(a+h,c+d))&&(l=!1);if(!l)continue;const u=Math.hypot(a-e,c-i);u<r&&(r=u,s=[a,c])}return s}function ov(n,t){return $c(n,t)?null:`Đảo chưa còn chỗ trống ${n}×${t} ô. Chặt bớt bụi cây, hoặc cất bớt đồ trang trí vào túi 📦 rồi đặt nhé!`}const Ft=n=>_.inv[n]||0,Xh=()=>W0+_.barnLvl*$0,_m=()=>Object.entries(_.inv).reduce((n,[t,e])=>{var i;return n+((i=Gt[t])!=null&&i.mat?0:e)},0),lr=()=>Xh()-_m();function We(n,t){_.inv[n]=(_.inv[n]||0)+t,_.inv[n]<=0&&delete _.inv[n]}const Ss=n=>Object.entries(n).every(([t,e])=>Ft(t)>=e);function qc(n){for(const[t,e]of Object.entries(n))We(t,-e)}function vn(n){for(_.xp+=n;_.xp>=Su(_.level);){_.xp-=Su(_.level),_.level++;const t={coins:20+_.level*10,gems:2};_.coins+=t.coins,_.gems+=t.gems,_.energy=Math.max(_.energy,ki(_.level)),Ln("levelup",_.level,t)}}function av(){const n=It(),t=ki(_.level);if(_.energy>=t){_.energyAt=n;return}const e=Math.floor((n-_.energyAt)/(Eu*1e3));e>0&&(_.energy=Math.min(t,_.energy+e),_.energyAt+=e*Eu*1e3)}const cv=(n,t)=>n>=100?"99+":`${n}/${t}`,lv=()=>_.energy>=ki(_.level)?0:_.energyAt+Eu*1e3-It();function jh(){const n=_.level,t=new Set;for(const[e,i]of Object.entries(Be))i.lv<=n&&t.add(e);for(const e of _.objs)if(!e.site&&(e.k==="tree"&&t.add(Fi[e.t].yield),e.k==="pen"&&e.animals.length&&t.add(Ve[e.t].prod),e.k==="fac"))for(const i of sn[e.t].rec)i.lv<=n&&!i.out.endsWith("feed")&&t.add(i.out);return[...t].filter(e=>!Gt[e].mat)}function uv(){const n=jh(),t=n.filter(o=>Be[o]),e=1+Ee(Math.min(3,1+Math.floor(_.level/2))),i={};for(let o=0;Object.keys(i).length<e&&o<80;o++){const a=Math.random()<.45?wn(t):wn(n);if(i[a])continue;const c=Be[a]?Math.min(6,2+Math.floor(_.level/2)):2;i[a]=1+Ee(c)}const s=Object.entries(i).reduce((o,[a,c])=>o+Gt[a].v*c,0);return{who:wn(Ke.slice(1)).id,items:i,coins:Math.round(s*1.5)+5,xp:Math.max(2,Math.round(s/3))}}function Xc(){const n=It();_.orders=_.orders.map(t=>!t||t.wait&&n>=t.wait?uv():t)}function jc(){const n=jh(),t=[],e=[...n].sort(()=>Math.random()-.5);for(let s=0;s<6;s++){const r=e.length?e.pop():wn(n),o=Be[r]?2+Ee(4):1+Ee(2);t.push({item:r,n:o,done:!1})}const i=t.reduce((s,r)=>s+Gt[r.item].v*r.n,0);return{st:"docked",crates:t,coins:Math.round(i*.6),xp:Math.round(i/4),gems:1+Ee(2),leaveAt:It()+15*6e4}}function hv(){const n=It(),t=_.ship;t.st==="away"&&n>=t.backAt?(_.ship=jc(),Ln("ship","arrive")):t.st==="docked"&&n>=t.leaveAt&&(_.ship={st:"away",backAt:n+9e4},Ln("ship","leave"))}const Gn=()=>_.tut<zh.length;function Au(n){const[t,e]=n.split(":"),i=t==="ruin"?q0[e]:t;return _.objs.some(s=>s.k===i&&s.t===e&&!s.site)}const xm=()=>_.objs.some(n=>n.k==="obstacle"&&Xn(n.x,n.z));function so(){if(!Gn())return null;const n=zh[_.tut];return n.ev==="build"&&_.qprog<n.n&&Au(n.key)&&(_.qprog=n.n),n}function dv(){const n=so();return!n||_.qprog<n.n?null:(_.coins+=n.coins||0,_.gems+=n.gems||0,_.energy+=n.energy||0,vn(n.xp||0),_.tut++,_.qprog=0,n)}function on(n,t,e=1){Ln("act",n,t,e);const i=so();!i||i.ev!==n||i.key&&i.key!==t||(_.qprog=Math.min(i.n,_.qprog+e),Ln("quest"))}const ro=()=>_.nextId=(_.nextId||1)+1;function ym(){const n=It(),t=[],e=()=>t.length+1,i=(h,d)=>({x:h+$t,z:d+$t}),s=()=>({stage:0,got:{},ruin:!0});t.push({id:e(),k:"house",t:"house",...i(11,4),r:0,site:s()}),t.push({id:e(),k:"barn",t:"barn",...i(15,5),r:0}),[[8,9],[9,9],[10,9],[8,10],[9,10],[10,10]].forEach(([h,d],f)=>t.push({id:e(),k:"field",t:"field",...i(h,d),r:0,crop:f<3?"wheat":null,s:n-18e3,e:n+2e3+f*1500})),t.push({id:e(),k:"pen",t:"coop",...i(14,9),r:0,animals:[{s:0,e:0},{s:0,e:0}]}),t.push({id:e(),k:"fac",t:"feedmill",...i(12,13),r:0,jobs:[]}),t.push({id:e(),k:"board",t:"board",...i(8,13),r:0}),t.push({id:e(),k:"tree",t:"palm",...i(17,14),r:0,s:n-1e5,e:n}),lm.forEach(([h,d,f])=>t.push({id:e(),k:"decor",t:h,...i(d,f),r:0})),t.push({id:e(),k:"decor",t:"bush",...i(18,6),r:0}),t.push({id:e(),k:"fac",t:"bakery",...i(15,14),r:0,jobs:[],site:s()}),t.push({id:e(),k:"boat",t:"boat",...i(18,24),r:0,site:s()});const o=Hh(20240611),a=new Set;for(const h of t){const[d,f]=ln(h);for(let p=-1;p<=d;p++)for(let v=-1;v<=f;v++)a.add(h.x+p+","+(h.z+v))}const c=nm.core;for(let h=0;h<vi;h++)for(let d=0;d<vi;d++){if(h>=6&&h<=19&&d>=2&&d<=16||a.has(h+$t+","+(d+$t)))continue;const p=Math.min(h,d,vi-1-h,vi-1-d),v=h<13,m=p<1?v?.3:.12:v?.6:.24;o()<m&&t.push({id:e(),k:"obstacle",t:c[Math.floor(o()*c.length)],...i(h,d),r:Math.floor(o()*4)})}const l=dm(t.length+1);t.push(...l.objs);const u={ffsDeco:!0,v:2,coins:150,gems:10,xp:0,level:1,energy:ki(1),energyAt:n,inv:{wheat:4,chickenfeed:2,wood:4,palmleaf:4},barnLvl:0,objs:t,nextId:l.nextId,orders:[null,null,null,null,null,null],ship:null,qprog:0,story:{},qs:[],choreN:0,lastDaily:"",sound:!0,music:!0,seed:"wheat",zones:{core:!0,west:!1,north:!1,old:!1},beach:[],tut:0,boatFixed:!1};return Gh(u)}function se(){try{localStorage.setItem(qh,JSON.stringify(_))}catch{}}const Yd=qh+"-backup";function bm(n){try{localStorage.getItem(Yd)==null&&localStorage.setItem(Yd,n)}catch{}}function fv(){let n=null,t=null;try{t=localStorage.getItem(qh),n=JSON.parse(t)}catch{}return n&&n.v===1&&Array.isArray(n.objs)?(bm(t),_=fm(n),se()):_=n&&n.v===2&&Array.isArray(n.objs)?Mm(n):ym(),_.ship||(_.ship=jc()),Xc(),_}const pv=()=>btoa(unescape(encodeURIComponent(JSON.stringify(_))));function mv(n){const t=decodeURIComponent(escape(atob(n.replace(/\s+/g,"")))),e=JSON.parse(t);if(!e||e.v!==1&&e.v!==2||!Array.isArray(e.objs))throw new Error("bad");e.v===1&&bm(t),_=e.v===1?fm(e):Mm(e),se()}function Mm(n){const t=n.objs.find(e=>e.k==="boat");return t?t.site||(n.boatFixed=!0):(n.tut>=zh.length||(n.tut=999),n.boatFixed=!0),iv(n),Gh(n)}function gv(n){if(!_.ffsDeco){_.ffsDeco=!0;for(const[t,e,i]of lm){const s=e+$t,r=i+$t;if(!vm(s,r,1,1))continue;const o={id:ro(),k:"decor",t,x:s,z:r,r:0};_.objs.push(o),n(o)}se()}}function vv(){_=ym(),_.ship=jc(),Xc(),se()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="170",_v=0,Kd=1,xv=2,wm=1,Sm=2,Yi=3,Es=0,Pn=1,pi=2,Ji=0,Wr=1,Jd=2,Zd=3,Qd=4,yv=5,qs=100,bv=101,Mv=102,wv=103,Sv=104,Ev=200,Tv=201,Av=202,Cv=203,Cu=204,Ru=205,Rv=206,Pv=207,Dv=208,Iv=209,Lv=210,kv=211,Nv=212,Uv=213,Ov=214,Pu=0,Du=1,Iu=2,Yr=3,Lu=4,ku=5,Nu=6,Uu=7,Em=0,Fv=1,Bv=2,ys=0,Tm=1,Am=2,Cm=3,Rm=4,zv=5,Pm=6,Kh=7,Dm=300,Kr=301,Jr=302,Ou=303,Fu=304,Yc=306,Wo=1e3,Ys=1001,Bu=1002,Wn=1003,Vv=1004,Ea=1005,Ci=1006,_l=1007,Ks=1008,ts=1009,Im=1010,Lm=1011,$o=1012,Jh=1013,Qs=1014,Ri=1015,ur=1016,Zh=1017,Qh=1018,Zr=1020,km=35902,Nm=1021,Um=1022,xi=1023,Om=1024,Fm=1025,$r=1026,Qr=1027,td=1028,ed=1029,Bm=1030,nd=1031,id=1033,hc=33776,dc=33777,fc=33778,pc=33779,zu=35840,Vu=35841,Hu=35842,Gu=35843,Wu=36196,$u=37492,qu=37496,Xu=37808,ju=37809,Yu=37810,Ku=37811,Ju=37812,Zu=37813,Qu=37814,th=37815,eh=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,mc=36492,ah=36494,ch=36495,zm=36283,lh=36284,uh=36285,hh=36286,Hv=2200,Gv=2201,Wv=2202,Tc=2300,dh=2301,xl=2302,zr=2400,Vr=2401,Ac=2402,sd=2500,$v=2501,qv=3200,Xv=3201,Vm=0,jv=1,ps="",Ie="srgb",oo="srgb-linear",Kc="linear",Me="srgb",vr=7680,tf=519,Yv=512,Kv=513,Jv=514,Hm=515,Zv=516,Qv=517,t_=518,e_=519,fh=35044,ef="300 es",Ki=2e3,Cc=2001;class hr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const No=Math.PI/180,qo=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function rd(n,t){return(n%t+t)%t}function n_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function i_(n,t,e){return n!==t?(e-n)/(t-n):0}function Uo(n,t,e){return(1-e)*n+e*t}function s_(n,t,e,i){return Uo(n,t,1-Math.exp(-e*i))}function r_(n,t=1){return t-Math.abs(rd(n,t*2)-t)}function o_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function a_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function c_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function l_(n,t){return n+Math.random()*(t-n)}function u_(n){return n*(.5-Math.random())}function h_(n){n!==void 0&&(nf=n);let t=nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function d_(n){return n*No}function f_(n){return n*qo}function p_(n){return(n&n-1)===0&&n!==0}function m_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function g_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function v_(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tr={DEG2RAD:No,RAD2DEG:qo,generateUUID:bi,clamp:an,euclideanModulo:rd,mapLinear:n_,inverseLerp:i_,lerp:Uo,damp:s_,pingpong:r_,smoothstep:o_,smootherstep:a_,randInt:c_,randFloat:l_,randFloatSpread:u_,seededRandom:h_,degToRad:d_,radToDeg:f_,isPowerOfTwo:p_,ceilPowerOfTwo:m_,floorPowerOfTwo:g_,setQuaternionFromProperEuler:v_,normalize:we,denormalize:mi};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=s[0],m=s[3],g=s[6],M=s[1],b=s[4],x=s[7],L=s[2],C=s[5],R=s[8];return r[0]=o*v+a*M+c*L,r[3]=o*m+a*b+c*C,r[6]=o*g+a*x+c*R,r[1]=l*v+u*M+h*L,r[4]=l*m+u*b+h*C,r[7]=l*g+u*x+h*R,r[2]=d*v+f*M+p*L,r[5]=d*m+f*b+p*C,r[8]=d*g+f*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=e*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new te;function Gm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function __(){const n=Xo("canvas");return n.style.display="block",n}const sf={};function Po(n){n in sf||(sf[n]=!0,console.warn(n))}function x_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function y_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function b_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(n.r=qr(n.r),n.g=qr(n.g),n.b=qr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ps?Kc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const rf=[.64,.33,.3,.6,.15,.06],of=[.2126,.7152,.0722],af=[.3127,.329],cf=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[oo]:{primaries:rf,whitePoint:af,transfer:Kc,toXYZ:cf,fromXYZ:lf,luminanceCoefficients:of,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:rf,whitePoint:af,transfer:Me,toXYZ:cf,fromXYZ:lf,luminanceCoefficients:of,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let _r;class M_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_r===void 0&&(_r=Xo("canvas")),_r.width=t.width,_r.height=t.height;const i=_r.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w_=0;class Wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bl(s[o].image)):r.push(bl(s[o]))}else r=bl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?M_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S_=0;class cn extends hr{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,i=Ys,s=Ys,r=Ci,o=Ks,a=xi,c=ts,l=cn.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=bi(),this.name="",this.source=new Wm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Ys:t.x=t.x<0?0:1;break;case Bu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Ys:t.y=t.y<0?0:1;break;case Bu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Dm;cn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,x=(f+1)/2,L=(g+1)/2,C=(u+d)/4,R=(h+v)/4,I=(p+m)/4;return b>x&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=R/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=I/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends hr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends E_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $m extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class T_ extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(h!==v||c!==d||l!==f||u!==p){let m=1-a;const g=c*d+l*f+u*p+h*v,M=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const L=Math.sqrt(b),C=Math.atan2(L,g*M);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const x=a*M;if(c=c*m+d*x,l=l*m+f*x,u=u*m+p*x,h=h*m+v*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new P,uf=new Di;class Kn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),Aa.subVectors(this.max,yo),xr.subVectors(t.a,yo),yr.subVectors(t.b,yo),br.subVectors(t.c,yo),as.subVectors(yr,xr),cs.subVectors(br,yr),Os.subVectors(xr,br);let e=[0,-as.z,as.y,0,-cs.z,cs.y,0,-Os.z,Os.y,as.z,0,-as.x,cs.z,0,-cs.x,Os.z,0,-Os.x,-as.y,as.x,0,-cs.y,cs.x,0,-Os.y,Os.x,0];return!wl(e,xr,yr,br,Aa)||(e=[1,0,0,0,1,0,0,0,1],!wl(e,xr,yr,br,Aa))?!1:(Ca.crossVectors(as,cs),e=[Ca.x,Ca.y,Ca.z],wl(e,xr,yr,br,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wi=[new P,new P,new P,new P,new P,new P,new P,new P],ci=new P,Ta=new Kn,xr=new P,yr=new P,br=new P,as=new P,cs=new P,Os=new P,yo=new P,Aa=new P,Ca=new P,Fs=new P;function wl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);const a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=t.dot(Fs),l=e.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const A_=new Kn,bo=new P,Sl=new P;class ao{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):A_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const e=bo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(Sl)),this.expandByPoint(bo.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new P,El=new P,Ra=new P,ls=new P,Tl=new P,Pa=new P,Al=new P;class qm{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){El.copy(t).add(e).multiplyScalar(.5),Ra.copy(e).sub(t).normalize(),ls.copy(this.origin).sub(El);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ra),a=ls.dot(this.direction),c=-ls.dot(Ra),l=ls.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(El).addScaledVector(Ra,d),f}intersectSphere(t,e){$i.subVectors(t.center,this.origin);const i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,i,s,r){Tl.subVectors(e,t),Pa.subVectors(i,t),Al.crossVectors(Tl,Pa);let o=this.direction.dot(Al),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,t);const c=a*this.direction.dot(Pa.crossVectors(ls,Pa));if(c<0)return null;const l=a*this.direction.dot(Tl.cross(ls));if(l<0||c+l>o)return null;const u=-a*ls.dot(Al);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,m)}set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Mr.setFromMatrixColumn(t,0).length(),r=1/Mr.setFromMatrixColumn(t,1).length(),o=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,p=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,v=l*h;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,v=l*h;e[0]=d-v*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,p=a*u,v=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*u,e[4]=v-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(C_,t,R_)}lookAt(t,e,i){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),us.crossVectors(i,On),us.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),us.crossVectors(i,On)),us.normalize(),Da.crossVectors(On,us),s[0]=us.x,s[4]=Da.x,s[8]=On.x,s[1]=us.y,s[5]=Da.y,s[9]=On.y,s[2]=us.z,s[6]=Da.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],M=i[3],b=i[7],x=i[11],L=i[15],C=s[0],R=s[4],I=s[8],E=s[12],w=s[1],D=s[5],G=s[9],z=s[13],j=s[2],Z=s[6],X=s[10],et=s[14],$=s[3],ft=s[7],yt=s[11],Tt=s[15];return r[0]=o*C+a*w+c*j+l*$,r[4]=o*R+a*D+c*Z+l*ft,r[8]=o*I+a*G+c*X+l*yt,r[12]=o*E+a*z+c*et+l*Tt,r[1]=u*C+h*w+d*j+f*$,r[5]=u*R+h*D+d*Z+f*ft,r[9]=u*I+h*G+d*X+f*yt,r[13]=u*E+h*z+d*et+f*Tt,r[2]=p*C+v*w+m*j+g*$,r[6]=p*R+v*D+m*Z+g*ft,r[10]=p*I+v*G+m*X+g*yt,r[14]=p*E+v*z+m*et+g*Tt,r[3]=M*C+b*w+x*j+L*$,r[7]=M*R+b*D+x*Z+L*ft,r[11]=M*I+b*G+x*X+L*yt,r[15]=M*E+b*z+x*et+L*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15];return p*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+g*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],M=h*m*l-v*d*l+v*c*f-a*m*f-h*c*g+a*d*g,b=p*d*l-u*m*l-p*c*f+o*m*f+u*c*g-o*d*g,x=u*v*l-p*h*l+p*a*f-o*v*f-u*a*g+o*h*g,L=p*h*c-u*v*c-p*a*d+o*v*d+u*a*m-o*h*m,C=e*M+i*b+s*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=M*R,t[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*g-i*d*g)*R,t[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*g+i*c*g)*R,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*R,t[4]=b*R,t[5]=(u*m*r-p*d*r+p*s*f-e*m*f-u*s*g+e*d*g)*R,t[6]=(p*c*r-o*m*r-p*s*l+e*m*l+o*s*g-e*c*g)*R,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(p*h*r-u*v*r-p*i*f+e*v*f+u*i*g-e*h*g)*R,t[10]=(o*v*r-p*a*r+p*i*l-e*v*l-o*i*g+e*a*g)*R,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*f-e*a*f)*R,t[12]=L*R,t[13]=(u*v*s-p*h*s+p*i*d-e*v*d-u*i*m+e*h*m)*R,t[14]=(p*a*s-o*v*s-p*i*c+e*v*c+o*i*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,v=o*u,m=o*h,g=a*h,M=c*l,b=c*u,x=c*h,L=i.x,C=i.y,R=i.z;return s[0]=(1-(v+g))*L,s[1]=(f+x)*L,s[2]=(p-b)*L,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+g))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(p+b)*R,s[9]=(m-M)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Mr.set(s[0],s[1],s[2]).length();const o=Mr.set(s[4],s[5],s[6]).length(),a=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],li.copy(this);const l=1/r,u=1/o,h=1/a;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,e.setFromRotationMatrix(li),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ki){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,p;if(a===Ki)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Cc)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ki){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*l,f=(i+s)*u;let p,v;if(a===Ki)p=(o+r)*h,v=-2*h;else if(a===Cc)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mr=new P,li=new fe,C_=new P(0,0,0),R_=new P(1,1,1),us=new P,Da=new P,On=new P,hf=new fe,df=new Di;class Ni{constructor(t=0,e=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return df.setFromEuler(this),this.setFromQuaternion(df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P_=0;const ff=new P,wr=new Di,qi=new fe,Ia=new P,Mo=new P,D_=new P,I_=new Di,pf=new P(1,0,0),mf=new P(0,1,0),gf=new P(0,0,1),vf={type:"added"},L_={type:"removed"},Sr={type:"childadded",child:null},Cl={type:"childremoved",child:null};class Ye extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new P,e=new Ni,i=new Di,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new te}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ia.copy(t):Ia.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Mo,Ia,this.up):qi.lookAt(Ia,Mo,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(qi),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(L_),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,D_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,I_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new P(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new P,Xi=new P,Rl=new P,ji=new P,Er=new P,Tr=new P,_f=new P,Pl=new P,Dl=new P,Il=new P,Ll=new Fe,kl=new Fe,Nl=new Fe;class ei{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ui.subVectors(t,e),s.cross(ui);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ui.subVectors(s,e),Xi.subVectors(i,e),Rl.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(Xi),c=ui.dot(Rl),l=Xi.dot(Xi),u=Xi.dot(Rl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ji.x),c.addScaledVector(o,ji.y),c.addScaledVector(a,ji.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ll.setScalar(0),kl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,i),Nl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ll,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(t,e,i,s){return ui.subVectors(i,e),Xi.subVectors(t,e),ui.cross(Xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ui.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Er.subVectors(s,i),Tr.subVectors(r,i),Pl.subVectors(t,i);const c=Er.dot(Pl),l=Tr.dot(Pl);if(c<=0&&l<=0)return e.copy(i);Dl.subVectors(t,s);const u=Er.dot(Dl),h=Tr.dot(Dl);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Er,o);Il.subVectors(t,r);const f=Er.dot(Il),p=Tr.dot(Il);if(p>=0&&f<=p)return e.copy(r);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Tr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return _f.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(_f,a);const g=1/(m+v+d);return o=v*g,a=d*g,e.copy(i).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},La={h:0,s:0,l:0};function Ul(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=rd(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ul(o,r,t+1/3),this.g=Ul(o,r,t),this.b=Ul(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=Xm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ae.fromWorkingColorSpace(pn.copy(this),t),Math.round(an(pn.r*255,0,255))*65536+Math.round(an(pn.g*255,0,255))*256+Math.round(an(pn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(pn.copy(this),e);const i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ie){ae.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,i=pn.g,s=pn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(La);const i=Uo(hs.h,La.h,e),s=Uo(hs.s,La.s,e),r=Uo(hs.l,La.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ie;ie.NAMES=Xm;let k_=0;class co extends hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=bi(),this.name="",this.blending=Wr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ru&&(i.blendDst=this.blendDst),this.blendEquation!==qs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends co{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new P,ka=new ot;class $n{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ka.fromBufferAttribute(this,e),ka.applyMatrix3(t),this.setXY(e,ka.x,ka.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}}class jm extends $n{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ym extends $n{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends $n{constructor(t,e,i){super(new Float32Array(t),e,i)}}let N_=0;const Zn=new fe,Ol=new Ye,Ar=new P,Fn=new Kn,wo=new Kn,en=new P;class hn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gm(t)?Ym:jm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return Ol.lookAt(t),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Fn.min,wo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,wo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(wo.min),Fn.expandByPoint(wo.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Ar.fromBufferAttribute(t,l),en.add(Ar)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new P,c[I]=new P;const l=new P,u=new P,h=new P,d=new ot,f=new ot,p=new ot,v=new P,m=new P;function g(I,E,w){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,w),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[I].add(v),a[E].add(v),a[w].add(v),c[I].add(m),c[E].add(m),c[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,E=M.length;I<E;++I){const w=M[I],D=w.start,G=w.count;for(let z=D,j=D+G;z<j;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new P,x=new P,L=new P,C=new P;function R(I){L.fromBufferAttribute(s,I),C.copy(L);const E=a[I];b.copy(E),b.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(C,E);const D=x.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,E=M.length;I<E;++I){const w=M[I],D=w.start,G=w.count;for(let z=D,j=D+G;z<j;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let g=0;g<u;g++)d[p++]=l[f++]}return new $n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new fe,Bs=new qm,Na=new ao,yf=new P,Ua=new P,Oa=new P,Fa=new P,Fl=new P,Ba=new P,bf=new P,za=new P;class Nt extends Ye{constructor(t=new hn,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Fl.fromBufferAttribute(h,t),o?Ba.addScaledVector(Fl,u):Ba.addScaledVector(Fl.sub(e),u))}e.add(Ba)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(Na.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Na,yf)===null||Bs.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(xf.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(xf),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,L=b;x<L;x+=3){const C=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=Va(this,g,t,i,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const M=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Va(this,o,t,i,l,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,L=b;x<L;x+=3){const C=x,R=x+1,I=x+2;s=Va(this,g,t,i,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const M=m,b=m+1,x=m+2;s=Va(this,o,t,i,l,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function U_(n,t,e,i,s,r,o,a){let c;if(t.side===Pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Es,a),c===null)return null;za.copy(a),za.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(za);return l<e.near||l>e.far?null:{distance:l,point:za.clone(),object:n}}function Va(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ua),n.getVertexPosition(c,Oa),n.getVertexPosition(l,Fa);const u=U_(n,t,e,i,Ua,Oa,Fa,bf);if(u){const h=new P;ei.getBarycoord(bf,Ua,Oa,Fa,h),s&&(u.uv=ei.getInterpolatedAttribute(s,a,c,l,h,new ot)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,c,l,h,new ot)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,c,l,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};ei.getNormal(Ua,Oa,Fa,d.normal),u.face=d,u.barycoord=h}return u}class Ge extends hn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(h,2));function p(v,m,g,M,b,x,L,C,R,I,E){const w=x/R,D=L/I,G=x/2,z=L/2,j=C/2,Z=R+1,X=I+1;let et=0,$=0;const ft=new P;for(let yt=0;yt<X;yt++){const Tt=yt*D-z;for(let jt=0;jt<Z;jt++){const ve=jt*w-G;ft[v]=ve*M,ft[m]=Tt*b,ft[g]=j,l.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[g]=C>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(jt/R),h.push(1-yt/I),et+=1}}for(let yt=0;yt<I;yt++)for(let Tt=0;Tt<R;Tt++){const jt=d+Tt+Z*yt,ve=d+Tt+Z*(yt+1),J=d+(Tt+1)+Z*(yt+1),ct=d+(Tt+1)+Z*yt;c.push(jt,ve,ct),c.push(ve,J,ct),$+=6}a.addGroup(f,$,E),f+=$,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function xn(n){const t={};for(let e=0;e<n.length;e++){const i=to(n[e]);for(const s in i)t[s]=i[s]}return t}function O_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Km(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const ad={clone:to,merge:xn};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends co{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=O_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jm extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new P,Mf=new ot,wf=new ot;class ti extends Jm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,Mf,wf),e.subVectors(wf,Mf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(No*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cr=-90,Rr=1;class z_ extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ti(Cr,Rr,t,e);s.layers=this.layers,this.add(s);const r=new ti(Cr,Rr,t,e);r.layers=this.layers,this.add(r);const o=new ti(Cr,Rr,t,e);o.layers=this.layers,this.add(o);const a=new ti(Cr,Rr,t,e);a.layers=this.layers,this.add(a);const c=new ti(Cr,Rr,t,e);c.layers=this.layers,this.add(c);const l=new ti(Cr,Rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Zm extends cn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Kr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class V_ extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Ji});r.uniforms.tEquirect.value=e;const o=new Nt(s,r),a=e.minFilter;return e.minFilter===Ks&&(e.minFilter=Ci),new z_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Bl=new P,H_=new P,G_=new te;class fs{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Bl.subVectors(i,e).cross(H_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Bl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||G_.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new ao,Ha=new P;class cd{constructor(t=new fs,e=new fs,i=new fs,s=new fs,r=new fs,o=new fs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ki){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],M=s[13],b=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-g).normalize(),i[1].setComponents(c+r,d+l,m+f,x+g).normalize(),i[2].setComponents(c+o,d+u,m+p,x+M).normalize(),i[3].setComponents(c-o,d-u,m-p,x-M).normalize(),i[4].setComponents(c-a,d-h,m-v,x-b).normalize(),e===Ki)i[5].setComponents(c+a,d+h,m+v,x+b).normalize();else if(e===Cc)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ha.x=s.normal.x>0?t.max.x:t.min.x,Ha.y=s.normal.y>0?t.max.y:t.min.y,Ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function W_(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ss extends hn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const M=g*d-o;for(let b=0;b<l;b++){const x=b*h-r;p.push(x,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){const b=M+l*g,x=M+l*(g+1),L=M+1+l*(g+1),C=M+1+l*g;f.push(b,x,C),f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var $_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q_=`#ifdef USE_ALPHAHASH
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
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q_=`#ifdef USE_BATCHING
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
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sx=`#ifdef USE_IRIDESCENCE
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
#endif`,rx=`#ifdef USE_BUMPMAP
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,px=`#define PI 3.141592653589793
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
} // validated`,mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gx=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
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
#endif`,Gx=`struct PhysicalMaterial {
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
}`,Wx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ty=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
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
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
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
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ry=`float getShadowMask() {
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
}`,Py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,Jy=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,Qy=`#define DISTANCE
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,cb=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,ub=`#define NORMAL
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
}`,hb=`#define NORMAL
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
}`,db=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
}`,gb=`#define TOON
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
}`,vb=`#define TOON
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
}`,_b=`uniform float size;
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
}`,xb=`uniform vec3 diffuse;
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
}`,yb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Mb=`uniform float rotation;
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
}`,wb=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:$_,alphahash_pars_fragment:q_,alphamap_fragment:X_,alphamap_pars_fragment:j_,alphatest_fragment:Y_,alphatest_pars_fragment:K_,aomap_fragment:J_,aomap_pars_fragment:Z_,batching_pars_vertex:Q_,batching_vertex:tx,begin_vertex:ex,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:sx,bumpmap_pars_fragment:rx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:cx,clipping_planes_vertex:lx,color_fragment:ux,color_pars_fragment:hx,color_pars_vertex:dx,color_vertex:fx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:bx,colorspace_pars_fragment:Mx,envmap_fragment:wx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:Ex,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Ox,envmap_vertex:Ax,fog_vertex:Cx,fog_pars_vertex:Rx,fog_fragment:Px,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Lx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Nx,lights_pars_begin:Ux,lights_toon_fragment:Fx,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:$x,lights_fragment_end:qx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Kx,map_fragment:Jx,map_pars_fragment:Zx,map_particle_fragment:Qx,map_particle_pars_fragment:ty,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:sy,morphnormal_vertex:ry,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:cy,normal_fragment_maps:ly,normal_pars_fragment:uy,normal_pars_vertex:hy,normal_vertex:dy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:by,dithering_fragment:My,dithering_pars_fragment:wy,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:Ay,shadowmap_vertex:Cy,shadowmask_pars_fragment:Ry,skinbase_vertex:Py,skinning_pars_vertex:Dy,skinning_vertex:Iy,skinnormal_vertex:Ly,specularmap_fragment:ky,specularmap_pars_fragment:Ny,tonemapping_fragment:Uy,tonemapping_pars_fragment:Oy,transmission_fragment:Fy,transmission_pars_fragment:By,uv_pars_fragment:zy,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:$y,backgroundCube_vert:qy,backgroundCube_frag:Xy,cube_vert:jy,cube_frag:Yy,depth_vert:Ky,depth_frag:Jy,distanceRGBA_vert:Zy,distanceRGBA_frag:Qy,equirect_vert:tb,equirect_frag:eb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:sb,meshbasic_frag:rb,meshlambert_vert:ob,meshlambert_frag:ab,meshmatcap_vert:cb,meshmatcap_frag:lb,meshnormal_vert:ub,meshnormal_frag:hb,meshphong_vert:db,meshphong_frag:fb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:vb,points_vert:_b,points_frag:xb,shadow_vert:yb,shadow_frag:bb,sprite_vert:Mb,sprite_frag:wb},pt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ti={basic:{uniforms:xn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:xn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:xn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:xn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:xn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:xn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:xn([pt.points,pt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:xn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:xn([pt.common,pt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:xn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:xn([pt.sprite,pt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:xn([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:xn([pt.lights,pt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ti.physical={uniforms:xn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Ga={r:0,b:0,g:0},Vs=new Ni,Sb=new fe;function Eb(n,t,e,i,s,r,o){const a=new ie(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function p(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function v(M){let b=!1;const x=p(M);x===null?g(a,c):x&&x.isColor&&(g(x,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,b){const x=p(b);x&&(x.isCubeTexture||x.mapping===Yc)?(u===void 0&&(u=new Nt(new Ge(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:to(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(b.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Vs)),u.material.toneMapped=ae.getTransfer(x.colorSpace)!==Me,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new ss(2,2),new Mi({name:"BackgroundMaterial",uniforms:to(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,b){M.getRGB(Ga,Km(n)),i.buffers.color.setClear(Ga.r,Ga.g,Ga.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,g(a,c)},render:v,addToRenderList:m}}function Tb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(w,D,G,z,j){let Z=!1;const X=h(z,G,D);r!==X&&(r=X,l(r.object)),Z=f(w,z,G,j),Z&&p(w,z,G,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(w,D,G,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,D,G){const z=G.wireframe===!0;let j=i[w.id];j===void 0&&(j={},i[w.id]=j);let Z=j[D.id];Z===void 0&&(Z={},j[D.id]=Z);let X=Z[z];return X===void 0&&(X=d(c()),Z[z]=X),X}function d(w){const D=[],G=[],z=[];for(let j=0;j<e;j++)D[j]=0,G[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:z,object:w,attributes:{},index:null}}function f(w,D,G,z){const j=r.attributes,Z=D.attributes;let X=0;const et=G.getAttributes();for(const $ in et)if(et[$].location>=0){const yt=j[$];let Tt=Z[$];if(Tt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),yt===void 0||yt.attribute!==Tt||Tt&&yt.data!==Tt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function p(w,D,G,z){const j={},Z=D.attributes;let X=0;const et=G.getAttributes();for(const $ in et)if(et[$].location>=0){let yt=Z[$];yt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const Tt={};Tt.attribute=yt,yt&&yt.data&&(Tt.data=yt.data),j[$]=Tt,X++}r.attributes=j,r.attributesNum=X,r.index=z}function v(){const w=r.newAttributes;for(let D=0,G=w.length;D<G;D++)w[D]=0}function m(w){g(w,0)}function g(w,D){const G=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;G[w]=1,z[w]===0&&(n.enableVertexAttribArray(w),z[w]=1),j[w]!==D&&(n.vertexAttribDivisor(w,D),j[w]=D)}function M(){const w=r.newAttributes,D=r.enabledAttributes;for(let G=0,z=D.length;G<z;G++)D[G]!==w[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function b(w,D,G,z,j,Z,X){X===!0?n.vertexAttribIPointer(w,D,G,j,Z):n.vertexAttribPointer(w,D,G,z,j,Z)}function x(w,D,G,z){v();const j=z.attributes,Z=G.getAttributes(),X=D.defaultAttributeValues;for(const et in Z){const $=Z[et];if($.location>=0){let ft=j[et];if(ft===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ft!==void 0){const yt=ft.normalized,Tt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;const ve=jt.buffer,J=jt.type,ct=jt.bytesPerElement,At=J===n.INT||J===n.UNSIGNED_INT||ft.gpuType===Jh;if(ft.isInterleavedBufferAttribute){const ut=ft.data,Ot=ut.stride,qt=ft.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)g($.location+Ht,ut.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)m($.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ht=0;Ht<$.locationSize;Ht++)b($.location+Ht,Tt/$.locationSize,J,yt,Ot*ct,(qt+Tt/$.locationSize*Ht)*ct,At)}else{if(ft.isInstancedBufferAttribute){for(let ut=0;ut<$.locationSize;ut++)g($.location+ut,ft.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ut=0;ut<$.locationSize;ut++)m($.location+ut);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ut=0;ut<$.locationSize;ut++)b($.location+ut,Tt/$.locationSize,J,yt,Tt*ct,Tt/$.locationSize*ut*ct,At)}}else if(X!==void 0){const yt=X[et];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv($.location,yt);break;case 3:n.vertexAttrib3fv($.location,yt);break;case 4:n.vertexAttrib4fv($.location,yt);break;default:n.vertexAttrib1fv($.location,yt)}}}}M()}function L(){I();for(const w in i){const D=i[w];for(const G in D){const z=D[G];for(const j in z)u(z[j].object),delete z[j];delete D[G]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const D=i[w.id];for(const G in D){const z=D[G];for(const j in z)u(z[j].object),delete z[j];delete D[G]}delete i[w.id]}function R(w){for(const D in i){const G=i[D];if(G[w.id]===void 0)continue;const z=G[w.id];for(const j in z)u(z[j].object),delete z[j];delete G[w.id]}}function I(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Ab(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==xi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ts&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ri&&!I)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function Rb(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new fs,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,b=M*4;let x=g.clippingState||null;c.value=x,x=u(p,d,b,f);for(let L=0;L!==b;++L)x[L]=e[L];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,p!==!0||m===null){const g=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,x=f;b!==v;++b,x+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Pb(n){let t=new WeakMap;function e(o,a){return a===Ou?o.mapping=Kr:a===Fu&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ou||a===Fu)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new V_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jc extends Jm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hr=4,Sf=[.125,.215,.35,.446,.526,.582],Xs=20,zl=new Jc,Ef=new ie;let Vl=null,Hl=0,Gl=0,Wl=!1;const $s=(1+Math.sqrt(5))/2,Pr=1/$s,Tf=[new P(-$s,Pr,0),new P($s,Pr,0),new P(-Pr,0,$s),new P(Pr,0,$s),new P(0,$s,-Pr),new P(0,$s,Pr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Af{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vl,Hl,Gl),this._renderer.xr.enabled=Wl,t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ur,format:xi,colorSpace:oo,depthBuffer:!1},s=Cf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Db(r)),this._blurMaterial=Ib(r,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,zl)}_sceneToCubeUV(t,e,i,s){const a=new ti(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ef),u.toneMapping=ys,u.autoClear=!1;const f=new ri({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new Nt(new Ge,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ef),v=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):M===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const b=this._cubeSize;Wa(s,M*b,g>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Kr||t.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Wa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,zl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xs-1),v=r/p,m=isFinite(r)?1+Math.floor(u*v):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);const g=[];let M=0;for(let R=0;R<Xs;++R){const I=R/v,E=Math.exp(-I*I/2);g.push(E),R===0?M+=E:R<m&&(M+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-i;const x=this._sizeLods[s],L=3*x*(s>b-Hr?s-b+Hr:0),C=4*(this._cubeSize-x);Wa(e,L,C,3*x,2*x),c.setRenderTarget(e),c.render(h,zl)}}function Db(n){const t=[],e=[],i=[];let s=n;const r=n-Hr+1+Sf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Hr?c=Sf[o-n+Hr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,m=2,g=1,M=new Float32Array(v*p*f),b=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,I=C>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(E,v*p*C),b.set(d,m*p*C);const w=[C,C,C,C,C,C];x.set(w,g*p*C)}const L=new hn;L.setAttribute("position",new $n(M,v)),L.setAttribute("uv",new $n(b,m)),L.setAttribute("faceIndex",new $n(x,g)),t.push(L),s>Hr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cf(n,t,e){const i=new es(n,t,e);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ib(n,t,e){const i=new Float32Array(Xs),s=new P(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Rf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Pf(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function Lb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ou||c===Fu,u=c===Kr||c===Jr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Af(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Af(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function kb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Nb(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const v=f[p];for(let m=0,g=v.length;m<g;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let b=0,x=M.length;b<x;b+=3){const L=M[b+0],C=M[b+1],R=M[b+2];d.push(L,C,C,R,R,L)}}else if(p!==void 0){const M=p.array;v=p.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const L=b+0,C=b+1,R=b+2;d.push(L,C,C,R,R,L)}}else return;const m=new(Gm(d)?Ym:jm)(d,1);m.version=v;const g=r.get(h);g&&t.remove(g),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ub(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,i,1)}function h(d,f,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)l(d[g]/o,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,p);let g=0;for(let M=0;M<p;M++)g+=f[M]*v[M];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ob(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Fb(n,t,e){const i=new WeakMap,s=new Fe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*C*4*h),I=new $m(R,L,C,h);I.type=Ri,I.needsUpdate=!0;const E=x*4;for(let D=0;D<h;D++){const G=g[D],z=M[D],j=b[D],Z=L*C*4*D;for(let X=0;X<G.count;X++){const et=X*E;p===!0&&(s.fromBufferAttribute(G,X),R[Z+et+0]=s.x,R[Z+et+1]=s.y,R[Z+et+2]=s.z,R[Z+et+3]=0),v===!0&&(s.fromBufferAttribute(z,X),R[Z+et+4]=s.x,R[Z+et+5]=s.y,R[Z+et+6]=s.z,R[Z+et+7]=0),m===!0&&(s.fromBufferAttribute(j,X),R[Z+et+8]=s.x,R[Z+et+9]=s.y,R[Z+et+10]=s.z,R[Z+et+11]=j.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ot(L,C)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Bb(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class tg extends cn{constructor(t,e,i,s,r,o,a,c,l,u=$r){if(u!==$r&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=Qs),i===void 0&&u===Qr&&(i=Zr),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=c!==void 0?c:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eg=new cn,Df=new tg(1,1),ng=new $m,ig=new T_,sg=new Zm,If=[],Lf=[],kf=new Float32Array(16),Nf=new Float32Array(9),Uf=new Float32Array(4);function lo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zc(n,t){let e=Lf[t];e===void 0&&(e=new Int32Array(t),Lf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function zb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Wb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),Ze(e,i)}}function $b(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;Nf.set(i),n.uniformMatrix3fv(this.addr,!1,Nf),Ze(e,i)}}function qb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;kf.set(i),n.uniformMatrix4fv(this.addr,!1,kf),Ze(e,i)}}function Xb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Kb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Jb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function tM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function eM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Df.compareFunction=Hm,r=Df):r=eg,e.setTexture2D(t||r,s)}function nM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ig,s)}function iM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||sg,s)}function sM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ng,s)}function rM(n){switch(n){case 5126:return zb;case 35664:return Vb;case 35665:return Hb;case 35666:return Gb;case 35674:return Wb;case 35675:return $b;case 35676:return qb;case 5124:case 35670:return Xb;case 35667:case 35671:return jb;case 35668:case 35672:return Yb;case 35669:case 35673:return Kb;case 5125:return Jb;case 36294:return Zb;case 36295:return Qb;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}function oM(n,t){n.uniform1fv(this.addr,t)}function aM(n,t){const e=lo(t,this.size,2);n.uniform2fv(this.addr,e)}function cM(n,t){const e=lo(t,this.size,3);n.uniform3fv(this.addr,e)}function lM(n,t){const e=lo(t,this.size,4);n.uniform4fv(this.addr,e)}function uM(n,t){const e=lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function hM(n,t){const e=lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dM(n,t){const e=lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fM(n,t){n.uniform1iv(this.addr,t)}function pM(n,t){n.uniform2iv(this.addr,t)}function mM(n,t){n.uniform3iv(this.addr,t)}function gM(n,t){n.uniform4iv(this.addr,t)}function vM(n,t){n.uniform1uiv(this.addr,t)}function _M(n,t){n.uniform2uiv(this.addr,t)}function xM(n,t){n.uniform3uiv(this.addr,t)}function yM(n,t){n.uniform4uiv(this.addr,t)}function bM(n,t,e){const i=this.cache,s=t.length,r=Zc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eg,r[o])}function MM(n,t,e){const i=this.cache,s=t.length,r=Zc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ig,r[o])}function wM(n,t,e){const i=this.cache,s=t.length,r=Zc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sg,r[o])}function SM(n,t,e){const i=this.cache,s=t.length,r=Zc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ng,r[o])}function EM(n){switch(n){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return vM;case 36294:return _M;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return SM}}class TM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rM(e.type)}}class AM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=EM(e.type)}}class CM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Of(n,t){n.seq.push(t),n.map[t.id]=t}function RM(n,t,e){const i=n.name,s=i.length;for($l.lastIndex=0;;){const r=$l.exec(i),o=$l.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Of(e,l===void 0?new TM(a,n,t):new AM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new CM(a),Of(e,h)),e=h}}}class gc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);RM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ff(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const PM=37297;let DM=0;function IM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Bf=new te;function LM(n){ae._getMatrix(Bf,ae.workingColorSpace,n);const t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Kc:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+IM(n.getShaderSource(t),o)}else return s}function kM(n,t){const e=LM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function NM(n,t){let e;switch(t){case Tm:e="Linear";break;case Am:e="Reinhard";break;case Cm:e="Cineon";break;case Rm:e="ACESFilmic";break;case Pm:e="AgX";break;case Kh:e="Neutral";break;case zv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $a=new P;function UM(){ae.getLuminanceCoefficients($a);const n=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function FM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function BM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Do(n){return n!==""}function Vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(n){return n.replace(zM,HM)}const VM=new Map;function HM(n,t){let e=ne[t];if(e===void 0){const i=VM.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ph(e)}const GM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(n){return n.replace(GM,WM)}function WM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $M(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function qM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Kr:case Jr:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function XM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:t="ENVMAP_MODE_REFRACTION";break}return t}function jM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Em:t="ENVMAP_BLENDING_MULTIPLY";break;case Fv:t="ENVMAP_BLENDING_MIX";break;case Bv:t="ENVMAP_BLENDING_ADD";break}return t}function YM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function KM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$M(e),l=qM(e),u=XM(e),h=jM(e),d=YM(e),f=OM(e),p=FM(r),v=s.createProgram();let m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Do).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ys?"#define TONE_MAPPING":"",e.toneMapping!==ys?ne.tonemapping_pars_fragment:"",e.toneMapping!==ys?NM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,kM("linearToOutputTexel",e.outputColorSpace),UM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=ph(o),o=Vf(o,e),o=Hf(o,e),a=ph(a),a=Vf(a,e),a=Hf(a,e),o=Gf(o),a=Gf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=M+m+o,x=M+g+a,L=Ff(s,s.VERTEX_SHADER,b),C=Ff(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(L).trim(),j=s.getShaderInfoLog(C).trim();let Z=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,C);else{const et=zf(s,L,"vertex"),$=zf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+et+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||j==="")&&(X=!1);X&&(D.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:g}})}s.deleteShader(L),s.deleteShader(C),I=new gc(s,v),E=BM(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,PM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=DM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let JM=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new QM(t),e.set(t,i)),i}}class QM{constructor(t){this.id=JM++,this.code=t,this.usedTimes=0}}function t1(n,t,e,i,s,r,o){const a=new od,c=new ZM,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,D,G,z){const j=G.fog,Z=z.geometry,X=E.isMeshStandardMaterial?G.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),$=et&&et.mapping===Yc?et.image.height:null,ft=p[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=yt!==void 0?yt.length:0;let jt=0;Z.morphAttributes.position!==void 0&&(jt=1),Z.morphAttributes.normal!==void 0&&(jt=2),Z.morphAttributes.color!==void 0&&(jt=3);let ve,J,ct,At;if(ft){const be=Ti[ft];ve=be.vertexShader,J=be.fragmentShader}else ve=E.vertexShader,J=E.fragmentShader,c.update(E),ct=c.getVertexShaderID(E),At=c.getFragmentShaderID(E);const ut=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),qt=z.isInstancedMesh===!0,Ht=z.isBatchedMesh===!0,ce=!!E.map,tt=!!E.matcap,at=!!et,A=!!E.aoMap,Lt=!!E.lightMap,it=!!E.bumpMap,wt=!!E.normalMap,dt=!!E.displacementMap,Bt=!!E.emissiveMap,bt=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,O=E.clearcoat>0,Y=E.dispersion>0,nt=E.iridescence>0,K=E.sheen>0,Ct=E.transmission>0,mt=y&&!!E.anisotropyMap,Mt=O&&!!E.clearcoatMap,re=O&&!!E.clearcoatNormalMap,rt=O&&!!E.clearcoatRoughnessMap,St=nt&&!!E.iridescenceMap,zt=nt&&!!E.iridescenceThicknessMap,Wt=K&&!!E.sheenColorMap,Et=K&&!!E.sheenRoughnessMap,oe=!!E.specularMap,ee=!!E.specularColorMap,Ce=!!E.specularIntensityMap,k=Ct&&!!E.transmissionMap,gt=Ct&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,xt=E.alphaTest>0,vt=!!E.alphaHash,Zt=!!E.extensions;let Ue=ys;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const dn={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:J,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:At,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&z._colorsTexture!==null,instancing:qt,instancingColor:qt&&z.instanceColor!==null,instancingMorph:qt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:oo,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:tt,envMap:at,envMapMode:at&&et.mapping,envMapCubeUVHeight:$,aoMap:A,lightMap:Lt,bumpMap:it,normalMap:wt,displacementMap:d&&dt,emissiveMap:Bt,normalMapObjectSpace:wt&&E.normalMapType===jv,normalMapTangentSpace:wt&&E.normalMapType===Vm,metalnessMap:bt,roughnessMap:T,anisotropy:y,anisotropyMap:mt,clearcoat:O,clearcoatMap:Mt,clearcoatNormalMap:re,clearcoatRoughnessMap:rt,dispersion:Y,iridescence:nt,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:K,sheenColorMap:Wt,sheenRoughnessMap:Et,specularMap:oe,specularColorMap:ee,specularIntensityMap:Ce,transmission:Ct,transmissionMap:k,thicknessMap:gt,gradientMap:q,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:vt,combine:E.combine,mapUv:ce&&v(E.map.channel),aoMapUv:A&&v(E.aoMap.channel),lightMapUv:Lt&&v(E.lightMap.channel),bumpMapUv:it&&v(E.bumpMap.channel),normalMapUv:wt&&v(E.normalMap.channel),displacementMapUv:dt&&v(E.displacementMap.channel),emissiveMapUv:Bt&&v(E.emissiveMap.channel),metalnessMapUv:bt&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:mt&&v(E.anisotropyMap.channel),clearcoatMapUv:Mt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(E.sheenRoughnessMap.channel),specularMapUv:oe&&v(E.specularMap.channel),specularColorMapUv:ee&&v(E.specularColorMap.channel),specularIntensityMapUv:Ce&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:gt&&v(E.thicknessMap.channel),alphaMapUv:Q&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(wt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ce||Q),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ot,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:jt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===Me,decodeVideoTextureEmissive:Bt&&E.emissiveMap.isVideoTexture===!0&&ae.getTransfer(E.emissiveMap.colorSpace)===Me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pi,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&E.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dn.vertexUv1s=l.has(1),dn.vertexUv2s=l.has(2),dn.vertexUv3s=l.has(3),l.clear(),dn}function g(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)w.push(D),w.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(w,E),b(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function M(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function b(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const w=p[E.type];let D;if(w){const G=Ti[w];D=ad.clone(G.uniforms)}else D=E.uniforms;return D}function L(E,w){let D;for(let G=0,z=u.length;G<z;G++){const j=u[G];if(j.cacheKey===w){D=j,++D.usedTimes;break}}return D===void 0&&(D=new KM(n,w,E,r),u.push(D)),D}function C(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:I}}function e1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function n1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $f(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,p,v,m){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:m},n[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=v,g.group=m),t++,g}function a(h,d,f,p,v,m){const g=o(h,d,f,p,v,m);f.transmission>0?i.push(g):f.transparent===!0?s.push(g):e.push(g)}function c(h,d,f,p,v,m){const g=o(h,d,f,p,v,m);f.transmission>0?i.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function l(h,d){e.length>1&&e.sort(h||n1),i.length>1&&i.sort(d||$f),s.length>1&&s.sort(d||$f)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function i1(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new qf,n.set(i,[o])):s>=r.length?(o=new qf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function s1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ie};break;case"SpotLight":e={position:new P,direction:new P,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function r1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let o1=0;function a1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function c1(n){const t=new s1,e=r1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new fe,o=new fe;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,M=0,b=0,x=0,L=0,C=0,R=0;l.sort(a1);for(let E=0,w=l.length;E<w;E++){const D=l[E],G=D.color,z=D.intensity,j=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*z,h+=G.g*z,d+=G.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);R++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,$=e.get(D);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=D.shadow.matrix,M++}i.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=j,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const et=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,et.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=et.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=Z,x++}v++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const et=D.shadow,$=e.get(D);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,$.shadowCameraNear=et.camera.near,$.shadowCameraFar=et.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=D.shadow.matrix,b++}i.point[p]=X,p++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[g]=X,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=R,i.version=o1++)}function c(l,u){let h=0,d=0,f=0,p=0,v=0;const m=u.matrixWorldInverse;for(let g=0,M=l.length;g<M;g++){const b=l[g];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Xf(n){const t=new c1(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function l1(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xf(n),t.set(s,[a])):r>=o.length?(a=new Xf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class u1 extends co{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h1 extends co{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
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
}`;function p1(n,t,e){let i=new cd;const s=new ot,r=new ot,o=new Fe,a=new u1({depthPacking:Xv}),c=new h1,l={},u=e.maxTextureSize,h={[Es]:Pn,[Pn]:Es,[pi]:pi},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new hn;p.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let g=this.type;this.render=function(C,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),w=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Ji),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=g!==Yi&&this.type===Yi,j=g===Yi&&this.type!==Yi;for(let Z=0,X=C.length;Z<X;Z++){const et=C[Z],$=et.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ft=$.getFrameExtents();if(s.multiply(ft),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,$.mapSize.y=r.y)),$.map===null||z===!0||j===!0){const Tt=this.type!==Yi?{minFilter:Wn,magFilter:Wn}:{};$.map!==null&&$.map.dispose(),$.map=new es(s.x,s.y,Tt),$.map.texture.name=et.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const yt=$.getViewportCount();for(let Tt=0;Tt<yt;Tt++){const jt=$.getViewport(Tt);o.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),G.viewport(o),$.updateMatrices(et,Tt),i=$.getFrustum(),x(R,I,$.camera,et,this.type)}$.isPointLightShadow!==!0&&this.type===Yi&&M($,I),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(E,w,D)};function M(C,R){const I=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new es(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,I,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,I,f,v,null)}function b(C,R,I,E){let w=null;const D=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)w=D;else if(w=I.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=w.uuid,z=R.uuid;let j=l[G];j===void 0&&(j={},l[G]=j);let Z=j[z];Z===void 0&&(Z=w.clone(),j[z]=Z,R.addEventListener("dispose",L)),w=Z}if(w.visible=R.visible,w.wireframe=R.wireframe,E===Yi?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=n.properties.get(w);G.light=I}return w}function x(C,R,I,E,w){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const z=t.update(C),j=C.material;if(Array.isArray(j)){const Z=z.groups;for(let X=0,et=Z.length;X<et;X++){const $=Z[X],ft=j[$.materialIndex];if(ft&&ft.visible){const yt=b(C,ft,E,w);C.onBeforeShadow(n,C,R,I,z,yt,$),n.renderBufferDirect(I,null,z,yt,C,$),C.onAfterShadow(n,C,R,I,z,yt,$)}}}else if(j.visible){const Z=b(C,j,E,w);C.onBeforeShadow(n,C,R,I,z,Z,null),n.renderBufferDirect(I,null,z,Z,C,null),C.onAfterShadow(n,C,R,I,z,Z,null)}}const G=C.children;for(let z=0,j=G.length;z<j;z++)x(G[z],R,I,E,w)}function L(C){C.target.removeEventListener("dispose",L);for(const I in l){const E=l[I],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const m1={[Pu]:Du,[Iu]:Nu,[Lu]:Uu,[Yr]:ku,[Du]:Pu,[Nu]:Iu,[Uu]:Lu,[ku]:Yr};function g1(n,t){function e(){let k=!1;const gt=new Fe;let q=null;const Q=new Fe(0,0,0,0);return{setMask:function(xt){q!==xt&&!k&&(n.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){k=xt},setClear:function(xt,vt,Zt,Ue,dn){dn===!0&&(xt*=Ue,vt*=Ue,Zt*=Ue),gt.set(xt,vt,Zt,Ue),Q.equals(gt)===!1&&(n.clearColor(xt,vt,Zt,Ue),Q.copy(gt))},reset:function(){k=!1,q=null,Q.set(-1,0,0,0)}}}function i(){let k=!1,gt=!1,q=null,Q=null,xt=null;return{setReversed:function(vt){if(gt!==vt){const Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ue=xt;xt=null,this.setClear(Ue)}gt=vt},getReversed:function(){return gt},setTest:function(vt){vt?ut(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(vt){q!==vt&&!k&&(n.depthMask(vt),q=vt)},setFunc:function(vt){if(gt&&(vt=m1[vt]),Q!==vt){switch(vt){case Pu:n.depthFunc(n.NEVER);break;case Du:n.depthFunc(n.ALWAYS);break;case Iu:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case Lu:n.depthFunc(n.EQUAL);break;case ku:n.depthFunc(n.GEQUAL);break;case Nu:n.depthFunc(n.GREATER);break;case Uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=vt}},setLocked:function(vt){k=vt},setClear:function(vt){xt!==vt&&(gt&&(vt=1-vt),n.clearDepth(vt),xt=vt)},reset:function(){k=!1,q=null,Q=null,xt=null,gt=!1}}}function s(){let k=!1,gt=null,q=null,Q=null,xt=null,vt=null,Zt=null,Ue=null,dn=null;return{setTest:function(be){k||(be?ut(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(be){gt!==be&&!k&&(n.stencilMask(be),gt=be)},setFunc:function(be,oi,Hi){(q!==be||Q!==oi||xt!==Hi)&&(n.stencilFunc(be,oi,Hi),q=be,Q=oi,xt=Hi)},setOp:function(be,oi,Hi){(vt!==be||Zt!==oi||Ue!==Hi)&&(n.stencilOp(be,oi,Hi),vt=be,Zt=oi,Ue=Hi)},setLocked:function(be){k=be},setClear:function(be){dn!==be&&(n.clearStencil(be),dn=be)},reset:function(){k=!1,gt=null,q=null,Q=null,xt=null,vt=null,Zt=null,Ue=null,dn=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,M=null,b=null,x=null,L=null,C=null,R=new ie(0,0,0),I=0,E=!1,w=null,D=null,G=null,z=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,et=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec($)[1]),X=et>=1):$.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=et>=2);let ft=null,yt={};const Tt=n.getParameter(n.SCISSOR_BOX),jt=n.getParameter(n.VIEWPORT),ve=new Fe().fromArray(Tt),J=new Fe().fromArray(jt);function ct(k,gt,q,Q){const xt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(k,vt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<q;Zt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(gt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return vt}const At={};At[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(Yr),it(!1),wt(Kd),ut(n.CULL_FACE),A(Ji);function ut(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Ot(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function qt(k,gt){return h[k]!==gt?(n.bindFramebuffer(k,gt),h[k]=gt,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ht(k,gt){let q=f,Q=!1;if(k){q=d.get(gt),q===void 0&&(q=[],d.set(gt,q));const xt=k.textures;if(q.length!==xt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Zt=xt.length;vt<Zt;vt++)q[vt]=n.COLOR_ATTACHMENT0+vt;q.length=xt.length,Q=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Q=!0);Q&&n.drawBuffers(q)}function ce(k){return p!==k?(n.useProgram(k),p=k,!0):!1}const tt={[qs]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Mv]:n.FUNC_REVERSE_SUBTRACT};tt[wv]=n.MIN,tt[Sv]=n.MAX;const at={[Ev]:n.ZERO,[Tv]:n.ONE,[Av]:n.SRC_COLOR,[Cu]:n.SRC_ALPHA,[Lv]:n.SRC_ALPHA_SATURATE,[Dv]:n.DST_COLOR,[Rv]:n.DST_ALPHA,[Cv]:n.ONE_MINUS_SRC_COLOR,[Ru]:n.ONE_MINUS_SRC_ALPHA,[Iv]:n.ONE_MINUS_DST_COLOR,[Pv]:n.ONE_MINUS_DST_ALPHA,[kv]:n.CONSTANT_COLOR,[Nv]:n.ONE_MINUS_CONSTANT_COLOR,[Uv]:n.CONSTANT_ALPHA,[Ov]:n.ONE_MINUS_CONSTANT_ALPHA};function A(k,gt,q,Q,xt,vt,Zt,Ue,dn,be){if(k===Ji){v===!0&&(Ot(n.BLEND),v=!1);return}if(v===!1&&(ut(n.BLEND),v=!0),k!==yv){if(k!==m||be!==E){if((g!==qs||x!==qs)&&(n.blendEquation(n.FUNC_ADD),g=qs,x=qs),be)switch(k){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jd:n.blendFunc(n.ONE,n.ONE);break;case Zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,b=null,L=null,C=null,R.set(0,0,0),I=0,m=k,E=be}return}xt=xt||gt,vt=vt||q,Zt=Zt||Q,(gt!==g||xt!==x)&&(n.blendEquationSeparate(tt[gt],tt[xt]),g=gt,x=xt),(q!==M||Q!==b||vt!==L||Zt!==C)&&(n.blendFuncSeparate(at[q],at[Q],at[vt],at[Zt]),M=q,b=Q,L=vt,C=Zt),(Ue.equals(R)===!1||dn!==I)&&(n.blendColor(Ue.r,Ue.g,Ue.b,dn),R.copy(Ue),I=dn),m=k,E=!1}function Lt(k,gt){k.side===pi?Ot(n.CULL_FACE):ut(n.CULL_FACE);let q=k.side===Pn;gt&&(q=!q),it(q),k.blending===Wr&&k.transparent===!1?A(Ji):A(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;a.setTest(Q),Q&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function wt(k){k!==_v?(ut(n.CULL_FACE),k!==D&&(k===Kd?n.cullFace(n.BACK):k===xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),D=k}function dt(k){k!==G&&(X&&n.lineWidth(k),G=k)}function Bt(k,gt,q){k?(ut(n.POLYGON_OFFSET_FILL),(z!==gt||j!==q)&&(n.polygonOffset(gt,q),z=gt,j=q)):Ot(n.POLYGON_OFFSET_FILL)}function bt(k){k?ut(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function T(k){k===void 0&&(k=n.TEXTURE0+Z-1),ft!==k&&(n.activeTexture(k),ft=k)}function y(k,gt,q){q===void 0&&(ft===null?q=n.TEXTURE0+Z-1:q=ft);let Q=yt[q];Q===void 0&&(Q={type:void 0,texture:void 0},yt[q]=Q),(Q.type!==k||Q.texture!==gt)&&(ft!==q&&(n.activeTexture(q),ft=q),n.bindTexture(k,gt||At[k]),Q.type=k,Q.texture=gt)}function O(){const k=yt[ft];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){ve.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function Et(k){J.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function oe(k,gt){let q=l.get(gt);q===void 0&&(q=new WeakMap,l.set(gt,q));let Q=q.get(k);Q===void 0&&(Q=n.getUniformBlockIndex(gt,k.name),q.set(k,Q))}function ee(k,gt){const Q=l.get(gt).get(k);c.get(gt)!==Q&&(n.uniformBlockBinding(gt,Q,k.__bindingPointIndex),c.set(gt,Q))}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,yt={},h={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,M=null,b=null,x=null,L=null,C=null,R=new ie(0,0,0),I=0,E=!1,w=null,D=null,G=null,z=null,j=null,ve.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ot,bindFramebuffer:qt,drawBuffers:Ht,useProgram:ce,setBlending:A,setMaterial:Lt,setFlipSided:it,setCullFace:wt,setLineWidth:dt,setPolygonOffset:Bt,setScissorTest:bt,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:nt,texImage2D:St,texImage3D:zt,updateUBOMapping:oe,uniformBlockBinding:ee,texStorage2D:re,texStorage3D:rt,texSubImage2D:K,texSubImage3D:Ct,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Wt,viewport:Et,reset:Ce}}function jf(n,t,e,i){const s=v1(i);switch(e){case Nm:return n*t;case Om:return n*t;case Fm:return n*t*2;case td:return n*t/s.components*s.byteLength;case ed:return n*t/s.components*s.byteLength;case Bm:return n*t*2/s.components*s.byteLength;case nd:return n*t*2/s.components*s.byteLength;case Um:return n*t*3/s.components*s.byteLength;case xi:return n*t*4/s.components*s.byteLength;case id:return n*t*4/s.components*s.byteLength;case hc:case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vu:case Gu:return Math.max(n,16)*Math.max(t,8)/4;case zu:case Hu:return Math.max(n,8)*Math.max(t,8)/2;case Wu:case $u:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ju:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mc:case ah:case ch:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zm:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uh:case hh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v1(n){switch(n){case ts:case Im:return{byteLength:1,components:1};case $o:case Lm:case ur:return{byteLength:2,components:1};case Zh:case Qh:return{byteLength:2,components:4};case Qs:case Jh:case Ri:return{byteLength:4,components:1};case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function _1(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,y){return f?new OffscreenCanvas(T,y):Xo("canvas")}function v(T,y,O){let Y=1;const nt=bt(T);if((nt.width>O||nt.height>O)&&(Y=O/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*nt.width),Ct=Math.floor(Y*nt.height);h===void 0&&(h=p(K,Ct));const mt=y?p(K,Ct):h;return mt.width=K,mt.height=Ct,mt.getContext("2d").drawImage(T,0,0,K,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Ct+")."),mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function g(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,y,O,Y,nt=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),y===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){const Ct=nt?Kc:ae.getTransfer(Y);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=Ct===Me?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(T,y){let O;return T?y===null||y===Qs||y===Zr?O=n.DEPTH24_STENCIL8:y===Ri?O=n.DEPTH32F_STENCIL8:y===$o&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qs||y===Zr?O=n.DEPTH_COMPONENT24:y===Ri?O=n.DEPTH_COMPONENT32F:y===$o&&(O=n.DEPTH_COMPONENT16),O}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wn&&T.minFilter!==Ci?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){const y=T.target;y.removeEventListener("dispose",C),I(y),y.isVideoTexture&&u.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),w(y)}function I(T){const y=i.get(T);if(y.__webglInit===void 0)return;const O=T.source,Y=d.get(O);if(Y){const nt=Y[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(Y).length===0&&d.delete(O)}i.remove(T)}function E(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const O=T.source,Y=d.get(O);delete Y[y.__cacheKey],o.memory.textures--}function w(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let nt=0;nt<y.__webglFramebuffer[Y].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[Y][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,nt=O.length;Y<nt;Y++){const K=i.get(O[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(T)}let D=0;function G(){D=0}function z(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function j(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Z(T,y){const O=i.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,T,y);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function X(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){J(O,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function et(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){J(O,T,y);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function $(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){ct(O,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const ft={[Wo]:n.REPEAT,[Ys]:n.CLAMP_TO_EDGE,[Bu]:n.MIRRORED_REPEAT},yt={[Wn]:n.NEAREST,[Vv]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[Ks]:n.LINEAR_MIPMAP_LINEAR},Tt={[Yv]:n.NEVER,[e_]:n.ALWAYS,[Kv]:n.LESS,[Hm]:n.LEQUAL,[Jv]:n.EQUAL,[t_]:n.GEQUAL,[Zv]:n.GREATER,[Qv]:n.NOTEQUAL};function jt(T,y){if(y.type===Ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ci||y.magFilter===_l||y.magFilter===Ea||y.magFilter===Ks||y.minFilter===Ci||y.minFilter===_l||y.minFilter===Ea||y.minFilter===Ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ft[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ft[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ft[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,yt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wn||y.minFilter!==Ea&&y.minFilter!==Ks||y.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const Y=y.source;let nt=d.get(Y);nt===void 0&&(nt={},d.set(Y,nt));const K=j(y);if(K!==T.__cacheKey){nt[K]===void 0&&(nt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[K].usedTimes++;const Ct=nt[T.__cacheKey];Ct!==void 0&&(nt[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(y)),T.__cacheKey=K,T.__webglTexture=nt[K].texture}return O}function J(T,y,O){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const nt=ve(T,y),K=y.source;e.bindTexture(Y,T.__webglTexture,n.TEXTURE0+O);const Ct=i.get(K);if(K.version!==Ct.__version||nt===!0){e.activeTexture(n.TEXTURE0+O);const mt=ae.getPrimaries(ae.workingColorSpace),Mt=y.colorSpace===ps?null:ae.getPrimaries(y.colorSpace),re=y.colorSpace===ps||mt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let rt=v(y.image,!1,s.maxTextureSize);rt=Bt(y,rt);const St=r.convert(y.format,y.colorSpace),zt=r.convert(y.type);let Wt=b(y.internalFormat,St,zt,y.colorSpace,y.isVideoTexture);jt(Y,y);let Et;const oe=y.mipmaps,ee=y.isVideoTexture!==!0,Ce=Ct.__version===void 0||nt===!0,k=K.dataReady,gt=L(y,rt);if(y.isDepthTexture)Wt=x(y.format===Qr,y.type),Ce&&(ee?e.texStorage2D(n.TEXTURE_2D,1,Wt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Wt,rt.width,rt.height,0,St,zt,null));else if(y.isDataTexture)if(oe.length>0){ee&&Ce&&e.texStorage2D(n.TEXTURE_2D,gt,Wt,oe[0].width,oe[0].height);for(let q=0,Q=oe.length;q<Q;q++)Et=oe[q],ee?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(n.TEXTURE_2D,q,Wt,Et.width,Et.height,0,St,zt,Et.data);y.generateMipmaps=!1}else ee?(Ce&&e.texStorage2D(n.TEXTURE_2D,gt,Wt,rt.width,rt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,St,zt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Wt,rt.width,rt.height,0,St,zt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ee&&Ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Wt,oe[0].width,oe[0].height,rt.depth);for(let q=0,Q=oe.length;q<Q;q++)if(Et=oe[q],y.format!==xi)if(St!==null)if(ee){if(k)if(y.layerUpdates.size>0){const xt=jf(Et.width,Et.height,y.format,y.type);for(const vt of y.layerUpdates){const Zt=Et.data.subarray(vt*xt/Et.data.BYTES_PER_ELEMENT,(vt+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,vt,Et.width,Et.height,1,St,Zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,rt.depth,St,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Wt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,rt.depth,St,zt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Wt,Et.width,Et.height,rt.depth,0,St,zt,Et.data)}else{ee&&Ce&&e.texStorage2D(n.TEXTURE_2D,gt,Wt,oe[0].width,oe[0].height);for(let q=0,Q=oe.length;q<Q;q++)Et=oe[q],y.format!==xi?St!==null?ee?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(n.TEXTURE_2D,q,Wt,Et.width,Et.height,0,St,zt,Et.data)}else if(y.isDataArrayTexture)if(ee){if(Ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Wt,rt.width,rt.height,rt.depth),k)if(y.layerUpdates.size>0){const q=jf(rt.width,rt.height,y.format,y.type);for(const Q of y.layerUpdates){const xt=rt.data.subarray(Q*q/rt.data.BYTES_PER_ELEMENT,(Q+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,St,zt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Wt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(y.isData3DTexture)ee?(Ce&&e.texStorage3D(n.TEXTURE_3D,gt,Wt,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Wt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(y.isFramebufferTexture){if(Ce)if(ee)e.texStorage2D(n.TEXTURE_2D,gt,Wt,rt.width,rt.height);else{let q=rt.width,Q=rt.height;for(let xt=0;xt<gt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Wt,q,Q,0,St,zt,null),q>>=1,Q>>=1}}else if(oe.length>0){if(ee&&Ce){const q=bt(oe[0]);e.texStorage2D(n.TEXTURE_2D,gt,Wt,q.width,q.height)}for(let q=0,Q=oe.length;q<Q;q++)Et=oe[q],ee?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,St,zt,Et):e.texImage2D(n.TEXTURE_2D,q,Wt,St,zt,Et);y.generateMipmaps=!1}else if(ee){if(Ce){const q=bt(rt);e.texStorage2D(n.TEXTURE_2D,gt,Wt,q.width,q.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,zt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Wt,St,zt,rt);m(y)&&g(Y),Ct.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ct(T,y,O){if(y.image.length!==6)return;const Y=ve(T,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const K=i.get(nt);if(nt.version!==K.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);const Ct=ae.getPrimaries(ae.workingColorSpace),mt=y.colorSpace===ps?null:ae.getPrimaries(y.colorSpace),Mt=y.colorSpace===ps||Ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const re=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!re&&!rt?St[Q]=v(y.image[Q],!0,s.maxCubemapSize):St[Q]=rt?y.image[Q].image:y.image[Q],St[Q]=Bt(y,St[Q]);const zt=St[0],Wt=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),oe=b(y.internalFormat,Wt,Et,y.colorSpace),ee=y.isVideoTexture!==!0,Ce=K.__version===void 0||Y===!0,k=nt.dataReady;let gt=L(y,zt);jt(n.TEXTURE_CUBE_MAP,y);let q;if(re){ee&&Ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,oe,zt.width,zt.height);for(let Q=0;Q<6;Q++){q=St[Q].mipmaps;for(let xt=0;xt<q.length;xt++){const vt=q[xt];y.format!==xi?Wt!==null?ee?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,vt.width,vt.height,Wt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,oe,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,vt.width,vt.height,Wt,Et,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,oe,vt.width,vt.height,0,Wt,Et,vt.data)}}}else{if(q=y.mipmaps,ee&&Ce){q.length>0&&gt++;const Q=bt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){ee?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Wt,Et,St[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,oe,St[Q].width,St[Q].height,0,Wt,Et,St[Q].data);for(let xt=0;xt<q.length;xt++){const Zt=q[xt].image[Q].image;ee?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Zt.width,Zt.height,Wt,Et,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,oe,Zt.width,Zt.height,0,Wt,Et,Zt.data)}}else{ee?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Wt,Et,St[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,oe,Wt,Et,St[Q]);for(let xt=0;xt<q.length;xt++){const vt=q[xt];ee?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Wt,Et,vt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,oe,Wt,Et,vt.image[Q])}}}m(y)&&g(n.TEXTURE_CUBE_MAP),K.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function At(T,y,O,Y,nt,K){const Ct=r.convert(O.format,O.colorSpace),mt=r.convert(O.type),Mt=b(O.internalFormat,Ct,mt,O.colorSpace),re=i.get(y),rt=i.get(O);if(rt.__renderTarget=y,!re.__hasExternalTextures){const St=Math.max(1,y.width>>K),zt=Math.max(1,y.height>>K);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,Mt,St,zt,y.depth,0,Ct,mt,null):e.texImage2D(nt,K,Mt,St,zt,0,Ct,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),wt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,nt,rt.__webglTexture,0,it(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,nt,rt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(T,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const Y=y.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,K=x(y.stencilBuffer,nt),Ct=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=it(y);wt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,K,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,T)}else{const Y=y.textures;for(let nt=0;nt<Y.length;nt++){const K=Y[nt],Ct=r.convert(K.format,K.colorSpace),mt=r.convert(K.type),Mt=b(K.internalFormat,Ct,mt,K.colorSpace),re=it(y);O&&wt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Mt,y.width,y.height):wt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Mt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const nt=Y.__webglTexture,K=it(y);if(y.depthTexture.format===$r)wt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Qr)wt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function qt(T){const y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=Y}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ot(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),ut(y.__webglDepthbuffer[Y],T,!1);else{const nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ut(y.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(T,y,O){const Y=i.get(T);y!==void 0&&At(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qt(T)}function ce(T){const y=T.texture,O=i.get(T),Y=i.get(y);T.addEventListener("dispose",R);const nt=T.textures,K=T.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)O.__webglFramebuffer[mt][Mt]=n.createFramebuffer()}else O.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)O.__webglFramebuffer[mt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let mt=0,Mt=nt.length;mt<Mt;mt++){const re=i.get(nt[mt]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&wt(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let mt=0;mt<nt.length;mt++){const Mt=nt[mt];O.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[mt]);const re=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),St=b(Mt.internalFormat,re,rt,Mt.colorSpace,T.isXRRenderTarget===!0),zt=it(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,O.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(n.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)At(O.__webglFramebuffer[mt][Mt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else At(O.__webglFramebuffer[mt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(y)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let mt=0,Mt=nt.length;mt<Mt;mt++){const re=nt[mt],rt=i.get(re);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),jt(n.TEXTURE_2D,re),At(O.__webglFramebuffer,T,re,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(re)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(mt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Y.__webglTexture),jt(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)At(O.__webglFramebuffer[Mt],T,y,n.COLOR_ATTACHMENT0,mt,Mt);else At(O.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,mt,0);m(y)&&g(mt),e.unbindTexture()}T.depthBuffer&&qt(T)}function tt(T){const y=T.textures;for(let O=0,Y=y.length;O<Y;O++){const nt=y[O];if(m(nt)){const K=M(T),Ct=i.get(nt).__webglTexture;e.bindTexture(K,Ct),g(K),e.unbindTexture()}}}const at=[],A=[];function Lt(T){if(T.samples>0){if(wt(T)===!1){const y=T.textures,O=T.width,Y=T.height;let nt=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(T),mt=y.length>1;if(mt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const re=i.get(y[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,nt,n.NEAREST),c===!0&&(at.length=0,A.length=0,at.push(n.COLOR_ATTACHMENT0+Mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(at.push(K),A.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const re=i.get(y[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function it(T){return Math.min(s.maxSamples,T.samples)}function wt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Bt(T,y){const O=T.colorSpace,Y=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==oo&&O!==ps&&(ae.getTransfer(O)===Me?(Y!==xi||nt!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=et,this.setTextureCube=$,this.rebindTextures=Ht,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=wt}function x1(n,t){function e(i,s=ps){let r;const o=ae.getTransfer(s);if(i===ts)return n.UNSIGNED_BYTE;if(i===Zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===km)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Im)return n.BYTE;if(i===Lm)return n.SHORT;if(i===$o)return n.UNSIGNED_SHORT;if(i===Jh)return n.INT;if(i===Qs)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===ur)return n.HALF_FLOAT;if(i===Nm)return n.ALPHA;if(i===Um)return n.RGB;if(i===xi)return n.RGBA;if(i===Om)return n.LUMINANCE;if(i===Fm)return n.LUMINANCE_ALPHA;if(i===$r)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===ed)return n.RED_INTEGER;if(i===Bm)return n.RG;if(i===nd)return n.RG_INTEGER;if(i===id)return n.RGBA_INTEGER;if(i===hc||i===dc||i===fc||i===pc)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zu||i===Vu||i===Hu||i===Gu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wu||i===$u||i===qu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wu||i===$u)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xu||i===ju||i===Yu||i===Ku||i===Ju||i===Zu||i===Qu||i===th||i===eh||i===nh||i===ih||i===sh||i===rh||i===oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ju)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ku)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===ah||i===ch)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zm||i===lh||i===uh||i===hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class y1 extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:M1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends hr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const v=new S1,m=e.getContextAttributes();let g=null,M=null;const b=[],x=[],L=new ot;let C=null;const R=new ti;R.viewport=new Fe;const I=new ti;I.viewport=new Fe;const E=[R,I],w=new y1;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=b[J];return ct===void 0&&(ct=new ql,b[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=b[J];return ct===void 0&&(ct=new ql,b[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=b[J];return ct===void 0&&(ct=new ql,b[J]=ct),ct.getHandSpace()};function z(J){const ct=x.indexOf(J.inputSource);if(ct===-1)return;const At=b[ct];At!==void 0&&(At.update(J.inputSource,J.frame,l||o),At.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<b.length;J++){const ct=x[J];ct!==null&&(x[J]=null,b[J].disconnect(ct))}D=null,G=null,v.reset(),t.setRenderTarget(g),f=null,d=null,h=null,s=null,M=null,ve.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new es(f.framebufferWidth,f.framebufferHeight,{format:xi,type:ts,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,At=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Qr:$r,At=m.stencil?Zr:Qs);const Ot={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new es(d.textureWidth,d.textureHeight,{format:xi,type:ts,depthTexture:new tg(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(J){for(let ct=0;ct<J.removed.length;ct++){const At=J.removed[ct],ut=x.indexOf(At);ut>=0&&(x[ut]=null,b[ut].disconnect(At))}for(let ct=0;ct<J.added.length;ct++){const At=J.added[ct];let ut=x.indexOf(At);if(ut===-1){for(let qt=0;qt<b.length;qt++)if(qt>=x.length){x.push(At),ut=qt;break}else if(x[qt]===null){x[qt]=At,ut=qt;break}if(ut===-1)break}const Ot=b[ut];Ot&&Ot.connect(At)}}const X=new P,et=new P;function $(J,ct,At){X.setFromMatrixPosition(ct.matrixWorld),et.setFromMatrixPosition(At.matrixWorld);const ut=X.distanceTo(et),Ot=ct.projectionMatrix.elements,qt=At.projectionMatrix.elements,Ht=Ot[14]/(Ot[10]-1),ce=Ot[14]/(Ot[10]+1),tt=(Ot[9]+1)/Ot[5],at=(Ot[9]-1)/Ot[5],A=(Ot[8]-1)/Ot[0],Lt=(qt[8]+1)/qt[0],it=Ht*A,wt=Ht*Lt,dt=ut/(-A+Lt),Bt=dt*-A;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Bt),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const bt=Ht+dt,T=ce+dt,y=it-Bt,O=wt+(ut-Bt),Y=tt*ce/T*bt,nt=at*ce/T*bt;J.projectionMatrix.makePerspective(y,O,Y,nt,bt,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ct=J.near,At=J.far;v.texture!==null&&(v.depthNear>0&&(ct=v.depthNear),v.depthFar>0&&(At=v.depthFar)),w.near=I.near=R.near=ct,w.far=I.far=R.far=At,(D!==w.near||G!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,G=w.far),R.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,w.layers.mask=R.layers.mask|I.layers.mask;const ut=J.parent,Ot=w.cameras;ft(w,ut);for(let qt=0;qt<Ot.length;qt++)ft(Ot[qt],ut);Ot.length===2?$(w,R,I):w.projectionMatrix.copy(R.projectionMatrix),yt(J,w,ut)};function yt(J,ct,At){At===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let Tt=null;function jt(J,ct){if(u=ct.getViewerPose(l||o),p=ct,u!==null){const At=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;At.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let qt=0;qt<At.length;qt++){const Ht=At[qt];let ce=null;if(f!==null)ce=f.getViewport(Ht);else{const at=h.getViewSubImage(d,Ht);ce=at.viewport,qt===0&&(t.setRenderTargetTextures(M,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(M))}let tt=E[qt];tt===void 0&&(tt=new ti,tt.layers.enable(qt),tt.viewport=new Fe,E[qt]=tt),tt.matrix.fromArray(Ht.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ht.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ce.x,ce.y,ce.width,ce.height),qt===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(tt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const qt=h.getDepthInformation(At[0]);qt&&qt.isValid&&qt.texture&&v.init(t,qt,s.renderState)}}for(let At=0;At<b.length;At++){const ut=x[At],Ot=b[At];ut!==null&&Ot!==void 0&&Ot.update(ut,ct,l||o)}Tt&&Tt(J,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),p=null}const ve=new Qm;ve.setAnimationLoop(jt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}}const Hs=new Ni,T1=new fe;function A1(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Km(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,b,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,M,b):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,Hs.copy(x),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Hs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C1(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const x=b.program;i.uniformBlockBinding(M,x)}function l(M,b){let x=s[M.id];x===void 0&&(p(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(M,L);const C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function u(M){const b=h();M.__bindingPointIndex=b;const x=n.createBuffer(),L=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],x=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,R=x.length;C<R;C++){const I=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,w=I.length;E<w;E++){const D=I[E];if(f(D,C,E,L)===!0){const G=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],et=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+j,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,j),j+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,x,L){const C=M.value,R=b+"_"+x;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const I=L[R];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return L[R]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function p(M){const b=M.uniforms;let x=0;const L=16;for(let R=0,I=b.length;R<I;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,D=E.length;w<D;w++){const G=E[w],z=Array.isArray(G.value)?G.value:[G.value];for(let j=0,Z=z.length;j<Z;j++){const X=z[j],et=v(X),$=x%L,ft=$%et.boundary,yt=$+ft;x+=ft,yt!==0&&L-yt<et.storage&&(x+=L-yt),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=et.storage}}}const C=x%L;return C>0&&(x+=L-C),M.__size=x,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class rg{constructor(t={}){const{canvas:e=__(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ys,this.toneMappingExposure=1;const x=this;let L=!1,C=0,R=0,I=null,E=-1,w=null;const D=new Fe,G=new Fe;let z=null;const j=new ie(0);let Z=0,X=e.width,et=e.height,$=1,ft=null,yt=null;const Tt=new Fe(0,0,X,et),jt=new Fe(0,0,X,et);let ve=!1;const J=new cd;let ct=!1,At=!1;const ut=new fe,Ot=new fe,qt=new P,Ht=new Fe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return I===null?$:1}let A=i;function Lt(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),A===null){const N="webgl2";if(A=Lt(N,S),A===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let it,wt,dt,Bt,bt,T,y,O,Y,nt,K,Ct,mt,Mt,re,rt,St,zt,Wt,Et,oe,ee,Ce,k;function gt(){it=new kb(A),it.init(),ee=new x1(A,it),wt=new Cb(A,it,t,ee),dt=new g1(A,it),wt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Bt=new Ob(A),bt=new e1,T=new _1(A,it,dt,bt,wt,ee,Bt),y=new Pb(x),O=new Lb(x),Y=new W_(A),Ce=new Tb(A,Y),nt=new Nb(A,Y,Bt,Ce),K=new Bb(A,nt,Y,Bt),Wt=new Fb(A,wt,T),rt=new Rb(bt),Ct=new t1(x,y,O,it,wt,Ce,rt),mt=new A1(x,bt),Mt=new i1,re=new l1(it),zt=new Eb(x,y,O,dt,K,f,c),St=new p1(x,K,wt),k=new C1(A,Bt,wt,dt),Et=new Ab(A,it,Bt),oe=new Ub(A,it,Bt),Bt.programs=Ct.programs,x.capabilities=wt,x.extensions=it,x.properties=bt,x.renderLists=Mt,x.shadowMap=St,x.state=dt,x.info=Bt}gt();const q=new E1(x,A);this.xr=q,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(X,et,!1))},this.getSize=function(S){return S.set(X,et)},this.setSize=function(S,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,et=N,e.width=Math.floor(S*$),e.height=Math.floor(N*$),V===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(X*$,et*$).floor()},this.setDrawingBufferSize=function(S,N,V){X=S,et=N,$=V,e.width=Math.floor(S*V),e.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Tt)},this.setViewport=function(S,N,V,H){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,N,V,H),dt.viewport(D.copy(Tt).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(jt)},this.setScissor=function(S,N,V,H){S.isVector4?jt.set(S.x,S.y,S.z,S.w):jt.set(S,N,V,H),dt.scissor(G.copy(jt).multiplyScalar($).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){dt.setScissorTest(ve=S)},this.setOpaqueSort=function(S){ft=S},this.setTransparentSort=function(S){yt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,N=!0,V=!0){let H=0;if(S){let U=!1;if(I!==null){const lt=I.texture.format;U=lt===id||lt===nd||lt===ed}if(U){const lt=I.texture.type,_t=lt===ts||lt===Qs||lt===$o||lt===Zr||lt===Zh||lt===Qh,Rt=zt.getClearColor(),Pt=zt.getClearAlpha(),Xt=Rt.r,Qt=Rt.g,Dt=Rt.b;_t?(p[0]=Xt,p[1]=Qt,p[2]=Dt,p[3]=Pt,A.clearBufferuiv(A.COLOR,0,p)):(v[0]=Xt,v[1]=Qt,v[2]=Dt,v[3]=Pt,A.clearBufferiv(A.COLOR,0,v))}else H|=A.COLOR_BUFFER_BIT}N&&(H|=A.DEPTH_BUFFER_BIT),V&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),re.dispose(),bt.dispose(),y.dispose(),O.dispose(),K.dispose(),Ce.dispose(),k.dispose(),Ct.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bd),q.removeEventListener("sessionend",zd),Us.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=Bt.autoReset,N=St.enabled,V=St.autoUpdate,H=St.needsUpdate,U=St.type;gt(),Bt.autoReset=S,St.enabled=N,St.autoUpdate=V,St.needsUpdate=H,St.type=U}function vt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Zt(S){const N=S.target;N.removeEventListener("dispose",Zt),Ue(N)}function Ue(S){dn(S),bt.remove(S)}function dn(S){const N=bt.get(S).programs;N!==void 0&&(N.forEach(function(V){Ct.releaseProgram(V)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,H,U,lt){N===null&&(N=ce);const _t=U.isMesh&&U.matrixWorld.determinant()<0,Rt=B0(S,N,V,H,U);dt.setMaterial(H,_t);let Pt=V.index,Xt=1;if(H.wireframe===!0){if(Pt=nt.getWireframeAttribute(V),Pt===void 0)return;Xt=2}const Qt=V.drawRange,Dt=V.attributes.position;let he=Qt.start*Xt,Re=(Qt.start+Qt.count)*Xt;lt!==null&&(he=Math.max(he,lt.start*Xt),Re=Math.min(Re,(lt.start+lt.count)*Xt)),Pt!==null?(he=Math.max(he,0),Re=Math.min(Re,Pt.count)):Dt!=null&&(he=Math.max(he,0),Re=Math.min(Re,Dt.count));const Pe=Re-he;if(Pe<0||Pe===1/0)return;Ce.setup(U,H,Rt,V,Pt);let Cn,_e=Et;if(Pt!==null&&(Cn=Y.get(Pt),_e=oe,_e.setIndex(Cn)),U.isMesh)H.wireframe===!0?(dt.setLineWidth(H.wireframeLinewidth*at()),_e.setMode(A.LINES)):_e.setMode(A.TRIANGLES);else if(U.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),dt.setLineWidth(kt*at()),U.isLineSegments?_e.setMode(A.LINES):U.isLineLoop?_e.setMode(A.LINE_LOOP):_e.setMode(A.LINE_STRIP)}else U.isPoints?_e.setMode(A.POINTS):U.isSprite&&_e.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)_e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const kt=U._multiDrawStarts,Gi=U._multiDrawCounts,xe=U._multiDrawCount,ai=Pt?Y.get(Pt).bytesPerElement:1,gr=bt.get(H).currentProgram.getUniforms();for(let Nn=0;Nn<xe;Nn++)gr.setValue(A,"_gl_DrawID",Nn),_e.render(kt[Nn]/ai,Gi[Nn])}else if(U.isInstancedMesh)_e.renderInstances(he,Pe,U.count);else if(V.isInstancedBufferGeometry){const kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Gi=Math.min(V.instanceCount,kt);_e.renderInstances(he,Pe,Gi)}else _e.render(he,Pe)};function be(S,N,V){S.transparent===!0&&S.side===pi&&S.forceSinglePass===!1?(S.side=Pn,S.needsUpdate=!0,Sa(S,N,V),S.side=Es,S.needsUpdate=!0,Sa(S,N,V),S.side=pi):Sa(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),g=re.get(V),g.init(N),b.push(g),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),S!==V&&S.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const H=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const lt=U.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const Rt=lt[_t];be(Rt,V,U),H.add(Rt)}else be(lt,V,U),H.add(lt)}),b.pop(),g=null,H},this.compileAsync=function(S,N,V=null){const H=this.compile(S,N,V);return new Promise(U=>{function lt(){if(H.forEach(function(_t){bt.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){U(S);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let oi=null;function Hi(S){oi&&oi(S)}function Bd(){Us.stop()}function zd(){Us.start()}const Us=new Qm;Us.setAnimationLoop(Hi),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(S){oi=S,q.setAnimationLoop(S),S===null?Us.stop():Us.start()},q.addEventListener("sessionstart",Bd),q.addEventListener("sessionend",zd),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),g=re.get(S,b.length),g.init(N),b.push(g),Ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(Ot),At=this.localClippingEnabled,ct=rt.init(this.clippingPlanes,At),m=Mt.get(S,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&gl(lt,N,-1/0,x.sortObjects)}gl(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ft,yt),tt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,tt&&zt.addToRenderList(m,S),this.info.render.frame++,ct===!0&&rt.beginShadows();const V=g.state.shadowsArray;St.render(V,S,N),ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(g.setupLights(),N.isArrayCamera){const lt=N.cameras;if(U.length>0)for(let _t=0,Rt=lt.length;_t<Rt;_t++){const Pt=lt[_t];Hd(H,U,S,Pt)}tt&&zt.render(S);for(let _t=0,Rt=lt.length;_t<Rt;_t++){const Pt=lt[_t];Vd(m,S,Pt,Pt.viewport)}}else U.length>0&&Hd(H,U,S,N),tt&&zt.render(S),Vd(m,S,N);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,N),Ce.resetDefaultState(),E=-1,w=null,b.pop(),b.length>0?(g=b[b.length-1],ct===!0&&rt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function gl(S,N,V,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){H&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ot);const _t=K.update(S),Rt=S.material;Rt.visible&&m.push(S,_t,Rt,V,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){const _t=K.update(S),Rt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ht.copy(_t.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(Ot)),Array.isArray(Rt)){const Pt=_t.groups;for(let Xt=0,Qt=Pt.length;Xt<Qt;Xt++){const Dt=Pt[Xt],he=Rt[Dt.materialIndex];he&&he.visible&&m.push(S,_t,he,V,Ht.z,Dt)}}else Rt.visible&&m.push(S,_t,Rt,V,Ht.z,null)}}const lt=S.children;for(let _t=0,Rt=lt.length;_t<Rt;_t++)gl(lt[_t],N,V,H)}function Vd(S,N,V,H){const U=S.opaque,lt=S.transmissive,_t=S.transparent;g.setupLightsView(V),ct===!0&&rt.setGlobalState(x.clippingPlanes,V),H&&dt.viewport(D.copy(H)),U.length>0&&wa(U,N,V),lt.length>0&&wa(lt,N,V),_t.length>0&&wa(_t,N,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Hd(S,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new es(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ur:ts,minFilter:Ks,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const lt=g.state.transmissionRenderTarget[H.id],_t=H.viewport||D;lt.setSize(_t.z,_t.w);const Rt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(j),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),tt&&zt.render(V);const Pt=x.toneMapping;x.toneMapping=ys;const Xt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),ct===!0&&rt.setGlobalState(x.clippingPlanes,H),wa(S,V,H),T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Dt=0,he=N.length;Dt<he;Dt++){const Re=N[Dt],Pe=Re.object,Cn=Re.geometry,_e=Re.material,kt=Re.group;if(_e.side===pi&&Pe.layers.test(H.layers)){const Gi=_e.side;_e.side=Pn,_e.needsUpdate=!0,Gd(Pe,V,H,Cn,_e,kt),_e.side=Gi,_e.needsUpdate=!0,Qt=!0}}Qt===!0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt))}x.setRenderTarget(Rt),x.setClearColor(j,Z),Xt!==void 0&&(H.viewport=Xt),x.toneMapping=Pt}function wa(S,N,V){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,lt=S.length;U<lt;U++){const _t=S[U],Rt=_t.object,Pt=_t.geometry,Xt=H===null?_t.material:H,Qt=_t.group;Rt.layers.test(V.layers)&&Gd(Rt,N,V,Pt,Xt,Qt)}}function Gd(S,N,V,H,U,lt){S.onBeforeRender(x,N,V,H,U,lt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,N,V,H,S,lt),U.transparent===!0&&U.side===pi&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,x.renderBufferDirect(V,N,H,U,S,lt),U.side=Es,U.needsUpdate=!0,x.renderBufferDirect(V,N,H,U,S,lt),U.side=pi):x.renderBufferDirect(V,N,H,U,S,lt),S.onAfterRender(x,N,V,H,U,lt)}function Sa(S,N,V){N.isScene!==!0&&(N=ce);const H=bt.get(S),U=g.state.lights,lt=g.state.shadowsArray,_t=U.state.version,Rt=Ct.getParameters(S,U.state,lt,N,V),Pt=Ct.getProgramCacheKey(Rt);let Xt=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Xt===void 0&&(S.addEventListener("dispose",Zt),Xt=new Map,H.programs=Xt);let Qt=Xt.get(Pt);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===_t)return $d(S,Rt),Qt}else Rt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Rt,x),Qt=Ct.acquireProgram(Rt,Pt),Xt.set(Pt,Qt),H.uniforms=Rt.uniforms;const Dt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),$d(S,Rt),H.needsLights=V0(S),H.lightsStateVersion=_t,H.needsLights&&(Dt.ambientLightColor.value=U.state.ambient,Dt.lightProbe.value=U.state.probe,Dt.directionalLights.value=U.state.directional,Dt.directionalLightShadows.value=U.state.directionalShadow,Dt.spotLights.value=U.state.spot,Dt.spotLightShadows.value=U.state.spotShadow,Dt.rectAreaLights.value=U.state.rectArea,Dt.ltc_1.value=U.state.rectAreaLTC1,Dt.ltc_2.value=U.state.rectAreaLTC2,Dt.pointLights.value=U.state.point,Dt.pointLightShadows.value=U.state.pointShadow,Dt.hemisphereLights.value=U.state.hemi,Dt.directionalShadowMap.value=U.state.directionalShadowMap,Dt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Dt.spotShadowMap.value=U.state.spotShadowMap,Dt.spotLightMatrix.value=U.state.spotLightMatrix,Dt.spotLightMap.value=U.state.spotLightMap,Dt.pointShadowMap.value=U.state.pointShadowMap,Dt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Qt,H.uniformsList=null,Qt}function Wd(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=gc.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function $d(S,N){const V=bt.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function B0(S,N,V,H,U){N.isScene!==!0&&(N=ce),T.resetTextureUnits();const lt=N.fog,_t=H.isMeshStandardMaterial?N.environment:null,Rt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oo,Pt=(H.isMeshStandardMaterial?O:y).get(H.envMap||_t),Xt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Re=!!V.morphAttributes.color;let Pe=ys;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pe=x.toneMapping);const Cn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=Cn!==void 0?Cn.length:0,kt=bt.get(H),Gi=g.state.lights;if(ct===!0&&(At===!0||S!==w)){const Jn=S===w&&H.id===E;rt.setState(H,S,Jn)}let xe=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Gi.state.version||kt.outputColorSpace!==Rt||U.isBatchedMesh&&kt.batching===!1||!U.isBatchedMesh&&kt.batching===!0||U.isBatchedMesh&&kt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&kt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&kt.instancing===!1||!U.isInstancedMesh&&kt.instancing===!0||U.isSkinnedMesh&&kt.skinning===!1||!U.isSkinnedMesh&&kt.skinning===!0||U.isInstancedMesh&&kt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&kt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&kt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&kt.instancingMorph===!1&&U.morphTexture!==null||kt.envMap!==Pt||H.fog===!0&&kt.fog!==lt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==rt.numPlanes||kt.numIntersection!==rt.numIntersection)||kt.vertexAlphas!==Xt||kt.vertexTangents!==Qt||kt.morphTargets!==Dt||kt.morphNormals!==he||kt.morphColors!==Re||kt.toneMapping!==Pe||kt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,kt.__version=H.version);let ai=kt.currentProgram;xe===!0&&(ai=Sa(H,N,U));let gr=!1,Nn=!1,_o=!1;const De=ai.getUniforms(),Ei=kt.uniforms;if(dt.useProgram(ai.program)&&(gr=!0,Nn=!0,_o=!0),H.id!==E&&(E=H.id,Nn=!0),gr||w!==S){dt.buffers.depth.getReversed()?(ut.copy(S.projectionMatrix),y_(ut),b_(ut),De.setValue(A,"projectionMatrix",ut)):De.setValue(A,"projectionMatrix",S.projectionMatrix),De.setValue(A,"viewMatrix",S.matrixWorldInverse);const rs=De.map.cameraPosition;rs!==void 0&&rs.setValue(A,qt.setFromMatrixPosition(S.matrixWorld)),wt.logarithmicDepthBuffer&&De.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&De.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,Nn=!0,_o=!0)}if(U.isSkinnedMesh){De.setOptional(A,U,"bindMatrix"),De.setOptional(A,U,"bindMatrixInverse");const Jn=U.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),De.setValue(A,"boneTexture",Jn.boneTexture,T))}U.isBatchedMesh&&(De.setOptional(A,U,"batchingTexture"),De.setValue(A,"batchingTexture",U._matricesTexture,T),De.setOptional(A,U,"batchingIdTexture"),De.setValue(A,"batchingIdTexture",U._indirectTexture,T),De.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&De.setValue(A,"batchingColorTexture",U._colorsTexture,T));const xo=V.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&Wt.update(U,V,ai),(Nn||kt.receiveShadow!==U.receiveShadow)&&(kt.receiveShadow=U.receiveShadow,De.setValue(A,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ei.envMap.value=Pt,Ei.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ei.envMapIntensity.value=N.environmentIntensity),Nn&&(De.setValue(A,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&z0(Ei,_o),lt&&H.fog===!0&&mt.refreshFogUniforms(Ei,lt),mt.refreshMaterialUniforms(Ei,H,$,et,g.state.transmissionRenderTarget[S.id]),gc.upload(A,Wd(kt),Ei,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gc.upload(A,Wd(kt),Ei,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&De.setValue(A,"center",U.center),De.setValue(A,"modelViewMatrix",U.modelViewMatrix),De.setValue(A,"normalMatrix",U.normalMatrix),De.setValue(A,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jn=H.uniformsGroups;for(let rs=0,os=Jn.length;rs<os;rs++){const qd=Jn[rs];k.update(qd,ai),k.bind(qd,ai)}}return ai}function z0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function V0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,V){bt.get(S.texture).__webglTexture=N,bt.get(S.depthTexture).__webglTexture=V;const H=bt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const V=bt.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){I=S,C=N,R=V;let H=!0,U=null,lt=!1,_t=!1;if(S){const Pt=bt.get(S);if(Pt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(Pt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Pt.__hasExternalTextures)T.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Dt=S.depthTexture;if(Pt.__boundDepthTexture!==Dt){if(Dt!==null&&bt.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Xt=S.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(_t=!0);const Qt=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[N])?U=Qt[N][V]:U=Qt[N],lt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?U=Qt[V]:U=Qt,D.copy(S.viewport),G.copy(S.scissor),z=S.scissorTest}else D.copy(Tt).multiplyScalar($).floor(),G.copy(jt).multiplyScalar($).floor(),z=ve;if(dt.bindFramebuffer(A.FRAMEBUFFER,U)&&H&&dt.drawBuffers(S,U),dt.viewport(D),dt.scissor(G),dt.setScissorTest(z),lt){const Pt=bt.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,V)}else if(_t){const Pt=bt.get(S.texture),Xt=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,Xt)}E=-1},this.readRenderTargetPixels=function(S,N,V,H,U,lt,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){dt.bindFramebuffer(A.FRAMEBUFFER,Rt);try{const Pt=S.texture,Xt=Pt.format,Qt=Pt.type;if(!wt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&V>=0&&V<=S.height-U&&A.readPixels(N,V,H,U,ee.convert(Xt),ee.convert(Qt),lt)}finally{const Pt=I!==null?bt.get(I).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,H,U,lt,_t){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){const Pt=S.texture,Xt=Pt.format,Qt=Pt.type;if(!wt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-H&&V>=0&&V<=S.height-U){dt.bindFramebuffer(A.FRAMEBUFFER,Rt);const Dt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.bufferData(A.PIXEL_PACK_BUFFER,lt.byteLength,A.STREAM_READ),A.readPixels(N,V,H,U,ee.convert(Xt),ee.convert(Qt),0);const he=I!==null?bt.get(I).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,he);const Re=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await x_(A,Re,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,lt),A.deleteBuffer(Dt),A.deleteSync(Re),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,V=0){S.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-V),U=Math.floor(S.image.width*H),lt=Math.floor(S.image.height*H),_t=N!==null?N.x:0,Rt=N!==null?N.y:0;T.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,_t,Rt,U,lt),dt.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,H=null,U=0){S.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let lt,_t,Rt,Pt,Xt,Qt,Dt,he,Re;const Pe=S.isCompressedTexture?S.mipmaps[U]:S.image;V!==null?(lt=V.max.x-V.min.x,_t=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Xt=V.min.y,Qt=V.isBox3?V.min.z:0):(lt=Pe.width,_t=Pe.height,Rt=Pe.depth||1,Pt=0,Xt=0,Qt=0),H!==null?(Dt=H.x,he=H.y,Re=H.z):(Dt=0,he=0,Re=0);const Cn=ee.convert(N.format),_e=ee.convert(N.type);let kt;N.isData3DTexture?(T.setTexture3D(N,0),kt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),kt=A.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),kt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Gi=A.getParameter(A.UNPACK_ROW_LENGTH),xe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ai=A.getParameter(A.UNPACK_SKIP_PIXELS),gr=A.getParameter(A.UNPACK_SKIP_ROWS),Nn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Pe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Qt);const _o=S.isDataArrayTexture||S.isData3DTexture,De=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Ei=bt.get(S),xo=bt.get(N),Jn=bt.get(Ei.__renderTarget),rs=bt.get(xo.__renderTarget);dt.bindFramebuffer(A.READ_FRAMEBUFFER,Jn.__webglFramebuffer),dt.bindFramebuffer(A.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let os=0;os<Rt;os++)_o&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.get(S).__webglTexture,U,Qt+os),S.isDepthTexture?(De&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.get(N).__webglTexture,U,Re+os),A.blitFramebuffer(Pt,Xt,lt,_t,Dt,he,lt,_t,A.DEPTH_BUFFER_BIT,A.NEAREST)):De?A.copyTexSubImage3D(kt,U,Dt,he,Re+os,Pt,Xt,lt,_t):A.copyTexSubImage2D(kt,U,Dt,he,Re+os,Pt,Xt,lt,_t);dt.bindFramebuffer(A.READ_FRAMEBUFFER,null),dt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else De?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(kt,U,Dt,he,Re,lt,_t,Rt,Cn,_e,Pe.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(kt,U,Dt,he,Re,lt,_t,Rt,Cn,Pe.data):A.texSubImage3D(kt,U,Dt,he,Re,lt,_t,Rt,Cn,_e,Pe):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,U,Dt,he,lt,_t,Cn,_e,Pe.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,U,Dt,he,Pe.width,Pe.height,Cn,Pe.data):A.texSubImage2D(A.TEXTURE_2D,U,Dt,he,lt,_t,Cn,_e,Pe);A.pixelStorei(A.UNPACK_ROW_LENGTH,Gi),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,xe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ai),A.pixelStorei(A.UNPACK_SKIP_ROWS,gr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Nn),U===0&&N.generateMipmaps&&A.generateMipmap(kt),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,V=null,H=null,U=0){return S.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,S=arguments[2],N=arguments[3],U=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,V,H,U)},this.initRenderTarget=function(S){bt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){C=0,R=0,I=null,dt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class ud{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=i}clone(){return new ud(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class og extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class R1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new P;class Rc{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uo extends co{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Dr;const So=new P,Ir=new P,Lr=new P,kr=new ot,Eo=new ot,ag=new fe,qa=new P,To=new P,Xa=new P,Yf=new ot,Xl=new ot,Kf=new ot;class eo extends Ye{constructor(t=new uo){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new hn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R1(e,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new Rc(i,3,0,!1)),Dr.setAttribute("uv",new Rc(i,2,3,!1))}this.geometry=Dr,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),ag.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ja(qa.set(-.5,-.5,0),Lr,o,Ir,s,r),ja(To.set(.5,-.5,0),Lr,o,Ir,s,r),ja(Xa.set(.5,.5,0),Lr,o,Ir,s,r),Yf.set(0,0),Xl.set(1,0),Kf.set(1,1);let a=t.ray.intersectTriangle(qa,To,Xa,!1,So);if(a===null&&(ja(To.set(-.5,.5,0),Lr,o,Ir,s,r),Xl.set(0,1),a=t.ray.intersectTriangle(qa,Xa,To,!1,So),a===null))return;const c=t.ray.origin.distanceTo(So);c<t.near||c>t.far||e.push({distance:c,point:So.clone(),uv:ei.getInterpolation(So,qa,To,Xa,Yf,Xl,Kf,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ja(n,t,e,i,s,r){kr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Eo.x=r*kr.x-s*kr.y,Eo.y=s*kr.x+r*kr.y):Eo.copy(kr),n.copy(t),n.x+=Eo.x,n.y+=Eo.y,n.applyMatrix4(ag)}class P1 extends cn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Wn,u=Wn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jf extends $n{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Nr=new fe,Zf=new fe,Ya=[],Qf=new Kn,D1=new fe,Ao=new Nt,Co=new ao;class mh extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,D1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Nr),Qf.copy(t.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Qf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ao),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Nr),Co.copy(t.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Co)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),t.ray.intersectsSphere(Co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Nr),Zf.multiplyMatrices(i,Nr),Ao.matrixWorld=Zf,Ao.raycast(t,Ya);for(let o=0,a=Ya.length;o<a;o++){const c=Ya[o];c.instanceId=r,c.object=this,e.push(c)}Ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new P1(new Float32Array(s*this.count),s,this.count,td,Ri));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ls extends cn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],r=[],o=[],a=new P,c=new fe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(an(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(an(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hd extends Bi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class I1 extends hd{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dd(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ka=new P,jl=new dd,Yl=new dd,Kl=new dd;class L1 extends Bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ka.subVectors(s[0],s[1]).add(s[0]),l=Ka);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),jl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,v,m),Yl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,v,m),Kl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Yl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Kl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(jl.calc(c),Yl.calc(c),Kl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tp(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function k1(n,t){const e=1-n;return e*e*t}function N1(n,t){return 2*(1-n)*n*t}function U1(n,t){return n*n*t}function Oo(n,t,e,i){return k1(n,t)+N1(n,e)+U1(n,i)}function O1(n,t){const e=1-n;return e*e*e*t}function F1(n,t){const e=1-n;return 3*e*e*n*t}function B1(n,t){return 3*(1-n)*n*n*t}function z1(n,t){return n*n*n*t}function Fo(n,t,e,i,s){return O1(n,t)+F1(n,e)+B1(n,i)+z1(n,s)}class cg extends Bi{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fo(t,s.x,r.x,o.x,a.x),Fo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V1 extends Bi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fo(t,s.x,r.x,o.x,a.x),Fo(t,s.y,r.y,o.y,a.y),Fo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lg extends Bi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H1 extends Bi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ug extends Bi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Oo(t,s.x,r.x,o.x),Oo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G1 extends Bi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Oo(t,s.x,r.x,o.x),Oo(t,s.y,r.y,o.y),Oo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hg extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(tp(a,c.x,l.x,u.x,h.x),tp(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var gh=Object.freeze({__proto__:null,ArcCurve:I1,CatmullRomCurve3:L1,CubicBezierCurve:cg,CubicBezierCurve3:V1,EllipseCurve:hd,LineCurve:lg,LineCurve3:H1,QuadraticBezierCurve:ug,QuadraticBezierCurve3:G1,SplineCurve:hg});class W1 extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new gh[s.type]().fromJSON(s))}return this}}class vh extends W1{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new lg(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ug(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new cg(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new hg(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new hd(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ks extends hn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const v=[],m=i/2;let g=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function M(){const x=new P,L=new P;let C=0;const R=(e-t)/i;for(let I=0;I<=r;I++){const E=[],w=I/r,D=w*(e-t)+t;for(let G=0;G<=s;G++){const z=G/s,j=z*c+a,Z=Math.sin(j),X=Math.cos(j);L.x=D*Z,L.y=-w*i+m,L.z=D*X,h.push(L.x,L.y,L.z),x.set(Z,R,X).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-w),E.push(p++)}v.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const w=v[E][I],D=v[E+1][I],G=v[E+1][I+1],z=v[E][I+1];(t>0||E!==0)&&(u.push(w,D,z),C+=3),(e>0||E!==r-1)&&(u.push(D,G,z),C+=3)}l.addGroup(g,C,0),g+=C}function b(x){const L=p,C=new ot,R=new P;let I=0;const E=x===!0?t:e,w=x===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),p++;const D=p;for(let G=0;G<=s;G++){const j=G/s*c+a,Z=Math.cos(j),X=Math.sin(j);R.x=E*X,R.y=m*w,R.z=E*Z,h.push(R.x,R.y,R.z),d.push(0,w,0),C.x=Z*.5+.5,C.y=X*.5*w+.5,f.push(C.x,C.y),p++}for(let G=0;G<s;G++){const z=L+G,j=D+G;x===!0?u.push(j,j+1,z):u.push(j+1,j,z),I+=3}l.addGroup(g,I,x===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qc extends ks{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Qc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fd extends hn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new P,x=new P,L=new P;for(let C=0;C<e.length;C+=3)f(e[C+0],b),f(e[C+1],x),f(e[C+2],L),c(b,x,L,M)}function c(M,b,x,L){const C=L+1,R=[];for(let I=0;I<=C;I++){R[I]=[];const E=M.clone().lerp(x,I/C),w=b.clone().lerp(x,I/C),D=C-I;for(let G=0;G<=D;G++)G===0&&I===C?R[I][G]=E:R[I][G]=E.clone().lerp(w,G/D)}for(let I=0;I<C;I++)for(let E=0;E<2*(C-I)-1;E++){const w=Math.floor(E/2);E%2===0?(d(R[I][w+1]),d(R[I+1][w]),d(R[I][w])):(d(R[I][w+1]),d(R[I+1][w+1]),d(R[I+1][w]))}}function l(M){const b=new P;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(M),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const M=new P;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const x=m(M)/2/Math.PI+.5,L=g(M)/Math.PI+.5;o.push(x,1-L)}p(),h()}function h(){for(let M=0;M<o.length;M+=6){const b=o[M+0],x=o[M+2],L=o[M+4],C=Math.max(b,x,L),R=Math.min(b,x,L);C>.9&&R<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,b){const x=M*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function p(){const M=new P,b=new P,x=new P,L=new P,C=new ot,R=new ot,I=new ot;for(let E=0,w=0;E<r.length;E+=9,w+=6){M.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),C.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),L.copy(M).add(b).add(x).divideScalar(3);const D=m(L);v(C,w+0,M,D),v(R,w+2,b,D),v(I,w+4,x,D)}}function v(M,b,x,L){L<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fd(t.vertices,t.indices,t.radius,t.details)}}class tl extends vh{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new vh().fromJSON(s))}return this}}const $1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=dg(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(i&&(r=K1(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let p=e;p<s;p+=e)h=n[p],d=n[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return jo(r,o,e,a,c,f,0),o}};function dg(n,t,e,i,s){let r,o;if(s===aw(n,t,e,i)>0)for(r=t;r<e;r+=i)o=ep(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=ep(r,n[r],n[r+1],o);return o&&el(o,o.next)&&(Ko(o),o=o.next),o}function er(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(el(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Ko(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function jo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ew(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?X1(n,i,s,r):q1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Ko(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=j1(er(n),t,e),jo(n,t,e,i,s,r,2)):o===2&&Y1(n,t,e,i,s,r):jo(er(n),t,e,i,s,r,1);break}}}function q1(n){const t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Gr(s,a,r,c,o,l,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function X1(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ne(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,g=_h(f,p,t,e,i),M=_h(v,m,t,e,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=g&&x&&x.z<=M;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Gr(a,u,c,h,l,d,b.x,b.y)&&Ne(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Gr(a,u,c,h,l,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Gr(a,u,c,h,l,d,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Gr(a,u,c,h,l,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function j1(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!el(s,r)&&fg(s,i,i.next,r)&&Yo(s,r)&&Yo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ko(i),Ko(i.next),i=n=r),i=i.next}while(i!==n);return er(i)}function Y1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sw(o,a)){let c=pg(o,a);o=er(o,o.next),c=er(c,c.next),jo(o,t,e,i,s,r,0),jo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function K1(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=dg(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(iw(l));for(s.sort(J1),r=0;r<s.length;r++)e=Z1(s[r],e);return e}function J1(n,t){return n.x-t.x}function Z1(n,t){const e=Q1(n,t);if(!e)return t;const i=pg(e,n);return er(i,i.next),er(e,e.next)}function Q1(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Gr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Yo(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&tw(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function tw(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function ew(n,t,e,i){let s=n;do s.z===0&&(s.z=_h(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nw(s)}function nw(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function _h(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function iw(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function sw(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!rw(n,t)&&(Yo(n,t)&&Yo(t,n)&&ow(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||el(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function el(n,t){return n.x===t.x&&n.y===t.y}function fg(n,t,e,i){const s=Za(Ne(n,t,e)),r=Za(Ne(n,t,i)),o=Za(Ne(e,i,n)),a=Za(Ne(e,i,t));return!!(s!==r&&o!==a||s===0&&Ja(n,e,t)||r===0&&Ja(n,i,t)||o===0&&Ja(e,n,i)||a===0&&Ja(e,t,i))}function Ja(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Za(n){return n>0?1:n<0?-1:0}function rw(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fg(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Yo(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function ow(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pg(n,t){const e=new xh(n.i,n.x,n.y),i=new xh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ep(n,t,e,i){const s=new xh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function xh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aw(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class bs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return bs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];np(t),ip(i,t);let o=t.length;e.forEach(np);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ip(i,e[c]);const a=$1.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function np(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ip(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class nl extends hn{constructor(t=new tl([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:cw;let b,x=!1,L,C,R,I;g&&(b=g.getSpacedPoints(u),x=!0,d=!1,L=g.computeFrenetFrames(u,!1),C=new P,R=new P,I=new P),d||(m=0,f=0,p=0,v=0);const E=a.extractPoints(l);let w=E.shape;const D=E.holes;if(!bs.isClockWise(w)){w=w.reverse();for(let tt=0,at=D.length;tt<at;tt++){const A=D[tt];bs.isClockWise(A)&&(D[tt]=A.reverse())}}const z=bs.triangulateShape(w,D),j=w;for(let tt=0,at=D.length;tt<at;tt++){const A=D[tt];w=w.concat(A)}function Z(tt,at,A){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(at,A)}const X=w.length,et=z.length;function $(tt,at,A){let Lt,it,wt;const dt=tt.x-at.x,Bt=tt.y-at.y,bt=A.x-tt.x,T=A.y-tt.y,y=dt*dt+Bt*Bt,O=dt*T-Bt*bt;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(y),nt=Math.sqrt(bt*bt+T*T),K=at.x-Bt/Y,Ct=at.y+dt/Y,mt=A.x-T/nt,Mt=A.y+bt/nt,re=((mt-K)*T-(Mt-Ct)*bt)/(dt*T-Bt*bt);Lt=K+dt*re-tt.x,it=Ct+Bt*re-tt.y;const rt=Lt*Lt+it*it;if(rt<=2)return new ot(Lt,it);wt=Math.sqrt(rt/2)}else{let Y=!1;dt>Number.EPSILON?bt>Number.EPSILON&&(Y=!0):dt<-Number.EPSILON?bt<-Number.EPSILON&&(Y=!0):Math.sign(Bt)===Math.sign(T)&&(Y=!0),Y?(Lt=-Bt,it=dt,wt=Math.sqrt(y)):(Lt=dt,it=Bt,wt=Math.sqrt(y/2))}return new ot(Lt/wt,it/wt)}const ft=[];for(let tt=0,at=j.length,A=at-1,Lt=tt+1;tt<at;tt++,A++,Lt++)A===at&&(A=0),Lt===at&&(Lt=0),ft[tt]=$(j[tt],j[A],j[Lt]);const yt=[];let Tt,jt=ft.concat();for(let tt=0,at=D.length;tt<at;tt++){const A=D[tt];Tt=[];for(let Lt=0,it=A.length,wt=it-1,dt=Lt+1;Lt<it;Lt++,wt++,dt++)wt===it&&(wt=0),dt===it&&(dt=0),Tt[Lt]=$(A[Lt],A[wt],A[dt]);yt.push(Tt),jt=jt.concat(Tt)}for(let tt=0;tt<m;tt++){const at=tt/m,A=f*Math.cos(at*Math.PI/2),Lt=p*Math.sin(at*Math.PI/2)+v;for(let it=0,wt=j.length;it<wt;it++){const dt=Z(j[it],ft[it],Lt);ut(dt.x,dt.y,-A)}for(let it=0,wt=D.length;it<wt;it++){const dt=D[it];Tt=yt[it];for(let Bt=0,bt=dt.length;Bt<bt;Bt++){const T=Z(dt[Bt],Tt[Bt],Lt);ut(T.x,T.y,-A)}}}const ve=p+v;for(let tt=0;tt<X;tt++){const at=d?Z(w[tt],jt[tt],ve):w[tt];x?(R.copy(L.normals[0]).multiplyScalar(at.x),C.copy(L.binormals[0]).multiplyScalar(at.y),I.copy(b[0]).add(R).add(C),ut(I.x,I.y,I.z)):ut(at.x,at.y,0)}for(let tt=1;tt<=u;tt++)for(let at=0;at<X;at++){const A=d?Z(w[at],jt[at],ve):w[at];x?(R.copy(L.normals[tt]).multiplyScalar(A.x),C.copy(L.binormals[tt]).multiplyScalar(A.y),I.copy(b[tt]).add(R).add(C),ut(I.x,I.y,I.z)):ut(A.x,A.y,h/u*tt)}for(let tt=m-1;tt>=0;tt--){const at=tt/m,A=f*Math.cos(at*Math.PI/2),Lt=p*Math.sin(at*Math.PI/2)+v;for(let it=0,wt=j.length;it<wt;it++){const dt=Z(j[it],ft[it],Lt);ut(dt.x,dt.y,h+A)}for(let it=0,wt=D.length;it<wt;it++){const dt=D[it];Tt=yt[it];for(let Bt=0,bt=dt.length;Bt<bt;Bt++){const T=Z(dt[Bt],Tt[Bt],Lt);x?ut(T.x,T.y+b[u-1].y,b[u-1].x+A):ut(T.x,T.y,h+A)}}}J(),ct();function J(){const tt=s.length/3;if(d){let at=0,A=X*at;for(let Lt=0;Lt<et;Lt++){const it=z[Lt];Ot(it[2]+A,it[1]+A,it[0]+A)}at=u+m*2,A=X*at;for(let Lt=0;Lt<et;Lt++){const it=z[Lt];Ot(it[0]+A,it[1]+A,it[2]+A)}}else{for(let at=0;at<et;at++){const A=z[at];Ot(A[2],A[1],A[0])}for(let at=0;at<et;at++){const A=z[at];Ot(A[0]+X*u,A[1]+X*u,A[2]+X*u)}}i.addGroup(tt,s.length/3-tt,0)}function ct(){const tt=s.length/3;let at=0;At(j,at),at+=j.length;for(let A=0,Lt=D.length;A<Lt;A++){const it=D[A];At(it,at),at+=it.length}i.addGroup(tt,s.length/3-tt,1)}function At(tt,at){let A=tt.length;for(;--A>=0;){const Lt=A;let it=A-1;it<0&&(it=tt.length-1);for(let wt=0,dt=u+m*2;wt<dt;wt++){const Bt=X*wt,bt=X*(wt+1),T=at+Lt+Bt,y=at+it+Bt,O=at+it+bt,Y=at+Lt+bt;qt(T,y,O,Y)}}}function ut(tt,at,A){c.push(tt),c.push(at),c.push(A)}function Ot(tt,at,A){Ht(tt),Ht(at),Ht(A);const Lt=s.length/3,it=M.generateTopUV(i,s,Lt-3,Lt-2,Lt-1);ce(it[0]),ce(it[1]),ce(it[2])}function qt(tt,at,A,Lt){Ht(tt),Ht(at),Ht(Lt),Ht(at),Ht(A),Ht(Lt);const it=s.length/3,wt=M.generateSideWallUV(i,s,it-6,it-3,it-2,it-1);ce(wt[0]),ce(wt[1]),ce(wt[3]),ce(wt[1]),ce(wt[2]),ce(wt[3])}function Ht(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function ce(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return lw(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new gh[s.type]().fromJSON(s)),new nl(i,t.options)}}const cw={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ot(r,o),new ot(a,c),new ot(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-h),new ot(d,1-p),new ot(v,1-g)]:[new ot(a,1-c),new ot(u,1-h),new ot(f,1-p),new ot(m,1-g)]}};function lw(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class il extends fd{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class pd extends hn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new P,p=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const g=r+m/i*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let g=0;g<i;g++){const M=g+m,b=M,x=M+i+1,L=M+i+2,C=M+1;a.push(b,x,C),a.push(x,L,C)}}this.setIndex(a),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pa extends hn{constructor(t=new tl([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const p=d.holes;bs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];bs.isClockWise(M)===!0&&(p[m]=M.reverse())}const v=bs.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){const M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=v.length;m<g;m++){const M=v[m],b=M[0]+h,x=M[1]+h,L=M[2]+h;i.push(b,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return uw(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new pa(i,t.curveSegments)}}function uw(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class jn extends hn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,d=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){const M=[],b=g/i;let x=0;g===0&&o===0?x=.5/e:g===i&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+b*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+x,1-b),M.push(l++)}u.push(M)}for(let g=0;g<i;g++)for(let M=0;M<e;M++){const b=u[g][M+1],x=u[g][M],L=u[g+1][M],C=u[g+1][M+1];(g!==0||o>0)&&f.push(b,x,C),(g!==i-1||c<Math.PI)&&f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hw extends Mi{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Le extends co{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vm,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Qa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fw(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function sp(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=n[a+c]}return s}function mg(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(t.push(r.time),e.push(o)),r=n[s++];while(r!==void 0)}class sl{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){const a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pw extends sl{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zr,endingEnd:zr}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vr:r=t,a=2*e-i;break;case Ac:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vr:o=t,c=2*i-e;break;case Ac:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}const l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let L=0;L!==a;++L)r[L]=g*o[u+L]+M*o[l+L]+b*o[c+L]+x*o[h+L];return r}}class gg extends sl{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class mw extends sl{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class zi{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qa(e,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qa(t.times,Array),values:Qa(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mw(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pw(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Tc:e=this.InterpolantFactoryMethodDiscrete;break;case dh:e=this.InterpolantFactoryMethodLinear;break;case xl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tc;case this.InterpolantFactoryMethodLinear:return dh;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&dw(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const v=e[h+p];if(v!==e[d+p]||v!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=dh;class ho extends zi{constructor(t,e,i){super(t,e,i)}}ho.prototype.ValueTypeName="bool";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=Tc;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class vg extends zi{}vg.prototype.ValueTypeName="color";class Pc extends zi{}Pc.prototype.ValueTypeName="number";class gw extends sl{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Di.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rl extends zi{InterpolantFactoryMethodLinear(t){return new gw(this.times,this.values,this.getValueSize(),t)}}rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends zi{constructor(t,e,i){super(t,e,i)}}fo.prototype.ValueTypeName="string";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Tc;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Dc extends zi{}Dc.prototype.ValueTypeName="vector";class rp{constructor(t="",e=-1,i=[],s=sd){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(_w(i[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=i.length;r!==o;++r)e.push(zi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=fw(c);c=sp(c,1,u),l=sp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Pc(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,i));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,v){if(f.length!==0){const m=[],g=[];mg(f,m,g,p),m.length!==0&&v.push(new h(d,m,g))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const m=[],g=[];for(let M=0;M!==d[p].morphTargets.length;++M){const b=d[p];m.push(b.time),g.push(b.morphTarget===v?1:0)}s.push(new Pc(".morphTargetInfluence["+v+"]",m,g))}c=f.length*o}else{const f=".bones["+e[h].name+"]";i(Dc,f+".position",d,"pos",s),i(rl,f+".quaternion",d,"rot",s),i(Dc,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pc;case"vector":case"vector2":case"vector3":case"vector4":return Dc;case"color":return vg;case"quaternion":return rl;case"bool":case"boolean":return ho;case"string":return fo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _w(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vw(n.type);if(n.times===void 0){const e=[],i=[];mg(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const op={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const yw=new xw;class md{constructor(t){this.manager=t!==void 0?t:yw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}md.DEFAULT_MATERIAL_NAME="__DEFAULT";class bw extends md{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=op.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xo("img");function c(){u(),op.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class gd extends md{constructor(t){super(t)}load(t,e,i,s){const r=new cn,o=new bw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class _g extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xg extends _g{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Jl=new fe,ap=new P,cp=new P;class Mw{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ap.setFromMatrixPosition(t.matrixWorld),e.position.copy(ap),cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cp),e.updateMatrixWorld(),Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ww extends Mw{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends _g{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new ww}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sw{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lp(){return performance.now()}class Ew{constructor(t,e,i){this.binding=t,this.valueSize=i;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(i,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){a.setValue(i,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,s=i*this._origIndex;t.getValue(e,s);for(let r=i,o=s;r!==o;++r)e[r]=e[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[i+o]}_slerp(t,e,i,s){Di.slerpFlat(t,e,t,e,t,i,s)}_slerpAdditive(t,e,i,s,r){const o=this._workIndex*r;Di.multiplyQuaternionsFlat(t,o,t,e,t,i),Di.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[i+a]*s}}_lerpAdditive(t,e,i,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[i+o]*s}}}const vd="\\[\\]\\.:\\/",Tw=new RegExp("["+vd+"]","g"),_d="[^"+vd+"]",Aw="[^"+vd.replace("\\.","")+"]",Cw=/((?:WC+[\/:])*)/.source.replace("WC",_d),Rw=/(WCOD+)?/.source.replace("WCOD",Aw),Pw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),Dw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),Iw=new RegExp("^"+Cw+Rw+Pw+Dw+"$"),Lw=["material","materials","bones","map"];class kw{constructor(t,e,i){const s=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Se{constructor(t,e,i){this.path=e,this.parsedPath=i||Se.parseTrackName(e),this.node=Se.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Se.Composite(t,e,i):new Se(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tw,"")}static parseTrackName(t){const e=Iw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Lw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Se.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Se.Composite=kw;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nw{constructor(t,e,i=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:zr,endingEnd:zr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $v:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case sd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let s=this.time+t,r=this._loopCount;const o=i===Wv;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(i===Hv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,i){const s=this._interpolantSettings;i?(s.endingStart=Vr,s.endingEnd=Vr):(t?s.endingStart=this.zeroSlopeAtStart?Vr:zr:s.endingStart=Ac,e?s.endingEnd=this.zeroSlopeAtEnd?Vr:zr:s.endingEnd=Ac)}_scheduleFading(t,e,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=i,this}}const Uw=new Float32Array(1);class Ow extends hr{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const v=e&&e._propertyBindings[h].binding.parsedPath;p=new Ew(Se.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,i)}const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],s=t._cacheIndex;i._cacheIndex=s,e[s]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new gg(new Float32Array(2),new Float32Array(2),1,Uw),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?rp.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=sd),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Nw(this,o,e,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const i=e||this._root,s=i.uuid,r=typeof t=="string"?rp.findByName(i,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const up=new fe;class Fw{constructor(t,e,i=0,s=1/0){this.ray=new qm(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new od,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return up.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(up),this}intersectObject(t,e=!0,i=[]){return yh(t,this,i,e),i.sort(hp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)yh(t[s],this,i,e);return i.sort(hp),i}}function hp(n,t){return n.distance-t.distance}function yh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)yh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function Bw(n){const t=new Map,e=new Map,i=n.clone();return bg(n,i,function(s,r){t.set(r,s),e.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function bg(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)bg(n.children[i],t.children[i],e)}const rn=(n,t,e=1,i=1)=>new P(n+e/2-Jt/2,0,t+i/2-Jt/2),Mg=n=>[Math.floor(n.x+Jt/2),Math.floor(n.z+Jt/2)],B={renderer:null,scene:null,camera:null,target:new P(0,0,2),zoom:1.7,waterTex:null,pickables:[],mode:"farm",farm:null,advPick:[],sun:null,bounds:{x0:-Jt/2-1,x1:Jt/2+1,z0:-Jt/2-1,z1:Jt/2+5}},ii=Math.PI/4,Ii=tr.degToRad(30),Zl=60,zw=15;function Vw(n){const t=new rg({canvas:n,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.outputColorSpace=Ie,t.shadowMap.enabled=!0,t.shadowMap.type=Sm,t.toneMapping=Kh,t.toneMappingExposure=1,B.renderer=t;const e=new og;e.background=new ie(6279392),e.fog=new ud(6279392,70,140),B.scene=e;const i=new Jc(-1,1,1,-1,.1,300);B.camera=i,e.add(new xg(16777215,11065464,2.3));const s=new yg(16774364,1.7);s.position.set(-14,26,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=s.shadow.camera;r.left=-20,r.right=20,r.top=20,r.bottom=-20,r.near=1,r.far=80,s.shadow.bias=-5e-4,s.shadow.normalBias=.02,s.shadow.intensity=.42,s.shadow.radius=3,e.add(s,s.target),B.sun=s,B.farm=new Ut,e.add(B.farm),Hw(e),dp(),window.addEventListener("resize",dp)}function Jo(n,t){const e=new tl,i=n/2;return e.moveTo(-i+t,-i),e.lineTo(i-t,-i),e.quadraticCurveTo(i,-i,i,-i+t),e.lineTo(i,i-t),e.quadraticCurveTo(i,i,i-t,i),e.lineTo(-i+t,i),e.quadraticCurveTo(-i,i,-i,i-t),e.lineTo(-i,-i+t),e.quadraticCurveTo(-i,-i,-i+t,-i),e}function Zo(n,t,e,i,s){const r=new nl(Jo(n,t),{depth:e,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2);const o=new Nt(r,i);return o.position.y=s-e-.08,o.receiveShadow=!0,o}function Ql(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Ls(i);return s.colorSpace=Ie,s.wrapS=s.wrapT=Wo,s.anisotropy=4,s}function Hw(n){B.waterTex=Ql(256,256,(a,c,l)=>{a.fillStyle="#34cfe0",a.fillRect(0,0,c,l),a.strokeStyle="rgba(255,255,255,.35)",a.lineWidth=4,a.lineCap="round";for(let u=0;u<9;u++){const h=u*97%c,d=u*61%l;a.beginPath(),a.moveTo(h,d),a.quadraticCurveTo(h+14,d-8,h+28,d),a.quadraticCurveTo(h+42,d+8,h+56,d),a.stroke()}}),B.waterTex.repeat.set(30,30);const t=new Nt(new ss(400,400),new Le({map:B.waterTex,roughness:.35,metalness:.05}));t.rotation.x=-Math.PI/2,t.position.y=-.55,t.receiveShadow=!0,n.add(t);const e=new Nt(new pa(Jo(Jt+9,6),12),new Le({color:9168620,transparent:!0,opacity:.55,roughness:.3}));e.rotation.x=-Math.PI/2,e.position.y=-.5,B.farm.add(e);const i=Ql(128,128,(a,c,l)=>{a.fillStyle="#f4dca0",a.fillRect(0,0,c,l);for(let u=0;u<160;u++)a.fillStyle=`rgba(${180+Math.random()*40},${140+Math.random()*30},80,.25)`,a.fillRect(Math.random()*c,Math.random()*l,2,2)});i.repeat.set(.25,.25),B.sandMat=new Le({map:i,roughness:.95}),B.farm.add(Zo(Jt+4.4,3,.8,B.sandMat,-.12));const s=Ql(256,256,(a,c,l)=>{a.fillStyle="#86d94a",a.fillRect(0,0,c,l),a.fillStyle="#93e256",a.fillRect(0,0,c/2,l/2),a.fillRect(c/2,l/2,c/2,l/2);for(let u=0;u<900;u++){const h=Math.random()*c,d=Math.random()*l,f=3+Math.random()*5;a.strokeStyle=Math.random()<.5?"rgba(45,110,20,.35)":"rgba(170,230,110,.4)",a.lineWidth=1.4,a.beginPath(),a.moveTo(h,d),a.lineTo(h+(Math.random()-.5)*3,d-f),a.stroke()}for(let u=0;u<26;u++)a.fillStyle=["#fff7d6","#ffe066","#ffd0e8"][u%3],a.beginPath(),a.arc(Math.random()*c,Math.random()*l,1.8,0,7),a.fill()});s.repeat.set(.5,.5);const r=new Image;r.onload=()=>{const a=s.image;a.width=a.height=1024;const c=a.getContext("2d");c.drawImage(r,0,0,1024,1024),c.fillStyle="rgba(255,255,230,.10)",c.fillRect(0,0,1024,1024),c.fillStyle="rgba(255,255,255,.07)";for(let l=0;l<4;l++)for(let u=0;u<4;u++)(l+u)%2===0&&c.fillRect(l*256,u*256,256,256);s.repeat.set(.25,.25),s.dispose(),s.needsUpdate=!0},r.src="/maisies-farm/textures/grass.webp";const o=Zo(Jt+.4,1.6,.5,new Le({map:s,roughness:1}),0);o.name="ground",B.farm.add(o),B.ground=o}const Gw=(n,t)=>Math.min(2,Math.max(1,Math.min(n/1150,t/720)));function dp(){const n=window.innerWidth,t=window.innerHeight;B.ui=Gw(n,t),document.documentElement.style.setProperty("--ui",B.ui.toFixed(3)),B.renderer.setSize(n,t,!1),dr()}function dr(){const n=B.camera,t=window.innerWidth,e=window.innerHeight,i=Math.min(t,e),s=zw/2/B.zoom;n.left=-s*t/i,n.right=s*t/i,n.top=s*e/i,n.bottom=-s*e/i;const r=B.bounds;B.target.x=tr.clamp(B.target.x,r.x0,r.x1),B.target.z=tr.clamp(B.target.z,r.z0,r.z1),n.position.set(B.target.x+Zl*Math.cos(Ii)*Math.sin(ii),B.target.y+Zl*Math.sin(Ii),B.target.z+Zl*Math.cos(Ii)*Math.cos(ii)),n.lookAt(B.target),B.sun&&(B.sun.position.set(B.target.x-14,26,B.target.z+10),B.sun.target.position.copy(B.target)),n.updateProjectionMatrix()}function fp(n){B.zoom=tr.clamp(n,.55,2.6),dr()}function tu(n,t){bh++;const e=B.camera,i=window.innerHeight,s=(e.top-e.bottom)/i,r=new P(Math.cos(ii),0,-Math.sin(ii)),o=new P(-Math.sin(ii),0,-Math.cos(ii));B.target.addScaledVector(r,-n*s),B.target.addScaledVector(o,t*s/Math.sin(Ii)),dr()}const xd=new Fw,pp=new ot,Ww=new fs(new P(0,1,0),0);function wg(n,t){pp.set(n/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),xd.setFromCamera(pp,B.camera)}function Ic(n,t){wg(n,t);const e=new P;return xd.ray.intersectPlane(Ww,e)?e:null}function Ts(n,t,e){wg(n,t);const i=xd.intersectObjects(B.mode==="farm"?B.pickables:B.advPick,!0);let s=null;for(const r of i){let o=r.object,a=!o.visible;for(;o&&o.userData.oid===void 0;)o=o.parent,a||(a=o?!o.visible:!1);if(!(!o||a||!o.visible)){if(!e||e(o.userData.oid))return o.userData.oid;s===null&&(s=o.userData.oid)}}return s}const tc=new P;function As(n){return tc.copy(n).project(B.camera),[(tc.x+1)/2*window.innerWidth,(1-tc.y)/2*window.innerHeight,tc.z<1]}function fr(n){B.target.set(n.x,0,n.z),dr()}let bh=0;function ol(n,t=700){const e=B.target.clone(),i=new P(n.x,0,n.z),s=performance.now(),r=++bh,o=()=>{if(r!==bh)return;const a=Math.min(1,(performance.now()-s)/t),c=a*a*(3-2*a);B.target.lerpVectors(e,i,c),dr(),a<1&&requestAnimationFrame(o)};o()}const Sg="/maisies-farm/sprites/",al={};async function $w(){const n=new gd;await Promise.all(Object.keys(Ho).map(t=>new Promise(e=>{n.load(Sg+t+".webp",i=>{i.colorSpace=Ie,i.anisotropy=8,al[t]={tex:i,aspect:i.image.height/i.image.width},e()},void 0,()=>e())})))}const Rn=n=>!!al[n],Eg=n=>al[n]?Sg+n+".webp":null,qw=(()=>{const n=new fe,t=new P(Math.cos(Ii)*Math.sin(ii),Math.sin(Ii),Math.cos(Ii)*Math.cos(ii));return n.lookAt(t,new P,new P(0,1,0)),new Di().setFromRotationMatrix(n)})();let eu=null;function Xw(n,t){if(!eu){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d"),r=s.createRadialGradient(32,32,2,32,32,31);r.addColorStop(0,"rgba(30,50,10,.38)"),r.addColorStop(1,"rgba(30,50,10,0)"),s.fillStyle=r,s.fillRect(0,0,64,64),eu=new Ls(i)}const e=new Nt(new ss(n*2,t*2),new ri({map:eu,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}const mp=96;function jw(n){if(n.mask!==void 0)return n.mask;n.mask=null;try{const t=n.tex.image,e=mp,i=Math.max(1,Math.round(mp*n.aspect)),s=document.createElement("canvas");s.width=e,s.height=i;const r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(t,0,0,e,i);const o=r.getImageData(0,0,e,i).data,a=new Uint8Array(e*i);for(let c=0;c<a.length;c++)a[c]=o[c*4+3];n.mask={w:e,h:i,a}}catch{}return n.mask}function Yw(n,t){const e=jw(n);if(!e)return!0;const i=Math.floor(t.x*e.w),s=Math.floor((1-t.y)*e.h);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=i+o,c=s+r;if(a>=0&&c>=0&&a<e.w&&c<e.h&&e.a[c*e.w+a]>90)return!0}return!1}const nu=[];function Kw(n,t,e,i){nu.length=0,Nt.prototype.raycast.call(n,e,nu);for(const s of nu)(!s.uv||Yw(t,s.uv))&&i.push(s)}const iu=new Map;function Mh(n,{width:t=1.4,w:e=1,d:i=1,lift:s=0,shadow:r=!0}={}){var p;const o=al[n],a=new Ut,c=t*o.aspect,l=t+":"+c;if(!iu.has(l)){const v=new ss(t,c);v.translate(0,c/2,0),iu.set(l,v)}const u=new ri({map:o.tex,transparent:!0,alphaTest:.35,alphaToCoverage:!0,side:pi}),h=new Nt(iu.get(l),u),d=new Ut;d.quaternion.copy(qw);const f=new P(Math.sin(ii),0,Math.cos(ii));return d.position.copy(new P(e/2,0,i/2).projectOnVector(f)),d.position.y=s,h.userData.sprite=!0,h.userData.faceR=!!((p=Ho[n])!=null&&p.faceR),h.raycast=(v,m)=>Kw(h,o,v,m),d.add(h),a.add(d),a.userData.plane=h,r&&a.add(Xw(e*.62,i*.62)),a}function Dn(n,t,e,i=0){const s=n.userData.plane;if(!s)return;const r=Math.sign(s.scale.x)||1;if(e==="walk"){const o=t*9+i;s.position.y=Math.abs(Math.sin(o))*.06,s.rotation.z=Math.sin(o)*.09,s.scale.set(r,1,1)}else if(e==="happy"){const o=t*6+i,a=Math.max(0,Math.sin(o));s.position.y=a*.16,s.scale.set(r*(1+(1-a)*.06),1-(1-a)*.08,1),s.rotation.z=0}else{const o=Math.sin(t*2.2+i);s.position.y=0,s.scale.set(r*(1-o*.015),1+o*.03,1),s.rotation.z=e==="eat"?Math.sin(t*3+i)*.05-.06*r:0}}const Jw=new Map;async function Zw(n){n==null||n(1)}const gp=new Set;function pe(n,t={}){const e=Jw.get(n),i=new Ut;if(!e){gp.has(n)||(gp.add(n),console.warn("Thiếu mô hình 3D",n));const u=new Nt(new Ge(.5,.5,.5),new Le({color:16711935}));return u.position.y=.25,i.add(u),i}const s=e.animations.length>0,r=s?Bw(e.scene):e.scene.clone(!0);t.tint!==void 0&&eS(r,t.tint),t.paint!==void 0&&tS(r,t.paint),i.add(r);const o=new Kn().setFromObject(r),a=o.getSize(new P);let c=1;t.size?c=t.size/Math.max(a.x,a.z,.001):t.h?c=t.h/Math.max(a.y,.001):t.s&&(c=t.s),r.scale.multiplyScalar(c);const l=o.getCenter(new P);return t.center!==!1&&(r.position.x-=l.x*c,r.position.z-=l.z*c),r.position.y-=o.min.y*c,s&&(i.userData.mixer=new Ow(r),i.userData.clips=Object.fromEntries(e.animations.map(u=>[u.name,u]))),i}const Qw={dance:["dance","jump","idle"],eat:["eat","idle"],walk:["walk","walkslow","run","idle"],"emote-yes":["emote-yes","jump","idle"],"interact-right":["interact-right","idle"]};function je(n,t,e=.2){const{mixer:i,clips:s}=n.userData;if(!i)return;const r=(Qw[t]||[t,"idle"]).find(c=>s[c]);if(!r||n.userData.cur===r)return;const o=i.clipAction(s[r]),a=n.userData.curAction;o.reset().play(),a&&a.crossFadeTo(o,e,!1),n.userData.cur=r,n.userData.curAction=o}function tS(n,t){n.traverse(e=>{e.isMesh&&(e.material=new Le({color:t,roughness:.8,metalness:0,flatShading:!0}))})}function eS(n,t){const e=new ie(t);n.traverse(i=>{i.isMesh&&(i.material=Array.isArray(i.material)?i.material.map(s=>s.clone()):i.material.clone(),(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>s.color.multiply(e)))})}const me={},nS={windmill:"feedmill","stall-red":"market","stall-green":"juicebar",watermill:"dairy",campfire:"campfire",field:"soil",fence:"fence",ship:"ship",crate:"crate",axe:"axe"},Br="/maisies-farm/items/",Ur=n=>n&&Rn(n)?Eg(n):null;function iS(n){if(Gt[n])return Br+n+".webp";const[t,e]=n.split(":");switch(t){case"ev":return e==="token"?Br+"shell.webp":null;case"face":return Vh.some(i=>i.id===e)||Ke.some(i=>i.id===e)&&Rn(e)?Br+"face-"+e+".webp":null;case"talk":return am.includes(e)?Br+"talk-"+e+".webp":null;case"decor":return e==="path"?"/maisies-farm/textures/brick.webp":Ur(hm[e]||e);case"tree":return Ur(um[e]);case"animal":return Ur(Tu[e]);case"fac":return Ur(e);case"pen":return Ur(e==="coop"||e==="beehive"?e:Tu[e]);case"col":return Vo.some(i=>i.pieces.some(s=>s[0]===e))?Br+e+".webp":null;case"b":return Ur(nS[e])}return null}function sS(){const n=e=>`url(${Br}${e}.webp)`,t=document.createElement("style");t.textContent=`.ico.coin{background-image:${n("coin")}}.ico.gem{background-image:${n("gem")}}.ico.bolt{background-image:${n("energy")}}
.xp{background:${n("star")} center/contain no-repeat;clip-path:none}`,document.head.appendChild(t)}async function rS(n){var o;if(sS(),n=n.filter(([a])=>{const c=iS(a);return c&&(me[a]=c),!c}),!n.length)return;const t=160,e=new rg({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(t,t),e.setPixelRatio(1),e.outputColorSpace=Ie;const i=new og;i.add(new xg(16777215,8952234,2.2));const s=new yg(16777215,2.2);s.position.set(2,4,3),i.add(s);const r=new ti(30,1,.01,100);for(const[a,c]of n){const l=c.obj?c.obj():pe(c.model,{tint:c.tint,paint:c.paint});c.extra&&c.extra(l);const{mixer:u,clips:h}=l.userData;u&&(h!=null&&h.idle)&&(u.clipAction(h.idle).play(),u.update(.4)),l.updateMatrixWorld(!0);const d=new Kn().setFromObject(l,!0),f=d.getBoundingSphere(new ao);if(c.face){const m=d.max.y-d.min.y;f.center.y=d.max.y-m*.36,f.radius=m*.36}l.rotation.y=c.rotY??-.5,i.add(l);const p=f.radius/Math.sin(tr.degToRad(15))*1.02,v=new P(0,.75,1).normalize();r.position.copy(f.center).addScaledVector(v,p),r.lookAt(f.center),e.render(i,r),me[a]=e.domElement.toDataURL("image/png"),i.remove(l)}e.dispose(),(o=e.forceContextLoss)==null||o.call(e)}function oS(){const n=Object.entries(Gt).map(([t,e])=>[t,{model:e.icon,tint:e.tint}]);return Object.entries(Fi).forEach(([t,e])=>n.push(["tree:"+t,{model:e.model}])),Object.entries(Ve).forEach(([t,e])=>n.push(["animal:"+t,{model:e.animal,rotY:.4}])),Object.entries(qn).filter(([,t])=>!t.proc).forEach(([t,e])=>n.push(["decor:"+t,{model:e.model,tint:e.tint,paint:e.paint,rotY:e.pet?.4:-.5}])),Ke.forEach(t=>n.push(["face:"+t.id,{model:t.model,rotY:.25,face:!0}])),Vh.forEach(t=>n.push(["face:"+t.id,{}])),am.forEach(t=>n.push(["talk:"+t,{}])),n.push(["b:windmill",{model:"town/windmill",rotY:-.8}]),n.push(["b:stall-red",{model:"town/stall-red"}]),n.push(["b:stall-green",{model:"town/stall-green"}]),n.push(["b:watermill",{model:"town/watermill",rotY:-.9}]),n.push(["b:campfire",{model:"survival/campfire-pit"}]),n.push(["b:field",{model:"nature/crops_dirtDoubleRow"}]),n.push(["b:fence",{model:"nature/fence_gate"}]),n.push(["b:ship",{model:"pirate/ship-small",rotY:-.9}]),n.push(["b:crate",{model:"pirate/crate"}]),n.push(["b:axe",{model:"survival/tool-axe"}]),n}function Tg(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new hn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=vp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);const p=vp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function vp(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new $n(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){const v=u.getComponent(d,p);a.setComponent(d+h,p,v)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const su={},yi=(n,t={})=>{var e;return su[e=n+JSON.stringify(t)]||(su[e]=new Le({color:n,roughness:.7,metalness:0,...t}))},no=n=>(n.castShadow=!0,n.receiveShadow=!0,n);function Ag(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Ls(i);return s.colorSpace=Ie,s.anisotropy=4,s}const ru=new Map;function Cg(n=1){if(!ru.has(n)){const t=[],e=Math.max(2,Math.round(n/.22));for(let i=0;i<=e;i++){const s=-n/2+i/e*n,r=new Ge(.07,.38,.05);r.translate(s,.19,0),t.push(r);const o=new Qc(.05,.08,4);o.rotateY(Math.PI/4),o.translate(s,.42,0),t.push(o)}for(const i of[.12,.28]){const s=new Ge(n,.05,.035);s.translate(0,i,-.035),t.push(s)}ru.set(n,Tg(t.map(i=>i.toNonIndexed())))}return no(new Nt(ru.get(n),yi(16777215)))}function aS(n,t,e=!0){const i=new Ut,s=(r,o,a,c)=>{const l=Cg(r);l.position.set(o,0,a),l.rotation.y=c,i.add(l)};if(s(n,0,-t/2,0),s(t,-n/2,0,Math.PI/2),s(t,n/2,0,Math.PI/2),e){const r=(n-.8)/2;s(r,-n/2+r/2,t/2,0),s(r,n/2-r/2,t/2,0)}else s(n,0,t/2,0);return i}let Gs=null;const ou=new Map;function cS(n=0,t=0){Gs===null&&(Gs=new gd().load("/maisies-farm/textures/brick.webp"),Gs.colorSpace=Ie,Gs.wrapS=Gs.wrapT=Wo,Gs.anisotropy=4);const e=(n&1)+":"+(t&1);if(!ou.has(e)){const s=Gs.clone();s.repeat.set(.5,.5),s.offset.set((n&1)*.5,(t&1)*.5),ou.set(e,new Le({roughness:.9,map:s}))}const i=new Nt(new Ge(1,.05,1),ou.get(e));return i.position.y=.02,i.receiveShadow=!0,i}const lS=new jn(.055,8,6),uS=new jn(.028,6,4);function hS(n=[16777215,16765414,16777215,16752327]){const t=new Ut,e=new Nt(new Ge(.94,.12,.94),yi(5941306));e.position.y=.06,no(e),t.add(e);const i=new Nt(new jn(.2,10,8),yi(5020208));for(let l=0;l<6;l++){const u=i.clone();u.position.set((Math.random()-.5)*.6,.14,(Math.random()-.5)*.6),u.scale.set(1.2,.55,1.2),t.add(u)}const s=22,r=new mh(lS,yi(16777215),s),o=new mh(uS,yi(16765503),s),a=new fe,c=new ie;for(let l=0;l<s;l++){const u=(Math.random()-.5)*.78,h=(Math.random()-.5)*.78,d=.22+Math.random()*.08;a.makeScale(1,.55,1).setPosition(u,d,h),r.setMatrixAt(l,a),r.setColorAt(l,c.set(n[l%n.length])),a.makeTranslation(u,d+.03,h),o.setMatrixAt(l,a)}return r.castShadow=!0,t.add(r,o),t}let ec=null,_p=null;function xp(){if(!ec){const e=i=>Ag(128,128,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<260;a++)s.fillStyle=`rgba(${90+Math.random()*70},${55+Math.random()*40},25,.3)`,s.beginPath(),s.arc(Math.random()*r,Math.random()*o,1+Math.random()*2.5,0,7),s.fill()});ec=new Le({map:e("#a8723f"),roughness:1}),_p=new Le({map:e("#8a5a30"),roughness:1})}const n=new Ut,t=new Nt(new ks(.4,.5,.15,24),[ec,_p,ec]);return t.position.y=.075,t.receiveShadow=!0,n.add(t),n}let au=null;function dS(){au||(au=new Le({roughness:1,map:Ag(64,64,(i,s,r)=>{i.fillStyle="#7a4b28",i.fillRect(0,0,s,r);for(let o=0;o<4;o++)i.fillStyle="rgba(40,20,5,.35)",i.fillRect(0,o*16+10,s,4),i.fillStyle="rgba(255,220,180,.12)",i.fillRect(0,o*16+6,s,3)})}));const n=new Ut,t=new Nt(new Ge(.98,.14,.98),yi(13208914));t.position.y=.07,no(t),n.add(t);const e=new Nt(new Ge(.84,.02,.84),au);return e.position.y=.145,e.receiveShadow=!0,n.add(e),n}const fS=new il(.42,2),pS=new jn(.075,10,8),cu=[];function mS(n,t){return cu[n]||(cu[n]=Tg(t))}function Rg({leaf:n=5423668,leaf2:t=7329866,fruit:e=15217963,n:i=12,blossom:s=!1}={}){const r=new Ut,o=new Nt(new ks(.08,.12,.75,8),yi(9132587));o.position.y=.52,no(o),r.add(o);const a=[[0,1.25,0,1.15],[-.32,1.08,.1,.8],[.34,1.1,-.05,.82],[.05,1.08,.33,.8],[0,1.6,0,.75],[-.05,1.05,-.3,.78]],c=[[],[]];a.forEach(([d,f,p,v],m)=>{const g=fS.clone();g.scale(v,v,v),g.translate(d,f,p),c[m===4?1:0].push(g)}),c.forEach((d,f)=>{const p=new Nt(mS(f,d),yi(f?t:n));no(p),r.add(p)});const l=new mh(pS,yi(e,{roughness:.35}),i),u=new fe,h=new P;for(let d=0;d<i;d++){const f=d/i*Math.PI*2*1.6+.3,p=1+d*37%10/10*.55;h.set(Math.cos(f)*.55,p,Math.sin(f)*.55),h.x+h.z<-.3&&h.multiplyScalar(-1).setY(p),u.makeScale(s?.8:1,s?.8:1.08,s?.8:1).setPosition(h),l.setMatrixAt(d,u)}return l.castShadow=!0,r.add(l),{group:r,fruits:l}}const gS=new il(.25,2);function vS(n=5224494,t=6736958,e=!1){const i=new Ut;if([[0,.24,0,1.15,n],[-.22,.18,.08,.85,t],[.22,.18,-.04,.9,n],[.04,.2,.22,.8,t]].forEach(([s,r,o,a,c])=>{const l=new Nt(gS,yi(c));l.position.set(s,r,o),l.scale.set(a,a*.85,a),no(l),i.add(l)}),e)for(let s=0;s<6;s++){const r=new Nt(new jn(.04,6,5),yi(16731501)),o=s*1.1;r.position.set(Math.cos(o)*.3,.22+s%3*.08,Math.sin(o)*.3),i.add(r)}return i}const cl=n=>Is[n.t].cap[n.lvl||0],nr=n=>Object.values(n.bag||{}).reduce((t,e)=>t+e,0),wh=n=>nr(n)>=cl(n),yd=n=>Is[n.t].up[n.lvl||0]||null;function bd(n,t){const e=Is[n.t];if(!e)return 0;if(n.site||n.at==null||wh(n))return n.at=t,0;const i=e.every*1e3,s=Math.floor((t-n.at)/i);if(s<=0)return 0;const r=n.bag||(n.bag={}),o=Math.min(s,cl(n)-nr(n));for(let a=0;a<o;a++){const c=e.gives[(n.n||0)%e.gives.length];n.n=(n.n||0)+1,r[c]=(r[c]||0)+1}return n.at+=o*i,wh(n)&&(n.at=t),o}function _S(n){if(n.site)return{};const t=n.bag||{};for(const[e,i]of Object.entries(t))We(e,i);return n.bag={},t}function xS(n){const t=yd(n);return!t||n.site||!Ss(t)?!1:(qc(t),n.lvl=(n.lvl||0)+1,!0)}function Kt(n,t=1,e=1,i={}){return Rn(n)?Mh(n,{width:Ho[n].width*(i.scale||1),w:t,d:e,shadow:i.shadow!==!1}):null}function Vn(n,t,e=1,i=1){return Kt(n.startsWith("art:")?n.slice(4):K0[n],e,i)||pe(n,t)}function Li(n,t,e){if(n.userData.isArt){const i=n.userData.plane,s=t*Math.cos(Math.PI/4)-e*Math.sin(Math.PI/4);Math.abs(s)>.001&&(i.scale.x=s>0==!!i.userData.faceR?1:-1)}else n.rotation.y=Math.atan2(t,e)}function ns(n,t,e){const i=n&&Kt(n,.5,.5);return i?(i.userData.isArt=!0,i.userData.plane=i.userData.plane,i):pe(t,e)}const ue=new Map,lu={},Pg=(n,t={})=>{var e;return lu[e=n+JSON.stringify(t)]||(lu[e]=new Le({color:n,roughness:.9,...t}))},Sn=(n,t,e,i,s)=>{const r=new Nt(new Ge(n,t,e),Pg(i,s));return r.castShadow=r.receiveShadow=!0,r};let uu=null;function Xr(){if(!uu){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.translate(32,32),e.fillStyle="#fff6b0",e.shadowColor="#ffd23f",e.shadowBlur=10,e.beginPath();for(let s=0;s<8;s++){const r=s%2?9:26,o=s*Math.PI/4;e.lineTo(Math.sin(o)*r,-Math.cos(o)*r)}e.fill();const i=new Ls(t);i.colorSpace=Ie,uu=new uo({map:i,depthTest:!1,transparent:!0})}const n=new eo(uu);return n.scale.set(.35,.35,1),n.renderOrder=5,n}let hu=null;function yS(){hu||(hu=new Le({color:16777215,transparent:!0,opacity:.8,roughness:1}));const n=new Ut;for(let t=0;t<3;t++){const e=new Nt(new jn(.12,8,6),hu.clone());e.userData.ph=t/3,n.add(e)}return n.userData.tick=t=>n.children.forEach(e=>{const i=(t*.6+e.userData.ph)%1;e.position.set(Math.sin(i*6)*.08,i*.9,0),e.scale.setScalar(.6+i*1.4),e.material.opacity=.75*(1-i)}),n}function bS(n,t,{stone:e=!1,roof:i="town/roof-gable",roofH:s=1.4,wallTint:r,roofTint:o,door:a="south",floors:c=1}={}){const l=new Ut,u=e?"town/wall":"town/wall-wood";for(let f=0;f<c;f++)for(let p=0;p<n;p++)for(let v=0;v<t;v++){const m=-n/2+.5+p,g=-t/2+.5+v,M=[];p===n-1&&M.push(["e",0]),p===0&&M.push(["w",Math.PI]),v===t-1&&M.push(["s",-Math.PI/2]),v===0&&M.push(["n",Math.PI/2]);for(const[b,x]of M){let L=u+"-window-shutters";f===0&&b===a&&p===Math.floor((n-1)/2)||f===0&&b==="e"&&v===Math.floor((t-1)/2)&&a==="east"?L=u+"-door":(p+v+f)%2&&(L=u);const C=pe(L,{s:1,center:!1,tint:r});C.rotation.y=x,C.position.set(m,f,g),l.add(C)}}const h=pe(i,o!==void 0?{paint:o}:{}),d=new Kn().setFromObject(h).getSize(new P);return h.scale.set((n+.25)/d.x,s/d.y,(t+.25)/d.z),h.position.y=c,l.add(h),l.userData.top=c+s,l}const MS=[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]],wS={wheat:.9,corn:.75,carrot:1,strawberry:1,tomato:1,pumpkin:1,melon:1};function pr(n,t){return n.crop?t>=n.e?3:(t-n.s)/(n.e-n.s)<.5?0:1:-1}function SS(n){const t=new Ut,e=Rn("soil");e||t.add(dS());const i=new Ut;i.position.y=e?0:.12,t.add(i);const s=Xr();s.visible=!1,t.add(s);let r="";return{root:t,refresh(o){const a=pr(n,o),c=n.crop+a;if(c===r)return;if(r=c,i.clear(),s.visible=a===3,e){const f=a<0?"soil":a===3&&Rn(n.crop)?n.crop:"sprout";i.add(Kt(f,1,1,{shadow:!1}));return}if(a<0)return;const l=Be[n.crop],u=l.stages[a===3?2:a],h=a===3?Rn(n.crop)?n.crop:null:Rn("sprout")?"sprout":null;if(h){const f=a===0?.65:a===1?.88:1,p=Kt(h,f,f,{scale:f,shadow:!1});i.add(p);return}const d=(wS[n.crop]||1)*(a===0?.7:1);MS.forEach(([f,p],v)=>{const m=pe(u,a===3&&l.fit?{...l.fit}:a===3&&l.tint?{s:d,tint:l.tint}:{s:d});if(m.position.set(f,.04,p),m.rotation.y=v*1.3,i.add(m),a===3&&l.deco)for(let g=0;g<2;g++){const M=pe(l.deco,{size:.13});M.position.set(f+(g?.08:-.07),.18+g*.06,p+(g?-.05:.06)),i.add(M)}})},update(o){s.visible&&(s.position.set(0,.85+Math.sin(o*3+n.id)*.08,0),s.material.rotation=o)}}}function ES(n){const t=Fi[n.t],e=new Ut,i=!!t.palm,s=um[n.t]||null;if(s&&Rn(s)){t.lush&&e.add(xp());const f=Kt(s),p=Rn("leafytree")&&!i?Kt("leafytree"):null;[f,p].forEach(m=>{m&&(m.position.y=t.lush?.15:0,e.add(m))});const v=Xr();return e.add(v),{root:e,refresh(m){const g=m>=n.e;f.visible=g||!p,p&&(p.visible=!g),v.visible=g;const M=Math.min(1,(m-n.s)/(n.e-n.s)),b=g?1:.8+.2*M;f.scale.setScalar(b),p&&p.scale.setScalar(b)},update(m){v.visible&&(v.position.set(0,2.2+Math.sin(m*3+n.id)*.08,0),v.material.rotation=m)}}}if(t.lush){e.add(xp());const{group:f,fruits:p}=Rg(t.lush);f.position.y=.15,e.add(f);const v=Xr();return e.add(v),{root:e,refresh(m){const g=m>=n.e;p.visible=g,v.visible=g;const M=Math.min(1,(m-n.s)/(n.e-n.s));f.scale.setScalar(g?1:.8+.2*M)},update(m){v.visible&&(v.position.set(0,2.35+Math.sin(m*3+n.id)*.08,0),v.material.rotation=m)}}}const r=pe(t.model,{h:i?2.1:1.8,tint:t.tint});e.add(r);const o=new Ut;e.add(o);const a=new Kn().setFromObject(r),c=a.getSize(new P),l=i?a.max.y-.35:a.min.y+c.y*.66,u=Math.max(c.x,c.z)/2*(i?.25:.92);(i?[[.2,-.05],[1,0],[1.8,-.05]]:[[.25,.1],[.85,-.12],[1.35,.18],[.6,.32],[1.1,-.35]]).forEach(([f,p])=>{const v=pe(t.fruit,{size:i?.22:.24});v.position.set(Math.cos(f)*u,l+p*c.y*.5,Math.sin(f)*u),o.add(v)});const d=Xr();return e.add(d),{root:e,refresh(f){const p=f>=n.e;o.visible=p,d.visible=p;const v=Math.min(1,(f-n.s)/(n.e-n.s));r.scale.setScalar(p?1:.85+.15*v)},update(f){d.visible&&(d.position.set(0,2.25+Math.sin(f*3+n.id)*.08,0),d.material.rotation=f)}}}const TS={coop:15323775,cowpen:10935410,pigpen:12094044,beehive:13035674},du={cowpen:"cowshed",pigpen:"pigsty"};function AS(n){const t=Ve[n.t],e=new Ut,i=Sn(2.9,.05,2.9,TS[n.t]);if(i.position.y=0,e.add(i),e.add(aS(2.92,2.92)),n.t==="beehive"){const a=Kt("beehive");if(a)a.position.set(-.85,0,-.85),e.add(a);else for(let c=0;c<2;c++){const l=pe("survival/box-large",{size:.55,tint:16765503});l.position.set(-.95+c*.6,0,-.95),e.add(l)}[[.6,-.7],[.9,.3],[-.8,.5],[.1,.8],[-.2,-.3]].forEach(([c,l],u)=>{const h=Kt(u%2?"flower_yel":"flower_red",.4,.4,{scale:.75,shadow:!1});h&&(h.position.set(c,0,l),e.add(h))})}else if(n.t==="coop"&&Rn("coop")){const a=Kt("coop");a.position.set(-.85,0,-.85),e.add(a)}else if(n.t==="coop"){const a=bS(1,1,{roof:"town/roof-point",roofH:.7,roofTint:15229004});a.scale.setScalar(.75),a.position.set(-.85,0,-.85),e.add(a)}else if(Rn(du[n.t])){const a=Kt(du[n.t]);if(a.position.set(-.8,0,-.85),e.add(a),n.t==="cowpen"){const c=Kt("trough",1,1,{scale:.8});c&&(c.position.set(.55,0,-.95),e.add(c))}}else{const a=Vn("survival/box-large",{size:.8});a.position.set(-.9,0,-.9),e.add(a);const c=Vn("survival/bucket",{size:.3},.4,.4);c.position.set(-.3,0,-1.05),e.add(c)}const s=[],r=a=>(du[n.t]&&a.x+a.z<-.5&&(a.x=-a.x,a.z=-a.z),a),o=()=>{for(;s.length<n.animals.length;){const a=ns(Tu[n.t],t.animal,{h:n.t==="coop"?.5:n.t==="beehive"?.35:n.t==="cowpen"?.85:.6});r(a.position.set((Math.random()-.5)*1.6,.03,(Math.random()-.5)*1.4+.2)),a.userData.goal=a.position.clone(),a.userData.wait=Math.random()*3,e.add(a),s.push(a)}for(;s.length>n.animals.length;)e.remove(s.pop())};return o(),{root:e,herd:s,refresh(a){o()},update(a,c){s.forEach((l,u)=>{var m;const h=n.animals[u];if(!h)return;const d=l.userData;(m=d.mixer)==null||m.update(c);const f=h.e&&a>=h.e,p=h.e&&a<h.e;if(t.fly&&(l.position.y=.55+Math.sin(a*3+u)*.12),f){je(l,"dance"),d.isArt&&Dn(l,a,"happy",u);return}const v=d.goal.clone().sub(l.position);v.y=0,v.length()>.05?(je(l,"walk"),v.setLength(Math.min(v.length(),c*.45)),l.position.add(v),Li(l,v.x,v.z),d.isArt&&Dn(l,a,"walk",u)):(je(l,p?"eat":"idle"),d.isArt&&Dn(l,a,p?"eat":"idle",u),d.wait-=c,d.wait<=0&&(r(d.goal.set((Math.random()-.5)*1.8,.03,(Math.random()-.5)*1.6+.15)),d.wait=2+Math.random()*4))})}}}function ll(n){const t=j0[n],e=pe(t.model,{size:t.size});e.rotation.y=t.rot||0;let i=null;return t.spin&&e.traverse(s=>{!i&&s.name.includes(t.spin)&&(i=s)}),{m:e,spin:i,axis:t.axis}}function nn(n,t,e,i,s,r=0){const o=pe(t,e);return o.position.set(i,0,s),o.rotation.y=r,n.add(o),o}const fu={feedmill:n=>{nn(n,"kk/decoration/props/sack.gltf",{size:.4},.7,.75),nn(n,"kk/decoration/props/sack.gltf",{size:.35},.35,.85,1)},bakery:n=>{nn(n,"food/loaf",{size:.3},.75,.8)},dairy:n=>{nn(n,"kk/decoration/props/bucket_water.gltf",{size:.3},-.75,.8),nn(n,"food/carton",{h:.3},-.45,.85)},juicebar:n=>{nn(n,"kk/decoration/props/crate_open.gltf",{size:.4},.75,.8),nn(n,"food/orange",{size:.15},.75,.8).position.y=.2},seafood:n=>{nn(n,"survival/campfire-pit",{size:.45},.7,.75),nn(n,"food/fish",{size:.3},-.65,.8)},kitchen:n=>{nn(n,"survival/campfire-pit",{size:.45},.7,.75),nn(n,"survival/workbench",{size:.5},-.65,.75)},sweets:n=>{nn(n,"food/cupcake",{size:.3},.75,.85),nn(n,"food/donut-sprinkles",{size:.28},-.7,.85)},jammaker:n=>{nn(n,"food/honey",{size:.28,tint:16743034},.7,.8),nn(n,"kk/decoration/props/barrel.gltf",{size:.4},-.7,.75)}},yp={bakery:[.35,1.7,-.35],kitchen:[.7,.3,.75],seafood:[.7,.3,.75],sweets:[0,1.5,0],jammaker:[-.3,1.9,-.3]};function CS(n){var c;const t=new Ut;t.add(po(1.9));const e=cm[n.t],i=e?Kt(e.sprite,2,2,{scale:e.scale}):Kt(n.t,2,2),{m:s,spin:r,axis:o}=i?{m:i}:ll(n.t);t.add(s),i||(c=fu[n.t])==null||c.call(fu,t);let a=null;return yp[n.t]&&!i&&(a=yS(),a.position.set(...yp[n.t]),t.add(a)),{root:t,refresh(l){a&&(a.visible=n.jobs.some(u=>l<u.e&&l>=u.s))},update(l,u){const h=n.jobs.some(d=>l<d.e&&l>=d.s);if(r&&(r.rotation[o]+=u*(h?2.2:.3)),i){const d=h?Math.abs(Math.sin(l*4))*.025:0;i.userData.plane.scale.set(1+d*.5,1-d,1)}a!=null&&a.visible&&a.userData.tick(l)}}}function RS(n){const t=new Ut;t.add(po(1.9));const e=Y0[n.t],i=e?Kt(e.sprite,2,2,{scale:e.scale}):Kt(n.t,2,2);i&&t.add(i);const s=(o,a,c)=>{const l=Kt("logs",.7,.7,{scale:c})||pe("kk/decoration/props/resource_lumber.gltf",{size:.6});return l.position.set(o,0,a),t.add(l),l};s(-.6,.6,.8);const r=[s(.65,.65,.9),s(.35,.85,.7)];return r.forEach(o=>o.visible=!1),{root:t,refresh(){const o=nr(n),a=cl(n);r[0].visible=o>0,r[1].visible=o>=a/2}}}let nc=null;function po(n){if(!nc){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d");i.fillStyle="#d9b57a",i.fillRect(0,0,128,128);for(let s=0;s<220;s++)i.fillStyle=`rgba(${120+Math.random()*60},${80+Math.random()*40},40,.25)`,i.beginPath(),i.arc(Math.random()*128,Math.random()*128,1+Math.random()*2.5,0,7),i.fill();nc=new Ls(e),nc.colorSpace=Ie}const t=new Nt(new ks(n*.62,n*.66,.06,28),new Le({map:nc,roughness:1}));return t.position.y=0,t.scale.z=.92,t.receiveShadow=!0,t}function PS(){const n=new Ut;n.add(po(2.9));const t=Kt("house",3,3);if(t)return n.add(t),{root:n};const{m:e}=ll("house");e.position.z=-.2,n.add(e);const i=pe("town/lantern",{h:.9});i.position.set(-1.25,0,1.1),n.add(i);const s=pe("town/lantern",{h:.9});return s.position.set(1.25,0,1.1),n.add(s),[[-.8,1.15,"nature/flower_redA"],[.8,1.15,"nature/flower_yellowA"],[-1.2,-.9,"nature/plant_bushLarge"],[1.25,-.8,"nature/flower_purpleA"]].forEach(([r,o,a])=>nn(n,a,{size:.4},r,o)),{root:n}}function DS(){const n=new Ut;n.add(po(1.95));const t=Kt("barn",2,2);if(t)return n.add(t),{root:n};const{m:e}=ll("barn");return e.position.z=-.1,n.add(e),nn(n,"kk/decoration/props/sack.gltf",{size:.4},.72,.78),nn(n,"kk/decoration/props/crate_A_big.gltf",{size:.38},-.72,.78,.4),{root:n}}function IS(){const n=new Ut,t=Kt("board",2,1);if(t)return n.add(t),{root:n,cart:null};const e=Sn(.1,1.2,.1,9132587);e.position.set(-.75,.6,0),n.add(e);const i=e.clone();i.position.x=.75,n.add(i);const s=Sn(1.8,.85,.08,13208914);s.position.set(0,.95,0),n.add(s);const r=Sn(1.95,.12,.2,9658426);r.position.set(0,1.42,0),n.add(r),[16775920,16773312,15267583,16775920,16770799,15794152].forEach((c,l)=>{const u=Sn(.4,.3,.02,c);u.position.set(-.55+l%3*.55,1.15-Math.floor(l/3)*.38,.06),u.rotation.z=l%2?.05:-.04,n.add(u)});const a=pe("town/cart",{size:.9});return a.position.set(.2,0,.55),a.rotation.y=Math.PI/2,n.add(a),{root:n,cart:a}}function LS(n){const t=new Ut;t.add(po(1.9));const e=Kt("market",2,2);if(e)return t.add(e),{root:t,refresh(){}};const{m:i}=ll("market");t.add(i);const s=pe("kk/decoration/props/crate_A_big.gltf",{size:.35});s.position.set(-.75,0,.8),t.add(s);const r=pe("kk/decoration/props/barrel.gltf",{size:.32});r.position.set(.78,0,.8),t.add(r);const o=new Ut;o.position.set(0,.62,.55),t.add(o);let a="";return{root:t,refresh(){const c=n.slots.map(l=>l?l.item+(l.sold?"$":""):"-").join();c!==a&&(a=c,o.clear(),n.slots.forEach((l,u)=>{if(!l||l.sold)return;const h=pe(Gt[l.item].icon,{size:.26,tint:Gt[l.item].tint});h.position.set(-.5+u%3*.5,0,Math.floor(u/3)*.3-.1),o.add(h)}))}}}function Dg(n,t={x:0,z:0}){if(n==="brick")return cS(t.x,t.z);if(n==="flowerbed")return Kt("daisies")||hS();if(n==="fence"){const e=Kt("fence",1,1,{shadow:!1});return e?(e.userData.plane.userData.flip=-1,e):Cg(1)}}function kS(n){const t=qn[n.t],e=new Ut;if(t.proc)return e.add(Dg(t.proc,n)),{root:e};const i=hm[n.t]||n.t;if(!t.pet)return e.add(Kt(i,t.w||1,t.d||1)||pe(t.model,{...t.fit,tint:t.tint,paint:t.paint})),{root:e};const s=ns(i,t.model,t.fit);return e.add(s),s.userData.goal=new P,s.userData.wait=1,{root:e,update(r,o){var l;const a=s.userData;(l=a.mixer)==null||l.update(o);const c=a.goal.clone().sub(s.position);c.length()>.05?(je(s,"walk"),c.setLength(Math.min(c.length(),o*.5)),s.position.add(c),Li(s,c.x,c.z),a.isArt&&Dn(s,r,"walk",n.id)):(je(s,a.dance?"dance":"idle"),a.isArt&&Dn(s,r,a.dance?"happy":"idle",n.id),a.wait-=o,a.wait<=0&&(a.goal.set((Math.random()-.5)*2.4,0,(Math.random()-.5)*2.4),a.wait=2+Math.random()*5,a.dance=Math.random()<.25))}}}const Sh=.8;let pu=null;function NS(n){pu||(pu=[3811866,8314970].map(s=>new uo({color:s,depthTest:!1,transparent:!0})));const t=new Ut,e=new eo(pu[0]),i=new eo(pu[1]);return e.scale.set(Sh+.08,.16,1),i.scale.set(Sh,.09,1),e.renderOrder=6,i.renderOrder=7,t.add(e,i),t.position.y=n,t.userData.fill=i,t.visible=!1,t}function Ig(n,t){const e=Math.max(.01,Math.min(1,t)),i=n.userData.fill;i.scale.x=Sh*e,i.center.set(.5/e,.5),n.visible=t<1&&t>0}function US(n,t){const e=ue.get(n);e!=null&&e.hp&&Ig(e.hp,t)}function OS(n){const t=ue.get(n);t&&(t.shakeT=performance.now())}const FS={bush:["bush"],rock:["rock"],tree:["jungletree"],stump:["stump"],logs:["logs"],grass:["grasstuft"],bamboo:["bamboo"],claymound:["claymound"],bigtree:["bigtree"],bigrock:["bigrock"]},BS={grass:"bush",bamboo:"bush",claymound:"rock",bigtree:"tree",bigrock:"rock"};function zS(n){var u;const t=new Ut,[e,i,s=1]=FS[n.t]||[];let r=e&&Kt(e,1,1,{scale:s});if(r)i!=null&&r.userData.plane.material.color.set(i);else{const h=An[BS[n.t]||n.t];h.proc==="tree"?(r=Rg({leaf:4171818,leaf2:5816890,n:0}).group,r.scale.setScalar(.85*s)):h.model?(r=pe(h.model,h.fit),r.scale.multiplyScalar(s)):r=vS(5224494,6736958,n.id%3===0),i!=null&&r.traverse(d=>{d.isMesh&&(d.material=d.material.clone(),d.material.color.set(i))}),r.rotation.y=(n.r||0)*1.57+n.id%7*.3}t.add(r);const o=new Kn().setFromObject(r).max.y,a=NS(Math.min(3,Math.max(.8,(isFinite(o)?o:1.2)+.15)));t.add(a);const c={root:t,hp:a,shakeT:0,update(){const h=c.shakeT?(performance.now()-c.shakeT)/260:1;h<1?(r.position.x=Math.sin(h*Math.PI*6)*.07*(1-h),r.rotation.z=Math.sin(h*Math.PI*6)*.05*(1-h)):c.shakeT&&(r.position.x=0,r.rotation.z=0,c.shakeT=0)}},l=(u=An[n.t])==null?void 0:u.hp;return n.hp!=null&&l&&Ig(a,n.hp/l),c}function VS(n){const t=new Ut,e=Kt("chest")||pe("pirate/chest",{size:.65});t.add(e);const i=Xr();return i.position.y=1,t.add(i),{root:t,update(s){i.position.y=1+Math.sin(s*3+n.id)*.08}}}function HS(n){const t=new Ut,[e,i]=ln(n),s=Math.min(e,i);t.add(po(s*.95));const r=Kt("scaffold",e,i,{scale:s/2*(.85+.1*Math.min(n.site.stage||0,2))});if(r)return t.add(r),{root:t};const o=new Ut;t.add(o);const a=s*.5,c=.8+.3*(n.site.stage||0),l=11565637,u=9067051;for(const[v,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const g=Sn(.08,c,.08,l);g.position.set(v*a/2,c/2,m*a/2),o.add(g)}for(let v=.35;v<c;v+=.4)for(const[m,g,M]of[[0,-1,0],[0,1,0],[-1,0,1],[1,0,1]]){const b=Sn(a+.08,.06,.06,u);b.position.set(m*a/2,v,g*a/2),b.rotation.y=M*Math.PI/2,o.add(b)}const h=Sn(a*.9,.05,a*.9,14264426);h.position.y=.36,o.add(h);const d=Sn(.05,Math.hypot(a,c)*.95,.05,u);d.position.set(0,c/2,a/2+.03),d.rotation.z=Math.atan2(a,c),o.add(d),o.position.set(-s*.08,0,-s*.08);const f=Kt("crate",.6,.6,{scale:.75})||pe("pirate/crate",{size:.5});f.position.set(s*.32,0,s*.3),t.add(f);const p=Kt("logs",.7,.7,{scale:.8})||pe("kk/decoration/props/resource_lumber.gltf",{size:.6});return p.position.set(-s*.3,0,s*.36),t.add(p),{root:t}}function GS(){const n=new Ut;return n.add(Kt("boat",2,2)||pe("pirate/boat-row-small",{size:1.9})),{root:n}}const bp=new ie(9206376);function WS(n){const t=new Ut,[e,i]=ln(n),s=Math.min(e,i),r=n.k==="house"?"ruin_house":n.k==="boat"?"ruin_boat":n.k==="fac"&&n.t==="bakery"?"ruin_bakery":null,o=r&&Kt(r,e,i);if(o)return t.add(o),{root:t};const a=ul({...n,site:void 0}).root;t.add(a),a.traverse(u=>{if(!u.isMesh||!u.material)return;const h=d=>(d=d.clone(),d.color&&(u.userData.sprite?d.color.copy(bp):d.color.multiply(bp)),d);u.material=Array.isArray(u.material)?u.material.map(h):h(u.material)});const c=n.k==="boat";a.rotation.z=c?.28:.09,a.rotation.x=c?.1:-.05,c?a.position.y=-.12:a.scale.y=.88;for(let u=0;u<(c?3:5);u++){const h=Sn(.18+.5*(u*37%10)/10,.05,.12,u%2?11565637:9067051);h.position.set((u*53%10/10-.5)*s*.9,.04+u*.01,s*.32+u*29%10/10*.25),h.rotation.y=u*1.3,h.rotation.z=(u%3-1)*.15,t.add(h)}const l=Kt("logs",.7,.7,{scale:.7})||pe("kk/decoration/props/resource_lumber.gltf",{size:.55});return l.position.set(-s*.38,0,s*.38),t.add(l),{root:t}}let vc=null;function $S(){vc||(vc=new Le({color:16747038,emissive:16738816,emissiveIntensity:.5,roughness:.6,transparent:!0}));const n=new Ut;n.scale.setScalar(1.4);const t=new Nt(new Qc(.32,.5,4),vc);t.rotation.x=Math.PI,t.position.y=.25;const e=new Nt(new Ge(.16,.42,.16),vc);return e.position.y=.68,n.add(t,e),n}function qS(n){const t=new Ut,e=ar[n.t],i=n.t==="stairs_old",s=n.site?n.site.stage:9,r=n.t==="bridge_w",o=r?13218394:11565637,a=r?9414714:8015654,c=new Ut;t.add(c);const l=Kt(n.site?n.t+"_broken":n.t,2,1);if(l)c.add(l);else if(i){const f=n.site?1+s:3;for(let p=0;p<3;p++){const v=p<f,m=Sn(1.7-p*.12,.22*(p+1),.32,v?12170408:10130826);m.position.set(v?0:(p-1)*.2,.11*(p+1),.3-p*.3),v||(m.scale.set(.45,.5,.9),m.rotation.y=.5*p),c.add(m)}if(!n.site)for(const p of[-.8,.8]){const v=Sn(.12,.5,.12,9209724);v.position.set(p,.25,.32),c.add(v)}}else{const f=n.t==="bridge_w"?"x":"z",p=f==="x"?2:1.3,v=f==="x"?.9:1.8,m=9,g=n.site?Math.min(m,3+s*3):m;for(let M=0;M<m;M++){if(M>=g&&M%2)continue;const b=Sn(f==="x"?p/m*.85:v,.07,f==="x"?v:p/m*.85,M<g?o:9071168),x=-p/2+(M+.5)*p/m;b.position.set(f==="x"?x:0,.16+(M<g?0:-.06),f==="x"?0:x),M>=g&&(b.rotation.y=.25),c.add(b)}for(const M of[-1,1])for(const b of[-1,1]){const x=Sn(.1,.55,.1,a);x.position.set(f==="x"?M*p/2:b*v/2,.27,f==="x"?b*v/2:M*p/2),c.add(x)}if(!n.site||s>=1)for(const M of[-1,1]){const b=Sn(f==="x"?p:.05,.05,f==="x"?.05:p,n.site?13149290:a);b.position.set(f==="x"?0:M*v/2,.5,f==="x"?M*v/2:0),c.add(b)}}if(n.site){const f=Kt("logs",.6,.6,{scale:.6})||pe("kk/decoration/props/resource_lumber.gltf",{size:.45});f.position.set(i?.75:.6,0,.45),t.add(f)}const u=e.zone,h=$S();return t.add(h),{root:t,update(f){var v;const p=!((v=_.zones)!=null&&v[u])&&ua(n);h.visible=p,p&&(h.position.y=1.5+Math.abs(Math.sin(f*3))*.35,vc.opacity=.55+.45*(.5+.5*Math.sin(f*6)),h.rotation.y=f*1.5)}}}let Ws=null;const Qo=new Map;function Lg(){if(Ws)return Ws;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");for(const[s,r,o]of[[64,72,44],[40,76,30],[88,76,30],[56,52,30],[78,56,26]]){const a=t.createRadialGradient(s,r,o*.2,s,r,o);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.65,"rgba(255,255,255,.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,7),t.fill()}t.globalCompositeOperation="source-atop";const e=t.createLinearGradient(0,30,0,118);e.addColorStop(0,"rgba(160,185,215,0)"),e.addColorStop(.55,"rgba(160,185,215,.18)"),e.addColorStop(1,"rgba(140,165,200,.6)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ws=new Ls(n),Ws.colorSpace=Ie;const i=new Image;return i.onload=()=>{n.width=i.width,n.height=i.height,t.drawImage(i,0,0),Ws.dispose(),Ws.needsUpdate=!0},i.src="/maisies-farm/textures/cloud.webp",Ws}function XS(n,t){const[e,i,s,r]=n.rect,o=Hh(7919+t*131),a=[],c=new Ye;c.lookAt(Math.sin(ii)*Math.cos(Ii),Math.sin(Ii),Math.cos(ii)*Math.cos(Ii));const l=new P(1,0,0).applyQuaternion(c.quaternion),u=new P(0,1,0).applyQuaternion(c.quaternion),h=new P(0,0,1).applyQuaternion(c.quaternion),d=2.1;for(let x=0;x<2;x++)for(let L=e+.6;L<e+s-.2;L+=d)for(let C=i+.6;C<i+r-.2;C+=d){const R=L+(o()-.5)*.9+x*.7,I=C+(o()-.5)*.9+x*.7;if(R>e+s-.4||I>i+r-.4)continue;const E=new P(R-Jt/2,.55+x*.75+o()*.35,I-Jt/2);a.push({p:E,s:3+o()*1.3,c:x?1:.9+o()*.06,f:o()<.5})}a.sort((x,L)=>x.p.dot(h)-L.p.dot(h));const f=[],p=[],v=[],m=[];a.forEach(({p:x,s:L,c:C,f:R},I)=>{for(const[E,w]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]]){const D=x.clone().addScaledVector(l,E*L).addScaledVector(u,w*L*.75);f.push(D.x,D.y,D.z),p.push(R?.5-E:E+.5,w+.5),v.push(C*.97,C*.98,C)}m.push(I*4,I*4+1,I*4+2,I*4,I*4+2,I*4+3)});const g=new hn;g.setAttribute("position",new Te(f,3)),g.setAttribute("uv",new Te(p,2)),g.setAttribute("color",new Te(v,3)),g.setIndex(m);const M=new ri({map:Lg(),vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),b=new Nt(g,M);return b.renderOrder=4,{mesh:b,mat:M,t0:0}}const jS=n=>typeof n.id=="number"&&!ua(n);function YS(){Ds.forEach((n,t)=>{var i;if((i=_.zones)!=null&&i[n.id]||Qo.has(n.id))return;const e=XS(n,t);B.farm.add(e.mesh),Qo.set(n.id,e)})}cr("zone",n=>{for(const e of _.objs){const i=ue.get(e.id);i&&_i(e.x,e.z)===n&&(i.root.visible=!0)}const t=Qo.get(n);t&&!t.t0&&(t.t0=performance.now())});function KS(n){for(const[t,e]of Qo){if(!e.t0){e.mesh.position.y=Math.sin(n*.8+t.length)*.06;continue}const i=(performance.now()-e.t0)/1500;if(i>=1){B.farm.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose(),Qo.delete(t);continue}e.mat.opacity=1-i*i,e.mesh.position.y=i*1.6}}function ul(n){var t;if(n.k==="gate")return qS(n);if((t=n.site)!=null&&t.ruin)return WS(n);if(n.site)return HS(n);switch(n.k){case"field":return SS(n);case"tree":return ES(n);case"pen":return AS(n);case"fac":return CS(n);case"helper":return RS(n);case"house":return PS();case"barn":return DS();case"board":return IS();case"decor":return kS(n);case"obstacle":return zS(n);case"loot":return VS(n);case"market":return LS(n);case"boat":return GS()}return{root:new Ut}}function Md(n,t){const[e,i]=ln(t);if(n.root.position.copy(rn(t.x,t.z,e,i)),t.k!=="decor")return;let s=!1;n.root.traverse(r=>{r.userData.sprite&&(s=!0,r.scale.x=Math.abs(r.scale.x)*((t.r||0)%2?-1:1)*(r.userData.flip||1))}),n.root.rotation.y=s?0:-(t.r||0)*Math.PI/2}function Qi(n){var e;const t=ul(n);return t.root.userData.oid=n.id,Md(t,n),jS(n)&&(t.root.visible=!1),B.farm.add(t.root),B.pickables.push(t.root),ue.set(n.id,t),(e=t.refresh)==null||e.call(t,It()),t}function mo(n){const t=ue.get(n);t&&(B.farm.remove(t.root),B.pickables.splice(B.pickables.indexOf(t.root),1),ue.delete(n))}function JS(n){return mo(n.id),Qi(n)}const mn={},Mp=-.55;function ZS(){const n=new Ut,t=rn(17+$t,Jt-1);if(Rn("pier")){const p=Mh("pier",{width:5.1,w:1.6,d:5.6,lift:Mp,shadow:!1});p.position.z=3.2,n.add(p)}else for(let p=0;p<3;p++){const v=pe("pirate/structure-platform-dock",{size:1.6});v.position.set(0,-.62,1.2+p*1.6),n.add(v)}const e=Vn("pirate/barrel",{size:.4},.5,.5);e.position.set(.5,.15,1.5),n.add(e);const i=Vn("pirate/crate",{size:.5},.5,.5);i.position.set(-.5,.15,2.4),n.add(i),n.position.set(t.x,0,t.z),n.userData.oid="ship",B.farm.add(n),B.pickables.push(n);const s=Kt("ship",1,1,{shadow:!1}),r=s||pe("pirate/ship-small",{h:3.2});s||(r.rotation.y=Math.PI);const o=new P(t.x+2.1,-.5,t.z+(s?5:4));r.position.copy(o),r.userData.oid="ship",B.farm.add(r),B.pickables.push(r),mn.ship=r,mn.shipHome=o,mn.dock=n;const a=new Ut,c=rn(Jt-1,9+$t);if(Rn("pier")){const p=Mh("pier",{width:4.2,w:4.35,d:1.5,lift:Mp,shadow:!1});p.userData.plane.scale.x=-1,a.add(p)}else for(let p=0;p<3;p++){const v=pe("pirate/structure-platform-dock-small",{size:1.5});v.rotation.y=Math.PI/2,v.position.set(-1.45+p*1.45,-.62,0),a.add(v)}const l=Vn("pirate/barrel",{size:.4},.5,.5);l.position.set(-1.3,.15,.45),l.userData.plane||a.add(l);const u=Vn("survival/bucket",{size:.3},.4,.4);u.position.set(.9,.15,-.4),a.add(u);const h=Vn("pirate/tool-paddle",{h:1.2});h.position.set(1.6,.15,.3),h.userData.plane||(h.rotation.z=-.6),a.add(h),a.position.set(c.x+3.6,0,c.z),a.userData.oid="pier",B.farm.add(a),B.pickables.push(a),mn.pier=a;const d=ns("maisie",Ke[0].model,{h:1.15});d.userData.isArt||ma(d,"maisie"),d.userData.oid="maisie";const f=rn(12+$t,8+$t);d.position.copy(f),d.userData.goal=f.clone(),d.userData.wait=2,B.farm.add(d),B.pickables.push(d),mn.maisie=d}function kg(n,t,e){const i=mn.maisie;if(!i){e==null||e();return}const s=i.userData,r=fa(),o=i.position;let a=null,c=1e9;for(const[u,h]of[[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){const d=n+u,f=t+h;if(d<0||f<0||d>=Jt||f>=Jt||r.has(d+","+f)||!Xn(d,f))continue;const p=rn(d,f),v=p.distanceTo(o)+(u&&h?.3:0);v<c&&(c=v,a=p)}const l=rn(n,t);if(!a){const u=o.clone().sub(l);u.y=0,u.length()<.001&&u.set(0,0,1),a=l.clone().add(u.setLength(.75))}s.job={goal:a,face:l,onArrive:e}}function QS(n,t){const e=mn.maisie;if(!e)return;const i=rn(n,t),s=e.userData;Li(e,i.x-e.position.x,i.z-e.position.z),s.wave=.3,s.wait=Math.max(s.wait||0,2.5)}function tE(n,t){var l,u;const e=mn.ship,i=_.ship.st==="away",s=mn.shipHome.clone();i&&(s.z+=30),e.position.lerp(s,Math.min(1,t*.6)),e.position.y=-.5+Math.sin(n*1.4)*.05,(e.userData.plane||e).rotation.z=Math.sin(n*1.1)*.03,e.visible=e.position.z<mn.shipHome.z+25;const r=mn.maisie,o=r.userData;(l=o.mixer)==null||l.update(t);const a=o.job;a&&o.goal.copy(a.goal);const c=o.goal.clone().sub(r.position);if(c.y=0,c.length()>.05)je(r,"walk"),c.setLength(Math.min(c.length(),t*(a?3:.9))),r.position.add(c),Li(r,c.x,c.z),o.isArt&&Dn(r,n,"walk");else if(a)o.job=null,o.wait=2.5,Li(r,a.face.x-r.position.x,a.face.z-r.position.z),(u=a.onArrive)==null||u.call(a);else if(o.isArt&&Dn(r,n,o.wave>0?"happy":"idle"),je(r,o.wave>0?"emote-yes":"idle"),o.wait-=t,o.wave=(o.wave||0)-t,o.wait<=0){for(let h=0;h<20;h++){const d=7+$t+Ee(13),f=3+$t+Ee(14);if(!_.objs.some(p=>{const[v,m]=ln(p);return d>=p.x&&d<p.x+v&&f>=p.z&&f<p.z+m})){o.goal.copy(rn(d,f));break}}o.wait=3+Math.random()*5}}function In(n){const t=typeof n=="string"?{root:mn[n]}:ue.get(n);t!=null&&t.root&&(t.root.userData.bounceT=performance.now())}function eE(n){const t=n.userData.bounceT;if(!t)return;const e=(performance.now()-t)/350;if(e>=1){n.scale.set(1,1,1),n.userData.bounceT=0;return}const i=Math.sin(e*Math.PI)*.12;n.scale.set(1+i*.5,1-i,1+i*.5)}function nE(){const n=[],t=e=>{var s;const i=ul(e);return(s=i.refresh)==null||s.call(i,It()),i.root};for(const e of Object.keys(sn))n.push(["fac:"+e,{obj:()=>t({k:"fac",t:e,jobs:[]}),rotY:.2}]);for(const e of Object.keys(Is))n.push(["helper:"+e,{obj:()=>t({k:"helper",t:e,lvl:0,bag:{}}),rotY:.2}]);for(const e of Object.keys(Ve))n.push(["pen:"+e,{obj:()=>t({k:"pen",t:e,animals:[{s:0,e:0},{s:0,e:0}]}),rotY:.2}]);n.push(["b:field",{obj:()=>t({k:"field",crop:"wheat",s:0,e:1}),rotY:.2}]);for(const e of Object.keys(Fi))n.push(["tree:"+e,{obj:()=>{const i=t({k:"tree",t:e,s:0,e:1});return i.children.filter(s=>s.isSprite).forEach(s=>s.visible=!1),i},rotY:.3}]);for(const[e,i]of Object.entries(qn))i.proc&&n.push(["decor:"+e,{obj:()=>Dg(i.proc),rotY:.3}]);return Ke.forEach(e=>n.push(["face:"+e.id,{model:e.model,rotY:.25,face:!0,extra:i=>ma(i,e.id)}])),n}const iE={maisie:{kind:"straw",band:16743096},tom:{kind:"straw",band:9132587},lily:{kind:"sun",band:16751312,color:16773577},ben:{kind:"cap",color:3837920},rosa:{kind:"sun",band:10120447,color:15983280},sam:{kind:"captain",color:16777215}};function ma(n,t){const e=iE[t];if(!e)return;const i=n.getObjectByName("head");if(!i)return;const s=new Ut,r=a=>new Le({color:a,roughness:.85}),o=(a,c,l,u,h)=>{const d=new Nt(new ks(a,c,l,20),r(u));return d.position.y=h,d.castShadow=!0,s.add(d),d};if(e.kind==="straw")o(.3,.3,.025,15385694,0),o(.15,.17,.13,15385694,.07),o(.172,.172,.035,e.band,.025);else if(e.kind==="sun"){o(.34,.34,.02,e.color,0),o(.15,.17,.11,e.color,.06),o(.172,.172,.03,e.band,.02);const a=new Nt(new jn(.05,10,8),r(16735631));a.position.set(.15,.05,.06),s.add(a)}else if(e.kind==="cap"){const a=new Nt(new jn(.17,18,10,0,Math.PI*2,0,Math.PI/2),r(e.color));s.add(a);const c=o(.16,.16,.02,e.color,0);c.scale.set(1,1,.6),c.position.z=.13}else if(e.kind==="captain"){o(.17,.16,.1,e.color,.05),o(.172,.172,.03,2047866,.015);const a=o(.12,.12,.015,2047866,0);a.scale.z=.7,a.position.z=.12}s.position.set(0,.3,0),i.add(s)}const vs=new Map,sE=-.12;let mu=null,ic=null,rE=null;const oE=new ri({colorWrite:!1,depthWrite:!1});function aE(){if(!ic){const e=new tl;for(let i=0;i<10;i++){const s=i%2?.15:.38,r=i*Math.PI/5;e[i?"lineTo":"moveTo"](Math.sin(r)*s,Math.cos(r)*s)}e.closePath(),ic=new nl(e,{depth:.05,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2}),ic.rotateX(-Math.PI/2)}const n=new Ut,t=new Nt(ic,Pg(16747084,{roughness:.6}));return t.castShadow=!0,t.rotation.x=.35,t.position.y=.06,n.add(t),n}function cE(){if(!mu){const e=new gd().load("/maisies-farm/items/shell.webp");e.colorSpace=Ie,mu=new uo({map:e,transparent:!0,alphaTest:.3})}const n=new eo(mu);n.center.set(.5,0),n.scale.set(.8,.8,1);const t=new Ut;return t.add(n),t}function lE(n){if(n==="crab"){const e=ns("crab","pets/animal-crab",{h:.42});return e.userData.isArt&&e.scale.setScalar(1.4),e}const t=Kt(n==="shell"?"beachshell":"starfish",1,1,{shadow:!1});return t||(n==="shell"?cE():aE())}function uE(n){const t=rn(n.x,n.z);return t.y=sE,t}function hE(n){const t=_.beach||[],e=new Set(t.map(i=>i.id));for(const[i,s]of vs)!e.has(i)&&!s.leaving&&(B.farm.remove(s.root),B.pickables.splice(B.pickables.indexOf(s.root),1),vs.delete(i));for(const i of t){if(vs.has(i.id)||!n[i.spot])continue;const s=new Ut,r=lE(i.t);s.add(r);const o=new Nt(rE||(rE=new jn(.6,8,6)),oE);o.position.y=.3,s.add(o);const a=Xr();a.position.y=.9,s.add(a),s.position.copy(uE(n[i.spot])),s.userData.oid="beach:"+i.id,s.scale.setScalar(.01),B.farm.add(s),B.pickables.push(s),vs.set(i.id,{root:s,body:r,st:a,kind:i.t,ph:i.id*1.7,t0:performance.now()})}}const wd=n=>{var t;return(t=vs.get(n))==null?void 0:t.root};function dE(n){const t=vs.get(n);t&&(t.leaving=performance.now(),B.pickables.splice(B.pickables.indexOf(t.root),1))}function fE(n){const t=performance.now();for(const[e,i]of vs){if(i.leaving){const r=(t-i.leaving)/380;if(r>=1){B.farm.remove(i.root),vs.delete(e);continue}i.root.scale.setScalar(1+r*.4-r*r*1.35),i.body.position.y=Math.sin(r*Math.PI)*.6;continue}const s=Math.min(1,(t-i.t0)/450);i.root.scale.setScalar(s<1?s*(1+Math.sin(s*Math.PI)*.25):1),i.st.position.y=.9+Math.sin(n*3+i.ph)*.08,i.kind==="crab"?(i.body.position.x=Math.sin(n*1.3+i.ph)*.18,i.body.userData.isArt&&Dn(i.body,n,"walk",i.ph)):i.kind==="starfish"&&!i.body.userData.plane?i.body.rotation.y=Math.sin(n*.8+i.ph)*.25:i.body.position.y=Math.abs(Math.sin(n*2+i.ph))*.05}}const _c=(n,[t,e])=>t+Math.floor(n()*(e-t+1)),pE=()=>Object.keys(Gt).filter(n=>Gt[n].mat===1);function mE(n=Math.random){const t=pE();return{energy:_c(n,[3,8]),coins:_c(n,[5,20]),mats:{[t[Math.min(t.length-1,Math.floor(n()*t.length))]]:_c(n,[2,4])}}}function gE(n,t=Math.random){const e=An[n.t];if(!e||_.energy<1||!_.objs.includes(n))return null;n.hp==null&&(n.hp=e.hp),_.energy-=1,n.hp-=1;const i={},s=(c,l)=>{i[c]=(i[c]||0)+l,We(c,l)};for(const[c,l]of Object.entries(e.drop))s(c,_c(t,l));for(const[c,l]of Object.entries(e.rare||{}))t()<l&&s(c,1);const r=n.hp<=0;let o=null,a=1;return r&&(_.objs.splice(_.objs.indexOf(n),1),a+=2,t()<e.chest&&(o=mE(t))),vn(a),{drops:i,xp:a,done:r,chest:o}}function vE(n){const t=_.objs.indexOf(n);if(t<0||!n.chest)return null;const{energy:e=0,coins:i=0,mats:s={}}=n.chest;_.objs.splice(t,1),_.energy+=e,_.coins+=i;for(const[r,o]of Object.entries(s))We(r,o);return on("loot"),{energy:e,coins:i,mats:s}}function _E(n,t){let e=null,i=1/0;for(const s of _.objs){if(s.k!=="obstacle"||!An[s.t]||!Xn(s.x,s.z)||!n(s))continue;const r=t(s);r<i&&(i=r,e=s)}return e}const xE=n=>["wood","stone","palmleaf"].some(t=>{var e;return(e=An[n.t])==null?void 0:e.drop[t]}),wp=180,yE=8;function bE(n,t=Math.random){if(_.regrowAt==null)return _.regrowAt=n+wp*1e3,null;if(n<_.regrowAt||(_.regrowAt=n+wp*1e3,_.objs.filter(f=>{var p;return f.k==="obstacle"&&((p=An[f.t])==null?void 0:p.regrow)&&Xn(f.x,f.z)}).length>=yE))return null;const i=fa(),s=new Set,r=new Set;for(const f of _.objs){if(f.k==="obstacle")continue;const[p,v]=ln(f);for(let m=-1;m<=p;m++)for(let g=-1;g<=v;g++)r.add(f.x+m+","+(f.z+g))}for(const f of _.visitors||[])s.add(f.x+","+f.z);s.add(17+$t+","+(Jt-1)),s.add(Jt-1+","+(9+$t));const o=[],a=[];for(let f=0;f<Jt;f++)for(let p=0;p<Jt;p++){const v=f+","+p;i.has(v)||s.has(v)||!Xn(f,p)||(r.has(v)?a:o).push([f,p])}const c=o.length?o:a;if(!c.length)return null;const[l,u]=c[Math.min(c.length-1,Math.floor(t()*c.length))],h=ko[Math.min(ko.length-1,Math.floor(t()*ko.length))],d={id:ro(),k:"obstacle",t:h,x:l,z:u,r:Math.floor(t()*4)%4,hp:An[h].hp};return _.objs.push(d),d}const sc=1.7,ME=14+$t,wE=17+$t,SE=9+$t,EE=n=>n>ME-2&&n<wE+5,TE=n=>Math.abs(n-SE)<=2;let gu=null;function Ng(){if(gu)return gu;const n=[],t=i=>Math.min(Jt-1,Math.max(0,Math.round(i))),e=(i,s)=>n.push({x:i,z:s,zone:_i(t(i),t(s))});for(let i=1;i<Jt-1;i+=2)EE(i)||e(i,Jt-1+sc),TE(i)||e(Jt-1+sc,i),e(i,-sc),e(-sc,i);return gu=n}function AE(n,t=Math.random){const e=_.beach||(_.beach=[]);if(_.beachAt==null)return _.beachAt=n+vl*1e3,null;if(n<_.beachAt)return null;const i=Ng(),s=new Set(e.map(u=>u.spot)),r=[];if(i.forEach((u,h)=>{var d;!s.has(h)&&((d=_.zones)!=null&&d[u.zone])&&r.push(h)}),e.length>=G0||!r.length)return _.beachAt=n+vl*1e3,null;_.beachAt+=vl*1e3;const o=t(),a=o<.15?"crab":o<.5?"shell":"starfish",c=r[Math.min(r.length-1,Math.floor(t()*r.length))],l={id:_.beachId=(_.beachId||0)+1,t:a,spot:c};return e.push(l),l}function CE(n){var r;const t=_.beach||[],e=t.findIndex(o=>o.id===n);if(e<0)return 0;const[i]=t.splice(e,1),s=((r=H0[i.t])==null?void 0:r.energy)||0;return _.energy+=s,on("beach"),s}function RE(n){let t=n*9301+49297;return()=>(t=t*16807%2147483647)/2147483647}function Ug(n){const t=RE(n.seed),e=X0[n.theme],i=[],s=Math.floor(n.w/2),r=(u,h)=>h*n.w+u;for(let u=0;u<n.h;u++)for(let h=0;h<n.w;h++){const d=(h-(n.w-1)/2)/(n.w/2),f=(u-(n.h-1)/2)/(n.h/2),p=d*d+f*f<1+t()*.28;i.push({x:h,z:u,k:p?"ob":"water"})}[[s,n.h-1],[s,n.h-2],[s-1,n.h-2],[s+1,n.h-2]].forEach(([u,h])=>{i[r(u,h)].k="open"});const a=i[r(s,1)];a.k="goal",[[s,0],[s-1,1],[s+1,1],[s,2]].forEach(([u,h])=>{i[r(u,h)].k==="water"&&(i[r(u,h)].k="ob")});const c=i.filter(u=>u.k==="ob"&&u.z>2&&u.z<n.h-3);for(let u=0;u<n.chests&&c.length;u++)c.splice(Math.floor(t()*c.length),1)[0].k="chest";const l=e.obstacles.reduce((u,h)=>u+h[3],0);return i.forEach(u=>{if(u.k!=="ob")return;let h=t()*l,d=0;for(;h>e.obstacles[d][3];)h-=e.obstacles[d][3],d++;u.t=d,u.e=e.obstacles[d][2],u.rot=t()*6.28;const f=t();u.loot=f<.35?{coins:3+Math.floor(t()*8)}:f<.55?{item:"crop"}:f<.67?{energy:3}:f<.71?{gems:1}:null,n.story&&(u.mat=e.obstacles[d][4]??null)}),n.story&&PE(n,i,r,s),{A:n,T:e,cells:i,idx:r,cx:s}}function PE(n,t,e,i){const s=(m,g)=>m>=0&&g>=0&&m<n.w&&g<n.h?t[e(m,g)]:null,r=[[i+1,n.h-1],[i-1,n.h-1],[i+2,n.h-2],[i-2,n.h-2],[i+1,n.h-3],[i-1,n.h-3]],o=r.map(([m,g])=>s(m,g)).find(m=>m&&m.k==="ob")||s(...r[0]);t[e(o.x,o.z)]={x:o.x,z:o.z,k:"npc"};const a=i,c=Math.floor(n.h/2),l=[];for(let m=-3;m<=3;m++)for(let g=-3;g<=3;g++)l.push([g,m]);l.sort((m,g)=>m[0]*m[0]+m[1]*m[1]-(g[0]*g[0]+g[1]*g[1])||m[1]-g[1]||m[0]-g[0]);const u=(m,g)=>{var M;return((M=s(m,g))==null?void 0:M.k)==="ob"};let h=null,d=2;for(const[m,g]of l){const M=a+m,b=c+g;if(u(M,b)&&u(M+1,b)&&u(M,b+1)&&u(M+1,b+1)){h=[M,b];break}}if(!h){d=1;for(const[m,g]of l)if(u(a+m,c+g)){h=[a+m,c+g];break}}const[f,p]=h,v=e(f,p);t[v]={x:f,z:p,k:"ruin",span:d},d===2&&[[1,0],[0,1],[1,1]].forEach(([m,g])=>{t[e(f+m,p+g)]={x:f+m,z:p+g,k:"ruinpart",main:v}})}const rc=2,DE=[[1,0],[-1,0],[0,1],[0,-1]];function go(n){var e,i;const t=(e=_.adv||(_.adv={}))[i=n.id]||(e[i]={open:[],chests:[],done:!1,runs:0});return n.story&&(t.q??(t.q=0),t.qp??(t.qp=0),t.prize??(t.prize=!1),t.ruin||(t.ruin={stage:0,got:{}})),t}const Lc=(n,t,e)=>{const i=n.cells[e];return i.k==="open"||t.open.includes(e)||i.k==="chest"&&t.chests.includes(e)},Sd=(n,t)=>DE.map(([e,i])=>[t.x+e,t.z+i]).filter(([e,i])=>e>=0&&i>=0&&e<n.A.w&&i<n.A.h).map(([e,i])=>n.idx(e,i)),Ed=(n,t)=>n.cells[t].k==="ruinpart"?n.cells[t].main:t,Og=(n,t)=>{const e=Ed(n,t);return n.cells[e].k==="ruin"?[e,...n.cells.map((i,s)=>i.k==="ruinpart"&&i.main===e?s:-1).filter(i=>i>=0)]:[t]};function ta(n,t,e){const i=Og(n,e);return i.some(s=>Sd(n,n.cells[s]).some(r=>!i.includes(r)&&n.cells[r].k!=="water"&&Lc(n,t,r)))}function IE(n,t){const e=new Set;if(!n.A.story||t.fog===!1)return e;const i=new Set;return n.cells.forEach((s,r)=>{if(Lc(n,t,r))for(let o=-rc;o<=rc;o++)for(let a=-(rc-Math.abs(o));a<=rc-Math.abs(o);a++){const c=s.x+a,l=s.z+o;c>=0&&l>=0&&c<n.A.w&&l<n.A.h&&i.add(n.idx(c,l))}}),n.cells.forEach((s,r)=>{s.k!=="water"&&!i.has(r)&&e.add(r)}),e}const LE=(n,t)=>{var e;return((e=t==null?void 0:t.obstacles[n.t])==null?void 0:e[0])==="art:jungletree"};function Fg(n,t){const e={};return n.mat&&(e[n.mat]=1),LE(n,t)&&(n.x+n.z)%3===0&&(e.liana=1),e}const Bg=n=>n.story.ruin.stages,Td=(n,t)=>t.ruin.stage>=Bg(n).length;function is(n,t){if(!n.story||Td(n,t))return null;const e=t.ruin.got||{};return Object.fromEntries(Object.entries(Bg(n)[t.ruin.stage]).map(([i,s])=>[i,{need:s,got:e[i]||0}]))}function kE(n,t,e){var r,o;const i=(r=is(n,t))==null?void 0:r[e];if(!i)return 0;const s=Math.min(Ft(e),i.need-i.got);return s<=0?0:(qc({[e]:s}),((o=t.ruin).got||(o.got={}))[e]=i.got+s,s)}function NE(n,t){const e=is(n,t);return!e||!Object.values(e).every(i=>i.got>=i.need)?null:(t.ruin.stage++,t.ruin.got={},Td(n,t)?(xc(n,"aruin"),"done"):"stage")}function UE(n,t,e){const{ev:i,n:s}=e.req;return i==="achest"?Math.min(s,t.chests.length):i==="aruin"?Td(n,t)?1:0:Math.min(s,t.qp||0)}const ga=(n,t)=>{var i;const e=(i=n.story)==null?void 0:i.steps[t.q];return e?{...e,i:t.q,got:UE(n,t,e)}:null},va=n=>n.story?ga(n,go(n)):null;function xc(n,t,e=1){if(!n.story)return;const i=go(n),s=ga(n,i);!s||s.req.ev!==t||((t==="aclear"||t==="agoal")&&(i.qp=Math.min(s.req.n,(i.qp||0)+e)),Ln("quest"))}function OE(n){if(!n.story)return null;const t=go(n),e=ga(n,t);return!e||e.got<e.req.n?null:(_.coins+=e.coins||0,_.gems+=e.gems||0,_.energy+=e.energy||0,vn(e.xp||0),t.q++,t.qp=0,Ln("quest"),e)}function FE(n,t){const e=n.cells.length,i=Array(e).fill(1/0),s=Array(e).fill(-1),r=[];for(n.cells.forEach((o,a)=>{Lc(n,t,a)&&(i[a]=0,r.push(a))});r.length;){const o=r.shift();for(const a of Sd(n,n.cells[o])){const c=n.cells[a].k;if(!(c==="ob"||c==="chest"||c==="open"))continue;const l=Lc(n,t,a)?0:1;i[o]+l<i[a]&&(i[a]=i[o]+l,s[a]=o,l?r.push(a):r.unshift(a))}}return{dist:i,par:s}}function Or(n,t,e){if(!e.length)return null;const{dist:i,par:s}=FE(n,t),r={x:n.cx,z:n.A.h-1};let o=null;for(const c of e){const l=new Set(c.cells);let u=-1,h=1/0;for(const p of c.cells)for(const v of Sd(n,n.cells[p]))!l.has(v)&&i[v]<h&&(h=i[v],u=v);if(u<0||h===1/0)continue;const d=n.cells[c.cells[0]],f=Math.abs(d.x-r.x)+Math.abs(d.z-r.z);(!o||h<o.d||h===o.d&&(f<o.far||f===o.far&&c.ret<o.t.ret))&&(o={t:c,d:h,nb:u,far:f})}if(!o)return null;if(ta(n,t,o.t.ret))return o.t.ret;let a=o.nb;for(;s[a]>=0&&i[s[a]]>0;)a=s[a];return a}function zg(n,t){const e=n.A;if(!e.story)return null;const i=ga(e,t),s=n.cells,r=h=>s.map((d,f)=>h(d,f)?{ret:f,cells:[f]}:null).filter(Boolean),o=(h,d)=>h.k==="ob"&&!t.open.includes(d),a=h=>s.findIndex(d=>d.k===h);if(i&&i.got>=i.req.n)return Or(n,t,r(h=>h.k==="npc"));if(!i)return null;const c=i.req.ev;if(c==="aclear")return Or(n,t,r(o));if(c==="achest")return Or(n,t,r((h,d)=>h.k==="chest"&&!t.chests.includes(d)));if(c==="agoal")return Or(n,t,r(h=>h.k==="goal"));const l=is(e,t);if(!l)return null;const u=Object.entries(l).filter(([h,d])=>Ft(h)<d.need-d.got).map(([h])=>h);if(!u.length){const h=a("ruin");return Or(n,t,[{ret:h,cells:Og(n,h)}])}return Or(n,t,r((h,d)=>o(h,d)&&Object.keys(Fg(h,n.T)).some(f=>u.includes(f))))}function BE(n,t){const e=n.A,i=e.story?ga(e,t):null;if(!i||i.got>=i.req.n||i.req.ev!=="aruin"||zg(n,t)!==null)return[];const s=is(e,t);return s?Object.entries(s).filter(([r,o])=>Ft(r)<o.need-o.got).map(([r])=>r):[]}function zE(n){if(!n.story)return{};const t=go(n);return t.prize?{}:(t.prize=!0,t.fog=!1,(_.pendingDecor||(_.pendingDecor=[])).push(n.story.prize),{prize:n.story.prize})}function VE(n){const t=go(n);return t.done?(Object.assign(t,{open:[],chests:[],done:!1}),t.runs++,!0):!1}const Sp=n=>_.level<n.lv?`Mở ở cấp ${n.lv}`:null;function Vg(n,t){return(n.at??0)>t?(n.at=t,!1):t-(n.at??0)>=sm.every*1e3}function HE(n,t){return Vg(n,t)?(n.at=t,sm.energy):0}function GE(n,t=[12+$t,9+$t]){const e={id:0,k:"decor",t:n,x:0,z:0,r:0},[i,s]=ln(e),r=$c(i,s,...t);return r?(e.id=ro(),e.x=r[0],e.z=r[1],_.objs.push(e),{obj:e}):((_.store||(_.store={}))[n]=(_.store[n]||0)+1,{stored:!0})}let Tn=null;const ea=[],_s=n=>document.querySelector(n);function Hg(){const[n,t]=Tn.lines[Tn.i],e=me["talk:"+n]||me["face:"+n],i=_s("#talkFace");e?(i.src=e,i.hidden=!1):(i.removeAttribute("src"),i.hidden=!0),i.classList.toggle("half",!!me["talk:"+n]),_s("#talkWho").textContent=Wc(n),_s("#talkTxt").textContent=t,_s("#talkNext").textContent=Tn.i+1<Tn.lines.length?"▶":"✓"}function kc(){var t;const n=Tn;n&&(Tn=null,_s("#talk").hidden=!0,(t=n.done)==null||t.call(n),!Tn&&ea.length&&hl(ea.shift()))}function Ep(){Tn&&(++Tn.i>=Tn.lines.length?kc():Hg())}let Tp=!1;function WE(){if(Tp)return;Tp=!0;const n=_s("#talk");n.addEventListener("click",t=>{t.stopPropagation(),t.target.closest("#talkSkip")?kc():Ep()}),n.addEventListener("pointerdown",t=>t.stopPropagation()),document.addEventListener("keydown",t=>{var e,i;Tn&&(t.key==="Escape"?(t.stopImmediatePropagation(),kc()):(t.key==="Enter"||t.key===" ")&&!((i=(e=t.target).closest)!=null&&i.call(e,"#talkSkip"))&&(t.preventDefault(),Ep()))},!0)}function hl(n,t){if(Tn){const e=ea.splice(0);kc(),ea.unshift(...e)}if(!n||!n.length){t==null||t();return}WE(),Tn={lines:n,i:0,done:t},_s("#talk").hidden=!1,Hg(),_s("#talkSkip").focus({preventScroll:!0})}function Gg(n){Tn?ea.push(n):hl(n)}const $E=()=>!!Tn;let Hn=null,ms=null,na=null;function Qn(){if(!Hn)try{Hn=new(window.AudioContext||window.webkitAudioContext)}catch{return}Hn.state==="suspended"&&Hn.resume(),_.music&&!na&&Wg()}function $e(n,t,{type:e="sine",vol:i=.12,at:s=0,to:r=null,dest:o=null}={}){const a=Hn.currentTime+s,c=Hn.createOscillator(),l=Hn.createGain();c.type=e,c.frequency.setValueAtTime(n,a),r&&c.frequency.exponentialRampToValueAtTime(r,a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l),l.connect(o||Hn.destination),c.start(a),c.stop(a+t+.05)}function W(n){if(!(!Hn||!_.sound))try{switch(n){case"tap":$e(700,.06,{type:"triangle",vol:.06});break;case"plant":$e(380,.08,{type:"triangle"}),$e(520,.1,{type:"triangle",at:.06});break;case"harvest":$e(520,.1,{to:900,type:"triangle"});break;case"coin":$e(988,.08,{type:"square",vol:.05}),$e(1319,.2,{type:"square",vol:.05,at:.07});break;case"collect":[660,880].forEach((t,e)=>$e(t,.1,{type:"triangle",at:e*.06}));break;case"build":[262,330,392].forEach((t,e)=>$e(t,.12,{type:"square",vol:.05,at:e*.07}));break;case"level":[523,659,784,1047,1319].forEach((t,e)=>$e(t,.25,{type:"triangle",vol:.14,at:e*.1}));break;case"no":$e(240,.18,{to:170,vol:.08});break;case"chop":$e(160,.1,{type:"square",vol:.06}),$e(120,.12,{type:"square",vol:.05,at:.12});break;case"ship":$e(196,.5,{type:"sawtooth",vol:.05}),$e(147,.6,{type:"sawtooth",vol:.05,at:.45});break;case"moo":$e(180,.35,{to:140,type:"sawtooth",vol:.04});break;case"cluck":$e(900,.05,{type:"square",vol:.03}),$e(1100,.05,{type:"square",vol:.03,at:.07});break}}catch{}}const Ap=[67,72,76,74,72,67,69,72,71,67,64,67,72,76,79,77,76,72,74,76,72,0,0,0],Cp=[48,48,53,53,55,55,48,48];function Wg(){if(!Hn||na)return;ms=Hn.createGain(),ms.gain.value=.35,ms.connect(Hn.destination);let n=0;const t=.32,e=i=>440*Math.pow(2,(i-69)/12);na=setInterval(()=>{if(!_.music||Hn.state!=="running")return;const i=Ap[n%Ap.length];i&&$e(e(i),t*.9,{type:"triangle",vol:.05,dest:ms}),n%3===0&&$e(e(Cp[Math.floor(n/3)%Cp.length]),t*2.5,{type:"sine",vol:.06,dest:ms}),n++},t*1e3)}function qE(){clearInterval(na),na=null,ms==null||ms.disconnect()}const XE=4,jE=2,YE=3;function Eh(){const n=wn(Ke).id,t=_.level,e=[],i=Object.entries(Be).filter(([,h])=>h.lv<=t).map(([h])=>h),s=wn(i),r=4+Ee(6);e.push({text:`Mình cần ${r} ${Gt[s].n.toLowerCase()} cho bữa tiệc. Bạn thu hoạch giúp nhé!`,ev:"harvest",key:s,n:r});const o=[];for(const h of _.objs)if(h.k==="fac"&&!h.site)for(const d of sn[h.t].rec)d.lv<=t&&!d.out.endsWith("feed")&&!Gt[d.out].mat&&o.push(d.out);if(o.length){const h=wn(o),d=1+Ee(3);e.push({text:`Làm giúp mình ${d} ${Gt[h].n.toLowerCase()} được không?`,ev:"make",key:h,n:d})}const a=_.objs.filter(h=>h.k==="pen"&&!h.site&&h.animals.length);if(a.length){const h=Ve[wn(a).t],d=3+Ee(4);e.push({text:`Thu ${d} ${Gt[h.prod].n.toLowerCase()} từ chuồng ${h.an.toLowerCase()} nhé!`,ev:"collect",key:h.prod,n:d})}const c=2+Ee(3);e.push({text:`Hôm nay nhiều người đặt hàng lắm. Giao ${c} đơn hàng nhé!`,ev:"deliver",n:c}),xm()&&e.push({text:"Dọn thêm 3 chướng ngại vật để đảo rộng hơn nào!",ev:"clear",n:3});const l=wn(e),u=l.key?{ev:l.ev,key:l.key,n:l.n}:{ev:l.ev,n:l.n};return{who:n,title:"Việc vặt",text:l.text,reqs:[u],coins:20+t*8,xp:6+t*2,gems:Math.random()<.3?1:0}}const vu=n=>{var t;return((t=Gt[n])==null?void 0:t.n)||n};function $g(n){var t,e,i;switch(n.ev){case"harvest":return"Thu hoạch "+vu(n.key);case"make":return"Làm "+vu(n.key);case"collect":return"Thu "+vu(n.key);case"build":{const[s,r]=(n.key||"").split(":");return s==="ruin"?"Sửa "+({house:"Nhà",bakery:"Lò bánh",boat:"Thuyền"}[r]||r):"Xây "+((s==="fac"?(t=sn[r])==null?void 0:t.n:s==="pen"?(e=Ve[r])==null?void 0:e.n:s==="gate"?(i=ar[r])==null?void 0:i.n:"")||r)}case"plant":return"Gieo hạt";case"feed":return"Cho thú ăn";case"deliver":return"Giao đơn hàng";case"clear":return"Dọn chướng ngại vật";case"crate":return"Đóng thùng hàng";case"buydecor":return"Mua đồ trang trí";case"buytree":return"Trồng cây";case"beach":return"Nhặt đồ ở bãi biển";case"sail":return"Ra khơi phiêu lưu"}return n.ev}const Ad=n=>om.find(t=>t.id===n),Rp=(n,t)=>Math.max(n.lv,t.lv||0);function ia(n){if(!n)return null;if(n.c)return Array.isArray(n.c.reqs)?n.c:null;if(typeof n.id!="string")return null;const[t,e]=n.id.split(":"),i=Ad(t);return(i==null?void 0:i.steps[+e])||null}function KE(){Array.isArray(_.qs)||(_.qs=[]),_.qs=_.qs.filter(n=>n&&typeof n=="object"&&ia(n));for(const n of _.qs)Array.isArray(n.p)||(n.p=[])}const Nc=(n,t)=>t.reqs.every((e,i)=>(n.p[i]||0)>=e.n),JE=n=>!n.p.some(t=>t>0);function qg(n,t){const e=n.c?null:Ad(n.id.split(":")[0]);return{id:n.id,arc:e?e.id:null,title:e?e.n:t.title,who:t.who,text:t.text,talk:t.talk||[[t.who,t.text]],outro:t.outro||[],reqs:t.reqs,p:n.p,coins:t.coins||0,xp:t.xp||0,gems:t.gems||0,energy:t.energy||0,seen:!!n.seen,done:Nc(n,t)}}function ir(){if(_.story||(_.story={}),_.choreN||(_.choreN=0),KE(),delete _.quest,delete _.gq,Gn())return[];const n=[];for(const i of _.qs){const s=ia(i);if(s){if(!i.c){const[r,o]=i.id.split(":"),a=Ad(r);if((_.story[r]||0)!==+o||_.level<Rp(a,s))continue}s.reqs.forEach((r,o)=>{var a;(a=i.p)[o]||(a[o]=0),r.ev==="build"&&Au(r.key)&&(i.p[o]=r.n)}),i.c&&!Nc(i,s)&&s.reqs[0].ev==="clear"&&!xm()&&(i.c=Eh(),i.id="chore:"+ ++_.choreN,i.p=i.c.reqs.map(()=>0),i.seen=!1),n.push(i)}}const t=i=>n.some(s=>s.id.split(":")[0]===i);let e=n.filter(i=>!i.c).length;for(const i of om){if(e>=YE)break;const s=_.story[i.id]||0,r=i.steps[s];if(!r||t(i.id)||_.level<Rp(i,r))continue;if(n.length>=XE){const a=n.findIndex(c=>c.c&&JE(c)&&!Nc(c,c.c));if(a<0)break;n.splice(a,1)}n.push({id:i.id+":"+s,p:r.reqs.map(()=>0),seen:!1}),e++;const o=n[n.length-1];r.reqs.forEach((a,c)=>{a.ev==="build"&&Au(a.key)&&(o.p[c]=a.n)})}for(;n.length<jE;){const i=Eh();n.push({id:"chore:"+ ++_.choreN,p:i.reqs.map(()=>0),seen:!1,c:i})}return _.qs=[...n.filter(i=>!i.c),...n.filter(i=>i.c)],_.qs.map(i=>qg(i,ia(i)))}function ZE(n){const t=(_.qs||[]).find(s=>s.id===n),e=t&&ia(t);if(!e||!Nc(t,e))return null;const i=qg(t,e);return _.qs=_.qs.filter(s=>s!==t),t.c||(_.story[i.arc]=(_.story[i.arc]||0)+1),_.coins+=i.coins,_.gems+=i.gems,_.energy+=i.energy,vn(i.xp),i}function QE(n){const t=(_.qs||[]).find(e=>e.id===n);t&&(t.seen=!0)}const Pp=n=>n.tasks.length>0&&n.tasks.every(t=>t.p>=t.n),Xg=()=>({coins:lc.coins(_.level),gems:lc.gems,energy:lc.energy}),jg=n=>{_.coins+=n.coins,_.gems+=n.gems,_.energy+=n.energy};function tT(){const n=[{ev:"plant",n:4},{ev:"beach",n:2}],t=[],e=new Set;_.objs.some(i=>i.k==="pen"&&!i.site)&&n.push({ev:"feed",n:2});for(let i=0;i<200&&t.length<lc.count;i++){let s;if(Ee(2)){const o=Eh().reqs[0];s={ev:o.ev,n:Math.max(1,Math.round(o.n/2))},o.key&&(s.key=o.key)}else s={...wn(n)};const r=s.ev+":"+(s.key||"");["loot","buyanimal"].includes(s.ev)||e.has(r)||(e.add(r),t.push({...s,p:0}))}return t}function sa(){const n=new Date().toDateString();return(!_.daily||!Array.isArray(_.daily.tasks)||!_.daily.tasks.every(t=>t&&typeof t.n=="number"))&&(_.daily=null),(!_.daily||_.daily.day!==n)&&(_.daily&&!_.daily.got&&Pp(_.daily)&&jg(Xg()),_.daily={day:n,tasks:tT(),got:!1}),{tasks:_.daily.tasks,got:!!_.daily.got,done:Pp(_.daily)}}function eT(){const n=sa();if(!n.done||n.got)return null;_.daily.got=!0;const t=Xg();return jg(t),t}cr("act",(n,t,e=1)=>{let i=!1;const s=sa();if(!s.got)for(const r of s.tasks)r.ev!==n||r.key&&r.key!==t||r.p>=r.n||(r.p=Math.min(r.n,r.p+e),i=!0);if(!Gn()){Array.isArray(_.qs)||ir();for(const r of _.qs){const o=ia(r);o&&(Array.isArray(r.p)||(r.p=[]),o.reqs.forEach((a,c)=>{a.ev!==n||a.key&&a.key!==t||(r.p[c]||0)>=a.n||(r.p[c]=Math.min(a.n,(r.p[c]||0)+e),i=!0)}))}}i&&Ln("quest")});const st=n=>document.querySelector(n),ye=n=>`<img src="${me[n]||""}" alt="">`,Qe='<span class="ico coin"></span>',kn='<span class="ico gem"></span>',Cs='<span class="ico bolt"></span>',mr='<span class="xp"></span>',Yt=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function wi(n){const t=Math.max(0,Math.ceil(n/1e3));if(t<60)return t+" giây";const e=Math.floor(t/60),i=t%60;return e<60?i?`${e} phút ${i} giây`:`${e} phút`:e<1440?`${Math.floor(e/60)} giờ ${e%60} phút`:`${Math.floor(e/1440)} ngày ${Math.floor(e%1440/60)} giờ`}const Dp=n=>n>=1e4?(n/1e3).toFixed(n>=1e5?0:1)+"k":String(n);let Ip;function ht(n){const t=st("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(Ip),Ip=setTimeout(()=>t.classList.remove("show"),2400)}function tn(n,t,e){const i=document.createElement("div");i.className="plus",i.textContent=e,i.style.left=n+"px",i.style.top=t+"px",st("#fx").appendChild(i),setTimeout(()=>i.remove(),1e3)}let Ro=null;function dl(n){const t=Object.keys(n||{}).filter(i=>n[i]>0);if(!t.length)return;if(!Ro){const i=document.createElement("div");i.className="gain",st("#fx").appendChild(i),Ro={el:i,sum:{}}}const e=Ro;for(const i of t)e.sum[i]=(e.sum[i]||0)+n[i];e.el.innerHTML=Object.entries(e.sum).map(([i,s])=>{var r;return`<span>+${s} ${ye(i)}${Yt(((r=Gt[i])==null?void 0:r.n)||i)}</span>`}).join(" "),e.el.classList.remove("bump"),e.el.offsetWidth,e.el.classList.add("bump"),clearTimeout(e.t),e.t=setTimeout(()=>{Ro===e&&(Ro=null),e.el.classList.add("out"),setTimeout(()=>e.el.remove(),400)},1200)}function Ui(n,t,e,i,s=0){const r=typeof e=="string"?st(e):e;if(!r)return;const o=r.getBoundingClientRect(),a=o.left+o.width/2,c=o.top+o.height/2,l=document.createElement("div");l.className="fly",l.innerHTML=i,l.style.transform=`translate(${n}px,${t}px)`,st("#fx").appendChild(l);const u=(n+a)/2+(Math.random()-.5)*80,h=Math.min(t,c)-80,d=l.animate([{transform:`translate(${n}px,${t}px) scale(.6)`},{transform:`translate(${u}px,${h}px) scale(1.15)`,offset:.4},{transform:`translate(${a}px,${c}px) scale(.7)`}],{duration:750,delay:s,easing:"cubic-bezier(.5,0,.5,1)",fill:"backwards"});d.onfinish=()=>{l.remove(),r.animate([{transform:"scale(1.18)"},{transform:"scale(1)"}],{duration:200})}}function Vi(n,t,e,i=1){nT(n,t);for(let s=0;s<Math.min(i,4);s++)Ui(n+s*8,t,"#btnBarn",ye(e),s*90)}const Lp=["#fff3a0","#ffd23f","#9be15d","#ffffff","#ffb3e0"];function nT(n,t,e=10){for(let i=0;i<e;i++){const s=document.createElement("i");s.className="spark";const r=i/e*6.283+Math.random()*.5,o=40+Math.random()*40,a=6+Math.random()*7;s.style.cssText=`width:${a}px;height:${a}px;background:${Lp[i%Lp.length]}`,st("#fx").appendChild(s),s.animate([{transform:`translate(${n}px,${t}px) scale(1)`,opacity:1},{transform:`translate(${n+Math.cos(r)*o}px,${t+Math.sin(r)*o-20}px) scale(.2)`,opacity:0}],{duration:550+Math.random()*250,easing:"cubic-bezier(.2,.7,.3,1)"}).onfinish=()=>s.remove()}}const gn=(n,t,e)=>{for(let i=0;i<Math.min(5,Math.ceil(e/10));i++)Ui(n,t,"#coinPill",Qe,i*80)},Oi=(n,t)=>Ui(n,t,"#gemPill",kn),Ns=(n,t)=>Ui(n,t,"#lvlBox",mr);function Yn(n=50){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=["#ff6b5b","#ffd23f","#3aa7e8","#62c43f","#ff8ad8","#a06cff"];for(let e=0;e<n;e++){const i=document.createElement("span");i.className="conf",i.style.left=Math.random()*100+"vw",i.style.background=t[e%t.length],i.style.animationDuration=1.6+Math.random()*1.6+"s",i.style.animationDelay=Math.random()*.4+"s",i.style.borderRadius=Math.random()<.5?"50%":"2px",st("#fx").appendChild(i),setTimeout(()=>i.remove(),4e3)}}let Vt=null;function Si(n,t,e,i={}){Vt={type:n,...i},st("#mTitle").textContent=t,st("#mBody").innerHTML=e,st("#modal").hidden=!1}function Yg(n){const t=st("#mBody"),e=t.scrollTop;t.innerHTML=n,t.scrollTop=e}function Xe(){Vt=null,st("#modal").hidden=!0}function ge(){st("#lv").textContent=_.level;const n=Su(_.level);st("#xpfill").style.width=_.xp/n*100+"%",st("#xptxt").textContent=`${_.xp}/${n}`,st("#coins").textContent=Dp(_.coins),st("#gems").textContent=Dp(_.gems);const t=ki(_.level);st("#energy").textContent=cv(_.energy,t),st("#efill").style.width=Math.min(100,_.energy/t*100)+"%",st("#energyPill").classList.toggle("low",_.energy<1),sT(),st("#btnGift").hidden=_.lastDaily===new Date().toDateString()}const iT=n=>me["face:"+n]?`<img src="${me["face:"+n]}" alt="">`:"";let kp="";function sT(){const n=so(),t=n?[]:ir(),e=[];if(n){const s=_.qprog>=n.n;e.push({id:"tut",who:n.who,badge:s?"✓":_.qprog===0?"!":"",ok:s})}else{for(const r of t)e.push({id:r.id,who:r.who,badge:r.done?"✓":r.seen?"":"!",ok:r.done});const s=sa();s.got||e.push({id:"daily",daily:s.tasks.filter(r=>r.p>=r.n).length+"/"+s.tasks.length,badge:s.done?"✓":"",ok:s.done})}const i=e.map(s=>[s.id,s.who,s.badge,s.daily].join("~")).join("|")+(n?_.tut:"");i!==kp&&(kp=i,st("#questCol").innerHTML=e.map((s,r)=>`<button class="qbtn ${s.daily?"qdaily":""}" id="qb${r}" data-q="${s.id}" aria-label="${s.daily?"Việc hằng ngày":"Nhiệm vụ"}">`+(s.daily?`<span>☀️</span><small>${s.daily}</small>`:iT(s.who))+(s.badge?`<span class="badge ${s.ok?"ok":""}">${s.badge}</span>`:"")+"</button>").join(""))}function rT(){return _.energy>=ki(_.level)?"Đầy năng lượng":`+1 sau ${wi(lv())}`}const ra=go;function Np(n){const t=Ug(n),e=ra(n),i=t.cells.filter(s=>s.k==="ob").length;return Math.round(Math.min(1,e.open.length/i)*100)}let F=null;const xs=(n,t,e)=>new P(t-n.A.w/2+.5,0,e-n.A.h/2+.5);function vo(n){return n.k==="open"||F.p.open.includes(F.map.idx(n.x,n.z))||n.k==="chest"&&F.p.chests.includes(F.map.idx(n.x,n.z))}function Th(n){const{map:t}=F;return[[1,0],[-1,0],[0,1],[0,-1]].some(([e,i])=>{const s=n.x+e,r=n.z+i;if(s<0||r<0||s>=t.A.w||r>=t.A.h)return!1;const o=t.cells[t.idx(s,r)];return o.k!=="water"&&vo(o)})}function oT(n){const t=Ug(n),e=ra(n),i=t.T,s=new Ut;if(F={A:n,map:t,p:e,group:s,views:new Map,rings:[],pick:[],fogSp:new Map,fades:[],fog:new Set,hint:null},n.story){const p=t.cells.findIndex(v=>v.k==="ruin");F.ruinMain=p,F.ruinCells=t.cells.map((v,m)=>(v.k==="ruin"||v.k==="ruinpart")&&Ed(t,m)===p?m:-1).filter(v=>v>=0)}const r=Zo(Math.max(n.w,n.h)+2,2.5,.8,new Le({color:i.edge,roughness:1}),-.15);r.scale.set((n.w+2)/(Math.max(n.w,n.h)+2),1,(n.h+2)/(Math.max(n.w,n.h)+2)),s.add(r);const o=new Nt(new pa(Jo(Math.max(n.w,n.h)+7,5),10),new Le({color:9168620,transparent:!0,opacity:.55}));o.rotation.x=-Math.PI/2,o.position.y=-.5,o.scale.set((n.w+7)/(Math.max(n.w,n.h)+7),(n.h+7)/(Math.max(n.w,n.h)+7),1),s.add(o);const a=new Ge(1,.3,1),c=new Le({color:i.ground,roughness:1}),l=new Le({color:i.ground2,roughness:1});F.tiles=new Map,t.cells.forEach((p,v)=>{if(p.k==="water")return;const m=new Nt(a,(p.x+p.z)%2?c:l);m.position.copy(xs(t,p.x,p.z)),m.position.y=-.15,m.receiveShadow=!0,s.add(m),F.tiles.set(v,m)});const u=Vn("pirate/boat-row-small",{size:1.8});u.position.copy(xs(t,t.cx,n.h)).add(new P(0,-.45,.8)),u.userData.plane||(u.rotation.y=Math.PI/2),u.userData.oid="a:boat",s.add(u),F.pick.push(u),F.boat=u;const h=new pd(.36,.5,28),d=new ri({color:16769126,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1});t.cells.forEach((p,v)=>{if(p.k==="water"||p.k==="open"||vo(p)||p.k==="ruinpart")return;let m;if(p.k==="npc")m=cT(n.story.who);else if(p.k==="ruin")m=Kg(n,p,!is(n,e));else if(p.k==="ob"){const[M,b]=i.obstacles[p.t];m=Vn(M,b),m.userData.plane||(m.rotation.y=p.rot)}else if(p.k==="chest")m=Vn("pirate/chest",{size:.7}),m.userData.plane||(m.rotation.y=-.6);else if(p.k==="goal"){m=new Ut;const M=new Nt(new ks(.48,.52,.12,24),new Le({color:16765503}));M.position.y=.06,m.add(M);const b=Vn(n.goal.model,n.goal.pet?{h:.75}:{size:.8},.6,.6);b.position.y=.12,m.add(b),m.userData.inner=b,e.done&&(m.visible=!1)}if(m.position.copy(xs(t,p.x,p.z)),p.k==="ruin"&&m.position.add(new P((p.span-1)/2,0,(p.span-1)/2)),m.userData.oid="a:"+v,s.add(m),F.pick.push(m),F.views.set(v,m),p.k==="npc"){m.userData.mark=Up(m);return}const g=new Nt(h,d);g.rotation.x=-Math.PI/2,g.position.copy(m.position),g.position.y=.04,g.visible=!1,g.renderOrder=5,p.k==="ruin"&&(g.userData.big=p.span),s.add(g),F.rings.push([v,g])});const f=ns("maisie","chars/character-female-a",{h:1.15});if(f.userData.isArt||ma(f,"maisie"),f.position.copy(xs(t,t.cx,n.h-1)),f.userData.goal=f.position.clone(),f.userData.oid="a:maisie",f.userData.isArt||(f.rotation.y=Math.PI),s.add(f),F.maisie=f,n.story){const p=ns(n.story.guide,"pets/animal-dog",{h:.5});p.position.copy(f.position).add(new P(-.85,0,.3)),p.userData.oid="a:guide",p.userData.mark=Up(p),s.add(p),F.pick.push(p),F.guide=p,Cd(!0)}return oa(),s}const aT={nina:["lily",16756890],otto:["tom",10274030],mia:["maisie",14266623]};function cT(n){let t=Rn(n)?Kt(n,.5,.5):null;if(!t){const[e,i]=aT[n]||["maisie",16777215];t=Kt(e,.5,.5),t&&t.userData.plane.material.color.set(i)}return t||(t=ns(null,"chars/character-female-a",{h:1.1})),t.userData.isArt=!!t.userData.plane,t.userData.npc=!0,t}function Kg(n,t,e){const i=n.story.ruin;return Vn("art:"+(e?i.fixed:i.sprite),{size:1.8},t.span,t.span)}function lT(){const{A:n,map:t}=F,e=F.ruinMain,i=F.views.get(e),s=Kg(n,t.cells[e],!0);s.position.copy(i.position),s.userData.oid=i.userData.oid,F.group.add(s),F.group.remove(i),F.pick.splice(F.pick.indexOf(i),1,s),F.views.set(e,s),Dd(s),oa(),Cd()}let _u=null;function Up(n){if(!_u){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d");s.fillStyle="#fff",s.beginPath(),s.arc(32,32,28,0,7),s.fill(),s.fillStyle="#ff7a2f",s.beginPath(),s.arc(32,32,23,0,7),s.fill(),s.fillStyle="#fff",s.font="900 38px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("!",32,35);const r=new Ls(i);r.colorSpace=Ie,_u=new uo({map:r,depthTest:!1,transparent:!0})}const t=new eo(_u),e=new Kn().setFromObject(n).max.y;return t.scale.set(.4,.4,1),t.renderOrder=6,t.visible=!1,t.raycast=()=>{},t.userData.y0=Math.max(.5,e)+.25,t.position.y=t.userData.y0,n.add(t),t}let uT=null;const hT=()=>uT||(uT=new uo({map:Lg(),transparent:!0,depthWrite:!1,opacity:.96,fog:!1}));function dT(n){const t=F.map.cells[n],e=xs(F.map,t.x,t.z),i=new eo(hT());i.position.set(e.x,.5+(t.x*7+t.z*13)%5*.06,e.z),i.scale.set(2.7,2.2,1),i.renderOrder=-1,i.raycast=()=>{},F.group.add(i),F.fogSp.set(n,i)}function fT(n,t){const e=F.fogSp.get(n);if(F.fogSp.delete(n),t){F.group.remove(e);return}e.material=e.material.clone(),F.fades.push({s:e,t0:performance.now()})}function Cd(n){if(!(F!=null&&F.A.story))return;const{map:t,p:e}=F,i=IE(t,e);F.fog=i;for(const s of i)F.fogSp.has(s)||dT(s);for(const s of[...F.fogSp.keys()])i.has(s)||fT(s,n);for(const[s,r]of F.views){const o=t.cells[s];r.userData.vanishing||vo(o)||(r.visible=!(o.k==="ruin"?F.ruinCells:[s]).every(a=>i.has(a)))}}const xu=new Map;function Ah(n){if(!xu.has(n)){const t=n.clone(),e=n.isMeshBasicMaterial?.3:.55;t.color=n.color.clone().multiplyScalar(e).lerp(new ie(4874872),.3),xu.set(n,t)}return xu.get(n)}function pT(n,t){n.userData.dim!==t&&(n.userData.dim=t,n.traverse(e=>{var i;e.isMesh&&((i=e.userData).baseMat||(i.baseMat=e.material),e.material=t?Array.isArray(e.userData.baseMat)?e.userData.baseMat.map(Ah):Ah(e.userData.baseMat):e.userData.baseMat)}))}function oa(){var n;for(const[t,e]of F.rings){const i=F.map.cells[t],s=F.views.get(t),r=s&&s.visible&&(i.k==="ruin"?ta(F.map,F.p,t):Th(i));e.visible=!!r,s&&(pT(s,!r&&i.k!=="goal"),s.userData.reach=!!r)}for(const[t,e]of F.tiles){const i=F.map.cells[t],s=vo(i)||Th(i)||i.k==="goal"||i.k==="npc"||(i.k==="ruin"||i.k==="ruinpart")&&ta(F.map,F.p,t);(n=e.userData).baseMat||(n.baseMat=e.material),e.material=s?e.userData.baseMat:Ah(e.userData.baseMat)}}let yc=null,Zs={};function mT(n,t){Zs=t;const e=Ec.find(i=>i.id===n);ra(e),VE(e),Xe(),yc={target:B.target.clone(),zoom:B.zoom,bounds:B.bounds},B.farm.visible=!1,B.adv=oT(e),B.scene.add(B.adv),B.advPick=F.pick,B.mode="adv",B.bounds={x0:-e.w/2,x1:e.w/2,z0:-e.h/2,z1:e.h/2+2},B.zoom=1.25,fr(xs(F.map,F.map.cx,e.h-3)),document.body.classList.add("in-adv"),Rs(),fl(),W("ship"),ht(e.intro)}function Rd(){var n;B.mode==="adv"&&(B.scene.remove(B.adv),B.adv.traverse(t=>{var e,i;t.geometry&&t.geometry!==void 0&&((i=(e=t.geometry).dispose)==null||i.call(e))}),B.adv=null,F=null,B.farm.visible=!0,B.mode="farm",B.bounds=yc.bounds,B.zoom=yc.zoom,B.target.copy(yc.target),dr(),document.body.classList.remove("in-adv"),st("#advHud").hidden=!0,(n=Zs.onLeave)==null||n.call(Zs),se())}function fl(){const{A:n,p:t}=F,e=F.map.cells.filter(r=>r.k==="chest").length,i=st("#advHud");i.hidden=!1,i.innerHTML=`<div class="advtitle"><b>${Yt(n.n)}</b><span>Rương ${t.chests.length}/${e} · ${t.done?"Đã tới đích!":Yt(n.goal.n)}</span></div>
    <button class="rbtn home" id="advHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>${n.story?gT():""}`,st("#advHome").onclick=()=>{W("tap"),Rd()};const s=st("#advClaim");s&&(s.onclick=r=>Pd(r.currentTarget))}const Ch=n=>me["face:"+n]?`<img src="${me["face:"+n]}" alt="">`:"",Jg=(n,t)=>`<div class="iqbar"><i style="width:${Math.round(n/t*100)}%"></i><span>${n}/${t}</span></div>`;function gT(){const{A:n}=F,t=va(n);if(!t)return`<div class="isleq ok">${Ch(n.story.who)}<div class="iq"><b>Xong hết việc ở đây rồi!</b></div></div>`;const e=t.got>=t.req.n;return`<div class="isleq ${e?"ok":""}">${Ch(t.who)}<div class="iq"><b>${Yt(t.text)}</b>${Jg(t.got,t.req.n)}
    ${e?'<button class="btn small orange" id="advClaim">Nhận thưởng!</button>':""}</div></div>`}const Rh=new Set;function Rs(){if(!(F!=null&&F.A.story))return;const{A:n,p:t}=F,e=va(n);F.hint=zg(F.map,t),Cd(),oa(),F.guide&&(F.guide.userData.mark.visible=F.hint!=null);const i=F.views.get(F.map.cells.findIndex(s=>s.k==="npc"));i&&(i.userData.mark.visible=!!e&&(e.got>=e.req.n||!Rh.has(n.id+":"+e.i))),st("#advHud")&&!st("#advHud").hidden&&fl()}function Pd(n){const{A:t}=F,e=OE(t);if(!e)return;const i=n==null?void 0:n.getBoundingClientRect(),s=i?i.left+i.width/2:innerWidth/2,r=i?i.top:innerHeight/2;(Vt==null?void 0:Vt.type)==="isleq"&&Xe(),Yn(24),W("level"),e.coins&&gn(s,r,e.coins),e.gems&&Oi(s,r),Ns(s,r),ht("Giỏi quá! Xong một việc rồi!"),ge(),Rs(),se(),e.outro&&Gg(e.outro)}function Op(){if(!F)return;const{A:n}=F,t=va(n),e=(t==null?void 0:t.who)||n.story.who;let i;if(!t)i='<p class="hint">Cảm ơn bé nhiều! Mình đã làm xong hết các việc ở đây.</p>';else{const r=t.got>=t.req.n;i=`<p class="hint iqtext">${Yt(t.text)}</p>${Jg(t.got,t.req.n)}
      <div class="reward" style="font-size:20px">${t.coins?`<span>${Qe}+${t.coins}</span>`:""}${t.xp?`<span>${mr}+${t.xp}</span>`:""}</div>
      ${r?'<button class="btn wide orange" id="iqClaim">Nhận thưởng!</button>':'<p class="hint">Chạm vào bạn thú dẫn đường để biết đi đâu nhé!</p>'}`}Si("isleq",Wc(e),`<div class="isleqp">${Ch(e)}<div>${i}</div></div>`);const s=st("#iqClaim");s&&(s.onclick=r=>Pd(r.currentTarget))}function Zg(){const{A:n,p:t}=F,e=n.story.ruin,i=is(n,t),s=e.stages.length,r=Eg(e.sprite),o=r?`<img class="sitepic" style="object-fit:contain" src="${r}" alt="">`:"";if(!i)return`<div class="sitehead">${o}</div><p class="hint">${Yt(e.n)} đã sửa xong rồi!</p>`;const a=Object.entries(i).map(([c,l])=>{const u=l.got>=l.need,h=Ft(c),d=Gt[c].n;return`<div class="mat ${u?"ok":"lack"}">${ye(c)}<b>${Yt(d)}</b><span class="q">${l.got}/${l.need}</span>
      ${u?'<span class="t">✓ Đủ rồi</span>':`<button class="btn small ${h?"":"gray"}" data-give="${c}">Góp</button>
      <small>${h?`Đang có ${h}`:`Dọn vật cản trên đảo để có ${Yt(d.toLowerCase())}`}</small>`}</div>`}).join("");return`<div class="sitehead">${o}<span class="stage">Giai đoạn ${t.ruin.stage+1}/${s}</span></div>
    <p class="hint">Góp đủ vật liệu để sửa ${Yt(Ph(e.n))} nhé!</p><div class="mats">${a}</div>`}const Ph=n=>n[0].toLowerCase()+n.slice(1);function Qg(){document.querySelectorAll("#mBody [data-give]").forEach(n=>n.onclick=()=>{const t=n.getBoundingClientRect();_T(n.dataset.give,t.left+t.width/2,t.top)})}function vT(){Si("isleruin",F.A.story.ruin.n,Zg()),Qg()}function _T(n,t,e){if(!F||(Vt==null?void 0:Vt.type)!=="isleruin")return;const{A:i,p:s}=F,r=i.story.ruin,o=s.ruin.stage,a=kE(i,s,n);if(!a){ht(`Chưa có ${Gt[n].n.toLowerCase()}. Dọn vật cản trên đảo để nhặt nhé!`),W("no");return}const c=F.views.get(F.ruinMain);c&&Io(c);const l=NE(i,s);if(ge(),se(),l==="done"){Xe(),Yn(),W("level"),ht(`${r.n} đã sửa xong!`),lT(),Rs();return}l==="stage"?(Yn(18),W("build"),ht(`Xong giai đoạn ${o+1}! Cố lên nào`)):(tn(t,e-24,"+"+a),W("tap")),Yg(Zg()),Qg(),Rs()}function xT(n){const{A:t}=F,e=va(t);Lo([n]),W("tap"),e&&e.got<e.req.n&&!Rh.has(t.id+":"+e.i)?(Rh.add(t.id+":"+e.i),Rs(),hl(e.talk,()=>Op())):Op()}function yT(){W("collect"),F.guide.userData.happy=performance.now()+1e3;const n=F.hint,t=n!=null&&F.views.get(n);if(!t){const e=BE(F.map,F.p);ht(e.length?`Về nhà chặt thêm ${e.map(i=>Gt[i].n.toLowerCase()).join(", ")} rồi quay lại nhé!`:"Bé làm xong hết rồi! Mình về nhà thôi.");return}ol(t.position),Dd(t)}function Fp(n,t){if(!F.fog.size)return!1;const e=Ic(n,t);if(!e)return!1;const{A:i}=F,s=new P(-Math.SQRT1_2,0,-Math.SQRT1_2);for(const r of[e,e.clone().add(s)]){const o=Math.floor(r.x+i.w/2),a=Math.floor(r.z+i.h/2);if(o>=0&&a>=0&&o<i.w&&a<i.h&&F.fog.has(F.map.idx(o,a)))return ht("Dọn đường tới gần để sương tan nhé!"),W("no"),!0}return!1}function bT(){const{map:n,maisie:t}=F;for(const e of[[-.55,.45],[-.3,.3],[0,0]]){const i=t.position.clone().add(new P(e[0],0,e[1])),s=Math.floor(i.x+n.A.w/2),r=Math.floor(i.z+n.A.h/2);if(s>=0&&r>=0&&s<n.A.w&&r<n.A.h&&vo(n.cells[n.idx(s,r)]))return i}return t.position.clone()}function Dd(n){n.userData.hopT=performance.now()}function MT(n,t){var a;if(!F)return;const i=(F.A.story&&F.hint!=null&&Ts(n,t,c=>c==="a:"+F.hint)==="a:"+F.hint?"a:"+F.hint:null)??Ts(n,t,F.A.story?wT:void 0);if(i==="a:boat"){Rd();return}if(i==="a:maisie"){je(F.maisie,"emote-yes"),F.maisie.userData.busy=1,W("collect");return}if(i==="a:guide"){yT();return}if(typeof i!="string"||!i.startsWith("a:")){F.A.story&&Fp(n,t);return}const s=F.A.story?Ed(F.map,+i.slice(2)):+i.slice(2),r=F.map.cells[s],o=F.views.get(s);if(!o||!o.visible){F.A.story&&Fp(n,t);return}if(!(o.userData.vanishing||r.k==="chest"&&F.p.chests.includes(s)||r.k==="ob"&&F.p.open.includes(s))){if(r.k==="npc"){xT(r);return}if(r.k==="ruin"){if(!ta(F.map,F.p,s)){ht("Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng."),W("no"),Io(o);return}Lo(F.ruinCells.map(c=>F.map.cells[c])),W("tap"),is(F.A,F.p)?vT():(ht(`${F.A.story.ruin.n} đã sửa xong rồi!`),Dd(o));return}if(!Th(r)){ht("Dọn đường tới đó trước nhé! Chọn chỗ có vòng vàng."),W("no"),Io(o);return}if(r.k==="ob"){if(_.energy<r.e){(a=Zs.openEnergy)==null||a.call(Zs);return}_.energy-=r.e,tn(n,t-30,`-${r.e}⚡`),Lo([r]),W("chop");const c=F;Bp(o,()=>{c.p.open.push(s),ET(r.loot,n,t),c.A.story&&(ST(c.map,r,n,t),xc(c.A,"aclear")),vn(1),F===c&&(oa(),Rs()),ge(),se()}),on("clear")}else if(r.k==="chest"){Lo([r]);const c=F;o.userData.mixer&&je(o,"open"),W("collect"),F.p.chests.push(s),Ln("act","chest"),F.A.story&&(xc(F.A,"achest"),Rs());const u=20+Ee(30),h=Math.random();_.coins+=u,gn(n,t,u),h<.4?(_.gems+=1+Ee(2),Oi(n,t)):h<.7&&(_.energy+=5,tn(n,t-60,"+5⚡")),setTimeout(()=>Bp(o,()=>{F===c&&oa()}),900),fl(),ge(),se()}else if(r.k==="goal"){const{A:c,p:l}=F;if(c.story){const u=va(c),h=c.story.ruin;if(is(c,l)){ht(`Sửa xong ${Ph(h.n)} trước nhé!`),W("no"),Io(o);return}if(u&&u.req.ev!=="agoal"){ht(`Làm xong việc của ${Ph(Wc(u.who))} trước nhé!`),W("no"),Io(o);return}xc(c,"agoal")}Lo([r]),TT(o)}}}function wT(n){if(typeof n!="string"||!n.startsWith("a:"))return!1;if(isNaN(+n.slice(2)))return!0;const t=+n.slice(2),e=F.map.cells[t],i=F.views.get(t);return!i||!i.visible||i.userData.vanishing?!1:e.k==="ruin"?!!is(F.A,F.p)&&ta(F.map,F.p,t):e.k==="chest"&&F.p.chests.includes(t)?!1:e.k==="npc"||!!i.userData.reach}function ST(n,t,e,i){const s=Fg(t,n.T);for(const[r,o]of Object.entries(s)){We(r,o);for(let a=0;a<Math.min(o,4);a++)Ui(e+a*8,i,"#advHome",ye(r),a*90)}dl(s)}function ET(n,t,e){if(n&&(n.coins&&(_.coins+=n.coins,gn(t,e,n.coins)),n.gems&&(_.gems+=n.gems,Oi(t,e)),n.energy&&(_.energy+=n.energy,tn(t,e-55,`+${n.energy}⚡`)),n.item&&lr()>0)){const i=Object.keys(Be).filter(r=>Be[r].lv<=_.level),s=i[Ee(i.length)];We(s,1),Vi(t,e,s,1)}}function TT(n,t,e){var l;const{A:i,p:s}=F;if(s.done)return;s.done=!0;const r=s.runs>0?.5:1,o={coins:Math.round(i.reward.coins*r),gems:Math.max(1,Math.round(i.reward.gems*r)),xp:Math.round(i.reward.xp*r)};_.coins+=o.coins,_.gems+=o.gems;const a=n.userData.inner;a!=null&&a.userData.mixer?je(a,"dance"):(l=a==null?void 0:a.userData.clips)!=null&&l.open&&je(a,"open");let c="";if(i.story){const u=zE(i);u.prize&&(c=`<p class="hint">${Yt(qn[u.prize].n)} sẽ về sống ở nông trại của bạn!</p>`),Rs()}else i.goal.pet&&s.runs===0&&((_.pendingDecor||(_.pendingDecor=[])).push(i.goal.pet),c=`<p class="hint">${Yt(qn[i.goal.pet].n)} sẽ về sống ở nông trại của bạn!</p>`);Yn(),W("level"),setTimeout(()=>{vn(o.xp),Si("advdone","Hoàn thành!",`<div class="celebrate"><div class="talk"><img src="${me["face:maisie"]}" alt=""><div class="say">Tuyệt vời! Bạn đã tới được <b>${Yt(i.goal.n)}</b> ở ${Yt(i.n)}!</div></div>
      <div class="reward" style="font-size:22px"><span>${Qe}+${o.coins}</span><span>${kn}+${o.gems}</span><span>${mr}+${o.xp}</span></div>${c}
      <button class="btn wide orange" id="advBack">Về nông trại</button></div>`);const u=(F==null?void 0:F.A)===i;st("#advBack").onclick=()=>{Xe(),(F==null?void 0:F.A)===i&&Rd()},u&&fl(),ge(),se(),i.story&&u&&Pd(null)},1200)}function Io(n){n.userData.bumpT=performance.now()}function Bp(n,t){n.userData.vanishing=!0;const e=performance.now(),i=1,s=()=>{const r=(performance.now()-e)/420;r<1?(n.scale.setScalar(i*(1-r)),n.userData.plane||(n.rotation.y+=.25),requestAnimationFrame(s)):(n.visible=!1,t==null||t())};setTimeout(s,250)}function Lo(n){const{map:t}=F;let e=null,i=1e9;for(const s of n)for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=s.x+r,c=s.z+o;if(a<0||c<0||a>=t.A.w||c>=t.A.h)continue;const l=t.cells[t.idx(a,c)];if(l.k==="water"||!vo(l))continue;const u=xs(t,a,c),h=u.distanceTo(F.maisie.position);h<i&&(i=h,e=u)}if(e){const s=n.reduce((r,o)=>r.add(xs(t,o.x,o.z)),new P).divideScalar(n.length);F.maisie.userData.goal.copy(e),F.maisie.userData.face=s}}function AT(n,t){var c,l,u,h,d;if(!F)return;const e=F.maisie,i=e.userData;(c=i.mixer)==null||c.update(t);const s=i.goal.clone().sub(e.position);if(s.y=0,s.length()>.05)je(e,"walk"),s.setLength(Math.min(s.length(),t*2.2)),e.position.add(s),Li(e,s.x,s.z),i.acted=!1;else if(i.face&&!i.acted){const f=i.face.clone().sub(e.position);Li(e,f.x,f.z),je(e,"interact-right"),i.acted=!0,i.idleAt=n+.8}else i.busy>0?i.busy-=t:(!i.idleAt||n>i.idleAt)&&je(e,"idle");for(const f of F.views.values()){(l=f.userData.mixer)==null||l.update(t),(h=(u=f.userData.inner)==null?void 0:u.userData.mixer)==null||h.update(t),(d=f.userData.inner)!=null&&d.userData.mixer&&!f.userData.inner.userData.cur&&je(f.userData.inner,"idle");const p=f.userData.bumpT;if(p){const v=(performance.now()-p)/300;f.position.x+=Math.sin(v*30)*.01*(1-v),v>1&&(f.userData.bumpT=0)}}const r=performance.now();for(const f of F.views.values()){f.userData.npc&&f.userData.plane&&Dn(f,n,"idle",.7);const p=f.userData.hopT;if(p){const m=(r-p)/1400;m<1?f.position.y=Math.abs(Math.sin(m*Math.PI*3))*.4*(1-m):(f.userData.hopT=0,f.position.y=0)}const v=f.userData.mark;v&&(v.position.y=v.userData.y0+Math.sin(n*5)*.05)}const o=F.guide;if(o){const f=bT().sub(o.position);f.y=0;const p=f.length();p>.1?(f.setLength(Math.min(p,t*(p>1.6?3.4:2.2))),o.position.add(f),Li(o,f.x,f.z),Dn(o,n,"walk",1.3)):Dn(o,n,o.userData.happy>r?"happy":"idle",1.3);const v=o.userData.mark;v.position.y=v.userData.y0+Math.sin(n*5)*.05}for(let f=F.fades.length-1;f>=0;f--){const p=F.fades[f],v=(r-p.t0)/800;v>=1?(F.group.remove(p.s),p.s.material.dispose(),F.fades.splice(f,1)):(p.s.material.opacity=.96*(1-v),p.s.position.y+=t*.5)}const a=.9+Math.sin(n*4)*.1;for(const[f,p]of F.rings)if(p.visible){p.scale.setScalar(a*(p.userData.big||1));const v=F.views.get(f);if(v&&!v.userData.vanishing){const m=1+Math.max(0,Math.sin(n*4+f))*.06;v.scale.set(m,2-m,m)}}F.boat.position.y=-.45+Math.sin(n*1.5)*.04}const yu=n=>n.story?me["face:"+n.story.who]:me[n.goal.pet?"decor:"+n.goal.pet:"decor:chest"],CT=(n,t,e)=>t.done?"Chơi lại":e?"Đi tiếp":"Ra khơi";function RT(n){const t=Ec.map(s=>{const r=Sp(s),o=ra(s),a=Np(s),c=!r&&o.done;return`<button class="cnode ${r?"lock":""} ${c?"done":""}" data-adv="${s.id}" style="left:${s.chart.x}%;top:${s.chart.y}%" aria-label="${Yt(s.n)}">
      <span class="cdisc"><img src="${yu(s)}" alt="">${r?'<i class="clk">🔒</i>':c?'<i class="cok">✓</i>':""}</span>
      <b>${Yt(s.n)}</b>${r?`<small>${Yt(r)}</small>`:`<span class="cbar"><i style="width:${c?100:a}%"></i></span>`}</button>`}).join("");Si("adventures","Hải đồ",`<div class="chart art" style="background-image:url(/maisies-farm/items/seachart.webp)">
    <i class="cwave" style="left:6%;top:6%"></i><i class="cwave" style="left:62%;top:6%"></i><i class="cwave" style="left:30%;top:35%"></i>
    <i class="cwave" style="left:70%;top:35%"></i><i class="cwave" style="left:8%;top:64%"></i><i class="cwave" style="left:86%;top:66%"></i>
    <i class="ccompass"></i>
    <div class="cpier"><span class="ico boat"></span><small>Nhà</small></div>
    ${t}<div class="ccard" id="chartCard" hidden></div></div>`);const i=st("#chartCard");document.querySelectorAll("[data-adv]").forEach(s=>s.onclick=()=>{const r=Ec.find(u=>u.id===s.dataset.adv),o=Sp(r),a=ra(r),c=Np(r);W(o?"no":"tap"),i.hidden=!1,i.classList.toggle("top",r.chart.y>55),i.innerHTML=o?`<img src="${yu(r)}" alt=""><div class="cinfo"><b>${Yt(r.n)}</b><p>${Yt(o)}</p></div>`:`<img src="${yu(r)}" alt=""><div class="cinfo"><b>${Yt(r.n)}</b><p>${Yt(r.intro)}</p>
         <small>${a.done?"Đã hoàn thành ✓":`Đã khám phá ${c}%`}</small></div>
         <button class="btn small blue" id="chartGo">${CT(r,a,c)}</button>`;const l=st("#chartGo");l&&(l.onclick=()=>mT(r.id,n))})}const Ps=new Map,t0=()=>rn(17+$t,Jt-1),PT={crop:["Bác đang nấu cơm, cháu bán cho bác {n} {item} nhé?","Nhà cô hết {item} rồi. Cháu có {n} {item} không?"],food:["Cháu ơi, bác thèm {item} quá! Cho bác mua {n} phần nhé?","Hôm nay sinh nhật con chú, chú cần {n} {item}!"],other:["Cháu có {n} {item} không? Bác trả giá cao lắm!","Mình đi ngang qua, mua {n} {item} được không bạn?"]};function DT(){for(let n=0;n<40;n++){const t=7+$t+Ee(12),e=5+$t+Ee(11);if(!(_.objs.some(s=>{const[r,o]=ln(s);return t>=s.x&&t<s.x+r&&e>=s.z&&e<s.z+o})||_.visitors.some(s=>s.x===t&&s.z===e)))return[t,e]}return[12+$t,8+$t]}function IT(){const n=new Set(_.visitors.map(h=>h.who)),t=Ke.slice(1).filter(h=>!n.has(h.id));if(!t.length)return;const e=wn(t).id,i=wn(jh()),s=Be[i]?2+Ee(3):1+Ee(2),r=Gt[i].v*s,[o,a]=DT(),c=Be[i]?"crop":Gt[i].v>=10?"food":"other",l=wn(PT[c]).replaceAll("{n}",s).replaceAll("{item}",Gt[i].n.toLowerCase()),u={id:_.visitId=(_.visitId||0)+1,who:e,item:i,n:s,x:o,z:a,text:l,coins:Math.round(r*2)+5,xp:Math.max(2,Math.round(r/2)),gems:Math.random()<.15?1:0,arrive:!0};_.visitors.push(u),e0(u)}function e0(n){const t=Ke.find(s=>s.id===n.who),e=ns(n.who,t.model,{h:1.15});e.userData.isArt||ma(e,n.who),e.userData.oid="v:"+n.id;const i=rn(n.x,n.z);e.position.copy(n.arrive?t0():i),e.userData.goal=i.clone(),B.farm.add(e),B.pickables.push(e),Ps.set(n.id,e)}function LT(n){const t=Ps.get(n);t&&(B.farm.remove(t),B.pickables.splice(B.pickables.indexOf(t),1),Ps.delete(n))}function kT(){_.visitors||(_.visitors=[]),_.visitors.forEach(n=>{n.arrive=!1,e0(n)}),_.visitNext||(_.visitNext=It()+2e4)}function NT(){const n=It();_.level>=2&&_.visitors.length<2&&n>=_.visitNext&&(IT(),_.visitNext=n+45e3+Ee(45e3))}function UT(n,t){var e;for(const[i,s]of Ps){const r=s.userData;(e=r.mixer)==null||e.update(t);const o=r.goal.clone().sub(s.position);o.y=0,o.length()>.05?(je(s,"walk"),o.setLength(Math.min(o.length(),t*1.1)),s.position.add(o),Li(s,o.x,o.z),r.isArt&&Dn(s,n,"walk",i)):r.leaving?LT(i):(je(s,r.happy>0?"emote-yes":"idle"),r.happy=(r.happy||0)-t,r.isArt?Dn(s,n,r.happy>0?"happy":"idle",i):s.rotation.y+=(.6-s.rotation.y)*t*2)}}function OT(){return _.visitors.filter(n=>Ps.has(n.id)&&!Ps.get(n.id).userData.leaving).map(n=>({oid:"v:"+n.id,y:1.35,icon:n.item,n:n.n,cls:Ft(n.item)>=n.n?"":"hungry"}))}const FT=n=>Ps.get(+String(n).slice(2));function zp(n,t){const e=Ps.get(n.id);_.visitors.splice(_.visitors.indexOf(n),1),e&&(e.userData.happy=t?1.2:0,setTimeout(()=>{e.userData.leaving=!0,e.userData.goal.copy(t0())},t?1200:200)),se()}function BT(n){const t=_.visitors.find(s=>"v:"+s.id===n);if(!t)return;const e=Ke.find(s=>s.id===t.who),i=Ft(t.item)>=t.n;W("tap"),Si("visitor",e.n,`<div class="talk"><img src="${me["face:"+t.who]}" alt=""><div class="say">${Yt(t.text)}</div></div>
    <div class="need" style="margin:14px 0 8px"><span class="${i?"ok":"lack"}">${ye(t.item)}${Math.min(Ft(t.item),t.n)}/${t.n}</span></div>
    <div class="reward" style="font-size:18px"><span>Trả:</span><span>${Qe}${t.coins}</span><span>${mr}${t.xp}</span>${t.gems?`<span>${kn}${t.gems}</span>`:""}</div>
    <div class="row" style="justify-content:center;margin-top:14px;gap:10px">
      <button class="btn gray" id="vNo">Hết hàng rồi</button>
      <button class="btn ${i?"orange":"gray"}" id="vYes">Bán cho ${Yt(e.n.split(" ").pop())}</button></div>`),st("#vNo").onclick=()=>{Xe(),zp(t,!1),ht(`${e.n} sẽ quay lại sau nhé!`)},st("#vYes").onclick=s=>{if(Ft(t.item)<t.n){ht(`Cần thêm ${t.n-Ft(t.item)} ${Gt[t.item].n.toLowerCase()}`),W("no");return}We(t.item,-t.n),_.coins+=t.coins,_.gems+=t.gems,vn(t.xp),gn(s.clientX,s.clientY,t.coins),Ns(s.clientX,s.clientY),t.gems&&Oi(s.clientX,s.clientY),W("coin"),Xe(),zp(t,!0),on("deliver"),Ln("act","visitor"),ge()}}const zT=6,_a=()=>_.objs.find(n=>n.k==="market");function VT(n){if(_a())return;const t=$c(2,2,6+$t,12+$t);if(!t)return;const e={id:ro(),k:"market",t:"market",x:t[0],z:t[1],r:0,slots:[null,null,null,null],cap:4};_.objs.push(e),n==null||n(e)}function HT(){const n=_a();if(!n)return;const t=It();let e=!1;for(const i of n.slots)i&&!i.sold&&t>=i.buyAt&&(i.sold=!0,i.buyer=wn(Ke.slice(1)).id,e=!0);e&&(Vt==null?void 0:Vt.type)==="market"&&js<0&&!de&&yn(n)}const Vp=()=>{var n;return(((n=_a())==null?void 0:n.slots)||[]).filter(t=>t&&t.sold).length};function Dh(n,t){const e=_a();let i=0;return e.slots=e.slots.map(s=>s&&s.sold?(i+=s.price,null):s),i?(_.coins+=i,gn(n,t,i),W("coin"),Ln("act","deliver"),se(),ge(),!0):!1}let js=-1,de=null;function GT(){const n=_a();n&&(js=-1,de=null,yn(n))}function yn(n){const t=It();let e;if(de){const o=Gt[de.item],a=Math.min(10,Ft(de.item));e=`<div class="celebrate"><img src="${me[de.item]}" alt="" style="width:90px;height:90px"><b style="font-size:20px">${Yt(o.n)}</b>
      <div class="row" style="gap:12px"><button class="btn small blue" id="qm">−</button><b style="font-size:22px;min-width:60px">×${de.n}</b><button class="btn small blue" id="qp">+</button></div>
      <div class="row" style="gap:12px"><button class="btn small" id="pm">−</button><b style="font-size:22px;min-width:90px">${Qe}${de.price}</b><button class="btn small" id="pp">+</button></div>
      <p class="hint">Giá vừa phải thì khách tới mua nhanh hơn.</p>
      <div class="row" style="gap:10px"><button class="btn gray" id="dBack">Quay lại</button><button class="btn orange" id="dOk">Bày lên sạp</button></div></div>`,st("#mBody").innerHTML=e;const c=()=>Math.round(o.v*de.n*1.4);st("#qm").onclick=()=>{de.n=Math.max(1,de.n-1),de.price=c(),yn(n)},st("#qp").onclick=()=>{de.n=Math.min(a,de.n+1),de.price=c(),yn(n)},st("#pm").onclick=()=>{de.price=Math.max(1,de.price-Math.max(1,Math.round(o.v/2))),yn(n)},st("#pp").onclick=()=>{de.price+=Math.max(1,Math.round(o.v/2)),yn(n)},st("#dBack").onclick=()=>{de=null,yn(n)},st("#dOk").onclick=()=>{if(Ft(de.item)<de.n){ht("Kho không đủ hàng");return}We(de.item,-de.n);const l=de.price/(o.v*de.n);n.slots[js]={item:de.item,n:de.n,price:de.price,buyAt:t+(20+Ee(40))*1e3*Math.max(.6,l),sold:!1},W("build"),de=null,js=-1,se(),ge(),yn(n)};return}if(js>=0){const o=Object.keys(Gt).filter(a=>Ft(a)>0);e=o.length?`<p class="hint">Chọn món muốn bán</p><div class="inv">${o.map(a=>`<button class="it" data-mi="${a}">${ye(a)}<span class="q">${Ft(a)}</span><small>${Yt(Gt[a].n)}</small></button>`).join("")}</div>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn gray" id="mBack">Quay lại</button></div>`:'<p class="hint">Kho trống, chưa có gì để bán.</p>',st("#mBody").innerHTML=e,document.querySelectorAll("[data-mi]").forEach(a=>a.onclick=()=>{const c=a.dataset.mi;de={item:c,n:Math.min(Ft(c),WT(c)?5:1),price:0},de.price=Math.round(Gt[c].v*de.n*1.4),yn(n)}),st("#mBack")&&(st("#mBack").onclick=()=>{js=-1,yn(n)});return}const i=n.slots.map((o,a)=>o?o.sold?`<button class="slot mk done" data-mc="${a}"><img src="${me["face:"+o.buyer]}" alt=""><span class="t">Đã bán ${Qe.replace("ico coin","ico coin sm")}${o.price}</span></button>`:`<div class="slot mk"><img src="${me[o.item]}" alt=""><span class="t">×${o.n} · ${o.price} xu</span><span class="bar"><i data-s="${o.buyAt-6e4}" data-e="${o.buyAt}"></i></span><button class="mkx" data-mx="${a}" aria-label="Cất lại vào kho">✕</button></div>`:`<button class="slot mk" data-ms="${a}"><span style="font-size:30px;color:var(--ink-soft)">＋</span><span class="t">Bày hàng</span></button>`).join(""),s=n.cap<zT?`<button class="slot buy" id="mMore">Thêm sạp<span>${kn}${(n.cap-3)*4}</span></button>`:"",r=n.slots.filter(o=>o&&o.sold).length;Si("market","Quầy chợ",`<p class="hint">Bày nông sản lên sạp, khách đi ngang sẽ mua. Chạm vào sạp đã bán để thu xu.</p>
    <div class="queue">${i}${s}</div>
    ${r?`<button class="btn wide orange" id="mCollect" style="margin-top:14px">Thu ${r} sạp đã bán</button>`:""}`),document.querySelectorAll("[data-ms]").forEach(o=>o.onclick=()=>{js=+o.dataset.ms,yn(n)}),document.querySelectorAll("[data-mc]").forEach(o=>o.onclick=a=>{Dh(a.clientX,a.clientY),yn(n)}),document.querySelectorAll("[data-mx]").forEach(o=>o.onclick=()=>{const a=+o.dataset.mx,c=n.slots[a];We(c.item,c.n),n.slots[a]=null,W("tap"),se(),yn(n)}),st("#mCollect")&&(st("#mCollect").onclick=o=>{Dh(o.clientX,o.clientY),yn(n)}),st("#mMore")&&(st("#mMore").onclick=()=>{const o=(n.cap-3)*4;if(_.gems<o){ht(`Cần ${o} kim cương`),W("no");return}_.gems-=o,n.cap++,n.slots.push(null),W("build"),se(),ge(),yn(n)})}const WT=n=>Gt[n].v<=6,Uc=[{id:"tom",farm:"Trang trại Gió Mát",lv:8,seed:3},{id:"lily",farm:"Vườn Hoa Biển",lv:6,seed:7},{id:"ben",farm:"Nông trại Nắng Vàng",lv:10,seed:13},{id:"rosa",farm:"Nhà Vườn Bà Rosa",lv:14,seed:19},{id:"sam",farm:"Bến Cá Chú Sam",lv:5,seed:29}],Id=5,Hp=(Jt-vi)/2,oc=(n,t,e,i)=>rn(n+Hp,t+Hp,e,i),Oc=()=>new Date().toDateString();function pl(){return(!_.nb||_.nb.day!==Oc())&&(_.nb={day:Oc(),help:{},done:{},gift:{}}),_.nb}function $T(n){let t=n*7919+17;return()=>(t=t*16807%2147483647)/2147483647}function qT(n){const t=$T(n.seed),e=It(),i=[];let s=1;const r=c=>i.push({id:"n"+s++,r:0,...c});r({k:"house",t:"house",x:11,z:4}),r({k:"barn",t:"barn",x:15,z:5});const o=Object.keys(Be).filter(c=>Be[c].lv<=n.lv);for(let c=0;c<9;c++){const l=o[Math.floor(t()*o.length)],u=Be[l].t*1e3,h=e+u*(.3+t()*.7)*20;r({k:"field",t:"field",x:7+c%3,z:8+Math.floor(c/3),crop:l,s:h-u*20*(1+t()),e:h})}r({k:"pen",t:"coop",x:12,z:8,animals:[0,1,2].map(()=>({s:e,e:e+9e8}))}),r({k:"pen",t:n.lv>=7?"beehive":"cowpen",x:16,z:8,animals:[0,1].map(()=>({s:e,e:e+9e8}))}),r({k:"fac",t:"feedmill",x:11,z:13,jobs:[{r:0,s:e,e:e+9e8}]}),r({k:"fac",t:n.lv>=9?"sweets":"bakery",x:14,z:13,jobs:[]}),[["palm",7,13],["apple",8,14],["orange",6,15],["banana",18,13]].forEach(([c,l,u])=>r({k:"tree",t:c,x:l,z:u,s:e-1e5,e:e+(t()<.5?-1:9e8)}));const a=["flower_red","flower_yel","flower_pur","bush","palmdeco","lantern","bench","barrel","mushroomdeco","hedge","campfire","dog","cat"];for(let c=0;c<16;c++){const l=4+Math.floor(t()*18),u=3+Math.floor(t()*16);i.some(h=>l>=h.x-1&&l<=h.x+3&&u>=h.z-1&&u<=h.z+3)||r({k:"decor",t:a[Math.floor(t()*a.length)],x:l,z:u})}return i}let Oe=null,Ih=null;const XT=n=>({house:[3,3],pen:[3,3],fac:[2,2],barn:[2,2]})[n.k]||[1,1];function jT(n,t){const e=Uc.find(u=>u.id===n),i=qT(e);Xe();const s=new Ut,r=[],o=[];s.add(Zo(vi+4.4,3,.8,B.sandMat,-.12)),s.add(Zo(vi+.4,1.6,.5,B.ground.material,0)),i.forEach(u=>{var p;const h=ul(u);(p=h.refresh)==null||p.call(h,It());const[d,f]=XT(u);h.root.position.copy(oc(u.x,u.z,d,f)),h.root.userData.oid=u.id,s.add(h.root),o.push(h.root),r.push([u,h])});const a=Ke.find(u=>u.id===n),c=ns(n,a.model,{h:1.15});c.userData.isArt||(ma(c,n),c.rotation.y=.7),c.position.copy(oc(12,7)),c.userData.oid="host",s.add(c),o.push(c);const l=Vn("pirate/chest",{size:.6});l.position.copy(oc(10,6)),l.userData.oid="gift",pl().gift[n]||(s.add(l),o.push(l)),Ih={target:B.target.clone(),zoom:B.zoom},B.farm.visible=!1,B.scene.add(s),B.adv=s,B.advPick=o,B.mode="nb",Oe={N:e,objs:i,views:r,g:s,host:c,gift:l},fr(oc(12,10)),document.body.classList.add("in-adv"),n0(),W("ship"),ht(`Chào mừng tới ${e.farm}!`)}function YT(){B.mode==="nb"&&(B.scene.remove(Oe.g),B.adv=null,Oe=null,B.farm.visible=!0,B.mode="farm",B.zoom=Ih.zoom,B.target.copy(Ih.target),dr(),document.body.classList.remove("in-adv"),st("#advHud").hidden=!0,se(),ge())}function Lh(){return Id-(pl().help[Oe.N.id]||0)}function n0(){const n=Ke.find(e=>e.id===Oe.N.id),t=st("#advHud");t.hidden=!1,t.innerHTML=`<div class="advtitle"><b>${Yt(Oe.N.farm)}</b><span>${Yt(n.n)} · cấp ${Oe.N.lv} · Giúp đỡ còn ${Lh()}/${Id} lượt</span></div>
    <button class="rbtn home" id="nbHome" aria-label="Về nông trại"><span class="ico boat"></span><small>Về nhà</small></button>`,st("#nbHome").onclick=()=>{W("tap"),YT()}}function KT(n,t){var d;if(!Oe)return;const e=Ts(n,t);if(!e)return;const i=pl(),s=Oe.N.id;if(e==="host"){je(Oe.host,"emote-yes"),W("collect"),ht(`${Ke.find(f=>f.id===s).n}: Cảm ơn cháu đã ghé chơi!`);return}if(e==="gift"){i.gift[s]=!0,Oe.g.remove(Oe.gift);const f=10+Ee(20);_.coins+=f,gn(n,t,f),Math.random()<.3&&(_.gems+=1,Oi(n,t)),W("collect"),se(),ge();return}const r=Oe.views.find(([f])=>f.id===e);if(!r)return;const[o,a]=r,c=(d=i.done)[s]||(d[s]=[]);if(!(o.k==="field"||o.k==="pen"||o.k==="tree"||o.k==="fac")){a.root.userData.bumpT=performance.now();return}if(c.includes(o.id)){ht("Chỗ này bạn giúp rồi!");return}if(Lh()<=0){ht("Hôm nay đã giúp đủ 5 lượt rồi. Mai quay lại nhé!"),W("no");return}i.help[s]=(i.help[s]||0)+1,c.push(o.id);const u=o.k==="field"?"Tưới nước":o.k==="pen"?"Cho thú ăn":o.k==="tree"?"Bắt sâu":"Lau máy";tn(n,t-40,u+"!");const h=3+Ee(5);if(_.coins+=h,gn(n,t,h),vn(1),Ns(n,t),Math.random()<.12&&(_.gems+=1,Oi(n,t)),Math.random()<.25&&lr()>0){const f=Object.keys(Be).filter(v=>Be[v].lv<=_.level),p=f[Ee(f.length)];We(p,1),Vi(n,t,p,1)}Ln("act","help"),JT(a.root.position),W("harvest"),n0(),se(),ge(),Lh()===0&&setTimeout(()=>ht(`Đã giúp đủ! ${Ke.find(f=>f.id===s).n} rất vui đó.`),800)}function JT(n){const t=new Nt(new jn(.5,12,8),new ri({color:9168639,transparent:!0,opacity:.6,depthWrite:!1}));t.position.copy(n),t.position.y=.4,Oe.g.add(t);const e=performance.now(),i=Oe.g,s=()=>{const r=(performance.now()-e)/600;if(r>=1){i.remove(t);return}t.scale.setScalar(1+r*1.5),t.material.opacity=.6*(1-r),requestAnimationFrame(s)};s()}function ZT(n,t){var e,i;if(Oe){for(const[,s]of Oe.views)(e=s.update)==null||e.call(s,n,t);(i=Oe.host.userData.mixer)==null||i.update(t),Oe.host.userData.isArt?Dn(Oe.host,n,"idle"):Oe.host.userData.cur||je(Oe.host,"idle")}}function QT(n){const t=pl(),e=Uc.map(i=>{const s=Ke.find(o=>o.id===i.id),r=Id-(t.help[i.id]||0);return`<div class="card"><img src="${me["face:"+i.id]}" alt="" style="border-radius:50%;background:var(--cream-d)"><b>${Yt(i.farm)}</b>
      <small>${Yt(s.n)} · cấp ${i.lv}</small><small>${r?`Còn ${r} lượt giúp`:"Đã giúp hôm nay ✓"}${t.gift[i.id]?"":" · có quà 🎁"}</small>
      <button class="btn small blue" data-nb="${i.id}">Ghé thăm</button></div>`}).join("");Si("neighbors","Hàng xóm",`<p class="hint">Ghé thăm hàng xóm, giúp tưới cây và cho thú ăn 5 lượt mỗi ngày để nhận xu, sao và quà.</p><div class="grid">${e}</div>`),document.querySelectorAll("[data-nb]").forEach(i=>i.onclick=()=>jT(i.dataset.nb))}function tA(){if(_.level<2||_.nbHelped===Oc())return;_.nbHelped=Oc();const n=It(),t=_.objs.filter(s=>s.k==="field"&&s.crop&&s.e>n);if(!t.length)return;const e=Uc[Ee(Uc.length)],i=Math.min(3,t.length);t.slice(0,i).forEach(s=>{s.e=n}),setTimeout(()=>ht(`${Ke.find(s=>s.id===e.id).n} đã sang tưới giúp ${i} ô ruộng của bạn!`),2500)}const eA=[["fish",58],["bigfish",20],["coins",12],["boot",10]];let gi="idle",bu=0,zn=null;function nA(n){gi="idle",zn=null,Si("fish","Cầu câu cá",`<div class="pond" id="pond">
      <span class="swim s1">${ye("fish")}</span><span class="swim s2">${ye("bigfish")}</span><span class="swim s3">${ye("fish")}</span>
      <div id="pondScene"></div></div>
    <button class="btn wide orange" id="fishBtn" style="margin-top:12px"></button>
    <p class="hint" style="margin-top:8px">Mỗi lần thả câu tốn 1 năng lượng. Phao chìm thì bấm <b>Kéo lên!</b> thật nhanh.</p>`),Bo(),st("#fishBtn").onclick=()=>Gp(n),st("#pond").onclick=()=>Gp(n)}function Bo(){if(!Vt||Vt.type!=="fish")return;const n=st("#pondScene"),t=st("#fishBtn");if(gi==="idle")n.innerHTML='<span class="rod">🎣</span>',t.textContent="Thả câu",t.className="btn wide orange";else if(gi==="wait")n.innerHTML='<span class="line"></span><span class="bobber"></span>',t.textContent="Đang chờ cá cắn câu…",t.className="btn wide gray";else if(gi==="bite")n.innerHTML='<span class="line"></span><span class="ripple"></span><span class="bobber bite"></span><span class="bang">❗</span>',t.textContent="Kéo lên!",t.className="btn wide hot";else if(gi==="got"){const e=zn==="boot"?'<span class="caught">👢</span>':zn==="coins"?`<span class="caught">${Qe}</span>`:`<span class="caught">${ye(zn)}</span>`;n.innerHTML=e,t.textContent=zn==="boot"?"Ôi, chiếc ủng cũ! Câu tiếp":zn==="coins"?"Câu được túi xu! Câu tiếp":`Câu được ${Gt[zn].n.toLowerCase()}! Câu tiếp`,t.className="btn wide orange"}else n.innerHTML='<span class="rod">💦</span>',t.textContent="Cá chạy mất rồi! Thử lại",t.className="btn wide orange"}function Gp(n){var t;if(clearTimeout(bu),gi==="wait"){ht("Chờ phao chìm rồi mới kéo nhé!");return}if(gi==="bite"){iA();return}if(_.energy<1){Xe(),(t=n.openEnergy)==null||t.call(n);return}if(lr()<=0){ht("Kho đầy rồi!"),W("no");return}_.energy-=1,ge(),gi="wait",W("plant"),Bo(),bu=setTimeout(()=>{gi="bite",W("cluck"),Bo(),bu=setTimeout(()=>{gi="miss",Bo()},1900)},1400+Ee(2600))}function iA(){let n=Ee(100);zn=eA.find(([,s])=>(n-=s)<0)[0];const t=st("#fishBtn").getBoundingClientRect(),e=t.left+t.width/2,i=t.top;if(zn==="boot")_.coins+=2;else if(zn==="coins"){const s=8+Ee(12);_.coins+=s,gn(e,i,s)}else We(zn,1),Vi(e,i,zn,1);vn(1),Ln("act","harvest",zn,1),gi="got",W("collect"),Bo(),se(),ge()}let Ld=null;function un(n,t,e,i){Si(n,t,e,i),Ld=i&&i.sig!==void 0?Vt:null}const bn=n=>_.objs.find(t=>t.id===n),kd=n=>{var t;return typeof n=="number"&&((t=bn(n))==null?void 0:t.k)==="field"},ze=n=>Gt[n].n,Nd=n=>Math.max(1,Math.ceil(n/12e4));function i0(n,t){if(Qn(),B.mode==="adv"){MT(n,t),ge();return}if(B.mode==="nb"){KT(n,t),ge();return}if(le){const i=Ic(n,t);i&&m0(i);return}const e=Ts(n,t,sr==="seed"?kd:null);if(or(),e==null){if(sr==="seed"){rr();return}const i=Ic(n,t),[s,r]=i?Mg(i):[-1,-1],o=_i(s,r);o&&!Xn(s,r)&&Ud(o);return}s0(e,n,t)}function Ud(n){const t=mm(n);t&&(ht(`Sửa ${ar[t.t].n.toLowerCase()} để mở ${la(t.t).n} nhé!`),W("tap"),ol(rn(t.x,t.z,...ln(t))),In(t.id))}function s0(n,t,e){if(n==="ship")return In("dock"),EA();if(n==="maisie")return mn.maisie.userData.wave=1.5,Bc();if(typeof n=="string"&&n.startsWith("v:"))return BT(n);if(typeof n=="string"&&n.startsWith("beach:"))return MA(+n.slice(6));if(n==="pier")return In("pier"),W("tap"),nA({openEnergy:xa});const i=bn(n);if(i){if(!ua(i))return Ud(_i(i.x,i.z));if(In(n),i.site)return W("tap"),fA(i);switch(i.k){case"field":return rA(i,t,e);case"tree":return aA(i,t,e);case"pen":return cA(i,t,e);case"fac":return lA(i,t,e);case"helper":return mA(i,t,e);case"board":return W("tap"),wA();case"market":if(Dh(t,e)){ue.get(i.id).refresh();return}return W("tap"),GT();case"barn":return W("tap"),h0();case"house":return W("tap"),Bc();case"obstacle":return xA(i);case"loot":return bA(i);case"gate":return W("tap"),ht(`${ar[i.t].n} dẫn tới ${la(i.t).n}`);case"boat":return M0();case"decor":{const s=qn[i.t];if(i.t==="lotuspond")return sA(i,t,e);if(s.pet){const r=ue.get(i.id).root.children[0];r.userData.dance=!0,r.userData.wait=2.5,r.userData.goal.copy(r.position),W("collect")}else W("tap"),ht(`${s.n} · giữ lâu để di chuyển`)}}}}function sA(n,t,e){const i=HE(n,It());if(!i){W("tap"),ht("Sen đang nở, lát nữa quay lại nhé!");return}_.energy+=i,W("collect");for(let s=0;s<Math.min(i,4);s++)Ui(t,e,"#energyPill",Cs,s*80);tn(t,e-30,`+${i}⚡`),Vc.sig=null,ge(),se()}function rA(n,t,e){const i=pr(n,It());if(i===3)return r0(n,t,e);if(i<0){if(sr==="seed"&&_.seed){jr=n,Od(n,_.seed);return}oA(n);return}v0(n)}function r0(n,t,e){var r;if(lr()<2)return ml(),!1;const i=n.crop,s=Be[i];return We(i,2),vn(s.xp),n.crop=null,(r=ue.get(n.id))==null||r.refresh(It()),Vi(t,e,i,2),tn(t,e-30,"+2"),W("harvest"),on("harvest",i,2),!0}function Od(n,t,e){var r;const i=Be[t];if(_.level<i.lv)return ht(`${ze(t)} mở ở cấp ${i.lv}`),!1;if(_.coins<i.cost)return e||(ht("Không đủ xu để mua hạt giống"),W("no")),!1;_.coins-=i.cost;const s=It();return n.crop=t,n.s=s,n.e=s+i.t*1e3,(r=ue.get(n.id))==null||r.refresh(s),W("plant"),on("plant"),!0}let Wp=0;function ml(){It()-Wp>3e3&&(ht("Kho đầy rồi! Vào Kho để nâng cấp hoặc bán bớt nhé"),W("no"),Wp=It())}let sr=null,jr=null;function oA(n){sr="seed",jr=n,o0()}function o0(){const n=Object.entries(Be).map(([e,i])=>{const s=_.level<i.lv;return`<button class="seed ${_.seed===e?"on":""} ${s?"lock":""}" data-act="seed" data-k="${e}" aria-label="${ze(e)}">
      ${s?`<span class="lk">Cấp ${i.lv}</span>`:""}${ye(e)}<small>${Qe}${i.cost}</small></button>`}).join(""),t=st("#tray");t.className="",t.innerHTML=`<div class="seeds">${n}</div><button class="traybtn no" data-act="closetray" aria-label="Đóng">✕</button>`,t.hidden=!1}function rr(){sr=null,jr=null,st("#tray").hidden=!0}function aA(n,t,e){const i=Fi[n.t],s=It();if(s<n.e)return v0(n);if(lr()<i.qty)return ml();We(i.yield,i.qty),vn(i.xp),n.s=s,n.e=s+i.t*1e3,ue.get(n.id).refresh(s),Vi(t,e,i.yield,i.qty),tn(t,e-30,"+"+i.qty),W("harvest"),on("harvest",i.yield,i.qty)}function cA(n,t,e){const i=Ve[n.t],s=It(),r=n.animals.filter(a=>a.e&&s>=a.e);if(r.length){const a=Math.min(r.length,lr());if(a<=0)return ml();r.slice(0,a).forEach(c=>{c.e=0,c.s=0}),We(i.prod,a),vn(i.xp*a),Vi(t,e,i.prod,a),tn(t,e-30,"+"+a),W(n.t==="cowpen"?"moo":"cluck"),on("collect",i.prod,a),ue.get(n.id).refresh(s);return}const o=n.animals.filter(a=>!a.e);if(o.length){const a=Math.min(o.length,Ft(i.feed));if(a<=0)return $p(n);o.slice(0,a).forEach(c=>{c.s=s,c.e=s+i.t*1e3}),We(i.feed,-a),tn(t,e-30,`🍽 ×${a}`),W(n.t==="cowpen"?"moo":"cluck"),on("feed"),a<o.length&&ht(`Còn ${o.length-a} bạn ${i.an.toLowerCase()} chưa được ăn. Làm thêm ${ze(i.feed).toLowerCase()} nhé!`);return}$p(n)}function $p(n){const t=Ve[n.t];ke=()=>{const e=It(),i=n.animals.map((r,o)=>{const a=r.e?e>=r.e?"Có "+ze(t.prod).toLowerCase():"Còn "+wi(r.e-e):"Đói bụng";return`<div class="it">${ye("animal:"+n.t)}<small>${t.an} ${o+1}<br>${a}</small></div>`}).join(""),s=n.animals.length<t.max;return`<p class="hint">Cho ăn bằng <img class="inl" src="${me[t.feed]}" alt=""> ${ze(t.feed)} (đang có ${Ft(t.feed)}). Làm ở Máy xay thức ăn.</p>
      <div class="inv">${i}</div>
      <div class="row" style="justify-content:center;margin-top:14px">
        ${s?`<button class="btn" data-act="buyanimal" data-oid="${n.id}">Mua thêm ${t.an.toLowerCase()} ${Qe}${t.animalCost}</button>`:`<span class="hint">Chuồng đã đầy (${t.max}/${t.max})</span>`}
      </div>`},Ae=()=>n.animals.map(e=>e.e?It()>=e.e?"r":"p":"h").join()+n.animals.length,un("pen",t.n,ke(),{sig:Ae()})}function lA(n,t,e){a0(n,t,e)||uA(n)}function a0(n,t,e){const i=It(),s=sn[n.t],r=n.jobs.filter(a=>i>=a.e);if(!r.length)return!1;let o=0;for(const a of r){const c=s.rec[a.r],l=c.qty||1;if(lr()<l){ml();break}We(c.out,l),vn(Math.max(1,Math.round(Gt[c.out].v/6))),n.jobs.splice(n.jobs.indexOf(a),1),Vi(t,e,c.out,l),on("make",c.out,l),o++}return o&&(tn(t,e-30,"+"+o),W("collect"),ue.get(n.id).refresh(i)),o>0}function uA(n){const t=sn[n.t];ke=()=>{const e=It(),i=n.slots||2,s=t.rec.map((a,c)=>{const l=_.level<a.lv,u=Object.entries(a.in).map(([h,d])=>`<span class="${Ft(h)>=d?"ok":"lack"}">${ye(h)}${Ft(h)}/${d}</span>`).join("");return`<div class="recipe ${l?"lock":""}">
        <img class="out" src="${me[a.out]}" alt=""><b>${ze(a.out)}${a.qty>1?" ×"+a.qty:""}</b>
        ${l?`<span class="t">Mở ở cấp ${a.lv}</span>`:`<div class="need">${u}</div><span class="t">⏱ ${wi(a.t*1e3)}</span>
        <button class="btn small ${Ss(a.in)?"":"gray"}" data-act="make" data-oid="${n.id}" data-i="${c}">Làm</button>`}
      </div>`}).join(""),r=[];for(let a=0;a<i;a++){const c=n.jobs[a];if(!c){r.push('<div class="slot"></div>');continue}const l=t.rec[c.r],u=e>=c.e,h=!u&&e>=c.s;r.push(`<button class="slot ${u?"done":""}" data-act="${u?"collectfac":h?"speedjob":""}" data-oid="${n.id}">
        ${ye(l.out)}${h?`<span class="t" data-rt="${c.e}">${wi(c.e-e)}</span><span class="bar"><i data-s="${c.s}" data-e="${c.e}"></i></span>`:u?'<span class="t">Xong!</span>':'<span class="t">Đang chờ</span>'}
      </button>`)}i<4&&r.push(`<button class="slot buy" data-act="buyslot" data-oid="${n.id}">Thêm chỗ<span>${kn}${i*3}</span></button>`);const o=n.jobs.find(a=>e<a.e&&e>=a.s);return`<div class="recipes">${s}</div><h3 class="sub">Hàng chờ</h3><div class="queue">${r.join("")}</div>
      ${o?'<p class="hint" style="margin-top:12px">Chạm vào món đang làm để xong ngay bằng <span class="ico gem sm"></span></p>':""}`},Ae=()=>n.jobs.map(e=>(It()>=e.e?"d":It()>=e.s?"r":"w")+e.r).join()+(n.slots||2)+JSON.stringify(_.inv)+_.level,un("fac",t.n,ke(),{sig:Ae(),oid:n.id})}function hA(n,t,e,i){const s=sn[n.t],r=s.rec[t],o=n.slots||2;if(_.level<r.lv)return;if(n.jobs.length>=o){ht("Hàng chờ đầy rồi. Chờ xong món trước nhé!"),W("no");return}if(!Ss(r.in)){const u=Object.entries(r.in).filter(([h,d])=>Ft(h)<d).map(([h,d])=>`${d-Ft(h)} ${ze(h).toLowerCase()}`);ht("Còn thiếu "+u.join(", ")),W("no");return}qc(r.in);const a=It(),c=n.jobs.length?n.jobs[n.jobs.length-1].e:a,l=Math.max(a,c);n.jobs.push({r:t,s:l,e:l+r.t*1e3}),W("build"),ue.get(n.id).refresh(a),qe()}const dA=n=>n[0].toLowerCase()+n.slice(1);function bc(n){var t;return n.k==="house"?"Nhà của Maisie":n.k==="boat"?"Thuyền nhỏ":n.k==="fac"?sn[n.t].n:n.k==="pen"?Ve[n.t].n:n.k==="helper"?Is[n.t].n:n.k==="gate"?((t=ar[n.t])==null?void 0:t.n)||"Cổng":"Công trình"}function fA(n){rr(),or(),ke=()=>{if(!n.site)return'<p class="hint">Đã xây xong!</p>';const t=da(n),e=$h(n),i=ws(n),s=me[n.k+":"+n.t]||n.k==="boat"&&me["decor:boat"],r=s?`<img class="sitepic" src="${s}" alt="">`:"",o=Object.entries(t).map(([c,l])=>{const u=l.got>=l.need,h=Ft(c);return`<div class="mat ${u?"ok":"lack"}">${ye(c)}<b>${ze(c)}</b><span class="q">${l.got}/${l.need}</span>
        ${u?'<span class="t">✓ Đủ rồi</span>':i?`<small>${Yt(Go(c))}</small>`:`<button class="btn small ${h?"":"gray"}" data-act="give" data-oid="${n.id}" data-k="${c}">Góp</button>
             <small>${h?`Đang có ${h}`:Yt(Go(c))}</small>`}</div>`}).join(""),a=n.k==="gate"?`sửa ${bc(n).toLowerCase()}, mở ${la(n.t).n}`:`${n.site.ruin?"sửa":"xây"} ${dA(bc(n))}`;return`<div class="sitehead">${r}<span class="stage">Giai đoạn ${n.site.stage+1}/${e}</span></div>
      ${i?`<p class="hint lockmsg">🔒 Mở ở cấp ${i}</p>`:""}
      <p class="hint">Góp đủ vật liệu để ${Yt(a)} nhé!</p><div class="mats">${o}</div>`},Ae=()=>JSON.stringify(n.site||null)+JSON.stringify(_.inv)+_.level,un("site",bc(n),ke(),{sig:Ae(),oid:n.id})}function pA(n,t,e,i){if(!(n!=null&&n.site))return;const s=ev(n,t);if(ws(n)){ht(`Mở ở cấp ${ws(n)}`),W("no");return}if(!s){const c=Go(t);ht(`Chưa có ${ze(t).toLowerCase()}.${c?" "+c+" nhé!":""}`),W("no");return}In(n.id);const r=n.site.stage,o=n.site.ruin,a=nv(n);if(a==="none"){tn(e,i-24,"+"+s),W("tap"),qe();return}if(Yn(18),Ns(e,i),tn(e,i-50,`+${10*(r+1)} xp`),JS(n),In(n.id),se(),a==="stage"){W("build"),ht(`Xong giai đoạn ${r+1}! Cố lên nào`),qe();return}W("level"),Xe(),ht(`${bc(n)} đã ${o?"sửa":"xây"} xong!`),fr(ue.get(n.id).root.position)}function mA(n,t,e){if(bd(n,It()),nr(n))return c0(n,t,e);W("tap"),gA(n)}function c0(n,t,e){var s;const i=_S(n);if(!Object.keys(i).length)return!1;for(const[r,o]of Object.entries(i))Vi(t,e,r,o);return tn(t,e-30,"+"+Object.values(i).reduce((r,o)=>r+o,0)),dl(i),W("collect"),(s=ue.get(n.id))==null||s.refresh(It()),se(),!0}function gA(n){const t=Is[n.t];ke=()=>{bd(n,It());const e=nr(n),i=cl(n),s=yd(n),r=Object.entries(n.bag||{}).map(([c,l])=>`<span class="hbag">${ye(c)}<b>${l}</b></span>`).join("")||"<small>Túi đang rỗng</small>",o=wh(n)?"Túi đầy rồi!":`Món tiếp theo sau <span data-rt="${n.at+t.every*1e3}">${wi(n.at+t.every*1e3-It())}</span>`,a=s?`<p class="hint">Nâng cấp để túi chứa ${t.cap[(n.lvl||0)+1]} món:</p><div class="mats">${Object.entries(s).map(([c,l])=>`<div class="mat ${Ft(c)>=l?"ok":"lack"}">${ye(c)}<b>${ze(c)}</b><span class="q">${Math.min(Ft(c),l)}/${l}</span>${Ft(c)>=l?"":`<small>${Yt(Go(c))}</small>`}</div>`).join("")}</div><div class="hbtns"><button class="btn ${Object.entries(s).every(([c,l])=>Ft(c)>=l)?"":"gray"}" data-act="helperup" data-oid="${n.id}">Nâng cấp</button></div>`:'<p class="hint">Đã nâng cấp tối đa!</p>';return`<p class="hint">Cấp ${(n.lvl||0)+1} · Túi ${e}/${i}</p><div class="hbags">${r}</div>
      <p class="hint">${o}</p>
      ${e?`<div class="hbtns"><button class="btn" data-act="helpertake" data-oid="${n.id}">Nhận hết</button></div>`:""}${a}`},Ae=()=>JSON.stringify([n.bag,n.lvl])+JSON.stringify(_.inv),un("helper",t.n,ke(),{sig:Ae(),oid:n.id})}function vA(n,t,e){var i;if(n){if(!xS(n)){const s=yd(n)||{},r=Object.keys(s).find(o=>Ft(o)<s[o]);ht(r?`Chưa đủ ${ze(r).toLowerCase()}. ${Go(r)}`:"Đã nâng cấp tối đa!"),W("no");return}Yn(18),tn(t,e-30,"Túi to hơn!"),In(n.id),W("level"),(i=ue.get(n.id))==null||i.refresh(It()),qe(),se()}}const _A=350;let Js=null;const Mu=new P;function l0(n,t=.9){var i;const e=(i=ue.get(n.id))==null?void 0:i.root;return e?(Mu.copy(e.position),Mu.y+=t,As(Mu)):[innerWidth/2,innerHeight/2]}function u0(n){return Xn(n.x,n.z)?_.energy<1?(xa(),!1):!0:(Ud(_i(n.x,n.z)),!1)}function xA(n){Fc(),u0(n)&&kg(n.x,n.z,()=>kh(n))}function yA(n){if(Fc(),!u0(n))return;const t=Js={o:n,down:!0,timer:0};kg(n.x,n.z,()=>{!kh(n)||!t.down||Js!==t||(t.timer=setInterval(()=>{(!t.down||Js!==t||B.mode!=="farm"||Vt||!kh(n))&&Fc()},_A))})}function Fc(){Js&&(Js.down=!1,clearInterval(Js.timer),Js=null)}function qp(){Fc()}function kh(n){if(!_.objs.includes(n))return!1;const t=gE(n);if(!t)return xa(),!1;const[e,i]=l0(n);W("chop"),OS(n.id),QS(n.x,n.z),US(n.id,n.hp/An[n.t].hp),tn(e,i-30,"-1⚡");for(const[s,r]of Object.entries(t.drops))Vi(e,i,s,r);if(dl(t.drops),t.done){Ns(e,i);const s=ue.get(n.id),r=performance.now(),o=()=>{const a=(performance.now()-r)/380;a<1?(s.root.scale.setScalar(1-a),s.root.rotation.y+=.2,requestAnimationFrame(o)):mo(n.id)};if(s&&(s.root.userData.bounceT=0,o()),on("clear"),t.chest){const a={id:ro(),k:"loot",t:"chest",x:n.x,z:n.z,r:0,chest:t.chest};_.objs.push(a),Qi(a),In(a.id),W("collect")}se()}return ge(),!t.done}function bA(n){const[t,e]=l0(n,.5),i=vE(n);if(i){mo(n.id),W("collect"),i.coins&&gn(t,e,i.coins);for(let s=0;s<Math.min(i.energy,4);s++)Ui(t,e,"#energyPill",Cs,s*80);for(const[s,r]of Object.entries(i.mats))Vi(t,e,s,r);tn(t,e-30,`+${i.energy}⚡ +${i.coins}`),dl(i.mats),ge(),se()}}function MA(n){const t=wd(n);if(!t)return;Mn.copy(t.position),Mn.y+=.4;const[e,i]=As(Mn),s=CE(n);if(s){dE(n),W("collect");for(let r=0;r<Math.min(s,4);r++)Ui(e,i,"#energyPill",Cs,r*80);tn(e,i-30,`+${s}⚡`),ge(),se()}}function xa(){const n=Object.entries(Gt).filter(([i,s])=>s.energy&&Ft(i)>0),t=n.length?`<div class="inv">${n.map(([i,s])=>`<div class="it">${ye(i)}<span class="q">${Ft(i)}</span><small>${s.n}<br>+${s.energy} năng lượng</small><div class="acts"><button class="btn small" data-act="eat" data-k="${i}">Ăn</button></div></div>`).join("")}</div>`:'<p class="hint">Nướng bánh mì ở Lò bánh rồi ăn để có thêm năng lượng nhé!</p>',e=_.energy>=ki(_.level);un("energy",_.energy>0?"Năng lượng":"Hết năng lượng",`<p class="hint">Dọn dẹp cần năng lượng <span class="ico bolt sm"></span>. Năng lượng tự hồi: ${rT()}. Nhặt sao biển, vỏ sò, cua trên bãi biển cũng có năng lượng!</p>${t}
    <div class="row" style="justify-content:center;margin-top:14px">${e?'<button class="btn gray" data-close>Năng lượng đang đầy</button>':`<button class="btn blue" data-act="buyenergy">Nạp đầy ${kn}5</button>`}</div>`)}function wA(){Xc(),ke=()=>{const n=It();return`<div class="orders">${_.orders.map((t,e)=>{if(t.wait)return`<div class="order wait">${ye("b:crate")}Đơn mới sắp tới<br><span data-rt="${t.wait}">${wi(t.wait-n)}</span></div>`;const i=Ke.find(o=>o.id===t.who),s=Object.entries(t.items).map(([o,a])=>`<span class="${Ft(o)>=a?"ok":"lack"}">${ye(o)}${Math.min(Ft(o),a)}/${a}</span>`).join(""),r=Ss(t.items);return`<div class="order"><button class="skip" data-act="skiporder" data-i="${e}" aria-label="Bỏ đơn này">✕</button>
        <img class="face" src="${me["face:"+t.who]}" alt=""><b>${i.n}</b><div class="need">${s}</div>
        <div class="reward"><span>${Qe}${t.coins}</span><span>${mr}${t.xp}</span></div>
        <button class="btn ${r?"":"gray"}" data-act="deliver" data-i="${e}">Giao hàng</button></div>`}).join("")}</div>`},Ae=()=>_.orders.map(n=>n.wait?It()>=n.wait?"x":"w":"o").join()+JSON.stringify(_.inv),un("orders","Bảng đơn hàng",ke(),{sig:Ae()})}function SA(n,t,e){var a;const i=_.orders[n];if(!i||i.wait)return;if(!Ss(i.items)){const c=Object.entries(i.items).filter(([l,u])=>Ft(l)<u).map(([l,u])=>`${u-Ft(l)} ${ze(l).toLowerCase()}`);ht("Còn thiếu "+c.join(", ")),W("no");return}qc(i.items),_.coins+=i.coins,vn(i.xp),gn(t,e,i.coins),Ns(t,e),W("coin");const s=It();_.orders[n]={wait:s+15e3,s},on("deliver");const r=_.objs.find(c=>c.k==="board"),o=r&&((a=ue.get(r.id))==null?void 0:a.cart);if(o){const c=performance.now(),l=()=>{const u=(performance.now()-c)/1200;o.position.x=.2+Math.sin(u*Math.PI)*1.5,u<1?requestAnimationFrame(l):o.position.x=.2};l()}qe()}function EA(){ke=()=>{const n=_.ship,t=It();if(n.st==="away")return`<div class="celebrate">${ye("b:ship")}<p class="hint">Tàu đang đi giao hàng.<br>Quay lại sau <b data-rt="${n.backAt}">${wi(n.backAt-t)}</b></p>
      <button class="btn blue" data-act="shipnow">Gọi tàu về ngay ${kn}2</button></div>`;const e=n.crates.map((s,r)=>`<div class="crate ${s.done?"done":""}">${ye(s.item)}<b>${ze(s.item)}</b>
      <div class="need"><span class="${Ft(s.item)>=s.n||s.done?"ok":"lack"}">${s.done?s.n:Math.min(Ft(s.item),s.n)}/${s.n}</span></div>
      ${s.done?"":`<button class="btn small ${Ft(s.item)>=s.n?"":"gray"}" data-act="fillcrate" data-i="${r}">Đóng thùng</button>`}</div>`).join(""),i=n.crates.every(s=>s.done);return`<p class="hint">Đóng đủ 6 thùng hàng rồi cho tàu chạy để nhận thưởng lớn! Tàu rời bến sau <span data-rt="${n.leaveAt}">${wi(n.leaveAt-t)}</span>.</p>
      <div class="crates">${e}</div>
      <div class="reward" style="margin:14px 0 10px;font-size:18px"><span>Thưởng:</span><span>${Qe}${n.coins}</span><span>${mr}${n.xp}</span><span>${kn}${n.gems}</span></div>
      <button class="btn wide ${i?"orange":"gray"}" data-act="sendship">${i?"Cho tàu chạy!":"Chưa đủ thùng hàng"}</button>`},Ae=()=>_.ship.st+(_.ship.crates||[]).map(n=>n.done).join()+JSON.stringify(_.inv),un("ship","Tàu chở hàng",ke(),{sig:Ae()})}function TA(n,t,e){var r;const i=(r=_.ship.crates)==null?void 0:r[n];if(!i||i.done)return;if(Ft(i.item)<i.n){ht(`Cần ${i.n-Ft(i.item)} ${ze(i.item).toLowerCase()} nữa`),W("no");return}We(i.item,-i.n),i.done=!0;const s=Math.round(Gt[i.item].v*i.n*.6);_.coins+=s,gn(t,e,s),W("coin"),on("crate"),qe()}function AA(n,t){const e=_.ship;if(e.st!=="docked"||!e.crates.every(i=>i.done)){ht("Đóng đủ 6 thùng hàng trước nhé!");return}_.coins+=e.coins,_.gems+=e.gems,vn(e.xp),gn(n,t,e.coins),Oi(n,t),Ns(n,t),_.ship={st:"away",backAt:It()+12e4},W("ship"),Yn(),qe()}const CA=[["Nông sản",n=>!Gt[n].mat&&Be[n]||Object.values(Fi).some(t=>t.yield===n)],["Từ chuồng",n=>!Gt[n].mat&&Object.values(Ve).some(t=>t.prod===n)],["Thức ăn thú",n=>!Gt[n].mat&&n.endsWith("feed")],["Món ngon",n=>!Gt[n].mat],["Vật liệu",n=>!!Gt[n].mat]];function h0(){ke=()=>{const n=_m(),t=Xh(),e=n>=t,i=Object.keys(Gt).filter(o=>Ft(o)>0);let s=`<div class="cap ${e?"full":""}"><i style="width:${Math.min(100,n/t*100)}%"></i><span>${n} / ${t}</span></div>`;const r=new Set;for(const[o,a]of CA){const c=i.filter(l=>!r.has(l)&&a(l));c.forEach(l=>r.add(l)),c.length&&(s+=`<h3 class="sub">${o}</h3><div class="inv">${c.map(l=>`<div class="it">${ye(l)}<span class="q">${Ft(l)}</span><small>${ze(l)}</small>
        <div class="acts">${Gt[l].energy?`<button class="btn small blue" data-act="eat" data-k="${l}">Ăn</button>`:""}<button class="btn small orange" data-act="sell" data-k="${l}">Bán ${Gt[l].v}</button></div></div>`).join("")}</div>`)}return i.length||(s+='<p class="hint">Kho đang trống. Thu hoạch ruộng để có nông sản nhé!</p>'),s+=`<div class="row" style="justify-content:center;margin-top:16px"><button class="btn blue" data-act="upbarn">Nâng cấp kho (+25 chỗ) ${Qe}${rm(_.barnLvl)}</button></div>`,s},Ae=()=>JSON.stringify(_.inv)+_.barnLvl,un("barn","Kho hàng",ke(),{sig:Ae()})}function d0(n){_.level;const t=[];if(n==="farm"){const e=_.objs.filter(i=>i.k==="field").length;t.push({id:"field",icon:"b:field",n:"Ô ruộng",cost:im(e),lv:1,note:`Đang có ${e}`});for(const[i,s]of Object.entries(Fi))t.push({id:"tree:"+i,icon:"tree:"+i,n:s.n,cost:s.cost,lv:s.lv,note:`Cho ${ze(s.yield).toLowerCase()}`})}else if(n==="animals")for(const[e,i]of Object.entries(Ve)){const s=_.objs.filter(c=>c.k==="pen"&&c.t===e);t.push({id:"pen:"+e,icon:"pen:"+e,n:i.n,cost:i.cost,lv:i.lv,note:`Đang có ${s.length}/2`,max:s.length>=2});const r=s.filter(c=>!c.site),o=r.some(c=>c.animals.length<i.max),a=!o&&s.some(c=>c.site);t.push({id:"animal:"+e,icon:"animal:"+e,n:i.an,cost:i.animalCost,lv:i.lv,note:s.length?a?"Chuồng đang xây":o?`Cho ${ze(i.prod).toLowerCase()}`:"Chuồng đã đầy":`Cần ${i.n.toLowerCase()}`,max:!o&&!a})}else if(n==="factory"){for(const[e,i]of Object.entries(sn)){const s=_.objs.find(r=>r.k==="fac"&&r.t===e);t.push({id:"fac:"+e,icon:"fac:"+e,n:i.n,cost:i.cost,lv:i.lv,note:s?s.site?"Đang xây":"Đã có":i.rec.map(r=>ze(r.out)).slice(0,2).join(", "),max:!!s})}for(const[e,i]of Object.entries(Is)){const s=_.objs.find(r=>r.k==="helper"&&r.t===e);t.push({id:"helper:"+e,icon:"helper:"+e,n:i.n,cost:i.cost,lv:i.lv,note:s?s.site?"Đang xây":"Đã có":"Tự gom gỗ, tre, lá cọ",max:!!s})}}else{for(const[e,i]of Object.entries(_.store||{}))i>0&&t.push({id:"stored:"+e,icon:"decor:"+e,n:qn[e].n,cost:0,lv:1,note:`Đã cất · có ${i}`,stored:!0});for(const[e,i]of Object.entries(qn))i.gift||t.push({id:"decor:"+e,icon:"decor:"+e,n:i.n,cost:i.cost,lv:i.lv,note:i.pet?"Biết đi dạo":""})}return t}let gs="farm";function RA(n=gs){gs=n,ke=()=>{const t=[["farm","Ruộng & Cây"],["animals","Chuồng & Thú"],["factory","Nhà máy"],["decor","Trang trí"]].map(([i,s])=>`<button class="tab ${gs===i?"on":""}" data-act="shoptab" data-k="${i}">${s}</button>`).join(""),e=d0(gs).map(i=>{const s=_.level<i.lv;return`<button class="card ${s||i.max?"lock":""}" data-act="buy" data-k="${i.id}">
        ${s?`<span class="lk">Cấp ${i.lv}</span>`:""}${ye(i.icon)}<b>${i.n}</b>${i.note?`<small>${i.note}</small>`:""}
        <span class="price">${Qe}${i.cost||"Miễn phí"}</span></button>`}).join("");return`<div class="tabs">${t}</div><div class="grid">${e}</div>`},Ae=()=>gs+_.coins+_.level,un("shop","Cửa hàng",ke(),{sig:Ae()})}function PA(n){const t=d0(gs).find(r=>r.id===n);if(!t)return;if(t.stored){const r=n.split(":")[1];aa({k:"decor",t:r,r:0},!0,0)&&(le.fromStore=r);return}if(_.level<t.lv){ht(`Mở ở cấp ${t.lv}`),W("no");return}if(t.max){ht(t.note),W("no");return}if(_.coins<t.cost){ht(`Cần thêm ${t.cost-_.coins} xu nữa`),W("no");return}const[e,i]=n.split(":");if(e==="animal")return f0(i);let s;e==="field"?s={k:"field",t:"field",crop:null,s:0,e:0}:e==="tree"?s={k:"tree",t:i,s:It(),e:It()+Fi[i].t*1e3}:e==="pen"?s={k:"pen",t:i,animals:[{s:0,e:0}]}:e==="fac"?s={k:"fac",t:i,jobs:[],slots:2}:e==="helper"?s={k:"helper",t:i,lvl:0,bag:{},at:It()}:s={k:"decor",t:i},s.r=0,aa(s,!0,t.cost)}function f0(n,t){const e=Ve[n],i=_.objs.filter(r=>r.k==="pen"&&r.t===n),s=t?bn(t):i.find(r=>!r.site&&r.animals.length<e.max)||i.find(r=>r.site);if(!s){ht(`Cần mua ${e.n.toLowerCase()} trước`),W("no");return}if(s.site){ht("Chuồng đang xây, góp đủ vật liệu trước nhé!"),W("no");return}if(s.animals.length>=e.max){ht("Chuồng đã đầy");return}if(_.coins<e.animalCost){ht(`Cần thêm ${e.animalCost-_.coins} xu nữa`),W("no");return}_.coins-=e.animalCost,s.animals.push({s:0,e:0}),ue.get(s.id).refresh(It()),W("build"),ht(`Chào mừng bạn ${e.an.toLowerCase()} mới!`),on("buyanimal"),Xe(),fr(ue.get(s.id).root.position)}let le=null,ni=null;function aa(n,t,e=0){if(t){const[i,s]=ln(n),r=ov(i,s);if(r){ht(r),W("no");return}}if(Xe(),rr(),or(),t){const[i,s]=ln(n),[r,o]=Mg(B.target),a=$c(i,s,r-i/2,o-s/2)||[Math.max(0,r-1),Math.max(0,o-1)];n.x=a[0],n.z=a[1],n.id="ghost",le={obj:n,isNew:t,cost:e,view:Qi(n)}}else le={obj:{...n},real:n,isNew:t,cost:0,view:ue.get(n.id)};return ni||(ni=new Nt(new ss(1,1),new ri({color:6472767,transparent:!0,opacity:.65,depthWrite:!1,depthTest:!1})),ni.rotation.x=-Math.PI/2,ni.renderOrder=8),B.scene.add(ni),ya(),fr(le.view.root.position),DA(),!0}function Fd(n,t,e=!0){n.root.traverse(i=>{i.isMesh&&(i.userData.ro===void 0&&(i.userData.ro=i.renderOrder),i.renderOrder=t?9:i.userData.ro,i.userData.sprite&&(i.material.depthTest=!t,i.material.color.set(t&&!e?16748431:16777215)))})}function p0(){const n=le.obj,[t,e]=ln(n);return vm(n.x,n.z,t,e,le.isNew?"ghost":n.id)}function ya(){const n=le.obj,[t,e]=ln(n),i=le.view;Md(i,n),i.root.position.y=.25,ni.scale.set(t+.3,e+.3,1),ni.position.copy(rn(n.x,n.z,t,e)),ni.position.y=.03;const s=p0();ni.material.color.set(s?6472767:16735581),Fd(i,!0,s);const r=st('#tray [data-act="placeok"]');r&&(r.disabled=!s)}function m0(n){const t=le.obj,[e,i]=ln(t),s=tr.clamp(Math.round(n.x+Jt/2-e/2),0,Jt-e),r=tr.clamp(Math.round(n.z+Jt/2-i/2),0,Jt-i);(s!==t.x||r!==t.z)&&(t.x=s,t.z=r,ya())}function DA(){const n=le.obj,t=n.k==="decor";st("#tray").className=t&&!le.isNew?"many":"",st("#tray").innerHTML=`<button class="traybtn no" data-act="placeno" aria-label="Huỷ">✕</button>
    <div class="traytxt">${le.isNew?"Kéo để chọn chỗ":"Kéo để chuyển chỗ"}<small>${le.cost?"Giá "+le.cost+" xu":"Chạm ✓ để xong"}</small></div>
    ${t?'<button class="traybtn rot" data-act="placerot" aria-label="Xoay">↻</button>':""}
    ${t&&!le.isNew?'<button class="traybtn store" data-act="placestore" aria-label="Cất vào túi">📦</button>':""}
    <button class="traybtn ok" data-act="placeok" aria-label="Đặt">✓</button>`,st("#tray").hidden=!1,sr="place",ya()}function IA(){if(!le)return;if(!p0()){ht("Chỗ này bị vướng rồi"),W("no");return}const{obj:n,real:t,isNew:e,cost:i,view:s,fromStore:r}=le;if(e){if(_.coins<i){ht("Không đủ xu");return}_.coins-=i,r&&_.store[r]--,mo("ghost"),n.id=ro(),_.objs.push(n),n.k==="helper"&&(n.at=It()),n.t==="lotuspond"&&r&&(n.at=_.lotusAt??It(),delete _.lotusAt),tv(n),Qi(n),n.site&&ht("Chạm vào công trường để góp vật liệu nhé!"),n.k==="decor"&&on("buydecor"),n.k==="tree"&&on("buytree"),W("build")}else Object.assign(t,{x:n.x,z:n.z,r:n.r}),s.root.position.y=0,Fd(s,!1),W("build");B.scene.remove(ni);const o=e&&n.k==="field";if(le=null,rr(),se(),o){const a=_.objs.filter(l=>l.k==="field").length,c=im(a);_.coins>=c&&aa({k:"field",t:"field",crop:null,s:0,e:0,r:0},!0,c)}}function g0(){if(!le)return;const{isNew:n,view:t,real:e}=le;n?mo("ghost"):(Md(t,e),t.root.position.y=0,Fd(t,!1)),B.scene.remove(ni),le=null,rr()}function LA(n,t){var s;if(le||B.mode!=="farm")return;const e=Ts(n,t),i=typeof e=="number"?bn(e):null;if(!(!i||i.k==="loot"||i.k==="gate"||i.k==="boat"||(s=i.site)!=null&&s.ruin||!ua(i))){if(or(),i.k==="obstacle"){In(i.id),yA(i);return}W("tap"),aa(i,!1)}}let hi=null;function kA(n,t){if(B.mode!=="farm")return!1;if(le){const r=Ts(n,t);return r==="ghost"||r===le.obj.id?(hi={mode:"ghost"},!0):!1}const e=Ts(n,t,kd),i=typeof e=="number"?bn(e):null;if(!i||i.k!=="field")return!1;const s=pr(i,It());return s===3?(hi={mode:"harvest",done:new Set},!0):s<0&&sr==="seed"&&_.seed?(hi={mode:"plant",done:new Set},!0):!1}function NA(n,t){if(!hi)return;if(hi.mode==="ghost"){const r=Ic(n,t);r&&m0(r);return}const e=Ts(n,t,kd),i=typeof e=="number"?bn(e):null;if(!i||i.k!=="field"||hi.done.has(i.id))return;hi.done.add(i.id);const s=pr(i,It());hi.mode==="harvest"&&s===3&&(r0(i,n,t),In(i.id)),hi.mode==="plant"&&s<0&&(Od(i,_.seed,!0),In(i.id))}function Xp(n,t,e){const i=hi;if(hi=null,!!i)if(n)i.mode==="ghost"&&ya();else{if(i.mode==="ghost")return;i0(t,e)}}let En=null;function v0(n){or();const t=document.createElement("div");t.className="timer",En={oid:n.id,el:t};const e=()=>{const i=It();let s,r,o;if(n.k==="field"?(s=ze(n.crop),r=n.s,o=n.e):n.k==="tree"&&(s=Fi[n.t].n,r=n.s,o=n.e),i>=o){or();return}const a=Nd(o-i);t.innerHTML=`<b>${s}</b><div class="bar"><i style="width:${(i-r)/(o-r)*100}%"></i></div><span class="t">Còn ${wi(o-i)}</span>
      <div style="margin-top:6px"><button class="btn small blue" data-act="speed" data-oid="${n.id}">Xong ngay ${kn}${a}</button></div>`};e(),En.draw=e,st("#bubbles").appendChild(t),W("tap")}function or(){En==null||En.el.remove(),En=null}function UA(n){const t=It(),e=Nd(n.e-t);if(_.gems<e){ht("Không đủ kim cương"),W("no");return}_.gems-=e,n.e=t,n.k==="field"&&(n.s=Math.min(n.s,t-1)),ue.get(n.id).refresh(t),or(),W("collect")}const OA={plant:"🌱",feed:"🐔",deliver:"📦",clear:"🪓",crate:"🚢",buydecor:"🌸",buytree:"🌳",build:"🔨",beach:"🐚",sail:"⛵",harvest:"🌾",make:"🍞",collect:"🥚"},_0=n=>me[n.key]?ye(n.key):OA[n.ev]||"⭐",x0=n=>`<div class="reward" style="font-size:18px"><span>Thưởng:</span>${n.coins?`<span>${Qe}${n.coins}</span>`:""}${n.xp?`<span>${mr}${n.xp}</span>`:""}${n.gems?`<span>${kn}${n.gems}</span>`:""}${n.energy?`<span>${Cs}${n.energy}</span>`:""}</div>`;function Bc(n){if(Gn()||n==="tut")return BA();const t=ir(),e=t.find(l=>l.id===n)||t.find(l=>l.done)||t.find(l=>!l.seen)||t[0];if(!e)return;Ai&&Ai.qid!==e.id&&(Ai=Ms=null);const i=e.seen;QE(e.id),ge();const s=()=>ir().find(l=>l.id===e.id),r=()=>{const l=s();if(!l)return`<div class="talk">${ye("face:"+e.who)}<div class="say">Xong rồi! Cảm ơn bạn nhiều nhé!</div></div><div style="margin-top:14px"><button class="btn wide blue" data-close>Đóng</button></div>`;const u=l.reqs.map((h,d)=>{const f=Math.min(l.p[d]||0,h.n),p=f>=h.n;return`<div class="qreq ${p?"ok":""}"><span class="qi">${_0(h)}</span>
        <div class="qm">${Yt($g(h))}<div class="prog"><i style="width:${f/h.n*100}%"></i><span>${f} / ${h.n}</span></div></div>
        ${p?'<span class="tick">✓</span>':`<button class="btn small blue" data-act="questgo" data-q="${l.id}" data-r="${d}">Chỉ cho bé</button>`}</div>`}).join("");return`<div class="talk">${ye("face:"+l.who)}<div class="say"><b>${Yt(Wc(l.who))}:</b> ${Yt(l.text)}</div></div>${u}
      ${x0(l)}
      ${l.done?`<div style="margin-top:14px"><button class="btn wide orange" data-act="claimquest" data-q="${l.id}">Nhận thưởng!</button></div>`:""}`},o=()=>{var l;return JSON.stringify(((l=(_.qs||[]).find(u=>u.id===e.id))==null?void 0:l.p)??null)},a=!i&&e.arc,c=()=>{a&&Vt||(ke=r,Ae=o,un("quest",e.title,ke(),{sig:Ae()}),e.done||W("tap"))};a?hl(e.talk,c):c()}function FA(){ke=()=>{const n=sa(),t=n.tasks.map(i=>{const s=Math.min(i.p,i.n),r=s>=i.n;return`<div class="qreq ${r?"ok":""}"><span class="qi">${_0(i)}</span>
        <div class="qm">${Yt($g(i))}<div class="prog"><i style="width:${s/i.n*100}%"></i><span>${s} / ${i.n}</span></div></div>
        ${r?'<span class="tick">✓</span>':""}</div>`}).join(""),e=n.got?'<div class="dgift got"><span class="gift">🎁</span><div>Bé nhận quà rồi!<br>Mai quay lại nhé!</div></div>':n.done?'<div class="dgift open"><span class="gift">🎁</span><div>Bé làm xong hết rồi!</div></div><div style="margin-top:14px"><button class="btn wide orange" data-act="claimtasks">Mở quà!</button></div>':'<div class="dgift"><span class="gift">🎁</span><div>Làm xong hết để mở quà nhé!</div></div>';return t+e},Ae=()=>{const n=sa();return n.tasks.map(t=>t.p).join()+n.got},un("daily","Việc hôm nay",ke(),{sig:Ae()}),W("tap")}function BA(){const n=so();if(!n)return;const t=Ke.find(i=>i.id===n.who),e=_.qprog>=n.n;ke=()=>`<div class="talk">${ye("face:"+n.who)}<div class="say"><b>${t.n}:</b> ${Yt(n.text)}</div></div>
    <div class="prog"><i style="width:${_.qprog/n.n*100}%"></i><span>${_.qprog} / ${n.n}</span></div>
    ${x0(n)}
    <div style="margin-top:14px">${_.qprog>=n.n?'<button class="btn wide orange" data-act="claimquest" data-q="tut">Nhận thưởng!</button>':'<button class="btn wide blue" data-act="questgo" data-q="tut">Mình đi làm ngay!</button>'}</div>`,Ae=()=>_.qprog+"/"+_.tut,un("quest","Nhiệm vụ",ke(),{sig:Ae()}),e||W("tap")}function zA(n){const t=[];for(const[e,i]of Object.entries(Be))i.lv===n&&t.push([e,"Hạt "+ze(e).toLowerCase()]);for(const[e,i]of Object.entries(Fi))i.lv===n&&t.push(["tree:"+e,i.n]);for(const[e,i]of Object.entries(Ve))i.lv===n&&t.push(["pen:"+e,i.n]);for(const[e,i]of Object.entries(sn))if(i.lv===n)t.push(["fac:"+e,i.n]);else for(const s of i.rec)s.lv===n&&i.lv<n&&t.push([s.out,ze(s.out)]);for(const[e,i]of Object.entries(qn))i.lv===n&&t.push(["decor:"+e,i.n]);for(const e of Ec)e.lv===n&&t.push([e.goal.pet?"decor:"+e.goal.pet:"decor:chest","Đảo "+e.n]);return t}const Mc=[];let zo=0;function Nh(){if(zo=0,!Mc.length)return;if((Vt==null?void 0:Vt.type)==="advdone"||(Vt==null?void 0:Vt.type)==="level"||$E()){zo=setTimeout(Nh,400);return}const[n,t]=Mc.shift(),e=zA(n);un("level","Lên cấp!",`<div class="celebrate"><span class="bigstar"><b>${n}</b></span>
    <div class="reward" style="font-size:20px"><span>${Qe}+${t.coins}</span><span>${kn}+${t.gems}</span><span>${Cs}Đầy</span></div>
    ${e.length?`<h3 class="sub" style="margin:4px 0 0">Mở khoá mới</h3><div class="unlocks">${e.map(([i,s])=>`<div>${ye(i)}${Yt(s)}</div>`).join("")}</div>`:""}
    <button class="btn wide orange" data-close>Tuyệt vời!</button></div>`),Yn(),W("level"),Mc.length&&(zo=setTimeout(Nh,400))}cr("levelup",(n,t)=>{Mc.push([n,t]),zo||(zo=setTimeout(Nh,400))});cr("quest",()=>ge());cr("zone",n=>{const t=Ds.find(e=>e.id===n);setTimeout(()=>{ht(`Đã mở ${t.n}! Vào chặt cây thôi`),Yn(24)},500),se()});cr("ship",n=>{n==="arrive"&&(ht("Tàu chở hàng đã cập bến!"),W("ship"))});const y0=[{coins:40},{energy:15},{coins:80},{gems:2},{coins:140},{gems:3,energy:30},{gems:6,coins:200}],zc=n=>new Date(n).toDateString();function b0(){const n=zc(Date.now()),t=zc(Date.now()-864e5),e=_.login||(_.login={streak:0,last:""}),i=_.lastDaily!==n,s=i?e.last===t?e.streak%7:0:(e.streak-1+7)%7,r=y0.map((o,a)=>{const c=i?a<s:a<=s,l=a===s,u=[o.coins&&`${Qe}${o.coins}`,o.gems&&`${kn}${o.gems}`,o.energy&&`${Cs}${o.energy}`].filter(Boolean).join(" ");return`<div class="dday ${c?"got":""} ${l&&i?"today":""} ${a===6?"big":""}"><b>Ngày ${a+1}</b><span class="gift">${a===6?"🎁":"📦"}</span><span class="rw">${u}</span></div>`}).join("");un("gift","Quà mỗi ngày",`<p class="hint">Vào chơi mỗi ngày để nhận quà. Ngày thứ 7 có quà lớn!</p><div class="daily">${r}</div>
    <div style="margin-top:14px">${i?'<button class="btn wide orange" data-act="claimdaily">Nhận quà hôm nay</button>':'<button class="btn wide gray" data-close>Mai quay lại nhé!</button>'}</div>`)}function VA(n,t){const e=zc(Date.now()),i=zc(Date.now()-864e5);if(_.lastDaily===e)return;const s=_.login||(_.login={streak:0,last:""});s.streak=s.last===i?s.streak+1:1,s.last=e,_.lastDaily=e;const r=y0[(s.streak-1)%7];r.coins&&(_.coins+=r.coins,gn(n,t,r.coins)),r.gems&&(_.gems+=r.gems,Oi(n,t)),r.energy&&(_.energy=Math.max(_.energy,ki(_.level))+(r.energy>20?0:r.energy)),Yn(),W("level"),b0()}function wc(n){un("settings","Cài đặt",`
    <div class="setting">Âm thanh <button class="btn small ${_.sound?"":"gray"}" data-act="togglesound">${_.sound?"Bật":"Tắt"}</button></div>
    <div class="setting">Nhạc nền <button class="btn small ${_.music?"":"gray"}" data-act="togglemusic">${_.music?"Bật":"Tắt"}</button></div>
    <div class="setting" style="flex-direction:column;align-items:flex-start;font-size:15px;font-weight:700">
      <b style="font-size:17px">Cài lên điện thoại</b>
      iPhone: mở bằng Safari → nút Chia sẻ → "Thêm vào MH chính".<br>Android: mở bằng Chrome → menu ⋮ → "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính".</div>
    <div class="setting">Chuyển sang máy khác <span class="row" style="gap:6px"><button class="btn small blue" data-act="backup">Lấy mã</button><button class="btn small" data-act="restore">Nhập mã</button></span></div>
    <div class="setting">${n?"Chắc chắn chơi lại từ đầu?":"Chơi lại từ đầu"}
      <button class="btn small red" data-act="${n?"resetyes":"reset"}">${n?"Xoá hết":"Chơi lại"}</button></div>
    <p class="hint" style="font-size:13px;margin-top:10px">Hình 2D vẽ tay (AI vẽ); cảm ơn Kenney.nl và KayKit (CC0) vì các bộ mô hình dùng ở bản đầu. Maisie's Farm · làm tặng bé Maisie.</p>`)}let ke=null,Ae=null;function qe(){Vt&&Vt===Ld&&ke&&(Yg(ke()),Vt.sig=Ae==null?void 0:Ae())}const HA={seed(n){const t=n.dataset.k,e=Be[t];if(_.level<e.lv){ht(`${ze(t)} mở ở cấp ${e.lv}`),W("no");return}_.seed=t,o0(),jr&&pr(jr,It())<0&&Od(jr,t),ht("Kéo ngón tay qua các ô trống để gieo tiếp")},closetray(){rr()},placeok(){IA()},placeno(){g0()},placerot(){le.obj.r=((le.obj.r||0)+1)%4,ya()},placestore(){const n=le.real;B.scene.remove(ni),mo(n.id),_.objs.splice(_.objs.indexOf(n),1),(_.store||(_.store={}))[n.t]=(_.store[n.t]||0)+1,n.t==="lotuspond"&&n.at!=null&&(_.lotusAt=n.at),le=null,rr(),W("collect"),ht(`Đã cất ${qn[n.t].n.toLowerCase()} vào túi. Đặt lại trong Cửa hàng → Trang trí`)},claimdaily(n,t,e){VA(t,e)},placestored(n){var e;const t=n.dataset.k;((e=_.store)==null?void 0:e[t])>0&&aa({k:"decor",t,r:0},!0,0)&&(le.fromStore=t)},make(n,t,e){hA(bn(+n.dataset.oid),+n.dataset.i)},helperup(n,t,e){vA(bn(+n.dataset.oid),t,e)},helpertake(n,t,e){const i=bn(+n.dataset.oid);i&&c0(i,t,e)&&qe()},give(n,t,e){pA(bn(+n.dataset.oid),n.dataset.k,t,e)},collectfac(n,t,e){a0(bn(+n.dataset.oid),t,e),qe()},speedjob(n){const t=bn(+n.dataset.oid),e=It(),i=t.jobs.find(o=>e<o.e&&e>=o.s);if(!i)return;const s=Nd(i.e-e);if(_.gems<s){ht(`Cần ${s} kim cương`),W("no");return}_.gems-=s;const r=i.e-e;t.jobs.forEach(o=>{o.e>e&&(o.e-=r,o.s=Math.max(e,o.s-r))}),i.e=e,W("collect"),qe()},buyslot(n){const t=bn(+n.dataset.oid),e=(t.slots||2)*3;if(_.gems<e){ht(`Cần ${e} kim cương`),W("no");return}_.gems-=e,t.slots=(t.slots||2)+1,W("build"),qe()},buyanimal(n){const t=bn(+n.dataset.oid);f0(t.t,t.id)},deliver(n,t,e){SA(+n.dataset.i,t,e)},skiporder(n){const t=It();_.orders[+n.dataset.i]={wait:t+1e4,s:t},W("tap"),qe()},fillcrate(n,t,e){TA(+n.dataset.i,t,e)},sendship(n,t,e){AA(t,e)},shipnow(){if(_.gems<2){ht("Cần 2 kim cương");return}_.gems-=2,_.ship=jc(),W("ship"),qe()},sell(n,t,e){const i=n.dataset.k;Ft(i)<1||(We(i,-1),_.coins+=Gt[i].v,gn(t,e,Gt[i].v),W("coin"),qe())},eat(n,t,e){const i=n.dataset.k;if(!(Ft(i)<1)){if(_.energy>=99){ht("Năng lượng đã rất nhiều rồi");return}We(i,-1),_.energy+=Gt[i].energy,tn(t,e-20,`+${Gt[i].energy}⚡`),W("collect"),Vt.type==="energy"?Xe():qe()}},buyenergy(){if(_.energy>=ki(_.level)){ht("Năng lượng đang đầy rồi"),Xe();return}if(_.gems<5){ht("Cần 5 kim cương"),W("no");return}_.gems-=5,_.energy=Math.max(_.energy,ki(_.level)),W("collect"),Xe()},upbarn(){const n=rm(_.barnLvl);if(_.coins<n){ht(`Cần thêm ${n-_.coins} xu nữa`),W("no");return}_.coins-=n,_.barnLvl++,W("build"),ht(`Kho chứa được ${Xh()} món`),qe()},shoptab(n){gs=n.dataset.k,qe()},buy(n){PA(n.dataset.k)},claimquest(n,t,e){var r;const i=Gn(),s=i?dv():ZE(n.dataset.q);if(s){gn(t,e,s.coins||0),Ns(t,e),s.gems&&Oi(t,e);for(let o=0;o<Math.min(s.energy||0,4);o++)Ui(t,e,"#energyPill",Cs,o*80);W("coin"),Xe(),ir(),ge(),i&&Gn()?setTimeout(()=>{Vt||Bc("tut")},900):s.arc&&((r=s.outro)!=null&&r.length)&&setTimeout(()=>Gg(s.outro),700)}},claimtasks(n,t,e){const i=eT();if(i){i.coins&&gn(t,e,i.coins),i.gems&&Oi(t,e);for(let s=0;s<Math.min(i.energy||0,4);s++)Ui(t,e,"#energyPill",Cs,s*80);Yn(),W("level"),ge(),qe(),se()}},speed(n){UA(bn(+n.dataset.oid))},questgo(n){if(Xe(),!Gn()&&(n!=null&&n.dataset.q)&&n.dataset.q!=="tut"){if($A({qid:n.dataset.q,ri:+n.dataset.r||0}),!Ms)return;const i=R0(),s=(i==null?void 0:i.oid)!=null&&Hc(i.oid);i?s&&jp(s,i.y):ht("Chưa thấy chỗ làm, đợi một chút nhé!");return}const t=A0(),e=(t==null?void 0:t.oid)!=null&&Hc(t.oid);e&&jp(e,t.y)},togglesound(){_.sound=!_.sound,wc()},togglemusic(){_.music=!_.music,_.music?Wg():qE(),wc()},reset(){wc(!0)},backup(){un("backup","Mã sao lưu",`<p class="hint">Sao chép mã này, rồi trên máy mới vào Cài đặt → Nhập mã.</p>
      <textarea id="saveCode" class="code" readonly>${pv()}</textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn orange" data-act="copycode">Sao chép mã</button></div>`)},copycode(){var t;const n=st("#saveCode");((t=navigator.clipboard)==null?void 0:t.writeText(n.value).then(()=>ht("Đã sao chép mã"),()=>{n.select(),ht("Hãy giữ vào ô mã và chọn Sao chép")}))??(n.select(),ht("Hãy giữ vào ô mã và chọn Sao chép"))},restore(){un("restore","Nhập mã sao lưu",`<p class="hint">Dán mã từ máy cũ vào đây. Nông trại hiện tại trên máy này sẽ được thay thế.</p>
      <textarea id="restoreCode" class="code" placeholder="Dán mã vào đây"></textarea>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn red" data-act="restoreyes">Khôi phục</button></div>`)},restoreyes(){try{mv(st("#restoreCode").value),ht("Đã khôi phục! Đang mở lại…"),setTimeout(()=>location.reload(),600)}catch{ht("Mã không đúng. Kiểm tra lại đã dán đủ mã chưa nhé"),W("no")}},resetyes(){vv(),location.reload()}};function GA(){const n=t=>{const e=t.target.closest("[data-act],[data-close]");if(!e)return;if(Qn(),e.hasAttribute("data-close")){Xe();return}const i=HA[e.dataset.act];if(!i)return;let s=t.clientX,r=t.clientY;if(!s&&!r){const o=e.getBoundingClientRect();s=o.left+o.width/2,r=o.top+o.height/2}i(e,s,r),ge(),se()};document.addEventListener("click",n),st("#btnShop").onclick=()=>{Qn(),W("tap"),RA()},st("#btnBarn").onclick=()=>{Qn(),W("tap"),h0()},st("#btnSet").onclick=()=>{Qn(),W("tap"),wc()},st("#questCol").onclick=t=>{const e=t.target.closest(".qbtn");if(e){if(Qn(),e.dataset.q==="daily")return FA();Bc(e.dataset.q)}},st("#btnGift").onclick=()=>{Qn(),b0(),ge(),se()},st("#energyPill").onclick=()=>{Qn(),xa()},st("#btnNb").onclick=()=>{if(Qn(),W("tap"),_.level<2){ht("Hàng xóm mở ở cấp 2");return}QT()},st("#btnAdv").onclick=()=>{Qn(),M0()},st("#barnIco").src=me["b:crate"],document.addEventListener("keydown",t=>{t.key==="Escape"&&(Vt?Xe():le&&g0())})}function M0(){if(W("tap"),!_.boatFixed){ht("Sửa thuyền ở bến trước nhé!");const n=_.objs.find(t=>t.k==="boat");n&&(ol(rn(n.x,n.z,...ln(n))),In(n.id));return}if(_.level<2){ht("Phiêu lưu mở ở cấp 2");return}RT({openEnergy:xa,onLeave:w0}),on("sail")}function w0(){const n=_.pendingDecor||[];for(;n.length;){const t=n.shift(),e=GE(t);e.obj?(Qi(e.obj),fr(ue.get(e.obj.id).root.position),ht(`${qn[t].n} đã về nông trại!`),In(e.obj.id)):ht("Đã cất vào kho đồ trang trí")}se()}let Uh=[];function Vc(){const n=It(),t=[];for(const i of _.objs)if(ue.get(i.id)){if(i.site){!ws(i)&&ua(i)&&Object.entries(da(i)).some(([r,o])=>o.got<o.need&&Ft(r)>0)&&t.push({oid:i.id,y:1.6,mark:"🔨",cls:"sitemark"});continue}if(i.k==="pen"){const r=Ve[i.t],o=i.animals.filter(c=>c.e&&n>=c.e).length,a=i.animals.filter(c=>!c.e).length;o?t.push({oid:i.id,y:1.4,icon:r.prod,n:o}):a&&t.push({oid:i.id,y:1.4,icon:r.feed,n:Ft(r.feed)?null:0,cls:"hungry"+(Ft(r.feed)?"":" warn")})}else if(i.k==="fac"){const r=i.jobs.filter(o=>n>=o.e);r.length&&t.push({oid:i.id,y:2.6,icon:sn[i.t].rec[r[0].r].out,n:r.length>1?r.length:null})}else i.k==="helper"?nr(i)&&t.push({oid:i.id,y:1.9,icon:"wood",n:nr(i)}):i.k==="market"?Vp()&&t.push({oid:i.id,y:1.9,html:Qe,n:Vp()}):i.k==="decor"&&i.t==="lotuspond"?Vg(i,n)&&t.push({oid:i.id,y:1.5,mark:"⚡",cls:"lotusmark"}):i.k==="board"&&_.orders.some(r=>!r.wait&&Ss(r.items))&&t.push({oid:i.id,y:1.9,mark:"!"})}if(_.ship.st==="docked"&&_.ship.crates.some(i=>!i.done&&Ft(i.item)>=i.n)&&t.push({oid:"ship",y:3.4,mark:"!"}),t.push(...OT()),t.push({oid:"pier",y:1.4,mark:"🎣",cls:"fishmark"}),Gn()){const i=so();i&&_.qprog>=i.n?t.push({oid:"maisie",y:1.3,mark:"✓"}):i&&_.qprog===0&&t.push({oid:"maisie",y:1.3,mark:"!"})}else{const i=ir();i.some(s=>s.done)?t.push({oid:"maisie",y:1.3,mark:"✓"}):i.some(s=>!s.seen)&&t.push({oid:"maisie",y:1.3,mark:"!"})}const e=t.map(i=>i.oid+(i.icon||i.mark||"h")+i.n+i.cls).join("|");e!==Vc.sig&&(Vc.sig=e,Uh.forEach(i=>i.el.remove()),Uh=t.map(i=>{const s=document.createElement("button");return s.className="bub "+(i.mark?"mark":"")+" "+(i.cls||""),s.innerHTML=i.mark?i.mark:`${i.html||ye(i.icon)}${i.n!=null?`<span class="n">${i.n}</span>`:""}`,s.onclick=r=>{Qn(),s0(i.oid,r.clientX,r.clientY),ge(),se()},st("#bubbles").appendChild(s),{...i,el:s}}))}const Mn=new P;function jp(n,t=0){Mn.copy(n.position),Mn.y+=t;const[e,i]=As(Mn);(e<si.l||e>innerWidth-si.r||i<si.t||i>innerHeight-si.b)&&ol(n.position.clone())}function Hc(n){var t;return n==="ship"?mn.dock:n==="pier"?mn.pier:n==="maisie"?mn.maisie:typeof n=="string"&&n.startsWith("v:")?FT(n):typeof n=="string"&&n.startsWith("beach:")?wd(+n.slice(6)):(t=ue.get(n))==null?void 0:t.root}let Bn=null;const si={get l(){return 110*(B.ui||1)},get r(){return 60*(B.ui||1)},get t(){return 150*(B.ui||1)},get b(){return 140*(B.ui||1)}},S0=new P,Oh=n=>_E(n,t=>{var o;const e=(o=ue.get(t.id))==null?void 0:o.root;if(!e)return 1/0;const[i,s]=As(S0.copy(e.position)),r=i<si.l||i>innerWidth-si.r||s<si.t||s>innerHeight-si.b;return Math.hypot(i-innerWidth/2,s-innerHeight/2)+(r?1e4:0)}),WA={house:2.6,fac:2.2,helper:1.8,pen:1.8,boat:1.3,gate:1.3,obstacle:.9},Pi=n=>{var t;return{oid:n.id,y:n.site&&!n.site.ruin&&n.k!=="gate"?1.5:(WA[n.k]||1.4)*(n.k==="fac"&&((t=cm[n.t])==null?void 0:t.scale)||1)}},io=n=>({el:"#mBody "+n});function E0(n){const t=Gt[n],e=It();if((t==null?void 0:t.mat)===1){const i=Oh(s=>{var r;return An[s.t].drop[n]||((r=An[s.t].rare)==null?void 0:r[n])});return i&&Pi(i)}if((t==null?void 0:t.mat)===2){const i=_.objs.find(s=>s.k==="fac"&&sn[s.t].rec.some(r=>r.out===n));return i?i.site?Gc(i):Pi(i):{el:"#btnShop"}}if(Be[n]){const i=_.objs.find(s=>s.k==="field"&&s.crop===n&&pr(s,e)===3)||_.objs.find(s=>s.k==="field"&&!s.crop);return i?{oid:i.id,y:.5}:null}return null}function Gc(n){if(Vt)return Vt.type!=="site"||Vt.oid!==n.id?null:st('#mBody [data-act="give"]:not(.gray)')?io('[data-act="give"]:not(.gray)'):{el:"#modal .xbtn"};const t=Object.entries(da(n)).filter(([,e])=>e.got<e.need);if(ws(n)||t.some(([e,i])=>Ft(e)>=i.need-i.got))return Pi(n);for(const[e]of t){const i=E0(e);if(i)return i}return Pi(n)}function Yp(n,t=1){const e=It(),i=_.objs.find(c=>c.k==="fac"&&sn[c.t].rec.some(l=>l.out===n));if(!i)return Vt?null:{el:"#btnShop"};if(i.site)return Gc(i);const s=sn[i.t].rec.findIndex(c=>c.out===n),r=sn[i.t].rec[s],o=i.jobs.filter(c=>c.r===s).length*(r.qty||1)<t,a=i.jobs.length<(i.slots||2);if(Vt)return Vt.type!=="fac"||Vt.oid!==i.id?null:i.jobs.some(c=>e>=c.e)?io(".slot.done"):o&&a&&Ss(r.in)?io(`[data-act="make"][data-i="${s}"]`):o&&a?{el:"#modal .xbtn"}:null;if(i.jobs.some(c=>e>=c.e))return Pi(i);if(o&&a&&!Ss(r.in)){for(const c of Object.keys(r.in))if(Ft(c)<r.in[c]){const l=E0(c);if(l)return l}}return Pi(i)}function Kp(n,t){return Vt?Vt.type==="shop"?io(gs===n?`[data-act="buy"][data-k="${t}"]`:`[data-act="shoptab"][data-k="${n}"]`):null:{el:"#btnShop"}}function T0(n,t){if(le)return le.isNew&&n.ev==="build"?{el:'#tray [data-act="placeok"]'}:null;const e=It(),i=_.objs,s=r=>i.find(r);if(n.ev==="build"){const r=s(a=>a.site&&ha(a)===n.key);if(r)return Gc(r);const o=/^(fac|helper):/.test(n.key)?"factory":n.key.startsWith("pen:")?"animals":null;return o?Kp(o,n.key):null}if(!Gn()&&(n.ev==="collect"||n.ev==="feed")){const r=n.ev==="feed"?"coop":Object.keys(Ve).find(o=>Ve[o].prod===n.key);if(r&&!i.some(o=>o.k==="pen"&&(n.ev==="feed"||Ve[o.t].prod===n.key)))return Kp("animals","pen:"+r)}if(n.ev==="make")return Yp(n.key,t);if(Vt)return null;switch(n.ev){case"harvest":{const r=s(a=>a.k==="field"&&pr(a,e)===3&&(!n.key||a.crop===n.key));if(r)return{oid:r.id,y:.5};const o=s(a=>a.k==="field"&&!a.crop)||!Gn()&&s(a=>a.k==="field"&&a.crop===n.key);return o?{oid:o.id,y:.5}:null}case"plant":{const r=s(o=>o.k==="field"&&!o.crop);return r?{oid:r.id,y:.5}:null}case"feed":{const r=s(o=>o.k==="pen"&&!o.site&&o.animals.some(a=>!a.e))||s(o=>o.k==="pen");return r?Ft(Ve[r.t].feed)||!r.animals.some(o=>!o.e)?Pi(r):Yp(Ve[r.t].feed):null}case"collect":case"buyanimal":{if(n.ev==="collect"&&n.key&&!Gn()){const o=i.filter(l=>l.k==="pen"&&Ve[l.t].prod===n.key),a=o.filter(l=>!l.site),c=a.find(l=>l.animals.some(u=>u.e&&e>=u.e))||a[0];return c?Pi(c):o[0]?Gc(o[0]):null}const r=s(o=>o.k==="pen");return r?Pi(r):null}case"deliver":{const r=s(o=>o.k==="board");return r?{oid:r.id,y:2.1}:null}case"clear":{const r=Oh(xE)||Oh(()=>!0);return r?Pi(r):null}case"crate":return{oid:"ship",y:3.6};case"buydecor":case"buytree":return{el:"#btnShop"};case"sail":return{el:"#btnAdv"};case"beach":{let r=null,o=1/0;for(const a of _.beach||[]){const c=wd(a.id);if(!c)continue;const[l,u]=As(S0.copy(c.position)),h=Math.hypot(l-innerWidth/2,u-innerHeight/2);h<o&&(o=h,r=a)}return r?{oid:"beach:"+r.id,y:.9}:null}}return null}function A0(){if(B.mode!=="farm"||!Gn())return null;const n=so();return n?_.qprog>=n.n?Vt?Vt.type==="quest"?io('[data-act="claimquest"]'):{el:"#modal .xbtn"}:{el:'#questCol [data-q="tut"]'}:(Vt==null?void 0:Vt.type)==="quest"?io('[data-act="questgo"]'):T0(n,n.n-_.qprog):null}let Ai=null,Ms=null;function $A(n){Ai=n,Ms=null,n&&C0()}function C0(){if(!Ai)return;const n=Gn()?null:ir().find(i=>i.id===Ai.qid),t=n==null?void 0:n.reqs[Ai.ri],e=(n==null?void 0:n.p[Ai.ri])||0;if(!t||e>=t.n){Ai=Ms=null;return}Ms={req:t,left:t.n-e}}function R0(){return!Ai||!Ms||B.mode!=="farm"?null:T0(Ms.req,Ms.left)}function qA(){var s;Bn||(Bn=document.createElement("div"),Bn.className="hand",Bn.textContent="👇",document.body.appendChild(Bn));const n=A0()||R0();if(!n){Bn.hidden=!0;return}let t,e,i="👇";if(n.el){const r=(s=st(n.el))==null?void 0:s.getBoundingClientRect();if(!r||!r.width){Bn.hidden=!0;return}t=r.left+r.width/2,e=r.top+r.height/2+24}else{const r=Hc(n.oid);if(!r){Bn.hidden=!0;return}Mn.copy(r.position),Mn.y+=n.y,[t,e]=As(Mn),e+=22;const o=Math.min(innerWidth-si.r,Math.max(si.l,t)),a=Math.min(innerHeight-si.b,Math.max(si.t,e));i=o>t?"👈":o<t?"👉":a>e?"👆":"👇",t=o,e=a}Bn.textContent!==i&&(Bn.textContent=i),Bn.style.zIndex=n.el?35:5,Bn.hidden=!1,Bn.style.transform=`translate(${t}px,${e}px) scale(${B.ui||1})`}function XA(){var n;qA();for(const t of Uh){const e=Hc(t.oid);if(!e)continue;Mn.copy(e.position),Mn.y+=t.y;const[i,s]=As(Mn);t.el.style.transform=`translate(${i}px,${s}px) scale(${B.ui||1})`}if(En){const t=(n=ue.get(En.oid))==null?void 0:n.root;if(t){Mn.copy(t.position),Mn.y+=1;const[e,i]=As(Mn);En.el.style.left=e+"px",En.el.style.top=i+"px"}}}let Jp=0;function Zp(){var e,i;const n=It();for(const s of _.objs)s.k==="helper"&&bd(s,n);av(),hv(),NT(),HT();const t=bE(n);t&&(Qi(t),In(t.id)),C0(),AE(n),hE(Ng()),Vt&&Vt.type==="orders"||Xc();for(const s of ue.values())(e=s.refresh)==null||e.call(s,n);Vc(),(i=En==null?void 0:En.draw)==null||i.call(En),Vt&&Vt===Ld&&Ae&&Ae()!==Vt.sig&&qe(),document.querySelectorAll("[data-rt]").forEach(s=>{s.textContent=wi(+s.dataset.rt-n)}),document.querySelectorAll("#mBody [data-s]").forEach(s=>{s.style.width=Math.min(100,(n-s.dataset.s)/(s.dataset.e-s.dataset.s)*100)+"%"}),ge(),n-Jp>5e3&&(se(),Jp=n)}function jA(n){const t=new Map;let e=null,i=!1,s=null,r=0,o=null,a={x:0,y:0},c=0;n.addEventListener("pointerdown",u=>{try{n.setPointerCapture(u.pointerId)}catch{}if(t.set(u.pointerId,{x:u.clientX,y:u.clientY}),a.x=a.y=0,t.size===1)e={x:u.clientX,y:u.clientY,t:performance.now()},i=!1,s=kA(u.clientX,u.clientY)?"drag":"pan",clearTimeout(r),r=setTimeout(()=>{!i&&t.size===1&&s==="pan"&&(s="none",LA(e.x,e.y))},550);else if(t.size===2){clearTimeout(r),qp(),s==="drag"&&Xp(!0,0,0),s="pinch";const[h,d]=[...t.values()];o={d:Math.hypot(h.x-d.x,h.y-d.y),zoom:B.zoom,mx:(h.x+d.x)/2,my:(h.y+d.y)/2}}}),n.addEventListener("pointermove",u=>{const h=t.get(u.pointerId);if(!h)return;const d=u.clientX-h.x,f=u.clientY-h.y;if(h.x=u.clientX,h.y=u.clientY,e&&Math.hypot(u.clientX-e.x,u.clientY-e.y)>10&&(i=!0,clearTimeout(r)),s==="pan"&&i){tu(d,f);const p=performance.now(),v=Math.max(1,p-c);c=p,a.x=d/v*16,a.y=f/v*16}else if(s==="drag")NA(u.clientX,u.clientY);else if(s==="pinch"&&t.size===2){const[p,v]=[...t.values()],m=Math.hypot(p.x-v.x,p.y-v.y),g=(p.x+v.x)/2,M=(p.y+v.y)/2;fp(o.zoom*m/o.d),tu(g-o.mx,M-o.my),o.mx=g,o.my=M}});const l=u=>{if(t.has(u.pointerId)){if(t.delete(u.pointerId),clearTimeout(r),t.size||qp(),s==="pinch"){t.size===0&&(s=null),e=null;return}t.size||(s==="drag"?Xp(i,u.clientX,u.clientY):s==="pan"&&!i&&e&&performance.now()-e.t<550&&i0(u.clientX,u.clientY),(s!=="pan"||performance.now()-c>80)&&(a.x=a.y=0),s=null,e=null)}};return n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),n.addEventListener("wheel",u=>{u.preventDefault(),fp(B.zoom*(u.deltaY<0?1.1:.9))},{passive:!1}),document.addEventListener("gesturestart",u=>u.preventDefault()),function(){t.size||Math.abs(a.x)<.2&&Math.abs(a.y)<.2||(tu(a.x,a.y),a.x*=.9,a.y*=.9)}}const YA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ba{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KA=new Jc(-1,1,1,-1,0,1);class JA extends hn{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const ZA=new JA;class P0{constructor(t){this._mesh=new Nt(ZA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,KA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class D0 extends ba{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Mi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ad.clone(t.uniforms),this.material=new Mi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new P0(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qp extends ba{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class QA extends ba{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class t2{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ot);this._width=i.width,this._height=i.height,e=new es(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ur}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new D0(YA),this.copyPass.material.blending=Ji,this.clock=new Sw}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qp!==void 0&&(o instanceof Qp?i=!0:o instanceof QA&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class e2 extends ba{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ie}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const n2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class i2 extends ba{constructor(){super();const t=n2;this.uniforms=ad.clone(t.uniforms),this.material=new hw({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new P0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Am?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const di={clouds:[],birds:[],boats:[],flies:[],foam:[]};function s2(){var o;const n=new Ut;B.farm.add(n);const t=new ri({colorWrite:!1,depthWrite:!1});for(let a=0;a<4;a++){const c=new Ut;for(let l=0;l<5;l++){const u=new Nt(new jn(1.6+Math.random()*1.2,10,8),t);u.position.set((l-2)*1.9,Math.random()*.6,(Math.random()-.5)*2),u.castShadow=!0,c.add(u)}c.position.set(-30+a*16,14,-20+a*9),c.userData.speed=.5+Math.random()*.4,n.add(c),di.clouds.push(c)}const e=new Le({color:16777215,roughness:.8}),i=new Le({color:10135472});for(let a=0;a<4;a++){const c=Kt("gull1",1,1,{shadow:!1}),l=Kt("gull2",1,1,{shadow:!1});if(c&&l){const p=new Ut;p.add(c,l),p.userData={r:16+a*4,h:5+a*.8,sp:.12+a*.03,ph:a*1.7,frames:[c,l]},n.add(p),di.birds.push(p);continue}const u=new Ut,h=new Nt(new Ge(.18,.14,.5),e);u.add(h);const d=new Nt(new Ge(.14,.14,.14),e);d.position.set(0,.06,.3),u.add(d);const f=new Nt(new Ge(.05,.05,.12),new Le({color:16756784}));f.position.set(0,.04,.42),u.add(f);for(const p of[-1,1]){const v=new Ut;v.position.set(p*.09,.03,0);const m=new Nt(new Ge(.6,.03,.26),(p<0,e));m.position.x=p*.3,v.add(m);const g=new Nt(new Ge(.2,.031,.22),i);g.position.x=p*.62,v.add(g),v.userData.side=p,u.add(v)}u.castShadow=!0,u.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),u.userData={r:16+a*4,h:5+a*.8,sp:.12+a*.03,ph:a*1.7},n.add(u),di.birds.push(u)}for(let a=0;a<2;a++){const c=Kt("boat",1,1,{scale:a?.6:.75,shadow:!1})||pe("pirate/boat-row-large",{h:.9});Object.assign(c.userData,{r:34+a*7,sp:(a?-1:1)*(.025+a*.01),ph:a*3}),n.add(c),di.boats.push(c)}for(let a=0;a<2;a++){const c=Jo(Jt+6.2,4.2),l=Jo(Jt+4.6,3.2);c.holes.push(new vh(l.getPoints(24).reverse()));const u=new Nt(new pa(c,24),new ri({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=-.45,u.renderOrder=3,u.userData.ph=a*.5,n.add(u),di.foam.push(u)}const s=[16747224,16765503,9425151,16777215];for(let a=0;a<5;a++){const c=new Ut,l=new ri({color:s[a%4],side:pi});for(const u of[-1,1]){const h=new Nt(new ss(.16,.12),l);h.position.x=u*.08,h.userData.side=u,c.add(h)}c.userData={cx:7+(Math.random()-.5)*12,cz:7+(Math.random()-.5)*10,ph:Math.random()*6},n.add(c),di.flies.push(c)}const r=Kt("signboard",1,1,{scale:2.6});if(r){const a=r.userData.plane.material,c=a.map.image,l=document.createElement("canvas");l.width=c.width*2,l.height=c.height*2;const u=l.getContext("2d"),h=new Ls(l);h.colorSpace=Ie,h.anisotropy=4;const d=()=>{u.setTransform(2,0,0,2,0,0),u.clearRect(0,0,c.width,c.height),u.drawImage(c,0,0),u.fillStyle="#fff8e7",u.strokeStyle="#6e4322",u.lineJoin="round",u.textAlign="center",u.textBaseline="middle",[["Maisie's",112],["Farm",196]].forEach(([p,v])=>{let m=62;for(u.font=`800 ${m}px "Baloo 2", system-ui, sans-serif`;u.measureText(p).width>250&&m>30;)u.font=`800 ${--m}px "Baloo 2", system-ui, sans-serif`;u.setTransform(2,-.54,0,2,170*2,v*2),u.lineWidth=9,u.strokeText(p,0,2),u.fillText(p,0,2)}),h.needsUpdate=!0};d(),a.map=h;const f=rn(14+$t,Jt-1);r.position.set(f.x,0,f.z+.9),n.add(r),(o=document.fonts)==null||o.ready.then(d)}}function r2(n,t){for(const e of di.clouds)e.position.x+=t*e.userData.speed,e.position.z+=t*e.userData.speed*.4,e.position.x>34&&(e.position.x=-34,e.position.z=-24+Math.random()*20);for(const e of di.birds){const i=e.userData,s=n*i.sp+i.ph;if(e.position.set(Math.cos(s)*i.r,i.h+Math.sin(n*.7+i.ph)*.6,Math.sin(s)*i.r),i.frames){const[o,a]=i.frames,c=Math.sin(n*7+i.ph)>0;o.visible=c,a.visible=!c;const l=-Math.sin(s)*i.sp,u=Math.cos(s)*i.sp,h=l-u>0==!!o.userData.plane.userData.faceR?1:-1;o.userData.plane.scale.x=a.userData.plane.scale.x=h;continue}e.rotation.y=-s,e.rotation.z=.25;const r=Math.sin(n*9+i.ph)*.5;e.children.forEach(o=>{o.userData.side&&(o.rotation.z=o.userData.side*r)})}for(const e of di.boats){const i=e.userData,s=n*i.sp+i.ph;if(e.position.set(Math.cos(s)*i.r,-.5+Math.sin(n*1.3+i.ph)*.05,Math.sin(s)*i.r),i.plane){i.isArt=!0,Li(e,-Math.sin(s)*i.sp,Math.cos(s)*i.sp),i.plane.rotation.z=Math.sin(n+i.ph)*.04;continue}e.rotation.y=-s+(i.sp>0?Math.PI:0),e.rotation.z=Math.sin(n+i.ph)*.04}for(const e of di.foam){const i=(n*.25+e.userData.ph)%1;e.scale.setScalar(1+i*.1),e.material.opacity=.75*(1-i)}for(const e of di.flies){const i=e.userData,s=n*.6+i.ph;e.position.set(i.cx+Math.cos(s)*1.4,.7+Math.sin(n*2+i.ph)*.25,i.cz+Math.sin(s*1.3)*1.2),e.rotation.y=-s;const r=Math.sin(n*18+i.ph)*1.1;e.children.forEach(o=>{o.rotation.y=o.userData.side*r})}}const o2={harvest:.03,collect:.03,make:.04,clear:.08,chest:.35,deliver:.06,visitor:.1,crate:.06,help:.06},I0=Vo.flatMap(n=>n.pieces.map(t=>({set:n.id,id:t[0],n:t[1],model:t[2]})));function L0(n=new Date){const t=(n.getDay()+6)%7;return new Date(n.getFullYear(),n.getMonth(),n.getDate()-t)}function ca(){const n=L0().toDateString();return(!_.ev||_.ev.week!==n)&&(_.ev={week:n,pts:0,claimed:[]}),_.coll||(_.coll={}),_.ev}const a2=()=>L0().getTime()+7*864e5-Date.now();let Sc={};function c2(n){Sc=n,ca(),cr("act",(t,e,i=1)=>{const s=ca(),r=fi.gain[t];r&&(s.pts+=r,l2()),Math.random()<(o2[t]||0)&&u2(wn(I0))}),st("#btnEvent").onclick=()=>{W("tap"),k0()},st("#btnColl").onclick=()=>{W("tap"),N0()},st("#evIco").src=me["ev:token"],Ma()}function l2(){st("#btnEvent").animate([{transform:"scale(1.2)"},{transform:"scale(1)"}],{duration:300}),Ma()}function Ma(){const n=ca(),t=fi.tiers.some((i,s)=>n.pts>=i.at&&!n.claimed.includes(s));st("#evBadge").hidden=!t,st("#evPts").textContent=n.pts;const e=Vo.some(i=>i.pieces.every(s=>(_.coll[s[0]]||0)>0));st("#collBadge").hidden=!e}function u2(n){_.coll[n.id]=(_.coll[n.id]||0)+1;const t=document.createElement("div");t.className="found",t.innerHTML=`<img src="${me["col:"+n.id]}" alt=""><div><small>Tìm thấy đồ sưu tập!</small><b>${Yt(n.n)}</b></div>`,st("#fx").appendChild(t),setTimeout(()=>t.remove(),3e3),W("collect"),Ma(),se()}function h2(n){return n.coins?`${Qe}${n.coins}`:n.gems?`${kn}${n.gems}`:`<img class="inl" src="${me["decor:"+n.decor]}" alt="">${Yt(qn[n.decor].n)}`}function k0(){const n=ca(),t=fi.tiers[fi.tiers.length-1].at,e=fi.tiers.map((i,s)=>{const r=n.claimed.includes(s),o=n.pts>=i.at&&!r;return`<div class="tier ${r?"done":""}"><span class="at"><img class="inl" src="${me["ev:token"]}" alt="">${i.at}</span>
      <span class="rw">${h2(i)}</span>
      ${r?'<span class="ok">Đã nhận ✓</span>':`<button class="btn small ${o?"orange":"gray"}" data-tier="${s}">${o?"Nhận":"Chưa đủ"}</button>`}</div>`}).join("");Si("event",fi.n,`<p class="hint">Gom <b>${fi.token}</b> bằng cách thu hoạch, làm bánh, giao hàng, bán cho khách và phiêu lưu. Còn <b>${wi(a2())}</b> là hết tuần.</p>
    <div class="prog"><i style="width:${Math.min(100,n.pts/t*100)}%"></i><span><img class="inl" src="${me["ev:token"]}" alt=""> ${n.pts} / ${t}</span></div>
    <div class="tiers">${e}</div>`),document.querySelectorAll("[data-tier]").forEach(i=>i.onclick=()=>d2(+i.dataset.tier))}function d2(n){var i;const t=ca(),e=fi.tiers[n];if(t.pts<e.at||t.claimed.includes(n)){ht(`Cần ${e.at} ${fi.token.toLowerCase()}`),W("no");return}t.claimed.push(n),e.coins&&(_.coins+=e.coins),e.gems&&(_.gems+=e.gems),e.decor&&((_.pendingDecor||(_.pendingDecor=[])).push(e.decor),Xe(),(i=Sc.placePending)==null||i.call(Sc)),Yn(),W("level"),se(),ge(),Ma(),e.decor||k0()}function N0(){const n=Vo.map(t=>{const e=t.pieces.every(i=>(_.coll[i[0]]||0)>0);return`<div class="cset"><h3 class="sub">${Yt(t.n)}</h3><div class="cpieces">${t.pieces.map(i=>{const s=_.coll[i[0]]||0;return`<div class="cp ${s?"":"none"}"><img src="${me["col:"+i[0]]}" alt=""><small>${Yt(i[1])}</small>${s?`<span class="q">${s}</span>`:""}</div>`}).join("")}</div>
    <div class="row" style="justify-content:center;gap:10px;margin-top:8px"><span class="reward">${Qe}${t.reward.coins} ${kn}${t.reward.gems}</span>
    <button class="btn small ${e?"orange":"gray"}" data-set="${t.id}">${e?"Đổi thưởng":"Chưa đủ bộ"}</button></div></div>`}).join("");Si("coll","Sổ sưu tập",`<p class="hint">Đồ sưu tập rơi ra ngẫu nhiên khi thu hoạch, làm bánh, dọn dẹp và mở rương báu.</p>${n}`),document.querySelectorAll("[data-set]").forEach(t=>t.onclick=()=>{const e=Vo.find(i=>i.id===t.dataset.set);if(!e.pieces.every(i=>(_.coll[i[0]]||0)>0)){ht("Còn thiếu vài món trong bộ này"),W("no");return}e.pieces.forEach(i=>_.coll[i[0]]--),_.coins+=e.reward.coins,_.gems+=e.reward.gems,Yn(),W("level"),se(),ge(),Ma(),N0()})}function f2(){const n=I0.map(t=>["col:"+t.id,{model:t.model}]);return n.push(["ev:token",{model:fi.icon,paint:fi.tint}]),n}const Fh=[["grasstuft",.55,5],["grasstuft",.4,4],["daisies",.45,2],["flower_yel",.38,1],["flower_pur",.38,1],["flower_red",.36,1],["rock",.28,1]],p2=.14,m2=new Set(["tree","obstacle","decor"]),g2=new Set(["rock","bigrock","claymound","stump","logs","path","well","bench","barrel","crate","fountain","lotuspond","minilight","lighthouse_big","sandcastle","goldboat","boat","cart","tent","flag","chest","campfire","whitefence","wheelbarrow","lantern"]),Fr=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296},v2=Fh.reduce((n,t)=>n+t[2],0),_2=n=>{let t=n*v2;for(const e of Fh)if((t-=e[2])<0)return e;return Fh[0]};let U0=[],tm="";const O0=[];let Bh=[];const x2=n=>n.traverse(t=>{t.raycast=()=>{}});function y2(){for(let n=0;n<Jt;n++)for(let t=0;t<Jt;t++){if(Fr(n,t,1)>p2)continue;const[e,i]=_2(Fr(n,t,2)),s=Ho[e]&&Kt(e,.4,.4,{scale:i/Ho[e].width,shadow:!1});if(!s)continue;const r=rn(n,t);s.position.set(r.x-.2+(Fr(n,t,3)-.5)*.6,0,r.z-.2+(Fr(n,t,4)-.5)*.6),Fr(n,t,5)<.5&&(s.userData.plane.scale.x=-1),x2(s),s.visible=!1,B.farm.add(s),U0.push({x:n,z:t,obj:s}),e!=="rock"&&O0.push({p:s.userData.plane,ph:Fr(n,t,6)*6.28,amp:.05})}F0(!0)}function F0(n){const t=_.objs.length+":"+_.objs.reduce((i,s)=>i+s.x*31+s.z*17+s.id,0)+":"+JSON.stringify(_.zones||{});if(!n&&t===tm)return;tm=t;const e=fa();for(const i of U0)i.obj.visible=!e.has(i.x+","+i.z)&&Xn(i.x,i.z);b2()}function b2(){Bh=[];for(const n of _.objs){if(!m2.has(n.k)||g2.has(n.t))continue;const t=ue.get(n.id);if(!t)continue;const e=n.k==="tree"?.022:.035;t.root.traverse(i=>{i.userData.sprite&&Bh.push({p:i,ph:n.id*1.7%6.28,amp:e})})}}function M2(n){for(const t of[O0,Bh])for(const e of t)e.p.parent&&(e.p.rotation.z=Math.sin(n*1.3+e.ph)*e.amp+Math.sin(n*2.9+e.ph*1.7)*e.amp*.3)}async function w2(){fv();const n=st("#loadfill");await Zw(f=>{n.style.width=f*80+"%"}),await $w(),st("#loadtxt").textContent="Đang vẽ hình…",await rS([...oS(),...nE(),...f2()]),n.style.width="100%";const t=st("#c");Vw(t);for(const f of _.objs)Qi(f);VT(Qi),gv(Qi),tA(),ZS(),YS(),y2(),kT(),s2(),fr(rn(12.5+$t,11.5+$t));const e=jA(t);GA(),c2({placePending:w0}),ge(),st("#loading").hidden=!0,st("#hud").hidden=!1,document.addEventListener("pointerdown",Qn,{once:!0}),setInterval(Zp,250),Zp();const i=new es(window.innerWidth,window.innerHeight,{type:ur,samples:4}),s=new t2(B.renderer,i);s.addPass(new e2(B.scene,B.camera)),s.addPass(new i2),s.addPass(new D0({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(tDiffuse, vUv);
        float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
        c.rgb = mix(vec3(l), c.rgb, 1.32);                 // độ bão hoà
        c.rgb = (c.rgb - 0.5) * 1.06 + 0.5;               // tương phản nhẹ
        c.rgb += (1.0 - c.rgb) * 0.06;                    // nâng vùng tối cho trong trẻo
        c.rgb *= vec3(1.03, 1.0, 0.97);                   // ấm hơn chút
        gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
      }`}));const r=()=>{s.setPixelRatio(B.renderer.getPixelRatio()),s.setSize(window.innerWidth,window.innerHeight)};r(),window.addEventListener("resize",r);let o=performance.now(),a=0,c=!1,l=0;const u=()=>{c=!0,B.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),B.scene.traverse(f=>{var p;f.isDirectionalLight&&f.shadow&&(f.shadow.mapSize.set(1024,1024),(p=f.shadow.map)==null||p.dispose(),f.shadow.map=null)}),window.dispatchEvent(new Event("resize"))};delete _.lowGfx,_.lowGfx2&&u();const h=performance.now(),d=()=>{var m;const f=performance.now(),p=Math.min(.1,(f-o)/1e3);o=f,!c&&!document.hidden&&f-h>15e3&&(a=p>.045?a+p:Math.max(0,a-p*.5),a>8&&(_.lowGfx2=!0,u()));const v=f/1e3;if(e(),B.mode==="adv")AT(v,p);else if(B.mode==="nb")ZT(v,p);else{for(const g of ue.values())(m=g.update)==null||m.call(g,v,p),eE(g.root);tE(v,p),KS(v),fE(v),UT(v,p),r2(v,p),M2(v),v-l>.5&&(l=v,F0())}B.waterTex.offset.x=v*.01%1,B.waterTex.offset.y=v*.006%1,XA(),c?B.renderer.render(B.scene,B.camera):s.render(),requestAnimationFrame(d),c&&(B.renderer.shadowMap.autoUpdate=Math.floor(v*30)%2===0)};d(),document.addEventListener("visibilitychange",()=>{document.hidden&&se()}),window.addEventListener("pagehide",se)}w2().catch(n=>{console.error(n),st("#loadtxt").textContent="Có lỗi khi mở game. Hãy tải lại trang."});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/maisies-farm/sw.js").catch(()=>{}));
