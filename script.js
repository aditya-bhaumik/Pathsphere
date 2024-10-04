
// Animate the navbar
gsap.from("nav", {
    duration: 1, 
    y: -100, 
    opacity: 0,
    ease: "bounce"
});

// Animate the heading
gsap.from("h1", {
    duration: 1.5, 
    opacity: 0, 
    x: -200, 
    ease: "power3.out", 
    delay: 0.5
});

// Animate the paragraph
gsap.from("p", {
    duration: 1.5, 
    opacity: 0, 
    x: 200, 
    ease: "power3.out", 
    delay: 1
});

// Animate the buttons in the hero section
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








