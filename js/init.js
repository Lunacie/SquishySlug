
browser = new BrowserDetector();
browser.checkBrowser();
var staticMode = !browser.allowed;
console.log("STATIC MODE: ", staticMode);

staticMode = true;
