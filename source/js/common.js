


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

var menuLinks = document.querySelectorAll('.nav__link');

if (menuLinks.length > 0) {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (event) {
      mobMenu.classList.remove('--active-menu');
      body.classList.remove('--body-locked')
      body.classList.remove('--menu-opened')
      burger.classList.remove('--active-burger')
    });
  });
}
