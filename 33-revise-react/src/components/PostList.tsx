import React, { useEffect, useState } from "react";
import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

export interface PostType {
  id?: number;
  author: string;
  body: string;
}

const PostList: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

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
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return <Post key={post.id} body={post.body} author={post.author} />;
          })}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
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
      {isFetching && (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
