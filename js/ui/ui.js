
var UI_STATE_LOADING = 0;
var UI_STATE_MAIN = 1;

function UI() {
  this._state = UI_STATE_LOADING;
  this._last = UI_STATE_LOADING;
  this._screens = [];
  this._width = "100%";
  this._height = "100vh";

  this.init = function() {
    this._screens = [
      $("#loading.screen"),
      $("#main.screen").click(eventCanvasClicked)
    ];
    console.log($("#footer").children());
    $("#footer").click(eventCanvasClicked);
    $("#header").click(eventCanvasClicked);
  }

  this.update = function(loadManager) {
    if (this._state == UI_STATE_LOADING &&
        loadManager.isComplete()) {
          this._removeScreen();
          this._state = UI_STATE_MAIN;
          this._displayScreen();
        }
  }

  this._removeScreen = function() {
    var delay = 1000;
    if (this._state == UI_STATE_LOADING)
      delay = 1000;
    this._screens[this._state].delay(delay).fadeOut(500);
  }

  this._displayScreen = function() {
      var delay = 0;
      if (this._last == UI_STATE_LOADING)
        delay = 1000;

      this.resize(window.innerWidth, window.innerHeight);
      this._screens[this._state].delay(delay).fadeIn(500);
  }

  this.resize = function(width, height) {
    this._screens[this._state].width(width);
    this._screens[this._state].height(height);
    this._width = width;
    this._height = height;
  }

};
