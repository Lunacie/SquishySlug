
function Character ()
{
  this.x = 5.00;
  this.y = 5.00;

  this.sprites = "assets/vectors/char01.svg";

  this.xBlock = 5;
  this.yBlock = 5;

  this.image = null;
  this.elapsed = 0;
  this.stage = 0;

  this.update = function(time)
  {
    this.elapsed += time;
    if (this.elapsed >= 150) {
      this.elapsed = 0;
      this.stage = this.stage >= 4 ? 0 : this.stage + 1;
      this.stage = 0;
    }
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
      x += (this.x - this.xBlock) * (tiles.size / 2.7);
      y += (this.x - this.xBlock) * (tiles.size / 4.7);
    }
    if (this.y > 0) {
      x -= (this.y - this.yBlock) * (tiles.size / 2.7);
      y += (this.y - this.yBlock) * (tiles.size / 4.7);
    }


    if (!this.image) {
      this.image = new Image();
      this.image.src = this.sprites;
      this.image.onload = function () {
        ctx.drawImage(this, 20, 20, 110 , 250,
                      x, y, tiles.size / 3 , tiles.size / 1.6);
      }
    }
    else
      ctx.drawImage(this.image, 20 + (110 * this.stage), 350, 110 , 250,
                    x, y, tiles.size / 3 , tiles.size / 1.6);


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

}
