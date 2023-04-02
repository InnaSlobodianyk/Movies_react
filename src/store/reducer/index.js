import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import trendsReducer from './trendsReducer';
import popularsReducer from './popularsReducer';
import movieReducer from './movieReducer';

const reducerCombined = combineReducers({
  search: searchReducer,
  popular: popularsReducer,
  trends: trendsReducer,
  movie: movieReducer
});

export default reducerCombined;