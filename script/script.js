'use strict'

const startScreen = document.querySelector('.main__start-screen')
console.log(startScreen)

// let opacityMain = 0;
// let stepOpacity = 0.1;

setInterval(function () {
    startScreen.classList.add('start-screen-first');
    startScreen.classList.remove('start-screen-two');
    startScreen.classList.remove('start-screen-three');
}, 4000);
setInterval(function () {
    startScreen.classList.add('start-screen-two');
    startScreen.classList.remove('start-screen-first');
    startScreen.classList.remove('start-screen-three');
}, 8000);
setInterval(function () {
    startScreen.classList.add('start-screen-three');
    startScreen.classList.remove('start-screen-two');
    startScreen.classList.remove('start-screen-first');
}, 12000);


// const intMargin = setInterval(function () {
//     if (opacityMain === 330)
//     {
//         clearInterval(intMargin)
//     }
//     opacityMain++;
//     console.log(opacityMain)
//     startScreen.style.marginRight = `${opacityMain}px`
// },1)

// const opacity = setInterval(function () {
// stepOpacity+=stepOpacity;
// startScreen.style.opacity = `${stepOpacity}`;
// console.log(startScreen.style.opacity = `${stepOpacity}`)
// },1)
// clearInterval(opacity);



