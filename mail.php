<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");


//$name = $_POST['name'];
//$email = $_POST['email'];
//$message = $_POST['message'];
$message = 'hello';
//$formcontent="From: $name \n Message: $message";
//$recipient = "ianfeekes@gmail.com";
//$subject = "contact form";
//$mailheader = "From: $email \r\n";
//mail($recipient, $subject, $formcontent, $mailheader) or die("Error: failed to send.");
mail('ianfeekes@gmail.com','subject',$message); //or die("fuck");
echo "Thanks. Email sent";
?>
