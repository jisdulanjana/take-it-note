import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todoinput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  return (
    <>
      <Todoinput />
      <TodoList />
    </>
  );
}

export default App;
