import React from 'react';
import CartSingle from './CartSingle';
import Fruveg from '../images/Fruits-vegetables-categ.jpg';
import Dairy from '../images/Dairy-categ.jpg';

export default function Cart() {
  const Products = [
    {
      name: "Fruits & Vegetables",
      brand: "Real Fruits",
      image: Fruveg,
      price: '2$',
      reviews: '4.7 (71 Reviews)'
    },
    {
      name: "Milk",
      brand: "Real Milk",
      image: Dairy,
      price: '5$',
      reviews: '4.7 (71 Reviews)'
    },
  ];

  return (
    <section className="bg-light my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                <div class="row gy-3 mb-4">
                  {Products.map((product, index) => (
                    <CartSingle key={index} product={product} />
                  ))}
                </div>
              </div>
              <div className="border-top pt-4 mx-4 mb-4">
                <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mb-3 border shadow-0">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="form-label">Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control border" name="" placeholder="Coupon code" />
                      <button className="btn btn-light border">Apply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">$329.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">-$60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">$14.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">$283.00</p>
                </div>
                <div className="mt-3">
                  <a href="#" className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
                  <a href="#" className="btn btn-light w-100 border mt-2"> Back to shop </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
