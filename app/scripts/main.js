'use strict';

angular.module('Portfolio',[])

.controller('MainCtrl', ['$http', function($http){



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

$(window).scroll(function() {
    if($(this).scrollTop() > 5) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

var self = this;

$http.jsonp('http://api.tumblr.com/v2/blog/jaredstevick.tumblr.com/posts?api_key=1yLHFpQZusNUtc3ITApvq919tz8ZBJxI7qQxd2DiMOg0Iawa6Z&filter=text&callback=JSON_CALLBACK')
.success(function(data) {
	self.posts = data.response.posts;
	console.log(self.posts)
});



$('#submitForm').on('click', function(){
    $('#contactForm')[0].reset();
});

console.log("So you like to look under the hood? Why don't you check out my Github? http://github.com/jaredstevick");

}]);