/** Buttons to change todo list visibility according to the selected filter */

import { ButtonGroup } from "@material-ui/core";
import React, { useContext } from "react";

import { setVisibilityFilter } from "../actions";
import { DispatchContext } from "../context";
import FilterBtn from "./FilterBtn";

const VisibilityFilters = ({ filter, setFilter }) => {
  const dispatch = useContext(DispatchContext);

  const handleClick = (e, filter) => {
    e.preventDefault();
    setFilter(filter);
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <ButtonGroup
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FilterBtn
        isActive={filter === "SHOW_ALL"}
        onClick={(e) => handleClick(e, "SHOW_ALL")}
        title="Show all todos"
      >
        All
      </FilterBtn>
      <FilterBtn
        isActive={filter === "SHOW_COMPLETED"}
        onClick={(e) => handleClick(e, "SHOW_COMPLETED")}
        title="Show completed todos"
      >
        Completed
      </FilterBtn>
      <FilterBtn
        isActive={filter === "SHOW_INCOMPLETE"}
        onClick={(e) => handleClick(e, "SHOW_INCOMPLETE")}
        title="Show incomplete todos"
      >
        Incomplete
      </FilterBtn>
    </ButtonGroup>
  );
};

export default VisibilityFilters;
