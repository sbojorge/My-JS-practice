const handleSubmit = (event) => {
  // prevent default behavior
  event.preventDefault();

  // do our own stuff
  console.log("Submitting...");

  // submit the form ourselves
  contactForm.submit();

  // do more of our own stuff
  console.log("Submission complete!");
};

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleSubmit);

// the second form

const handleSubmit1 = (event) => {
  // prevent default behavior
  event.preventDefault();

  /*Note the use of .elements (a simpler way to get form field values
    and using the elements id eg ["username"]) */

  let username = contactForm1.elements['username'].value;
  let email = contactForm1.elements["email"].value;
  let message = contactForm1.elements["message"].value; 
  
  let html = `
  <p>Hi ${username}! Thanks for sending us a message. We'll respond to ${email} asap.
  For reference the message that you submitted is below:</p>
  <p>${message}</p> 
  `;

  // put the above html in the response div below the form
  let responseDiv = document.getElementById("response");
  responseDiv.innerHTML = html;
  responseDiv.style.display = "block";

};

let contactForm1 = document.getElementById("contact-form2");
contactForm1.addEventListener("submit", handleSubmit1);
