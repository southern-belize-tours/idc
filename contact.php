
<?php


if($_POST["submit"]) {
    $recipient="ianfeekes@gmail.com";
    $subject="Form to email message";
    /*$sender=$_POST["sender"];*/ 
    $sender="ianfeekes"; 
   /* $senderEmail=$_POST["senderEmail"];*/ 
    $senderEmail="ianfeekes@gmail.com"; 
    $message=$_POST["message"];
    /*$mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
    */ 
    $mailBody = "this is a temp body"; 
    echo("This is some dumb script running"); 
    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?> 