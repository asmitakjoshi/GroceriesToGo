// Categorycollection.jsx
import React, { useState } from "react";
import Categorysingle from "./Categorysingle";
import ProductCollection from "./ProductCollection";

export default function Categorycollection(props) {
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Function to fetch products based on category ID
  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/productsauth/byCategory/${categoryId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  // Handle click on category
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    fetchProductsByCategory(categoryId);
  };

  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            {props.categories.map((category, index) => (
              <div className='col-md-3' key={index}>
                <Categorysingle Category={category} onClick={() => handleCategoryClick(category.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Conditionally render ProductCollection only when products are available */}
      {products.length > 0 && <ProductCollection products={products} selectedCategoryId={selectedCategoryId} />}
    </>
  );
}
