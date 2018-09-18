  var tiles = {
    initSize : 250,

    data : [
      /* 0 */ { // none
        collision : true,
      },
      /* 1 */ {
        id : "floor_grass",
        collision : false,
        floor : true,
      },
      /* 2 */ {
      id : "floor_sand",
      collision : false,
      floor : true,
      },
      /* 3 */ {
      id : "tree_01_l00",
      collision : true,
      top : 7,
      },
      /* 4 */ {
      id : "stone",
      collision : true,
      },
      /* 5 */ {
      id : "stone_2",
      collision : true,
      },
      /* 6*/ {
      id : "water",
      collision : true,
      },
      /* 7 */ {
      id : "tree_01_l01",
      collision : true,
      },
      /* 8 */ {
      id : "floor_sand_water_SE",
      floor : true
      },
      /* 9 */ {
      id : "water_shallow_SE",
      collision : true,
      },
      /* 10 */ {
      id : "water_shallow_SW",
      collision : true,
      },
      /* 11 */ {
      id : "floor_sand_water_SW",
      floor : true
      },
    ]
  };
tiles.size = tiles.initSize;
