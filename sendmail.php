<?php
$name       = "Chaitanya"; 
$email       = "girichaitanya11@gmail.com"; 
$subject    = "You got a message from your portfolio"; 
$message    = "Laal Salam!"; 
$to   		= 'girichaitanya11@gmail.com';
 $mailBody="Name: $name\n Email: $email\n\n$message"; 

 mail($to, $subject, $mailBody, "From: $name <$email>");
?>
