const box = document.getElementById('box');
let margin = 0;

function animateWithTimeout() {
    margin++;
    setTimeout(animateWithTimeout, 0);
    box.style.marginLeft = margin + 'px';

}

animateWithTimeout();