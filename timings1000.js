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

// console.time('RAF');
// requestAnimationFrame(calcWithRAF);

console.time('setTimeout');
setTimeout(calcWithTimeout);

console.time('Promise');
Promise.resolve().then(calcWithPromise);