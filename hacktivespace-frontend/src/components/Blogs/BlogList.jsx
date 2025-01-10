import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanity';

import BlogItem from './BlogItem';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
          title,
          slug,
          author->{
            name
          },
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          categories[]->{
            title
          },
          publishedAt,
          body
        }`
      )
      .then((data) => {
        console.log('Fetched blogs:', data);
        setBlogs(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Main blog */}
      <div className="col-lg-8">
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogItem key={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;