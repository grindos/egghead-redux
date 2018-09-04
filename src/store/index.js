import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import throttle from 'lodash/throttle';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  const store = createStoreWithMiddleware(reducer, persistedState);

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }), 1000);

  return store;
};

export default configureStore;
