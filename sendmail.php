<?php
$name       = $_POST['name']; 
$email       = $_POST['email']; 
$subject    = "You got a message from your portfolio"; 
$message    = $_POST['message']; 
$to   		= 'girichaitanya11@gmail.com';
 $mailBody="Name: $name\n Email: $email\n\n$message"; 

 mail($to, $subject, $mailBody, "From: $name <$email>");
?>
