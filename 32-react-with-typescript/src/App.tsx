import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";
import TodosContextProvider, { useTodosContext } from "./store/todos.context";

function App() {
  // const [todos, setTodos] = React.useState<Todo[]>([]);

  // /**
  //  * Adds a new todo item to the list of todos.
  //  * @param {string} todoText The text of the todo item to be added.
  //  */
  // const addTodoHandler = (todoText: string) => {
  //   const todo = new Todo(todoText);

  //   setTodos((prevTodos) => [...prevTodos, todo]);
  // };

  // /**
  //  * Handles the deletion of a todo item, given its id.
  //  * @param {string} todoId The id of the todo item to be deleted.
  //  */
  // const deleteTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  // };

  return (
    <TodosContextProvider>
      <div>
        {/* <NewTodo onAddTodo={addTodoHandler} /> */}
        {/* <Todos todos={todos} onDeleteTodo={deleteTodoHandler} /> */}
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
