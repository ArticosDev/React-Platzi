import { AppUI } from "./AppUI";
import React from "react";
import { TodoProvider } from "./components/TodoContext";


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
