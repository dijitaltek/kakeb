// ************* responsive menu ************/

    $(document).ready(function () {
        $(".saklanan-btn").click(function () {
            $(".saklanan-btn").toggleClass("saklanan-change");
            $("ul").finish().slideToggle(500);
        });
 
        $("li").click(function () {
            $("li").removeClass("active");
            $(this).addClass("active");
        });
    });

// ************* responsive menu bitti ************/
// ************* scrolltop başladı ****************/
jQuery(document).ready(function() {
        jQuery(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
// ************* scrolltop bitti ******************/
// ************* slider ***************************/
   var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      grabcursor: false,
      modifier:2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

//************** slider bitti *********************/
//************** sayfalama ************************/
    Holder.addTheme('thumb', {
        bg: '#55595c',
        fg: '#eceeef',
        text: 'Küçük resim'
      });
//************** sayfalama bitti ******************/ 
/************** loader ***************************
$(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
//************** loader bitti *********************/
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });
/************** loader bitti *********************/    
    
    
    