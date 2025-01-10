import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  return (
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        <img
          src={blog.mainImage.asset.url}
          alt={blog.mainImage.alt}
          className="img-fluid rounded"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Apply inline styles
        />
        <div className="blog-item-content bg-white p-4">
          <div className="blog-item-meta py-1 px-2">
            <span className="text-muted text-capitalize mr-3">
              <i className="ti-pencil-alt mr-2"></i>
              {blog.categories.map((category) => category.title).join(', ')}
            </span>
          </div>
          <h3 className="mt-3 mb-3">
            <Link to={`/blogs/${blog.slug.current}`}>{blog.title}</Link>
          </h3>
          <p className="mb-4">{blog.body[0].children[0].text}</p>
          <Link to={`/blogs/${blog.slug.current}`} className="btn btn-small btn-main btn-round-full">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;