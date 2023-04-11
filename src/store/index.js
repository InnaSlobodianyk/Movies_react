import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducerCombined from './reducer';

const store = createStore( reducerCombined, applyMiddleware(thunk) );

export default store;