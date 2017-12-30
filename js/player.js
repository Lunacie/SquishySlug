
function Player()
{
    this.map = {};
    this.sprites = "assets/vectors/char01.svg";

    this.update = function(time)
    {
       this.elapsed += time;
        if (this.elapsed < 25)
          return;

      if (events.up){
        this.direction = 3;
        this.walking = true;
        diff = this.y - parseInt(this.y);
          if (diff > 0.1 ||
              (diff <= 0.1 &&
              !this.map._hasCollision(this.x, this.y - 0.1)))
                  this.y -= 0.05;
        }

      else if (events.down) {
        this.direction = 2;
        this.walking = true;
        diff = this.y - parseInt(this.y);
          if (diff < 0.8 ||
              (diff >= 0.8  &&
              !this.map._hasCollision(this.x, this.y + 1)))
        this.y += 0.05;
      }

      else if (events.left) {
        this.direction = 1;
        this.walking = true;
        diff = this.x - parseInt(this.x);
          if (diff  > 0.1 ||
              (diff  <= 0.1 &&
              !this.map._hasCollision(this.x - 0.1, this.y)))
        this.x -= 0.05;
      }

      else if (events.right) {
        this.direction = 0;
        this.walking = true;
        diff = this.x - parseInt(this.x);
          if (diff < 0.8 ||
              (diff >= 0.8 &&
              !this.map._hasCollision(this.x + 1, this.y)))
        this.x += 0.05;
      }
      else
        this.walking = false;

      this.actions.shift(1);
      this.actions[2] = this.walking;

      this.xBlock = parseInt(this.x);
      this.yBlock = parseInt(this.y);

     if (this.elapsed >= 90) {
         this.__proto__.update(time, this.walking);
         this.elapsed = 0;
       }

  };


};

Player.prototype = new Character();
