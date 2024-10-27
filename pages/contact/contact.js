document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Hide all previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((el) => (el.style.display = 'none'));

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation (at least 3 characters)
    if (name.length < 3) {
      document.getElementById('nameError').textContent =
        'Name must be at least 3 characters long';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    // Email validation (formal email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent =
        'Please enter a valid email address';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }

    // Phone validation (exactly 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent =
        'Phone number must be exactly 10 digits';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }

    // Message validation (at least 10 characters)
    if (message.length < 10) {
      document.getElementById('messageError').textContent =
        'Message must be at least 10 characters long';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    }

    // If form is valid, display success message
    if (isValid) {
      document.getElementById('successMessage').textContent =
        'Thank you for contacting us! We will reach you soon.';
      document.getElementById('successMessage').style.display = 'block';

      // Clear the form fields
      document.getElementById('contactForm').reset();
    }
  });
