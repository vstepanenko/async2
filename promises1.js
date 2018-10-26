var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Timeout: my');
        //message += "my";
        resolve('message');
    }, 0);
    console.log('Promise: my');
});

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Timeout: first');
        //message += " first";
        resolve('message');
    }, 0);
    console.log('Promise: first');
});

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Timeout: promise');
        //message += " promise";
        resolve('message');
    }, 0);
    console.log('Promise: promise');
});

var promise = new Promise((resolve, reject) => {
    console.log('Promise: test');
    resolve('resolver');
});
var asyncP = Promise.resolve('async');

// var printResult = (results) => {console.log("Results = ", results, "message = ", message)};

function main() {
    // See the order of promises. Final result will be according to it
    // Promise.all([promise1, promise2, promise3]).then(printResult);
    // Promise.all([promise2, promise1, promise3]).then(printResult);
    // Promise.all([promise3, promise2, promise1]).then(printResult);
    // console.log("\"\"" + message);
    // promise1.then(() => console.log('my'));
    // promise2.then(() => console.log('first'));
    // promise3.then(() => console.log('promise'));
    promise.then(() => {
        console.trace();
    });
    asyncP.then(() => {
        console.trace();
    });
    setTimeout(() => {
        console.trace();
    }, 500);
    second();
}

function second() {
    third();
}

function third() {
    console.trace();
    Promise.resolve().then(function() {debugger});
}

main();
console.log('main end');