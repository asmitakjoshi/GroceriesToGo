import React from 'react'
import { Link } from 'react-router-dom'
import Contactimg from "../images/contact.jpg"

export default function Contact() {
    return (
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="contact-area">
                    <div class="row">
                        <div class="col-md-6 p-r-0  wow fadeInLeft">
                            <div class="contact-form">
                            </div>
                        </div>
                        <div class="col-md-6 p-l-0 wow fadeInRight">
                            <div class="form-container center-content">
                                <form class="w-100">
                                    <div class="form-group">
                                        <input class="form-control" placeholder="full name" />

                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="email" />

                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="phone" />

                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="message" rows="3"></textarea>

                                    </div>
                                    <Link to="#" class="btn btn-default bg-diff radius-0">see more</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
