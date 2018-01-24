
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
       this.elapsed += time;
        if (this.elapsed < 30)
          return;
        this.elapsed = 0;

      this.walking = true;

      if (events.up){
        this.__proto__.setDestination(null, 3);
        diff = this.y - parseInt(this.y);
        if (diff > 0.1 ||
            (diff <= 0.1 &&
            !this.map._hasCollision(this.x, this.y - 0.1)))
                  this.walkUnit.y = this.walkUnitSize * -1;
        events.up = false;
        }

      else if (events.down) {
        this.__proto__.setDestination(null, 2);
        diff = this.y - parseInt(this.y);
        if (diff < 0.8 ||
            (diff >= 0.8  &&
            !this.map._hasCollision(this.x, this.y + 1)))
              this.walkUnit.y = this.walkUnitSize ;
        events.down = false;
      }

      else if (events.left) {
        this.__proto__.setDestination(null, 1);
        diff = this.x - parseInt(this.x);
        if (diff  > 0.1 ||
            (diff  <= 0.1 &&
            !this.map._hasCollision(this.x - 0.1, this.y)))
              this.walkUnit.x = this.walkUnitSize * -1 ;
         events.left = false;
      }

      else if (events.right) {
        this.__proto__.setDestination(null, 0);
        diff = this.x - parseInt(this.x);
        if (diff < 0.8 ||
            (diff >= 0.8 &&
            !this.map._hasCollision(this.x + 1, this.y)))
              this.walkUnit.x = this.walkUnitSize;
        events.right = false;
      }
      else
        this.walking = false;

      this._shiftActions(this.walking);


      if (events.click) {
        this.__proto__.setDestination(events.click, 0);
        events.click = null;
      }
      this.__proto__.update(time, this.walking);
  };


};

Player.prototype = new Character();
