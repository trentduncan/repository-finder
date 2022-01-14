import { useDispatch, useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm';
import RepositoryPage from '../pages/RepositoryPage';

function RepositoryContainer() {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);

  const repositories = appState.repositories;

  console.log(repositories);

  function handleInteraction(interaction) {
    console.log(interaction);
    switch (interaction.type) {
      case SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED: {
        dispatch({
          type: 'REPOSITORIES_FETCH_REQUESTED',
          searchTerm: interaction.searchTerm,
          language: interaction.language
        });
        return;
      }
      default:
        return;
    }
  }

  return <RepositoryPage onInteraction={handleInteraction} />;
}

export default RepositoryContainer;
