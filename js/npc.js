
var SPECIES_BUNNY = 0;
var SPECIES_CAT = 1;
var SPECIES_ELEPHANT = 2;
var SPECIES_INSECT = 3;

function Npc(x, y, species) // inherits Character
{
  Character.call(this, x, y);
  //this.destination = {x : 0, y : 0};
  this.direction = DIRECTION_DOWN;
  this.state = ACTION_STATE_IDLE;
  this._species = species;


  this.update = this.updateCharacter;
};

//Npc.prototype = new Character();
