
var UI_STATE_LOADING = 0;
var UI_STATE_MAIN = 1;

var UI_TAB_NONE = 0;
var UI_TAB_ABOUT = 1;
var UI_TAB_ROAD = 2;
var UI_TAB_PROJECTS = 3;
var UI_TAB_PROJECT = 4;
var UI_TAB_CONTACT = 5;

function UI() {
  this._state = UI_STATE_LOADING;
  this._last = UI_STATE_LOADING;
  this._tab = UI_TAB_NONE;
  this._morphing = false;
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

    $(".open-tab-btn").click(this._openTab);

    $(window).resize(this.resizeCanvas);
    //window.addEventListener('resize', );
  }

  this._getTabId = function(classes) {
    var id = 0;
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith("tab-")) {
        return classes[i].substring(4);
      }
    }
  }


  this.isMorphing = function() {
    return this._morphing;
  }

  this._openTab = function(event) {
    if (ui._morphing)
      return;

    var id = ui._getTabId(event.currentTarget.classList);
    // Close tab
    if (id == ui._tab) {
      $('.tab-'+ui._tab+' li').removeClass('selected');
      ui._tab = UI_TAB_NONE;
      return ui._closeTabAnimation();
    }
    // Reopen tab
    else if (ui._tab && id != ui._tab) {
      $('.tab-'+ui._tab+' li').removeClass('selected');
      ui._tab = id;
      $('.tab-'+id+' li').addClass('selected');
      ui._closeTabAnimation();
      return ui._openTabAnimation(true);
    }

    // Else, simply open tab
    ui._tab = id;
    $('.tab-'+id+' li').addClass('selected');
    ui._openTabAnimation();
  };


    this._blurCanvas = function(radius, margin) {
      var element = $("#canvas");
      var width = 840;
      if (!margin)
        margin = 10;

      var css = this._getBlurAnimation(radius, margin, true);
      //$('#offCanvas').animate(css, 200);
      $('#canvas').animate(css, {
          duration : 200,
          step : function() {
            element.css({
              'filter' : 'blur('+this.blurRadius+'px)',
              '-webkit-filter': 'blur('+this.blurRadius+'px)',
              '-moz-filter' : 'blur('+this.blurRadius+'px)'
            });
          },
          complete : function() {
            element.css({
              'filter' : 'blur('+radius+'px)',
              '-webkit-filter': 'blur('+radius+'px)',
              '-moz-filter' : 'blur('+radius+'px)'
            });
            if (radius) {
              css = {
                'margin-left' : '0px',
                'margin-top' : '0px'
              };
              element.animate(css, 10);
              //$('#offCanvas').animate(css, 10);
            }
          }
        });
    }

    this._getBlurAnimation = function(radius, margin) {
      css = {};
      css.blurRadius = radius + 'px';

      if (radius && !margin) {
        css.width = (parseInt(element.css('width')) + 200) + 'px';
        css.height =  (parseInt(element.css('height')) + 200) + 'px';
        css['margin-left'] = '-'+margin+'px';
        css['margin-top'] = '-'+margin+'px';
      }
      else if (!radius && !margin) {
        css.width = (window.innerWidth - 840) + 'px';
        css.height = (window.innerHeight) + 'px';
      }
      return css;
    }

  this._closeTabAnimation = function() {
      ui._morphing = true;
      ui._blurCanvas(10, 0);
      $("#tab").animate({'width' :  '0px'}, 1000);
      var width = window.innerWidth;
      $("#canvas").animate({
          'width' : width + 'px',
          'left' : '0px'
        }, {
          'duration': 500,
          'complete' : function() {
            ui._blurCanvas(0, 0);
            ui.resizeCanvas();
            ui._morphing = false;
           }
        });
      $("#header").fadeIn(1000);
    }

    this._openTabAnimation = function(reopen = false) {
      ui._morphing = true;
      ui._blurCanvas(10, 10);
      let width = 840;
      $("#tab").animate({'width' : width + 'px'}, 1000);
      var element = $("#canvas");
      let left = width;
      let baseWidth = window.innerWidth;
      if (!reopen)
        baseWidth = element.width();
      $("#canvas").animate({
          'width' : (baseWidth - width) + 'px',
          'left' : left + 'px'
        }, {
          'duration': 1000,
          'complete' : function() {
            ui._blurCanvas(0, 0);
            ui._morphing = false;
            ui.resizeCanvas();
          }});
      $("#header").fadeOut(1000);
    }


  this.getTabWidth = function() {
    return $("#tab").width();
  }

  this.resizeCanvas = function() {
      var tabWidth = ui.getTabWidth();
      canvas.width = window.innerWidth - tabWidth;
      canvas.height = window.innerHeight
      offCanvas.width = window.innerWidth - tabWidth;
      offCanvas.height = window.innerHeight;
      debugCanvas.width = window.innerWidth - tabWidth;
      debugCanvas.height = window.innerHeight;

      ui.resize(window.innerWidth, window.innerHeight);

     tiles.size = tiles.initSize;
     ratio = canvas.width / canvas.height;
     if (canvas.height > 3000 || canvas.width > 3000)
       tiles.size *= 3;
     else if (ratio < 1)
      tiles.size *= 1.7;
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
