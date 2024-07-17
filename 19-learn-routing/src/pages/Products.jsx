import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    { id: 'p1', name: 'Product 1' },
    { id: 'p2', name: 'Product 2' },
    { id: 'p3', name: 'Product 3' },
    { id: 'p4', name: 'Product 4' },
    { id: 'p5', name: 'Product 5' },
    //... more products here  // this is just an example, replace with actual data from your API call or database query.
]
function Products() {
    return (
        <>
            <h1>My products page</h1>
            <ul>
                <li>
                    {PRODUCTS.map(product => {
                        // absolute path
                        // return <Link to={`/products/${product.id}`}>Product 1</Link>
                        // relative path
                        return <Link to={`${product.id}`}>{product.name}</Link>

                    })}
                </li>
            </ul>
        </>
    )
}

export default Products
