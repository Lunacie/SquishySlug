
function Player(x, y) // inherits Character
{
    Character.call(this, x, y);
    //this._species = SPECIES_ELEPHANT;

    this.map = {};
    this.elapsed = 0;

    this.update = function(time)
    {
       this.elapsed += time;
        if (this.elapsed < 30)
          return;

       this.elapsed = 0;

      var walking = false;

      if (events.up){
        this.setDestination(null, 3);
        diff = this.y - parseInt(this.y);
        this.walkUnit.y = this.walkUnitSize * -1;
        walking = true;
        }

      else if (events.down) {
        this.setDestination(null, 2);
        diff = this.y - parseInt(this.y);
        this.walkUnit.y = this.walkUnitSize ;
        walking = true;
      }

      else if (events.left) {
        this.setDestination(null, 1);
        diff = this.x - parseInt(this.x);
        this.walkUnit.x = this.walkUnitSize * -1 ;
        walking = true;
      }

      else if (events.right) {
        this.setDestination(null, 0);
        diff = this.x - parseInt(this.x);
        walking = true;
        this.walkUnit.x = this.walkUnitSize;
      }

      events.up = false;
      events.down = false;
      events.right = false;
      events.left = false;
      this._shiftActions(walking);



      if (events.click) {
        this.setDestination(events.click, 0);
        events.click = null;
      }
      this.updateCharacter(time);
  };
};

//Player.prototype = new Character();
