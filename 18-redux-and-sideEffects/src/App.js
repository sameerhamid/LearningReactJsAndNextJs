import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  useEffect(() => {
    const sendCardData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Sending Cart Data",
          message: "Please wait...",
        })
      );
      const response = await fetch(
        "https://react-shopping-cart-6be95-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const responseData = await response.json();

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Cart Data Sent",
          message: "Your cart data has been sent successfully.",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCardData().catch((err) => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Failed to Send Cart Data",
          message: "Failed to send cart data. Please try again later.",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
