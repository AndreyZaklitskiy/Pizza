$(document).ready(function(){
  //кнопка выбрать
  $('.btn').on('click', function() {
    $('.button').toggleClass('active');
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
  // выравниваем высоту айтемов pizza-slider
  var pizzaHeight = $('.pizza-slider').height();
  $('.pizza').height(pizzaHeight);

  // выбор размера пиццы
  var ts = $('.pizza').find('.size-26');
  var tt = $('.pizza').find('.size-32');
  var price = $('.pizza').find('h3 > span');


  ts.on('click', function(){
    var little = '26';
    var littlePizzaPrice = '999 руб.';
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
    $(this).closest('.pizza').find('.pizza-price').html(littlePizzaPrice);
    $(this).closest('.pizza').find('.pizza-size').html(little);
    $(this).closest('.pizza-size').html(little);
  });
  tt.on('click', function(){
    var big = '32';
    var bigPizzaPrice = '1 345 руб.';
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $(this).closest('.pizza').find('.pizza-price').html(bigPizzaPrice);
    $(this).closest('.pizza').find('.pizza-size').html(big);
  });
});
