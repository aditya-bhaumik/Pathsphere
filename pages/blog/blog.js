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
document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.getElementById('subscribe-button');
  const emailInput = document.getElementById('newsletter-input');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    
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
    
    toast.appendChild(icon);
    toast.appendChild(messageSpan);
    toast.appendChild(closeButton);
    
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

  subscribeButton.addEventListener('click', function() {
    const email = emailInput.value.trim();
    if (email) {
      // Here you would typically send the email to your server or newsletter service
      showToast('Thank you for subscribing!', 'success');
      emailInput.value = '';
    } else {
      showToast('Please enter a valid email address.', 'error');
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
