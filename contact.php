
<?php

if(isset($_POST['submit']))
{
    $name = $_POST['sender'];
    $email = $_POST['senderEmail'];
    $subject = "temp"; 

    $txt = $_POST['txt']; 

    $message = "this is a temp message from".$name.".\n\n".$txt; 
    $mailTo = "ifeekes@ucsc.edu"; 
    $headers = "From: ".$email;


    mail($email, $subject, $txt, $headers ); 
    header("Location: contact.php?mailsend"); 
}


?> 