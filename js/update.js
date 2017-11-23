

var update = function()
{
  updateMap();
};

var drawPos = {
    xr : 0,
    yr : 0,
    reset : function()
    {
      this.xr = 0;
      this.yr = 0;
    },

    updateUp : function()
    {
      if (drawPos.yr > 50)
        loadNewRow("up");
      else
        {
            this.yr += tile.size / 100;
            this.xr -= tile.size / 50;
        }
    },
    updateDown : function()
    {
      if (drawPos.yr < -50)
        loadNewRow("down");
      else
        {
          this.yr -= tile.size / 100;
          this.xr += tile.size / 50;
        }
    },
    updateLeft : function()
    {
      if (drawPos.yr >= 50)
        loadNewRow("left");
      else
        {
          this.yr += tile.size / 100;
          this.xr += tile.size / 50;
        }
    },
    updateRight : function()
    {
      if (drawPos.yr < -50)
        loadNewRow("right");
      else
        {
          this.yr -= tile.size / 100;
          this.xr -= tile.size / 50;
        }
    },

};

var loadNewRow = function(direction)
{
  drawPos.reset();
  player.move(direction);

  if (direction == "up")
    map.data.unshift(map.loadUp());
  else if (direction == "down")
      map.data.push(map.loadDown());
  else if (direction == "right")
      map.data = map.loadRight();
  else if (direction == "left")
      map.data = map.loadLeft();
}

var updateMap = function()
{
  if (events.up)
    drawPos.updateUp();
  if (events.down)
    drawPos.updateDown();
  if (events.right)
    drawPos.updateRight();
  if (events.left)
    drawPos.updateLeft();
}
