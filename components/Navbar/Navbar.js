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

    //setting photopaths for the images
    const photoPaths = ["/images/sun.png", "/images/moon.png"];
    const photoElement = document.getElementById("photo");

    // Update the theme preference in local storage
    if (body.classList.contains('darkmode')) {
        icon.checked = true; // Set checkbox to checked
        localStorage.setItem('theme', 'dark');
        photoElement.src = photoPaths[1]; //set moon for night mode

    } else {
        icon.checked = false; // Set checkbox to unchecked
        localStorage.setItem('theme', 'light');
        photoElement.src = photoPaths[0];  //set sun for day
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
