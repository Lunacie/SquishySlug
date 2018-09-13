
function FullMap() {
  var map = {
    data : [
      [
        [5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        [6, 1, 3, 4, 4, 4, 5, 5, 5, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 3, 4, 4, 4, 5, 5, 5, 5, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 3, 3, 1, 2, 3, 1, 2, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 1, 1, 4, 5, 2, 1, 2, 3, 4, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 1, 1, 2, 5, 6, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 1, 1, 5, 3, 4, 2, 3, 1, 5, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 2, 3, 1, 2, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 4, 5, 1, 1, 2, 3, 4, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [6, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
        [5, 2, 2, 1, 5, 3, 4, 1, 2, 3, 1, 1, 4, 4, 4, 4, 5, 5, 5, 4],
      ]
    ],

      height : 0,
      width : 0,
      nbLayers : 2,

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
        return this._graph[y][x];
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
  map._buildGraph();
  return map;
};
var fullMap = FullMap();
