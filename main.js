// Starblast Team Deathmatch (TDM)
// Update 0.95.3
// Coding: Money & Bhpsngum
// Author of idea: Nexagon & L.Gaming
// DO NOT modify anything below if you don't know what you're doing :D

var a = {};
a.Advanced_Fighter_601 = '{"name":"Advanced-Fighter","level":6,"model":1,"size":2,"next":[null,null],"specs":{"shield":{"capacity":[200,350],"reload":[4,6]},"generator":{"capacity":[120,200],"reload":[50,60]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-100,-80,-90,-50,0,50,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,15,25,40,25,20,0],"height":[0,5,10,30,25,20,10,0],"propeller":true,"texture":[4,4,1,1,10,1,1],"laser":{"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"recoil":150,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-35,"z":33},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,10,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,12,18,12,0],"propeller":false,"texture":[7,9,9,7]},"side_propellers":{"section_segments":10,"offset":{"x":30,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-50,-20,0,20,80,70],"z":[0,0,0,0,0,0]},"width":[15,20,10,25,10,0],"height":[10,15,15,10,5,0],"angle":0,"propeller":true,"texture":[3,63,4,10,3]},"cannons":{"section_segments":12,"offset":{"x":70,"y":50,"z":-30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"propeller":false,"texture":[4,4,10,4,63,4],"laser":{"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}},"cannons2":{"section_segments":12,"offset":{"x":95,"y":50,"z":-40},"position":{"x":[0,0,0,0],"y":[-50,-20,40,50],"z":[0,0,0,0]},"width":[2,5,5,2],"height":[2,15,15,2],"angle":0,"propeller":false,"texture":6,"laser":{"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}}},"wings":{"main":{"length":[100,30,20],"width":[100,50,40,30],"angle":[-25,20,25],"position":[30,70,50,50],"bump":{"position":-20,"size":20},"offset":{"x":0,"y":0,"z":0},"texture":[11,11,63],"doubleside":true},"winglets":{"length":[40],"width":[40,20,30],"angle":[10,-10],"position":[-50,-70,-65],"bump":{"position":0,"size":30},"texture":63,"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Advanced-Fighter","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[200,350],"reload":[4,6]},"generator":{"capacity":[120,200],"reload":[50,60]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"shape":[4,3.65,3.454,3.504,3.567,2.938,1.831,1.707,1.659,1.943,1.92,1.882,1.896,3.96,5.654,5.891,6.064,5.681,5.436,5.573,5.122,4.855,4.675,4.626,4.479,4.008,4.479,4.626,4.675,4.855,5.122,5.573,5.436,5.681,6.064,5.891,5.654,3.96,3.88,1.882,1.92,1.943,1.659,1.707,1.831,2.938,3.567,3.504,3.454,3.65],"lasers":[{"x":0,"y":-4,"z":0.4,"angle":0,"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"spread":0,"error":0,"recoil":150},{"x":2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.064,"next":[null,null]}}';
a.Scorpion_602 = '{"name":"Scorpion","level":6,"model":2,"size":2,"next":[null,null],"specs":{"shield":{"capacity":[225,400],"reload":[5,7]},"generator":{"capacity":[80,175],"reload":[38,50]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-40,-30,0,50,100,120,110],"z":[-10,-5,0,0,0,0,20,20]},"width":[0,12,20,15,25,10,5],"height":[0,10,15,25,15,10,5],"texture":[1,4,63,11,11,4],"propeller":false},"tail":{"section_segments":14,"offset":{"x":0,"y":70,"z":50},"position":{"x":[0,0,0,0,0,0],"y":[-70,-25,-10,20,40,50],"z":[0,0,0,0,-10,-20]},"width":[0,5,35,25,5,5],"height":[0,5,25,20,5,5],"texture":[6,4,63,10,4],"laser":{"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"angle":0,"error":0,"recoil":100}},"cockpit":{"section_segments":8,"offset":{"x":13,"y":-44,"z":12},"position":{"x":[-5,0,0,0,0],"y":[-15,-5,0,5,15],"z":[0,0,0,1,0]},"width":[0,8,10,8,0],"height":[0,5,5,5,0],"texture":[6,5],"propeller":false},"deco":{"section_segments":8,"offset":{"x":70,"y":0,"z":-10},"position":{"x":[0,0,0,10,-5,0,0,0],"y":[-115,-80,-100,-60,-30,-10,20,0],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,15,15,20,10,0],"height":[1,5,15,20,35,30,10,0],"texture":[6,6,1,1,11,2,12],"laser":{"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"angle":5,"error":0},"propeller":true},"wingends":{"section_segments":8,"offset":{"x":105,"y":-80,"z":-10},"position":{"x":[0,2,4,2,0],"y":[-20,-10,0,10,20],"z":[0,0,0,0,0]},"width":[2,3,6,3,2],"height":[5,15,22,17,5],"texture":4,"angle":0,"propeller":false}},"wings":{"main":{"length":[80,30],"width":[40,30,20],"angle":[-10,20],"position":[30,-50,-80],"texture":63,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font":{"length":[80,30],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":4,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Scorpion","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[225,400],"reload":[5,7]},"generator":{"capacity":[80,175],"reload":[38,50]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,100]}},"shape":[3.6,2.846,2.313,2.192,5.406,5.318,5.843,5.858,5.621,4.134,3.477,3.601,3.622,3.464,3.351,3.217,1.458,1.391,1.368,1.37,1.635,2.973,3.47,3.911,4.481,4.804,4.481,3.911,3.47,2.973,1.635,1.37,1.368,1.391,1.458,3.217,3.351,3.464,3.622,3.601,3.477,4.134,5.621,5.858,5.843,5.318,5.406,2.192,2.313,2.846],"lasers":[{"x":0,"y":0,"z":2,"angle":0,"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"spread":0,"error":0,"recoil":100},{"x":2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0},{"x":-2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0}],"radius":5.858,"next":[null,null]}}';
a.Marauder_603 = '{"name":"Marauder","level":6,"model":3,"size":1.4,"next":[null,null],"specs":{"shield":{"capacity":[210,350],"reload":[8,11]},"generator":{"capacity":[85,160],"reload":[25,40]},"ship":{"mass":250,"speed":[70,110],"rotation":[60,80],"acceleration":[80,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-20,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,0,30,60,80,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,18,23,30,25,25,30,35,0],"height":[0,5,10,12,12,20,15,15,15,0],"texture":[6,4,1,10,1,1,11,12,17],"propeller":true,"laser":{"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"recoil":0,"number":1,"error":0}},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-85,"z":22},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,95,125],"z":[-1,-2,-1,-1,3]},"width":[5,12,14,15,5],"height":[0,12,15,15,0],"texture":[8.98,8.98,4]},"outriggers":{"section_segments":10,"offset":{"x":25,"y":0,"z":-10},"position":{"x":[-5,-5,8,-5,0,0,0,0,0,0],"y":[-100,-125,-45,0,30,40,70,80,100,90],"z":[10,10,5,5,0,0,0,0,0,0,0,0]},"width":[0,6,10,10,15,15,15,15,10,0],"height":[0,10,20,25,25,25,25,25,20,0],"texture":[13,4,4,63,4,18,4,13,17],"laser":{"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"recoil":0,"number":1,"error":0},"propeller":true},"intake":{"section_segments":12,"offset":{"x":25,"y":-5,"z":10},"position":{"x":[0,0,5,0,-3,0,0,0,0,0],"y":[-10,-30,-5,35,60,70,85,100,85],"z":[0,-6,0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,10,5,0],"height":[0,15,15,20,20,15,15,5,0],"texture":[6,4,63,4,63,18,4,17]}},"wings":{"main":{"length":[20,70,35],"width":[50,55,40,20],"angle":[0,-20,0],"position":[20,20,70,25],"texture":[3,18,63],"doubleside":true,"bump":{"position":30,"size":15},"offset":{"x":0,"y":0,"z":13}},"spoiler":{"length":[20,45,0,5],"width":[40,40,20,30,0],"angle":[0,20,90,90],"position":[60,60,80,80,90],"texture":[10,11,63],"doubleside":true,"bump":{"position":30,"size":18},"offset":{"x":0,"y":0,"z":30}},"font":{"length":[37],"width":[40,15],"angle":[-10],"position":[0,-45],"texture":[63],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":35,"y":-20,"z":10}},"shields":{"doubleside":true,"offset":{"x":12,"y":60,"z":-15},"length":[0,15,45,20],"width":[30,30,65,65,30,30],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4],"bump":{"position":0,"size":4}}},"typespec":{"name":"Marauder","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[210,350],"reload":[8,11]},"generator":{"capacity":[85,160],"reload":[25,40]},"ship":{"mass":250,"speed":[70,110],"rotation":[60,80],"acceleration":[80,120]}},"shape":[2.665,3.563,3.573,2.856,2.359,2.03,2.85,2.741,2.228,1.71,1.404,1.199,1.11,3.408,3.491,3.521,3.44,3.385,3.439,3.481,3.181,2.932,2.962,2.944,2.85,2.244,2.85,2.944,2.962,2.932,3.181,3.481,3.439,3.385,3.44,3.521,3.491,3.408,1.11,1.199,1.404,1.71,2.228,2.741,2.85,2.03,2.359,2.856,3.573,3.563],"lasers":[{"x":0,"y":-2.66,"z":0.28,"angle":0,"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.573,"next":[null,null]}}';
a.Condor_604 = '{"name":"Condor","level":6,"model":4,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[225,400],"reload":[7,10]},"generator":{"capacity":[70,130],"reload":[30,48]},"ship":{"mass":200,"speed":[75,105],"rotation":[50,70],"acceleration":[80,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-110,-95,-100,-100,-45,-40,-25,-23,15,20,55,80,100,90],"z":[-10,-9,-8,-7,-6,-4,-2,0,0,0,0,0,0,0]},"width":[0,2,5,10,25,27,27,25,25,27,40,35,30,0],"height":[0,2,5,10,25,27,27,25,25,27,20,15,10,0],"texture":[6,2,3,10,5,63,5,2,5,3,63,11,4],"propeller":true,"laser":{"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"angle":0,"error":0}},"cannons":{"section_segments":12,"offset":{"x":75,"y":30,"z":-25},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,10,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"angle":0,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-60,"z":8},"position":{"x":[0,0,0,0],"y":[-25,-8,20,65],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,12,15,5],"texture":[9]}},"wings":{"back":{"offset":{"x":0,"y":25,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,40],"position":[0,20,0],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":20}},"front":{"offset":{"x":0,"y":55,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,-40],"position":[-60,-20,-20],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":10}}},"typespec":{"name":"Condor","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[225,400],"reload":[7,10]},"generator":{"capacity":[70,130],"reload":[30,48]},"ship":{"mass":200,"speed":[75,105],"rotation":[50,70],"acceleration":[80,120]}},"shape":[3.3,3.015,2.45,1.959,1.658,1.477,1.268,1.11,1.148,1.237,2.34,2.448,2.489,3.283,3.363,3.501,3.586,3.333,3.496,3.502,3.154,2.52,3.016,3.132,3.054,3.006,3.054,3.132,3.016,2.52,3.154,3.502,3.496,3.333,3.586,3.501,3.363,3.283,2.49,2.448,2.34,1.237,1.148,1.11,1.268,1.477,1.658,1.959,2.45,3.015],"lasers":[{"x":0,"y":-3.3,"z":0,"angle":0,"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.586,"next":[null,null]}}';
a.A_Speedster_605 = '{"name":"A-Speedster","level":6,"model":5,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621,"next":[null,null]}}';
a.Rock_Tower_606 = '{"name":"Rock-Tower","level":6,"model":6,"size":2.1,"next":[null,null],"specs":{"shield":{"capacity":[300,500],"reload":[8,11]},"generator":{"capacity":[75,115],"reload":[35,45]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-20,-25,40,85,70],"z":[-10,-8,-5,0,0,0,0,0,0]},"width":[0,40,45,10,12,30,30,20,0],"height":[0,10,12,8,12,10,25,20,0],"texture":[4,63,4,4,4,11,10,12],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,0,10,20,30],"z":[0,0,0,0,0,0]},"width":[0,10,15,15,10,5],"height":[0,10,15,15,10,5],"texture":9,"propeller":false},"dimeds_banhammer":{"section_segments":6,"offset":{"x":25,"y":-70,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-20,-10,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,0,5,7,6,0],"height":[0,0,5,7,6,0],"texture":[6,6,6,10,12],"angle":0,"laser":{"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"error":5}},"propulsors":{"section_segments":8,"offset":{"x":30,"y":50,"z":0},"position":{"x":[0,0,5,5,0,0,0],"y":[-45,-50,-20,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,0],"height":[0,15,20,25,20,10,0],"texture":[11,2,3,4,5,12],"angle":0,"propeller":true}},"wings":{"main":{"length":[55,15],"width":[60,40,30],"angle":[-10,20],"position":[30,40,30],"texture":63,"doubleside":true,"offset":{"x":0,"y":20,"z":-5},"bump":{"position":30,"size":20}},"finalizer_fins":{"length":[20],"width":[20,10],"angle":[-70],"position":[-42,-30],"texture":63,"doubleside":true,"offset":{"x":35,"y":-35,"z":0},"bump":{"position":0,"size":30}}},"typespec":{"name":"Rock-Tower","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[300,500],"reload":[8,11]},"generator":{"capacity":[75,115],"reload":[35,45]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,90]}},"shape":[3.78,3.758,3.974,3.976,3.946,3.508,1.532,1.64,1.556,1.426,1.347,1.298,1.269,1.764,1.894,2.075,3.269,3.539,3.933,3.989,4.058,4.127,4.524,4.416,3.634,3.577,3.634,4.416,4.524,4.127,4.058,3.989,3.933,3.539,3.269,2.075,1.894,1.764,1.68,1.298,1.347,1.426,1.556,1.64,1.532,3.508,3.946,3.976,3.974,3.758],"lasers":[{"x":1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0}],"radius":4.524,"next":[null,null]}}';
a.Barracuda_607 = '{"name":"Barracuda","level":6,"model":7,"size":2.4,"next":[null,null],"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":675,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,-10,0,20,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,25,35,40,40,35,30,0],"height":[0,5,40,45,40,60,70,60,30,0],"texture":[10,2,10,2,3,13,13,63,12],"propeller":true},"front":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-85,-70,-60,-20],"z":[0,0,0,0,0]},"width":[0,40,45,10,12],"height":[0,15,18,8,12],"texture":[8,63,4,4,4],"propeller":true},"propeller":{"section_segments":10,"offset":{"x":40,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,20,15,0],"height":[0,10,15,15,15,10,10,18,8,0],"texture":[4,4,10,3,3,63,4,63,12],"propeller":true},"sides":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-75,-60,-50,-10,10,50,60,75,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,30,35,10,12,12,10,35,30,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,0,10,30,50],"z":[0,0,0,0,0,0]},"width":[0,12,18,20,15,0],"height":[0,20,22,24,20,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":20,"z":15},"length":[70],"width":[70,30],"angle":[90],"position":[0,30],"texture":[63],"bump":{"position":10,"size":30}},"top2":{"doubleside":true,"offset":{"x":0,"y":51,"z":5},"length":[70],"width":[50,20],"angle":[90],"position":[0,60],"texture":[63],"bump":{"position":10,"size":30}}},"typespec":{"name":"Barracuda","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":675,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888,"next":[null,null]}}';
a.O_Defender_608 = '{"name":"O-Defender","level":6,"model":8,"size":2.2,"next":[null,null],"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-88,0,90,91],"z":[0,0,0,0,0]},"width":[5,6,25,10,20],"height":[2,10,40,20,20],"texture":[63,1,10],"propeller":true,"laser":{"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":50,"y":0,"z":0},"position":{"x":[-40,-5,15,25,20,0,-50],"y":[-100,-70,-40,-10,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,20,20,20,20,20,5],"height":[15,25,30,30,30,25,0],"texture":[0,1,2,3,4,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"bottom_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[80,0],"width":[130,50],"angle":[-1],"position":[0,-30],"texture":[8],"bump":{"position":-20,"size":15}}},"typespec":{"name":"O-Defender","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448,"next":[null,null]}}';
a.H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2,"next":[null,null],"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,10],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[7,10],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917,"next":[null,null]}}';
a.Toscain_508 = '{"name":"Toscain","level":5,"model":9,"size":1.7,"next":[null,null],"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":9,"code":509,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01,"next":[null,null]}}';
a.Bat_Defender_507 = '{"name":"Bat-Defender","level":5,"model":7,"size":1.8,"next":[null,null],"specs":{"shield":{"capacity":[300,400],"reload":[7,10]},"generator":{"capacity":[70,100],"reload":[25,35]},"ship":{"mass":350,"speed":[70,90],"rotation":[40,70],"acceleration":[90,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-99,-100,-97,-45,-40,-25,-23,15,20,55,50],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,30,17,27,25,25,27,15,5],"height":[0,2,2,25,27,27,25,25,27,20,0],"texture":[6,5,1,4,6,4,63,6,2,12]},"propulsors":{"section_segments":8,"offset":{"x":30,"y":-20,"z":0},"position":{"x":[-5,-2,0,0,0,0,0,0,0,0,0],"y":[30,55,60,80,95,100,90,95],"z":[0,0,0,0,0,0,0,0]},"width":[12,14,14,10,12,10,0],"height":[5,14,14,10,12,10,0],"texture":[2,6,4,11,6,12],"propeller":true},"lasers":{"section_segments":8,"offset":{"x":70,"y":-40,"z":10},"position":{"x":[0,0,0,0,0],"y":[25,90,10,50,60],"z":[0,0,0,0,0]},"width":[5,5,0,10,5],"height":[5,1,0,0,5],"texture":[63,6],"angle":3,"laser":{"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-45,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[-10,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,16,0],"texture":[9]}},"wings":{"wings":{"offset":{"x":20,"y":0,"z":0},"length":[35,15,20,15],"width":[100,50,50,40,45],"angle":[-10,20,0,0],"position":[0,0,10,30,0],"texture":[11,4],"bump":{"position":-20,"size":15}},"side":{"doubleside":true,"offset":{"x":105,"y":30,"z":-30},"length":[30,10,30],"width":[40,60,60,40],"angle":[90,110,110,90],"position":[0,-30,-30,0],"texture":[63],"bump":{"position":0,"size":15}}},"typespec":{"name":"Bat-Defender","level":5,"model":7,"code":507,"specs":{"shield":{"capacity":[300,400],"reload":[7,10]},"generator":{"capacity":[70,100],"reload":[25,35]},"ship":{"mass":350,"speed":[70,90],"rotation":[40,70],"acceleration":[90,100]}},"shape":[3.604,3.424,2.813,2.415,2.149,1.968,1.913,1.973,2.073,2.759,3.932,3.974,4.081,4.084,4.04,4.116,4.187,3.661,2.16,2.365,2.719,3.22,3.183,3.028,2.016,1.984,2.016,3.028,3.183,3.22,2.719,2.365,2.16,3.661,4.187,4.116,4.04,4.081,4.084,3.974,3.932,2.759,2.073,1.973,1.913,1.968,2.149,2.415,2.813,3.424],"lasers":[{"x":2.539,"y":-1.08,"z":0.36,"angle":3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.539,"y":-1.08,"z":0.36,"angle":-3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.187,"next":[null,null]}}';
a.Howler_506 = '{"name":"Howler","level":5,"model":6,"size":1.2,"zoom":1,"next":[null,null],"specs":{"shield":{"capacity":[275,340],"reload":[5,7]},"generator":{"capacity":[80,110],"reload":[35,50]},"ship":{"mass":225,"speed":[85,98],"rotation":[70,95],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-145,-135,-125,-130,-100,-55,5,60,85,120,118],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,8,20,30,35,35,30,22,0],"height":[0,5,5,8,15,20,33,30,30,22,0],"texture":[17,4,13,3,2,1,10,31,12,17],"propeller":true,"laser":{"damage":[2.5,4],"rate":6,"speed":[160,210],"number":2,"recoil":0,"type":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-80,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-16,30,60],"z":[-4,-4,1,0,0,0,0,0,0,0,0,0]},"width":[0,6,16,12],"height":[0,4,16,12],"texture":[2,9,31]},"front1":{"section_segments":8,"offset":{"x":22,"y":-125,"z":0},"position":{"x":[0,0,0,0,0,0,-5],"y":[-22.5,-12,-4.5,-7.5,22.5,60],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,4.5,4.5,6,12,9],"height":[0,4.5,4.5,6,12,9],"texture":[17,4,3],"laser":{"damage":[9,15],"rate":1,"speed":[150,200],"number":1,"recoil":25,"type":2}},"front2":{"section_segments":10,"offset":{"x":32,"y":-95,"z":0},"position":{"x":[-4,-4,0,-1],"y":[0,-12,22.5,60],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,12,9],"height":[0,12,18,15],"texture":[13,2,63],"angle":0},"propulsors":{"section_segments":8,"offset":{"x":40,"y":30,"z":-5},"position":{"x":[-12,-12,-2,0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,20,50,48],"z":[5,5,5,0,0,0,0,0,0,0,0,0,0]},"width":[0,3.5999999999999996,12,24,14.399999999999999,0],"height":[0,3.5999999999999996,15.6,24,14.399999999999999,0],"texture":[4,31,10,13,17],"propeller":true},"uwing":{"section_segments":[0,60,120,180],"offset":{"x":-20,"y":-30,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[-65,-70,40,80,110],"z":[0,0,0,0,0,0]},"width":[0,5,25,25,0],"height":[0,10,25,25,20],"texture":[4]}},"wings":{"main":{"doubleside":true,"offset":{"x":20,"y":-20,"z":5},"length":[89,0],"width":[130,60],"angle":[-12,-12],"position":[0,80,80],"texture":18,"bump":{"position":20,"size":5}},"sides":{"doubleside":true,"offset":{"x":20,"y":-20,"z":10},"length":[84,-3,5,12,-5],"width":[25,25,140,140,50,50],"angle":[-12,5,5,5,5],"position":[40,85,55,55,70,70],"texture":[63,4,63,4,17],"bump":{"position":35,"size":15}}},"typespec":{"name":"Howler","level":5,"model":6,"code":506,"specs":{"shield":{"capacity":[275,340],"reload":[5,7]},"generator":{"capacity":[80,110],"reload":[35,50]},"ship":{"mass":225,"speed":[85,98],"rotation":[70,95],"acceleration":[90,120]}},"shape":[3.96,3.579,3.36,2.703,2.264,1.914,1.655,1.622,1.629,1.67,2.637,2.622,2.666,2.756,2.878,3.003,3.196,3.358,3.496,3.55,2.322,2.273,2.121,2.457,2.443,2.405,2.443,2.457,2.121,2.273,2.322,3.55,3.496,3.358,3.196,3.003,2.878,2.756,2.666,2.622,2.637,1.67,1.629,1.622,1.655,1.914,2.264,2.703,3.36,3.579],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[2.5,4],"rate":6,"type":1,"speed":[160,210],"number":2,"spread":0,"error":0,"recoil":0},{"x":0.528,"y":-3.54,"z":0,"angle":0,"damage":[9,15],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":25},{"x":-0.528,"y":-3.54,"z":0,"angle":0,"damage":[9,15],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":25}],"radius":3.96,"next":[null,null]}}';
a.Shadow_X_2_505 = '{"name":"Shadow X-2","level":5,"model":5,"size":1.1,"next":[null,null],"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-2","level":5,"model":5,"code":505,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199,"next":[null,null]}}';
a.Aetos_504 = '{"name":"Aetos","level":5,"model":4,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[80,140],"reload":[35,45]},"ship":{"mass":175,"speed":[90,100],"rotation":[70,90],"acceleration":[110,130]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-99,-98,-50,0,100,80],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,17,28,20,0],"height":[0,2,4,15,25,25,0],"texture":[4,6,10,10,11,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"lasers":{"section_segments":8,"offset":{"x":81,"y":-15,"z":-30},"position":{"x":[0,0,0,0,0],"y":[25,70,10,80,90],"z":[0,0,0,0,0]},"width":[5,0,0,5,0],"height":[5,5,0,5,0],"texture":[63,63,6],"angle":2,"laser":{"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"angle":0,"error":0}}},"wings":{"top":{"doubleside":true,"offset":{"x":15,"y":40,"z":0},"length":[50],"width":[70,30],"angle":[70],"position":[0,30],"texture":[63],"bump":{"position":10,"size":10}},"main":{"doubleside":true,"offset":{"x":0,"y":25,"z":15},"length":[90,40],"width":[70,50,30],"angle":[-30,-40],"position":[30,20,-20],"texture":[8,63],"bump":{"position":10,"size":10}}},"typespec":{"name":"Aetos","level":5,"model":4,"code":504,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[80,140],"reload":[35,45]},"ship":{"mass":175,"speed":[90,100],"rotation":[70,90],"acceleration":[110,130]}},"shape":[3,2.917,2.069,1.61,1.343,1.158,1.037,0.95,0.895,0.853,0.83,0.824,3.271,3.283,3.312,3.232,3.135,3.283,3.38,3.09,2.882,2.75,2.726,3.059,3.054,3.006,3.054,3.059,2.726,2.75,2.882,3.09,3.38,3.283,3.135,3.232,3.312,3.283,3.271,0.824,0.83,0.853,0.895,0.95,1.037,1.158,1.343,1.61,2.069,2.917],"lasers":[{"x":2.44,"y":-0.15,"z":-0.9,"angle":2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.44,"y":-0.15,"z":-0.9,"angle":-2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.38,"next":[null,null]}}';
a.T_Warrior_503 = '{"name":"T-Warrior","level":5,"model":3,"size":1.6,"next":[null,null],"specs":{"shield":{"capacity":[225,325],"reload":[4,7]},"generator":{"capacity":[80,140],"reload":[35,50]},"ship":{"mass":250,"speed":[80,90],"rotation":[50,80],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-95,-100,-98,-70,0,90,91],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,20,30,20,3],"height":[0,2,4,20,30,25,3],"texture":[12,5,63,1,10,12]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-45,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[4,6],"rate":3,"type":1,"speed":[130,160],"number":5,"angle":30,"error":0},"propeller":false,"texture":[3,3,10,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0],"y":[90,95,95],"z":[0,0,0]},"width":[15,18,2],"height":[18,23,2],"texture":[63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[0,0,0,0,9,9]},"width":[0,10,15,10,0],"height":[0,10,15,16,0],"texture":[9]},"top_propulsor":{"section_segments":10,"offset":{"x":0,"y":30,"z":60},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true},"side_propulsors":{"section_segments":10,"offset":{"x":80,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"texture":[4,63,1,1,1,63,1,1,12],"propeller":true}},"wings":{"top_join":{"offset":{"x":0,"y":50,"z":0},"length":[60],"width":[70,30],"angle":[90],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}},"side_joins":{"offset":{"x":0,"y":50,"z":0},"length":[80],"width":[70,30],"angle":[-20],"position":[0,0,0,50],"texture":[11],"bump":{"position":10,"size":20}}},"typespec":{"name":"T-Warrior","level":5,"model":3,"code":503,"specs":{"shield":{"capacity":[225,325],"reload":[4,7]},"generator":{"capacity":[80,140],"reload":[35,50]},"ship":{"mass":250,"speed":[80,90],"rotation":[50,80],"acceleration":[90,120]}},"shape":[3.204,3.125,2.591,2.145,1.713,1.46,1.282,1.155,1.073,1.009,0.977,0.955,0.957,2.594,3.217,3.408,3.55,3.898,4.204,4.633,5.051,4.926,2.67,2.95,4.171,4.168,4.171,2.95,2.67,4.926,5.051,4.633,4.204,3.898,3.55,3.408,3.217,2.594,0.96,0.955,0.977,1.009,1.073,1.155,1.282,1.46,1.713,2.145,2.591,3.125],"lasers":[{"x":0,"y":-3.04,"z":-0.48,"angle":0,"damage":[4,6],"rate":3,"type":1,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0}],"radius":5.051,"next":[null,null]}}';
a.FuryStar_502 = '{"name":"FuryStar","level":5,"model":2,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[200,275],"reload":[6,7]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":200,"speed":[70,100],"rotation":[120,180],"acceleration":[150,180]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-45,0,10,15,35,55,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,20,25,17,25,20,15,0],"height":[0,15,15,15,20,20,15,0],"texture":[1,4,63,4,2,12,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-43,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-4,10],"z":[-5,0,0]},"width":[1,18,20],"height":[1,15,10],"texture":[9]},"missiles":{"section_segments":12,"offset":{"x":35,"y":-5,"z":10},"position":{"x":[0,0,0,0,0],"y":[-30,-23,0,23,30],"z":[0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,5,5,5,0],"texture":[6,4,4,10],"angle":0,"laser":{"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":15,"y":-10,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"error":0},"propeller":false,"texture":[3,3,10,3]},"top_propulsors":{"section_segments":10,"offset":{"x":75,"y":45,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"propeller":true,"texture":[4,4,2,2,5,63,5,63,17]},"bottom_propulsors":{"section_segments":10,"offset":{"x":100,"y":0,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,17]}},"wings":{"rooftop":{"doubleside":true,"offset":{"x":0,"y":-20,"z":20},"length":[20,15,25,25,5],"width":[50,40,35,35,35,30],"angle":[0,-20,30,30,30],"position":[0,10,20,50,80,100],"texture":[8,63,3,3],"bump":{"position":-40,"size":5}},"bottom":{"doubleside":true,"offset":{"x":10,"y":-20,"z":0},"length":[30,30,30],"width":[60,50,50,50],"angle":[-27,-27,-27],"position":[0,10,30,40],"texture":[1],"bump":{"position":-40,"size":5}},"topwinglets":{"doubleside":true,"offset":{"x":80,"y":87,"z":45},"length":[20],"width":[40,30],"angle":[60],"position":[0,50],"texture":[63],"bump":{"position":10,"size":10}},"bottomwinglets":{"doubleside":true,"offset":{"x":100,"y":50,"z":-45},"length":[20],"width":[40,30],"angle":[-60],"position":[0,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"FuryStar","level":5,"model":2,"code":502,"specs":{"shield":{"capacity":[200,275],"reload":[6,7]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":200,"speed":[70,100],"rotation":[120,180],"acceleration":[150,180]}},"shape":[1.59,1.832,1.891,1.874,1.458,1.479,1.524,1.571,1.645,1.757,1.925,3.322,3.427,3.455,3.48,3.666,3.822,4.057,4.521,4.774,5.039,5.299,1.577,1.71,1.679,1.653,1.679,1.71,1.577,5.299,5.039,4.774,4.521,4.057,3.822,3.666,3.48,3.455,3.428,3.322,1.925,1.757,1.645,1.571,1.524,1.479,1.458,1.874,1.891,1.832],"lasers":[{"x":1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.299,"next":[null,null]}}';
a.U_Sniper_501 = '{"name":"U-Sniper","level":5,"model":1,"size":1.8,"next":[null,null],"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[80,160],"reload":[40,60]},"ship":{"mass":200,"speed":[70,90],"rotation":[50,70],"acceleration":[60,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,-10,40,100,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,23,10,0],"height":[0,5,23,10,0],"texture":[12,1,10,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0],"y":[20,40,80],"z":[-4,0,-6]},"width":[5,10,5],"height":[0,8,0],"texture":[9]},"uwings":{"section_segments":8,"offset":{"x":50,"y":-20,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-90,-100,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,20,0],"height":[0,5,25,20,0],"texture":[12,2,3,4]},"cannons":{"section_segments":12,"offset":{"x":70,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-70,-20,0,20,50,45],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,10,15,5,0],"height":[0,5,5,10,10,5,0],"angle":0,"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":200,"number":1,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]},"side_propulsors":{"section_segments":10,"offset":{"x":30,"y":30,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,13,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,10,5,5,10,5,0],"height":[0,5,10,10,10,5,5,10,5,0],"propeller":true,"texture":[5,2,11,2,63,11,12]}},"typespec":{"name":"U-Sniper","level":5,"model":1,"code":501,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[80,160],"reload":[40,60]},"ship":{"mass":200,"speed":[70,90],"rotation":[50,70],"acceleration":[60,110]}},"shape":[0.361,0.366,0.378,4.774,4.83,4.17,3.608,3.248,3.245,3.083,2.915,2.807,2.751,2.829,2.976,3.22,3.412,3.521,3.693,3.681,3.138,2.937,3.473,3.407,3.618,3.607,3.618,3.407,3.473,2.937,3.138,3.681,3.693,3.521,3.412,3.22,2.976,2.829,2.751,2.807,2.915,3.083,3.245,3.248,3.608,4.17,4.83,4.774,0.378,0.366],"lasers":[{"x":2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200},{"x":-2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200}],"radius":4.83,"next":[null,null]}}';
a.Crusader_406 = '{"name":"Crusader","level":4,"model":6,"size":1.6,"next":[null,null],"specs":{"shield":{"capacity":[250,300],"reload":[5,7]},"generator":{"capacity":[50,90],"reload":[20,35]},"ship":{"mass":250,"speed":[75,100],"rotation":[40,70],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-100,-99,-90,-30,30,100,80],"z":[0,0,0,0,0,0,0]},"width":[0,5,15,40,25,20,0],"height":[0,5,15,40,50,20,0],"texture":[6,63,1,8,63,12]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-50,"z":30},"position":{"x":[0,0,0,0,0],"y":[-30,-10,0,10,20],"z":[-13,-3,0,5,3]},"width":[3,13,15,9,3],"height":[3,6,8,6,3],"texture":[9]},"main_propulsor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0],"y":[50],"z":[0]},"width":[25],"height":[0],"propeller":true},"side_propulsors":{"section_segments":8,"offset":{"x":60,"y":20,"z":0},"position":{"x":[-30,-10,0,0,0],"y":[-40,-20,0,20,70],"z":[0,0,0,0,0]},"width":[5,5,10,20,10],"height":[5,5,10,10,10],"texture":[63],"propeller":true},"lasers":{"section_segments":8,"offset":{"x":45,"y":-20,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-40,-20,-30,20,70],"z":[0,0,0,0,0]},"width":[0,5,8,12,1],"height":[0,3,5,12,1],"texture":[6,6,10],"laser":{"damage":[6,9],"rate":3,"type":1,"speed":[130,160],"number":1,"error":0}}},"wings":{"main":{"offset":{"x":20,"y":-25,"z":5},"length":[100,15],"width":[120,30,40],"angle":[0,40],"position":[30,90,85],"texture":[11,63],"bump":{"position":0,"size":20}},"tail":{"offset":{"x":0,"y":75,"z":20},"length":[30,40],"width":[30,20,25],"angle":[10,-30],"position":[0,0,-30],"texture":[63],"bump":{"position":0,"size":20}}},"typespec":{"name":"Crusader","level":4,"model":6,"code":406,"specs":{"shield":{"capacity":[250,300],"reload":[5,7]},"generator":{"capacity":[50,90],"reload":[20,35]},"ship":{"mass":250,"speed":[75,100],"rotation":[40,70],"acceleration":[80,100]}},"shape":[3.2,3.14,2.815,2.366,2.084,2.4,2.332,2.322,2.128,1.994,1.918,2.067,2.304,2.644,3.134,4.525,4.797,4.922,4.238,3.554,3.649,3.411,2.88,3.263,3.258,3.206,3.258,3.263,2.88,3.411,3.649,3.554,4.238,4.922,4.797,4.525,3.134,2.644,2.304,2.067,1.918,1.994,2.128,2.322,2.332,2.4,2.084,2.366,2.815,3.14],"lasers":[{"x":1.44,"y":-1.92,"z":-0.16,"angle":0,"damage":[6,9],"rate":3,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.44,"y":-1.92,"z":-0.16,"angle":0,"damage":[6,9],"rate":3,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.922,"next":[null,null]}}';
a.Pioneer_405 = '{"name":"Pioneer","level":4,"model":5,"size":1.6,"next":[null,null],"specs":{"shield":{"capacity":[175,230],"reload":[4,7]},"generator":{"capacity":[50,100],"reload":[25,30]},"ship":{"mass":250,"speed":[90,120],"rotation":[40,80],"acceleration":[50,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-100,-60,-10,0,20,50,80,100,90],"z":[-10,-5,0,0,0,0,0,0,0,0]},"width":[5,50,50,30,40,50,50,20,0],"height":[5,20,20,20,30,30,20,10,0],"texture":[2,10,2,4,11,11,63,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,15,10,0],"height":[0,18,25,18,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":30,"y":-70,"z":0},"position":{"x":[0,0,0,0,0],"y":[-30,-20,0,20,30],"z":[0,0,0,0,0]},"width":[3,5,5,5,3],"height":[3,5,15,15,3],"texture":[6,4,4,6],"angle":0,"laser":{"damage":[6,11],"rate":3,"type":1,"speed":[100,140],"number":1,"error":0}},"shield":{"section_segments":12,"offset":{"x":60,"y":-40,"z":0},"position":{"x":[0,5,3,5,0,0],"y":[-30,-20,0,20,30,20],"z":[0,0,0,0,0,0]},"width":[5,10,10,10,5,0],"height":[5,25,30,25,5,0],"propeller":true,"texture":4,"angle":0},"shield2":{"section_segments":12,"offset":{"x":60,"y":60,"z":0},"position":{"x":[0,5,3,5,0,0],"y":[-30,-20,0,20,30,20],"z":[0,0,0,0,0,0]},"width":[5,10,10,10,5,0],"height":[5,25,30,25,5,0],"propeller":true,"texture":4,"angle":0}},"typespec":{"name":"Pioneer","level":4,"model":5,"code":405,"specs":{"shield":{"capacity":[175,230],"reload":[4,7]},"generator":{"capacity":[50,100],"reload":[25,30]},"ship":{"mass":250,"speed":[90,120],"rotation":[40,80],"acceleration":[50,100]}},"shape":[3.204,3.168,3.365,3.37,2.625,2.907,3.057,3.073,2.942,2.664,2.548,2.441,1.29,1.032,1.136,1.287,2.732,2.911,3.245,3.523,3.553,3.411,3.132,3.263,3.258,3.206,3.258,3.263,3.132,3.411,3.553,3.523,3.245,2.911,2.732,1.287,1.136,1.032,1.29,2.441,2.548,2.664,2.942,3.073,3.057,2.907,2.625,3.37,3.365,3.168],"lasers":[{"x":0.96,"y":-3.2,"z":0,"angle":0,"damage":[6,11],"rate":3,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-3.2,"z":0,"angle":0,"damage":[6,11],"rate":3,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.553,"next":[null,null]}}';
a.Side_Interceptor_404 = '{"name":"Side-Interceptor","level":4,"model":4,"next":[null,null],"size":1.6,"specs":{"shield":{"capacity":[175,225],"reload":[3,6]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":120,"speed":[80,110],"rotation":[50,100],"acceleration":[110,140]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-30,-22,-15,0,15,22,30,20],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,10,25,30,25,10,15,0],"height":[5,10,25,30,25,10,15,0],"texture":[1,3,63,63,3,4,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-8,0],"z":[0,0,0]},"width":[0,10,10],"height":[0,10,10],"texture":[5,9,5],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":60,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":0,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[100,200],"number":1,"error":5}}},"wings":{"wings1":{"doubleside":true,"offset":{"x":60,"y":20,"z":0},"length":[-20,-10,-40],"width":[50,50,130,30],"angle":[280,315,315],"position":[0,0,-50,0],"texture":4,"bump":{"position":10,"size":-10}},"wings2":{"doubleside":true,"offset":{"x":60,"y":20,"z":0},"length":[20,10,40],"width":[50,50,130,30],"angle":[-100,-135,-135],"position":[0,0,-50,0],"texture":4,"bump":{"position":10,"size":10}},"join":{"doubleside":true,"offset":{"x":0,"y":0,"z":0},"length":[61],"width":[10,6],"angle":[0],"position":[0,0,0,50],"texture":63,"bump":{"position":10,"size":20}}},"typespec":{"name":"Side-Interceptor","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[175,225],"reload":[3,6]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":120,"speed":[80,110],"rotation":[50,100],"acceleration":[110,140]}},"shape":[0.962,0.973,0.948,0.951,3.427,3.044,2.657,2.383,2.207,2.233,2.2,2.147,2.096,2.096,2.147,2.2,2.233,2.37,2.4,1.63,1.451,1.323,1.061,1.009,0.977,0.962,0.977,1.009,1.061,1.323,1.451,1.63,2.4,2.37,2.233,2.2,2.147,2.096,2.096,2.147,2.2,2.233,2.207,2.383,2.657,3.044,3.427,0.951,0.948,0.973],"lasers":[{"x":1.92,"y":-0.96,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[100,200],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.92,"y":-0.96,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[100,200],"number":1,"spread":0,"error":5,"recoil":0}],"radius":3.427,"next":[null,null]}}';
a.X_Warrior_403 = '{"name":"X-Warrior","level":4,"model":3,"size":1.6,"next":[null,null],"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[90,150],"reload":[35,55]},"ship":{"mass":250,"speed":[75,100],"rotation":[50,90],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-100,-99,-50,0,10,30,50,80,100,90],"z":[-10,-10,-5,0,0,0,0,0,0,0,0]},"width":[0,5,30,35,25,30,50,50,20,0],"height":[0,5,20,20,20,20,20,20,10,0],"texture":[4,2,10,2,63,11,4,63,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,15,10,0],"height":[0,18,25,18,0],"texture":9,"propeller":false},"cannons":{"section_segments":12,"offset":{"x":30,"y":-70,"z":0},"position":{"x":[0,0,0,0,0],"y":[-30,-20,0,20,30],"z":[0,0,0,0,0]},"width":[3,5,5,5,3],"height":[3,5,15,15,3],"texture":[6,4,4,6],"angle":0,"laser":{"damage":[5,8],"rate":3,"type":1,"speed":[120,180],"number":1,"error":0}},"wingendtop":{"section_segments":12,"offset":{"x":105,"y":50,"z":40},"position":{"x":[0,0,0,0,0,0,0],"y":[-65,-70,-20,0,20,30,5],"z":[0,0,0,0,0,0,0]},"width":[0,2,3,7,7,5,0],"height":[0,2,3,7,7,5,0],"texture":[12,63,63,11,63,12],"angle":0},"wingendbottom":{"section_segments":12,"offset":{"x":105,"y":50,"z":-40},"position":{"x":[0,0,0,0,0,0,0],"y":[-65,-70,-20,0,20,30,25],"z":[0,0,0,0,0,0,0]},"width":[0,2,3,7,7,5,0],"height":[0,2,3,7,7,5,0],"texture":[12,63,63,11,63,12],"angle":0,"laser":{"damage":[3,5],"rate":2.5,"type":1,"speed":[100,160],"number":1,"error":0}},"propellers":{"section_segments":12,"offset":{"x":40,"y":60,"z":0},"position":{"x":[0,0,5,3,5,0,0],"y":[-35,-40,-30,0,40,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,25,30,25,5,0],"texture":4,"angle":0,"propeller":true}},"wings":{"xwing1":{"doubleside":true,"offset":{"x":0,"y":70,"z":0},"length":[80,35],"width":[50,40,30],"angle":[20,20],"position":[0,-10,-20],"texture":[1,10],"bump":{"position":10,"size":20}},"xwing2":{"doubleside":true,"offset":{"x":0,"y":70,"z":0},"length":[80,35],"width":[50,40,30],"angle":[-20,-20],"position":[0,-10,-20],"texture":[1,1],"bump":{"position":10,"size":20}},"winglets2":{"offset":{"x":30,"y":-40,"z":0},"length":[20,10],"width":[30,20,5],"angle":[-10,20],"position":[0,0,0],"texture":63,"bump":{"position":30,"size":10}}},"typespec":{"name":"X-Warrior","level":4,"model":3,"code":403,"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[90,150],"reload":[35,55]},"ship":{"mass":250,"speed":[75,100],"rotation":[50,90],"acceleration":[90,110]}},"shape":[3.2,3.096,3.365,3.37,2.625,2.149,2.266,2.325,2.329,1.208,1.156,3.483,3.455,3.472,3.565,3.811,4.087,4.351,4.352,3.594,3.502,3.848,3.867,3.701,3.258,3.206,3.258,3.701,3.867,3.848,3.502,3.594,4.352,4.351,4.087,3.811,3.565,3.472,3.455,3.483,1.156,1.208,2.329,2.325,2.266,2.149,2.625,3.37,3.365,3.096],"lasers":[{"x":0.96,"y":-3.2,"z":0,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-3.2,"z":0,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.36,"y":-0.64,"z":-1.28,"angle":0,"damage":[3,5],"rate":2.5,"type":1,"speed":[100,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.36,"y":-0.64,"z":-1.28,"angle":0,"damage":[3,5],"rate":2.5,"type":1,"speed":[100,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.352,"next":[null,null]}}';
a.Mercury_402 = '{"name":"Mercury","level":4,"model":2,"size":1.3,"next":[null,null],"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[100,150],"reload":[30,50]},"ship":{"mass":200,"speed":[85,105],"rotation":[60,90],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-45,-50,-40,-30,0,50,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,15,20,30,35,20,0],"height":[1,5,10,15,25,15,10,0],"texture":[1,4,3,63,11,10,12],"propeller":true,"laser":{"damage":[20,40],"rate":1,"type":2,"speed":[170,200],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-20,0,20,50],"z":[0,0,0,0,0]},"width":[0,10,15,10,0],"height":[0,18,25,18,0],"texture":[4,9,4,4],"propeller":false},"deco":{"section_segments":8,"offset":{"x":70,"y":0,"z":-10},"position":{"x":[0,0,0,10,-5,0,0,0],"y":[-115,-80,-100,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,15,15,20,10,0],"height":[1,5,15,20,35,30,10,0],"texture":[6,6,4,63,63,4,12],"angle":0,"propeller":true},"wingends":{"section_segments":8,"offset":{"x":115,"y":25,"z":-5},"position":{"x":[0,2,4,2,0,0],"y":[-20,-10,0,10,20,15],"z":[0,0,0,0,0,0]},"width":[2,3,6,3,4,0],"height":[5,15,22,17,5,0],"texture":[4,4,4,4,6],"propeller":true,"angle":2,"laser":{"damage":[3,5],"rate":4,"type":1,"speed":[150,180],"number":1,"error":0}}},"wings":{"main":{"length":[80,40],"width":[40,30,20],"angle":[-10,20],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font":{"length":[80,30],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Mercury","level":4,"model":2,"code":402,"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[100,150],"reload":[30,50]},"ship":{"mass":200,"speed":[85,105],"rotation":[60,90],"acceleration":[60,80]}},"shape":[1.303,1.306,1.221,1.135,3.514,3.457,3.283,3.008,2.819,2.69,2.614,2.461,2.233,3.14,3.312,3.323,3.182,2.865,2.958,3.267,3.33,3.079,2.187,2.651,2.647,2.605,2.647,2.651,2.187,3.079,3.33,3.267,2.958,2.865,3.182,3.323,3.312,3.14,2.233,2.461,2.614,2.69,2.819,3.008,3.283,3.457,3.514,1.135,1.221,1.306],"lasers":[{"x":0,"y":-1.3,"z":0.26,"angle":0,"damage":[20,40],"rate":1,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.972,"y":0.13,"z":-0.13,"angle":2,"damage":[3,5],"rate":4,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.972,"y":0.13,"z":-0.13,"angle":-2,"damage":[3,5],"rate":4,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.514,"next":[null,null]}}';
a.Vanguard_401 = '{"name":"Vanguard","level":4,"model":1,"size":1.2,"next":[null,null],"specs":{"shield":{"capacity":[140,190],"reload":[3,4]},"generator":{"capacity":[80,140],"reload":[25,35]},"ship":{"mass":200,"speed":[75,90],"rotation":[90,120],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":11,"offset":{"x":0,"y":-47,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[0,6,12,48,77,110,137,141],"z":[0,0,0,0,0,0,0,0]},"width":[0,22,24,35,37,34,23,0],"height":[0,22,24,35,37,34,23,0],"texture":[9,3,2,8,3,2,3]},"engines":{"section_segments":12,"offset":{"x":28,"y":-27,"z":-10},"position":{"x":[25,-2,-4,-2,0,0],"y":[0,40,74,98,108,105],"z":[18,10,0,0,0,0]},"width":[9,10,9,14,11,0],"height":[2,10,9,14,11,0],"texture":[3,3,3,3,17],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-30,"z":15},"position":{"x":[0,0,0,0,0],"y":[0,40,66,84,89],"z":[-8,-2,-1,1,20]},"width":[20,30,30,23,0],"height":[20,30,30,23,0],"texture":[9],"propeller":false},"cannons":{"section_segments":8,"offset":{"x":18,"y":-183,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[5,0,23,27,62,62,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,7,7,4,4,7,7],"height":[0,5,5,7,7,4,4,7,7],"texture":[12,13,4,8,4,4,3,8],"propeller":false,"laser":{"damage":[18,25],"rate":3,"type":2,"speed":[170,200],"recoil":70,"number":1,"error":0}}},"wings":{"outer":{"offset":{"x":37,"y":-115,"z":15},"length":[0,12,12,22,4,38],"width":[165,235,246,232,167,122,35],"angle":[-15,-15,-15,-8,-8,-8],"position":[20,54,54,47,79,100,101],"texture":[4,3,4,4,1,8],"doubleside":true,"bump":{"position":30,"size":4}},"inner":{"offset":{"x":-37,"y":-115,"z":15},"length":[12],"width":[165,112],"angle":[0],"position":[20,0],"texture":[63,63],"doubleside":true,"bump":{"position":30,"size":4}},"winglet":{"offset":{"x":104,"y":-13,"z":55},"length":[45,15,15,45],"width":[25,70,35,70,25],"angle":[-70,-70,-110,-110],"position":[0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":5}}},"typespec":{"name":"Vanguard","level":4,"model":1,"code":401,"specs":{"shield":{"capacity":[140,190],"reload":[3,4]},"generator":{"capacity":[80,140],"reload":[25,35]},"ship":{"mass":200,"speed":[75,90],"rotation":[90,120],"acceleration":[60,80]}},"shape":[1.128,4.427,4.643,4.646,4.01,3.568,3.144,2.81,2.808,3.088,3.087,3.077,3.045,2.998,2.935,2.552,2.417,2.317,1.954,1.88,1.891,2.158,2.148,2.228,2.236,2.256,2.236,2.228,2.148,2.158,1.891,1.88,1.954,2.317,2.417,2.552,2.935,2.998,3.045,3.077,3.087,3.088,2.808,2.81,3.144,3.568,4.01,4.646,4.643,4.427],"lasers":[{"x":0.432,"y":-4.392,"z":0.192,"angle":0,"damage":[18,25],"rate":3,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":70},{"x":-0.432,"y":-4.392,"z":0.192,"angle":0,"damage":[18,25],"rate":3,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":70}],"radius":4.646,"next":[null,null]}}';
a.Y_Defender_304 = '{"name":"Y-Defender","level":3,"model":4,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[175,225],"reload":[4,6]},"generator":{"capacity":[50,80],"reload":[18,25]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[70,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-100,-95,-50,-40,-20,-10,30,70,65],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,10,20,15,20,0],"height":[0,10,20,15,15,20,25,15,0],"texture":[1,2,2,63,2,10,2,12],"laser":{"damage":[20,40],"rate":2,"type":1,"speed":[130,170],"number":1,"recoil":75,"error":0}},"propulsors":{"section_segments":8,"offset":{"x":50,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-30,-25,20,25,40,50,60,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,15,5,25,20,15,15,0],"height":[0,20,15,5,25,20,20,10,0],"texture":[63,63,63,2,2,3,4,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-70,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false}},"wings":{"join":{"offset":{"x":14,"y":0,"z":0},"length":[25],"width":[20,10],"angle":[0],"position":[0,0,0,50],"texture":[63],"bump":{"position":10,"size":40}},"join2":{"offset":{"x":14,"y":50,"z":0},"length":[25],"width":[20,10],"angle":[0],"position":[0,0,0,50],"texture":[3],"bump":{"position":10,"size":40}},"winglets":{"offset":{"x":5,"y":40,"z":10},"length":[10,20],"width":[15,30,50],"angle":[60,-20],"position":[0,5,60],"texture":[63],"bump":{"position":10,"size":60}}},"typespec":{"name":"Y-Defender","level":3,"model":4,"code":304,"specs":{"shield":{"capacity":[175,225],"reload":[4,6]},"generator":{"capacity":[50,80],"reload":[18,25]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[70,80]}},"shape":[3,2.959,2.915,2.203,1.734,0.652,0.639,1.358,1.816,2.118,2.23,2.139,2.06,2.016,2.023,2.04,2.551,2.584,2.67,3.055,3.578,3.552,3.315,3.834,2.269,2.104,2.269,3.834,3.315,3.552,3.578,3.055,2.67,2.584,2.551,2.04,2.023,2.016,2.06,2.139,2.23,2.118,1.816,1.358,0.639,0.652,1.734,2.203,2.915,2.959],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[20,40],"rate":2,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":75}],"radius":3.834,"next":[null,null]}}';
a.Shadow_X_1_303 = '{"name":"Shadow X-1","level":3,"model":3,"size":0.8,"zoom":0.8,"next":[null,null],"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[35,60],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true,"laser":{"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1}}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Shadow X-1","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[35,60],"acceleration":[130,150]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[{"x":1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.258,"next":[null,null]}}';
a.Side_Fighter_302 = '{"name":"Side-Fighter","level":3,"model":2,"size":1.5,"next":[null,null],"specs":{"shield":{"capacity":[125,175],"reload":[2,4]},"generator":{"capacity":[75,125],"reload":[20,35]},"ship":{"mass":90,"speed":[100,120],"rotation":[50,70],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-22,-15,0,15,22,40,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[5,10,25,30,25,17,15,0],"height":[5,10,25,30,25,17,15,0],"texture":[5,63,63,63,63,12,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-8,0],"z":[0,0,0]},"width":[0,10,10],"height":[0,10,10],"texture":[9],"propeller":false,"laser":{"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"error":20}}},"wings":{"wings1":{"doubleside":true,"offset":{"x":60,"y":0,"z":-80},"length":[0,50,50,50],"width":[0,0,100,100,0],"angle":[95,90,90,95],"position":[0,0,0,0,0],"texture":[7],"bump":{"position":0,"size":8}},"join":{"offset":{"x":0,"y":0,"z":0},"length":[61],"width":[10,6],"angle":[0],"position":[0,0,0,50],"texture":[8],"bump":{"position":10,"size":20}}},"typespec":{"name":"Side-Fighter","level":3,"model":2,"code":302,"specs":{"shield":{"capacity":[125,175],"reload":[2,4]},"generator":{"capacity":[75,125],"reload":[20,35]},"ship":{"mass":90,"speed":[100,120],"rotation":[50,70],"acceleration":[100,130]}},"shape":[0.902,0.912,0.888,0.892,0.731,0.749,0.779,2.343,2.255,2.136,2.061,2.022,2.038,2.04,2.022,2.061,2.136,2.255,2.343,0.836,0.924,1.106,1.282,1.262,1.222,1.202,1.222,1.262,1.282,1.106,0.924,0.836,2.343,2.255,2.136,2.061,2.022,2.038,2.04,2.022,2.061,2.136,2.255,2.343,0.779,0.749,0.731,0.892,0.888,0.912],"lasers":[{"x":0,"y":-0.9,"z":0,"angle":0,"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"spread":0,"error":20,"recoil":0}],"radius":2.343,"next":[null,null]}}';
a.Pulse_Fighter_301 = '{"name":"Pulse-Fighter","level":3,"model":1,"size":1.3,"next":[null,null],"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[60,90],"reload":[20,30]},"ship":{"mass":120,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-75,-50,0,50,105,90],"z":[0,0,0,0,0,0,0]},"width":[0,15,25,30,35,20,0],"height":[0,10,15,25,25,20,0],"propeller":true,"texture":[63,1,1,10,2,12]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,10,30,60],"z":[0,0,0,0,0]},"width":[0,10,15,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":9},"cannon":{"section_segments":6,"offset":{"x":0,"y":-40,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,15,0],"height":[0,5,15,15,10,0],"angle":0,"laser":{"damage":[15,30],"rate":1,"type":2,"speed":[150,175],"number":1,"error":0},"propeller":false,"texture":3},"deco":{"section_segments":8,"offset":{"x":50,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0,0],"y":[-52,-50,-20,0,20,40,42],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,5,5,0],"height":[0,5,10,15,10,5,0],"angle":0,"laser":{"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0},"propeller":false,"texture":4}},"wings":{"main":{"length":[80,20],"width":[120,50,40],"angle":[-10,20],"position":[30,50,30],"doubleside":true,"bump":{"position":30,"size":10},"texture":[11,63],"offset":{"x":0,"y":0,"z":0}},"winglets":{"length":[40],"width":[40,20,30],"angle":[10,-10],"position":[-40,-60,-55],"bump":{"position":0,"size":30},"texture":63,"offset":{"x":0,"y":0,"z":0}},"stab":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Pulse-Fighter","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[60,90],"reload":[20,30]},"ship":{"mass":120,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"shape":[2.343,2.204,1.998,1.955,2.088,1.91,1.085,0.974,0.895,0.842,0.829,0.95,1.429,2.556,2.618,2.726,2.851,2.837,2.825,2.828,2.667,2.742,2.553,2.766,2.779,2.735,2.779,2.766,2.553,2.742,2.667,2.828,2.825,2.837,2.851,2.726,2.618,2.556,1.43,0.95,0.829,0.842,0.895,0.974,1.085,1.91,2.088,1.955,1.998,2.204],"lasers":[{"x":0,"y":-2.34,"z":-0.26,"angle":0,"damage":[15,30],"rate":1,"type":2,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.851,"next":[null,null]}}';
a.Trident_202 = '{"name":"Trident","level":2,"model":2,"size":1.2,"next":[null,null],"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0]},"width":[1,25,15,30,30,20,10],"height":[1,20,20,30,30,10,0],"texture":[1,1,10,2,3],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":50,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"angle":0,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"offset":{"x":0,"y":60,"z":0},"length":[80,30],"width":[70,50,60],"texture":[4,63],"angle":[0,0],"position":[10,-20,-50],"bump":{"position":-10,"size":15}},"winglets":{"length":[30,20],"width":[10,30,0],"angle":[50,20],"position":[90,80,50],"texture":[63],"bump":{"position":10,"size":30},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Trident","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,0.516,0.457,0.415,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,0.415,0.457,0.516,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.804,"next":[null,null]}}';
a.Delta_Fighter_201 = '{"name":"Delta-Fighter","level":2,"model":1,"size":1.3,"next":[null,null],"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"bodies":{"cockpit":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-20,"z":12},"position":{"x":[0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[-7,-3,0,5,3]},"width":[3,12,18,16,3],"height":[3,6,8,6,3],"texture":[9]},"cockpit2":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-10,"z":12},"position":{"x":[0,0,0,0],"y":[-10,0,10,40],"z":[0,0,5,3]},"width":[5,18,16,3],"height":[5,12,10,5],"texture":[9,2,11]},"propulsor":{"section_segments":8,"offset":{"x":0,"y":35,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,10,20,30,40,30],"z":[0,0,0,0,0]},"width":[5,15,10,10,10,0],"height":[15,15,15,15,10,0],"texture":[63,63,4,5,12],"propeller":true},"bumps":{"section_segments":8,"offset":{"x":40,"y":40,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-10,0,10,40,45],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,5,0],"height":[0,25,28,22,15,0],"texture":[63]},"gunsupport":{"section_segments":8,"offset":{"x":30,"y":-40,"z":5},"position":{"x":[-30,-20,-10,0,0,0],"y":[-20,-15,-5,10,40,55],"z":[-20,-20,-10,0,0,0]},"width":[3,5,8,4,5,0],"height":[3,5,8,12,15,0],"texture":63},"gun":{"section_segments":8,"offset":{"x":0,"y":-60,"z":-15},"position":{"x":[0,0,0,0],"y":[-20,-10,5,10],"z":[0,0,0,0]},"width":[3,7,8,3],"height":[3,7,8,3],"texture":[6,4,5],"laser":{"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"angle":15,"error":0}}},"wings":{"main":{"doubleside":true,"offset":{"x":0,"y":-25,"z":5},"length":[100],"width":[120,30,40],"angle":[0,20],"position":[30,90,85],"texture":11,"bump":{"position":30,"size":20}}},"typespec":{"name":"Delta-Fighter","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"shape":[2.081,1.969,1.501,1.455,1.403,1.368,1.263,1.192,1.095,1.063,1.128,1.209,1.352,1.545,1.85,2.348,2.965,3.211,3.33,2.93,2.496,2.442,2.441,1.866,1.967,1.954,1.967,1.866,2.441,2.442,2.496,2.93,3.33,3.211,2.965,2.348,1.85,1.545,1.352,1.209,1.128,1.063,1.095,1.192,1.263,1.368,1.403,1.455,1.501,1.969],"lasers":[{"x":0,"y":-2.08,"z":-0.39,"angle":0,"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"spread":15,"error":0,"recoil":0}],"radius":3.33,"next":[null,null]}}';
a.Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"next":[null,null],"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856,"next":[null,null]}}';

var ships = [];
for (let ship in a) ships.push(a[ship]);

var select_ships = [[],[],[],[],[],[
  {name:"Odyssey",code:701},
  {name:"Shadow X-3",code:702},
  {name:"Bastion",code:703},
  {name:"Aries",code:704},
]];

for (let i in a){
  let ship = JSON.parse(a[i]);
  (ship.level != 1) && select_ships[ship.level-2].push({name:ship.name,code:ship.typespec.code});
}

var map =
"99999999999999999999999999999999999999999999999999\n"+
"99999999999999999999999999999999999999999999999999\n"+
"99                                              99\n"+
"99                       9999999                99\n"+
"99  999       999999                       999  99\n"+
"99  919                                    919  99\n"+
"99  999                            1       999  99\n"+
"99       1               1           1          99\n"+
"99                                              99\n"+
"99           7                                  99\n"+
"99           7          111    9    7           99\n"+
"99                             9              1 99\n"+
"99    1      7                 9    7           99\n"+
"99           77     77 7            1           99\n"+
"99     1                                        99\n"+
"99     1                                        99\n"+
"99      1                                       99\n"+
"99                                              99\n"+
"999999            99          99    8888    999999\n"+
"999999         1  99999    99999    8       999999\n"+
"999999             99999  99999       1     999999\n"+
"9          8888    99999  99999        1         9\n"+
"9                  99999  99999                  9\n"+
"9                   999    999                   9\n"+
"9                                                9\n"+
"9           1                                    9\n"+
"9                   999    999                   9\n"+
"9                  99999  99999                  9\n"+
"9                  99999  99999                  9\n"+
"999999       8     99999  99999    9   88   999999\n"+
"999999            99999    99999   9   8    999999\n"+
"999999  2    8    99          99   9        999999\n"+
"99       9      9                        91     99\n"+
"99     2 92     9                  9    191     99\n"+
"99     99       9                         1     99\n"+
"99      2  2     99                     191     99\n"+
"99   1   2            222 11 1          111 9   99\n"+
"99                   1262                   9   99\n"+
"99         9          262        77             99\n"+
"99        99                7777        1   9   99\n"+
"99        99          262                   99  99\n"+
"99        99          262          22           99\n"+
"99         9          222        2     1        99\n"+
"99  999    9   7777             22         999  99\n"+
"99  919        77 77   1        2          919  99\n"+
"99  999                  9 99   2   999    999  99\n"+
"99                                 1            99\n"+
"99                                              99\n"+
"99999999999999999999999999999999999999999999999999\n"+
"99999999999999999999999999999999999999999999999999";

var vocabulary = [
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Defend", icon:"\u0025", key:"D"},
  {text: "Kill", icon:"\u007f", key:"K"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "You", icon:"\u004e", key:"I"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "No Problem", icon:"\u0047", key:"P"},
  {text: "Attack", icon:"\u0049", key:"A"},
  {text: "Help", icon:"\u004a", key:"H"},
  {text: "Hmmm?", icon:"\u004b", key:"Q"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "Base", icon:"\u0034", key:"B"},
  {text: "Follow", icon:"\u0050", key:"F"},
];

this.options = {
  custom_map: map,
  ships: ships,
  vocabulary: vocabulary,
  map_size: 50,
  max_players: 20,
  radar_zoom: 2,
  starting_ship: 801,
  survival_level: 8,
  reset_tree: false,
  root_mode: "",
  asteroids_strength: 3,
  crystal_value: 0,
  friendly_colors: 2,
  lives: 0,
  weapons_store: false,
  soundtrack: "argon.mp3",
  speed_mod: 1.2,
  mines_self_destroy: true,
  mines_destroy_delay: 600
};

function rand(lol){
  return ~~((Math.random() * lol));
}
let teams = 
{
  proto: {
    x: 215,
    y: 0
  },
  points: [0,0],
  ships: [[],[]],
  names: ["Red", "Blue"],
  count: [0,0],
  hues: [0,240],
  x: [-1, 1]
}
function splitIntoTeams(){
  for(let i=0, ship=game.ships[i], t=i%2; i<game.ships.length; i++) ship.set(
    {
      hue:teams.hues[t],
      team:t,
      x:teams.x[t]*teams.proto.x,
      y:teams.proto.y,
      invulnerable:600
    }
  );
}

function setteam(ship){
  let t = teams.count.indexOf(Math.min(...teams.count));
  ship.set(
    {
      hue:teams.hues[t],
      team:t,
      x:teams.x[t]*teams.proto.x,
      y:teams.proto.y,
      invulnerable:600
    }
  );
  return t;
}
function restartgame(game,isGameOver){
  yeetalien(game);
  game.addAlien({x:195,y:195,level:2});game.addAlien({x:-195,y:195,level:2});game.addAlien({x:-195,y:-195,level:2});game.addAlien({x:195,y:-195,level:2});
  splitIntoTeams();
  if (!isGameOver) gamelength = game.step+toTick(5+1/6);
  data=randomShips();
  teams.points = [0,0];
  game.setUIComponent({id: "gamestat", visible: false});
  for (let ship of game.ships){
    ship.emptyWeapons();
    selectship(ship);
  }
}
function resetgame(game,isLeave){
  let color, text;
  if (isLeave != -1)
  {
    text = `All ${teams.names[isLeave]} players left. ${teams.names[1-isLeave]} team wins!`;
    color = getcolor(teams.hues[1-isLeave]);
  }
  else
  {
    if (teams.points[0] != teams.points[1]){
      let win=teams.points.indexOf(Math.max(...teams.points));
      text = `Game finished! ${teams.names[win]} team wins!`; color = getcolor(teams.hues[win]);
    }
    else text = "Game finished! It's a draw!"; color = "#fff";
  }
  game.setUIComponent({
    id: "gamestat",
    position: [32,18,42,40],
    visible: true,
    components: [
      {type: "text",position:[0,0,80,33],value:text,color:color},
    ]
  });
  setTimeout(function(){
    restartgame(game,1);
  }, 5000);
}
let shipUI = [
  {
    id: "0",
    position: [22.5,39,22,45],
    clickable: true,
    visible: true
  },
  {
    id: "1",
    position: [55,39,22,45],
    clickable: true,
    visible: true
  }
];
function selectship(ship){
  ship.custom.shiped = false;
  ship.custom.selected = false;
  ship.set({vx:0,vy:0});
  ship.frag = 0;
  ship.setUIComponent({
    id: "ship text", position: [39,20,22,50], visible: true,
    components: [
      { type: "text",position:[0,0,100,60],value:"Choose your ship for this round",color:"#FFFFFF"},
    ]
  });
  shipUI[0].components = [
    { type:"box",position:[0,0,100,100],fill:"rgb(54,57,64,0.6)",stroke:"#fff",width:5},
    { type: "text",position:[22.5,15,50,30],value:data[0].name,color:"#FFFFFF"},
  ];
  shipUI[1].components = [
    { type:"box",position:[0,0,100,100],fill:"rgb(54,57,64,0.6)",stroke:"#fff",width:5},
    { type: "text",position:[22.5,15,50,30],value:data[1].name,color:"#FFFFFF"},
  ];
  for (let UI of shipUI) ship.setUIComponent(UI);
  setTimeout(function(){
    ship.setUIComponent({id:"ship text",visible:false});
    ship.setUIComponent({id:"0",visible:false});
    ship.setUIComponent({id:"1",visible:false});
    if (!ship.custom.selected){
      ship.set({type:data[rand(2)].code,crystals:~~((Math.trunc(data[1].code/100)**2)*20/3),invulnerable:400,stats:88888888,shield:999});
      ship.custom.shiped = true;
      ship.custom.selected = true;
    }
  }, 10000);
}
function toTick(minutes)
{
  return minutes*3600
}
function randomShips(){
  let round_ships=[],s=JSON.parse(JSON.stringify(select_ships));
  let rarity = [[2,7],[3,11],[4,16],[5,23],[6,30],[7,13]];
  let field=[];
  while (field.length<100)
  {
    for (let i=0;i<6;i++)
      if (rarity[i][1] > 0)
      {
          field.push(rarity[i][0])
          rarity[i][1]--;
      }
  }
  let r = field[rand(100)]-2;
  for (let i of [,,]) round_ships.push(...s[r].splice(rand(s[r].length),1));
  return round_ships;
}
let data=randomShips(),delayed = 0;
function setIdle(ship)
{
  if (gamelength-game.step > toTick(5) || !ship.custom.shiped) ship.set({idle:true});
  else ship.set({idle:false});
}
this.tick = function (game){
  if (game.step % 30 === 0){
    if (game.ships.length <= 1){
      delayed=1;
      gamelength=game.step+toTick(5.25);
      for (let ship of game.ships){
        if (!ship.custom.wait){
          ship.custom.wait = true;
          setteam(ship);
        }
        ship.set({vx:0,vy:0});
        setIdle(ship);
      }
      game.setUIComponent({
        id: "wait", position: [39,20,22,50], visible: true,
        components: [
          { type: "text",position:[0,0,100,10],value:"Waiting for more players...",color:"#FFFFFF"},
        ]
      });
      game.setUIComponent({
        id: "scoreboard",
        visible:true,
        components: [
          { type: "text",position:[15,0,70,10],value:"Waiting for more players...",color:"#FFFFFF"},
        ]
      });
      game.setUIComponent({
        id: "timer",
        visible:false,
        components: []
      });
      game.setUIComponent({
        id: "points",
        visible:false,
        components: []
      });
    } else {
      if (delayed) {
        restartgame(game);
        delayed=0;
      }
      else
      {
        teams.ships=[[],[]];
        teams.points = [0,0];
        teams.count = [0,0];
        if (!game.custom.alien){
          game.custom.alien = true;
          data=randomShips();
          game.addAlien({x:195,y:195,level:2});game.addAlien({x:-195,y:195,level:2});game.addAlien({x:-195,y:-195,level:2});game.addAlien({x:195,y:-195,level:2});
        }
        game.setUIComponent({id:"wait",visible:false});
        for (let ship of game.ships){
          let tm;
          if (!ship.custom.init){
            ship.custom.init = true;
            selectship(ship);
            tm=setteam(ship);
            ship.frag=0;
          }
          ship.custom.wait = false;
          ship.set({score:ship.frag});
          setIdle(ship);
          teams.ships[tm||ship.team].push(ship);
          teams.points[tm||ship.team] += ship.frag;
          teams.count[tm||ship.team]++;
        }
        updatescoreboard(game);
        let steps = gamelength - game.step,msg="";
        if (steps > toTick(5)) {
          steps-=toTick(5);
          msg+="Next round starts in: ";
        }
        else msg+="Time left: ";
        let minutes = Math.floor(steps / 3600);
        let seconds = Math.floor((steps % 3600) / 60);
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        game.setUIComponent({
          id: "timer",
          position: [3,28,17,15],
          visible: true,
          components: [
            {type: "text",position:[0,0,80,33],value:msg+`${minutes}:${seconds}`,color:"#fff"},
          ]
        });
        if (((teams.count.indexOf(0) != -1) || (game.step > gamelength)) && (gamelength-game.step< toTick(5)))
        {
          console.log(gamelength, game.step);
          gamelength=game.step+toTick(5.25);
          resetgame(game, teams.count.indexOf(0));
        }
      }
    }
    game.setUIComponent({
      id:"radar_background",
      position:[0,0,50,50],
      visible:true,
      components:[
        {type:"box",position:[2,42,10,16],fill:getcolor(teams.hues[0],0.5)},
        {type:"box",position:[88,42,10,16],fill:getcolor(teams.hues[1],0.5)},
        {type:"box",position:[88,42,1,16],fill:getcolor(teams.hues[1],1)},
        {type:"box",position:[11,42,1,16],fill:getcolor(teams.hues[0],1)}
      ]
    });
  }
  if (game.step % 60 === 0) checkteambase();
  if (game.step % 1800 === 0) spawnSecondary();
};

this.event = function (event,game){
  switch (event.name){
    case "ship_spawned":
      var ship = event.ship;
      var ship_level = Math.trunc(ship.type / 100);
      if (!Object.is(ship,null)) ship.set({x:teams.proto.x*teams.x[ship.team],y:teams.proto.y,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:400,stats:88888888});
    break;
    case "ship_destroyed":
      showkills(game,event);
      if (!Object.is(event.killer,null)) event.killer.frag++;
    break;
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;
      if (["0","1"].indexOf(component) != -1)
      {
        if (gamelength-game.step <= toTick(5))
        {
          ship.setUIComponent({id:"0",visible:false});
          ship.setUIComponent({id:"1",visible:false});
          ship.setUIComponent({id:"ship text",visible:false});
        }
        else
        {
          for (let i=0;i<2;i++) shipUI[i].components = [...shipUI[i].components.slice(0,2)]
          shipUI[component].components.push({type: "text",position:[22.5,50,50,30],value:"✓",color:"#FFFFFF"});
          for (let UI of shipUI) ship.setUIComponent(UI);
        }
        ship.custom.shiped = true;
        ship.custom.selected = true;
        ship.set({type:data[component].code,invulnerable:400,stats:88888888,shield:999});
        ship.set({crystals:~~((Math.trunc(data[component].code/100)**2)*20/3)});
      }
    break;
    case "alien_destroyed":
      let s = [11,11,12],a;
      let alien = event.alien;
      a = Math.floor(Math.random()*2+1);
      for (let i=0; i<a; i++) game.addCollectible({code:s[Math.floor(Math.random()*s.length)],x:alien.x+5*(Math.random()*2-1),y:alien.y+5*(Math.random()*2-1)});
    break;
  }
};

switchteam = function(id){
  var h,t,x,y=0; if (game.ships[0].team === 0){t=1;h=240;x=215;} else if (game.ships[0].team === 1){t=0;h=0;x=-215}
  game.ships[id].set({team:t,hue:h,x:x,y:y,stats:88888888});
}

function yeetalien(game){
  for (let alien of game.aliens){
    alien.set({kill:true});
  }
}

function distance(x,y){
  return Math.sqrt(x*x+y*y);
}

function rekt(ship,num){
  if (ship.shield<num){
    let val=ship.crystals + ship.shield;
    if (val < num) ship.set({kill:true});
    else ship.set({crystals:val-num,shield:0});
  }
  else ship.set({shield:ship.shield-num});
}

function isRange(a,b,c){
  return Math.min(a,b) <= c && c <= Math.max(a,b)
}

function checkteambase(){
  for (let ship of game.ships){
    let u=1-ship.team;
    if (isRange(190*teams.x[u],240*teams.x[u],ship.x) && isRange(-35,35,ship.y)) rekt(ship,15*Math.trunc(ship.type/100));
  }
}

function getcolor(color,alpha = 1){
  return `hsla(${color},100%,50%,${alpha})`;
}

killstats = {
  id: "info",
  position: [2.5,29,60,100],
  clickable: false,
  visible: true,
  components: []
};

scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};
function updatestats(game)
{
  killstats.components.splice(0,3);
  for (let i=0;i<killstats.components.length;i++) killstats.components[i].position[1]-=5;
  game.setUIComponent(killstats);
}
function showkills (game,event){
  let s,defclr="#FFFFFF",pln={text:event.ship.name,color:getcolor(teams.hues[event.ship.team])};
  if (Object.is(event.killer,null))
  s= [
    pln,
    {text:"committed suicide",color:defclr},
    {text:"",color:defclr}
  ];
  else
  s= [
    {text:event.killer.name,color:getcolor(teams.hues[event.killer.team])},
    {text:"🗡️",color:defclr},
    pln
  ];
  let size=0,line=killstats.components.length/3;
  if (line >=3)
  {
    updatestats(game);
    line--;
  }
  for (let i=0;i<s.length;i++)
  {
    let text = " "+s[i].text+" ";
    killstats.components.push(
      {type:"text",position:[size+3,(line+1)*5-8,text.length,20],value:text,color:s[i].color}
    );
    size+=text.length;
  }
  game.setUIComponent(killstats);
  setTimeout(function(){updatestats(game)},5000);
}

PlayerBox = function(posx,posy) {
  return { type:"box",position:[posx,posy-1.7,50,7],fill:"#384A5C",width:2};
};

Tag = function(indtext,param,posx,posy,hex,al,size) {
  let obj= {type: indtext,position: [posx,posy,50-(size||0),5],color: hex,align:al};
  switch(indtext) {
    case "text":
      obj.value=param;
      break;
    case "player":
      obj.id=param;
      break;
  }
  return obj;
};

sort = function(arr){
  let array=[...arr],i=0;
  while (i<array.length-1) {
    if (array[i].frag<array[i+1].frag) {
      array[i+1]=[array[i],array[i]=array[i+1]][0];
      if (i>0) i-=2;
    }
    i++;
  }
  return array;
};
function updatescoreboard(game){
  scoreboard.components = [];
  for (let i=0;i<2;i++) scoreboard.components.push(
    { type:"box",position:[i*50,0,50,8],fill:getcolor(teams.hues[i])},
    { type: "text",position: [i*50,0,50,8],color: "#FFF",value: teams.names[i]},
  );
  let sc=[sort(teams.ships[0]),sort(teams.ships[1])],line=1;
  sc[0].slice(10);sc[1].slice(10);
  for (let i=0;i<10;i++){
    for (let j=0;j<2;j++){
      if (sc[j][i]) scoreboard.components.push(
        new Tag("text",sc[j][i].frag,j*50,line*10,"#FFFFFF","right",2),
        new Tag("player",sc[j][i].id,j*50,line*10,"#FFFFFF","left")
      );
      else scoreboard.components.push({},{});
    }
    line++;
  }
  outputscoreboard(game,sc);
}

function outputscoreboard(game,tm){
  let origin =[...scoreboard.components];
  for (let ship of game.ships){
    let j=0,team=tm[ship.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        scoreboard.components.splice((j*2+ship.team)*2+4,0,
          new PlayerBox(ship.team*50,(j+1)*10)
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.team)*2,2,
      new PlayerBox(ship.team*50,90),
      new Tag("text",ship.frag,ship.team*50,90,ship.team,"right",2),
      new Tag("player",ship.id,ship.team*50,90,ship.team,"left")
    );
    ship.setUIComponent(scoreboard);
    ship.setUIComponent({
      id: "points",
      position: [40,6,26,20],
      visible: true,
      components: [
        {type: "text",position:[-25+8,0,80,33],value:teams.points[0],color:getcolor(teams.hues[0])},
        {type: "text",position:[-2,0,80,33],value:`-`,color:"#fff"},
        {type: "text",position:[14,0,80,33],value:teams.points[1],color:getcolor(teams.hues[1])},
      ]
    });
    scoreboard.components = [...origin];
  }
}

var gamelength = toTick(5.25);

function spawnSecondary(){
  var range = 10;
  var x = range * (Math.random()*2-1);
  var y = range * (Math.random()*2-1);
  var options = [10,10,10,11,11,20,21,21,91];
  var spawnCode = options[Math.floor(Math.random()*options.length)];
  game.addCollectible({code:spawnCode,x:x,y:y});
}

var base = {
  id: "base",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/blue%20line.jpg",
  transparent: false
};

game.setObject({
  id: "base",
  type: base,
  position: {x:195,y:0,z:-2},
  rotation: {x:0,y:0,z:0},
  scale: {x:4,y:90,z:0}
});

var base2 = {
  id: "base2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/red%20line.jpg",
  transparent: false
};

game.setObject({
  id: "base2",
  type: base2,
  position: {x:-195,y:0,z:-2},
  rotation: {x:0,y:0,z:0},
  scale: {x:4,y:90,z:0}
});
var gate = {
  id: "gate",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H.js",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20emissive.png",
  emissiveColor: 0xff324c,
  specularColor: 0x2f4f4f,
  transparent: false,
};

game.setObject({
  id: "gate",
  type: gate,
  position: {x:-215,y:38,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:2}
});

game.setObject({
  id: "gate"+1,
  type: gate,
  position: {x:-215,y:-38,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:2}
});

var gate2 = {
  id: "gate2",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H2.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20emissive.png",
  emissiveColor: 0xff324c,
  specularColor: 0x2f4f4f,
  transparent: false,
};

var gate3 = {
  id: "gate3",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H2.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20emissive.png",
  emissiveColor: 0x573df4,
  specularColor: 0x2f4f4f,
  transparent: false,
};

game.setObject({
  id: "gate2",
  type: gate2,
  position: {x:-237.5,y:0,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:2}
});

game.setObject({
  id: "gate3",
  type: gate3,
  position: {x:237.5,y:0,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:2}
});

var gate4 = {
  id: "gate4",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H.js",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Ship%20emissive.png",
  emissiveColor: 0x573df4,
  specularColor: 0x2f4f4f,
  transparent: false,
};

game.setObject({
  id: "gate4",
  type: gate4,
  position: {x:215,y:38,z:0},
  rotation: {x:0,y:Math.PI,z:0},
  scale: {x:1,y:1,z:2}
});

game.setObject({
  id: "gate4"+1,
  type: gate4,
  position: {x:215,y:-38,z:0},
  rotation: {x:0,y:Math.PI,z:0},
  scale: {x:1,y:1,z:2}
});

var cube = {
  id: "cube",
  obj: "https://starblast.data.neuronality.com/mods/objects/cube/cube.obj",
  diffuse: "https://starblast.data.neuronality.com/mods/objects/cube/diffuse.jpg",
  emissive: "https://starblast.data.neuronality.com/mods/objects/cube/emissive.jpg",
  emissiveColor: 0xe5fe4c,
  specularColor: 0xe5fe4c,
  diffuseColor: 0xe5fe4c,
  transparent: false,
  physics: {
    mass: 650,
    shape: [2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.308,3.048,2.878,2.759,2.697,2.697,2.759,2.878,3.048,3.308,3.672,3.678,3.474,3.169,2.958,2.806,2.723,2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.307,3.054,2.878,2.761,2.698,2.698,2.761,2.878,3.054,3.307,3.672,3.678,3.474,3.169,2.958,2.806,2.723],
    fixed: true
  }
};
 
function addcube(x,y,w,h,z){
  game.setObject({
    id: "cube"+x+y,
    type: cube,
    position: {x:x,y:y,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:w,y:h,z:z}
  });
}

for (let i=0; i<15; i++){
  addcube(-237.5,-35+i*5,.9,1,.5);
  addcube(237.5,-35+i*5,.9,1,.5);  
}
