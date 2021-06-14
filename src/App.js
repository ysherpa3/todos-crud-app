/** Main app */

import {
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core";
import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import TodosProvider from "./context";

const App = () => {
  const [filter, setFilter] = useState("SHOW_ALL");
  const theme = useTheme();

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <div className="App">
        <Header />
        <div style={{ flex: 1, margin: "auto", maxWidth: 600, width: "100%" }}>
          <TodosProvider>
            <AddTodo />
            <TodoList filter={filter} />
            <VisibilityFilters filter={filter} setFilter={setFilter} />
          </TodosProvider>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
