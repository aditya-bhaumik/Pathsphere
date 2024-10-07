// Function to filter scholarships based on search input
function filterScholarships() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.getElementsByClassName('scholarship-item');

  Array.from(items).forEach((item) => {
    const title = item.getElementsByTagName('h2')[0].textContent.toLowerCase();
    if (title.includes(input)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Function to simulate the application process
function applyForScholarship(scholarshipName) {
  alert(`You have applied for the ${scholarshipName}.`);
}

// Function to toggle display of scholarship details for a specific card
function toggleDetails(button) {
  // Get the specific card that contains the clicked button
  const scholarshipItem = button.closest('.scholarship-item');
  
  // Find the details section within the specific card
  const details = scholarshipItem.querySelector('.scholarship-details');

  // Toggle the visibility of the details section
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    button.textContent = 'Read Less';
  } else {
    details.style.display = 'none';
    button.textContent = 'Read More';
  }
}
