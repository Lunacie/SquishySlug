
var UI_STATE_LOADING = 0;

function UI() {
  this._state = UI_STATE_LOADING;
  this._screens = [];
  this._width = "100%";
  this._height = "100vh";

  this.init = function() {
    this._screens = [
      $("#loading.screen")
    ];
  }

  this.update = function(loadManager) {

    if (this._state == UI_STATE_LOADING &&
        loadManager.isComplete()) {
          this._removeScreen();
          this._state = 1;
        }

  }

  this._removeScreen = function() {
    if (this._state == UI_STATE_LOADING) {
      $("#loading").fadeOut(700);
    }
  }

  this.resize = function(width, height) {
    this._screens[this._state].width(width);
    this._screens[this._state].height(height);
    this._width = width;
    this._height = height;
  }

};
