


var update = function(characters, map, ui, loadManager, debugOv, time)
{
  for (var i = 0; i < characters.length; i++) {
    characters[i].update(time);
  }

  map.update();
  debugOv.update();
  ui.update(loadManager, time);

  ////loadManager.isComplete()
  ////restoreEvents();
};


var update_staticMode = function(ui, time)
{
  ui.update(null, time);
};
