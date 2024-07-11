import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting'

function Checkout() {
    const { items } = useContext(CartContext)
    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity
    }, 0)
    return (
        <Modal>
            <form action="">
                <h2>Chekcout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
            </form>
        </Modal>
    )
}

export default Checkout
