//Popup Speak&Up
$( document ).ready(function() {
  $('.btn-slider1').on('click', function() {
    $('.sliderPop1').show();
    $('.ct-sliderPop-container').addClass('open');
    $('.sliderPop1').addClass('flexslider');
    $('.sliderPop1 .ct-sliderPop-container').addClass('slides');

    $('.sliderPop1').flexslider({
    selector: '.ct-sliderPop-container > .ct-sliderPop',
    slideshow: false,
    controlNav: false,
    controlsContainer: '.ct-sliderPop-container'
    });
  });

  $('.ct-sliderPop-close').on('click', function() {
    $('.sliderPop1').hide();
    $('.ct-sliderPop-container').removeClass('open');
    $('.sliderPop1').removeClass('flexslider');
    $('.sliderPop1 .ct-sliderPop-container').removeClass('slides');
  });
});

//Popup TrocENcheres
$( document ).ready(function() {
    $('.btn-slider2').on('click', function () {
      document.getElementById("header").style.filter = " blur(2px)";
      document.getElementById("first-section").style.filter = " blur(2px)";
      document.getElementById("projet").style.filter = " blur(2px)";
      document.getElementById("contact").style.filter = " blur(2px)";
    $('.sliderPop2').show();
    $('.ct-sliderPop-container').addClass('open');
    $('.sliderPop2').addClass('flexslider');
    $('.sliderPop2 .ct-sliderPop-container').addClass('slides');
    $('.sliderPop2').flexslider({
    selector: '.ct-sliderPop-container > .ct-sliderPop',
    slideshow: false,
    controlNav: false,
    controlsContainer: '.ct-sliderPop-container'
    });
  });

    $('.ct-sliderPop-close').on('click', function () {
    document.getElementById("header").style.filter = "none";
    document.getElementById("first-section").style.filter = "none";
    document.getElementById("projet").style.filter = "none";
    document.getElementById("contact").style.filter = "none";
    $('.sliderPop2').hide();
    $('.ct-sliderPop-container').removeClass('open');
    $('.sliderPop2').removeClass('flexslider');
    $('.sliderPop2 .ct-sliderPop-container').removeClass('slides');
  });
});

//Popup Portofolio
$(document).ready(function () {
    $('.btn-slider3').on('click', function () {
        document.getElementById("header").style.filter = " blur(2px)";
        document.getElementById("first-section").style.filter = " blur(2px)";
        document.getElementById("projet").style.filter = " blur(2px)";
        document.getElementById("contact").style.filter = " blur(2px)";
        $('.sliderPop3').show();
        $('.ct-sliderPop-container').addClass('open');
        $('.sliderPop3').addClass('flexslider');
        $('.sliderPop3 .ct-sliderPop-container').addClass('slides');
        $('.sliderPop3').flexslider({
            selector: '.ct-sliderPop-container > .ct-sliderPop',
            slideshow: false,
            controlNav: false,
            controlsContainer: '.ct-sliderPop-container'
        });
    });

    $('.ct-sliderPop-close').on('click', function () {
        document.getElementById("header").style.filter = "none";
        document.getElementById("first-section").style.filter = "none";
        document.getElementById("projet").style.filter = "none";
        document.getElementById("contact").style.filter = "none";
        $('.sliderPop3').hide();
        $('.ct-sliderPop-container').removeClass('open');
        $('.sliderPop3').removeClass('flexslider');
        $('.sliderPop3 .ct-sliderPop-container').removeClass('slides');
    });
});

//Script NAVABAR disparait on scroll down reapparait scroll up
$(document).ready(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
});