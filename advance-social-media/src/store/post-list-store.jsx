import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostLists = createContext({
  postList: [],
  // fetching: [],
  addPost: () => {},
  deletePost: () => {},
  // addIniPost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INI_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

export const PostListsProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);
  // const addPost = (userId, title, body, reaction, tags) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payload: {
  //       title,
  //       body,
  //       reaction,
  //       userId,
  //       tags,
  //     },
  //   });
  // };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  const addIniPost = (posts) => {
    dispatchPostList({
      type: "ADD_INI_POST",
      payload: {
        posts,
      },
    });
  };

  // fetch data from server  //////////////////////

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addIniPost(data.posts);
  //       setFetching(false);
  //     });
  //   return () => {
  //     console.log("cleaning up using useEffect");
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostLists.Provider
      value={{ postList, addPost, deletePost /*fetching, addIniPost*/ }}
    >
      {children}
    </PostLists.Provider>
  );
};
