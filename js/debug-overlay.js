
var DEBUG_MODE_COORDS = 0;
var DEBUG_MODE_INFO = 1;

function DebugOverlay (map, player, npcs)
{
  this._map = map;
  this._player = player;
  this._npcs = npcs;
  this._ctx = null;
  this._mode = DEBUG_MODE_INFO;

  this.update = function() {

  };

  this.draw = function() {
    if (this._mode == DEBUG_MODE_INFO)
      this.drawDebugInfo();
  }

  this.setContext = function(ctx) {
    this._ctx = ctx;
  }

  this.drawCoords = function(x, y, fmX, fmY, offColor) {

    if (this._mode != DEBUG_MODE_COORDS)
      return;

    var text = "["+fmY+"]["+fmX+"]";
    var textSizeY = (tiles.size / 2) + 80;
    var textSizeX = (tiles.size / 2) - 20;

    this._ctx.font = "30px Arial";
    this._ctx.fillStyle = "white";
    this._ctx.strokeStyle = "black";
    this._ctx.strokeText(text, x + textSizeX, y + textSizeY);
    this._ctx.fillText(text, x + textSizeX, y + textSizeY);
    this._ctx.font = "20px Arial";
    this._ctx.strokeText(offColor, x + textSizeX - 10, y + textSizeY + 20);
    this._ctx.fillText(offColor, x + textSizeX - 10, y + textSizeY + 20);
  }


  this.drawDebugInfo = function() {
    ctxDebug.font = "30px Arial";
    ctxDebug.strokeStyle = "white";
    for (y = 0; y < fullMap.height; y++) {
      for (x = 0; x < fullMap.width; x++) {

          var val = fullMap.data[0][y][x];
          ctxDebug.fillStyle = "black";
          if (y >= this._map._startY && y < this._map._startY + this._map.height &&
                   x >= this._map._startX && x < this._map._startX + this._map.width)
              ctxDebug.fillStyle = "red";

          var characters = fullMap.getCharacters(x, y);
          if (characters.length)
              ctxDebug.fillStyle = "green";
          for (var i = 0; i < characters.length; i++) {
            if (characters[i].id == 0) {
              ctxDebug.fillStyle = "cyan";
              break;
            }
          }
          ctxDebug.strokeText(val, x * 30, (y * 30) + 100);
          ctxDebug.fillText(val, x * 30, (y * 30) + 100);
      }
    }

    ctxDebug.fillStyle = "black";
    var text = "fps : " + fps;
    ctxDebug.strokeText(text, 0, 30);
    ctxDebug.fillText(text, 0, 30);

    text = "screen ratio : " + ratio.toFixed(2);
    ctxDebug.strokeText(text, 120, 30);
    ctxDebug.fillText(text, 120, 30);

    ctxDebug.font = "20px Arial";
    text = '(' + canvas.width + 'x' + canvas.height + ')';
    ctxDebug.strokeText(text, 380, 30);
    ctxDebug.fillText(text, 380, 30);

    ctxDebug.fillStyle = "black";
    ctxDebug.strokeStyle = "white";
    ctxDebug.font = "30px Arial";
    text = "x: " + this._player.x.toFixed(1) +
             " y:" + this._player.y.toFixed(1);
    ctxDebug.fillText(text, 350, 470);
    ctxDebug.strokeText(text, 350, 470);
  }

  this.toggleDrawMode = function() {
    if (this._mode == DEBUG_MODE_INFO)
      this._mode = DEBUG_MODE_COORDS;
    else {
      this._mode = DEBUG_MODE_INFO;
    }
  }

}
