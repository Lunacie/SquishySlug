
function LoadManager(characters, tiles) {

  this._characters = characters;
  this._tiles = tiles;

  this.load = function() {

    this._loadXmlSvg();


  /*  // for each characters
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
    }*/


    // for each tile
    this._loadTiles();
  };

  this._loadXmlSvg = function() {
    imageLoader._loadXmlSvg();
  }

  this._loadTiles = function() {
    for (let i = 0; i < tiles.data.length; i++) {
      let tile = tiles.data[i];
        $.get("/assets/vectors/" + tile.id + ".svg", function(svgXml) {
            tile.image = { on : { loaded : true }};
            tile.svgXml = svgXml;
        });
  }
}

   this._xmlLoadingDone = function() {
     for (let i = 0; i < imageLoader.sprites.length; i++) {
       for (let j = 0; j < imageLoader.sprites[i].length; j++) {
            if (!imageLoader.sprites[i][j].svgXml ||
                !typeof imageLoader.sprites[i][j].svgXml === 'objects')
              return false;
       }
     }
    for (let i = 0; i < imageLoader.statics.length; i++) {
         if (!imageLoader.statics[i].svgXml ||
             !typeof imageLoader.statics[i].svgXml === 'objects')
          return false;
    }
    return true;
   }


    this._loadCanvasImages = function() {
      for (let i = 0; i < characters.length; i++) {
          for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 4; k++) {
              imageLoader._loadCanvasImages(characters[i], j, k);
            }
          }
        }
    }

    this.isComplete = function() {

      if (this._xmlLoadingDone() == false)
        return;

      this._loadCanvasImages();

      for (var i = 0; i < this._characters.length; i++) {
        if (this._characters[i]._static) {
          var images = this._characters[i].images;
          if (!images.on /*|| !images.off*/)
            return false;
        }
        else {
          //console.log(this._characters[i].images);
          var images = this._characters[i].images;
          for (i = 0; i < 2; i++) {
            for (j = 0; j < 4; j++) {
              if (!images[i][j].on /*|| !images[i][j].off*/)
                return false;
            }
          }
        }
        return true;
      }

      for (var i = 0; i < this._tiles.data.length; i++) {
        var tile = this._tiles.data[i];
        if (tile.id && !tile.image)
          return false;
      }
      return true;
    };

}
