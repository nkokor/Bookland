import React, { Component } from "react";
import '../style/slick.css';
import '../style/slick-theme.css';
import '../style/Review.css'

function Rating(props) {
  let rating = parseInt(props.rating)
  let stars = []
  for(let i = 0; i < 5; i++) {
    stars.push('images/icons/icons8-star-gold-outline.png')
  }
  for(let i = 0; i < rating; i++) {
    stars[i] ='images/icons/icons8-star-gold.png'
  }
  console.log(stars)
  return (
    <div className={props.divClass}>
    {
      stars.map((star) => (
        <img className={props.starClass} src={star}></img>
      ))
    }
  </div>
  )
}

export default Rating