
function Projects() {
  this._path = "assets/projects/thumbnails/";
  this._data = [
    {
      image : "squishyslug.jpg",
      title : "The SquishySlug Portfolio",
      year: 2018,
      tech : "html,js,graphic,bootstrap",
      npc : 5,
      description : `
      The SquishySlug portfolio is a <b>2d isometric minigame</b> (that is still in
      its alpha stage),
      in which the player can walk around Squishyslug Island
      and talk to its inhabitant as a mean of navigation.
      It is browser based, built in <b>js+jquery</b> and uses <b>bootstrap4</b>
      for its UI. It is drawing <b>css animated svg</b> on a <b>canvas</b>,
      and uses a hidden canvas for click detection.<br/>
      Each tile uses has its own hexcode which is then computed
      into a destination.<br/>
      All characters have AIs that use a <b>Dijkstra algorithm</b> which
      allow them to always find the closest path to their destination.<br/>
      The project is open source : <a target="_blank" href="https://github.com/Lunacie/SquishySlug/">
      https://github.com/Lunacie/SquishySlug</a>
      `
    },
    {
      image : "logo.jpg",
      title : "SquishySlug Logo",
      year : 2018,
      tech : "graphic",
      npc : 6,
      description : `
      This project involved the creation of <b>sketching</b> for the
      SquishySlug logo and its vectorization using <b>Illustrator</b>.
      `
    },
    {
      image : "telstra.jpg",
      title : "Dev Portal website for Telstra",
      year : 2018,
      tech : "html,js,cms,api,bootstrap",
      npc : 7,
      description : `
      I participated in the development of a dev portal for the
      Australian ISP <a href="https://www.telstra.com.au/" target="_blank">Telstra</a> with
      Australian branding company <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>.<br/>
      The project included building an authentification system using their
      <b>sms API</b>, as well as miscellaneous tasks.<br/>
      The whole project is built using the cms <b>Drupal</b>.<br/>
      The site can be visited here : <a href="https://dev.telstra.com/" target="_blank">https://dev.telstra.com/</a>
      `
    },
    {
      image : "firegeeks.jpg",
      title : "d3.js work for APIgeeks",
      year : 2018,
      tech : "html,js"
    },
    {
      image : "octopusroom.jpg",
      year : 2018,
      title : "3d graphics for indie game",
      tech : "graphic,3d"
    },
    {
      image : "octopus.jpg",
      year : 2018,
      title : "Chara-design for indie game",
      tech : "graphic,3d"
    },
    {
      image : "challenge.jpg",
      year : 2017,
      title : "Newsletter + mailling system",
      tech : "php,cms,python,api"
    },
    {
      image : "recommendation.jpg",
      title : "Recommendation Engine",
      year : 2017,
      tech : "software,python,api"
    },
    {
      image : "leezairapi.jpg",
      title : "API research + crawling software",
      year : 2017,
      tech : "software,node,api"
    },
    {
      image : "leezairpage.jpg",
      year : 2016,
      title : "Html/Css integration from design",
      tech : "html,bootstrap"
    },
    {
      image : "leezairlisting.jpg",
      title : "Built a Marketplace in Angular",
      year : 2016,
      tech : "html,bootstrap,api,angular"
    },
    {
      image : "mf.jpg",
      title : "Blog Migration + design integration",
      year : 2016,
      tech : "html,cms"
    },
    {
      image : "89n.jpg",
      title : "Html/css integration from Design",
      year : 2016,
      tech : "html"
    },
    {
      image : "voxel.jpg",
      title : "Open-source 3D voxel engine",
      year : 2016,
      tech : "c,software"
    },
    {
      image : "fetchfood.jpg",
      title : "Web crawler + website and design",
      year : 2015,
      tech : "html,c,js,graphic"
    },
    {
      image : "hellotravel.jpg",
      title : "Travel Website + Design",
      year : 2015,
      tech : "html,php,graphic"
    },
    {
      image : "lapothicaire.jpg",
      title : "E-commerce Vapeshop + Design",
      year : 2015,
      tech : "html,php,graphic,js,c"
    },
    {
      image : "coachoral.jpg",
      title : "Website + Design",
      year : 2015,
      tech : "html,php,graphic"
    },
    {
      image : "guidevoyages.jpg",
      title : "Website with member area + Design",
      year : 2014,
      tech : "html,php,graphic,js"
    },
    {
      image : "spectrum.jpg",
      title : "Old portfolio, implementation + design",
      year : 2014,
      tech : "graphic,html,js,php"
    },
    {
      image : "spectrum2.jpg",
      title : "Old Portfolio contact page",
      year : 2014,
      tech : "graphic,html,js,php"
    },
    {
      image : "rattrapage.jpg",
      title : "Website + 3D Design",
      year : 2014,
      tech : "html,php,graphic,3d"
    },
    {
      image : "snape.jpg",
      title : "Environment design + Photomanipulation",
      year : 2014,
      tech : "graphic"
    },
    {
      image : "kerrigan.jpg",
      year : 2014,
      title : "Digital Painting",
      tech : "graphic"
    },
    {
      image : "entreprendre.jpg",
      title : "Website + Members Area + backend",
      year : 2014,
      tech : "html,php"
    },
    {
      image : "zoe.jpg",
      year : 2013,
      title : "Digital Painting",
      tech : "graphic"
    },
    {
      image : "minecraft.jpg",
      year : 2013,
      title : "Kit graphique",
      tech : "html,graphic"
    },
    {
      image : "kitgraphiquearea.jpg",
      year : 2013,
      title : "Site de vente de kits graphiques",
      tech : "html,php,graphic"
    },
    {
      image : "mutex.jpg",
      year : 2013,
      title : "Mutex related project + design",
      tech : "software,c,graphic"
    },
    {
      image : "anime.jpg",
      year : 2009,
      title : "Digital Painting + Environment Design",
      tech : "graphic"
    },
    {
      image : "host.jpg",
      year : 2009,
      title : "Kit Graphique",
      tech : "graphic,html"
    },
    {
      image : "maintenance.jpg",
      year : 2009,
      title : "Kit graphique",
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
    $('#gallery').on("click", "a", function() {
      projects_tab.setProject($(this).data('project'));
      ui.sendOrder($(this).data('npc'));
    });
    $('.btn-back-projects').click(function() {
        ui.sendOrder(SPECIES_INSECT);
    });
    this._current = [];
    for (let i = 0; i < this._data.length; i++)
      this._current.push(i);
  }

  this.setProject = function(id) {
    this.projectId = id;
    project_tab._id = id;
  }
  this.getProject = function(id) {
    return this._data[id];
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
    let tooltip = '<div class="project-title">' + this._data[this._current[i]].title + '</div>';
    let image = '<img src="'+  this._path +
                this._data[this._current[i]].image  + '"/>';
    return '<a data-npc="'+this._data[this._current[i]].npc + '" ' +
              'data-project="'+i+'" class="col-11 col-md-6 mb-3">' + image + tooltip + "</a>";
  }
}
let projects_tab = new Projects();
