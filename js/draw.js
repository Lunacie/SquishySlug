
  var ctx = null;
  var fps = 0;
  var currentColorHex = 0xF9C6F2;
  var tileColorHex = 0x000000;
  var x2d = 0;
  var y2d = 0;

  var draw = function(player, map, timestamp)
  {
    //x  += (map.width / 2) * (tiles.size / 4);
    //y  -= (map.height / 2) * (tiles.size / 4);
    var x = x2d;
    var y = y2d;
    x += canvas.width / (2);

    if (ratio >= 1)
      tmp = (map.height * tiles.size) / (3 * ratio);
    else
      tmp = (map.height * tiles.size) / (4 / ratio);
    //console.log("map : ", map.width, map.height);
    //console.log("player : ", player.x2d, player.y2d );
    //console.log("canvas : ", canvas.width, canvas.height, canvas.height / 2 );

    if (player.y2d > (canvas.height / 2) + 100)
      y -= 50;
    else if (player.y2d < (canvas.height / 2) - 100)
      y += 50;

    var offset = 0;
      offset -= tiles.size;
    //console.log("offset : ", offset, (map._startY * -1))

    y2d = y;


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    //ctx_char01.clearRect(0, 0, canvas.width, canvas.height);
    map.draw(x, y - (tiles.size * 2) + offset);
    //player.draw(x, y);
    map.drawOverlay();
  }
