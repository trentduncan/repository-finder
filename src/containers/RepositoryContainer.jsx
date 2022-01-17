import { useDispatch, useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm';
import RepositoryPage from '../pages/RepositoryPage';

function RepositoryContainer() {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);

  function handleInteraction(interaction) {
    switch (interaction.type) {
      case SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED: {
        dispatch({
          type: 'REPOSITORIES_FETCH_REQUESTED',
          searchTerm: interaction.searchTerm,
          language: interaction.language,
          pageNumber: 1
        });
        return;
      }
      case RepositoryPage.INTERACTION_PAGE_CHANGED: {
        dispatch({
          type: 'REPOSITORIES_FETCH_REQUESTED',
          searchTerm: appState.currentSearchParameters.searchTerm,
          language: appState.currentSearchParameters.language,
          pageNumber: interaction.pageNumber
        });
        return;
      }
      default:
        return;
    }
  }

  return (
    <RepositoryPage
      isLoadingRepositories={appState.isLoadingRepositories}
      repositories={appState.repositories}
      totalResults={appState.totalResults}
      onInteraction={handleInteraction}
    />
  );
}

export default RepositoryContainer;
