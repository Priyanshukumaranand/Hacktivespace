import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../lib/sanity';

const BlogAuthor = ({ author }) => {
  const [authorDetails, setAuthorDetails] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[name == $name]{
          name,
          image{
            asset->{
              _id,
              url
            }
          },
          bio,
          socialLinks
        }`,
        { name: author.name }
      )
      .then((data) => setAuthorDetails(data[0]))
      .catch(console.error);
  }, [author.name]);

  if (!authorDetails) return <div>Loading...</div>;

  return (
    <div className="sidebar-widget card border-0 mb-3">
      <img src={authorDetails.image?.asset?.url} alt={authorDetails.name} className="img-fluid" />
      <div className="card-body p-4 text-center">
        <h5 className="mb-0 mt-4">{authorDetails.name}</h5>
        <div>
          {authorDetails.bio && authorDetails.bio.map((block, index) => (
            <p key={index}>{block.children.map(child => child.text).join(' ')}</p>
          ))}
        </div>
        <ul className="list-inline author-socials">
          {authorDetails.socialLinks && authorDetails.socialLinks.facebook && (
            <li className="list-inline-item mr-3">
              <Link to={authorDetails.socialLinks.facebook}><i className="fab fa-facebook-f text-muted"></i></Link>
            </li>
          )}
          {authorDetails.socialLinks && authorDetails.socialLinks.twitter && (
            <li className="list-inline-item mr-3">
              <Link to={authorDetails.socialLinks.twitter}><i className="fab fa-twitter text-muted"></i></Link>
            </li>
          )}
          {authorDetails.socialLinks && authorDetails.socialLinks.linkedin && (
            <li className="list-inline-item mr-3">
              <Link to={authorDetails.socialLinks.linkedin}><i className="fab fa-linkedin-in text-muted"></i></Link>
            </li>
          )}
          {authorDetails.socialLinks && authorDetails.socialLinks.pinterest && (
            <li className="list-inline-item mr-3">
              <Link to={authorDetails.socialLinks.pinterest}><i className="fab fa-pinterest text-muted"></i></Link>
            </li>
          )}
          {authorDetails.socialLinks && authorDetails.socialLinks.behance && (
            <li className="list-inline-item mr-3">
              <Link to={authorDetails.socialLinks.behance}><i className="fab fa-behance text-muted"></i></Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogAuthor;