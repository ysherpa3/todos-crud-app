/** Action creators */

export const addTodo = (task) => {
  return { type: "ADD_TODO", task };
};

export const removeTodo = (id) => {
  return { type: "REMOVE_TODO", id };
};

export const toggleTodo = (id) => {
  return { type: "TOGGLE_TODO", id };
};

export const editTodo = (id, task) => {
  return { type: "EDIT_TODO", id, task };
};

export const setVisibilityFilter = (filter) => {
  return { type: "SET_VISIBILITY_FILTER", filter };
};
