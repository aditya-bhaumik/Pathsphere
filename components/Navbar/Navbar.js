// Hamburger menu functionality
const hamburger = document.getElementsByClassName('hamburger')[0];
const menu = document.getElementsByClassName('menu')[0];

hamburger.addEventListener('click', () => {
  // Toggle the 'active' class for both hamburger and menu
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Dark mode toggle functionality
let icon = document.getElementById('icon');
window.onload = function () {
  // Check the stored theme from localStorage
  let theme = localStorage.getItem('theme');
  
  if (theme === 'dark') {
    // If theme is dark, add the 'darkmode' class and set icon to light mode
    document.body.classList.add('darkmode');
    icon.src = '/images/light.png';
  } else {
    // Otherwise, remove the 'darkmode' class and set icon to dark mode
    document.body.classList.remove('darkmode');
    icon.src = '/images/dark.png';
  }
};

icon.onclick = function () {
  // Toggle the 'darkmode' class on body
  document.body.classList.toggle('darkmode');
  
  // Check if dark mode is active and update the icon and localStorage accordingly
  if (document.body.classList.contains('darkmode')) {
    icon.src = '/images/light.png'; // Change to light mode icon
    localStorage.setItem('theme', 'dark'); // Save 'dark' theme in localStorage
  } else {
    icon.src = '/images/dark.png'; // Change to dark mode icon
    localStorage.setItem('theme', 'light'); // Save 'light' theme in localStorage
  }
};
