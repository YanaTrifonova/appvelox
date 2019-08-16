function getStyleVal(elem, style) {
    return Number(window.getComputedStyle(elem).getPropertyValue(style).slice(0, -2))
}

function moveSlide(e) {
    if (window.innerWidth > 1024) {
        let slider = document.getElementById("slider");
        let parentElem = e.parentElement;
        let children = [].slice.call(parentElem.children);
        let paddingSlider = parentElem.offsetLeft + getStyleVal(e, 'margin-left');
        let isTheSame = false;
        let ind = 0;
        while (!isTheSame) {
            let curChild = children[ind];
            if (curChild === e) {
                isTheSame = true;
            } else {
                paddingSlider += curChild.offsetWidth + getStyleVal(curChild, 'margin-left') +
                    getStyleVal(curChild, 'margin-right');
            }
            ind += 1;
        }
        slider.style.marginLeft = paddingSlider + "px";
        slider.style.width = e.offsetWidth + "px";
    }
}
