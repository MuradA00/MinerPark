const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.mob-menu')
const body = document.getElementById('body')
const html = document.getElementById('html')

burger.addEventListener('click', () => {
  burger.classList.toggle('--active-burger')
  if (burger.classList.contains('--active-burger')) {
    mobMenu.classList.add('--active-menu')
    body.classList.add('--body-locked')
    body.classList.add('--menu-opened')
  } else {
    mobMenu.classList.remove('--active-menu')
    body.classList.remove('--body-locked')
    body.classList.remove('--menu-opened')
  }
})


