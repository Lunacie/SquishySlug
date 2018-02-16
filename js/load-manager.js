
function LoadManager(characters, tiles) {

  this._characters = characters;
  this._tiles = tiles;

  this.load = function() {
    // for each characters
    for (var i = 0; i < this._characters.length; i++) {
      var images = this._characters[i].images;
      // for each action
      for (var j = 0; j < 2; j++) {
        images[j] = images[j] || [];
        // for each direction
        for (var k = 0; k < 4; k++) {
          if (!images[j][k]) {
            this._characters[i].loadImage(j, k);
          }
        }
      }
    }
  };


    this.isComplete = function() {
      for (var i = 0; i < this._characters.length; i++) {
        var images = this._characters[i].images;
        if (this._characters[i].images[0].length != 4 ||
            this._characters[i].images[0].length != 4)
            return false;
      }

      for (var i = 0; i < this._tiles.data.length; i++) {
        var tile = this._tiles.data[i];
        if (tile.id && !tile.image)
          return false;
      }

      return true;
    };

}
