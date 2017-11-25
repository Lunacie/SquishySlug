
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
          if (diff > 0.1 ||
              (diff <= 0.1 &&
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
          if (diff  > 0.1 ||
              (diff  <= 0.1 &&
              !this.map._hasCollision(this.x - 0.1, this.y)))
        this.x -= 0.1;
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

      var x = ox + tiles.size / 2;
      var y = oy + tiles.size + tiles.size / 20;

      // Player displacement: don't allow if map end
       if (this.x > 0) {
        x += (this.x - parseInt(this.x)) * (tiles.size / 2);
        y += (this.x - parseInt(this.x)) * (tiles.size / 4);
      }
      if (this.y > 0) {
        x -= (this.y - parseInt(this.y)) * (tiles.size / 2);
        y += (this.y - parseInt(this.y)) * (tiles.size / 4);
      }
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
