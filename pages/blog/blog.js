document.querySelectorAll('.like-button').forEach((button) => {
  button.addEventListener('click', function () {
    this.classList.toggle('liked');
  });
});

document.querySelectorAll('.submit-comment').forEach((button) => {
  button.addEventListener('click', function () {
    const textarea = this.previousElementSibling;
    const comment = textarea.value.trim();
    if (comment) {
      alert(`Comment submitted: ${comment}`);
      textarea.value = '';
    } else {
      alert('Please enter a comment.');
    }
  });
});

// Subscribe button functionality
document
  .getElementById('subscribe-button')
  .addEventListener('click', function () {
    const emailInput = document.getElementById('newsletter-input');
    const email = emailInput.value.trim();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = ''; // Clear the input
    } else {
      alert('Please enter a valid email address.');
    }
  });

// Read more functionality
document.querySelectorAll('.read-more').forEach((button) => {
  button.addEventListener('click', function () {
    const additionalContent = this.nextElementSibling;
    additionalContent.style.display =
      additionalContent.style.display === 'none' ||
      additionalContent.style.display === ''
        ? 'block'
        : 'none';
    this.textContent =
      additionalContent.style.display === 'block' ? 'Read less' : 'Read more';
  });
});
