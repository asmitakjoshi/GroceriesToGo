import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Categorysingle(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the product collection page with the category ID as a query parameter
    navigate(`/products?category=${props.Category.id}`);
  };

  return (
    <div className='category-container' onClick={handleClick}>
      <img src={props.Category.image} alt="category-image" width={150} />
      <h5 className='mt-3 fw-bold'>{props.Category.name}</h5>
    </div>
  );
}
