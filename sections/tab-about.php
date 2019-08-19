<div class="scrollable">
    <img class="mx-auto d-block" src="/assets/ui/logo-slug.svg" alt="squishySlug" width="" height="125px"/>

   <h2 class="text-center">squishySlug</h2>
   <h3 class="text-center">&ltStudio&gt</h3>

   <?php if ($lg == EN) { ?>
     <p class="en text-center px-5 mt-3">SquishySlug is a game developement
       studio that builds games for both desktop and IOS devices.
        <br/>
        SquishySlug also specializes in plugin and extension development
        for game egines such as Unity, CryEngine and UnrealEngine.
      </p>
<?php }

else { ?>
    <p class="fr text-center px-5 mt-3">SquishySlug est un studio de dévelopment
      de jeux videos pour les plateformes <b>desktop</b> et <b>iOS</b>.
      <br/>SquishySlug se spécialise également dans le développement de plugin et
      d'extensions pour les moteurs de jeux tels que <b>Unity</b>, <b>CryEngine</b> et <b>UnrealEngine</b>.
    </p>
<?php } ?>

<div id="engine-logos" class="row col-12 col-md-6 offset-md-3">
  <div class="m-auto">
    <img src="/assets/ui/cry-logo.svg" alt="Logo CryEngine"/>
    <img src="/assets/ui/unreal-logo.svg" alt="Logo UnrealEngine"/>
    <img src="/assets/ui/unity-logo.svg" alt="Logo Unity"/>
  </div>
</div>

<div id="about-socials" class="mt-3 row m-auto">
  <p class="text-center px-5 mt-3 d-block w-100">
  <?php if ($lg == FR) { ?>
      Suivez l'actualité de squishySlug sur les réseau sociaux :
    <?php } else { ?>
      Follow SquishySlug on social media keep up with our latest
      releases posts :
<?php } ?>
  </p>
  <div class="row d-block m-auto">
    <?php include 'sections/socials.php'; ?>
  </div>
</div>


</div>
