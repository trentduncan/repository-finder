export async function getRepositories({
  searchTerm,
  language,
  pageNumber = 1
}) {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=${searchTerm}+language:${language}&page=${pageNumber}`
  );

  response = await response.json();

  return {
    totalResults: response.total_count,
    repositories: response.items.map(toRepository)
  };
}

function toRepository(item) {
  return {
    id: item.id || '', // TODO: if not given an id, generate uuid
    description: item.description || '',
    fullName: item.full_name || '',
    htmlURL: item.html_url || '',
    stars: item.stargazers_count || 0
  };
}
