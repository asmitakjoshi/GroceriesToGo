import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/log.png"

export default function Banner() {
  return (
    <>
      <div className="food-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="center-content slider-sec">
                <div className=" text-center w-100">
                  <img src={Logo} width={50} />
                  <h1 className="diff-text ">Favourable</h1>
                  <h6 className="text-uppercase text-white large-space ">groceries</h6>
                  <h4 className="text-capitalize diff-text change "> at your home</h4>
                  <h6 className="text-capitalize text-white color-animated ">20% off</h6>
                  <Link to="/shop" className="btn btn-default bg-diff ">order now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
