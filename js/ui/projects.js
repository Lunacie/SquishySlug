
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
      image : "d3qb.jpg",
      title : "d3.js work for APIgeeks",
      year : 2018,
      tech : "html,js,api",
      npc: 8,
      description : `
      I participated on a project with Australian branding company
      <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>
      and <a href="https://github.com/apigeek" target="_blank">APIgeeks</a>
      building a crime statistic display system based on data from the
      <a href="https://www.nsw.gov.au/" target="_blank">Australian NSW governement</a>.<br/>
      The project called d3qb was using <b>d3.js</b> to build advanced graphs.
      `
    },
    {
      image : "firegeeks.jpg",
      title : "Html/css page integration from design",
      year : 2018,
      tech : "html,js",
      npc : 9,
      description : `
      I worked on the integration from a design for several pages
      of the Firegeeks website using <b>html/css</b> and <b>Bootstrap4</b>.
      with branding company
      <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>.
      `
    },
    {
      image : "octopusroom.jpg",
      year : 2018,
      title : "3d graphics for indie game",
      tech : "graphic,3d",
      npc : 10,
      description : `
      This scene was built for an indie video game.
      All the 3d assets were modelized on <b>Blender</b>,
      and the textures and normal and specular maps using <b>Photoshop</b>.
      `
    },
    {
      image : "octopus.jpg",
      year : 2018,
      title : "Chara-design for indie game",
      tech : "graphic,3d",
      npc : 11,
      description : `
      This is a character design project for an indie video game.
      A first mockup of the characters was first made using <b>Photoshop</b>,
      then all the characters were made into fully rigged and animated 3d models
      on <b>Blender</b>.
      `
    },
    {
      image : "challenge.jpg",
      year : 2017,
      title : "Newsletter + mailling system",
      tech : "php,cms,python,api",
      npc : 12,
      description : `
      Challenge consulting was a cms based project
      (<b>wordpress</b>) I worked on with branding company
      <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>.<br/>
      I built a <b>python</b> script that would use the mailgun <b>API</b>
      to build target groups to which I then used in the newsletter mailing system I
      implemented as a wordpress plugin.
      `
    },
    {
      image : "recommendation.jpg",
      title : "Recommendation Engine",
      year : 2017,
      npc : 13,
      tech : "software,python,api",
      description : `
      This project was the prototype for a <b>recommendation engine</b> I
      built and designed in <b>python</b> for Australian startup Leezair.
      It would get data from different sources, then serialize them
      into features vectors.<br/>
      I then used <b>cosine similarities</b> to make recommendations
      based on features vectors built from product data and served
      them over <b>Django API</b>.<br/>
      <a href="https://github.com/Lunacie/cos-similarity-recommendations" target="_blank">
      https://github.com/Lunacie/cos-similarity-recommendations
      </a>
      `
    },
    {
      image : "leezairapi.jpg",
      title : "API research + crawling software",
      year : 2017,
      npc : 14,
      tech : "software,node,api",
      description : `
      I worked on this project for Australian travel startup Leezair.
      The project consisted in researching mutiple potential data sources,
      such as <b>XML and REST APIs</b>. Some of the data required <b>data scrapping</b>
      in order to be extracted.<br/>
      I then wrote a <b>node.js</b> script to make those data exploitable by the existing system.
      `
    },
    {
      image : "leezairpage.jpg",
      year : 2016,
      npc : 15,
      title : "Html/Css integration from design",
      tech : "html,bootstrap",
      description : `
      I was provided with <a href="https://www.invisionapp.com/" target="_blank">
      Invision designs</a> which I then integrated into multiple webpages using <b>html, css and
      bootstrap3</b>.<br/>
      <a href="https://www.leezair.com/list-experience" target="_blank">https://www.leezair.com/list-experience</a>

      `
    },
    {
      image : "leezairlisting.jpg",
      title : "Built a Marketplace in Angular",
      year : 2016,
      npc : 16,
      tech : "html,bootstrap,api,angular",
      description : `
      I built the "list an experience" formflow for Australian travel startup
      Leezair in <b>javascript and Angular 1.5</b> All the data was coming from and sent to the existing API.
      I also integrated the pages from <a href="https://www.invisionapp.com/" target="_blank">
      Invision designs</a> I was provided with in <b>/css bootstrap3</b>.<br/>
      <a href="https://www.leezair.com/list-experience" target="_blank">https://www.leezair.com/list-experience</a>
      `
    },
    {
      image : "mf.jpg",
      title : "Blog Migration + design integration",
      year : 2016,
      npc : 17,
      tech : "html,cms",
      description : `
      This mission consisted into a blog migration from cms <b>drupal6</b> to
      <b>SquareSpace</b>.<br/>
      The mission also included integrating the new design I was provided
      as a psd file into a <b>responsive html/css SquareSpace template</b>.<br/>
      <a href="https://www.manageflitter.com/blog/">https://www.manageflitter.com/blog/</a>
      `
    },
    {
      image : "89n.jpg",
      title : "Html/css integration from Design",
      year : 2016,
      npc : 18,
      tech : "html",
      description : `
      I was provided with a psd design I then made into a responsive
      webpage using <b>html/css</b>.<br/>
      <a href="http://89n.com/" target="_blank">http://89n.com/</a>
      `
    },
    {
      image : "voxel.jpg",
      title : "Open-source 3D voxel engine",
      year : 2016,
      npc : 19,
      tech : "c,software",
      description : `
    This is a work in progress game + <b>3d voxel graphic engine</b> for linux that does map rendering at runtime<br/>
    <ul>
    <li>Implementation of a graphic client using <b>openGL</b></li>
    <li>Keyboard, mouse, system and expose events handling</li>
    <li>Parsing of .obj file syntax to allow the polygonal display of complex 3D objects using tris</li>
    <li>Parsing of .mtl file format to allow the extracting of ressources such as 2D textures</li>
    <li>Parsing of compressed and uncompressed .tgv format for the implementation of diffuse, spectral, and
    normal maps</li>
    <li>Implementation of a basic voxel graphic engine. Despite the voxel engine, maps are to be rendered
    using polygons</li>
    <li>Implementation of a <b>frustrum culling algorithm</b> to optimize rendering and get higher fps at runtime </li>
    <li>Implementation of an <b>octree</b> to optimize rendering and get higher fps at runtime <br/></li>
    </ul>
    <a href="https://github.com/Lunacie/Worlds" target="_blank">https://github.com/Lunacie/Worlds</a>
  `
    },
    {
      image : "fetchfood.jpg",
      title : "Web crawler + website and design",
      year : 2015,
      tech : "html,c,js,graphic",
      npc : 20,
      description : `
      A work-in-progress web service that allows users to search and compare for web recipes using a <b>http crawler</b><br/>
      <ul>
      <li>Background Illustration : I made this background on <b>photoshop</b> by integrating various pictures of food</li>
      <li> Designing of the web template on <b>adobe Photoshop</b>. Integration from .psd using <b>html and css</b></li>
      <li>Programming of <b>http web crawler running on linux</b>, visiting cooking websites, looking for different
           versions of a specific recipes; Extracting data from html pages such as ingredients, instructions and
      pictures</li>
      <li>Implementation of a dumboServer .so web project that runs a http crawler process and returns the
      resulting data through http to an <b>AJAX</b> script called from one of the search page.</li>
      <li>Development of FetchFood front-end </li>
      </ul>
      `
    },
    {
      image : "hellotravel.jpg",
      title : "Travel Website + Design",
      year : 2015,
      npc : 21,
      tech : "html,php,graphic",
      description : `
      I adapted this website from an existing one so that it was
      made duplicable.<br/>
      This is a web travel/rental website that works on a system of affiliations.
      I made it so that the owner can change their affiliations data in the admin to be
      able to earn revenue through each sales. The sales are handled by the different
      programs the owner of the website is affiliated to.<br/>
      I also made it so that the website is 100% duplicable to be sold multiple times.<br/>
      Each time a new website was sold, I would design it on <b>photoshop</b> and then update the
      template in <b>html/css</b>
      `
    },
    {
      image : "lapothicaire.jpg",
      title : "E-commerce Vapeshop + Design",
      year : 2015,
      npc : 22,
      description : `
      This project is a fully working e-commerce website made from scratch for a
      french vapestore.<br/>
      <ul>
        <li>Designing of the web template on adobe Photoshop. Integration from .psd using html and css</li>
        <li>Designing of the logo on adobe Illustrator</li>
        <li>Programming and compiling of a .so (dynamic library) for the project</li>
        <li>Implementation on the e-commerce includes :</li>
             <ul>
             <li> Displaying of the items per category, brands</li>
             <li>Building of a tree menu based on the parent/child relationships in menu items</li>
             <li>Integrating items, brands, stocks and categories from register software “Artifact” required :</li>
                <ul><li>Synchronizing distant data with web API through ftp</li>
                    <li>Items were exported from the register software in XML format, which required the
        programming of a XML parsing software to extract data and then format them into insert
        and/or update sql request</li>
                    <li>Automation of said generated sql request files to synchronize data between both web server and register software</li>
                </ul>
             <li>Shopping cart system using dumboServer cookies</li>
             <li>Handling of online orders</li>
             <li>Back office</li>
             <li>Integration of payment methods using Paypal</li>
        </ul>
        <li>Deployment of the web project on distant Debian running dumboServer over ssh</li>
        </ul>
      `,
      tech : "html,php,graphic,js,c"
    },
    {
      image : "coachoral.jpg",
      title : "Website + Design",
      year : 2015,
      npc : 23,
      description : `
        This is a website I made from scratch in php for a coaching company. I first made the design on photoshop, integrated it using html/css.<br/>
        Then I added features such as a contact and signup forms built in php.
      `,
      tech : "html,php,graphic"
    },
    {
      image : "guidevoyages.jpg",
      title : "Website with member area + Design",
      year : 2014,
      npc : 24,
      description : `
      This is a website on which people can sell used travel guides book, just by writting an announce.
      Then users willing to by the books can browse through the announces using a search engine I made based on multiple criteron.
      There are also fully working user accounts so that people can handle their personnal informations and announces. The admin can handle accounts as well as announces.
      I also made the design from scratch on photoshop and integrated it using html/css and jquery
      `,
      tech : "html,php,graphic,js"
    },
    {
      image : "spectrum.jpg",
      title : "Old portfolio, implementation + design",
      year : 2014,
      npc : 25,
      description : `
      This is the old non-minimalist-with-complex-and-distracting-interface version of my portfolio I used to work on. It was replaced by SquishySlug Island.<br/>
      I first built this vertical landscape on photoshop using matte painting and photomanipulation
           Then I made it so that the background scrolls as you scroll down the bottom of the page. The background does not scroll as fast as the foregroud to make it more realistic and alive. I was trying to play with parallax in an interesting way, for once.
      <br/>
      The full background is visible on the right side.
      <br/>
      Then I powered it so that the content (images and text) is loaded from mysql databases.
      `,
      tech : "graphic,html,js,php"
    },
    {
      image : "rattrapage.jpg",
      title : "Website + 3D Design",
      year : 2014,
      npc : 27,
      description :`
      This is a website I made for an online contest for students.<br/>
     This was my first 3d modelling project. I thought this was the perfect occasion, and here is the result of my experimentations.<br/>
     I first made the background on Blender, a 3D modelling tool, then I made the graphic design on photoshop, when I was done, I integrated it all using html/css<br/>
     Then, I made a database and powered the page using php/mysql so that users could signup to the contest.
      `,
      tech : "html,php,graphic,3d"
    },
    {
      image : "snape.jpg",
      title : "Environment design + Photomanipulation",
      year : 2014,
      npc : 28,
      description : `
      This is a photomanipulated room I created on photoshop using about a
      hundred pictures from across the web to render this picture
      from this place that only existed in my mind until then.
      `,
      tech : "graphic"
    },
    {
      image : "kerrigan.jpg",
      year : 2014,
      npc : 29,
      title : "Digital Painting",
      tech : "graphic",
      description : `
      This is a digital paiting I started of Kerrigan from Starcraft Heart of the Swarm using photoshop.
      `
    },
    {
      image : "entreprendre.jpg",
      title : "Website + Members Area + backend",
      year : 2014,
      npc : 30,
      description :  `
       This is a website I made in php for an online contest. There is an account system as well as multiple forms pages.<br/>
       The admin can access the different files and accounts through the admin panel I built.
      `,
      tech : "html,php"
    },
    {
      image : "zoe.jpg",
      year : 2013,
      npc : 31,
      title : "Digital Painting",
      tech : "graphic",
      description : `
      This is a digital painting I made of Zoe from Little Big Adventure using photoshop.
      `
    },
    {
      image : "minecraft.jpg",
      year : 2013,
      npc : 32,
      title : "Web template",
      tech : "html,graphic",
      description : `
      This is a light and colorful web template I made for a Minecraft server using photoshop.<br/>
      Then, I integrated it into a html css page and put the finish product into an archive so
      that anyone willing to promote their Minecraft server could download it, fill up the text, and have a working website.<br/>
      I used to sell it on my own web template e-commerce.
      `
    },
    {
      image : "kitgraphiquearea.jpg",
      year : 2013,
      npc : 33,
      title : "Web template e-commerce",
      description : `
      This is a web template selling website I built from scratch in php. I first made the design on photoshop and integrated it using html/css<br/>
      Then, I powered the website using php mysql and javascript. It's a fully working ecommerce on which I used to sell web content I was making myself. A website selling websites.<br/>
      The payment method I integrated was Paypal.
      `,
      tech : "html,php,graphic"
    },
    {
      image : "mutex.jpg",
      year : 2013,
      npc : 34,
      title : "Mutex related project + design",
      tech : "software,c,graphic",
      description : `
      This is a mini game I made from scratch. It was built using the C programming language and SDL. It's a multi threading application which goal was to study how threads work independantly to each other and how MUTEX affects them.<br/>
      I also made the graphic design for this mini-game using photoshop.
      `
    },
    {
      image : "anime.jpg",
      year : 2009,
      npc : 35,
      title : "Digital Painting + Environment Design",
      tech : "graphic",
      description : `
      This is a digital painting I made on photoshop. This painting was used as a background for an indie anime.
      `
    },/*
    {
      image : "host.jpg",
      year : 2009,
      npc : 36,
      title : "Web template",
      tech : "graphic,html",
      description : `
      A web template I made on photoshop and turned into a website using html/css.<br/>
      `
    },
    {
      image : "maintenance.jpg",
      year : 2009,
      npc : 37,
      title : "Web template",
      tech : "graphic,html",
      description : `
      A web template I made on photoshop and turned into a website using html/css.<br/>
      `
    },*/
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
