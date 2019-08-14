<!DOCTYPE html>
<html>
   <head>
       <?php
       ini_set('display_errors',1);
       error_reporting(-1);

       include 'sections/head.php'; ?>

      <link href="https://fonts.googleapis.com/css?family=Heebo:300|News+Cycle|Ubuntu:700|Ubuntu:400|Ubuntu+Mono" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

      <script type="text/javascript" src="/js/browserDetector.js"></script>
      <script type="text/javascript" src="/js/props.js"></script>
      <script type="text/javascript" src="/js/machine-state.js"></script>
      <script type="text/javascript" src="/js/image-loader.js"></script>
      <script type="text/javascript" src="/js/character.js"></script>
      <script type="text/javascript" src="/js/npc-data.js"></script>
      <script type="text/javascript" src="/js/npc.js"></script>
      <script type="text/javascript" src="/js/player.js"></script>
      <script type="text/javascript" src="/js/breakpoints.js"></script>
      <script type="text/javascript" src="/js/event.js"></script>
      <script type="text/javascript" src="/js/event-click.js"></script>
      <script type="text/javascript" src="/js/tiles.js"></script>
      <script type="text/javascript" src="/js/fullmap.js"></script>
      <script type="text/javascript" src="/js/map.js"></script>
      <script type="text/javascript" src="/js/load-manager.js"></script>
      <script type="text/javascript" src="/js/debug-overlay.js"></script>
      <script type="text/javascript" src="/js/ui/projects.js"></script>
      <script type="text/javascript" src="/js/ui/project.js"></script>
      <script type="text/javascript" src="/js/ui/about.js"></script>
      <script type="text/javascript" src="/js/ui/contact.js"></script>
      <script type="text/javascript" src="/js/ui/tab.js"></script>
      <script type="text/javascript" src="/js/ui/ui.js"></script>
      <script type="text/javascript" src="/js/camera.js"></script>
      <script type="text/javascript" src="/js/draw.js"></script>
      <script type="text/javascript" src="/js/update.js"></script>

      <link rel="stylesheet" href="/css/style.css"></link>
      <link rel="stylesheet" href="/css/style-tiles.css"></link>
      <link rel="stylesheet" href="/css/style-characters.css"></link>
      <link rel="stylesheet" href="/css/media-queries.css"></link>
      <link rel="stylesheet" href="/css/animations.css"></link>
      <link rel="stylesheet" href="/css/animation-menu.css"></link>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">

      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />

      <meta name="robots" content="index, follow">
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">

   </head>

   <body id="body" class="m-0">

    <?php include 'sections/header.php' ?>

     <div id="main" class="screen container row m-0">
     </div>

     <!--
     <h1 id="device" class="success">DEVICE ACCEPTED</h1>
     <h1 id="fps" style="z-index:9999">0 fps</h1>
     -->

     <div id="tab" class="row">

       <div id="tab-size-marker"></div>
       <div id="tab-content" class="col-12 container pb-5 px-2 row">

          <div id="tab-header" class="col-12 d-flex flex-row-reverse p-3">
            <button id="tab-close" class="" >x</button>
          </div>

          <div id="tab-about" class="tab-content  col-11" data-id="1">
           <?php include 'sections/tab-about.php'; ?>
          </div>

           <div id="tab-road" class="tab-content col-12  mx-auto" data-id="2">
             <?php include 'sections/tab-road.php'; ?>
           </div>

           <div class="tab-content col-12 px-0 px-sm-5" data-id="3">
             <?php include 'sections/tab-projects.php'; ?>
          </div>

           <div id="tab-contact" class="tab-content  col-12" data-id="4">
             <?php include 'sections/tab-contact.php'; ?>
           </div>

           <div class="tab-content  col-12" data-id="5">
             <?php include 'sections/tab-project.php'; ?>
           </div>


         <div id="tab-footer" class="col-12 row">
          <div class="social col-7 offset-5 col-md-5 offset-md-8 offset-lg-9">
            <p class="mb-0 ">Follow the Slug</p>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-github mr-1"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

       </div>

     </div>

      <!--
      <svg id="tab-svg" class="hidden-md-down" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="auto" fill="#ffffff">
      	  <path d="M0 60 L60 60 L0 0 Z"></path>
      </svg>
      -->


     <div>
          <!--
          <canvas id="offCanvas" class="canvas" width="1000" height="600"></canvas>
          <canvas id="canvas" class="canvas" width="1000" height="600"></canvas>
          <canvas id="debugCanvas" class="canvas" width="1000" height="600"></canvas>
          -->
          <div id="canvas"></div>
          <div id="box"></div>
          <div id="background">
            <video autoplay muted loop id="video">
              <source src="/assets/videos/background.mp4" type="video/mp4">
            </video>
          </div>


        <div id="loading" class="screen container">
            <img src="/assets/ui/loading.svg" class="hidden-md-down small" width="10%"/>
            <img src="/assets/ui/loading.svg" class="hidden-lg-up big" width="25%"/>
        </div>

        <?php include 'sections/sidebar.php'; ?>

        <?php include 'sections/footer.php'; ?>


        </div>

        <script type="text/javascript" src="/js/init.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
        </body>

</html>
