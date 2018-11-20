const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
let oneTop = 0;
let twoTop = 0;
let threeTop = 0;


function animateWithRAF() {
    if (oneTop < 1000) {
        requestAnimationFrame(animateWithRAF);
        one.style.marginLeft = oneTop + 'px';
        oneTop++;
    }
}

function animateWithTimeout() {
    if (twoTop < 1000) {
        setTimeout(animateWithTimeout, 0);
        two.style.marginLeft = twoTop + 'px';
        twoTop++;
    }
}

function animateWithPromise() {
    if (threeTop < 1000) {
        Promise.resolve().then(animateWithPromise);
        three.style.marginLeft = threeTop + 'px';
        threeTop++;
    }
}

animateWithRAF();
animateWithTimeout();
animateWithPromise();


