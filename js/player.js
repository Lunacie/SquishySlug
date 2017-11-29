
function Player()
{
    this.map = {};

    this.update = function()
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

      this.xBlock = parseInt(this.x);
      this.yBlock = parseInt(this.y);
    };


};

Player.prototype = new Character();
