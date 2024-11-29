import React from "react";
import { Todo } from "../models/todo";

interface TodoItemsPropsType {
  todoItem: Todo;
}

const TodoItem: React.FC<TodoItemsPropsType> = (props) => {
  return <li>{props.todoItem.text}</li>;
};

export default TodoItem;
