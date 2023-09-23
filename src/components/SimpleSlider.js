import React, { Component } from "react";
import Slider from "react-slick";
import '../style/slick.css';
import '../style/slick-theme.css';
import '../style/Review.css'
import reviews from "../data/reviews";
import Rating from "./Rating";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderSlider = (
      <div>
        <Slider {...settings}>
          {
            reviews.map((review) => (
              <div className="review-card swiper-slide text-center">
                <div className="profile">
                  <img className="user" src={review.userImage}></img>
                  <blockquote>{review.reviewComment}</blockquote>
                  <div className="rating-footer">
                    <div className='customer-info'>
                      <h3>{review.userName}</h3>
                      <p>{review.userRole}</p>
                    </div>
                    <Rating rating={review.rating}></Rating>
                  </div>
                </div>
              </div>
            ))
          }

        </Slider>
      </div>
    )
    return renderSlider
  }
}