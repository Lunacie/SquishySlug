
var SPECIES_BUNNY = 0;
var SPECIES_CAT = 1;
var SPECIES_ELEPHANT = 2;
var SPECIES_INSECT = 3;

function Npc(x, y, species) // inherits Character
{
  Character.call(this, x, y);
  //this.destination = {x : 7, y : 10};
  this.direction = DIRECTION_DOWN;
  this.state = ACTION_STATE_IDLE;
  this._species = species;
  this._interaction = species;
  this._roaming = true;
  this.isNpc = true;


  this._roam = function() {

  }

  this.update = this.updateCharacter;
};

//Npc.prototype = new Character();
