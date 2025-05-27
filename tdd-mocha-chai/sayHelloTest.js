const assert = require("assert");
// bring in whatever ./sayHello.js exports
const sayHello = require("./sayHello");

// [x] Goal: test out sayHello
// [ ] Use assert
const actual = sayHello("Bob");
const expected = "Hello there Alice";

// if (actual === expected) {
//     console.log("They are the same");
// } else {
//     console.log("They are NOT the same");
// }

// More than console.log
// Assertions

// assert.equal(1, 1);
// assert.equal(1, '1'); // == 
// assert.strictEqual(1, '1'); // ===

assert.strictEqual(actual, expected);
assert.strictEqual(typeof actual, 'string');
