<?php
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
$mail->Subject = 'We have received your message!';

$tourOptions = array(
  array('nimLi','Nim Li Punit Mayan ruins'),
  array('spiceFarm','Spice Farm tropical botanical gardens'),
  array('jungleTube','South Staan Creek jungle river tubing'),
  array('waterfallSightseeing','Waterfall sightseeing'),
  array('lubaantun','Lubaantun Mayan Ruins'),
  array('inlandBlueHole','Inland Blue Hole'),
  array('blueHoleFlyover','Great Blue Hole Flyover'),
  array('southwaterSnorkelHalf','Southwater Caye snorkeling (full day)'),
  array('southwaterSnorkelFull','Southwater Caye snorkeling (half day)'),
  array('southwaterFishing','Southwater Caye fishing'),
  array('atmCave','ATM Cave adventure'),
  array('caveTubing','Cave Tubing'),
  array('twinCities','Twin Cities Mayan ruins'),
  array('ziplining','Jungle Ziplining'),
  array('zoo','Belize Zoo'),
  array('boat','Caribbean Boat Charter')
);

$checkedTours = "Your party of ".$_POST['partySize'] . " is interested in the following tours: <div style='margin-top: 10px;margin-bottom: 10px;'>";
foreach($tourOptions as $tour){
  if(!empty($_POST[$tour[0]]))
  {
    $checkedTours = $checkedTours . '<div style="margin-left:15px;margin-top: 3px;margin-bottom: 3px;font-size:18;color: rgb(23,123,211);">' . $tour[1] . '</div>';
  }
}
$checkedTours = $checkedTours . '</div>';

$messageBody =
            '<div style="background-color:#1d3d75;display:inline-block;text-align:center;width:100%;padding-top:10px;padding-bottom:5px;">'
            .'<img src="https://southern-belize-tours.com/images/companyLogo4.png" width=110px height=110px>'
            .'</div>'
            .'<div style="background-color:#fafafa;padding:15px;line-height:25px;">'
            .'<div style="font-size:18;color:black;">' .$_POST['first_name'].' ' .$_POST['last_name'] .',<br>'
            .'You have contacted us with a question about booking on '.$_POST['month'] .'/'.$_POST['day'].'/20' .$_POST['year']
            .'.<br> We will respond shortly, and are eager to show you the wonders of Belize! <br>'
            .$checkedTours
            .'The message that you left for us is: '
            .'<div style="font-size: 18;background-color: #ffffff; color: #505966; margin-top: 10px;margin-bottom : 10px;margin-left: 15px;margin-right: 15px;padding:7px;border-style:solid;border-width:2px;border-color: #ffde7d;border-radius:10px;">'.$_POST['txt'].'</div>'
            .'We will get back to you at your email '.$_POST['email'].' as soon as we can.'
            .'<br> If you have any more questions please contact us at placencia.action.tours@outlook.com'
            .'</div>'
            .'</div>';

            $mail->Body = $messageBody;
            $mail->isHTML();
            $mail->AddAddress('placencia.action.tours@outlook.com');    //Add addresses for all necessary people eg julian and whoever confirmed it
            //$mail->AddAddress('ianfeekes@gmail.com');
            $mail->AddAddress($_POST['email']);       //This line should be for the user address

            $mail->Send();
            header('Location: thankYou.html');
            exit;

            /*$mail->SMTPDebug = 2; //This is a debugging line. Delete it for release.
            if(!$mail->Send()){
              echo 'message was not send.';
            }
            else echo 'message sent successfully.';
            //}

            //This is a debugging line. Delete it for release.
            $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";};*/

 ?>
