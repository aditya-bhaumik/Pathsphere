
// Animate the navbar links
gsap.from("#navbar li a", {
    duration: 1, 
    opacity: 0, 
    y: -50, 
    stagger: 0.2, 
    ease: "power3.out", 
    delay: 0.5
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

const tabs = document.querySelectorAll('.tab');
const cursor = document.querySelector('.cursor');

tabs.forEach(tab => {
    tab.addEventListener('mouseenter', (e) => {
        const { offsetLeft, offsetWidth } = e.target; 
        cursor.style.left = `${offsetLeft}px`; 
        cursor.style.width = `${offsetWidth}px`; 
        cursor.style.opacity = 1; 
    });

    tab.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0; 
    });
});
