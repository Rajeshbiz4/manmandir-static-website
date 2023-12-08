// src/components/PostsList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slice/postSlice";

function PostsList() {
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state?.post?.posts);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);

  // useEffect(() => {
  //   console.log("ABC", posts);
  // }, [posts]);

  //   useEffect(() => {
  //     if (status === "idle") {
  //       dispatch(fetchPosts());
  //     }
  //   }, [dispatch, status]);

  //   if (status === "loading") {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h2>Posts</h2>
      {posts && (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsList;
