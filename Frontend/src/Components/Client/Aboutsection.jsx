import React, { useState } from "react";
import Aboutimg from "../images/about.png"
import { Link } from "react-router-dom";
export default function Aboutsection() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center order-md-2">
              <div className="border-design wow fadeInRight">
                <img
                  src={Aboutimg}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="food-desc center-content wow fadeInLeft">
                <div>
                  <h6 className="text-uppercase large-space">about us</h6>
                  <h3 className="diff-text change">delicious food</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div>
                    <Link to="about.html" className="btn btn-default bg-diff">
                      see more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
