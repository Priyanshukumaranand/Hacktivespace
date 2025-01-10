import React from 'react'
import { Link } from 'react-router-dom'
const BlogSlider = () => {
	return (
		<>
			<div className="row mt-5">
				<div className="col-lg-8">
					<nav className="navigation pagination py-2 d-inline-block">
						<div className="nav-links">
							<Link className="prev page-numbers" to="#">Prev</Link>
							<span aria-current="page" className="page-numbers current">1</span>
							<Link className="page-numbers" to="#">2</Link>
							<Link className="next page-numbers" to="#">Next</Link>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default BlogSlider