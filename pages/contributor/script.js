document.addEventListener("DOMContentLoaded", () => {
  const contributorsContainer = document.getElementById('contributors');
  const statsContainer = document.getElementById('stats');
  const loadingIndicator = document.getElementById('loading');
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');

  // Fetch contributors and repo stats
  async function fetchData() {
    showLoading(true);

    try {
      const [contributorsData, repoData] = await Promise.all([
        axios.get('https://api.github.com/repos/aditya-bhaumik/Pathsphere/contributors'),
        axios.get('https://api.github.com/repos/aditya-bhaumik/Pathsphere')
      ]);

      populateStats(repoData.data, contributorsData.data);
      populateContributors(contributorsData.data);
    } catch (error) {
      showError("Failed to load data. Please try again later.");
    } finally {
      showLoading(false);
    }
  }

  function showLoading(isLoading) {
    loadingIndicator.style.display = isLoading ? 'flex' : 'none';
  }

  function showError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message;
    document.body.appendChild(errorContainer);
    setTimeout(() => errorContainer.remove(), 5000);
  }

  function populateStats(repoData, contributors) {
    const stats = [
      { label: "Contributors", value: contributors.length, icon: getIcon('user-group') },
      { label: "Total Contributions", value: contributors.reduce((sum, contributor) => sum + contributor.contributions, 0), icon: getIcon('contribution') },
      { label: "GitHub Stars", value: repoData.stargazers_count, icon: getIcon('star') },
      { label: "Forks", value: repoData.forks_count, icon: getIcon('fork') },
    ];

    statsContainer.innerHTML = '';
    stats.forEach((stat, index) => {
      const statCard = createStatCard(stat);
      statsContainer.appendChild(statCard);
      animateElement(statCard, index);
    });
  }

  function createStatCard(stat) {
    const statCard = document.createElement('div');
    statCard.className = "stat-card";
    statCard.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <h3>${stat.value}</h3>
      <p>${stat.label}</p>
    `;
    statCard.style.opacity = '0';
    return statCard;
  }

  function populateContributors(contributors) {
    contributorsContainer.innerHTML = '';
    contributors.forEach((contributor, index) => {
      const contributorCard = createContributorCard(contributor);
      contributorsContainer.appendChild(contributorCard);
      animateElement(contributorCard, index);
    });
  }

  function createContributorCard(contributor) {
    const contributorCard = document.createElement('div');
    contributorCard.className = "contributor-card";
    contributorCard.innerHTML = `
      <img src="${contributor.avatar_url}" alt="${contributor.login}" />
      <h3>${contributor.login}</h3>
      <p>${contributor.type}</p>
      <div class="contributions">${contributor.contributions} contributions</div>
      <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
        ${getIcon('link')} View Profile
      </a>
    `;
    contributorCard.style.opacity = '0';
    return contributorCard;
  }

  function animateElement(element, index) {
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s, transform 0.5s';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  }

  function getIcon(name) {
    const icons = {
      'user-group': '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>',
      'contribution': '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0
