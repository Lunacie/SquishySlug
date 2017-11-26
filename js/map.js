
function Map(player)
{
  map = {
    width : 6,
    height : 6,

    _player : player,
    _data : [],
    _layers : [],
    _startY : 0,
    _startX : 0,

    update : function() {
      var half = (this.height / 2);
      var top = half - half.toFixed(0) ? half.toFixed(0) : half;

      half = (this.width / 2);
      var left = half - half.toFixed(0) ? half.toFixed(0) : half;

      this._startX = parseInt(this._player.x) - left;
      this._startY = parseInt(this._player.y) - top;
      this._fillMap();
    },

    draw : function(ox, oy) {
      var x = 0;
      var y = 0;
      var yr = 0;
      //ox += tiles.size;
      //oy += tiles.size;

      for (var i = 0; i < this.height; i++)
      {
        this._drawCol(ox + x, oy + y, yr);
        y += tiles.size / 4;
        x -= tiles.size / 2;
        yr++;
      }
      for (var l = 0; l < fullMap.layers.length; l++)
      {
        yr = 0; y = 0; x = 0;
        for (var i = 0; i < this.height; i++)
        {
          this._drawCol(ox + x, oy + y, yr, l);
          y += tiles.size / 4;
          x -= tiles.size / 2;
          yr++;
        }
      }
    },

    /* TODO: Move this to UI obj */
    drawOverlay : function() {
      ctx.strokeStyle = "white";
      for (y = 0; y < fullMap.height; y++) {
        for (x = 0; x < fullMap.width; x++) {

            var val = fullMap.data[y][x];
            ctx.fillStyle = "black";
            if (y >= this._startY && y < this._startY + this.height &&
                x >= this._startX && x < this._startX + this.width)
                      ctx.fillStyle = "red";

            ctx.strokeText(val, x * 30, (y * 30) + 100);
            ctx.fillText(val, x * 30, (y * 30) + 100);
        }
      }

      ctx.fillStyle = "black";
      ctx.strokeText("fps : " + fps, 0, 30);
      ctx.fillText("fps : " + fps, 0, 30);
    },

    _drawCol : function(xo, yo, yr, layer) {
        var x = 0;
        var y = 0;
        var xr = 0;

        for (var j = 0; j < this.width; j++)
        {
          this._drawTile(xo + x, yo + y, yr, xr, layer);
          x += tiles.size / 2;
          y += tiles.size / 4;
          xr += 1;
        }
    },

    _drawTile : function(x, y, yr, xr, layer) {
      if (typeof layer !== 'undefined')
      {
        //if (this._player.yBlock + yr >= fullMap.height ||
            //this._player.xBlock + xr >= fullMap.width)
          //return;
        var tile = tiles.data[this._layers[layer][yr][xr]];
        y -= ((layer + 1) * tiles.size) / 2;
      }
      else
        var tile = tiles.data[this._data[yr][xr]];
      if (!tile.style && !tile.id)
        return;
      else if (tile.style) {
          ctx.fillStyle = tile.style;
          ctx.strokeStyle = tile.style;

          ctx.beginPath();
          ctx.moveTo(x + tiles.size / 2,
                     y + tiles.size / 2);
          ctx.lineTo(x + tiles.size,
                     y + (tiles.size / 4) * 3);
          ctx.lineTo(x + tiles.size / 2,
                     y + tiles.size);
          ctx.lineTo(x,
                     y + (tiles.size / 4) * 3);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      else if (tile.id) {
        ctx.drawImage(document.getElementById(tile.id),
                      x, y, tiles.size, tiles.size);
      }
    },

  _fillMap : function() {

  // fill map
  var y2 = this._startY;
    for (y = 0; y < this.height; y++) {
      var x2 = this._startX;
      this._data[y] = [];
      for (x = 0; x < this.width; x++) {
        if (y2 < 0 || x2 < 0)
          this._data[y][x] = 0;
        else if (y2 >= fullMap.height || x2 >= fullMap.width)
          this._data[y][x] = 0;
        else
          this._data[y][x] = fullMap.data[y2][x2];
        x2++;
      }
      y2++;
    }

    // layers
    for (var l = 0; l < fullMap.layers.length; l++) {
      var y2 = this._startY;
      this._layers[l] = [];
        for (y = 0; y < this.height; y++) {
          var x2 = this._startX;
          this._layers[l][y] = [];
          for (x = 0; x < this.width; x++) {
            if (y2 < 0 || x2 < 0)
              this._layers[l][y][x] = 0;
            else if (y2 >= fullMap.height || x2 >= fullMap.width)
              this._layers[l][y][x] = 0;
            else if (tiles.data[fullMap.data[y2][x2]].top)
              this._layers[l][y][x] = tiles.data[fullMap.data[y2][x2]].top;
            else
              this._layers[l][y][x] = fullMap.layers[l][y2][x2];
            x2++;
          }
          y2++;
        }
    }
  },

  _hasCollision : function (x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (y < 0 || x < 0 ||
        y >= fullMap.height || x >= fullMap.width)
      return true;
    return tiles.data[fullMap.data[y][x]].collision;
  },

  };

  map._fillMap();
  map._player.map = map;
  return map;
};
