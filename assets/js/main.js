jQuery(document).ready(function($) {
	/* Hesaplamalar */
    var windowh = $(window).outerHeight(); // Window Yüksekliği
    var windoww = $(window).width(); // Window Genişliği
    var windowh = $(window).height(); // Window Yüksekliği
    var headerh = $('header').outerHeight(); // Header Yüksekliği
    var headerToph = $('header .top').outerHeight(); //
    var footerh = $('footer').outerHeight(); //
    var bannerh = $('#manset').outerHeight(); //


    /* Hesaplamalar End */

    ////////////////// Classlar //////////////////

    /*----- Window Height -----*/
    //Windowh clasını alan öğeler, aktif olan monitör yüksekliğini alır.

    if( jQuery(".windowh-min").hasClass('windowh-min')){

      $('.windowh-min').css({
        'height': windowh + 'px',
      });

    }
    /*----- Window Height End */
    /*----- Window Height + Scroll -----*/
    $('.windowh-s').css({
      'height': windowh + 'px',
      'overflow-y':'auto',
    });

    /* === FooterFixed === */
    $('.footerFixed').css({
      'min-height': (windowh-(headerh+footerh)) + 'px',
    });
    /* === FooterFixed End === */
    /* === Content Fİxed === */
    $('.contentFixed').css({
      'min-height': (windowh-headerh) + 'px',
    });


    /* === Content Fİxed End === */
    /*----- Window Height + Scroll End -----*/
    /* ========== Bubble Box Kapatma ========== */
    $('.closeBox').click(function(){
      $('.bubbleBox ').hide().removeClass('op10');
      setTimeout(function () {
        $('.bubbleBox ').removeClass('center-h');
      }, 500);
    });
    /* ========== Bubble Box Kapatma End ========== */


    var kurumsalItem = $('.bottom .kurumsalItem').outerHeight();
    $('.bottom .kurumsalItem').css({
      'bottom': '-' + (kurumsalItem-46) + 'px',
    });



     /* Bootstrap Menü Hover Open Settings */
    /* Dropdown */
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
    /* Dropdown End */
    /* Dropup */
    $('ul.nav li.dropup').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
    /* Dropup End */
    /* Bootstrap Menü Hover Open Settings End */
    /* Default Navbar */
    var headerrowh = $('header .row').outerHeight(); //

    $('nav#default-nav #nav-toggle').click(function(){
       //$('nav#default-nav').toggleClass('h100');
       //$('nav#default-nav .default-navbar').toggleClass('mt0');
       var mainulh = $('nav#default-nav ul.mainul').outerHeight(); //
       $('nav#default-nav').css({
         'height': mainulh + 'px',
       });
       $('.genelmaske').fadeIn();
     });
    $('.genelmaske').click(function(){
      $('nav#default-nav').attr('style', ' ');
      $(this).fadeOut();
    });

    $('.subcontent').css({
      'top': headerrowh +'px',
    });

    $('.subcontent-mega').css({
      'top': headerrowh +'px',
    });

    $('.dropcontent').hover(function() {
        var subh = $('.subcontent ul',this).outerHeight(); //
        $('.subcontent',this).css({
          'height': subh +'px',
        });
      }, function() {
        $('.subcontent',this).css({
          'height': '0px',
        });
      });

    $('.dropcontent-mega').hover(function() {
        var submegah = $('.subcontent-mega ul',this).outerHeight(); //
        $('.subcontent-mega',this).css({
          'height': submegah +'px',
        });
        $('body').addClass('owh');
        $('header').toggleClass('z1 z11');
        $('.genelmaske').fadeIn();
      }, function() {
        $('.subcontent-mega',this).css({
          'height': '0px',
        });
        $('body').removeClass('owh');
        $('header').toggleClass('z1 z11');
        $('.genelmaske').fadeOut('fast');
      });

    if (screen.width < 992) {

      $('.dropcontent').click(function(){
         var dropcontenth = $('.subcontent ul',this).outerHeight(); //
         var mainulh = $('nav#default-nav ul.mainul').outerHeight(); //

         $('nav#default-nav').css({
           'height': (mainulh + dropcontenth) + 'px',
         });

       });

      $('.dropcontent-mega').click(function(){
        $('.subcontent-mega',this).toggleClass('owy-s');
        $('.subcontent-mega',this).css({
          'height':'80vh',
          'z-index':'50',
        });
      });
    }
    /* Default Navbar End */
   /* ========== Yeni Nesil Menü ========== */
      $('.drop').hover(function(){
        var subcontenth = $('.sub-content',this).outerHeight(); //
        var toggleh = $('.toggle',this).outerHeight(); //
        if (screen.width > 992) {
          var imgContenth = $('.imgContent').height();  
          $('.pushTop').css({
            'marginBottom': '+' + imgContenth + 'px',
          });
        }
        $('.content').addClass('gray');
        $('#odeme1').addClass('gray');
        $('.toggle').removeClass('active');
        $(this).find('.toggle').addClass('active');
        $(this).find('.sub').css({
          'height': (subcontenth) + 'px',
          'top': toggleh + 'px',
        });

      }, function(){
        $(this).find('.sub').css({
          'height': '0px',
        });
        $('.content').removeClass('gray');
        $('#odeme1').removeClass('gray');
        $('.toggle').removeClass('active');
      });
      if (screen.width > 992) {
        var imgContenth = $('.imgContent').height();  
        $('.pushTop').css({
          'marginBottom': '+' + imgContenth + 'px',
        });
      }
    /* ========== Yeni Nesil Menü End ========== */
	  /* ===== Placeholder ===== */
	  $('.inputBox').click(function(){
	    $(this).find('.placeholder').hide();
	    $(this).find('.textInput').focus();
	  });
	  /* ===== Placeholder End ===== */
    /* ========== MiniSepet Açıp Kapatma ========== */
  $('.basket-toggle').click(function(){
    $('header .closeBasket').fadeIn();
    $('#minisepet').addClass('mr0 open');
    $('#closeToggle').fadeIn();
    $('body').addClass('owh');
    $('.account-toggle').removeClass('active');
    $('#accountline').removeClass('pt10 pb10').attr('style',' ');
    $('body').removeClass('accountOn');
    $('main').addClass('gray');
    $('header .nav').removeClass('ml0');
    $('.filterArea').removeClass('mr0');
  });
  $('#closeToggle').click(function(){
    $('header .closeBasket').fadeOut();
    $('#minisepet').removeClass('mr0 open');
    $('.filtercontent').removeClass('ml0');
    $(this).fadeOut();
    $('body').removeClass('owh');
    $('.filterContent').removeClass('mr0');
    $('main').removeClass('gray');
  });
  $('.close-toggle').click(function(){
    $('header .closeBasket').fadeOut();
    $('#minisepet').removeClass('mr0 open');
    $('.filtercontent').removeClass('ml0');
    $('#closeToggle').fadeOut();
    $('body').removeClass('owh');
    $('.filterContent').removeClass('mr0');
    $('main').removeClass('gray');
  });
  $('header .closeBasket').click(function(){
    $('#minisepet').removeClass('mr0 open');
    $(this).fadeOut();
    $('body').removeClass('owh');
    $('.filterContent').removeClass('mr0');
    $('main').removeClass('gray');
  });
  /* ========== MiniSepet Açıp Kapatma End ========== */
  /* ===== Header Account ===== */
  $('.account-toggle').click(function(){
    var accountlineh = $('#accountline .container').outerHeight(); //
    $(this).addClass('active');
    $('#accountline').addClass('pt10 pb10').css({
      'height': (accountlineh)+20  + 'px',
    });
    $('header .navContent').removeClass('ml0');
    $('#closeToggle').fadeOut();
    $('body').addClass('accountOn');
    $('header .nav').removeClass('ml0');
    $('#minisepet').removeClass('mr0');
    //$('header').removeClass('lt0').addClass('lt80');
  });
  $('.accountline-close').click(function(){
    $('.account-toggle').removeClass('active');
    $('#accountline').removeClass('pt10 pb10').attr('style',' ');
    $('body').removeClass('accountOn');
    $('.content').removeClass('gray');
    $('header').addClass('lt0').removeClass('lt80');
  });

  $('body').on( "click", function() {
     if( jQuery('body').hasClass('accountOn')){
       
      }
   });
  /* ===== Header Account End ===== */
  /* ===== Mobil Menü Açma ===== */
  $('.menuToggle').click(function(){
    $('header .mobileMenu').addClass('ml0');
    $('#closeToggle').fadeIn();
  });
  /* ===== Mobil Menü Açma End ===== */
  /* ===== Close Toggle ===== */
  $('#closeToggle').click(function(){
    $('header .mobileMenu').removeClass('ml0');
    $('#closeToggle').hide();
  });
  /* ===== Close Toggle End ===== */
  /* ===== Ürün Kartı ===== */
  if( jQuery(".newCardBox").hasClass('newCardBox')){
    
    var innerCarousel = $('.visual.owl-carousel');
    innerCarousel.owlCarousel({
      loop:false,
      margin:10,
      lazyLoad:true,
      nav:false,
      items:1,
      dots:false,
    });

    innerCarousel.on('changed.owl.carousel', function(property) {
      var current = property.item.index;
      var elem = $(property.target).find(".owl-item").eq(current).find('.item');
      var optval = elem.data('optval');
      var urunid = elem.data('urunid');
      $('.drUrunRenk'+urunid).val(optval);
    });


    $('.other .navItem').click(function(event) {
      $('.renkTrue').hide();
      $('.renkTrue',this).fadeIn();
      var renkIndex = $(this).index();
      var mainSrc = $(this).find('img').attr('src');
      var cleanData = mainSrc.replace('thumb_','med_')
      
      $(this).closest('.newCardBox').find('#visual').find('img').attr('src',cleanData);
      //alert(index)
      //$(this).closest('.newCardBox').find(innerCarousel).trigger("to.owl.carousel", renkIndex);
      $('.other .navItem img').removeClass('selected');
      $('img',this).addClass('selected');
      var strSec = '.drRenkSecenek option:eq('+renkIndex+')';
      $(strSec).prop('selected', true);

      var optval = $(this).attr('data-optval');
      var urunid = $(this).attr('data-urunid');
      $('.drUrunRenk'+urunid).val(optval);
    });
    
    innerCarousel.on('dragged.owl.carousel', function(event) {
     var currentItem = $(this).find('.owl-item.active img').attr('alt');
     $('.other .navItem img').removeClass('selected');
     $(this).closest('.newCardBox').find('.other').find(`[alt='${currentItem}']`).closest('.navItem').find('img').addClass('selected');
  });
  }
  /* ===== Ürün Kartı End ===== */

    $('.closeKanun').click(function(){
      $('.kanun').fadeOut();
    });

    /* ===== Sepet Sayfası Layout Seçimi ===== */
    $('.layoutSelect').click(function(){
      $('.layoutSelect').removeClass('active');
      $(this).addClass('active');
    });
    $('.layoutLine').click(function(){
      $('#sepetim .list').addClass('lineLayout');
    });
    $( "body" ).on( "click", ".lineLayout .downCaret", function() {
      $(this).toggleClass('rt');
      $(this).parent().find('.minLine').removeClass('min');
    });
    $( "body" ).on( "click", ".lineLayout .downCaret.rt", function() {
      $(this).parent().find('.minLine').addClass('min');
    });
    $('.layoutBox').click(function(){
    $('#sepetim .list').removeClass('lineLayout');
    });

    if (screen.width < 992) {
    $('#sepetim .list').addClass('lineLayout');
    } else {
    $('#sepetim .list').removeClass('lineLayout');
    }
    /* ===== Sepet Sayfası Layout Seçimi End ===== */

    /* ========== Filter Toggle ========== */
     $('.filterToggle').click(function(){
      $('.filtercontent').addClass('ml0');
      $('#closeToggle').fadeIn();
     });
     /* ========== Filter Toggle End ========== */


    /* ========== Dil Çeviri ========== */
  $('.active-tr').fadeIn();
    if (localStorage.getItem('lang') !== null) {
      $('.ceviri_def').hide();
      $('.ceviri_en').hide();
      $('.ceviri_ar').hide();
      $('.ceviri_ru').hide();
      $('.'+localStorage.getItem('lang')).fadeIn().addClass('active');
    }
    if (localStorage.getItem('activeFlag') !== null) {
      $('.langToggle .flags').hide();
      $('.'+localStorage.getItem('activeFlag')).fadeIn();
    }
    $('.serdilcevir.sec_ru').click(function(){
      localStorage.setItem('lang', 'ceviri_ru')
      localStorage.setItem('activeFlag', 'active-ru')
      $('.ceviri_def').hide().removeClass('active');
      $('.ceviri_en').hide().removeClass('active');
      $('.ceviri_ar').hide().removeClass('active');
      $('.ceviri_fr').hide().removeClass('active');
      $('.ceviri_ru').fadeIn().addClass('active');
      $('.langToggle .flags').hide();
      $('.active-ru').fadeIn();
    });
    $('.serdilcevir.sec_en').click(function(){
      localStorage.setItem('lang', 'ceviri_en')
      localStorage.setItem('activeFlag', 'active-en')
      $('.ceviri_def').hide().removeClass('active');
      $('.ceviri_ru').hide().removeClass('active');
      $('.ceviri_ar').hide().removeClass('active');
      $('.ceviri_fr').hide().removeClass('active');
      $('.ceviri_en').fadeIn().addClass('active');
      $('.langToggle .flags').hide();
      $('.active-en').fadeIn();
    });
    $('.serdilcevir.sec_ar').click(function(){
      localStorage.setItem('lang', 'ceviri_ar')
      localStorage.setItem('activeFlag', 'active-sa')
      $('.ceviri_def').hide().removeClass('active');
      $('.ceviri_en').hide().removeClass('active');
      $('.ceviri_ru').hide().removeClass('active');
      $('.ceviri_fr').hide().removeClass('active');
      $('.ceviri_ar').fadeIn().addClass('active');
      $('.langToggle .flags').hide();
      $('.active-sa').fadeIn();
    });
    $('.serdilcevir.sec_tr').click(function(){
      localStorage.setItem('lang', 'ceviri_def')
      localStorage.setItem('activeFlag', 'active-tr')
      $('.ceviri_ru').hide().removeClass('active');
      $('.ceviri_en').hide().removeClass('active');
      $('.ceviri_ar').hide().removeClass('active');
      $('.ceviri_fr').hide().removeClass('active');
      $('.ceviri_def').fadeIn().addClass('active');
      $('.langToggle .flags').hide();
      $('.active-tr').fadeIn();
    });
    $('.serdilcevir.sec_fr').click(function(){
      localStorage.setItem('lang', 'ceviri_fr')
      localStorage.setItem('activeFlag', 'active-fr')
      $('.ceviri_ru').hide().removeClass('active');
      $('.ceviri_en').hide().removeClass('active');
      $('.ceviri_ar').hide().removeClass('active');
      $('.ceviri_def').hide().removeClass('active');
      $('.ceviri_fr').fadeIn().addClass('active');
      $('.langToggle .flags').hide();
      $('.active-fr').fadeIn();
    });
    /* ========== Dil Çeviri End ========== */
    /* ========== Beğeni Toggle ========== */
    $('.begeniToggle').click(function(){
      $(this).toggleClass('icon-heart icon-heart2 red text');
    });
    /* ========== Beğeni Toggle End ========== */
    /* ===== Pay Tr Click to Remove Element -> ( Alışverişi Tamamla ) */
    $('.nav-link').click(function(){
      $('.sonlandir, .row-mobsepetalt').show();
    });
    $('.nav-link.paytrToggle').click(function(){
      $('.sonlandir, .row-mobsepetalt').hide();
    });
    /* ===== Pay Tr Click to Remove Element -> ( Alışverişi Tamamla ) End ===== */
    /* ===== Kapıda Ödeme Seçildiğinde Toplam Tutarın Güncellenmesi ===== */
    $('.kapidaToggle').click(function(){
      $('#ko_tutar').fadeIn();
      $('.koTutar').fadeIn();
      $('.sip_tutar').hide();
    });

    $('.havaleToggle').click(function(){
      $('#ko_tutar').hide();
      $('.koTutar').hide();
      $('.sip_tutar').fadeIn();
    });

    $('.paytrToggle').click(function(){
      $('#ko_tutar').hide();
      $('.koTutar').hide();
      $('.sip_tutar').fadeIn();
    });
    /* ===== Kapıda Ödeme Seçildiğinde Toplam Tutarın Güncellenmesi End ===== */
    /* ========== UserContent ========== */
    $('.userToggle').click(function(){
      $('#userContent').fadeIn().addClass('center-h');
      setTimeout(function () {
          $('.bubbleBox ').addClass('soft op10')
        }, 500);
    });
    $('#userContent .closeBox').click(function(){
      $('#userContent').fadeOut().removeClass('center-h');
    });
    /* ========== UserContent End ========== */


     /* ========== Sipariş Takip Sayfası ========== */
  //$('#siparistakibi').parent().parent().parent().parent().parent().addClass('center-h');
  //$('#siparistakibi').parent().parent().parent().parent().parent().find('.hiyerarsi').hide();

  $('#follownav .takiptoggle').click(function(){
     $('#follownav .takiptoggle').parent().removeClass('active');
     $(this).parent().addClass('active');
  });


  $('.takipnumara-toggle').click(function(){
     $('.takipbox').hide();
     $('.takipnumara').fadeIn();
  });
  $('.eposta-toggle').click(function(){
     $('.takipbox').hide();
     $('.takipeposta').fadeIn();
  });

  $('.telefon-toggle').click(function(){
     $('.takipbox').hide();
     $('.takiptelefon').fadeIn();
  });
  /* ========== Sipariş Takip Sayfası End ========== */
  /* ========== Üye Girişi Sayfası ========== */
    $('.toggleBox').click(function(){
      $('.toggleBox').css({
        'height':'130px',
      });
      $('.toggleBox').removeClass('active');
      $(this).addClass('active');      
      $('.toggleBox .mainIcon').removeClass('fs70 lh70').addClass('fs35 lh35');
      $('.toggleBox .title').removeClass('fs24 lh24 mt15').addClass('fs18 lh18 mt10');
      $('.toggleBox .info').removeClass('fs14 lh14').addClass('fs12 lh12');
      $('.actionContent').css({
          'display':'block',
        });
      $('.actionContent').removeClass('op0').addClass('op10');
      setTimeout(function(){
        $('.actionContent').addClass('pt15').css({
          'height':'350px',
        });
        if (screen.width < 768) {
          $([document.documentElement, document.body]).animate({
              scrollTop: $(".actionContent").offset().top - 250
          }, 1500);
        }
      },700);
    });

    $('.toggleBox.kullanici').click(function(){
      $('.intitle').hide();
      $('.kullaniciAdi').fadeIn();
    });
    $('.toggleBox.telefon').click(function(){
      $('.intitle').hide();
      $('.telefonNumarasi').fadeIn();
    });
    $('.toggleBox.mail').click(function(){
      $('.intitle').hide();
      $('.epostaAdresi').fadeIn();
    });
    /* ========== Üye Girişi Sayfası End ========== */


    var otherColors = $('.other .owl-carousel');
    otherColors.owlCarousel({
      loop:false,
      margin:5,
      responsiveClass:true,
      dots:false,
      nav:true,
      responsive:{
          0:{
              items:3,
          },
          600:{
              items:5,
          },
          1000:{
              items:5,
          }
      }
  });   

    $('.product').hover(function() {
      /* Stuff to do when the mouse enters the element */
      $(this).parent().addClass('hoverList');
      $(this).addClass('hoverItem');
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $(this).parent().removeClass('hoverList');
      $(this).removeClass('hoverItem');
    });


    /* ===== Aşama Text ===== */
    $('.asamaText').each(function(e,item) {
      var textSize = $(item).width();
      $(item).css({
        'left': '-' + (textSize/2-10) + 'px',
      });
    });
    /* ===== Aşama Text End ===== */

$('.searchToggle').click(function(){
  $('#searchFixed').addClass('lt0');
});
$('.searchClose').click(function(){
   $('#searchFixed').removeClass('lt0'); 
});

/* ========== Scroll Fixed Settings ========== */
      function scrollt() {
        var scrollHeight = jQuery(document).scrollTop();

        // Aşağı İnerken
        if (screen.width > 992) {
          if (scrollHeight > 100 ) {
            $('header').addClass('sticky');
          }
        }
        if (scrollHeight > (150) ) {
            $('header.contentPage').addClass('sticky');
        }
        // Aşağı İnerken End
        // Yukarı Çıkarken

        if (screen.width > 992) {
          if (scrollHeight < 100 ) {
            $('header').removeClass('sticky');
          }
        }
        // Yukarı Çıkarken End
        if (scrollHeight == 0 ){}
      }
      var lastScrollTop = 0;
      $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
          scrollt();
      } else {
          scrollt();
      }
      lastScrollTop = st;
      });
      /* ========== Scroll Fixed Settings End ========== */
      /* ===== Default İnside Zoom Script ===== */
      //$('.inside-zoom').zoom();
      /* ===== Default İnside Zoom Script ===== */



      $('.other .navItem').click(function(){
        $(this).closest('.newCardBox').find('.sepetTrue').removeClass('flex');
      });
      $( "body" ).on( "click", ".basketTrue", function() {
        $(this).closest('.newCardBox').find('.sepetTrue').addClass('flex');
      });
      $('.navItem').each(function(e,item) {
        $('.other .navItem:first-child').find('.visual').trigger('click').addClass('test');
      });



      /* ===== Ürün Kartı Diğer Renkler Drag % Drop ===== */
      function dragMouse() {
        $('.drag-x').dragScroll({
            direction: 'scrollLeft'
        });
      }

      $('.drag-x').each(function(e,item) {
        var itemLength = $(this).closest('.other').find('.navItem').length;
        var itemSize = $(this).closest('.other').find('.navItem').outerWidth();
        $(this).css({
          'width': ((itemSize+5)*itemLength)+40 + 'px',
        });

         if(itemLength > 3) {
          dragMouse()
          }    
      });
      /* ===== Ürün Kartı Diğer Renkler Drag % Drop End ===== */
      /* ========== Stok Hata ========== */
      $('.buttoncontent .bubbleToggle').click(function(){
        $('#bubble').fadeIn().addClass('center-h');
      });
      $('#bubble .closeBox').click(function(){
        $('#bubble').hide().removeClass('center-h');
      });
      $(document).keyup(function(e) {
           if (e.key === "Escape") {
              $('#bubble').hide().removeClass('center-h');
          }
      });
      /* ========== Stok Hata End ========== */








});

$(window).load(function() {
    // Handler for .load() called.
    $('.basketTrue').closest('.newCardBox').addClass('sepetOk');


    
    
    
    
});



/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler ----------*/
jQuery(window).resize(function(){

    

  });
/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler End ----------*/
