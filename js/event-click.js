
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
  console.log((val - characterColorHex) / 2);
  var npc = fullMap.getCharacter((val - characterColorHex) / 2);
  if (!npc)
    return null;
  return npc.getDestinationTriggerInteraction();
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
