const sayHello = (name) => {
    // console.log(`Hello there ${name}`);
    if (!name) {
        return null;
    }
    return `Hello there ${name}`;
}
const age = 42;

// export whatever we want the outside world to have access to
module.exports = sayHello;
// module.exports = [42, sayHello];
// module.exports = {
//     sayHello: sayHello,
// };