import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="section testimonial bg-gray">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Clients testimonial</span>
					<h2 className="mt-3 content-title">Check what's our clients say about us</h2>
				</div>
			</div>
		</div>
	</div>

	<div className="container"></div>
  <div className="testimonial-wrap">
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color"></i>
          <div className="testimonial-item-content">
            <p className="testimonial-text">
              Quam maiores perspiciatis temporibus odio reiciendis error alias
              debitis atque consequuntur natus iusto recusandae numquam corrupti
              facilis blanditiis.
            </p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
              <p>Executive Director, Themefisher</p>
            </div>
          </div>
        </div>

        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color"></i>
          <div className="testimonial-item-content">
            <p className="testimonial-text">
              Consectetur adipisicing elit. Quam maiores perspiciatis temporibus
              odio reiciendis error alias debitis atque consequuntur natus iusto
              recusandae.
            </p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Mickel Hussy</h5>
              <p>Executive Director, Themefisher</p>
            </div>
          </div>
        </div>

        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color"></i>
          <div className="testimonial-item-content">
            <p className="testimonial-text">
              Quam maiores perspiciatis temporibus odio reiciendis error alias
              debitis atque consequuntur natus iusto recusandae numquam corrupti.
            </p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">James Watson</h5>
              <p>Executive Director, Themefisher</p>
            </div>
          </div>
        </div>

        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color"></i>
          <div className="testimonial-item-content">
            <p className="testimonial-text">
              Consectetur adipisicing elit. Quam maiores perspiciatis temporibus
              odio reiciendis error alias debitis atque consequuntur natus iusto
              recusandae.
            </p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Mickel Hussy</h5>
              <p>Executive Director, Themefisher</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </div>
</section>
  );
};

export default Reviews;