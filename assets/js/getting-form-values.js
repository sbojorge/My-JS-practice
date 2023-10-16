const handleSubmit = event => {
    // prevent the default submit action
    event.preventDefault();

    // get the 2 input elements
    let user =  document.getElementById("username");
    let pass = document.getElementById("password");

    // log the values to the console
    console.log(user.value);
    console.log(pass.value);
}

let form = document.getElementById("login-form");
form.addEventListener("submit", handleSubmit);

// the challenge

const getFormDetails = event => {
    event.preventDefault();
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    document.getElementById("name-result").innerHTML = name.value;
    document.getElementById("email-result").innerHTML = email.value;
}

let newForm = document.getElementById("newsletter-signup");
newForm.addEventListener("submit", getFormDetails);