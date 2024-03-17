import React from 'react';
import Productsingle from './Productsingle';

export default function ProductCollection({ products, addToCart }) {
  return (
    <div className='container'>
      <div className='row'>
        {products.length > 0 ? (
          <div>
            <h2>Fruit</h2>
            <div className='col-md-3'>
              {products.map((product) => (
                <Productsingle key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
