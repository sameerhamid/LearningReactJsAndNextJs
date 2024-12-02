import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = () => {
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");
  const [enteredBody, setEnteredBody] = useState<string>("");

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };
  const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };
  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post body={enteredBody} author={enteredAuthor} />
      </ul>
    </>
  );
};

export default PostList;
