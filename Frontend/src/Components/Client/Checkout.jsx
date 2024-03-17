import React, { useState } from "react";
import CartSummary from "./CartSummary";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="card mb-4 border shadow-0">
              <div className="p-4 d-flex justify-content-between">
                <div className="">
                  <h5>Have an account?</h5>
                  <p className="mb-0 text-wrap ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                  <a
                    href="#"
                    className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary shadow-0 text-nowrap w-100"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow-0 border">
              <div className="p-4">
                <h5 className="card-title mb-3">Guest checkout</h5>
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="mb-0">First name</p>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Type here"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-6 mb-3">
                    <p className="mb-0">Last name</p>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Type here"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Phone</p>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Type here"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Email</p>
                    <div className="form-outline">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Type here"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr class="my-4" />
                     <h5 class="card-title mb-3">Shipping info</h5>

            <div class="row mb-3">
              <div class="col-lg-4 mb-3">
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Express delivery <br />
                      <small class="text-muted">3-4 days via Fedex </small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Self pick-up <br />
                      <small class="text-muted">Come to our shop </small>
                    </label>
                  </div>
                </div>
              </div>
            </div>
                   <div className="col-6 mb-3">
                    <p className="mb-0">Zip</p>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="Type here"
                        className="form-control"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Save this address
                  </label>
                </div>

                <div className="mb-3">
                  <p className="mb-0">Message to seller</p>
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="float-end">
                  <button className="btn btn-light border">Cancel</button>
                  <button className="btn btn-success shadow-0 border">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
}