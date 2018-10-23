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

function animateWithPromise() {
    if (threeTop < 1000) {
        Promise.resolve().then(animateWithPromise);
        three.style.marginLeft = threeTop + 'px';
        threeTop += threeStep;
    }
}


//animateWithRAF();
//animateWithTimeout();
//animateWithPromise();

let counterRAF = 0;
let counterTimeout = 0;
let counterPromise = 0;

function calcWithRAF() {
    if (counterRAF < 1000) {
        counterRAF++;
        requestAnimationFrame(calcWithRAF);
    } else {
        console.timeEnd('RAF');
    }
}

function calcWithTimeout() {
    if (counterTimeout < 1000) {
        counterTimeout++;
        setTimeout(calcWithTimeout, 0);
    } else {
        console.timeEnd('setTimeout');
    }
}

function calcWithPromise() {
    if (counterPromise < 1000) {
        counterPromise++;
        Promise.resolve().then(calcWithPromise);
    } else {
        console.timeEnd('Promise');
    }
}

// console.time('Promise');
// calcWithPromise();

console.time('setTimeout');
calcWithTimeout();

// console.time('RAF');
// calcWithRAF();

// document.addEventListener('DOMContentLoaded', () => {
// }, false);
