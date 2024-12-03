import classes from "./NewPost.module.css";

import Modal from "../components/Modal";
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import { PostType } from "../components/PostList";
import Routes from "../utils/routes";

const NewPost: React.FC = () => {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link type="button" to={".."}>
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action(data: ActionFunctionArgs<PostType>) {
  const post = await data.request.formData();
  const postData = Object.fromEntries(post);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect(Routes.Home);
}
