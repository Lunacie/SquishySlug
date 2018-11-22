const DEBUG = 0 ;

function BrowserDetector() {

  this.allowed = false;

  this.checkBrowser = function() {
    if (this._isEdge() || this._isChrome())
      this.allowed = true;

    return this.allowed;
  }

  this._isEdge = function() {
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    if (!isEdge)
      return false;
    var raw = navigator.userAgent.match(/Edge\/([0-9]+)\./);
    var version = raw ? parseInt(raw[2], 10) : false;
    if (version < 17)
      return false;
    return true;
  }

  this._isChrome = function() {
    var isChrome = !!window.chrome && !!window.chrome.webstore
    if (!isChrome)
      return false;
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    var version = raw ? parseInt(raw[2], 10) : false;
    if (version < 55)
      return false;
    return true;
  }
};
