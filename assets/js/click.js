const changeBox = () => {
    // Get the div
    let lowlyDiv = document.getElementById("lowly-div");

    /* We can check the box to determine its width and
    change colors accordingly. 120 = 100px + 10px padding
    on each side. Check style.css */

    if (lowlyDiv.clientWidth == 120) {
        // Change its background colour and width
        lowlyDiv.style.background = "lightgreen";
        lowlyDiv.style.width = "200px";
    
    } else {
        // Change it back to normal
        lowlyDiv.style.backgroundColor = "lightyellow";
        lowlyDiv.style.width = '100px';
    }
}

// the challenge

const changeCards = () => {
    let greenDivs = document.getElementsByClassName("card");
    console.log(greenDivs);
    for (let x of greenDivs) {
        x.style.background = "red";
    }
}