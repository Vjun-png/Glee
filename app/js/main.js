$(function () {
  
  $('.products-content__filter-btn').on('click', function() {
    $('.products-content__filter-btn').removeClass('.products-content__filter-btn--active');
    $(this).addClass('products-content__filter-btn--active');
  });
  
  $('.button-list').on('click', function() {
    $('.product-items').addClass('product-items--list');
  });
  
  $('.button-grid').on('click', function() {
    $('.product-items').removeClass('product-items--list');
  });
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    postfix: ".00",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.product-slide__small').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false, 
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__small',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.products-detalis').slick({
    slidesToShow: 4,
    slidesToScroll: 1
  });
  
  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px"
  });

  
  
});