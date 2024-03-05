import React from 'react';
import Banner from "./Banner";
import Aboutsection from "./Aboutsection";
import Contactsection from "./Contactsection";
import Fruveg from '../images/Fruits-vegetables-categ.jpg'
import Dairy from '../images/Dairy-categ.jpg'
import Drinks from '../images/Drinks-categ.jpg'
import Pantry from '../images/Pantry-categ.jpg'
import Categorycollection from "./Categorycollection";
import ProductCollection from "./ProductCollection";
export default function Home() {
  const Categories =[
    {
      name:"Fruits & Vegetables",
      image: Fruveg
    },
    {
      name:"Dairy Products",
      image: Dairy
    },
    {
      name:"Drinks",
      image: Drinks
    },
    {
      name: "Pantry",
      image: Pantry
    }
  ]
  const Products =[
    {
      name:"Fruits & Vegetables",
      brand:"Real Fruits",
      image: Fruveg,
      price:'2$',
      reviews:'4.7 (71 Reviews)'
    },
    {
      name:"Milk",
      brand: "Real Milk",
      image: Dairy,
      price:'5$',
      reviews:'4.7 (71 Reviews)'
    },
    
  ]
  return (
    <>
      <Banner />
      <Categorycollection categories={Categories} />
      <Aboutsection />
      <ProductCollection Products={Products}/>
      <Contactsection />
    </>
  );
}
