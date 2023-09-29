// Get the main box
let box = document.getElementById('main-box');

// All the box's content
console.log(box.innerHTML);

// You can use window.getComputedStyle and pass it an element to get that element's styles as a list of key/value pairs
console.log("The box's shadow:", window.getComputedStyle(box).boxShadow);
console.log("The box's border", window.getComputedStyle(box).border);
console.log("The box's border radius", window.getComputedStyle(box).borderRadius);

// The box's height and width
console.log('Box height is:', box.clientHeight);
console.log('Box width is:', box.clientWidth);

// The main heading
let heading = box.children[0];

// The heading's classes
console.log(heading.classList);

// The input box
let username = document.getElementById('username-input');

// All the input's attributes
console.log(username.attributes);

// To get their name/value, we must iterate
let attrs = username.attributes;
for (let i = 0; i < attrs.length; i++) {
    console.log('Attr name:', attrs[i].name, '- Attr value:', attrs[i].value);
}