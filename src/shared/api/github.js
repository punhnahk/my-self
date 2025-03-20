import { useQuery } from "@tanstack/react-query";

// Function to fetch top repositories
export const fetchTopRepositories = async ({ queryKey }) => {
  const [_, username, limit] = queryKey;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&per_page=${limit}`
  );
  if (!response.ok) throw new Error(`GitHub API Error: ${response.statusText}`);

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
};

// Hook to get top repositories
export const useTopRepositories = (username, limit = 3) => {
  return useQuery({
    queryKey: ["topRepositories", username, limit],
    queryFn: fetchTopRepositories,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};

// Function to fetch all repositories
export const fetchAllRepositories = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`
  );
  if (!response.ok) throw new Error(`GitHub API Error: ${response.statusText}`);

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
};

// Hook to get all repositories
export const useAllRepositories = (username) => {
  return useQuery({
    queryKey: ["allRepositories", username],
    queryFn: fetchAllRepositories,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};

// Function to fetch user stats
export const fetchUserStats = async ({ queryKey = [] }) => {
  const [_, username] = queryKey;
  if (!username) throw new Error("Username is required to fetch user stats.");

  // Fetch user profile
  const userResponse = await fetch(`https://api.github.com/users/${username}`);
  if (!userResponse.ok)
    throw new Error(`GitHub API Error: ${userResponse.statusText}`);
  const userData = await userResponse.json();

  // Fetch repositories
  const repoResponse = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  );
  if (!repoResponse.ok)
    throw new Error(`GitHub API Error: ${repoResponse.statusText}`);
  const repos = await repoResponse.json();

  // Calculate stats
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
    repos,
  };
};

// Hook to get user stats
export const useUserStats = (username) => {
  return useQuery({
    queryKey: ["userStats", username],
    queryFn: fetchUserStats,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};

// Function to fetch commit data
export const fetchCommitData = async ({ queryKey }) => {
  const [_, username, repoName] = queryKey;
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repoName}/commits?per_page=100`
  );
  if (!response.ok) throw new Error(`GitHub API Error: ${response.statusText}`);

  const data = await response.json();
  return data.map((commit) => ({
    date: commit.commit.author.date,
    message: commit.commit.message,
  }));
};

// Hook to get commit data
export const useCommitData = (username, repoName) => {
  return useQuery({
    queryKey: ["commitData", username, repoName],
    queryFn: fetchCommitData,
    staleTime: 1000 * 60 * 10,
  });
};

// Function to fetch organization repos
const fetchOrgRepositories = async ({ queryKey }) => {
  const [_, orgName] = queryKey;
  const response = await fetch(`https://api.github.com/orgs/${orgName}/repos`);
  if (!response.ok) throw new Error(`GitHub API Error: ${response.statusText}`);

  return response.json();
};

// Hook to get organization repositories
export const useOrgRepositories = (orgName) => {
  return useQuery({
    queryKey: ["orgRepositories", orgName],
    queryFn: fetchOrgRepositories,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};
