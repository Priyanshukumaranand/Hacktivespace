import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import img1 from 'src/images/portfolio/1.jpg';
import img2 from 'src/images/portfolio/2.jpg';
import img3 from 'src/images/portfolio/3.jpg';
import img4 from 'src/images/portfolio/4.jpg';
import img5 from 'src/images/portfolio/5.jpg';
import img6 from 'src/images/portfolio/6.jpg';

const OurWork = () => {
    return (
        <>
            <section className="page-title bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Latest works</span>
                                <h1 className="text-capitalize mb-4 text-lg">Our Projects</h1>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                                    <li className="list-inline-item"><span className="text-white">/</span></li>
                                    <li className="list-inline-item"><a href="#" className="text-white-50">Latest works</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- section portfolio start --> */}
            <section className="section portfolio pb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <span className="h6 text-color">Our works</span>
                                <h2 className="mt-3 content-title ">We have done lots of works, lets check some</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row portfolio-gallery">
                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative mb-4">
                                <a href={img1} className="popup-gallery">
                                    <img src={img1} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative mb-4">
                                <a href={img2} className="popup-gallery">
                                    <img src={img2} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative mb-4">
                                <a href={img3} className="popup-gallery">
                                    <img src={img3} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative mb-4">
                                <a href={img4} className="popup-gallery">
                                    <img src={img4} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative  mb-4">
                                <a href={img5} className="popup-gallery">
                                    <img src={img5} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portflio-item position-relative mb-4">
                                <a href={img6} className="popup-gallery">
                                    <img src={img6} alt="" className="img-fluid w-100" />

                                    <i className="ti-plus overlay-item"></i>
                                    <div className="portfolio-item-content">
                                        <h3 className="mb-0 text-white">Project california</h3>
                                        <p className="text-white-50">Web Development</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurWork;
