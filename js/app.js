// ‍ slider part start
$('.destination_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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


var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// nav and back to top button fiexd start


let mainMenu = document.querySelector('.main_menu')
window.addEventListener('scroll',()=>{
  let scrooling = this.scrollY;

  if(scrooling > 150){
    mainMenu.classList.add('nav_fiexd');
  }
  else{
    mainMenu.classList.remove('nav_fiexd')
  }
  }
)
