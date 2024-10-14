const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, USA",
    description: "Develop and maintain web applications using modern frameworks.",
    salary: "$90K - $120K",
    tools: ["JavaScript", "React", "Node.js"],
    logo: "./job_images/manage.png",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataSolutions",
    location: "San Francisco, USA",
    description: "Analyze large datasets to extract insights and support decision-making.",
    salary: "$110K - $150K",
    tools: ["Python", "R", "TensorFlow"],
    logo: "./job_images/data_science.jpeg", // updated path
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "London, UK",
    description: "Design intuitive and responsive interfaces for web and mobile applications.",
    salary: "$70K - $100K",
    tools: ["Sketch", "Figma", "Adobe XD"],
    logo: "./job_images/design.jpg",
  },
  {
    id: 4,
    title: "Project Manager",
    company: "Business Solutions",
    location: "Toronto, Canada",
    description: "Oversee project execution and ensure timely delivery within scope and budget.",
    salary: "$100K - $130K",
    tools: ["Jira", "Asana", "Trello"],
    logo: "./job_images/innovation.png",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Berlin, Germany",
    description: "Implement CI/CD pipelines, automate infrastructure, and manage cloud services.",
    salary: "$95K - $140K",
    tools: ["Docker", "Kubernetes", "AWS"],
    logo: "./job_images/download.png",
  },
  {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "SecureWorks",
      location: "Sydney, Australia",
      description: "Monitor and analyze security systems to prevent data breaches and cyberattacks.",
      salary: "$105K - $160K",
      tools: ["Network Security", "Penetration Testing", "Firewalls", "Encryption", "Azure"],
      logo: "./job_images/secure.png",
  },
  {
      id: 7,
      title: "Full-Stack Developer",
      company: "InnoTech",
      location: "Paris, France",
      description: "Build end-to-end solutions, from front-end to back-end, for enterprise applications.",
      salary: "$100K - $150K",
      tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      logo: "./job_images/fullstack.jpeg",
  },
  {
      id: 8,
      title: "Marketing Specialist",
      company: "Brandify",
      location: "Dubai, UAE",
      description: "Develop and execute marketing campaigns to enhance brand visibility and engagement.",
      salary: "$70K - $110K",
      tools: ["SEO", "Google Analytics", "Social Media", "Content Marketing", "Brand Strategy"],
      logo: "./job_images/market.png",
  },
  {
      id: 9,
      title: "Blockchain Developer",
      company: "Crypto Solutions",
      location: "Singapore",
      description: "Design, implement, and maintain blockchain technologies and decentralized apps.",
      salary: "$120K - $180K",
      tools: ["Ethereum", "Solidity", "Smart Contracts", "DeFi", "Cryptography"],
      logo: "./job_images/download (2).png",
  },
  {
      id: 10,
      title: "Product Manager",
      company: "NextGen",
      location: "Austin, USA",
      description: "Drive the product development lifecycle from ideation to market launch.",
      salary: "$130K - $200K",
      tools: ["Agile", "Scrum", "JIRA", "Stakeholder Management", "Product Roadmap"],
      logo: "./job_images/product.png",
  },
  // Add more job listings as needed
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const jobsContainer = document.getElementById('jobs');

searchButton.addEventListener('click', searchJobs);
searchInput.addEventListener('keyup', liveSearchJobs);

function searchJobs() {
  const searchTerm = searchInput.value.toLowerCase();
  filterJobs(searchTerm);
}

function liveSearchJobs() {
  const searchTerm = searchInput.value.toLowerCase();
  filterJobs(searchTerm);
}

function filterJobs(searchTerm) {
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
          <div class="card-header">
            <img src="${job.logo}" alt="${job.company} Logo" class="company-logo">
          </div>
          <div class="card-body">
            <h5>${job.title}</h5>
            <h6>${job.company}</h6>
            <span class="location">${job.location}</span>
            <p>${job.description}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Required Tools:</strong> ${job.tools.join(", ")}</p>
          </div>
          <div class="apply-btn">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

generateJobCards();