import React from 'react'
import Logo from '../assets/investment-calculator-logo.png'

function Header() {
    return (
        <header id='header'>
            <img src={Logo} alt="Logo showing a money bag" />
            <h2>Investment Calculator</h2>
        </header>
    )
}

export default Header
