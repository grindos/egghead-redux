import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import toggleTodo from './actions';
import Todo from './Todo';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return [];
  }
};

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

const mapStateTodoToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.match.params.filter || 'all'),
});

const mapDispatchTodoToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});

export default withRouter(connect(mapStateTodoToProps, mapDispatchTodoToProps)(TodoList));
