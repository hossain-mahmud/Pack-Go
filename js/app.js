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
// counter part end
// nav & tab slider
$('.nav_tab_cards').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots:true,
  centerMode: true,
  centerPadding: "0px"
})
// nav & tab end
// testimonial part start
$('.testimonial_review_part').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots:true,
})
// testimonial part end
// aow animation start
AOS.init();
// aow animation end