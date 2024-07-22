// action creator

import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://react-shopping-cart-6be95-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://react-shopping-cart-6be95-default-rtdb.firebaseio.com/cart.json"
    );

    if (!response.ok) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to fetch cart data!",
        })
      );
    }
    const responseData = await response.json();
    dispatch(
      cartActions.replaceCart({
        items: responseData.items,
        totalQuantity: responseData.totalQuantity,
      })
    );
  };
};
