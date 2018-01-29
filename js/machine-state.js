
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

  this.update = function() {

    this._checkForStateChanges();

    if (this.state == ACTION_STATE_IDLE || this.state == ACTION_STATE_WALK) {
      if (this._hasAction(1))
        this.state = ACTION_STATE_WALK;
      else if (this._hasAction(0))
        this.state = ACTION_STATE_IDLE;
    }

    this._tick += 1;
    return this.state;
  };


    this.triggerState = function(trigger, actor2) {
      if (trigger.actor) {
        if (trigger.actor == this._actor) {
          this.state = trigger.state;
          this._trigger = trigger;
          this._actor2 = actor2;
          this._start = {
            x : this._actor2.x,
            y : this._actor2.y
          };
          if (trigger.state ==  ACTION_STATE_CONVERSATION)
            this._actor.addProp(PROP_TYPE_SPEECH);
        }
        else
          trigger.actor._machineState.triggerState(trigger, this._actor);
      }
    }


    this.removeState = function(state) {
      if (state == ACTION_STATE_CONVERSATION)
        this._actor.removeProp(PROP_TYPE_SPEECH);
      this.state = ACTION_STATE_IDLE;
    }


    this._checkForStateChanges = function() {
      if (this.state == ACTION_STATE_CONVERSATION) {
          // change to idle if player is a rude mf and left mid conversation
          if (this._actor2.x == this._start.x &&
              this._actor2.y == this._start.y)
                return;
          var diffX = this._actor2.x - this._actor.x;
          diffX = diffX < 0 ? diffX * -1 : diffX;
          var diffY = this._actor2.y - this._actor.y;
          diffY = diffY < 0 ? diffY * -1 : diffY;
          if (diffX +  diffY > 2) {
            this.removeState(ACTION_STATE_CONVERSATION);
          }
      }
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
