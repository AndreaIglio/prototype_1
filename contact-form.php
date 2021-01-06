<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];






$to = "andrea.iglio@gmail.com";

$email_subject = 'New form submission';

$email_body = "User name: $name.\n".
              "User email: $visitor_email.\n".
              "User message: $message.\n";


$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

echo "Thank You!";



?>