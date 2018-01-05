<?php
$telephone = $_POST['uphone'];
$cubatura = $_POST['ucubatura'];
$objectWidth = $_POST['uobjectWidth'];
$objectHeight = $_POST['uobjectHeight'];
$objectDepth = $_POST['uobjectDepth'];
$chooseDeliver = $_POST['uchooseDeliver'];
$deliverText = $_POST['udeliverText'];
$instrumentNeed = $_POST['uinstrumentNeed'];
$glueNeed = $_POST['uglueNeed'];


$telephone = htmlspecialchars($telephone);
$cubatura = htmlspecialchars($cubatura);
$objectWidth = htmlspecialchars($objectWidth);
$objectHeight = htmlspecialchars($objectHeight);
$objectDepth = htmlspecialchars($objectDepth);
$chooseDeliver = htmlspecialchars($chooseDeliver);
$deliverText = htmlspecialchars($deliverText);
$instrumentNeed = htmlspecialchars($instrumentNeed);
$glueNeed = htmlspecialchars($glueNeed);

$telephone = urldecode($telephone);
$cubatura = urldecode($cubatura);
$objectWidth = urldecode($objectWidth);
$objectHeight = urldecode($objectHeight);
$objectDepth = urldecode($objectDepth);
$chooseDeliver = urldecode($chooseDeliver);
$deliverText = urldecode($deliverText);
$instrumentNeed = urldecode($instrumentNeed);
$glueNeed = urldecode($glueNeed);

$telephone = trim($telephone);
$cubatura = trim($cubatura);
$objectWidth = trim($objectWidth);
$objectHeight = trim($objectHeight);
$objectDepth = trim($objectDepth);
$chooseDeliver = trim($chooseDeliver);
$deliverText = trim($deliverText);
$instrumentNeed = trim($instrumentNeed);
$glueNeed = trim($glueNeed);

//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("gazobetonkrd@yandex.ru", "Заявка на газобетон. газобетон-краснодар.рф", "Телефон: ".$telephone."\n Кубатура: ".$cubatura."\n Длина: ".$objectWidth."\n Высота: ".$objectHeight."\n Ширина: ".$objectDepth."\n Способ доставки: ".$chooseDeliver."\n Адрес доставки: ".$deliverText."\n Инструмент: ".$instrumentNeed."\n Клей: ".$glueNeed,"From: gazobetonkrd@yandex.ru \r\n");

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