<?php

require 'vendor/autoload.php';

$email='ianfeekes@gmail.com';
$senderEmail='ifeekes@ucsc.edu';
$name='placencia action tours';
$body='Congrats on your reservation';
$subject='test email';

$headers=array(
  "Authorization: Bearer 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",
  "Content-Type: application/json"
);
$data=array(
  "personalizations"=>array(
    array(
      "to"=> array(
        array(
          "email"=> $email,
          "name"=> $name
        )
      )
    )
  ),
  "from"=>array(
    "email"=> $senderEmail
  ),
  "subject"=>$subject,
  "content"=>array(
    array(
      "type"=>"text/html",
      "value"=>$body
    )
  )
);

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,"https://api.sendgrid.com/v3/mail/send");
curl_setopt($ch,CURLOPT_POST, 1);
curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($data));
curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
$response = curl_execute($ch);
curl_close($ch);

echo $response;

/*if (mail($receiver,$subject,$message,$header)===TRUE){
  echo "Thanks. Email sent";
}
else{
  echo "We're sorry....";
}*/
?>
