
var CLICK_EVENT_DEBUG = false;

function eventCanvasClicked(event, element) {

  var eventLocation = getEventLocation(this, event);
  var pixelData = ctxOff.getImageData(eventLocation.x, eventLocation.y,
                                      1, 1).data;
  var val = 000000 + rgbToHex(pixelData[0],
                                pixelData[1],
                                pixelData[2]);

 // clicked a static object
 if (val == 0xFFFFFF)
    return;
 // clicked a npc
 else if (val > characterColorHex) {
   events.click = getClickEventNpc(val);
 }
 // clicked the floor
 else {
   events.click = getClickEventFloor(val);
 }
};

function getClickEventNpc(val) {
  var npc = fullMap.getCharacter(val - characterColorHex);
  if (!npc)
    return null;
  var x = npc.block.x;
  var y = npc.block.y;
  var disp = {x : 0, y : 0};
  if (npc.direction == DIRECTION_UP) {
    var face = DIRECTION_DOWN;
    y -= 1;
    if (player.y - npc.y < 0.1)
      disp.y -= 0.01;
  }
  if (npc.direction == DIRECTION_DOWN) {
    var face = DIRECTION_UP;
    y += 1;
    if (npc.y - player.y < 0.1)
      disp.y += 0.01;
  }
  if (npc.direction == DIRECTION_LEFT) {
    var face = DIRECTION_RIGHT;
    x -= 1;
    if (player.y - npc.y < 0.1)
      disp.x -= 0.01;
  }
  if (npc.direction == DIRECTION_RIGHT) {
    var face = DIRECTION_LEFT;
    x += 1
    if (npc.y - player.y < 0.1)
      disp.x += 0.01;
  }
  var destination = {
    x : x,
    y : y,
    direction : face,
    displacement : disp,
    trigger : {
      state : ACTION_STATE_CONVERSATION,
      actor : npc,
      actor2 : player
    }
  };
  return destination;
}

function getClickEventFloor(val) {

  if (CLICK_EVENT_DEBUG)
    console.log("EVENT val", val);
  var row = 0;
  var col = 0;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT map width",  map.width);
  var width = map.width;
  if (map._startX <= 0)
    width = map.width + map._startX;
  width = fullMap.width;
  //else if (map._startX > 0)
  //  var width = map.width - map._startX;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT revised map width",  width);
  for (var rest = val; rest - width  >= 0; rest -= (width))
    row += 1;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT rest",  rest);
  col = val % width;


  events.click = {
    x : col,
    y : row,
  };

  if (CLICK_EVENT_DEBUG) {
    console.log("EVENT offset",  map._startX,  map._startY);
    console.log("EVENT col/row", col, row);
    console.log("EVENT", events.click);
    console.log("EVENT ------------");
  }
  return events.click;
}

function getEventLocation(element, event) {
  return {
    x : event.pageX -  ui.getTabWidth(), y : event.pageY
  }
}

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b);
}
