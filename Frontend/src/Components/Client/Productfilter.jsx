import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Productfilter(props) {
  return (
    <>
      <button
        class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>Show filter</span>
      </button>

      <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-dark bg-light"
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
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div class="accordion-body">
                <ul class="list-unstyled">
                  {props.Products.map((Product, index) => {
                    return (
                      <li key={index}>
                        <a href="#" class="text-dark">
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
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button text-dark bg-light"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
          >
            <div class="accordion-body">
              <div>
                {props.Brands.map((Brand, index) => {
                  return (
                    <div class="form-check" key={index}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked1"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked1">
                        {Brand}
                      </label>
                      <span class="badge badge-secondary float-end">120</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button text-dark bg-light"
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
          class="accordion-collapse collapse show"
          aria-labelledby="headingThree"
        >
          <div class="accordion-body">
            <div class="range">
              <input type="range" class="form-range" id="customRange1" />
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <p class="mb-0">Min</p>
                <div class="form-outline">
                  <input type="number" id="typeNumber" class="form-control" />
                  <label class="form-label" for="typeNumber">
                    $0
                  </label>
                </div>
              </div>
              <div class="col-6">
                <p class="mb-0">Max</p>
                <div class="form-outline">
                  <input type="number" id="typeNumber" class="form-control" />
                  <label class="form-label" for="typeNumber">
                    $1,0000
                  </label>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-white w-100 border border-secondary"
            >
              apply
            </button>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button text-dark bg-light"
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
          class="accordion-collapse collapse show"
          aria-labelledby="headingThree"
        >
          <div class="accordion-body">
            <div class="form-check">
              {Array.from({ length: 5 }, (_, index) => (
                <React.Fragment key={index}>
                  <input class="form-check-input" type="checkbox" value="" id={`flexCheckDefault${index}`} checked />
                  {[...Array(index + 1)].map((_, starIndex) => (
                    <label key={starIndex} class="form-check-label" for={`flexCheckDefault${index}`}>
                      <i class="fas fa-star text-warning"></i>
                    </label>
                  ))}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
