<?php
       define("EN", 0);
       define("FR", 1);
       $lg = EN;
       if (isset($_GET['lg']) && $_GET['lg'] == "fr")
         $lg = FR;


  if ($lg == EN) {
?>
<title>Squishy Slug - Software Engineering | Game Development</title>
<meta name="og:title" property="og:title" content="Squishy Slug - Software Engineering | Indie Game Development">
<meta name="description" content="SquishySlug is building software solutions
 by putting its wildly creative and analytical thinking to the test.<br/>
 Originality at the service of those who actually want to stand out">
<?php
  }
  else {
?>
<title>Squishy Slug - Ing&eacute;nierie logicielle | Indie Game Development</title>
<meta name="og:title" property="og:title" content="Squishy Slug - Ing�nierie logicielle | Indie Game Development">
<meta name="description" content="SquishySlug implémente des solutions logicielles en mettant
 tous les jours à l'épreuve son esprit créatif et analytique.<br/>
 L'originalité au service de ceux qui souhaitent réellement se démarquer.">
<?php
  }
?>
