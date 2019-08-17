function changeCard(e) {
    let parent = document.getElementById("sections_situation");

    let children = [].slice.call(parent.children);
    for (let i = 0; i < children.length; i++) {
        let val = children[i];
        if (val.id !== e.id.slice(0, -4)) {
            val.classList.add("situation__hide");
        } else {
            val.classList.remove("situation__hide")
        }
    }

    moveSlide(e);
}
