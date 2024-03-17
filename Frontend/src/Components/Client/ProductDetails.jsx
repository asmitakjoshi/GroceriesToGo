// ProductDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const ProductDetails = () => {
    // Get the product ID from the URL params
    const { id } = useParams();

    // Get the products array from the location state
    const { state } = useLocation();
    const products = state && state.products;

    if (!products) {
        return <div>Products data is not available</div>;
    }

    // Find the selected product based on the ID
    const selectedProduct = products.find(product => product.id.toString() === id);

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details-page">
            <ProductDetail product={selectedProduct} />
        </div>
    );
}

export default ProductDetails;
