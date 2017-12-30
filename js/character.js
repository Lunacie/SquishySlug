
function Character ()
{
  this.x = 5.00;
  this.y = 5.00;

  this.sprites = "assets/vectors/char01.svg";

  this.xBlock = 5;
  this.yBlock = 5;

  this.direction = 0;
  this.walking = false;

  this.image = null;
  this.elapsed = 0;
  this.stage = 14;

  this.actions = [false, false, false];

  this.update = function(time, walking)
  {
    this.walking = walking;

      if (this.stage == 14 && this._hasAction(3))
        this.stage = 0;
      else if ((this.stage >= 13 || this.stage == 6) && this._hasAction(0))
        this.stage = 14;
      else if (this.stage >= 13)
        this.stage = 0;
      else
        this.stage += 1;

    //console.log(time);
  }

  this.draw = function(ox, oy)
  {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";

    var x = oy; var y = oy;
    var x = ox + tiles.size / 3;
    //var y = oy + tiles.size + tiles.size / 2;

    // Player displacement: don't allow if map end
     if (this.x > 0) {
      x += (this.x - this.xBlock) * (tiles.size / 2.14);
      y += (this.x - this.xBlock) * (tiles.size / 4.14);
    }
    if (this.y > 0) {
      x -= (this.y - this.yBlock) * (tiles.size / 2.14);
      y += (this.y - this.yBlock) * (tiles.size / 4.14);
    }


    if (!this.image) {
      this.image = new Image();
      this.image.src = "assets/vectors/char02.svg";
      this.image.onload = function () {
      this.oWidth = this.width;
      this.oHeight = this.height;
      //ctx.drawImage(this, (width * this.stage), height * this.direction, width , height,
      //              x, y, tiles.size / 3 , tiles.size / 1.6);
    }
    }
    else
    {
    //ctx_char01.drawImage(this.image, 0, 0, 1000, 600);
    /*ctx.drawImage(canvas_char01,             // source image
                    (1000 / 15) * this.stage,     // source offset x
                    (600 / 4) * this.direction,
                    1000 / 15,
                    600 / 4,
                    x, y,
                    tiles.size / 3 ,       // dest width
                    tiles.size / 1.6     //dest height
                  );*/

        var ratioW = window.innerWidth / canvas.width;
        var ratioH = window.innerHeight / canvas.height;
        //var element = document.getElementById('char02');
        var element = this.image;

        //console.log(element.width, element.height);
        ctx.drawImage(element,             // source image
                        0,//(element.width / 15) * this.stage,     // source offset x
                        0,//(element.height / 4) * this.direction,
                        element.width * 10,
                        element.height * 10,
                        x, y,
                        (tiles.size / 3) * ratioH,       // dest width
                        (tiles.size / 1.6) * ratioH     //dest height
                        );

}

    /*
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + 200);
    ctx.lineTo(x + 20, y + 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    */
  };


  this._hasAction = function(nb)
  {
    var ret = 0;
    for (var i = 0; i < 3; i++)
      ret += this.actions[i] ? 1 : 0;
    return ret == nb;
  };

}
