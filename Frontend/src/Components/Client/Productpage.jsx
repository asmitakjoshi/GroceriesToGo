// Productpage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Productfilter from './Productfilter';
import ProductCollection from './ProductCollection';
import Fruveg from '../images/Fruits-vegetables-categ.jpg';
import Dairy from '../images/Dairy-categ.jpg';

const Productpage = () => {
  const Productlist = ["Electronics", "Home items", "Books", "Magazines", "Men's clothing", "Interiors items", "Underwears", "Shoes for men", "Accessories"];
  const Brands = ["Electronics", "Home items", "Books", "Magazines", "Men's clothing", "Interiors items", "Underwears", "Shoes for men", "Accessories"];

  const Products = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      brand: "Real Fruits",
      image: Fruveg,
      price: '2$',
      reviews: '4.7 (71 Reviews)'
    },
    {
      id: 2,
      name: "Milk",
      brand: "Real Milk",
      image: Dairy,
      price: '5$',
      reviews: '4.7 (71 Reviews)'
    }
  ];

  const navigate = useNavigate();

  // Function to handle selecting a product
  const handleSelectProduct = (productId) => {
    // Navigate to the product details page with the products array
    navigate(`/product/${productId}`, { state: { products: Products } });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Productfilter Products={Productlist} Brands={Brands} />
          </div>
          <div className="col-lg-9">
            <ProductCollection Products={Products} onSelectProduct={handleSelectProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productpage;
