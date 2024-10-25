const hamburger = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

let icon = document.getElementById("icon");
window.onload = function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("darkmode");
    icon.src = "./images/light.png";
  } else {
    document.body.classList.remove("darkmode");
    icon.src = "./images/dark.png";
  }
};

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "./images/image.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "./images/dark.png";
    localStorage.setItem("theme", "light");
  }
};
