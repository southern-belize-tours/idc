<?php
require 'vendor/autoload.php';

$request_body = json_decode('{
"personalizations": [
  {
    "to": [
      {
        "email": "ianfeekes@gmail.com"
      }
    ],
    "subject": "Hello World from the SendGrid PHP Library!"
  }
],
"from": {
  "email": "ifeekes@ucsc.edu"
},
"content": [
  {
    "type": "text/plain",
    "value": "Hello, Email!"
  }
]
}');

$apiKey = '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';
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($request_body);
echo $response->statusCode();
echo "<br>";
echo $response->body();
echo "<br>";
echo $response->headers();
?>
