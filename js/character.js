
function Character ()
{
  this.x = 5.00;
  this.y = 5.00;

  this.xBlock = 5;
  this.yBlock = 5;

  this.draw = function(ox, oy)
  {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";

    var x = ox + tiles.size / 2;
    var y = oy + tiles.size + tiles.size / 20;

    // Player displacement: don't allow if map end
     if (this.x > 0) {
      x += (this.x - this.xBlock) * (tiles.size / 2.7);
      y += (this.x - this.xBlock) * (tiles.size / 4.7);
    }
    if (this.y > 0) {
      x -= (this.y - this.yBlock) * (tiles.size / 2.7);
      y += (this.y - this.yBlock) * (tiles.size / 4.7);
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + 200);
    ctx.lineTo(x + 20, y + 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };
}
