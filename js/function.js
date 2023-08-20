// Image jawa see change function
function jawa_change_image(image) {
    var container = document.getElementById("main-image");
    container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {
});

function celor_change_image(image) {
    var container = document.getElementById("celor-main-image");
    container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {
});

// fade left function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);