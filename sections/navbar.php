
<!-- menu -->
<div id="menu-block" class="nav flex-item-7 hidden-md-down row">
  <ul class="col-12 d-flex flex-row align-items-stretch">

    <a href="#" class="open-tab-btn tab-1"><li class="row about py-3">
        <span class="icons col-2 p-0">
           <img class="icon on" src="/assets/ui/nav-planet.svg" alt="about"/>
          <img class="icon off" src="/assets/ui/nav.svg" alt="about"/>
        </span>
       <span class="text col-8 ml-1">
         <?php
         if ($lg == EN) echo ('<span class="en">About</span>');
         else echo ('<span class="fr">À Propos</span>');
         ?>
       </span>
    </li></a>
    <a href="#" class="open-tab-btn tab-3"><li class="row projects py-3">
        <span class="icons col-2 p-0">
           <img class="icon on" src="/assets/ui/nav-orbit.svg" alt="about"/>
          <img class="icon off" src="/assets/ui/nav.svg" alt="about"/>
        </span>
        <span class="text col-6 ml-1">
          <?php
          if ($lg == EN) echo ('<span class="en">Titles</span>');
          else echo ('<span class="fr">Titres</span>');
          ?>
        </span>
    </li></a>
   <a href="#" class="open-tab-btn tab-2"><li class="row road py-3">
     <span class="icons col-2 p-0">
        <img class="icon on" src="/assets/ui/nav-galaxy.svg" alt="about"/>
       <img class="icon off" src="/assets/ui/nav.svg" alt="about"/>
     </span>
     <span class="text col-8 ml-1">
       <?php
       if ($lg == EN) echo ('<span class="en">Behind the slug</span>');
       else echo ('<span class="fr">Présentation</span>');
       ?>
     </span>
 </li></a>
 <a href="#" class="open-tab-btn tab-4"><li class="row contact py-3">
     <span class="icons col-2 p-0">
        <img class="icon on" src="/assets/ui/nav-sun.svg" alt="about"/>
       <img class="icon off" src="/assets/ui/nav.svg" alt="about"/>
     </span>
     <span class="text col-6 ml-1">Contact</span>
 </li></a>

</ul>
</div> <!-- !menu -->
