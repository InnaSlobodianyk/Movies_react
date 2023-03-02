import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import reducer, { initialState } from 'store/reducer';

import App from './App';

import './index.css';

const store = createStore(reducer, initialState,  applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);