let mainNav = document.getElementById("js-menu");
let bar = document.getElementById("bar");
let navBarToggle = document.getElementById("js-navbar-toggle");
//const burger = document.querySelector('.burgerlines');

navBarToggle.addEventListener("click", event => {
    let activeB = mainNav.classList.toggle("active");
    navBarToggle.classList.toggle('toggle'); 
     
    if (activeB) {
    bar.style.backgroundColor = "#8351ED"; 
    } else {
    bar.style.backgroundColor = "transparent";
    }
});
