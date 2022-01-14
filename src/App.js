import { Provider } from 'react-redux';
import RepositoryContainer from './containers/RepositoryContainer';
import store from './redux/store';

// NOTE: This would usually have router logic for different pages
function App() {
  return (
    <Provider store={store}>
      <RepositoryContainer />
    </Provider>
  );
}

export default App;
