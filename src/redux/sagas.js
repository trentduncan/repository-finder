import { put, takeLatest } from 'redux-saga/effects';
import { getRepositories } from '../api';

function* getRepositoriesSaga(action) {
  try {
    const response = yield getRepositories({
      searchTerm: action.searchTerm,
      language: action.language
    });

    yield put({
      type: 'REPOSITORIES_FETCH_SUCCEEDED',
      repositories: response.items,
      totalResults: response.total_count
    });
  } catch (error) {
    yield put({ type: 'REPOSITORIES_FETCH_FAILED', message: error.message });
  }
}

export function* rootSaga() {
  yield takeLatest('REPOSITORIES_FETCH_REQUESTED', getRepositoriesSaga);
}

export default rootSaga;
