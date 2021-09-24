
// Слайдер текст главная страница
$(document).ready(function () {
  $(".slider-text-mobile").slick({
    arrows: false,
    dots: true,
    fade: true,
    //   adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: `ease`,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  });
});


// Слайдер страница advantages
$(document).ready(function () {
  $(".advantages-slider").slick({
    arrows: true,
    dots: false,
    fade: true,
    //   adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: `ease`,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
});