
browser = new BrowserDetector();
if (!browser.checkBrowser()) {
  //var element = document.getElementById("device");
  //element.classList.remove("success");
  //element.classList.add("failure");
}
else {
}

var staticMode = !browser.allowed;
