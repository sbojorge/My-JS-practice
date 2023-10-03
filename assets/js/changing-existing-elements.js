const update = () => {
    let box = document.getElementById("main-box");
    box.style.width = "300px";
    
    let paragraph = document.getElementsByClassName("special")[0];
    paragraph.removeAttribute("class");

    let emptyBox = document.getElementById("empty-box");
    emptyBox.style.width = "300px";
    emptyBox.style.backgroundColor = "yellow";
    emptyBox.innerHTML = "<h2>I'm not empty anymore</h2>";

}

// the challenge

function turnOff() {
    let newButton = document.getElementById("switch");
    newButton.style.backgroundColor = "red";
    newButton.innerHTML = "OFF";   
}




