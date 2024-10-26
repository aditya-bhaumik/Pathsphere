// Hamburger menu toggle
const hamburger = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];
const icon = document.getElementById("theme-toggle");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Function to toggle dark mode
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('darkmode');

    // Update the theme preference in local storage
    if (body.classList.contains('darkmode')) {
        icon.checked = true; // Set checkbox to checked
        localStorage.setItem('theme', 'dark');
    } else {
        icon.checked = false; // Set checkbox to unchecked
        localStorage.setItem('theme', 'light');
    }
};

// Check local storage for saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('darkmode');
        icon.checked = true; // Set checkbox to checked
    } else {
        document.body.classList.remove('darkmode');
        icon.checked = false; // Set checkbox to unchecked
    }
};

// Assign the change event to the theme toggle for toggling dark mode
icon.addEventListener('change', toggleDarkMode);
