import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <>
            <h1>My products page</h1>
            <ul>
                <li>
                    <Link to={'/products/1'}>Product 1</Link>
                    <Link to={'/products/2'}>Product 2</Link>
                    <Link to={'/products/3'}>Product 3</Link>
                    <Link to={'/products/4'}>Product 4</Link>
                    <Link to={'/products/5'}>Product 5</Link>
                </li>
            </ul>
        </>
    )
}

export default Products
