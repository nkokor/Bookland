import '../style/slick.css';
import '../style/slick-theme.css';
import '../style/Review.css'
import { getRatingStars } from '../helpers';

function Rating(props) {
  return (
    <div className={props.divClass}>
    {
      getRatingStars(props.rating).map((star) => (
        <img className={props.starClass} src={star}></img>
      ))
    }
  </div>
  )
}

export default Rating