
 function ImageLoader() {

   this.sprites = [
     [
       {path : "assets/vectors/char01_right.svg",
        loading : false},
       {path : "assets/vectors/char01_left.svg",
        loading : false},
       {path : "assets/vectors/char01_down.svg",
        loading : false},
       {path : "assets/vectors/char01_up.svg",
        loading : false}
     ],
     [
       {path : "assets/vectors/char01_right_walk.svg",
        loading : false},
       {path : "assets/vectors/char01_left_walk.svg",
        loading : false},
       {path : "assets/vectors/char01_down_walk.svg",
        loading : false},
       {path : "assets/vectors/char01_up_walk.svg",
        loading : false}
     ]
   ];
   this.spritesXml = [ [], [] ];
   this.staticsXml = [];
   this.statics = [
     {path : "assets/vectors/mail.svg",
      loading : false},
     {path : "assets/vectors/slug.svg",
      loading : false},
     {path : "assets/vectors/logo.svg",
      loading : false},
     {path : "assets/vectors/telstra.svg",
      loading : false},
     {path : "assets/vectors/d3qb.svg",
      loading : false},
     {path : "assets/vectors/firegeeks.svg",
      loading : false},
     {path : "assets/vectors/octopusroom.svg",
      loading : false},
     {path : "assets/vectors/octopus.svg",
      loading : false},
   ]
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


     this._loadCanvasImages = function(char, state, direction) {
       if (char._static) {
         this._svgXml = this.statics[char._species - 4].svgXml;
       if (!char.images)
         char.images = {};
       if (!char.images.on)
         this._loadOnCanvasImage(char, state, direction);
       //if (!char.images.off)
        // this._loadOffCanvasImage(char, state, direction);
       }

       else {
        this._svgXml = this.sprites[state][direction].svgXml;
        if (!char.images)
          char.images = [];
          if (!char.images[state])
            char.images[state] = [];
        if (!char.images[state][direction])
          char.images[state][direction] = {}
        if (!char.images[state][direction].on)
          this._loadOnCanvasImage(char, state, direction);
        if (!char.images[state][direction].off)
          this._loadOffCanvasImage(char, state, direction);
      }
     }

     this._removeAnimation = function(xml) {
       //console.log(xml);
       var indexStart = xml.indexOf("@-webkit-keyframes");
       if (indexStart == -1)
        return xml;
       var start = xml.substring(0, indexStart);
       var indexEnd = xml.indexOf("</style>");
       var end = xml.substring(indexEnd, xml.length);
       return start + end;
     };

     this._loadXmlSvg = function() {
       var loader = this;
       for (let i = 0; i < this.sprites.length; i++) {
         for (let j = 0; j < this.sprites[i].length; j++) {
            $.get("/" + loader.sprites[i][j].path, function(svgXml) {
              loader.sprites[i][j].svgXml = svgXml;
            });
         }
       }
      for (let i = 0; i < this.statics.length; i++) {
         $.get("/" + loader.statics[i].path, function(svgXml) {
           loader.statics[i].svgXml = svgXml;
         });
      }
     }

     this._clone = function(xmlSvg) {
       var newDocument = xmlSvg.implementation.createDocument(
         xmlSvg.namespaceURI, null, null);
       var newNode = newDocument.importNode(
         xmlSvg.documentElement, true);
       newDocument.appendChild(newNode);
       return newDocument;
     }


     this._loadOnCanvasImage = function(char, state, direction) {

       this._svgXml = this._clone(this._svgXml);
       // Character or NPC
       if (!char._static) {
       //char.images[state][direction].on = new Image();

       this._clearDefault();
       this._normalizeSpecies(char._species);
       this._applySpecies[char._species](this);
       this._removeOthers(char._species);

       //if (char.state == ACTION_STATE_WALK)
         //this._appendWalkAnimations(char.direction);

       //console.log(this._svgXml);
       var str = (new XMLSerializer).serializeToString(this._svgXml);
       str = str.replace(/#/g, "%23");
       if (browser.browser == BROWSER_EDGE)
         str = this._removeAnimation(str);

       this._serialized = str;
       /*char.images[state][direction].on.onload = function() {
        char.images[state][direction].on.loaded = true;
       }
       char.images[state][direction].on.src =
                              "data:image/svg+xml;charset=utf-8," + str;
        }*/

      char.images[state][direction] = { on : { loaded : true }};
      char.images[state][direction].svgXml = this._svgXml;
      }
        // Static object
        else {
           /*char.images.on = new Image();
           var str = (new XMLSerializer).serializeToString(this._svgXml);
           str = str.replace(/#/g, "%23");
           this._serialized = str;
           char.images.on.onload = function() {
            char.images.on.loaded = true;
           }
           char.images.on.src = "data:image/svg+xml;charset=utf-8," + str;*/


            //char.images.on = new Image();
            var str = (new XMLSerializer).serializeToString(this._svgXml);
            //str = str.replace(/#/g, "%23");
            this._serialized = str;
            char.images = { on : { loaded : true }};
            char.images.svgXml = this._svgXml;
            //var oParser = new DOMParser();
            //var oDOM = oParser.parseFromString(str, "application/xml");

            //char.images.on = oDOM.documentElement;

            /*
            char.images.on.onload = function() {
             char.images.on.loaded = true;
            }
            char.images.on.src = "data:image/svg+xml;charset=utf-8," + str;
            */
        }
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

       // Character or NPC
       if (!char._static) {
         if (!char.images.offHexColor)
           char.images.offHexColor = char.hexColor;
         char.images[state][direction].off = new Image();
         var off = this._serialized.replace(/fill(.*);/g,'fill:#' +
                   char.images.offHexColor.toString(16) + ';');
          if (browser.browser == BROWSER_EDGE)
            off = this._removeAnimation(off);
          //off = off.replace(/opacity(.*);/g,'opacity:1;');

         char.images[state][direction].off.onload = function() {
          char.images[state][direction].off.loaded = true;
         }
         char.images[state][direction].off.src =
                                "data:image/svg+xml;charset=utf-8," + off;
      }
       // Static Object
       else {
         if (!char.images.offHexColor)
           char.images.offHexColor = char.hexColor;
         char.images.off = new Image();
         var off = this._serialized.replace(/fill(.*);/g,'fill:#' +
                   char.images.offHexColor.toString(16) + ';');
          off = off.replace(/opacity(.*);/g,'opacity:1;');

         char.images.off.onload = function() {
          char.images.off.loaded = true;
         }
         char.images.off.src = "data:image/svg+xml;charset=utf-8," + off;
      }
     }

 }

let imageLoader = new ImageLoader();
