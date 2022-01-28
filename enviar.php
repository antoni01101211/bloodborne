<?php

$idname = $_POST['idpersona'];
$name = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$edad = $_POST['edad'];
$genero = $_POST['genero'];
$musica = $_POST['musica'];
$jefes = $_POST['jefes'];
$texto = $_POST['texto'];

$header = 'from: '. $email . "\r\n";
$header .="X-Mailer:PHP/" . phpversion() . "\r\n";
$header .="Mime-Version: 1.0 \r\n";
$header .="Content-Type: text/plain";

$message = "este mensaje fue enviado por:" . $name . "\r\n";
$message .="su e-mail es: " . $email . "\r\n";
$message .="edad:" . $edad . "\r\n";
$message .="mensaje:" . $_POST ['message'] . "\r\n";

$para = 'antonio_1pv1@hotmail.com';
$asunto = 'Prueba';

mail($para, $asunto, utf8_decode($message, $header));
header("Location:sugerencias.html");









?>