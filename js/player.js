
var player = {
  pos : {
    x : 5,
    y : 5
  },

  move : function(direction)
  {
    if (direction == "up")
      this.pos.y -= 1;
    else if (direction == "down")
      this.pos.y += 1;
    else if (direction == "left")
      this.pos.x -= 1;
    else
      this.pos.x += 1;
  },

  // drawing a red triangle
  draw : function(x, y)
  {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";

    x = x + tile.size / 2;
    y = y + tile.size / 4;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + 200);
    ctx.lineTo(x + 20, y + 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    ctx.font = "30px Arial";
    var pos = "x: " + this.pos.x + " y:" + this.pos.y;
    ctx.fillText(pos, x - 50, y + 250);
    ctx.strokeText(pos, x - 50, y + 250);
  }
};
