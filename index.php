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
   ?>


   <title>
      <? echo $firma_isim ?> | Anasayfa
   </title>
</head>
<style>
   /* preloader */
   .preloader {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #161616;
      z-index: 9999999;
      top: 0;
      left: 0;
   }

   .frame {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 400px;
      margin-top: -200px;
      margin-left: -200px;
      border-radius: 2px;
      background: #161616;
      color: #fff;
   }

   .center {
      position: absolute;
      width: 220px;
      height: 220px;
      top: 90px;
      left: 90px;
   }

   .dot-1 {
      position: absolute;
      z-index: 3;
      width: 30px;
      height: 30px;
      top: 95px;
      left: 95px;
      background: #fff;
      border-radius: 50%;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation: jump-jump-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
      animation: jump-jump-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
   }

   .dot-2 {
      position: absolute;
      z-index: 2;
      width: 60px;
      height: 60px;
      top: 80px;
      left: 80px;
      background: #fff;
      border-radius: 50%;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation: jump-jump-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
      animation: jump-jump-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
   }

   .dot-3 {
      position: absolute;
      z-index: 1;
      width: 90px;
      height: 90px;
      top: 65px;
      left: 65px;
      background: #fff;
      border-radius: 50%;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation: jump-jump-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
      animation: jump-jump-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
   }

   @-webkit-keyframes jump-jump-1 {

      0%,
      70% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   @keyframes jump-jump-1 {

      0%,
      70% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   @-webkit-keyframes jump-jump-2 {

      0%,
      40% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   @keyframes jump-jump-2 {

      0%,
      40% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   @-webkit-keyframes jump-jump-3 {

      0%,
      10% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   @keyframes jump-jump-3 {

      0%,
      10% {
         -webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
         -webkit-transform: scale(0);
         transform: scale(0);
      }

      100% {
         -webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
         -webkit-transform: scale(1);
         transform: scale(1);
      }
   }

   .over-top-i {
      position: fixed;
      right: 25px;
      bottom: 25px;
      z-index: 50;
      background-color: #161616;
      color: #ff7657;
      padding: 12px;
      font-size: 18px;
      line-height: 18px;
      border-radius: 50%;
      cursor: pointer;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-out;
      -o-transition: all 0.2s ease-out;
      -ms-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
   }
</style>
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

<body class="<? echo $font ?>" style="background-color:rgb(18, 18, 18);">
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
   <script>
      $(window).on('load', function() {
         $(".preloader").fadeOut("slow");
      });

      var btn = $('#topButton');
      $(window).scroll(function() {
         if ($(window).scrollTop() > 300) {
            btn.addClass('show');
         } else {
            btn.removeClass('show');
         }
      });

      btn.on('click', function(e) {
         e.preventDefault();
         $('html, body').animate({
            scrollTop: 0
         }, '300');
      });
   </script>
</body>
<? include 'modules/layouts/footer.php'; ?>
<? include 'modules/layouts/genel.php'; ?>

</html>