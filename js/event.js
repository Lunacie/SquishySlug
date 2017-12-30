
var events = {};
var restoreEvents = function()
{
  events = {
    up : false,
    left : false,
    down : false,
    right : false
  };
}
restoreEvents();

window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

 ratio = canvas.width / canvas.height;
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

  if (events.right || events.up || events.down || event.left)
        event.preventDefault();
  //console.log(event);
  //console.log(events);
});
