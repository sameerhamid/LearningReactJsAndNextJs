import React from "react";
import classes from "./NewTodo.module.css";
import { useTodosContext } from "../store/todos.context";
interface NewTodoPropsType {
  onAddTodo?: (text: string) => void;
}

/**
 * NewTodo is a form that allows the user to enter a new Todo item.
 *
 * It accepts a single prop, `onAddTodo`, which is a function that will be
 * called when the user submits the form. The function should accept a string
 * argument, which is the text of the new Todo item.
 *
 * The component renders a form with a single text input, labeled "Todo Text",
 * and a submit button labeled "Add Todo". When the form is submitted, the
 * `onAddTodo` function is called with the value of the text input as an
 * argument. The text input is cleared after submission.
 */
const NewTodo: React.FC<NewTodoPropsType> = (props) => {
  //   const { onAddTodo } = props;
  const { addTodo } = useTodosContext();
  const todoTextRef = React.useRef<HTMLInputElement>(null);
  /**
   * Handles the form submission event for adding a new Todo item.
   *
   * Prevents the default form submission behavior, retrieves the entered text
   * from the input referenced by `todoTextRef`, and calls the `onAddTodo`
   * function with the entered text if it is not empty. Clears the text input
   * after submission.
   *
   * @param event - The form submission event.
   */
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    // onAddTodo(enteredText);
    addTodo(enteredText);
    todoTextRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" name="todo-text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
