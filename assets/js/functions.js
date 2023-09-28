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

// Math

let random = Math.random();
console.log(random);

let someInteger = Math.floor(25.65);
console.log(someInteger);

let newInteger = Math.ceil(25.65);
console.log(newInteger);

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
};
console.log(numbers);

console.log(Math.round(1.25));
console.log(Math.round(1.75));

console.log(Math.max(3, 5, 9));
console.log(Math.min(5, 6, "Hi"));

console.log(Math.pow(3, 3));
console.log(Math.pow(-3, 3));
console.log(Math.pow(-3, 1/3));

let maxNumber = Math.max(7, 4, 8, 11, 5, 2);
console.log(maxNumber);

let randomNumber = Math.floor(Math.random() * maxNumber); // it ensures to have a number between 0 - 10
console.log(randomNumber);

// Date

let today = new Date();
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

let rightNow = Date.now();
let todayDate = new Date(rightNow);
console.log(todayDate.toDateString());

