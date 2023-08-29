import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import trendsReducer from './trendsReducer';
import popularsReducer from './popularsReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

const reducerCombined = combineReducers({
  search: searchReducer,
  popular: popularsReducer,
  trends: trendsReducer,
  movie: movieReducer,
  user: userReducer
});

export default reducerCombined;