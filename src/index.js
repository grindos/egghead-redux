import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import throttle from 'lodash/throttle';

import reducer from './reducers';
import TodoApp from './TodoApp';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
