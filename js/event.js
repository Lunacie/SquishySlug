
var CLICK_EVENT_DEBUG = false;

var events = {};
var restoreEvents = function()
{
  events = {
    up : false,
    left : false,
    down : false,
    right : false,
    click : null
  };
}
restoreEvents();

window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight
  offCanvas.width = window.innerWidth;
  offCanvas.height = window.innerHeight

 tiles.size = tiles.initSize;
 ratio = canvas.width / canvas.height;
 if (canvas.height > 3000 || canvas.width > 3000)
   tiles.size *= 3;
 else if (ratio < 1)
  tiles.size *= 1.7;
 /*
 // apply scale per breakpoint
 for (var i = 0; i < breakpoints.length; i++) {
   var e = breakpoints[i];
   if (e.scale != 1 && ratio >= e.min && ratio < e.max) {
       ctx.scale(e.scale * ratio, e.scale * ratio);
       break;
     }
 };
 */
});

document.addEventListener("keydown", function(event)
{
  events.up = (event.keyCode == 87 || event.keyCode == 38) ?
              true : false;
  events.down = (event.keyCode == 83 || event.keyCode == 40) ?
                true : false;
  events.left = (event.keyCode == 65 || event.keyCode == 37) ?
                true : false;
  events.right = (event.keyCode == 68 || event.keyCode == 39) ?
                 true : false;

  if (event.keyCode == 79 /* o */) {
    if (canvas.style.display == "none") {
      canvas.style.display = "inherit";
      offCanvas.style.display = "none";
      debugOverlay.toggleDrawMode();
    }
    else {
      canvas.style.display = "none";
      offCanvas.style.display = "inherit";
      debugOverlay.toggleDrawMode();
    }
  }

  if (events.right || events.up || events.down || event.left)
        event.preventDefault();
  //console.log(event);
  //console.log(events);
});

function eventCanvasClicked(event, element) {

  var eventLocation = getEventLocation(this, event);
  var pixelData = ctxOff.getImageData(eventLocation.x, eventLocation.y,
                                      1, 1).data;
  var val = 000000 + rgbToHex(pixelData[0],
                                pixelData[1],
                                pixelData[2]);
  //var hex = "#" + (val).toString(16).slice(-6);
  if (val == 0xFFFFFF)
    return;
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
};

function getEventLocation(element, event) {
    var pos = getElementPosition(element);
    return {
    	x: (event.pageX - pos.x),
      y: (event.pageY - pos.y)
    };
}

function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return null;
}

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b);
}
