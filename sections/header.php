<header class="d-flex flex-row align-items-stretch col-12 m-0">

  <div id="logo-block" class="flex-item-3 d-flex flex-row align-items-stretch">
    <img src="assets/ui/logo-slug.svg" alt="squishySlug" class="flex-item mr-2" width="" height="48px"/>
    <div class="flex-item-4">
      <h1 >squishySlug</h1>
      <h2 id="title">
        <?php if ($lg == FR) { ?>
        <span class="fr">Ingénierie logicielle<span class="hidden-xs-down">|</span><span class="visible-xs-down hidden-sm-up"><br/></span>Indie Game Development</span>
        <?php }
          else {  ?>
        <span class="en">Software Engineering<span class="hidden-xs-down">|</span><span class="visible-xs-down hidden-sm-up"><br/></span> Indie Game Development</span>
        <?php } ?>
      </h2>
    </div>

</div><!-- end logo block --> <!--
 <div id="title-block" class="col-12 col-sm-12 col-md-4 row pl-3">

 </div>-->
<?php include 'sections/navbar.php'; ?>

<div id="lg-block" class="hidden-sm-down flex-item d-flex flex-column flex-lg-row mr-2">
  <a href="/fr"><img src="assets/vectors/french.svg" class="flag flag-fr"/></a>
  <a href="/"><img src="assets/vectors/english.svg" class="flag flag-en"/></a>
</div>


<div id="menu-svg" class="hidden-lg-up flex-item">
 <svg id="menu-open" version="1.1" class="pt-3"
     viewBox="0 0 516.8 439.4" enable-background="new 0 0 516.8 439.4" xml:space="preserve">
    <rect id="l1" x="1.6" y="2.4" width="479" height="79"/>
    <rect id="l2" x="1.6" y="122.4" width="479" height="79"/>
    <rect id="l3" x="1.6" y="242.4" width="479" height="79"/>
    <rect id="l4" x="1.6" y="362.4" width="479" height="79"/>
 </svg>
</div>



</header>
