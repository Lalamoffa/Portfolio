import React from 'react'

function ProductDetail({ product }) {

    return (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ddd', width: '300px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );

}

export default ProductDetail