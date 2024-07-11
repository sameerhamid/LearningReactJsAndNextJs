import { createContext, useReducer } from "react"

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (itemId) => { },
    clearCart: () => { }
})

const ACTION_TYPES = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_CART: 'CLEAR_CART'
}

const cartReducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_ITEM) {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        console.log("existingCartItemIndex>>>", existingCartItemIndex);
        const updatedItems = [...state.items]
        if (existingCartItemIndex > -1) {
            console.log("inside if");
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            console.log('else ');
            state.items.push({ ...action.item, quantity: 1 })
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === ACTION_TYPES.REMOVE_ITEM) {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedItems = [...state.items]
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === ACTION_TYPES.CLEAR_CART) {
        return { ...state, items: [] }
    }
    return state
}

export const CartContextProvider = ({ children }) => {
    //... Implement the cart reducer and its state management here.
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    const addItem = (item) => {
        dispatchCartAction({ type: ACTION_TYPES.ADD_ITEM, item })
    }
    const removeItem = (itemId) => {
        dispatchCartAction({ type: ACTION_TYPES.REMOVE_ITEM, id: itemId })
    }
    const clearCart = () => {
        dispatchCartAction({ type: ACTION_TYPES.CLEAR_CART })
    }
    const cartConstextVal = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart,
    }

    return <CartContext.Provider value={cartConstextVal}>
        {children}
    </CartContext.Provider>
}

export default CartContext