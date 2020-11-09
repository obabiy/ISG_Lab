/**
 * Ex 1, Part 1
 */
function makePromiseResolveWith3() {
  return new Promise((resolve, reject) => {
    resolve(3);
  });
}

/**
 * Ex 2, Part 1
 */
function makePromiseRejectWithBoo() {
  let rejectPromise = new Promise((resolve, reject) => {
    reject("Boo");
  });
}

/**
 * Ex 3, Part 1
 */
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    itShouldResolve ? resolve("Resolved") : reject("Rejected");
  });
}

/**
 * Ex 4, Part 1
 */
function makeDelayPromise(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

/**
 * Ex 1, Part 2
 */

function waitForPromise(promise, action) {
  promise.finally(action);
}

/**
 * Ex 2, Part 2
 */

function consumePromise(promise, consumer, handler) {
  promise.finally((result) => consumer(handler(result)));
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
  waitForPromise,
  consumePromise,
};
