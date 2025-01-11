import React from 'react';

const PodcastItem = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="portflio-item position-relative mb-4">
        <a href={item.link} >
          <img src={item.image.asset.url} alt={item.title} className="img-fluid w-100" />
          {/* <i className="ti-plus overlay-item"></i> */}
          <div className="portfolio-item-content">
            <h3 className="mb-0 text-white">{item.title}</h3>
            <p className="text-white-50">{item.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PodcastItem;