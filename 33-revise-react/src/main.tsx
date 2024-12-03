import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./utils/routes.ts";
import NewPost from "./components/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: Routes.NewPost,
        element: <NewPost onCancel={() => {}} onAddPost={() => {}} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
