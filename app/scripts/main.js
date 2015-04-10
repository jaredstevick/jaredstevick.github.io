'use strict';

angular.module("Portfolio",[])

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
    if($(this).scrollTop() > 350) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});


// $.ajax({
//     url: "http://api.tumblr.com/v2/blog/jaredstevick.tumblr.com/posts?api_key=1yLHFpQZusNUtc3ITApvq919tz8ZBJxI7qQxd2DiMOg0Iawa6Z",
//     dataType: 'jsonp',
//     success: function(posts){
//     	console.log(posts);
//     var postings = posts.response.posts;
// 	var text = '';
// 	for (var i in postings) {
//   	var p = postings[i];
// 	text += '<li id="posts"><div id="postTitle"><a href='+ p.post_url +'>'+ p.title +'</a></div>' + p.description + '</li>';
// 	$('#postscontainer').append(text);
// 	};
//     }
// });

var self = this;


$http.jsonp("http://api.tumblr.com/v2/blog/jaredstevick.tumblr.com/posts?api_key=1yLHFpQZusNUtc3ITApvq919tz8ZBJxI7qQxd2DiMOg0Iawa6Z&callback=JSON_CALLBACK")
.success(function(data) {
	console.log(data);
	self.posts = data.response.posts; 
	console.log(self.posts)
});





$('#submitForm').on('click', function(){
	alert("Thanks for getting in touch. I look forward to talking with you!");
    $('#contactForm')[0].reset();
});



}]);