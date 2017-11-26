
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
    },

    /* TODO: Move this to UI obj */
    drawOverlay : function() {
      ctx.strokeStyle = "white";
      for (y = 0; y < fullMap.height; y++) {
        for (x = 0; x < fullMap.width; x++) {

            var val = fullMap.data[0][y][x];
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


      ctx.fillStyle = "black";
      ctx.strokeStyle = "white";
      ctx.font = "30px Arial";
      var pos = "x: " + this._player.x.toFixed(1) +
               " y:" + this._player.y.toFixed(1);
      ctx.fillText(pos, 350, 450);
      ctx.strokeText(pos, 350, 450);
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
          if (this._player.xBlock == xr + this._startX && this._player.yBlock == yr + this._startY)
            this._player.draw(300, 0);
          x += tiles.size / 2;
          y += tiles.size / 4;
          xr += 1;
        }
    },

    _drawTile : function(x, y, yr, xr, layer) {
      //if (this._player.yBlock + yr >= fullMap.height ||
          //this._player.xBlock + xr >= fullMap.width)
        //return;
      var tile = tiles.data[this._data[layer][yr][xr]];
      if (layer > 0)
        y -= (layer * tiles.size) / 2;
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

      /* // Display tile coords
      ctx.fillStyle = "black";
      ctx.strokeStyle = "white";
      ctx.font = "20px Arial";
      var pos = this._startX + xr + "," + this._startY + yr;
      ctx.fillText(pos, x, y);
      // ctx.strokeText(pos, x, y); */
    },

  _fillMap : function() {

  // fill map
  for (z = 0; z < fullMap.data.length; z++) {
    var y2 = this._startY;
    this._data[z] = [];
      for (y = 0; y < this.height; y++) {
        var x2 = this._startX;
        this._data[z][y] = [];
        for (x = 0; x < this.width; x++) {
          if (y2 < 0 || x2 < 0)
            this._data[z][y][x] = 0;
          else if (y2 >= fullMap.height || x2 >= fullMap.width)
            this._data[z][y][x] = 0;
          else
            this._data[z][y][x] = fullMap.data[z][y2][x2];
          x2++;
        }
        y2++;
      }
    }
 /*
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
    } */
  },

  _hasCollision : function (x, y) {
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
