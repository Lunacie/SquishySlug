
function Contact() {

  this._e_email = false;
  this._e_name = false;
  this._e_website = false;
  this._e_message = false;
  this._sent = false;

  this.init = function() {
    $("#contact-form").submit(this._submit);
    $("#contact-form button").click(this._submit);

    $("#contact-form input.email").keyup(this._inputChangeEmail);
    $("#contact-form input.name").keyup(this._inputChangeName);
    $("#contact-form input.website").keyup(this._inputChangeWebsite);
    $("#contact-form textarea").keyup(this._inputChangeMessage).change(this._inputChangeMessage);
  }

  this._inputChangeEmail = function() {
    let data = contact_tab._checkEmail();
   $("#tab-contact .alert.email").hide();
    if (contact_tab._e_email)
     $("#tab-contact .alert.email").show();
    return data;
  }
  this._inputChangeName = function() {
    let data = contact_tab._checkName();
   $("#tab-contact .alert.name").hide();
    if (contact_tab._e_name)
     $("#tab-contact .alert.name").show();
    return data;
  }
  this._inputChangeWebsite = function() {
    let data = contact_tab._checkWebsite();
   $("#tab-contact .alert.website").hide();
    if (contact_tab._e_website)
     $("#tab-contact .alert.website").show();
    return data;
  }
  this._inputChangeMessage = function() {
    let data = contact_tab._checkMessage();
   $("#tab-contact .alert.message").hide();
    if (contact_tab._e_message)
     $("#tab-contact .alert.message").show();
    return data;
  }

  this._submit = function(e) {
    e.preventDefault();
    let data = contact_tab._formCheck();
    if (!data)
      return;

    $.ajax({
      'url':'/contact.php',
      'method':'POST',
      'ContentType': 'application/json',
      'data': {'data' : JSON.stringify(data)},
       'success': function(res) {
       res = JSON.parse(res);
       if (res.success && res.success == true) {
        $('#send-mail-success').show();
        contact_tab._sent = true;
      }
       else
         $('#send-mail-error').show();
      },
     'error': function(res) {
        $('#send-mail-error').show();
      }});
  }

  this._formCheck = function() {
    if (contact_tab._sent == true)
      return null;
    if ($("email2").val())
      return null;

    let email = contact_tab._inputChangeEmail();
    let name = contact_tab._inputChangeName();
    let message = contact_tab._inputChangeMessage();
    let website = contact_tab._inputChangeWebsite();

   let data =  {
     email : email,
     website : website,
     message : message,
     name : name
   };

   if (!contact_tab._e_name &&
       !contact_tab._e_email &&
       !contact_tab._e_message)
    return data;
  else
    return null;
 }

  this._checkMessage = function(){
    contact_tab._e_message = false;
     let message = $("#contact-form textarea[message='msg-fr']").val();
     message =  message ? message : $("#contact-form textarea[name='msg-en']").val();
     if (!message)
        contact_tab._e_message = true;
     message = escape(message);
     return message;
  }
  this._checkWebsite = function(){
     let website = $("#contact-form input[name='website-fr']").val();
     website = escape(website);
     return website;
  }
  this._checkName = function(){
     contact_tab._e_name = false;
     let name = $("#contact-form input[name='name-fr']").val();
     name =  name ? name : $("#contact-form input[name='name-en']").val();
     if (!name)
        contact_tab._e_name = true;
     name = escape(name);
     return name;
  }

  this._checkEmail = function(){
     contact_tab._e_email = false;
     let email = $("#contact-form input[type='email']").val();
     let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!reg.test(String(email).toLowerCase()))
       contact_tab._e_email = true;
     else
       email = escape(email);
     return email;
  }

   this._showErrors = function() {
     if (this._e_email)
      $("#tab-contact .alert.email").show();
     if (messathis._e_message)
      $("#tab-contact .alert.message").show();
     if (this._e_name)
      $("#tab-contact .alert.name").show();
     if (this._e_website)
      $("#tab-contact .alert.website").show();
   }

  this.update = function() {
  }
}

let contact_tab = new Contact();
