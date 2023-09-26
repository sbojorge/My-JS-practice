/**
 * To run this file, use the 
 * command node assets/js/arrow-function.js in the terminal
 */

// Vanilla JS

// function addTwoNumbers(a, b) {
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// arrow function with parameters

const addTwoNumbers =  (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single line arrow function with parameters

const addTwoNumbers2 =  (a, b) => a + b;
// const addTwoNumbers2 =  (a, b) => (a + b); valid syntax too

let sum2 = addTwoNumbers2(6,4);
console.log(sum2);

// Implicit return
const saySomething = message => console.log(message);
saySomething("Hello, there!");

const sayHello = () => console.log("Hi");
sayHello();

// Returning multiple lines of code
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    <p>`
);
console.log(returnMultipleLines());