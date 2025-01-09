// filepath: /c:/Users/priya/Projects/Hacktivspace/hacktivespace-frontend/src/components/Blogs/BlogList.jsx
import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanity';
import BlogItem from './BlogItem';
import Sidebar from './Sidebar';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          body
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <section className="section blog-wrap bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {blogs.map((blog, index) => (
                <BlogItem key={index} blog={blog} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;