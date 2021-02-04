let mainNav = document.getElementById("js-menu");
let bar = document.getElementById("bar");
let navBarToggle = document.getElementById("js-navbar-toggle");
//const burger = document.querySelector('.burgerlines');

navBarToggle.addEventListener("click", event => {
    let activeB = mainNav.classList.toggle("active");
    navBarToggle.classList.toggle('toggle');

    if (activeB) {
    bar.style.backgroundColor = "#FFF6E8";
    bar.style.zIndex = "2";
    bar.style.height = "70%"

    } else {
    bar.style.backgroundColor = "transparent";
    bar.style.height = "10%"
    }
});
