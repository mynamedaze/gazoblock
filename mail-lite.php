<?php
$name = $_POST['uname'];
$tel = $_POST['utel'];


$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);

//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("gazobetonkrd@yandex.ru", "Заявка на газобетон LITE. газобетон-краснодар.рф", "Имя:".$name."\n Телефон: ".$tel,"From: gazobetonkrd@yandex.ru \r\n");

//$post_data = array(); mobileexpress@yandex.ru

//if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
//if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
//$post_data['site'] = 'iphone-express.ru';

//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
//$output = curl_exec($curl);
?>