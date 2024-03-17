import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Client/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Client/Navbar";
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Components/css/style.css';
import './Components/css/responsive.css';
import Header from './Components/Client/Header';
import Contact from './Components/Client/Contact';
import Footer from './Components/Client/Footer';
import { About } from './Components/Client/About';
import Cart from './Components/Client/Cart';
import Productpage from './Components/Client/Productpage';
import ProductDetails from './Components/Client/ProductDetails';
import Addproducts from './Components/Admin/Addproducts';
import Categorypage from './Components/Client/Categorypage.jsx';


export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const location = useLocation()
  let header_title = '';
  let header_para = '';
  if (location.pathname === '/login') {
    header_title = "Login";
    // header_para = "lorem";
  }
  if (location.pathname === '/register') {
    header_title = "Register"
    // header_para = "lorem"
  }
  if (location.pathname === '/about') {
    header_title = "About"
  }
  if (location.pathname === '/shop') {
    header_title = 'Shop'
  }
  if (location.pathname === '/contact') {
    header_title = 'Contact'
  }
  if (location.pathname === '/cart') {
    header_title = 'Cart'
  }
  return (
    <main>
      {/* {window.location.pathname !== "/login" && window.location.pathname !== "/register" && (
        <Navbar />)} */}
      <Navbar cart={cart} />
      {/* {window.location.pathname !== '/home' && (<Header />)} */}
      {window.location.pathname !== "/" && (<Header addToCart={addToCart} header_title={header_title} header_para={header_para} />)}
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/products" element={<Productpage></Productpage>} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}></ProductDetails>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart  cart={cart}/>} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/categories' element={<Categorypage />} />

      </Routes>
      <Footer />
    </main>
  )
}

