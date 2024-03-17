import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/gtog.png'

export default function Navbar({ cart }) {
    const cartItemCount = cart.length; // Calculate the cart item count

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-nav">
            <div className="container position-relative">
                <Link className="navbar-brand diff-text" to="index.html">
                    <img src={Logo} width={110} alt="" className="img-fluid" />
                </Link>
                <button className="open-toggle btn"><i className="fas fa-hamburger color-primary"></i></button>
                <div className="toggle-div ml-auto">
                    <div className="close-bar">
                        <h5 className="closes diff-text open-toggle">close</h5>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="social-right d-flex align-items-center">
                    <div className="search">
                        <Link to="#">
                            <i className="fa fa-search"></i>
                        </Link>
                    </div>
                    <div className="social-fa">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="badge rounded-pill text-bg-light">{cartItemCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
