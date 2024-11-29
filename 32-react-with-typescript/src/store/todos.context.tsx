import React, { createContext, useContext, useState } from "react";
import { Todo } from "../models/todo";

interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

/**
 * The TodosContextProvider component provides a context for storing and
 * managing a list of todo items. It wraps the child components with a
 * TodosContext.Provider and provides a context value containing the list
 * of todos, a function to add a todo item, and a function to remove a todo
 * item.
 *
 * @returns {ReactElement} The TodosContextProvider component.
 */
const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  /**
   * Adds a new todo item to the list of todos.
   * @param {string} todoText The text of the todo item to be added.
   */
  const addTodo = (todoText: string) => {
    const todo = new Todo(todoText);

    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  /**
   * Removes a todo item from the list of todos, given its id.
   * @param {string} todoId The id of the todo item to be removed.
   */
  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextType = {
    todos,
    addTodo,
    removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

/**
 * Hook to access the TodosContext.
 *
 * Must be used within a TodosContextProvider.
 *
 * @returns The current state of the TodosContext.
 * @throws {Error} If used outside of a TodosContextProvider.
 */
export const useTodosContext = () => {
  if (!TodosContext) {
    throw new Error(
      "useTodosContext must be used within a TodosContextProvider"
    );
  }
  return useContext(TodosContext);
};

export default TodosContextProvider;
