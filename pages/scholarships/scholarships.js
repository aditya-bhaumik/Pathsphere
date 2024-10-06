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
