import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
    <footer className="footer section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget">
                        <h4 className="text-capitalize mb-4">Company</h4>
    
                        <ul className="list-unstyled footer-menu lh-35">
                            <li><Link to="#">Terms & Conditions</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="widget">
                        <h4 className="text-capitalize mb-4">Quick Links</h4>
    
                        <ul className="list-unstyled footer-menu lh-35">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget">
                        <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                        <p>Subscribe to get latest news article and resources  </p>
    
                        <form action="#" className="sub-form">
                            <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..."/>
                            <Link to="#" className="btn btn-main btn-small">subscribe</Link>
                        </form>
                    </div>
                </div>
    
                <div className="col-lg-3 ml-auto col-sm-6">
                    <div className="widget">
                        <div className="logo mb-4">
                            <h3>Hacktive<span>space.</span></h3>
                        </div>
                        <h6><a href="tel:+23-345-67890" >Support@hacktivespace.com</a></h6>
                        <a href="mailto:support@gmail.com"><span className="text-color h4">+23-456-6588</span></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-btm pt-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="copyright">
                            &copy; Copyright Reserved to <span className="text-color">Hacktivespace.</span> by <a href="https://themefisher.com/" target="_blank">Themefisher</a>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="copyright">
                        Distributed by  <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 text-left text-lg-left">
                        <ul className="list-inline footer-socials">
                            <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</a></li>
                            <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}
