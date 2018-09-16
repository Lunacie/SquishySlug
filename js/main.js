const DEBUG = 0;
var ratio = 1;
var ratioW = 1;
var ratioH = 1;

var ui = new UI();

var player = new Player(10, 10);
var characters = [];
characters.push(player);
characters.push(new Npc(12, 12, SPECIES_CAT));
characters.push(new Npc(13, 10, SPECIES_ELEPHANT));
characters.push(new Npc(10, 10, SPECIES_INSECT));

var map = Map(player, characters);
var debugOverlay = new DebugOverlay(map, player, characters);


window.onload = function() {

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("click", eventCanvasClicked);

var offCanvas = document.getElementById('offCanvas');
offCanvas.width = window.innerWidth;
offCanvas.height = window.innerHeight;

var debugCanvas = document.getElementById('debugCanvas');
debugCanvas.width = window.innerWidth;
debugCanvas.height = window.innerHeight;
debugCanvas.addEventListener("click", eventCanvasClicked);

ui.init(player, canvas);
ui.resize(window.innerWidth, window.innerHeight);


if (canvas && canvas.getContext)
{
  ctx = canvas.getContext('2d');
  ctxOff = offCanvas.getContext('2d');
  ctxDebug = debugCanvas.getContext('2d');
  debugOverlay.setContext(ctxDebug);

  ratio = canvas.width / canvas.height;
   if (canvas.height > 3000 || canvas.width > 3000)
     tiles.size *= 3;
   else if (ratio < 1)
    tiles.size *= 1.7;


 var loadManager = new LoadManager(characters, tiles);
 loadManager.load();

 var elapsed = 0;
 var frames = 0;
  var loop = function(timestamp)
  {
    var diff = timestamp - last;
    last = timestamp;
    elapsed += diff;
    frames += 1;


    update(characters, map, ui, loadManager, debugOverlay, diff);
    draw(characters, map, debugOverlay);

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
