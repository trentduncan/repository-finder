export const reducer = (currentState = {}, action) => {
  switch (action.type) {
    case 'REPOSITORIES_FETCH_REQUESTED': {
      return {
        ...currentState,
        isLoadingRepositories: true
      };
    }
    case 'REPOSITORIES_FETCH_SUCCEEDED': {
      return {
        ...currentState,
        isLoadingRepositories: false,
        repositories: action.repositories
      };
    }
    default:
      return currentState;
  }
};

export default reducer;
