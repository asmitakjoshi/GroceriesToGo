import React from 'react'
import { Link } from 'react-router-dom'
import Contactimg from "../images/contact.jpg"

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
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
                                    <Link to="#" className="btn btn-default bg-diff radius-0">see more</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
