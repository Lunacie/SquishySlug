
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
  offCanvas.height = window.innerHeight;

  ui.resize(window.innerWidth, window.innerHeight);

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
