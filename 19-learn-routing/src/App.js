import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

// Create the router and provide it to the RouterProvider
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
