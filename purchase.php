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

  $tourOptions = array(
    array('nimLi','Nim Li Punit Mayan ruins'),
    array('spiceFarm','Spice Farm tropical botanical gardens'),
    array('jungleTube','South Staan Creek jungle river tubing'),
    array('waterfallSightseeing','Waterfall sightseeing'),
    array('lubaantun','Lubaantun Mayan Ruins'),
    array('inlandBlueHole','Inland Blue Hole'),
    array('blueHoleFlyover','Great Blue Hole flyover'),
    array('southwaterSnorkelHalf','Southwater Caye snorkeling (full day)'),
    array('southwaterSnorkelFull','Southwater Caye snorkeling (half day)'),
    array('southWaterFishing','Southwater Caye fishing'),
    array('atmCave','ATM Cave adventure'),
    array('caveTubing','Cave Tubing'),
    array('twinCities','Twin Cities Mayan ruins'),
    array('ziplining','Jungle Ziplining'),
    array('zoo','Belize Zoo')
  );

  $checkedTours = "";
  foreach($tourOptions as $tour){
    if(!empty($_POST[$tour[0]]))
    {
      $checkedTours = $checkedTours . $tour[1] . '<br>';
    }
  }

  $messageBody = 'Dear ' .$_POST['first_name'].' ' .$_POST['last_name'] .',<br>'
              . 'Congrats on your booking on '.$_POST['month'] .'/'.$_POST['day'].'/20' .$_POST['year'] . '! We are very excited to show you the wonders of Belize! <br>'
              .$checkedTours;

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
