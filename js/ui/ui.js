

var UI_STATE_LOADING = 0;
var UI_STATE_MAIN = 1;

var UI_TAB_NONE = 0;
var UI_TAB_ABOUT = 1;
var UI_TAB_ROAD = 2;
var UI_TAB_PROJECTS = 3;
var UI_TAB_PROJECT = 4;
var UI_TAB_CONTACT = 5;

function UI(player) {
  this.tabs = new Tab();
  this._state = UI_STATE_LOADING;
  this._last = UI_STATE_LOADING;
  this._tab = UI_TAB_NONE;
  this._morphing = false;
  this._loading = false;
  this._screens = [];
  this._width = "100%";
  this._height = "100vh";
  this._sentOrder = false;
  this._initDimensions = {
    width : 0, height : 0
  }
  this._elapsed = 0;
  this._lastTime = 0;

  this.init = function(player, canvas) {

    //$("#device").html(navigator.userAgent);
    if (!staticMode) {
      this._player = player;
      this._player.ui = this;
      this._initDimensions.width = $(canvas).width();
      this._initDimensions.height = $(canvas).height();
      $(window).resize(this.resizeCanvas);
      $("#background").hide();
      $("video").hide();
    }
    this.tabs.init();

    this._orderId = 0;
    this._screens = [
      $("#loading.screen"),
      $("#main.screen").click(eventCanvasClicked)
    ];
    $("#footer").click(eventCanvasClicked);
    $("#menu-open").click(this._toggleMenu);


    /*$(".fr").hide();
    $(".flag-fr").click(function() {
      $(".fr").show();
      $(".en").hide();
    });
    $(".flag-en").click(function() {
      $(".en").show();
      $(".fr").hide();
    });*/

    $(".open-tab-btn").click(this._openTab);
    $("#tab-close").click(this._closeTab);

    $(".tab-content").hide();

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

  this.sendOrder = function(id) {
    this._orderId = id;
    this._openTab(null);
  };

  this._openTab = function(event) {
    if (!staticMode &&
        ui._elapsed - ui._lastTime < 2500 && ui._lastTime != 0) {
      return ;
    }
    ui._lastTime = ui._elapsed
    if (ui._morphing)
      return;

    if ($("#nav-overlay").width())
      ui._toggleMenu();
    if (event)
      var id = ui._getTabId(event.currentTarget.classList);
    else
      var id = ui._orderId;
    var npc = id;
    if (id > 5) {
      id = 5;
    }
    // Close tab
    if (ui._tabIsClosed() &&  id == ui._tab) {
      $('.tab-'+ui._tab+' li').removeClass('selected');
      if (!staticMode)
        ui._player.freeNpc(ui._tab);
      ui._tab = UI_TAB_NONE;
      ui._reopen = false;
      ui._morphing = true;
      //$("#loading").stop();
      //$("#loading").fadeIn(200);
      ui._loading = true;
      return ui._closeTabAnimation();
    }
    // Reopen tab
    else if ((ui._tab || ui._tabIsClosed()) &&
              id != ui._tab) {
      if (!staticMode)
        ui._player.freeNpc(id);
      $('.tab-'+ui._tab+' li').removeClass('selected');
      //$("div[data-id='"+ui._tabToOpen+"']").hide();
      ui._tab = id;
      ui._closeTabAnimation();
      //$("#loading").stop();
      //$("#loading").fadeIn(200);
      ui._reopen = true;
      ui._morphing = false;
      ui._tabToOpen = id;
      ui._prepareTab(id);
      $('.tab-'+id+' li').addClass('selected');
      if (!staticMode && npc < characters.length)
        return ui._player.sendOrder(npc);
      else // todo : see if that works in static mode
       return ui._openTabAnimation(id);
  }

    // Else, just open tab
    ui._tab = id;
    $('.tab-'+id+' li').addClass('selected');
    ui._prepareTab(id);
    ui._reopen = false;
    ui._tabToOpen = id;
    ui._morphing = true;
    if (!staticMode)
      ui._player.sendOrder(npc);
    else
      ui._openTabAnimation(id);
  };

  this._prepareTab = function(id) {
    ui.tabs.update(id);
  }

  this._showTab = function(id) {
    let element = $('div[data-id="'+id+'"]');
    element.show();
  }

  this._closeTab = function() {
      if (!staticMode &&
          ui._elapsed - ui._lastTime < 2700 && ui._lastTime != 0) {
        return ;
      }
      ui._lastTime = ui._elapsed
      if (ui._morphing)
        return;


      if ($("#nav-overlay").width())
        ui._toggleMenu();

        $('.tab-'+ui._tab+' li').removeClass('selected');
        if (!staticMode)
          ui._player.freeNpc(ui._tab);
        ui._tab = UI_TAB_NONE;
        ui._reopen = false;
        //$("#loading").stop();
        //$("#loading").fadeIn(200);
        ui._loading = true;
        return ui._closeTabAnimation();
  }


    this._blurCanvas = function(radius, margin) {
      var element = $("#canvas");
      var width = $("#tab-size-marker").width();
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
        css.width = (window.screen.width - $("#tab-size-marker").width()) + 'px';
        css.height = (window.screen.height) + 'px';
      }
      return css;
    }

  this._closeTabAnimation = function() {
      ui._morphing = true;
      ui._blurCanvas(10, 0);


      $(".logo-element").css("visibility", "visible");
      $("#tab").animate({'width' :  '0px', 'left' : '-64px'},
      {
        duration : 1000,
        'complete' : function() {
        ui._blurCanvas(0, 0);
        ui.resizeCanvas();
        $('#tab').attr('style', 'width : 0px !important');
       }
      });
      this._toggleSocials(false);
      //var width = window.innerWidth;
      var width = this._initDimensions.width;
      /*$("#canvas").animate({
          'width' : width + 'px',
          'left' : '0px'
        }, {
          'duration': 1000,
          'complete' : function() {
            ui._blurCanvas(0, 0);
            ui.resizeCanvas();
           }
        });*/
      //$("header").fadeIn(1000);
    }

    this._toggleSocials = function(open) {
      if (open) {
        let right = window.screen.width - $("#tab-size-marker").width();
        $("#footer #socials").animate({ opacity: 0 })
        $("#footer #credits").animate({ opacity: 0 })
        //$("#tab-svg").animate({'left' :  TAB_WIDTH - 100   + 'px'}, 1000);
      }
      else {
        $("#footer #socials").animate({ opacity: 100 })
        $("#footer #credits").animate({ opacity: 100 })
        //$("#tab-svg").animate({'left' : '-100px'}, 1000);
      }
    };

    this._openTabAnimation = function(id) {
      let reopen = this._reopen;
      ui._morphing = true;
      ui._blurCanvas(10, 10);
      let width = $("#tab-size-marker").width();


      this._showTab(id);
      $("#tab-content-content").show();
      $('.tab-'+id+' li').addClass('selected');
      ui._tab = id;
      this._toggleSocials(true);
      $("#tab").show();
      $("#tab").stop().animate({'width' : $("#tab-size-marker").width() + 'px', left : 0},
      {
        duration : 1000,
        'complete' : function() {
          ui._blurCanvas(0, 0);
          ui.resizeCanvas();
        },
        start : function () {
          $(".tab-content").hide();
          $('div[data-id="'+id+'"]').show();
        }
      });
      var element = $("#canvas");
      let left = width;
      let baseWidth = window.screen.width;
      if (!reopen)
        baseWidth = element.width();

      /*
      $("#canvas").animate({
          'width' : (baseWidth - width) + 'px',
          'left' : left + 'px'
        }, {
          'duration': 1000,
          'complete' : function() {
            ui._blurCanvas(0, 0);
            ui.resizeCanvas();
          },
          start : function () {
            $(".tab-content").hide();
            $('div[data-id="'+id+'"]').show();
          }
        });*/
      //$("header").fadeOut(1000);
    }


  this.getTabWidth = function() {
    return $("#tab").width();
  }

  this.resizeCanvas = function() {
      var tabWidth = ui.getTabWidth();
      if (this._tab == UI_TAB_NONE)
        tabWidth = 0;

      /*
      canvas.width = this._initDimensions.width - tabWidth;
      canvas.height = this._initDimensions.height;
      offCanvas.width = this._initDimensions.width - tabWidth;
      offCanvas.height = this._initDimensions.height;
      debugCanvas.width = this._initDimensions.width - tabWidth;
      debugCanvas.height = this._initDimensions.height;

      ui.resize(this._initDimensions.width, this._initDimensions.height);
      */

      this._morphing = false;
      //$("#loading").stop();
      //$("#loading").delay(1000).fadeOut(2000);


     tiles.size = tiles.initSize;
     //ratio = canvas.width / canvas.height;//
     /*
     if (canvas.height > 3000 || canvas.width > 3000)
       tiles.size *= 3;
     else if (ratio < 1)
      tiles.size *= 1.7;*/
  }

  this._toggleMenu = function() {
    if (ui._tab != UI_TAB_NONE)
      $("#nav-overlay").css("background", "rgba(109,49,108, 0.3)");
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
        $(".nav.mobile").show();
        $(".nav.mobile").animate({"right" : "50px"}, 1000);
        $("#nav-overlay").animate({"width" : "500px"}, 1000);
      }
      else {
        $(".nav.mobile").hide();
        $("#nav-overlay").animate({"width" : "0px"}, 1000);
        $(".nav.mobile").animate({"right" : "-500px"}, 1000);
      }
  }

  this._tabIsClosed = function() {
    let width = $('#tab').width();
    return !isNaN(width) && width > 0;
  }

  this.update = function(loadManager, time) {
    this.time = time;
    this._elapsed += time;


    let width = $('#tab').width();
    if (ui._tabIsClosed() && !this._morphing) {
      if (ui._tab == UI_TAB_NONE)
        $('#tab').width(0);
      else
        $('#tab').width(($('#tab-size-marker').width()));
    }


    if (this._state == UI_STATE_LOADING) {

        if ((loadManager && loadManager.isComplete()) ||
            staticMode) {
          this._removeScreen();
          this._state = UI_STATE_MAIN;
          this._displayScreen();
        }
      }

    if (!staticMode)
      this._checkOrderStatus();
  }

  this.setTabToOpen = function(id){
    this._tabToOpen = id;
    this._orderId = id;
  }

  this._checkOrderStatus = function() {
    if (staticMode ||
        this._player.checkOrderStatus() == ORDER_STATUS_SUCCESS) {
      //$("#loading").stop();
      //$("#loading").fadeIn(200);
      ui._loading = true;
      if (this._tabToOpen)
        ui._openTabAnimation(this._tabToOpen);
    }
  };

  this._removeScreen = function() {
    var delay = 1000;
    if (this._state == UI_STATE_LOADING)
      delay = 3000;
    this._screens[this._state].delay(delay).fadeOut(500);
  }

  this._displayScreen = function() {
      this.resize(window.screen.width, window.screen.height);

      var delay = 0;
      if (this._last == UI_STATE_LOADING) {
        delay = 1000;
        $("#nav").delay(delay).fadeIn(500);
          $("header").delay(3000).fadeIn(3000);
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
