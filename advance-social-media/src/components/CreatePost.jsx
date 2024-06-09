import { useContext, useRef } from "react";
import { PostLists } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

export const CreatePost = () => {
  // const { addPost } = useContext(PostLists);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const titleElement = useRef();
  // const bodyElement = useRef();
  // const reactionElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const title = titleElement.current.value;
  //   const body = bodyElement.current.value;
  //   const reaction = reactionElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   userIdElement.current.value = "";
  //   titleElement.current.value = "";
  //   bodyElement.current.value = "";
  //   reactionElement.current.value = "";
  //   tagsElement.current.value = "";

  //   first add data to server then fetch from server

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title,
  //       body,
  //       reaction,
  //       userId,
  //       tags,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       addPost(post);
  //       navigate("/");
  //     });

  // addPost(userId, title, body, reaction, tags);
  // };
  return (
    <>
      <Form method="POST" className="create-post" /*onSubmit={handleSubmit}*/>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            // ref={userIdElement}
            name="userId"
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
            // ref={titleElement}
            name="title"
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
            // ref={bodyElement}
            name="body"
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
            // ref={reactionElement}
            name="reaction"
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
            name="tags"
            id="tags"
            // ref={tagsElement}
            placeholder="Enter your tags by giving space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          post
        </button>
      </Form>
    </>
  );
};
// export async function createPostAction(data)
export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};
