
class FullMap {

  constructor() {

     this.data = [
        [
          [ 6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
          [ 6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
          [ 6,  6,  6,  5,  4,  5,  4,  4,  5,  4,  5,  4,  5,  6,  6,  6,  6],
          [ 6,  6,  5,  1,  1,  3,  1,  1,  2,  3,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  4,  1,  2,  1,  1,  3,  4,  2,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  2,  1,  1,  1,  1,  2,  3,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  5,  3,  1,  1,  3,  1,  1,  1,  1,  2,  8,  9,  6,  6],
          [ 6,  6,  5,  1,  2,  3,  1,  1,  1,  3,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  4,  1,  1,  1,  2,  3,  1,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  5,  1,  5,  3,  4,  1,  1,  3,  1,  1,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  8,  9,  6,  6],
          [ 6,  6,  5,  1,  1,  3,  1,  1,  1,  1,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  5,  1,  1,  3,  1,  1,  1,  1,  1,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  5,  1,  2,  1,  1,  1,  1,  1,  2,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  2,  2,  2,  1,  1,  2,  2,  2,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  8,  9,  6,  6],
          [ 6,  6,  6,  5, 11, 11, 11, 11, 11, 11, 11, 11, 11,  4,  9,  6,  6],
          [ 6,  6,  6,  6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  6,  6,  6],
          [ 6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6]
        ]
      ];

    this.height = this.data[0].length;
    this.width = this.data[0][0].length;
    this.nbLayers = 2;

    this._buildLayerMap();
    this._buildGraph();
  }


  _buildLayerMap() {
    for (let i = 1; i <= this.nbLayers; i++) {
      this.data[i] = [];
      for (let y = 0; y < this.height; y++) {
        this.data[i][y] = [];
        for (let x = 0; x < this.width; x++) {
          /*console.log(this.data[1]);
          console.log(i - 1, y, x);
          console.log(tiles.data[this.data[i - 1][y][x]]);*/
          if (tiles.data[this.data[i - 1][y][x]].top)
            this.data[i][y][x] = tiles.data[this.data[i - 1][y][x]].top;
          else
            this.data[i][y][x] = 0;
        }
      }
    }
  }

  _buildGraph() {
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
  }

  getRandomDestination() {
    let collision = true;
    let x = 0;
    let y = 0;
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
  }

  getNode(x, y) {
    if (this._graph[y] && this._graph[y][x])
      return this._graph[y][x];
    return null;
  }

  clear() {
    for (var y = 0; y < this._graph.length; y++) {
      for (var x = 0; x < this._graph[y].length; x++) {
        this._graph[y][x].prev = null;
        this._graph[y][x].distance = "infinite";
        this._graph[y][x].start = false;
        }
    }
  }

  addCharacter(character, x, y) {
    if (this._graph[y] && this._graph[y][x] && this._graph[y][x].characters)
      this._graph[y][x].characters.push(character);
  }

  getCharacters(x, y) {
    if (!this._graph[y] || !this._graph[y][x])
      return [];
    return this._graph[y][x].characters;
  }

  removeCharacter(id, x, y) {
    if (!this._graph[y] || !this._graph[y][x] || !this._graph[y][x].characters)
      return;
    for (var i = 0; i < this._graph[y][x].characters.length; i++) {
      if (this._graph[y][x].characters[i].id == id) {
        this._graph[y][x].characters.splice(i, 1);
        return;
      }
    }
  }


  getCharacter(id) {
    for (var y = 0; y < this._graph.length; y++) {
      for (var x = 0; x < this._graph[y].length; x++) {
        for (var i = 0; i < this._graph[y][x].characters.length; i++) {
          if (this._graph[y][x].characters[i].id == id)
            return this._graph[y][x].characters[i];
        }
      }
    }
    return null;
  }

};
