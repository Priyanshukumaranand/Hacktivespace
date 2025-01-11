import React from 'react';

const PeopleItem = ({ author }) => {
  if (!author) {
    return null; // Return null if author is not defined
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="team-item-wrap mb-5">
        <div className="team-item position-relative" style={{ height: '300px' }}>
          {author.image && author.image.asset && author.image.asset.url ? (
            <img
              src={author.image.asset.url}
              alt={author.name}
              className="img-fluid w-100"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              src="default-image-url.jpg"
              alt="Default"
              className="img-fluid w-100"
              style={{ height: '100%', objectFit: 'cover' }}
            /> // Fallback image
          )}
          <div className="team-img-hover" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ul className="team-social list-inline" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', gap: '10px' }}>
              {author.socialLinks && author.socialLinks.facebook && (
                <li className="list-inline-item">
                  <a href={author.socialLinks.facebook} className="facebook" style={{ color: '#fff' }}><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                </li>
              )}
              {author.socialLinks && author.socialLinks.twitter && (
                <li className="list-inline-item">
                  <a href={author.socialLinks.twitter} className="twitter" style={{ color: '#fff' }}><i className="fab fa-twitter" aria-hidden="true"></i></a>
                </li>
              )}
              {author.socialLinks && author.socialLinks.instagram && (
                <li className="list-inline-item">
                  <a href={author.socialLinks.instagram} className="instagram" style={{ color: '#fff' }}><i className="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
              )}
              {author.socialLinks && author.socialLinks.linkedin && (
                <li className="list-inline-item">
                  <a href={author.socialLinks.linkedin} className="linkedin" style={{ color: '#fff' }}><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="team-item-content" style={{ textAlign: 'center', padding: '10px' }}>
          <h4 className="mt-3 mb-0 text-capitalize">{author.name}</h4>
          {author.bio && author.bio.map((block, index) => (
            <p key={index}>{block.children.map(child => child.text).join(' ')}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;