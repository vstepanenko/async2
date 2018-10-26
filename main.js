const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const oneStep = 1;
const twoStep = 1;
const threeStep = 1;
let oneTop = 0;
let twoTop = 0;
let threeTop = 0;


function animateWithRAF() {
    if (oneTop < 1000) {
        requestAnimationFrame(animateWithRAF);
        one.style.marginLeft = oneTop + 'px';
        oneTop += oneStep;
    }
}

function animateWithTimeout() {
    if (twoTop < 1000) {
        setTimeout(animateWithTimeout, 0);
        two.style.marginLeft = twoTop + 'px';
        twoTop += twoStep;
    }
}

// function animateWithPromise() {
//     if (threeTop < 1000) {
//         Promise.resolve().then(animateWithPromise);
//         three.style.marginLeft = threeTop + 'px';
//         threeTop += threeStep;
//     }
// }

// function animateWithTimeout2() {
//     for (let i = 0; i < 1000; i++) {
//         const newTop = threeTop;
//         setTimeout(function() {
//             three.style.marginLeft = newTop + 'px';
//             console.log(newTop);
//         }, 0);
//         threeTop += threeStep;
//     }
// }

function animateWithInterval() {
    const interval = setInterval(function() {
        if (threeTop < 1000) {
            const newTop = threeTop;
            threeTop += threeStep;
            three.style.marginLeft = newTop + 'px';
        } else {
            clearInterval(interval);
        }
    }, 0);
}


animateWithRAF();
animateWithTimeout();
// animateWithTimeout2();
animateWithInterval();
// animateWithPromise();

let counterRAF = 0;
let counterTimeout = 0;
let counterPromise = 0;

function calcWithRAF() {
    if (counterRAF < 60) {
        console.log('RAF: ' + counterRAF);
        counterRAF++;
        requestAnimationFrame(calcWithRAF);
    } else {
        console.timeEnd('RAF');
    }
}

function calcWithTimeout() {
    if (counterTimeout < 60) {
        console.log('Timeout: ' + counterTimeout);
        counterTimeout++;
        setTimeout(calcWithTimeout, 0);
    } else {
        console.timeEnd('setTimeout');
    }
}

function calcWithPromise() {
    if (counterPromise < 60) {
        console.log('Promise: ' + counterPromise);
        counterPromise++;
        Promise.resolve().then(calcWithPromise);
    } else {
        console.timeEnd('Promise');
    }
}

// console.time('setTimeout');
// setTimeout(calcWithTimeout);
//
// console.time('RAF');
// requestAnimationFrame(calcWithRAF);
//
// console.time('Promise');
// Promise.resolve().then(calcWithPromise);

// document.addEventListener('DOMContentLoaded', () => {
// }, false);
