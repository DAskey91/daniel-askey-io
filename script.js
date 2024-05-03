// Sticky Nav Bar
let navbar = document.getElementById("nav1");
let sticky = navbar.offsetTop;

function stickyNavbar(){
if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky")
}
}

window.onscroll = function() {
    stickyNavbar();
}
