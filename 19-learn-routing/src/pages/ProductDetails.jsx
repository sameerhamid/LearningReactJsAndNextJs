import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()
    return (
        <div>
            ProductDetails {params.productId}
        </div>
    )
}

export default ProductDetails
