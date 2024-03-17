import React, { Component } from 'react';
import Categorysingle from './Categorysingle';


export default function Categorypage(props){
  const Categories = ["Electronics", "Home items", "Books", "Magazines", "Men's clothing" , "Interiors items" , "Underwears" ,"Shoes for men","Accessories"]
  return(
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
  )
}