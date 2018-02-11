
$(function() {
    $('body').addClass('animated fadeIn');
    $('.header-name').animateCss('fadeInLeft');

    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height  > 300) {
        $('nav').addClass('nav-scrolling');
      }
      else {
        $('nav').removeClass('nav-scrolling');
      }
     });

});

// Responsive Navbar
$(".nav-hamburger").click(function(event){
  event.preventDefault();
  $(".nav-responsive").toggle("blind", 500);
});

// The below 2 functions hide the dropdown if it is expanded when the screen is small, but then the user makes their screen large 
$(window).resize(function(){
    checkSize();
});

function checkSize(){
    if ($(".nav-hamburger").css("display") == "none" ){
        $(".nav-responsive").hide();
    }
}


  $.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));

      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);

        if (typeof callback === 'function') callback();
      });

      return this;
    }
  })