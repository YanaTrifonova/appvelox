let crisis = document.getElementById('crisis');
let family = document.getElementById('family');
let children = document.getElementById('children');
let communication = document.getElementById('communication');
let menAndWomen = document.getElementById('menAndWomen');
let growth = document.getElementById('growth');

let crisisMenu = document.getElementById('crisisMenu');
let familyMenu = document.getElementById('familyMenu');
let childrenMenu = document.getElementById('childrenMenu');
let communicationMenu = document.getElementById('communicationMenu');
let menAndWomenMenu = document.getElementById('menAndWomenMenu');
let growthMenu = document.getElementById('growthMenu');

// let b = {
//     "crisis" : function() {
//
// }
// }

function changeCard(e) {

    if (e===1) {
        crisis.classList.remove("situation__hide");
        family.classList.add("situation__hide");
        children.classList.add("situation__hide");
        communication.classList.add("situation__hide");
        menAndWomen.classList.add("situation__hide");
        growth.classList.add("situation__hide");

        crisisMenu.classList.add("situation__nav__roll-active");
        familyMenu.classList.remove("situation__nav__roll-active");
        childrenMenu.classList.remove("situation__nav__roll-active");
        communicationMenu.classList.remove("situation__nav__roll-active");
        menAndWomenMenu.classList.remove("situation__nav__roll-active");
        growthMenu.classList.remove("situation__nav__roll-active");
    } else if (e===2) {
        crisis.classList.add("situation__hide");
        family.classList.remove("situation__hide");
        children.classList.add("situation__hide");
        communication.classList.add("situation__hide");
        menAndWomen.classList.add("situation__hide");
        growth.classList.add("situation__hide");

        crisisMenu.classList.remove("situation__nav__roll-active");
        familyMenu.classList.add("situation__nav__roll-active");
        childrenMenu.classList.remove("situation__nav__roll-active");
        communicationMenu.classList.remove("situation__nav__roll-active");
        menAndWomenMenu.classList.remove("situation__nav__roll-active");
        growthMenu.classList.remove("situation__nav__roll-active");
    } else if (e===3) {
        crisis.classList.add("situation__hide");
        family.classList.add("situation__hide");
        children.classList.remove("situation__hide");
        communication.classList.add("situation__hide");
        menAndWomen.classList.add("situation__hide");
        growth.classList.add("situation__hide");

        crisisMenu.classList.remove("situation__nav__roll-active");
        familyMenu.classList.remove("situation__nav__roll-active");
        childrenMenu.classList.add("situation__nav__roll-active");
        communicationMenu.classList.remove("situation__nav__roll-active");
        menAndWomenMenu.classList.remove("situation__nav__roll-active");
        growthMenu.classList.remove("situation__nav__roll-active");
    } else if (e===4) {
        crisis.classList.add("situation__hide");
        family.classList.add("situation__hide");
        children.classList.add("situation__hide");
        communication.classList.remove("situation__hide");
        menAndWomen.classList.add("situation__hide");
        growth.classList.add("situation__hide");

        crisisMenu.classList.remove("situation__nav__roll-active");
        familyMenu.classList.remove("situation__nav__roll-active");
        childrenMenu.classList.remove("situation__nav__roll-active");
        communicationMenu.classList.add("situation__nav__roll-active");
        menAndWomenMenu.classList.remove("situation__nav__roll-active");
        growthMenu.classList.remove("situation__nav__roll-active");
    } else if (e===5) {
        crisis.classList.add("situation__hide");
        family.classList.add("situation__hide");
        children.classList.add("situation__hide");
        communication.classList.add("situation__hide");
        menAndWomen.classList.remove("situation__hide");
        growth.classList.add("situation__hide");

        crisisMenu.classList.remove("situation__nav__roll-active");
        familyMenu.classList.remove("situation__nav__roll-active");
        childrenMenu.classList.remove("situation__nav__roll-active");
        communicationMenu.classList.remove("situation__nav__roll-active");
        menAndWomenMenu.classList.add("situation__nav__roll-active");
        growthMenu.classList.remove("situation__nav__roll-active");
    } else if (e===6) {
        crisis.classList.add("situation__hide");
        family.classList.add("situation__hide");
        children.classList.add("situation__hide");
        communication.classList.add("situation__hide");
        menAndWomen.classList.add("situation__hide");
        growth.classList.remove("situation__hide");

        crisisMenu.classList.remove("situation__nav__roll-active");
        familyMenu.classList.remove("situation__nav__roll-active");
        childrenMenu.classList.remove("situation__nav__roll-active");
        communicationMenu.classList.remove("situation__nav__roll-active");
        menAndWomenMenu.classList.remove("situation__nav__roll-active");
        growthMenu.classList.add("situation__nav__roll-active");
    }

}