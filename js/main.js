  var DEBUG = 1;
  var ratio = 1;
  var ratioW = 1;
  var ratioH = 1;

window.onload = function() {

var canvas = document.getElementById('canvas');
var offCanvas = document.getElementById('offCanvas');
var canvas_char01 = document.getElementById('canvas_char01');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("click", eventCanvasClicked);
offCanvas.width = window.innerWidth;
offCanvas.height = window.innerHeight;

if (canvas && canvas.getContext)
{
  ctx = canvas.getContext('2d');
  ctxOff = offCanvas.getContext('2d');

  ratio = canvas.width / canvas.height;
   if (canvas.height > 3000 || canvas.width > 3000)
     tiles.size *= 3;
   else if (ratio < 1)
    tiles.size *= 1.7;

  //if (ratio < 1 || (ratio > 1 && canvas.width > 2000))
  //  tiles.size *= 1.7;
  /*
  // apply scale per breakpoint
  for (var i = 0; i < breakpoints.length; i++) {
    var e = breakpoints[i];
    if (e.scale != 1 && ratio >= e.min && ratio < e.max) {
        ctx.scale(e.scale * ratio, e.scale * ratio);
        break;
      }
  };*/

  var player = new Player();
  var map = Map(player);

 var elapsed = 0;
 var frames = 0;
  var loop = function(timestamp)
  {
    var diff = timestamp - last;
    last = timestamp;
    elapsed += diff;
    frames += 1;

    update(player, map, diff);
    draw(player, map);

    if (elapsed >= 1000) {
      fps = frames;
      elapsed = 0; frames = 0;
    }
    window.requestAnimationFrame(loop);
  };

  var last = 0;
  window.requestAnimationFrame(loop);
}
else
  console.log("Error : Failed to get context");


}; // /window onLoad
