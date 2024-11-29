import React from "react";
import classes from "./NewTodo.module.css";
interface NewTodoPropsType {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoPropsType> = (props) => {
  const { onAddTodo } = props;
  const todoTextRef = React.useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
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
