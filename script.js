
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
let icon=document.getElementById("icon")
icon.onclick=function(){
    document.body.classList.toggle("darkmode")
    if(document.body.classList.contains("darkmode")){
        icon.src="images/light.png"
    }
    else{
        icon.src="images/dark.png"
    }
}
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







