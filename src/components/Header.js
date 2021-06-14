/** Header */

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListIcon from "@material-ui/icons/List";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ListIcon fontSize="large" className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            React TodoList
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
