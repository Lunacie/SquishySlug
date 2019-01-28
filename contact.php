<?php
  function returnError($str) {
    echo ("{'success' : false, 'message': '".$str."'}");
    return -1;
  }

  if (!isset($_POST) || !isset($_POST['data']))
    return returnError("missing data");
  $data = json_decode($_POST['data']);
  if (!$data)
    return returnError("decode error");

  if (!isset($data->name) ||
      !isset($data->email) ||
      !isset($data->message))
    return returnError("missing field");
  if (!isset($data->website))
    $data->website = "";

  $name = htmlspecialchars($data->name);
  $name = urldecode($name);
  $email = htmlspecialchars($data->email);
  $email = urldecode($email);
  $message = htmlspecialchars($data->message);
  $message = urldecode($message);
  $website = htmlspecialchars($data->website);
  $website = urldecode($website);

  $subject = "New message SquishySlug";
  $headers = "From: no-reply@squishySlug.com" . "\r\n";

  $msg = "Nom : " . $name . "\n";
  $msg .= "Mail : " . $email . "\n";
  $msg .= "Website : " . $website . "\n\n";
  $msg .= $message . "\n";

  $rc = mail("contact@squishyslug.com", $subject, $msg, $headers);
  if ($rc)
    echo ("{'success' : true}");
  else
    return returnError("Couldn't send email");
?>
