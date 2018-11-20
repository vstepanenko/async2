function first() {
    setTimeout(function timeoutCb() {
        console.log('Timeout');

        Promise.resolve().then(function promiseCb3() {
            console.log('Promise 3');
        });
    }, 0);

    setTimeout(function timeoutCb2() {
        console.log('Timeout 2');
    }, 0);

    Promise.resolve().then(function promiseCb() {
        console.log('Promise 1');
    });

    second();
}

function second() {
    third();
}

function third() {
    throw new Error('Error: Third');
}

first();
