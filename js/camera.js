function Camera() {

  this.findPosition  = function(center, element, width, height) {
      let max = [249,198,242];
      //console.log(map.lastHex);

      let data = ctxOff.getImageData(0, 0, width, height);
      let rows = [];
      let x, y = 0;
      for (let i = 0; i < data.data.length; i += width * 4) {
          let row = data.data.slice(i, i + width * 4);
          for (let j = 0; j < row.length - 3; j += 4) {
            if (row[j] < 249 &&
                row[j + 1] <= 198 &&
                row[j + 2] <= 242) {
                let hex = this.rgbToHex(row[j]) + this.rgbToHex(row[j + 1]) + this.rgbToHex(row[j + 2]);
                hex = parseInt(hex, 16);
                y = i / 4 / width;
                x = j / 4;
                //console.log("Position : ", getClickEventFloor(hex), "Hex : ", hex);
                return {x : x, y : y};
              }
          }
      }
  }

  this.getRemotePlayerPos = function() {
    return {x : player.x, y : player.y };
  }

  this.rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };



this.center = function() {

  if (!loadManager.isComplete() || !map.drew)
    return {x : 0, y : 0}

  let playerPos = {x : player.block.x, y : player.block.y};
  let element = $("#canvas");
  let center = this._getCanvasCenter(element.width(), element.height());
  let offsetX = map._startX;
  let offsetY = map._startY;
//  console.log(offsetX, offsetY);
  let x = ((playerPos.x - offsetX) / 2) * (tiles.size / 2);
  let y = (((playerPos.y - offsetY) / 2) * (tiles.size / 4)) * -1;

if (x < center.start.x || x > center.end.x)
  x = center.start.x;
if (y < center.start.y || y > center.end.y)
    y = center.start.y * -1;

  return {x : x, y : y};
}

/*
  this.center = function(x2d, y2d) {

    if (!loadManager.isComplete() || !map.drew)
      return {x : 0, y : 0}


    let playerPos = {x : player.x2d, y : player.y2d};
    let center = {x : x2d, y : y2d };
    console.log("player:" , playerPos);
    console.log("camera:" , center);


    let x, y = 0;
    let speed = 10;
    if (playerPos.x < center.x)
      x = -speed;
    else if (playerPos.y > center.y)
      y = speed;
    x = x ? x : 0;
    return {x : x, y : y};
  }
*/

/*
  this.center = function(x2d, y2d) {

    console.log(x2d, y2d);
    if (!loadManager.isComplete() || !map.drew)
      return {x : 0, y : 0}

    let element = $("#offCanvas");
    let width = element.width();
    let height = element.height();

    let playerPos = this._getPlayerPosition(element, width, height);
    let center = this._getCanvasCenter(width, height);
    if (!playerPos) {
      playerPos = this.getRemotePlayerPos();
      //console.log("player postion : ", playerPos);
      centerPos = this.findPosition(center, element, width, height);
      //console.log("ORIGINAL POSITION", player.x, player.y);
      let x, y = 0;
      x = playerPos.x < centerPos.x ? -1 : 1;
      y = playerPos.y < centerPos.y ? -1 : 1;
      let speed = 10;
      x *= speed;
      y *= speed;
      //console.log("NEW POSITION", player.x, player.y);
      //console.log(x, y);
      return {x : x, y : y}
    }

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
*/

  this._getCanvasCenter = function(width, height) {
    return {
      start : { x : width / 2 - 50,  y : height / 2 + 50 },
      end :   { x : width / 2, y : height / 2  }
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
