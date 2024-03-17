import React from 'react';
import { Link } from 'react-router-dom';

const Productsingle = ({ product, addToCart }) => {
  return (
    <div className="productwrapper">
      <div className="imbtwrapper">
        <div className="imgwrapper">
          <img src={product.imageUrl} className="img-fluid" alt={product.productName} />
        </div>
        <div className="btnwrapper">
          <button className="btn btn-default bg-diff btn-sm" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="product-text">
        <h6 className="brand">{product.brand}</h6>
        {/* Specify the route path in the "to" prop */}
        <Link to={`/product/${product.id}`}>
          <h5 className="fw-bold mt-2 mb-3 title">{product.productName}</h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price">{product.price}</span>
          {/* If "reviews" is available in the product object, display it */}
          {product.reviews && <span className="review">{product.reviews}</span>}
        </div>
      </div>
    </div>
  );
}

export default Productsingle;
