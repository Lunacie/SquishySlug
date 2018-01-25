

var update = function(characters, map, debugOv, time)
{
  for (var i = 0; i < characters.length; i++) {
    characters[i].update(time);
  }
  map.update();
  debugOv.update();

  //restoreEvents();
};
