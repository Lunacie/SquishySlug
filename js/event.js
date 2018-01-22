
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
    }
    else {
      canvas.style.display = "none";
      offCanvas.style.display = "inherit";
    }
  }

  if (events.right || events.up || events.down || event.left)
        event.preventDefault();
  //console.log(event);
  //console.log(events);
});


function eventCanvasClicked(event) {
  var eventLocation = getEventLocation(this, event);
  var pixelData = ctxOff.getImageData(eventLocation.x, eventLocation.y,
                                      1, 1).data;
  var val = 000000 + rgbToHex(pixelData[0],
                                pixelData[1],
                                pixelData[2]);
  //var hex = "#" + (val).toString(16).slice(-6);
  if (val == 0xFFFFFF)
    return;
  var row = 0;
  var col = 0;
  for (var rest = val; rest - map.width >= 0; rest -= (map.width))
    row += 1;
  col = val % map.width;

  events.click = {
    x : map._startX + col,
    y : map._startY + row
  };
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
    return undefined;
}

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b);
}
