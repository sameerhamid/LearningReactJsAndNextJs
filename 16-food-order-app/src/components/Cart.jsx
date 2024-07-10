import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'

function Cart() {
    const { items } = useContext(CartContext)
    const { progress, hideCart } = useContext(UserProgressContext)
    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0)


    const handleCloseCart = () => {

        hideCart()
    }



    return (
        <Modal className='cart' open={progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>-</span>
                            <span>x {item.quantity}</span>
                        </li>
                    )
                })}
            </ul>
            <p className='cart-total'>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    )
}

export default Cart
