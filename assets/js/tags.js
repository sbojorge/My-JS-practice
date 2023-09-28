// let paragraphs = document.getElementsByTagName('p');

// // Get the specific paragraph, log its id attribute:
// console.log('The specific paragraph has an id of:', paragraphs.namedItem('specific').id);

// // All paragraphs
// console.log('The HTMLCollection contains:', paragraphs);
// console.log(paragraphs.item(4).textContent);
// console.log(paragraphs[4].textContent);

// // Iterate and print all their texts:
// // for(let i = 0; i < paragraphs.length; i++) {
// //     console.log('This is the', paragraphs[i].textContent);
// // }

// for (let parag of paragraphs) {
//     console.log('This is the', parag.textContent);
// }

// // Get a specific index:
// console.log("Index 2 is:", paragraphs[2].textContent);

let pElement = document.getElementsByTagName("p");
console.log(pElement);

let secondH1 = document.getElementsByTagName("h1").item(1); // this is one way
console.log(secondH1);

let second_h1 = document.getElementsByTagName("h1"); // this in another way
console.log(second_h1[1].textContent);