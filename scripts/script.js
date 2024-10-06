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

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.toggle-icon');

    if (answer.classList.contains('show')) {
      answer.classList.remove('show');
      icon.textContent = '+';
      icon.classList.remove('rotate');
    } else {
      answer.classList.add('show');
      icon.textContent = '-';
      icon.classList.add('rotate');
    }
  });
});

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', function () {
    button.style.animation = 'popup 0.5s ease';

    // Remove the animation after it's done to allow it to be reapplied on subsequent clicks
    button.addEventListener('animationend', function () {
      button.style.animation = '';
    });
  });
});
