
  var ctx = null;
  var tile = {
    size : 200,

    style : [
      /* 0 */ "blue", // none
      /* 1 */ "yellow",
      /* 2 */ "orange",
      /* 3 */ "pink",
      /* 4 */ "black",
      /* 5 */ "green",
      "white"
    ]
  };


  var draw = function(player, map)
  {
    y = 0;
    x = 300;

    ctx.clearRect(0, 0, 1000, 1000);
    map.draw(x, y);
    player.draw(x, y);
    map.drawOverlay();
  }
