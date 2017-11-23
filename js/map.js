

var fullMap = {
  data : [
    [1, 1, 4, 4, 4, 4, 5, 5, 5, 4, 5],
    [1, 1, 3, 4, 4, 4, 5, 5, 5, 3, 4],
    [3, 2, 3, 4, 4, 4, 5, 5, 5, 5, 2],
    [3, 3, 3, 1, 2, 3, 0, 2, 2, 3, 4],
    [1, 1, 1, 4, 5, 6, 1, 2, 3, 4, 5],
    [1, 1, 1, 2, 5, 3, 4, 1, 2, 3, 4],
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

      this._startX = this._player.x - left < 0 ? 0: this._player.x.toFixed(0) - left;
      this._startY = this._player.y - top < 0 ? 0 : this._player.y.toFixed(0) - top;
      this._fillMap();
    },

    draw : function(ox, oy) {
      var x = 0;
      var y = 0;
      var yr = 0;
      //ox += tile.size;
      //oy += tile.size;

      for (var i = 0; i < this.height; i++)
      {
        this._drawCol(ox + x, oy + y, yr);
        y += tile.size / 4;
        x -= tile.size / 2;
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
          x += tile.size / 2;
          y += tile.size / 4;
          xr += 1;
        }
    },

    _drawTile : function(x, y, yr, xr) {
        ctx.fillStyle = tile.style[this._data[yr][xr]];
        ctx.strokeStyle = tile.style[this._data[yr][xr]];

        ctx.beginPath();
        ctx.moveTo(x + tile.size / 2,
                   y + tile.size / 2);
        ctx.lineTo(x + tile.size,
                   y + (tile.size / 4) * 3);
        ctx.lineTo(x + tile.size / 2,
                   y + tile.size);
        ctx.lineTo(x,
                   y + (tile.size / 4) * 3);
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
        this._data[y][x] = fullMap.data[y2][x2];
        x2++;
      }
      y2++;
    }
  }

  };

  map._fillMap();
  return map;
};

/*
  var map = {

    data  : [],
    width : 3,
    height : 3,
    xs : 0,
    ys : 0,

    init : function()
    {
      var x = !player.pos.x % 2 ? (this.width - 1) / 2 : this.width / 2;
      this.xs = player.pos.x - x;
      this.ys = player.pos.y - (this.height / 2);
      for (var y = 0; y < this.height; y++)
      {
        this.data[y] = [];
        for (var x = 0; x < this.width ; x++)
          this.data[y][x] = fullMap.data[this.ys + y][this.xs + x];
      }
    },

    loadUp : function()
    {
      var ret = [];

      //DEBUG && console.log("ys : "+this.ys, "height : "+fullMap.height);
      if (this.ys - 1 < 0)
        return this.data;
      this.ys -= 1;
      this.data.length = this.height;
      for (var x = 0; x < this.width; x++)
        ret[x] = fullMap.data[this.ys][this.xs + x];
      return ret;
    },

    loadDown : function()
    {
      var ret = [];

      //DEBUG && console.log("ys : "+this.ys, "height : "+fullMap.height);
      if (this.ys + this.height >= fullMap.height)
        return this.data;
      this.data.shift();
      this.ys += 1;
      for (var x = 0; x < this.width; x++)
        ret[x] = fullMap.data[this.ys + (this.height -1 )][this.xs + x];
      return ret;
    },

    loadRight : function()
    {
      if (this.xs + this.width >= fullMap.width)
        return this.data;
      this.xs += 1;
      for (var y = 0; y < this.height; y++)
        {
          this.data[y].shift();
          this.data[y][this.width - 1] = fullMap.data[this.ys + y][this.xs + (this.width - 1)];
         }
      return this.data;
    },

    loadLeft : function()
    {
      if (this.xs -1 <= 0)
        return this.data;
      this.xs -= 1;
      for (var y = 0; y < this.height; y++)
        {
          this.data[y].unshift(fullMap.data[this.ys + y][this.xs]);
          this.data[y].length = this.width;
         }
      return this.data;
    }
  };
  map.init();
*/
