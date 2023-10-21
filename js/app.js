// ‍ slider part start
$('.destination_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px"
  });
// slider part end
// counter part start
$('.count').counterUp({
  delay: 10,
  time: 3000
});