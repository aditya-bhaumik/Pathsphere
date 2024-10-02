const jobListings = [
  {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, USA",
      description: "Develop and maintain web applications using modern frameworks.",
  },
  {
      id: 2,
      title: "Data Scientist",
      company: "DataSolutions",
      location: "San Francisco, USA",
      description: "Analyze large datasets to extract insights and support decision-making.",
  },
  {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "London, UK",
      description: "Design intuitive and responsive interfaces for web and mobile applications.",
  },
  {
      id: 4,
      title: "Project Manager",
      company: "Business Solutions",
      location: "Toronto, Canada",
      description: "Oversee project execution and ensure timely delivery within scope and budget.",
  },
  {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Berlin, Germany",
      description: "Implement CI/CD pipelines, automate infrastructure, and manage cloud services.",
  },
  {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "SecureWorks",
      location: "Sydney, Australia",
      description: "Monitor and analyze security systems to prevent data breaches and cyberattacks.",
  },
  {
      id: 7,
      title: "Full-Stack Developer",
      company: "InnoTech",
      location: "Paris, France",
      description: "Build end-to-end solutions, from front-end to back-end, for enterprise applications.",
  },
  {
      id: 8,
      title: "Marketing Specialist",
      company: "Brandify",
      location: "Dubai, UAE",
      description: "Develop and execute marketing campaigns to enhance brand visibility and engagement.",
  },
  {
      id: 9,
      title: "Blockchain Developer",
      company: "Crypto Solutions",
      location: "Singapore",
      description: "Design, implement, and maintain blockchain technologies and decentralized apps.",
  },
  {
      id: 10,
      title: "Product Manager",
      company: "NextGen",
      location: "Austin, USA",
      description: "Drive the product development lifecycle from ideation to market launch.",
  },
  // Add more job listings as needed
];




const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const jobsContainer = document.getElementById('jobs');

searchButton.addEventListener('click', searchJobs);

function searchJobs() {
  const searchTerm = searchInput.value.toLowerCase();
  const jobItems = document.querySelectorAll('.job-item');

  jobItems.forEach(jobItem => {
    const jobTitle = jobItem.querySelector('h5').textContent.toLowerCase();
    const jobCompany = jobItem.querySelector('h6').textContent.toLowerCase();
    const jobLocation = jobItem.querySelector('.location').textContent.toLowerCase();
    const jobDescription = jobItem.querySelector('p').textContent.toLowerCase();

    if (
      jobTitle.includes(searchTerm) ||
      jobCompany.includes(searchTerm) ||
      jobLocation.includes(searchTerm) ||
      jobDescription.includes(searchTerm)
    ) {
      jobItem.style.display = 'flex';
    } else {
      jobItem.style.display = 'none';
    }
  });
}
function generateJobCards() {
  const jobContainer = document.getElementById("jobs");
  jobContainer.innerHTML = jobListings
    .map(
      (job) => `
      <div class="job-item">
         <div class="card">
           <div class="card-body">
              <h5>${job.title}</h5>
               <h6>${job.company}</h6>
              
              <p>${job.description}</p>
           </div>
  <div class="apply-btn">
  <span class="location">${job.location}</span>
  <button>Apply Now</button>
  </div>
  </div>
</div>
    `
    )
    .join("");
}

generateJobCards();
