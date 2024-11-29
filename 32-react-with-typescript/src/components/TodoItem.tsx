import React from "react";
import { Todo } from "../models/todo";
import classes from "./TodoItem.module.css";
interface TodoItemsPropsType {
  todoItem: Todo;
}

const TodoItem: React.FC<TodoItemsPropsType> = (props) => {
  return <li className={classes.item}>{props.todoItem.text}</li>;
};

export default TodoItem;
