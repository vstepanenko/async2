function first() {
    setTimeout(function timeoutCb() {
        Promise.resolve().then(function promiseCb() {
            console.log('Promise');
            throw 'Error: Promise';
        });
        console.log('Timeout');

        throw 'Error: Timeout';
    }, 0);
    second();
}

function second() {
    third();
}

function third() {
    console.log('Third');
    throw 'Error: Third';
}

first();