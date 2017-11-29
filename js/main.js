var DEBUG = 1;

window.onload = function() {


var canvas = document.getElementById('canvas');
if (canvas && canvas.getContext)
{
  ctx = canvas.getContext('2d');

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
