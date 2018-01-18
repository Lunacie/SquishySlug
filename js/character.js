
function Character ()
{
  this.x = 10.00;
  this.y = 10.00;
  this.xBlock = 10;
  this.yBlock = 10;
  this.direction = 0;
  this.walking = false;
  this.images = [];
  this.elapsed = 0;
  this.state = "idle";
  this.actions = [false, false, false];

  this.update = function(time, walking)
  {
      this.walking = walking;

      if (walking)
        this.state = "walk";
      else if (this._hasAction(0))
        this.state = "idle";
  }

  this.draw = function(ox, oy)
  {
    var y = oy;
    var x = ox + tiles.size / 1.5;
    var disp = this._getDisplacement(x, y);
    x = disp.x;
    y = disp.y;

    this.images[this.state] = this.images[this.state] || [];
    // no image
    if (!this.images[this.state][this.direction]) {
      this._loadImage();
    }
    // image ready to draw
    else {
      var element = this.images[this.state][this.direction].on;
      ctx.drawImage(element,
                    x, y, (tiles.size / 3) * -1, tiles.size / 1.6);

      element = this.images[this.state][this.direction].off;
      ctxOff.drawImage(element,
                    x, y, (tiles.size / 3) * -1, tiles.size / 1.6);
    }
  };

  this._loadImage = function () {
    var char = this;
    $.get(this.sprites[this.state][this.direction], function(svgXml) {
      char.images[char.state][char.direction] = {};

      // on canvas
      char.images[char.state][char.direction].on = new Image();
      var str = (new XMLSerializer).serializeToString(svgXml);
      char.images[char.state][char.direction].on.src =
                             "data:image/svg+xml;charset=utf-8," + str;

      //off canvas
      if (!char.images.offHexColor)
        char.images.offHexColor = currentColorHex++;
      char.images[char.state][char.direction].off = new Image();
      var off = str.replace(/fill(.*);/g,'fill:#'+char.images.offHexColor.toString(16)+';');
      //console.log(off);
      char.images[char.state][char.direction].off.src =
                             "data:image/svg+xml;charset=utf-8," + off;
    });
  }

  this._getDisplacement = function (x, y) {
    y -= tiles.size / 10;
    x -= tiles.size / 10;

    // Player displacement: don't allow if map end
     if (this.x > 0) {
      x += (this.x - this.xBlock) * (tiles.size / 2.14);
      y += (this.x - this.xBlock) * (tiles.size / 4.14);
    }
    if (this.y > 0) {
      x -= (this.y - this.yBlock) * (tiles.size / 2.14);
      y += (this.y - this.yBlock) * (tiles.size / 4.14);
    }
    return {'x': x, 'y':  y};
  }


  this._hasAction = function(nb)
  {
    var ret = 0;
    for (var i = 0; i < 3; i++)
      ret += this.actions[i] ? 1 : 0;
    return ret == nb;
  };

}
