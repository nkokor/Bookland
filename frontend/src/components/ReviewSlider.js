import React, { Component } from "react";
import Slider from "react-slick";
import Rating from "./Rating";
import '../style/slick.css';
import '../style/slick-theme.css';
import '../style/Review.css'

export default class ReviewsSlider extends Component {
  render() {
    const { data } = this.props
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
            data.map((review) => (
              <div className="review-card swiper-slide text-center">
                <div className="profile">
                  <img className="user" src={review.userImage}></img>
                  <blockquote>{review.reviewComment}</blockquote>
                  <div className="rating-footer">
                    <div className='customer-info'>
                      <p className="name">{review.userName}</p>
                      <p>{review.userRole}</p>
                    </div>
                    <Rating rating={review.rating} divClass='rating' starClass='star'></Rating>
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