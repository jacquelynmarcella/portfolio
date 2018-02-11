
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


// Removes animated classes after the animation is complete
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

// Responsive Navbar
$(".nav-hamburger").click(function(event){
  event.preventDefault();
  $(".nav-responsive").toggle("blind", 500);
});

$(window).resize(function(){
    checkSize();
});

function checkSize(){
    if ($(".nav-hamburger").css("display") == "none" ){
        $(".nav-responsive").hide();
    }
}


// Smooth scrolling
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });