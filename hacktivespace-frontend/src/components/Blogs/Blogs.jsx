import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import blog4 from '../../images/blog/4.jpg'
import blogAuthor from '../../images/blog/blog-author.jpg'
import bt1 from '../../images/blog/bt-1.jpg'
import bt2 from '../../images/blog/bt-2.jpg'
import bt3 from '../../images/blog/bt-3.jpg'
import Search from './Search.jsx'
import Sidebar from './Sidebar.jsx'
import BlogSlider from './BlogSlider.jsx'
import BlogList from './BlogList.jsx'

const Blogs = () => {
	return (
		<>
			<section className="page-title bg-1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">Our blog</span>
								<h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
								<ul className="list-inline">
									<li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
									<li className="list-inline-item"><span className="text-white">/</span></li>
									<li className="list-inline-item"><Link to="#" className="text-white-50">Our blog</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* blog */}
			<section className="section blog-wrap bg-gray">
				<div className="container">
					<div className="row">
						
						<BlogList />
						<Sidebar />
					</div>
					{/* Prev Next */}
					<BlogSlider />
				</div>
			</section>
		</>
	)
}

export default Blogs

{/* <div className="col-lg-6 col-md-6 mb-5">
									<div className="blog-item">
										<img src={blog2} alt="" className="img-fluid rounded" />

										<div className="blog-item-content bg-white p-4">
											<div className="blog-item-meta py-1 px-2">
												<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Design</span>
											</div>

											<h3 className="mt-3 mb-3"><Link to="/blog-page">Interactivity connect consumer</Link></h3>
											<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" className="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 mb-5">
									<div className="blog-item">
										<img src={blog3} alt="" className="img-fluid rounded" />

										<div className="blog-item-content bg-white p-4">
											<div className="blog-item-meta py-1 px-2">
												<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Community</span>
											</div>

											<h3 className="mt-3 mb-3"><Link to="/blog-page">Marketing Strategy to bring more affect</Link></h3>
											<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" className="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 mb-5">
									<div className="blog-item">
										<img src={blog4} alt="" className="img-fluid rounded" />

										<div className="blog-item-content bg-white p-4">
											<div className="blog-item-meta py-1 px-2">
												<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Marketing</span>
											</div>

											<h3 className="mt-3 mb-3"><Link to="/blog-page">Marketing Strategy to bring more affect</Link></h3>
											<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" className="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div> */}