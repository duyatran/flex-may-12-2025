const assert = require("assert");
const sayHello = require("../sayHello");

// Test suite of sayHello
describe("sayHello function", () => {

    it("can say hello to Alice", () => {
        const expected = "Hello there Alice";
        const actual = sayHello("Alice");
        assert.strictEqual(actual, expected);
    })

    it("can say hello to Bob", () => {
        const expected = "Hello there Bob";
        const actual = sayHello("Bob");
        assert.strictEqual(actual, expected);
    })

    it("can deal where there is no name", () => {
        const expected = null;
        const actual = sayHello();
        assert.strictEqual(actual, expected);
    })
}); // optional - groups related tests together






