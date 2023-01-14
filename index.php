<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <?php
   $firma = 'cartoon'; // kod içinde geçecek firma ismi 
   $firma_isim = 'cartoon'; // Text olarak döndürülecek firma ismi
   $primaryColor = '#121212'; // Tasarımın biricil baskın rengi
   //$primaryColorHover = '#1a8b8d'; //Birincil baskın rengin hover hali    
   $secondaryColor = '#ff7657'; //Tasarımın ikincil baskın rengi
   $titleColor = '#161616'; //Title rengi
   $textColor = '#606988'; //Metin rengi
   $mail = 'info@cartoon.com'; //Mail Adresi
   $phone = '+90543641726'; // Telefon Numarası
   $font = 'quicksand'; // Genel Font Classı
   $radius = '5px'; // Genel Radius oranı
   $adress = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, exercitationem!'; // Adres
   $darkModePrimaryColor = '#fff';
   $textColor = '#111'
   ?>
   <title>
      <? echo $firma_isim ?> | Anasayfa
   </title>
   <script src="https://kit.fontawesome.com/7cf8c09f87.js" crossorigin="anonymous"></script>
</head>

<div id="loading" class="preloader">
   <div class="frame">
      <div class="center">
         <div class="dot-1"></div>
         <div class="dot-2"></div>
         <div class="dot-3"></div>
      </div>
   </div>
</div>
<!-- Top Button -->
<i id="topButton" class="icon icon-up4 over-top-i" style="opacity:0;"></i>
<!-- Top Button End -->

<? include 'assets/assets.php'; ?>
<? include 'modules/layouts/header.php'; ?>

<body class="<? echo $font ?>">
   <main>
      <content class="block pos-r z5 owh-x block owh-y">
         <? include 'modules/banner.php'; ?>
         <? include 'modules/feature.php'; ?>
         <? include 'modules/characters.php'; ?>
         <? include 'modules/gallery.php'; ?>
         <? include 'modules/products.php'; ?>
         <? include 'modules/team.php'; ?>
         <? include 'modules/prices.php'; ?>
         <? include 'modules/comments.php'; ?>
         <? include 'modules/contact.php'; ?>
         <? include 'modules/blogs.php'; ?>
         <? include 'modules/subscribe.php'; ?>
      </content>
   </main>
</body>
<? include 'modules/layouts/footer.php'; ?>
<? include 'modules/layouts/genel.php'; ?>

</html>