const hamburger = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];
const icon = document.getElementById("icon");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Function to toggle dark mode
const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle('darkmode'); // Adjust class name to match your CSS

  // Update the icon image based on the current theme
  if (body.classList.contains('darkmode')) {
      icon.src = "/images/light.png"; // Use light icon when dark mode is active
      localStorage.setItem('theme', 'dark');
  } else {
      icon.src = "/images/dark.png"; // Use dark icon when light mode is active
      localStorage.setItem('theme', 'light');
  }
};

// Check local storage for saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('darkmode'); // Adjust class name to match your CSS
      icon.src = "/images/light.png"; // Use light icon if dark mode is set
  } else {
      document.body.classList.remove('darkmode'); // Adjust class name to match your CSS
      icon.src = "/images/dark.png"; // Use dark icon if light mode is set
  }
};


// Assign the click event to the icon for toggling dark mode
icon.onclick = toggleDarkMode;
