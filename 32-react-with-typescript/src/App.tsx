import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const todo = new Todo(todoText);

    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
