import React from "react";
import classes from "./Post.module.css";
interface PostPropsType {
  author: string;
  body: string;
}
const Post: React.FC<PostPropsType> = (props) => {
  const { body, author } = props;
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
};

export default Post;
