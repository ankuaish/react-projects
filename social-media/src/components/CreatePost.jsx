import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

export const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, title, body, reaction, tags);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="title"
            placeholder="Enter your Post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            type="text"
            ref={bodyElement}
            className="form-control"
            id="body"
            placeholder="Enter your Post content"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            people reacted
          </label>
          <input
            type="number"
            className="form-control"
            ref={reactionElement}
            id="reaction"
            placeholder="Enter your reaction"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags for post
          </label>
          <input
            type="ext"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Enter your tags by giving space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          post
        </button>
      </form>
    </>
  );
};
