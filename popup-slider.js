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
  $('.btn-slider2').on('click', function() {
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

  $('.ct-sliderPop-close').on('click', function() {
    $('.sliderPop').hide();
    $('.ct-sliderPop-container').removeClass('open');
    $('.sliderPop2').removeClass('flexslider');
    $('.sliderPop2 .ct-sliderPop-container').removeClass('slides');
  });
});
