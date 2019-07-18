
  var fps = 0;
  var tileColorHex = 0x000000;
  var x2d = 0;
  var y2d = 0;
  var speed = 1;

  var draw = function(characters, map, debugOv, timestamp)
  {
     if (fps) {
      speed *= (60 / fps);
      $("#fps").html(fps + " fps");
      //console.log(fps);
    }

    //let pos = camera.center();

    /*ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxOff.clearRect(0, 0, canvas.width, canvas.height);
    ctxDebug.clearRect(0, 0, canvas.width, canvas.height);*/

    var x = this.x2d;
    var y = this.y2d;/*
    x += pos.x;
    y += pos.y;*/

    //x = pos.x;
    //y = pos.y;

  //  this.y2d = y;
  //  this.x2d = x;

    /*var x = 0;
    var y = 0;*/
    //console.log(x, y);
    map.draw(x , y /*- (tiles.size * 3)*/);

    if (DEBUG) {
      debugOv.draw(x, y /*- (tiles.size * 3)*/);
      if (camera.player) {
        this._drawPlayerPos(camera.getPlayerPosition());
        this._drawCanvasCenter(camera.getCanvasCenter());
      }
    }
  }

    this._drawPlayerPos = function(pos) {
      context = ctx;
      ctx.fillStyle = "red";
      context.beginPath();
      context.moveTo(pos.x - pos.width / 2, pos.y + pos.height / 2);
      context.lineTo(pos.x + pos.width,
                 pos.y - pos.height / 2);
      context.lineTo(pos.x + pos.width,
                 pos.y + pos.height);
      context.lineTo(pos.x,
                 pos.y + pos.height);
      context.closePath();
      context.fill();
      context.stroke();
    }
    this._drawCanvasCenter = function(pos) {
      if (!pos)
        return;
    ctx.fillStyle = "blue";
      context = ctx;
      context.beginPath();
      context.moveTo(pos.start.x, pos.start.y);
      context.lineTo(pos.start.x + (pos.end.x - pos.start.x),
                 pos.start.y);
      context.lineTo(pos.start.x + (pos.end.x - pos.start.x),
                 pos.start.y + (pos.end.y - pos.start.y));
      context.lineTo(pos.start.x,
                 pos.start.y + (pos.end.y - pos.start.y));
      context.closePath();
      context.fill();
      context.stroke();
    }

  /*
  var centerCamera = function() {

        var x = x2d;
        var y = y2d;

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
  }
*/
