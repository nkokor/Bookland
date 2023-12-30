import ReviewSlider from "./ReviewSlider";
import '../style/Review.css';
import React, { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/BooklandAPI/review');
        if (!response.ok) {
          throw new Error('response not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const renderReviews = (
    <section id='review-page'>
      <div className="container">
        <p className="section-title">WHAT OUR CUSTOMERS ARE SAYING</p>
        <ReviewSlider data={reviews}></ReviewSlider>
      </div>     
  </section>
  )

  return renderReviews
}

export default Reviews;