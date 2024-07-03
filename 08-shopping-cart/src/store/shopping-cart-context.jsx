import { createContext } from 'react'
export const CartContext = createContext({
    items: [],
    addItemToCart: (id) => { },
    updateCartItemQuantity: (id) => { }
})