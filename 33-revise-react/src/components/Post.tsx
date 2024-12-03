import React from "react";
import classes from "./Post.module.css";
import { PostType } from "./PostList";
import { Link } from "react-router-dom";
interface PostPropsType {
  post: PostType;
}
const Post: React.FC<PostPropsType> = (props) => {
  const { post } = props;
  return (
    <li className={classes.post}>
      <Link to={post.id}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </Link>
    </li>
  );
};

export default Post;
