import React from 'react';
import { Link } from 'react-router-dom';

export default function Contactsection() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="title text-center">
                    <img src="assets/images/logos.png" alt="logos" />
                    <h6 className="text-uppercase large-space">contact</h6>
                    <h2 className="text-uppercase change text-center">contact us</h2>
                </div>
                <div className="contact-area">
                    <div className="row">

                        <div className="col-md-6 p-r-0  wow fadeInLeft">
                            <div className="contact-form">
                            </div>
                        </div>
                        <div className="col-md-6 p-l-0 wow fadeInRight">
                            <div className="form-container center-content">
                                <form className="w-100">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="full name" />

                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="email" />

                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="phone" />

                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="message" rows="3"></textarea>

                                    </div>
                                    <Link to="#" className="btn btn-default bg-diff radius-0">Contact us</Link>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}