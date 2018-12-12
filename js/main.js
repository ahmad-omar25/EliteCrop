$(function () {
  'use strict';

// Option box

$(".gear-check").click(function (){
$(".info-us").fadeToggle();
});

// Caching The Scroll Top Element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function ()

    {
    console.log($(this).scrollTop());

    if($(this).scrollTop()>=700)
    {
        scrollButton.show();
    }

    else
    {
        scrollButton.hide();
    }
});

// Ckick On Button To Scroll Top

scrollButton.click(function ()

{
   $("html,body").animate({scrollTop:0},600);
});


  // Adjust slider Height
  var winH = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH   = $('.navbar').innerHeight();
      $('.slider, .carousel-item').height(winH - (upperH + navH ));

      // Featured Work Shuffle
      $('.featured-work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') == 'all') {
           $('.shuffle-images .col-sm').css('opacity', 1);
        } else {
          $('.shuffle-images .col-sm').css('opacity', '.09');
          $($(this).data('class')).parent().css('opacity' , 1);
        }
      });
});
