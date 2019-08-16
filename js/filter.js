function filter(e) {
    let elem = document.getElementById('nav');
    let siblings = getNextSiblings(elem, exampleFilter);

    function exampleFilter(elem) {
        return elem.nodeName.toUpperCase() === 'SECTION';
    }

    function getNextSiblings(elem, filter) {
        let sibs = [];
        while (elem = elem.nextSibling) {
            if (elem.nodeType === 3) continue; // text node
            if (!filter || filter(elem)) sibs.push(elem);
        }
        return sibs;
    }

    [].slice.call(siblings).forEach(function (val, ind, arr) {
        if (!(arr[ind].classList.contains(e))) {
            arr[ind].style.display = 'none';
        } else {
            arr[ind].style.display = 'block';
        }
    })
}