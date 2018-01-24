
  var ctx = null;
  var fps = 0;
  var currentColorHex = 0xF9C6F2;
  var tileColorHex = 0x000000;
  var x2d = 0;
  var y2d = 0;

  var draw = function(player, map, timestamp)
  {
    var x = x2d;
    var y = y2d;

    //console.log("map : ", map.width, map.height);
    //console.log("player : ", player.x2d, player.y2d );
    //console.log("canvas : ", canvas.width, canvas.height, canvas.height / 2 );

    if (player.y2d > (canvas.height / 2) + 100)
      y -= 50;
    else if (player.y2d < (canvas.height / 2) - 100)
      y += 50;

    if (player.x2d > (canvas.width / 2) + 200)
      x -= 50;
    else if (player.x2d < (canvas.width / 2) - 200)
      x += 50;

    y2d = y;
    x2d = x;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    map.draw(x, y - (tiles.size * 3));
    map.drawOverlay();
  }
