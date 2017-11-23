
  var ctx = null;
  var tile = {
    size : 200,

    style : [
      /* 0 */ "blue",
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
    y = 100;
    x = 300;

    ctx.clearRect(0, 0, 1000, 1000);
    map.draw(x, y);
    //drawMap(300 + drawPos.xr,
    //        100 + drawPos.yr);
    player.draw(x, y);
  }


  /*
  var drawTile = function(x, y, yr, xr)
  {
    ctx.fillStyle = tile.style[map.data[yr][xr]];
    ctx.strokeStyle = tile.style[map.data[yr][xr]];

    ctx.beginPath();
    ctx.moveTo(x + tile.size / 2,
               y + tile.size / 2);
    ctx.lineTo(x + tile.size,
               y + (tile.size / 4) * 3);
    ctx.lineTo(x + tile.size / 2,
               y + tile.size);
    ctx.lineTo(x,
               y + (tile.size / 4) * 3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  var drawCols = function(xo, yo, yr)
  {
    var x = 0;
    var y = 0;
    var xr = 0;

    for (var j = 0; j < map.width; j++)
    {
      drawTile(xo + x, yo + y, yr, xr);
      x += tile.size / 2;
      y += tile.size / 4;
      xr += 1;
    }
  };

  var drawMap = function(xo, yo)
  {
    var x = 0;
    var y = 0;
    var yr = 0;

    for (var i = 0; i < map.height; i++)
    {
      drawCols(xo + x, yo + y, yr);
      y += tile.size / 4;
      x -= tile.size / 2;
      yr++;
    }
  };

*/
