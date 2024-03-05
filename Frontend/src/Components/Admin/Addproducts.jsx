import React, { useState } from "react";

export default function Addproducts() {
  const [formData, setFormData] = useState({
    imageUpload: '',
    name: '',
    brand: '',
    quantity: '',
    qnt_unit: '',
    original_price: '',
    sale_price: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFormData(prevData => ({
            ...prevData,
            imageUpload: reader.result
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit the form data
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit} className="form-container border p-3">
              <div className="mb-3">
                <label htmlFor="imageUpload" className="form-label">Upload Product Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {formData.imageUpload && (
                <div className="mb-3">
                  <img src={formData.imageUpload} alt="Uploaded" className="img-fluid" />
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">Luggage Brand</label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity/ Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
                <select
                  className="form-control"
                  id="qnt_unit"
                  name="qnt_unit"
                  value={formData.qnt_unit}
                  onChange={handleChange}
                >
                  <option value="">Select Unit</option>
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="pcs">pcs</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="original_price" className="form-label d-flex">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="original_price"
                  name="original_price"
                  value={formData.original_price}
                  onChange={handleChange}
                  width='auto'
                />
                <input
                  type="text"
                  className="form-control"
                  id="sale_price"
                  name="sale_price"
                  value={formData.sale_price}
                  onChange={handleChange}
                  width='auto'
                />
              </div>

              <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
