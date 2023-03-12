import { applyMiddleware, createStore } from 'redux';
import reducer, { initialState } from './reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, initialState,  applyMiddleware(thunk));

export default store;