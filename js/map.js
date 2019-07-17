
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

      this.canvas.style.width = this.width * (tiles.size) + "px";
      this.canvas.style.height = this.height * (tiles.size / 4) + "px";
    }

    update() {
      //console.log(this._startY);

      // Move map block if need be depending on player position

    }


    getRandomDestination() {
      return this.fullMap.getRandomDestination();
    }


    draw(ox, oy) {

      if (!loadManager.isComplete())
        return;

      if (!this.drew)
        this.canvas.innerHTML = '';

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


    _buildTileMap(xr, yr) {
      var tileMap = [];

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
              }
            }
        }
      }
      return tileMap;
    }

    _drawTile(x, y, yr, xr, layer) {
    if (this.drew || layer > this.fullMap.nbLayers)
      return;
    /*console.log(layer, yr, xr);
    console.log(this.fullMap.data[layer]);
    console.log(this.fullMap.data[layer][yr]);
    console.log(this.fullMap.data[layer][yr][xr]);*/
      var tile = tiles.data[this.fullMap.data[layer][yr][xr]];
      if (!tile)
        return;
      if (layer > 0)
        y -= (layer * tiles.size) / 2;

//      var fmX = fullMap._startX >= 0 ? fullMap._startX + xr : xr;
//      var fmY = fullMap._startY >= 0 ? fullMap._startY + yr : yr;

      /*var fmX = xr;
      var fmY = yr;
      if (this._startX) {
        fmX += this._startX;
        fmY += this._startY;
      }*/
      //var offColor = "000000" + fullMap.getHex(fmY, fmX).toString(16);
      //var offColor = "000000" + ((fmY * fullMap.width) + fmX).toString(16);
      //var offColor = "000000" + tileColorHex.toString(16);
      //offColor = "#" + offColor.slice(-6);

      if (!tile.style && !tile.id)
        return;
      // if has no image, draw simple tile
      else if (tile.style) {
          // on screen
          this._drawTilePoly(x, y);

          debugOverlay.drawCoords(x, y, fmX, fmY, offColor);
        }
      // else draw image
      else if (tile.id) {
        if (!tile.image)
          window.location.reload();
        /*if (!tile.image.off) {
          this._loadImage(tile, offColor);
          if (offColor > this.lastHex)
          this.lastHex = offColor;
        }
        else {*/
          // on screen

          var element = tile.image.on;
          element = element.cloneNode();

          if (!this.elements)
            this.elements = [];
          if (!this.elements[layer])
            this.elements[layer] = [];
          if (!this.elements[layer][yr])
            this.elements[layer][yr] = [];
          if (!this.elements[layer][yr][xr])
            this.elements[layer][yr][xr] = element;


          element.classList.add("tile");

          element.dataset.x = xr;
          element.dataset.y = yr;

          element.style.width = tiles.size+ "px";
          element.style.height = tiles.size + "px";


          element.style.left = x+"px";
          element.style.top = y+"px";
          //element.style["z-index"] = (yr * this.height) + xr;
          //if (element.loaded) {
            //console.log(element);
          this.canvas.append(element);
            /*ctx.drawImage(element,
                      x, y, tiles.size, tiles.size);*/
            //}

          // off screen
          /*
          if (tile.floor) {
            debugOverlay.drawCoords(x, y, fmX, fmY, offColor);
          }
          else {
          element = tile.image.off;
          if (element.loaded)
            ctxOff.drawImage(element,
                        x, y, tiles.size, tiles.size);
          }*/
        }

    /*  if (layer == 0)
        tileColorHex += 0x000001;*/
    }

  characterOcclusion(character, element) {

    let xMin = character.block.x - 5 < 0 ? 0 : character.block.x - 5;
    let xMax = character.block.x + 5 >= this.width ?
               this.width - 1 :character.block.x + 5;
    let yMin = character.block.y - 5 < 0 ? 0 : character.block.y - 5;
    let yMax = character.block.y + 5 >= this.height ?
               this.height - 1 : character.block.y + 5;

    for (let yr = yMin; yr < yMax; yr++) {
      for (let xr = xMin; xr < xMax; xr++) {
          for (let lr = 0; lr < this.fullMap.nbLayers; lr++) {
            if (this.elements[lr] &&
                this.elements[lr][yr] &&
                this.elements[lr][yr][xr]) {

              this.elements[lr][yr][xr].style["z-index"] =
                                        element.style["z-index"] - 1;
              if (yr > character.y || xr > character.x &&
                  (lr > 0 ||
                  tiles.data[this.fullMap.data[lr][yr][xr]].occlusion)) {
                this.elements[lr][yr][xr].style["z-index"] =
                                          element.style["z-index"] + 1;
              }
            }
         }
      }

    }
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
