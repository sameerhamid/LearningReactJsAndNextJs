import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";

import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";
const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}
function Checkout() {
    const { items } = useContext(CartContext);
    const { progress, hideCheckout } = useContext(UserProgressContext)
    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
    }, 0);
    const { data, error, isLoading, sendRequest } = useHttp('orders', requestConfig)

    const handleClose = () => {
        hideCheckout()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        sendRequest(JSON.stringify({
            order: {
                items: items,
                customer: customerData
            }
        }))

    }

    let actions = <>
        <Button textOnly type="button" onClick={handleClose}>Close</Button>
        <Button >Place Order</Button>
    </>
    if (isLoading) {
        actions = <span>Sending order data...</span>
    }
    return (
        <Modal open={progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Chekcout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
                <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail" type="email" id="email" />
                <Input label='Street' type='text' id='street' />

                <div className="control-row">
                    <Input label='Postal Code' type='text' id='postal-code' />
                    <Input label='City' type='text' id='city' />
                </div>

                {
                    error && <Error title="Failed to submit order" message={error} />
                }
                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    );
}

export default Checkout;
