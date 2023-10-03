const addSquare = () => {
    // get the body
    let body = document.body;

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    document.getElementById("squares-wrapper").appendChild(newDiv);
}

const removeSquare = () => {
    document.getElementsByClassName("square")[0].remove();
}