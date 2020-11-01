/**
 * Ex 1, Part 1
 */
function makePromiseResolveWith3() {
  return new Promise((resolve, reject) => {
    resolve(3);
  }).then((result) => console.log(result));
}

/**
 * Ex 2, Part 1
 */
function makePromiseRejectWithBoo() {
  let rejectPromise = new Promise((resolve, reject) => {
    reject("Boo");
  }).catch((err) => console.log(err));
}

/**
 * Ex 3, Part 1
 */
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    itShouldResolve ? resolve("Resolved") : reject("Rejected");
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

/**
 * Ex 4, Part 1
 */
function makeDelayPromise(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved value");
    }, 1000);
  }).then((res) => console.log(res));
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};

/**
 * Ex 1, Part 2
 */

function waitForPromise(promise, action){
    promise.then(action).catch(err => console.log(err))
}

/**
 * Ex 2, Part 2
 */

function consumePromise(promise, consumer, handler){
    promise.then(result => consumer(handler(result))).catch(err => console.log(err))
}

module.exports = {
    waitForPromise,
    consumePromise,
};
  
  