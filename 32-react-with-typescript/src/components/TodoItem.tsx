import React from "react";
import { Todo } from "../models/todo";
import classes from "./TodoItem.module.css";
interface TodoItemsPropsType {
  todoItem: Todo;
  onDeleteTodo?: (id: string) => void;
}

/**
 * A component representing a single Todo item in the list.
 * @param {TodoItemsPropsType} props
 * @prop {Todo} todoItem The todo item to be rendered.
 * @prop {function} [onDeleteTodo] Function to call when the delete button is clicked.
 * @returns {ReactElement} A li element representing the todo item.
 */
const TodoItem: React.FC<TodoItemsPropsType> = (props) => {
  const { todoItem, onDeleteTodo } = props;
  return (
    <li className={classes.item}>
      <div>{todoItem.text}</div>
      <button onClick={() => onDeleteTodo && onDeleteTodo(props.todoItem.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
