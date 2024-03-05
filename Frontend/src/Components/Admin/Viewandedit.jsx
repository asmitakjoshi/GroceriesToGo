import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function ViewAndEdit() {
  const { id } = useParams(); // Assuming you're passing product ID through URL params
  const [product, setProduct] = useState({
    // Assuming product has these fields, you can modify as per your Addproduct.jsx file
    name: "",
    brand: "",
    quantity: "",
    qnt_unit: "",
    original_price: "",
    sale_price: ""
  });
  const history = useHistory();

  // Fetch product details based on ID when component mounts
  useEffect(() => {
    // Assuming you have a function to fetch product details from your backend
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = async (productId) => {
    try {
      // Example API call to fetch product details based on ID
      const response = await fetch(`/api/products/${productId}`); // Adjust endpoint as per your backend
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
      } else {
        console.error("Failed to fetch product details");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API call to update product details
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        history.push(`/product/${id}`); // Redirect to view product page after successful update
      } else {
        console.error("Failed to update product details");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
          <select
            name="qnt_unit"
            value={product.qnt_unit}
            onChange={handleChange}
          >
            <option value="">Select Unit</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="pcs">pcs</option>
          </select>
        </div>
        <div>
          <label>Original Price:</label>
          <input
            type="text"
            name="original_price"
            value={product.original_price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sale Price:</label>
          <input
            type="text"
            name="sale_price"
            value={product.sale_price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
