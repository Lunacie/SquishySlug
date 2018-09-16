
function Projects() {
  this._path = "assets/projects/";
  this._data = [{
      image : "challenge.jpg",
      year : 2017,
      type : "backend"
    },{
      image : "logo.jpg",
      year : 2018,
      type : "graphicdesign"
    },{
      image : "squishyslug.jpg",
      year: 2018,
      type : "fullstack"
    },{
      image : "firegeeks.jpg",
      year : 2017,
      type : "frontend"
    },
  ];

  this._filters = {
    years : [],
    type : []
  }

  this._current = [];

  this.init = function() {
    $('button.year').click(this._toggleYear);
    $('button.type').click(this._toggleType);
    this._current = [0, 1, 2, 3];
  }

  this._refresh = function() {
    projects_tab.update();
    projects_tab.getContent();
  }

  this._toggleYear = function(event) {
    let element = $(event.target);
    let year = element.data("year");
    let index = projects_tab._filters.years.indexOf(year);

    if (index == -1) {
      projects_tab._filters.years.push(year);
      element.removeClass('btn-info');
      element.addClass('btn-light');
    }
    else {
      projects_tab._filters.years.splice(index, 1);
      element.removeClass('btn-light');
      element.addClass('btn-info');
    }
    projects_tab._refresh();
  }


  this._toggleType = function(event) {
    let element = $(event.target);
    let type = element.data("type");
    let index = projects_tab._filters.type.indexOf(type);

    if (index == -1) {
      projects_tab._filters.type.push(type);
      element.removeClass('btn-primary');
      element.addClass('btn-light');
    }
    else {
      projects_tab._filters.type.splice(index, 1);
      element.removeClass('btn-light');
      element.addClass('btn-primary');
    }
    projects_tab._refresh();
  }

  this.update = function() {
    this._current = [];
    for (let i = 0; i < this._data.length; i++) {
      if (this._filters.years.indexOf(this._data[i].year) == -1 &&
          this._filters.type.indexOf(this._data[i].type) == -1)
          this._current.push(i);
    }
  }

  this.getContent = function() {
    let content = "";
    for (let i = 0; i < this._current.length; i++) {
      content += '<img class="col-11 col-md-6" src="'+  this._path +
      this._data[this._current[i]].image  + '"/>';
    }
    $("#gallery").html(content);
    return content;
  }
}
let projects_tab = new Projects();
