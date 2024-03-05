import React, { Component } from 'react';
import Productfilter from './Productfilter';
import ProductCollection from './ProductCollection';
import Fruveg from '../images/Fruits-vegetables-categ.jpg'
import Dairy from '../images/Dairy-categ.jpg'

export default function Productpage() {

  const Productlist = ["Electronics", "Home items", "Books", "Magazines", "Men's clothing", "Interiors items", "Underwears", "Shoes for men", "Accessories"];

  const Brands = ["Electronics", "Home items", "Books", "Magazines", "Men's clothing", "Interiors items", "Underwears", "Shoes for men", "Accessories"];
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

  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Productfilter Products={Productlist} Brands={Brands} />
        </div>
        <div className="col-lg-9">
          <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
            <strong class="d-block py-2">32 Items found </strong>
            <div class="ms-auto">
              <select class="form-select d-inline-block w-auto border pt-1">
                <option value="0">Best match</option>
                <option value="1">Recommended</option>
                <option value="2">High rated</option>
                <option value="3">Randomly</option>
              </select>
              <div class="btn-group shadow-0 border">
                <a href="#" class="btn btn-light" title="List view">
                  <i class="fa fa-bars fa-lg"></i>
                </a>
                <a href="#" class="btn btn-light active" title="Grid view">
                  <i class="fa fa-th fa-lg"></i>
                </a>
              </div>
            </div>
          </header>

          <ProductCollection Products={Products} />
        </div>
      </div>
    </div>
  )
}