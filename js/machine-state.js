
var ACTION_STATE_IDLE = 0;
var ACTION_STATE_WALK = 1;
var ACTION_STATE_CONVERSATION = 2;

function MachineState(actor) {

  this.state  = ACTION_STATE_IDLE;
  this.actions = [false, false, false];
  this._actor = actor;
  this._actor2 = null;
  this._trigger = null;
  this._start = {x : 0, y : 0}
  this._elapsed = 0;

  this.update = function(time) {

    this._checkForStateChanges();

    if (this.state == ACTION_STATE_IDLE || this.state == ACTION_STATE_WALK) {
      if (this._hasAction(1))
        this.state = ACTION_STATE_WALK;
      else if (this._hasAction(0))
        this.state = ACTION_STATE_IDLE;


      if (this._actor.id != 0 && this.state == ACTION_STATE_IDLE) {
          this._getNextNpcState();
      }
    }

    this._elapsed += time;
    return this.state;
  };

  this._getNextNpcState = function() {
    if (this._elapsed < 10000)
      return;
    // npc Roam
    if (this._actor._roaming == true) {
      let destination = map.getRandomDestination();
      this._actor.state = ACTION_STATE_WALK;
      this.setState(ACTION_STATE_WALK);
      this._actor.setDestination(destination, 0);
    }
  };


    this.triggerState = function(trigger, actor2) {
      if (trigger.actor) {
          if (trigger.actor2 &&
              this._actorIsTooFar(trigger.actor, trigger.actor2)) {
              player.freeNpc();
            return;
          }
        if (trigger.actor == this._actor) {
          this._actor2 = actor2;
          this.state = trigger.state;
          this._actor._machineState.state = trigger.state;
          //console.log("state : "); console.log(this._actor);
          this._trigger = trigger;
          this._start = {
            x : this._actor2.x,
            y : this._actor2.y
          };
          if (trigger.state ==  ACTION_STATE_CONVERSATION) {
            //this._actor._machineState.state = ACTION_STATE_CONVERSATION;
            this._actor.addProp(PROP_TYPE_SPEECH);
            this._actor.initInteraction(this._actor2);
          }
        }
        else{
          //console.log("pre trigger state");console.log(trigger);
          trigger.actor._machineState.triggerState(trigger, this._actor);
        }
      }
      this._elapsed = 0;
    }

    this.setState = function(state) {
      this.state = state;
      this._elapsed = 0;
    };


    this.removeState = function(state) {
      if (state == ACTION_STATE_CONVERSATION) {
        for (let i = 0; i < characters.length; i++)
          characters[i].removeAllPropsByType(PROP_TYPE_SPEECH);
      }
      this.state = ACTION_STATE_IDLE;
    }


    this._checkForStateChanges = function() {
      if (this.state == ACTION_STATE_CONVERSATION) {
          // change to idle if player is a rude mf and left mid conversation
          if (!(this._actor2.x == this._start.x &&
              this._actor2.y == this._start.y)) {
              if (this._actorIsTooFar(this._actor, this._actor2)) {
                this.removeState(ACTION_STATE_CONVERSATION);
                this._actor._roaming = true;
                for (let i = 0 ; i < characters.length; i++) {
                  if (characters[i]._static)
                    characters[i]._roaming = false;
                }
              }
          }
      }
    }

    this._actorIsTooFar = function(actor, actor2) {
      var diffX = actor2.x - actor.x;
      diffX = diffX < 0 ? diffX * -1 : diffX;
      var diffY = actor2.y - actor.y;
      diffY = diffY < 0 ? diffY * -1 : diffY;
      if (diffX +  diffY > 4)
        return true;
      return false;
    }

    this._hasAction = function(nb)
    {
      var ret = 0;
      for (var i = 0; i < this.actions.length; i++)
        ret += this.actions[i] ? 1 : 0;
      return ret == nb;
    };

    this._shiftActions = function(value) {
      this.actions.shift();
      this.actions[this.actions.length] = value;
    };


  this.getState = function() {
    return this.state;
  }
};
