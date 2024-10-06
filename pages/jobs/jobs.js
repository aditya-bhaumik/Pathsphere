const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York, USA',
    description:
      'Develop and maintain web applications using modern frameworks.',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'DataSolutions',
    location: 'San Francisco, USA',
    description:
      'Analyze large datasets to extract insights and support decision-making.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'London, UK',
    description:
      'Design intuitive and responsive interfaces for web and mobile applications.',
  },
  {
    id: 4,
    title: 'Project Manager',
    company: 'Business Solutions',
    location: 'Toronto, Canada',
    description:
      'Oversee project execution and ensure timely delivery within scope and budget.',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Berlin, Germany',
    description:
      'Implement CI/CD pipelines, automate infrastructure, and manage cloud services.',
  },
  {
    id: 6,
    title: 'Cybersecurity Analyst',
    company: 'SecureWorks',
    location: 'Sydney, Australia',
    description:
      'Monitor and analyze security systems to prevent data breaches and cyberattacks.',
  },
  {
    id: 7,
    title: 'Full-Stack Developer',
    company: 'InnoTech',
    location: 'Paris, France',
    description:
      'Build end-to-end solutions, from front-end to back-end, for enterprise applications.',
  },
  {
    id: 8,
    title: 'Marketing Specialist',
    company: 'Brandify',
    location: 'Dubai, UAE',
    description:
      'Develop and execute marketing campaigns to enhance brand visibility and engagement.',
  },
  {
    id: 9,
    title: 'Blockchain Developer',
    company: 'Crypto Solutions',
    location: 'Singapore',
    description:
      'Design, implement, and maintain blockchain technologies and decentralized apps.',
  },
  {
    id: 10,
    title: 'Product Manager',
    company: 'NextGen',
    location: 'Austin, USA',
    description:
      'Drive the product development lifecycle from ideation to market launch.',
  },
  // Additional job listings
  {
    id: 11,
    title: 'AI Researcher',
    company: 'InnovAI',
    location: 'Tokyo, Japan',
    description:
      'Conduct research on AI algorithms and develop advanced machine learning models.',
  },
  {
    id: 12,
    title: 'Mobile App Developer',
    company: 'AppWorld',
    location: 'Seoul, South Korea',
    description:
      'Develop native mobile apps for Android and iOS platforms using modern technologies.',
  },
  {
    id: 13,
    title: 'Cloud Architect',
    company: 'Cloudify',
    location: 'Melbourne, Australia',
    description:
      'Design and manage scalable cloud infrastructure for enterprise solutions.',
  },
  {
    id: 14,
    title: 'Machine Learning Engineer',
    company: 'AI Labs',
    location: 'Boston, USA',
    description:
      'Build and optimize machine learning models for real-time applications.',
  },
  {
    id: 15,
    title: 'Quality Assurance Engineer',
    company: 'TestTech',
    location: 'Munich, Germany',
    description:
      'Develop and execute tests to ensure software quality and functionality.',
  },
  {
    id: 16,
    title: 'HR Specialist',
    company: 'PeopleFirst',
    location: 'Amsterdam, Netherlands',
    description:
      'Manage recruitment processes and support employee development programs.',
  },
  {
    id: 17,
    title: 'Content Strategist',
    company: 'MediaCorp',
    location: 'Los Angeles, USA',
    description:
      'Create and manage content strategies to enhance digital presence and engagement.',
  },
  {
    id: 18,
    title: 'Technical Writer',
    company: 'DocuFlow',
    location: 'Bangalore, India',
    description:
      'Write and maintain technical documentation for software products and services.',
  },
];

// Get references to DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const jobsContainer = document.getElementById('jobs');

// Display all jobs by default
generateJobCards();

// Event listener for search button
searchButton.addEventListener('click', searchJobs);

function searchJobs() {
  const searchTerm = searchInput.value.toLowerCase();
  const jobItems = document.querySelectorAll('.job-item');
  let found = false; // To track if any job matches the search term

  jobItems.forEach((jobItem) => {
    const jobTitle = jobItem.querySelector('h5').textContent.toLowerCase();
    const jobCompany = jobItem.querySelector('h6').textContent.toLowerCase();
    const jobLocation = jobItem
      .querySelector('.location')
      .textContent.toLowerCase();
    const jobDescription = jobItem.querySelector('p').textContent.toLowerCase();

    if (
      jobTitle.includes(searchTerm) ||
      jobCompany.includes(searchTerm) ||
      jobLocation.includes(searchTerm) ||
      jobDescription.includes(searchTerm)
    ) {
      jobItem.style.display = 'flex'; // Show job if it matches the search term
      found = true;
    } else {
      jobItem.style.display = 'none'; // Hide job if it doesn't match
    }
  });

  // If no jobs found, display the message
  if (!found) {
    jobsContainer.innerHTML = `<p class="no-jobs"><strong>No jobs found for your search criteria.</strong></p>`;
  }
}

// Function to generate job cards and display all jobs by default
function generateJobCards() {
  jobsContainer.innerHTML = jobListings
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
    .join('');
}

// Function to filter jobs based on search input
function filterJobs() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.getElementsByClassName('job-item');

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
function applyForJob(jobTitle) {
  alert(`You have applied for the ${jobTitle}.`);
}
