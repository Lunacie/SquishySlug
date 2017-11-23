var DEBUG = 1;

window.onload = function() {


var canvas = document.getElementById('canvas');
if (canvas && canvas.getContext)
{
  ctx = canvas.getContext('2d');

  var player = Player();
  var map = Map(player);

  var loop = function(timestamp)
  {
    var diff = timestamp - last;

    update(player);
    draw(player, map);

    last = timestamp;
    window.requestAnimationFrame(loop);
  };

  var last = 0;
  window.requestAnimationFrame(loop);
}
else
  console.log("Error : Failed to get context");


}; // /window onLoad
