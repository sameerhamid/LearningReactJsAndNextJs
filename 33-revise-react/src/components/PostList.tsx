import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post body="My First Post" author="Max" />
        <Post body="My Second Post" author="Max" />
      </ul>
    </>
  );
};

export default PostList;
