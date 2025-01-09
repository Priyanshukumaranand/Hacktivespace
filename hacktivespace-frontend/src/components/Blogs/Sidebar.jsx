// filepath: /c:/Users/priya/Projects/Hacktivspace/hacktivespace-frontend/src/components/Blogs/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import blogAuthor from '../../images/blog/blog-author.jpg';
import LatestBlogs from './LatestBlogs';
import Tags from './Tags';
import Search from './Search';
const Sidebar = () => {
  return (
    <>
      {/* BLog user and latest post */}
      <div className="col-lg-4">
        <div className="sidebar-wrap">


          <Search />

          {/* User info */}
          <div className="sidebar-widget card border-0 mb-3">
            <img src={blogAuthor} alt="" className="img-fluid" />
            <div className="card-body p-4 text-center">
              <h5 className="mb-0 mt-4">Arther Conal</h5>
              <p>Digital Marketer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>

              <ul className="list-inline author-socials">
                <li className="list-inline-item mr-3">
                  <Link to="#"><i className="fab fa-facebook-f text-muted"></i></Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#"><i className="fab fa-twitter text-muted"></i></Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#"><i className="fab fa-linkedin-in text-muted"></i></Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#"><i className="fab fa-pinterest text-muted"></i></Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#"><i className="fab fa-behance text-muted"></i></Link>
                </li>
              </ul>
            </div>
          </div>

          <LatestBlogs />
          <Tags />
        </div>
      </div>

    </>
  );
};

export default Sidebar;