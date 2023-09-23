import reviews from "../data/reviews";
import '../style/Review.css';
import SimpleSlider from "./SimpleSlider";

function Reviews() {
  const renderReviews = (
    <section id='review-page'>
      <div className="container">
        <p className="section-title">What our customers are saying</p>
        <SimpleSlider></SimpleSlider>
    </div>
  </section>
  )
  return renderReviews
}

export default Reviews;