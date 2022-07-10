


let swiper = new Swiper('.photo__inner', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 1,

  // watchOverflow: true,
  slidesPerGroup: 1,
  centerSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3
    }
  }
});
