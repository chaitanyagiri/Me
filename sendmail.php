<?php
$name       = $_POST['name']; 
$from       = $_POST['email']; 
$subject    = "Portfolio"; 
$message    = $_POST['message']; 
$to   		= 'girichaitanya11@gmail.com';
$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();
mail($to, $subject, $message) or die("Failure");
?>