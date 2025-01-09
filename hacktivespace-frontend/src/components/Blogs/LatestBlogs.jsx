import React from 'react'
import { Link } from 'react-router-dom'
import bt1 from '../../images/blog/bt-1.jpg'
import bt2 from '../../images/blog/bt-2.jpg'
import bt3 from '../../images/blog/bt-3.jpg'
const LatestBlogs = () => {
  return (
  <>
  	<div className="sidebar-widget latest-post card border-0 p-4 mb-3">
									<h5>Latest Posts</h5>

									<div className="media border-bottom py-3">
										<Link to="#"><img className="mr-4" src={bt3} alt="" /></Link>
										<div className="media-body">
											<h6 className="my-2"><Link to="#">Thoughtful living in los Angeles</Link></h6>
											<span className="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>

									<div className="media border-bottom py-3">
										<Link to="#"><img className="mr-4" src={bt2} alt="" /></Link>
										<div className="media-body">
											<h6 className="my-2"><Link to="#">Vivamus molestie gravida turpis.</Link></h6>
											<span className="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>

									<div className="media py-3">
										<Link to="#"><img className="mr-4" src={bt1} alt="" /></Link>
										<div className="media-body">
											<h6 className="my-2"><Link to="#">Fusce lobortis lorem at ipsum semper sagittis</Link></h6>
											<span className="text-sm text-muted">03 Mar 2018</span>
										</div>
									</div>
								</div>
  </>
  )
}

export default LatestBlogs