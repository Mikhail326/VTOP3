const menuBtn = document.querySelector('.header__mobile-btn')
const menu = document.querySelector('.header__menu')
const menuRight = document.querySelector('.header__right')

const handlerMenu = () => {
  menuBtn.classList.toggle('active-btn')
  menu.classList.toggle('active-menu')
  menuRight.classList.toggle('active-menu')
}

menuBtn.addEventListener('click', handlerMenu)