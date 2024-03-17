// ProductDetail.js
import React, { useState } from 'react';
import Productdetailcontent from './Productdetailcontent';

const ProductDetail = ({ product }) => {
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <Productdetailcontent product={product} quantity={quantity} handleQuantityChange={handleQuantityChange} />
  );
}

export default ProductDetail;
