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

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
