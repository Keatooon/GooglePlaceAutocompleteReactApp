import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Provider } from 'react-redux';
import autocompleteEpic from '../epics/autocompleteEpic';
import searchReducer from './reducers/searchReducer';
import AutocompleteInput from '../components/AutocompleteInput';

const rootEpic = combineEpics(autocompleteEpic);
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [...getDefaultMiddleware(), epicMiddleware],
});

epicMiddleware.run(rootEpic);

const App = () => (
  <Provider store={store}>
    <AutocompleteInput />
  </Provider>
);

export default App;
