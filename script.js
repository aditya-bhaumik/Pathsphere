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
  delay: 1.5,
});

let icon = document.getElementById("icon");
window.onload = function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("darkmode");
    icon.src = "images/light.png";
  } else {
    document.body.classList.remove("darkmode");
    icon.src = "images/dark.png";
  }
};

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "images/light.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/dark.png";
    localStorage.setItem("theme", "light");
  }
};

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".toggle-icon");

    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
      icon.textContent = "+";
      icon.classList.remove("rotate");
    } else {
      answer.classList.add("show");
      icon.textContent = "-";
      icon.classList.add("rotate");
    }
  });
});

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    button.style.animation = "popup 0.5s ease";

    // Remove the animation after it's done to allow it to be reapplied on subsequent clicks
    button.addEventListener("animationend", function () {
      button.style.animation = "";
    });
  });
});
const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
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
