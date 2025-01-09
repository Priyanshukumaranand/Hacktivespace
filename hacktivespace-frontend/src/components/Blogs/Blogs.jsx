import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
	return (
		<>
			<section class="page-title bg-1">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="block text-center">
								<span class="text-white">Our blog</span>
								<h1 class="text-capitalize mb-4 text-lg">Blog articles</h1>
								<ul class="list-inline">
									<li class="list-inline-item"><Link to="index.html" class="text-white">Home</Link></li>
									<li class="list-inline-item"><span class="text-white">/</span></li>
									<li class="list-inline-item"><Link to="#" class="text-white-50">Our blog</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section blog-wrap bg-gray">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="row">
								<div class="col-lg-6 col-md-6 mb-5">
									<div class="blog-item">
										<img src="./src/images/blog/1.jpg" alt="" class="img-fluid rounded" />

										<div class="blog-item-content bg-white p-4">
											<div class="blog-item-meta  py-1 px-2">
												<span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>Creativity</span>
											</div>

											<h3 class="mt-3 mb-3"><Link to="/blog-page">Improve design with typography?</Link></h3>
											<p class="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" class="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-6 col-md-6 mb-5">
									<div class="blog-item">
										<img src="./src/images/blog/2.jpg" alt="" class="img-fluid rounded" />

										<div class="blog-item-content bg-white p-4">
											<div class="blog-item-meta py-1 px-2">
												<span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>Design</span>
											</div>

											<h3 class="mt-3 mb-3"><Link to="/blog-page">Interactivity connect consumer</Link></h3>
											<p class="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" class="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-6 col-md-6 mb-5">
									<div class="blog-item">
										<img src="./src/images/blog/3.jpg" alt="" class="img-fluid rounded" />

										<div class="blog-item-content bg-white p-4">
											<div class="blog-item-meta py-1 px-2">
												<span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>Community</span>
											</div>

											<h3 class="mt-3 mb-3"><Link to="/blog-page">Marketing Strategy to bring more affect</Link></h3>
											<p class="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" class="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 mb-5">
									<div class="blog-item">
										<img src="./src/images/blog/4.jpg" alt="" class="img-fluid rounded" />

										<div class="blog-item-content bg-white p-4">
											<div class="blog-item-meta py-1 px-2">
												<span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>Marketing</span>
											</div>

											<h3 class="mt-3 mb-3"><Link to="/blog-page">Marketing Strategy to bring more affect</Link></h3>
											<p class="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

											<Link to="/blog-page" class="btn btn-small btn-main btn-round-full">Learn More</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="sidebar-wrap">
								<div class="sidebar-widget search card p-4 mb-3 border-0">
									<input type="text" class="form-control" placeholder="search" />
									<Link to="#" class="btn btn-mian btn-small d-block mt-2">search</Link>
								</div>

								<div class="sidebar-widget card border-0 mb-3">
									<img src="./src/images/blog/blog-author.jpg" alt="" class="img-fluid" />
									<div class="card-body p-4 text-center">
										<h5 class="mb-0 mt-4">Arther Conal</h5>
										<p>Digital Marketer</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>

										<ul class="list-inline author-socials">
											<li class="list-inline-item mr-3">
												<Link to="#"><i class="fab fa-facebook-f text-muted"></i></Link>
											</li>
											<li class="list-inline-item mr-3">
												<Link to="#"><i class="fab fa-twitter text-muted"></i></Link>
											</li>
											<li class="list-inline-item mr-3">
												<Link to="#"><i class="fab fa-linkedin-in text-muted"></i></Link>
											</li>
											<li class="list-inline-item mr-3">
												<Link to="#"><i class="fab fa-pinterest text-muted"></i></Link>
											</li>
											<li class="list-inline-item mr-3">
												<Link to="#"><i class="fab fa-behance text-muted"></i></Link>
											</li>
										</ul>
									</div>
								</div>

								<div class="sidebar-widget latest-post card border-0 p-4 mb-3">
									<h5>Latest Posts</h5>

									<div class="media border-bottom py-3">
										<Link to="#"><img class="mr-4" src="./src/images/blog/bt-3.jpg" alt="" /></Link>
										<div class="media-body">
											<h6 class="my-2"><Link to="#">Thoughtful living in los Angeles</Link></h6>
											<span class="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>

									<div class="media border-bottom py-3">
										<Link to="#"><img class="mr-4" src="./src/images/blog/bt-2.jpg" alt="" /></Link>
										<div class="media-body">
											<h6 class="my-2"><Link to="#">Vivamus molestie gravida turpis.</Link></h6>
											<span class="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>

									<div class="media py-3">
										<Link to="#"><img class="mr-4" src="./src/images/blog/bt-1.jpg" alt="" /></Link>
										<div class="media-body">
											<h6 class="my-2"><Link to="#">Fusce lobortis lorem at ipsum semper sagittis</Link></h6>
											<span class="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>
								</div>

								<div class="sidebar-widget bg-white rounded tags p-4 mb-3">
									<h5 class="mb-4">Tags</h5>

									<Link to="#">Web</Link>
									<Link to="#">agency</Link>
									<Link to="#">company</Link>
									<Link to="#">creative</Link>
									<Link to="#">html</Link>
									<Link to="#">Marketing</Link>
									<Link to="#">Social Media</Link>
									<Link to="#">Branding</Link>
								</div>
							</div>
						</div>
					</div>

					<div class="row mt-5">
						<div class="col-lg-8">
							<nav class="navigation pagination py-2 d-inline-block">
								<div class="nav-links">
									<Link class="prev page-numbers" to="#">Prev</Link>
									<span aria-current="page" class="page-numbers current">1</span>
									<Link class="page-numbers" to="#">2</Link>
									<Link class="next page-numbers" to="#">Next</Link>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Blogs