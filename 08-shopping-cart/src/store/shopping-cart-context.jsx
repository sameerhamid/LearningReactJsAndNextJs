import { createContext, useReducer, useState } from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    addItemToCart: (id) => { },
    updateCartItemQuantity: (id) => { }
})

const shoppingCartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
            updatedItems.push({
                id: action.payload.id,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }
        return {
            ...state, // not needed here because we have only one item in stat
            items: updatedItems,
        };
    }

    if (action.type === 'UPDATE_CART_ITEM') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }
    return state
}

export default function CartContextProvider({ children }) {

    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, { items: [] })

    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    // });

    // add item to cart

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM", payload: {
                id: id,
            }
        });
        // setShoppingCart((prevShoppingCart) => {

        // });
    }

    // update item from cart

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: "UPDATE_CART_ITEM",
            payload: {
                productId,
                amount
            }
        });
        // setShoppingCart((prevShoppingCart) => {

        // });
    }

    // cart value

    const contextVal = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity,
    }

    return <CartContext.Provider value={contextVal}>
        {children}
    </CartContext.Provider>
}