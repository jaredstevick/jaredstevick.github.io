"use strict";$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(function(){$("a[href*=#]:not([href=#portfolioModal1], [href=#portfolioModal2], [href=#portfolioModal3], [href=#portfolioModal4], [href=#portfolioModal5], [href=#portfolioModal6])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html,body").animate({scrollTop:o.offset().top},1e3),!1}})});var alert;$("#submitForm").on("click",function(){$("#contactForm")[0].reset(),alert("Your message has been sent. Thank you.")});