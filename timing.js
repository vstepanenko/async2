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

console.time('RAF');
requestAnimationFrame(calcWithRAF);

console.time('setTimeout');
setTimeout(calcWithTimeout);

console.time('Promise');
Promise.resolve().then(calcWithPromise);