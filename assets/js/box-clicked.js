function boxClicked(event) {
  /*using an arrow function here creates a closure over the "this" value that leads to a TypeError.
  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
  */

  if (this.style.backgroundColor == "green") {
    this.style.backgroundColor = "orange";
  } else {
    this.style.backgroundColor = "green";
  }
}

let boxes = document.getElementsByClassName("box");

for (let box of boxes) {
  box.addEventListener("click", boxClicked);
}
