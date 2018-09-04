let nextTodoId = 0;
const addTodo = text => {
  const result = {
    type: 'ADD_TODO',
    id: nextTodoId,
    text,
  };
  nextTodoId += 1;
  return result;
};

export default addTodo;
