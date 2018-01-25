

function Npc(x, y) // inherits Character
{
  Character.call(this, x, y);

  this.update = this.updateCharacter;
};

//Npc.prototype = new Character();
