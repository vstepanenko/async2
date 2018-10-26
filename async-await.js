function first() {
    setTimeout(function timeoutCb() {
        console.log('Timeout');
        Promise.resolve().then(function promiseCb3() {
            console.log('Promise 3');
            Promise.resolve().then(function promiseCb4() {
                console.log('Promise 4');
                //throw 'Error: Promise';
            });
            //throw 'Error: Promise';
        });
        throw 'Error: Timeout';
    }, 0);
    setTimeout(function timeoutCb2() {
        console.log('Timeout 2');
        //throw 'Error: Timeout 2';
    }, 0);
    Promise.resolve().then(function promiseCb() {
        console.log('Promise');
        throw 'Error: Promise';
    });
    second();
}

function second() {
    third();
}

function third() {
    Promise.resolve().then(function promiseCb2() {
        console.log('Promise in Third');
        //throw 'Error: Promise';
    });
    console.log('Third');
    throw 'Error: Third';
}

first();

var f = function() {
    setTimeout(function() {
        console.log('tim');
    }, 0);
    setImmediate(function() {
        console.log('imm');
    });
};