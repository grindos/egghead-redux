import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <TodoList
      filter={match.params.filter || 'all'}
    />
    <Footer />
  </div>
);
TodoApp.propTypes = {
  match: PropTypes.object,
};

export default TodoApp;
