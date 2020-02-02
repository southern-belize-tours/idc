<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "ianfeekes@gmail.com";
$subject = "contact form";
$mailheader = "From: $email \r\n";
//mail($recipient, $subject, $formcontent, $mailheader) or die("Error: failed to send.");
mail("ianfeekes@gmail.com","hi","message","headers") or die("fuck"); 
echo "Thanks. Email sent";
?>
