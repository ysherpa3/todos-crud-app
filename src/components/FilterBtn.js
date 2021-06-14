/** Filter button */

import { Button } from "@material-ui/core";
import React from "react";

const FilterBtn = ({ isActive, children, onClick, title }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isActive}
      onClick={onClick}
      style={{ borderRadius: 0 }}
      title={title}
    >
      {children}
    </Button>
  );
};

export default FilterBtn;
