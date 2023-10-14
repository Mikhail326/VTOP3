const menuBtn = document.querySelector('.header__mobile-btn')
const menu = document.querySelector('.header__menu')
const menuRight = document.querySelector('.header__right')
const header = document.querySelector('.header')

const handlerMenu = () => {
  menuBtn.classList.toggle('active-btn')
  menu.classList.toggle('active-menu')
  menuRight.classList.toggle('active-menu')
  header.classList.toggle('header-active')
}

menuBtn.addEventListener('click', handlerMenu)