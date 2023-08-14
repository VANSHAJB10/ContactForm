const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function handleSubmit() {
  //retrieve form data
  let formData = new FormData(document.getElementById("form-id"));

  let email = 'help@sc.com';
  let emailSubject = 'Form Submission';
  let emailBody = 'Form data:\n' + JSON.stringify(Object.fromEntries(formData));

  //Display message
  let messageElement = document.getElementById('message');
  messageElement.innerHTML = "Your form is submitted. Please <a href='#'>click here</a> to proceed to the final step of registration";
  messageElement.style.color = "#0f0f0f";

  //Clear form fields
  document.getElementById('form-id').reset();
}

document.getElementById("form-id").addEventListener("submit", function(e) {
  e.preventDefault(); //Prevent default form submission

  handleSubmit();
});
