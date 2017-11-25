
function Player()
{
  var player = {
    x : 5.00,
    y : 5.00,
    map : {},

    update : function()
    {
      var diff;
      if (events.up){
        diff = this.y - parseInt(this.y);
          if (diff > 0.09 ||
              (diff <= 0.09 &&
              !this.map._hasCollision(this.x, this.y - 0.1)))
                  this.y -= 0.1;
        }

      if (events.down) {
        diff = this.y - parseInt(this.y);
          if (diff < 0.8 ||
              (diff >= 0.8 &&
              !this.map._hasCollision(this.x, this.y + 1)))
        this.y += 0.1;
      }

      if (events.left) {
        diff = this.x - parseInt(this.x);
        console.log("Diff : " + diff);
          if (diff  > 0.1 ||
              (diff  <= 0.1 &&
              !this.map._hasCollision(this.x - 0.1, this.y)))
        this.x -= 0.1;
        console.log(this.x, this.y);
      }

      if (events.right) {
        diff = this.x - parseInt(this.x);
          if (diff < 0.8 ||
              (diff >= 0.8 &&
              !this.map._hasCollision(this.x + 1, this.y)))
        this.x += 0.1;
      }
    },

    draw : function(ox, oy)
    {
      ctx.fillStyle = "red";
      ctx.strokeStyle = "black";

      var x = ox + tile.size / 2;
      var y = oy + tile.size + tile.size / 20;

      // Player displacement
      x += (this.x - parseInt(this.x)) * (tile.size / 2);
      y += (this.x - parseInt(this.x)) * (tile.size / 4);
      x -= (this.y - parseInt(this.y)) * (tile.size / 2);
      y += (this.y - parseInt(this.y)) * (tile.size / 4);

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
      var pos = "x: " + this.x.toFixed(1) +
               " y:" + this.y.toFixed(1);
      ctx.fillText(pos, x - 50, y + 250);
      ctx.strokeText(pos, x - 50, y + 250);
    },


  };
  return player;
};

/*
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
*/
