import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css';
// import {SearchBar} from '../SearchBar/SearchBar';


export default function Header() {
    return (
      <header className="navigation">
      <div className="header-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <Link to="https://www.facebook.com/themefisher" target="_blank"><i className="ti-facebook"></i></Link>
                <Link to="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter"></i></Link>
                <Link to="https://github.com/themefisher" target="_blank"><i className="ti-github"></i></Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info">
                <Link to="tel:+23-345-67890">Call Us : <span>+23-345-67890</span></Link>
                <Link to="mailto:support@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>support@gmail.com</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  py-4" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Hacktive<span>space.</span>
          </Link>
    
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span>
          </button>
        
          <div className="collapse navbar-collapse text-center" id="navbarsExample09">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/about" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
              {/* <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li><Link className="dropdown-item" to="/about">Our company</Link></li>
                <li><Link className="dropdown-item" to="pricing.html">Pricing</Link></li>
              </ul> */}
            </li>
             <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
             <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/blogs" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
              {/* <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li><Link className="dropdown-item" to="/blogs">Blog Grid</Link></li>
                <li><Link className="dropdown-item" to="blog-sidebar.html">Blog with Sidebar</Link></li>
    
                <li><Link className="dropdown-item" to="blog-single.html">Blog Single</Link></li>
              </ul> */}
            </li>
             <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
    
          <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
            <Link to="/contact" className="btn btn-solid-border btn-round-full">Get a Quote</Link>
          </form>
          </div>
        </div>
      </nav>
    </header>
    );
}
