gsap.from("nav", {
    duration: 1, 
    y: -100, 
    opacity: 0,
    ease: "bounce"
});
gsap.from("h1", {
    duration: 1.5, 
    opacity: 0, 
    x: -200, 
    ease: "power3.out", 
    delay: 0.5
});
gsap.from("p", {
    duration: 1.5, 
    opacity: 0, 
    x: 200, 
    ease: "power3.out", 
    delay: 1
});
gsap.from(".btn", {
    duration: 1, 
    opacity: 0, 
    scale: 0.5, 
    stagger: 0.2, 
    ease: "back.out(1.7)", 
    delay: 1.5
});
let icon = document.getElementById("icon");
window.onload = function() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("darkmode");
        icon.src = "images/light.png";
    } else {
        document.body.classList.remove("darkmode");
        icon.src = "images/dark.png";
    }
}
icon.onclick = function() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        icon.src = "images/light.png";
        localStorage.setItem("theme", "dark"); 
    } else {
        icon.src = "images/dark.png"; 
        localStorage.setItem("theme", "light");
    }
}
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
