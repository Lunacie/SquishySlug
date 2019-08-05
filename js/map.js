
class Map {
    constructor(player, characters) {

      this._player = player;
      this._characters = characters;
      this._hexMap = [];
      this._data = [];
      this._layers = [];
      this._startY = 0;
      this._startX = 0;
      this._timestamp = 0;
      this.lastHex = 0;
      this.drew = false;
      this.elements;
      this.canvas = document.getElementById("canvas");

      this.fullMap = new FullMap();
      this.height = this.fullMap.height;
      this.width = this.fullMap.width;
      this._player.map = this;
      for (let i = 0; i < characters.length; i++)
        characters[i].map = this;

      this.canvas.style.width = this.width * (tiles.size) + "px";
      this.canvas.style.height = this.height * (tiles.size / 4) + "px";
    }

    update() {

      //console.log($(".tile:visible"));
      //console.log(this._startY);

      // Move map block if need be depending on player position

    }


    getRandomDestination() {
      return this.fullMap.getRandomDestination();
    }


    draw(ox, oy, moved) {

      if (!loadManager.isComplete())
        return;

      if (!this.drew)
        this.canvas.innerHTML = '';

      if (moved)
        this._moved = true;

      let x = parseInt(this.canvas.style.width) / 2;
      let y = 0;
      let yr = 0;
      //ox += tiles.size;
      //oy += tiles.size;

      for (var i = 0; i < this.height; i++)
      {
        this._drawCol(ox + x, oy + y, yr);
        y += tiles.size / 4;
        x -= tiles.size / 2;
        yr++;
      }
      if (!this.drew)
        this._sortElements();
      this._moved = false;
      this.drew = true;
    }

    _drawCol(xo, yo, yr) {
        var x = 0;
        var y = 0;
        var xr = 0;


          for (var j = 0; j < this.width; j++)
          {
            for (var l = 0; l < this.fullMap.data[0][yr].length; l++) {
              this._drawTile(xo + x, yo + y, yr, xr, l);
            }


       var tileMap = this._buildTileMap(xr, yr);
          var xt = 0;
          var yt = 0;
          for (yt = 0; yt < 10; yt++) {
            for (xt = 0; xt < 10; xt++) {
                for (var i = 0; i < tileMap[yt][xt].length; i++) {
                  tileMap[yt][xt][i].draw(xo + x, yo + y);
                }
            }
          }

          x += tiles.size / 2;
          y += tiles.size / 4;
          xr += 1;
        }
    }



    _drawTile(x, y, yr, xr, layer) {

      if ((this.drew && !this._moved) || layer > this.fullMap.nbLayers) {
        return;
      }

        let node = this.fullMap.getNode(xr, yr);


        if (!this._moved) {
          var tile = tiles.data[this.fullMap.data[layer][yr][xr]];
          if (!tile)
            return;
          if (layer > 0)
            y -= (layer * tiles.size) / 2;


          if (!tile.style && !tile.id)
            return;
          // else draw image
          else if (tile.id) {
            if (!tile.image)
              window.location.reload();
          }

          node.screen = {
            x : x,
            y : y
          };

          let element = tile.svgXml.documentElement;
          element = element.cloneNode(true);
          if (!element)
            return;


          if (!this.elements)
            this.elements = [];
          if (!this.elements[layer])
            this.elements[layer] = [];
          if (!this.elements[layer][yr])
            this.elements[layer][yr] = [];
          if (!this.elements[layer][yr][xr])
            this.elements[layer][yr][xr] = element;


          element.id = "Layer_" + layer + "_"+ yr+"_"+xr;
          element.classList.add("tile");
          if (tile.floor)
            element.classList.add("floor");
          element.classList.add(tile.id);

          element.dataset.x = xr;
          element.dataset.y = yr;

          element.style.width = tiles.size+ "px";
          element.style.height = tiles.size + "px";

          element.style.left = x+"px";
          element.style.top = y+"px";
        }





      if (this._moved) {

        let left = -(parseInt($("#canvas").css('left')));
        let top = -(parseInt($("#canvas").css('top')));

        //console.log(left, top);

        let domEl = $("#Layer_" +layer + "_"+ yr + "_" + xr)[0];

        if (x < (left - (tiles.size / 2) * 2) ||   x > $(window).width() + left ||
           y < (top - (tiles.size / 4) * 3) || y > top + $(window).height()) {
             if (domEl)
              $("#Layer_" +layer + "_"+ yr + "_" + xr).remove();
             return;
          }

        if (this.elements[layer] && this.elements[layer][yr] &&
            this.elements[layer][yr][xr]) {
          if (domEl)
            return;
          let element = this.elements[layer][yr][xr];
          this.canvas.append(element);
        }
      //console.log($(".tile").length);
    }

  }


    _sortElements() {
      let count = 1;
      let y = 0;
      let x = 0;
      let run = true;
      let j = 0;
      let index = 1;
      let offset = this._characters.length;


      for (j = 0; j <= this.fullMap.height -1; j++) {
        x = j;
        y = 0;
        while (x >= 0) {

            for (let lr = 0; lr < this.fullMap.nbLayers; lr++) {
              if (this.elements[lr] && this.elements[lr][y] &&
                this.elements[lr][y][x]) {
                this.elements[lr][y][x].style["z-index"] = index;
                this.fullMap.getNode(x,y).screen.index = index;
            }
          }
          index += offset;
          //console.log(y, x);
          x--;
          y++;
        }
        //console.log("");
      }




     //console.log("=============================");

     // n == width
     // m == heiht

      for (j = 1; j <= this.fullMap.height - 1; j++) {
        x = this.fullMap.width - 1;
        y = j;
        while (y <= this.fullMap.height - 1) {
          //console.log(y, x);
          for (let lr = 0; lr < this.fullMap.nbLayers; lr++) {
            if (this.elements[lr] && this.elements[lr][y] &&
              this.elements[lr][y][x]) {
              this.elements[lr][y][x].style["z-index"] = index;
              this.fullMap.getNode(x,y).screen.index = index;
            }
          }
          index += offset;
          x--;
          y++;
        }
        //console.log(" ");
      }



      }




    _buildTileMap(xr, yr) {
      var tileMap = [];
      let j = 0;
      var realX = xr + this._startX;
      var realY = yr + this._startY;
      var characters = this.fullMap.getCharacters(realX, realY);
      var xt = 0;
      var yt = 0;
      for (yt = 0; yt < 10; yt++) {
        tileMap[yt] = [];
        for (xt = 0; xt < 10; xt++) {
            tileMap[yt][xt] = [];
            for (var i = 0; i < characters.length; i++) {
              if (characters[i].internalBlock.x >= xt &&
                  characters[i].internalBlock.x < xt + 1 &&
                  characters[i].internalBlock.y >= yt &&
                  characters[i].internalBlock.y < yt + 1)
                  {
                  tileMap[yt][xt].push(characters[i]);
                  characters[i].indexOnTile = j;
                j++;
              }
            }
        }
      }
      return tileMap;
    }

    getCharacterPositionOnTile(character) {
      let x = character.block.x;
      let y = character.block.y;
      let zIndex = parseInt(this.elements[0][y][x].style["z-index"]);

      let tileMap = this._buildTileMap(x, y);
      return zIndex + character.indexOnTile + 1;
    }


  _loadImage(tile, offColor) {
      //$.get("assets/vectors/" + tile.id + ".svg", function(svgXml) {
        // offscreen
        svgXml = tile.svgXml;
        //offColor = tile.floor ? offColor : "#FFFFFF";
      //  tile.image.off = new Image();
        var str = (new XMLSerializer).serializeToString(svgXml);
        /*var off = str.replace(/fill(.*);/g,'fill:'+offColor+';');
        off = off.replace(/stroke(.*);/g,'stroke:'+offColor+';');
        off = off.replace(/fill-opacity(.*);/g,'fill-opacity:'+offColor+';');
        off = off.replace(/opacity(.*);/g,'opacity:1;');
        tile.image.off.onload = function() {
          tile.image.off.loaded = true;
        }
        tile.image.off.src = "data:image/svg+xml;charset=utf-8," + off;*/
  //  });
  }

  _drawTilePoly(x, y) {
    context.beginPath();
    context.moveTo(x + tiles.size / 2,
               y + tiles.size / 2);
    context.lineTo(x + tiles.size,
               y + (tiles.size / 4) * 3);
    context.lineTo(x + tiles.size / 2,
               y + tiles.size);
    context.lineTo(x,
               y + (tiles.size / 4) * 3);
    context.closePath();
    context.fill();
    context.stroke();
  }




  hasCollision(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (y < 0 || x < 0 ||
        y >= this.fullMap.height || x >= this.fullMap.width)
      return true;
    return tiles.data[this.fullMap.data[0][y][x]].collision;
  }

};
