function Camera() {



this.moveCameraY = function(val) {
  let top = parseInt($("#canvas").css('top'));
  $("#canvas").css("top", (top + val) + "px");
}

this.moveCameraX = function(val) {
  let left = parseInt($("#canvas").css('left'));
  $("#canvas").css("left", (left + val) + "px");
}

this.center = function() {

  if (!loadManager.isComplete() /*|| !map.drew*/)
    return {x : 0, y : 0}

  let characterEl = $('.player:visible');
  let left = parseInt($("#canvas").css('left'));
  let top = parseInt($("#canvas").css('top'));
  //console.log(left);
  //console.log((parseInt(characterEl.css("left"))),  left, (parseInt(characterEl.css("left") + left)));

  character = {left : (parseInt(characterEl.css("left")) + left),
               top : (parseInt(characterEl.css("top")) + top)};
  let win = { width : $(window).width(), height : $(window).height() };
  let pos = {
    minX : win.width / 2 - characterEl.width() / 2,
    maxX : win.width / 2 + characterEl.width() / 2,
    minY : win.height / 2 - characterEl.height() / 2,
    maxY : win.height / 2 + characterEl.height() / 2
  }


  //console.log(character.left , pos.minX);

  /*let box = $("#box");
  box.css("top", pos.minY + "px");
  box.css("left", pos.minX + "px");
  box.css("width", pos.maxX - pos.minX + "px");
  box.css("height", pos.maxY - pos.minY + "px");*/


  //console.log(pos.maxX , character.left + characterEl.width() / 2);
  //console.log("left : " + left, "pos.minX : " + (pos.minX ), "char : " + character.left,  "res" + (left + (pos.minX - character.left)));

  if (pos.minX > (character.left * 2.5) ||
      pos.maxX < (character.left + characterEl.width()) - (characterEl.width() * 2.5)  ) {
    $("#canvas").css("left", (left + (pos.minX - character.left)) + "px");
  }

    if (pos.minY > (character.top * 2.5) ||
      pos.maxY < (character.top + characterEl.height()) - (characterEl.width() * 2.5)) {
    $("#canvas").css("top", (top + (pos.minY - character.top)) + "px");
  }


  /*if (character.left > pos.maxX + 10)
    $("#canvas").css("left", (left - (character.left - pos.minX)) + "px");/*
  else if (character.left < pos.minX - 10)
    $("#canvas").css("left", (left + (pos.maxX - character.left)) + "px");*/

  //console.log($("#canvas").css("left"));

    //$("#canvas").css("left", (left + (pos.minX - character.left )) + "px");
}


};
var camera = new Camera();
