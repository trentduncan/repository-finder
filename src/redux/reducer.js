export const reducer = (currentState = {}, action) => {
  switch (action.type) {
    case 'REPOSITORIES_FETCH_REQUESTED': {
      return {
        ...currentState,
        isLoadingRepositories: true,
        currentSearchParameters: {
          searchTerm: action.searchTerm,
          language: action.language,
          pageNumber: action.pageNumber
        }
      };
    }
    case 'REPOSITORIES_FETCH_SUCCEEDED': {
      return {
        ...currentState,
        isLoadingRepositories: false,
        repositories: action.repositories,
        totalResults: action.totalResults
      };
    }
    default:
      return currentState;
  }
};

export default reducer;
