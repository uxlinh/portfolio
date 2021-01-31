let indexContainerBox = document.querySelector('.indexcontainer__box');

let modusBox = document.querySelector('.indexcontainer__modus');
let modusImg = document.querySelector('.indexcontainer__modus--img');

modusBox.addEventListener('mouseover', event=> {
    modusImg.style.transform = 'rotate(0deg)';
});
modusBox.addEventListener('mouseout', event=> {
    modusImg.style.transform = 'rotate(24deg)';
});

