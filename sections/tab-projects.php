<div id="tab-content-content" class="scrollable">
  <h2 class="mt-5">
    <?php
      if ($lg == EN) echo '<span class="en">Titles - Releases - WIP</span>';
      else echo '<span class="fr">Titres - Releases - WIP</span>';
    ?>
  </h2>

    <div>
    <p class="mt-2">
      <?php
        if ($lg == EN) echo "SquishySlug is currently working on a RPG adventure
        game for a desktop release as well as a Unity engine addons.";
        else echo "SquishySlug travaille actuellement au développement d'un
        jeu RPG/aventure pour une release sur PC ainsi que sur un plugin pour
        le moteur de jeu Unity.";
      ?>
    </p>
  </div>



  <div id="" class="row col-11 col-lg-12 px-0 mx-0 my-4 mb-5">
    <h3 class=" mb-3">SquishyHair</h3>

    <div class="row title-item text-center text-md-left">
      <p class="col-12 col-md-6 col-lg-7 text-jusitfy">
        <?php if ($lg == EN) { ?>
        SquishyHair is an innovative and inclusive approach to procedural hair
        rendering for video games built, for the game engine Unity.<br/>
        <br/>
        SquishyHair aims at changing the way the industry views character hairstyles,
        by making building hairstyle as easy as dragging and
        dropping a strand of hair to the right place for game developers so that
        they can easily make a wide range of hairstyle available to their players,
        or for their own game characters, without having to acquire static 3D
        hair assets, having them commissioned or having to learn to model them on
        their own...
        <!--<button class="btn btn-primary btn-sm mt-3">Read more</button>-->
      <?php } else { ?>
        SquishyHair est une approche innovante et inclusive de la génération
        procédurale capillaire pour les jeux vidéos implémentée sur le moteur
        de jeu Unity.<br/>
        SquishyHair a pour but de changer le regard de l'industrie du gaming
         sur les coiffures des personnages de jeux en rendant la réalisation
          d'une coiffure aussi simple que de cliquer et lâcher une mèche de
          cheveux a l'endroit souhaité, de façon à ce que les développeurs
          puissent aisément rendre disponible pour leurs joueurs une grande
           variété de choix de coiffures lors de la créations de leurs
            personnages, sans pour autant avoir à se procurer des modèles
             3D, commissionner leurs réalisation ou apprendre à les modéliser
              par eux même.<br/>
        <!--<button class="btn btn-primary btn-sm mt-3">En Savoir +</button>-->
      <?php } ?>
      </p>

      <div class="col-12 col-md-6 col-lg-5">
        <img src="/assets/projects/thumbnails/squishyhair.gif" alt="rpwp"></img>
      </div>
    </div>
  </div>

  <div id="" class="row col-11 col-lg-12 px-0 mx-0 my-4 mb-5">
    <h3 class=" mb-3">Wrong Planet, Right Plane</h3>

    <div class="row title-item text-center text-md-left">
      <div class="col-12 col-md-6 col-lg-5">
        <img src="/assets/projects/thumbnails/wprp.gif" alt="rpwp"></img>
      </div>
      <p class="col-12 col-md-6 col-lg-7 text-jusitfy">
        <?php if ($lg == EN) { ?>
        Wrong planet, Right Plane is a working title for a sci-fi
        RPG/Adventure game running on PC.<br/>
        It's about a utterly confused character who ends up against their own
        will on a planet light years away from earth, surrounded by creatures
        who's language they dont understand. Yet, they still have to find a
        way to make themselves useful and help with the development of
        a colony they never asked to be a part of, in the first place...<br/>
        <!--<button class="btn btn-primary btn-sm mt-3">Read more</button>-->
      <?php } else { ?>
        Wrong planet, Right Plane est un jeu sci-fi
        RPG/Adventure pour PC.<br/>
        Il relate l'histoire d'un personnage complètement perdu qui se retrouve
        embarqué pour une planète à des années lumière de la Terre,
        entouré de créatures dont iel ne comprend pas la langue
        et doit malgrés tout trouver le moyen de se rendre utiler et d'aider
        au développement d'une colonie dont iel n'a jamais souhaité faire
        partie...<br/>
        <!--<button class="btn btn-primary btn-sm mt-3">En Savoir +</button>-->
      <?php } ?>
      </p>
    </div>
  </div>


    <div id="" class="row col-11 col-lg-12 px-0 mx-0 my-4 mb-5">
      <h3 class=" mb-3">SquishySlug Island</h3>

      <div class="row title-item text-center text-md-left">
        <p class="col-12 col-md-6 col-lg-7 text-jusitfy">
          <?php if ($lg == EN) { ?>
          The SquishySlug portfolio is a 2d isometric minigame,
           in which the player can walk around Squishyslug Island and talk
         to its inhabitant as a mean of navigation.<br/>
         It is browser based,
         built in js+jquery and uses bootstrap4 for its UI.
         It works by adding css animated svg as DOM element.
         It removes tiles that are not curently
         visible on the screen and adds those that are and not yet present.<br/>
        All characters have AIs that uses a Dijkstra algorithm which allow
         them to always find the closest path to their destination...<br/>
          <!--<button class="btn btn-primary btn-sm mt-3">Read more</button>-->
        <?php } else { ?>
          Le portfolio SquishySlug est un mini jeu 2d isométrique,
           dans lequel le joueur peut se ballader dans Squishyslug Island
            et parler à ses habitants pour permettre la navigation.<br/>
             Il tourne sur navigateur, est construit en js+jquery
              et utilise bootstrap4 pour son IU.
             Il fonctionne en ajoutant des svg animés via css en tant qu'elément DOM.<br/>
          Tous les personnages ont des IAs qui utilisent un algorithme de
           Dijkstra, ce qui leur permet de toujours trouver le chemin le plus
            court jusqu'a leur destination...<br/>
          <!--<button class="btn btn-primary btn-sm mt-3">En Savoir +</button>-->
        <?php } ?>
        </p>

        <div class="col-12 col-md-6 col-lg-5">
          <img src="/assets/projects/thumbnails/squishyslug-island.gif" alt="rpwp"></img>
        </div>
      </div>
    </div>



</div>
