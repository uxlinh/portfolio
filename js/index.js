let modusBox = document.querySelector('.indexgrid__modus');
let modusImg = document.querySelector('.indexgrid__modus--img');

modusBox.addEventListener('mouseover', event=> {
    modusImg.style.transform = 'rotate(0deg)';
});
modusBox.addEventListener('mouseout', event=> {
    modusImg.style.transform = 'rotate(24deg)';
});