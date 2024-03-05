import React from "react";
import { Link } from "react-router-dom";

export default function Productsingle(props) {
  return (
    <>
      <a className="productwrapper" to="/shop">
        <div className="imbtwrapper">
          <div className="imgwrapper">
            <img src={props.Product.image} className="img-fluid" />
          </div>
          <div className="btnwrapper">
            <Link className="btn btn-default bg-diff btn-sm" to="/shop">
              Add to cart
            </Link>
            {/* <Link className="btn btn-default bg-diff btn-sm" to="/shop">
              Add to cart
            </Link> */}
          </div>
        </div>
        <div className="product-text">
          <h6 className="brand">{props.Product.brand}</h6>
          <h5 className="fw-bold mt-2 mb-3 title">{props.Product.name}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">{props.Product.price}</span>
            <span className="review">{props.Product.reviews}</span>
          </div>
        </div>
      </a>
    </>
  );
}
