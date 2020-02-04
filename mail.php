<?php
//error_reporting(-1);
//ini_set('display_errors', 'On');
//set_error_handler("var_dump");


//$name = $_POST['name'];
//$email = $_POST['email'];
//$message = $_POST['message'];
$message = 'hello';
$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$header .= 'From: Example <noreply@example.com>' . "\r\n";
$subject = 'this is the subject';
$receiver = 'ifeekes@ucsc.edu';

//$formcontent="From: $name \n Message: $message";
//$recipient = "ianfeekes@gmail.com";
//$subject = "contact form";
//$mailheader = "From: $email \r\n";
//mail($recipient, $subject, $formcontent, $mailheader) or die("Error: failed to send.");
if (mail($receiver,$subject,$message,$header)===TRUE){
  echo "Thanks. Email sent";
}
else{
  echo "We're sorry....";
}
?>
