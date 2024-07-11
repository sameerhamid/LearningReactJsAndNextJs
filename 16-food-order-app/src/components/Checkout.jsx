import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";

import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

function Checkout() {
    const { items } = useContext(CartContext);
    const { progress, hideCheckout } = useContext(UserProgressContext)
    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
    }, 0);

    const handleClose = () => {
        hideCheckout()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        console.log(data);
    }
    return (
        <Modal open={progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Chekcout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-Mail" type="email" id="email" />
                <Input label='Street' type='text' id='street' />

                <div className="control-row">
                    <Input label='Postal Code' type='text' id='postal-code' />
                    <Input label='City' type='text' id='city' />
                </div>

                <p className="modal-actions">
                    <Button textOnly type="button" onClick={handleClose}>Close</Button>
                    <Button >Place Order</Button>
                </p>
            </form>
        </Modal>
    );
}

export default Checkout;
