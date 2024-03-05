import React, { useState } from "react";
import Productsingle from "./Productsingle";

export default function ProductCollection(props) {
  return (
    <>
      <div className="container">
      <div className="row">
        
      {props.Products.map((Product, index) => {
        return (
          <div className="col-md-3" key={index}>
            <div className="product-container">
              <Productsingle Product={Product} key={index} />
            </div>
          </div>
        );
      })}
      </div>
      </div>
    </>
  );
}
