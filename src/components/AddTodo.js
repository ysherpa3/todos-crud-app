/** Add new todo */

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext, useState } from "react";

import { addTodo } from "../actions";
import { DispatchContext } from "../context";
import useInputState from "../hooks/useInputState";

let AddTodo = () => {
  const dispatch = useContext(DispatchContext);
  const [inputValue, handleChange, resetValue] = useInputState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      dispatch(addTodo(inputValue));
      resetValue();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 600, padding: "8px", width: "100%" }}
      >
        <TextField
          fullWidth
          id="add-todo"
          label="Enter todo"
          value={inputValue}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="add todo"
                  onClick={handleSubmit}
                  title="Add"
                >
                  <AddIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {/* Dialog to show if input is empty */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Nothing Entered</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter a todo
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTodo;
