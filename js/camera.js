function Camera() {

  this.center = function() {
    let element = $("#offCanvas");
    let width = element.width();
    let height = element.height();

    let playerPos = this._getPlayerPosition(element, width, height);
    if (!playerPos)
      return {x : 0, y : 0}
    let center = this._getCanvasCenter(width, height);

    let x, y = 0;
    let speed = 10;
    if (playerPos.x < center.start.x)
      x = speed;
    else if (playerPos.x > center.end.x)
      x = -speed;
    if (playerPos.y < center.start.y)
      y = speed;
    else if (playerPos.y > center.end.y)
      y = -speed;
    x = x ? x : 0;
    return {x : x, y : y};
  }

  this._getCanvasCenter = function(width, height) {
    return {
      start : { x : width / 2 - 50,  y : height / 2 - 50 },
      end :   { x : width / 2 + 100, y : height / 2 + 100 }
    };
  }


  this._getPlayerPosition = function(element, width, height) {

    var player = characters[0];
    //let color = player.hexColor.toString(16);
    //console.log(color);
    /*
    hex = hex.replace('#','');
     r = parseInt(hex.substring(0, hex.length/3), 16);
     g = parseInt(hex.substring(hex.length/3, 2*hex.length/3), 16);
     b = parseInt(hex.substring(2*hex.length/3, 3*hex.length/3), 16);
  */
      let rgb = [249,198,242];

      let data = ctxOff.getImageData(0, 0, width, height);
      let rows = [];
      let x, y = 0;
      for (let i = 0; i < data.data.length; i += width * 4) {
          let row = data.data.slice(i, i + width * 4);
          for (let j = 0; j < row.length - 3; j += 4) {
            if (row[j] == 249 &&
                row[j + 1] == 198 &&
                row[j + 2] == 242) {
                y = i / 4 / width;
                x = j / 4;
                return {x : x, y : y};
              }
          }
      }

      /*
      for (let i = 0; i < data.data.length - 3; i+=4) {
        if (data.data[i] == 249 &&
            data.data[i + 1] == 198 &&
            data.data[i + 2] == 242) {
              let y = i / 4 / width;
            console.log((i / 4) % width);
            return;
          }
      }*/
  }

};
var camera = new Camera();
