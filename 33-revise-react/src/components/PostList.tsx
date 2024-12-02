import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = () => {
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(true);

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

  /**
   * Hides the modal by updating the component state.
   */
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post body={enteredBody} author={enteredAuthor} />
      </ul>
    </>
  );
};

export default PostList;
