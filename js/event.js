
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
      offCanvas.style.visibility = "hidden";
      debugOverlay.toggleDrawMode();
    }
    else {
      canvas.style.display = "none";
      offCanvas.style.display = "inherit";
      offCanvas.style.visibility = "visible";
      debugOverlay.toggleDrawMode();
    }
  }

  if (events.right || events.up || events.down || event.left)
        event.preventDefault();
  //console.log(event);
  //console.log(events);
});
