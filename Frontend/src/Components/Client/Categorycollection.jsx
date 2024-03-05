import React, { useState } from "react";
import Categorysingle from "./Categorysingle";

export default function Categorycollection(props) {
  return (
    <>
      <section>
        <div className='container'>
        <div className='row'>    
       
      {props.categories.map((Category, index) => {
        return (
      <div className='col-md-3'>
        <div className="category-container">
          <Categorysingle Category={Category} key={index} />
        </div>
      </div>)
      })}
        </div>
        </div>
      </section>
      
    </>
  );
}
