

var fullMap = {
  data : [
    [1, 1, 4, 4, 4, 4, 5, 5, 5, 4, 5],
    [1, 1, 3, 4, 4, 4, 5, 5, 5, 3, 4],
    [3, 2, 3, 4, 4, 4, 5, 5, 5, 5, 2],
    [3, 3, 3, 1, 2, 3, 0, 2, 2, 3, 4],
    [1, 1, 1, 4, 5, 2, 1, 2, 3, 4, 5],
    [1, 1, 1, 2, 5, 6, 4, 1, 2, 3, 4],
    [1, 1, 1, 5, 3, 4, 2, 3, 0, 5, 2],
    [2, 2, 2, 1, 2, 3, 0, 2, 2, 3, 4],
    [2, 2, 2, 4, 5, 0, 1, 2, 3, 4, 5],
    [2, 2, 2, 1, 5, 3, 4, 1, 2, 3, 4],
  ],
    height : 10,
    width : 10
};

function Map(player)
{
  map = {
    width : 6,
    height : 6,

    _player : player,
    _data : [],
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
    },

    _drawCol : function(xo, yo, yr) {
        var x = 0;
        var y = 0;
        var xr = 0;

        for (var j = 0; j < this.width; j++)
        {
          this._drawTile(xo + x, yo + y, yr, xr);
          x += tiles.size / 2;
          y += tiles.size / 4;
          xr += 1;
        }
    },

    _drawTile : function(x, y, yr, xr) {
        ctx.fillStyle = tiles.data[this._data[yr][xr]].style;
        ctx.strokeStyle = tiles.data[this._data[yr][xr]].style;

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
    },

  _fillMap : function() {
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
