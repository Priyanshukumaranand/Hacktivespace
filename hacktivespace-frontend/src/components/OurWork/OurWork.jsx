import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanity';
import PodcastItem from './PodcastItem';

const OurWork = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "podcast"]{
          title,
          description,
          image{
            asset->{
              _id,
              url
            }
          },
          link,
          publishedAt
        }`
      )
      .then((data) => setPodcasts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Latest works</span>
                <h1 className="text-capitalize mb-4 text-lg">Our Projects</h1>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                  <li className="list-inline-item"><span className="text-white">/</span></li>
                  <li className="list-inline-item"><a href="#" className="text-white-50">Latest works</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section portfolio pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our works</span>
                <h2 className="mt-3 content-title ">We have done lots of works, lets check some</h2>
              </div>
            </div>
          </div>
        </div>

     
        {podcasts.map((podcast, index) => (
          <PodcastItem key={index} item={podcast} />
        ))}
   
      </section>
    </>
  );
};

export default OurWork;