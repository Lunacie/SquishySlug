
  var ctx = null;
  var fps = 0;
  var currentColorHex = 0xF9C6F2;
  var tileColorHex = 0x000000;

  var draw = function(player, map, timestamp)
  {
    var x = 0;
    var y = 0;
    //x  += (map.width / 2) * (tiles.size / 4);
    //y  -= (map.height / 2) * (tiles.size / 4);
    x += canvas.width / (2);
    //y -= canvas.height / (2 / ratio);
    if (ratio >= 1)
      tmp = (map.height * tiles.size) / (3 * ratio);
    else
      tmp = (map.height * tiles.size) / (4 / ratio);
    y -= tmp;
    y+= 500;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    //ctx_char01.clearRect(0, 0, canvas.width, canvas.height);
    map.draw(x, y);
    //player.draw(x, y);
    map.drawOverlay();
  }
