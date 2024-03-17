import React from 'react';
import { Link } from 'react-router-dom';

export default function CartSingle({ product }) {
  return (
    <>
      <div className="row gy-3 mb-4">
        <div className="col-lg-5">
          <div className="me-lg-5">
            <div className="d-flex">
              <img src={product.image} className="img-fluid rounded-start" width={96} alt={product.name} />
              <div className='ms-2 '>
                <Link to="#" className="card-title">{product.name}</Link>
                <p className="card-text text-muted">Brand: {product.brand}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
          <div className="">
            <div className="input-group mb-3" style={{ width: '170px' }}>
              <input type="hidden" name="remove_cart" value="true" />
              <input type="hidden" name="update_cart" value="true" />
              <input type="hidden" name="luggageId" value="" />

              <button className="btn border border-secondary px-3 btn-hover decrementButton" type="button">-</button>

              <input type="number" className="form-control text-center border border-secondary quantityInput" placeholder="1" aria-label="Quantity" aria-describedby="button-addon1" value="" name="quantity" />

              <button className="btn border border-secondary px-3 btn-hover incrementButton" type="button">+</button>
            </div>
          </div>
          <div className="ms-4">
            <p className="h6">Price: {product.price}</p>
          </div>
        </div>
        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
          <div className="float-md-end">
            <a href="#!" className="btn btn-light border px-2 icon-hover-primary"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
            <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove</a>
          </div>
        </div>
      </div>
    </>
  );
}
