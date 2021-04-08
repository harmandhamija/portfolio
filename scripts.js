
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu-list');
const ulElement = document.querySelector('ul');

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('toggle');
    menuList.classList.toggle('menu-list-show');
})

ulElement.addEventListener('click', function () {
    hamburgerMenu.classList.remove('toggle');
    menuList.classList.remove('menu-list-show');
})