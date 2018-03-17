
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

    var speed = 10;
    if (fps)
      speed *= (60 / fps);

    if (player.y2d > (canvas.height / 2) + 100)
      y -= speed * 2;
    else if (player.y2d < (canvas.height / 2) - 100)
      y += speed * 2;

    if (player.x2d > (canvas.width / 2) + 200)
      x -= speed * 2;
    else if (player.x2d < (canvas.width / 2) - 200)
      x += speed * 2;
    y2d = y;
    x2d = x;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    ctxDebug.clearRect(0, 0, canvas.width, canvas.height);

    map.draw(x, y - (tiles.size * 3));
    if (DEBUG)
      debugOv.draw(x, y - (tiles.size * 3));

  }
