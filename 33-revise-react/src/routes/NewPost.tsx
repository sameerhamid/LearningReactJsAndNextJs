import { useState } from "react";
import classes from "./NewPost.module.css";
import { PostType } from "../components/PostList";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
interface NewPostPropsType {
  onAddPost: (post: PostType) => void;
}
const NewPost: React.FC<NewPostPropsType> = (props) => {
  const { onAddPost } = props;
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");
  const [enteredBody, setEnteredBody] = useState<string>("");
  /**
   * Handles the change event of the text area for the post body.
   * Updates the component state with the changed value.
   * @param event The event object for the change event.
   */
  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  /**
   * Handles the change event of the text input for the post author.
   * Updates the component state with the changed value.
   * @param event The event object for the change event.
   */
  const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const post: PostType = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(post);
    setEnteredAuthor("");
    setEnteredBody("");
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link type="button" to={".."}>
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
