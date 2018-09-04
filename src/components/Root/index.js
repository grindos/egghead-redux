import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
