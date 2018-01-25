
function Player(x, y) // inherits Character
{
    Character.call(this, x, y);

    this.map = {};

    this.update = function(time)
    {
       this.elapsed += time;
        if (this.elapsed < 30)
          return;
        this.elapsed = 0;

      if (events.up){
        this.setDestination(null, 3);
        diff = this.y - parseInt(this.y);
        /*if (diff > 0.1 ||
            (diff <= 0.1 &&
            !this.map._hasCollision(this.x, this.y - 0.1)))*/
                  this.walkUnit.y = this.walkUnitSize * -1;
        events.up = false;
        }

      else if (events.down) {
        this.setDestination(null, 2);
        diff = this.y - parseInt(this.y);
        /*if (diff < 0.8 ||
            (diff >= 0.8  &&
            !this.map._hasCollision(this.x, this.y + 1)))*/
              this.walkUnit.y = this.walkUnitSize ;
        events.down = false;
      }

      else if (events.left) {
        this.setDestination(null, 1);
        diff = this.x - parseInt(this.x);
        /*if (diff  > 0.1 ||
            (diff  <= 0.1 &&
            !this.map._hasCollision(this.x - 0.1, this.y)))*/
              this.walkUnit.x = this.walkUnitSize * -1 ;
         events.left = false;
      }

      else if (events.right) {
        this.setDestination(null, 0);
        diff = this.x - parseInt(this.x);
        /*if (diff < 0.8 ||
            (diff >= 0.8 &&
            !this.map._hasCollision(this.x + 1, this.y)))*/
              this.walkUnit.x = this.walkUnitSize;
        events.right = false;
      }

      this._shiftActions(this.walking);


      if (events.click) {
        this.setDestination(events.click, 0);
        events.click = null;
      }
      this.updateCharacter(time);
  };
};

//Player.prototype = new Character();
