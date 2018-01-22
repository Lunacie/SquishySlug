
var SHOW_DIJKSTRA_DEBUG = false;

function Character ()
{
  this.x = 10.00;
  this.y = 10.00;
  this.xBlock = 10;
  this.yBlock = 10;
  this.direction = 0;
  this.walking = false;
  this.images = [];
  this.elapsed = 0;
  this.state = "idle";
  this.destination = null;
  this.path = null;
  this.actions = [false, false, false];

  this.update = function(time, walking)
  {
      if (this.destination) {
          walking = true;
          if (!this.path) {
            var path = this._buildPath();
            var steps = this._getAutomation(path);
            this.path = steps;
            console.log(steps);
          }
      }

      this.walking = walking;

      if (walking)
        this.state = "walk";
      else if (this._hasAction(0))
        this.state = "idle";
  }

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
      this._loadImage();
    }
    // image ready to draw
    else {
      var element = this.images[this.state][this.direction].on;
      ctx.drawImage(element,
                    x, y, (tiles.size / 3) * -1, tiles.size / 1.6);

      element = this.images[this.state][this.direction].off;
      ctxOff.drawImage(element,
                    x, y, (tiles.size / 3) * -1, tiles.size / 1.6);
    }
  };

  this._buildPath = function() {
    var path = [];
    var queue = [];
    var edges = [
      "top", "bot", "left", "right"
    ];

    if (SHOW_DIJKSTRA_DEBUG)
      console.log("DESTINATION:" , this.destination);

    var current = fullMap.getNode(this.xBlock, this.yBlock);
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
    if (neighbour && neighbour.value == 3) { // is tree
      if (SHOW_DIJKSTRA_DEBUG) {
      console.log("  Evaluating neighbour [" + neighbour.y + "][" + neighbour.x + "]");
      console.log("     is obstacle. Skipping.");
      }
      neighbour = null;
    }
    if (SHOW_DIJKSTRA_DEBUG && !neighbour)
      console.log("  Evaluating neighbour : none");
    if (neighbour) {
      if (SHOW_DIJKSTRA_DEBUG)
        console.log("  Evaluating neighbour [" + neighbour.y + "][" + neighbour.x + "]");
      if (neighbour && !neighbour.start) {
        if (!neighbour.prev)
          queue.push(neighbour);
        if (!neighbour.distance || neighbour.distance > element.distance + 1) {
          this._buildNeighbour(neighbour, element);
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
      var copy = Object.assign({}, fullMap.getNode(neighbour.x, neighbour.y));
      do {
        if (!copy.prev)
          break;
        copy = Object.assign({}, fullMap.getNode(copy.prev.x, copy.prev.y));
        path.unshift(copy);
      } while (copy);
      if (SHOW_DIJKSTRA_DEBUG)
        console.log(path);
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
  };

  this._getAutomation = function(path) {
    var steps = [];
    for (var i = 1; i < path.length; i++) {
      steps[i - 1] = path[i].x > path[i - 1].x ? "right" : steps[i - 1];
      steps[i - 1] = path[i].x < path[i - 1].x ? "left" : steps[i - 1];
      steps[i - 1] = path[i].y < path[i - 1].y ? "up" : steps[i - 1];
      steps[i - 1] = path[i].y > path[i - 1].y ? "down" : steps[i - 1];
    }
    return steps;
  };

  this._loadImage = function () {
    var char = this;
    $.get(this.sprites[this.state][this.direction], function(svgXml) {
      char.images[char.state][char.direction] = {};

      // on canvas
      char.images[char.state][char.direction].on = new Image();
      var str = (new XMLSerializer).serializeToString(svgXml);
      char.images[char.state][char.direction].on.src =
                             "data:image/svg+xml;charset=utf-8," + str;

      //off canvas
      if (!char.images.offHexColor)
        char.images.offHexColor = currentColorHex++;
      char.images[char.state][char.direction].off = new Image();
      var off = str.replace(/fill(.*);/g,'fill:#'+char.images.offHexColor.toString(16)+';');
      //console.log(off);
      char.images[char.state][char.direction].off.src =
                             "data:image/svg+xml;charset=utf-8," + off;
    });
  }

  this._getDisplacement = function (x, y) {
    y -= tiles.size / 10;
    x -= tiles.size / 10;

    // Player displacement: don't allow if map end
     if (this.x > 0) {
      x += (this.x - this.xBlock) * (tiles.size / 2.14);
      y += (this.x - this.xBlock) * (tiles.size / 4.14);
    }
    if (this.y > 0) {
      x -= (this.y - this.yBlock) * (tiles.size / 2.14);
      y += (this.y - this.yBlock) * (tiles.size / 4.14);
    }
    return {'x': x, 'y':  y};
  }


  this._hasAction = function(nb)
  {
    var ret = 0;
    for (var i = 0; i < 3; i++)
      ret += this.actions[i] ? 1 : 0;
    return ret == nb;
  };

}
