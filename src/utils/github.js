// Function to fetch top repositories based on stars
export const fetchTopRepositories = async (username, limit = 3) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=${limit}`
    );
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at,
      homepage: repo.homepage,
      size: repo.size,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      language: repo.language,
      forks_count: repo.forks_count,
      archived: repo.archived,
      open_issues_count: repo.open_issues_count,
      license: repo.license ? repo.license.name : "No License",
      visibility: repo.visibility,
      default_branch: repo.default_branch,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error("Error fetching top repositories:", error);
    return [];
  }
};

// Function to fetch all repositories
export const fetchAllRepositories = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at,
      homepage: repo.homepage,
      size: repo.size,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      language: repo.language,
      forks_count: repo.forks_count,
      archived: repo.archived,
      open_issues_count: repo.open_issues_count,
      license: repo.license ? repo.license.name : "No License",
      visibility: repo.visibility,
      default_branch: repo.default_branch,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error("Error fetching all repositories:", error);
    return [];
  }
};

// Function to fetch user stats
export const fetchUserStats = async (username) => {
  try {
    // Fetch user profile details
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    if (!userResponse.ok) {
      throw new Error(`GitHub API Error: ${userResponse.statusText}`);
    }
    const userData = await userResponse.json();

    // Fetch repositories
    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    );
    if (!repoResponse.ok) {
      throw new Error(`GitHub API Error: ${repoResponse.statusText}`);
    }
    const repos = await repoResponse.json();

    // Calculate total stars and forks
    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return {
      totalStars,
      totalForks,
      followers: userData.followers,
      following: userData.following,
      publicRepos: userData.public_repos,
      repos, // Include repository data
    };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return {};
  }
};

// Function to fetch commit data from a repository
export const fetchCommitData = async (username, repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/commits?per_page=100`
    );
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((commit) => ({
      date: commit.commit.author.date,
      message: commit.commit.message,
    }));
  } catch (error) {
    console.error("Error fetching commit data:", error);
    return [];
  }
};

export const fetchOrg = async (orgs) => {
  const res = await fetch(`https://api.github.com/orgs/${orgs}/repos`);
  const repositories = await res.json();

  return { props: { repositories } };
};
