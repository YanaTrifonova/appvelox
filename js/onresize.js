window.onresize = function () {
    applySwiper(true);
    if (window.innerWidth < 1024) {
        let slider = document.getElementById("slider");
        slider.style.display = "None"
    }
};