
function Projects() {
  this._path = "assets/projects/";
  this._data = [
    {
      image : "squishyslug.jpg",
      year: 2018,
      tech : "html,js,graphic,bootstrap"
    },
    {
      image : "logo.jpg",
      year : 2018,
      tech : "graphic"
    },
    {
      image : "telstra.jpg",
      year : 2018,
      tech : "html,js,cms,api,bootstrap"
    },
    {
      image : "firegeeks.jpg",
      year : 2018,
      tech : "html,js"
    },
    {
      image : "octopusroom.jpg",
      year : 2018,
      tech : "graphic,3d"
    },
    {
      image : "octopus.jpg",
      year : 2018,
      tech : "graphic,3d"
    },
    {
      image : "challenge.jpg",
      year : 2017,
      tech : "php,cms,python,api"
    },
    {
      image : "recommendation.jpg",
      year : 2017,
      tech : "software,python,api"
    },
    {
      image : "leezairapi.jpg",
      year : 2017,
      tech : "software,node,api"
    },
    {
      image : "leezairpage.jpg",
      year : 2016,
      tech : "html,bootstrap"
    },
    {
      image : "leezairlisting.jpg",
      year : 2016,
      tech : "html,bootstrap,api,angular"
    },
    {
      image : "mf.jpg",
      year : 2016,
      tech : "html"
    },
    {
      image : "89n.jpg",
      year : 2016,
      tech : "html"
    },
    {
      image : "voxel.jpg",
      year : 2016,
      tech : "c,software"
    },
    {
      image : "fetchfood.jpg",
      year : 2015,
      tech : "html,c,js,graphic"
    },
    {
      image : "hellotravel.jpg",
      year : 2015,
      tech : "html,php,graphic"
    },
    {
      image : "lapothicaire.jpg",
      year : 2015,
      tech : "html,php,graphic,js"
    },
    {
      image : "coachoral.jpg",
      year : 2015,
      tech : "html,php,graphic"
    },
    {
      image : "guidevoyages.jpg",
      year : 2014,
      tech : "html,php,graphic,js"
    },
    {
      image : "spectrum.jpg",
      year : 2014,
      tech : "graphic,html,js,php"
    },
    {
      image : "spectrum2.jpg",
      year : 2014,
      tech : "graphic,html,js,php"
    },
    {
      image : "rattrapage.jpg",
      year : 2014,
      tech : "html,php,graphic,3d"
    },
    {
      image : "snape.jpg",
      year : 2014,
      tech : "graphic"
    },
    {
      image : "kerrigan.jpg",
      year : 2014,
      tech : "graphic"
    },
    {
      image : "entreprendre.jpg",
      year : 2014,
      tech : "html,php"
    },
    {
      image : "zoe.jpg",
      year : 2013,
      tech : "graphic"
    },
    {
      image : "minecraft.jpg",
      year : 2013,
      tech : "html,graphic"
    },
    {
      image : "kitgraphiquearea.jpg",
      year : 2013,
      tech : "html,php,graphic"
    },
    {
      image : "mutex.jpg",
      year : 2013,
      tech : "software,c,graphic"
    },
    {
      image : "anime.jpg",
      year : 2009,
      tech : "graphic"
    },
    {
      image : "host.jpg",
      year : 2009,
      tech : "graphic,html"
    },
    {
      image : "maintenance.jpg",
      year : 2009,
      tech : "graphic,html"
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
    this._current = [];
    for (let i = 0; i < this._data.length; i++)
      this._current.push(i);
  }

  this._refresh = function() {
    projects_tab.update();
    projects_tab.getContent();
  }

  this.update = function() {
    this._current = [];
    for (let i = 0; i < this._data.length; i++) {
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
      content += this._getImage(i);
    }
    $("#gallery").html(content);
    return content;
  }

  this._getImage = function(i) {
    let image = '<img src="'+  this._path +
                this._data[this._current[i]].image  + '"/>';
    return '<a class="col-11 col-md-6 mb-3">' + image + "</a>";
  }
}
let projects_tab = new Projects();
