import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/gtog.png'


export default function Navbar() {
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
                            <Link className="nav-link" to="/home">Home</Link>
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
                        <li className="nav-item nav-drop">
                            <Link className="nav-link" to="#">
                                Groceries <i className="fas fa-chevron-down ml-1"></i></Link>
                            <div className="mega-menu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <h5 className="heading">portfolio columns</h5>
                                            <ul>
                                                <li>
                                                    <Link to="portfolio-two-col.html">portfolio two column</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-three-col.html">portfolio three column</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-four-col.html">portfolio four column</Link>
                                                </li>
                                            </ul>
                                            <h5 className="heading">columns full width</h5>
                                            <ul>
                                                <li>
                                                    <Link to="portfolio-two-col-full-width.html">portfolio two column</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-three-col-full-width.html">portfolio three column</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-four-col-full-width.html">portfolio four column</Link>
                                                </li>
                                            </ul>
                                            <h5 className="heading">other layouts</h5>
                                            <ul>
                                                <li>
                                                    <Link to="portfolio-carousel.html">portfolio carousel</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-parallex.html">portfolio parallex</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h5 className="heading">boxed layouts</h5>
                                            <ul>
                                                <li>
                                                    <Link to="portfolio-masonary.html">portfolio masonary</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-grid.html">portfolio grid</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-gallery.html">portfolio gallery</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-metro.html">portfolio metro</Link>
                                                </li>
                                            </ul>

                                            <h5 className="heading">full width layouts</h5>
                                            <ul>
                                                <li>
                                                    <Link to="portfolio-masonary-full-width.html">masonary full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-grid-full-width.html">grid full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-gallery-full-width.html">gallery full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio-metro-full-width.html">metro full width</Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h5 className="heading">blog</h5>
                                            <ul>
                                                <li>
                                                    <Link to="blog-no-sidebar.html">blog no sidebar</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-left-sidebar.html">blog left sidebar</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-right-sidebar.html">blog right sidebar</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-masonary.html">blog masonary</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-masonary-full-width.html">blog masonary full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-grid.html">blog grid</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-grid-full-width.html">blog grid full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-simple.html">blog simple</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-simple-full-width.html">blog simple full width</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-clean.html">blog clean</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-clean-full-width.html">blog clean full width</Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h5 className="heading">blog posts</h5>
                                            <ul>
                                                <li>
                                                    <Link to="blog-post-standard.html">blog standard post</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-post-gallery.html">gallery post</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-post-slider.html">slider post</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-post-blockquote.html">blockquote post</Link>
                                                </li>
                                                <li>
                                                    <Link to="blog-post-video.html">video post</Link>
                                                </li>


                                            </ul>
                                            <div className=" d-lg-block d-none">
                                                <Link to="index.html" className="nav-banner">
                                                    <img src="assets/images/58000.jpg" alt="" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className="nav-item nav-drop position-relative">
                            <Link className="nav-link" to="#">
                                Pages <i className="fas fa-chevron-down ml-1"></i></Link>
                            <div className="nav-menu">
                                <ul>
                                    <li>
                                        <Link to="404.html">404 page</Link>
                                    </li>
                                    <li>
                                        <Link to="about.html">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to="book-table.html">booking-table</Link>
                                    </li>
                                    <li>
                                        <Link to="chefs.html">chefs</Link>
                                    </li>
                                    <li>
                                        <Link to="comming-soon.html">comming soon</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="gallery.html">gallery</Link>
                                    </li>


                                </ul>
                            </div>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">contact</Link>
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
                        <Link to="#">
                            <i class="fa-solid fa-user"></i>
                        </Link>
                        <Link to="#">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
