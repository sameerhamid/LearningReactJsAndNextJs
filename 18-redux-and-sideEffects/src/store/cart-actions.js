import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
// custom action creators
// thunk

const baseUrl = "https://react-shopping-cart-6be95-default-rtdb.firebaseio.com";
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending Cart Data",
        message: "Please wait...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(`${baseUrl}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const responseData = await response.json();
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Cart Data Sent",
          message: "Your cart data has been sent successfully.",
        })
      );
    } catch (error) {
      sendCartData().catch((err) => {
        dispatch(
          uiActions.setNotification({
            status: "error",
            title: "Failed to Send Cart Data",
            message: "Failed to send cart data. Please try again later.",
          })
        );
      });
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/cart.json`);
    if (!response.ok) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Failed to get Cart Data",
          message: "Failed to get cart data. Please try again later.",
        })
      );
    }

    const responseData = await response.json();
    dispatch(
      cartActions.replaceCart({
        totalQuantity: responseData?.totalQuantity || 0,
        items: responseData?.items || [],
      })
    );
  };
};
