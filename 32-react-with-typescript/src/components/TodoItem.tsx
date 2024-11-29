import React from "react";
import { Todo } from "../models/todo";
import classes from "./TodoItem.module.css";
import { useTodosContext } from "../store/todos.context";
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
  const { removeTodo } = useTodosContext();
  return (
    <li className={classes.item}>
      <div>{todoItem.text}</div>
      {/* <button
        onClick={onDeleteTodo && onDeleteTodo.bind(null, props.todoItem.id)}
      >
        Delete
      </button> */}

      <button onClick={removeTodo.bind(null, props.todoItem.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
