// Starblast Team Deathmatch (TDM)
// Update 0.96.69
// Coding: Money & Bhpsngum
// Author of idea: Nexagon & L.Gaming
// DO NOT modify anything below if you don't know what you're doing :D

var a = {};
a.H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":1.9,"next":[null,null],"specs":{"shield":{"capacity":[250,385],"reload":[7,10]},"generator":{"capacity":[150,200],"reload":[45,65]},"ship":{"mass":390,"speed":[75,95],"rotation":[55,70],"acceleration":[50,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,15],"rate":5,"type":1,"speed":[120,180],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[5,6],"rate":3,"type":1,"speed":[150,200],"number":1,"error":0}},"cannon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[5,10],"rate":2,"type":1,"speed":[140,210],"number":1},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,385],"reload":[7,10]},"generator":{"capacity":[150,200],"reload":[45,65]},"ship":{"mass":390,"speed":[75,95],"rotation":[55,70],"acceleration":[50,110]}},"shape":[2.665,2.667,2.237,1.935,1.73,3.943,3.877,3.6,3.415,3.298,3.236,3.961,3.992,4.07,4.192,4.283,4.592,4.639,3.811,4.307,4.671,4.497,3.404,3.281,4.197,4.188,4.197,3.281,3.404,4.497,4.671,4.307,3.811,4.639,4.592,4.283,4.192,4.07,3.992,3.961,3.236,3.298,3.415,3.6,3.877,3.943,1.73,1.935,2.237,2.667],"lasers":[{"x":0,"y":-2.66,"z":0.76,"angle":0,"damage":[7,15],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.224,"y":-3.23,"z":-0.38,"angle":1,"damage":[5,6],"rate":3,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.224,"y":-3.23,"z":-0.38,"angle":-1,"damage":[5,6],"rate":3,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.701,"y":-0.871,"z":0.19,"angle":3,"damage":[5,10],"rate":2,"type":1,"speed":[140,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.701,"y":-0.871,"z":0.19,"angle":-3,"damage":[5,10],"rate":2,"type":1,"speed":[140,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.671,"next":[null,null]}}';
a.Shadow_X_3_702 = '{"name":"Shadow X-3","level":7,"model":2,"size":2.2,"specs":{"shield":{"capacity":[350,350],"reload":[10,10]},"generator":{"capacity":[250,250],"reload":[60,60]},"ship":{"mass":300,"speed":[140,140],"rotation":[40,40],"acceleration":[55,55]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-125,-123,-110,-65,-40,0,40,70,80,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,18,20,20,20,25,25,20,0],"height":[0,5,10,25,20,10,10,15,15,10,10],"texture":[12,63,15,4,63,63,4,63,5,17],"laser":{"damage":[225,225],"rate":1,"type":1,"speed":[200,200],"number":1,"error":0,"recoil":500}},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,5,10,12,15,10,10],"height":[0,10,15,10,15,10,10],"texture":[63,9,9,10,63,3]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1}},"laser2":{"section_segments":10,"offset":{"x":40,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[30,10,25,20],"width":[100,50,60,40,35],"angle":[0,0,0,0],"position":[0,0,10,30,-10],"texture":[4,63,4,3],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow X-3","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[350,350],"reload":[10,10]},"generator":{"capacity":[250,250],"reload":[60,60]},"ship":{"mass":300,"speed":[140,140],"rotation":[40,40],"acceleration":[55,55]}},"shape":[5.5,5.148,3.672,3.494,2.869,2.826,2.926,2.944,2.773,2.638,4.352,4.315,4.212,4.192,4.125,3.991,4.111,4.493,4.84,4.963,4.568,2.606,3.558,4.28,4.255,4.188,4.255,4.28,3.558,2.606,4.568,4.963,4.84,4.493,4.111,3.991,4.125,4.192,4.212,4.315,4.352,2.638,2.773,2.944,2.926,2.826,2.869,3.494,3.672,5.148],"lasers":[{"x":0,"y":-5.5,"z":0,"angle":0,"damage":[225,225],"rate":1,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":500},{"x":3.08,"y":-0.88,"z":-0.836,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.08,"y":-0.88,"z":-0.836,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.76,"y":-2.2,"z":-0.88,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.76,"y":-2.2,"z":-0.88,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.5}}';
var ships = [];
for (let ship in a) ships.push(a[ship]);
var select_ships = [
  ["Delta-Fighter","Trident"],  //T2
  ["Pulse-Fighter","Side-Fighter","Shadow-X-1","Y-Defender"],   //T3
  ["Vanguard","Mercury","X-Warrior","Side-Interceptor","Pioneer","Crusader"],   //T4
  ["U-Sniper","FuryStar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender"],   //T5
  ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender","H-Mercury"],   //T6
  ["Odyssey","Shadow X-3","Bastion","Aries"]    //T7
];
for (let i=0;i<select_ships.length;i++)
  for (let j=0;j<select_ships[i].length;j++)
  {
    let name = select_ships[i][j];
    select_ships[i][j] = {name:name,code:(i+2)*100+j+1};
  }
var mapconfig = [
  {
    name: "Goldmine",
    author: "L.Gaming",
    map:
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
      "99999999999999999999999999999999999999999999999999",
    aliens: [
      {x:-195,y:-195,level:2},
      {x:-195,y:195,level:2},
      {x:195,y:-195,level:2},
      {x:195,y:195,level:2}
    ],
    secondaries: [
      {x:0,y:0}
    ],
    spawn_delay: 30,
    restrict_tiers: false
  },
  {
    name: "Corridors",
    author: "L.Gaming",
    map:
      "99999999999999777999999999999999977799999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "7            7        7    7        7            7\n"+
      "7            7        7    7        7            7\n"+
      "7            7        7    7        7            7\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999997999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999777999999999999999977799999999999999\n"+
      "9999999999                              9999999999\n"+
      "99999999                                  99999999\n"+
      "999999                                      999999\n"+
      "999999                                      999999\n"+
      "9                      4444                      9\n"+
      "9                                                9\n"+
      "9                    4  99  4                    9\n"+
      "9                    4 9  9 4                    9\n"+
      "9                    4 9  9 4                    9\n"+
      "9                    4  99  4                    9\n"+
      "9                                                9\n"+
      "9                      4444                      9\n"+
      "999999                                      999999\n"+
      "999999                                      999999\n"+
      "99999999                                  99999999\n"+
      "9999999999                              9999999999\n"+
      "99999999999999777999999999999999977799999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "7            7        7    7        7            7\n"+
      "7            7        7    7        7            7\n"+
      "7            7        7    7        7            7\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999   9999999999999999   99999999999999\n"+
      "99999999999999777999999999999999977799999999999999",
    aliens: [
      {x:0,y:185,level:3,code:17},
      {x:0,y:-185,level:3,code:17}
    ],
    secondaries: [
      {x:0,y:0}
    ],
    spawn_delay: 30,
    restrict_tiers: false
  },
  {
    name: "Hallway",
    author: "L.Gaming",
    map:
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "9                                                9\n"+
      "9                       66                       9\n"+
      "9                      6116                      9\n"+
      "9                     619916                     9\n"+
      "9                     619916                     9\n"+
      "9                      6116                      9\n"+
      "9                       66                       9\n"+
      "9                                                9\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999\n"+
      "99999999999999999999999999999999999999999999999999",
    aliens: [
      {x:0,y:0,level:2}
    ],
    secondaries: [
      {x:0,y:0},
      {x:-20,y:-20},
      {x:-20,y:20},
      {x:20,y:-20},
      {x:20,y:20}
    ],
    spawn_delay: 15,
    restrict_tiers: [6]
  },
  {
    name: "Control",
    author: "Kirito",
    map:
      "9999999999999999999   999999   9999999999999999999\n"+
      "9999999999999999999   999999   9999999999999999999\n"+
      "99   99999999999999   999999   99999999999999   99\n"+
      "99   59999999999999   999999   99999999999996   99\n"+
      "99  67                449944                76  99\n"+
      "99967                 449944                 76999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999         4        449944        4         9999\n"+
      "9999        45        449944        54        9999\n"+
      "9999       456         4994         654       9999\n"+
      "9999      456           99           654      9999\n"+
      "9999     456                          654     9999\n"+
      "9999    456                            654    9999\n"+
      "999999 456                              654 999999\n"+
      "999999 56                                65 999999\n"+
      "999999 6                44                6 999999\n"+
      "9                      4  4                      9\n"+
      "9                     4 99 4                     9\n"+
      "9                    4 6  6 4                    9\n"+
      "9                   4 9    9 4                   9\n"+
      "9                   4 9    9 4                   9\n"+
      "9                    4 6  6 4                    9\n"+
      "9                     4 99 4                     9\n"+
      "9                      4  4                      9\n"+
      "999999 6                44                6 999999\n"+
      "999999 56                                65 999999\n"+
      "999999 456                              654 999999\n"+
      "9999    456                            654    9999\n"+
      "9999     456                          654     9999\n"+
      "9999      456           99           654      9999\n"+
      "9999       456         4994         654       9999\n"+
      "9999        45        449944        54        9999\n"+
      "9999         4        449944        4         9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "9999                  449944                  9999\n"+
      "99967                 449944                 76999\n"+
      "99  67                449944                76  99\n"+
      "99   69999999999999   999999   99999999999996   99\n"+
      "99   99999999999999   999999   99999999999999   99\n"+
      "9999999999999999999   999999   9999999999999999999\n"+
      "9999999999999999999   999999   9999999999999999999",
    aliens: [
      {x:-215,y:-215,level:2},
      {x:-215,y:215,level:2},
      {x:215,y:-215,level:2},
      {x:215,y:215,level:2}
    ],
    secondaries: [
      {x:0,y:0}
    ],
    spawn_delay: 30,
    restrict_tiers: false
  }
];

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
let map_id = rand(mapconfig.length);
this.options = {
  custom_map: mapconfig[map_id].map,
  ships: ships,
  vocabulary: vocabulary,
  map_size: 50,
  max_players: 30,
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
  max_level:1,
  mines_destroy_delay: 600
};

function rand(lol){
  return ~~((Math.random() * lol));
}
var match_time = 5; // in minutes
var pointsToWin = 30;
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
/* Experimental & Debugging functions */
switchteam = function(id){
  var h,t,x,y=0; if (game.ships[0].team === 0){t=1;h=240;x=215;} else if (game.ships[0].team === 1){t=0;h=0;x=-215}
  game.ships[id].custom.team =t;
  game.ships[id].set({team:t,hue:h,x:x,y:y,stats:88888888});
  update = 1;
}
kick = function(i,reason="Unspecified."){
  yeetplayer(game.ships[i],reason);
};
game.modding.commands.info = function(){
  game.modding.terminal.echo('Total amount of aliens:'+game.aliens.length);
  game.modding.terminal.echo('Total amount of asteroids:'+game.asteroids.length);
  game.modding.terminal.echo('Total amount of players:'+game.ships.length);
  for (let nn=0;nn<game.ships.length;nn++){
    game.modding.terminal.echo(nn+": "+game.ships[nn].name+', type: '+game.ships[nn].type+' X: '+game.ships[nn].x+', Y:'+game.ships[nn].y+', team:'+game.ships[nn].team+', frags:'+game.ships[nn].frag+', alive:'+game.ships[nn].alive);
  }
};
game.modding.commands.tstop = function ()
{
  for (let ship of game.ships) ship.gameover({
    "Rounds": ship.rounds,
    "Wins": ship.wins
  });
  game.modding.terminal.echo("If the mod didn't stop, type `stop`");
}
/* End of Experimental & Debugging functions */
function yeetplayer (ship,reason = "No reasons have been provided")
{
  ship.gameover({"You were kicked for reason:":reason,"Rounds":ship.rounds,"Wins":ship.wins});
}
function configship(ship, team)
{
  ship.set(
    {
      hue:teams.hues[team],
      team:team,
      x:teams.x[team]*teams.proto.x,
      y:teams.proto.y,
      invulnerable:600
    }
  );
}
lOlO0.prototype.shipDisconnected = function(t) {
    var e=this.modding.game.findShip(t.id);
    if (e != null) {
      this.context.event != null && this.context.event({name:"ship_disconnected",ship:e},this.modding.game);
      return e.lI101 = !0
    }
}
function splitIntoTeams(game){
  let list=[];
  teams.count = [0,0];
  teams.ships = [[],[]];
  for (let i=0;i<game.ships.length;i++) list.push(i);
  for (let i=0; list.length > 0; i++)
  {
    let t=i%2, id = rand(list.length);
    game.ships[list[id]].custom.team = t;
    configship(game.ships[list[id]], t);
    list.splice(id, 1);
  }
  update = 1;
}
function setAlien(game,id)
{
  let scd = [11,12,91];
  for (let i of mapconfig[id].aliens)
  {
    let alien = i;
    (rand(2)) && Object.assign(alien,{crystal_drop:rand(100)+1});
    Object.assign(alien,{weapon_drop:scd[rand(scd.length)]});
    game.addAlien(alien);
  }
}
function setteam(ship){
  let t;
  if (!game.custom.auto && game.ships.length > 1)
  {
    t=ship.team;
    game.custom.auto = true;
  }
  else
  {
    if ([...new Set(teams.count)].length == 1) t=teams.points.indexOf(Math.min(...teams.points));
    else t = teams.count.indexOf(Math.min(...teams.count));
  }
  ship.custom.team = t;
  configship(ship, t);
}
function restartgame(game,isGameOver){
  yeetalien(game);
  map_id = rand(mapconfig.length);
  game.setCustomMap(mapconfig[map_id].map);
  setAlien(game,map_id);
  game.setUIComponent({id:"logo",visible:false});
  splitIntoTeams(game);
  if (!isGameOver) gamelength = game.step+toTick(match_time+1/6);
  data=randomShips();
  teams.points = [0,0];
  game.setUIComponent({id: "gamestat", visible: false});
  for (let ship of game.ships){
    ship.emptyWeapons();
    selectship(ship);
  }
}
function resetgame(game,isLeave){
  let color, text, win;
  if (isLeave != -1)
  {
    win=1-isLeave;
    text = `All ${teams.names[isLeave]} plraayers left. ${teams.names[win]} team wins!`;
    color = getcolor(teams.hues[win]);
  }
  else
  {
    if (teams.points[0] != teams.points[1]){
      win=teams.points.indexOf(Math.max(...teams.points));
      text = `Game finished! ${teams.names[win]} team wins!`;
      color = getcolor(teams.hues[win]);
    }
    else text = "Game finished! It's a draw!"; color = "#fff";
  }
  for (let ship of game.ships)
  {
    if (ship.custom.team === win) ship.wins++;
    ship.rounds++;
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
    position: [22.5,35,25,45],
    clickable: true,
    visible: true
  },
  {
    id: "1",
    position: [52,35,25,45],
    clickable: true,
    visible: true
  }
];
var logo = {
  id: "logo",
  position:[20,15,60,30],
  visible:true,
  clickable:false,
  components: [
    {type:"text", position:[0,0,100,15], value: "TDM", color:"#FFF"},
    {type:"text", position:[0,15,100,15], value: "Team DeathMatch", color:"#FFF"},
  ]
}
function setLogo(ship)
{
  let origin = [...logo.components];
  logo.components.push(
    {type:"text", position:[0,30,100,10], value: "Map: "+mapconfig[map_id].name, color:"#FFF"},
    {type:"text", position:[0,40,100,10], value: "Author: "+mapconfig[map_id].author, color:"#FFF"}
  );
  ship.setUIComponent(logo);
  logo.components = [...origin];
}
function selectship(ship){
  ship.custom.shiped = false;
  ship.custom.selected = false;
  ship.custom.choose_countdown = game.step+toTick(1/6);
  ship.set({vx:0,vy:0});
  ship.frag = 0;
  setLogo(ship);
  ship.setUIComponent({
    id: "ship text", position: [39,17,22,50], visible: true,
    components: [
      { type: "text",position:[0,0,100,60],value:"Choose your ship for this round",color:"#FFFFFF"},
    ]
  });
  for (let i=0;i<2;i++)
  {
    let name = data[i].name,len=5*name.length;
    shipUI[i].components = [
      { type:"box",position:[0,0,100,100],fill:"rgb(54,57,64,0.6)",stroke:"#fff",width:5},
      { type: "text",position:[(100-len)/2,15,len,30],value:name,color:"#FFFFFF"},
    ];
  }
  for (let UI of shipUI) ship.setUIComponent(UI);
  setTimeout(function(){
    ship.setUIComponent({id:"ship text",visible:false});
    ship.setUIComponent({id:"0",visible:false});
    ship.setUIComponent({id:"1",visible:false});
    ship.setUIComponent({id:"logo",visible:false});
    if (!ship.custom.selected){
      ship.set({type:data[rand(2)].code,invulnerable:400,stats:88888888,shield:999});
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
  let rarity = [7,11,16,23,30,13];
  let restrict = (Array.isArray(mapconfig[map_id].restrict_tiers))?mapconfig[map_id].restrict_tiers.map(x => x-2):Array(6).fill(0).map((i,j) => j);
  let field=[];
  for (let i of restrict)
    for (let j=0;j<rarity[i];j++) field.push(i);
  for (let i = field.length - 1; i > 0; i--) {
    let j = rand(i+1);
    [field[i], field[j]] = [field[j], field[i]];
  }
  let r = field[rand(field.length)];
  for (let i of [,,]) round_ships.push(...s[r].splice(rand(s[r].length),1));
  return round_ships;
}
let data=randomShips(),delayed = 0, update = 1;
function checkradar(ship)
{
  if (!ship.custom.radar)
  {
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
    ship.custom.radar=true;
  }
}
function setupscore(ship)
{
    ship.frag =0;
    ship.rounds = 0;
    ship.wins = 0;
}
function setIdle(ship)
{
  if (gamelength-game.step > toTick(match_time) || !ship.custom.shiped) ship.set({idle:true});
  else ship.set({idle:false});
}
this.tick = function (game){
  if (game.step % 30 === 0)
  {
    if (game.ships.length <= 1){
      if (game.step <= toTick(60))
      {
        delayed=1;
        update =1;
        gamelength=game.step+toTick(match_time+0.25);
        for (let ship of game.ships){
          if (!ship.custom.wait){
            ship.custom.wait = true;
            setteam(ship);
            setupscore(ship);
          }
          checkradar(ship);
          ship.set({vx:0,vy:0});
          setIdle(ship);
        }
        game.setUIComponent({
          id: "wait", position: [39,30,22,50], visible: true,
          components: [
            { type: "text",position:[0,0,100,10],value:"Waiting for more players...",color:"#FFFFFF"},
          ]
        });
        setLogo(game);
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
      }
      else for (let ship of game.ships) ship.gameover({
        "Rounds": ship.rounds,
        "Wins": ship.wins
      });
    } else {
      if (delayed) {
        restartgame(game);
        delayed=0;
      }
      else
      {
        teams.ships=[[],[]];
        teams.count = [0,0];
        if (!game.custom.alien){
          game.custom.alien = true;
          data=randomShips();
          setAlien(game, map_id);
        }
        game.setUIComponent({id:"wait",visible:false});
        for (let ship of game.ships){
          let tm;
          if (!ship.custom.init){
            ship.custom.init = true;
            selectship(ship);
            setteam(ship);
            setupscore(ship);
            update = 1;
          }
          checkradar(ship);
          ship.custom.wait = false;
          ship.set({score:ship.frag});
          setIdle(ship);
          teams.ships[ship.custom.team].push(ship);
          teams.count[ship.custom.team]++;
          let sec = ~~(((ship.custom.choose_countdown||0)-game.step)/60);
          if (sec >= 0) ship.setUIComponent({
            id: "countdown",
            position:[45,85,10,10],
            components:[
              {type:"text",position:[0,0,100,100], color: "#FFF", value: sec}
            ]
          });
          else ship.setUIComponent({id:"countdown",visible:false});
        }
        let steps = gamelength - game.step;
        if (steps <= toTick(match_time)) {
          let minutes = ~~(steps / 3600);
          let seconds = ~~((steps % 3600) / 60);
          if (seconds < 10) seconds = "0" + seconds;
          if (minutes < 10) minutes = "0" + minutes;
          game.setUIComponent({
            id: "timer",
            position: [3,28,17,15],
            visible: true,
            components: [
              {type: "text",position:[0,0,80,33],value:`Time left: ${minutes}:${seconds}`,color:"#fff"},
            ]
          });
        }
        else game.setUIComponent({id:"timer",visible:false});
        if (((teams.count.indexOf(0) != -1) || (game.step >= gamelength) || (Math.max(...teams.points) >= pointsToWin)) && (gamelength-game.step< toTick(match_time)))
        {
          gamelength=game.step+toTick(match_time+0.25);
          resetgame(game, teams.count.indexOf(0));
        }
      }
      if (update)
      {
        updatescoreboard(game);
        update =0;
      }
    }
  }
  if (game.step % 60 === 0) checkteambase();
  if (game.step % toTick(mapconfig[map_id].spawn_delay/60) === 0) spawnSecondary();
};

this.event = function (event,game){
  switch (event.name){
    case "ship_spawned":
      var ship = event.ship;
      var ship_level = Math.trunc(ship.type / 100);
      if (!Object.is(ship,null)) ship.set({x:teams.proto.x*teams.x[ship.team],y:teams.proto.y,invulnerable:400,stats:88888888});
      update = 1;
    break;
    case "ship_destroyed":
      if (!Object.is(event.killer,null))
      {
        event.killer.frag++;
        teams.points[event.killer.team]++;
      }
      update = 1
    break;
    case "ship_disconnected":
      update = 1;
      break;
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;
      if (["0","1"].indexOf(component) != -1)
      {
        if (gamelength-game.step <= toTick(match_time))
        {
          ship.setUIComponent({id:"0",visible:false});
          ship.setUIComponent({id:"1",visible:false});
          ship.setUIComponent({id:"ship text",visible:false});
          ship.setUIComponent({id:"logo",visible:false});
          ship.custom.choose_countdown = game.step;
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
    let u=1-ship.custom.team;
    if (isRange(190*teams.x[u],240*teams.x[u],ship.x) && isRange(-35,35,ship.y)) rekt(ship,15*Math.trunc(ship.type/100));
  }
}

function getcolor(color,alpha = 1){
  return `hsla(${color},100%,50%,${alpha})`;
}
scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

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
    let j=0,team=tm[ship.custom.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        scoreboard.components.splice((j*2+ship.custom.team)*2+4,0,
          new PlayerBox(ship.custom.team*50,(j+1)*10)
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.custom.team)*2,2,
      new PlayerBox(ship.custom.team*50,90),
      new Tag("text",ship.frag,ship.custom.team*50,90,ship.custom.team,"right",2),
      new Tag("player",ship.id,ship.custom.team*50,90,ship.custom.team,"left")
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

var gamelength = toTick(match_time+0.25);

function spawnSecondary(){
  let options = [10,10,10,11,11,20,21,21,91];
  for (let data of mapconfig[map_id].secondaries)
  {
    let spawnCode = options[rand(options.length)];
    let secondary = data;
    Object.assign(secondary,{code:spawnCode});
    game.addCollectible(secondary);
  }
}

var base = {
  id: "base",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/blue%20line%20(1).jpg",
  transparent: false
};

game.setObject({
  id: "base",
  type: base,
  position: {x:195,y:0,z:-2},
  rotation: {x:0,y:0,z:0},
  scale: {x:4,y:80,z:0}
});

var base2 = {
  id: "base2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/red%20line%20(1).jpg",
  transparent: false
};

game.setObject({
  id: "base2",
  type: base2,
  position: {x:-195,y:0,z:-2},
  rotation: {x:0,y:0,z:0},
  scale: {x:4,y:80,z:0}
});

var gate = {
  id: "gate",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H.js",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20emissive%20(5).jpg",
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
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20emissive%20(5).jpg",
  emissiveColor: 0xff324c,
  specularColor: 0x2f4f4f,
  transparent: false,
};

var gate3 = {
  id: "gate3",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/H2.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20emissive%20(5).jpg",
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
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20lambert%20orange.png",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/Ship%20emissive%20(5).jpg",
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
for (let i=0; i<13; i++){
  addcube(-234.5+i*3.375,-38,.675,.7,.5);
  addcube(-234.5+i*3.375,38,.675,.7,.5);
  addcube(234.5-i*3.375,38,.675,.7,.5);
  addcube(234.5-i*3.375,-38,.675,.7,.5);
}
