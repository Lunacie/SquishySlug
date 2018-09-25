
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
      `,
      descriptionFR : `
      Le portfolio SquishySlug est un <b>mini jeu 2d isometrique</b> (toujours en alpha),
      dans lequel le joueur peut se ballader dans Squishyslug Island
      et parler a ses habitants pour permettre la navigation.
      Il tourne sur navigateur, et est construit en <b>js+jquery</b> et utilise <b>bootstrap4</b>
      pour son IU. Il dessine des <b>svg animes via css</b> sur un <b>canvas</b>,
      et utilise un canvas masque pour la detection des clicks.<br/>
      Chaque tile utilise son propre hexcode qui est ensuite traduit en une destination.<br/>
      Tous les personnages ont des IAs qui utilisent un <b>algorithme de Dijkstra</b>
      Ce qui leur permet de toujours trouver le chemin le plus court jusqu'a leur destination.<br/>
      Le projet est open source : <a target="_blank" href="https://github.com/Lunacie/SquishySlug/">
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
      `,
      descriptionFR : `
      Ce projet se compose d'un <b>sketch</b> pour le logo
      de SquishySlug et de sa vectorization a l'aide <b>Illustrator</b>.
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
      `,
      descriptionFR : `
      J'ai participe au developement d'un dev portal pour le FAI Australien
      <a href="https://www.telstra.com.au/" target="_blank">Telstra</a> avec
      la compagnie Australienne de branding <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>.<br/>
      Le projet compronait l'implementation d'un system d'authentification a l'aide de leur
      <b>API de sms</b>, ainsi que diverses taches.<br/>
      Le projet entier est batit sur le cms <b>Drupal</b>.<br/>
      Le site peut etre visite ici : <a href="https://dev.telstra.com/" target="_blank">https://dev.telstra.com/</a>
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
      `,
      descriptionFR : `
      J'ai participe a un projet avec la compagnie de branding Australienne
      <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>
      et <a href="https://github.com/apigeek" target="_blank">APIgeeks</a>
      a la construction d'un system d'affichage de statistiques de crimes base sur les donnees issues du
      <a href="https://www.nsw.gov.au/" target="_blank">gouvernement Australien de l'etat du NSW</a>.<br/>
      Le projet s'appelait d3qb etait une surcouche de <b>d3.js</b> pour construire des graphiques avances.
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
      `,
      descriptionFR : `
      A partir d'un design qui m'a ete fournit, j'ai realise l'integration de
      plusieurs pages du site FireGeeks en <b>html/css</b> et <b>Bootstrap4</b>.
      avec la compagnie de branding
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
      `,
      descriptionFR : `
      Cette scene a ete realisee pour un jeu video indie.
      Tous les modeles 3d ont ete realises sous <b>Blender</b>,
      et les textures et maps normales et specular sous <b>Photoshop</b>.
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
      `,
      descriptionFR : `
      Voici un projet de chara-design pour un jeu video indie.
      J'ai realise un premier sketch des personnages sur <b>Photoshop</b>,
      avant de realiser des modeles 3d avec squelettes et animations
      sur <b>Blender</b>.
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
      `,
      descriptionFR : `
      Challenge consulting est un projet base sur le cms
      <b>wordpress</b>. sur lequel j'ai travaille avec la compagnie de branding
      <a href="http://www.ebrands.com.au/" target="_blank">Ebrands</a>.<br/>
      J'ai ecrit un script <b>python</b> qui utilise <b>l'API</b> de Mailgun
      pour construire des groupes cibles que j'ai ensuite utilise dans un mailing system que
      j'ai implemente en un plugin wordpress.
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
      `,
      descriptionFR : `
      Ce projet est un prototype pour un <b>moteur de recommendations</b> que
      j'ai designe et implemente en <b>python</b> pour la startup Australienne Leezair.
      Il recupere tout d'abbord des donnees de differentes sources, puis les serialize en features vectors.<br/>
      J'ai ensuite utilise une <b>cosine similarities</b> pour faire des recommendations
      bases sur les features vectors extraits des donnees des produits et servis
      par une <b>API Django</b>.<br/>
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
      `,
      descriptionFR : `
      J'ai travaille sur ce projet pour la startup de voyage Leezair.
      Le projet consistait un inspecter de multiples potentielles sources de donnees,
      telles que des <b>APIs XML et REST</b>. Extraction de certaines donnees necessitait du <b>data scrapping</b>
      .<br/>
      J'ai ensuite ecrit un script <b>node.js</b> pour rendre ces donnees exploitable par les systeme existant.
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
      `,
      descriptionFR : `
      Des designs <a href="https://www.invisionapp.com/" target="_blank">
      Invision</a> m'ont ete fournis. Je les ai ensuite integres en plusieurs pages web <b>html, css avec
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
      `,
      descriptionFR : `
      J'ai construit le "list an experience" formflow pour la startup de voyages
      Leezair en <b>javascript et Angular 1.5</b> Toutes les donnees etaient echangees avec une API existante.
      J'ai egalement integres les <a href="https://www.invisionapp.com/" target="_blank">
      designs Invisions</a> qui m'ont ete fournis en <b>html/css et bootstrap3</b>.<br/>
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
      `,
      descriptionFR : `
      Cette mission consistait en une migration de blog depuis le csm <b>drupal6</b> vers
      <b>SquareSpace</b>.<br/>
      Cette mission comprennait egalement l'integration d'un design fournit sous la forme
      d'un fichier psd, en une <b>template SquareSpace responsive html/css</b>.<br/>
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
      `,
      descriptionFR : `
      On m'a fournit un fichier psd d'un design que j'ai ensuite integre en <b>html/css responsive</b>.<br/>
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
  `,
  descriptionFR : `
Ce projet en chantier est un jeu + <b>un moteur voxel 3d</b> qui render la carte au runtime.<br/>
<ul>
<li>Implementation d'un client graphique en utilisant <b>openGL</b></li>
<li>Management des evenements claviers, souris, system et expose</li>
<li>Parsing de fichier syntax .obj pour permettre l'affichage polygonal d'objets 3d complexes a l'aide de tris</li>
<li>Parsing de fichier au format .mtl pour permettre l'extraction de ressources telles que des textures 2D</li>
<li>Parsing de format .tgv compresse et decompresse pour l'implementation de maps diffuse, spectrales, et
normales</li>
<li>Implementation d'un moteur voxel graphique basique. Malgres le moteur voxel, les maps sont rendues
en polygones</li>
<li>Implementation d'un <b>algorithme de frustrum culling </b> pour optimiser le rendering et obtenir un fps plus eleve au runtime </li>
<li>Implementation  d'<b>octree</b> pour optimiser le rendering et obtenir un fps plus eleve au runtime <br/></li>
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
      `,
      descriptionFR : `
      Ce projet est un web service wui permet aux utilisateurs de chercher et de comparer des recettes a l'aide d'un <b>crawler http</b><br/>
      <ul>
      <li>Background Illustration : J'ai realise l'illustration de l'arriere plan sur <b>photoshop</b> en integrant diverses images de nourriture</li>
      <li> Design de la template web sur <b>adobe Photoshop</b>. Integration depuis un .psd en <b>html et css</b></li>
      <li>Implementation d'un <b>web crawler http qui tourne sur linux</b>, qui visite des sites de cuisine, a la recherches de differentes
           version d'une recette specifique; Extraction des donnees a partir des pages html telles que les ingredients, instructions et
      photos</li>
      <li>Implementation d'un projet web .so dumboServer qui fait tourner un processus de crawler http process et retourne
      les donnees via http a un script <b>AJAX</b> appelle depuis l'une des pages de recherche.</li>
      <li>Developement du front-end de FetchFood</li>
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
      `,
      descriptionFR : `
      J'ai adapte ce site a partir d'un site existant pour le rendre facilement duplicable.<br/>
      C'est un site de voyage/locations qui fonctionne sur un systeme d'affiliations.
      J'ai fait en sorte que le proprietaire du site puisse facilement changer ses donnees d'affiliation dan le panel admin
      de facon a pouvoir gagner un revenu sur chaque vente. Les ventes sont gerees par les differents programmes
      auquels le proprietaire du site est affilie.<br/>
      J'ai egalement fait en sorte que les site soit 100% duplicable de maniere a ce qu'il puisse etre vendu de mutiples fois.<br/>
      Chaque fois qu'un site etait vendu, j'en refaisais le design sur <b>photoshop</b> puis mettais a jour la
      template <b>html/css</b>
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
      descriptionFR : `
      Ce projet est un site web e-commerce pour un vapostore Francais.<br/>
      <ul>
        <li>Design de la template web sur  adobe Photoshop. Integration depuis un .psd en html/css</li>
        <li>Design du logo sur adobe Illustrator</li>
        <li>Programming et compilation d'un .so (librarie dynamique) pour le projet</li>
        <li>L'implementation de l'e-commerce comprend :</li>
             <ul>
             <li> L'affichage des items par categories, marques</li>
             <li>Construction d'un menu "a branches" bases sur les relations parents/enfants des items du menu</li>
             <li>L'integration des items, marques, stocks and categories a partir du logiciel de caisse “Artifact” comprennait :</li>
                <ul><li>La synchronization des donnees par API via ftp</li>
                    <li>Les items etaient exportes depuis le logiciel des caisse au format XML format, ce qui a requit
        l'implementation d'un programme qui parsait le XML pour extraire les donnees et ensuite les formater en INSERT and or UPDATE sql requests.
        </li>
                    <li>Automation de la sychronisation des fichier sql generes pour permettre la synchronisation des donnees entre le web server et le logiciel de caisse</li>
                </ul>
             <li>Systeme de caddie de caisse en utilisant des dumboServer cookies</li>
             <li>Prise en charge des commandes en ligne</li>
             <li>Back office</li>
             <li>Integration de methodes de paiement a l'aide de Paypal</li>
        </ul>
        <li>Deploiement du project web sur un server Debian distant qui faisait tourner un dumboServer via ssh</li>
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
      descriptionFR : `
        Ce site a ete realise de zero en php pour une compagnie de coaching. J'ai d'abord realise le design sur photoshop, puis integre en html/css.<br/>
        J'ai ensuite ajoute des fonctionnalites telles que des formulaires de contacte and d'inscription en php.
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
      descriptionFR : `
      Ceci est un site sur lequel les utilisateurs peuvent vendre des guides de voyages d'occasion en ecrivant simplement une annonce.
      Les utilisateurs a la recherche d'un guide peuvent naviguer les annonces grace au systeme de recherche que j'ai implemente base sur de nombreux criteres.
      Il y a egalement un gestion complete des comptes utilisateurs pour que chacun puisse gerer ses informations personnelles et ses annonces. L'administrateur peut manager les comptes et les annonces.
      J'ai egalement realise le design sur  photoshop et integre en html/css et jquery.
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
      descriptionFR : `
      Ceci est l'ancienne version de mon portfolio. Il a par la suite ete remplace par SquishySlug Island.<br/>
      J'ai d'abord realise un paysage vertical sur photoshop en utilisant des technique des matte painting et de photomanipulation.
           J'ai ensuite fait en sorte que le background defile quand l'utilisateur scroll. L'arriere plan ne defile pas aussi vite que le premier plan pour creer une reelle impression de profondeur. Le but etant de jouer avec le parallax d'une maniere interessante, pour une fois.
      <br/>
      L'arriere plan entier est visible a la droite de l'image.
      <br/>
      J'ai ensuite fait en sorte que les contenu (images et texte) soit charge depuis des bases de donnees mysql.
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
      descriptionFR :`
     J'ai realise ce site pour une competition en ligne pour etudiants.<br/>
     I made the background on Blender, un outil de modelisation 3D, ensuite j'ai realise le design graphique sur photoshop, une fois celui ci termine, j'ai integre la page en html/css<br/>
      A l'aide de php/mysql j'ai fait en sorte que les utilisateurs puissent participer au concours.
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
      descriptionFR : `
      Ceci est une scene photomanipulee cree sur photoshop a partir d'une centaine
      de photographies trouvees sur le web pour la realisation de cette piece qui jusque la,
      n'existait que dans ma tete.
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
      `,
      descriptionFR : `
      Une peinture digitale de Kerrigan, Starcraft Heart of the Swarm sur photoshop.
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
      descriptionFR :  `
       J'ai realise ce site pour un concours en ligne. Il y a un systeme de compte ainsi qu'une multitude de pages de formulaires.<br/>
       L'admin peut acceder aux differents fichiers et comptes a travers le panel d'administration que j'ai implemente.
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
      `,
      descriptionFR : `
      Une peinture digitale de Zoe de Little Big Adventure sur photoshop.
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
      `,
      descriptionFR : `
      Un kit graphique leger et colore que j'ai realise pour un serveur Minecraft sur photoshop.<br/>
      je l'ai ensuite integre en une page html/css et mit le produit finit dans une archive pour que
      n'importe quelle personne cherchant a creer un site pour son serveur minecraft n'ai qu'a remplir le texte et avoir un site web fonctionnel.<br/>
      Ce n'etait que l'un des nombreux kits-graphiques que je vendais sur ma propre platforme e-commerce.
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
      descriptionFR : `
      Ce projet est un site de vente de kits-graphiques que j'ai construit de zero en php.
      J'ai d'abord realise le design sur photoshop puis integre en html/css<br/>
      Le site fonctionne en php/mysql and javascript.
      C'est un ecommerce sur lequel je vendais du contenu web que je realisais moi meme.<br/>
      Le moyen de paiement integre est Paypal.
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
      `,
      descriptionFR : `
      Ce projet est un programme C+SDL dans le but d'approfondir ma comprehension des applications multi thread et d'etudier la manniere dont les threads travaillent independemment les uns des autres et comment les MUTEX les affectent.<br/>
      J'ai aussi realise le graphique design sur photoshop.
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
      `,
      descriptionFR : `
      Peinture digitale realisee sur photoshop. Cette peinture a ete utilisee comme arriere plan dans un anime indie.
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
