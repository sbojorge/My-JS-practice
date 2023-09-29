let myString = "today is the last day of summer"

let newString = myString.toUpperCase();
console.log(newString);
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
console.log(myString[4]);

let stringLenght = myString.length;
console.log(stringLenght);
console.log(myString[stringLenght - 6])
console.log(myString[myString.length - 5]);
console.log(myString[myString.length - 4]);
console.log(myString[myString.length - 3]);
console.log(myString[myString.length - 2]);
console.log(myString[myString.length - 1]);

console.log(myString.indexOf("summer"));
console.log(myString.lastIndexOf("r"));
console.log(myString.indexOf("s", 8));
console.log(myString.charAt(4));
console.log(myString.charCodeAt(4));
console.log(myString.slice(5));
console.log(myString.slice(0,5));
console.log(myString.slice(25));

let autumn = "Ok, it's autumn turn."
console.log(myString.concat(autumn));
console.log(myString.endsWith("r"));
console.log(autumn.includes("."));
console.log(autumn.repeat(3));
console.log(autumn.replace("Ok", "not good"));
console.log(autumn.search("turn"));
console.log(autumn.split("Ok,"));
console.log(autumn.startsWith("Ok,"));
console.log(autumn.substring(0,3));

let fullName = "Sara Bojorge"
let domain = "gmail"
let tld = "com"

let newFullName = fullName.toLowerCase();

console.log(newFullName.slice(0,4) + "." + newFullName.slice(5,13) + "@" + domain + "." + tld );
