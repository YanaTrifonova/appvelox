// show and hide sections when clicked on arrow

function articleShowAndHide(e) {
    let article = document.getElementById(e);
    let imgId = 'arrow_' + e;
    let img = document.getElementById(imgId);

    if (article.style.maxHeight === "" || article.style.maxHeight === "0px" ) {
        article.style.maxHeight = article.scrollHeight + "px";
        img.style.transform = "rotate(180deg)";
    } else {
        article.style.maxHeight = "0px";
        img.style.transform = "";
    }
}
