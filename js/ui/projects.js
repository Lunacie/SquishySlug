
function Projects() {
  this._path = "assets/projects/";
  this._data = [{
      image : "challenge.jpg",
      year : 2017,
      tech : "php,cms,python"
    },{
      image : "logo.jpg",
      year : 2018,
      tech : "graphic"
    },{
      image : "squishyslug.jpg",
      year: 2018,
      tech : "html,js,graphic"
    },{
      image : "firegeeks.jpg",
      year : 2016,
      tech : "html,js"
    },
  ];

  this._filters = {
    years : [],
    type : [],
    tech: []
  }

  this._current = [];

  this.init = function() {
    $('button.year').click(this._toggleYear);
    $('button.tech').click(this._toggleTech);
    this._current = [0, 1, 2, 3];
  }

  this._refresh = function() {
    projects_tab.update();
    projects_tab.getContent();
  }

  this.update = function() {
    this._current = [];
    for (let i = 0; i < this._data.length; i++) {
      /*if (this._filters.years.indexOf(this._data[i].year) != -1);
      else if (this._isFiltered(this._filters.tech, this._data[i].tech));
      else if (this._isFiltered(this._filters.type, this._data[i].type));
      else
        this._current.push(i);*/
      if (this._filters.years.indexOf(this._data[i].year) != -1 ||
        this._isFiltered(this._filters.tech, this._data[i].tech));
      else
        this._current.push(i);
    }
  }

  this._isFiltered = function(filters, list) {
    if (filters.length == 0)
      return false;
    list = list.split(',');
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (filters.indexOf(list[i]) != -1)
        count += 1;
    }
    if (count == list.length)
      return true;
    return false;
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


  this._toggleTech = function(event) {
    let element = $(event.target);
    let tech = element.data("tech");
    let index = projects_tab._filters.tech.indexOf(tech);

    if (index == -1) {
      projects_tab._filters.tech.push(tech);
      element.removeClass('btn-success');
      element.addClass('btn-light');
    }
    else {
      projects_tab._filters.tech.splice(index, 1);
      element.removeClass('btn-light');
      element.addClass('btn-success');
    }
    projects_tab._refresh();
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
