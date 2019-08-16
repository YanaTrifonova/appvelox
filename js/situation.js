function changeCard(e) {
    let parent = document.getElementById("sections_situation");

    [].slice.call(parent.children).forEach(val=> {
        if (val.id !== e.id.slice(0, -4)) {
            val.classList.add("situation__hide");
        } else {
            val.classList.remove("situation__hide")
        }
    });
    moveSlide(e);
}
