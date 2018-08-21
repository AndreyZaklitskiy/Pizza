$(document).ready(function(){
  //кнопка выбрать
  $('.button').on('click', function() {
    $(this).toggleClass('active');
  });

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

  // выбор размера пиццы
  var ts = $('.pizza').find('.size-26');
  var tt = $('.pizza').find('.size-32');
  var price = $('.pizza').find('h3 > span');
  var little = '26';
  var big = '32';

  ts.on('click', function(){
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
  });
  tt.on('click', function(){
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  });
  if(ts.hasClass('selected')) {

  }
});
