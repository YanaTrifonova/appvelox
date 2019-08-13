//script for burger btn
const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
const show = document.getElementById("header__menu");
const header = document.getElementById("header");
btn.addEventListener('click', evt => {
    if (menu.className.indexOf('active') === -1) {
        menu.classList.add('active');
        show.classList.add('header__menu-display');
        show.classList.remove('header__menu-hidden');
        header.classList.add('header-display');
        header.classList.remove('header-hidden');

    } else {
        menu.classList.remove('active');
        show.classList.remove('header__menu-display');
        show.classList.add('header__menu-hidden');
        header.classList.remove('header-display');
        header.classList.add('header-hidden');
    }
});