var DEBUG = 1;

window.onload = function() {


var canvas = document.getElementById('canvas');
if (canvas && canvas.getContext)
{
  ctx = canvas.getContext('2d');

  var loop = function(timestamp)
  {
    var diff = timestamp - last;

    update();
    draw();
    restoreEvents();

    last = timestamp;
    window.requestAnimationFrame(loop);
  };

  update();
  var last = 0;
  window.requestAnimationFrame(loop);
}
else
  console.log("Error : Failed to get context");


}; // /window onLoad
