import React, { createContext } from "react";

import useSessionStorage from "./hooks/useSessionStorage";
import { todos as todosReducer } from "./reducers/todos";

const initialTodoList = [];

export const TodosContext = createContext();
export const DispatchContext = createContext();

const TodosProvider = (props) => {
  const [todoList, dispatch] = useSessionStorage(
    "todoList",
    todosReducer,
    initialTodoList
  );

  return (
    <TodosContext.Provider value={todoList}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodosProvider;
