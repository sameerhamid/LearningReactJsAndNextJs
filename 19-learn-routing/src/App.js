import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

//old way
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

// new way
// Create the router and provide it to the RouterProvider
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Products /> },
// ]);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
