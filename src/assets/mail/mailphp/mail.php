<?
require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                   // send via SMTP
$mail->Host     = "mail.alanadi.com"; // SMTP servers
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "info@alanadi.com";  // SMTP username
$mail->Password = "parola"; // SMTP password

$mail->From     = "info@alanadi.com"; // smtp kullan�c� ad�n�z ile ayn� olmal�
$mail->Fromname = "giden ismi";
$mail->AddAddress("info@alanadi.com","Ornek Isim");
$mail->Subject  =  $_POST['baslik'];
$mail->Body     =  implode("    ",$_POST);

if(!$mail->Send())
{
   echo "Mesaj G�nderilemedi <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Mesaj G�nderildi";


?>
