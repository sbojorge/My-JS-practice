const printString = (message) => console.log(message);

printString("Feeling hungry");

let operands = [
    [3, 5],
    [8, 6],
    [1, 2],
    [9, -2]
];

const addNumbers = (a, b) => a + b;
let sums = [];

for (let pair of operands) { // pair is an element in the array i.e [3,5]
    let sum = addNumbers(pair[0], pair[1]);
    sums.push(sum);
};

console.log(sums);


const buildHelloArray = num => {
    let myArray = [];
    for (let i = 0; i < num; i++) {
        myArray.push("hello");
    }
    return myArray; // for testing this stage, add a console.log here to get only the final array otherwise you'd get every array made at every iteration
};

let newArray = buildHelloArray(4);
console.log(newArray);

// the challenge
const addTwoNumbers = (num1, num2) => num1 + num2;

let result = addTwoNumbers(40, 2);
console.log(result);

