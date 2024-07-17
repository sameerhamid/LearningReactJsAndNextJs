import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()
    return (
        <div>
            ProductDetails {params.productId}
            <p>
                // by default
                {/* <Link to={'..'} relative='route'>Back</Link> */}
                <Link to={'..'} relative='path'>Back</Link>
            </p>
        </div>
    )
}

export default ProductDetails
