<?php

//if(isset($_POST['email'])){
  require_once('php-mailer/PHPMailerAutoload.php');
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

  /*$tourOptions = array('nimLi','spiceFarm','jungleTube','waterfallSightseeing','lubaantun',
        'inlandBlueHole','blueHoleFlyover','southwaterSnorkelHalf','southwaterSnorkelFull',
        'southWaterFishing','atmCave','caveTubing','twinCities','ziplining','zoo');
  $checkedTours = "";
  foreach($tourOptions as $tour){
    if(!empty($_POST[$tour]))
    {
      $checkedTours.=$tour . '<br';
    }
  } */

  $messageBody = 'Dear ' .$_POST['first_name'].' ' .$_POST['last_name'] .',<br>'
              . 'Congrats on your booking on '.$_POST['month'] .'/'.$_POST['day'].'/20' .$_POST['year'] . '! We are very excited to show you the wonders of Belize! <br>';

  $mail->Body = $messageBody;
  $mail->isHTML();
  $mail->AddAddress('ifeekes@ucsc.edu');    //Add addresses for all necessary people eg julian and whoever confirmed it
  //$mail->AddAddress('ianfeekes@gmail.com');
  $mail->AddAddress($_POST['email']);       //This line should be for the user address


  $mail->SMTPDebug = 2; //This is a debugging line. Delete it for release.
  if(!$mail->Send()){
    echo 'message was not send.';
  }
  else echo 'message sent successfully.';
//}

//This is a debugging line. Delete it for release.
$mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";};

 ?>
