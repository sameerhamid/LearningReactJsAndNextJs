import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLaoyout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

//old way
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// new way
// Create the router and provide it to the RouterProvider
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Products /> },
// ]);

// routes with children

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLaoyout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
