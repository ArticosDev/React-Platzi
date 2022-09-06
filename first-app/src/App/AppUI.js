import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return(
        <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos} />
  
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
  
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUI };