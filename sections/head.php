<?php
       define("EN", 0);
       define("FR", 1);
       $lg = EN;
       if (isset($_GET['lg']) && $_GET['lg'] == "fr")
         $lg = FR;


  if ($lg == EN) {
?>
<title>Squishy Slug - Game Development Studio</title>
<meta name="og:title" property="og:title" content="Squishy Slug - Game Development Studio">
<meta name="description" content="SquishySlug is building games for Desktop and mobile platforms
 as well as Unity, CryEngine and Unreal Engine Extensions.">
<?php
  }
  else {
?>
<title>Squishy Slug - Game Development Studio</title>
<meta name="og:title" property="og:title" content="Squishy Slug - Game Development Studio">
<meta name="description" content="SquishySlug développe des jeux videos pour les plateformes
desktop et mobiles ainsi que des extensions pour le moteurs Unity, CryEngine et Unreal Engine.">
<?php
  }
?>
