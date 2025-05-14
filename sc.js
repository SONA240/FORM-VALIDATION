// Get form and all required input fields
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const errorMessages = document.getElementById('errorMessages');

// Listen for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting normally
  errorMessages.innerHTML = ''; // Clear previous error messages

  let errors = [];

  //  Full Name must be at least 5 characters
  if (fullName.value.trim().length < 5) {
    errors.push('Full Name must be at least 5 characters long.');
  }

  //  Email must contain "@"
  if (!email.value.includes('@')) {
    errors.push('Please enter a valid email address.');
  }

  //  Phone must be 10 digits and not "123456789"
  if (phone.value === '123456789' || !/^\d{10}$/.test(phone.value)) {
    errors.push('Please enter a valid 10-digit phone number.');
  }

  // Country must not be empty
  if (country.value.trim() === '') {
    errors.push('Country field cannot be empty.');
  }

  // Password rules
  const lowerName = fullName.value.toLowerCase();
  const lowerPass = password.value.toLowerCase();

  if (
    lowerPass === 'password' ||          // Can't be "password"
    lowerPass === lowerName ||           // Can't be name
    password.value.length < 8            // Minimum 8 characters
  ) {
    errors.push('Password is too weak. Avoid using your name or "password", and use at least 8 characters.');
  }

  // Confirm Password must match Password
  if (password.value !== confirmPassword.value) {
    errors.push('Passwords do not match.');
  }

  //  Terms checkbox must be checked
  if (!terms.checked) {
    errors.push('You must agree to the terms and conditions.');
  }

  // Display errors or submit form
  if (errors.length > 0) {
    // Show each error as a paragraph
    errors.forEach(msg => {
      const p = document.createElement('p');
      p.textContent = msg;
      errorMessages.appendChild(p);
    });
  } else {
    alert('Form submitted successfully!');
    form.reset(); // Clear the form
  }
});
