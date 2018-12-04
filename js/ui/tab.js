
function Tab() {

  this._tabs = [
    about_tab,
    null,
    projects_tab,
    contact_tab,
    project_tab
  ]

  this.init = function() {
  for (let i = 0 ; i < this._tabs.length; i++) {
      if (this._tabs[i] && this._tabs[i].init)
        this._tabs[i].init();
    }
  }

  this.update = function(id) {
    if (this._tabs[id - 1] && this._tabs[id - 1].update) {
      this._tabs[id - 1].update();
      if (this._tabs[id - 1].getContent)
        return this._tabs[id - 1].getContent();
    }
  }

}
