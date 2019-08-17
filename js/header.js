//script for burger btn

function menuClick(e) {
    const menu = document.querySelector('.menu');
    const show = document.getElementById("header__menu");
    const header = document.getElementById("header");
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
}

//script for header hide and show

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});


function hasScrolled() {
    let st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('header__nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('header__nav-up');
        }
    }

    lastScrollTop = st;
}

setInterval(function () {
    if (didScroll && window.pageYOffset > 500) {
        hasScrolled();
        didScroll = false;
    }
}, 20);
