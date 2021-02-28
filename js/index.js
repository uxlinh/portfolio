// let tagHvit = document.querySelectorAll('.indexcontainer__tag1');
// tagHvit.addEventListener('mouseover', event=> {
//     tagHvit.style.backgroundColor = 'white';
// })

//Modus
let modusBox = document.querySelector('.indexcontainer__modus');
let modusImg = document.querySelector('.indexcontainer__modus--img');
let modusH1 = document.querySelector('.modus__h1');
let modusH2 = document.querySelector('.modus__h2');
let modusTag1 = document.querySelector('.tagmodus1');

modusBox.addEventListener('mouseover', event=> {
    modusImg.style.transform = 'rotate(0deg)';  
    modusImg.style.transform = 'scale(1.2)';  
    modusH1.style.color = 'white';
    modusH2.style.color = 'white';
    modusTag1.style.backgroundColor = 'white';
    modusTag1.style.color = '#4A51E6';
});
modusBox.addEventListener('mouseout', event=> {
    modusImg.style.transform = 'rotate(24deg)';
    modusH1.style.color = '#0E034E';
    modusH2.style.color = '#0E034E';
    modusTag1.style.backgroundColor = '#4a52e622';
    modusTag1.style.color = '#2c329d';
});

// JEGHARDEG
let jeghardegBox = document.querySelector('.indexcontainer__jeghardeg');
let jeghardegImg = document.querySelector('.indexcontainer__jeghardeg--img');
let jeghardegH1 = document.querySelector('.jeghardeg__h1');
let jeghardegH2 = document.querySelector('.jeghardeg__h2');
let jeghardegTag1 = document.querySelector('.tagjeghardeg1');
let jeghardegTag3 = document.querySelector('.tagjeghardeg3');
let jeghardegTag4 = document.querySelector('.tagjeghardeg4');

jeghardegBox.addEventListener('mouseover', event=> {
    jeghardegImg.style.transform = 'rotate(0deg)';
    jeghardegImg.style.transform = 'scale(1.2)';  
    jeghardegH1.style.color = 'white';
    jeghardegH2.style.color = 'white';
    jeghardegTag1.style.backgroundColor = 'white';
    jeghardegTag3.style.backgroundColor = 'white';
    jeghardegTag4.style.backgroundColor = 'white';
    jeghardegTag1.style.color = '#B5293B';
    jeghardegTag3.style.color = '#B5293B';
    jeghardegTag4.style.color = '#B5293B';
});
jeghardegBox.addEventListener('mouseout', event=> {
    jeghardegImg.style.transform = 'rotate(-14deg)';
    jeghardegH1.style.color = '#0E034E';
    jeghardegH2.style.color = '#0E034E';
    jeghardegTag1.style.backgroundColor = '#d1193215';
    jeghardegTag3.style.backgroundColor = '#d1193215';
    jeghardegTag4.style.backgroundColor = '#d1193215';
    jeghardegTag1.style.color = '$primary-color';
    jeghardegTag3.style.color = '$primary-color';
    jeghardegTag4.style.color = '$primary-color';
});

// OsloForTwo
let oslofortwoBox = document.querySelector('.indexcontainer__oslofortwo');
let oslofortwoImg = document.querySelector('.indexcontainer__oslofortwo--img');
let oslofortwoH1 = document.querySelector('.oslofortwo__h1');
let oslofortwoH2 = document.querySelector('.oslofortwo__h2');
let oslofortwoTag1 = document.querySelector('.tagoslofortwo1');

oslofortwoBox.addEventListener('mouseover', event=> {
    oslofortwoImg.style.transform = 'rotate(0deg)';
    oslofortwoImg.style.transform = 'scale(1.2)'; 
    oslofortwoH1.style.color = 'white';
    oslofortwoH2.style.color = 'white';
    oslofortwoTag1.style.backgroundColor = 'white';
    oslofortwoTag1.style.color = '#D96464';
});
oslofortwoBox.addEventListener('mouseout', event=> {
    oslofortwoImg.style.transform = 'rotate(-14deg)';
    oslofortwoH1.style.color = '#0E034E';
    oslofortwoH2.style.color = '#0E034E';
    oslofortwoTag1.style.backgroundColor = '#d9646425';
    oslofortwoTag1.style.color = '#c44d4d';
});

// APENHET
let apenhetBox = document.querySelector('.indexcontainer__apenhet');
let apenhetImg = document.querySelector('.indexcontainer__apenhet--img');
let apenhetH1 = document.querySelector('.apenhet__h1');
let apenhetH2 = document.querySelector('.apenhet__h2');
let apenhetTag1 = document.querySelector('.tagapenhet1');
let apenhetTag3 = document.querySelector('.tagapenhet3');

apenhetBox.addEventListener('mouseover', event=> {
    apenhetImg.style.transform = 'rotate(0deg)';
    apenhetImg.style.transform = 'scale(1.2)';  
    apenhetH1.style.color = 'white';
    apenhetH2.style.color = 'white';
    apenhetTag1.style.backgroundColor = 'white';
    apenhetTag3.style.backgroundColor = 'white';
    apenhetTag1.style.color = '#064398';
    apenhetTag3.style.color = '#064398';
});
apenhetBox.addEventListener('mouseout', event=> {
    apenhetImg.style.transform = 'rotate(14deg)';
    apenhetH1.style.color = '#0E034E';
    apenhetH2.style.color = '#0E034E';
    apenhetTag1.style.backgroundColor = '#06439823';
    apenhetTag3.style.backgroundColor = '#06439823';
    apenhetTag1.style.color = '#1d447a';
    apenhetTag3.style.color = '#1d447a';
});

// Researchpaper
let researchpaperBox = document.querySelector('.indexcontainer__researchpaper');
let researchpaperImg = document.querySelector('.indexcontainer__researchpaper--img');
let researchpaperH1 = document.querySelector('.researchpaper__h1');
let researchpaperH2 = document.querySelector('.researchpaper__h2');
let researchpaperTag1 = document.querySelector('.tagresearchpaper1');
let researchpaperTag2 = document.querySelector('.tagresearchpaper2');

researchpaperBox.addEventListener('mouseover', event=> {
    researchpaperImg.style.transform = 'rotate(0deg)';
    researchpaperImg.style.transform = 'scale(1.4)';  
    researchpaperH1.style.color = 'white';
    researchpaperH2.style.color = 'white';
    researchpaperTag1.style.backgroundColor = 'white';
    researchpaperTag2.style.backgroundColor = 'white';
    researchpaperTag1.style.color = '#8D7100';
    researchpaperTag2.style.color = '#8D7100';
});
researchpaperBox.addEventListener('mouseout', event=> {
    researchpaperImg.style.transform = 'rotate(24deg)';
    researchpaperH1.style.color = '#0E034E';
    researchpaperH2.style.color = '#0E034E';
    researchpaperTag1.style.backgroundColor = '#d6af002c';
    researchpaperTag2.style.backgroundColor = '#d6af002c';
    researchpaperTag1.style.color = '#806c10';
    researchpaperTag2.style.color = '#806c10';
});


// let indexContainerBox = document.querySelector('.indexcontainer__box');
// let boxHeading1 = document.querySelector('.box__h1');

// indexContainerBox.addEventListener('mouseover', event=> {
//     boxHeading1.style.color = '#fcfcfc';
//     modusImg.style.transform = 'rotate(0deg)';
// });
// indexContainerBox.addEventListener('mouseout', event=> {
//     boxHeading1.style.color = '#0E034E';
//     modusImg.style.transform = 'rotate(24deg)';
// });