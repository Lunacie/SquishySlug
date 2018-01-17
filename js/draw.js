
  var ctx = null;
  var fps = 0;

  var draw = function(player, map, timestamp)
  {
    var x = 400 * ratio;
    y -= 50;
    // apply offset per breakpoint
    for(var i = 0; i < breakpoints.length; i++) {
      e = breakpoints[i];
      if (ratio >= e.min && ratio < e.max) {
        y += e.y;
        x += e.x;
        break;
      }
    };
    x = 0; y = 0;

    //x  += (map.width / 2) * (tiles.size / 4);
    //y  -= (map.height / 2) * (tiles.size / 4);
    x += canvas.width / (2);
    y -= canvas.height / (2 / ratio);
    console.log("width : ", x);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx_char01.clearRect(0, 0, canvas.width, canvas.height);
    map.draw(x, y);
    //player.draw(x, y);
    map.drawOverlay();
  }
