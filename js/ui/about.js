
function About() {

  this.update = function() {
    $(".logo-element").css("visibility", "hidden");
    $("#tab-about .link").click(this._goToContactTab);
  }

  this._goToContactTab = function() {
      ui.sendOrder(4);
  }
}

let about_tab = new About();
