function rAFCallback() {
    requestAnimationFrame(rAFCallback);
}

function setTimeoutCallback() {
    setTimeout(setTimeoutCallback, 0);
}

function promiseCallback() {
    Promise.resolve().then(promiseCallback);
}

requestAnimationFrame(rAFCallback);

setTimeout(setTimeoutCallback);

Promise.resolve().then(promiseCallback);