// Function to animate elements with GSAP
const animateElements = () => {
  gsap.from('nav', {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: 'bounce',
  });
  
  gsap.from('h1', {
    duration: 1.5,
    opacity: 0,
    x: -200,
    ease: 'power3.out',
    delay: 0.5,
  });
  
  gsap.from('p', {
    duration: 1.5,
    opacity: 0,
    x: 200,
    ease: 'power3.out',
    delay: 1,
  });
  
  gsap.from('.btn', {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 1.5,
  });
};

// Function to handle FAQ question clicks
const handleFAQClick = (question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.toggle-icon');

    answer.classList.toggle('show');
    icon.textContent = answer.classList.contains('show') ? '-' : '+';
    icon.classList.toggle('rotate');
  });
};

// Function to handle button clicks
const handleButtonClick = (button) => {
  button.addEventListener('click', function () {
    button.classList.add('popup-animation');

    // Remove the animation class after it's done
    button.addEventListener('animationend', function () {
      button.classList.remove('popup-animation');
    }, { once: true }); // Ensures the listener is removed after execution
  });
};

// Apply animations on page load
animateElements();

// Set up event listeners for FAQs
document.querySelectorAll('.faq-question').forEach(handleFAQClick);

// Set up event listeners for buttons
document.querySelectorAll('.btn').forEach(handleButtonClick);
