
function Map(player, characters)
{
  map = {
    width : 10,
    height : 10,

    _player : player,
    _characters : characters,
    _hexMap : [],
    _data : [],
    _layers : [],
    _startY : 0,
    _startX : 0,
    _timestamp : 0,

    update : function() {
      //console.log(this._startY);

      var updated = this.updateRatio();

      var half = (this.height / 2);
      var top = half - half.toFixed(0) ? half.toFixed(0) : half;

      half = (this.width / 2);
      var left = half - half.toFixed(0) ? half.toFixed(0) : half;

      var offset = 3;
      if (ratio < 1)
        offset = 2
      if (updated ||/*
          ((this._player.block.y - 1 <= this._startY ) ||
          (this._player.block.x -1 <= this._startX ) ||
          (this._player.block.y + 1 >= this._startY + this.height ) ||
          (this._player.block.x + 1 >= this._startX + this.width))) { */
          ((this._player.block.y - 1 - this._startY < this.height / offset ) ||
          (this._player.block.x -1 - this._startX < this.width / offset ) ||
          (this._player.block.y + 1 - this._startY > this.height - (this.height / offset)) ||
          (this._player.block.x + 1 - this._startX > this.width - (this.width / offset )))) {
        this._startX = parseInt(this._player.x) - left;
        this._startY = parseInt(this._player.y) - top;
        this._fillMap();
      }
    },

    updateRatio : function() {
      var oldX = this.width;
      var oldY = this.height;

      if (ratio < 1) {
      this.height = (canvas.height / (tiles.size)) * 3;
      this.height = parseInt(this.height);
      this.width = this.height;
      }
      else {
      this.width = (canvas.width / (tiles.size )) * 3;
      this.width = parseInt(this.width);
      this.height = this.width;
      }
      this.width = this.width > fullMap.width ? fullMap.width : this.width;
      this.height = this.height > fullMap.height ? fullMap.height : this.height;

      return oldX != this.width || oldY != this.height ? true : false;
    },

    getRandomDestination : function() {
      return fullMap.getRandomDestination();
    },

    draw : function(ox, oy) {

      if (!loadManager.isComplete())
        return;

      var x = 0;
      var y = 0;
      var yr = 0;
      //ox += tiles.size;
      //oy += tiles.size;

      tileColorHex = 0x000000;
      for (var i = 0; i < this.height; i++)
      {
        this._drawCol(ox + x, oy + y, yr);
        y += tiles.size / 4;
        x -= tiles.size / 2;
        yr++;
      }
    },

    _drawCol : function(xo, yo, yr) {
        var x = 0;
        var y = 0;
        var xr = 0;

        for (var j = 0; j < this.width; j++)
        {
          for (var l = 0; l < this._data.length; l++) {
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
    },

    _buildTileMap : function(xr, yr) {
      var tileMap = [];

      var realX = xr + this._startX;
      var realY = yr + this._startY;
      var characters = fullMap.getCharacters(realX, realY);
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
    },

    _drawTile : function(x, y, yr, xr, layer) {
      var tile = tiles.data[this._data[layer][yr][xr]];
      if (!tile)
        return;
      if (layer > 0)
        y -= (layer * tiles.size) / 2;

//      var fmX = fullMap._startX >= 0 ? fullMap._startX + xr : xr;
//      var fmY = fullMap._startY >= 0 ? fullMap._startY + yr : yr;

      var fmX = xr;
      var fmY = yr;
      if (this._startX) {
        fmX += this._startX;
        fmY += this._startY;
      }
      var offColor = "000000" + fullMap.getHex(fmY, fmX).toString(16);
      //var offColor = "000000" + ((fmY * fullMap.width) + fmX).toString(16);
      //var offColor = "000000" + tileColorHex.toString(16);
      offColor = "#" + offColor.slice(-6);

      if (!tile.style && !tile.id)
        return;

      // if has no image, draw simple tile
      else if (tile.style) {
          // on screen
          ctx.fillStyle = tile.style;
          ctx.strokeStyle = tile.style;
          this._drawTilePoly(x, y, ctx);

          // off screen
          offColor = tile.floor ? offColor : "#FFFFFF";
          ctxOff.fillStyle = offColor;
          ctxOff.strokeStyle = ctxOff.fillStyle;
          this._drawTilePoly(x, y, ctxOff);
          debugOverlay.drawCoords(x, y, fmX, fmY, offColor);
        }
      // else draw image
      else if (tile.id) {
        if (!tile.image.off)
          this._loadImage(tile, offColor);
        else {
          // on screen
          var element = tile.image.on;
          if (element.loaded)
            ctx.drawImage(element,
                      x, y, tiles.size, tiles.size);

          // off screen
          if (tile.floor) {
            ctxOff.fillStyle = offColor;
            ctxOff.strokeStyle = ctxOff.fillStyle;
            this._drawTilePoly(x, y, ctxOff);
            debugOverlay.drawCoords(x, y, fmX, fmY, offColor);
          }
          else {
          element = tile.image.off;
          if (element.loaded)
            ctxOff.drawImage(element,
                        x, y, tiles.size, tiles.size);
          }
        }
      }
      if (layer == 0)
        tileColorHex += 0x000001;
    },

  _loadImage : function(tile, offColor) {
      $.get("assets/vectors/" + tile.id + ".svg", function(svgXml) {
        // offscreen
        offColor = tile.floor ? offColor : "#FFFFFF";
        tile.image.off = new Image();
        var str = (new XMLSerializer).serializeToString(svgXml);
        var off = str.replace(/fill(.*);/g,'fill:'+offColor+';');
        off = off.replace(/stroke(.*);/g,'stroke:'+offColor+';');
        off = off.replace(/fill-opacity(.*);/g,'fill-opacity:'+offColor+';');
        off = off.replace(/opacity(.*);/g,'opacity:1;');
        tile.image.off.onload = function() {
          tile.image.off.loaded = true;
        }
        tile.image.off.src = "data:image/svg+xml;charset=utf-8," + off;
    });
  },

  _drawTilePoly: function(x, y, context) {
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
  },



  _fillMap : function() {

  // init fullMap first time
  if (!fullMap.height) {
    fullMap.height = fullMap.data[0].length;
    fullMap.width = fullMap.data[0][0].length;
  }

  // fill map
  for (z = 0; z < fullMap.nbLayers; z++) {
    var y2 = this._startY;
      this._data[z] = this._data[z] ? this._data[z] : [];
      for (y = 0; y < this.height; y++) {
        var x2 = this._startX;
        this._data[z][y] = this._data[z][y] ? this._data[z][y] : [];
        for (x = 0; x < this.width; x++) {
          if (y2 < 0 || x2 < 0)
            this._data[z][y][x] = 0;
          else if (y2 >= fullMap.height || x2 >= fullMap.width)
            this._data[z][y][x] = 0;
          else
            {
                // Auto-top blocks
                if (z > 0 && tiles.data[this._data[z - 1][y][x]].top)
                  this._data[z][y][x] = tiles.data[this._data[z - 1][y][x]].top;
                // No auto top available
                else if (z > 0)
                  this._data[z][y][x] = 0;
                // any other block + base layer
                else
                  this._data[z][y][x] = fullMap.data[z][y2][x2];
            }
          x2++;
        }
        y2++;
      }
    }
  },

  hasCollision : function (x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (y < 0 || x < 0 ||
        y >= fullMap.height || x >= fullMap.width)
      return true;
    return tiles.data[fullMap.data[0][y][x]].collision;
  },

  };

  map._fillMap();
  map._player.map = map;
  return map;
};
