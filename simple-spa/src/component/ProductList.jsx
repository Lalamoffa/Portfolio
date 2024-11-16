import React from 'react'

function ProductList({ products, onProductSelect }) {
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', width: '200px' }}>
                    <h2>{product.name}</h2>
                    <p>{product.description.substring(0, 20)}...</p>
                    <button onClick={() => onProductSelect(product)}>Ətraflı Bax</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList