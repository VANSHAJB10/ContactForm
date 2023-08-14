document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  // Send email (you'll need to integrate with an email service like EmailJS)
  // Example:
  // emailjs.send('service_id', 'template_id', formData, 'user_id');

  // Display the message below the 'Submit' button
  document.getElementById('submit-message').style.display = 'block';
  document.getElementById('submit-message').innerHTML =
    'Your form is submitted. Please <a href="final-step.html" style="color: #0f0f0f;">click here</a> to proceed to the final step of registration.';
});

// Existing code
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
