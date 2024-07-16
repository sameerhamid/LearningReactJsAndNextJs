import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state) => state.cart);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  useEffect(() => {
    fetch(
      "https://react-shopping-cart-6be95-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
