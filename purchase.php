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

  $checkedTours = "Your party of ".$_POST['partySize'] . " has booked the following tours: <br>";
  foreach($tourOptions as $tour){
    if(!empty($_POST[$tour[0]]))
    {
      $checkedTours = $checkedTours . '<div style="margin-left:15px;font-size:18;color: rgb(23,123,211);">' . $tour[1] . '</div>';
    }
  }
  if(empty($_POST['totalUSD']){echo 'cannot find html element for total usd';}
  else {echo($_POST['totalUSD']);}
  $tourDeposit = strval((float)(floatval($_POST['totalUSD'])/10));
  $remainderCost = strval(floatval($_POST['totalUSD'])-floatval($tourDeposit));
  $remainderBZE = strval(floatval($remainderCost/2));

  $messageBody = '<div style="font-size:18;color: #222222;">Dear ' .$_POST['first_name'].' ' .$_POST['last_name'] .',<br>'
              . 'Congrats on your booking on '.$_POST['month'] .'/'.$_POST['day'].'/20' .$_POST['year'] . '! We are very excited to show you the wonders of Belize! <br>'
              .$checkedTours
              . '<br>' . $_POST['totalUSD'] . 'You have payed a nonrefundable tour deposit of ' . $tourDeposit . ' through Paypal. The remainder of ' .$remainderCost . 'USD or '.$remainderBZE .'Belizian Dollars is to be payed to your tour guide in cash.'
              . '</div>';

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
