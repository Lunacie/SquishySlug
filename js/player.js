
function Player()
{
    this.map = {};
    this.sprites = {
      "idle" : [
        "assets/vectors/char01_right.svg",
        "assets/vectors/char01_left.svg",
        "assets/vectors/char01_down.svg",
        "assets/vectors/char01_up.svg"
      ],
      "walk" : [
        "assets/vectors/char01_right_walk.svg",
        "assets/vectors/char01_left_walk.svg",
        "assets/vectors/char01_down_walk.svg",
        "assets/vectors/char01_up_walk.svg",
      ]
    };

    this.update = function(time)
    {
      if (events.click)
        this.__proto__.destination = events.click;
      
       this.elapsed += time;
        if (this.elapsed < 30)
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
