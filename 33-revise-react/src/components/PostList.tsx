import React, { useEffect, useState } from "react";

import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

export interface PostType {
  id?: number;
  author: string;
  body: string;
}

const PostList: React.FC = () => {
  const posts: PostType[] = useLoaderData();

  return (
    <>
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
