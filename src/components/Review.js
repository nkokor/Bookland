import ReviewSlider from "./ReviewSlider";
import '../style/Review.css';


function Reviews() {
  const renderReviews = (
    <section id='review-page'>
      <div className="container">
        <p className="section-title">WHAT OUR CUSTOMERS ARE SAYING</p>
        <ReviewSlider></ReviewSlider>
      </div>     
  </section>
  )

  return renderReviews
}

export default Reviews;