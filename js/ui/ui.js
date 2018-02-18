
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
    $("#footer").click(eventCanvasClicked);
    $("#menu-open").click(this._toggleMenu);
  }

  this._toggleMenu = function() {
    var open = true;
      for (var i = 1; i <= 4; i++) {
        var element = $("#menu-open #l" + i);
        var clone = element.clone(true);
        if (clone.hasClass("menu-open")) {
          clone.removeClass("menu-open").addClass("menu-close");
          open = false;
        }
        else if (clone.hasClass("menu-close"))
          clone.removeClass("menu-close").addClass("menu-open");
        else
          clone.addClass("menu-open");
        element.replaceWith(clone);
      }
      if (open) {
        $("#nav").animate({"right" : "50px"}, 1000);
        $("#nav-overlay").animate({"width" : "500px"}, 1000);
      }
      else {
        $("#nav-overlay").animate({"width" : "0px"}, 1000);
        $("#nav").animate({"right" : "-500px"}, 1000);
      }
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
      this.resize(window.innerWidth, window.innerHeight);

      var delay = 0;
      if (this._last == UI_STATE_LOADING) {
        delay = 1000;
        $("#nav").delay(delay).fadeIn(500);
      }
      this._screens[this._state].delay(delay).fadeIn(500);
  }

  this.resize = function(width, height) {
    this._screens[this._state].width(width);
    this._screens[this._state].height(height);
    this._width = width;
    this._height = height;
  }

};
