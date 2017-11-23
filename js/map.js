

var fullMap = {
  data : [
    [4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5, 3, 4],
    [3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 2],
    [3, 3, 3, 1, 2, 3, 0, 2, 2, 3, 4],
    [1, 1, 1, 4, 5, 6, 1, 2, 3, 4, 5],
    [1, 1, 1, 2, 5, 3, 4, 1, 2, 3, 4],
    [1, 1, 1, 5, 3, 4, 2, 3, 0, 5, 2],
    [2, 2, 2, 1, 2, 3, 0, 2, 2, 3, 4],
    [2, 2, 2, 4, 5, 0, 1, 2, 3, 4, 5],
    [2, 2, 2, 1, 5, 3, 4, 1, 2, 3, 4],
  ],
    height : 10,
    width : 10
};

  var map = {

    data  : [],
    width : 3,
    height : 3,
    xs : 0,
    ys : 0,

    init : function()
    {
      var x = !player.pos.x % 2 ? (this.width - 1) / 2 : this.width / 2;
      this.xs = player.pos.x - x;
      this.ys = player.pos.y - (this.height / 2);
      for (var y = 0; y < this.height; y++)
      {
        this.data[y] = [];
        for (var x = 0; x < this.width ; x++)
          this.data[y][x] = fullMap.data[this.ys + y][this.xs + x];
      }
    },

    loadUp : function()
    {
      var ret = [];

      //DEBUG && console.log("ys : "+this.ys, "height : "+fullMap.height);
      if (this.ys - 1 < 0)
        return this.data;
      this.ys -= 1;
      this.data.length = this.height;
      for (var x = 0; x < this.width; x++)
        ret[x] = fullMap.data[this.ys][this.xs + x];
      return ret;
    },

    loadDown : function()
    {
      var ret = [];

      //DEBUG && console.log("ys : "+this.ys, "height : "+fullMap.height);
      if (this.ys + this.height >= fullMap.height)
        return this.data;
      this.data.shift();
      this.ys += 1;
      for (var x = 0; x < this.width; x++)
        ret[x] = fullMap.data[this.ys + (this.height -1 )][this.xs + x];
      return ret;
    },

    loadRight : function()
    {
      if (this.xs + this.width >= fullMap.width)
        return this.data;
      this.xs += 1;
      for (var y = 0; y < this.height; y++)
        {
          this.data[y].shift();
          this.data[y][this.width - 1] = fullMap.data[this.ys + y][this.xs + (this.width - 1)];
         }
      return this.data;
    },

    loadLeft : function()
    {
      if (this.xs -1 <= 0)
        return this.data;
      this.xs -= 1;
      for (var y = 0; y < this.height; y++)
        {
          this.data[y].unshift(fullMap.data[this.ys + y][this.xs]);
          this.data[y].length = this.width;
         }
      return this.data;
    }
  };
  map.init();