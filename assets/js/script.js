document.getElementById("greeting").innerHTML = "Still 30 minutes of fun";
document.getElementById("greeting").style.color = "blue";
document.getElementById("text").style.display = "block";

function myFunction() {
  document.getElementById("picture").src = "assets/images/160429.webp";
}

myFunction();

// let myString = "today is the last day of summer"

// let newString = myString.toUpperCase();
// console.log(newString);
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);
// console.log(myString[4]);

// let stringLenght = myString.length;
// console.log(stringLenght);
// console.log(myString[stringLenght - 6])
// console.log(myString[myString.length - 5]);
// console.log(myString[myString.length - 4]);
// console.log(myString[myString.length - 3]);
// console.log(myString[myString.length - 2]);
// console.log(myString[myString.length - 1]);

// console.log(myString.indexOf("summer"));
// console.log(myString.lastIndexOf("r"));
// console.log(myString.indexOf("s", 8));
// console.log(myString.charAt(4));
// console.log(myString.charCodeAt(4));
// console.log(myString.slice(5));
// console.log(myString.slice(0,5));
// console.log(myString.slice(25));

// let autumn = "Ok, it's autumn turn."
// console.log(myString.concat(autumn));
// console.log(myString.endsWith("r"));
// console.log(autumn.includes("."));
// console.log(autumn.repeat(3));
// console.log(autumn.replace("Ok", "not good"));
// console.log(autumn.search("turn"));
// console.log(autumn.split("Ok,"));
// console.log(autumn.startsWith("Ok,"));
// console.log(autumn.substring(0,3));

// let sum = 3 + 5
// console.log(sum);
// console.log(sum.toString());
// console.log(autumn.trim());
// console.log(autumn.valueOf());

// let fullName = "Sara Bojorge"
// let domain = "gmail"
// let tld = "com"

// let newFullName = fullName.toLowerCase();

// console.log(newFullName.slice(0,4) + "." + newFullName.slice(5,13) + "@" + domain + "." + tld );

// console.log(Number("123"));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number("hello"));
// console.log(isNaN("hi"));
// console.log(isFinite(1.8e308));
// console.log(Number.isInteger(123));
// console.log(parseFloat("345.9"));
// console.log(parseInt(98.98));
// console.log(345.5.toFixed(2));
// console.log(typeof(345.5.toString()));

// let y;
// console.log(y);

// console.log(isNaN("56"));

// let passport = true;
// let ticket = true;
// let weapons = false;
// let a = 10;
// let b = 5;

// let either = a > 10 || b <= 5;
// console.log(either);

// let getOnFlight = passport && ticket && !weapons;
// console.log(getOnFlight);

// let userLoggedIn = true;
// if (userLoggedIn) {
//   alert("Welcome");
// } else {
//   alert("Please log in");
// }

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
