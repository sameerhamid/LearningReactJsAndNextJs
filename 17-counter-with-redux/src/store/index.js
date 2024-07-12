import { createStore } from "redux";

const initialState = { count: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "INCREASEBYVAL") {
    return { ...state, count: state.count + action.payload };
  }

  if (action.type === "TOGLE_COUNTER") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
