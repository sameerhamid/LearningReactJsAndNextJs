import { useEffect, useState } from "react";

let globalState = {};
let listners = [];
let actions = {};

/**
 * Hook to connect to the global state.
 * @return {Array} The first element of the array is the global state,
 *                 the second element is the dispatch function.
 */
export const useStore = () => {
  const setState = useState(globalState)[1];

  /**
   * Dispatches an action and updates the global state.
   * @param {String} actionIdentifier The identifier of the action to dispatch.
   * @param {Object} payload The payload to pass to the action.
   * @return {void}
   */
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = {
      ...globalState,
      ...newState,
    };
    for (let listener of listners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listners.push(setState);

    return () => {
      listners = listners.filter((l) => l !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

/**
 * Initializes the store with user provided actions and an initial state.
 * @param {Object} userActions An object with action identifiers as keys and
 * functions as values. The functions will be called with the current global state
 * and should return a new state.
 * @param {Object} [initialState] An object with the initial state of the store.
 * This is optional and if not provided the store will start with an empty state.
 */
export const initSore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
