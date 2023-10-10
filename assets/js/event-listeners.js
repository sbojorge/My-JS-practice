const handleBtnClick = event => {
    console.log(`Received the ${event.type} event!`);
    console.log(`"this" currently refers to ${this.id}`);
    console.log("You clicked the button!\n");
}

let magicButton = document.getElementById("magic-button");
magicButton.addEventListener("click", handleBtnClick);
magicButton.addEventListener("contextmenu", handleBtnClick);// right clicks

const handleDivMouseHover = event => {
    console.log(`Received the ${event.type} event!`);
    console.log('"this" currently refers to', this.id);
    console.log('You moved the mouse over the div!\n');
}

let magicDiv = document.getElementById("magic-div");
magicDiv.addEventListener("mouseover", handleDivMouseHover);

const handleInputKeys = event => {
    console.log(`Received the ${event.type} event!`);
    console.log('"this" currently refers to', this.id);
    console.log('You changed the textbox!\n'); 
}

let magicInput = document.getElementById("magic-input");
magicInput.addEventListener("keypress", handleInputKeys);
magicInput.addEventListener("keydown", handleInputKeys);
magicInput.addEventListener("keyup", handleInputKeys);

// the challenge
const changeBorder = event => {
    box.style.borderColor = "red";
}

const changeBackground = event => {
    box.style.backgroundColor = "lightpink";
}

const revertBack = event => {
    box.style.backgroundColor = "lightblue"; 
}

let box = document.getElementById("box");
box.addEventListener("click", changeBorder);
box.addEventListener("mouseover", changeBackground);
box.addEventListener("mouseleave", revertBack);
