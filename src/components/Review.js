import reviews from "../data/reviews";
import '../style/Review.css';

function Reviews() {
  const renderReviews = (
    <div id='reviews'>
    {
      reviews.map((review) => (
         <div className="review-card">
            <div className="review-user-div">
              <img className="review-user-image" src={review.userImage}></img>
              <div className="user-info-div">
               <p className="review-username">{review.userName}</p>
               <p className="review-user-role">{review.userRole}</p>
              </div>
            </div>
            <p className="review-text">{review.reviewComment}</p>
            <div className="rating-star-div">
              <img className="review-rating-star" src='images/icons8-yellow-star-50.png'></img>
              <img className="review-rating-star" src='images/icons8-yellow-star-50.png'></img>
              <img className="review-rating-star" src='images/icons8-yellow-star-50.png'></img>
              <img className="review-rating-star" src='images/icons8-yellow-star-outline-50.png'></img>
              <img className="review-rating-star" src='images/icons8-yellow-star-outline-50.png'></img>
            </div>
         </div>
      ))
    }
  </div>
  )
  return renderReviews
}

export default Reviews;