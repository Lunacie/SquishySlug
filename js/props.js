
var PROP_TYPE_SPEECH = 0;

function Prop(type) {
  this.type = type;

  this.data = [
    { src : "assets/vectors/speech.svg" },
  ]

  this.draw = function(x, y, width, height) {
    var element = this.data[this.type];
    this.data[this.type].image = new Image();
    this.data[this.type].image.onload = function() {
      element.loaded = true;
    }
    this.data[this.type].image.src = this.data[this.type].src;

    if (this.data[this.type].image && this.data[this.type].loaded)
      ctx.drawImage(this.data[this.type].image,
          x + 50,
          y - 50,
          width,
          height / 2.7);
  };
}
