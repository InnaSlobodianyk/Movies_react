import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducerCombined from './reducer';

import { searchInitialState } from './reducer/searchReducer';
import { trendsInitialState } from './reducer/trendsReducer';
import { popularsInitialState } from './reducer/popularsReducer';
import { movieInitialState } from './reducer/movieReducer';

const store = createStore(
  reducerCombined,
  {
    search: searchInitialState,
    popular: popularsInitialState,
    trends: trendsInitialState,
    movie: movieInitialState
  },
  applyMiddleware(thunk)
);

export default store;