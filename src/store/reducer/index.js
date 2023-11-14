import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import trendsReducer from './trendsReducer';
import popularsReducer from './popularsReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';
import languageReducer from './languageReducer';

const reducerCombined = combineReducers({
  search: searchReducer,
  popular: popularsReducer,
  trends: trendsReducer,
  movie: movieReducer,
  user: userReducer,
  favorites: favoritesReducer,
  language: languageReducer,
});

export default reducerCombined;