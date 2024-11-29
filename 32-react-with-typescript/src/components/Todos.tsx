import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { useTodosContext } from "../store/todos.context";

interface TodosPropsType {
  // todos: Todo[];
  // onDeleteTodo?: (id: string) => void;
}
const Todos: React.FC<TodosPropsType> = (props) => {
  const { todos } = useTodosContext();
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => {
        return (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            // onDeleteTodo={props.onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
