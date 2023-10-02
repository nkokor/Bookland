import '../style/Review.css';
import ReviewSlider from "./ReviewSlider";

function Reviews() {
  const renderReviews = (
    <section id='review-page'>
      <div className="container">
        <p className="section-title">What our customers are saying</p>
        <ReviewSlider></ReviewSlider>
    </div>
  </section>
  )
  return renderReviews
}

export default Reviews;