import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../lib/sanity';

const LatestBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(publishedAt desc)[0...3]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          publishedAt
        }`
      )
      .then((data) => setLatestBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
      <h5>Latest Posts</h5>
      {latestBlogs.map((blog) => (
        <div className="media border-bottom py-3" key={blog.slug.current}>
          <Link to={`/blogs/${blog.slug.current}`}>
            <img
              className="mr-4"
              src={blog.mainImage.asset.url}
              alt={blog.mainImage.alt}
              style={{ width: '64px', height: '64px', objectFit: 'cover' }} // Apply inline styles
            />
          </Link>
          <div className="media-body">
            <h6 className="my-2">
              <Link to={`/blogs/${blog.slug.current}`}>{blog.title}</Link>
            </h6>
            <span className="text-sm text-muted">{new Date(blog.publishedAt).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestBlogs;