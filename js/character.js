
var SHOW_DIJKSTRA_DEBUG = false;
var DIRECTION_RIGHT = 0;
var DIRECTION_LEFT = 1;
var DIRECTION_DOWN = 2;
var DIRECTION_UP = 3;


let ORDER_STATUS_NONE = 0;
let ORDER_STATUS_RECEIVED = 1;
let ORDER_STATUS_SUCCESS = 2;

var characterColorHex = 0xF9C6F2;
var characterCount = 0;

function Character (x, y)
{
  this.id = characterCount++;
  this.hexColor = characterColorHex + this.id;
  this.x = x;
  this.y = y;
  this._species = SPECIES_BUNNY;
  this.time = 0;
  this.initBlock = {
    x : x,
    y : y
  };
  this.block = {
    x : x,
    y : y
  };
  this.direction = 0;
  this.images = [];
  this.walkUnitSize = 0.015;
  //this.walkUnitSize = 0.025;
  //this.walkUnitSize = 0.045;
  this._walkPaceScale = 1;
  this.walkUnit = {
    x : 0,
    y : 0
  };
  this.state = ACTION_STATE_IDLE;
  this._machineState = new MachineState(this);
  this.destination = null;
  this.direction = DIRECTION_RIGHT;
  this._path = null;
  this._steps = null;
  this._props = [];
  this._orderStatus = ORDER_STATUS_NONE;
  this.ui = null;
  this._time = 0;
  this._elapsedSinceStep = 0;

  this.updateCharacter = function(time)
  {
      this._time += time;

      //console.log(tiles.data);
      if (!loadManager.isComplete())
        return;

      fullMap.removeCharacter(this.id, this.block.x, this.block.y);

      if (this.destination) {
          if (!this._path) {
            this._path = this._buildPath();
            if (!this._path) {
              this._automate();
            }
          }

          if (this._path && !this._steps) {
            this._steps = this._getAutomation(this._path);
            this._path.shift()
          }

          if (this._path && this._steps)
            this._automate();
      }

      this._updateOrderStatus();
      this._scaleWalkPace();
      this._updatePosition();
      this.state = this._machineState.update(time);


      fullMap.addCharacter(this, this.block.x, this.block.y);
  }

  this.interupt = function() {
    this._roaming = false;
    console.log("interupt");
    console.log(this.state);
    this.state = ACTION_STATE_IDLE;
    this._machineState.setState(ACTION_STATE_IDLE);
  }

  this.initInteraction = function(actor2) {
      ui.sendOrder(this._interaction);
  }

  this._stopWalking = function() {
    this._roaming = false;
    this.destination = null;
    this._path = null;
    this._direction = null;
    this._steps = null;
    this.state = ACTION_STATE_IDLE;
    this._machineState.setState(ACTION_STATE_IDLE);
    //player._machineState.setState(ACTION_STATE_CONVERSATION);
  }

  this.getDestinationTriggerInteraction = function() {
     let npc = this;
     npc._stopWalking();
      var x = npc.block.x;
      var y = npc.block.y;
      var disp = {x : 0, y : 0};
      if (npc.direction == DIRECTION_UP) {
        var face = DIRECTION_DOWN;
        y -= 1;
        if (player.y - npc.y < 0.1)
          disp.y -= 0.01;
      }
      if (npc.direction == DIRECTION_DOWN) {
        var face = DIRECTION_UP;
        y += 1;
        if (npc.y - player.y < 0.1)
          disp.y += 0.01;
      }
      if (npc.direction == DIRECTION_LEFT) {
        var face = DIRECTION_RIGHT;
        x -= 1;
        if (player.y - npc.y < 0.1)
          disp.x -= 0.01;
      }
      if (npc.direction == DIRECTION_RIGHT) {
        var face = DIRECTION_LEFT;
        x += 1
        if (npc.y - player.y < 0.1)
          disp.x += 0.01;
      }
      var destination = {
        x : x,
        y : y,
        direction : face,
        displacement : disp,
        trigger : {
          state : ACTION_STATE_CONVERSATION,
          actor : npc,
          actor2 : player
        }
      };
      return destination;
  };

  this.sendOrder = function(id) {
    this._orderStatus = ORDER_STATUS_RECEIVED;
    let target = fullMap.getCharacter(id);
    //console.log(target);
    //target.interupt();
    this._roaming = false;
    this.setDestination(target.getDestinationTriggerInteraction());
  };

  this.freeNpc = function(id) {
    let target = fullMap.getCharacter(id);
    if (!target)
      return;
    target._machineState.removeState(ACTION_STATE_CONVERSATION);
    target.state = ACTION_STATE_IDLE;
    target._machineState.setState(ACTION_STATE_IDLE);
    target._roaming = true;
  };

  this._updateOrderStatus = function() {
    if (!this.destination &&
        this._orderStatus == ORDER_STATUS_RECEIVED) {
          this._orderStatus = ORDER_STATUS_SUCCESS;
    }
  }

  this.checkOrderStatus = function() {
    if (this._orderStatus == ORDER_STATUS_SUCCESS) {
      this._orderStatus = ORDER_STATUS_NONE;
      return ORDER_STATUS_SUCCESS;
    }
    return this._orderStatus;
  }

  this.setDestination = function(destination, direction = 3) {
    this._path = null;
    this._steps = null;
    this.destination = destination;
    this.direction = direction;
    //this._machineState.setState(ACTION_STATE_IDLE);
  }

  this.removeProp = function(type) {
      for (var i = 0; i < this._props.length; i++) {
        if (this._props[i].type == type) {
          this._props.splice(i, 1);
          break;
        }
      }
  }

  this.removeAllPropsByType = function(type) {
      for (var i = 0; i < this._props.length; i++) {
        if (this._props[i].type == type) {
          this._props.splice(i, 1);
          i -= 1;
        }
      }
  }

  this.addProp = function(type) {
    this._props.push(new Prop(type));
  }

  this._automate = function() {
    if (!this._path || !this._path.length) {
      // if character reached destination and needs to face direction
      if (this.destination && this.destination.trigger) {
        if (this.destination.direction)
          this.direction = this.destination.direction;
        this._machineState.triggerState(this.destination.trigger);
      }
      return this._clearAutomation();
    }

    //console.log("curent : ["+this.block.y+"]["+this.block.x+"]");
    //console.log("target : ["+this._path[0].y+"]["+this._path[0].x+"]");

    if (this.block.x == this._path[0].x &&
        this.block.y == this._path[0].y) {
          this._path.shift();
          this._steps.shift();

          if (!this._path.length) {
            if (this.destination.direction)
              this.direction = this.destination.direction;
            if (this.destination.displacement) {
              this.x += this.destination.displacement.x;
              this.y += this.destination.displacement.y;
            }
            if (this.destination.trigger)
              this._machineState.triggerState(this.destination.trigger);

            return this._clearAutomation();
          }
    }
//TODO : fix stuck npcs bug
/*    else {
        this._elapsedSinceStep = this._time;
        if (this.id == 2)
          console.log(this._elapsedSinceStep);
    }
*/
    this._shiftActions(true);
    this.state = ACTION_STATE_WALK;
    this.direction = this._steps[0];

    if (this._steps[0] == DIRECTION_UP)
      this.walkUnit.y = this.walkUnitSize * -1;
    if (this._steps[0] == DIRECTION_DOWN)
      this.walkUnit.y = this.walkUnitSize;
    if (this._steps[0] == DIRECTION_LEFT)
      this.walkUnit.x = this.walkUnitSize * -1;
    if (this._steps[0] == DIRECTION_RIGHT)
      this.walkUnit.x = this.walkUnitSize;

    if (SHOW_DIJKSTRA_DEBUG) {
      console.log("current : ", this.block.x, this.block.y);
      console.log(this._path[0]);
      console.log(this._steps[0]);
      console.log(this.walkUnit);
      console.log("-------");
    }
  }

  this._clearAutomation = function() {
      this._path = null;
      this._steps = null;
      this.destination = null;
      this.state = ACTION_STATE_IDLE;
      this._shiftActions(false, 3);
      //this._machineState.setState(ACTION_STATE_IDLE);
  }


  this._scaleWalkPace = function() {
    if (fps)
      this._walkPaceScale = 60 / fps;
  };

  this._characterIsBlocked = function(block) {
    let node = fullMap.data[0][block.y][block.x];
    if (!node || tiles.data[node].collision == true) {
      this.block.x = this.initBlock.x;
      this.block.y = this.initBlock.y;
      this.x = this.initBlock.x;
      this.y = this.initBlock.y;
    }
  }


  this._updatePosition = function() {
    if (ret = map.hasCollision(this.x + this.walkUnit.x, this.y + this.walkUnit.y)) {
      this._collisionBump();
      return;
    }
    this.x += (this.walkUnit.x * this._walkPaceScale);
    this.y += (this.walkUnit.y * this._walkPaceScale);
    this.block.x = parseInt(this.x);
    this.block.y = parseInt(this.y);
    this.walkUnit.x = 0;
    this.walkUnit.y = 0;
    this.internalBlock = {
      x : (this.x - this.block.x) * 10,
      y : (this.y - this.block.y) * 10
    };
  }
  this._buildPath = function() {
    var path = [];
    var queue = [];
    var edges = [
      "top", "bot", "left", "right"
    ];

    if (SHOW_DIJKSTRA_DEBUG)
      console.log("DESTINATION:" , this.destination);

    if (this.destination.x == this.block.x &&
      this.destination.y == this.block.y)
      return null;

    fullMap.clear();
    //console.log(fullMap);
    var current = fullMap.getNode(this.block.x, this.block.y);
    // failsafe for when npcs are being idiots
    if (this._characterIsBlocked(current))
      return null;
    if (!current)
      return null;
    current.prev = null;
    current.start = true;
    current.distance = 0;
    queue.push(current);

    while (element = queue[0]) {
      if (SHOW_DIJKSTRA_DEBUG)
        console.log("Current element : [" + element.y + "][" + element.x +
        "], distance is " + element.distance);

      for (var i = 0; i < edges.length; i++) {
        var neighbour = element[edges[i]];
        var path = this._evaluateNeighbour(neighbour, element, queue);
        if (path)
          return path;
      }
      queue.shift();
    }
    return null;
  };

  this._evaluateNeighbour = function(neighbour, element, queue) {
    if (neighbour && !tiles.data[neighbour.value])
      console.log(tiles.data);
    if (neighbour && tiles.data[neighbour.value].collision) { // is obstacle
      if (SHOW_DIJKSTRA_DEBUG) {
      console.log("  Evaluating neighbour [" + neighbour.y + "][" + neighbour.x + "]");
      console.log("     is obstacle. Skipping.");
      }
      return null;
    }
    if (SHOW_DIJKSTRA_DEBUG && !neighbour)
      console.log("  Evaluating neighbour : none");

    if (neighbour) {
      if (SHOW_DIJKSTRA_DEBUG)
        console.log("  Evaluating neighbour [" + neighbour.y + "][" + neighbour.x + "]");

      if (!neighbour.start) {
        if (!neighbour.prev)
          queue.push(neighbour);

        if (neighbour.distance == "infinite" || neighbour.distance > element.distance + 1) {
          neighbour = this._buildNeighbour(neighbour, element);
        }

        if (neighbour.x == this.destination.x &&
            neighbour.y == this.destination.y) {
              return this._backtrackPath(neighbour);
           }
      }
     }
     return null;
  };

  this._backtrackPath = function(neighbour) {
      var path = [];
      var copy = fullMap.getNode(neighbour.x, neighbour.y);
      path.unshift(copy);
      do {
        if (!copy.prev)
          break;
        copy = fullMap.getNode(copy.prev.x, copy.prev.y);
        path.unshift(copy);
      } while (copy);

      if (SHOW_DIJKSTRA_DEBUG) {
        for (var i = 0; path[i]; i++)
          console.log("path["+i+"] : "  , path[i]);
      }
      return path;
  };

  this._buildNeighbour = function(neighbour, element) {
    if (SHOW_DIJKSTRA_DEBUG &&
        neighbour.distance && neighbour.distance > element.distance + 1)
     console.log("    OVERIDING Distance was : " + neighbour.distance +
               " Prev was : [" + neighbour.prev.y + "][" + neighbour.prev.x + "]");

    neighbour.prev = {
      x : element.x,
      y : element.y
    };
    neighbour.distance = element.distance + 1;
    if (SHOW_DIJKSTRA_DEBUG)
      console.log("    Distance is now : " + neighbour.distance +
                " Prev is now : [" + element.y + "][" + element.x + "]");
    return neighbour;
  };

  this._collisionBump = function() {
    if (this.walkUnit.x < 0) {
      this.block.x += 1;
      this.x += 0.5;
    }
    else if (this.walkUnit.x > 0) {
      this.block.x -= 1;
      this.x -= 0.5;
    }
    if (this.walkUnit.y < 0) {
      this.block.y += 1;
      this.y += 0.5;
    }
    else if (this.walkUnit.y > 0) {
      this.block.y -= 1;
      this.y -= 0.5;
    }
    if (this.isNpc)
      this._clearAutomation();
  };

   this._getAutomation = function(path) {
    var steps = [];
    for (var i = 1; i < path.length; i++) {
      steps[i - 1] = path[i].x > path[i - 1].x ? DIRECTION_RIGHT : steps[i - 1];
      steps[i - 1] = path[i].x < path[i - 1].x ? DIRECTION_LEFT : steps[i - 1];
      steps[i - 1] = path[i].y < path[i - 1].y ? DIRECTION_UP : steps[i - 1];
      steps[i - 1] = path[i].y > path[i - 1].y ? DIRECTION_DOWN : steps[i - 1];
    }
    return steps;
  };


    this.draw = function(ox, oy)
    {
      var y = oy;
      var x = ox + tiles.size / 1.5;
      var disp = this._getDisplacement(x, y);
      x = disp.x;
      y = disp.y;

      this.images[this.state] = this.images[this.state] || [];
      // no image
      if (!this.images[this.state][this.direction]) {
        (new ImageLoader).load(this);
      }
      // image ready to draw
      else {
        var element = this.images[this.state][this.direction].on;
        var width = (tiles.size / 3) * -1;
        var height = tiles.size / 1.6;
        this.x2d = x;
        this.y2d = y;
        if (element.loaded)
          ctx.drawImage(element,
                        x, y, width, height);
        this._drawProps(x, y, width, height);

        element = this.images[this.state][this.direction].off;
        if (element.loaded)
          ctxOff.drawImage(element,
                        x, y, width, height);
        }
    };

  this._drawProps = function(x, y, width, height) {
    for (var i = 0; i < this._props.length; i++) {
      this._props[i].draw(x, y, width, height);
    }
  }

  this.loadImage = function(action, direction) {
      (new ImageLoader).load(this, action, direction);
  }

  this._getDisplacement = function (x, y) {
    y -= tiles.size / 10;
    x -= tiles.size / 10;

    // Player displacement: don't allow if map end
     if (this.x > 0) {
      x += (this.x - this.block.x) * (tiles.size / 2.14);
      y += (this.x - this.block.x) * (tiles.size / 4.14);
    }
    if (this.y > 0) {
      x -= (this.y - this.block.y) * (tiles.size / 2.14);
      y += (this.y - this.block.y) * (tiles.size / 4.14);
    }
    return {'x': x, 'y':  y};
  }


  this._shiftActions = function(value, amount) {
    if (!amount)
      amount = 1;
    for (var i = 0; i < amount; i++)
      this._machineState._shiftActions(value);
  }

}
