let userLoggedIn = true;
if (userLoggedIn) {
  alert("Welcome");
} else {
  alert("Please log in");
}

let a = 1;
let b = 2;
let firstGreater;

if (a > b) {
  firstGreater = true;
} else {
  firstGreater = false;
}
console.log(firstGreater);

let price;
let memberType = "pro";

let fruits = ["apples", "kiwis", "bananas", "cherries"];
let numberOfFruits = fruits.length;

let i = 0;
while (i < numberOfFruits) {
  console.log(fruits[i] +  " are delicious");
  i++;
}

console.log("I love fruits!");

let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

let attemptedUploads = 0;

do {
  console.log("Attempting upload...");
  attemptedUploads++;
} while (attemptedUploads < 5);

console.log("Upload attempts exceeded maximum");

let y = 0;
while (y < 1000) {
  if (y === 3) {
    console.log("breaking");
    break;
  }
  console.log(y);
  y++;
}
console.log("loop has been broken");

for (let z = 0; z <=6; z++) {
  if (z % 2 !== 0){
    continue;
  }
  console.log(z);
}
console.log("Loop complete");

for(let a = 0; a <=3; a++) {
  for(let b = 200; b <= 203; b++){
    console.log("outer loop a:", a, "inner loop b:", b);
  }
}

let cars = ["saab", "volvo", "ford"];
for (let car = 0; car < 3; car++) {
  console.log(cars[car]);
}

let lotOfElements = ["a", "b", "c", "d", "e", "f", "g"];
for(let i = 0; i < lotOfElements.length; i++) {
  console.log(lotOfElements[i]);
}

switch (memberType) {
    case "basic":
        price = 40;
        break;
    case "pro":
        price = 50;
        break;
    case "gold":
        price = 0;
        break;
    default:
        price = 0

}
console.log(`price is ${price}`);

let x = 5;
let y = 4;

let result = x < y ? "x is smaller" : "x is greater";
console.log(result);

let memberShip = "trial";
let newPrice;

if (memberShip === "basic"){
    newPrice = 30;
} else if (memberShip === "pro"){
    newPrice = 35;
} else if (memberShip === "elite"){
    newPrice = 40;
} else {
    newPrice = 0;
}
console.log(newPrice)

let age = 23;
let newResult;

if (age > 21){
    newResult = "drink whiskey";
} else if (age > 18) {
    newResult = "drink beer";
} else if (age > 12) {
    newResult = "drink coca cola";
} else {
    newResult = "drink water";
}
console.log(newResult)

function findPrice(memberStatus) {
    switch (memberStatus) {
      case 0:
        return 54;
      case 1:
        return 34;
      case 2:
        return 12;
      case 3:
        return 78;
      case 4:
        return 98;
      case 5:
        return 4958;
      case 6:
        return 344;
      default:
        return 'Invalid member status';
    }
  }
  let day = findPrice(6);
  console.log(day);

  let challengeResult = "";
  let errorType = "page";

  switch (errorType) {
    case "username":
        challengeResult = "That username is incorrect, please try again.";
        break;
    case "password":
        challengeResult = "Incorrect password, please try again.";
        break;
    case "page":
        challengeResult = "Sorry this page doesn't exist.";
        break;
    default:
        challengeResult = "Error message unknown";
  }
  console.log(challengeResult);

  let user = true;
  let emailVerified = false;

  if (user) {
    if (emailVerified) {
      console.log("Welcome to our web-site");
      console.log(emailVerified);
    } else {
      console.log("Please verify your email");
    }
  } else {
    console.log("You need to be a user to visit this page");
  }
