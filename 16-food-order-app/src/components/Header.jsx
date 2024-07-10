import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
function Header() {
    const { showCart } = useContext(UserProgressContext)
    const { items } = useContext(CartContext)

    console.log("items>>>", items);
    const totalCartQuantity = items.reduce((totalNumbeOfItems, item) => {
        console.log('totalNumbeOfItems>>>', totalNumbeOfItems);
        console.log("item.quantity>>>", item.quantity);
        return totalNumbeOfItems + item.quantity
    }, 0)

    const handleShowCart = () => {

        showCart()
    }
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="A restaurant" />
                <h1>React Food</h1>
            </div>

            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartQuantity})</Button>
            </nav>
        </header>
    )
}

export default Header
