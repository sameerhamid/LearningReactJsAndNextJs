import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// custom action creators
// thunk

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
      const response = await fetch(
        "https://react-shopping-cart-6be95-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
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

export const cartActions = cartSlice.actions;
export default cartSlice;
