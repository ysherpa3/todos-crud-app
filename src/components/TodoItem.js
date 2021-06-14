/** Todo item */

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { memo, useContext, useState } from "react";

import { removeTodo, toggleTodo } from "../actions";
import { DispatchContext } from "../context";
import useToggleState from "../hooks/useToggleState";
import EditTodo from "./EditTodo";

const TodoItem = ({ id, task, isComplete }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    setOpen(false);
  };

  // If editing todo, show edit todo form
  if (isEditing) {
    return (
      <ListItem onClick={() => toggle()}>
        <EditTodo id={id} task={task} toggleEdit={toggle} />
      </ListItem>
    );
  }

  return (
    <>
      <ListItem
        dense
        style={{
          backgroundColor: "#e2e2e2",
          margin: "16px 0",
          boxShadow:
            "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        }}
      >
        {/* Checkbox to show/change if a todo is complete/incomplete */}
        <ListItemIcon onClick={() => dispatch(toggleTodo(id))}>
          <Checkbox
            aria-label="toggle"
            id="toggle-todo"
            edge="start"
            color="primary"
            checked={isComplete}
            tabIndex={-1}
            title={isComplete ? "Mark incomplete" : "Mark complete"}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          style={{
            textDecoration: isComplete ? "line-through" : "",
          }}
        >
          {task}
        </ListItemText>
        {/* Buttons to delete or edit todo */}
        <ListItemSecondaryAction>
          <IconButton
            aria-label="delete"
            onClick={() => setOpen(true)}
            title="Delete"
          >
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton
            title="Edit"
            aria-label="edit"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <EditIcon htmlColor="#e1ad01" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* Delete todo confirmation dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete <strong>{task}</strong>?
          </DialogContentText>
        </DialogContent>
        {/* Buttons to cancel or proceed with delete todo */}
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeTodo(id));
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(TodoItem);
