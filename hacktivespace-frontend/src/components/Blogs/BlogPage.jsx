// filepath: /C:/Users/priya/Projects/Hacktivspace/hacktivespace-frontend/src/components/Blogs/BlogPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../lib/sanity';
import { Link } from 'react-router-dom';
import LatestBlogs from './LatestBlogs';
import Tags from './Tags';
import BlogComments from './BlogComments';
import Search from './Search';
import BlogAuthor from './BlogAuthor';
import CommentForm from './CommentForm';

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          author->{
            name,
            image{
              asset->{
                _id,
                url
              }
            }
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
        }`,
        { slug }
      )
      .then((data) => setBlog(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">News details</span>
                <h1 className="text-capitalize mb-4 text-lg">{blog.title}</h1>
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="list-inline-item"><span className="text-white">/</span></li>
                  <li className="list-inline-item"><Link to="#" className="text-white-50">News details</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="single-blog-item">
                    <img
                      src={blog.mainImage.asset.url}
                      alt={blog.mainImage.alt}
                      className="img-fluid rounded"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Apply inline styles
                    />
                    <div className="blog-item-content bg-white p-5">
                      <div className="blog-item-meta bg-gray py-1 px-2">
                        <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>{blog.categories.map(category => category.title).join(', ')}</span>
                        <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
                        <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <h2 className="mt-3 mb-4">{blog.title}</h2>
                      <div className="lead mb-4">{blog.body.map(block => block.children.map(child => child.text).join(' ')).join('\n')}</div>
                      <div className="tag-option mt-5 clearfix">
                        <ul className="float-left list-inline">
                          <li>Tags:</li>
                          {blog.categories.map(category => (
                            <li key={category.title} className="list-inline-item"><Link to="#" rel="tag">{category.title}</Link></li>
                          ))}
                        </ul>
                        <ul className="float-right list-inline">
                          <li className="list-inline-item"> Share: </li>
                          <li className="list-inline-item"><Link to="#" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link></li>
                          <li className="list-inline-item"><Link to="#" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
                          <li className="list-inline-item"><Link to="#" target="_blank"><i className="fab fa-pinterest-p" aria-hidden="true"></i></Link></li>
                          <li className="list-inline-item"><Link to="#" target="_blank"><i className="fab fa-google-plus" aria-hidden="true"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogComments />
                <CommentForm />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-wrap">
                <Search />
                <BlogAuthor author={blog.author} />
                <LatestBlogs />
                <Tags tags={blog.categories} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;