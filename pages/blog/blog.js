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

// subscribe Button Fuctionality
document.addEventListener('DOMContentLoaded', function () {
  const subscribeButton = document.getElementById('subscribe-button');
  const emailInput = document.getElementById('newsletter-input');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;

    // Add tick icon for success and cross icon for error
    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.innerHTML = type === 'success' ? '✓' : '✗';

    const messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.className = 'toast-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
      toast.remove();
    };

    // Append tick for success, cross for error
    toast.appendChild(icon);
    toast.appendChild(messageSpan);
    toast.appendChild(closeButton);

    // Set position to center of the page
    toast.style.position = 'fixed';
    toast.style.top = '50%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  subscribeButton.addEventListener('click', function () {
    const email = emailInput.value.trim();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  // Gmail format regex

    if (gmailRegex.test(email)) {
      // If email is valid
      showToast('Thank you for subscribing!', 'success');
      emailInput.value = '';
    } else {
      // If email is invalid
      showToast('Please enter a valid Gmail address.', 'error');
    }
  });
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
