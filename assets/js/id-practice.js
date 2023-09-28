let firstHeading = document.getElementById("first-heading");
let secondHeading = document.getElementById("second-heading");
let thirdHeading = document.getElementById("third-heading");
let fourthHeading = document.getElementById("fourth-heading");

console.log(firstHeading.innerHTML);
console.log(secondHeading.textContent);
console.log(thirdHeading.innerText);
console.log(fourthHeading.innerHTML);

let special = document.getElementById("special");
console.log(special.innerHTML);

// runnable example

let practice = document.getElementById("unique");

let firstChild = practice.children[0];
console.log(firstChild.innerHTML);
console.log(practice.parentNode);
let secondChild = firstChild.nextElementSibling;
console.log(secondChild);
console.log(secondChild.previousElementSibling);
