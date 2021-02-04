<?php



if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $lastName = $_POST['lastname'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];


    $mailTo = "info@andreaiglio.com";
    $headers = "From: ". $mailFrom . " " . $name . " " . $lastName ; 
    $txt = "You have received an e-mail from " . " " . $name . " " . $lastName . ".\n\n" . $message;


    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.php?mailsend");

   
}


?> 
