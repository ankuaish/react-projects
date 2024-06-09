import { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostLists } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

export const PostList = () => {
  // const { postList /*addIniPost, fetching */ } = useContext(PostLists);
  const postList = useLoaderData();

  // const handleGetPost = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addIniPost(data.posts);
  //     });
  // };

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {postList.length === 0 && (
        <WelcomeMessage /*onGetPost={handleGetPost}*/ />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
