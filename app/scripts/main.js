'use strict';

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {
  $('a[href*=#]:not([href=#portfolioModal1], [href=#portfolioModal2], [href=#portfolioModal3], [href=#portfolioModal4], [href=#portfolioModal5], [href=#portfolioModal6])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$('#submitForm').on('click', function(){
    $('#contactForm')[0].reset();
});

