import { createContext, useReducer } from "react"

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (itemId) => { },
})

const ACTION_TYPES = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
}

const cartReducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_ITEM) {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.item.id)
        const updatedItems = [...state.items]
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            state.items.push({ ...action.payload.item, quantity: 1 })
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === ACTION_TYPES.REMOVE_ITEM) {
        // ...
    }
    return state
}

export const CartContextProvider = ({ children }) => {
    //... Implement the cart reducer and its state management here.
    const [cartItems, dispatch] = useReducer(cartReducer, { items: [] })
    return <CartContext.Provider value={{}}>
        {children}
    </CartContext.Provider>
}

export default CartContext