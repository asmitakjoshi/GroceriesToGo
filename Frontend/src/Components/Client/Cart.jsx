import React from "react";
import CartSingle from "./CartSingle";
// Import your images or provide their paths here
import Fruveg from "../images/Fruits-vegetables-categ.jpg";
import Dairy from "../images/Dairy-categ.jpg";
import CartSummary from "./CartSummary";

export default function Cart() {
  const Products = [
    {
      name: "Fruits & Vegetables",
      brand: "Real Fruits",
      image: Fruveg,
      price: "2$",
      reviews: "4.7 (71 Reviews)",
    },
    {
      name: "Milk",
      brand: "Real Milk",
      image: Dairy,
      price: "5$",
      reviews: "4.7 (71 Reviews)",
    },
  ];
  return (
    <section className="bg-light my-5">
      <div className="container">
        <div className="row">
          {/* Your cart items */}
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>

                {/* Cart items */}
                {Products.map((product, index) => (
                  <CartSingle key={index} product={product} />
                ))}
              </div>

              {/* Additional cart details */}
              <div className="border-top pt-4 mx-4 mb-4">
                <p>
                  <i className="fas fa-truck text-muted fa-lg"></i> Free
                  Delivery within 1-2 weeks
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>

          <CartSummary />
        </div>
      </div>
    </section>
  );
}
