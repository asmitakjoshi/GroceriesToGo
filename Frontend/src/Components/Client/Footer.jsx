import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-img">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-8">
                        <Link className="navbar-brand diff-text" to="index.html">
                            <img src="assets/images/logo.png" alt="" className="img-fluid" />
                        </Link>
                        <p className="para">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="">
                            <ul className="social">
                                <li>
                                    <Link className="facebook" to="https://www.facebook.com/">
                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="twitter" to="https://twitter.com/">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="google" to="https://plus.google.com">
                                        <i className="fab fa-google-plus-g"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="instagram" to="https://instagram.com/">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div className="inner-block">
                            <h5 className="heading">links</h5>
                            <ul>
                                <li>
                                    <Link to="/home">home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div className="inner-block">
                            <h5 className="heading">links</h5>
                            <ul>
                                <li>
                                    <Link to="/home">home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div className="inner-block">
                            <h5 className="heading">links</h5>
                            <ul>
                                <li>
                                    <Link to="/home">home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center">© 2024 GrocerriesToGo</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}