
var PROP_TYPE_SPEECH = 0;

function Prop(type) {
  this.type = type;

  this.data = [
    { src : "assets/vectors/speech.svg" },
  ]

  this.draw = function(x, y, width, height) {
    this.data[this.type].image = new Image();
    this.data[this.type].image.src = this.data[this.type].src;

    if (this.data[this.type].image)
      ctx.drawImage(this.data[this.type].image,
          x + 50,
          y - 50,
          width,
          height / 2.7);
  };
}
