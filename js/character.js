
function Character ()
{
  this.x = 10.00;
  this.y = 10.00;

  //this.sprites = "assets/vectors/char01_right.svg";

  this.xBlock = 5;
  this.yBlock = 5;

  this.direction = 0;
  this.walking = false;

  this.images = [];
  this.elapsed = 0;
  this.stage = 14;
  this.state = "idle";

  this.actions = [false, false, false];

  this.update = function(time, walking)
  {
      this.walking = walking;

      if (walking)
        this.state = "walk";
      else if (this._hasAction(0))
        this.state = "idle";

      /*
      if (this.stage == 14 && this._hasAction(3))
        this.stage = 0;
      else if ((this.stage >= 13 || this.stage == 6) && this._hasAction(0))
        this.stage = 14;
      else if (this.stage >= 13)
        this.stage = 0;
      else
        this.stage += 1;*/

    //console.log(time);
  }

  this.draw = function(ox, oy)
  {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";

    //var x = oy - tiles.size / 2 ;
    var y = oy;
    var x = ox + tiles.size / 1.5;
    y -= tiles.size / 10;
    x -= tiles.size / 10;
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


    this.images[this.state] = this.images[this.state] || [];
    if (!this.images[this.state][this.direction]) {

      var char = this;
      $.get(this.sprites[this.state][this.direction], function(svgXml) {
        char.images[char.state][char.direction] = new Image();
        coloredSvgXml = svgXml;
        var str = (new XMLSerializer).serializeToString(svgXml);
        //var coloredSvgXml = svgXml.replace(/#3080d0/g,'#e05030');
        char.images[char.state][char.direction].src =
                               "data:image/svg+xml;charset=utf-8," + str;//"data:image/svg+xml;charset=utf-8,"+coloredSvgXml;
        char.images[char.state][char.direction].onload = function () {
        }
      });
    }
    else
    {
        var ratioW = window.innerWidth / canvas.width;
        var ratioH = window.innerHeight / canvas.height;
        var element = this.images[this.state][this.direction];
        //console.log(this.images[this.state][this.direction]);

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
