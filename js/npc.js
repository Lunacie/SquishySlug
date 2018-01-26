

function Npc(x, y) // inherits Character
{
  Character.call(this, x, y);
  //this.destination = {x : 0, y : 0};
  this.direction = DIRECTION_DOWN;

  this.update = this.updateCharacter;
};

//Npc.prototype = new Character();
