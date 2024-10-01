// Placeholder for future JavaScript functionality
// Scholarship data
const scholarships = [
    {
        name: "Global Excellence Scholarship",
        academic: "Undergraduate",
        cgpa: 8.0,
        location: "USA"
    },
    {
        name: "Merit-Based Scholarship",
        academic: "Postgraduate",
        cgpa: 7.5,
        location: "Canada"
    },
    {
        name: "Research Fellowship",
        academic: "PhD",
        cgpa: 9.0,
        location: "UK"
    },
    {
        name: "Tech Innovators Scholarship",
        academic: "Undergraduate",
        cgpa: 7.0,
        location: "India"
    }
];

// Event listener for form submission
document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input values
    const minCgpa = parseFloat(document.getElementById('cgpa').value);
    const academicLevel = document.getElementById('academic').value;
    const userLocation = document.getElementById('location').value.toLowerCase();

    // Filter scholarships
    const filteredScholarships = scholarships.filter(scholarship => {
        return scholarship.cgpa <= minCgpa &&
               scholarship.academic === academicLevel &&
               scholarship.location.toLowerCase() === userLocation;
    });

    // Display filtered scholarships
    const scholarshipList = document.getElementById('scholarshipList');
    scholarshipList.innerHTML = '';

    if (filteredScholarships.length > 0) {
        filteredScholarships.forEach(scholarship => {
            const li = document.createElement('li');
            li.textContent = scholarship.name;
            scholarshipList.appendChild(li);
        });
    } else {
        scholarshipList.textContent = 'No scholarships found.';
    }
});
