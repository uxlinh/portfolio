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
let modusTag2 = document.querySelector('.tagmodus2');

modusBox.addEventListener('mouseover', event=> {
    modusImg.style.transform = 'rotate(0deg)';  
    modusImg.style.transform = 'scale(1.2)';  
    modusH1.style.color = '#EAEBFF';
    modusH2.style.color = '#EAEBFF';
    modusTag1.style.backgroundColor = '#6363D6';
    modusTag2.style.backgroundColor = '#6363D6';
    modusTag1.style.color = '#EAEBFF';
    modusTag2.style.color = '#EAEBFF';
});
modusBox.addEventListener('mouseout', event=> {
    modusImg.style.transform = 'rotate(24deg)';
    modusH1.style.color = '#0E034E';
    modusH2.style.color = '#0E034E';
    modusTag1.style.backgroundColor = '#4a52e622';
    modusTag2.style.backgroundColor = '#4a52e622';
    modusTag1.style.color = '#2c329d';
    modusTag2.style.color = '#2c329d';
});

// JEGHARDEG
let jeghardegBox = document.querySelector('.indexcontainer__jeghardeg');
let jeghardegImg = document.querySelector('.indexcontainer__jeghardeg--img');
let jeghardegH1 = document.querySelector('.jeghardeg__h1');
let jeghardegH2 = document.querySelector('.jeghardeg__h2');
let jeghardegTag1 = document.querySelector('.tagjeghardeg1');
let jeghardegTag2 = document.querySelector('.tagjeghardeg2');
let jeghardegTag3 = document.querySelector('.tagjeghardeg3');
let jeghardegTag4 = document.querySelector('.tagjeghardeg4');

jeghardegBox.addEventListener('mouseover', event=> {
    jeghardegImg.style.transform = 'rotate(0deg)';
    jeghardegImg.style.transform = 'scale(1.2)';  
    jeghardegH1.style.color = '#fbdadf';
    jeghardegH2.style.color = '#fbdadf';
    jeghardegTag1.style.backgroundColor = '#ad4f5d';
    jeghardegTag2.style.backgroundColor = '#ad4f5d';
    jeghardegTag3.style.backgroundColor = '#ad4f5d';
    jeghardegTag4.style.backgroundColor = '#ad4f5d';
    jeghardegTag1.style.color = '#fbdadf';
    jeghardegTag2.style.color = '#fbdadf';
    jeghardegTag3.style.color = '#fbdadf';
    jeghardegTag4.style.color = '#fbdadf';
});
jeghardegBox.addEventListener('mouseout', event=> {
    jeghardegImg.style.transform = 'rotate(-14deg)';
    jeghardegH1.style.color = '#0E034E';
    jeghardegH2.style.color = '#0E034E';
    jeghardegTag1.style.backgroundColor = '#d1193215';
    jeghardegTag2.style.backgroundColor = '#d1193215';
    jeghardegTag3.style.backgroundColor = '#d1193215';
    jeghardegTag4.style.backgroundColor = '#d1193215';
    jeghardegTag1.style.color = '#B5293B';
    jeghardegTag2.style.color = '#B5293B';
    jeghardegTag3.style.color = '#B5293B';
    jeghardegTag4.style.color = '#B5293B';
});


// // OsloForTwo
// let oslofortwoBox = document.querySelector('.indexcontainer__oslofortwo');
// let oslofortwoImg = document.querySelector('.indexcontainer__oslofortwo--img');
// let oslofortwoH1 = document.querySelector('.oslofortwo__h1');
// let oslofortwoH2 = document.querySelector('.oslofortwo__h2');
// let oslofortwoTag1 = document.querySelector('.tagoslofortwo1');

// oslofortwoBox.addEventListener('mouseover', event=> {
//     oslofortwoImg.style.transform = 'rotate(0deg)';
//     oslofortwoImg.style.transform = 'scale(1.2)'; 
//     oslofortwoH1.style.color = 'white';
//     oslofortwoH2.style.color = 'white';
//     oslofortwoTag1.style.backgroundColor = 'white';
//     oslofortwoTag1.style.color = '#D96464';
// });
// oslofortwoBox.addEventListener('mouseout', event=> {
//     oslofortwoImg.style.transform = 'rotate(-14deg)';
//     oslofortwoH1.style.color = '#0E034E';
//     oslofortwoH2.style.color = '#0E034E';
//     oslofortwoTag1.style.backgroundColor = '#d9646425';
//     oslofortwoTag1.style.color = '#c44d4d';
// });


// OsloForTwo
let smertebertBox = document.querySelector('.indexcontainer__smertebert');
let smertebertImg = document.querySelector('.indexcontainer__smertebert--img');
let smertebertH1 = document.querySelector('.smertebert__h1');
let smertebertH2 = document.querySelector('.smertebert__h2');
let smertebertTag1 = document.querySelector('.tagsmertebert1');
let smertebertTag2 = document.querySelector('.tagsmertebert2');

smertebertBox.addEventListener('mouseover', event=> {
    smertebertImg.style.transform = 'rotate(0deg)';
    smertebertImg.style.transform = 'scale(1.2)'; 
    smertebertH1.style.color = '#c44d4d';
    smertebertH2.style.color = '#c44d4d';
    smertebertTag1.style.backgroundColor = '#d87979';
    smertebertTag2.style.backgroundColor = '#d87979';
    smertebertTag1.style.color = '#F8E7EA';
    smertebertTag2.style.color = '#F8E7EA';
});
smertebertBox.addEventListener('mouseout', event=> {
    smertebertImg.style.transform = 'rotate(-14deg)';
    smertebertH1.style.color = '#0E034E';
    smertebertH2.style.color = '#0E034E';
    smertebertTag1.style.backgroundColor = '#d9646425';
    smertebertTag2.style.backgroundColor = '#d9646425';
    smertebertTag1.style.color = '#c44d4d';
    smertebertTag2.style.color = '#c44d4d';
});



// APENHET
let apenhetBox = document.querySelector('.indexcontainer__apenhet');
let apenhetImg = document.querySelector('.indexcontainer__apenhet--img');
let apenhetH1 = document.querySelector('.apenhet__h1');
let apenhetH2 = document.querySelector('.apenhet__h2');
let apenhetTag1 = document.querySelector('.tagapenhet1');
let apenhetTag3 = document.querySelector('.tagapenhet3');

// apenhetBox.addEventListener('mouseover', event=> {
//     apenhetImg.style.transform = 'rotate(0deg)';
//     apenhetImg.style.transform = 'scale(1.2)';  
//     apenhetH1.style.color = 'white';
//     apenhetH2.style.color = 'white';
//     apenhetTag1.style.backgroundColor = 'white';
//     apenhetTag3.style.backgroundColor = 'white';
//     apenhetTag1.style.color = '#064398';
//     apenhetTag3.style.color = '#064398';
// });
// apenhetBox.addEventListener('mouseout', event=> {
//     apenhetImg.style.transform = 'rotate(14deg)';
//     apenhetH1.style.color = '#0E034E';
//     apenhetH2.style.color = '#0E034E';
//     apenhetTag1.style.backgroundColor = '#06439823';
//     apenhetTag3.style.backgroundColor = '#06439823';
//     apenhetTag1.style.color = '#1d447a';
//     apenhetTag3.style.color = '#1d447a';
// });

// Researchpaper
let researchpaperBox = document.querySelector('.indexcontainer__researchpaper');
let researchpaperImg = document.querySelector('.indexcontainer__researchpaper--img');
let researchpaperH1 = document.querySelector('.researchpaper__h1');
let researchpaperH2 = document.querySelector('.researchpaper__h2');
let researchpaperTag1 = document.querySelector('.tagresearchpaper1');

researchpaperBox.addEventListener('mouseover', event=> {
    researchpaperImg.style.transform = 'rotate(0eg)';
    researchpaperImg.style.transform = 'scale(1.2)';  
    researchpaperH1.style.color = '#44390a';
    researchpaperH2.style.color = '#44390a';
    researchpaperTag1.style.backgroundColor = '#7c681056';
    researchpaperTag1.style.color = '#f8eec9';
});
researchpaperBox.addEventListener('mouseout', event=> {
    researchpaperImg.style.transform = 'rotate(24deg)';
    researchpaperH1.style.color = '#0E034E';
    researchpaperH2.style.color = '#0E034E';
    researchpaperTag1.style.backgroundColor = '#d6af002c';
    researchpaperTag1.style.color = '#806c10';
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