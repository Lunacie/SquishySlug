
function Character ()
{
  this.x = 5.00;
  this.y = 5.00;

  //this.sprites = "assets/vectors/char01_right.svg";

  this.xBlock = 5;
  this.yBlock = 5;

  this.direction = 0;
  this.walking = false;

  this.images = [];
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


    if (!this.images[this.direction]) {
      this.images[this.direction] = new Image();
      this.images[this.direction].src = this.sprites[this.direction];
      this.images[this.direction].onload = function () {
      }
    }
    else
    {
        var ratioW = window.innerWidth / canvas.width;
        var ratioH = window.innerHeight / canvas.height;
        var element = this.images[this.direction];
        ctx.drawImage(element,
                      x, y, (tiles.size / 3) * -1, tiles.size / 1.6);
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
