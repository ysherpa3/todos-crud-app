/** Todos reducer */

import { v4 as uuidv4 } from "uuid";

export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuidv4(), task: action.task, isComplete: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};
