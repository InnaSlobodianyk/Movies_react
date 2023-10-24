import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import trendsReducer from './trendsReducer';
import popularsReducer from './popularsReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';

const reducerCombined = combineReducers({
  search: searchReducer,
  popular: popularsReducer,
  trends: trendsReducer,
  movie: movieReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default reducerCombined;