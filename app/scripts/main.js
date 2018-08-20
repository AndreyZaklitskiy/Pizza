
$(document).ready(function(){
  //Верхний слайдер (горячие предложения).
  $('.top-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
});

  $('.pizza-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
  });


  //кнопка выбрать
  $('.button').on('click', function() {
    $(this).toggleClass('active');
  });
});
