import { initSore } from "./store";

/**
 * Creates a store with the given actions and initialState.
 * @param {object} actions - An object containing action methods.
 * @param {object} initialState - The initial state of the store.
 * @returns {function} A function that returns the store when called.
 */
const configureStore = () => {
  /**
   * TOGGLE_FAV - Toggle the favorite status of a product.
   * @param {object} curState - The current state.
   * @param {string} productId - The ID of the product to toggle.
   * @returns {object} The new state.
   */
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        products: updatedProducts,
      };
    },
  };
  initSore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
