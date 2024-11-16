import React, { useState } from 'react'
import './App.css'
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';

function App() {

  const [products] = useState([
    { id: 1, name: 'Məhsul A', description: 'Bu məhsul haqqında qısa məlumat A' },
    { id: 2, name: 'Məhsul B', description: 'Bu məhsul haqqında qısa məlumat B' },
    { id: 3, name: 'Məhsul C', description: 'Bu məhsul haqqında qısa məlumat C' }
  ]);

  const [selectedProduct, setSelctedProduct] = useState(null);
  const handleProductSelect = (product) => {
    setSelctedProduct(product);
  }


  return (
    <div>
      <h1>Məhsul Kataloqu</h1>
      <ProductList products={products} onProductSelect={handleProductSelect} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  )
}

export default App
