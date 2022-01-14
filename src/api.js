export async function getRepositories({
  searchTerm,
  language,
  pageNumber = 1
}) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${searchTerm}+language:${language}&page=${pageNumber}`
  );
  return await response.json();
}
