import reviews from "../data/reviews";
import '../style/Review.css';

function Reviews() {
  const renderReviews = (
    <section id="reviews">
      <div className="container">
        <p id='reviews-title'>What our customers are saying</p>
        <div className="row">

          <div className="review-card text-center">
            <div className="profile">
              <img className="user" src='images/user-images/anne.jpg'></img>
              <blockquote>A perfect place to buy books, meet new people and just have a hit cup of coffee after a long day.</blockquote>
              <div className="rating-footer">
                <div className='customer-info'>
                  <h3>Anne Klein</h3>
                  <p>Happy customer</p>
                </div>
                <div className="rating">
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-outline-50.png'></img>
                </div>
              </div>
           </div>
          </div>

          <div className="review-card text-center">
            <div className="profile">
              <img className="user" src='images/user-images/nick.jpg'></img>
              <blockquote>A perfect place to buy books, meet new people and just have a hit cup of coffee after a long day.</blockquote>
              <div className="rating-footer">
                <div className='customer-info'>
                  <h3>Nick Jones</h3>
                  <p>Happy customer</p>
                </div>
                <div className="rating">
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-outline-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-outline-50.png'></img>
                </div>
              </div>
           </div>
          </div>

          <div className="review-card text-center">
            <div className="profile">
              <img className="user" src='images/user-images/mary.jpg'></img>
              <blockquote>A perfect place to buy books, meet new people and just have a hit cup of coffee after a long day.</blockquote>
              <div className="rating-footer">
                <div className='customer-info'>
                  <h3>Mary Brown</h3>
                  <p>Happy customer</p>
                </div>
                <div className="rating">
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                  <img className='star' src='images/icons/icons8-star-50.png'></img>
                </div>
              </div>
           </div>
          </div>

        </div>
    </div>
  </section>
  )
  return renderReviews
}

export default Reviews;