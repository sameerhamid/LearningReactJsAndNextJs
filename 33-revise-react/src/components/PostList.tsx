import React, { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
interface PostListPropsType {
  isPosting: boolean;
  onStopPosting: () => void;
}

const PostList: React.FC<PostListPropsType> = (props) => {
  const { isPosting, onStopPosting } = props;
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

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
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
