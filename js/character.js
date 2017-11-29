

function Character ()
{
  this.test  = 42;
}

Character.prototype.getType = function()
{
  return this.test;
}
