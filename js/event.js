
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
  events.up = (event.keyCode == 87 || event.keyCode == 38 ||
               event.keyCode == 90) ?
              true : false;
  events.down = (event.keyCode == 83 || event.keyCode == 40) ?
                true : false;
  events.left = (event.keyCode == 65 || event.keyCode == 37 ||
                 event.keyCode == 81) ?
                true : false;
  events.right = (event.keyCode == 68 || event.keyCode == 39) ?
                 true : false;




  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);


  if (event.keyCode == 79 /* o */ && DEBUG) {
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

  //console.log(event);
  //console.log(events);
});
