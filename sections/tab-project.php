
  <h2 class="mt-5">
    <?php
      if ($lg == EN) echo '<span class="en">Project</span>';
      else echo '<span class="fr">Projet</span>';
    ?>
      :<span class="project-name"></span></h2>

  <?php
    if ($lg == EN) echo '<button class="btn btn-primary btn-back-projects en">< Back to projects</button>';
    else echo '<button class="btn btn-primary btn-back-projects fr">< Retour aux projets</button>';
  ?>
  <div class="project-description-container">
  <img class="col-12 project-image my-5">

  </img>
  <b class="project-year"></b>
    <?php
      if ($lg == EN) echo '<p class="project-description en"></p>';
      else echo '<p class="project-description fr"></p>';
    ?>
  </div>
