import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
interface PostListPropsType {
  isPosting: boolean;
  onStopPosting: () => void;
}

export interface PostType {
  id?: number;
  author: string;
  body: string;
}

const PostList: React.FC<PostListPropsType> = (props) => {
  const { isPosting, onStopPosting } = props;

  const [posts, setPosts] = useState<PostType[]>([]);

  const addPostHandler = (post: PostType) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const id = posts.length + 1;
    post.id = id;
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return <Post key={post.id} body={post.body} author={post.author} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <p>There are no post yet.</p>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
