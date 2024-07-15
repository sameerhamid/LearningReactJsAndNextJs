import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, showCounter: true },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    increaseByVal: (state, action) => {
      state.count += action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...state, count: state.count + 1 };
//   }

//   if (action.type === "DECREMENT") {
//     return { ...state, count: state.count - 1 };
//   }
//   if (action.type === "INCREASEBYVAL") {
//     return { ...state, count: state.count + action.payload };
//   }

//   if (action.type === "TOGLE_COUNTER") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
