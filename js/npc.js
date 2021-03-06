
var SPECIES_BUNNY = 0;
var SPECIES_CAT = 1;
var SPECIES_ELEPHANT = 2;
var SPECIES_INSECT = 3;

var STATIC_MAIL = 4;
var STATIC_SLUG = 5;
var STATIC_LOGO = 6;
var STATIC_TELSTRA = 7;
var STATIC_D3QB = 8;
var STATIC_FIREGEEKS = 9;
var STATIC_OCTOPUSROOM = 10;
var STATIC_OCTOPUS = 11;

function Npc(x, y, species, isStatic = false) // inherits Character
{
  Character.call(this, x, y);
  //this.destination = {x : 7, y : 10};
  this.direction = DIRECTION_DOWN;
  this.state = ACTION_STATE_IDLE;
  this._species = species;
  this._interaction = species;
  this.isNpc = true;
  this._static = isStatic;
  if (!isStatic)
    this._roaming = true;
  else
    this._roaming = false;




  this.update = this.updateCharacter;
};

//Npc.prototype = new Character();
