import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    // another way of navigate
    const navigate = useNavigate()
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('./products')
    //     }, 3000)

    // }, [])

    const goToProducts = () => {
        navigate('/products')
    }
    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to
                <Link to={'/products'} > the list of products</Link>
            </p>
            <p>
                <button onClick={goToProducts}>Products</button>
            </p>
        </>
    )
}

export default Home
