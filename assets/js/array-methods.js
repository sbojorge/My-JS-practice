let clothes = ["shirt", "shoes", "socks", "hat", "vest", "shorts", "skirt", "scarf"];

let varOne = clothes[0];
console.log(varOne);

let varTwo = clothes[5];
console.log(varTwo);

let varThree = clothes[4];
console.log(varThree);

let fruits = ["apples", "pears", "cherries", "bananas", "peaches", "oranges"];
let lastItem = fruits.pop();
console.log(lastItem);
console.log(fruits);

let firsItem = fruits.shift();
console.log(firsItem);
console.log(fruits);

let newLength = fruits.unshift("lemons");
console.log(newLength);
console.log(fruits);

delete fruits[2];
console.log(fruits);

fruits.splice(2,1);
console.log(fruits);

fruits.splice(2,0,"grapes", "kiwis", "pineapple");
console.log(fruits);

fruits[0] = "blueberries";
console.log(fruits);

let subset = fruits.slice(2,4);
console.log(subset);

fruits.sort();
console.log(fruits);

let veggies = ["carrots", "peas", "lettuce"];
let greenies = fruits.concat(veggies);
greenies.sort();
console.log(greenies);

let hasVeggie = greenies.includes("brocoli");
console.log(hasVeggie);

let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
console.log(crew);

let lastCrewMember = crew.pop();
console.log(lastCrewMember);
console.log(crew);
crew.sort();
console.log(crew);

let newCrew = crew.slice(1,4);
console.log(newCrew);
newCrew.push("Guinan");
console.log(newCrew);