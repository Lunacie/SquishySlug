
  var ctx = null;
  var fps = 0;

  var draw = function(player, map)
  {
    y = 0;
    x = 300;

    ctx.clearRect(0, 0, 1000, 1000);
    map.draw(x, y);
    //player.draw(x, y);
    map.drawOverlay();
  }
