
var ratio = 1;
var ratioW = 1;
var ratioH = 1;

var ui = new UI();
//staticMode = true;

if (!staticMode) {
  var player = new Player(10, 10);
  var characters = [];
  characters.push(player);
  characters.push(new Npc(10, 11, SPECIES_CAT));
  characters.push(new Npc(12, 10, SPECIES_ELEPHANT));
  characters.push(new Npc(10, 7, SPECIES_INSECT));
  characters.push(new Npc(8, 10, STATIC_MAIL, true));
  characters.push(new Npc(5, 4, STATIC_SLUG, true));
  characters.push(new Npc(11, 4, STATIC_LOGO, true));
//  characters.push(new Npc(6, 11, STATIC_TELSTRA, true));
//  characters.push(new Npc(6, 3, STATIC_D3QB, true));
//  characters.push(new Npc(4, 12, STATIC_FIREGEEKS, true));
  characters.push(new Npc(13, 13, STATIC_OCTOPUSROOM, true));
  //characters.push(new Npc(13, 13, STATIC_OCTOPUS, true));

  var loadManager = new LoadManager(characters, tiles);
  loadManager.load();

  var map = new Map(player, characters);
  var debugOverlay = new DebugOverlay(map, player, characters);
}


window.onload = function() {

if (!staticMode) {
  let canvas = document.getElementById('canvas');
  setClickListeners(canvas);

  ui.init(player, canvas);
  //ui.resize(window.screen.width, window.screen.height);
}
else if (staticMode) {
    ui.init();
  //  $(window).resize(ui.update);
}


if (staticMode || canvas)
{
  if (!staticMode) {
    ratio = canvas.width / canvas.height;
 }


  var elapsed = 0;
  var frames = 0;
  var diff = 0;
  // === MAIN LOOP ===
  var loop = function(timestamp)
  {
    var diff = timestamp - last;
    last = timestamp;
    elapsed += diff;
    frames += 1;
    if (!staticMode) {
    update(characters, map, ui, loadManager, debugOverlay, diff);
    draw(characters, map, debugOverlay);
   }
   else if (staticMode) {
     update_staticMode(ui, diff);
   }


    if (elapsed >= 1000) {
      fps = frames;
      elapsed = 0; frames = 0;
    }
   if (!staticMode)
    window.requestAnimationFrame(loop);

 }; // end of main loop

  var last = 0;
  window.requestAnimationFrame(loop);

}


}; // /window onLoad
