

var update = function(player, map, debugOv, time)
{
  player.update(time);
  map.update();
  debugOv.update();

  //restoreEvents();
};
