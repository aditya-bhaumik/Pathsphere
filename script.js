
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

//FAQ Section
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon'); 
        
 
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+'; 
        } else {
            answer.style.display = 'block';
            icon.textContent = '-'; 
        }
    });
});

function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    var icon = document.getElementById("menu-icon");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.innerHTML = "&#9776;"; // Change back to three bars
    } else {
        menu.style.display = "block";
        icon.innerHTML = "&#10006;"; // Change to crossmark (X)
    }
}
