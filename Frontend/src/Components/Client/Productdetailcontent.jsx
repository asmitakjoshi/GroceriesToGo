// Productdetailcontent.js
import React from 'react';
import { Link } from 'react-router-dom';

const Productdetailcontent = ({ product, quantity, handleQuantityChange }) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row gx-5">
                    <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                            <Link data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href={product.image}>
                                <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={product.image} alt={product.name} />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            {/* Image links go here */}
                        </div>
                    </aside>
                    <main className="col-lg-6">
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">{product.name}</h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="ms-1">4.5</span>
                                </div>
                                <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                <span className="text-success ms-2">In stock</span>
                            </div>

                            <div className="mb-3">
                                <span className="h5">{product.price}</span>
                                <span className="text-muted">/per box</span>
                            </div>

                            <p>{product.description}</p>

                            <div className="row">
                                <dt className="col-3">Type:</dt>
                                <dd className="col-9">Regular</dd>

                                <dt className="col-3">Color</dt>
                                <dd className="col-9">Brown</dd>

                                <dt className="col-3">Material</dt>
                                <dd className="col-9">{product.material}</dd>

                                <dt className="col-3">Brand</dt>
                                <dd className="col-9">{product.brand}</dd>
                            </div>

                            <hr />

                            <div className="row mb-4">
                                <div className="col-md-4 col-6">
                                    <label className="mb-2">Size</label>
                                    <select className="form-select border border-secondary" style={{ height: '35px' }}>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-6 mb-3">
                                    <label className="mb-2 d-block">Quantity</label>
                                    <div className="input-group mb-3" style={{ width: '170px' }}>
                                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input type="number" value={quantity} onChange={handleQuantityChange} className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link href="#" className="btn btn-warning shadow-0"> Buy now </Link>
                            <Link href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </Link>
                            <Link href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </Link>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Productdetailcontent;
