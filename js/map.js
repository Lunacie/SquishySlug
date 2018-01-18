
function Map(player)
{
  map = {
    width : 10,
    height : 10,

    _player : player,
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

      if (updated ||/*
          ((this._player.yBlock - 1 <= this._startY ) ||
          (this._player.xBlock -1 <= this._startX ) ||
          (this._player.yBlock + 1 >= this._startY + this.height ) ||
          (this._player.xBlock + 1 >= this._startX + this.width))) { */
          ((this._player.yBlock - 1 < this.height / 4 ) ||
          (this._player.xBlock - 1 < this.width / 4 ) ||
          (this._player.yBlock + 1 > this.height - (this.height / 4)) ||
          (this._player.xBlock + 1 > this.width - (this.width / 4 )))) {
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

    draw : function(ox, oy) {
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

    /* TODO: Move this to UI obj */
    drawOverlay : function() {
      ctx.strokeStyle = "white";
      for (y = 0; y < fullMap.height; y++) {
        for (x = 0; x < fullMap.width; x++) {

            var val = fullMap.data[0][y][x];
            ctx.fillStyle = "black";
            if (y == this._player.yBlock && x == this._player.xBlock)
                ctx.fillStyle = "cyan";
            else if (y >= this._startY && y < this._startY + this.height &&
                x >= this._startX && x < this._startX + this.width)
                      ctx.fillStyle = "red";

            ctx.strokeText(val, x * 30, (y * 30) + 100);
            ctx.fillText(val, x * 30, (y * 30) + 100);
        }
      }

      ctx.fillStyle = "black";
      var text = "fps : " + fps;
      ctx.strokeText(text, 0, 30);
      ctx.fillText(text, 0, 30);

      text = "screen ratio : " + ratio.toFixed(2);
      ctx.strokeText(text, 120, 30);
      ctx.fillText(text, 120, 30);

      ctx.font = "20px Arial";
      text = '(' + canvas.width + 'x' + canvas.height + ')';
      ctx.strokeText(text, 380, 30);
      ctx.fillText(text, 380, 30);

      ctx.fillStyle = "black";
      ctx.strokeStyle = "white";
      ctx.font = "30px Arial";
      text = "x: " + this._player.x.toFixed(1) +
               " y:" + this._player.y.toFixed(1);
      ctx.fillText(text, 350, 470);
      ctx.strokeText(text, 350, 470);
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
            this._player.draw(xo + x, yo + y);
          x += tiles.size / 2;
          y += tiles.size / 4;
          xr += 1;
        }
    },

    _drawTile : function(x, y, yr, xr, layer) {
      var tile = tiles.data[this._data[layer][yr][xr]];
      if (!tile)
        return;
      if (layer > 0)
        y -= (layer * tiles.size) / 2;

      var offColor = "000000" + tileColorHex.toString(16);
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
        }
      // else draw image
      else if (tile.id) {
        if (!tile.image)
          this._loadImage(tile, offColor);
        else {
          // on screen
          var element = tile.image.on;
          ctx.drawImage(element,
                        x, y, tiles.size, tiles.size);

          // off screen
          if (tile.floor) {
            ctxOff.fillStyle = offColor;
            ctxOff.strokeStyle = ctxOff.fillStyle;
            this._drawTilePoly(x, y, ctxOff);
          }
          else {
          element = tile.image.off;
          ctxOff.drawImage(element,
                        x, y, tiles.size, tiles.size);
          }
        }
      }
      if (layer == 0)
        tileColorHex += 0x000001;
    },

  _loadImage : function(tile, offColor) {
    $.get("/assets/vectors/" + tile.id + ".svg", function(svgXml) {
        tile.image = {};
        // on screen
        tile.image.on = new Image();
        var str = (new XMLSerializer).serializeToString(svgXml);
        tile.image.on.src = "data:image/svg+xml;charset=utf-8," + str;

        // offscreen
        offColor = tile.floor ? offColor : "#FFFFFF";
        tile.image.off = new Image();
        var str = (new XMLSerializer).serializeToString(svgXml);
        var off = str.replace(/fill(.*);/g,'fill:'+offColor+';');
        off = off.replace(/stroke(.*);/g,'stroke:'+offColor+';');
        off = off.replace(/fill-opacity(.*);/g,'fill-opacity:'+offColor+';');
        off = off.replace(/opacity(.*);/g,'opacity:1;');
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
