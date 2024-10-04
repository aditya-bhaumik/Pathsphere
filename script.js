gsap.from("nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "bounce",
});
gsap.from("h1", {
  duration: 1.5,
  opacity: 0,
  x: -200,
  ease: "power3.out",
  delay: 0.5,
});
gsap.from("p", {
  duration: 1.5,
  opacity: 0,
  x: 200,
  ease: "power3.out",
  delay: 1,
});
gsap.from(".btn", {

    duration: 1, 
    opacity: 0, 
    scale: 0.5, 
    stagger: 0.2, 
    ease: "back.out(1.7)", 
    delay: 1.5
});

document.querySelectorAll('.faq-item h2').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});








    // Remove the animation after it's done to allow it to be reapplied on subsequent clicks
// Combined code (assuming you want both pieces)

// Remove the animation after it's done to allow it to be reapplied on subsequent clicks
button.addEventListener("animationend", function () {
    button.style.animation = "";
});

// Add this code to your script.js file
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


