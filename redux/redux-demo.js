const redux = require("redux");

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
