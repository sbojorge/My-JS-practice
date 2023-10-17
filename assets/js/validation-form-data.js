const handleSubmit = (event) => {
  event.preventDefault();
  console.log("bravo");
  let p1 = form.elements["password"].value;
  let p2 = form.elements["confirm-password"].value;

  if (p1 !== p2) {
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
    errorDiv.style.display = "block";
  } else {
    console.log("Validation successful!");
    form.submit();
  }
};

let form = document.getElementById("registration-form");
form.addEventListener("submit", handleSubmit);

// the challenge
let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];

const handleSubmit1 = (event) => {
  event.preventDefault();
  
  let name = form1.elements["username1"].value;
  let verif = usernames.includes(name);
    if (verif) {
      
      errorMsg.innerHTML = `<p>Sorry, the username ${name} is already in use. Please choose another username</p>`;
    } else {
      usernames.push(name);
      form1.submit();
      console.log(usernames);
    }
  }


let form1 = document.getElementById("registration-form1");
form1.addEventListener("submit", handleSubmit1);
let errorMsg = document.getElementById("errors1");
