import React, { useState, useEffect } from 'react';
import Banner from "./Banner";
import Aboutsection from "./Aboutsection";
import Contactsection from "./Contactsection";
import Categorycollection from "./Categorycollection";
import ProductCollection from "./ProductCollection";

export default function Home(props) { // Destructure addToCart from props
  const { addToCart } = props;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/prodsauth/all')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
    fetch('http://localhost:5000/api/categoriesauth/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      <Banner />
      <Categorycollection categories={categories} />
      <Aboutsection />
      <ProductCollection products={products} addToCart={addToCart} />
      <Contactsection />
    </>
  );
}
