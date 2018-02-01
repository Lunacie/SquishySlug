
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
    this.speciesStr = [ "BUNNY_", "CAT_", "ELEPHANT_", "INSECT_"];
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
      "hair", "hair_x5F_back", "hair_x5F_front",
      "chest", "top"
    ];

     this.load = function (char) {
       var path = this.sprites[char.state];
       if (!path)
         path = this.sprites[ACTION_STATE_IDLE];
       path = path[char.direction];
       var loader = this;
       $.get(path, function(svgXml) {
         loader._svgXml = svgXml;
         char.images[char.state][char.direction] = {};

         loader._loadOnCanvasImage(char);
         loader._loadOffCanvasImage(char);
       });
     }

     this._loadOffCanvasImage = function(char) {

       if (!char.images.offHexColor)
         char.images.offHexColor = char.hexColor;
       char.images[char.state][char.direction].off = new Image();
       var off = this._serialized.replace(/fill(.*);/g,'fill:#'+char.images.offHexColor.toString(16)+';');
       char.images[char.state][char.direction].off.src =
                              "data:image/svg+xml;charset=utf-8," + off;

     }

     this._loadOnCanvasImage = function(char) {

       char.images[char.state][char.direction].on = new Image();

       this._clearDefault();
       this._applySpecies[char._species](this);
       var str = (new XMLSerializer).serializeToString(this._svgXml);
       this._serialized = str;
       char.images[char.state][char.direction].on.src =
                              "data:image/svg+xml;charset=utf-8," + str;
     }

     this._clearDefault = function() {

       for (var i = 0; i < this.elements.length; i++) {
         var element = this._svgXml.getElementById(this.elements[i]);
         if (element)
           element.id = this.speciesStr[0] + this.elements[i];
       }
       for (var i = 0; i < this.addons.length; i++) {
         var element = this._svgXml.getElementById(this.addons[i]);
         if (element)
           element.id = this.speciesStr[0] + this.elements[i];
       }
       console.log(this._svgXml);
     }

     this._applySpecies = [
       // bunny
       function(loader)  {
       },
       // cat
       function(loader)  {
       },
       // elephant
       function(loader)  {
       },
       // insect
       function(loader)  {
       },
     ]


 }
