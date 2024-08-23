//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
})


var modal = document.getElementById("hireMeModal");
var btn = document.getElementById("hireMeBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
