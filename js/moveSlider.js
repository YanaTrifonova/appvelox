
function moveSlide(e) {
    if (window.innerWidth > 1024) {
        let slider = document.getElementById("slider");
        slider.style.marginLeft = e.offsetLeft + "px";
        slider.style.width = e.offsetWidth + "px";
    }
}
