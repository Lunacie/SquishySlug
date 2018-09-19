
function FullMap() {
  var map = {
    data : [
      [
        [06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06],
        [06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06],
        [06, 06, 06, 05, 04, 05, 04, 04, 05, 04, 05, 04, 05, 06, 06, 06, 06],
        [06, 06, 05, 01, 01, 03, 01, 01, 02, 03, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 04, 01, 02, 01, 01, 03, 04, 02, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 02, 01, 01, 01, 01, 02, 03, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 05, 03, 01, 01, 03, 01, 01, 01, 01, 02, 08, 09, 06, 06],
        [06, 06, 05, 01, 02, 03, 01, 01, 01, 03, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 04, 01, 01, 01, 02, 03, 01, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 05, 01, 05, 03, 04, 01, 01, 03, 01, 01, 02, 08, 09, 06, 06],
        [06, 06, 04, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 08, 09, 06, 06],
        [06, 06, 05, 01, 01, 03, 01, 01, 01, 01, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 05, 01, 01, 03, 01, 01, 01, 01, 01, 02, 02, 08, 09, 06, 06],
        [06, 06, 05, 01, 02, 01, 01, 01, 01, 01, 02, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 02, 02, 02, 01, 01, 02, 02, 02, 02, 02, 08, 09, 06, 06],
        [06, 06, 04, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 08, 09, 06, 06],
        [06, 06, 06, 05, 11, 11, 11, 11, 11, 11, 11, 11, 11, 04, 09, 06, 06],
        [06, 06, 06, 06, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 06, 06, 06],
        [06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06, 06],
      ]
    ],

      height : 0,
      width : 0,
      nbLayers : 2,
      hexMap : [],

      _init : function() {
          let tileColorHex = 0x000001;
          for (y = 0; y < this.data[0].length; y++) {
            let line = [];
            for (x = 0; x < this.data[0][y].length; x++) {
                if (tiles.data[this.data[0][y][x]].collision)
                  line.push(0x000000);
                else
                  line.push(tileColorHex);
                tileColorHex += 0x000001;
            }
            this.hexMap.push(line);
          }
      },

      getHex : function(y, x) {
        if (!this.hexMap[y] || !this.hexMap[y][x]) {
          return 0x000000;
        }
        return this.hexMap[y][x];
      },

      _buildGraph : function() {
        this._graph = {};
        for (var y = 0; y < this.data[0].length; y++) {
          //for (var x = 0; )
        }
        /*
        element = {
          value :
        };
        */
      },

      _buildGraph : function() {
        this._graph = [];
        for (var y = 0; y < this.data[0].length; y++) {
          this._graph[y] = [];
          for (var x = 0; x < this.data[0][y].length; x++) {
            this._graph[y][x] = {
              value : this.data[0][y][x],
              x : x,
              y : y,
              characters : [],
            }
          }
        }

        for (var y = 0; y < this.data[0].length; y++) {
          for (var x = 0; x < this.data[0][y].length; x++) {
            this._graph[y][x].top = y > 0 ?
                                    this._graph[y - 1][x] : null;
            this._graph[y][x].bot = y < this.data[0].length - 1 ?
                                    this._graph[y + 1][x] : null;
            this._graph[y][x].left = x > 0 ?
                                    this._graph[y][x - 1] : null;
            this._graph[y][x].right = x < this.data[0][y].length - 1 ?
                                    this._graph[y][x + 1] : null;
          }
        }
      },

      getRandomDestination : function() {
        let collision = true;
        let x = y = 0;
        do {
          let width = this._graph[0].length;
          let height = this._graph.length;
          x = Math.floor(Math.random() * width);
          y = Math.floor(Math.random() * height);
          collision = tiles.data[this._graph[y][x].value].collision;
        } while (collision == true)
        //console.log(x, y);
        return {
          x : x,
          y : y
        }
      },

      getNode : function(x, y) {
        if (this._graph[y] && this._graph[y][x])
          return this._graph[y][x];
        return null;
      },

      clear : function() {
        for (var y = 0; y < this._graph.length; y++) {
          for (var x = 0; x < this._graph[y].length; x++) {
            this._graph[y][x].prev = null;
            this._graph[y][x].distance = "infinite";
            this._graph[y][x].start = false;
            }
        }
      },

      addCharacter : function(character, x, y) {
        if (this._graph[y] && this._graph[y][x] && this._graph[y][x].characters)
          this._graph[y][x].characters.push(character);
      },

      getCharacters : function(x, y) {
        if (!this._graph[y] || !this._graph[y][x])
          return [];
        return this._graph[y][x].characters;
      },

      removeCharacter : function(id, x, y) {
        if (!this._graph[y] || !this._graph[y][x] || !this._graph[y][x].characters)
          return;
        for (var i = 0; i < this._graph[y][x].characters.length; i++) {
          if (this._graph[y][x].characters[i].id == id) {
            this._graph[y][x].characters.splice(i, 1);
            return;
          }
        }
      },


      getCharacter : function(id) {
        for (var y = 0; y < this._graph.length; y++) {
          for (var x = 0; x < this._graph[y].length; x++) {
            for (var i = 0; i < this._graph[y][x].characters.length; i++) {
              if (this._graph[y][x].characters[i].id == id)
                return this._graph[y][x].characters[i];
            }
          }
        }
        return null;
      },

  };
  map._init();
  map._buildGraph();
  return map;
};
var fullMap = FullMap();
