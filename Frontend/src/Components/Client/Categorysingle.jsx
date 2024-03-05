import React from 'react';
import { Link } from 'react-router-dom';
import Shop from './Shop';


export default function Categorysingle(props){
 
  return(
   <Link to='/shop'>
          <img src={props.Category.image} alt="category-image" width={150} />
          <h5 className='mt-3 fw-bold'>{props.Category.name}</h5>
       </Link> 
  )
}