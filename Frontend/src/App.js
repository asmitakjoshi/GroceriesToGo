import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Client/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Client/Navbar";
import './Components/css/style.css';
import './Components/css/responsive.css';
import Header from './Components/Client/Header';
import Contact from './Components/Client/Contact';
import Footer from './Components/Client/Footer';
import { About } from './Components/Client/About';
import Cart from './Components/Client/Cart';
import Productpage from './Components/Client/Productpage';
import Addproducts from './Components/Admin/Addproducts';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

export default function App() {
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
      <Navbar />
      {/* {window.location.pathname !== '/home' && (<Header />)} */}
      {window.location.pathname !== "/home" && (<Header header_title={header_title} header_para={header_para} />)}
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/products" element={<Productpage></Productpage>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/addproducts' element={<Addproducts />} />
      </Routes>
      <Footer />
    </main>
  )
}
