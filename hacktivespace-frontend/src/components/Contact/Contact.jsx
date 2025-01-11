import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, import.meta.env.VITE_API_KEY)
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
                alert('An error occurred, please try again.');
            });
        e.target.reset();
    };
    return (
        <>
            <section className="page-title bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Contact Us</span>
                                <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                                    <li className="list-inline-item"><span className="text-white">/</span></li>
                                    <li className="list-inline-item"><Link to="#" className="text-white-50">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact form start --> */}
            <section className="contact-form-wrap section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <form id="contact-form" className="contact__form" method="post" ref={form} onSubmit={sendEmail}>
                                {/* <!-- form message --> */}
                                {messageSent && (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="alert alert-success contact__msg" role="alert">
                                                Your message was sent successfully.
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* <!-- end message --> */}
                                <span className="text-color">Send a message</span>
                                <h3 className="text-md mb-4">Contact Form</h3>
                                <div className="form-group">
                                    <input name="name" type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input name="email" type="email" className="form-control" placeholder="Email Address" required />
                                </div>
                                <div className="form-group-2 mb-4">
                                    <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                                </div>
                                <button className="btn btn-main" name="submit" type="submit">Send Message</button>
                            </form>
                        </div>

                        <div className="col-lg-5 col-sm-12">
                            <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                                <span className="text-muted">We are Professionals</span>
                                <h2 className="mb-5 mt-2">Don't Hesitate to contact with us for any kind of information</h2>

                                <ul className="address-block list-unstyled">
                                    <li>
                                        <i className="ti-direction mr-3"></i>North Main Street,Brooklyn Australia
                                    </li>
                                    <li>
                                        <i className="ti-email mr-3"></i>Email: hactivespace@mail.com
                                    </li>
                                    <li>
                                        <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                                    </li>
                                </ul>

                                <ul className="social-icons list-inline mt-5">
                                    <li className="list-inline-item">
                                        <Link to="http://www.themefisher.com"><i className="fab fa-facebook-f"></i></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="http://www.themefisher.com"><i className="fab fa-twitter"></i></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="http://www.themefisher.com"><i className="fab fa-linkedin-in"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="google-map">
                <div id="map"></div>
            </div> */}
        </>
    )
}

export default Contact