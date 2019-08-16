window.onload = function () {

    if (window.innerWidth < 1024) {
        var swiperSpecialist = new Swiper('.swiper-container-s', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination-s',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-s',
                prevEl: '.swiper-button-prev-s',
            },
        });
    } else {
        var swiperSpecialist = new Swiper('.swiper-container-s', {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination-s',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-s',
                prevEl: '.swiper-button-prev-s',
            },
        });
    }
    applySwiper(false);
};

function applySwiper(isResize) {
    if (window.innerWidth < 1024) {
        if (isResize) {
            modifyClasses(false);
        }
        var swiperSituation = new Swiper('.swiper-container-howDoWeWork', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination-howDoWeWork',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-howDoWeWork',
                prevEl: '.swiper-button-prev-howDoWeWork',
            },
        });
    } else if (!isResize) {
        modifyClasses(true);
    }
}

function modifyClasses(isAddition) {
    let selector = ".howDoWeWork div[class^=\"swiper-\"]";
    if (!isAddition) {
        selector = ".howDoWeWork div[class^=\"remove-swiper-\"]"
    }
    let objs = document.querySelectorAll(selector);
    objs.forEach((e, indRoot, arrRoot) => {
        [].slice.apply(e.classList).forEach((p, ind, arr) => {
            let newClass = undefined;
            if (!isAddition && p.indexOf("remove-") !== -1) {
                newClass = p.slice(7)
            } else if (isAddition && p.indexOf("swiper-") !== -1) {
                newClass = "remove-" + p
            }
            if (newClass !== undefined) {
                e.classList.add(newClass);
                e.classList.remove(p);
            }
        });
        arrRoot[indRoot] = e;
    })
}
