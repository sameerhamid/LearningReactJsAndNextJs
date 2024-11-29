import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

interface TodosPropsType {
  todos: Todo[];
  onDeleteTodo?: (id: string) => void;
}
const Todos: React.FC<TodosPropsType> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            onDeleteTodo={props.onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
