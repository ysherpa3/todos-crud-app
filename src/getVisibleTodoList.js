/** Return visible todo list depending on the selected filter */

export const getVisibleTodoList = (todoList, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todoList;
    case "SHOW_COMPLETED":
      return todoList.filter((todo) => todo.isComplete);
    case "SHOW_INCOMPLETE":
      return todoList.filter((todo) => !todo.isComplete);
    default:
      return todoList;
  }
};
