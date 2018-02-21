
 function ImageLoader() {

   this.sprites = [
     [
       "assets/vectors/char01_right.svg",
       "assets/vectors/char01_left.svg",
       "assets/vectors/char01_down.svg",
       "assets/vectors/char01_up.svg"
     ],
     [
       "assets/vectors/char01_right_walk.svg",
       "assets/vectors/char01_left_walk.svg",
       "assets/vectors/char01_down_walk.svg",
       "assets/vectors/char01_up_walk.svg",
     ]
   ];
    this.speciesStr = [
      "BUNNY_x5F_", "CAT_x5F_", "ELEPHANT_x5F_", "INSECT_x5F_"
    ];
    this.elements = [
      "arm_x5F_front_x5F_top",
      "arm_x5F_front_x5F_bot",
      "arm_x5F_back_x5F_top",
      "arm_x5F_back_x5F_bot",
      "leg_x5F_front_x5F_top",
      "leg_x5F_front_x5F_bot",
      "leg_x5F_back_x5F_top",
      "leg_x5F_back_x5F_bot",
      "foot_x5F_front",
      "foot_x5F_back",
      "tail"
    ];
    this.addons = [
      "whisker_x5F_left_x5F_top",
      "whisker_x5F_left_x5F_mid",
      "whisker_x5F_left_x5F_bot",
      "whisker_x5F_right_x5F_top",
      "whisker_x5F_right_x5F_mid",
      "whisker_x5F_right_x5F_bot",
      "head",
      "neck",
      "nose",
      "ear", "ear_x5F_back", "ear_x5F_front",
      "antennas", "wings",
      "hair", "hair_x5F_back", "hair_x5F_front",
      "chest", "top",
      "hip_x5F_front", "hip_x5F_back"
    ];

     this.load = function (char, state, direction) {
      state = state || char.state;
      direction = direction || char.direction;
       var path = this.sprites[state];
       if (!path)
         path = this.sprites[ACTION_STATE_IDLE];
       path = path[direction];
       var loader = this;
       $.get(path, function(svgXml) {
         loader._svgXml = svgXml;
         char.images[state][direction] = {};
         loader._loadOnCanvasImage(char, state, direction);
         loader._loadOffCanvasImage(char, state, direction);
       });
     }



     this._loadOnCanvasImage = function(char, state, direction) {

       char.images[state][direction].on = new Image();

       this._clearDefault();
       this._normalizeSpecies(char._species);
       this._applySpecies[char._species](this);
       this._removeOthers(char._species);

       //if (char.state == ACTION_STATE_WALK)
         //this._appendWalkAnimations(char.direction);

       //console.log(this._svgXml);
       var str = (new XMLSerializer).serializeToString(this._svgXml);
       str = str.replace(/#/g, "%23");
       this._serialized = str;
       char.images[state][direction].on.onload = function() {
        char.images[state][direction].on.loaded = true;
       }
       char.images[state][direction].on.src =
                              "data:image/svg+xml;charset=utf-8," + str;
     }

     this._appendWalkAnimations = function(direction) {
       var strings = ["right", "left", "down", "up"];
       var path = "assets/animation/animation-";
       path += strings[direction] + ".css";
       var loader = this;
        $.get(path, function(data) {
          var element = loader._svgXml.getElementsByTagName("style")[0];
          element.innerHTML += data;
          //console.log(element.innerHTML);
        });
      }

     this._clearDefault = function() {
       for (var i = 0; i < this.elements.length; i++) {
         var element = this._svgXml.getElementById(this.elements[i]);
         if (element)
           element.id = this.speciesStr[0] + this.elements[i];
       }
       for (var i = 0; i < this.addons.length; i++) {
         var element = this._svgXml.getElementById(this.addons[i]);
         if (element) {
           element.id = this.speciesStr[0] + this.addons[i];
           }
       }
     }

     this._normalizeSpecies = function(species) {
       for (var i = 0; i < this.elements.length; i++) {
         var id = this.speciesStr[species] + this.elements[i];
         var element = this._svgXml.getElementById(id);
         if (element)
           element.id = this.elements[i];
       }
       for (var i = 0; i < this.addons.length; i++) {
         var id = this.speciesStr[species] + this.addons[i];
         var element = this._svgXml.getElementById(id);
         if (element)
           element.id = this.addons[i];
       }
     }


      this._removeOthers = function(current) {
        for (var i = 0; i < this.elements.length; i++) {
          for (var j = 0; j < this.speciesStr.length; j++) {
            var id = this.speciesStr[j] + this.elements[i];
            var element = this._svgXml.getElementById(id);
            if (element)
              element.remove();
          }
        }
        for (var i = 0; i < this.addons.length; i++) {
          for (var j = 0; j < this.speciesStr.length; j++) {
            var id = this.speciesStr[j] + this.addons[i];
            var element = this._svgXml.getElementById(id);
            if (element)
              element.remove();
          }
        }
      }

     this._applySpecies = [
       // bunny
       function(loader)  {
       },
       // cat
       function(loader)  {
         var shared = [
           // from bunny
           [ "head", "neck", "chest", "nose",
            "whisker_x5F_left_x5F_top",
            "whisker_x5F_left_x5F_mid",
            "whisker_x5F_left_x5F_bot",
            "whisker_x5F_right_x5F_top",
            "whisker_x5F_right_x5F_mid",
            "whisker_x5F_right_x5F_bot",
            "arm_x5F_front_x5F_top",
            "arm_x5F_front_x5F_bot",
            "arm_x5F_back_x5F_top",
            "arm_x5F_back_x5F_bot",
            "ear", "ear_x5F_back", "ear_x5F_front",
            "foot_x5F_front",
            "foot_x5F_back",
          ]
         ]
         for (var i = 0; i < shared.length; i++) {
           for (var j = 0; j < shared[i].length; j++) {
              var id = loader.speciesStr[i] + shared[i][j];
              var element = loader._svgXml.getElementById(id);
              if (element)
                element.id = shared[i][j];
              //console.log(element);
           }
         }

       },
       // elephant
       function(loader)  {
       },
       // insect
       function(loader)  {
       },
     ]

     this._loadOffCanvasImage = function(char, state, direction) {

       if (!char.images.offHexColor)
         char.images.offHexColor = char.hexColor;
       char.images[state][direction].off = new Image();
       var off = this._serialized.replace(/fill(.*);/g,'fill:#' +
                 char.images.offHexColor.toString(16) + ';');
       char.images[state][direction].off.onload = function() {
        char.images[state][direction].off.loaded = true;
       }
       char.images[state][direction].off.src =
                              "data:image/svg+xml;charset=utf-8," + off;

     }

 }
