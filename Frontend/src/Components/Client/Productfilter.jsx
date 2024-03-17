import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Productfilter(props) {
  return (
    <>
      <button
        className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>Show filter</span>
      </button>

      <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Related items
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  {props.Products.map((Product, index) => {
                    return (
                      <li key={index}>
                        <a href="#" className="text-dark">
                          {Product}{" "}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Brands
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
            >
              <div className="accordion-body">
                <div>
                  {props.Brands.map((Brand, index) => {
                    return (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked1"
                          checked
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked1">
                          {Brand}
                        </label>
                        <span className="badge badge-secondary float-end">120</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Price
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <div className="range">
                    <input type="range" className="form-range" id="customRange1" />
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="mb-0">Min</p>
                      <div className="form-outline">
                        <input type="number" id="typeNumber" className="form-control" />
                        <label className="form-label" htmlFor="typeNumber">
                          $0
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="mb-0">Max</p>
                      <div className="form-outline">
                        <input type="number" id="typeNumber" className="form-control" />
                        <label className="form-label" htmlFor="typeNumber">
                          $1,0000
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-white w-100 border border-secondary"
                  >
                    apply
                  </button>
                </div>
              </div>

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button text-dark bg-light"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      Ratings
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        {Array.from({ length: 5 }, (_, index) => (
                          <React.Fragment key={index}>
                            <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault${index}`} checked />
                            {[...Array(index + 1)].map((_, starIndex) => (
                              <label key={starIndex} className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                <i className="fas fa-star text-warning"></i>
                              </label>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
