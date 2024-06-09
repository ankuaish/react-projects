import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, title, body, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reaction,
        userId,
        tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going home",
    body: "isdfhidsfiusdfgifgifgidfgidfg jngfhgigidghifdgh",
    reaction: 2,
    userId: " user_1",
    tags: ["lol", "bol", "chol"],
  },
  {
    id: "2",
    title: "coming home",
    body: "isdfhidsfiusdfgifgifgidfgidfg jngfhgigidghifdgh",
    reaction: 10,
    userId: " user_10",
    tags: ["lol", "bol", "chol", "mota"],
  },
];
