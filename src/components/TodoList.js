/** Todo list */

import { Box, List, Typography } from "@material-ui/core";
import React, { useContext } from "react";

import { TodosContext } from "../context";
import { getVisibleTodoList } from "../getVisibleTodoList";
import TodoItem from "./TodoItem";

const TodoList = ({ filter }) => {
  const todoList = useContext(TodosContext);

  // Get visible todo list depending on the selected filter
  const visibleTodoList = getVisibleTodoList(todoList, filter);

  return (
    <>
      {visibleTodoList.length === 0 ? (
        <Box my={2}>
          <Typography>No tasks found.</Typography>
        </Box>
      ) : (
        <List style={{ maxWidth: 600, margin: "16px 0" }}>
          {visibleTodoList.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
