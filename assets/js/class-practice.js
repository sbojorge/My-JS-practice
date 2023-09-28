// let blueThings = document.getElementsByClassName('blue');

// // All items with class="blue"
// console.log('The HTMLCollection contains:', blueThings);

// // Iterate and print all their texts:
// for(let i = 0; i < blueThings.length; i++) {
//   console.log('Index ' + i + ' in the collection: ' + blueThings[i].textContent);
// }

// // for (let thing in blueThings) {
// //     console.log("Index " + thing + " in the collection: " + blueThings[thing].textContent);
// // }

// // Get a specific index:
// console.log("Index 2 is:", blueThings[2].textContent);

// // Same as above, but using the .item() method:
// console.log("Index 4 is:", blueThings.item(3).textContent);

// // Get the item with class="blue" and id="blue-div" and log its tag name:
// console.log('The item with id="blue-div" is a', blueThings.namedItem('blue-div').tagName, 'element.');

// // The other div is not in the collection since it doesn't have the "blue" class. The namedItem() method returns null
// console.log('The item with id="another-blue-div" is', blueThings.namedItem('another-blue-div'));

// the challenge

let mainContent = document.getElementsByClassName("main-content");
console.log(mainContent);

let section = document.getElementsByClassName("section-content");
console.log(section);