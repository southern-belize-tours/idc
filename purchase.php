<?php

//if(isset($_POST['email'])){
require_once('php-mailer/PHPMailerAutoload.php');
echo("emailing...");
$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth=true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465'; //Can also be 587
$mail->Username = 'SouthernBelizeTours@gmail.com'; //change this later
$mail->Password = 'eaglei`1pwcs!!';
$mail->SetFrom('no-reply@southern-belize-tours.com');
$mail->Subject = 'Booking Confirmed!';
$mail->Body = 'Congrats on your booking! We are very excited to show you the wonders of Belize!';
$mail->isHTML();
$mail->AddAddress('ifeekes@ucsc.edu');    //Add addresses for all necessary people eg julian and whoever confirmed it
$mail->AddAddress('ianfeekes@gmail.com');

$mail->SMTPDebug = 2; //This is a debugging line. Delete it for release.
if(!$mail->Send()){
  echo 'message was not send.';
}
else echo 'message sent successfully.';
//}

//This is a debugging line. Delete it for release.
$mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";};

 ?>
