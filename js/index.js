
//Modus
let modusBox = document.querySelector('.indexcontainer__modus');
let modusImg = document.querySelector('.indexcontainer__modus--img');
let modusH1 = document.querySelector('.modus__h1');
let modusH2 = document.querySelector('.modus__h2');

modusBox.addEventListener('mouseover', event=> {
    modusImg.style.transform = 'rotate(0deg)';  
    modusH1.style.color = 'white';
    modusH2.style.color = 'white';
});
modusBox.addEventListener('mouseout', event=> {
    modusImg.style.transform = 'rotate(24deg)';
    modusH1.style.color = '#0E034E';
    modusH2.style.color = '#0E034E';
});

// JEGHARDEG
let jeghardegBox = document.querySelector('.indexcontainer__jeghardeg');
let jeghardegImg = document.querySelector('.indexcontainer__jeghardeg--img');
let jeghardegH1 = document.querySelector('.jeghardeg__h1');
let jeghardegH2 = document.querySelector('.jeghardeg__h2');

jeghardegBox.addEventListener('mouseover', event=> {
    jeghardegImg.style.transform = 'rotate(0deg)';
    jeghardegH1.style.color = 'white';
    jeghardegH2.style.color = 'white';
});
jeghardegBox.addEventListener('mouseout', event=> {
    jeghardegImg.style.transform = 'rotate(24deg)';
    jeghardegH1.style.color = '#0E034E';
    jeghardegH2.style.color = '#0E034E';
});

// OsloForTwo
let oslofortwoBox = document.querySelector('.indexcontainer__oslofortwo');
let oslofortwoImg = document.querySelector('.indexcontainer__oslofortwo--img');
let oslofortwoH1 = document.querySelector('.oslofortwo__h1');
let oslofortwoH2 = document.querySelector('.oslofortwo__h2');

oslofortwoBox.addEventListener('mouseover', event=> {
    //jeghardegImg.style.transform = 'rotate(0deg)';
    oslofortwoH1.style.color = 'white';
    oslofortwoH2.style.color = 'white';
});
oslofortwoBox.addEventListener('mouseout', event=> {
    //jeghardegImg.style.transform = 'rotate(24deg)';
    oslofortwoH1.style.color = '#0E034E';
    oslofortwoH2.style.color = '#0E034E';
});

// APENHET
let apenhetBox = document.querySelector('.indexcontainer__apenhet');
let apenhetImg = document.querySelector('.indexcontainer__apenhet--img');
let apenhetH1 = document.querySelector('.apenhet__h1');
let apenhetH2 = document.querySelector('.apenhet__h2');

apenhetBox.addEventListener('mouseover', event=> {
    //jeghardegImg.style.transform = 'rotate(0deg)';
    apenhetH1.style.color = 'white';
    apenhetH2.style.color = 'white';
});
apenhetBox.addEventListener('mouseout', event=> {
    //jeghardegImg.style.transform = 'rotate(24deg)';
    apenhetH1.style.color = '#0E034E';
    apenhetH2.style.color = '#0E034E';
});

// Researchpaper
let researchpaperBox = document.querySelector('.indexcontainer__researchpaper');
let researchpaperImg = document.querySelector('.indexcontainer__researchpaper--img');
let researchpaperH1 = document.querySelector('.researchpaper__h1');
let researchpaperH2 = document.querySelector('.researchpaper__h2');

researchpaperBox.addEventListener('mouseover', event=> {
    //jeghardegImg.style.transform = 'rotate(0deg)';
    researchpaperH1.style.color = 'white';
    researchpaperH2.style.color = 'white';
});
researchpaperBox.addEventListener('mouseout', event=> {
    //jeghardegImg.style.transform = 'rotate(24deg)';
    researchpaperH1.style.color = '#0E034E';
    researchpaperH2.style.color = '#0E034E';
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