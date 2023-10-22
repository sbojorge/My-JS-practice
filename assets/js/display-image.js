const show = event => {
    document.getElementById("tryme").style.display = "block";
    window.setTimeout("document.getElementById('tryme').style.display = 'none';",2000);    
}

const myButton = document.getElementById("pumpkin");
myButton.addEventListener("click", show);