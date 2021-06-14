/** Edit a todo */

import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import React, { useContext } from "react";
import { editTodo } from "../actions";
import { DispatchContext } from "../context";
import useInputState from "../hooks/useInputState";

const EditTodo = ({ id, task, toggleEdit }) => {
  const dispatch = useContext(DispatchContext);
  const [inputValue, handleChange, resetValue] = useInputState(task);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      dispatch(editTodo(id, inputValue));
      toggleEdit();
      resetValue();
    } else {
      setOpen(true);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600, width: "100%" }}>
        <TextField
          fullWidth
          autoFocus
          id="edit-todo"
          label="Edit todo"
          value={inputValue}
          onChange={handleChange}
          onClick={handleClick}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={(e) => toggleEdit()}>
                  <CancelIcon color="secondary" />
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
        <DialogTitle id="alert-dialog-title">Please enter a task.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The task cannot be blank in order to add to the list.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditTodo;
