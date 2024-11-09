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



// Function to mark the active tab based on the current URL
function setActiveTab() {
    const tabs = document.querySelectorAll('#tabs .tab'); // Select all tab <li> elements
    const currentPath = window.location.pathname; // Get the current path from the URL

    // Loop through each tab to add or remove the active class
    tabs.forEach(tab => {
        const link = tab.querySelector('a'); // Get the <a> inside the <li>
        const linkPath = link.getAttribute('href'); // Get the href attribute of the <a>
        console.log('Current Path:', currentPath);
        console.log('Link Path:', linkPath);

        // Check if the href of the link matches the current path
        if (currentPath === linkPath || currentPath === linkPath.split('?')[0]) {
            tab.classList.add('active'); // Add 'active' to the current tab
        } else {
            tab.classList.remove('active'); // Remove 'active' from other tabs
        }
        // if (link.getAttribute('href') === currentPath) {
        //     tab.classList.add('active'); // Add 'active' to the current tab
        // } else {
        //     tab.classList.remove('active'); // Remove 'active' from other tabs
        // }
    });
}

// Call the function on page load
window.onload = () => {
    setActiveTab();

    // Existing theme setup
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('darkmode');
        icon.checked = true; // Set checkbox to checked
    } else {
        document.body.classList.remove('darkmode');
        icon.checked = false; // Set checkbox to unchecked
    }
};
