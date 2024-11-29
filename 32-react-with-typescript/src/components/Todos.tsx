import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

interface TodosPropsType {
  todos: Todo[];
}
const Todos: React.FC<TodosPropsType> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => {
        return <TodoItem todoItem={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default Todos;
