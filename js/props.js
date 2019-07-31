
var PROP_TYPE_SPEECH = 0;

function Prop(type) {
  this.type = type;

  this.data = [
    { src : "assets/vectors/speech.svg" },
  ]

  this.draw = function(x, y, width, height) {
    //var element = this.data[this.type];
    /*this.data[this.type].image = new Image();
    this.data[this.type].image.onload = function() {
      element.loaded = true;
    }
    */
    if (!this.data[this.type].image) {
    this.data[this.type].image.src = this.data[this.type].src;
    $.get(this.data[this.type].src, function(svgXml) {
        this.data[this.type].image = { on : { loaded : true }};
        this.data[this.type].svgXml = svgXml;
    });
  }


    let element = null;

    if (this.data[this.type].image && this.data[this.type].loaded)
      element = this.data[this.type].svgXml.documentElement;
      element = element.cloneNode(true);
      console.log(element);
      element.style.left = (x + 50) + "px";
      element.style.top = (y - 50) +"px";
      element.style["z-index"] = 9999;

      document.getElementById("canvas").append(element);
      /*ctx.drawImage(this.data[this.type].image,
          x + 50,
          y - 50,
          width,
          height / 2.7);*/
  };
}
