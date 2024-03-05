import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer class="bg-img">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-8">
                        <Link class="navbar-brand diff-text" to="index.html">
                            <img src="assets/images/logo.png" alt="" class="img-fluid" />
                        </Link>
                        <p class="para">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div class="">
                            <ul class="social">
                                <li>
                                    <Link class="facebook" to="https://www.facebook.com/">
                                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="twitter" to="https://twitter.com/">
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="google" to="https://plus.google.com">
                                        <i class="fab fa-google-plus-g"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="instagram" to="https://instagram.com/">
                                        <i class="fab fa-instagram" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div class="inner-block">
                            <h5 class="heading">links</h5>
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
                    <div class="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div class="inner-block">
                            <h5 class="heading">links</h5>
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
                    <div class="col-lg-1 col-sm-3 offset-sm-1 col-4">
                        <div class="inner-block">
                            <h5 class="heading">links</h5>
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
            <div class="copyright-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-center">© 2024 GrocerriesToGo</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}