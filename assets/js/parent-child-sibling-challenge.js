let parentElement = document.getElementsByClassName("section-content");
console.log(parentElement);

let firstParagraph = parentElement.item(1);
console.log(firstParagraph.parentNode);

let children = document.getElementById("main").children;
console.log(children);

let sibling = document.getElementsByTagName("h1").item(0).nextElementSibling;
console.log(sibling);