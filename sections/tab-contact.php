<?php
if ($lg == EN) echo'<h2 class="mt-5 en">Contact</h2>';
else echo '<h2 class="mt-5 fr mb-4">Contacter squishySlug</h2>';
?>

<?php
if ($lg == EN) echo'<p class="en">Write something nice</p>';
?>
<form id="contact-form" action="#" method="post">
  <div id="send-mail-error" class="alert alert-danger col-12" role="alert">
    <?php
    if ($lg == EN) echo'<span class="en">An error occured while attempting to send email</span>';
    else echo '<span class="fr">L\'email n\'a pas pu être envoyé.</span>';
    ?>
  </div>
  <div id="send-mail-success" class="alert alert-success col-12" role="alert">
    <?php
    if ($lg == EN) echo'<span class="en">Your email was sent.</span>';
    else echo '<span class="fr">L\'email a été envoyé.</span>';
    ?>
  </div>

  <div class="row pl-3">
    <div class="alert alert-danger py-1 mb-1 col-7 col-lg-8 name" role="alert">
     <?php
     if ($lg == EN) echo'<span class="en">The name field is mandatory</span>';
     else echo '<span class="fr">Le champ "nom" n\'est pas optionnel.</span>';
     ?>
   </div>
   <?php
   if ($lg == EN) echo'<input type="text" name="name-en" class="mb-2 col-7 col-lg-5  en name" placeholder="Name"/>';
   else echo '<input type="text" name="name-fr" class="mb-2 col-7 col-lg-5  fr name " placeholder="Nom"/>';
   ?>
</div>
 <div class="row pl-3">
   <?php
   if ($lg == EN) echo'<input type="text" name="website-en" class="mb-2 col-7 col-lg-5  optional en website" placeholder="[Website]"/>';
   else echo '<input type="text" name="website-fr" class="mb-2 col-7 col-lg-5  optional fr website" placeholder="[Site Web]"/>';
   ?>
 </div>
 <div class="row pl-3">
   <div class="alert alert-danger py-1 mb-1 col-7 col-lg-8 email" role="alert">
    <?php
    if ($lg == EN) echo'<span class="en">This value does not qualify as an email address</span>';
    else echo '<span class="fr">Ceci n\'est pas une addresse e-mail valide.</span>';
    ?>
  </div>
   <input type="email" name="email" class="mb-2 col-7 col-lg-5  email" placeholder="Email"/>
   <input id="email2" type="text" name="email" class="mb-2 col-7 col-lg-5  email" placeholder="Email"/>
 </div>
 <div class="row pl-3">
 <div class="alert alert-danger py-1 mb-1 col-7 col-lg-8 message" role="alert">
  <?php
  if ($lg == EN) echo'<span class="en">I said, "Write something nice".</span>';
  else echo '<span class="fr">Veuillez écrire un message.</span>';
  ?>
</div>
   <?php
   if ($lg == EN) echo'<textarea placeholder="Your message here..." name="msg-en" resize="none" class="col-7 col-lg-5  en"></textarea>';
   else echo '<textarea placeholder="Votre message ici..." name="msg-fr" resize="none" class="col-7 col-lg-5 fr"></textarea>';
   ?>
    <button type="submit" class="px-0 py-0 col-3">
    <img src="/assets/vectors/submit.svg" width="150px" alt="Submit"/>
  </button>
</div>
</form>
