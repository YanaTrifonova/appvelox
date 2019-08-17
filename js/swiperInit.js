window.onload = function () {

    if (window.innerWidth < 1024) {
        window.swiperSpecialist = new Swiper('.swiper-container-s', {
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
        window.swiperSpecialist = new Swiper('.swiper-container-s', {
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
            window.swiperSpecialist.destroy(true, true);
            window.swiperSpecialist = new Swiper('.swiper-container-s', {
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
            })

        }
        window.swiperSituation = new Swiper('.swiper-container-howDoWeWork', {
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
    } else if (window.innerWidth > 1024) {
        if (isResize) {

            window.swiperSpecialist.destroy(true, true);
            window.swiperSpecialist = new Swiper('.swiper-container-s', {
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
            if (window.swiperSituation !== undefined) {

                window.swiperSituation.destroy(true, true);
                modifyClasses(true);
            }
        }
    }
}

function modifyClasses(isAddition) {
    let selector = ".howDoWeWork div[class^=\"swiper-\"]";
    if (!isAddition) {
        selector = ".howDoWeWork div[class^=\"remove-swiper-\"]"
    }
    let objs = document.querySelectorAll(selector);
    for (let i =0; i < objs.length; i++)
    {
        let classes = [].slice.apply(objs[i].classList);
        for (let j = 0; j < classes.length; j++) {
            let newClass = undefined;
            if (!isAddition && classes[j].indexOf("remove-") !== -1) {
                newClass = classes[j].slice(7)
            } else if (isAddition && classes[j].indexOf("swiper-") !== -1) {
                newClass = "remove-" + classes[j]
            }
            if (newClass !== undefined) {
                objs[i].classList.add(newClass);
                objs[i].classList.remove(classes[j]);
            }
        }
    }

}
