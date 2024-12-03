import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Posts, { loader as postLoader } from "./routes/Posts.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./utils/routes.ts";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: Routes.NewPost,
            element: <NewPost />,
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
