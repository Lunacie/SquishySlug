
  var ctx = null;
  var fps = 0;
  var tileColorHex = 0x000000;
  var x2d = 0;
  var y2d = 0;

  var draw = function(characters, map, debugOv, timestamp)
  {
    var x = x2d;
    var y = y2d;
    var player = characters[0];

    //console.log("map : ", map.width, map.height);
    //console.log("player : ", player.x2d, player.y2d );
    //console.log("canvas : ", canvas.width, canvas.height, canvas.height / 2 );

    if (player.y2d > (canvas.height / 2) + 100)
      y -= 10;
    else if (player.y2d < (canvas.height / 2) - 100)
      y += 10;

    if (player.x2d > (canvas.width / 2) + 200)
      x -= 10;
    else if (player.x2d < (canvas.width / 2) - 200)
      x += 10;

    y2d = y;
    x2d = x;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    ctxDebug.clearRect(0, 0, canvas.width, canvas.height);

    map.draw(x, y - (tiles.size * 3));
    debugOv.draw(x, y - (tiles.size * 3));
  }
