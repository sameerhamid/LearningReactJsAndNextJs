import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };
  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={changeBodyHandler}
          value={body}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={changeNameHandler}
          value={name}
        />
      </p>
    </form>
  );
}

export default NewPost;
